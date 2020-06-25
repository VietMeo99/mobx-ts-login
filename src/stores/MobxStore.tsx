import { computed, observable } from "mobx";

// @observable active: boolean = true;
export class MobxStore {
  @observable login: boolean = true;
  @observable register: boolean = true;
  @computed get checkRegister() {
    if(this.login === true){
      return !this.login
    }
  }
  @computed get checkLogin() {
    if(this.login === false){
      return !this.login
    }
  }
}

export default new MobxStore();
