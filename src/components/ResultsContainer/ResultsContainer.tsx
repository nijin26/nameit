import React from 'react';

import NameCard from './NameCard/NameCard';

import './ResultsContainer.css';

interface NameType {
    suggestedNames: string[];
}

const ResultsContainer: React.FC<NameType> = ({ suggestedNames }) => {
    const Names = suggestedNames.map((item) => (
        <NameCard key={item} name={item} />
    ));

    return <div className="results-container">{Names}</div>;
};

export default ResultsContainer;
