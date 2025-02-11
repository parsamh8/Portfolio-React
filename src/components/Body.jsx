import myImage from '../assets/me.gif';
import Animated from '../components/Animated';
import ball from '../assets/ball.gif';

export default function Body() {
    return (
        <>
            <div className="body-container">
                <div className="img-parent-container">
                    <img className='img-container' src={myImage} alt="describtion of myself" />
                </div>
                <div className="animated-container">
                    <Animated >
                        <div className='homepage' style={{ padding: 35 }}>
                            <h1 className='vt323'>Hi! I'm <span className='vt323'>Parsa</span></h1>
                            <h1 className='vt323'>Full Stack Web Developer</h1>
                            <h1 className='vt323'>And</h1>
                            <h1 className='vt323'><span className='virtual-color vt323'>Visual</span> Artist</h1>
                            <h2 className='vt323'>Welcome To My Portfolio</h2>
                        </div>
                    </ Animated>
                </div>
            </div>
        </>
    )
}
