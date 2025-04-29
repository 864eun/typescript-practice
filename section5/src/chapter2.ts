//인터페이스 확장
// 하나의 인터페이스를 다른 인터페이스들이 상속받아 중복된 프로퍼티를 정의하지 않도록 도와주는 문법
interface Animal {
  name: string;
  color: string;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const cat: Cat = {
  name: "냥냥이",
  color: "brown",
  isScratch: true,
};

//인터페이스 재정의
//프로퍼티를 재 정의할 때 원본 타입을 A 재 정의된 타입을 B라고 하면 반드시 A가 B의 슈퍼 타입이 되도록 재정의 해야 한다.
//다운캐스팅 불가능
interface Dog extends Animal {
    name: "doldol"; // 타입 재 정의 문자열 -> 문자열 리터럴
    // name: number; //다른 타입으로 재정의 불가능
    breed: string;
  }

//타입 별칭 확장하기
//인터페이스로 인터페이스 뿐만 아니라 타입 별칭 객체도 확장할 수 있다.
type Animal1 = {
    name: string;
    color: string;
  };
  
  interface Dog1 extends Animal1 {
    breed: string;
  }

//다중 확장
interface DogCat extends Chicken, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isFly: true,
  isScratch: true,
};
