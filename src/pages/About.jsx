import Animated from "../components/Animated";
import selfImg from "../assets/selfme.png";

export default function About() {
  return (
    <>
      <img className="selfImg" src={selfImg} alt="Description of myself" style={{ width: '200px', height: 'auto', borderRadius: '50%', margin: '20px' }} />
      <Animated>
        <div className="about-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', padding: '20px' }}>
          <div style={{ flexGrow: 1, minWidth: '60%', padding: '0 40px', marginTop: '40px' }}>
            <h1 className='vt323'>About</h1>
            <p className='vt323 vt323-size'>Parsa (b. 1994, Tehran) is a multidisciplinary designer based in Toronto, whose expertise spans across web design, digital art installations, and live visual performances. A graduate of the University of Toronto’s Full Stack Software Development program, he is proficient in both MERN and PERN stack applications, crafting interfaces and experiences that are not only functional but artistically engaging. His work often draws upon retro-inspired aesthetics, merging them with cutting-edge digital techniques to create unique visual narratives.</p>
            <p className='vt323 vt323-size'>His passion extends into the realm of VJing and video art, where he utilizes TouchDesigner to create compelling video visuals centered around facial expressions and natural elements. This artistic exploration reflects his deep interest in new media and contributes to his reputation as an innovative visual artist. His approach is thoughtful and immersive, aiming to evoke emotion and provoke thought through every frame and interaction.</p>
            <p className='vt323 vt323-size'>Outside of his professional pursuits, Parsa is deeply engaged in a variety of creative hobbies. He is an avid painter and filmmaker, often found creating short films that showcase his diverse artistic abilities. Additionally, his love for <a className='vt323'>The Beatles</a> highlights his appreciation for classic influences that shape his modern creations. Currently working as a freelancer, Parsa continues to impact the digital and artistic landscapes, bringing a sophisticated blend of creativity and technical skill to every project he undertakes.</p>
            <p className='vt323'>Please enjoy his favourite Fab Four while exploring.</p>
          </div>
          {/* Spotify Embed */}
          <iframe
            style={{ border: 'none', borderRadius: '12px', width: '77%', height: '352px', marginTop: '20px', marginLeft: '40px' }}
            src="https://open.spotify.com/embed/track/00oZhqZIQfL9P5CjOP6JsO?utm_source=generator"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
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
