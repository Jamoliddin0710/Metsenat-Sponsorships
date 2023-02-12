import {
  faBroom,
  faEye,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../containers/Header";
import BrandWrapper from "../style/BrandWrapper";
import HeadWrapper from "../style/HeadWrapper";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BrandWrapper>
          <div className="sec-1">
            <p className="mb-2 modTitle">Ariza holati</p>
            
              <select className="modInt custom-select " id="inputGroupSelect02">
                <option selected>Barchasi</option>
                <option value="1">Yangi</option>
                <option value="2">Moderatsiyada</option>
                <option value="3">Tasdiqlangan</option>
                <option value="4">Bekor qilingan</option>
              </select>
            
          </div>
          <div className="sec-2">
            <p className="mb-2 mt-4 modTitle">Homiylik summasi</p>
            <div className="row">
              <div className="col-3">
                <button className="btn">
                  <p className="m-0 butTitle">Barchasi</p>
                </button>
              </div>
              <div className="col-3">
                <button className="btn">
                  <p className="m-0 butTitle">
                    1 000 000 <p className="sum ms-1">UZS</p>
                  </p>
                </button>
              </div>
              <div className="col-3">
                <button className="btn">
                  <p className="m-0 butTitle">
                    5 000 000 <p className="sum ms-1">UZS</p>
                  </p>
                </button>
              </div>
              <div className="col-3">
                <button className="btn">
                  <p className="m-0 butTitle">
                    7 000 000 <p className="sum ms-1">UZS</p>
                  </p>
                </button>
              </div>
              <div className="col-3">
                <button className="btn">
                  <p className="m-0 butTitle">
                    10 000 000 <p className="sum ms-1">UZS</p>
                  </p>
                </button>
              </div>
              <div className="col-3">
                <button className="btn">
                  <p className="m-0 butTitle">
                    30 000 000 <p className="sum ms-1">UZS</p>
                  </p>
                </button>
              </div>
              <div className="col-3">
                <button className="btn">
                  <p className="m-0 butTitle">
                    50 000 000 <p className="sum ms-1">UZS</p>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </BrandWrapper>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          <FontAwesomeIcon icon={faBroom} className="me-2" />
          Tozalash
        </Button>
        <Button onClick={props.onHide}>
          <FontAwesomeIcon icon={faEye} className="me-2" />
          Natijalarni ko‘rish
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Homiylar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Header />
      <HeadWrapper>
        <div className="head d-flex justify-content-between">
          <div className="left">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
              />
              <label
                class="btn btn-outline-primary p-2 ps-5 pe-5"
                for="btnradio1"
              >
                <Link to={"/dashboard"}>Dashboard</Link>
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
                checked
              />
              <label
                class="btn btn-outline-primary p-2 ps-5 pe-5"
                for="btnradio2"
              >
                <Link to={"/homiylar"} className="headCh">
                  Homiylar
                </Link>
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
              />
              <label
                class="btn btn-outline-primary p-2 ps-5 pe-5"
                for="btnradio3"
              >
                <Link to={"/talabalar"}>Talabalar</Link>
              </label>
            </div>
          </div>
          <div className="right d-flex">
            <div class="input-group me-3 headDiv">
              <button type="button" class="btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <div class="form-outline d-flex align-items-center">
                <input
                  type="search"
                  id="form1"
                  class="form-control border-0 headInt"
                  placeholder="Izlash"
                />
              </div>
            </div>
            <button
              type="button"
              class="btn headBut d-flex align-items-center"
              onClick={() => setModalShow(true)}
            >
              <FontAwesomeIcon icon={faFilter} className="me-2" /> Filter
            </button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </HeadWrapper>
      <BrandWrapper>
        <div className="homiylar">
          <table className="table table-hover table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">F.I.SH.</th>
                <th scope="col">Tel.Raqami</th>
                <th scope="col">Homiylik summasi</th>
                <th scope="col">Sarflangan summa</th>
                <th scope="col">Sana</th>
                <th scope="col">Holati</th>
                <th scope="col">Amallar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Alimov Abror Xabibullayevich</td>
                <td>+99899 973-72-60</td>
                <td>
                  <p className="sum d-flex">
                    30 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>
                <td>
                  <p className="sum d-flex">
                    0<p className=" ms-2 val">UZS</p>
                  </p>
                </td>
                <td>15.01.2021</td>
                <td>
                  <p className="new">Yangi</p>
                </td>
                <td className="text-center">
                  <FontAwesomeIcon icon={faEye} />
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Saimov Rustam Saimjonovich</td>
                <td>+99899 973-72-60</td>
                <td>
                  <p className="sum d-flex">
                    1 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>

                <td>
                  <p className="sum d-flex">
                    0<p className=" ms-2 val">UZS</p>
                  </p>
                </td>
                <td>02.02.2021</td>
                <td>
                  <p className="moder">Moderatsiyada</p>
                </td>
                <td className="text-center">
                  <FontAwesomeIcon icon={faEye} />
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Sanginov Otabek Muratovich</td>
                <td>+99899 973-72-60</td>
                <td>
                  <p className="sum d-flex">
                    5 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>
                <td>
                  <p className="sum d-flex">
                    5 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>
                <td>20.04.2021</td>
                <td>
                  <p className="tasdiq">Tasdiqlangan</p>
                </td>
                <td className="text-center">
                  <FontAwesomeIcon icon={faEye} />
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Nazarov Sanjar Olimovich</td>
                <td>+99899 973-72-60</td>
                <td>
                  <p className="sum d-flex">
                    7 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>
                <td>
                  <p className="sum d-flex">
                    7 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>
                <td>03.05.2021</td>
                <td>
                  <p className="cancel">Bekor qilingan</p>
                </td>
                <td className="text-center">
                  <FontAwesomeIcon icon={faEye} />
                </td>
              </tr>
            </tbody>
          </table>
          {/* ------------- modal */}
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrandWrapper>
    </>
  );
};

export default Homiylar;
