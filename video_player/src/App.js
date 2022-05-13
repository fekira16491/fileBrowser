import logo from "./logo.svg";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import FileBrowser from "./Components/FileBrowser";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/filebrowser" element={<FileBrowser />} />
            <Route exact path="/register" element={< Register/>} />

          </Routes>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
