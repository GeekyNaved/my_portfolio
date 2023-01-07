import React from "react";
import MyWorkStyles from "../utils/MyWorkStyles.css";

const MyWork = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="title">My services</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fab fa-html5"></i>
              <div className="text">Web Development</div>
              <p>
                Focused on crafting great web experiences. Coding has been my
                passion for so long. I enjoy creating beautifully designed,
                intuitive and functional websites.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-cube"></i>
              <div className="text">Responsive Designs</div>
              <p>
                Responsive layouts that will automatically adjust and adapt to
                any device screen size, whether it is a desktop, a laptop, a
                tablet, or a mobile phone.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fab fa-wordpress-simple"></i>
              <div className="text">Wordpress</div>
              <p>
                I work closely with enterprise level customers to create
                outstanding high performing and secure custom websites with a
                focus on unique, professional web design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
