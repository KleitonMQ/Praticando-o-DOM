class Imovel {
    constructor(tipo, area, alugado) {
        this.tipo = tipo;
        this.area = area;
        this.alugado = alugado;
    }

    exibir() {
        let novaLi = document.createElement("li");
        novaLi.style.margin = "5px"
        if (this.alugado == sim) {
            this.alugado = document.createElement("span");
            this.alugado.innerText = "Alugado";
            this.alugado.style.backgroundColor = "red";
            this.alugado.style.color = "white"
            this.alugado.style.padding = "5px";


        } else {
            this.alugado = document.createElement("span");
            this.alugado.innerText = "Desocupado";
            this.alugado.style.padding = "5px";
        }

        let area = document.createTextNode(" | Tamanho da área: " + this.area + " m² | Tipo de imóvel: " + this.tipo + " | ");

        let botaoRemover = document.createElement("button");
        botaoRemover.type = "button";
        botaoRemover.innerText = "Remover"
        botaoRemover.setAttribute("onclick", "removerImovel(this)")


        novaLi.appendChild(this.alugado);
        novaLi.appendChild(area);
        novaLi.appendChild(botaoRemover);
        novaLi.appendChild(document.createElement("br"));
        document.getElementById("imoveis-cadastrados").appendChild(novaLi);
    }
}

