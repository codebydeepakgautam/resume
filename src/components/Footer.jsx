import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import "../css/Footer.css";


function Footer() {

  return (

    <footer className="footer-section">


      <div className="container">


        <div className="footer-content">



          <p>
            © {new Date().getFullYear()} Deepak Gautam. All Rights Reserved.
          </p>




          <div className="footer-social">


            <a
              href="https://github.com/"
              target="_blank"
            >
              <FaGithub />
            </a>




            <a
              href="https://linkedin.com/"
              target="_blank"
            >
              <FaLinkedin />
            </a>


          </div>





          <p className="made">

            Made with

            <FaHeart />

            by Deepak

          </p>



        </div>


      </div>


    </footer>

  );

}


export default Footer;