//인터페이스 선언 합치기
//타입 별칭은 동일 스코프 내에 중복된 이름으로 선언 불가
//인터 페이스는 가능

type Person = {
    name: string;
  };
  
//   type Person = { //오류 -> 동일 이름 불가
//     age: number;
//   };

// 인터페이스는 동일 이름 가능
//단, 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의한다면 오류가 발생
interface Person1 {
    name: string;
  }
  
  interface Person1 { 
    age: number;
    // name : number; //오류 발생 
  }

  const person: Person1 = {
    name: "이정환",
    age: 27,
  };
