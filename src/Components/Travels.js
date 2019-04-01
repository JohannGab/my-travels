import React from "react";
import Travel from "./Travel";

const travels = [
    {
        photo: "https://via.placeholder.com/350X250",
        destination: "Nice",
        country: "France",
        distance: "930 km",

    },

    {
        photo: "https://via.placeholder.com/350X250",
        destination: "Aix-en-Provence",
        country: "France",
        distance: "760 km",

    },

    {
        photo: "https://via.placeholder.com/350X250",
        destination: "Montpellier",
        country: "France",
        distance: "745 km",

    },

    {
        photo: "https://via.placeholder.com/350X250",
        destination: "Brest",
        country: "France",
        distance: "589 km",

    },

    {
        photo: "https://via.placeholder.com/350X250",
        destination: "Le Havre",
        country: "France",
        distance: "203 km",

    },
];





const Travels = () => (
    <div>
      {travels.map(travel => <Travel {...travel} />
      )}
    </div>
  );

export default Travels;

