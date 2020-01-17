import React from 'react'
import {  Button ,Row,Col,Table,Input,Card,Icon,Collapse} from 'antd';
import './audit.css'
const Panel = Collapse.Panel;
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}
class auditold extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  render(){
  
    const columns=[
     
      {
        title: "序号",
        dataIndex: 'list',
         width: 90,
      },
      {
        title: "审核状态",
        dataIndex: 'audit',
         width: 100,
      },
      {
        title: "姓名",
        dataIndex: 'name',
         width: 100,
      },
      {
        title: "性别",
        dataIndex: 'sex',
         width: 100,
      },
      {
        title: "年龄",
        dataIndex: 'age',
         width: 100,
      },
      {
        title: "老人手机号码",
        dataIndex: 'phone',
         width: 160,
      },
      {
        title: "身份证号码",
        dataIndex: 'idcard',
         width: 160,
      },
      {
        title: "居住情况",
        dataIndex: 'sit',
         width: 100,
      },
      {
        title: "家庭住址",
        dataIndex: 'address',
         width: 200,
      },
      {
        title: "操作",
        dataIndex: 'operation',
         width: 150,
         fixed:'right'
      },
      
    ]
    const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      list:i,
      audit:"待审核",
      name: `linyc${i}`,
      sex:"男",
      age: 32,
      phone:"13888888888",
      idcard:"888888888888888888",
      sit:'123455',
      address: `London, Park Lane no. ${i}`,
      operation:<Button type="primary">上报</Button>
    });
  }
    return(
      <div>
        <Card>
        <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="老人列表" key="1">
        <Row>
          <Col style={{textAlign:'left'}}><Button ><Icon type="check" />上报</Button></Col>
        </Row>
        <Row>
          <Col span={16}>
          <Row>
            <Col span={4}>身份证号码：</Col>
            <Col span={4}><Input className="input" size="small"/></Col>
            <Col span={2}>姓名：</Col>
            <Col span={4}><Input className="input" size="small"/></Col>
            <Col span={3}> 家庭电话：</Col>
            <Col span={4}><Input className="input" size="small"/></Col>
            <Col span={2}><Button type="primary" size="small">查询</Button></Col>
          </Row>
          </Col>
          <Col span={8}></Col>
        </Row>
        </Panel>
    </Collapse>
        <Row>
          <Col>
          <Table rowSelection={rowSelection}
    columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x:1360,y:320 }}/>
          </Col>
        </Row>
        </Card>
      </div>
    )
  }
}
export default auditold;