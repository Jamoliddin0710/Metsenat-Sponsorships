import styled from "styled-components";

const HeaderWrapper = styled.div`
  .head {
    padding: 20px 80px;
    background: #FFFFFF;
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);

    .rigth {
      .profile {
        width: 140px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f1f1f3;
        border-radius: 6px;
        padding: 5px 6px;
        p {
          font-weight: 700;
          font-size: 18px;
        }
        .user {
          background: #00ae69;
          border-radius: 4px;
          padding: 6px 10px;
        }
      }
      .exit {
        width: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f1f1f3;
        border-radius: 6px;
        padding: 5px 6px;
      }
    }
  }
`;

export default HeaderWrapper;
