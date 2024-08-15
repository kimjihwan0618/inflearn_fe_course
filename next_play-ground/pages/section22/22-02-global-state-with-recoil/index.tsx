import BoardWriter from 'src/components/units/22-global-state/BoardWriter.container';
import { useRecoilState } from 'recoil';
import { isEditState } from 'src/commons/stores';
import { useEffect } from 'react';

export default function GlobalStateWithRecoilPage(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <BoardWriter />;
}
