let upperName = (valor) => {
    valor = valor.toUpperCase()
    let p = document.createElement("p")
    document.body.appendChild(p).innerHTML = ("Seu nome é: " +(valor));
}

let sumAge = (valor) => {
    let age = new Number(valor);
    let p = document.createElement("p")
    document.body.appendChild(p).innerHTML = ("Daqui a 10 anos você tera: "+(age + 10)+ "anos, já pensou em como quer estar?");
}