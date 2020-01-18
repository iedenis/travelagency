import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import promo_1 from '../../../../images/promo/promo_1.png'
import promo_2 from '../../../../images/promo/promo_4.jpg'
import promo_3 from '../../../../images/promo/promo_3.jpg'

import styled from 'styled-components';
const PromoImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`
const PromoSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <PromoImage src={promo_1} alt='promo_1' />
                </div>
                <div>
                    <PromoImage src={promo_2} alt='promo_2' />
                </div>
                <div>
                    <PromoImage src={promo_3} alt='promo_3' />
                </div>
                


            </Slider>
        </div>
    );
}

export default PromoSlider
