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

export default function Projects() {
    return (
        <Animated>
            <section >
                <div>
                    <div >
                        <img className='img-portfolio' src={myImage} alt="describtion of myself" />
                    </div>
                    <div>
                        <h3>Check out some of my projects below</h3>
                        <h2>FlexWeather</h2>
                        <PortfoliosItem github={projects[0].github} deployed={projects[0].deployed} image={projects[0].img} />
                    </div>
                </div>
            </section>
        </Animated>
    )
}