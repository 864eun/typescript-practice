//대수 타입 - 여러개의 타입을 합성해서 만드는 타입
// 합집합 타입 - Union 타입
// "|" 통해 연결된 타입의 값은 모두 가능
let a: string | number;

a = 1;
a = "hello";

// 합집합 - 객체 타입
type Dog = {
    name: string;
    color: string;
  };
  
  type Person = {
    name: string;
    language: string;
  };
  
  type Union1 = Dog | Person;

  let union1: Union1 = { // ✅
    name: "",
    color: "",
  };
  
  let union2: Union1 = { // ✅
    name: "",
    language: "",
  };
  
  let union3: Union1 = { // ✅
    name: "",
    color: "",
    language: "",
  };  

// 아래와 같은 객체는 불가능 -> 두 객체 중 하나의 객체라도 프로퍼티를 모두 포함하고 있어야한다. 
// let union4: Union1 = { // ❌
//     name: "",
//   };

// 교집합 - Intersection 타입 
// number 타입과 string 타입은 서로 교집합을 공유하지 않는 서로소 집합 
// -> never 타입으로 추론된다
let variable: number & string; 

// 두 객체의 프로퍼티를 모두 포함해야만 한다. 
type Dog1 = {
    name: string;
    color: string;
  };
  
  type Person1 = {
    name: string;
    language: string;
  };
  
  type Intersection = Dog1 & Person1;
  
  let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
  };

