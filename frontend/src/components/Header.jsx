import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
         <header className="bg-black text-white p-4">
            <nav className="flex items-right justify-between">
                <Link to="/" className="text-xl font-bold">Cohabit</Link>
                <div className="flex items-right gap-4">
                <Link to="/login" className="font-semibold" >Login</Link>
                <Link to="/listings" className="font-semibold items-right">Listings</Link>
                <Link to="/new" className="font-semibold items-right">New Opportunities</Link>
            </div></nav>
        </header>
    );
};

export default Header;