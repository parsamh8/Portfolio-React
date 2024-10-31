import Animated from "../components/Animated"
export default  function About() {

    return (
        <Animated>
        <div style={{padding: 40}}>
        <h1> My Story</h1>
        <p>I've been an electrical engineer for over ten years now, building up my skills in problem-solving and all things technical. Recently, though, I've found a new passion in programming and web design, especially when it comes to UI and retro aesthetics. I love that mix of old-school charm with modern functionality—it’s like combining the best of both worlds. To dive deeper, I joined the Full Stack Development program at the University of Toronto, running from September to December 2024, and it's been a great way to expand my skills and perspective.</p>
        <p>Outside of work and study, I'm a huge <span>The Beatles</span> fan; their music is timeless to me and never fails to inspire. My cat, PJ, keeps things lively around the house and is always there to add a little fun to my day. It's a good balance of technical and creative in my life, and I'm excited to see where this mix of engineering and web development will take me next.</p>
        <button>
        <a 
          href="/resume.pdf" 
          download="My_Resume.pdf" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Download Resume
        </a>
      </button>
        </div>
        </Animated>
    )

}