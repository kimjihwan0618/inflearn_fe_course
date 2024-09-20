import { gql, useMutation, useQuery } from '@apollo/client';
import type {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from 'src/commons/types/generated/types';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: '특정게시글ID' },
  });

  const [likeBoard] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD);

  const onClickList = (): void => {
    likeBoard({
      variables: {
        boardId: '특정 게시글 ID',
      },
      optimisticResponse: {
        likeBoard: data?.fetchBoard.likeCount ?? 0 + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: '특정 게시글 ID' },
          data: {
            fetchBoard: {
              _id: ' 특정 게시글 ID',
              __typename: 'Board',
              likeCount: data?.likeBoard, // 좋아요 갯수(6)
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재카운트(좋아요):</div>
      <button onClick={onClickList}>좋아요 올리기!!</button>
    </>
  );
}
