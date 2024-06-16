import { gql, useQuery } from '@apollo/client';
import BoardWrite from '../../../../../src/components/units/board/09-write2/BoardWrite.container';
import { useRouter } from 'next/router';

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });
  // 한줄일때는 괄호 필요 없음
  return <BoardWrite isEdit={true} data={data} />;
}
