import { computed, observable } from "mobx";

export class MobxStore {
  @observable active = true;
  @computed get checkActive() {
    return !this.active;
  }
}
