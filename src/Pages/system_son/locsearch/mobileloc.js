import React from 'react'
import { Input,Row,Col, Icon,Button, Divider, Table,Card, Drawer } from 'antd';
import './locsearch.css'
import { Map,Marker } from 'react-amap';
import MapDemo from '../../demo1/mainpage/mapdemo'

const layerStyle = {
    padding: '10px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    position: 'absolute',
    top: '10px',
    left: '10px',
    // width:'100px',
    // height:'100px'
  };

class mobileloc extends React.Component{
    constructor(propers){
        super(propers)
        this.state = {
            visible:false,
            enableHighAccuracy:true,
            timeout:10000,
            showButton:true,
          markerlng:'',
          markerlat:'',
          mapCenter : {longitude: 113.403772, latitude: 22.500705},
          markerPosition : {longitude: 113.403772, latitude: 22.500705}
        };
        this.markerevents = {
        created: (e) => {
            // console.log(e)
        },
          click:(e)=>{ 
            // console.log(e)
            this.setState({
              markerlng:e.lnglat.lng,
              markerlat:e.lnglat.lat,
              what:e.lnglat.lng+":"+e.lnglat.lat
            })
          }
        }
        this.mapclick={
            created: (e) => {
                // console.log(e);
                // console.log(e.getCenter());
                // this.setState({
                //     markerPosition:{longitude: e.getCenter().lng, latitude: e.getCenter().lat}
                // })
            },
        click:(e)=>{
        //   console.log(e.lnglat.lng+":"+e.lnglat.lat)
            this.setState({
              markerlng:e.lnglat.lng,
              markerlat:e.lnglat.lat,
              what:e.lnglat.lng+":"+e.lnglat.lat,
              mapCenter : {longitude: e.lnglat.lng, latitude: e.lnglat.lat},
              markerPosition : {longitude: e.lnglat.lng, latitude: e.lnglat.lat},
              visible:true
            })
          }
        }
        this.mapPlugins = ['ToolBar'];
        
      }
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };

      

    render(){
// const geolocationProps = {
//       buttonPosition: 'RB',
//       timeout: 10000,
//       events: {
//         created: o => {
//           // 获取用户当前的精确位置信息
//           o.getCurrentPosition((status, result) => {
//             if (result && result.position) {
//               console.log(result);
//             }
//           })
//         }
//       }
//     }
        const col=[
            {
                title:"姓名",
                dataIndex:'name'
            },
            {
                title:"身份证",
                dataIndex:'idcard'
            },
            {
                title:"手机号码",
                dataIndex:'phonenum'
            },
            {
                title:"定位",
                dataIndex:'location'
            },
            // {
            //     title:"当前位置",
            //     dataIndex:'location'
            // }
        ]
        const data=[]
        for (let i = 0; i < 100; i++) {
            data.push({
            key:i,
            name:'张三',
            phonenum:'13888888888',
            idcard:'8888888888888888',
            location:<Button  size="small" type="primary">定位</Button>
       //     location: <span>x:{113.42206002+0.01},y:{22.54517751+0.001}</span>
            })
           
        }
        
        return(
            <Row><Col>
            <Row style={{textAlign:'right'}}>
                {/* <Col>
                <Row>

                </Row>
                </Col> */}
                <Col span={5}>
                <Row>
                <Col span={8}>老人姓名：</Col>
                <Col span={16}><Input size="small" className="accepInput"/></Col>
                </Row>
                </Col>
                <Col span={5}>
                <Row>
                <Col span={8}>身份证：</Col>
                <Col span={16}><Input size="small" className="accepInput"/></Col>
                </Row>
                </Col>
                <Col span={5}>
                <Row>
                <Col span={8}>联系方式：</Col>
                <Col span={16}><Input size="small" className="accepInput"/></Col>
                </Row>
                </Col>
                <Col span={5}>
                <Row>
                <Col span={8}>家庭住址：</Col>
                <Col span={16}><Input size="small" className="accepInput"/></Col>
                </Row>
                </Col>
                <Col span={4}>
                <Row>
                <Col span={20}><Button type="primary" size="small"><Icon type="search"/>查询</Button></Col>
                </Row>
                </Col>
                {/* <Col span={3}></Col> */}
            </Row>
            </Col>
            <Divider/>
            <Col>
                <Row>
                    <Col span={8}>
                    <Table columns={col} dataSource={data}></Table>
                    </Col>
                    
                    <Col span={16}>
                    <Row>
                        <Col span={24}>
                        <Card >
                    <div style={{width:'100%',height:'320px'}}>
                    <Map 
          plugins={this.mapPlugins}
          center={this.state.mapCenter}
          zoom={12}
          amapkey="9fd01024a1e1c82b19b3c0cb6324413f"
         events={this.mapclick}
        >
        {/* <Geolocation {...geolocationProps} ></Geolocation> */}
          <Marker position={this.state.markerPosition} clickable events={this.markerevents}/>
          <div style={layerStyle} onClick={this.showdiv}>{this.state.what}</div>
        </Map>   
        <Drawer
       onClose={this.onClose}
          title="linyc的第一张地图"
          width={'60%'}
          visible={this.state.visible}
          style={{
            overflow: 'auto',
            paddingBottom: '108px',
          }}
        >
          <MapDemo />
        </Drawer> 
                        </div>
                        </Card></Col>
                    </Row>
                    </Col>
                </Row>
            </Col>
            </Row>
        )
    }
}
export default mobileloc;