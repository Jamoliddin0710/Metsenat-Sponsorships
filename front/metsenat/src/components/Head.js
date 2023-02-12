import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import HeadWrapper from "../style/HeadWrapper";
import { Link } from "react-router-dom";

const Head = () => {
  return (
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
              checked
            />
            <label class="btn btn-outline-primary p-2 ps-5 pe-5" for="btnradio1">
              <Link to={"/dashboard"} className="headCh">Dashboard</Link>
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary p-2 ps-5 pe-5" for="btnradio2">
              <Link to={"/homiylar"}>Homiylar</Link>
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary p-2 ps-5 pe-5" for="btnradio3">
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
          <button type="button" class="btn headBut d-flex align-items-center">
            <FontAwesomeIcon icon={faFilter} className="me-2" /> Filter
          </button>
        </div>
      </div>
    </HeadWrapper>
  );
};

export default Head;
