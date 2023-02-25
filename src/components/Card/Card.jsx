import React from "react";
import "./Card.css";

const Card = (props) => {
  const onVisitClicked = (link) => {
    window.open(link, "_blank"); //to open new page
  };

  return (
    <div className="card">
      <div className="card-image">
        <img alt="" src={props.image} />
      </div>

      <div className="card-content">
        <h2>{props.name}</h2>
        <p>{props.cuisine}</p>
        <button className="button" onClick={() => onVisitClicked(props.link)}>
          Visit
        </button>
      </div>
    </div>
  );
};

export default Card;
