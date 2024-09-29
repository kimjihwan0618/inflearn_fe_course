// 제공자일때 => 네이버, 다음, 쿠팡
import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any) {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: '상품ID' },
  });

  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="og:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다!(여기는 Body입니다.)</div>
    </>
  );
}

// 1. getServerSideProps는 존재하는 단어이므로 변경 불가능
// 2. 여기는 서버에서만 실행됨(프론트엔드 서버 프로그램 => webpack 서버프로그램)
// * 서버사이드 렌더링 페이지는 out 폴더로 생성 불가
//                                                 =>  이런 경우, next.config.js에서 exportPathMap으로 현재 페이지 제외시키기
const getServerSideProps = async (): Promise<any> => {
  console.log('여기는 서버입니다.');

  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient('https://backend-practice.codebootcamp.co.kr/graphql');
  const result = await graphQLClient.request(FETCH_USEDITEM, {
    useditemId: '상품 ID',
  });

  // 2. 받은 결과물 return
  return {
    props: {
      qqq: {
        name: result?.fetchUseditem.name,
        remarks: result?.fetchUseditem.remarks,
        images: result?.fetchUseditem.images,
      },
    },
  };
};
