import React from "react";
import { Input } from 'antd';


export default function SearchButton(){
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return(
    <>
      <Search allowClear placeholder="input search text" enterButton size="large" onSearch={onSearch}/>
    </>
  );
}