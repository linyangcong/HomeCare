import React from 'react'
import {Collapse ,Checkbox, Card, Row,Col, Button, Input, Form, Radio, Divider,Icon } from 'antd';
import './basehealthinfo.css'
import ButtonGroup from 'antd/lib/button/button-group';
const Panel = Collapse.Panel;
export default class basehealthinfo extends React.Component{
    constructor(proper){
        super(proper)
    this.state={
        value:'a'
    }
    }
     callback(key) {
        console.log(key);
      }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
          checkbox:[]
        });
      }
      checkbox=(e)=>{
          this.setState({
            checkbox:e
          })
      }

    render(){
        return (
            <Card>
                <Form>
                <Row>
                    <Col span={18}>
                    <Card>
                    <Row>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>老人姓名：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>身份证号码：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>性别：</Col>
                            <Col span={14}><Input  size="small"/></Col>
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>联系手机号码：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>婚姻状态：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>民族：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>老人类别：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>出生日期：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>年龄：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16}>
                        <Row>
                            <Col span={5}>家庭住址：</Col>
                            <Col span={19}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16}>
                        <Row>
                            <Col span={5}>居住情况：</Col>
                            <Col span={19} style={{textAlign:'left'}}>
                            <Radio.Group  buttonStyle="solid" size='small' value={this.state.value} onChange={this.onChange}>
                                <Radio.Button value="a">独自居住</Radio.Button>
                                <Radio.Button value="b">与配偶二人住</Radio.Button>
                                <Radio.Button value="c">与子女合住</Radio.Button>
                                <Radio.Button value="d">其他</Radio.Button>
                            </Radio.Group>
                            </Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>所属服务点：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                    </Row>
                    </Card>

                    </Col>
                    <Col span={6}>
                    <Card title='图片：'  className='col-img'><Button type="primary">上传图片</Button></Card>
                    </Col>
                </Row>
<Divider></Divider>
            
                <Row>
        
                <Col span={18}>
                <Card>
                    <Row>
                        <Col span={24} style={{textAlign:'left'}}>
                        老人联系方式
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>家庭电话：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>紧急联系人：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>联系电话：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{textAlign:'left'}}>
                        老人服务信息
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>服务类型：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>服务状态：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={8}>
                        <Row>
                            <Col span={10}>套餐服务：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                    </Row>
                    </Card>
                </Col>
                  
                    <Col span={6}>
                    <Card title='二维码：'  className='col-img'><Button type="primary">上传图片</Button></Card>
                    </Col>
                </Row>
           
<Divider></Divider>
         
                <Row>
                <Card>
                    <Col style={{textAlign:'left'}}>
                    老人经济情况
                    </Col>
                    <Col>
                        <Row>
                        <Col span={6}>
                        <Row>
                            <Col span={10}>经济来源：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={6}>
                        <Row>
                            <Col span={10}>月收入：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={6}>
                        <Row>
                            <Col span={10}>医疗保障：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={6}>
                        <Row>
                            <Col span={10}>社保卡号：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                    </Row>
                    </Col>
                    </Card>
                </Row>
            
<Divider></Divider>
            
                <Row>
                <Card>
                    <Col style={{textAlign:'left'}}>
                   老人健康情况
                    </Col>
                    <Col>
                        <Row>
                        <Col span={6}>
                        <Row>
                            <Col></Col>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                        <Panel header="慢性病：" key="1">
                        <Checkbox.Group style={{ width: '100%' }} onChange={this.checkbox}>
                            <Checkbox value="a" >高血压</Checkbox>
                            <Checkbox value="b" >高血糖</Checkbox>
                            <Checkbox value="c" >其他</Checkbox>
                            <Checkbox value="d" >无</Checkbox>
                            </Checkbox.Group>
                            </Panel>
                         </Collapse>
                        </Row>
                        </Col>
                        <Col span={6}>
                        <Row>
                            <Col span={10}>血型：</Col>
                            <Col span={14}><Input size="small" /></Col>
                        </Row>
                        </Col>
                        <Col span={6}>
                        <Row>
                            <Col span={10}>失能情况：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                        <Col span={6}>
                        <Row>
                            <Col span={10}>残疾情况：</Col>
                            <Col span={14}><Input size="small"/></Col>
                        </Row>
                        </Col>
                    </Row>
                    </Col>
                    </Card>
                </Row>
                
                <Row>
                <Col style={{textAlign:'center'}}>
        <ButtonGroup>
      <Button type="primary">
      <Icon type="delete" />清空
      </Button>
      <Button type="primary"><Icon type="upload" />
        提交
      </Button>
    </ButtonGroup>
                </Col>
                </Row>
                </Form>
            </Card>
            )
    }
}