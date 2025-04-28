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

//선택적 값
//아래와 같이 속성의 값을 선택적으로 입력하고 싶은 경우 "?"를 붙여준다 
let user3:{
    id?:number; 
    name:string;
} = {
    id:1, name:'홍길동'
};

user3 = {
    name:"김콩쥐"
}
