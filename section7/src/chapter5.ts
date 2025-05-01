//제네릭 클래스
// v1 -> 리턴하는 리스트의 타입마다 코드 반복, 비효율적
function exam1() {
  //숫자타입 리스트를 생성하는 클래스
  class NumberList {
    constructor(private list: number[]) {}

    push(data: number) {
      this.list.push(data);
    }

    pop() {
      return this.list.pop();
    }

    print() {
      console.log(this.list);
    }
  }

  const numberList = new NumberList([1, 2, 3]);

  //문자열 타입 리스트를 생성하는 클래스
  class StringList {
    constructor(private list: string[]) {}

    push(data: string) {
      this.list.push(data);
    }

    pop() {
      return this.list.pop();
    }

    print() {
      console.log(this.list);
    }
  }
  const numberList1 = new StringList(["1", "2", "3"]);
}

//v2 -> 제네릭 클래스를 사용하여 코드 반복 줄임
function exam2() {
  class List<T> {
    constructor(private list: T[]) {}
    push(data: T) {
      this.list.push(data);
    }

    pop() {
      return this.list.pop();
    }

    print() {
      console.log(this.list);
    }
  }
  const numberList = new List([1, 2, 3]);
  const stringList = new List(["1", "2"]);
}
