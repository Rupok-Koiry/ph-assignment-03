export type TSignInUser = {
  email: string;
  password: string;
};

export type TSignUpUser = {
  email: string;
  password: string;
  name: string;
  role: 'user' | 'admin';
  phone: string;
  address: string;
};
