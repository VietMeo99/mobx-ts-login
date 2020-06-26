// import { computed, observable } from "mobx";
// import { computed, observable } from "mobx-react";

// @observable active: boolean = true;
export class MobxStore {
  // @observable login: boolean = true;
  // @observable register: boolean = true;

  login: boolean;
  register: boolean;
  constructor() {
    this.login = true;
    this.register = true;
  }
  checkRegister() {
    this.login = false;
  }
  checkLogin() {
    console.log("checklogin");

    this.login = true;
  }
}

export default new MobxStore();
