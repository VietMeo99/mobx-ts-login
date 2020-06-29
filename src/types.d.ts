type user = {
  username: string;
  password: string;
  confirm_password: string;
  name: string;
  recaptchaResponse: string;
};

type validate = (name: string, value: string, storeError: any) => void

