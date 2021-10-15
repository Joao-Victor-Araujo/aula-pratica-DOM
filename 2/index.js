document.getElementById("btn").addEventListener("click", () => {
    let inputN1 = document.getElementById("numeroUm").value;
    let inputN2 = document.getElementById("numeroDois").value;

    if(inputN1 < 2 || inputN2 < 2 || inputN1 > 10 || inputN2 > 10){
        alert("Erro, o numero digitado precisa ser maior que 2 e menor que 10")
    } else {
        let n1 = parseInt(inputN1)
        let n2 = parseInt(inputN2)
        let div = document.getElementById("resultado")
        let p = div.innerHTML = ("O resultado é " + (n1 + n2));
    }
})
