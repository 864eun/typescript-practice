//Pick<T, K>
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
  }

  const legacyPost: Pick<Post, "title" | "content"> = {
    title: "",
    content: "",
  }; //"title" | "content" 만 프로퍼티로 가지게 함

  type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
  };


  //Omit<T, K>
  const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
  }; //"title"프로퍼티 제외 프로퍼티들을 값으로 가지게 함

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  //1. Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL' , 'title>> 
  //2. Pick<Post, 'content' | 'tags' | 'thumbnailURL'>


  //Record<K, V>
  type Thumbnail = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
}

  type Thumbnail2 = Record<
  "large" | "medium" | "small",
  { url: string }
>;

type Record<K extends keyof any, V> = {
    [key in K]: V;
  };