import React from 'react'

import NoResults from "../assets/no-results.png";
import topmarg from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {

    return (
    <div className={topmarg}>
        <Asset src={NoResults} message={"Sorry, the page you're looking for doesn't exist"} />
    </div>
  )
}

export default NotFound