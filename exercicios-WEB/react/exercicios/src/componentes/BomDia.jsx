import React,{Fragment} from 'react'

export default props => (
  <Fragment>
    <h1>
      Bom dia {props.nome}! Idade: {props.idade}
    </h1>
    <h2>Até Breve</h2>
  </Fragment>
)
