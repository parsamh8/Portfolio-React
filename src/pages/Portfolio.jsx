import PortfoliosItem from './PortfoliosItem';
import Animated from "../components/Animated";
import myImage from "../assets/projects1.gif";

const projects = [
    {
        github: "https://github.com/parsamh8/ForecastFlex",
        deployed: "https://forecastflex.onrender.com/",
        img: ""
    },
    {
        github: "",
        deployed: "",
        img: ""
    },
    {
        github: "",
        deployed: "",
        img: ""
    }
]

export default function Project() {
    return (
        <Animated>
            <section className="box">
                <div>
                    <div >
                        <img className='img-portfolio' src={myImage} alt="describtion of myself" />
                    </div>
                    <div>
                        < PortfoliosItem github={projects[0].github} deployed={projects[0].deployed} img={projects[0].img} />
                        <h2>FlexWeather</h2>
                        <p>Check out some of my projects below</p>
                    </div>
                </div>
            </section>
        </Animated>
    )
}