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
        <nav>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute duration-300 ease-in ${open ? 'top-6' : 'top-[-200px]'}`}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;