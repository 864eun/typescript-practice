//void
// 아무것도 반환하지 않음을 의미한다. 
function func2(): void {
    console.log("hello");
  }

//변수 타입으로도 지정할 수 있다, 단 void로 지정된 변수에는 undefined만 할당 가능하다.
let a: void;
a = undefined;

//다만 strictNullChecks옵션을 False로 설정하면 null 값도 담을 수 있다.

//never 타입
//불가능함을 의미한다. 어떠한 값도 반환할 수 없는 상황, 변수의 타입을 never로 지정한다면 어떤 타입의 값도 할당할 수 없다. 
function func3(): never {
    while (true) {}
  }

function func4(): never {
    throw new Error();
  }