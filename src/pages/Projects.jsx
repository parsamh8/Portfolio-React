
import Animated from "../components/Animated";
import projects from '../data/projects.json';
import PortfoliosItem from "./PortfoliosItem";

export default function Projects() {


    return (
        <>
            <Animated>
                <section >
                    <h2 className='project-header'>Check out some of my <span>projects</span> below</h2>
                    <div className='center'>
                        <div className='projects-container flex'>
                            <div>
                                {projects.map((project, id) => {
                                    return <PortfoliosItem key={id} project={project}/>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <p>all the site reserve</p>
                </div>
            </Animated>
        </>
    )
}