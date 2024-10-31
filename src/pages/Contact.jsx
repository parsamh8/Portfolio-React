import Animated from "../components/Animated";
import myImage from "../assets/projects2.gif";
import Form from "../components/Form";

export default function Contact() {
    return (
        <>
        <Animated>
            <div className='img-contact'>
                <img src={myImage} alt="describtion of myself" />
            </div>
            <div>
                <h1 style={{padding: 40}}>Contact Me</h1>
            </div>
            <div>
            </div>
        </Animated>
                <Form />
        </>
    )
}