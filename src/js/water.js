import React, { useState, useEffect } from 'react';
import WaterCell from './waterCell'; 
import '../css/water.css';

const generateEmptyData = (currentDate) => {
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = endOfMonth.getDate();

  const emptyData = {};

  for (let hour = 0; hour < 24; hour++) {
    emptyData[hour] = {};

    for (let day = 1; day <= daysInMonth; day++) {
      emptyData[hour][day] = '';
    }
  }

  return emptyData;
};

const formatHour = (hour) => hour.toString().padStart(2, '0') + ':00';

const Water = () => {
  const [waterData, setWaterData] = useState(generateEmptyData(new Date()));
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setWaterData(generateEmptyData(currentDate));
  }, [currentDate]);

  const handleAmountChange = (hour, day, amount) => {
    const newData = { ...waterData };
    newData[hour][day] = amount;
    setWaterData(newData);
  };

  const handleMonthChange = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); 

  return (
    <div className='water-tracker'>
      <h1>Water Tracker</h1>
      <button className='prev-month' onClick={() => handleMonthChange(-1)}>Previous Month</button>
      <span>{`${currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}`}</span>
      <button className='next-month' onClick={() => handleMonthChange(1)}>Next Month</button>

      <table>
        <thead>
          <tr>
            <th>Day / Time</th>
            {Array.from({ length: daysInMonth }, (_, day) => (
              <th key={day}>{day + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 24 }, (_, hour) => (
            <tr key={hour}>
              <td>{formatHour(hour)}</td>
              {Array.from({ length: daysInMonth }, (_, day) => (
                <WaterCell
                  key={day}
                  amount={waterData[hour][day + 1]}
                  onChange={(amount) => handleAmountChange(hour, day + 1, amount)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Water;
