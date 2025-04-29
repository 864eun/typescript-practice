//사용자 정의 타입가드
type Dog = {
    name:string;
    isBark : boolean;
};

type Cat = {
    name :string;
    isScratch:boolean;
};

type Animal = Dog | Cat ;

//아래와 같이 "프로퍼티 in 타입"은 안전하지 않다. 
function warning(animal: Animal) {
    if ("isBark" in animal) {
      console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else if ("isScratch" in animal) {
      console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
  }

 

  // Dog 타입인지 확인하는 타입 가드
   //1.타입 단언(animal as Dog) = 매개 변수가 Dog 타입으로 가정 = 지금 이 animal이라는 값이 실제로는 Dog 타입이니까 그렇게 취급해줘
   //2. animal is Dog =이 함수가 true를 반환하면, animal은 Dog 타입으로 간주해도 된다 
function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
  }
  
  // Cat 타입인지 확인하는 타입가드
  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
  }
  
  function warning1(animal: Animal) {
    if (isDog(animal)) {
      console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else {
      console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
  }