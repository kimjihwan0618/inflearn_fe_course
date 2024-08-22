// 제공자
export function useState<S>(초기값: S): [S, (변경값: S) => void] {
  let state = 초기값;

  const setState = (변경값: S): void => {
    console.log(state);
    console.log(변경값);
  };

  return [state, setState];
}

//사용자
const [count, setCount] = useState(10);
