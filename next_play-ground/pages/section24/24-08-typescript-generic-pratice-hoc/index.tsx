import { useRouter } from 'next/router';
import type { ComponentType, ReactElement } from 'react';
import { useEffect } from 'react';
// prettier-ignore
export const loginCheck =
  (Component: () => JSX.Element) =>
  <P extends Record<string, unknown>>(props: P): ReactElement<P> => {
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem('accessToken') === null) {
        alert('로그인 후 이용 가능합니다!!!');
        void router.push('/section23/23-05-login-check-hoc');
      }
    }, []);

    return <Component {...props} />;
  };
