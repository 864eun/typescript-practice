//분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let c: StringNumberSwitch<number | string>; 
//c의 타입은  string | number 왜 ? -> 조건부 타입의 타입 변수에 Union 타입을 할당하면 분산적인 조건부 타입이 적용
//number가 적용되고 이후 string이 적용된다.

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
//1. Exclude<number, string>, Exclude<string, string>, Exclude<boolean, string>이 순서대로 적용
//2. 결과 : number | never | boolean -> never는 유니언으로 묶으면 사라진다 => number | boolean