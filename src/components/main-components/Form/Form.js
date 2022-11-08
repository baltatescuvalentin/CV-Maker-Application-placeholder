import React from 'react';
import Education from './Education';
import Experience from './Experience';
import './Form.css';
import Personal from './Personal';
import Skills from './Skills';


function Form({ data, functions }) {

    return (
        <div className='form-page'>
            <Personal data={data} saveToPersonal={functions.saveToPersonal}/>
            <div className='line-break'></div>
            <Education data={data}
                    addToEducation={functions.addToEducation}
                    saveToEducation={functions.saveToEducation}
                    removeFromEducation={functions.removeFromEducation} />
            <div className='line-break'></div>
            <Experience data={data} 
                    addToExperience={functions.addToExperience}
                    saveToExperience={functions.saveToExperience}
                    removeFromExperience={functions.removeFromExperience} />
            <div className='line-break'></div>
            <Skills data={data} addToSkills={functions.addToSkills} removeFromSkills={functions.removeFromSkills} />
        </div>
    )
}

export default Form;