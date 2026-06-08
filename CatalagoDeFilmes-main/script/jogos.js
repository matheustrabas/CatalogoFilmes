const jogos = [
    {
        titulo: "Rainbow six",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uCQFHSDSN9SEw7MLUUgO-EAa694yYGGzFqEQP6l9JvhfTy4GX1OCCaAiT76MHQ-icaVvkgiQAdXbRrhh0GmIeySmqO8NpNQUKFgDLj05dQ&s=10",
        descricao: "Tiroteio",
    },
    {
        titulo: "Far cry 6",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUdZqljqujzlHFbySD57tHPrLALyGl8o1h0U19IopY4BdKn6Am0UM6a9Hg7QEnyw6jT42c9Skp_SLdnqwnz4e0CPRq20QRN6pyuwAKgCp1w&s=10",
        descricao: "Pou pou mais tiro",
    },
    {
        titulo: "Watch Dogs 2",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqLteJQc6_OQXayo_gflY6txnOzuX82vYBE-aw-rjYLZiilsNnSIY-URYsqyhIXdZBgPy9SMRNGMKzp-I2Ec2kTwgJgx_nmrIWqqD0wcFaA&s=10",
        descricao: "Hackudo",
    },
    {
        titulo: "Schedule I",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZYuqUH4KvKcYOcXZRxYfBUhRO5xvOxUb3dVeFcRZ-EHrTdB5iHXQ4iKIBPFv0voBtF4HOLIOvTN4hgfLTyUWVAr16G1hsvCsX81TaEqK&s=10",
        descricao: "Venda coisas ... ",
    },
    {
        titulo: "Red Dead Redemption 2",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC2WK38ul0KXbAS8Z76aOCiRickRl_bqAx8xsrx-rHRUa8a3MEXBFFg_Ffo632WdgbthfDxWLAqTZU9jKLLFemdFlLULps_UmWPh9tb0&s=10",
        descricao: "Tuberculose cof cof ... mas pelo menos tue e bom vaqueiro",
    },
    {
        titulo: "Assassin's Creed: Unity",
        imagem: "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/assassin-s-creed-5-unity-file-5754386e.jpeg.webp",
        descricao: "O mercenario viajante no tempo",
    }
]

const ListaJogos = document.getElementById("ListaJogos");
function mostrarJogo(lista) {
    ListaJogos.innerHTML = ""
    lista.forEach(jogo => {
        ListaJogos.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${jogo.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${jogo.titulo}</h3>
                        <p>${jogo.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${jogo.titulo}, ${jogo.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    });
}

mostrarJogo(jogos)

function verDetalhes(titulo, descricao){
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}