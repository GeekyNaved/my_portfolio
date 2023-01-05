import React from "react";
import styled from "styled-components";
import Button from "../utils/Button";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero-heading">
            Naved <br /> Khan
          </h1>
          <p className="hero-para">Front-End Developer, Programmer</p>
          <SocialLinks />
          <Button className="btn">
            <a href="#order">Lets chat</a>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img
              src="https://gauravghai.dev/images/gaurav.png"
              alt="hero"
              className="hero-img "
            />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background: #222;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    margin-top: 3rem;
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
  }
  .hero-heading {
    font-size: 6.4rem;
  }
  .hero-para {
    max-width: 60rem;
    padding-bottom: 1rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
