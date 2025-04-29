//타입 별칭(Type Alias)
//객체 공통의 속성을 정의한 타입을 만들어 객테 타입으로 정의할 수 있다. 
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
  };
  
  let user: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
  };
  
  let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
  };

//인덱스 시그니처(Index Signature
//키와 값의 타입을 정의하여 속성들을 모두 명시할 필요가 없도록 하는 것
type CountryNumberCodes = {
    [key: string]: number;
  };

//만약 필수적으로 포함해야 할 값이 있다면 아래와 같이 정의할 수 있다.
type CountryNumberCodes1 = {
    [key: string]: number;
    Korea: number;
  };

//단 직접 추가한 속성의 value타입은 인덱스 시그니쳐 value타입과 일치하거나 호환이 가능해야한다.
//아래와 같이 인덱스 시그니쳐 value타입이 number인 경우 직접 추가한 속성의 value타입이 string이라면 오류 발생
// type CountryNumberCodes3 = {
//     [key: string]: number;
//     Korea: string; // 오류!
//   };