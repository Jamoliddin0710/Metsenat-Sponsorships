import styled from "styled-components";

const StudentsWrapper = styled.div`
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
      padding: 10px;
    }
  }

  .talabalar {
    background: #e5e5e5;
    padding: 30px 80px 420px 80px;
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
    .plus {
      width: 50%;
      background: #ffffff;
      border: 1px solid #ebeefc;
      box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
      border-radius: 12px;
      padding: 30px;
      .inputPlus {
        background: rgba(224, 231, 255, 0.2);
        border: 1px solid #e0e7ff;
        border-radius: 6px;
      }
    }
  }
`;

export default StudentsWrapper;
