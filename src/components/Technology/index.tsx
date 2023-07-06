
import "./styles.css"
import { useState } from 'react';
import { skillsIcon } from "../MockData";


const Technology = () => {

    const [text, setText] = useState("Clique no card para ler mais sobre cada tecnologia!");
    const [skillName, setSkillName] = useState("Conhecimentos!");
    const [activeButton, setActiveButton] = useState(-1);

    const handleButtonClick = (numberOfSkill: number, skillText: string, skillName: string) => {
        setText(skillText)
        setActiveButton(numberOfSkill);
        setSkillName(skillName);
    };
    return (
        <section id="s-skills">
            <div className="grid-layout ">
                <div className="skills">
                    <div className="skills-text">


                        <h1 className="text-title" >{skillName}</h1>


                        <p className="description" >{text}</p>
                    </div>

                    <div className="skills-icons">
                        {skillsIcon.map((skill, index) => (
                            <skill.logo className={activeButton === index ? 'active icon-skill' : 'icon-skill'} onClick={(e) => (handleButtonClick(index, skill.texto, skill.name))} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Technology;