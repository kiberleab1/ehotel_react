import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import { history } from './routing.js';
import Menu from './Menu';
import Login from './Login';
import HotelList from './HotelList'
import Hotel from './Hotel'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import RoomList from './RoomList.js';
import ReserveRoom from './ReserveRoom.js';
import ReservedRoomsUser from './ReservedRoomsUser.js';
import ReservedRoomsHotel from './ReserveRoomesHotel.js';
import HotelEdit from './HotelEdit.js';
import AddRoom from './AddRoom.js';
import ResturantsList from './ResturantsList.js';
import Resturants from './Resturants'
import { PublicLayout } from './PublicLayout.js';
import {HotelLayout} from './HotelLayout'
import {UserLayout} from './UserLayout'
const App = () => (
  
  <Router>
   
    <Switch history={history}>
      <Route path="/"  component={UserLayout}/>
      <Route exact path='/public' component={PublicLayout} />
      <Route path='/app' component={HotelLayout}/>
      <Route path="/AddRoom/:hotelId" component={()=>(<AddRoom hotelId="3"/>)}/>
      <Route path="/editHotel/:hoteld" component={()=>(<HotelEdit hotelId='3'/>)}/>
      <Route path="/hotels/:hotelid/room/:roomId/reserveRoomsHotel" component={()=>(<ReservedRoomsHotel/>)}/> 
      <Route path="/hotels/:hotelid/room/:roomId/reserveRooms" component={()=>(<ReservedRoomsUser/>)}/>
      <Route path="/hotels/:hotelId/room/:roomId" component={()=>(<ReserveRoom hotelId='3' roomId="1"/>)}/>
      <Route path='/hotels/:hotelId/room' component={()=>(<RoomList hotelId='3'/>)}/>
      <Route path="/hotels/:hotelId" component={()=>(<Hotel hotelId='3'/>)}/>
      <Route path="/hotels" component={HotelList} />
      <Route path="/resturants/1" component={Resturants}/>
  
      <Route path="/resturants" component={ResturantsList}/>
    
    </Switch>
  </Router>
);

export default withRouter(App);
