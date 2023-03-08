import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #000000;
`;

const Tabs = styled(NavLink)`
  font-size: 25px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

function NavBar() {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">CRUD Data Pegawai</Tabs>
          <Tabs to="/all">Semua User</Tabs>
          <Tabs to="/add">Tambah User</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
}

export default NavBar;
