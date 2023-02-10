import styled from "styled-components";

const LoginWrapper = styled.div`
  .w-25 {
    margin-top: 200px;
  }
  .login {
    background: #ffffff;
    border: 1px solid #ebeefc;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);

    .kirish {
      font-family: "SF Pro Display", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;

      color: #28293d;
    }

    .rubik {
      font-family: "Rubik", sans-serif;
      font-weight: 500;
      color: #1d1d1f;
      letter-spacing: 1.125px;
      font-size: 12px;
      text-transform: uppercase;
      margin: 10px 0 0 0;
    }

    .int {
      background: rgba(224, 231, 255, 0.2);
      margin-bottom: 12px;
    }

    .recapt {
      border: 1px solid #d6d6d6;
      background: #fafafa;
      border-radius: 3px;
      .roboto {
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        margin: 0 0 0 8px;
        
      }
    }
  }
`;

export default LoginWrapper;
