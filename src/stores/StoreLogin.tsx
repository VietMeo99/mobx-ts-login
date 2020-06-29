import { observable } from "mobx";

export class StoreLogin {
  @observable user: user = {
    username: "",
    password: "",
    confirm_password: "",
    name: "",
    recaptchaResponse: "",
  };
  @observable error: user = {
    username: "",
    password: "",
    confirm_password: "",
    name: "",
    recaptchaResponse: "",
  };
  @observable isvalid: boolean = true;
}

export const storeLogin = new StoreLogin();
