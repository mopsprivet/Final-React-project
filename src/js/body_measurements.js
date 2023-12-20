import React, { useState, useEffect } from 'react'; 
import '../css/body-measurements.css';

const BodyMeasurements = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);

  const username = '';

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(username) || '{}');
    setHeight(savedData.height || '');
    setWeight(savedData.weight || '');
    setAge(savedData.age || '');
    setHeightUnit(savedData.heightUnit || 'cm');
    setWeightUnit(savedData.weightUnit || 'kg');
    setGender(savedData.gender || '');
  }, [username]);

  const saveData = () => {
    const newData = {
      height,
      weight,
      age,
      heightUnit,
      weightUnit,
      gender,
    };

    localStorage.setItem(username, JSON.stringify(newData));
  };

  const calculateBmi = () => {
    const heightInMeters = parseFloat(height) / (heightUnit === 'cm' ? 100 : 1);
    const weightInKg = parseFloat(weight) * (weightUnit === 'lb' ? 0.453592 : 1);

    if (!isNaN(heightInMeters) && !isNaN(weightInKg) && heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi(null);
    }
  };

  return (
    <div className='body-measurements'>
      <h1>Body Measurements</h1>
      <label>
        Height:
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
          <option value="cm"> cm </option>
          <option value="feet"> feet </option>
        </select>
      </label>
      <br />
      <label>
        Weight:
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
          <option value="kg"> kg </option>
          <option value="lb"> lb </option>
        </select>
      </label>
      <br />
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male"> male </option>
          <option value="female"> female </option>
        </select>
      </label>
      <br />
      <button onClick={calculateBmi}>Calculate BMI</button>
      <br />
      {bmi !== null && <p>Your BMI is: {bmi}</p>}
      <br />
      <button onClick={saveData}>Save</button>
    </div>
  );
};

export default BodyMeasurements;
