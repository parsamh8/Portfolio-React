
import Animated from "../components/Animated";
import projects from '../data/projects.json';
import PortfoliosItem from "./PortfoliosItem";

export default function Projects() {


    return (
        <>
            <Animated>
                <section >
                    <h1 className='project-header vt323'>Check Out Some Of My <span className='vt323'>Projects</span> Below</h1>
                    <div className='center'>
                        <div className='projects-container grid-container flex'>
                                {projects.map((project, id) => {
                                    return <PortfoliosItem key={id} project={project}/>
                                })}
                        </div>
                    </div>
                    <div>
              <a
                href="mailto:parsamh8@gmail.com?subject=Friend Inquiries&body=How can I help you, my friend?"
                className="email-vertical vt323"
              >
                parsamh8[at]gmail.com
              </a>
            </div>
                </section>
            </Animated>
        </>
    )
}