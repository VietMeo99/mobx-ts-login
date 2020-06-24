import React from "react";
import { observer } from "mobx-react";
import { Form, Button } from "react-bootstrap";

interface store{
  
}
interface Props {
  store: any
}

@observer
export const Home: React.FC<Props> = ({active, checkActive}) => {

  return (
    <div className="form_login_signUp">
      <div className="tab_login_signUp">
        <div className="login">
          <p onClick={checkActive}>Đăng nhập</p>
        </div>
        <div className="signUp">
          <p onClick={checkActive}>Đăng ký</p>
        </div>
      </div>
      <div className="title">
        <h3>
          Chào mừng bạn đến <span>Chozoi</span>!
        </h3>
      </div>
      {
        active
        ?
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <p> quên mật khẩu</p>
          <Button variant="primary" type="submit" className="login_now">
            Đăng nhâp ngay
          </Button>
        </Form>
        :
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email address" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Xác thực pasword " />
          </Form.Group>
          <p> Bằng việc đăng kí bạn đã đồng ý với <a> Quy chế hoạt động</a> của Chozoi </p>
          <Button variant="primary" type="submit" className="login_now">
            Tạo tài khoản
          </Button>
        </Form>
      }
    </div>
  );
}
