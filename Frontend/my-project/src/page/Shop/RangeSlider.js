import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import CSS của rc-slider

const RangeSliderForm = () => {
  const [sliderValue, setSliderValue] = useState([50, 500]);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div id="slider-range">
        <Slider
          range
          min={50}
          max={500}
          defaultValue={[50, 500]}
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
      <button type="submit">Filter</button>
      <input type="text" name="text" id="amount" value={`$${sliderValue[0]} - $${sliderValue[1]}`} readOnly />
    </form>
  );
};

export default RangeSliderForm;
