import React from "react";
import { Card, Col,Row, Icon,Button, Drawer,Modal } from "antd";
import Firstmap1 from './maptype/firstmap'
import Firstmap2 from './maptype/secondmap'
import Firstmap3 from './maptype/thirdmap'
import Firstmap4 from './maptype/fourthmap'
import Firstmap5 from './maptype/fifthmap'
import Firstmap6 from './maptype/sixth'
import Firstmap7 from './maptype/seventh'


export default class mainmap extends React.Component{
    constructor(proper){
        super(proper)
        this.state={
            visible:false,
            drawervisible1:'none',
            drawervisible2:'none',
            drawervisible3:'none',
            drawervisible4:'none',
            drawervisible5:'none',
            drawervisible6:'none',
            drawervisible7:'none',
           // modalvisible:false,
           index:''
        }
    }
    firstmap(e){
        console.log(e)
        switch(e){
            case '1':this.setState({  drawervisible1:'',drawervisible2:'none',drawervisible3:'none',drawervisible4:'none',drawervisible5:'none',drawervisible6:'none'});break;
            case '2':this.setState({  drawervisible1:'none',drawervisible2:'',drawervisible3:'none',drawervisible4:'none',drawervisible5:'none',drawervisible6:'none'});break;
            case '3':this.setState({  drawervisible1:'none',drawervisible2:'none',drawervisible3:'',drawervisible4:'none',drawervisible5:'none',drawervisible6:'none'});break;
            case '4':this.setState({  drawervisible1:'none',drawervisible2:'none',drawervisible3:'none',drawervisible4:'',drawervisible5:'none',drawervisible6:'none'});break;
            case '5':this.setState({  drawervisible1:'none',drawervisible2:'none',drawervisible3:'none',drawervisible4:'none',drawervisible5:'',drawervisible6:'none'});break;
            case '6':this.setState({  drawervisible1:'none',drawervisible2:'none',drawervisible3:'none',drawervisible4:'none',drawervisible5:'none',drawervisible6:'none'});break;
            case '7':this.setState({  drawervisible1:'none',drawervisible2:'none',drawervisible3:'none',drawervisible4:'none',drawervisible5:'none',drawervisible6:'none',drawervisible7:''});break;

        }
        this.setState({
           visible:true,
            // modalvisible:true
        })
    }
    onClose=()=>{
        this.setState({
            visible:false
        })
    }
    drawertitle=(val)=>{
        console.log('点击了地图')
        switch(val){
        case 'onfoot':this.setState({index:'步行路线'});break;
        case 'onbus':this.setState({index:'公交车路线'});break;
        case 'oncar':this.setState({index:'小轿车路线'});break;
        case 'onbike':this.setState({index:'自行车路线'});break;
        default:break;
        }
    }
   
    render(){
        const maptitle=<span>定位路径规划以及公交查询---{this.state.index}</span>
        return(
            <div style={{padding:"120px"}}>
            <Card title="地图分类设计" >
            <Row>
                <Col style={{lineHeight:'40px'}}>1.实现获取当前地址，选择交通方式并进行路线规划(公交路线查询)<Button type="primary" size="small"  onClick={this.firstmap.bind(this,'1')}><Icon type="search"></Icon>查看地图</Button></Col>
                <Col style={{lineHeight:'40px'}}>2.查询指定范围内商家或者物品，当点击地图标点时进行交通工具选择并规划路线<Button type="primary" size="small" onClick={this.firstmap.bind(this,'2')}><Icon type="search"></Icon>查看地图</Button></Col>
                <Col style={{lineHeight:'40px'}}>3.用户自己规定活动范围，当携带型号设备超出规定范围是，设备提示，并且发送警告到就近的服务站<Button type="primary" size="small" onClick={this.firstmap.bind(this,'3')}><Icon type="search"></Icon>查看地图</Button></Col>
                <Col style={{lineHeight:'40px'}}>4.轨迹纠偏<Button onClick={this.firstmap.bind(this,'4')} type="primary" size="small"><Icon type="search"></Icon>查看地图</Button></Col>
                <Col style={{lineHeight:'40px'}}>5.天气查询<Button onClick={this.firstmap.bind(this,'5')} type="primary" size="small"><Icon type="search"></Icon>查看地图</Button></Col>
                <Col style={{lineHeight:'40px'}}>6.云图<Button onClick={this.firstmap.bind(this,'6')} type="primary" size="small"><Icon type="search"></Icon>查看地图</Button></Col>
                <Col style={{lineHeight:'40px'}}>7.公交路线及站点查询<Button onClick={this.firstmap.bind(this,'7')} type="primary" size="small"><Icon type="search"></Icon>查看地图</Button></Col>
            </Row>
            </Card>
            <Drawer
       onClose={this.onClose}
          title={maptitle}
          width={'90%'}
          visible={this.state.visible}
          style={{
            overflow: 'auto',
            paddingBottom: '108px',
          }}>
          <div style={{display:this.state.drawervisible1}}><Firstmap1 onClick={this.drawertitle} firstmaptitle={this.state.index}/></div>
          <div style={{display:this.state.drawervisible2}}><Firstmap2 onClick={this.drawertitle} firstmaptitle={this.state.index}/></div>
          <div style={{display:this.state.drawervisible3}}><Firstmap3 onClick={this.drawertitle} firstmaptitle={this.state.index}/></div>
          <div style={{display:this.state.drawervisible4}}><Firstmap4 onClick={this.drawertitle} firstmaptitle={this.state.index}/></div>
          <div style={{display:this.state.drawervisible5}}><Firstmap5 onClick={this.drawertitle} firstmaptitle={this.state.index}/></div>
          <div style={{display:this.state.drawervisible6}}><Firstmap6 onClick={this.drawertitle} firstmaptitle={this.state.index}/></div>
          <div style={{display:this.state.drawervisible7}}><Firstmap7 onClick={this.drawertitle} firstmaptitle={this.state.index}/></div>
          {/* <div style={{display:this.state.drawervisible3}}><Firstmap3 onClick={this.drawertitle} firstmaptitle={this.state.index}/></div>
          <div style={{display:this.state.drawervisible4}}><Firstmap4 onClick={this.drawertitle} firstmaptitle={this.state.index}/></div> */}
        </Drawer>
           
       
            </div>
        )
    }
}