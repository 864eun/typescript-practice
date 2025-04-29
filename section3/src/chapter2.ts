//객체 호환성
//객체 타입 간에는 속성 정의에 따라 슈퍼 타입과 서브 타입이 정해진다.

type Animal = {
    name: string;
    color: string;
  };
  
  type Dog = {
    name: string;
    color: string;
    breed: string;
  };
  
  let animal: Animal = {
    name: "기린",
    color: "yellow",
  };
  
  let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
  };
  
  animal = dog; //가능
//   dog = animal; //오류