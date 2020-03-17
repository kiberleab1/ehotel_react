import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Grid, Header, Segment, Dropdown } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { DateInput } from 'semantic-ui-calendar-react'
import axios from 'axios';
class AddRoom extends Component {
    state = {
        hotel: '',
        room_type: '',
        roomOptions: [
            {
                key: "prisedntial",
                text: "Persedential",
                value: 1
            }
        ]
    }
   
    constructor(props) {
        super(props)

    }
    createRoom = () => {
        var payload = {
            "room_no": document.getElementById("room_no").value,
            "floor": document.getElementById("floor").value,
            "room_type": this.state.room_type,
            "price": document.getElementById("price").value,
            "description": document.getElementById("desc").value
        }
        axios.post("http://localhost:3000/hotels/" + this.props.hotelId+"/room/", payload)
            .then((response) => {
                console.log(response)
            }).catch((error)=>{
                console.log(error.response.data)
                console.log(document.getElementById("room_type").value)
    
            })
    }
    
    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                    Add Room
                </Header>
                    <Segment>
                        <Form onSubmit={this.createRoom}>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Input}
                                    id="floor"
                                    name="Floor"
                                    label='Floor'
                                    type="number"
                                    placeholder='floor'

                                />
                                <Form.Field
                                    id="room_no"
                                    name="room_no"
                                    control={Input}
                                    label='room_no'
                                    type="number"
                                    placeholder='room_no'
                                />
                                <Form.Field
                                    id="price"
                                    name="price"
                                    control={Input}
                                    label='Price'
                                    placeholder='price'
                                    type="number"
                                    onChange={this.handleChange}
                                />


                            </Form.Group>
                            <Form.Group>
                               <Dropdown
                               id="room_type"
                               placeholder='Room type'
                               fluid
                               selection
                               onChange={(event, {value})=>{
                                   this.setState({room_type: value})
                               }}
                               options={this.state.roomOptions}
                               />
                            </Form.Group>
                            
                            <Form.Field
                                control={TextArea}
                                id='desc'
                                label='Description'
                                defaultValue={this.state.hotel.description}
                                placeholder='Description'
                            />
                            

                            <Form.Field control={Button} primary>Add Room</Form.Field>

                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

        )
    }
}
export default AddRoom;