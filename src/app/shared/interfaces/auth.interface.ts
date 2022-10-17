export interface IAuthLogin {
  accessToken: string;
  email: string;
  expiresIn: string;
  firstName: string;
  lastName: string;
}

export interface IFormData {
  email: string;
  password: string;
}
