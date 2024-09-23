import JestUnitTestPage from 'pages/section33/33-02-jest-unit-test';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('내가 원하는대로 그려지는지 테스트하기', () => {
  render(<JestUnitTestPage />);

  const myTedxt = screen.getByText('철수는 13살 입니다.');
  expect(myTedxt).toBeInTheDocument();

  const myTedxt2 = screen.getByText('철수의 취미 입력하기:');
  expect(myTedxt2).toBeInTheDocument();

  const myTedxt3 = screen.getByText('철수랑 놀러가기');
  expect(myTedxt3).toBeInTheDocument();
});
