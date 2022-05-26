import React, {useState} from "react";
import { Layout,Row, Col,Pagination  } from 'antd';
import sampleimg from "../assets/sample.jpg";



export default function Contents() {
  const { Content } = Layout;
  const style = {
    padding: '8px auto',
    marginTop:'5px'
  };

  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
  const listItems = numbers.map((number) =>
    <Col className="gutter-row" span={6}>
      <div style={style} key={number}>
        <img src={sampleimg} alt="gambar" style={{width:'100%',height:'auto'}}/>
      </div>
    </Col>
  );

  return(
    <>
      <Content>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {listItems}
        </Row>
      </Content>
      <Pagination current={current} onChange={onChange} total={50} responsive={true}/>
    </>
  );
}