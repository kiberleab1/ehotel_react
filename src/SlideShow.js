import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './Home.css'
import { Button } from 'semantic-ui-react';
class Slideshow extends Component {
  constructor(props) {
    super(props)
  }
  slideImages = [
    require('./images/Slider_3.jpg'),
    require('./images/Slider_3.jpg'),
    require('./images/Slider_3.jpg')
  ];

  properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }


  render() {
    return (
      <div className="slide-container">
        <Slide {...this.properties}>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${this.slideImages[1]})` }}>
              <span style={{ 'opacity': '0.5' }}>
                <p style={{ 'opacity': '1.0' }}>{this.props.hotel.hotelName}</p>
                <p style={{ 'opacity': '1' }}>{this.props.hotel.moto}</p>
                
              </span>
          
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${this.slideImages[1]})` }}>
              <span style={{ 'opacity': '0.5' }}>
                <p style={{ 'opacity': '1.0' }}>{this.props.hotel.hotelName}</p>
                <p style={{ 'opacity': '1' }}>{this.props.hotel.moto}</p>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${this.slideImages[2]})` }}>
              <span style={{ 'opacity': '0.5' }}>
                <p style={{ 'opacity': '1.0' }}>{this.props.hotel.hotelName}</p>
                <p style={{ 'opacity': '1' }}>{this.props.hotel.moto}</p>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    )
  }
}
export default Slideshow