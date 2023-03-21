import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
  Paper,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 55px;
`;

const StyledSearch = styled(Paper)`
  width: 90;
  margin: 55px auto 0 auto;
  background: #c0c0c0;
`;

const Thead = styled(TableRow)`
  background: #9acd32;
  & > th {
    font-size: 20px;
  }
`;

const Tbody = styled(TableRow)`
  & > th {
    font-size: 20px;
  }
`;

const AllUsers = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserData =  (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      deleteUser(id);
      // Tindakan yang akan diambil jika pengguna menekan tombol "OK"
      console.log("Data berhasil dihapus");
      // kode untuk menghapus data
    } else {
      // Tindakan yang akan diambil jika menekan tombol "BATAL"
      console.log("Penghapusan data dibatalkan");
    }
    getUsersDetails();
  };

  return (
    <>
      <StyledSearch
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          onChange={(e) => setSearch(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </StyledSearch>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>ID</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Alamat</TableCell>
            <TableCell>Provinsi</TableCell>
            <TableCell>Kota</TableCell>
            <TableCell>Kecamatan</TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users
            .filter((user) => {
              return search.toLocaleLowerCase() === ""
                ? user
                : user.name.toLocaleLowerCase().includes(search);
            })
            .map((user) => (
              <Tbody key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.alamat}</TableCell>
                <TableCell>{user.provinsi}</TableCell>
                <TableCell>{user.kota}</TableCell>
                <TableCell>{user.kecamatan}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ margin: 10 }}
                    component={Link}
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn btn-danger"
                    variant="contained"
                    color="success"
                    onClick={() => deleteUserData(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </Tbody>
            ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default AllUsers;
