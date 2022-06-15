import React from 'react';
import { Link } from 'react-router-dom';
import catWikiLogo from '../../assets/images/cat_wiki_logo.svg';

import { ROUTE_HOME} from '../../constants';

const MainNav = () => {
    return (
        <nav className='pt-[36px]'>
            <div className="container flex flex-wrap justify-between">
                <Link to={ ROUTE_HOME } className="flex items-center">
                    <img src={ catWikiLogo } className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                </Link>
            </div>
        </nav>
    );
}

export default MainNav;
