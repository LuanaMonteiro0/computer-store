
import React from "react";
import "./Area.css";
import Card from "../Card/Card";

const Area = (props) => {

  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corSublinhado = { borderColor: props.corPrimaria };

  return (

    (props.produtos.length > 0) ? <section className="area" style={corDeFundo}>

      <h3 style={corSublinhado}>{props.nome}</h3>

      <div className="produtos">

        {props.produtos.map( produto => <Card
                                            key={produto.nome}
                                            nome={produto.nome}
                                            preco={produto.preco}
                                            marca={produto.marca}
                                            condicao={produto.condicao}
                                        /> )}

      </div>

    </section>

    : ''

  );

};

export default Area;
