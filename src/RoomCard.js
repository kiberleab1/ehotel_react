import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { history } from './routing.js';
class RoomCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {
                    this.props.rooms ? (
                        <Card onClick={()=>this.handleClick(this.props.rooms.hotel_id,this.props.rooms.id)}>
                            <Image src="#"/>
                            <Card.Content>
                                <Card.Header>Our Room</Card.Header>
                                <Card.Meta>{'floor:',this.props.rooms.floor+ ',room' + this.props.rooms.room_no}</Card.Meta>
                                <Card.Description>
                                    {this.props.rooms.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='money' />
                                    {this.props.rooms.price}
                                </a>
                            </Card.Content>
                        </Card>) : null
                }
            </div>
        )

    }
    handleClick = (id,roomId) => {
        console.log(id)
        history.push("/hotels/"+id+"/room/"+roomId)
    }
}

export default RoomCard;