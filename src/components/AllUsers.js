import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";

import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #2ba3ff;
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUsersDetails();
  };

  return (
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
        {users.map((user) => (
          <Tbody>
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
  );
};

export default AllUsers;
