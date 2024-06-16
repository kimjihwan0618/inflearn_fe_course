import { useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from './BoardWrite.queries';
import { useRouter } from 'next/router';

export default function BoardWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variabels 이게 $ 역할을 함
        writer,
        title,
        contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const variables = {
      number: Number(router.query.number)
    }
    if (title) variables.title = title;
    if (writer) variables.writer = writer;
    if (contents) variables.contents = contents;

    // 여기서 수정하기 하자!
    const result = await updateBoard({
      variables,
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data} //undefined 이거나, data 이거나 둘 중 하나
    />
  );
}
