import React from 'react'
import {Map as AMap} from 'react-amap'
import Geocoder from 'react-amap-plugin-geolocation'
class Sixth extends React.Component{
    constructor(pro){
        super(pro)
        this.state={
            maplocation:{
                lng:'',
                lat:''
            }
        }
        this.cloudmap={
                created:e=>{
                        //加载云图层插件
                        
                        window.AMap.plugin('AMap.CloudDataLayer', function() {
                            var layerOptions = {
                                query: {keywords: '朗晴轩'|'杭创'},
                                clickable: true
                            };
                            console.log('------------------------------------------------')
                            console.log(layerOptions)
                            var cloudDataLayer = new window.AMap.CloudDataLayer('5c789be2afdf5202acff4bc1', layerOptions); //实例化云图层类
                            console.log(cloudDataLayer)
                            cloudDataLayer.setMap(e); //叠加云图层到地图
                            window.AMap.event.addListener(cloudDataLayer, 'click', function(result) {
                                var clouddata = result.data;
                                console.log(result.data)
                                var photo = [];
                                if (clouddata._image[0]) {//如果有上传的图片
                                    photo = ['<img alt="" width=240 height=100 src="' + clouddata._image[0]._preurl + '"><br>'];
                                }
                                var infoWindow = new window.AMap.InfoWindow({
                                    content: "<font class='title'>" + clouddata._name + "</font><hr/>" + photo.join("") + "地址：" + clouddata._address + "<br />" + "创建时间：" + clouddata._createtime + "<br />" + "更新时间：" + clouddata._updatetime,
                                });
                                infoWindow.open(e, clouddata._location);
                            });
                        });
                    }    
                
            
        }
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
            <div style={{height:"500px"}}>
            <div>{this.state.mylocation}</div>
            <AMap center={this.state.mapcenter} events={this.cloudmap} zoom={13}>
                <Geocoder {...resizelocation}></Geocoder>
            </AMap>
            </div>
        )
    }
}
export default Sixth;