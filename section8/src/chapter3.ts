//맵드 타입
// 기존의 객체 타입을 기반으로 새로운 객체 타입을 반환
//가정 : 회원의 정보를 서버로 부터 받고 수정 후 다시 전달

interface User {
    id: number;
    name: string;
    age: number;
  }
  
  function fetchUser(): User {
    return {
      id: 1,
      name: "이정환",
      age: 27,
    };
  }

  function updateUser(user: User) {
    // ... 유저 정보 수정 기능
  }
//수정을 위해 선택적 프로퍼티를 만들어야하나 ? -> 코드 중복
//   type PartialUser = {
//     id?: number;
//     name?: string;
//     age?: number;
//   }

//맵드 타입으로 타입 선언
type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key];
  };

  