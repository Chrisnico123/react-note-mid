import React from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const DetailArchive = ({ id, onArchive, onDelete, title, body, createdAt }) => {
  let navigate = useNavigate();

  const routeChangedelete = () => {
    let path = "/archive";
    onDelete(id);
    navigate(path);
  };
  const routeChangearchive = () => {
    let path = "/archive";
    onArchive(id);
    navigate(path);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{createdAt}</p>
      <div className="body">{body}</div>
      <button className="button delete" onClick={routeChangedelete}>
        Delete
      </button>
      <button className="button etc-btn" onClick={routeChangearchive}>
        UnArchive
      </button>
    </div>
  );
};

DetailArchive.propTypes = {
  id: PropTypes.string,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default DetailArchive;
