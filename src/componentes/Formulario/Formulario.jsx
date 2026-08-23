
import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import RadioBotao from "../RadioBotao/RadioBotao";
import Botao from "../Botao/Botao";

const Formulario = (props) => {

    const [secao, setSecao] = useState(props.secoes[0])
    const [marca, setMarca] = useState(props.marcas[0])
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [condicao, setCondicao] = useState('Novo')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoProdutoCadastrado(
            {
                "secao" : secao,
                "marca" : marca,
                "nome" : nome,
                "preco" : preco,
                "condicao" : condicao
            }
        );
        setNome('');
        setPreco('');
        setCondicao('Novo');
    }

    const aoDigitadoPreco = (valor) => {
        setPreco(valor.replace(/[^0-9.]/g, ''))
    }

    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>

                <h2>Dados do produto</h2>

                <ListaSuspensa
                    label="Seção"
                    itens={props.secoes}
                    valor={secao}
                    aoAlterado={valor => setSecao(valor)}
                />

                <ListaSuspensa
                    label="Marcas"
                    itens={props.marcas}
                    valor={marca}
                    aoAlterado={valor => setMarca(valor)}
                />

                <CampoTexto
                    label="Nome"
                    placeholder="Digite o nome do produto"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    label="Preço"
                    placeholder="Digite o preço do produto"
                    valor={preco}
                    aoAlterado={aoDigitadoPreco}
                />

                <RadioBotao
                    label="Condição"
                    nome="condicao"
                    opcoes={['Novo', 'Usado']}
                    valor={condicao}
                    aoAlterado={valor => setCondicao(valor)}
                />

                <Botao>Inserir Produto</Botao>

            </form>

        </section>
    )
}

export default Formulario;
