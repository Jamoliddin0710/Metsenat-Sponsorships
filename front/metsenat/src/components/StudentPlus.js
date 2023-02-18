import {
  faLeftLong,
  faPlus,
  faRotateLeft,
  faUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../containers/Header";
import HeadWrapper from "../style/HeadWrapper";
import StudentsWrapper from "../style/StudentsWrapper";

const StudentPlus = () => {
  return (
    <>
      <Header />
      <HeadWrapper>
        <div className="head">
          <Link to={"/talabalar"}>
            <p className="plusTitle">
              <FontAwesomeIcon icon={faLeftLong} className="me-2" />
              Talaba qo‘shish
            </p>
          </Link>
        </div>
      </HeadWrapper>
      <StudentsWrapper>
        <div className="talabalar">
        <div className="d-flex justify-content-center">
          <div className="plus sec-1">
            <div className="row">
              <div className="col-6">
                <p className="mb-2 modTitle">F.I.Sh. (Familiya Ism Sharif)</p>
                <input
                  type="text"
                  placeholder="Abdullayev Abdulla Abdulla o’g’li"
                  className="form-control inputPlus"
                />
              </div>
              <div className="col-6">
                <p className="mb-2 modTitle">Telefon raqam</p>
                <input
                  type="number"
                  placeholder="+998 00 000-00-00"
                  className="form-control inputPlus"
                />
              </div>
              <div className="col-12">
                <div>
                  <p className="mb-2 mt-4 modTitle">OTM</p>
                  <select
                    className="modInt custom-select "
                    id="inputGroupSelect02"
                  >
                    <option selected>Barchasi</option>
                    <option value="1">
                      Toshkent shahridagi INHA Universiteti
                    </option>
                    <option value="2">O’zbekiston milliy universiteti</option>
                    <option value="3">
                      Toshkent davlat texnika universiteti
                    </option>
                    <option value="4">
                      Toshkent davlat iqtisodiyot universiteti
                    </option>
                    <option value="5">
                      O’zbekiston davlat jahon tillari universiteti
                    </option>
                    <option value="6">
                      Toshkent davlat sharqshunoslik instituti
                    </option>
                    <option value="7">
                      Toshkent arxitektura-qurilish instituti
                    </option>
                    <option value="8">
                      Toshkent to’qimachilik va нngil sanoat istituti
                    </option>
                    <option value="9">
                      Toshkent avtomobil-yo’llari instituti
                    </option>
                    <option value="10">Toshkent moliya instituti</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <p className="mb-2 mt-4 modTitle ">Talabalik turi</p>

                  <select
                    className="modInt custom-select "
                    id="inputGroupSelect02"
                  >
                    <option selected>Barchasi</option>
                    <option value="1">Magistr</option>
                    <option value="2">Bakalavr</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <p className="mb-2 mt-4 modTitle">Kontrakt summa</p>
                <input
                  type="number"
                  placeholder="Summani kiriting"
                  className="form-control inputPlus"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end mt-4"><button className="btn btn-primary"><FontAwesomeIcon icon={faPlus} className="me-2" />Qo‘shish</button></div>
          </div>
        </div>
          
        </div>
      </StudentsWrapper>
    </>
  );
};

export default StudentPlus;
