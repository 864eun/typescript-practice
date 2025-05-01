//제네릭 함수 - 타입 변수 2개 경우
function swap<T,C>(a: T, b:C){
    return [b,a];
}

const [a, b] = swap(2, "1");

//제네릭 함수 - 다양한 배열 타입
function returnFristValue<T>(data : T[]){
    return data[0];
}

let num = returnFristValue([0,1,2]);

let str = returnFristValue([1,"hello", "myname"]);

//제네릭 함수 - 배열 반환값을 특정 타입으로
function getFirstValueType<T>(data : [T, ...unknown[]]){
    return data[0];
}

let str1 = getFirstValueType([1, "hello", "mynameis"]);

//제네릭 함수 - 입력 값 타입 제한
// length: number 프로퍼티를 포함하고 있는 T만 가능
function getLength<T extends { length: number }>(data: T) {
    return data.length;
  }
  
  getLength("123");            // ✅
  
  getLength([1, 2, 3]);        // ✅
  
  getLength({ length: 1 });    // ✅
  
//   getLength(undefined);     // 오류 -> length 프로퍼티 안가짐
  
//   getLength(null);          // 오류 -> length 프로퍼티 안가짐