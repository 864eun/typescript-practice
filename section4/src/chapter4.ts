//함수 오버로딩
// 1. 버전별 오버로드 시그니쳐만들기
function func(a:number):void;
function func(a:number, b:number, c:number):void;

//2. 구현 시그니쳐 = 실제로 함수가 어떻게 실행될 것인지를 정의하는 부분
// 매개 변수가 더 많은 버전에 맞춰서 작성하고 선탠적 매개변수 처리 후 if문을 통해서 타입 좁히기를 해준다.
function func(a:number, b?:number, c?:number){
    if(typeof b==="number"&&typeof c==="number"){
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

func(1);        // ✅ 버전 1 - 오버로드 시그니쳐
func(1, 2, 3);  // ✅ 버전 3 - 오버로드 시그니쳐