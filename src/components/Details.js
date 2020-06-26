import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Spinner from "./Spinner/Spinner";
import styles from "./Details.module.css";

const Details = (props) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://swapi.dev/api/planets/${props.match.params.id}/`
      );
      setDetails(res.data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <img
            src={require("../assets/starwars.png")}
            alt="logo"
            className={styles.logo}
          />
          <div className={styles.Detail}>
            <div className={styles.Info}>
              <p>
                <b>Name:</b> {details.name}
              </p>
              <p>
                <b>rotation_period:</b> {details.rotation_period}
              </p>
              <p>
                <b>orbital_period:</b> {details.orbital_period}
              </p>
              <p>
                <b>diameter: </b>
                {details.diameter}
              </p>
              <p>
                <b>climate:</b> {details.climate}
              </p>
              <p>
                <b>gravity:</b> {details.gravity}
              </p>
              <p>
                <b>terrain:</b> {details.terrain}
              </p>
              <p>
                <b>surface_water:</b> {details.surface_water}
              </p>
              <p>
                <b>population:</b> {details.population}
              </p>
            </div>
            <div>
              <img
                src={require(`../assets/planet${props.match.params.id}.jpg`)}
                alt="Planet"
              />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Details;
