import React from "react";
import {Map as AMap} from 'react-amap'
import Geolocation from 'react-amap-plugin-geolocation'
import { Modal,Col,Row ,message } from "antd";
import onfoot from '../imgs/步行.png'
import onbus from '../imgs/公交车.png'
import oncar from '../imgs/开车.png'
import onbike from '../imgs/骑车.png'
// const Panel = Collapse.Panel;
export default class Firstmap extends React.Component{
    constructor(proper){
        super(proper)
        this.state={
            modalvisible:false,
            geocoder:{},
            Walking:{},
            Riding:{},
            Car:{},
            Bus:{},
            marker:[],
            panelvisible:false,
            mapCenter: {longitude: 113.403772, latitude: 22.500705},
            zoom:12,
            locatinname:'',
            tranffictype:'',
            mylocation:{
                lng:'',
                lat:''
            },
            taglocation:{
                lng:'',
                lat:''
            }
        }
        //地图事件
        this.firstmap={
            //地图创建方法
            created: map => {
                this.setState({ mapInstance: map });//tranffictype:this.props.tranffictype
                //获取逆解析对象
                window.AMap.plugin(['AMap.Geocoder'], () => {
                let geocoder = new window.AMap.Geocoder({
                city: "中山"//城市，默认：“全国”
              });
              this.setState({ geocoder });
            });
        
                console.log('hello world')
                 window.AMap.plugin('AMap.Walking', ()=> {
                     const Walking = new window.AMap.Walking({
                       map:this.state.mapInstance,
                       panel:'panel'
                     })
                  //   console.log(Walking)
                     this.setState({Walking})
                   });
      
            
                 window.AMap.plugin('AMap.Riding', ()=> {
                     const Riding = new window.AMap.Riding({
                       map:this.state.mapInstance,
                       panel:'panel'
                     })
                  //    console.log(Riding)
                     this.setState({Riding})
                   });
  
                
                 window.AMap.plugin('AMap.Transfer', ()=> {
                     const Bus = new window.AMap.Transfer({
                       map:this.state.mapInstance,
                       panel:'panel'
                     })
                    //  console.log(Bus)
                     this.setState({Bus})
                   });
         
                 console.log('hello')
                 window.AMap.plugin('AMap.Driving', ()=> {
                     const Car = new window.AMap.Driving({
                       map:this.state.mapInstance,
                       panel:'panel'
                     })
                   //   console.log(Car)
                     this.setState({Car})
                   });
             
           
        },
        //鼠标点击地图方法
            click:e=>{
               

                this.refs.mappanel.style.display=''
                var lnglat=e.lnglat;
                this.setState({marker:e.lnglat})
                this.state.geocoder.getAddress(lnglat,function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        console.log(result,'nice')
                    }
                })
                 this.test();
      
            }
        }
    }
    onClose=()=>{
        this.setState({
            modalvisible:false
        })
    }
    test=()=>{
        console.log('---------------')
        this.setState({
            modalvisible:true
        })

       
      
        
    }
    onfootmap(val){
        console.log(val) 
        this.setState({
            modalvisible:false,
            val
        })
        var start=[this.state.mylocation.lng,this.state.mylocation.lat]
        console.log(start,this.state.marker) 
        switch(val){
            case 'onfoot':this.state.Walking.search(start,this.state.marker);console.log(this.state.Walking);break;
            case 'onbus':this.state.Bus.search(start,this.state.marker);console.log(this.state.Bus);break;
            case 'onbike':this.state.Riding.search(start,this.state.marker);console.log(this.state.Riding);break;
            case 'oncar':this.state.Car.search(start,this.state.marker);console.log(this.state.Car);break;
        }
        this.props.onClick(val)
    
}
handleOk=()=>{
    this.setState({
        modalvisible:false
    })
}
handleCancel=()=>{
    this.setState({
        modalvisible:false
    })
}

   
    render(){
        var geolocationProps = {
            buttonPosition: 'RB',//复位按钮-定位按钮
            timeout: 5000,
            events: {
              created: o => {
                // 获取用户当前的精确位置信息
                // console.log(o)
                o.getCurrentPosition((status, result) => {
                    console.log('定位！',result)
                    //定位失败请参考：
                    //https://lbs.amap.com/faq/js-api/map-js-api/position-related/43361/
                  if (result && result.position) {
                    console.log('定位成功！',result)
                      this.setState({
                          mylocation:{
                              lng:result.position.lng,
                              lat:result.position.lat
                          },
                          locatinname:result.formattedAddress
                      })
                  }
                  else{
                    message.error('定位失败！')
                }
                })
              }
            }
          }
        return (
        <div style={{height:'500px',width:'100%'}}>
        <div>
            <p>当前地理位置：{this.state.locatinname}</p>
            <p>当前经纬度：{this.state.mylocation.lng},{this.state.mylocation.lat}</p>
        </div>
            <AMap
             amapkey='9fd01024a1e1c82b19b3c0cb6324413f' 
             center={this.state.mapCenter}
            zoom={this.state.zoom}
            events={this.firstmap}
             >
             <Geolocation {...geolocationProps}/>
            </AMap>
            <Modal title='请选择交通方式' visible={this.state.modalvisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
            <Row style={{color:'#40a9ff'}}>
                <Col span={6} style={{textAlign:'center',fontSize:'18px',lineHeight:'24px'}}><span onClick={this.onfootmap.bind(this,'onfoot')}><img src={onfoot} alt=''></img>步行</span></Col>
                <Col span={6} style={{textAlign:'center',fontSize:'18px',lineHeight:'24px'}}><span onClick={this.onfootmap.bind(this,'onbike')} ><img src={onbike} alt=''></img>骑车</span></Col>
                <Col span={6} style={{textAlign:'center',fontSize:'18px',lineHeight:'24px'}}><span onClick={this.onfootmap.bind(this,'onbus')}><img src={onbus} alt=''></img>坐公交</span></Col>
                <Col span={6} style={{textAlign:'center',fontSize:'18px',lineHeight:'24px'}}><span onClick={this.onfootmap.bind(this,'oncar')}><img src={oncar} alt=''></img>开车</span></Col>
            </Row>
            </Modal>
        {/* <div ref="myInput1"  id='panel1' style={{height:'400px' ,position:'fixed',marginLeft:'20px',marginTop:'20px',display:'none'}}></div> */}
        
        <div ref="mappanel" id='panel' style={{height:'200px' ,position:'fixed',marginLeft:'20px',marginTop:'20px'}}> </div>
        </div>
        )
        
    }
}