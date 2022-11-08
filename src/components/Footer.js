import React from 'react';
import { BsGithub } from 'react-icons/bs';

function Footer() {



        let date = new Date().getFullYear();

        return (
            <footer>
                <p>
                    Copyright©baltatescuvalentin {date} 
                </p>
                <a href='https://github.com/baltatescuvalentin' target="_blank" rel="noreferrer">
                    <BsGithub size={24} color='white' />
                </a>
            </footer>
        )
    
}

export default Footer;