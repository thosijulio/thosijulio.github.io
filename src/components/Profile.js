import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/thosijulio">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/thosijulio/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/thosijulio">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-test">
              {" "}
              Olá, eu sou o <span className="highlighted-text">Julio</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Desenvolvedor Full-Stack Web",
                  1000,
                ]}
              />
              </h1>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Contratar{" "}
            </button>
            <a href="../assets/CV.pdf" download="CV-JulioThosi.pdf">
              <button className="btn highlighted-btn">Baixar Currículo</button>
            </a>
          </div>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background">

        </div>
      </div>
    </div>
  )
};

export default Profile;