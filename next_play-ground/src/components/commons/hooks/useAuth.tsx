import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { getAccessToken } from 'src/commons/lib/getAccessToken';
import { restoreAccessTokenLoadable } from 'src/commons/stores';

export const useAuth = (): void => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  // useEffect(() => {
  // 1. 로그인 체크 (refreshToken 이전)
  // if (localStorage.getItem("accessToken") === null) {
  //   alert("로그인 후 이용 가능합니다!!!");
  //   void router.push("/section23/23-05-login-check-hoc");
  // }
  // }, []);

  // 2. 로그인 체크 (refreshToken 이후) => 안좋음)  _app.tsx에 이어서 총 2번 요청
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken === undefined) {
  //       alert('로그인 후 이용 가능합니다!!!');
  //       void router.push('/section23/23-05-login-check-hoc');
  //     }
  //   });
  // }, []);

  // 3. 로그인 체크 (refreshToken 이후) => 좋음) 함수를 공유하므로 _app.tsx에 이어서 총 1번 호출
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert('로그인 후 이용 가능합니다!!!');
        void router.push('/section23/23-05-login-check-hoc');
      }
    });
  }, []);
};
