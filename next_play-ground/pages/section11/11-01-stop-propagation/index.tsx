import { gql, useMutation, useQuery } from '@apollo/client';
import { MouseEvent } from 'react';

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  // const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
  //   alert(event.currentTarget.id + '님이 작성한 글입니다');
  // };

  const qqq1 = () => {
    alert('1번 클릭');
  };

  const qqq2 = () => {
    alert('2번 클릭');
  };

  const qqq3 = (event) => {
    event.stopPropagation();
    alert('3번 클릭');
  };

  const qqq4 = () => {
    alert('4번 클릭');
  };

  return (
    <div>
      {/* 특별한 이유가 없으면? Fragment로 감싸자 ! <div>는 1개 더 그려야되서 조금 느려짐 */}
      {/* 1. 프레그먼트란? <></>, <Fragment></Fragement> */}
      {/* 2. 프레그먼트에 key 입력하는 방법 ?<Fragment key={1}></Fragement> */}
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number} id={el.writer} onClick={qqq1}>
          {/* index는 게시글 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉, 유일하지 않음 */}
          <span onClick={qqq2}>
            <input type="checkbox" onClick={qqq3} />
          </span>
          <span style={{ margin: '10px' }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
