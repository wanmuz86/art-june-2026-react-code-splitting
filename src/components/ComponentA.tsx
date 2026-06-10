import React from 'react';


const ComponentA: React.FC = () => {

    const handleButtonClick = () => {
        // Dynamically import the sum function (lazy load)
        import('../utils/sum').then(({ sum }) => {
            // sum method is imported when needed
            const sumResult = sum(3, 5);
            console.log(sumResult);
        });
    };

    return <div>

        <h2>Component A Loaded</h2>
        <button onClick={handleButtonClick}>Click Button</button>

    </div>;
};


export default ComponentA;