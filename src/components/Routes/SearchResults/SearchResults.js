import React from 'react'
import CarCard from '../../Layouts/CarCard/CarCard'

const Results = ({ handleBookButtonClicked, searchResult }) => {
    return (
        <React.Fragment>
            {
                searchResult.map((car, idx) => {
                    return <CarCard
                        handleBookButtonClicked={handleBookButtonClicked}
                        key={idx}
                        carClass={car.carClass}
                        carModel={car.carModel}
                        numberOfSeats={car.numberOfSeats}
                        numberOfLargeBags={car.numberOfLargeBags}
                        numberOfSmallBags={car.numberOfSmallBags}
                        numberOfDoors={car.numberOfDoors}
                        typeOfGearBox={car.typeOfGearBox}
                        image={car.image}
                        supplier={car.supplier}
                        price_per_day={car.price_per_day}
                    />
                })
            }

        </React.Fragment>

    )
}

export default Results
