import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../utils/Button";

const Error = () => {
  return (
    <Wrapper>
      <img
        src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_960_720.png"
        alt="error"
        className="error_img"
      />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .error_img {
    max-width: 40%;
    height: auto;
  }
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error;
