import React from 'react';
import { useState } from 'react';
import './Experience.css';

function Experience({ data, addToExperience, saveToExperience, removeFromExperience }) {
    // console.log(`type of experience: ${typeof data.experience}`);
    // console.log(`is array? ${Array.isArray(data.experience)}`);
    // console.log(data.experience);
    // console.log('convert');
    // console.log(Object.values(data.experience));
    const experienceArray = Object.values(data.experience);
    let children = '';
    children = experienceArray?.map(exp => {
        return <ChildComponent key={exp.id} 
                        id={exp.id} 
                        data={exp} 
                        saveToExperience={saveToExperience} 
                        removeFromExperience={removeFromExperience}
                        />
    })
    // console.log(`children: ${children}`)
    return (
        <ParentComponent addToExperience={addToExperience}>{children}</ParentComponent>
    )
}

function ParentComponent( {addToExperience, children} ) {
    return (
        <div>
            <h1>Experience</h1>
            <button className='addBtn' onClick={addToExperience}>+ Add item</button>
            {children}
        </div>
    )
}


function ChildComponent( {id, data, saveToExperience, removeFromExperience} ) {
    const [experience, setExperience] = useState({
        id: id,
        company: data.company,
        city: data.city,
        role: data.role,
        from: data.from,
        to: data.to,
        description: data.description,
    })

    const [_, forceUpdate] = React.useReducer((x) => x + 1, 0);

    function onChangeCompany(e) {
        setExperience({
            ...experience,
            company: e.target.value,
        })
    }

    function onChangeCity(e) {
        setExperience({
            ...experience,
            city: e.target.value,
        })
    }

    function onChangeRole(e) {
        setExperience({
            ...experience,
            role: e.target.value,
        })
    }

    function onChangeFrom(e) {
        setExperience({
            ...experience,
            from: e.target.value,
        })
    }

    function onChangeTo(e) {
        setExperience({
            ...experience,
            to: e.target.value,
        })
    }

    function onChangeDescription(e) {
        setExperience({
            ...experience,
            description: e.target.value,
        })
    }

    return (
        <div className='experience-wrapper'>
            <label className='label'>Company Name
                <input className='experience-input' defaultValue={data.company} 
                    type='text' 
                    placeholder='Company Name' 
                    onChange={onChangeCompany}
                />
            </label>

            <label className='label'>City
                <input className='experience-input' defaultValue={data.city}
                    type='text'
                    placeholder='City'
                    onChange={onChangeCity}
                />
            </label>

            <label className='label'>Role
                <input className='experience-input' defaultValue={data.role}
                    type='text'
                    placeholder='Role in the company'
                    onChange={onChangeRole}
                />
            </label>

            <div className='date-wrapper'>
                <label className='label'>From
                    <input className='experience-input' defaultValue={data.from}
                        type='text'
                        placeholder='Date from'
                        onChange={onChangeFrom}
                    />
                </label>

                <label className='label'>To
                    <input className='experience-input' defaultValue={data.to}
                        type='text'
                        placeholder='Date to'
                        onChange={onChangeTo}
                    />
                </label>
            </div>

            <label className='label'> Description or Achievements
                <textarea className='experience-textarea' defaultValue={data.description} 
                    placeholder='Tell us about your achievements and experience' 
                    onChange={onChangeDescription}></textarea>
            </label>
            <div className='buttons-wrapper'>
                <button className='saveBtn non-personal' onClick={() => {saveToExperience(id, experience); forceUpdate()}}>Save</button>
                <button className='removeBtn' onClick={() => {removeFromExperience(id); forceUpdate()}}>- Remove</button>
            </div>
        </div>
    )
}

export default Experience;