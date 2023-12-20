import React, { useState } from 'react'; 
import '../css/activity.css'

const Activity = () => {
  const [activityType, setActivityType] = useState('walking');
  const [duration, setDuration] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const activityTypeChange = (event) => {
    setActivityType(event.target.value);
  };

  const changeDuration = (event) => {
    setDuration(parseInt(event.target.value, 10));
  };

  const calculateCaloriesBurned = () => {
    const activityCoefficients = {
      walking: 5, 
      running: 10, 
      swimming: 4
    };

    const calories = duration * activityCoefficients[activityType];
    setCaloriesBurned(calories);
  };

  const submitCalories = (event) => {
    event.preventDefault();
    calculateCaloriesBurned();
    
    const activityData = {
        activityType,
        duration,
        caloriesBurned,
      };
    };

  return (
    <div className='activity'>
      <h2>Physical activity</h2>
      <form onSubmit={submitCalories}>
        <label>
          Activity type: 
          <select value={activityType} onChange={activityTypeChange}>
            <option value="walking">Walking</option>
            <option value="running">Running</option> 
            <option value="swimming">Swimming</option>
          </select>
        </label>
        <br />
        <label className='duration'>
          Duration (in minutes):
          <input type="number" value={duration} onChange={changeDuration} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
      <div>
        <h4>Results:</h4>
        {caloriesBurned !== null && <p>Calories burned: {caloriesBurned} kcal</p>}
      </div>
    </div>
  );
};

export default Activity;
