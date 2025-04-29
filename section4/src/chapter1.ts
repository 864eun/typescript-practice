//함수 타입 정의
//1. 함수에 직접 타입 정의하기
function func(a: number, b: number): number {
  return a + b;
}

//2. 화살표 타입 정의하기
const add = (a: number, b: number): number => a + b;

//매개변수 기본값 설정
function introduce(name: string = "홍길동") {
  console.log(`name : ${name}`);
}

//선택적 매개변수 타입
//1. 선택적 매개변수에 타입 설정 시 if문을 사용하여 타입 좁히기 설정을 해줘야한다.
//2. 선택적 매개변수는 필수 매개변수 앞에 올 수 없고 반드시 뒤에 위체해야한다.
function introduce1(name = "이정환", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

//나머지 매개변수
//매개 변수의 입력 갯수에 제한을 두고 싶지 않다면 rest배열의 형태로 받을 수 있다.
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
