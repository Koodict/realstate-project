import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Resdenies.css';
import data from '../../utils/slider.json';



const SliderButtons = () => {
  const swiper = useSwiper();
  
  return (
    <div className='r-buttons'>


      <button className='r-button' onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className='r-button' onClick={() => swiper.slideNext()}>
         &gt;
      </button>
    </div>
  );
};

const Residencies = () => {
  const sliderSettings = {
    
    slidesPerView:1,
    loop:true,
    spaceBetween: 50,
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <section id='resi' className='r-wapper'>
      <div className='paddings innerWidth r-container'>
        <div className='r-head flexColStart'>
          <span className='orangeText'>Highly</span>
          <span className='primaryText'>Recommended Housing</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className='flexColStart r-card'>
                <img src={card.image} alt='home' />
                <span className='greyText r-price'>
                  <span style={{ color: 'orange' }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className='primaryText'>{card.name}</span>
                <span className='greyText'>{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
