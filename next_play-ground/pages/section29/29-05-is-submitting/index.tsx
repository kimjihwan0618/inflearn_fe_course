import axios from 'axios';
import { useState } from 'react';

export default function ResetGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 게시글 등록하기 버튼이라고 가정!!
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true);

    const result = await axios.get('https://koreanjson.com/posts/1');
    console.log(result); //제대로된 결과 => {title: "...",}
    setIsSubmitting(false);
  };

  return (
    <button disabled={isSubmitting} onClick={onClickSync}>
      REST-API(동기) 요청하기
    </button>
  );
}
