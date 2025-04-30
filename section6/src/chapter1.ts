//클래스
class Employee {
  //필드
  name: string;
  age: number;
  position?: string;

  //생성자
  //생성자 함수에서 필드의 값들을 잘 초기화 해 준다면 필드 선언시의 초기값은 생략
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //매세드
  work() {
    console.log("일함");
  }
}

//클래스는 타입이다.
//객체에 타입 지정을 할 수 있다.
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

//상속
//클래스 상속 시 생성자에 super 메소드를 통해 부모 클래스의 생성자를 반드시! 호출헤야힌디.
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
