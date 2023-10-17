const nomeIdade=[
    {nome:"Vinicius", idade:19},
    {nome:"Lucas", idade:20},
    {nome:"Caio", idade:20},
    {nome:"Virginia", idade:22},
    {nome:"Vagner", idade:30}
]
const filtro = "V";
//cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const novoArray= nomeIdade.filter((valorAtual) =>{
    return valorAtual.nome.charAt(0).toUpperCase()===filtro.toUpperCase()
})
//constrói um novo array com base no retorno de cada chamada.
const somenteNome=novoArray.map(pessoa=>pessoa.nome);

console.log(somenteNome)
let x =0;
let y = 0;
//percorre o array, verificando se kd elemento contem a letra do filtro
nomeIdade.forEach(valoratual =>{
    if(valoratual.nome.charAt(0).toUpperCase()===filtro.toUpperCase()){
       x += valoratual.idade;
       y++;
    }
})
x= x/y
x=parseFloat(x.toFixed(2));
console.log('media de idade:'+ x)
