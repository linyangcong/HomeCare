import React from 'react'
import { Card, Input, Button, Row ,Col,Collapse, Divider} from 'antd';
const Panel = Collapse.Panel;
export default class auditold extends React.Component{
    downloadexcel=()=>{
        
    }
    render(){
        return(
            <div>
           <Card>
              <Row>
                  <Col span={8}>

                  </Col>
                  <Col span={8}>
                  <Row>
                      <Col span={8}><Button type="danger" onClick={this.downloadexcel} block>导入模板下载</Button></Col>
                      <Col span={8}></Col>
                      <Col span={8}><Button type="primary" block>导入excel</Button></Col>
                  </Row>
                  </Col>
                  <Col span={8}>
                 
                  </Col>
              </Row>
              <Divider></Divider>
              <Row>
              <Col span={5}>
                 </Col>
                  <Col span={14}>
                  <Card title="注意事项：" style={{textAlign:'center'}}>
                  <p>下载excel批量导入模版，可以快速的录入老人的信息，导入模版只提供基础信息的导入；跟你更多的详细资料可以根据需要查询到老人的档案后点击修改进行补充</p>
                  </Card>
                  </Col>
                  <Col span={5}>
                 </Col>
              </Row>
           </Card>
        </div>
          );
    }
}