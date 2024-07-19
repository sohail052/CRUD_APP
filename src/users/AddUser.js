import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// after this, in video (42:58) I installed npm pkg for router, command is provided below
// Don't installed in some random terminal, you've to install it in react-app terminal.
// right-click on app folder (on my pc, it's name is "fullstack-front")
// After right-click, select [open in integrated terminal]
// "npm i react-router-dom" (you've to run the same command in react-app terminal)

export default function AddUser() {

  let navigate=useNavigate()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit =async (e) => {
    e.preventDefault();
    await axios.post("", user)                  //URL from postman will be pasted in "", video (59:45)
    navigate("/")                               //after correct URL, when SUBMIT clicks, site will be redirect to homepage with newly added user details.
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"Email"}
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

            <Link className="btn btn-outline-danger mx-2" to="/">       {/*When click CANCEL, it'll redirect homepage*/}
              Cancel                                                 
            </Link>       
          </form>
        </div>
      </div>
    </div>
  );
}
