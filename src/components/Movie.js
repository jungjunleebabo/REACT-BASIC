import React from "react";
import PropTypes from "prop-types";
import { Link ,useNavigate} from "react-router-dom";

import "./Movie.css";

function Movie({ id, title, thumbnail }) {
  const title_rep = title.replace(/&amp;/g, "&").replace("<b>", "").replace("</b>", "");
  
const navigate = useNavigate();
const onClick = () => {
   navigate(`/detail/${id}`,{state:{dd:id, bb:title, cc:thumbnail}})
  //<Link to={`/detail/${id}`}> 
  //이해가안되네
}

  return <div className="movie">
        
     <img src={thumbnail} alt={title_rep} title={title_rep} onClick={onClick}/>
    
     <div className="movie_data">
         
         <Link to="/detail">
          <h3 className="movie_title">{title_rep}</h3>
          </Link>
         
      </div>     
    </div>;
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
 
}

export default Movie;