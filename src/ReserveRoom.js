import React, { useState, Component } from 'react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Grid, Header, Segment } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { DateInput } from 'semantic-ui-calendar-react'
import axios from 'axios';
class ReserveRoom extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.reserve_roomId)
    }
    state = {}

    handleChange = (e, { value }) => this.setState({ value })
    state = {
        arriveDate: '',
        departureDate: ''
    }
    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }
    reserveDate = () => {
        var apiBaseUrl = "http://localhost:3000/hotels/3/room/1/reserve_room"
        if (this.state.arriveDate != '' && this.state.departureDate != '') {
            var payload = {
                "arrivedate": this.state.arriveDate,
                "departureDate": this.state.departureDate,
                "no_guests": document.getElementById("noGuests").value,
                "status": 0,
                "id": ''
            }
            if (this.props.reserve_roomId) {
               axios.put(apiBaseUrl+"/"+this.props.reserve_roomId,payload).then((response)=>{
                   console.log(response)
               })
            }else{
                axios.post(apiBaseUrl, payload)
                .then(
                    function (response) {
                        console.log(response.data)

                    }
                )
            }
        }
    }
    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Reserve Room
                    </Header>
                    <Segment>
                        <Form onSubmit={this.reserveDate}>
                            <Form.Group widths='equal'>
                                <DateInput
                                    name="arriveDate"
                                    label='Arriving Date'
                                    placeholder='Arriving Date'
                                    value={this.state.arriveDate}
                                    onChange={this.handleChange}
                                />
                                <DateInput
                                    name="departureDate"
                                    control={Input}
                                    label='Departure Date'
                                    placeholder='Departure Date'
                                    onChange={this.handleChange}
                                    value={this.state.departureDate}
                                />

                            </Form.Group>
                            <Form.Group inline>
                                <label>No Guests</label>
                                <Form.Field
                                    id="noGuests"
                                    name='guestGroup'
                                    control={Radio}
                                    label='One'
                                    value='1'

                                />
                                <Form.Field
                                    id="noGuests"
                                    name='guestGroup'
                                    control={Radio}
                                    label='Two'
                                    value='2'
                                    onChange={this.handleChange}
                                />
                                <Form.Field
                                    id="noGuests"
                                    name='guestGroup'
                                    control={Radio}
                                    label='Three'
                                    value='3'
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Field
                                control={TextArea}
                                readOnly
                                label='Terms And Conditions'
                                placeholder='Tell us more about you...'
                            />
                            <Form.Field
                                id="checkbox"
                                control={Checkbox}
                                label='I agree to the Terms and Conditions'
                            />
                            <Form.Field control={Button} primary>Reserve Room</Form.Field>

                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }

}
export default ReserveRoom;