import React from "react";
import LoginWrapper from "../style/LoginWrapper";
import logo from "../img/metsenatclub.svg";
import recapt from "../img/reCAPTCHA.svg";
import Header from "../containers/Header";
import Head from "./Head";

const Login = () => {
  return (
    <LoginWrapper>
    <Header/>
    <Head />
      <div className="container w-25">
        <div className="logo">
          <img src={logo} alt="metsenat club" className="w-100 p-4" />
        </div>
        <div className="login mt-3 p-4">
          <p className="kirish">Kirish</p>
          <div>
            <p className="rubik">lOGIN</p>
            <input className="form-control int" placeholder="adm8904"></input>
          </div>
          <div>
            <p className="rubik">pAROL</p>
            <input className="form-control int" placeholder="*****"></input>
          </div>
          <div className="recapt d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <input
                class="form-check-input ms-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <p className="roboto">I’m not a robot</p>
            </div>
            <img src={recapt} alt="recapt" className="p-2" />
          </div>
          <button className="btn btn-primary w-100 mt-3">Kirish</button>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
