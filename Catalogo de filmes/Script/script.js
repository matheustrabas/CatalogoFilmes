const filmes = [
    {
        titulo: "Vingadores",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descrição:"Ultimato"
    },
    {
        titulo: "Homi aranha",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/RbZQL5hXmydecu82UHw9ZGyytB.jpg",
        descrição:"Vai teia"
    },
    {
        titulo: "Bingo",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/fqIF4ERm1tmBRHZQs32DdIAM9OS.jpg",
        descrição:"Paiço triste"
    },
    {
        titulo: "Jornal nacional",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/59iVuixNWRgtkT1aN8BR9RrJOBR.jpg",
        descrição:"Boa noite"
    },
    {
        titulo: "Homi furmiga",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/lsiy4IcnbtChkayPMxLda2fq4xM.jpg",
        descrição:"Du tamanho de uma formiga"
    },
    {
        titulo: "Pisca Pisca",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/xfZ1p8nNavu5sbLcyrB1FgOYK23.jpg",
        descrição:"Led verde em mais uma aventura"
    },
]
const listaFilmes = document.getElementById("listaFilmes");
function mostrarFilmes (lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listarFilmes.innerHTML +=`
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top>
                        <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descrição}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes"</button
                        </div>
                    </div>
                </div>
        `
    })
}