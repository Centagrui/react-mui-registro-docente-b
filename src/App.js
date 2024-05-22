import { Acceso } from "./pages/Acceso";
import { Registro } from "./pages/Registro";
import * as React from "react";
import "./styles.css";

export default function App() {
  //const [accesoValidado, setAccesoValidado] = React.useState(false);
  const [docenteActual, setDocenteActual] = React.useState(null);

  return (
    <div className="App">
      {docenteActual ? (
        <Registro docente={docenteActual} setActualizarDocente={setDocenteActual}/>
      ) : (
        <Acceso setActualizarDocente={setDocenteActual} />
      )}
    </div>
  );
}
