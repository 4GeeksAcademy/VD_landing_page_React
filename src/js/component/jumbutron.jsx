//paso 1
import React from "react";

//paso 2
function Jumbutron() {
  //el return va con parentesis, no corren las llaves...
  return (
    <div className="jumbotron bg-light mt-3">
      <h1 className="display-4 ms-4">A Warm Welcome!</h1>
      <p className="lead ms-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      {/* si me marca un error especifico en la linea,es porque debo colocar el slash "/" en el tag de apertura */}
      <a className="btn btn-primary btn-lg mb-5 pb-3 ms-4" href="#" role="button">Call to action!</a>
    </div>
  )
}

//paso 3

export default Jumbutron;