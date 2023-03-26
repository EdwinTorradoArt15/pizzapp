import { useState, useContext } from "react";
import { SelectedProductContext } from "@/context/productos/ProductContext";
import { Link } from "react-router-dom";
import {
  Button,
  Stack,
  SvgIcon,
  OutlinedInput,
  Card,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import { MdAdd, MdOutlineSearch } from "react-icons/md";
import { Header, TableProductos } from "@/components";

const Productos = () => {
  const [search, setSearch] = useState("");
  const { products } = useContext(SelectedProductContext);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"), {
    defaultMatches: true,
    noSsr: false,
  });

  const searchProductos = () => {
    return products.filter((product) => {
      return (
        search === "" ||
        product.nombre.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Stack spacing={1}>
          <Header title="Productos" subtitle="Administrar productos." />
        </Stack>
        <div>
          <Link to="/admin/productos/agregar">
            <Button
              sx={{
                fontSize: smUp ? "1rem" : "0.75rem",
              }}
              startIcon={
                <SvgIcon fontSize="small">
                  <MdAdd />
                </SvgIcon>
              }
              variant="contained"
            >
              Agregar
            </Button>
          </Link>
        </div>
      </Stack>
      <Card sx={{ p: 2 }}>
        <OutlinedInput
          defaultValue={search}
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar producto por nombre"
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon color="action" fontSize="small">
                <MdOutlineSearch />
              </SvgIcon>
            </InputAdornment>
          }
          sx={{ maxWidth: 500 }}
        />
      </Card>
      <TableProductos searchProductos={searchProductos} />
    </Stack>
  );
};

export default Productos;
