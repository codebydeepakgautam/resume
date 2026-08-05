import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import "../css/Skills.css";


function Skills() {


  const skills = [

    { name:"HTML", icon:<FaHtml5/> },

    { name:"CSS", icon:<FaCss3Alt/> },

    { name:"JavaScript", icon:<FaJs/> },

    { name:"React", icon:<FaReact/> },

    { name:"Tailwind CSS", icon:<SiTailwindcss/> },

    { name:"Node.js", icon:<FaNodeJs/> },

    { name:"Express.js", icon:<SiExpress/> },

    { name:"MongoDB", icon:<SiMongodb/> },

    { name:"Git", icon:<FaGitAlt/> },

  ];



  return (

    <section id="skills" className="skills-section">


      <div className="container">


        <div className="section-title text-center">


          <h2>
            My <span>Skills</span>
          </h2>


          <p>
            Technologies I use to build modern web applications
          </p>


        </div>




        <div className="row g-4 mt-4">


          {
            skills.map((skill,index)=>(


              <div 
                className="col-6 col-md-4 col-lg-3"
                key={index}
              >


                <div className="skill-card">



                  <div className="skill-icon">

                    {skill.icon}

                  </div>




                  <h5>
                    {skill.name}
                  </h5>



                </div>



              </div>


            ))
          }



        </div>


      </div>


    </section>

  );

}


export default Skills;