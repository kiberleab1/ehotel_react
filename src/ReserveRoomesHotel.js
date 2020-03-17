import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios';
import ResevreRoomsRowsHotel from './ResevreRoomRowsHotel'
class ReservedRoomsHotel extends Component {
    state = {
        reserves: []
    }
    constructor(props){
        super(props)
        this.getReservedRooms()
    }
    
   getReservedRooms=()=>{
    var apiUrl="http://localhost:3000/hotels/3/room/1/reserve_room"

        axios.get(apiUrl)
        .then((response)=>{
          
            this.setState({reserves: response.data})
            console.log(response.data)
        }).catch((error)=>{
            console.log("Erro Loading data")
        })
    }
    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Arrival Date</Table.HeaderCell>
                        <Table.HeaderCell>Departure Date</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Acept</Table.HeaderCell>
                        <Table.HeaderCell>Deny</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        this.state.reserves.map(currentReserved => (
                         <ResevreRoomsRowsHotel reserve_room= {currentReserved}/>
                        ))
                    }
                </Table.Body>
            </Table>
        )

    }
}
export default ReservedRoomsHotel;