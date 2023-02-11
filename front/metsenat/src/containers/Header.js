import React from "react";
import logoPro from "../img/metsenatPro.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeaderWrapper from "../style/HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="head d-flex justify-content-between align-items-center bg-secondary">
        <div className="logo">
          <img src={logoPro} alt="metsenat pro" />
        </div>
        <div className="rigth d-flex">
          <div className="profile">
            <p className="m-0 ms-3">Name</p>
            <div className="user">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="exit ms-3">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
