import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(-1)}>
      <ArrowLeftOutlined />
        Trở lại
      </Button>
    </>
  );
}

export default GoBack;
