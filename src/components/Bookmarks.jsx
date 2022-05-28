import React  from "react";
import { Card } from 'antd';

const { Meta } = Card;

export default function Bookmarks() {

  const title = JSON.parse(localStorage.getItem("title"));
  const authors = JSON.parse(localStorage.getItem("authors"));
  const cover_url = JSON.parse(localStorage.getItem("cover_url"));
  const desc = JSON.parse(localStorage.getItem("description"));


  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={cover_url} />}
    >
      <Meta title={title} description={authors} />
      <p>{desc}</p>
  </Card>
  )
}