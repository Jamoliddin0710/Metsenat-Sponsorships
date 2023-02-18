import styled from "styled-components";

const BrandWrapper = styled.div`
  .sec-1 {
    .modTitle {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 1.125px;
      text-transform: uppercase;
      color: #1d1d1f;
    }
    .modInt {
      background: rgba(224, 231, 255, 0.2);
      border: 1px solid #e0e7ff;
      border-radius: 6px;
      width: 100%;
    }
  }
  .sec-2 {
    .modTitle {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 1.125px;
      text-transform: uppercase;

      color: #1d1d1f;
    }
    .butTitle {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      /* identical to box height, or 143% */

      color: #2e384d;
      .sum {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        margin: 0;
        text-transform: uppercase;

        color: #2e5bff;
      }
    }
    .btn {
      background: #ffffff;
      border: 1px solid #e0e7ff;
      border-radius: 5px;
      padding: 14px;
      width: 150px;
      margin-bottom: 10px;
    }
  }
  .sec-3 {
    .react-date-picker__wrapper {
      background: rgba(224, 231, 255, 0.2);
      border: 1px solid #e0e7ff;
      border-radius: 10%;
      width: 25%;
    }
    .modTitle {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 1.125px;
      text-transform: uppercase;

      color: #1d1d1f;
    }
  }
  .homiylar {
    background: #e5e5e5;
    padding: 30px 80px 350px 80px;
    .sum {
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      color: #2e384d;
      .val {
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        color: #b2b7c1;
      }
    }
    .new {
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;

      color: #5babf2;
    }
    .moder {
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;

      color: #ffa445;
    }
    .tasdiq {
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;

      color: #00cf83;
    }
    .cancel {
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;

      color: #979797;
    }
  }
`;

export default BrandWrapper;
