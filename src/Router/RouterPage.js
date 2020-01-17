import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePensionVolunteers from '../Pages/demo1/LoginPages/HomePensionVolunteers.js'
import VolunteersReg from '../Pages/demo1/registrationPages/VolunteersReg.js';
import TableDemo1 from '../Pages/demo1/mainpage/tabledemo1'
import Alertdemo from '../Pages/demo1/mainpage/alertdemo'
import demo1 from '../Pages/demo1/mainpage/demo1'
import accet from '../Pages/system_son/ordersmana/acceptring'
import order from '../Pages/system_son/complaintmana/orserver/order'
import mapdemo from '../Pages/demo1/mainpage/mapdemo'
import mainmap from '../Pages/demo1//reactmap/mainmap'
import firstmap from '../Pages/demo1//reactmap/maptype/firstmap'


//居家路由
import Mainpage from '../Pages/system_son/mainpage'
import auditold from '../Pages/system_son/oldfiles/auditold'
import newold from '../Pages/system_son/oldfiles/newold'
import oldlist from '../Pages/system_son/oldfiles/oldlist'
import inexcel from '../Pages/system_son/oldfiles/inexcel'
import mobileloc from '../Pages/system_son/locsearch/mobileloc'
// import '../App.css';
class RouterPages extends React.Component {
  render() {
    return (
      <Router >
        <div>
        {/* 地图 */}
          <Route path="/mainmap" component={mainmap}></Route>
          <Route path="/firstmap" component={firstmap}></Route>

        {/* 周计划 */}
          <Route path="/weiwei" component={TableDemo1}></Route>
        {/* 系统首页页面 */}
          <Route path="/mainpage" render={() =>
            <Mainpage>
              <Switch>
                <Route path="/mainpage/auditold" component={auditold} />
                <Route path="/mainpage/newold" component={newold} />
                <Route path="/mainpage/inexcel" component={inexcel} />
              </Switch>
            </Mainpage>} />
          <Route path="/react/mapdemo" component={mapdemo}></Route>
          <Route path="/Alertdemo" component={Alertdemo}></Route>
          <Route path="/order" component={order}></Route>
          <Route path="/b" component={demo1}></Route>
          <Route path="/mobileloc" component={mobileloc}></Route>
          <Route path="/aaccet" component={accet} />
          <Route path="/auditold" component={auditold} />
          <Route path="/a" component={HomePensionVolunteers}></Route>
          <Route path="/VolunteersReg" component={VolunteersReg}></Route>
          <Route path="/oldlist" component={oldlist} />
          {/* //<Route path="/auditold" component={auditold}/> */}
        </div>
      </Router>
    );
  }
}
export default RouterPages;