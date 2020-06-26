import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Character from "./Character/Character";
import Pagination from "./Pagination";
import styles from "./Character/Character.module.css";

const Characters = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get("https://swapi.dev/api/people/");
      setData(res.data.results);
      setLoading(false);
    };
    getData();
  }, []);

  const end = currentPage * dataPerPage;
  const start = end - dataPerPage;
  const silceData = data.slice(start, end);

  const changePage = (number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <img
        src={require("../assets/starwars.png")}
        style={{ marginTop: "40px" }}
        className={styles.logo}
      />
      <Character data={silceData} loading={loading} currentPage={currentPage} />
      <Pagination
        dataPerPage={dataPerPage}
        total={data.length}
        changePage={changePage}
      />
    </div>
  );
};

export default Characters;
