import React from "react";
import styled from "styled-components";
import { MdOutlineMail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <Wrapper>
      <div className="container contact-container">
        <h2>Stay Connected</h2>
        <div className="address-container">
          <p>Durg, India</p>
          <a
            className="address-link email"
            href="mailto:navedahmed040@gmail.com"
          >
            <strong>navedahmed040@gmail.com</strong>
          </a>
          <a className="address-link phoneNo" href="tel: +917869736315">
            (+91) 7869736315
          </a>
        </div>
        <div className="links-container">
          <SocialLinks />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background: #1f1f1f;
  .contact-container {
    text-align: center;
    .address-link {
      color: #ffffff;
      display: block;
    }
    .email {
      font-size: 2rem;
      padding: 1rem 0;
    }
    .phoneNo {
      font-size: 1.6rem;
    }
    .links-container {
      display: flex;
      padding-top: 2rem;
      justify-content: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;

export default Contact;
