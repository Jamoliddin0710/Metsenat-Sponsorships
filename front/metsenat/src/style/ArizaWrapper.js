import styled from "styled-components";

const ArizaWrapper = styled.div`
  .head {
    padding: 10px 40px;
    background: #ffffff;
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
    p {
      margin: 0;
    }
    .headLink {
      order: 0;
      margin-right: 40px;
      color: #28293d;
      letter-spacing: -0.35px;
      font-size: 14px;
      font-weight: 500;
      font-family: "SF Pro Text", sans-serif;
      text-decoration: none;
    }
    .headBut {
      border: 2px solid #3366ff;
      border-radius: 8px;
      color: #3366ff;
    }
  }
  .ariza {
    .left {
      padding: 80px 120px;
      .title {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 140%;
        letter-spacing: 0.01em;

        color: #1d1d1f;
      }
      .userTah {
        .jshah {
          width: 50%;
          background-color: #3366ff;
          color: #ffffff;
          border-radius: 6px 0px 0px 6px;
          font-family: "Rubik", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          text-transform: uppercase;
        }
        .yuridik {
          width: 50%;
          background: #ffffff;
          border: 2px solid #e0e7ff;
          border-radius: 0px 6px 6px 0px;
          color: rgba(51, 102, 255, 0.6);
          font-family: "Rubik", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          text-transform: uppercase;
        }
      }
      .modTitle {
        margin-top: 15px;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 1.125px;
        text-transform: uppercase;
        color: #1d1d1f;
      }
    }
  }
`;

export default ArizaWrapper;
