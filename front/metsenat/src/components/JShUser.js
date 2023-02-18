import {
  faEdit,
  faLeftLong,
  faEye,
  faBroom,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../containers/Header";
import HeadWrapper from "../style/HeadWrapper";
import HomiyWrapper from "../style/HomiyWrapper";
import user from "../img/user.svg";
import quizImg from "../img/quizImg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Tahrirlash</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HomiyWrapper>
          <div className="d-flex userTah mt-2">
            <button className="btn jshah border-end-0">
              Jismoniy shaxs
            </button>
            <button className="btn yuridik border-start-0">
              Yuridik shaxs
            </button>
          </div>
          <div className="userTah mb-4">
            <div>
              <p className="mb-2 modTitle">F.I.Sh. (Familiya Ism Sharif)</p>
              <input
                type="text"
                placeholder="Abdullayev Abdulla Abdulla o’g’li"
                className="form-control inputPlus"
              />
            </div>
            <div>
              <p className="mb-2 modTitle">Telefon raqam</p>
              <input
                type="number"
                placeholder="+998 00 000-00-00"
                className="form-control inputPlus"
              />
            </div>
            <div>
              <p className="mb-2 modTitle">holati</p>

              <select className="modInt custom-select " id="inputGroupSelect02">
                <option selected>Barchasi</option>
                <option value="1">Yangi</option>
                <option value="2">Moderatsiyada</option>
                <option value="3">Tasdiqlangan</option>
                <option value="4">Bekor qilingan</option>
              </select>
            </div>
            <div>
              <p className="mb-2 modTitle">Homiylik summasi</p>
              <input
                type="number"
                placeholder="1 000 000"
                className="form-control inputPlus"
              />
            </div>
            <div>
              <p className="mb-2 modTitle">To'lov turi</p>

              <select className="modInt custom-select " id="inputGroupSelect02">
                <option selected>Pul o'tkazmalari</option>
                <option value="1">Karta</option>
                <option value="2">Naqd</option>
              </select>
            </div>
          </div>
        </HomiyWrapper>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          <FontAwesomeIcon icon={faSave} className="me-2" />
          Saqlash
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const JShUser = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Header />
      <HeadWrapper>
        <div className="head">
          <Link to={"/homiylar"}>
            <p className="plusTitle d-flex">
              <FontAwesomeIcon icon={faLeftLong} className="me-2" />
              Ishmuhammedov Aziz Ishqobilovich{" "}
              <p className="holati m-0 ms-3">Tasdiqlangan</p>
            </p>
          </Link>
        </div>
      </HeadWrapper>
      <HomiyWrapper>
        <div className="homiy">
          <div>
            <div className="quiz">
              <div className="d-flex justify-content-between">
                <p className="quizTitle">Homiy haqida</p>
                <button className="btn px-5" onClick={() => setModalShow(true)}>
                  <FontAwesomeIcon icon={faEdit} /> Tahrirlash
                </button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              <div className="d-flex align-items-center">
                <img src={user} alt="" />
                <p className="ms-3 userTitle">
                  Ishmuhammedov Aziz Ishqobilovich
                </p>
              </div>
              <div className="d-flex mt-4">
                <div className="me-5">
                  <p className="quizBot m-0 mb-2">telefon raqam</p>
                  <p className="quizNum">+998 99 973-72-60</p>
                </div>
                <div className="ms-5">
                  <p className="quizBot m-0 mb-2">Homiylik summasi</p>
                  <p className="quizNum">30 000 000 UZS</p>
                </div>
              </div>
            </div>
            <img src={quizImg} alt="" />
          </div>
        </div>
      </HomiyWrapper>
    </>
  );
};

export default JShUser;
