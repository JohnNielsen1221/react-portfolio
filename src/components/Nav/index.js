import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const { navSelected, setNavSelected } = props;

    return (
        <header className="flex-row px-2 ">
            <h2>
                <a className='my-name' href="/">
                    John Hayes Nielsen
        </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setNavSelected("about")}>About Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio" onClick={() => setNavSelected("portfolio")}>Portfolio</a>
                    </li>
                    <li className={`mx-2`}>
                        <a href="#resume" onClick={() => setNavSelected("resume")}>Resume</a>
                    </li>
                    <li className={`mx-2`}>
                        <a href="#contact" onClick={() => setNavSelected("contact")}>Contact</a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;
