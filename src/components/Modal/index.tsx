
import { IconType } from "react-icons/lib";
import "./styles.css"
import { useState } from 'react';
import { FaTimesCircle } from "react-icons/fa";
import emitter from "../../utils/eventEmitter";
const EVENTS = {
    PosterClick: 'PosterCLick',
    ModalClose: 'ModalClose',
};
/*  LINK VIDEO IMAGINESHOP
            <div><iframe src="https://www.loom.com/embed/0acd9f0f60b342b0b597f6f529d57226?sid=30935b07-b9b1-455f-8f88-15756e831e1b" frameBorder="0" allowFullScreen allowFullScreen  ></iframe></div>
*/



interface Project {
    image?: string;
    link?: string;
    describe?: string;
    icons?: IconType[];
}

const Modal: React.FC<Project> = (project) => {
    const [activeButton, setActiveButton] = useState(-1);

    const handleButtonClick = (numberOfSkill: number) => {
        setActiveButton(numberOfSkill);

    };

    const handleClick = () => {

    };

    return (
        <div className="projects-detail-container">
            <article className="projects-detail">
                <FaTimesCircle className="times-circle" onClick={handleClick} />
                <img className="image-project" src={project.image} alt="" />
                <div className="container-detail-abour-project">
                    <h1 className="knowledge">Conhecimentos</h1>
                    <div className="skills-icons-project">
                        {project.icons?.map((Icon, index) => (
                            < >
                                {
                                    <Icon className={activeButton === index ? 'active icon-skill-project' : 'icon-skill-project'} key={index} onMouseOver={() => (handleButtonClick(index))} />
                                }
                            </>

                        ))}
                    </div>
                    <h1>Descrição do projeto</h1>
                    <p>{project.describe}</p>
                </div>
            </article>
        </div>
    );
};
export default Modal;