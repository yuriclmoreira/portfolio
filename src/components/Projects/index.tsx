
import "./styles.css"
import { useEffect, useState } from 'react';

import Modal from "../Modal";
import { mokProjects } from "../MockData";
import emmiter from '../../utils/eventEmitter'
import { Container } from "react-bootstrap";

export interface Project {
    image?: any;
    link?: string;
    describe?: string
}



/*  LINK VIDEO IMAGINESHOP
            <div><iframe src="https://www.loom.com/embed/0acd9f0f60b342b0b597f6f529d57226?sid=30935b07-b9b1-455f-8f88-15756e831e1b" frameBorder="0" allowFullScreen allowFullScreen  ></iframe></div>
*/

const Projects = () => {

    const [activeButton, setActiveButton] = useState(-1);
    const [project, setProject] = useState<any>();
    const [exibirNovoComponente, setExibirNovoComponente] = useState(false);



    const handleClick = (projeto: Project) => {
        setExibirNovoComponente(true);
        setProject(projeto)

    };

    const handleButtonClick = (numberOfSkill: number) => {

        setActiveButton(numberOfSkill);
    };


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
                    {exibirNovoComponente && <Modal{...project} />}
                </div>

            </div>


        </section>

    )
}
export default Projects;