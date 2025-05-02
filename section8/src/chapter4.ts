//템플릿 리터럴 타입
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

//코드 중복 및 복잡
// type ColoredAnimal = `red-dog` | 'red-cat' | 'red-chicken' | 'black-dog' ... ;

// 코드 간결
type ColoredAnimal = `${Color}-${Animal}`;
