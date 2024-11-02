import myImage from '../assets/me.gif'
import Animated from "../components/Animated"

export default function Body() {
    return (
    <Animated >
    <div>
        <img className='img-container' src={myImage} alt="describtion of myself"/>
    </div>

    <div style={{padding: 35}}>
        <h1>Hi! I'm <span>Parsa</span></h1>
        <h2>Welcome to my portfolio</h2>
    </div>
    </ Animated>
    )
    }
