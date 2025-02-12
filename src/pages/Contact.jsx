import Animated from "../components/Animated";
import myContactImage from "../assets/projects2.gif";
import Form from "../components/Form";

export default function Contact() {
    return (
        <>
            <div className="animated-container">
                <img className='img-portfolio' src={myContactImage} alt="boxes rotate contact me" />
            </div>
            <Animated>
                <div className="contact-me">
                    <h1 className='vt323' style={{ padding: 40}}>Contact Me</h1>
                </div>
                <div>
                </div>
            </Animated>
            <div>
              <a
                href="mailto:parsamh8@gmail.com?subject=Friend Inquiries&body=How can I help you, my friend?"
                className="email-vertical vt323"
              >
                parsamh8[at]gmail.com
              </a>
            </div>
            <Form />
        </>
    )
}