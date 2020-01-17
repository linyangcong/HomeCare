
import React from 'react'
import {Map as AMap,Marker,InfoWindow} from 'react-amap'
import Geolocation from 'react-amap-plugin-geolocation'

// import NodeGeocoder from 'node-geocoder'
import './mapdemo.css'
import { Input } from 'antd';
const layerStyle = {
    padding: '10px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    position: 'absolute',
    top: '10px',
    left: '10px',
     width:'200px',
    // height:'100px'
  };

  
export default class MyMap extends React.Component {
    constructor(propers){
        super(propers)
        this.state = {
          zoom:12,
          mapinput:'',
          enableHighAccuracy:true,
          timeout:10000,
          showButton:true,
          markerlng:'',
          markerlat:'',
          mapCenter : {longitude: 113.403772, latitude: 22.500705},
          markerPosition : {longitude: 113.403772, latitude: 22.500705},
          info:{longitude: 113.403772, latitude: 22.500705},
          visible:true,
          html:'',
          
          size:{ 
            width: 200,
            height: 140,},
            offset:[0,0]
        };

        this.windowEvents = {
            // created: (iw) => {console.log(iw)},
            // open: () => {console.log('InfoWindow opened')},
            // close: () => {console.log('InfoWindow closed')},
            // change: () => {console.log('InfoWindow prop changed')},
          }
        

        this.markerevents = {
        created: (e) => {
            // console.log(e)
        },
          click:(e)=>{ 
            // console.log(e)
          
            this.setState({
              markerlng:e.lnglat.lng,
              markerlat:e.lnglat.lat,
              what:e.lnglat.lng+":"+e.lnglat.lat,
              info:{
                  longitude: e.lnglat.lng,
                   latitude: e.lnglat.lat
                },
            })
           
          },
          mouseout:(e)=>{ 
          // console.log(this.state.visible)
          this.setState({
            visible:false
          })
        },
        mouseover:(e)=>{ 
          this.setState({
            visible:true
          })
          // console.log(this.state.visible)
        }
        }
        this.mapclick={
          rightclick:e=>{
            this.setState({
              zoom:this.state.zoom+1
            })
          },
          created: map => {
            this.setState({ mapInstance: map });
        window.AMap.plugin(['AMap.Geocoder'], () => {
          let geocoder = new window.AMap.Geocoder({
            city: "中山"//城市，默认：“全国”
          });
          this.setState({ geocoder });
          // console.log(this.state.markerPosition)
        });
        window.AMap.plugin('AMap.Walking', ()=> {
          const Walking = new window.AMap.Walking({
            // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
            map:map,
            panel:'panel'
          })
          console.log(Walking)
          this.setState({Walking})
        });
        console.log(this.state.Walking)
          },
        click:(e)=>{
          
          let gps = e.lnglat;
          var that=this;
          this.state.geocoder.getAddress(gps, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                that.setState(
                  {
html:result.regeocode.formattedAddress+'<br/><p style="text-align:right"><button class="htmlbtn" >步行过去</button></p>',
                    what:<div><p>位置：</p><p>{result.regeocode.formattedAddress}</p><p>经纬度：</p><p>{that.state.mapCenter.longitude},{that.state.mapCenter.latitude}</p></div>
                  }
                )
                
                
            }
          })
          var start=[113.403772,22.500705]
          var end=[e.lnglat.lng,e.lnglat.lat]
          console.log(start)
          console.log(end)
          this.state.Walking.search(start,end);
          console.log(this.state.Walking)
            this.setState({
              markerlng:e.lnglat.lng,
              markerlat:e.lnglat.lat,
              what:e.lnglat.lng+":"+e.lnglat.lat,
              mapCenter : {longitude: e.lnglat.lng, latitude: e.lnglat.lat},
              markerPosition : {longitude: e.lnglat.lng, latitude: e.lnglat.lat},
              info:{
                longitude: e.lnglat.lng,
                 latitude: e.lnglat.lat
              },
            })
//---------------------------------------------------------
           
          }
        }
        // this.mapPlugins = ['ToolBar'];
        
      }
      triggerCreated(props) {
        const events = props.events || {};
        if (('created' in events) && (typeof events.created === 'function')) {
          events.created(this.geolocation);
        }
      }
    
      inputchange=(e)=>{
        this.setState({ mapinput:e.target.value})
             window.AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'], ()=>{
              // 实例化Autocomplete
              var autoOptions = {
                // input 为绑定输入提示功能的input的DOM ID
                input: 'mapinputid',
                city:'中山',
                type:'050103'|'050120'|'050123'
              }
              var autoComplete= new window.AMap.Autocomplete(autoOptions)     
              var placeSearch = new window.AMap.PlaceSearch({
                city:'中山',
                map:this.state.mapInstance
              })
              window.AMap.event.addListener(autoComplete, 'select', function(e){
                //TODO 针对选中的poi实现自己的功能
                placeSearch.search(e.poi.name)
              })

              // autoComplete.search(this.state.mapinput, function(status, result) {
              //   // 搜索成功时，result即是对应的匹配数据
              //   console.log(result)
              // })
            })
      }
      mapselect=(e)=>{
        console.log(e)
      }
       


	render(){
        const geolocationProps = {
            buttonPosition: 'RB',//复位按钮-定位按钮
            timeout: 10000,
            events: {
              created: o => {
                // 获取用户当前的精确位置信息
                // console.log(o)
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    // console.log(result);
                    this.setState({
                      html:'hhhhhhhhhhhh',
                        mapCenter : {longitude: result.position.lng, latitude: result.position.lat},
                        markerPosition : {longitude: result.position.lng, latitude: result.position.lat},
                        what:<div>当前所在位置：
                        <p>{result.addressComponent.province}{result.addressComponent.city}{result.addressComponent.township}
                        {result.addressComponent.street}
                        {result.addressComponent.streetNumber}
                        {result.addressComponent.neighborhood}</p>
                        <p>当前地图位置：({result.position.lng},{result.position.lat})</p>
                        </div>
                    })
                  }
                })
              }
            }
          }
        return(
            <div id='Panel' style={{width:'100%',height:'500px'}}>
             <div >
               <span>搜索地址：</span><Input  id="mapinputid" style={{width:'200px'}} size='small'
             onChange={this.inputchange} value={this.state.mapinput}></Input></div>
                 <AMap 
          // plugins={this.mapPlugins}
          center={this.state.mapCenter}
          zoom={this.state.zoom}
          amapkey="9fd01024a1e1c82b19b3c0cb6324413f"
         events={this.mapclick}
        >
         <InfoWindow
            position={this.state.info}
            visible={this.state.visible}
            isCustom={false}
            content={this.state.html}
            size={this.state.size}
            offset={this.state.offset}
            events={this.windowEvents}
          />
        <Geolocation {...geolocationProps} ></Geolocation>
          <Marker position={this.state.markerPosition} clickable events={this.markerevents}/>
          <div style={layerStyle}>{this.state.what}</div>
        </AMap> 
       
        <div id='panel'></div>  
            </div>
        )
    }
}

