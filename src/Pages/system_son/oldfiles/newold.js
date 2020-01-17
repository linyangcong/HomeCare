import React from 'react'
import {Tabs} from 'antd'
import Basehealthinfo from './newold/basehealthinfo'
import Baseinfo from './newold/baseinfo'
import Healthrecord from './newold/healthrecord'
import Hookhelpinfo from './newold/hookhelpinfo'
import Phyexamrecords from './newold/phyexamrecords'
import Relativesinfo from './newold/relativesinfo'
import Spehobby from './newold/spehobby'
import Treatrecord from './newold/treatrecord'
import Usemedirecord from './newold/usemedirecord'
const TabPane = Tabs.TabPane
export default class auditold extends React.Component{
    constructor(proper){
        super(proper)
        const panes = [
            { title: '老人基本信息', content: <Basehealthinfo/>, key: '100' },
            { title: '亲属信息', content: <Baseinfo/>, key: '101' },
            { title: '挂钩帮扶信息', content: <Healthrecord/>, key: '102' },
            { title: '基本健康信息', content: <Hookhelpinfo/>, key: '103' },
            { title: '健康履历', content: <Phyexamrecords/>, key: '104' },
            { title: '特长爱好', content: <Relativesinfo/>, key: '105' },
            { title: '用药记录', content: <Spehobby/>, key: '106' },
            { title: '体检记录', content: <Treatrecord/>, key: '107' },
            { title: '就诊记录', content: <Usemedirecord/>, key: '108' }
           ]
        this.state={
            activeKey: panes[0].key,
            panes,
        }
    }
    onChange = (activeKey) => {
        this.setState({ activeKey });
      }
    render(){
        return(
            <div>
            <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="card"
          onEdit={this.onEdit}
          style={{textAlign:'center',padding:'0px'}}
        >
          {this.state.panes.map(pane => <TabPane style={{padding:'2px 0px'}} tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
        </Tabs>
        </div>
          );
    }
}