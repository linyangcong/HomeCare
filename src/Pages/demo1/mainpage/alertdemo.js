import React from 'react'
import { Modal, Row, Input,Col, Select } from 'antd';
const Option=Select.Option
const selecthospital=[]
var selectdept=[]
export default class alertdemo extends React.Component{
    constructor(proper){
        super(proper)
        this.state={
            hospitalname:[
                {
                hospital:"社区卫生服务中心1",
                deptinfoname:[
                    {deptinfo:'站点1'},
                    {deptinfo:'站点2'},
                    {deptinfo:'站点3'},
                    {deptinfo:'站点4'}
                ]
                },
                {
                hospital:"社区卫生服务中心2",
                deptinfoname:[
                    {deptinfo:'站点1'},
                    {deptinfo:'站点2'},
                    {deptinfo:'站点3'},
                    {deptinfo:'站点4'}
                ]
            },
                {
                    hospital:"社区卫生服务中心3",
                    deptinfoname:[
                        {deptinfo:'站点1'},
                        {deptinfo:'站点2'},
                        {deptinfo:'站点3'},
                        {deptinfo:'站点4'}
                    ]
            
            },
                {
                hospital:"社区卫生服务中心4",
                deptinfoname:[
                    {deptinfo:'骨一科'},
                    {deptinfo:'骨二科'},
                    {deptinfo:'骨三科'},
                    {deptinfo:'骨四科'}
                ]
            },
                {
                    hospital:"社区卫生服务中心5",
                    deptinfoname:[
                        {deptinfo:'中医骨科'},
                        {deptinfo:'中医内科'},
                        {deptinfo:'中医外科'},
                        {deptinfo:'中医皮肤科'}
                    ]
                },
                {
                    hospital:"社区卫生服务中心6" ,
                    deptinfoname:[
                        {deptinfo:'肾内科'},
                        {deptinfo:'肝肠科'},
                        {deptinfo:'脑神经科'},
                        {deptinfo:'运动科'}
                    ]
            }  
             ],
            doctor:"linyc",
            type:"普通门诊",
            price:"20",
            timeflag:'1',
            date:'20190218',
            start:"15:30",
            end:"16:30",
            remain:"20",
            servertime:'20',
            visible:false
        }
    }
    componentDidMount(){
        for(var i=0;i<this.state.hospitalname.length;i++){
            selecthospital.push(<Option value={i} key={i}>{this.state.hospitalname[i].hospital}</Option>)
            
        }
    }
    showmodal=()=>{
        console.log(this.state.visible)
        this.setState({
            visible:true
        })
    }

    selecthosp=(e)=>{
        selectdept=[];
            for(var j=0;j<this.state.hospitalname[e].deptinfoname.length;j++){
                selectdept.push(<Option value={j} key={j}>{this.state.hospitalname[e].deptinfoname[j].deptinfo}</Option>)
        }
    }
    render(){
        return(
            <div>
                <h2 onClick={this.showmodal} style={{margin:"auto"}}>调试弹框！</h2>
                <Modal title="号源信息修改页面" visible={this.state.visible} okText="提交" cancelText="返回">
                <Row>
                    <Col>
                    <Row>
                        <Col span={5} style={{textAlign:"right"}}>机构名称：</Col>
                        <Col span={5}>
                            <Select style={{ width: '100%'}} onChange={this.selecthosp}>
                            {selecthospital}
                            </Select>
                        </Col>
                        <Col span={5} style={{textAlign:"right"}}>科室名称：</Col>
                        <Col span={5}>
                        <Select style={{ width: '100%'}}>
                            {selectdept}
                            </Select>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        <Col span={5} style={{textAlign:"right"}}>医生姓名：</Col>
                        <Col span={5}><Input value={this.state.doctor}></Input></Col>
                        <Col span={5} style={{textAlign:"right"}}>挂号类型：</Col>
                        <Col span={5}><Input value={this.state.type}></Input></Col>
                        <Col span={4}></Col>
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        <Col span={5} style={{textAlign:"right"}}>服务价格：</Col>
                        <Col span={5}><Input value={this.state.price}></Input></Col>
                        <Col span={5} style={{textAlign:"right"}}>挂号时段：</Col>
                        <Col span={5}><Input value={this.state.timeflag}></Input></Col>
                        <Col span={4}></Col>
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        <Col span={5} style={{textAlign:"right"}}>选择日期：</Col>
                        <Col span={5}><Input value={this.state.date}></Input></Col>
                        <Col span={5} style={{textAlign:"right"}}>选择时间：</Col>
                        <Col span={5}>
                        <Row>
                            <Col span={12}><Input value={this.state.start}></Input></Col>
                            <Col span={12}><Input value={this.state.end}></Input></Col>
                        </Row>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        <Col span={5} style={{textAlign:"right"}}>可约总数：</Col>
                        <Col span={5}><Input value={this.state.remain}></Input></Col>
                        <Col span={5} style={{textAlign:"right"}}>服务时常：</Col>
                        <Col span={5}>
                        <Row>
                            <Col span={20}><Input value={this.state.servertime}></Input></Col>
                            <Col span={4}>分钟</Col>
                        </Row>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    </Col>
                    
{/* 这里存放相同行 */}
                </Row>
                </Modal>
            </div>
        )
    }
}