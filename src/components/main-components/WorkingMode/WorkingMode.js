import React from 'react';
import './WorkingMode.css';

function WorkingMode({mode, changeMode}) {

    function onPress(e) {
        if(e.target.classList.contains('working-button-active')) {
            return;
        }
        changeMode();
    }

    return (
        <div className='working-mode'>
            <h2>Create your own CV!</h2>
            <h4 style={{color: 'red'}}>*Remember to press 'Save' button in order to add to the CV. Blank sections will NOT be added to the CV!</h4>
            <h4>Change between Working Mode and Preview Mode</h4>
            <div className='wrapper'>
                <button className={mode ? 'working-button-active' : 'working-button'} onClick={e => {
                    onPress(e);
                    }
                }>Working Mode</button>
                <div className='between-buttons'>or</div>
                <button className={mode ? 'working-button' : 'working-button-active'} onClick={e => {
                    onPress(e);
                    }
                }>Preview Mode</button>
            </div>
        </div>
    )
}

export default WorkingMode;