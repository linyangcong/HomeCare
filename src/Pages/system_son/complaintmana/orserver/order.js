import React from 'react'
import {Row,Col, Card, Radio,Divider, Input,Button, Checkbox} from 'antd'
import './order.css'
const RadioGroup=Radio.Group

export default class order extends React.Component{
    state={
        money:2000
    }
    render(){
        return(
            <div>
                <Row >
                <Col span={24}>
                <Row className="orbk">
                    <Col span={2}>工单号：</Col>
                    <Col span={4}>FW2017111215152411</Col>
                    <Col span={2} >受理部门：</Col>
                    <Col span={4}>青年东港居委会</Col>
                    <Col span={2} >接单人：</Col>
                    <Col span={4}>青年东港居委会</Col>
                </Row>
                </Col>
                <Col span={24}>
                <Row>
                    <Col span={2}>接单时间：</Col>
                    <Col span={4}>2017-12-27 15:20:20</Col>
                    <Col span={2}>来电姓名：</Col>
                    <Col span={4}>linyc</Col>
                    <Col span={2} >来电电话：</Col>
                    <Col span={4}>19925956050</Col>
                </Row>
                </Col>
<Divider/>
                <Col span={24}>
                <Row style={{textAlign:'left'}}>
                    <Col span={24}>服务需求</Col>
                    <Col span={24}>选择服务方<RadioGroup><Radio value='1'>服务商家</Radio><Radio value='2'>志愿者</Radio></RadioGroup></Col>
                </Row>
                </Col>
                <Col span={24}>
                <Row>
                    <Col span={2}>服务大类：</Col>
                    <Col span={4}><Input size="small" ></Input></Col>
                    <Col span={2}>服务项目：</Col>
                    <Col span={4}><Input size="small"></Input></Col>
                    <Col span={2}><Button type="primary" size="small">派单</Button></Col>
                </Row>
                </Col>
                <Col span={24}>服务地址</Col>
                <Col span={24}>
                <Row>
                    <Col span={2}><Checkbox></Checkbox>地址：</Col>
                    <Col span={6}><Input size="small"></Input></Col>
                    </Row>
                </Col>
                <Col span={24}>联系电话：</Col>
                <Col span={24}>
                <Row>
                    <Col span={2}><Checkbox></Checkbox>本机：</Col>
                    <Col span={4}><Input size="small"></Input></Col>
                    <Col span={2}>服务时间：</Col>
                    <Col span={4}><Input size="small"></Input></Col>
                </Row>
                </Col>
                <Col span={24}>
                <Row>
                    <Col span={2}>紧急程度：</Col>
                    <Col span={4}><Radio value='a'>一般</Radio><Radio value='b'>紧急</Radio></Col>
                    <Col span={2}>付款方式：</Col>
                    <Col span={4}><Input size="small"></Input></Col>卡余额（{this.state.money}元）
                </Row>
                </Col>
                <Col span={24}></Col>
                <Col span={24}></Col>
                <Col span={24}></Col>
                </Row>
                </div>
        )
    }
}