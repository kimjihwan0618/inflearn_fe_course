import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div> ++++++++빨간 +++++++++++파란 ++++++++++++초록</div>
      <Example school="다람쥐초등학교">
        {/* 쏙들어가기! 땡겨오기*/}
        <div>
          <input type="text" />
          <div>저는 철수입니다.</div>
          <div>클릭해주세요.</div>
        </div>
      </Example>
      <div> ++++++++빨간 +++++++++++파란 ++++++++++++초록</div>
    </div>
  );
}
