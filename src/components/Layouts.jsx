import React, {useState} from "react";
import { Layout,Menu, Breadcrumb } from 'antd';
import Tables from "./Tables";
import Bookmarks from "./Bookmarks";


export default function Layouts(){
  const [header, setHeader] = useState('Home');
  const { Header, Content, Footer } = Layout;
  const items1 = ['Home', 'Bookmarks'].map((key) => ({
    key,
    label: `${key}`,
  }));

  const onChange = (items1) => {
    setHeader(items1.key)
  }

  

  return(
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" onClick={onChange} defaultSelectedKeys={['Home']} items={items1} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb
        style={{
          margin: '16px 0',
        }}
        >
          {header === 'Home' && <Breadcrumb.Item>Home</Breadcrumb.Item>}
          {header === 'Bookmarks' && <Breadcrumb.Item>Bookmarks</Breadcrumb.Item>}
        </Breadcrumb>
        <div className="site-layout-content">
          {header === 'Home' && <Tables/>}
          {header === 'Bookmarks' && <Bookmarks/>}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </>
  );
}