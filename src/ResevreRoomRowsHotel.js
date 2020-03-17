import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
class ResevreRoomsRowsHotel extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Table.Row>
                <Table.Cell>{this.props.reserve_room.arrivedate}</Table.Cell>
                <Table.Cell>{this.props.reserve_room.departureDate}</Table.Cell>
                <Table.Cell>
                    {
                        this.props.reserve_room.status == 0 ? (<p>pending</p>) : (this.props.reserve_room.status == 1 ? (<p>Approved</p>) : (<p>Canceled</p>))
                    }

                </Table.Cell>
                <Table.Cell><Button onClick={this.handleAccept}>Accept</Button></Table.Cell>
                <Table.Cell><Button onClick={this.handleCacncel}>Cancel</Button></Table.Cell>
            </Table.Row>
        )
    }
    handleAccept = () => {
        var payload = this.props.reserve_room
        payload.status = 1
        axios.put("http://localhost:3000/hotels/3/room/1/reserve_room/" + payload.id, payload)
            .then((response) => {
                console.log(response)

            })
    }
    handleCacncel = () => {
        var payload = this.props.reserve_room
        payload.status = 2
        axios.put("http://localhost:3000/hotels/3/room/1/reserve_room/" + payload.id, payload)
            .then((response) => {
                console.log(response)
            }
            )
    }
}
export default ResevreRoomsRowsHotel;