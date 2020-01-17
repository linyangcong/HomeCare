import React from 'react'
import {Map as AMap} from 'react-amap'
import Geolocation from 'react-amap-plugin-geolocation'
class Secondmap extends React.Component{
    constructor(pro){
        super(pro);
        this.state={
            markers:[],
            zoom:15,
            search1:{},
            mylocation:[],
            tolocation:{
                lan:0,
                lat:0
            }
        };
       this.onloadmap={
            created:e=>{
                this.mapinstance=e
                window.AMap.plugin('AMap.PlaceSearch',()=>{
                    console.log('初始化amap成功0')
                    this.setState({
                        search1:new window.AMap.PlaceSearch({
                            city:'中山市',
                            type:'餐厅',
                            map:e,
                        })
                    })
                    // console.log('1111111111111111')
                    // console.log(search1)
                    // console.log('1111111111111111')
                
                })
                // window.AMap.plugin(['AMap.Geocoder'], () => {
                //     let geocoder = new window.AMap.Geocoder({
                //     city: "中山"//城市，默认：“全国”
                //   });
                //   this.setState({ geocoder });
                // });

                window.AMap.plugin('AMap.Transfer', ()=> {
                    const Bus = new window.AMap.Transfer({
                      map:e,
                      panel:'panel'
                    })
                    this.setState({Bus})
                  });
            },
            click:e=>{
                console.log('uuuuuuuuuuuuuuu')
                // this.state.geocoder.getAddress(e.lnglat,function(status, result) {
                //     if (status === 'complete' && result.info === 'OK') {
                //         console.log(result)
                //     }
                // })
                this.state.Bus.search(this.state.mylocation,e.lnglat)
            }
       }
       
    }
    onInput=()=>{
        console.log(this.state.Bus)
        this.state.search1.search(this.refs.inputtips.value, (status, result)=> {
   // 查询成功时，result即对应匹配的POI信息
   console.log(status)
   console.log(result)
   let countmarkers=[];
   result.poiList.pois.map((item)=>{
       console.log(item)
       countmarkers+=[item.location.lat,item.location.lng]
       
   })
   this.setState({
    markers:countmarkers
})
console.log(this.state.markers)

})

    }
    
    render(){
        var geolocationProps = {
            buttonPosition: 'RB',//复位按钮-定位按钮
            timeout: 10000,
            events: {
              created: o => {
                // 获取用户当前的精确位置信息
                // console.log(o)
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                      this.setState({
                          mylocation:[
                              result.position.lng,
                              result.position.lat
                            ],
                          locatinname:result.formattedAddress
                      })
                  }
                })
              }
            }
          }

        return(
            <div style={{height:'500px',width:'100%'}}>
                <button onClick={this.onInput}>搜索</button><input ref="inputtips" style={{display:'absolute',top:'50px'}} id="tipinput" type="text" placeholder='请输入查询条件'></input>
                <AMap
            amapkey='9fd01024a1e1c82b19b3c0cb6324413f' 
            zoom={this.state.zoom}
            events={this.onloadmap}
            markers={this.state.markers}
             >
                <Geolocation {...geolocationProps}/>
            </AMap>

            <div  id='panel1' style={{height:'200px' ,position:'fixed',marginLeft:'20px',marginTop:'20px'}}> </div>
            </div>
        )
    }
}
export default Secondmap;