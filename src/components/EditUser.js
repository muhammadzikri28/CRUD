import { useState, useEffect } from "react";
import {
  FormControl,
  Typography,
  Button,
  styled,
  FormGroup,
  MenuItem,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, editUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 30%;
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
  }, []);

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

  // Provinsi, kota, kecematan
  const [provinsi, setProvinsi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/provinsi")
      .then((response) => response.json())
      .then((data) => setProvinsi(data));
  }, []);

  const [kota, setKota] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/kota")
      .then((response) => response.json())
      .then((data) => setKota(data));
  }, []);

  const [kecamatan, setKecamatan] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/kecamatan")
      .then((response) => response.json())
      .then((data) => setKecamatan(data));
  }, []);

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
            value={user.provinsi}
            name="provinsi"
            id="outlined-select-currency"
            label="Provinsi"
            defaultValue=""
            select
            helperText="Please select your Provinsi"
          >
            {provinsi.map((provinsi) => (
              <MenuItem key={provinsi.value} value={provinsi.nama}>
                {provinsi.nama}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl>
          <TextField
            onChange={(e) => onValueChange(e)}
            value={user.kota}
            name="kota"
            id="outlined-select-currency"
            label="Kota"
            defaultValue=""
            select
            helperText="Please select your Kota"
          >
            {kota.map((kota) => (
              <MenuItem key={kota.value} value={kota.nama}>
                {kota.nama}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl>
          <TextField
            onChange={(e) => onValueChange(e)}
            value={user.kecamatan}
            name="kecamatan"
            id="outlined-select-currency"
            label="Kecamatan"
            defaultValue=""
            select
            helperText="Please select your Kecamatan"
          >
            {kecamatan.map((kecamatan) => (
              <MenuItem key={kecamatan.value} value={kecamatan.nama}>
                {kecamatan.nama}
              </MenuItem>
            ))}
          </TextField>
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
