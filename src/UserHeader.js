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
                            <Link to={"/hotels" }>Hotels</Link>
                        </Menu.Item>
                        <Menu.Item as="a" name="login">
                            <Link to={"/hotels/3/room/1/reserveRooms"}>My Reservations</Link>
                        </Menu.Item>
                        <Menu.Item as="a" name="login">
                            <Link to={"/resturants"}>Resturants</Link>
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
