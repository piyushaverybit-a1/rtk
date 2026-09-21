import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../filter/userDetailSlice";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2 className="text-center my-4">Loading...</h2>;
  }

  function handleclick(id){
    alert("you want to delete");
    dispatch(deleteUser(id));
  }
  return (
    <div>
      <h2 className="text-center my-3">All Users</h2>
      <div className="container d-flex flex-wrap justify-content-center gap-3 my-4">
        {users &&
          users.map((ele) => (
            <div key={ele.id} className="card" style={{ width: "18rem" ,backgroundColor:"#2d2b2b" ,color:"white", padding:"30px 20px"}}>
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">Gender: {ele.gender}</p>
                <button className="btn btn-primary me-2">View</button>
                <Link to={`/edit/${ele.id}`} className="btn btn-secondary me-2">
                  Edit
                </Link>
                <button className="btn btn-danger" onClick={()=>handleclick(ele.id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;