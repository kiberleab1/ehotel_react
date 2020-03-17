import React, { Component } from 'react'
import { Card, Icon, Image, Grid, GridColumn } from 'semantic-ui-react'
import { Redirect, History, withRouter } from "react-router-dom";
import axios from 'axios'
import RoomCard from './RoomCard';

class HotelList extends Component {
  state = {
    rooms: []
  }
  constructor(props) {
    super(props);
    this.getHotels()

  }
  getHotels = () => {
    axios.get("http://localhost:3000/hotels/"+this.props.hotelId+"/room")
      .then((response) => {
        console.log(this.props.hotelId)
        this.setState({ rooms: response.data })
        console.log(this.state.rooms)
      })
      .catch((error) => {
        console.log("Error occurred while fetching Entries")
        console.error(error)
      })
  }
  onSearchInputChange = (event) => {
    console.log("Search changed ..." + event.target.value)
    if (event.target.value) {
      this.setState({ searchString: event.target.value })
    } else {
      this.setState({ searchString: '' })
    }

  }
  render() {
    return (
      <Grid columns={6} divided>
        {
          this.state.rooms.map(currentRoom => (
           <GridColumn>
              <RoomCard rooms={currentRoom} />
           </GridColumn>
          ))
        }
      </Grid>

    )
  }
}
export default withRouter(HotelList);