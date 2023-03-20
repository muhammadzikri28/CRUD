import { useState, useEffect } from "react";

import {
  FormControl,
  Typography,
  Button,
  styled,
  FormGroup,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";

import { getUser, editUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValues = {
  name: "",
  alamat: "",
  provinsi: "",
  kota: "",
  kecamatan: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  });

  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const AddUsersDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <TextField
            onChange={(e) => onValueChange(e)}
            id="outlined-basic"
            value={user.name}
            name="name"
            label="Nama"
            variant="outlined"
          />
        </FormControl>
        <FormControl>
          <TextField
            onChange={(e) => onValueChange(e)}
            id="outlined-basic"
            value={user.alamat}
            name="alamat"
            label="Alamat"
            variant="outlined"
          />
        </FormControl>
        <FormControl>
          <TextField
            onChange={(e) => onValueChange(e)}
            id="outlined-select-currency"
            value={user.provinsi}
            name="provinsi"
            label="Provinsi"
            select
            helperText="Please select your provinsi"
          ></TextField>
        </FormControl>
        <FormControl>
          <TextField
            onChange={(e) => onValueChange(e)}
            id="outlined-select-currency"
            value={user.kota}
            name="kota"
            label="Kota"
            select
            helperText="Please select your kota"
          ></TextField>
        </FormControl>
        <FormControl>
          <TextField
            onChange={(e) => onValueChange(e)}
            id="outlined-basic"
            value={user.kecamatan}
            name="kecamatan"
            label="Kecamatan"
            variant="outlined"
          />
        </FormControl>
        <FormControl>
          <Button
            onClick={() => AddUsersDetails()}
            variant="contained"
            color="success"
          >
            Edit User
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditUser;
