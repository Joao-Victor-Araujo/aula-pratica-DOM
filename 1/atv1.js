let cidades = ["São Paulo", "Rio de Janeiro", "Recife", "Maceió", "Natal"]
let main = () => {
    let section = document.createElement("section")
    document.body.appendChild(section)

    section.innerHTML = (cidades[0].toUpperCase()+", "+ cidades[1].toUpperCase()+", "+ cidades[2].toUpperCase()+", "+ 
    cidades[3].toUpperCase()+", "+ cidades[4].toUpperCase()+", ")
}

let tabuada = () => {
    for(let i = 1; i<=10 ; i++){
        let p = document.createElement("p")
        document.body.appendChild(p)
        
        p.innerHTML = ("9 x " + [i] + "é igual á " + (9*i));
    }
}

tabuada();