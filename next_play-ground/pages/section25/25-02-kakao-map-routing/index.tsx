import Link from 'next/link';
import { useRouter } from 'next/router';

export default function KaKaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push('/section25/25-02-kakao-map-routing-moved');
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기!!!</button>

      {/* next에서 제공하는 a태그 이므로, SPA 활용 가능 + <a>를 써서 검색 최적화 */}
      <Link href="'/section25/25-02-kakao-map-routing-moved'">
        <a>페이지 이동하기!!!</a>
      </Link>
    </>
  );
}
