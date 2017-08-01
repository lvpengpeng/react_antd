import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './carousel.component.css'
function onChange(a, b, c) {
  console.log(a, b, c);
}

export default class Carousels extends Component {
  render() {
    return (
      <div className="slick-slide">
        <Carousel afterChange={onChange}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>
    )
  }
}