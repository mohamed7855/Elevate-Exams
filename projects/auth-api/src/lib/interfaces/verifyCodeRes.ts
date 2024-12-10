export interface VerifyCodeRes extends VerifyCodeAPIRes {}

export interface VerifyCodeAPIRes {
  message: string;
  code: number;
}
