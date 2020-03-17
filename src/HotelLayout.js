import React from 'react'
import Menu from './Menu'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import AddRoom from './AddRoom'
import NotFound from './NotFound'
import HotelHeader from './HotelHeader';
import HotelEdit from './HotelEdit.js';
import Hotel from './Hotel'
import RoomList from './RoomList.js';
import ReserveRoom from './ReserveRoom.js';
import ReservedRoomsHotel from './ReserveRoomesHotel.js';

export const HotelLayout = (props) =>
    <div>
        <HotelHeader hotelId="3"/>
        <Switch>
            <Route path="/app/AddRoom/:hotelId" component={() => (<AddRoom hotelId="3" />)} />
            <Route path="/app/editHotel/:hoteld" component={()=>(<HotelEdit hotelId='3'/>)}/>
            <Route path="/app/hotels/:hotelId/room/:roomId/reserveRoomsHotel" component={()=>(<ReservedRoomsHotel/>)}/> 
            <Route path='/app/hotels/:hotelId/room' component={()=>(<RoomList hotelId='3'/>)}/>
            <Route path="/app/hotels/:hotelId" component={()=>(<Hotel hotelId='3'/>)}/>
     
            <Route component={NotFound} />
        </Switch>
    </div>