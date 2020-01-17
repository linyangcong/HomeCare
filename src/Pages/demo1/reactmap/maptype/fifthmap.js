import React from 'react'
import {Map as AMap} from 'react-amap'
import Geocoder from 'react-amap-plugin-geolocation'
import { Button, Drawer } from 'antd';
// import Car from '../imgs/meinv.gif'
import gif11 from '../imgs/11.gif'
// import gif12 from '../imgs/12.gif'
import gif13 from '../imgs/13.gif'
import './fifthmap.css'
class Fifth extends React.Component{
    constructor(pro){
        super(pro)
        this.state={
            weather:{},
            futureWeather:{},
            visible: false,
            placement: 'top',
            maplocation:{
                lng:'',
                lat:''
            }
        }
        this.forwardmap={
            created:e=>{
            //加载天气查询插件
            let marker11 = new window.AMap.Marker({
                icon: gif11,
                position: [113.45135,22.52149]
            });
            let marker13 = new window.AMap.Marker({
                icon: gif13,
                position: [113.40135,22.50149]
            });
            e.add(marker11)
            // e.add(marker12)
            e.add(marker13)
        }
    }
}
onClose=()=>{
    this.setState({
        visible:false
    })

}
searchweather=(val)=>{
    this.setState({
        visible:true
    });
    window.AMap.plugin('AMap.Weather', ()=> {
        //创建天气查询实例
        var weather = new window.AMap.Weather();
    
        //执行实时天气信息查询
        weather.getLive('中山市', (err, data)=> {
            // console.log(err, data);
            this.setState({
                weather:data
            })
        });
        //天气预报
        weather.getForecast('中山市',(err, data)=>{
            this.setState({
                futureWeather:data
            })
            console.log(data)
        })
        
    
        console.log('ddddd99999999dddddd')
        
    
        
    });
    

}

    render(){
        const resizelocation={
            timeout:'10000',
            buttonPosition:'RB',
            events:{
                creacted:e=>{
                    e.getCurrentPosition((status,result)=>{
                        if (result && result.position) {
                            this.setState({
                                mylocation:{
                                    lng:result.position.lng,
                                    lat:result.position.lat
                                },
                                locatinname:result.formattedAddress
                            })
                        }
                    })
                }
            }
        }
        return(
            <div style={{height:500}}>
            <div>
            <Button onClick={this.searchweather.bind(this,1)}>实时天气查询</Button>
            <Button onClick={this.searchweather.bind(this,2)}>天气预报</Button>
            </div>
            <AMap center={this.state.mapcenter} events={this.forwardmap} zoom={13}
            >
                <Geocoder {...resizelocation}></Geocoder>
            </AMap>
            <div>
            <Drawer
            closable={false}
            maskClosable={true}
            onClose={this.onClose}
            placement={this.state.placement}
            visible={this.state.visible}
            style={{textAlign:'center'}}
            height='50%'
            >
                <div style={{width:'100%',display:'flex',background:'orange'}}>
                        <div style={{width:"30%",lineHeight:"100px",fontSize:'20px'}}>当前天气</div>
                    <div style={{textAlign:'center',width:'70%'}}>
                        <div>{this.state.weather.province}{this.state.weather.city}</div>
                        <div>{this.state.weather.weather}风向：{this.state.weather.windDirection}风向：{this.state.weather.windPower}</div>
                        <div>预报时间点：{this.state.weather.reportTime}</div>
                        <div>温度：{this.state.weather.temperature} 湿度：{this.state.weather.humidity}</div>
                    </div>
                </div>
                <div style={{background:'pink'}}>
                    <div style={{lineHeight:'30px',verticalAlign:'middle',fontSize:'20px'}}>未来四天预报：</div>
                    <ul >
                    {(this.state.futureWeather.forecasts||[]).map(item=>{
                    return(
                        <li className="listStyle" key={item.week}>
                            <div style={{lineHeight:'30px',verticalAlign:'middle'}}>{item.date}-{item.week}</div>
                            
                            <div style={{marginTop:'20px'}}>白天温度：{item.dayTemp},天气：{item.dayWeather},风力：{item.dayWindPower},风向：{item.dayWindDir}</div>
                            <div style={{marginTop:'10px'}}>夜间温度：{item.nightTemp},天气：{item.nightWeather},风力：{item.dayWindPower},风向：{item.dayWindDir}</div>
                        </li>
                    )})
                    }
                   </ul>
                </div>

            </Drawer>
            </div>
            </div>
        )
    }
}
export default Fifth;