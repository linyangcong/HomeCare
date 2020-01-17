import React from 'react';
import { Card,Input,Button,Radio} from 'antd';
import './LoginCss.css';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
class HomePensionVolunteers extends React.Component{
    render(){
        return(
           <div className="login">
    <Card
    size="large"
      title="运营管理系统"
      extra={<span onClick={()=> this.props.history.push('/VolunteersReg')} >注册</span>}
      style={{lineHeight:3}}
    >
      <Input placeholder="请输入帐号" />
      <Input placeholder="请输入密码" />
      <div className="loginboder">
    <Collapse accordion defaultActiveKey={['1']}>
    <Panel header="请选择角色：" key="1">
    <RadioGroup onChange={this.member} defaultValue="a" >
        <RadioButton value="a">管理员</RadioButton>
        <RadioButton value="b">坐席</RadioButton>
        <RadioButton value="f">家医</RadioButton><br/>
        <RadioButton value="d">志愿者</RadioButton>
        <RadioButton value="c">商家</RadioButton>
        <RadioButton value="e">用户</RadioButton>
      </RadioGroup>
    </Panel>
  </Collapse>
        
      
    </div>
      <Button type="primary" block>提交</Button>
     <span className="logintip">登录不了？帮助</span>
      
    </Card>
  </div>
        )
    }
    member=(e)=> {
      console.log('nihao');
    }
    navigater=(e)=> {
      window.open("http://localhost:3000/HomePensionVolunteers/VolunteersReg")
    }
}

export default HomePensionVolunteers;