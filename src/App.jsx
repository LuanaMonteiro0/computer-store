import { usestate } from 'react'
import Banner from "./componentes/Banner/Banner";
import FormuLario from "./componentes/Formulario/Formulario";
import Area from "./componentes/Area/Area";

function App() {
const secoes =[
{ nome:'Computadores', corPrimaria: '#6278F7', corSecundaria: '#E9EDFF'},
{ nome:'Acessórios', corPrimaria: '#82cffa', corSecundaria: '#E8F8FF'},
{ nome:'Impressoras', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2'},
{ nome:'Games', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8'},
{ nome:'Gadgets', corPrimaria: '#DB6EBF', corSecundaria: '#FAE9F5'}
];

const marcas = ["HP", "Dell", "Positivo", "Asus", "Xing Ling Genérico"];

const [produtos, setProdutos] = useState([])

const adicionaProduto = (produto) => {
  const listaNova = produtos.slice()
  listaNova.push(produto)
  setProdutos(listaNova)
}

return (
    <div>
      <Banner />
        <Formulario
          secoes={secoes.map(secao => secao.nome)}
          marcas={marcas}
          aoProdutoCadastrado={produto => adicionaProduto(produto)}
        />


        {secoes.map(secao => <Area key={secao.nome}
                                   nome={secao.nome}
                                   corPrimaria={secao.corPrimaria}
                                   corSecundaria={secao.corSecundaria}
                                   produtos={produtos.filter(produto => produto.secao === secao.nome)}
                              />)
        }
    </div>
  );
}

export default App;