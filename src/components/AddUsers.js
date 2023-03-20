import { useState } from "react";
import {
  FormControl,
  TextField,
  Typography,
  Button,
  styled,
  FormGroup,
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
    if (window.confirm("Apakah Anda yakin ingin menambahkan data ini?")) {
      // Tindakan yang akan diambil jika pengguna menekan tombol "OK"
      console.log("Data berhasil dihapus");
      // kode untuk menghapus data
    } else {
      // Tindakan yang akan diambil jika menekan tombol "BATAL"
      console.log("Penghapusan data dibatalkan");
    }
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 30000); // Membuka Tombol kembali setelah 1 detik
  };

  return (
    <Container>
      <Typography variant="h4">Tambah User</Typography>
      <FormControl>
        <TextField
          onChange={(e) =>  onValueChange(e)}
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
          id="outlined-basic"
          name="provinsi"
          label="Provinsi"
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => onValueChange(e)}
          id="outlined-basic"
          name="kota"
          label="kota"
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => onValueChange(e)}
          id="outlined-basic"
          name="kecamatan"
          label="Kecamatan"
          variant="outlined"
        />
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
