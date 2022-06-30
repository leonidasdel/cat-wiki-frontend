import React from 'react';
import { Link } from 'react-router-dom';

import catWikiLogo from '../../assets/images/cat_wiki_logo.svg';
import hero_image_large from '../../assets/images/hero_image_large.png'

import { ROUTE_HOME } from '../../constants';

const SearchBreeds = () => {
    return (
        <div className="container 2xl:max-w-full flex flex-wrap justify-between h-[540px] rounded-t-3xl bg-black bg-contain bg-center">
            <div className='container w-[32%] items-center flex flex-col  justify-center'>
                    <Link to={ROUTE_HOME} className='' >
                        <img src={catWikiLogo} className="h-[100px]  filter invert brightness-0" alt="Flowbite Logo" />
                    </Link>
                    <h3 class="text-xl mb-8  text-white w-[50%]	">Get to know more about your cat breed</h3>
            </div>
            <div className='w-[68%] h-[100%] ml-auto bg-cover bg-center' style={{ backgroundImage: "url(" + hero_image_large + ")" }} ></div>
        </div>
    )
}

export default SearchBreeds;