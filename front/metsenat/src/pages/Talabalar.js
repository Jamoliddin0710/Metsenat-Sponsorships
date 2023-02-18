import React from "react";
import HeadWrapper from "../style/HeadWrapper";
import { Link } from "react-router-dom";
import Header from "../containers/Header";
import {
  faBroom,
  faEye,
  faFilter,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import BrandWrapper from "../style/BrandWrapper";
import StudentsWrapper from "../style/StudentsWrapper";

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
            <p className="mb-2 modTitle">Talabalik turi</p>

            <select className="modInt custom-select " id="inputGroupSelect02">
              <option selected>Barchasi</option>
              <option value="1">Magistr</option>
              <option value="2">Bakalavr</option>
            </select>
          </div>
          <div className="sec-1">
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

const Talabalar = () => {
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
              />
              <label
                class="btn btn-outline-primary p-2 ps-5 pe-5"
                for="btnradio2"
              >
                <Link to={"/homiylar"}>Homiylar</Link>
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
                checked
              />
              <label
                class="btn btn-outline-primary p-2 ps-5 pe-5"
                for="btnradio3"
              >
                <Link to={"/talabalar"} className="headCh">
                  Talabalar
                </Link>
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
      <StudentsWrapper>
        <div className="talabalar">
          <div className="d-flex justify-content-end mb-4">
            <Link to={"/plus"}>
              <button className="btn btn-primary">
                <FontAwesomeIcon icon={faPlus} className="me-2" /> Talaba
                qo‘shish
              </button>
            </Link>
          </div>
          <table className="table table-hover table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">F.I.SH.</th>
                <th scope="col">Talabalik turi</th>
                <th scope="col">OTM</th>
                <th scope="col">Ajratilingan summa</th>
                <th scope="col">Kontrakt miqdori</th>
                <th scope="col">Amallar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Alimov Abror Xabibullayevich</td>
                <td>Bakalavr</td>
                <td>Toshkent shahridagi INHA Universiteti</td>
                <td>
                  <p className="sum d-flex">
                    14 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>
                <td>
                  <p className="sum d-flex">
                    30 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>

                <td className="text-center">
                  <Link to={"/talaba"}>
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Saimov Rustam Saimjonovich</td>
                <td>Magistr</td>
                <td>O’zbekiston milliy universiteti</td>
                <td>
                  <p className="sum d-flex">
                    28 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>

                <td>
                  <p className="sum d-flex">
                    28 000 000<p className=" ms-2 val">UZS</p>
                  </p>
                </td>
                <td className="text-center">
                  <Link to={"/talaba"}>
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </td>
              </tr>

              <tr></tr>
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
      </StudentsWrapper>
    </>
  );
};

export default Talabalar;
