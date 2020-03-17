import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import HotelComment from './Comment'
import axios from 'axios'
class CommentList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <HotelComment comments={this.props.hotel}/>
        )
    }
   
}
export default CommentList;