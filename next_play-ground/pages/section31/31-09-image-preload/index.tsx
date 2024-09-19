import { useRouter } from 'next/router';
import { useEffect } from 'react';

const qqq = [];

export default function ImagePreloadPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push('/section31/31-09-image-preload-moved');
  };

  useEffect(() => {
    const img = new Image();
    img.src = '강아지.png'; // << 이미지 용량 높은걸로 테스트
    img.onload = () => {
      qqq.push(img);
    };
  }, []);

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
