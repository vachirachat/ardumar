import React from 'react';
import '../Style/Style.css';
import NavBar from '../components/NavBar';
import FirstSheet from '../components/FirstCard';
import SecondSheet from '../components/SecondCard';
import ReVideo from '../components/RecommendVideo';
import SwipeToSlide from '../components/RecommendArticle';
function Home() {
  return (
    <div className="FirstPage">

      <FirstSheet />
      <SecondSheet />
      <ReVideo />
      <SwipeToSlide />
    </div>
  );
}

export default Home;