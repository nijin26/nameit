import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Footer from '../Footer/Footer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App: React.FC = () => {
    const [headerChange, setHeaderChange] = React.useState<boolean>(true);
    const [suggestedName, setSuggestedNames] = React.useState<string[]>([]);
    const handleInputChange = (e: string) => {
        setHeaderChange(!e);
        setSuggestedNames(e ? name(e) : []);
    };

    return (
        <div className="container">
            <Header headerChange={headerChange} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedName} />
            <Footer />
        </div>
    );
};

export default App;
