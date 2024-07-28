import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ShopToolbar = () => {
  const handleSearch = (value) => {
    console.log('Search:', value);
  };

  return (
    <div className="shop_toolbar_btn">
      <Input.Search
        placeholder="Search ..."
        onSearch={handleSearch}
        style={{ width: 200 }}
      />   
    </div>
  );
};

export default ShopToolbar;
