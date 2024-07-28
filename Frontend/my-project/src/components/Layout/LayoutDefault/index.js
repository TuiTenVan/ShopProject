import { FloatButton } from "antd";
import Footer from "./Footer";
import Header from "./Header";
import "../../Css/plugins.css";
import "../../Css/style.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import Main from "./Main";

function LayoutDefault() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
            <FloatButton.BackTop icon={<ArrowUpOutlined />} />
        </>
    );
}

export default LayoutDefault;
