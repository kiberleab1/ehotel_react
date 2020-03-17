import React, { Component } from 'react'
import { Card, Icon, Image, Grid, GridColumn } from 'semantic-ui-react'
import { Redirect, History, withRouter } from "react-router-dom";
import axios from 'axios'
import HotelCard from './HotelCard';
import ResturantCard from './ResturantCard';

class ResturantList extends Component {
  state = {
    resturants: []
  }
  constructor(props) {
    super(props);
    this.getResturants()

  }
  getResturants = () => {
    axios.get("http://localhost:3000/restaurants")
      .then((response) => {
        this.setState({ resturants: response.data })
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
          this.state.resturants.map(currentResturant => (
           <GridColumn>
              <ResturantCard resturant={currentResturant} />
           </GridColumn>
          ))
        }
      </Grid>

    )
  }
}
export default withRouter(ResturantList);