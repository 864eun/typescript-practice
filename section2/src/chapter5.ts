// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// ADMIN에 10을 할당하고 아래 속성들에 값을 할당하지 않아도 자동으로 11,12로 할당된다. 
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
  }
  
  const user1 = {
    name: "이정환",
    role: Role.ADMIN, //관리자
  };
  
  const user2 = {
    name: "홍길동",
    role: Role.USER, // 회원
  };
  
  const user3 = {
    name: "아무개",
    role: Role.GUEST, // 게스트
  };
  

// ? 타입 스크립트에서 자바 스크립트로 번역될때 모든 타입 관련 코드는 삭제된다고 했는데, 속성의 값을 점 표시법으로 할당할 수 있는 방법은 ?
//-> enum 타입은 번역 시 자바스크립트로 함께 번역되어 전달된다. 