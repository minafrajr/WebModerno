import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

import { BoaTarde, BoaNoite } from './componentes/Multiplos'

// ReactDOM.render(
//   <BomDia nome="Guilherme" idade="10" />,
//   document.getElementById('root')
// )

ReactDOM.render(
  <div>
    <BoaTarde nome="Ana" />
    <BoaNoite nome="Bia" />
  </div>,
  document.getElementById('root')
)
