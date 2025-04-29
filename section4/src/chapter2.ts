//함수 타입 표현식
//함수 타입을 타입 별칭과 함께 별도로 정의할 수 있다.
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

//동일한 타입의 매개변수와 반환값을 가진 함수를 정의할때 편리하다.
type Operation = (a:number, b:number)=>number;

const add1: Operation = (a, b) => a + b; //const add1: (a: number, b: number) => number = (a, b) => a + b; 동일표현
const sub1: Operation = (a, b) => a - b;
const multiply1: Operation = (a, b) => a * b;
const divide1: Operation = (a, b) => a / b;

//호출 시그니처
// 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

//호출 시그니처에 프로퍼티를 정의하는 것도 가능하다. 이를 하이브리드 타입
type Operation3 = {
  (a: number, b: number): number;
  name: string;
};
const add3: Operation3 = (a, b) => a + b;
add3.name;
