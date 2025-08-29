// lista de ingredientes do bolo
const ingredientes = [
    "3 ovos",
    "2 xicaras de farinha de trigo",
    "1 xicara de açúcar",
    "1/2 xicara de oleo ",
    "1 xicara de leite",
    "1 colher de sopa de fermento em pó"
]

// titulo
console.log(" Receita de Bolo Simples");
console.log("ingredientes:");

// exibindo cada ingrediente
ingredientes.forEach((item, index) => {
    console.log('${index + 1} - ${item}');
});