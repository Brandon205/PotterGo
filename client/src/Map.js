import React from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fycmlzb24yOCIsImEiOiJjazFzZmJobWMwZm13M2JvN3JnNXNpaGQyIn0.88KBua-ZTkMzLZnIblsX4Q'

class Map extends React.Component {
  state = {
    lng: -122.3321,
    lat: 47.6062,
    zoom: 4
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    var marker = new mapboxgl.Marker().setLngLat([80, 38]).addTo(map);
  }
  render() {
    return (
      <>
        <div>
          <div ref={el => this.mapContainer = el} className='mapContainer'> </div> d
        </div>
      </>
    )
  }
}

export default Map;
