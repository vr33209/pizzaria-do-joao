import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const ProducList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-left: 20px;

    img {
      width: 180px;
      height: 100px;
      align-self: center;
      max-width: 250px;
      padding: 10px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      margin: 5px 20px 10px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      color: #333;
      margin: 5px 20px 10px;
    }

    button {
      background: #dc3545;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#dc3545')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }

        span {
          flex: 1;
          display: flex;

          text-align: center;
          justify-content: center;

          font-weight: bold;
        }
      }
    }
  }
`;
