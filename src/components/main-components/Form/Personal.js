import React from 'react';
import { useState } from 'react';
import './Personal.css';
import './Form.css';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

function Personal({ data, saveToPersonal }) {
    const [personal, setPersonal] = useState({
        firstname: data.personal.firstname,
        lastname: data.personal.lastname,
        status: data.personal.status,
        email: data.personal.email,
        telephone: data.personal.telephone,
        github: data.personal.github,
        address: data.personal.address,
        linkedin: data.personal.linkedin,
        description: data.personal.description,
    })

    // function onChangeFirstname(e, firstname) {
    //     console.log(firstname)
    //     setPersonal({
    //         ...personal,
    //         firstname: firstname + e.target.value
    //     })
    // }
    function onChangeFirstname(e) {
        setPersonal({
            ...personal,
            firstname: e.target.value
        })
    }

    function onChangeLastname(e) {
        setPersonal({
            ...personal,
            lastname: e.target.value
        })
    }
    
    function onChangeStatus(e) {
        setPersonal({
            ...personal,
            status: e.target.value
        })
    } 

    function onChangeGithub(e) {
        setPersonal({
            ...personal,
            github: e.target.value
        })
    } 

    function onChangeEmail(e) {
        setPersonal({
            ...personal,
            email: e.target.value
        })
    }

    function onChangeTelephone(e) {
        setPersonal({
            ...personal,
            telephone: e.target.value
        })
    }

    function onChangeAddress(e) {
        setPersonal({
            ...personal,
            address: e.target.value
        })
    }

    function onChangeLinkedin(e) {
        setPersonal({
            ...personal,
            linkedin: e.target.value
        })
    }

    function onChangeDescription(e) {
        setPersonal({
            ...personal,
            description: e.target.value
        })
    }

    return (
        <div className='personal'>
            <h1 className='personal-title'> Personal </h1>
            <div className='input-wrapper'>
                <CgProfile size={'24px'}/>
                <input defaultValue={data.personal.firstname} type='text' id='firstname' placeholder='First Name' onChange={onChangeFirstname}/>
            </div>

            <div className='input-wrapper'>
                <CgProfile size={'24px'}/>
                <input defaultValue={data.personal.lastname} type='text' id='lastname' placeholder='Last Name' onChange={onChangeLastname}/>
            </div>
            

            <div className='input-wrapper'>
                <CgProfile size={'24px'}/>
                <input defaultValue={data.personal.status} type='text' id='status' placeholder='Status' onChange={onChangeStatus}/>
            </div>

            <div className='input-wrapper'>
                <AiFillGithub size={'24px'}/>
                <input defaultValue={data.personal.github} type='text' id='github' placeholder='GitHub' onChange={onChangeGithub}/>
            </div>

            <div className='input-wrapper'>
                <AiOutlineMail size={'24px'} />
                <input defaultValue={data.personal.email} type='text' id='email' placeholder='Email' onChange={onChangeEmail}/>
            </div>

            <div className='input-wrapper'>
                <AiOutlineLinkedin size={'24px'} />
                <input defaultValue={data.personal.linkedin} type='text' id='linkedin' placeholder='LinkedIn' onChange={onChangeLinkedin}/>
            </div>

            <div className='input-wrapper'>
                <AiOutlinePhone size={'24px'} />
                <input defaultValue={data.personal.telephone} type='text' id='telephone' placeholder='Telephone' onChange={onChangeTelephone}/>
            </div>

            <div className='input-wrapper'>
                <GoLocation size={'24px'} />
                <input defaultValue={data.personal.address} type='text' id='address' placeholder='Address' onChange={onChangeAddress}/>
            </div>

            <textarea defaultValue={data.personal.description} id='description' placeholder='Tell us something about you' onChange={onChangeDescription}></textarea>

            <button className='saveBtn' onClick={() => saveToPersonal(personal)}> Save </button>
        </div>
    )
}

export default Personal;