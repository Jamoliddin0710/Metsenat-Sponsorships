import React from "react";
import Head from "../components/Head";
import Header from "../containers/Header";
import DashboardWrapper from "../style/DashboardWrapper";
import blue from "../img/blue.svg";
import yellow from "../img/yellow.svg";
import orange from "../img/orange.svg";
import Chart from "../components/Chart";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Header />
      <Head />
      <div className="dash">
        <div className="cards d-flex justify-content-between">
          <div className="d-flex align-items-center dashCard">
            <img src={blue} alt="" className="me-3" />
            <div>
              <p className="little">Jami to‘langan summa</p>
              <p className="sum d-flex">
                1 684 325 000<p className=" ms-2 val">UZS</p>
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center dashCard">
            <img src={yellow} alt="" className="me-3" />
            <div>
              <p className="little">Jami so‘ralgan summa</p>
              <p className="sum d-flex">
                14 098 530 000<p className=" ms-2 val">UZS</p>
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center dashCard">
            <img src={orange} alt="" className="me-3" />
            <div>
              <p className="little">To‘lanishi kerak summa</p>
              <p className="sum d-flex">
                12 414 205 000<p className=" ms-2 val">UZS</p>
              </p>
            </div>
          </div>
        </div>
        <div className="chartCard mt-5">
          <p>Homiylar va talabalar soni</p>
          <Chart />
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
