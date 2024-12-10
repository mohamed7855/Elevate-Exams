export interface ResetPasswordRes extends ResetPasswordAPIRes {}

export interface ResetPasswordAPIRes {
  message: string;
  token: string;
}
