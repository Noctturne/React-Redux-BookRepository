import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header text-center p-4">
            <div className="row g-0">
                <h1>
                    <Link to={'/'} className="text-light">
                        <strong>Book</strong>Repository
                    </Link>
                </h1>
            </div>
        </header>
    );
}

export default Header;