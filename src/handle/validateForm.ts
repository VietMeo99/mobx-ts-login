// import { useHistory } from "react-router-dom";


export const validate: validate = (name, value, storeError) => {
  if (name === "username") {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    const check = regex.test(value) || vnf_regex.test(value) ? false : true;
    // if (!regex.test(value) || !vnf_regex.test(value)) {
    if (check) {
      storeError.username =
        "Tài khoản phải là Email hoặc số điện thoại (Sđt gồm 10 số)";
    } else {
      storeError.username = "";
    }
  }
  if (name === "password") {
    if (value.trim().length < 6) {
      storeError.password = "mật khẩu dài hơn 6 kí tự";
    } else {
      storeError.password = "";
    }
  }
  // if (name === "confirmPassword") {
  //   if (value.trim().length < 6) {
  //     storeError.confirmPassword = "mật khẩu dài hơn 6 kí tự";
  //   }
  //   else {
  //     storeError.confirmPassword = "";
  //   }
  // }
}
// useHistory().push("/")