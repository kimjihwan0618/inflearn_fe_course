import { gql, useMutation, useQuery } from '@apollo/client';
import type { IQuery, IQueryFetchBoardsArgs } from '../../../src/commons/types/generated/types';
import { useState } from 'react';
import type { ChangeEvent, MouseEvent } from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  // const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickPage = (page: number): void => {
    // 검색에서 refetch 할 때, search 검색어가 refetch에 이미 저장되어 있는 상태이므로 추가로 search 포함하지 않아도 됨
    void refetch({ page });
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onchangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    // setSearch(event.currentTarget.value);
    getDebounce(event.currentTarget.value);
  };

  // const onClickSearch = (event: MouseEvent<HTMLButtonElement>): void => {
  //   refetch({ search, page: 1 });
  // };

  return (
    <div>
      검색어 입력 : <input type="text" onChange={onchangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: '10px' }}>
            {el.title
              .replaceAll(keyword, `!@#!@#${keyword}!@#!@#`)
              .split('!@#!@#')
              .map((el) => (
                <span key={uuidv4()} style={{ color: el === keyword ? 'red' : 'black' }}>
                  {el}
                </span>
              ))}
          </span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill('').map((_, index) => (
        <span key={index + 1} onClick={() => onClickPage(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
