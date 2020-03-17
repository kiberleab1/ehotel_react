import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import axios from 'axios';
class HotelComment extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Comment.Group>
                <Header as='h3' dividing>
                    Comments
             </Header>

                <Comment>
                    {
                        (this.props.hotel.comment instanceof Array) ? (


                            this.props.hotel.comment.map(currentComment => (
                                <Comment>
                                    <Comment.Avatar src={require('./images/comment.jpg')} />
                                    <Comment.Content>
                                        <Comment.Author as='a'>{currentComment.user_id}</Comment.Author>
                                        <Comment.Metadata>
                                            <div>{currentComment.created_at}</div>
                                        </Comment.Metadata>
                                        <Comment.Text>{currentComment.comment_on_hotel}</Comment.Text>
                                    </Comment.Content>
                                </Comment>
                            ))
                        ) : null

                    }
                </Comment>
                <Form action={this.handComment}>
                    <Form.TextArea id="comment" />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary type="submit" onClick={this.handComment} />
                </Form>
            </Comment.Group>
        )
    }
    handComment = () => {
        var payload = {
            "comment_on_hotel": document.getElementById("comment").value
            
        }
        console.log("click")
        axios.post("http://localhost:3000/hotels/" + this.props.hotel.id + "/comment", payload)
    }

    getComments = () => {
        axios.get("http://localhost:3000/hotels/" + this.props.hotel + "/comment")
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }
}
export default HotelComment;
