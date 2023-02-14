import React from 'react';
import { useState } from 'react';
import Form from './main-components/Form/Form';
import Preview from './main-components/Preview/Preview';
import WorkingMode from './main-components/WorkingMode/WorkingMode';
import { v4 as uuidv4 } from 'uuid';
import Download from './main-components/Download/Download';


function Main() {

    const [data, setData] = useState({
        personal: {
            firstname: '',
            lastname: '',
            status: '',
            email: '',
            telephone: '',
            github: '',
            address: '',
            linkedin: '',
            description: '',
        },
        experience: [
            {
                id: uuidv4(),
                company: '',
                city: '',
                role: '',
                from: '',
                to: '',
                description: '',
            },
        ],
        education: [
            {
                id: uuidv4(),
                name: '',
                degree: '',
                from: '',
                to: '',
                description: '',
            }
        ],
        skills: [],

    });
    const [workingMode, setWorkingMode] = useState(true);

    function changeMode() {
        setWorkingMode(!workingMode);
    }

    function handleSaveToPersonal(personal) {
        setData({
            ...data,
            personal: {
                firstname: personal.firstname,
                lastname: personal.lastname,
                status: personal.status,
                email: personal.email,
                telephone: personal.telephone,
                github: personal.github,
                address: personal.address,
                linkedin: personal.linkedin,
                description: personal.description,
            }
        })
    }

    function handleAddToExperience() {

        setData({
            ...data,
            experience: [
                ...data.experience,
                {
                    id: uuidv4(),
                    company: '',
                    city: '',
                    role: '',
                    from: '',
                    to: '',
                    description: '',
                }
            ]
        })
    }

    function handleSaveToExperience(id, experience) {
        const experienceMap = data.experience.map(exp => {
            if(exp.id === id) {
                return {
                    ...exp,
                    company: experience.company,
                    city: experience.city,
                    role: experience.role,
                    from: experience.from,
                    to: experience.to,
                    description: experience.description,
                }
            }
            else {
                return exp;
            }
        })

        setData({
            ...data,
            experience: [
                ...experienceMap,
            ]
        })
    }

    function handleRemoveFromExperience(id) {
        const experienceFilter = data.experience.filter(exp => exp.id !== id);
        setData({
            ...data,
            experience: [
                ...experienceFilter,
            ]
        })
    }

    function handleAddToEducation() {
        setData({
            ...data,
            education: [
                ...data.education,
                {
                    id: uuidv4(),
                    name: '',
                    degree: '',
                    from: '',
                    to: '',
                    description: '',
                }
            ]
        })
    }

    function handleSaveToEducation(id, education) {
        const educationMap = data.education.map(ed => {
            if(ed.id === id) {
                return {
                    ...ed,
                    name: education.name,
                    degree: education.degree,
                    from: education.from,
                    to: education.to,
                    description: education.description,
                }
            }
            else {
                return ed;
            }
        })

        setData({
            ...data,
            education: [
                ...educationMap,
            ]
        })
    }

    function handleRemoveFromEducation(id) {
        const educationFilter = data.education.filter(exp => exp.id !== id);
        setData({
            ...data,
            education: [
                ...educationFilter,
            ]
        })
    }

    function handleAddToSkills(skill, id) {
        setData({
            ...data,
            skills: [
                ...data.skills,
                {
                    id: id,
                    skill: skill,
                },
            ]
        })

    }

    function handleRemoveFromSkills(id) {
        const skillsFilter = data.skills.filter(s => s.id !== id);
        console.log(skillsFilter);
        setData({
            ...data,
            skills: [
                ...skillsFilter,
            ]
        })
    }

    const functions = {
        saveToPersonal: handleSaveToPersonal,
        addToExperience: handleAddToExperience,
        saveToExperience: handleSaveToExperience,
        removeFromExperience: handleRemoveFromExperience,
        addToSkills: handleAddToSkills,
        removeFromSkills: handleRemoveFromSkills,
        addToEducation: handleAddToEducation,
        saveToEducation: handleSaveToEducation,
        removeFromEducation: handleRemoveFromEducation,
    }

    return (
        <main>
            <WorkingMode mode={workingMode} changeMode={changeMode}/>
            { !workingMode ? 
                <div className='preview-wrapper'>
                    <Preview data={data} /> 
                    <Download data={data}/>
                </div>
            : <Form data={data} functions={functions}/>} 
            
        </main>
    )
}

export default Main;