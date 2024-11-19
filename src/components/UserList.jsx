import React, { useState, useEffect } from "react";
import { getUsers, deleteUser, addUser, editUser } from "../services/api";
import UserCard from "./UserCard";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await getUsers();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch {
      setError("Failed to delete user.");
    }
  };

  const handleSave = async (formData) => {
    try {
      if (selectedUser) {
        // Edit existing user
        await editUser(selectedUser.id, formData);
        setUsers(users.map((user) => (user.id === selectedUser.id ? formData : user)));
      } else {
        // Add new user
        const { data } = await addUser(formData);
        setUsers([...users, data]);
      }
      setShowForm(false);
      setSelectedUser(null);
    } catch {
      setError("Failed to save user.");
    }
  };

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      <h1>User Management</h1>
      <button className="btn btn-primary mb-3" onClick={() => { setShowForm(true); setSelectedUser(null); }}>
        Add User
      </button>
      {showForm && (
        <UserForm
          user={selectedUser}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}
      <div className="row">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onEdit={() => { setShowForm(true); setSelectedUser(user); }}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
