import React, {useState} from 'react'; 
import '../css/waterCell.css';

const WaterCell = ({ amount, onChange }) => {
  const [inputValue, setInputValue] = useState(amount);

  const handleInputChange = (event) => {
    const newAmount = event.target.value;
    setInputValue(newAmount);
    onChange(newAmount);
  };

  return (
    <td>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </td>
  );
};

export default WaterCell;
