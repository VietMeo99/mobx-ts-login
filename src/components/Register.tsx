import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { observer } from "mobx-react";
import { storeLogin } from "stores/StoreLogin";
// import { Link } from "react-router-dom";
// import { ServerResponse } from "http";
import { validate } from "handle/validateForm";

interface Props{
  
}

@observer
export default class Register extends React.Component<Props, any> {
  getUser(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    storeLogin.user = {
      ...storeLogin.user,
      [name]: value,
    };
    validate(name, value, storeLogin.error);
    if (name === "confirm_password") {
      storeLogin.user.confirm_password !== storeLogin.user.password
        ? (storeLogin.error.confirm_password =
            "Mật khẩu và mật khẩu xác nhận không giống nhau")
        : (storeLogin.error.confirm_password = "");
    }
    storeLogin.isvalid =
      storeLogin.error.username === "" &&
      storeLogin.error.password === "" &&
      storeLogin.error.confirm_password === "";
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { username, password, name, confirm_password, recaptchaResponse } = storeLogin.user;
    const user = { username, password, name, confirm_password, recaptchaResponse };
    console.log(user);
    (async () => {
      try {
        const response = await axios({
          method: "POST",
          url: "https://api.chozoi.com/v1/auth/register",
          data: user,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    })();
  }

  render() {
    return (
      <Form className="formRegister" onSubmit={(e) => this.handleSubmit(e)}>
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
          <Label for="name">Name</Label>
          <Input
            required
            type="text"
            name="name"
            placeholder="with a placeholder"
            onChange={(e) => this.getUser(e)}
          />
          <p style={{ fontSize: 12, color: "red" }}>{storeLogin.error.name}</p>
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
        <FormGroup>
          <Label for="confirm_password">Confirm Password</Label>
          <Input
            required
            type="password"
            name="confirm_password"
            onChange={(e) => this.getUser(e)}
            placeholder="confirm_password placeholder"
          />
          <p style={{ fontSize: 12, color: "red" }}>
            {storeLogin.error.confirm_password}
          </p>
        </FormGroup>
        <FormGroup>
          <iframe
            src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Ldb6foUAAAAANXRBMbMqlZowbdhvcg1NBJGx7OG&co=aHR0cHM6Ly9kZXYuY2hvem9pLmNvbTo0NDM.&hl=vi&type=image&v=NMoy4HgGiLr5NAQaEQa2ho8X&theme=light&size=normal&badge=bottomright&cb=4wjvaplxjb4p"
            width={304}
            height={78}
            title="iframe"
            role="presentation"
            name="a-15g88047xd6e"
            frameBorder={0}
            scrolling="no"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
          />
        </FormGroup>
        <FormGroup>
          <textarea
            id="g-recaptcha-response"
            name="recaptchaResponse"
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
        </FormGroup>
        <Button className="btn btn-success my-3" disabled={!storeLogin.isvalid}>
          Đăng kí ngay
        </Button>
      </Form>
    );
  }
}
