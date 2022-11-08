import React from 'react';
import { useState } from 'react';
import './Skills.css';
import { v4 as uuidv4 } from 'uuid';
import { TiDelete } from 'react-icons/ti';
import { IconContext } from "react-icons";

function Skills( { data, addToSkills, removeFromSkills} ) {
    const [skill, setSkill] = useState('');
    const skillsArray = Object.values(data.skills);
    let children = '';
    children = skillsArray?.map(s => {
        return <SkillsChild key={s.id} skillElem={s} removeFromSkills={removeFromSkills}/>
    })

    function onChangeSkill(e) {
        setSkill(e.target.value);
    }

    return (
        <div>
            <div className='skills-wrapper'>
                <input onFocus={(e) => e.target.value=''} className='skillsInput' type='text' id='skills' placeholder='What skills do you have?' onChange={onChangeSkill} />
                <button className='addSkillBtn' onClick={() => addToSkills(skill, uuidv4())}> + Add Skill</button>
            </div>
            <SkillsParent>{children}</SkillsParent>
        </div>
    )
}

function SkillsParent( {children} ) {
    return (
        <div className='displaySkills'>
            {children}
        </div>
    )
}

function SkillsChild({ skillElem, removeFromSkills }) {

    return (
        <>
            {   skillElem.skill !== '' ? 
                <div className='line-elements gap'>
                    <p style={{fontSize: '20px'}}>{skillElem.skill}</p>
                    <IconContext.Provider value={{ size: 30 }}>
                        <TiDelete onClick={() => removeFromSkills(skillElem.id)}/>
                    </IconContext.Provider>
                </div>
                : ''
            }
        </>
    )
}

export default Skills;