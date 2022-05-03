import { useState } from "react";

function HeaderX() {
  const [cuenta, setCuenta] = useState(0);
  const hangleClick = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <div>
      {cuenta == 0 ? (
        <h1>hay que empezar a contar</h1>
      ) : (
        <h1>hay que mepzar a dormirse</h1>
      )}
      {cuenta > 1 ? (
        <h1>contamos {cuenta} obejitas</h1>
      ) : (
        <h1>contamos {cuenta} obejita</h1>
      )}

      <button onClick={hangleClick}>contar</button>
    </div>
  );
}

export default HeaderX;
