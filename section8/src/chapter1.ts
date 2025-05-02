//인덱스드 엑세스 타입
//1. 객체 프로퍼티의 타입 추출하기
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number; // 추가
  };
}

//인터페이스[프로퍼티] -> 타입으로 부터 프로퍼티 추출
//Post["author"]['id']와 같이 중첩도 가능하다
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

//2. 배열 요소의 타입 추출하기.
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

//PostList 배열 타입으로부터 요소의 타입을 추출
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

//3. 튜플의 요소 타입 추출하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number];
// number | string | boolean
