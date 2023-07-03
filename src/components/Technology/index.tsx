
import "./styles.css"
import { useState } from 'react';
import { skillsIcon } from "../MockData";
import emitter from "../../utils/eventEmitter";

const Technology = () => {

    const [text, setText] = useState("Clique no card para ler mais sobre cada tecnologia!");
    const [activeButton, setActiveButton] = useState(-1);
    const handleButtonClick = (numberOfSkill: number, skillText: string) => {
        setText(skillText)
        setActiveButton(numberOfSkill);

    };
    return (
        <section id="s-skills">
            <div className="grid-layout ">
                <div className="skills">
                    <div className="skills-text">


                        <h1 className="text-title" >Conhecimentos</h1>


                        <p className="description" >{text}</p>
                    </div>

                    <div className="skills-icons">
                        {skillsIcon.map((skill, index) => (
                            <skill.logo className={activeButton === index ? 'active icon-skill' : 'icon-skill'} onClick={(e) => (handleButtonClick(index, skill.texto))} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Technology;