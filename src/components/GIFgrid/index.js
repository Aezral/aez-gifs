import { useEffect, useState } from "react";

import "./index.css";



const GIFGrid = (params) => {
  return (
    <div className="imggrid" {...params}>
      {params.gifs.map((element) => (
        <img key={element.id} src={element.images.original.url} alt="" />
      ))}
    </div>
  );
};

export default GIFGrid;
