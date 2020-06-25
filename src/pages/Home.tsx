import React, { Component } from "react";
import MobxStore from "../stores/MobxStore";
import { observer, useLocalStore } from "mobx-react";
import Login from "components/Login";
import Register from "components/Register";

@observer
export default class Home extends Component {
  render() {
    const { login, register, checkLogin, checkRegister } = MobxStore;
    return (
      <div>
        Home
        <div className="form_login_signUp">
          <div className="tab_login_signUp">
            <div className="login">
              <p onClick={() => checkLogin}>Đăng nhập</p>
            </div>
            <div className="signUp">
              <p onClick={() => checkRegister}>Đăng ký</p>
            </div>
          </div>
          <div className="title">
            <h3>
              Chào mừng bạn đến <span>Chozoi</span>!
            </h3>
          </div>
        </div>

        <div>
          {login ? <Login /> : <Register />}
        </div>
      </div>
    );
  }
}
