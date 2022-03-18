import React from "react";
import { Rate } from "./Rate";
import { Link } from "react-router-dom";

export const Moviecard = ({ movie }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "",
        justifyContent: "space-around",
        motionDistance: "30px",
        flexWrap: "wrap",
        width: "400px",
        height: "700px",
        marginBottom: "0px",
      }}
    >
      {/* Link vers la page de secription to: route vers cette page */}
      <Link
        to={`/description/${movie.name}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          src={movie.image}
          alt="pic"
          style={{ width: "250px", height: "350px", marginLeft: "70px" }}
        />
        <div
          style={{
            marginLeft: "30px",
            marginTop: "0px",
            width: "350px",
            height: "300px",
          }}
        >
          <Rate rating={movie.rating} />
          <span style={{ fontSize: "30px" }}>{movie.name}</span>
          <br />
          <span>{movie.date}</span>
          <br />
          <span style={{ fontSize: "20px" }}>{movie.description}</span>
        </div>
      </Link>
    </div>
  );
};
