const formularioProduto = document.getElementById('formularioProduto');
const listaProdutos = document.getElementById('lista');
const tabelaProdutos = document.getElementById('tabelaProdutos');
const botaoNovoProduto = document.getElementById('botaoNovoProduto');
const pesquisarInput = document.getElementById('pesquisarInput');
const botaoPesquisar = document.getElementById('botaoPesquisar');
const botaoContato = document.getElementById('botaoContato');

const produtos = [];

formularioProduto.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nomeProduto').value;
    const descricao = document.getElementById('descricaoProduto').value;
    const valor = parseFloat(document.getElementById('valorProduto').value);
    const disponivel = document.getElementById('produtoDisponivel').value;

    produtos.push({ nome, descricao, valor, disponivel });

    produtos.sort((a, b) => a.valor - b.valor);

    atualizarListaProdutos();
    formularioProduto.reset();
    formularioProduto.parentNode.classList.add('oculto');
    listaProdutos.classList.remove('oculto');
});

botaoNovoProduto.addEventListener('click', () => {
    document.getElementById('cadastro').classList.remove('oculto');
    listaProdutos.classList.add('oculto');
});

botaoPesquisar.addEventListener('click', () => {
    const termoBusca = pesquisarInput.value.toLowerCase();
    const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(termoBusca));
    atualizarListaProdutos(produtosFiltrados);
});

botaoContato.addEventListener('click', () => {
    window.open('https://wa.me/5594992760247?text=Oi%2C%20me%20contrata!', '_blank');
});

function atualizarListaProdutos(produtosFiltrados = produtos) {
    tabelaProdutos.innerHTML = '';

    produtosFiltrados.forEach(produto => {
        const linha = document.createElement('tr');

        const celulaNome = document.createElement('td');
        celulaNome.textContent = produto.nome;

        const celulaValor = document.createElement('td');
        celulaValor.textContent = produto.valor.toFixed(2);

        linha.appendChild(celulaNome);
        linha.appendChild(celulaValor);

        tabelaProdutos.appendChild(linha);
    });
}
