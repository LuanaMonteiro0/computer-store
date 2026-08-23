
import React from "react";
import './RadioBotao.css';

const RadioBotao = (props) => {

	const aoEscolhido = (evento) => {
		props.aoAlterado(evento.target.value)
	}

	return (

		<div className="radio-botao">
			<label>{props.label}</label>
			<div className="opcoes">
				{ props.opcoes.map( item =>
					<div className="opcao" key={item}>
						<input
							type="radio"
							name={props.nome}
							value={item}
							checked={props.valor === item}
							onChange={aoEscolhido}
						/>
						{item}
					</div>
				) }
			</div>
		</div>

	)

}

export default RadioBotao;
