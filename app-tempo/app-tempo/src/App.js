import React from 'react';
import Previsao from './componentes/previsao/Previsao'
import Comtador from './componentes/contador/Contador'
import Comentario from './componentes/comentarios/Comentarios'

function App() {
  return (

    <div className="container">

      <Previsao />
      <Comtador />
      <Comentario />

    </div>
  );
}

export default App;
