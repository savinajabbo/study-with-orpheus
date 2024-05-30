import React, { useState } from 'react';

import background1 from '../images/background1.jpeg';
import BackgroundButton from './BackgroundButton';

let selectedBackground = '';

export default function Backgrounds() {
    // Define state to manage selected background
    const [setSelectedBackgroundState] = useState('');

    // Function to handle button click
    const handleBackgroundClick = () => {
        console.log("you reached here")
        setSelectedBackgroundState("aliceblue");
        console.log("setting variable?")
        selectedBackground = "aliceblue"; // Update the exported variable
    };

    return (
        <div>
            {/* Pass the handleBackgroundClick function to the onClick prop */}
            <BackgroundButton onClick={handleBackgroundClick} backgroundSrc={background1} altText="Background 1" />
        </div>
    );
}

// Export the selectedBackground variable
export { selectedBackground };