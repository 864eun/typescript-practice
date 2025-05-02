//Partial<T> 유틸리티 타입
//프로퍼티를 선택적 프로퍼티로 변환
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

type Partial<T> = {
  [key in keyof T]?: T[key];
};

//Required<T> 유틸리티 타입
//프로퍼티를 강제성을 가지게 함
interface Post1 {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
  }

  const withThumbnailPost: Required<Post> = { //오류 -> 모든 프로퍼티가 존재해야한다. 
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    // thumbnailURL: "https://...",
  };

type Required<T> = {
    [key in keyof T]-?: T[key];
  };

  //Readonly<T> 유틸리티 타입
  interface Post2 {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
  }

  
const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글입니다.",
    tags: [],
    content: "",
  };
  
  readonlyPost.content = '해킹당함'; //오류 -> 수정 불가능 프로퍼티

  type Readonly<T> = {
    readonly [key in keyof T]: T[key];
  };