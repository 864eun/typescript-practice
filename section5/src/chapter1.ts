//인터페이스
//타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법
//선택적 프로퍼티, 읽기 전용 프로퍼티 사용 가능
interface Person {
    readonly name: string;
    age?: number;
  }

const person:Person={
    name : "홍길동",
    age: 29,
};

//메서드 타입을 정의하는 것도 가능
//1. 함수 타입 표현식
interface Person1 {
    readonly name: string;
    age?: number;
    sayHi : () => void;
  }

// 호출 시그니처
interface Person2 {
    readonly name: string;
    age?: number;
    sayHi():void;
  }

//메서드 오버로딩도 가능, 단 호출 시그니처만 가능
interface Person3 {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a:number):void;
    sayHi(a:number,b:number,c:number):void;
  }

//하이브리드 타입(함수이자 일반 객체)도 가능
interface Func2 {
    (a: number): string;
    b: boolean;
  }
  
  const func: Func2 = (a) => "hello"; // 함수
  func.b = true; //객체

