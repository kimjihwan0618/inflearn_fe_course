import { gql, useQuery } from '@apollo/client';
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../src/commons/types/generated/types';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickBasket = (basket: IBoard) => () => {
    const baskets: IBoard[] = JSON.parse(localStorage.getItem('baskets') ?? '[]');
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert('이미 담으신 물품입니다 !!!');
    }
    baskets.push(basket);
    localStorage.setItem('baskets', JSON.stringify(baskets));
  };

  // 장바구니 페에지에서 가져올시 useEffect 에서 사용

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
    </div>
  );
}
