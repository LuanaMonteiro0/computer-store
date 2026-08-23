
import React from "react";
import "./Card.css";

const imagensMarcas = {
    "HP": "/imagens/marcas/hp.png",
    "Dell": "/imagens/marcas/dell.png",
    "Positivo": "/imagens/marcas/positivo.png",
    "Asus": "/imagens/marcas/asus.png",
    "Xing Ling genérico": "/imagens/marcas/xing-ling.png"
};

const Card = (props) => {

    return (
        <div className="card">

            <div className="cabecalho">
                <img src={imagensMarcas[props.marca]} alt={props.marca} />
            </div>

            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>R$ {props.preco}</h5>
                <span className={`tag ${props.condicao.toLowerCase()}`}>{props.condicao}</span>
            </div>

        </div>
    );
}

export default Card;
