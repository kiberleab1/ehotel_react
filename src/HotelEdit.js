import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Grid, Header, Segment } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { DateInput } from 'semantic-ui-calendar-react'
import axios from 'axios';
class HotelEdit extends Component {
    state ={
        hotel : ''
    }
    constructor(props) {
        super(props)
        this.getHotel()
    }
    getHotel=()=>{
        console.log(this.props.hotelId)
        axios.get("http://localhost:3000/hotels/"+this.props.hotelId)
        .then((response)=>{
            console.log(response.data)
            this.setState({hotel: response.data})
        })
    }
    update=()=>{
        var payload={
            "hotelName" : document.getElementById("hotelName").value,
            "city" : document.getElementById("city").value,
            "subcity" : document.getElementById("subcity").value,
            "star" : document.getElementById("star").value,
            "phone": document.getElementById("phone").value,
            "moto" : document.getElementById("moto").value,
            "description" : document.getElementById("desc").value,
                  }
        axios.put("http://localhost:3000/hotels/"+this.props.hotelId,payload)
        .then((response)=>{
            console.log(response)
        })
    }
    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Edit Hotel
                </Header>
                    <Segment>
                        <Form onSubmit={this.update}>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Input}
                                    id="hotelName"
                                    name="hotelName"
                                    label='Hotel Name'
                                    placeholder='Hotel Name'
                                    defaultValue={this.state.hotel.hotelName}
                                   
                                />
                                <Form.Field
                                    id="city"
                                    name="City"
                                    control={Input}
                                    label='City'
                                    placeholder='City'
                                    defaultValue={this.state.hotel.city}
                                    onChange={this.handleChange}
                                />
                                <Form.Field
                                    id="subcity"
                                    name="subCity"
                                    control={Input}
                                    label='SubCity'
                                    placeholder='SubCity'
                                    defaultValue={this.state.hotel.subcity}
                                    onChange={this.handleChange}
                                />
                              

                            </Form.Group>
                            <Form.Group>
                            <Form.Field
                                    id='star'
                                    control={Input}
                                    name="Star"
                                    label='Star'
                                    placeholder='Star'
                                    type='number'
                                    max='5'
                                    defaultValue={this.state.hotel.star}
                                    onChange={this.handleChange}
                                />
                                  <Form.Field
                                    id='phone'
                                    control={Input}
                                    name="Phone"
                                    label='Phone'
                                    placeholder='Phone'
                                    defaultValue={this.state.hotel.phone}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Field
                                control={TextArea}
                                id='moto'
                                label='Moto'
                                placeholder='Moto'
                                defaultValue={this.state.hotel.moto}
                            />
                            <Form.Field
                                control={TextArea}
                                id='desc'
                                label='Description'
                                defaultValue={this.state.hotel.description}
                                placeholder='Description'
                            />
                            <Form.Field
                                id='image'
                                control={Input}
                                type="file"
                                label="Images"
                                
                                placeholder="Images"    
                            />

                            <Form.Field control={Button} primary>Edit Hotel</Form.Field>

                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

        )
    }
}
export default HotelEdit;