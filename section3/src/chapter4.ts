//타입 추론
//타입이 정의되어 있지 않은 변수의 타입을 자동으로 추론하는 것

//1.변수 선언
let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

//2. 구조 분해 할당
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

//3. 함수의 반환값
function func() {
  return "hello";
}
// 반환값이 string 타입으로 추론된다

//4. 기본값이 설정된 매개 변수
function func1(message = "hello") {
  return "hello";
}

//암시적 any타임 추론
// 변수를 선언할때 초기값을 생략하면 암시적인 any 타입으로 추론

let d;
// 암시적인 any 타입으로 추론

// const 상수의 추론
//상수는 초기화 때 설정한 값을 변경할 수 없기 때문에 특별히 가장 좁은 타입으로 추론
const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론
