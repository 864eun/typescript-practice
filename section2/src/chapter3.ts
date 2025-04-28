//객체
let user1:object = {
    id:1, name:'홍길동'
};

// 오브젝트로 타입을 선언하면 아래와 같이 점 표기법으로 객체 속성에 접근할 수 없다. -> 
// 단순이 이것이 객체임을 명시하는것, 속성까지 접근 불가
// user1.id;

//객체 리터럴 방식
let user2:{
    id:number; 
    name:string;
} = {
    id:1, name:'홍길동'
};

//위와 같이 표시해야 점 표기법으로 속성에 접근이 가능

//선택적 프로퍼티(Optional Property)
//아래와 같이 속성의 값을 선택적으로 입력하고 싶은 경우 "?"를 붙여준다 
let user3:{
    id?:number; 
    name:string;
} = {
    id:1, name:'홍길동'
};

user3 = {
    name:"김콩쥐"
};

//읽기전용 프로퍼티(Readonly Property)
//속성 값을 변경하지 못하게 해야하는 경우 "readonly"를 붙여 읽기 전용으로 변경할 수 있다.
let user4: {
    id?: number;
    readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
  } = {
    id: 1,
    name: "이정환",
  };
  
//   user4.name = "dskfd"; // 오류 발생

