import Animated from "../components/Animated";
import selfImg from "../assets/selfme.png";
import the5th from "../assets/5th-beatles.jpg";

export default function About() {
  return (
    <>
<img className="selfImg about-left-margin" src={selfImg} alt="Description of myself"/>
<img className="selfImg2 about-left-margin hide-on-mobile" src={the5th} alt="Description of myself" />
      <Animated>
        <div className="about-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', padding: '20px' }}>
          <div style={{ flexGrow: 1, minWidth: '60%', padding: '0 40px', marginTop: '40px' }}>
            <h1 className='vt323 about-media'>About</h1>
            <p className='vt323 vt323-size about-paragraph'>Parsa (b. 1994, Tehran) is a multidisciplinary designer based in Toronto, whose expertise spans across web design, digital art installations, and live visual performances. A graduate of the University of Toronto’s Full Stack Software Development program, he is proficient in both MERN and PERN stack applications, crafting interfaces and experiences that are not only functional but artistically engaging. His work often draws upon retro-inspired aesthetics, merging them with cutting-edge digital techniques to create unique visual narratives.</p>
            <p className='vt323 vt323-size about-paragraph'>Parsa is the visionary founder of Toronto-Underground—a dynamic collective dedicated to nurturing the city's underground art scene. From groundbreaking digital art exhibitions to high-energy music events, Toronto-Underground serves as a vital platform for emerging talent and cultural experimentation. With a passion for pushing creative boundaries, Parsa has built a community where innovative art forms and authentic expression thrive, turning Toronto into a hub of artistic revolution.</p>
            <p className='vt323 vt323-size about-paragraph'>Outside of his professional pursuits, Parsa is deeply engaged in a variety of creative hobbies. He is an avid painter and filmmaker, often found creating short films that showcase his diverse artistic abilities. Additionally, his love for <a className='vt323' href='https://www.rollingstone.com/t/beatles/' target="_blank">The Beatles</a> highlights his appreciation for classic influences that shape his modern creations. Currently working as a freelancer, Parsa continues to impact the digital and artistic landscapes, bringing a sophisticated blend of creativity and technical skill to every project he undertakes.</p>
            <p className='vt323 about-paragraph'>Please enjoy his favourite Fab Four while exploring.</p>
          </div>
          {/* Spotify Embed */}
          <iframe
            style={{ border: 'none', borderRadius: '12px', width: '76%', height: '352px', marginTop: '20px', marginLeft: '40px' }}
            src="https://open.spotify.com/embed/track/2B4Y9u4ERAFiMo13XPJyGP?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
          ></iframe>
            <div>
              <a
                href="mailto:parsamh8@gmail.com?subject=Friend Inquiries&body=How can I help you, my friend?"
                className="email-vertical vt323"
              >
                parsamh8[at]gmail.com
              </a>
            </div>
        </div>
      </Animated>
    </>
  );
}
