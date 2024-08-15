import ChildPage from './02-child';

export default function ParentPage(): JSX.Element {
  return (
    <>
      <ChildPage count={10}></ChildPage>
      {/* {ChildPage({ count: 30 })} */}
    </>
  );
}
