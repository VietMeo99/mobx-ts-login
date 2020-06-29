import React, { Component} from "react";
import { observer } from "mobx-react";
import Login from "components/Login";
import Register from "components/Register";
// import { storeContext } from "context/formContext";
import { store } from "../stores/MobxStore";

interface Props{

}

@observer
export default class Home extends Component<Props, any> {
  render() {
    const activeLogin = store.login ? "active" : ""
    const activeRegister = store.login ? "" : "active"
    return (
      <div className="container">
        Home
        <div className="form_login_signUp">
          <div className="tab_login_signUp d-flex">
            <div className={`login ${activeLogin} d-flex justify-content-center align-items-center`}>
              <p onClick={() => store.login = true}>Đăng nhập</p>
            </div>
            <div className={`signUp ${activeRegister} d-flex justify-content-center align-items-center`}>
              <p onClick={() => store.login = false}>Đăng ký</p>
            </div>
          </div>
          <div className="title">
            <h3>
              Chào mừng bạn đến <span>Chozoi</span>!
            </h3>
          </div>
          <div>{store.login ? <Login/> : <Register />}</div>
        </div>
      </div>
    );
  }
}



// const Home = observer(() => {
//   const context = useContext(storeContext);
//   return (
//     <div>
//       Home
//       <div className="form_login_signUp">
//         <div className="tab_login_signUp d-flex">
//           <div className="login active d-flex justify-content-center align-items-center">
//             <p onClick={context?.login}>Đăng nhập</p>
//           </div>
//           <div className="signUp d-flex justify-content-center align-items-center">
//             <p onClick={context?.register}>Đăng ký</p>
//           </div>
//         </div>
//         <div className="title">
//           <h3>
//             Chào mừng bạn đến <span>Chozoi</span>!
//           </h3>
//         </div>
//         <div>{context?.isLogin ? <Login /> : <Register />}</div>
//       </div>
//     </div>
//   );
// });

// export default Home;
