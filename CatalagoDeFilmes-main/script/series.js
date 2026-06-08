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
        titulo: "Os Flintstones",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/kJpL6zkMyoN0CuoPKftWxEJ6Y9T.jpg",
        descricao: "Os Flintstones (em inglês: The Flintstones) é uma série de televisão animada que foi exibida de 1960 a 1966 e criada por William Hanna e Joseph Barbera. O desenho retrata o cotidiano de uma família de classe média da Idade da Pedra. Calcula-se que já foi assistido por 300 milhões de espectadores em 80 países, sendo dublado em 22 idiomas. A série estreou às 20:30 do dia 30 de setembro de 1960, no canal ABC, e durou até 1 de abril de 1966. Entre 1 de outubro de 1992 e 1 de janeiro de 2004 foi emitida no Cartoon Network dos Estados Unidos. Os Flintstones parecem uma família típica de classe média da década de 60, mas suas aventuras são ambientadas na Idade da Pedra. Eles utilizam eletrodomésticos que são uma mistura de tecnologia com artefatos de pedra lascada e dinossauros.",
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