import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row px-2 ">
            <h2>
                <a className='my-name' data-testid="link" href="/">
                    John Hayes Nielsen
        </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About Me</a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
