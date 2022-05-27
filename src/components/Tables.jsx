import React, { useState }  from "react";
import { Space, Table,Button  } from 'antd';
import Option from "./Option";

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];


export default function Tables() {
  const [dataSource, setDataSource] = useState(data);

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };
  //   fetch('fee-assessment-books', requestOptions)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result)
  //         // setLoading(true);
  //         // setList(result);
  //       },
  //       (error) => {
  //         // setLoading(true);
  //         console.error('error fetching data', error);
  //       }
  //     )
  //     .catch((error) => {
  //       console.error('error fetching data', error);
  //     });
  // }, []);

  const onChange = (e) => {
    const filteredData = data.filter(entry =>
      entry.name.toLowerCase().startsWith(e.toLowerCase())
    );
    setDataSource(filteredData);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button type="primary">Save</Button>
        </Space>
      ),
    },
  ];
  

  return(
    <>
      <Option onChange={onChange}/>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
}