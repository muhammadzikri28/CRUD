import { useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  Typography,
  Button,
  styled,
  FormGroup,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { addUser } from "../service/api";

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

const AddUsers = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const AddUsersDetails = async () => {
    await addUser(user);
    navigate();
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 30000); // Membuka Tombol kembali setelah 1 detik
  };

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
    <Container>
      <Typography variant="h4">Tambah User</Typography>
      <FormControl>
        <TextField
          onChange={(e) => onValueChange(e)}
          id="outlined-basic"
          name="name"
          label="Nama"
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => onValueChange(e)}
          id="outlined-basic"
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
          type="submit"
          onClick={() => AddUsersDetails()}
          disabled={isButtonDisabled}
          variant="contained"
          color="success"
        >
          Add Users
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUsers;
