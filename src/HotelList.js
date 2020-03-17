import React, { Component } from 'react'
import { Card, Icon, Image, Grid, GridColumn } from 'semantic-ui-react'
import { Redirect, History, withRouter } from "react-router-dom";
import axios from 'axios'
import HotelCard from './HotelCard';

class HotelList extends Component {
  state = {
    hotels: []
  }
  constructor(props) {
    super(props);
    this.getHotels()

  }
  getHotels = () => {
    axios.get("http://localhost:3000/hotels")
      .then((response) => {
        this.setState({ hotels: response.data })
        console.log(response.data)
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
          this.state.hotels.map(currentHotel => (
           <GridColumn>
              <HotelCard hotel={currentHotel} />
           </GridColumn>
          ))
        }
      </Grid>

    )
  }
}
export default withRouter(HotelList);