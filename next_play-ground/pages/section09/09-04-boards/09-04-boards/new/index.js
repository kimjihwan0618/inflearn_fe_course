import BoardWrite from '../../../../src/components/units/board/09-write2/BoardWrite.container';

export default function GraphqlMutationPage() {
  // 한줄일때는 괄호 필요 없음
  return <BoardWrite isEdit={false} />;
}
