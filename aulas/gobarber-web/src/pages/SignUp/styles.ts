import styled from 'styled-components';
import { shade } from 'polished';

import signUpImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  /* Faça que content e background tenha tamanho maximo */
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* justify e align items center */
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      margin-top: 24px;
      display: block;
      text-decoration: none;

      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    margin-top: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 14px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signUpImg}) no-repeat center;
  background-size: cover;
`;
