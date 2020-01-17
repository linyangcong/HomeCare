import {
  Card,Tabs,Modal, notification,Layout,Select, Input, Button, Icon,Avatar, Badge,Menu,Row, Col,message
  } from 'antd';
import React from 'react'
// import {NavLink} from 'react-router-dom'
import './mainpage.css'
import logo from '../../assets/imgs/logo.png'
import Newold from './oldfiles/newold'
import Inexcel from './oldfiles/inexcel'
import Auditold from './oldfiles/auditold.js'
import Oldlist from './oldfiles/oldlist'
import Home from './home'
import Mobileloc from './locsearch/mobileloc'
import Accet from './ordersmana/acceptring'
const TabPane = Tabs.TabPane
const SubMenu = Menu.SubMenu
const {
  Header, Footer, Sider, Content,
} = Layout;
const Option = Select.Option;

const info = () => {
  message.config({
    top: 120,
    duration: 10
  });
  message.info(<b>正在拨打请稍候...</b>);
 
};
 export default class mainpage extends React.Component{
   constructor(proper){
     super(proper)
     this.newTabIndex = 2;
     const panes = [
       { title: '首页', content: <Home/>, key: '1' }
      ]
     this.state={
      recordkey:[],
      activeKey: panes[0].key,
      panes,
       myage:'26',
       myname:'三角社区',
       mypri:'管理员',
       busiphone:'',
      helpphone:'',
      openKeys: [''],
      helpstate:'1',
      helpdescription:'手机坐席号码'
     }
     


   }

 onChange = (activeKey) => {
   this.setState({ activeKey });
 }

 onEdit = (targetKey, action) => {
   this[action](targetKey);
 }

 add = (e) => {
  // console.log(this.state.panes)
  // console.log(this.state.panes.length)
  //  console.log(this.state.recordkey)
  //  console.log("--------------------")
   const panes = this.state.panes;
   const activeKey = `${this.newTabIndex++}`;
  //  console.log(activeKey+":"+e.key+":--------------")
  //  console.log(e.item.props.children)
  // console.log("----------"+e.key);
   switch(e.key){
     case '1':panes.push({ title: e.item.props.children, content:<Newold/>, key: activeKey });break;
     case '2':panes.push({ title: e.item.props.children, content:<Inexcel/>, key: activeKey });break;
     case '3':panes.push({ title: e.item.props.children, content:<Oldlist/>, key: activeKey });break;
     case '4':panes.push({ title: e.item.props.children, content:<Auditold/>, key: activeKey });break;
     case '5':panes.push({ title: e.item.props.children, content:<Mobileloc/>, key: activeKey });break;
     case '8':panes.push({ title: e.item.props.children, content:<Accet/>, key: activeKey });break;

     case '34':panes.push({ title: e.item.props.children,content:<Home/>, key: activeKey });break;
     default:break;
   }
  //  console.log(activeKey)
    console.log("--------------------")
   this.setState({ panes, activeKey });
 }

 remove = (targetKey) => {
   let activeKey = this.state.activeKey;
   let lastIndex;
   this.state.panes.forEach((pane, i) => {
     if (pane.key === targetKey) {
       lastIndex = i - 1;
     }
   });
   const panes = this.state.panes.filter(pane => pane.key !== targetKey);
   if (panes.length && activeKey === targetKey) {
     if (lastIndex >= 0) {
       activeKey = panes[lastIndex].key;
     } else {
       activeKey = panes[0].key;
     }
   }
   this.setState({ panes, activeKey });
 }

   rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9', 'sub10', 'sub11', 'sub12', 'sub13'];
   onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
    
    
  }

  myage=(e)=>{
    if(e.target.flag==='1')
    this.setState({
      myname:e.target.value
    })
    else if(e.target.flag==='2')
    this.setState({
      myage:e.target.value
    })
    else if(e.target.flag==='3')
    this.setState({
      mypri:e.target.value
    })
  }
  

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

 handleChange=(value)=>{
    // this.setState({
    //   helpstate:value
    // })
    this.state.helpstate=value
    if(value==='1'){
      this.setState({
        helpdescription:'手机坐席号码'
      })
    }
    else if(value==='2'){
      this.setState({
        helpdescription:'SIP坐席号码'
      })
    }
    else if(value==='3'){
      this.setState({
        helpdescription:'坐席正忙!'
      })
    }
   
  }

  helpphone=(e)=>{
    console.log(e.target.value)
    this.setState({
      helpphone:e.target.value
    })
  }
  busiphone=(e)=>{
    console.log(e.target.value)
    this.setState({
      busiphone:e.target.value
    })
  }
  submitphone=()=>{
    notification.open({
      message: '提交状态提醒',
      description: '恭喜你，您设置成功！',
    });
  }
  phoneloading=()=>{

  }

