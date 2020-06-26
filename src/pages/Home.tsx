import React, { useContext } from "react";
// import { MobxStore } from "../stores/MobxStore";
import { observer } from "mobx-react";
import Login from "components/Login";
import Register from "components/Register";
import { storeContext } from "context/formContext";

const Home = observer(() => {
  const context = useContext(storeContext);
  return (
    <div>
      Home
      <div className="form_login_signUp">
        <div className="tab_login_signUp d-flex">
          <div className="login active d-flex justify-content-center align-items-center">
            <p onClick={context?.login}>Đăng nhập</p>
          </div>
          <div className="signUp d-flex justify-content-center align-items-center">
            <p onClick={context?.register}>Đăng ký</p>
          </div>
        </div>
        <div className="title">
          <h3>
            Chào mừng bạn đến <span>Chozoi</span>!
          </h3>
        </div>
        <div>{context?.isLogin ? <Login /> : <Register />}</div>
      </div>
    </div>
  );
});

export default Home;

// @observer
// export default class Home extends Component<any, any> {
//   render() {
//     const { login, checkLogin, checkRegister } = this.props.store;
//     // console.log(checkLogin);

//     return (
//       <div>
//         Home
//         <div className="form_login_signUp">
//           <div className="tab_login_signUp">
//             <div className="login">
//               <p onClick={() => checkLogin}>Đăng nhập</p>
//             </div>
//             <div className="signUp">
//               <p onClick={() => checkRegister}>Đăng ký</p>
//             </div>
//           </div>
//           <div className="title">
//             <h3>
//               Chào mừng bạn đến <span>Chozoi</span>!
//             </h3>
//           </div>
//         </div>
//         <div>{login ? <Login /> : <Register />}</div>
//       </div>
//     );
//   }
// }
