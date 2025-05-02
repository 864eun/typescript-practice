//infer
//조건식 T extends () => infer R에서 infer R은 이 조건식을 참이 되도록 만들 수 있는 최적의 R 타입을 추론하라는 의미
type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;

type FuncB = () => number;

type A = ReturnType<FuncA>;
// string

type B = ReturnType<FuncB>;
// number

type C = ReturnType<number>;
// 조건식을 만족하는 R추론 불가능
// never

