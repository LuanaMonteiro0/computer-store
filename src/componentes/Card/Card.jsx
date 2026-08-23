
import React from "react";
import "./Card.css";

const imagensMarcas = {
    "HP": "/imagens/marcas/hp.svg",
    "Dell": "/imagens/marcas/dell.svg",
    "Positivo": "/imagens/marcas/positivo.svg",
    "Asus": "/imagens/marcas/asus.svg",
    "Xing Ling genérico": "/imagens/marcas/xing-ling.svg"
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
