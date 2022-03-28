import React, { useState } from 'react';
import Links from '../Links/Links';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 1, name: 'Shop', link: '/shop' },
        { id: 1, name: 'Deals', link: '/deals' },
        { id: 1, name: 'Coupons', link: '/coupons' }
    ]
    return (
        <nav className='bg-red-300'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden text-white'>
                {
                    open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>
                }
            </div>
            <ul className={`md:flex justify-center bg-red-300 w-full text-white absolute md:static duration-300 ease-in ${open ? 'top-6' : 'top-[-200px]'}`}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;