import Animated from "../components/Animated"
import selfImg from "../assets/selfme.png"

export default function About() {

  return (
    <>
      <Animated>
        <div className="about-container">
        <div style={{ padding: 40 }}>
          <h1> My Story</h1>
          <p>With over five years of experience in the engineering industry and project coordination, I've honed my expertise in delivering technical solutions and managing complex projects. Recently, I've channeled this technical foundation into a growing passion for full-stack development, particularly in building scalable MERN applications. My background in problem-solving and process optimization seamlessly complements my interest in creating robust, user-centered web applications with a focus on intuitive UI and retro-inspired aesthetics. This unique blend of technical rigor and creative design fuels my drive to build modern solutions with character. </p>
          <p>To deepen my knowledge and expand my skill set, I joined the University of Toronto's Full Stack Development program, running from September to December 2024. This program has provided hands-on experience with cutting-edge technologies, including MongoDB, Express.js, React, and Node.js, along with essential tools like Git, REST APIs, and deployment pipelines. Outside of work and study, I find inspiration in timeless music—I'm an avid fan of <span>The Beatles</span>—and enjoy the company of my cat, PJ, who adds a lively touch to my day. Balancing technical expertise and creative energy, I’m eager to apply my skills to dynamic projects and explore the boundless possibilities of web development.</p>
          <button>
            <a
              href="/src/assets/resume.pdf"
              download="resume.pdf"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Download Resume
            </a>
          </button>
        </div>
        </div>
      </Animated>
      <img className="selfImg" src={selfImg} alt="describtion of myself" />
    </>
  )

}