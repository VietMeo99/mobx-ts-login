import { computed, observable } from "mobx";

export class MobxStore {
  @observable login: boolean = true;

  checkRegister() {
    this.login = false;
  }
  checkLogin() {
    this.login = true;
  }
  @computed get action(){
    return this.login
  }

   @observable count = 0;

  //  giống excel thay đổi kết quả của ô nhớ theo các biến thay đổi , 0+ 2, 1+2, 2+2, 3+2 
  @computed get getResult() {
    return this.count + 2;
  }
}

export default new MobxStore();
export const store =  new MobxStore();
