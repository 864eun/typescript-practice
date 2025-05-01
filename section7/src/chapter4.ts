//제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

//인덱스 시그니처
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

//타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

//사용예시
//v1 -> 추후 메소드가 늘어나면 타입 좁히기 코드 중복 가능성 있음.
function exam1() {
  interface Student {
    type: "student";
    school: string;
  }

  interface Developer {
    type: "developer";
    skill: string;
  }

  interface User {
    name: string;
    profile: Student | Developer;
  }

  function goToSchool(user: User) {
    if (user.profile.type !== "student") {
      console.log("잘 못 오셨습니다");
      return;
    }

    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
  }

  const developerUser: User = {
    name: "이정환",
    profile: {
      type: "developer",
      skill: "typescript",
    },
  };

  const studentUser: User = {
    name: "홍길동",
    profile: {
      type: "student",
      school: "가톨릭대학교",
    },
  };
}

//v2 -> user를 레네릭 인터페이스 선언
function exam2() {
  interface Student {
    type: "student";
    school: string;
  }

  interface Developer {
    type: "developer";
    skill: string;
  }

  interface User<T> {
    name: string;
    profile: T;
  }

  function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
  }

  const developerUser: User<Developer> = {
    name: "이정환",
    profile: {
      type: "developer",
      skill: "TypeScript",
    },
  };

  const studentUser: User<Student> = {
    name: "홍길동",
    profile: {
      type: "student",
      school: "가톨릭대학교",
    },
  };
}
