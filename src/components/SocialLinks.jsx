import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Wrapper className="social-container">
      <div>
        <a href="https://www.linkedin.com/in/naved-ahmed-khan/" target="_blank">
          <FaLinkedin className="icons" />
        </a>
      </div>
      <div>
        <a href="https://github.com/GeekyNaved" target="_blank">
          <FaGithub className="icons" />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/naved_js" target="_blank">
          <FaTwitter className="icons" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/_naved.ahmed/" target="_blank">
          <FaInstagram className="icons" />
        </a>
      </div>
      <div>
        <a href="tel: +9178969736315">
          <FaWhatsapp className="icons" />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  gap: 2rem;
  //   paddingTop: 2rem;
  div {
    // padding: 1rem;
    // border-radius: 50%;
    // border: 2px solid ${({ theme }) => theme.colors.white};
    .icons {
      color: #ffffff;
      font-size: 2.4rem;
      // position: relative;
      cursor: pointer;
    }
  }
`;

export default SocialLinks;
