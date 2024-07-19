import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />             {/*routing for Home Component*/}
          <Route exact path="/adduser" element={<AddUser />} />   {/*routing for addUser Component*/}
          <Route exact path="/edituser" element={<EditUser/>} />  {/*routing for editUser Component*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
