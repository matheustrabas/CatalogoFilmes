const series = [
    {
        titulo: "Rick and Mory",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg",
        descricao: "Esse velho maluco levou seu neto para varios muktiversos",
    },
    {
        titulo: "Os Simpsons",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg",
        descricao: "A familia mais amada de springfield",
    },
    {
        titulo: "Stranger Things",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/twfKp60THrcOIep9sjHODOOfO8d.jpg",
        descricao: "Coisas estranhas",
    },
    {
        titulo: "South Park",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ojwZ7dO7CUVUjbUDW81XaBjqy6h.jpg",
        descricao: "Aqui tem de tudo um pouco",
    },
    {
        titulo: "Apenas um show",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/zsiUNYM8z9odHhEQPl3UR3fyTzT.jpg",
        descricao: "OOOOOOOOOOOOOOOOOOOOO Maneiroo",
    },
    {
        titulo: "Os Jovens Titãs em Ação",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/7YAFoSGn6gBhZFzuWhHaGa3jJOi.jpg",
        descricao: "Crianças salvando mundo",
    }
]

const ListaSeries = document.getElementById("ListaSeries");
function mostrarSeries(lista) {
    ListaSeries.innerHTML = ""
    lista.forEach(serie => {
        ListaSeries.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${serie.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${serie.titulo}</h3>
                        <p>${serie.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}, ${serie.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    });
}

mostrarSeries(series)

function verDetalhes(titulo, descricao){
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}