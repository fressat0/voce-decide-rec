 const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');


const perguntas = [
    {
        enunciado: 'No âmbito social, você prefere:',
        alternativas: [
            {
                texto: 'O brasil será o pais mais rico do mundo',
                consequencia: 'Amazonia será explorada',
                afirmacao: 'voçê tornou o brasil rico porém precisa dividir sua casa com um macaco pois ele perdeu seu habitat',

            },

            {
                texto: 'Acabar com todas as drogas do mundo.',
                consequencia: 'Cirurgia sem anestesia',
                afirmacao: 'Você acabou com as drogas, mas agora voçê terá que lidar com a dor de uma remoção de dente',

            }
        ]
    },

    {
        enunciado: 'No âmbito ambiental, você prefere:',
        alternativas: [
            {
                texto: 'Extinguir a Floresta Amazônica.',
                consequencia: 'Os problemas ambientais desapareceram.',
                afirmacao: 'Além disso, você destruiu o maior patrimônio ambiental da América do Sul, a Floresta Amazônica, mas o aqueciemnto global e os outros problemas ambientais acabaram.',

            },

            {
                texto: 'A água do mundo é infinita.',
                consequencia: 'O ser humano terá sede para sempre.',
                afirmacao: 'Além disso, você deixou o mundo com uma reserva infinita de água, mas agora, o ser humano não sentirá sede.',
            }
        ]
    },

    {
        enunciado: 'No âmbito tecnológico, você prefere:',
        alternativas: [
            {
                texto: 'os componentes eletronicos ficam mais baratos.',
                consequencia: 'mas a exploraçao infantil aumenta.',
                afirmacao: 'agora você tem um pc gamer bom, mas tera que entregar seu filho aos chineses.',

            },

            {
                texto: 'tornar o acesso a suad extremamente barato.',
                consequencia: 'porem os medicos agora ganham mal.',
                afirmacao: 'agora quem quer ser medico e visto como uma pessoa caridosa.',

            }
        ]
    }

]


let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPerguntas() {

    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(alternativa) {
    const afirmacao = alternativa.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado() {
    caixaPerguntas.textContent = "CONSEQUÊNCIAS... ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}


mostraPerguntas();
