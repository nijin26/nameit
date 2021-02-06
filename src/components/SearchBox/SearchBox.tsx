import React from 'react';

import './SearchBox.css';

interface SearchInput {
    onInputChange: (e: string) => void;
}

const SearchBox: React.FC<SearchInput> = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onInputChange(event.target.value)
                }
                type="text"
                placeholder="Type Keywords"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
