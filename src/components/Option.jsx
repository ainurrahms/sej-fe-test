import React, {useEffect, useState} from "react";
import { Skeleton, Space, AutoComplete, Input } from 'antd';

export default function Option(props) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('fee-assessment-categories', requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(true);
          setList(result);
        },
        (error) => {
          setLoading(true);
          console.error('error fetching data', error);
        }
      )
      .catch((error) => {
        console.error('error fetching data', error);
      });
  }, []);

  let optValue = list?.map((val) => ({
    value: val.name,
  }))


  if (!loading){
    return (
      <Space style={{marginBottom: '1%'}}>
        <Skeleton.Input active size={'large'}/>
      </Space>
    )
  }else{
    return(
      <>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: '100%',
          marginBottom: '1%'
        }}
        options={optValue}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onChange={props.onChange}
      >
        <Input.Search size="large" placeholder="Search Book by Category" allowClear/>
      </AutoComplete>
      </>
    );
  }
}
