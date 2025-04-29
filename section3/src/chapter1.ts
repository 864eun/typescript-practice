//unknown 타입
// 모든 계층 데이터 타입의 값을 가질 수 있다.
function unknownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = "hello"; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown
}

//never
//업 케스팅 가능 -> 다른 데이터 타입으로 선언된 다른 타입에 값으로 들어갈 수 있다.
//다운 케스팅 불가능 -> 어떤힌 타입로 never타입의 값으로 들어올 수 없다.
function neverExam() {
  function neverfun(): never {
    while (true) {}
  }

  let a1: number = neverfun(); // never -> number
  let b1: string = neverfun(); // never -> string
  let c1: boolean = neverfun(); // never -> boolean
  let d1: null = neverfun(); // never -> null
  let e1: undefined = neverfun(); // never -> undefined
  let f1: [] = neverfun(); // never -> Array
  let g1: {} = neverfun(); // never -> Object
}

//void
//void 타입은 undefinded의 상위 타입으로  undefinded의 값이 할당될 수 있다.
function voidExam() {
  function noReturnFuncA(): void {
    return undefined;
  }

  function noReturnFuncB(): void {
    return;
  }

  function noReturnFuncC(): void {}

  let voidVar: void;

  voidVar = undefined; // undefined -> void (ok)
}

//any
//모든 타입의 슈퍼타입이 될 수도 있고 서브 타입이 될 수도 있다.
//단, never타입이 any타입의 값이 될 수는 없다.
function anyExam() {
  let anyValue: any;

  let num: number = anyValue; // any -> number (다운 캐스트)
  let str: string = anyValue; // any -> string (다운 캐스트)
  let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

  anyValue = num; // number -> any (업 캐스트)
  anyValue = str; // string -> any (업 캐스트)
  anyValue = bool; // boolean -> any (업 캐스트)
}
