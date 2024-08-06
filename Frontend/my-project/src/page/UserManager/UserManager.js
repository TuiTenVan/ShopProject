import React, { useState, useEffect } from 'react';
import { PlusOutlined, QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Table, Button, Space, Popconfirm, Avatar, message } from 'antd';
import { Link } from 'react-router-dom';
import './UserManager.css';
import EditModal from './Modal';
import moment from 'moment';
import { getAllUsers, deleteUser } from "../../services/UserService";

function UserManager() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getAllUsers();
      const formattedData = response.map(user => ({
        key: user.userId,
        avatar: user.avatar || '',
        fullName: user.fullName,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        role: user.role,
        birthDate: user.birthDate,
        gender: user.gender,
      }));
      setData(formattedData);
    } catch (error) {
      // console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      
    } catch (error) {
      // console.error('Error deleting user:', error);
      // message.error('Error deleting user');
    }
    message.success("User deleted successfully");
      fetchData(); 
  };

  const handleEdit = (record) => {
    setCurrentRecord(record);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text) => (
        text ?
          <img src={text} alt="Avatar" style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }} /> :
          <Avatar size={50} icon={<UserOutlined />} />
      ),
    },
    {
      title: 'Tên',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'birthDate',
      key: 'birthDate',
      render: (text) => moment(text).format('DD/MM/YYYY'),
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      render: (text) => {
        switch (text) {
          case 'male':
            return 'Nam';
          case 'female':
            return 'Nữ';
          default:
            return 'Khác';
        }
      },
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>Sửa</Button>
          <Popconfirm
            title="Xóa người dùng"
            description="Bạn có chắc chắn muốn xóa người dùng này?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={() => handleDelete(record.key)} 
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h3 className='header-user'>
        Danh sách người dùng
      </h3>
      <Link to={"/create-user"}>
        <Button style={{ marginBottom: 16 }}>
          <PlusOutlined /> Thêm người dùng
        </Button>
      </Link>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="key" 
        pagination={{ pageSize: 10 }} />
      <EditModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        currentRecord={currentRecord}
        setCurrentRecord={setCurrentRecord}
        fetchData={fetchData} 
      />
    </div>
  );
};

export default UserManager;
