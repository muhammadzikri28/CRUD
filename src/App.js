import React from "react";
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";
import CrudData from "./components/CrudData";
import NavBar from "./components/NavBar";
import EditUser from "./components/EditUser";
import SearchBar from "./components/SearchBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<CrudData />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
