import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Image, Menu, } from 'semantic-ui-react';

class HotelHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Menu>
                <Container>
                    <Menu.Item as="a" header>
                        <Menu.Item>
                            E-hotel
        </Menu.Item>
                    </Menu.Item>

                    <Menu.Menu position="right">
                        <Menu.Item as="a" name="login">
                            <Link to={"/app/hotels/" + this.props.hotelId}>My profile</Link>
                        </Menu.Item>
                        <Menu.Item as="a" name="login">
                            <Link to={"/app/hotels/" + this.props.hotelId+"/room"}>My Rooms</Link>
                        </Menu.Item>

                     <Menu.Item as="a" name="login">
                            <Link to={"/app/AddRoom/" + this.props.hotelId}>Add Rooms</Link>
                        </Menu.Item>
                        <Menu.Item as="a" name="login">
                            <Link to={"/app/hotels/" + this.props.hotelId+"/room/1/reserveRoomsHotel"}>My Reservation</Link>
                        </Menu.Item>

                        <Menu.Item as="a" name="register">
                            <Link to={"/app/editHotel/" + this.props.hotelId}>Edit Profile</Link>
                        </Menu.Item>

                        <Menu.Item as="a" name="register">
                            <Link to={"/"}>Logout</Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    }
}
export default HotelHeader;
