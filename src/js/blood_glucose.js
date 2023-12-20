import React from 'react'
import "../css/blocks-info.css" 

class BloodGlucose extends React.Component {
    render() {
        return (
            <div className='info'>
                <h1 className='header'>Details about blood glucose</h1> 
                <h3>What is blood glucose?</h3>
                <p>
                    Glucose is the most common source of energy for the body.
                    In particular, it is one of the forms of sugar that the body can absorb after digesting food.
                </p> 
                <p>
                Blood glucose levels change throughout the day. They are usually lowest after a long sleep or a prolonged break between meals and highest after a meal. When the pancreas recognizes an increase in blood glucose levels, it secretes a hormone called "insulin." Insulin lowers glucose levels and acts as the key that allows glucose to enter the body's cells.                
                </p> 
                <p>
                Blood glucose levels change naturally, but there are target, elevated and lowered ranges. If you manage to maintain an average glucose level within the target range, this has a positive effect on the overall health of your body.
                </p> 

                <h3>Why pay attention to this?</h3>
                <p>
                Information about your blood glucose levels can help you assess your risk of diabetes or determine if you already have diabetes. This is particularly crucial because diabetes is one of the most common causes of death worldwide, and the number of people diagnosed with it is continually increasing. 
                </p> 
                <p>
                Elevated sugar levels can lead to damage in blood vessels and other body systems. Consequently, individuals with diabetes are at an elevated risk of serious health issues, including heart attacks, strokes, vision impairment or blindness, and kidney failure. Moreover, they often experience weakened immunity, an increased susceptibility to infections, poor blood circulation in the lower extremities, and damage to the nervous system.                 
                </p> 
                    
            </div>
        )
    }
} 

export default BloodGlucose; 