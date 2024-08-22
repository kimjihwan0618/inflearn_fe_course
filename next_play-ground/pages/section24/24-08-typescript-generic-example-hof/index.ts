// 1. HOF - 일반함수

function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first('영희')(8);

// 1. HOF - 일반함수

const first2 = <T>(arg1: T) => {
  return <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };
};

const result = first('영희')(8);

// 1. HOF - 일반함수

const loginCheck = <C>(Component: C) => {
  return <P>(props: P): [C, P] => {
    return [Component, props];
  };
};

const result = loginCheck('영희')(8);
