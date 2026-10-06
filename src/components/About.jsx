import "../css/About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="container">


        <div className="text-center about-heading">

          <h2>
            About <span>Me</span>
          </h2>


          <p>
            I am Deepak Gautam, a React Full Stack Developer passionate
            about creating modern and scalable web applications.
            I enjoy converting ideas into clean, responsive and
            user-friendly digital experiences.
          </p>


          <p>
            My skills include React, JavaScript, Node.js,
            Express.js and MongoDB. I focus on writing clean code and
            building real-world projects.
          </p>

        </div>



        <div className="row g-4 mt-5">


          <div className="col-md-4">

            <div className="about-card">

              <h3>
                Education
              </h3>

              <p>
                BCA Student
              </p>

            </div>

          </div>




          <div className="col-md-4">

            <div className="about-card">

              <h3>
                Experience
              </h3>

              <p>
                Fresher Developer
              </p>

            </div>

          </div>




          <div className="col-md-4">

            <div className="about-card">

              <h3>
                Goal
              </h3>

              <p>
                Build Professional Web Applications
              </p>

            </div>

          </div>


        </div>


      </div>


    </section>
  );
}

export default About;