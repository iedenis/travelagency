import React, { useState, useEffect } from "react";

// import "./styles.css";

const DISTANCE = 50;

const BackToTopButton = () => {
    const [crossed, setCrossed] = useState(false);

    useEffect(function () {
        const handler = () => setCrossed(window.pageYOffset > DISTANCE);
        handler();
        window.addEventListener("scroll", handler, true);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    console.log(document.getElementById('content'));

    function onClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (!crossed) {
        console.log(window.scrollY)
        console.log('NULL');
        return null;
    } else {
        console.log("HERE");
        return (
            <button style={{ border: '5px solid' }} onClick={onClick}>Jump to top</button>
        );

    }
}
export default BackToTopButton;
