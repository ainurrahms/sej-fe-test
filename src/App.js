import React from 'react';
import { Input, Layout } from 'antd';
import 'antd/dist/antd.min.css';
import './index.css';

const { Search } = Input;
const { Content } = Layout;
const onSearch = (value) => console.log(value);

function App() {
  
  return (
    <>
    
    <Layout>
      <Content>
        <Search allowClear placeholder="input search text" enterButton size="large" onSearch={onSearch}/>
      </Content>
    </Layout>
    </>
  );
}

export default App;
