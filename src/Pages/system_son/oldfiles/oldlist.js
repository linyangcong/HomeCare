import React from 'react'
import {Card, Button,Row,Col,Input, Divider ,Table,Collapse, Checkbox,Icon } from 'antd';
import './oldlist.css'
const ButtonGroup=Button.Group;
const Panel = Collapse.Panel;
const columns = [
     
   
      {
        title: "启用",
        dataIndex: 'checktable',
         width: 107,
         fixed:'left'
      },
      {
        title: '序号',
        dataIndex: 'id',
         width: 100,
      },
       {
    title: '姓名',
    dataIndex: 'name',
     width: 109,
  },
  {
    title: '性别',
    dataIndex: 'sex',
     width: 109,
  },
  {
    title: '年龄',
    dataIndex: 'age',
     width: 164,
  }, {
    title: '老年人手机',
    dataIndex: 'moblie',
     width: 186,
  }, {
    title: '身份证号码',
    dataIndex: 'idcard',
     width: 186,
  },
  {
    title: '老人卡号',
    dataIndex: 'oldcard',
     width: 161,
  },
  {
    title: '居住情况',
    dataIndex: 'dwellsit',
     width: 161,
  },
  {
    title: '所属服务社区',
    dataIndex: 'owncom',
     width: 212,
  },
  {
    title: '家庭住址',
    dataIndex: 'homeaddr',
     width: 161,
  },
  {
    title: '老人类别',
    dataIndex: 'oldsty',
     width: 162,
  },
  {
    title: '服务类别',
    dataIndex: 'sertype',
     width:162,
  },
  {
    title: '操作',
    dataIndex: 'oper',
     width: 250,
     fixed:'right'

  }
];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      id:i,
      checktable:<Checkbox/>,
      oper:<span><Button type="primary" size="small" className="btnmargin"><Icon type="edit"></Icon>修改</Button><Button className="btnmargin" type="primary" size="small"><Icon type="eye" />查看</Button></span>,
      name: `linyc${i}`,
      sex:"男",
      age: 32,
      phone:"13888888888",
      idcard:"888888888888888888",
      oldcard:'123455',
      dwellsit: `London, Park Lane no. ${i}`,
      owncom:'东区社区',
      homeaddr:"广东省中山市",
      oldsty:'居家型',
      sertype:'普通家医服务包'
    });
  }



export default class oldlist extends React.Component{
   
    render(){
    
        return(
        <Card >
        <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="老人基础信息表" key="1">
    
        <Row style={{textAlign:'left'}}>
            <Col span={8}>
            <ButtonGroup>
            <Button type="primary" size="small">新增</Button>
            <Button type="primary" size="small">修改</Button>
            <Button type="primary" size="small">删除</Button>
            <Button type="primary" size="small">查看</Button>
            </ButtonGroup>
            </Col>
            
            <Col span={16}></Col>
        </Row>
<Divider></Divider>
        <Row>
            <Col span={24}>
            <Row>
                <Col span={2}>老人姓名：</Col>
                <Col span={2}><Input size="small"/></Col>
                <Col span={2}>身份证号：</Col>
                <Col span={2}><Input size="small"/></Col>
                <Col span={2}>联系方式：</Col>
                <Col span={2}><Input size="small"/></Col>
                <Col span={12}></Col>
            </Row>
<Divider></Divider>
            <Row>
                <Col span={2}>年龄：</Col>
                <Col span={2}>
                <Row>
                    <Col span={11}><Input size="small" /></Col>
                    <Col span={2}>-</Col>
                    <Col span={11}><Input size="small" /></Col>
                </Row>
                </Col>
            
                <Col span={2}>兴趣爱好：</Col>
                <Col span={2}><Input size="small"/></Col>
                <Col span={2}>健康档案：</Col>
                <Col span={2}><Input size="small"/></Col>
                <Col span={2}><Input size="small"/></Col>
                <Col span={10}></Col>
            </Row>
            </Col>
        </Row>
<Divider></Divider>
        <Row>
            <Col span={8} style={{textAlign:'left'}}>
            <ButtonGroup>
            <Button type="primary" size="small">更多查询条件</Button>
            <Button type="primary" size="small">查询</Button>
            <Button type="primary" size="small">重置</Button>
            <Button type="primary" size="small">导出</Button>
            </ButtonGroup>
            </Col>
            <Col span={16}></Col>
        </Row>
        </Panel>
    </Collapse>
{/*----------------------- 表格 ----------------------*/}
        <Row>
            <Col>
            <Table
    columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x:2000,y:350 }}
  />
            </Col>
        </Row>
        </Card>
          );
    }
}