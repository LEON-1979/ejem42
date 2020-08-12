
import React from 'react';
import Card from "./components/Card";
import Barbados from "./barbados_beach.jpg";
import palenque from "./palenque.jpg";
import './App.css';

const App = () => {
  const a = "chiapas";
  const b = "5";
  const c = "palenque";

  return (
    <div>
    <h1 className = "text-red">hola React</h1>
    <h2>mi primer sitio hecho con React</h2>
    <p>loren ipsum </p>
    <Card image={Barbados} title="Barbados" score= "5" address="playa de barbados" />
    <Card image={palenque} title={a} score= {b} address= {c} superhost />
    </div>
  );
}

export default App;
 