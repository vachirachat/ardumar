import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../Style/Style.css';
import Slider from 'react-slick';

const settings = {
  dots: true,

  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  accessibility: true,
  arrows: false,
  centerPadding: 10,
  useCSS:true,
  centerMode: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function ReVideo() {
  return (
    <div style={{marginBottom:'5%'}}>
      <h1 style={{alignItems:'center',display:'flex',justifyContent:'center',marginBottom:'2%',marginTop:'3%'}}>Recommended Video</h1>
      <div style={{width:'80%',justifyContent:'center',alignItems:'center',marginLeft:'10%'}}>
    
      
      <Slider style={{width:'70%'}} {...settings}>
          <div>
            <iframe width="300" height="175" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0" ></iframe>
          </div>
          <div style={{width:'20%',backgroundColor:'green'}}>
            <iframe width="300" height="175" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0" ></iframe>
          </div>
          <div style={{width:'20%',backgroundColor:'green'}}>
            <iframe width="300" height="175" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0" ></iframe>
          </div>
          <div style={{width:'20%',backgroundColor:'green'}}>
            <iframe width="300" height="175" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0"></iframe>
          </div>
          <div>
            <iframe width="300" height="175" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0"></iframe>
          </div>
          <div>
            <iframe width="300" height="175" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0" ></iframe>
          </div>
        </Slider>
        </div>

    </div>
  );
}