import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { history } from './routing.js';
class HotelCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {
                    this.props.hotel ? (
                        <Card onClick={()=>this.handleClick(this.props.hotel.id)}>
                            <Image src={"http://localhost:3000/" + this.props.hotel.profile_images_link} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{this.props.hotel.hotelName}</Card.Header>
                                <Card.Meta>{this.props.hotel.subcity + ',' + this.props.hotel.city}</Card.Meta>
                                <Card.Description>
                                    {this.props.hotel.moto}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='star' />
                                    {this.props.hotel.star}
                                </a>
                            </Card.Content>
                        </Card>) : null
                }
            </div>
        )

    }
    handleClick = (id) => {
        console.log(id)
        history.push("/hotels/"+id)
    }
}

export default HotelCard;