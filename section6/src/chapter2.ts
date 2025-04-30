//접근 제어자
//클래스의 특정 필드나 메서드에 접근할 수 있는 범위를 설정하는 기능
/*
public : 모든 범위에서 접근 가능
private : 클래스 내부에서만 접근 가능
proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
실습과 함께 3가지 접근 제어자를 살펴보겠습니다. 지난 시간에 만들어 두었던 
*/

//public
//필드의 접근 제어자를 지정하지 않으면 기본적으로 public 접근 제어자를 갖게 된다.

//Private
//특정 필드나 메서드의 접근 제어자를 private으로 설정하면 클래스 내부에서만 이 필드에 접근할 수 있다.

//proteced 
//클래스 외부에서는 접근이 안되지만 클래스 내부와 파생 클래스에서 접근이 가능
class Employee {
    // 필드
    name: string;      // 자동으로 public
    private age: number;  
    protected position: string;  // 자동으로 public
  
    // 생성자
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }
  
    // 메서드
    work() {
      console.log("일함");
    }
  }
  
  const employee = new Employee("이정환", 27, "devloper");

  class ExecutiveOfficer extends Employee {
    // 메서드
     func() {
       this.position; // protected -> 파생 클래스에서 접근 가능
     }
   }
  
  employee.name = "홍길동";
//   employee.age = 30; // 오류 ->  private으로 클래스 내에서만 접근 가능
//   employee.position = "디자이너"; //  protected -> 클래스 내부 혹은 파생 클래스에서 접근 가능