import { loginCheck } from "src/components/commons/hocs/loginCheck";
import { useAuth } from "src/components/commons/hooks/useAuth";

export default function CustomHooksUserAuthPage(): JSX.Element {
  useAuth();
  return <div>프로필 페이지입니다.</div>;
}
