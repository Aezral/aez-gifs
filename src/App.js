import "./App.css";
import getGifs from "./services/getgifs";
import React, { useEffect, useState } from "react";

import Input from "./components/Input";
import GIFgrid from "./components/GIFgrid";
import Spinner from "./components/Spinner";

const App = () => {
  const [data, modify] = useState(null);

  const buscar = (value) => {
    getGifs(value).then((gifs) => {
      modify(gifs.data);
    });
  };

  return (
    <React.Fragment>
      <div className="main">
        <h1>Aez-Gifs</h1>
        <h6>hecho por Aezral</h6>
        <Input
          placeholder="Busca algo.."
          endType={(e) => buscar(e)}
          startType={(e) => {
            modify(null);
          }}
          className="mt-3"
        ></Input>
      </div>
      {Boolean(data) && <GIFgrid gifs={data} className="mt-5" />}
    </React.Fragment>
  );
};

export default App;
