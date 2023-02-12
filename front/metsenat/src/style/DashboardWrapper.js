import styled from "styled-components";

const DashboardWrapper = styled.div`
  .dash {
    background: #e5e5e5;
    padding: 30px 80px 200px 80px;
    .cards {
      .dashCard {
        background: #ffffff;
        border: 1px solid rgba(46, 91, 255, 0.08);
        border-radius: 8px;
        padding: 24px 80px 24px 24px;
        p {
          margin: 0px;
        }
        .little {
          margin-bottom: 6px;
          font-weight: 400;
          font-size: 12px;
          line-height: 12px;
          color: #7a7a9d;
        }
        .sum {
          font-weight: 700;
          font-size: 20px;
          line-height: 20px;
          color: #2e384d;
          .val {
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
            color: #b2b7c1;
          }
        }
      }
    }
    .chartCard {
      background: #ffffff;
      border: 1px solid rgba(46, 91, 255, 0.08);
      border-radius: 8px;
      padding: 24px;
      p {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
      }
    }
  }
`;

export default DashboardWrapper;
