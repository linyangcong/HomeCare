
import React from 'react'
import {Row,Col,Input,Icon,Button,Card,Modal} from 'antd'
import './accept.css'
import old from'../imgs/img.jpg'
import { Map,Marker } from 'react-amap';
import Order from '../complaintmana/orserver/order'
export default class Acceptring extends React.Component{
  constructor(){
    super();
    this.toolEvents = {
      created: (tool) => {
        this.tool = tool;
      }
    }
    this.mapPlugins = ['ToolBar'];
    this.mapCenter = {longitude: 113.38, latitude: 22.52};
    this.markerPosition = {longitude: 113.38, latitude: 22.52};
  }
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
render(){
  return(
    <Row>
      <Col>
      <Row>
        <Col span={12}>
        <Row style={{textAlign:'left'}}>
          <Col span={24}><Row >
          <Col span={4}><Icon type="user"  />老人姓名：</Col>
          <Col span={5}><Input className="acceptinput" size="small"></Input></Col>
          <Col span={3}><Button type="primary" size="small"><Icon type="search"></Icon>查询</Button></Col>
          <Col span={4}><Icon type="phone" theme="twoTone" />来电号码：</Col>
          <Col span={6}><Input className="acceptinput" size="small"></Input></Col>

        </Row>
        </Col>

          <Col span={24} style={{marginTop:'20px'}}>
          <Card title="老人资料" >
          <Row >
            <Col span={10}>
            <Row >
              <Col span={24}><img src={old} style={{width:200,height:200}} alt=''></img></Col>
              <Col span={24}>老人姓名：陆小凤</Col>
              <Col span={24}>电话：13888888888</Col>
            </Row>
            </Col>
            <Col span={14}  >
            <Row>
              <Col span={8}>性别：男</Col>
              <Col span={16}>身份证：888888888888888888</Col>
            </Row>
            <Row>
              <Col span={8}>民族：汉族</Col>
              <Col span={16}>居住情况：合租</Col>
            </Row>
            <Row>
              <Col span={24}>家庭住址：222222222222222222</Col>
            </Row>
            <Row>
              <Col span={24}>所属服务点：11111111111</Col>
            </Row>
            <Row>
              <Col span={12}>老人类型：低保老人</Col>
              <Col span={12}>服务类型：未设置</Col>
            </Row>
            <Row>
              <Col span={12}>服务状态：正常服务</Col>
              <Col span={12}>慢性病：高血压</Col>
            </Row>
            <Row>
              <Col span={8}>失能情况：无</Col>
              <Col span={16}>残疾情况：无</Col>
            </Row>
            <Row>
              <Col span={24}><p style={{textAlign:"right",color:'#1890ff',cursor:'pointer'}} >进入老人档案</p></Col>
            </Row>
            </Col>
          </Row>
          </Card>
          </Col>
          </Row>
        
        </Col>
        <Col span={12}>
        <Row style={{textAlign:"right"}}>
          <Col span={4}><Button type="primary" className='accepbtn' onClick={this.showModal}>服务预定</Button></Col>
          <Col span={4}><Button type="primary" className='accepbtn'>咨  询</Button></Col>
          <Col span={4}><Button type="primary" className='accepbtn'>预约挂号</Button></Col>
          <Col span={4}><Button type="primary" className='accepbtn'>紧急救助</Button></Col>
          <Col span={4}><Button type="primary" className='accepbtn' >投  诉</Button></Col>
          <Col span={4}></Col>
        </Row>
        <Row style={{paddingTop:'12px'}}>
          <Col>
          <Card>
          <div style={{width:'100%',height:'295px'}}>
                    <Map 
          amapkey="9fd01024a1e1c82b19b3c0cb6324413f"
          plugins={this.mapPlugins}
          center={this.mapCenter}
          zoom={12}
        >
          <Marker position={this.markerPosition} />
        </Map>
                        </div>
        </Card>
          </Col>
        </Row>
        </Col>
      </Row>
      </Col>
      <Col>
      </Col>
      <Modal 
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="保存"
          cancelText="返回"
        >
         <Order/>
        </Modal>
    </Row>
    
  )
}
}