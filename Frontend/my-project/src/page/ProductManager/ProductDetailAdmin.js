import React from 'react';
import { Form, Input, Button, Select, Upload, message, Row, Col, Card, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProductDetailAdmin.css'; // Ensure you have this CSS file
import GoBack from '../../components/GoBack';

const { Option } = Select;

const ProductDetailAdmin = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { product } = state || {};

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  const handleFinish = (values) => {
    console.log('Received values:', values);
    message.success('Sản phẩm đã được cập nhật!');
    navigate('/product-manager');
  };

  return (
    <div className="product-detail-admin-container">
      <h3 className="header-product-detail">Chi tiết sản phẩm</h3>
      <GoBack/>
      <Form
        layout="vertical"
        initialValues={product}
        onFinish={handleFinish}
        className="product-detail-form"
        style={{marginTop: 30}}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Tên sản phẩm"
              name="productName"
              rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Loại"
              name="type"
              rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm!' }]}
            >
              <Select>
                <Option value="Loại A">Loại A</Option>
                <Option value="Loại B">Loại B</Option>
                <Option value="Loại C">Loại C</Option>
                <Option value="Loại D">Loại D</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Màu sắc"
              name="color"
              rules={[{ required: true, message: 'Vui lòng nhập màu sắc!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Số lượng"
              name="quantity"
              rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Giá"
              name="price"
              rules={[{ required: true, message: 'Vui lòng nhập giá!' }]}
            >
              <Input prefix="$" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Giảm giá"
              name="discountAmount"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Danh mục"
              name="category"
              rules={[{ required: true, message: 'Vui lòng chọn danh mục!' }]}
            >
              <Select>
                <Option value="Shoes">Giày</Option>
                <Option value="Clothes">Quần áo</Option>
                <Option value="Accessories">Phụ kiện</Option>
              </Select>
            </Form.Item>   
          </Col>
        </Row>

        <Form.Item
          label="Mô tả"
          name="description"
          rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Ảnh sản phẩm"
              name="images"
            >
              <div className="product-images">
                {product.images && product.images.length > 0 ? (
                  product.images.map((img, index) => (
                    <Card key={index} style={{ width: 240, marginBottom: 10 }}>
                      <Image
                        width={240}
                        src={img}
                        alt={`Product Image ${index + 1}`}
                      />
                    </Card>
                  ))
                ) : (
                  <div><i>Không có ảnh nào!</i></div>
                )}
              </div>
              <Upload
                action="/upload.do"
                listType="picture"
                maxCount={1}
                beforeUpload={() => false 
                } // Ngăn không cho tải ảnh lên server
              >
                <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">Cập nhật sản phẩm</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductDetailAdmin;
