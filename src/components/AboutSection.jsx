import React from "react";
import styled from "styled-components";
import { MdOutlineMail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

const AboutSection = () => {
  return (
    <Wrapper>
      <div className="container about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am extremely proficient in Front-End Development using HTML5,
            Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js
            & Vue.Js And apart from Front-End, I have good knowledge in Back-End
            using PHP & MySQL as well as in designing using Adobe Photoshop,
            Adobe Illustrator, Adobe XD, Sketch & Figma, and continuously engage
            in trying to extend my skills with new technology.
          </p>
          <div className="query-container">
            <h3>
              <strong>Any Type Of Query &amp; Discussion</strong>{" "}
            </h3>
            <a className="email-link" href="mailto:navedahmed040@gmail.com">
              <MdOutlineMail className="icons" />
              navedahmed040@gmail.com
            </a>
            <a className="download-resume-btn" href="resume_naved.pdf" download>
              <FaFileDownload className="icons" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background: #1f1f1f;
  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    place-items: center;
  }
  .download-resume-btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
    max-width: 22rem;
    text-decoration: none;
    background-color: #f06d55;
    color: rgb(255 255 255);
    padding: 1.2rem 1.4rem;
    font-size: 1.5rem;
    border-radius: 10px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    &:hover,
    &:active {
      box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: scale(0.96);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default AboutSection;
