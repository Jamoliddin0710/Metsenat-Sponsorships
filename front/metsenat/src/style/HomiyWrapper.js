import styled from "styled-components";

const HomiyWrapper = styled.div`
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
  .modTitle {
    margin-top: 15px;
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
  .blueBag {
    background: #e5ebff;
    color: #3366ff;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    width: 30%;
    padding: 5px 8px 5px 8px;
    margin-bottom: 20px;
  }
  .userTah {
    .jshah {
      width: 50%;
      background-color: #3366ff;
      color: #ffffff;
      border-radius: 6px 0px 0px 6px;
    }
    .yuridik {
      width: 50%;
      background: #ffffff;
      border: 2px solid #e0e7ff;
      border-radius: 0px 6px 6px 0px;
      color: rgba(51, 102, 255, 0.6);
    }

    .yuser {
      .jshah {
        width: 50%;
        background-color: #ffffff;
        color: #ffffff;
        border-radius: 0px 6px 6px 0px;
      }
      .yuridik {
        width: 50%;
        background: #3366ff;
        border: 2px solid #e0e7ff;
        border-radius: 6px 0px 0px 6px;
        color: rgba(51, 102, 255, 0.6);
      }
    }
  }
  .yuserTah {
    .jshah {
      width: 50%;
      background: #ffffff;
      border: 2px solid #e0e7ff;
      border-radius: 6px 0px 0px 6px;
      color: rgba(51, 102, 255, 0.6);
    }
    .yuridik {
      width: 50%;
      background-color: #3366ff;
      color: #ffffff;
      border-radius: 0px 6px 6px 0px;
    }
  }

  .homiy {
    background: #e5e5e5;
    padding: 30px 80px 0px 80px;
    display: flex;
    justify-content: center;
    .quiz {
      margin-bottom: 50px;
      background: #ffffff;
      border: 1px solid #ebeefc;
      box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
      border-radius: 12px;
      padding: 30px;

      .quizTitle {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        /* identical to box height, or 117% */

        /* Dark / Dark 400 */
        color: #28293d;
      }
      .btn {
        background: #edf1fd;
        border-radius: 5px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        color: #3365fc;
      }
      .userTitle {
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
        display: flex;
        align-items: center;
        letter-spacing: -0.01em;

        color: #212121;
      }
      .quizBot {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 1.125px;
        text-transform: uppercase;

        color: #b5b5c3;
      }
      .quizNum {
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
        /* identical to box height, or 21px */
        display: flex;
        align-items: center;
        letter-spacing: -0.01em;

        color: #212121;
      }
    }
  }
`;

export default HomiyWrapper;
