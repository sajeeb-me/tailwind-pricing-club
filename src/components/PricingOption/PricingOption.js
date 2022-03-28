import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Feature from '../Feature/Feature';

const PricingOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-white rounded-lg mt-5 p-3'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <p className='my-3'>
                <span className='text-5xl'>${price}</span>
                <span className='text-gray-500'>/month</span>
            </p>
            <h3 className='text-xl font-bold text-left'>Features:</h3>
            {
                features.map(feature => <Feature feature={feature}></Feature>)
            }
            <button className='bg-red-300 w-full font-semibold my-3 py-3 rounded-md text-white flex items-center justify-center hover:bg-transparent border-2 border-red-300 hover:text-red-400 duration-300 ease-in'>
                Buy now
                <ArrowRightIcon className='w-6 h-5 ml-3'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;