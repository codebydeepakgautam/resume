import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import "../css/Hero.css";

import profile from "../assets/profile.png";
function Hero() {

  return (

    <section id="home" className="hero-section">


      <div className="container">


        <div className="row align-items-center min-vh-100 g-5">



          {/* Content */}

          <div className="col-lg-7">


            <h1 className="hero-title">

              Hi, I'm 

              <span>
                Deepak Gautam
              </span>

            </h1>



            <h2 className="hero-role">
              React Full Stack Developer
            </h2>



            <p className="hero-desc">

              I build modern, responsive and user-friendly web applications
              using React, JavaScript, Node.js and backend technologies.

            </p>




            <div className="hero-buttons">


              <a
                href="/resume.pdf"
                download
                className="resume-btn"
              >

                <FaDownload />

                Resume

              </a>





              <a
                href="https://github.com/"
                target="_blank"
                className="social-btn"
              >

                <FaGithub />

              </a>





              <a
                href="https://linkedin.com/"
                target="_blank"
                className="social-btn"
              >

                <FaLinkedin />

              </a>


            </div>



          </div>






          {/* Image */}

          <div className="col-lg-5 text-center">


            <div className="profile-wrapper">


              <img
  src={profile}
  alt="Deepak"
/>


            </div>


          </div>




        </div>


      </div>


    </section>

  );

}


export default Hero;