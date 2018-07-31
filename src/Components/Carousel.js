import React from "react";
import Slider from "react-slick";
import logo from './images/mbyialdt.png';
import image from './images/Algebra_wordle.png';
import image1 from './images/algebra.jpg';
import './carousel.css' 
class Carousel1 extends React.Component {
  
    
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
    return (
      <Slider {...settings}> 
    
        <div className='item'>
       
           <img src={logo}  width='100%' height='300px'/>
           <div class="wrap-text">
           <div>
           <h5>Київський національний університет імені Тараса Шевченка Механіко-математичний факультет </h5>
           <p>Кафедра алгебри та математичної логіки</p>
           </div>
           </div>
        </div>
        <div className='custom-tag'>
        <img src={image} width='100%' height='300px'/>
        </div >
        <div className='custom-tag'>
        <img src={image1} width='100%' height='300px'/>
        </div>
      </Slider>
    );
  }
}
export default Carousel1;