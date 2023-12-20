import React from 'react'
import "../css/blocks-info.css" 

class BreathingRate extends React.Component {
    render() {
        return (
            <div className='info'>
                <h1 className='header'>Learn more about the breathing rate</h1> 
                <h3>What is the breathing rate?</h3>
                <p>
                The breathing rate is the number of breaths per minute. When you inhale, the air fills your lungs and oxygenates your blood.
                When you exhale, the lungs release carbon dioxide from the body. 
                </p> 

                <h3>What is the usual respiratory rate?</h3>
                <p>
                Your body regulates your breathing rate so that you get the right amount of oxygen. This means that your breathing rate often changes depending on your activity and physical activity level.
                When you are awake and in a calm position, the breathing rate is usually between 12 and 20 breaths per minute. This is a common meaning for an adult. Children breathe a little more often: from 18 to 30 breaths per minute.
                </p> 
                    
            </div>
        )
    }
} 

export default BreathingRate; 