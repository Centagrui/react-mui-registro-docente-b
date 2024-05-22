// Alejandro Perez Vazquez
//Maria Centagrui Perez Alvarez
import { Encabezado } from "../components/Encabezado";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";

export function Registro(props) {
  /* Logica del controlador */

  /* Lista de software */
  const listaDeSoftware = [
    { nombre: "Android Studio", logo: "" },
    { nombre: "Arduino", logo: "" },
    { nombre: "Blender", logo: "" },
    { nombre: "CodeBlocks", logo: "" },
    { nombre: "Eclipse", logo: "" },
    { nombre: "IntelliJ", logo: "" },
    { nombre: "JFLAP", logo: "" },
    { nombre: "MySQL worbench", logo: "" },
    { nombre: "NetBeans", logo: "" },
    { nombre: "Office", logo: "" },
    { nombre: "VirtualBox", logo: "" },
    { nombre: "Visual Studio Code", logo: "" },
  ];

  /* Materias de todas las carreras */
  const materiasDeISC = [
    { label: "Topicos Avanzados de Programacion", id: 1 },
    { label: "Fundamentos de bases de datos", id: 2 },
    { label: "Inteligencia Artificial", id: 3 },
    { label: "Estructura de datos", id: 4 },
    { label: "Programación Orientada a Objetos", id: 5 },
    { label: "Desarrollo Web", id: 6 },
    { label: "Desarrollo Móvil", id: 7 },
    { label: "Métodos Numéricos", id: 8 },
    { label: "Arquitectura de Computadoras", id: 9 },
  ];
  const materiasDeISA = [
    { label: "Mecanica Automotríz", id: 1 },
    { label: "Termodinámica", id: 2 },
    { label: "Cálculo Diferencial", id: 3 },
  ];

  const [materias, setMaterias] = React.useState([]);
  const [atActual, setAtActual] = React.useState("at1");
  const [cantAlumnos, setCantAlumnos] = React.useState(0);

  let carreras = [
    { label: "Ing. Sistemas Computacionales", id: 1 },
    { label: "Ing. Sistemas Automotrices", id: 2 },
    { label: "Ing. Ambiental", id: 3 },
    { label: "Ing. Electrónica", id: 4 },
    { label: "Ing. Industrial", id: 5 },
    { label: "Ing. Gestión Empresarial", id: 6 },
    { label: "Ing. Semiconductores", id: 7 },
    { label: "Gastronomía", id: 8 },
  ];

  function onAtSeleccionada(event, aulaSeleccionada) {
    setAtActual(aulaSeleccionada);
  }

  function onChangeCantAlumnSlider(event, nuevaCantidad) {
    setCantAlumnos(nuevaCantidad);
  }

  function onChangeCantAlumnInput(event) {
    setCantAlumnos(event.target.value);
  }

  function onChangeCarrera(event, carreraSeleccionada) {
    if (carreraSeleccionada) {
      switch (carreraSeleccionada.id) {
        case 1:
          setMaterias(materiasDeISC);
          break;
        case 2:
          setMaterias(materiasDeISA);
          break;
        // Agregar los otros cases para otras carreras si es necesario
        default:
          setMaterias([]); // Limpiar las materias si no hay una carrera seleccionada
      }
    }
  }

  function onBotonGuardarClick(event) {
    props.setActualizarDocente(null); // Actualizar la variable docenteActual en el componente App
  }

  /* Vista */
  return (
    <div>
      <Encabezado />
      {/* Nombre del docente */}
      <h2>
        <i>Docente:</i> {props.docente.nombre}
      </h2>
      {/* AT utilizado */}
      <p>
        <strong>
          <i>Aula Tecnológica:</i>
        </strong>
      </p>
      <ToggleButtonGroup
        className="ATS"
        exclusive
        value={atActual}
        onChange={onAtSeleccionada}
        aria-label="AT utilizada"
      >
        <ToggleButton
          value="at1"
          sx={{
            backgroundColor: "#a6e5e8", // Cambia el color de fondo
            color: "white", // Cambia el color del texto
            "&.Mui-selected": {
              backgroundColor: "#bfeae4", // Cambia el color de fondo cuando está seleccionado
            },
          }}
        >
          AT1
        </ToggleButton>
        <ToggleButton
          value="at2"
          sx={{
            backgroundColor: "#a6e5e8", // Cambia el color de fondo
            color: "white", // Cambia el color del texto
            "&.Mui-selected": {
              backgroundColor: "#bfeae4", // Cambia el color de fondo cuando está seleccionado
            },
          }}
        >
          AT2
        </ToggleButton>
        <ToggleButton
          value="at3"
          sx={{
            backgroundColor: "#a6e5e8", // Cambia el color de fondo
            color: "white", // Cambia el color del texto
            "&.Mui-selected": {
              backgroundColor: "#bfeae4", // Cambia el color de fondo cuando está seleccionado
            },
          }}
        >
          AT3
        </ToggleButton>
        <ToggleButton
          value="at4"
          sx={{
            backgroundColor: "#a6e5e8", // Cambia el color de fondo
            color: "white", // Cambia el color del texto
            "&.Mui-selected": {
              backgroundColor: "#3bfeae4", // Cambia el color de fondo cuando está seleccionado
            },
          }}
        >
          AT4
        </ToggleButton>
        <ToggleButton
          value="at5"
          sx={{
            backgroundColor: "#a6e5e8", // Cambia el color de fondo
            color: "white", // Cambia el color del texto
            "&.Mui-selected": {
              backgroundColor: "#3bfeae4", // Cambia el color de fondo cuando está seleccionado
            },
          }}
        >
          AT5
        </ToggleButton>
      </ToggleButtonGroup>
      {/* Carrera */}
      <p>
        <strong>
          <i>Carrera:</i>
        </strong>
      </p>
      <Autocomplete
        className="carreras"
        disablePortal
        onChange={onChangeCarrera}
        options={carreras}
        renderInput={(params) => (
          <TextField {...params} label="Selecciona una carrera" />
        )}
      />
      {/* Materia */}
      <p>
        <strong>
          <i>Materia:</i>
        </strong>
      </p>
      <Autocomplete
        className="materias"
        disablePortal
        options={materias}
        renderInput={(params) => (
          <TextField {...params} label="Selecciona una Materia" />
        )}
      />
      {/* Cantidad de alumnos */}
      <p>
        <strong>
          <i>Cantidad de alumnos:</i>
        </strong>
      </p>
      <Stack direction="row" spacing={2}>
        <Slider
          value={cantAlumnos}
          onChange={onChangeCantAlumnSlider}
          aria-labelledby="input-slider"
          max={45}
        />
        <Input
          value={cantAlumnos}
          size="small"
          onChange={onChangeCantAlumnInput}
          inputProps={{
            step: 1,
            min: 0,
            max: 45,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </Stack>
      {/* Software */}
      <p>
        <strong>
          <i>Software:</i>
        </strong>
      </p>
      <Autocomplete
        className="software"
        multiple
        options={listaDeSoftware}
        getOptionLabel={(option) => option.nombre}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder="Elige el(los) software utilizados."
          />
        )}
      />
      <br />
      <Button
        className="Guardar"
        onClick={onBotonGuardarClick}
        variant="contained"
      >
        GUARDAR
      </Button>
    </div>
  );
}
