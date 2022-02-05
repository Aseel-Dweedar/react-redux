import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

function Header() {
    return (
        <div className='ui secondary pointing menu' >
            {/* this kind of navigation -when the user click a link- called "intentional navigation"  */}
            <Link to="/" className="item" >Streamy</Link>
            <div className='right menu'>
                <Link to="/" className="item" >All Streams</Link>
                <GoogleAuth />
            </div>
        </div>
    );
}

export default Header;
