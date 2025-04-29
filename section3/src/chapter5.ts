//타입 단언
// 변수 person은 Person 타입으로 정의 되었지만 초기화 할 때에는 빈 객체를 넣어두고 싶다
// -> 빈개객체는 person타입이 아님으로 오류발생, 이떄 값 as 타입
type Person = {
  name: string;
  age: number;
};

//   let person: Person = {}; // 오류
//   person.name = "";
//   person.age = 23;

let person = {} as Person; //빈객체를 타입단언하여 추후 값 할당
person.name = "";
person.age = 23;

//초과 프로퍼티 검사해도 사용 가능
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 다중 선언
// 본래 10은 숫자 타입이지만 중간에 unknown을 사용하여 string으로 선언
// -> 오류 발생 가능성 높아 사용 자제
let num3 = 10 as unknown as string;

//const 선언
//const 선언을 통해 모든 프로퍼티를 readonly로 선언할 수 있다.
let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

//Non Null 단언
//값 뒤에 느낌표(!) 를 붙여주면 이 값이 undefined이거나 null이 아닐것으로 선언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

//본래  author프로퍼티는 선택적 프로퍼티로 length과 같은 문자열 메소드를 사용할 수 없으나
// ! 단언을 통해서 스트링일 것을 알려줌으로 사용 가능
const len: number = post.author!.length;
