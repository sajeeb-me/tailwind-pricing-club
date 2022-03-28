import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const Feature = ({ feature }) => {
    return (
        <p className='flex items-center my-2'>
            <CheckCircleIcon className='w-5 h-5 mr-2 text-red-400'></CheckCircleIcon>
            {feature}
        </p>
    );
};

export default Feature;