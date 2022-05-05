function removerImovel(botao) {
    let removeLi = botao.parentNode;
    document.getElementById("imoveis-cadastrados").removeChild(removeLi);

}

function cadastrarImovel() {
    let tipo = document.querySelector("select[name='tipo']").value
    let area = document.querySelector("input[name='area']").value
    let alugado = document.querySelector("input[name='alugado']:checked")

    if (alugado == null || area == "" || tipo == "selecione") {
        alert("Preencha todos os campos.")
    } else {
        let imovel = new Imovel(tipo, area, alugado)

        imovel.exibir()

        document.querySelector("input[name='area']").value = "";
        document.querySelector("select[name='tipo']").value = "selecione";
        document.querySelector("input[name='alugado']").checked = false;
    }
}
