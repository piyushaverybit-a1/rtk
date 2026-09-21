import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, showUser, updateUser } from "../filter/userDetailSlice";
import { useNavigate, useParams } from "react-router-dom";

const emptyUser = { name: "", email: "", age: "", gender: "" };

const Create = () => {
  const [users, setUsers] = useState(emptyUser);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users: allUsers } = useSelector((state) => state.app);

  useEffect(() => {
    if (id && allUsers.length === 0) {
      dispatch(showUser());
    }
  }, [id, allUsers.length, dispatch]);

  useEffect(() => {
    if (!id) {
      setUsers(emptyUser);
      return;
    }

    const selectedUser = allUsers.find((user) => user.id === id);
    if (selectedUser) {
      setUsers({
        name: selectedUser.name || "",
        email: selectedUser.email || "",
        age: selectedUser.age || "",
        gender: selectedUser.gender || "",
      });
    }
  }, [id, allUsers]);

  const getUserData = (e) => {
    setUsers((currentUser) => ({
      ...currentUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await dispatch(updateUser({ id, data: users }));
    } else {
      await dispatch(createUser(users));
    }
    navigate("/read");
  };

  return (
    <div>
      <h2 className="text-center my-3">{id ? "Update User" : "Create User"}</h2>
      <form className="w-50 mx-auto my-5" style={{ backgroundColor: "#2d2b2b", padding: "50px", borderRadius: "20px", height: "auto" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={users.name}
            onChange={getUserData}
            style={{ backgroundColor: "#adadad" }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={users.email}
            onChange={getUserData}
            style={{ backgroundColor: "#adadad" }}
          />
        </div>
        <div className="mb-3" >
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            value={users.age}
            onChange={getUserData}
            style={{ backgroundColor: "#adadad" }}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked={users.gender === "Male"}
            onChange={getUserData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={users.gender === "Female"}
            onChange={getUserData}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          {id ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Create;