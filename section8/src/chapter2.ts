//keyof & typeof 연산자
//1. keyof
interface Person {
  name: string;
  age: number;
  location: string; // 추가
}

//v1 -> 문제점 : Person 타입에 프로퍼티가 추가되면 수정이 필요하다.
function getPropertyKey1(person: Person, key: "name" | "age" | "location") {
  return person[key];
}

//v2 -> keyof Person을 사용해서 추가 수정이 필요없게 함
function getPropertyKey2(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "홍길동",
  age: 27,
  location: "서울",
};

//typeof
interface Person1 {
  name: string;
  age: number;
}

//Person의 키를 문자열로 받아서 유니언으로 만든다 -> Person1의 프로퍼티만 받는다.
function getPropertyKey(person: Person1, key: keyof typeof person) {
  return person[key];
}

const person2: Person1 = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name"); // "이정환"
getPropertyKey(person, "age"); // 27
