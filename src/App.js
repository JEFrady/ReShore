import React, { Component } from "react";
import "./App.css";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const ReactLeaflet = { Map: Map, TileLayer };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 21.2899317,
      lng: -157.852566,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      </Map>
    );
  }
}

render(<App />, document.getElementById("container"));
export default App;
