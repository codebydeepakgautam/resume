import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../css/Projects.css";


function Projects() {


  const projects = [

    {
      title:"Beyond Dictionary",
      description:
      "A modern dictionary application with word search, word list and interactive learning features.",
      tech:"React, API, Bootstrap",
      github:"#",
      live:"#"
    },


    {
      title:"EventBuster",
      description:
      "Event management platform with authentication, events and responsive user interface.",
      tech:"React, Flutter, API",
      github:"#",
      live:"#"
    },


    {
      title:"MERN Authentication",
      description:
      "Complete authentication system with JWT login, signup and MongoDB database.",
      tech:"React, Node.js, Express, MongoDB",
      github:"#",
      live:"#"
    }

  ];



  return (


    <section id="projects" className="projects-section">


      <div className="container">


        <div className="section-title text-center">


          <h2>
            My <span>Projects</span>
          </h2>


          <p>
            Some of my recent development work
          </p>


        </div>





        <div className="row g-4 mt-4">



          {
            projects.map((project,index)=>(


              <div className="col-lg-4 col-md-6" key={index}>


                <div className="project-card">



                  <h3>
                    {project.title}
                  </h3>



                  <p>
                    {project.description}
                  </p>



                  <div className="tech">

                    <span>
                      Tech:
                    </span>

                    {project.tech}

                  </div>





                  <div className="project-buttons">


                    <a
                      href={project.github}
                    >

                      <FaGithub />

                      Code

                    </a>





                    <a
                      href={project.live}
                    >

                      <FaExternalLinkAlt />

                      Live

                    </a>


                  </div>




                </div>


              </div>


            ))
          }





        </div>


      </div>


    </section>


  );

}


export default Projects;