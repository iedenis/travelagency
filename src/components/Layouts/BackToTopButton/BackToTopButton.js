import React, { useState, useEffect } from "react";
import Fab from '@material-ui/core/Fab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const DISTANCE = 100;

const BackToTopButton = () => {
    const [crossed, setCrossed] = useState(false);

    useEffect(function () {
        const handler = () => setCrossed(window.pageYOffset > DISTANCE);
        handler();
        window.addEventListener("scroll", handler, true);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    function onClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (!crossed) {
        return null;
    } else {
        return (
            <Fab onClick={onClick}
                style={{
                    position: 'fixed',
                    bottom: '5px',
                    right: '10px',
                    zIndex: 1
                }}
                color="secondary" aria-label="edit">
                <FontAwesomeIcon

                    icon={faArrowUp} />
            </Fab>
        );

    }
}
export default BackToTopButton;
