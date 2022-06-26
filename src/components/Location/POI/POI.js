import React from "react";

import classes from "./POI.module.css";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";
import SectionHeader from "../../UI/SectionHeader/SectionHeader";

const POI = () => {
  const pois = [
    {
      name: "Reale Arena",
      distance: "350m",
      walkingDistance: "2 min",
      publicTransport: "-",
    },
    {
      name: "Playa (Concha)",
      distance: "2.0km",
      walkingDistance: "25min",
      publicTransport: "11min",
    },
    {
      name: "Kursaal",
      distance: "2.5km",
      walkingDistance: "30min",
      publicTransport: "15min",
    },
    {
      name: "Peine del Viento",
      distance: "3.5km",
      walkingDistance: "45min",
      publicTransport: "20min",
    },
  ];

  return (
    <>
      <SectionHeader>Puntos de Interes</SectionHeader>
      <FlexCenter className={classes.POI}>
        <div className={classes.Info}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Lugar</th>
                <th>Distancia</th>
                <th>A pie</th>
                <th>Transporte Público</th>
              </tr>
            </thead>
            <tbody>
              {pois.map((poi) => (
                <tr>
                  <th>{poi.name}</th>
                  <td>{poi.distance}</td>
                  <td>{poi.walkingDistance}</td>
                  <td>{poi.publicTransport}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <img
          src="images/location/pois.png"
          className={classes.Image}
          alt="puntos interes donostia san sebastian"
        />
      </FlexCenter>
    </>
  );
};

export default POI;
