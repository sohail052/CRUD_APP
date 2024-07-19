import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]); //useState function

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    //async & await is used
    const result = await axios.get(""); //URL to be requested from Ms Adeena (POSTMAN)
    setUsers(result);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
              {/* After this, at (39.30), coder went to postman [post request] and added some details, which successfuly called on UI */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>

                <td>
                  <button className="btn btn-primary mx-2">View</button>
                  <button
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>Dummay-1</td> 
              <td>Dummy-2</td>
              <td>Dummy-3</td>
              <td></td>
              <button className="btn btn-primary mx-2">View</button>{" "}
              <button className="btn btn-outline-primary mx-2">
                Edit
              </button>{" "}
              <button className="btn btn-danger mx-2">Delete</button>
            </tr> */}
            {/* <tr>
              <td>Dummay-4</td> 
              <td>Dummy-5</td>{" "}
              
              <td>Dummy-6</td>
              <td></td>
              <button className="btn btn-primary mx-2">View</button>{" "}
              <button className="btn btn-outline-primary mx-2">
                Edit
              </button>{" "}
              <button className="btn btn-danger mx-2">Delete</button>
            </tr> */}
            {/* <tr>
              <td>Dummay-7</td> 
              <td>Dummy-8</td>
              <td>Dummy-9</td>
              <td></td>
              <button className="btn btn-primary mx-2">View</button>{" "}
              <button className="btn btn-outline-primary mx-2">
                Edit
              </button>{" "}
              <button className="btn btn-danger mx-2">Delete</button>
            </tr> */}
            <td>
              <button className="btn btn-primary mx-2">View</button>
              <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

//if after proceeding (routing etc) compilation error occurs, i'll then create dummy data for accurate UI presentation.
