//배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true];

// 두가지 이상 타입을 담고 있는 배열
let multiArr: (number|string)[] = [1, "hello"];

//다차원 배열
let doubleArr : number[][] = 
    [
    [1, 2, 3], 
    [4, 5],
    ];

//튜플 - 타입과 길이가 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

//튜플은 배열이기 때문에 아래의 메소드를 통해 요소를 추가 삭제할 수 있다. (오류 확인 안댐) 따라서 주의가 필요하다.
// tup1.push(1);
// tup1.push(1);
// tup1.push(1);
// tup1.push(1);