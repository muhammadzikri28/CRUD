import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #9acd32;
`;

const Tabs = styled(NavLink)`
  font-size: 25px;
  margin-right: 20px;
  color: black;
  text-decoration: none;
`;

function NavBar() {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">CRUD</Tabs>
          <Tabs to="/all">Table Data Pegawai</Tabs>
          <Tabs to="/add">Tambah Pegawai</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
}

export default NavBar;
