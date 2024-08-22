import { useState } from "react";
import { useForm } from "react-hook-form";
import { wrapAsync, wrapFormAsync } from "src/commons/lib/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "./02-after.validatino";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    console.log(data);
  };

  // 한줄일때는 괄호 필요 없음
  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자 : <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목 : <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용 : <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        GRAPHQL-API 요청하기
      </button>
    </form>
  );
}

/* 
  <button type="reset">지우자!!</button>
  <button type="submit">등록하자!!</button> // 기본값
*/
