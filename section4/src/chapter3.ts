//함수 타입 호환성
//특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것
//2가지 기준 -> 1. 두 함수의 반환값 타입이 호환되는가?, 2. 두 함수의 매개변수의 타입이 호환되는가?

//1.두 함수의 반환값 타입이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // b의 반환타입 넘버 리터럴은 a의 반환타입 number의 서브타입으로 호환이 가능하다.
// b = a; // a의 반환타입 number은  b의 반환타입 넘버 리터럴의 슈퍼타입으로 호환이 불가능하다.

//2. 두 함수의 매개변수의 타입이 호환되는가?
//2-1 매개변수 개수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

d = c; 
// d = c를 했을 때, 형식상 d는 오직 10만 받을 수 있는 함수처럼 보이지만, 실제로는 c가 모든 number를 받을 수 있는 함수이기 때문에,
// 결국 d도 10 외의 값도 받을 수 있게 된다. 그냥 number 받는 함수가 된 것.

// c = d; // c(5) 같은 호출을 하면 d(5)가 되는데,이는 d()에서 불가능. -> 매개변수에서는 업캐스팅만 가능하다. 

//2-2 매개변수 개수가 다를 떄
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌




