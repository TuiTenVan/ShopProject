import React from 'react';
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Modal, Form, Input, DatePicker, Radio, Upload, message, Select, Button } from 'antd';
import moment from 'moment';
import { updateUser, uploadAvatar } from "../../services/UserService";
const { Option } = Select;

const EditModal = ({ isModalVisible, setIsModalVisible, currentRecord, setCurrentRecord, fetchData }) => {
  const [form] = Form.useForm();
  const [avatarFile, setAvatarFile] = React.useState(null);
  const [avatarPreview, setAvatarPreview] = React.useState(currentRecord?.avatar || ''); // Thêm trạng thái để lưu URL avatar hiện tại

  React.useEffect(() => {
    if (currentRecord) {
      form.setFieldsValue({
        userId: currentRecord.key,
        fullName: currentRecord.fullName,
        email: currentRecord.email,
        address: currentRecord.address,
        role: currentRecord.role,
        birthDate: currentRecord.birthDate ? moment(currentRecord.birthDate) : null,
        gender: currentRecord.gender,
        phoneNumber: currentRecord.phoneNumber,
      });
      setAvatarPreview(currentRecord.avatar || '');
      setAvatarFile(null); 
    }
  }, [currentRecord, form]);

  const handleOk = async () => {
    const loadingMessage = message.loading('Đang lưu...', 0); 
    try {
      const values = await form.validateFields();
      if (avatarFile) {
        const avatarUrl = await uploadAvatar(avatarFile, currentRecord.key);
        values.avatar = avatarUrl;
      } else {
        values.avatar = avatarPreview; 
      }

      await updateUser(currentRecord.key, {
        ...values,
        birthDate: values.birthDate.format('YYYY-MM-DD'), 
        gender: values.gender,
        fullName: values.fullName,
        role: values.role,
        address: values.address,
        phoneNumber: values.phoneNumber,
        email: values.email,
        avatarUrl: values.avatarUrl
      });
      if (fetchData) fetchData(); 
    } catch (error) {
      // message.error('Cập nhật người dùng thất bại!');
    }
    loadingMessage(); 
    message.success('Cập nhật người dùng thành công');
    setIsModalVisible(false);
    setCurrentRecord(null);
    fetchData();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentRecord(null);
  };

  const handleUploadChange = async (info) => {
    if (info.file.status === 'done') {
      setAvatarFile(info.file.originFileObj);
      setAvatarPreview(URL.createObjectURL(info.file.originFileObj)); 
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Modal
      title="Chỉnh sửa thông tin"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Lưu"
      cancelText="Hủy"
      width={800} 
    >
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item
          name="avatar"
          label="Avatar"
          style={{ marginBottom: 16 }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: 16 }}>
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar"
                  style={{ width: 100, height: 100, borderRadius: '8px', objectFit: 'cover' }}
                />
              ) : (
                <Avatar size={100} icon={<UserOutlined />} />
              )}
            </div>
            <Upload
              name="file"
              listType="picture"
              showUploadList={false}
              customRequest={({ file, onSuccess }) => {
                setTimeout(() => onSuccess("ok"), 0);
              }}
              onChange={handleUploadChange}
            >
              <Button icon={<UploadOutlined />}>Tải lên</Button>
            </Upload>
          </div>
        </Form.Item>
        <div style={{ display: 'flex', marginBottom: 16 }}>
          <Form.Item
            name="fullName"
            label="Tên"
            style={{ flex: 1, marginRight: '8px' }}
            rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            style={{ flex: 1 }}
            rules={[{ required: true, message: 'Vui lòng nhập email' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div style={{ display: 'flex', marginBottom: 16 }}>
          <Form.Item
            name="address"
            label="Địa chỉ"
            style={{ flex: 1, marginRight: '8px' }}
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Số điện thoại"
            style={{ flex: 1 }}
          >
            <Input disabled/>
          </Form.Item>
        </div>
        <div style={{ display: 'flex', marginBottom: 16 }}>
          <Form.Item
            name="role"
            label="Chức vụ"
            style={{ flex: 1, marginRight: '8px' }}
            rules={[{ required: true, message: 'Vui lòng chọn chức vụ' }]}
          >
            <Select placeholder="Chọn chức vụ">
              <Option value="admin">Admin</Option>
              <Option value="user">Người dùng</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="birthDate"
            label="Ngày sinh"
            style={{ flex: 1 }}
            rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
          >
            <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} />
          </Form.Item>
        </div>
        <Form.Item
          name="gender"
          label="Giới tính"
          style={{ marginBottom: 16 }}
          rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
        >
          <Radio.Group>
            <Radio value="male">Nam</Radio>
            <Radio value="female">Nữ</Radio>
            <Radio value="other">Khác</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
