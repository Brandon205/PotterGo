import React from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl'; 
import { Redirect } from 'react-router-dom';
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbjIwNSIsImEiOiJjazFzZXB6ZHEwMjV2M2Jtd3NhaDh6dnFqIn0.sZ7plho546gq4TBKteOPYw';

class Map extends React.Component {
  state = {
    lng: -122.3186,
    lat: 47.6153,
    zoom: 11.75,
    redirect: ''
  }

    componentDidMount() {
      var geojson = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "message": "diagonalley",
              "iconSize": [50, 50]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.347488,
                47.615711
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "message": "wand",
              "iconSize": [50, 50]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.343450,
                47.610600
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "message": "pub",
              "iconSize": [40, 40]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.323700,
                47.619980
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "message": "bookstore",
              "iconSize": [40, 40]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.312860,
                47.622680
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "message": "station",
              "iconSize": [40, 40]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.320590,
                47.619740
              ]
            }
          }
        ]
      };

      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
      });
      geojson.features.forEach((marker) => {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';

        el.addEventListener('click', () => {
          this.setState({ redirect: <Redirect to={`/${marker.properties.message}`} /> })
        });

        var popup = new mapboxgl.Popup({ offset: 25 }).setText('Hello');
        // add marker to map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
        });
    }

  render() {
    let redirect;
    if (this.state.redirect) {
      redirect = this.state.redirect
    } else {
      redirect = ''
    }
    return (
      <div>
        <div className="mapContainer" ref={el => this.mapContainer = el} />
        {redirect}
      </div>
    )
  }
}

export default Map;
