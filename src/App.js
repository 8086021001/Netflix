import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import Content from './Components/Content/Content';
import { now_playing,top_rated ,upcoming,popular} from './Constants/url';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Content url={now_playing} title ='Now Playing'/>
      <Content url = {top_rated} title = 'Top Rated' isSmall/>
      <Content url={upcoming} title ='Upcoming' isSmall/>
      <Content url={popular} title ='popular' isSmall/>
      <Footer/>

    </div>
  );
}

export default App;
