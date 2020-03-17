import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { history } from './routing.js';
class ResturantCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {
                    this.props.resturant ? (
                        <Card onClick={()=>this.handleClick(this.props.resturant.id)}>
                            <Image src={"http://localhost:3000/" + this.props.resturant.profile_images_link} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{this.props.resturant.name}</Card.Header>
                                <Card.Meta>{this.props.resturant.subcity + ',' + this.props.resturant.city}</Card.Meta>
                                <Card.Description>
                                    {this.props.resturant.delivery_food}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='star' />
                                    {this.props.resturant.reservation}
                                </a>
                            </Card.Content>
                        </Card>) : null
                }
            </div>
        )

    }
    handleClick = (id) => {
        console.log(id)
        history.push("/resturants/"+id)
    }
}

export default ResturantCard;