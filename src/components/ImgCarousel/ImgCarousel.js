import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import {CarItems} from './CarItems';
import '../../routes/Home/Home.css';

class ImgCarousel extends Component {
  render() {
    return (
      <>
        <Carousel className="img-container" autoPlay showArrows={true} infiniteLoop={true}>
          {CarItems.map((item) => {
            return (
              <div>
                <img src={item.imgSrc} className={item.iClass}/>
                <p className={item.pClass}>{item.legend}</p>
              </div>
              )
          })}
        </Carousel>
      </>
    )
  }
}

export default ImgCarousel;