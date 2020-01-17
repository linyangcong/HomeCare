import React from 'react'
import Locimg from './img/location.png'
import {Map as AMap,Markers} from 'react-amap'
class seventh extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mapinstance:{},
            zoom:13,
            markers:[]
         }
         this.firstmap={
             created:e=>{
                 console.log('图标')
                 this.setState({
                     mapinstance:e
                 })


                 let marks=[];
        window.AMap.plugin(["AMap.StationSearch"], ()=> {
            //实例化公交站点查询类
            var station = new window.AMap.StationSearch({
              pageIndex: 1, //页码，默认值为1
              pageSize: 10, //单页显示结果条数，默认值为20，最大值为50
              city: '0760' //限定查询城市，可以是城市名（中文/中文全拼）、城市编码，默认值为『全国』
            });
            //执行关键字查询p
            station.search('和景花园', (status, result)=> {
              //打印状态信息status和结果信息result
              //status：complete 表示查询成功，no_data 为查询无结果，error 代表查询错误。
              console.log(status, result);
           result.stationInfo.map(item=>{
            marks.push(
                {position:{longitude:item.location.lng,latitude:item.location.lat}}
            )
           })
            });
            this.setState({
                markers:marks
            })
            console.log(marks)
            console.log(this.state.markers)
            
        })
               
             }
         }
    }
    chazhao=()=>{
        
          }
    render() { 
        return ( 
            <div style={{height:'500px'}}>
                {/* <img src={Locimg} width="100px" height="100px" alt=""/> */}
                <input ref="findvalue" placeholder='请输入公交车路线'></input><button onClick={this.chazhao}>查询</button>
                <AMap
                amapkey='9fd01024a1e1c82b19b3c0cb6324413f' 
               zoom={this.state.zoom}
               events={this.firstmap}
                >
                </AMap>
            </div>
         );
    }
}
 
export default seventh;