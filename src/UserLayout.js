import React from 'react'
import Menu from './Menu'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import AddRoom from './AddRoom'
import NotFound from './NotFound'
import UserHeader from './UserHeader';
import HotelEdit from './HotelEdit.js';
import HotelList from './HotelList'
import Hotel from './Hotel'
import RoomList from './RoomList.js';
import ReserveRoom from './ReserveRoom.js';
import ReservedRoomsHotel from './ReserveRoomesHotel.js';

import ReservedRoomsUser from './ReservedRoomsUser.js';
import ResturantsList from './ResturantsList.js';
import Resturants from './Resturants'
import { PublicLayout } from './PublicLayout.js';
import { HotelLayout } from './HotelLayout'
export const UserLayout = (props) =>
    <div>
        <UserHeader hotelId="3" />
        <Switch>
            <Route path="/hotels/:hotelid/room/:roomId/reserveRooms" component={() => (<ReservedRoomsUser />)} />
            <Route path="/hotels/:hotelid/room/:roomId/:reserve_roomId" component={() => (<ReserveRoom reserve_roomId="2" />)} />
            <Route path="/hotels/:hotelId/room/:roomId" component={() => (<ReserveRoom hotelId='3' roomId="1" />)} />
            <Route path='/hotels/:hotelId/room' component={() => (<RoomList hotelId='3' />)} />
            <Route path="/hotels/:hotelId" component={() => (<Hotel hotelId='3' />)} />
            <Route path="/hotels" component={HotelList} />
            <Route path="/resturants/1" component={Resturants} />

            <Route path="/resturants" component={ResturantsList} />

            <Route component={NotFound} />
        </Switch>
    </div>