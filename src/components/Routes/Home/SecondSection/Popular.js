import React from 'react'
import styled from 'styled-components'
import { Typography,Grid } from '@material-ui/core'
import italyImage from '../../../../images/italy.jpeg'
import germanyImage from '../../../../images/photo-1534313314376-a72289b6181e'
import russiaImage from '../../../../images/russia.jpeg'
import israelImage from '../../../../images/israel.jpeg'
import switzerlandImage from '../../../../images/switzerland.jpeg'
import spainImage from '../../../../images/spainImage.jpeg'

import CityCard from './CityCard'
const Popular = () => {
    const PopularWrapper=styled.div`
     margin-top: 30px;
    `
    const cityName = 'Italy'
    const description = 'Italy, country of south-central Europe, occupying a peninsula that juts deep into the Mediterranean Sea. Italy comprises some of the most varied and scenic landscapes on Earth and is often described as a country shaped like a boot. At its broad top stand the Alps, which are among the worlds most rugged mountains';

    return (
        <PopularWrapper>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom:'30px' }}>

                <Typography variant='h4'>
                    Popular destinations
                </Typography>
                {/* <div style={{width:'200px', border: '1px solid'}}></div> */}
            </div>

            <Grid
                // style={{ border: '1px solid' }}
                container

            >

                <Grid item sm={6} lg={4}>
                    <CityCard image={italyImage} name={cityName} description={description} />
                </Grid>

                <Grid item sm={6} lg={4}>
                    <CityCard image={germanyImage} name={"Germany"} description={"Country overview. Germany has the largest population of any EU country. Its territory stretches from the North Sea and the Baltic in the north to the Alps in the south and is traversed by some of Europe's major rivers such as the Rhine, Danube and Elbe. Germany is a federal republic."} />
                </Grid>

                <Grid item sm={6} lg={4}>
                    <CityCard image={russiaImage} name={"Russia"} description={"Russia is the largest country in the world. Its area is 17 098.242 thousand square km. The state is located in eastern Europe and northern Asia. From north to south the country stretches for over 4,000 km; from west to east – for almost 10,000 km."} />
                </Grid>
                {/* </Grid> */}

                <Grid item sm={6} lg={4}
                //  style={{ border: '1px solid' }}
                >
                    <CityCard image={israelImage} name={"Israel"} description={"The State of Israel, an independent nation in southwest Asia, is located between the eastern shores of the Mediterranean Sea and the head of the Gulf of AQABA, an arm of the Red Sea. Israel was established on May 14, 1948, as a Jewish state. Israel is considered the Holy Land for Christians, Jews, and Muslims"} />
                </Grid>
                <Grid item sm={6} lg={4}
                //  style={{ border: '1px solid' }}
                >
                    <CityCard image={switzerlandImage} name={"Switzerland"} description={"Switzerland is a landlocked mountainous country in South Central Europe, bordered by Austria, France, Germany, Italy, and Liechtenstein. With an area of 41,285 km², the country is only slightly smaller than the Netherlands or slightly less than twice the size of the US state of New Jersey."} />
                </Grid>
                <Grid item sm={6} lg={4}
                // style={{ border: '1px solid' }}
                >
                    <CityCard image={spainImage} name="Spain" description={"Spain is the second largest country in Europe, next to France, which is located in an area known as the Iberian Peninsula. This island is surrounded by the Mediterranean Sea in the south to the east, Atlantic Ocean to the west and the Bay of Biscay to the north"} />
                </Grid>
            </Grid>
        </PopularWrapper>
    )
}

export default Popular
