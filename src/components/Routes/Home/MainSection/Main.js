import React from 'react'
import MainSection from '../MainSection'
import ContactSection from '../ContactSection/ContactSection'
import SecondSection from '../SecondSection/SecondSection'
const Main = ({ setDriverAge }) => {
    return (
        <React.Fragment>
            <MainSection setDriverAge={setDriverAge} />
            <ContactSection />
            <SecondSection />
        </React.Fragment>
    )
}

export default Main
