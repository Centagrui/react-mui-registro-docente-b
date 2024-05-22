// Alejandro Perez Vazquez
//Maria Centagrui Perez Alvarez
import { useState } from "react"; // Importa useState para manejar el estado de claveDocente
import { Encabezado } from "../components/Encabezado";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

export function Acceso(props) {
  const [claveDocente, setClaveDocente] = useState(""); // Usa useState para manejar el estado de claveDocente

  const docentes = [
    { nombre: "Efrén Vega Chávez", clave: "001", claveCarrera: 1 },
    { nombre: "Germán Guzmán Guzmán", clave: "002", claveCarrera: 1 },
    { nombre: "Luis Germán Torres", clave: "003", claveCarrera: 1 },
    { nombre: "Susana Ramírez", clave: "004", claveCarrera: 2 },
    { nombre: "Jesús Amparo Morales Guzmán", clave: "005", claveCarrera: 3 },
  ];

  const onTxtClaveDocenteChange = (event) => {
    setClaveDocente(event.target.value);
  };

  const onBotonEntrarClick = () => {
    let docenteEncontrado = null;
    for (const docente of docentes) {
      if (docente.clave === claveDocente) {
        docenteEncontrado = docente;
        break;
      }
    }

    if (docenteEncontrado) {
      props.setActualizarDocente(docenteEncontrado);
    } else {
      alert("Acceso denegado, ingresa una clave correcta");
    }
  };

  return (
    <div className="Acceso">
      <Encabezado />

      <p>
        <i>Por favor, ingresa tu clave de docente:</i>
      </p>
      <TextField
        className="Registro"
        variant="outlined"
        label="Clave de docente"
        placeholder="Clave de docente"
        onChange={onTxtClaveDocenteChange}
      />
      <br />
      <br />
      <Button
        className="Boton"
        onClick={onBotonEntrarClick}
        variant="contained"
        startIcon={<LoginIcon />}
      >
        Registrarse
      </Button>
    </div>
  );
}
