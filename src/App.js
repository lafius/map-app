import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'

//On importe Mapbox
import mapboxgl from 'mapbox-gl'

//On donne le token fournie pour mon compte Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaXVzc20iLCJhIjoiY2pvZThiOGdqMDB3azNrbG1ybDRwMXFoayJ9.VhpcScQB1k33pHFtw0T9mg';

function MapInfo() {
  return (
    <div className="MapInfo" />
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //mapCenter:undefined
    }
    this.handleMapMove = this.handleMapMove.bind(this);
  }

  handleMapMove(mapCenter) {
    this.setState({amapCenter: mapCenter});
    console.log(mapCenter);
  }

  render() {
    return (
      <Map onMove={this.handleMapMove} />
    )
  }
};

export default App;
