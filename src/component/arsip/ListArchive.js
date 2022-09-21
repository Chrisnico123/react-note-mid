import React from "react";
import { showFormattedDate } from "../../data/data";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ListArchive({ title, body, createdAt, id }) {
  const path = `/archive/${id}`;

  return (
    <div className="listcard">
      <h4>{title}</h4>
      <p>{showFormattedDate(createdAt)}</p>
      <div className="body">{body}</div>
      <div className="btn">
        <Link to={path}>
          <button className="button etc-btn">Detail</button>
        </Link>
      </div>
    </div>
  );
}

ListArchive.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ListArchive;
