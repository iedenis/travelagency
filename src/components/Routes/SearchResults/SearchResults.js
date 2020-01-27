import React from 'react'
import CarCard from '../../Layouts/CarCard/CarCard'
import { Container, Paper, Grid, Divider, useMediaQuery, useTheme } from '@material-ui/core'
import Picker from '../../Layouts/Picker/Picker'
import styled from 'styled-components'
// import Order from './Order'
import carModels from '../../Layouts/CarCard/carModels/carModels'

const searchResult = [
    {
        carClass: 'Economy',
        carModel: 'Fiat Punto',
        numberOfSeats: 5,
        numberOfLargeBags: 1,
        numberOfSmallBags: 1,
        numberOfDoors: 4,
        typeOfGearBox: 'Manual',
        image: carModels[1],
    },
    {
        carClass: 'Mini',
        carModel: 'Hyundai i10',
        numberOfSeats: 4,
        numberOfLargeBags: 0,
        numberOfSmallBags: 2,
        numberOfDoors: 2,
        typeOfGearBox: 'Manual',
        image: carModels[3]
    },
    {
        carClass: 'Economy',
        carModel: 'Hyundai I20',
        numberOfSeats: 5,
        numberOfLargeBags: 1,
        numberOfSmallBags: 1,
        numberOfDoors: 4,
        typeOfGearBox: 'Automatic',
        image: carModels[4]
    }
]

const Results = () => {
 
    return (
        <React.Fragment>
                        {
                            searchResult.map((car, idx) => {
                                return <CarCard key={idx}
                                    carClass={car.carClass}
                                    carModel={car.carModel}
                                    numberOfSeats={car.numberOfSeats}
                                    numberOfLargeBags={car.numberOfLargeBags}
                                    numberOfSmallBags={car.numberOfSmallBags}
                                    numberOfDoors={car.numberOfDoors}
                                    typeOfGearBox={car.typeOfGearBox}
                                    image={car.image}
                                />
                            })
                        }

                </React.Fragment>
               
    )
}

export default Results
