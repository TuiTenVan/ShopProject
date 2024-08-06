import React from 'react';
import { Card, Col, Row, Statistic, Table, Typography } from 'antd';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './Dashboard.css'; // Import CSS nếu cần

const { Title } = Typography;

const Dashboard = () => {
  // Example data for charts and tables
  const salesData = [
    { month: 'Jan', sales: 3000 },
    { month: 'Feb', sales: 5000 },
    { month: 'Mar', sales: 7000 },
    { month: 'Apr', sales: 6000 },
    { month: 'May', sales: 8000 },
    { month: 'Jun', sales: 9000 },
  ];

  const topProducts = [
    { key: '1', name: 'Áo sơ mi trắng', category: 'Áo', price: '$25', stock: '50' },
    { key: '2', name: 'Quần jeans xanh', category: 'Quần', price: '$40', stock: '30' },
    { key: '3', name: 'Áo khoác mùa đông', category: 'Áo', price: '$60', stock: '20' },
    { key: '4', name: 'Váy dạ hội', category: 'Váy', price: '$75', stock: '15' },
  ];

  return (
    <div className="dashboard-container">
      <Title level={2}>Dashboard</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Doanh thu tháng này"
              value={9000}
              prefix="$"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Tổng số đơn hàng"
              value={120}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Số sản phẩm còn lại"
              value={150}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="Doanh thu theo tháng">
            <LineChart width={600} height={300} data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#5B8FF9" />
            </LineChart>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="Sản phẩm nổi bật">
            <Table
              dataSource={topProducts}
              columns={[
                { title: 'Tên sản phẩm', dataIndex: 'name', key: 'name' },
                { title: 'Danh mục', dataIndex: 'category', key: 'category' },
                { title: 'Giá', dataIndex: 'price', key: 'price' },
                { title: 'Số lượng tồn kho', dataIndex: 'stock', key: 'stock' },
              ]}
              pagination={false}
              size="middle"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
