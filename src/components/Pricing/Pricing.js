import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0.00, features: [
                'Lifetime free',
                'Limited Deals',
                'Local Deals',
                'Fantastic Deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, features: [
                'All Features on Free',
                'Limited Deals',
                'Local Deals',
                'Fantastic Deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'All Features on Regular',
                'Limited Deals',
                'Local Deals',
                'Fantastic Deals'
            ]
        },
    ]
    return (
        <div className='bg-red-300 my-6 p-5'>
            <h1 className='text-5xl font-mono text-white'>Best Deal in the Town</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos culpa odit quia, expedita aperiam architecto quae sunt dolore soluta ut.</p>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    pricingOption.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    >
                    </PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;