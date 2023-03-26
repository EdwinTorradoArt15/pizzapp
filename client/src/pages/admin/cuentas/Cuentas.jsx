import { useState } from "react";
import { Header, TableCuentas, ModalCuentas } from "@/components";
import { MdAdd } from "react-icons/md";
import { Button, Stack, SvgIcon, useMediaQuery } from "@mui/material";

const Cuentas = () => {
  const [modalCuentaOpen, setModalCuentaOpen] = useState(false);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"), {
    defaultMatches: true,
    noSsr: false,
  });

  const handleOpenModalCuenta = () => {
    setModalCuentaOpen(true);
  };

  return (
    <Stack spacin={3}>
      <Stack
        marginBottom={3}
        direction="row"
        justifyContent="space-between"
        spacing={4}
      >
        <Stack spacing={1}>
          <Header
            title="Cuentas"
            subtitle="Administracion de las cuentas de los empleados."
          />
        </Stack>
        <div>
          <Button
            onClick={() => handleOpenModalCuenta()}
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
        </div>
      </Stack>
      <TableCuentas />
      <ModalCuentas
        modalCuentaOpen={modalCuentaOpen}
        setModalCuentaOpen={setModalCuentaOpen}
      />
    </Stack>
  );
};

export default Cuentas;
