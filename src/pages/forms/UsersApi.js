
  import { Table } from 'antd';
  import qs from 'qs';
  import React, { useEffect, useState } from 'react';


const dummyUsers= [
    {
      id: 1,
      name: "hari",
      cast: "rai"
    },
    {
      id: 2,
      name: "ram",
      cast: "newar"
    },
    
    {
      id: 3,
      name: "gita",
      cast: "Chhetri"
    },
    {
      id: 4,
      name: "rita",
      cast: "rai"
    },
    {
      id: 5,
      name: "shyam",
      cast: "newar"
    }
  ]

const columns = [

    {
        title:'Id',
        dataIndex:'id',
        width: '20%'

    },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Caste',
    dataIndex: 'cast',
    filters: [
      {
        text: 'rai',
        value: 'rai',
      },
      {
        text: 'newar',
        value: 'newar',
      },
      {
        text: 'chettri',
        value: 'chettri',
      },
    ],
    width: '20%',
  }
];

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const Castesort = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const fetchData = (params = {}) => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setPagination({
          ...params.pagination,
          total: 200, // 200 is mock data, you should read it from server
          // total: data.totalCount,
        });
      });
  };

  useEffect(() => {
    fetchData({
      pagination,
    });
  }, []);

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination: newPagination,
      ...filters,
    });
  };

  return (
    <Table
      columns={columns}
      dataSource={dummyUsers}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default Castesort;