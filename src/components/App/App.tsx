import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

import './App.css';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <SearchBox />
        </div>
    );
};

export default App;
