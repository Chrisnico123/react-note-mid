import React from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const DetailActive = ({ id, onArchive, onDelete, title, body, createdAt }) => {
  let navigate = useNavigate();

  const routeChangedelete = () => {
    let path = "/";
    onDelete(id);
    navigate(path);
  };
  const routeChangearchive = () => {
    let path = "/";
    onArchive(id);
    navigate(path);
  };
  return (
    <div className="container">
      <h2>{title}</h2>
      <p>{createdAt}</p>
      <div className="body">{body}</div>
      <button className="button delete" onClick={routeChangedelete}>
        Delete
      </button>
      <button className="button etc-btn" onClick={routeChangearchive}>
        Archive
      </button>
    </div>
  );
};

DetailActive.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default DetailActive;
