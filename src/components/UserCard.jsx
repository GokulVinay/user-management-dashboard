import React from "react";

const UserCard = ({ user, onDelete, onEdit }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Department: {user.department || "N/A"}</p>
        <button className="btn btn-warning mr-2" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
