// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;

// undefined 타입
let unde1: undefined = undefined;

// null
let null1: null = null;
//만약 원시타입에 null 값을 사용해야할때는 strictNullChecks 옵션을 "false"로 설정한다. 

//리터럴타입 - 지정된 값 자체를 타입으로 만드는 것, 지정된 값 외의 값은 사용할 수 없다. 
let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;