import React, { useState } from 'react';
import { PlusOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Table, Button, Space, Checkbox, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

import "./ProductManager.css"

const ProductManager = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState([
    {
      key: '1',
      image: 'http://res.cloudinary.com/dnsvkorwf/image/upload/v1722355623/a08n0dvmdyvskxhh7hfu.jpg',
      productName: 'Sản phẩm 1',
      type: 'Loại A',
      color: 'Đỏ',
      quantity: 10,
      price: '20$',
      discountAmount: "7%",
      category: 'Shoes',
    },
    {
      key: '2',
      image: 'http://res.cloudinary.com/dnsvkorwf/image/upload/v1722355623/a08n0dvmdyvskxhh7hfu.jpg',
      productName: 'Sản phẩm 2',
      type: 'Loại B',
      color: 'Xanh',
      quantity: 20,
      price: '20$',
      discountAmount: "7%",
      category: 'Shoes',
    },
    {
      key: '3',
      image: 'http://res.cloudinary.com/dnsvkorwf/image/upload/v1722355623/a08n0dvmdyvskxhh7hfu.jpg',
      productName: 'Sản phẩm 3',
      type: 'Loại C',
      color: 'Vàng',
      quantity: 30,
      price: '20$',
      discountAmount: "7%",
      category: 'Shoes',
    },
    {
      key: '4',
      image: 'http://res.cloudinary.com/dnsvkorwf/image/upload/v1722355623/a08n0dvmdyvskxhh7hfu.jpg',
      productName: 'Sản phẩm 4',
      type: 'Loại D',
      color: 'Đen',
      quantity: 40,
      price: '20$',
      discountAmount: "7%",
      category: 'Shoes',
    },
    {
      key: '5',
      image: 'http://res.cloudinary.com/dnsvkorwf/image/upload/v1722355623/a08n0dvmdyvskxhh7hfu.jpg',
      productName: 'Sản phẩm 5',
      type: 'Loại E',
      color: 'Trắng',
      quantity: 50,
      price: '20$',
      discountAmount: "7%",
      category: 'Shoes',
    },
  ]);

  const handleCheckboxChange = (e, key) => {
    const { checked } = e.target;
    setSelectedRowKeys((prev) =>
      checked ? [...prev, key] : prev.filter((k) => k !== key)
    );
  };

  const handleSelectAllChange = (e) => {
    const { checked } = e.target;
    setSelectAll(checked);
    setSelectedRowKeys(checked ? data.map(item => item.key) : []);
  };

  const handleAdd = () => {
    console.log('Thêm sản phẩm mới');
  };

  const handleEdit = (record) => {
    setCurrentRecord(record);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    setData(data.filter(item => item.key !== key));
    setSelectedRowKeys(selectedRowKeys.filter(k => k !== key));
    console.log('Xóa sản phẩm với key:', key);
  };

  const handleDeleteAll = () => {
    setData([]);
    setSelectedRowKeys([]);
    setSelectAll(false);
    console.log('Xóa tất cả sản phẩm');
  };

  const columns = [
    {
      title: (
        <Checkbox
          indeterminate={selectedRowKeys.length > 0 && selectedRowKeys.length < data.length}
          checked={selectAll}
          onChange={handleSelectAllChange}
        />
      ),
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: (text, record) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => handleCheckboxChange(e, record.key)}
        />
      ),
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="Avatar" style={{ width: 50, height: 50, borderRadius: '50%' }} />,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Loại',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Màu sắc',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Giảm giá',
      dataIndex: 'discountAmount',
      key: 'discountAmount',
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/product-detail-admin/${record.key}`} state={{ product: record }}>
            <Button>Chi tiết</Button>
          </Link>
          {/* <Button type="primary" onClick={() => handleEdit(record)}>Sửa</Button> */}
          <Popconfirm
            title="Delete the product"
            description="Are you sure to delete this product?"
            onConfirm={() => handleDelete(record.key)}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h3 className='header-product'>
        Danh sách sản phẩm
      </h3>
      <Link to={"/create-product"}>
        <Button onClick={handleAdd} style={{ marginBottom: 16 }}>
          <PlusOutlined /> Thêm sản phẩm
        </Button>
      </Link>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="key"
        pagination={{ pageSize: 10 }} />
    </div>
  );
};

export default ProductManager;
