import React, { Component, Link } from 'react'
import SlideShow from './SlideShow'
import axios from 'axios'
import CommentList from './CommentList'
import HotelComment from './Comment'

class Resturants extends Component {
    state = {
        hotel: ''
    }
    constructor(props) {
        super(props);
        this.getHotelInfo()

    }
    render() {
        return (
            <div>

                <SlideShow hotel={this.state.hotel} />
                {console.log(this.state.hotel)
                }<a href={'/hotels/' + this.props.hotelId + '/room'}>rooms</a>
                <HotelComment hotel={this.state.hotel} />
            </div>
        )
    }

    getHotelInfo = () => {

        axios.get("http://localhost:3000/hotels/" + this.props.hotelId)
            .then((response) => {
                this.setState({ hotel: response.data })

            }).catch((error) => {
                console.log(error)
            })
    }
}
export default Resturants   ;