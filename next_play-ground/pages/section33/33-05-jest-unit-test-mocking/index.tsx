import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [contents, setContents] = useState<string>();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수({
      variables: {
        // variabels 이게 $ 역할을 함
        createBoardInput: {
          writer,
          title,
          contents,
          password: '1234',
        },
      },
    });
    console.log(result);
    const boardId = result.data.createBoard._id;
    router.push(`/boards/${boardId}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.currentTarget.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.currentTarget.value);
  };

  return (
    <div>
      작성자 : <input role="input-writer" type="text" onChange={onChangeWriter} />
      제목 : <input role="input-title" type="text" onChange={onChangeTitle} />
      내용 : <input role="input-contents" type="text" onChange={onChangeContents} />
      <button role="submit-button" onClick={onClickSubmit}>
        GRAPHQL-API 요청하기
      </button>
    </div>
  );
}
