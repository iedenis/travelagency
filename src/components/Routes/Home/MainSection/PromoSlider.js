import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import promo_1 from '../../../../images/promo/promo_1.png'
import promo_2 from '../../../../images/promo/promo_4.jpg'
import promo_3 from '../../../../images/promo/promo_3.jpg'

import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';
// const PromoImage = styled.img`
//     max-width: 100%;
//     max-height: 100%;
// `
let index = 0;
const promos = [
    {
        country: 'United Kingdom',
        description: 'BOOK WITH THE BEST UK CAR RENTAL COMPANIES No matter what your travel itinerary requires, we4travel works with the best car rental companies in the UK to provide our clients with the best rates and best customer service. Compare prices from the top suppliers of car rentals in the UK including Avis, Budget, Enterprise, Europcar, Sixt, and more; no matter what supplier you go with, you',
        cost: '$395'
    },
    {
        country: 'Italy',
        description: 'we4travel is proud to work with the most trusted and reliable car rental suppliers that do business in Italy. Our unique relationship with suppliers allow us to provide our customers with significant discounts on rates from well-known suppliers such as Avis, Budget, Dollar, Hertz and Europcar. we4travel is proud to work with the most trusted and reliable car rental suppliers that do business in Italy. Our unique relationship with suppliers allow us to provide our customers with significant discounts on rates from well-known suppliers such as Avis, Budget, Dollar, Hertz and Europcar',
        cost: '$250'
    },
    // {
    //     country: 'Germany',
    //     description: 'Lowest Car Hire Prices Guaranteed. Complete Your Booking Now & Save! Unbeatable Prices. No Credit Card Fees. We Speak Your Language. Includes Free Amendments. Types: Economy, Mini, Compact, People carrier, Intermediate, Premium, 4x4, Estate, SUV.',
    //     cost: '$199'
    // }
]

const PromoText = styled.div`
padding:10px;
height: 100%;
display: flex;
flex-direction: column;
`

const StyledSlider = styled(Slider)`
.slick-track{
    display: flex;
    justify-content: space-between;
    height: 430px;
}
`
const SlideContent = styled.div`
flex:1;
`
const onChange = () => {
    console.log('changed');
}
const PromoSlider = ({ changeBackground }) => {
    const settings = {
        afterChange: () => { changeBackground(promos[index].country); index=(index+1)%2 },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <StyledSlider style={{ minHeight: '490px' }} {...settings}>
            {promos.map((promo, idx) => {
                return <Slide idx={idx} key={idx} />
            })}
        </StyledSlider>
    );
}


const Slide = ({ idx }) => {
    return (
        <PromoText>
            <Typography style={{ color: '#fafafa' }} color='inherit' variant='h1'>
                {promos[idx].country}
            </Typography>
            <SlideContent >
                <Typography variant='body1' style={{ color: '#fafafa' }}>
                    {promos[idx].description}
                </Typography>
            </SlideContent>
            <Button style={{ position: 'absolute', bottom: 0 }} variant='contained' color='secondary'>Only for {promos[idx].cost} </Button>

            {/* <PromoImage src={promo_1} alt='promo_1' /> */}
        </PromoText>

    )
}

export default PromoSlider
