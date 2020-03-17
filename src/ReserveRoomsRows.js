import React, { Component } from 'react'
import { Table, Button, Tab } from 'semantic-ui-react'
import { history } from './routing.js';
import axios from 'axios'
class ReserveRoomsRows extends Component {
    constructor(props) {
        super(props)
    }
    deleteRese=()=>{
        axios.delete("http://localhost:3000/hotels/3/room/1/reserve_room/"+this.props.reserve_room.id,this.props.reserve_room).then((response)=>{
            history.push("/hotels/3/room/1/reserveRooms")
        })

    }
    editHotel=()=>{
        history.push("/hotels/3/room/1/"+this.props.reserve_room.id)
    }
    render() {
        return (
            <Table.Row>
                <Table.Cell>Hotel Name</Table.Cell>
                <Table.Cell>{this.props.reserve_room.arrivedate}</Table.Cell>
                <Table.Cell>{this.props.reserve_room.departureDate}</Table.Cell>
                <Table.Cell>
                    {
                        this.props.reserve_room.status==0 ? ( <p>pending</p>) : (this.props.reserve_room.status==1 ? (<p>Approved</p>): (<p>Canceled</p>)) 
                    }
                
                </Table.Cell>
                <Table.Cell><Button onClick={this.editHotel}>Edit</Button></Table.Cell>
                <Table.Cell><Button onClick={this.deleteRese}>Delete</Button></Table.Cell>
            </Table.Row>
        )
    }
}
export default ReserveRoomsRows;