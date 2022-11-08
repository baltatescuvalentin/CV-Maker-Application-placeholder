import React from 'react';
import './Preview.css';
import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { MdWork, MdSchool } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';

function checkForEmpty(...data) {
    for(let i = 0; i < data.length; i++) {
        if(data[i].length !== 0)
            return false;
    }
    return true;
}

function Preview({ data }) {
    const experienceArray = Object.values(data.experience)
    const experienceMap = experienceArray.map(exp => {

        if(checkForEmpty(exp.company, exp.city, exp.role, exp.from, exp.to, exp.description))
            return '';
        else return <ExperienceChild key={exp.id} data={exp} />
    });
    const educationArray = Object.values(data.education);
    const educationMap = educationArray.map(ed => {
        if(checkForEmpty(ed.name, ed.degree, ed.from, ed.to, ed.description))
            return '';
        else return <EducationChild key={ed.id} data={ed} />
    })
    const skillsArray = Object.values(data.skills);
    const skillsMap = skillsArray.map(s => {
        return <h2 key={s.id}>{s.skill}</h2>;
    })

    return (
        <div className='preview' id='preview'>
            <div className='upper-color'></div>
            <div className='personal-wrapper'>
                <div>
                    <p style={{fontSize: '56px', fontWeight: '600', margin: 0}}> {data.personal.firstname} </p>
                    <p style={{fontSize: '56px', fontWeight: '600', margin: 0}}> {data.personal.lastname} </p>
                    <p style={{fontSize: '24px', fontWeight: '500', margin: 0}}> {data.personal.status}</p>
                </div>
                <div style={{marginTop: '24px'}}>
                    { data.personal.email !== '' ? <p className='personal-right-wrapper'> <AiOutlineMail size={'24px'} /> {data.personal.email}</p> : ''}
                    { data.personal.github !== '' ? <p className='personal-right-wrapper'> <AiFillGithub size={'24px'} /> {data.personal.github}</p> : ''}
                    { data.personal.linkedin !== '' ?<p className='personal-right-wrapper'> <AiOutlineLinkedin size={'24px'} /> {data.personal.linkedin}</p> : ''}
                    { data.personal.telephone !== '' ?<p className='personal-right-wrapper'> <AiOutlinePhone size={'24px'} /> {data.personal.telephone}</p> : ''}
                    { data.personal.address !== '' ?<p className='personal-right-wrapper'> <GoLocation size={'24px'} /> {data.personal.address}</p> : ''}
                </div>
            </div>

            <div className='about'>
                {data.personal.description !== '' ?
                    <>
                        <p style={{fontSize: '24px', fontWeight: '600', margin: '0 24px 0 0'}}>About me</p>
                        <p style={{fontSize: '20px', margin: '4px'}}> { data.personal.description }</p>
                    </>
                    : ''}
            </div>

            <div className='line-break-preview'></div>

            <>

                {   educationMap.length > 0 ?
                    <>
                        <div className='wrapper-preview'>
                            <div className='title'>
                                <MdSchool size={36}/>
                                <h1>Education</h1>
                            </div>
                            <EducationParent>{educationMap}</EducationParent>
                        </div>
                    </>
                    : ''
                }
            </>

            <div className='line-break-preview'></div>
            
            <>

                {   experienceMap.length > 0 ?
                    <>
                        <div className='wrapper-preview'>
                            <div className='title'>
                                <MdWork size={36}/>
                                <h1>Experience</h1>
                            </div>
                            <ExperienceParent>{experienceMap}</ExperienceParent>
                        </div>
                    </>
                    : ''
                }
            </>

            <div className='line-break-preview'></div>

            <div className='wrapper-preview'>
                <div className='title'>
                    <GiSkills size={36}/>
                    <h1>Skills</h1>
                </div>
                <div className='displaySkills-preview'>
                    {skillsMap}
                </div>
            </div>

        </div>
    )
}

function ExperienceParent( {children} ) {
    return (
        <div>
            {children}
        </div>
    )
}

function EducationParent( {children} ) {
    return (
        <div>
            {children}
        </div>
    )
}

function EducationChild( {data} ) {

    return (
        <ExperienceParent>
            <div className='education-child'>
                { data.name !== ''  ? 
                    <div className='line-elements'>
                        <p>{data.name}</p> 
                    </div>
                    : ''
                }
                

                { data.degree !== '' ? <p>Position: {data.degree}</p> : '' }

                { data.from !== '' && data.to !== '' ? 
                    <div className='line-elements'>
                        <p>{data.from} to {data.to}</p>
                    </div>
                    : ''
                }

                { data.description !== '' ? <p>{data.description}</p> : '' }
            </div>
        </ExperienceParent>
    )
}

function ExperienceChild( {data} ) {

    return (
        <ExperienceParent>
            <div className='experience-child'>
                { data.company !== '' || data.city !== '' ? 
                    <div className='line-elements'>
                        <p>{data.company}</p> 
                        <p>{data.city}</p> 
                    </div>
                    : ''
                }
                

                { data.role !== '' ? <p>Position: {data.role}</p> : '' }

                { data.from !== '' && data.to !== '' ? 
                    <div className='line-elements'>
                        <p>{data.from} to {data.to}</p>
                    </div>
                    : ''
                }

                { data.description !== '' ? <p>{data.description}</p> : '' }
            </div>
        </ExperienceParent>
    )
}

export default Preview;