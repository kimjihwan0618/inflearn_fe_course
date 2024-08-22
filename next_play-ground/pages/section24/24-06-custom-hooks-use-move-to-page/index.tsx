import { useRouter } from "next/router";
import { useMoveToPage } from "src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUserAuthPage(): JSX.Element {
  const { moveToPage } = useMoveToPage();

  return (
    <>
      <button onClick={moveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={moveToPage("/markets")}>마켓으로 이동</button>
      <button onClick={moveToPage("/mypages")}>마이페이지로 이동</button>
    </>
  );
}
