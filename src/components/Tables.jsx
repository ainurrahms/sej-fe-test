import React, { useState, useEffect }  from "react";
import { Space, Table,Button, Tag, Modal  } from 'antd';
import Option from "./Option";

export default function Tables() {
  const [loaded, setLoaded] = useState(false)
  const [list, setList] = useState([]);
  const [size, setSize] = useState(10);

  const fetchData = async (page, size, categoryId) => {
    setLoaded(true);
    fetch(`fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`)
      .then(res => {
        if(res.status === 404){
          setLoaded(false)
          setList([])
        }
        return res.json()
      })
      .then(
        (result) => {
          setLoaded(false);
          setList(result);
        }
      )
  }

  useEffect(() => {
    fetchData(1, size, 1);
  }, [size])

  const handlePerRowsChange = async (newPerPage) => {
    setSize(newPerPage);
  }

  const onChange = (e) => {
    const filteredData = list?.filter(entry =>
      entry.title.toLowerCase().startsWith(e.toLowerCase())
    );
    setList(filteredData);
    if(e.length === 0){
      fetchData(1, size, 1);
    }
  }

  const onCategoryChanged = (value) => {
    fetchData(1, size, value);
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
      dataIndex: 'cover',
      key: 'cover',
      render: (_,data) => (
        <img src={data?.cover_url} alt="gambar" style={{width:'50px'}}/>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category_id',
      key: 'category_id',
      render: (_,data) => (
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
      dataIndex:'action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => SaveBookmarks(record)}>Save</Button>
        </Space>
      ),
    },
  ];

  let data = list?.map((val) => ({
    key: val.id,
    ...val
  }))

    return(
      <>
        <Option onChange={onChange} onCategoryChanged={onCategoryChanged}/>
        <Table 
          columns={columns} 
          dataSource={data} 
          onChange={handlePerRowsChange}
          loading={loaded}
        />
      </>
    );
  
}