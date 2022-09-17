let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener('click',function(evento){
    evento.preventDefault();

    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');

    let preco = calculaPreco(serv.value,prazo.value);

    res.innerText = 'o preco é ${preco.value}';

    console.log(serv.value);
});
function calculaPreco(servico,prazo){
    let tabela = [['$$$','$$','$']
                ['$$$$','$$$','$$']
                ['não faz','não faz','$$$']];
    return tabela[servico][prazo];
}