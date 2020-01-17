import React from 'react'
import {Map as AMap} from 'react-amap'
import Geocoder from 'react-amap-plugin-geolocation'
import { Button } from 'antd';
class Thirdmap extends React.Component{

        constructor(pro){
            super(pro)
            this.state={
                status:false,
                i:0,
                mappanel:{
                    a:{lng:113.408904,lat:22.503423},
                    b:{lng:113.402122,lat:22.521176},
                    c:{lng:113.407271,lat:22.502501},
                    d:{lng:113.408258,lat:22.524600}
                },
                a:{lng:'',lat:''},
                b:{lng:'',lat:''},
                c:{lng:'',lat:''},
                d:{lng:'',lat:''},
                maplocation:{
                    lng:'',
                    lat:''
                }
            }
            this.forwardmap={
                    created:e=>{
                        this.setState({
                            map:e
                        })
            },
            click:e=>{
                
                console.log(e.lnglat)
                if(this.state.status===true&&this.state.i<=3){
                    console.log('ok===============')
                    console.log(this.state.i)
                switch(this.state.i){
                    case 0:this.setState({a:{lng:e.lnglat.lng,lat:e.lnglat.lat}});break;
                    case 1:this.setState({b:{lng:e.lnglat.lng,lat:e.lnglat.lat}});break;
                    case 2:this.setState({c:{lng:e.lnglat.lng,lat:e.lnglat.lat}});break;
                    case 3:this.setState({d:{lng:e.lnglat.lng,lat:e.lnglat.lat}});break;
                }
               this.setState({i:this.state.i+1})
            }
            }
        }
    }
    lookmyact=()=>{
        var path = [
            new window.AMap.LngLat(this.state.a.lng,this.state.a.lat),
            new window.AMap.LngLat(this.state.b.lng,this.state.b.lat),
            new window.AMap.LngLat(this.state.c.lng,this.state.c.lat),
            new window.AMap.LngLat(this.state.d.lng,this.state.d.lat)
            // new window.AMap.LngLat(113.380012 ,22.520025),
            // new window.AMap.LngLat(113.381012 ,22.521025),
            // new window.AMap.LngLat(113.382012 ,22.523025),
            // new window.AMap.LngLat(113.384012 ,22.524025)
        ];
        
        var polygon = new window.AMap.Polygon({
            path: path,  
            fillColor: '#4eadfb', // 多边形填充颜色
            strokeOpacity: 0.2,
            fillOpacity: 0.2,
            borderWeight: 2, // 线条宽度，默认为 1
            strokeColor: 'red', // 线条颜色
        });
        
       this.state.map.add(polygon);
    }
    editmyact=()=>{
this.setState({
    status:true
})
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
                                console.log(result.position)
                            }
                        })
                    }
                }
            }
            return(
                <div style={{height:500}}>
                <Button onClick={this.lookmyact}>查看我的活动范围</Button>
                <Button onClick={this.editmyact}>编辑我的活动范围</Button>
                <AMap center={this.state.mapcenter} events={this.forwardmap} zoom={13}>
                    <Geocoder {...resizelocation}></Geocoder>
                </AMap>
                </div>
            )
        }
}
export default Thirdmap;