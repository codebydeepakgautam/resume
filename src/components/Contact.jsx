import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../css/Contact.css";


function Contact() {

  return (

    <section id="contact" className="contact-section">


      <div className="container">


        <div className="contact-title text-center">

          <h2>
            Contact <span>Me</span>
          </h2>

          <p>
            Feel free to contact me for projects, collaboration or opportunities.
          </p>

        </div>





        <div className="row g-5 mt-4 align-items-center">



          {/* Info */}

          <div className="col-md-6">


            <div className="contact-box">


              <div className="contact-item">

                <FaEnvelope />

                <div>
                  <h5>Email</h5>
                  <p>
                    deepak@example.com
                  </p>
                </div>

              </div>




              <div className="contact-item">

                <FaPhone />

                <div>
                  <h5>Phone</h5>
                  <p>
                    +91 XXXXX XXXXX
                  </p>
                </div>

              </div>





              <div className="contact-item">

                <FaMapMarkerAlt />

                <div>
                  <h5>Location</h5>
                  <p>
                    India
                  </p>
                </div>

              </div>



            </div>


          </div>






          {/* Form */}

          <div className="col-md-6">


            <form className="contact-form">


              <input
                type="text"
                placeholder="Your Name"
              />



              <input
                type="email"
                placeholder="Your Email"
              />



              <textarea
                rows="5"
                placeholder="Your Message"
              ></textarea>




              <button>
                Send Message
              </button>



            </form>


          </div>



        </div>


      </div>


    </section>

  );

}


export default Contact;