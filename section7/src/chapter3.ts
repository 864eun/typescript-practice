//map 메서드 정의하기
const arr = [1,2,3,4];
const newArr = arr.map((it)=>it*2);

//v1 -> 문제 : 입력값과 출력값의 타입이 같아야한다.
function map<T>(arr: T[], callback: (item: T) => T): T[] {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }

//   map(arr, (it) => it.toString()); // 오튜 -> 입력된 값과 출력값의 데이터 타입이 다름



//v2 -> 입력값과 출력값의 데이터 타입이 달라고 가능
function map2<T,U>(arr : T[], callback:(item:T)=>U):U[]{
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

map2(arr, (it) => it.toString());


//for each
function foreach<T>(arr:T[], callback:(item:T)=>T){
    for(let i = 0; i<arr.length; i++){
        callback(arr[i]);
    }
}


