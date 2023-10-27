export interface UserProps {
  email: string;
  password: string;
  nickName: string;
  job: number;
  interests: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface EmailCodeProps {
  email: string;
  code: string;
}
