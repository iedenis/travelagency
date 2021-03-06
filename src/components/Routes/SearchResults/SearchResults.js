import React from 'react'
import CarCard from '../../Layouts/CarCard/CarCard'

const Results = ({ handleBookButtonClicked, searchResult, requestedCar, setRequestedCar }) => {
    return (
        <React.Fragment>
            {
                searchResult.map((car, idx) => {
                    return <CarCard
                        handleBookButtonClicked={handleBookButtonClicked}
                        key={car.id}
                        id={car.id}
                        carClass={car.carClass}
                        carModel={car.carModel}
                        numberOfSeats={car.numberOfSeats}
                        numberOfLargeBags={car.numberOfLargeBags}
                        numberOfSmallBags={car.numberOfSmallBags}
                        numberOfDoors={car.numberOfDoors}
                        typeOfGearBox={car.typeOfGearBox}
                        image={car.image}
                        supplier={car.supplier}
                        pricePerDay={car.pricePerDay}
                    />
                })
            }

        </React.Fragment>

    )
}

export default Results