confirm() {
    message.info('Clicked on Yes.');
  }
      render(){

        return(
          <div>
          <Layout >
          <Header>
          <Row>
            <Col span={7}><img width='30' src={logo} alt=""/>老年人平台 | 社区中心</Col>
            <Col span={3}>社区1</Col>
            <Col span={1}></Col>
            <Col span={10} >
            <Select  defaultValue="1" style={{ width: 100 }} onChange={this.handleChange}>
            <Option value="1">手机坐席</Option>
            <Option value="2">SIP坐席</Option>
            <Option value="3">坐席正忙</Option>
          </Select>
          <Input onChange={this.helpphone}  placeholder={this.state.helpdescription} style={{width:'150px'}}/>
          <Button type='primary' onClick={this.submitphone}>设置</Button>
          <Input placeholder='请输入订购服务电话' style={{width:'150px'}} onChange={this.busiphone}/>
          <Button type='primary' onClick={info}><Icon type="phone" /></Button>
          </Col>
          <Col span={3}>
          <Modal
          title="我的信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText='提交'
          cancelText='取消'
        
        >
<div>
  <div>
    <Row>
      <Col span={20}></Col>
      <Col span={4}><Button type="default" size='small'>注销</Button></Col>
      </Row>
    <Row>
      <Col span={6}></Col>
      <Col span={4}>我的姓名：</Col>
      <Col span={8}><input onChange={this.myage} flag='1' value={this.state.myname} style={{height:18}}/></Col>
      <Col span={6}></Col>
    </Row>
    <Row>
    <Col span={6}></Col>
      <Col span={4}> 我的年龄：</Col>
      <Col span={8}><input onChange={this.myage} flag='2' value={this.state.myage} style={{height:18}}/></Col>
      <Col span={6}></Col>
    </Row>
    <Row>
    <Col span={6}></Col>
      <Col span={4}>权限：</Col>
      <Col span={8}><input onChange={this.myage} flag='3' value={this.state.mypri} style={{height:18}}/></Col>
      <Col span={6}></Col>
    </Row>

  </div>
</div>
        
        </Modal>
          <span style={{fontSize:'12px'}} onClick={this.showModal}>三角社区帐号</span>      

          <Badge count={1}><Avatar  icon="user" /></Badge>
 
          </Col>
          </Row>
          </Header>
          <Layout hasSider={true}>
            <Sider 
            style={{zIndex:400}}
            >
            <Menu
        theme="dark"
        inlineCollapsed={true}
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 230,textAlign:'left',maxHeight:'570px' }}
        onClick={this.add}
      >
      <SubMenu key="sub13" title={<span><Icon type="bank" /><span>居家养老首页</span></span>}>
      <Menu.Item key="34">首页</Menu.Item>
      </SubMenu>
        <SubMenu key="sub1" title={<span><Icon type="solution" /><span>老人档案</span></span>}>
          {/* <Menu.Item key="1"><NavLink to='/mainpage/newold'>新增老人</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to='/mainpage/inexcel'>批量导入</NavLink></Menu.Item>
          <Menu.Item key="3"><NavLink to='/mainpage/oldlist'>老人列表</NavLink></Menu.Item>
          <Menu.Item key="4"><NavLink to='/mainpage/auditold'>未审核老人</NavLink></Menu.Item> */}
          <Menu.Item key="1">新增老人</Menu.Item>
          <Menu.Item key="2">批量导入</Menu.Item>
          <Menu.Item key="3">老人列表</Menu.Item>
          <Menu.Item key="4">未审核老人</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="environment" /><span> 定位查询</span></span>}>
          <Menu.Item key="5">手机定位查询</Menu.Item>
          <Menu.Item key="6">手表定位查询</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="book" /><span>工单管理</span></span>}>
          <Menu.Item key="8">来电弹屏</Menu.Item>
          <Menu.Item key="9">工单管理</Menu.Item>
          <Menu.Item key="10">服务商工单管理</Menu.Item>
          <Menu.Item key="11">志愿者工单管理</Menu.Item>
          <Menu.Item key="12">服务预定回访</Menu.Item>
          <Menu.Item key="13">历史工单</Menu.Item>
          <Menu.Item key="14">操作日志</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="frown" /><span>投诉管理</span></span>}>
          <Menu.Item key="15">待处理投诉</Menu.Item>
          <Menu.Item key="16">待回访投诉</Menu.Item>
          <Menu.Item key="17">投诉管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="thunderbolt" /><span>预警管理</span></span>}>
          <Menu.Item key="18">危险预警</Menu.Item>
          <Menu.Item key="19">预警设置</Menu.Item>
          <Menu.Item key="20">超时预警</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="heart" /><span>主动关怀</span></span>}>
          <Menu.Item key="21">走访关怀</Menu.Item>
          <Menu.Item key="22">去电关怀</Menu.Item>
          <Menu.Item key="23">生日提醒</Menu.Item>
          <Menu.Item key="24">短信关怀</Menu.Item>
          <Menu.Item key="25">短信发送记录</Menu.Item>
        </SubMenu>
        <SubMenu key="sub7" title={<span><Icon type="file-search" /><span>知  识  库</span></span>}>
          <Menu.Item key="26">知识库管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub8" title={<span><Icon type="notification" /><span>通知公告</span></span>}>
          <Menu.Item key="27">通知公告</Menu.Item>
        </SubMenu>
        <SubMenu key="sub9" title={<span><Icon type="team" /><span>坐席管理</span></span>}>
          <Menu.Item key="28">坐席状态监控</Menu.Item>
          <Menu.Item key="29">坐席人员管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub10" title={<span><Icon type="setting" /><span>基础设置</span></span>}>
          <Menu.Item key="30">黑名单</Menu.Item>
          <Menu.Item key="31">工作时间设置</Menu.Item>
        </SubMenu>
        <SubMenu key="sub11" title={<span><Icon type="phone" /><span>话务报表</span></span>}>
          <Menu.Item key="31">外呼记录</Menu.Item>
          <Menu.Item key="32">呼入记录</Menu.Item>
        </SubMenu>
        <SubMenu key="sub12" title={<span><Icon type="mobile" /><span>软电话使用</span></span>}>
          <Menu.Item key="33">软电话的使用统计</Menu.Item>
        </SubMenu>
      </Menu>
            </Sider>
            <Content 
            style={{
              padding:'20px',background: '#fff', margin: 0, minHeight: 280,color:'blue',overflow:'scroll',maxHeight:'600px',zIndex:200
            }}
            >
              <Card style={{padding:0}}>
            <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
          style={{textAlign:'left'}}
        >
          {this.state.panes.map(pane => <TabPane style={{padding:'0px'}} tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
        </Tabs>
        {/* <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div> */}
        </Card>
            </Content>
          </Layout>

        </Layout>
        </div>
        )
      }
  }