//인터페이스와 클래스
//클래스는 인터페이스를 구현할 수 있다.
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
  }
  
  class Character implements CharacterInterface {
    //생성자 -> 모든 필드를 구현해야한다.
    constructor(
      public name: string,
      public moveSpeed: number,
      private extra: string //추가 필드
    ) {}
  
    move(): void {
      console.log(`${this.moveSpeed} 속도로 이동!`);
    }
  }