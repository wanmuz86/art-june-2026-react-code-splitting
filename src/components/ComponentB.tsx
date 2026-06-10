import React from 'react';


const ComponentB: React.FC = () => {
    throw new Error("Something is wrong") // to simulate an error
 return <div>Component B Loaded</div>;
};


export default ComponentB;