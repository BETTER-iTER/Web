export interface UserProps {
  email: string;
  password: string;
  nickName: string;
  job: number;
  categories: string[]; // 관심카테고리
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface EmailCodeProps {
  email: string;
  code: string;
}
