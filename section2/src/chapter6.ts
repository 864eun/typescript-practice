//any 타입
// any 타입에는 어떤한 값도 들어갈 수 있다
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

//any 타입의 변수는 어느 변수에도 값으로 할당할 수 있다. 
//단, 오류를 발생시킬 수 있는 경우가 많아 사용은 자제하는 것이 좋다. 
// let anyVar1: any = 10;
// anyVar = "hello";

// let num: number = 10;
// num = anyVar1;

//unkwnon 타입
//any 타입과 같이 어느 타입의 값이나 저장할 수 있지만, 다른 변수의 값으로 할당하거나 메소드를 사용할 수 없다. 
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};


//변수의 값으로 할당 -> 오류발생 
// let num: number = 10;
// (...)

// let unknownVar: unknown;
// unknownVar = "";
// unknownVar = 1;
// unknownVar = () => {};

// num = unknownVar; // 오류 !

// 값으로 취급하여 연산 등을 하고 싶다면 데이터 정제를 통해 가능하다(if 문)
if (typeof unknownVar === "number") {
	// 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}