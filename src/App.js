import React, { Component } from "react";
import "./App.css";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import styled from 'styled-components'

const ReactLeaflet = { Map: Map, TileLayer };

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: 7vh auto;
`

const Header = styled.header`
grid-column: 1/7;
grid-row: 1/1;
height: 7vh;
background:  #01315B;
z-index: 2;
color: #fff;
padding: 4px 0px 0px 15px;
font-size: 32px;
font-family: 'Monoton', cursive;

`

const Button = styled.button`
grid-column: 3/5;
grid-row: 6/7;
height: 7vh;
margin-bottom: 30px;
background:  #01315B;
color: #ffffff;
border-color: #00539C; 
font-size: 18px;
z-index: 3;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
align-self: end;

&:hover {
  background: #00539C;
}
`

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
      <Wrapper>
        <Header>ReShore</Header>
        <Button>Report</Button>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        </Map>
      </Wrapper>
      
    );
  }
}

render(<App />, document.getElementById("container"));
export default App;
