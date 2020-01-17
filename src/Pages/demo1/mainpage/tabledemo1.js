import React from 'react';
import {Card, Table,Icon,Popconfirm,message} from 'antd';
import './table.css'
import bed from '../assets/bed.png'
import breakfast from '../assets/breakfast.png'
import work from '../assets/work.png'
import study from '../assets/study.png'
import relax from '../assets/relax.png'
import Sleeping from '../assets/Sleeping.png'
import dinner from '../assets/dinner.png'
import sport from '../assets/sport.png'
import bath from '../assets/bath.png'
import walk from '../assets/walk.png'
import sleep from '../assets/sleep.png'
class TableDemo1 extends React.Component{
    state={
    }
     confirm=(e)=>{
        console.log(e);
        message.success('Click on Yes');
      }
      
       cancel=(e)=>{
        console.log(e);
        message.error('Click on No');
      }
    componentDidMount(){
        const data=[
            {
                time:<p>8:00-8:30 AM</p>,
                id:'1',
                1:<span  className='weiwei'><img src={bed} alt=''/> 起床</span>,
                2:<span  className='weiwei'><img src={bed} alt=''/> 起床</span>,
                3:<span  className='weiwei'><img src={bed} alt=''/> 起床</span>,
                4:<span  className='weiwei'><img src={bed} alt=''/> 起床</span>,
                5:<span  className='weiwei'><img src={bed} alt=''/> 起床</span>,
                6:<span  className='weiwei'><img src={breakfast} alt=''/> 早餐</span>,
                7:<span  className='weiwei'><img src={breakfast} alt=''/> 早餐</span>
            },
            {
                time:<p>8:30-9:00 AM</p>,
                id:'2',
                1:<span  className='weiwei'><img src={breakfast} alt=''/> 早餐</span>,
                2:<span  className='weiwei'><img src={breakfast} alt=''/> 早餐</span>,
                3:<span  className='weiwei'><img src={breakfast} alt=''/> 早餐</span>,
                4:<span  className='weiwei'><img src={breakfast} alt=''/> 早餐</span>,
                5:<span  className='weiwei'><img src={breakfast} alt=''/> 早餐</span>,
                6:<Popconfirm className='weiweis' title="开始学习语法吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="开始" cancelText="取消" icon={<Icon type="exclamation-circle" theme="twoTone" />}><Icon type="book" theme="twoTone" />微微英语</Popconfirm>,
                7:<Popconfirm className='weiweis' title="开始做练习题吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="开始" cancelText="取消" icon={<Icon type="exclamation-circle" theme="twoTone" />}><Icon type="book" theme="twoTone" />微微英语</Popconfirm>
            },
            {
                time:<p>9:00-12:00 AM</p>,
                id:'3',
                1:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                2:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                3:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                4:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                5:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                6:<span  className='weiwei'><img alt='' src={relax}/> 休闲时间</span>,
                7:<span  className='weiwei'><img alt='' src={relax}/> 休闲时间</span>
            },
            {
                time:<p>0:00-2:00 PM</p>,
                id:'4',
                1:<span  className='weiwei'><img alt='' src={Sleeping}/> 午休时间</span>,
                2:<span  className='weiwei'><img alt='' src={Sleeping}/> 午休时间</span>,
                3:<span  className='weiwei'><img alt='' src={Sleeping}/> 午休时间</span>,
                4:<span  className='weiwei'><img alt='' src={Sleeping}/> 午休时间</span>,
                5:<span  className='weiwei'><img alt='' src={Sleeping}/> 午休时间</span>,
                6:<span  className='weiwei'><img alt='' src={relax}/> 休闲时间</span>,
                7:<span  className='weiwei'><img alt='' src={relax}/> 休闲时间</span>
            },
            {
                time: <p>2:00-6:00 PM</p>,
                id:'5',
                1:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                2:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                3:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                4:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                5:<span  className='weiwei'><img alt='' src={work}/> 上班</span>,
                6:<span  className='weiwei'><img alt='' src={study}/> 学习</span>,
                7:<span  className='weiwei'><img alt='' src={study}/> 学习</span>
            },
           
            {
                time:<p>6:00-7:30 PM</p>,
                id:'6',
                1:<span  className='weiwei'><img alt='' src={dinner}/> 晚餐</span>,
                2:<span  className='weiwei'><img alt='' src={dinner}/> 晚餐</span>,
                3:<span  className='weiwei'><img alt='' src={dinner}/> 晚餐</span>,
                4:<span  className='weiwei'><img alt='' src={dinner}/> 晚餐</span>,
                5:<span  className='weiwei'><img alt='' src={dinner}/> 晚餐</span>,
                6:<span  className='weiwei'><img alt='' src={dinner}/> 晚餐<img alt='' src={walk}/>散步</span>,
                7:<span  className='weiwei'><img alt='' src={dinner}/> 晚餐<img alt='' src={walk}/>散步</span>
            },   
            {
                time:<p>7:30-8:00 PM</p>,
                id:'7',
                1:<span  className='weiwei'><img alt='' src={sport}/>运动<img alt='' src={bath}/>洗澡</span>,
                2:<span  className='weiwei'><img alt='' src={sport}/>运动<img alt='' src={bath}/>洗澡</span>,
                3:<span  className='weiwei'><img alt='' src={sport}/>运动<img alt='' src={bath}/>洗澡</span>,
                4:<span  className='weiwei'><img alt='' src={sport}/>运动<img alt='' src={bath}/>洗澡</span>,
                5:<span  className='weiwei'><img alt='' src={sport}/>运动<img alt='' src={bath}/>洗澡</span>,
                6:<span  className='weiwei'><img alt='' src={sport}/>运动<img alt='' src={bath}/>洗澡</span>,
                7:<span  className='weiwei'><img alt='' src={sport}/>运动<img alt='' src={bath}/>洗澡</span>
            },     
            {
                time:<p>8:00-9:30 PM</p>,
                id:'8',
                1:<Popconfirm className='weiweis' title="开始学习音标吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="开始" cancelText="取消" icon={<Icon type="exclamation-circle" theme="twoTone" />}><Icon type="book" theme="twoTone" />微微英语</Popconfirm>,
                2:<Popconfirm className='weiweis' title="开始学习口语吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="开始" cancelText="取消" icon={<Icon type="exclamation-circle" theme="twoTone" />}><Icon type="book" theme="twoTone" />微微英语</Popconfirm>,
                3:<Popconfirm className='weiweis' title="开始学习听力吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="开始" cancelText="取消" icon={<Icon type="exclamation-circle" theme="twoTone" />}><Icon type="book" theme="twoTone" />微微英语</Popconfirm>,
                4:<Popconfirm className='weiweis' title="开始欣赏美文吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="开始" cancelText="取消" icon={<Icon type="exclamation-circle" theme="twoTone" />}><Icon type="book" theme="twoTone" />微微英语</Popconfirm>,
                5:<Popconfirm className='weiweis' title="开始学习写作吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="开始" cancelText="取消" icon={<Icon type="exclamation-circle" theme="twoTone" />}><Icon type="book" theme="twoTone" />微微英语</Popconfirm>,
                6:<Popconfirm className='weiweis' title="开始学习语法吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="开始" cancelText="取消" icon={<Icon type="exclamation-circle" theme="twoTone" />}><Icon type="book" theme="twoTone" />微微英语</Popconfirm>,
                7:<Popconfirm className='weiweis' title="开始背单词吗吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="开始" cancelText="取消" icon={<Icon type="exclamation-circle" theme="twoTone" />}><Icon type="book" theme="twoTone" />微微英语</Popconfirm>
            },     
        
            {
                time:<p>9:30-10:00 PM</p>,
                id:'9',
                1:<span  className='weiwei'><img alt='' src={sleep}/>准备睡觉</span>,
                2:<span  className='weiwei'><img alt='' src={sleep}/>准备睡觉</span>,
                3:<span  className='weiwei'><img alt='' src={sleep}/>准备睡觉</span>,
                4:<span  className='weiwei'><img alt='' src={sleep}/>准备睡觉</span>,
                5:<span  className='weiwei'><img alt='' src={sleep}/>准备睡觉</span>,
                6:<span  className='weiwei'><img alt='' src={study}/>学习</span>,
                7:<span  className='weiwei'><img alt='' src={study}/>学习</span>,
            }
                    
        ]
        this.setState({
            dataSource:data
        })
    }
    render(){
    
        const columns=[
            {
                title:'时间段',
                dataIndex:'time',
                width:115,
                 fixed:"left"
            },
        {
            title:'序号',
            dataIndex:'id',
            width:77
            // fixed:"left"
        },
        {
            title:'周一',
            dataIndex:'1',
             width:110
         },
       {
             title:'周二',
             dataIndex:'2',
             width:110
         },
        {
            title:'周三',
            dataIndex:'3',
            width:110
        },
        {
            title:'周四',
            dataIndex:'4',
            width:110
        },
        {
            title:'周五',
            dataIndex:'5',
            width:110
        },
        {
            title:'周六',
            dataIndex:'6',
            width:110
        },
        {
            title:'周日',
            dataIndex:'7',
            width:110
        },
    ]


//     const data11 = [];
//   for (let i = 0; i < 100; i++) {
//      var T=new Date()
//     data11.push({
//       key: i,
//       time:<span>{T.getYear}</span>,
//       id:i,
//       1:'',
//       2:'',
//       3:'',
//       4:'',
//       5:'',
//       6:'',
//       7:''
//     });
//   }
    const ti=<span><Icon type="dashboard" theme="twoTone" /> 2019-我的周生活--做更好的我们</span>
        return(
            
                <Card title={ti} style={{width:'900px',height:'550px',margin:'auto',marginTop:'10px'}}>
                
                    <Table
                    columns={columns}
                    dataSource={this.state.dataSource} //{this.state.dataSource}
                    pagination={false}
                    scroll={{ x:1000}}
                   />
                </Card>
        )
    }
}
export default TableDemo1;