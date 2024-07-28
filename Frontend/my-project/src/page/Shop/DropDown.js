import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const DropDown = () => {
  return (
    <div className="niceselect_option" style={{ width: '30%' }}>
      <Select defaultValue="1" className="select_option" id="short" style={{ width: '100%' }}>
        <Option value="1">Sort by average rating</Option>
        <Option value="2">Sort by popularity</Option>
        <Option value="3">Sort by newness</Option>
        <Option value="4">Sort by price: low to high</Option>
        <Option value="5">Sort by price: high to low</Option>
        <Option value="6">Product Name: Z</Option>
      </Select>
    </div>
  );
};

export default DropDown;
