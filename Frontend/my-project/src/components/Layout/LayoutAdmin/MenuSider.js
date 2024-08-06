import { Menu } from "antd";
import {
  DashboardOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  FileDoneOutlined,
  BookOutlined,
  CommentOutlined,
  PoundCircleOutlined
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

function MenuSider() {
  const location = useLocation();

  const items = [
    {
      key: "/admin",
      icon: <DashboardOutlined />,
      label: <Link to="/admin">Tổng quan</Link>,
    },
    {
      key: "/user-manager",
      icon: <UsergroupAddOutlined />,
      label: <Link to="/user-manager">Quản lý người dùng</Link>,
    },
    {
      key: "/product-manager",
      icon: <UnorderedListOutlined />,
      label: <Link to="/product-manager">Danh sách sản phẩm</Link>,
    },
    {
      // key: "/cv-manage",
      icon:<BookOutlined />,
      label: <Link to="/cv-manage">Quản lý đơn hàng</Link>,
    },
    {
      // key: "/cv-manage",
      icon: <FileDoneOutlined />,
      label: <Link to="/cv-manage">Quản lý bài viết</Link>,
    },
    {
      // key: "/cv-manage",
      icon: <CommentOutlined />,
      label: <Link to="/cv-manage">Quản lý comments</Link>,
    },
    {
      // key: "/cv-manage",
      icon: <PoundCircleOutlined />,
      label: <Link to="/cv-manage">Discount</Link>,
    },
    
  ];

  return (
    <>
      <Menu
        items={items}
        mode="inline"
        defaultOpenKeys={["/dashboard"]}
        defaultSelectedKeys={[location.pathname]}
      />
    </>
  );
}

export default MenuSider;
