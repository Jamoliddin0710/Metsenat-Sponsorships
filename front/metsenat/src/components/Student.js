import {
  faEdit,
  faLeftLong,
  faEye,
  faBroom,
  faSave,
  faPlus,
  faTrash,
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

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Homiylar tahrirlash
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HomiyWrapper>
          <div>
            <p className="mb-2 modTitle">F.I.Sh. (Familiya Ism Sharif)</p>
            <input
              type="text"
              placeholder="Abdullayev Abdulla Abdulla o’g’li"
              className="form-control inputPlus"
            />
          </div>
          <div>
            <p className="mb-2 modTitle">ajratilgan summa</p>
            <input
              type="number"
              placeholder="Summani kiriting"
              className="form-control inputPlus"
            />
          </div>
        </HomiyWrapper>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}>
          <FontAwesomeIcon icon={faTrash} className="me-2" />
          Homiyni o'chirish
        </Button>
        <Button onClick={props.onHide}>
          <FontAwesomeIcon icon={faSave} className="me-2" />
          Saqlash
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Homiy qo'shish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HomiyWrapper>
          <div>
            <p className="mb-2 modTitle">F.I.Sh. (Familiya Ism Sharif)</p>
            <input
              type="text"
              placeholder="Abdullayev Abdulla Abdulla o’g’li"
              className="form-control inputPlus"
            />
          </div>
          <div>
            <p className="mb-2 modTitle">ajratilgan summa</p>
            <input
              type="number"
              placeholder="Summani kiriting"
              className="form-control inputPlus"
            />
          </div>
        </HomiyWrapper>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Qo'shish
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
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
            <p className="mb-2 mt-4 modTitle">OTM</p>
            <select className="modInt custom-select " id="inputGroupSelect02">
              <option selected>Barchasi</option>
              <option value="1">Toshkent shahridagi INHA Universiteti</option>
              <option value="2">O’zbekiston milliy universiteti</option>
              <option value="3">Toshkent davlat texnika universiteti</option>
              <option value="4">
                Toshkent davlat iqtisodiyot universiteti
              </option>
              <option value="5">
                O’zbekiston davlat jahon tillari universiteti
              </option>
              <option value="6">
                Toshkent davlat sharqshunoslik instituti
              </option>
              <option value="7">Toshkent arxitektura-qurilish instituti</option>
              <option value="8">
                Toshkent to’qimachilik va нngil sanoat istituti
              </option>
              <option value="9">Toshkent avtomobil-yo’llari instituti</option>
              <option value="10">Toshkent moliya instituti</option>
            </select>
          </div>
          <div>
            <p className="mb-2 modTitle">Kontrakt miqdori</p>
            <input
              type="number"
              placeholder="1 000 000"
              className="form-control inputPlus"
            />
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

const Student = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <>
      <Header />
      <HeadWrapper>
        <div className="head">
          <Link to={"/homiylar"}>
            <p className="plusTitle d-flex">
              <FontAwesomeIcon icon={faLeftLong} className="me-2" />
              Ishmuhammedov Aziz Ishqobilovich{" "}
            </p>
          </Link>
        </div>
      </HeadWrapper>
      <HomiyWrapper>
        <div className="homiy">
          <div>
            <div className="quiz">
              <div className="d-flex justify-content-between">
                <p className="quizTitle">Talaba haqida</p>
                <button className="btn px-5" onClick={() => setModalShow(true)}>
                  <FontAwesomeIcon icon={faEdit} /> Tahrirlash
                </button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              <div className="blueBag w-25">
                <p className="m-0">Asosiy ma'lumotler</p>
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
              </div>
              <div className="blueBag ">
                <p className="m-0">O'qish joyi haqida ma'lumot</p>
              </div>
              <div className="d-flex">
                <div>
                  <div className="me-5">
                    <p className="quizBot m-0 mb-2">otm</p>
                    <p className="quizNum">
                      O’zbekiston davlat jahon tillari universiteti
                    </p>
                  </div>
                  <div className="me-5">
                    <p className="quizBot m-0 mb-2">ajratilgan summa</p>
                    <p className="quizNum">14 000 000 uzs</p>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="me-5">
                    <p className="quizBot m-0 mb-2">talabalar turi</p>
                    <p className="quizNum">Bakalavr</p>
                  </div>
                  <div className="me-5">
                    <p className="quizBot m-0 mb-2">Kontrakt miqdori</p>
                    <p className="quizNum">30 000 000 uzs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="quiz ">
              <div className="d-flex justify-content-between">
                <p className="quizTitle">Talabaga homiylar</p>
                <button
                  className="btn px-5"
                  onClick={() => setModalShow1(true)}
                >
                  <FontAwesomeIcon icon={faPlus} /> Homiy qo'shish
                </button>
                <MyVerticallyCenteredModal1
                  show={modalShow1}
                  onHide={() => setModalShow1(false)}
                />
              </div>
              <table className="table table-hover table-light mt-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">F.I.SH.</th>
                    <th scope="col">Ajratilingan summa</th>
                    <th scope="col">Amallar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Alimov Abror Xabibullayevich</td>
                    <td>
                      <p className="sum d-flex">
                        1 000 000<p className=" ms-2 val">UZS</p>
                      </p>
                    </td>
                    <td>
                      <button
                        className="btn px-3"
                        onClick={() => setModalShow2(true)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <MyVerticallyCenteredModal2
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Alimov Abror Xabibullayevich</td>
                    <td>
                      <p className="sum d-flex">
                        2 000 000<p className=" ms-2 val">UZS</p>
                      </p>
                    </td>
                    <td>
                      <button
                        className="btn px-3"
                        onClick={() => setModalShow2(true)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <MyVerticallyCenteredModal2
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img src={quizImg} alt="" />
          </div>
        </div>
      </HomiyWrapper>
    </>
  );
};

export default Student;
