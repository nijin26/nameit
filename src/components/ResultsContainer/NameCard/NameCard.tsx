import React from 'react';
import './NameCard.css';

interface NameType {
    name: string;
}

const nameCheap =
    'https://www.namecheap.com/domains/registration/results/?domain=%27%3B';

const NameCard: React.FC<NameType> = ({ name }) => {
    return (
        <a target="_blank" className="link" href={`${nameCheap}${name}`}>
            <div className="namecard">
                <p className="name"> {name} </p>
            </div>
        </a>
    );
};

export default NameCard;
