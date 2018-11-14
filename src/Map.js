import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaXVzc20iLCJhIjoiY2pvZThiOGdqMDB3azNrbG1ybDRwMXFoayJ9.VhpcScQB1k33pHFtw0T9mg';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 43,
      longitude: 1.6,
      zoom: 1.5
    };
  }

  componentDidMount() {
    const {longitude, latitude, zoom} = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [longitude, latitude]
    });
    map.on('move', () => this.props.onMove(map.getCenter()));
  }

  render() {
    return (
      <div className="map-container" ref={el => this.mapContainer = el} />
    )
  }
}

export default Map;
