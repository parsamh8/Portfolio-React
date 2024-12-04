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
                    <h1 style={{ padding: 40 }}>Contact Me</h1>
                </div>
                <div>
                </div>
            </Animated>
            <Form />
        </>
    )
}