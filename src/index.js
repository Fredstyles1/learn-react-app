import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './Components/data';


function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id} 
        {...item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      className="card--items"/>
    ) 
  })
    return (
      <div>
        <Navbar />
        <Hero />
        <section className='card-list'>
          {cards}
        </section>
        {/* <Card
          img="photo-fruit-with-water-splash.jpg"
          rating="5.0"
          reviewCount={6}
          country="Nigeria"
          title="Life Lessons with Alfred Fred"
          price={136}
        /> */}
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))