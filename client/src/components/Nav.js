import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
<header>
    <div className='container'>
        <Link to='/'>
            <h1>Hello</h1>
        </Link>
        <nav>
            <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up </Link>
            </div>
        </nav>
    </div>
</header>

    );
}

export default Nav 