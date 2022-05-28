import React, { useState, useEffect }  from "react";
import { Space, Table,Button, Tag, Modal  } from 'antd';
import Option from "./Option";




export default function Tables() {
  const [loaded, setLoaded] = useState(false)
  const [list, setList] = useState([]);
  const [size, setSize] = useState(10);

  const fetchData = async (page, size) => {
    setLoaded(true);
    fetch(`fee-assessment-books?categoryId=1&page=${page}&size=${size}`)
      .then(res => res.json())
      .then(
        (result) => {
          setLoaded(false);
          setList(result);
        },
        (error) => {
          setLoaded(true);
        }
      )
  }

  useEffect(() => {
    fetchData(1, size);
  }, [size])

  const handlePerRowsChange = async (newPerPage) => {
    setSize(newPerPage);
  }

  const onChange = (e) => {
    console.log(e,"onchange")
    // if (list.length === 0){
    //   setList(list)
    // }else{
    // const filteredData = list?.filter(entry =>
    //   entry.title.toLowerCase().startsWith(e.toLowerCase())
    // );
    //   setList(filteredData);
    // }
  }

  const SaveBookmarks = (val) => {
    localStorage.setItem("title", JSON.stringify(val.title));
    localStorage.setItem("authors", JSON.stringify(val.authors[0]));
    localStorage.setItem("cover_url", JSON.stringify(val.cover_url));
    localStorage.setItem("description", JSON.stringify(val.description));
    Modal.success({
      content: 'Success add books to bookmarks',
    });
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Cover',
      key: 'cover',
      render: (data) => (
        <img src={data?.cover_url} alt="gambar" style={{width:'50px'}}/>
      ),
    },
    {
      title: 'Category',
      key: 'category_id',
      render: (data) => (
        <>
          {data?.category_id === 1 ? (
            <Tag color="red" style={{textTransform:'uppercase'}}>Happiness & Mindfulness</Tag>
          ) : data?.category_id === 11 ? (
            <Tag color="cyan" style={{textTransform:'uppercase'}}>Career & Business</Tag>
          ) : data?.category_id === 12 ? (
            <Tag color="volcano" style={{textTransform:'uppercase'}}>Productivity & Time Management</Tag>
          ) : data?.category_id === 19 ? (
            <Tag color="lime" style={{textTransform:'uppercase'}}>Society & Politics</Tag>
          ) : data?.category_id === 21 ? (
            <Tag color="purple" style={{textTransform:'uppercase'}}>Investment & Finance</Tag>
          ) : (
            <></>
          )}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => SaveBookmarks(record)}>Save</Button>
        </Space>
      ),
    },
  ];
  

  
    return(
      <>
        <Option onChange={(e) => onChange(e)}/>
        <Table 
          pagination 
          columns={columns} 
          dataSource={loaded ? [] : list} 
          onChange={handlePerRowsChange}
          loading={loaded}
        />
      </>
    );
  
}