import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Wrapper className="social-icons-group">
      <div>
        <a href="#" target="_blank">
          <FaLinkedin className="icons" />
        </a>
      </div>
      <div>
        <a href="#" target="_blank">
          <FaGithub className="icons" />
        </a>
      </div>
      <div>
        <a href="#" target="_blank">
          <FaTwitter className="icons" />
        </a>
      </div>
      <div>
        <a href="#" target="_blank">
          <FaInstagram className="icons" />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  gap: 2rem;
      div {
        // padding: 1rem;
        // border-radius: 50%;
        // border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.black};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
`;

export default SocialLinks;
