import React from 'react';
import { useState } from 'react';
import './Experience.css';

function Education({ data, addToEducation, saveToEducation, removeFromEducation }) {
    const educationArray = Object.values(data.education);
    let children = '';
    children = educationArray?.map(exp => {
        return <ChildComponent key={exp.id} 
                        id={exp.id} 
                        data={exp} 
                        saveToEducation={saveToEducation} 
                        removeFromEducation={removeFromEducation}
                        />
    })

    return (
        <ParentComponent addToEducation={addToEducation}>{children}</ParentComponent>
    )
}

function ParentComponent( {addToEducation, children} ) {
    return (
        <div>
            <h1>Education</h1>
            <button className='addBtn' onClick={addToEducation}>+ Add item</button>
            {children}
        </div>
    )
}


function ChildComponent( {id, data, saveToEducation, removeFromEducation} ) {
    const [education, setEducation] = useState({
        id: id,
        name: data.name,
        degree: data.degree,
        from: data.from,
        to: data.to,
        description: data.description,
    })

    const [_, forceUpdate] = React.useReducer((x) => x + 1, 0);

    function onChangeName(e) {
        setEducation({
            ...education,
            name: e.target.value,
        })
    }

    function onChangeDegree(e) {
        setEducation({
            ...education,
            degree: e.target.value,
        })
    }

    function onChangeFrom(e) {
        setEducation({
            ...education,
            from: e.target.value,
        })
    }

    function onChangeTo(e) {
        setEducation({
            ...education,
            to: e.target.value,
        })
    }

    function onChangeDescription(e) {
        setEducation({
            ...education,
            description: e.target.value,
        })
    }

    return (
        <div className='education-wrapper'>
            <label className='label'>University/School Name
                <input className='education-input' defaultValue={data.name} 
                    type='text' 
                    placeholder='University Name' 
                    onChange={onChangeName}
                />
            </label>

            <label className='label'>Degree
                <input className='education-input' defaultValue={data.role}
                    type='text'
                    placeholder='Degree or Traineeships or something else'
                    onChange={onChangeDegree}
                />
            </label>

            <div className='date-wrapper'>
                <label className='label'>From
                    <input className='education-input' defaultValue={data.from}
                        type='text'
                        placeholder='Date from'
                        onChange={onChangeFrom}
                    />
                </label>

                <label className='label'>To
                    <input className='education-input' defaultValue={data.to}
                        type='text'
                        placeholder='Date to'
                        onChange={onChangeTo}
                    />
                </label>
            </div>

            <label className='label'> Description or Achievements
                <textarea className='education-textarea' defaultValue={data.description} 
                    placeholder='Tell us about your achievements and education' 
                    onChange={onChangeDescription}></textarea>
            </label>
            <div className='buttons-wrapper'>
                <button className='saveBtn non-personal' onClick={() => {saveToEducation(id, education); forceUpdate()}}>Save</button>
                <button className='removeBtn' onClick={() => {removeFromEducation(id); forceUpdate()}}>- Remove</button>
            </div>
        </div>
    )
}

export default Education;