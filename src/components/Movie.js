import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, thumbnail }) {
  const title_rep = title.replace(/&amp;/g, "&").replace("<b>", "").replace("</b>", "");

  return <div className="movie">
      <a href={id} target="_blank"><img src={thumbnail} alt={title_rep} title={title_rep}/></a>
      <div className="movie_data">
          <h3 className="movie_title">{title_rep}</h3>
     
         
      </div>     
    </div>;
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
 
}

export default Movie;