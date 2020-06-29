import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { observer } from "mobx-react";
import { storeLogin } from "stores/StoreLogin";
import { Link } from "react-router-dom";
import { validate } from "../handle/validateForm";

interface Props{

}

@observer
export default class Login extends React.Component<Props, any> {
  // active = this.props.active ? 'active' : ""
  getUser(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    storeLogin.user = {
      ...storeLogin.user,
      [name]: value,
    };
    validate(name, value, storeLogin.error);
    storeLogin.isvalid =
      storeLogin.error.username === "" && storeLogin.error.password === "";
  }
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { username, password } = storeLogin.user;
    const user = { username, password };
    // console.log(user);
    (async () => {
      try {
        const response = await axios({
          method: "POST",
          url: "https://api.chozoi.com/v1/auth/login",
          data: user,
        });
        console.log(response.data);
        localStorage.setItem("token", response.data.token)
      } catch (e) {
        console.log(e);
      }
    })();
  }

  render() {
    return (
      <Form className="formLogin" onSubmit={(e) => this.handleSubmit(e)}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            required
            type="text"
            name="username"
            placeholder="with a placeholder"
            onChange={(e) => this.getUser(e)}
          />
          <p style={{ fontSize: 12, color: "red" }}>
            {storeLogin.error.username}
          </p>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            required
            type="password"
            name="password"
            id="examplePassword"
            onChange={(e) => this.getUser(e)}
            placeholder="password placeholder"
          />
          <p style={{ fontSize: 12, color: "red" }}>
            {storeLogin.error.password}
          </p>
        </FormGroup>
        <Link className="forgot_pass text-right" to="/forget">
          Quên mật khẩu
        </Link>
        <br />
        <Button className="btn btn-success my-3" disabled={!storeLogin.isvalid}>
          Đăng nhập ngay
        </Button>
      </Form>
    );
  }
}
