import React, { Component } from "react";
import Slider from "react-slick";
import CardArt from './CardArt';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green",marginRight:'100px' }}
      onClick={onClick}
    />
  );
}

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      swipeToSlide: true,
      autoplay:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow/>,
      
    };
    return (
      <div style={{backgroundColor:'#FAA423',paddingTop:'3%'}}>
        <h2 style={{marginLeft:'40%',marginBottom:'3%'}}>Recommend Article</h2>
        <div style={{width:'80%',justifyContent:'center',alignItems:'center',marginLeft:'10%'}}>
        <Slider {...settings}>
          <div>
            <CardArt />
          </div>
          <div>
            <CardArt />
          </div>
          <div>
            <CardArt />
          </div>
          <div>
            <CardArt />
          </div>
          <div>
            <CardArt />
          </div>
          <div>
            <CardArt />
          </div>
          <div>
            <CardArt />
          </div>
          
        </Slider>
        </div>
      </div>
    );
  }
}