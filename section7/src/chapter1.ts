//제네릭 함수
//모든 타입의 값을 다 적용할 수 있는 함수
function func<T>(value:T):T{
    return value;
}

let num = func(10); //넘버타입
let string = func("hi"); // 문자열

//나입 변수에 할당힐 타입 직접 명시 가능
//각괄호 사이에 태입을 직접 명시
let arr = func<[number, number, number]>([1, 2, 3]);
