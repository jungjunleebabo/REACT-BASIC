import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import "./Movie.css";

function Movie({ id, title, thumbnail, link, sizeheight, sizewidth }) {
  const title_rep = title
    .replace(/&amp;/g, "&")
    .replace("<b>", "")
    .replace("</b>", "");
  const navigate = useNavigate();
  const onClick = () => {
    //navigate(`/detail/${id}`, { state: { dd: id, bb: title, cc: thumbnail } });
    //<Link to={`/detail/${id}`}>
    //이해가안되네
    // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
    navigate("/detail", {
      state: {
        id: id,
      },
    });
  };

  return (
    <div className="movie">
      <img
        src={thumbnail}
        alt={title_rep}
        title={title_rep}
        onClick={onClick}
      />

      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        어바웃 페이지로 이동하기
      </button>

      <div className="movie_data">
        <Link
          to="/detail"
          state={{
            id: id,
            title: title,
            link: link,
            sizeheight: sizeheight,
            sizewidth: sizewidth,
          }}
        >
          <h3 className="movie_title">{title_rep}</h3>
        </Link>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Movie;
