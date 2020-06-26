import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Character.module.css";
import Spinner from "../Spinner/Spinner";

const Character = ({ data, loading, currentPage }) => {
  console.log(currentPage);
  if (currentPage === 1) {
    localStorage.setItem("item", 1);
  } else if (currentPage === 2) {
    let item = +localStorage.getItem("item");
    localStorage.setItem("item", ++item);
  }
  let item = +localStorage.getItem("item");
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.Wrapper}>
          {data.map((d) => (
            <div key={item}>
              <img
                src={require(`../../assets/${item}.jpg`)}
                alt="character pic"
              />
              <h3>Name: {d.name}</h3>
              <p>Height: {d.height} cm</p>
              <p>Mass: {d.height} Kg</p>
              <p>Birth year: {d.birth_year}</p>
              <p>Gender: {d.gender}</p>
              <Link to={"details/" + item}>Location info</Link>
              {localStorage.setItem("item", item++)}
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Character;
