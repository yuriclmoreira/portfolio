
import "./styles.css"
import { useState } from 'react';
import { IconType } from "react-icons/lib";
import { FaTimesCircle } from "react-icons/fa";
import { mokProjects } from "../MockData";



interface Project {
    image?: string;
    link?: string;
    describe?: string;
    icons?: IconType[];

}



const Projects = () => {
    const [activeButton, setActiveButton] = useState(-1);
    const [project, setProject] = useState<Project>();
    const [exibir, setExibir] = useState(false);



    const handleClick = (projeto: Project) => {
        setExibir(true);
        setProject(projeto)

    };
    const close = () => {
        setExibir(false);
    }
    const handleButtonClick = (numberOfSkill: number) => {

        setActiveButton(numberOfSkill);
    };

    if (!exibir) {

        return (


            <section id="s-projects">


                <div className="grid-layout-projects">

                    <h1 className="grid-layout">Projetos </h1>

                    <div className="grid-projects">



                        {mokProjects.map((projeto, index) => (
                            <div className={activeButton === index ? 'card-projects active ' : ' card-projects '}
                                onMouseOver={(_e) => (handleButtonClick(index))}>
                                <img className="image-projects" src={projeto.image} alt="" />
                                <button onClick={() => handleClick(projeto)} className={activeButton === index ? 'button-projects' : 'button-projects '}>
                                    Saiba mais
                                </button>
                            </div>

                        ))}

                    </div>

                </div>


            </section>

        )
    } else {
        return (

            <div className="projects-detail-container">
                <article className="projects-detail">
                    <FaTimesCircle className="times-circle" onClick={close} />
                    <img className="image-project" src={project?.image} alt="" />
                    <div className="container-detail-abour-project">
                        <h1 className="knowledge">Tecnologias utilizadas</h1>
                        <div className="skills-icons-project">

                            {project?.icons?.map((Icon, index) => (
                                < >
                                    {
                                        <Icon className={activeButton === index ? 'active icon-skill-project' : 'icon-skill-project'} key={index} onMouseOver={() => (handleButtonClick(index))} />
                                    }
                                </>

                            ))}
                        </div>
                        <h1>Descrição do projeto</h1>
                        <p>{project?.describe}</p>
                        <button className="btn-active" onClick={() => window.open(project?.link)} >Conheca o projeto!</button>
                    </div>
                </article >
            </div >
        )
    }
}
export default Projects;