const filmes = [
     {
        titulo: "Vingadores",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao: "Ultimato",
    },
    {
        titulo: "Homi aranha",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/RbZQL5hXmydecu82UHw9ZGyytB.jpg",
        descricao: "Vai teia",
    },
    { 
        titulo: "Bingo",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/fqIF4ERm1tmBRHZQs32DdIAM9OS.jpg",
        descricao: "Paiaço triste",
    },
    {
        titulo: "Jornal nacional",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/59iVuixNWRgtkT1aN8BR9RrJOBR.jpg",
        descricao: "Boa noite",
    },
    {
        titulo: "Homi furmiga",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/lsiy4IcnbtChkayPMxLda2fq4xM.jpg",
        descricao: "Du tamanho de uma formiga",
    },
    {
        titulo: "Pisca Pisca",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/xfZ1p8nNavu5sbLcyrB1FgOYK23.jpg",
        descricao: "Led verde em mais uma aventura"
    },
]

const ListaFilmes = document.getElementById("ListaFilmes");
function mostrarFilmes(lista) {
    ListaFilmes.innerHTML = ""
    lista.forEach(filme => {
        ListaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}, ${filme.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    });
}

mostrarFilmes(filmes)

function verDetalhes(titulo, descricao){
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}