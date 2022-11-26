import React, { useState } from "react";
import { Switch } from "../components/Switch";
import { Item } from "../components/Item";
import { Col, Row, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { items } from "../data/const";
import "./LF.css";

export const LF: React.FC = () => {
  const [radioState, setRadioState] = useState("Found");
  return (
    <div className="Global">
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Switch radioState={radioState} setRadioState={setRadioState} />
        </Col>
        <Col span={8}>
          <div className="AddButton">
            <Button type="primary" shape="round" icon={<PlusOutlined />}>
              Add item
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="Items">
          {items
            .filter((item) => item.type === radioState)
            .map((item) => (
              <Col span={6}>
                <Item
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  longitude={item.longitude}
                  latitude={item.latitude}
                />
              </Col>
            ))}
        </div>
      </Row>
    </div>
  );
};
