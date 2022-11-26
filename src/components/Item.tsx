import React from "react";
import { Card } from "antd";
import "./Item.css";

interface Props {
  img: string;
  title: string;
  description: string;
  longitude: number;
  latitude: number;
}

const { Meta } = Card;

export const Item = (item: Props) => {
  return (
    <div className="Card">
      <Card
        hoverable
        style={{ margin: 10, maxHeight: 300 }}
        cover={<img alt="example" src={item.img} />}
      >
        <Meta title={item.title} description={item.description} />
        Lat Long : {item.longitude},{item.latitude}
      </Card>
    </div>
  );
};
