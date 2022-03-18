import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleMovie } from "./getSingleMovie";

export const MovieDesc = () => {
  //recupération des paramètres {name: "", ....}
  const params = useParams();
  //fonction pour redirigé vers une autre page
  const navigate = useNavigate();
  //recupération des infos du films
  const movieData = getSingleMovie(params.name);

  return (
    <div>
      <div>
        <img src={movieData.image} alt="img" style={{ width: "250px", height: "350px", marginLeft: "70px" }}/>
        </div>

        <div><h3>Titre: {movieData.name}</h3></div>

        <div><h4>Description: {movieData.description}</h4></div>

        <div> 
         <a href={movieData.trailer}>Trailer</a> 
         </div>
      
      

        {/* button pour retourner à la page d'acceuil */}
        <div>
        <button onClick={() => { navigate("/"); }}>
        Back
        </button>
        </div>

      
      
    </div>
  );
};
