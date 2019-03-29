import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={country} />
    <figcaption>
      <blocktravel>{country} {destination}</blocktravel> <br></br> <br></br>
      <cite> Il y a {distance} de distance</cite>
    </figcaption>
  </figure>
);

export default Travel;