import React, { Component } from "react";
import { observer } from "mobx-react";


interface Props{
  history: {
    push(url: string): void
  }
}

@observer
export default class ForgetPassword extends Component<Props, any> {
  comeBack(){
    this.props.history.push("/")
  }
  render() {
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Quên mật khẩu</h5>
            <button type="button" className="close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="confirm w-100">
              <label>
                Vui lòng nhập email hoặc số điện thoại của bạn đã đăng ký trên
                Chozoi!
              </label>
              <p id="error" className="error" />
              <input
                type="text"
                name="usernameForgetPass"
                placeholder="Điền số điện thoại / Email"
              />
              <p className="error pb-2" />
              <div>
                <div>
                  <div style={{ width: "304px", height: "78px" }}>
                    <textarea
                      id="g-recaptcha-response-1"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: "250px",
                        height: "40px",
                        border: "1px solid rgb(193, 193, 193)",
                        margin: "10px 25px",
                        padding: "0px",
                        resize: "none",
                        display: "none",
                      }}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <p className="error" />
            </div>
          </div>
          <div className="modal-footer">
            <button className="Back step-1" onClick={() => this.comeBack()}>Trở lại</button>
            <button className="Next step-1">Tiếp tục</button>
          </div>
        </div>
      </div>
    );
  }
}
