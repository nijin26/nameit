import React from 'react';

import './Header.css';

interface HeaderChangeType {
    headerChange: boolean;
}

const Header: React.FC<HeaderChangeType> = ({ headerChange }) => {
    return (
        <div className="head-container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`head-image ${
                    headerChange
                        ? 'head-image-exapanded'
                        : 'head-image-contracted'
                }`}
                alt="Header Image"
            />
            <h1
                className={`head-text ${
                    headerChange
                        ? 'head-text-exapanded'
                        : 'head-text-contracted'
                }`}
            >
                Name It
            </h1>
        </div>
    );
};

export default Header;
