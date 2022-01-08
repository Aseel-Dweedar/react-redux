import React from 'react'
import Link from './Link';

function Header() {
    return (
        <div className='ui secondary pointing menu ' >
            <Link className='item' path='/'>Accordion</Link>
            <Link className='item' path='/list'>Search</Link>
        </div>
    )
}

export default Header;
