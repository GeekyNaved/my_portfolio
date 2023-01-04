import React from "react";
import styled from "styled-components";
import Button from "../utils/Button";

const AboutSection = () => {
  return (
    <Wrapper>
      <div className="container about-container">
        {/* for image  */}
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
            <Button className="btn">Download Resume</Button>
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
  }
  .btn {
    margin-top: 3rem;
    max-width: 16rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default AboutSection;
