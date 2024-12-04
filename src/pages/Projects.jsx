
import Animated from "../components/Animated";
import projects from '../data/projects.json';
import PortfoliosItem from "./PortfoliosItem";

export default function Projects() {


    return (
        <>
            <Animated>
                <section >
                    <h1 className='project-header'>Check Out Some Of My <span>Projects</span> Below</h1>
                    <div className='center'>
                        <div className='projects-container grid-container flex'>
                                {projects.map((project, id) => {
                                    return <PortfoliosItem key={id} project={project}/>
                                })}
                        </div>
                    </div>
                </section>
            </Animated>
        </>
    )
}