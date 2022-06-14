import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
const { Column, ColumnGroup } = Table;









const Tableapi = () =>{
    const [users, setUsers] = useState([]);
    
const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    setUsers(await response.json());

}

useEffect(() =>{
    getUsers();
}, []);



return (


    
    <Table dataSource={users}>
      <ColumnGroup title="Users Information">
        <Column title="userId" dataIndex="userId" key="userid" />
        <Column title="id" dataIndex="id" key="id" />
      </ColumnGroup>
      <Column title="title" dataIndex="title" key="title" />
      <Column title="body" dataIndex="body" key="body" />
     
    </Table>
  );




}


export default Tableapi;