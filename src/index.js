
//Exercício 1

function filtrarPares(numeros){
    return numeros.filter((numero) => numero % 2 == 0)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(numeros))

//Exercício 2

function filtrarAdultos(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade >= 18).map(pessoa => pessoa.nome)

}

let pessoas = [
{ nome: 'Alice', idade: 17 },
{ nome: 'Bob', idade: 22 },
{ nome: 'Charlie', idade: 16 },
{ nome: 'David', idade: 19 }
];
console.log(filtrarAdultos(pessoas));

//Exercício 3

function agruparPorCategoria(produtos) {
  let totalPorCategoria = produtos.reduce((acumulador, produto) => {
    const {categoria, preco} = produto;
    if(!acumulador[categoria]){
        acumulador[categoria] = 0
    }
    acumulador[categoria] += preco
    return acumulador
   }, {})
   return totalPorCategoria
}

let produtos = [
    { categoria: 'eletrônicos', preco: 99.99 },
    { categoria: 'livros', preco: 19.99 },
    { categoria: 'eletrônicos', preco: 199.99 },
    { categoria: 'livros', preco: 29.99 },
    { categoria: 'roupas', preco: 49.99 }
    ];


console.log(agruparPorCategoria(produtos));

//Exercício 4

function contador() {
    contagem = 0
    return function () {
        contagem += 1
        return contagem
    }
}

let contador1 = contador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

let contador2 = contador();
console.log(contador2()); // 1
console.log(contador2()); // 2

//Exercício 5

/*Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.*/

function calcularProduto(sequenciaNumeros) {
    return sequenciaNumeros.reduce((acumulador, numero) => 
        acumulador *= numero
    )
    
}

let sequenciaNumeros = [1, 2, 3, 4, 5];
console.log(calcularProduto(sequenciaNumeros)); // 120

//Exercício 6

function transformarArray(array, transformacao) {
  const novoArray = array.map((numero) => {
    return transformacao(numero)
  })
  return novoArray
}

function dobrar(numero) {
return numero * 2;
}

let arrayNumeros = [1, 2, 3, 4, 5];
console.log(transformarArray(arrayNumeros, dobrar)); // [2, 4, 6, 8, 10]

//Exercício 7

function compor(f, g) {
    return function(x){
        return f(g(x))
           
    }
}

function somar1(x) {
return x + 1;
}

function multiplicar2(x) {
return x * 2;
}

let funcaoComposta = compor(somar1, multiplicar2);
console.log(funcaoComposta(5)); // 11 (multiplicar2(5) = 10, somar1(10) = 11)






