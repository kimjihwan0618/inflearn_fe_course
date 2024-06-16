export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입 : 속성을 모두 옵션값으로
type aaa = Partial<IProfile>;

// 2. Reauired 타입 : 속성을 모두 필수값으로
type bbb = Required<IProfile>;

// 3. Pick 타입 : 속성중 원하는 속성만 재구성
type ccc = Pick<IProfile, 'name' | 'age'>;

// 4. Omit 타입 : 특정 속성 제거 후 재구성
type ddd = Omit<IProfile, 'school'>;

// 5. Record 타입
type eee = '철수' | '영희' | '훈이'; // Union 타입
let child: eee = '철수'; // 철수, 영희, 훈이만 됨
let child2: string = '사과'; //철수, 영희, 훈이, 사과, 바나나 다 됨

type fff = Record<eee, IProfile>; // Record 타입

// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myprofile: ggg = 'hobby';

// 7. type vs interface 차이 => interface는 선언 병합 가능
export interface IProfile {
  candy: number; // 선언병합으로 추가됨
}

// 8. 배운것 응용
let profile: Partial<IProfile> = {
  candy: 10,
};
