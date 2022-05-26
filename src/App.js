import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import './index.css';
import SearchButton from './components/Search';
import Contents from './components/Contents';


function App() {
  
  return (
    <>
      <Layout>
        <SearchButton/>
        <Contents/>
      </Layout>
    </>
  );
}

export default App;
