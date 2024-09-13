import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from 'src/commons/stores';
import { onError } from '@apollo/client/link/error';
import { getAccessToken } from 'src/commons/lib/getAccessToken';

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 프리렌더링 예제 1
  // if (process.browser) {
  // if(typeof window !== "undefined") // 프리렌더링 예제 2
  // const result = localStorage.getItem('accessToken');
  // setAccessToken(result ?? '');
  // } else {
  // console.log('지금은 프론트엔드 서버다.');
  // }

  // 프리렌더링 예제 3
  useEffect(() => {
    const result = localStorage.getItem('accessToken');
    setAccessToken(result ?? '');
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== 'undefined') {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err?.extensions?.code === 'UNAUTHENTICATED') {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? '');
              // 3. 재발급 받은 accessToken으로 방급 실패한 쿼리 재요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization : Bearer asdasc.. => 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: 'https://backend-practice.codebootcamp.co.kr/graphql',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
