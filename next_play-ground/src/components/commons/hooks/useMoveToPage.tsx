import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { vistedPageState } from "src/commons/stores";

interface IUseMoveToPageReturn {
  moveToPage: (path: string) => () => void;
  vistedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [vistedPage, setVisitedPage] = useRecoilState(vistedPageState);

  const moveToPage = (path: string) => () => {
    setVisitedPage(path); // 로그인 or 회원가입 페이지일때는 제외
    // localStorage.setItem("vistedPage", path) 로컬스토리지도 가능
    void router.push(path);
  };

  return {
    vistedPage,
    moveToPage,
  };
};
