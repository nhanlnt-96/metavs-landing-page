import styled from "styled-components";

export const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: rgba(63, 63, 64, 1);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  font-family: 'Kanit', sans-serif;
  box-shadow: 0 6px 0 -2px rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: 0 6px 0 -2px rgba(255, 255, 255, 0.3);
  -moz-box-shadow: 0 6px 0px -2px rgba(255, 255, 255, 0.3);

  :hover {
    background-color: #ffffff;
    color: #000000;
  }

  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: rgba(63, 63, 64, 1);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #ffffff;
    color: #000000;
  }

  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
`;