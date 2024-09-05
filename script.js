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
                texto: 'O Brasil será o pais mais rico do mundo',
                consequencia: 'Amazonia será explorada',
                afirmacao: 'Você tornou o brasil rico porém precisa dividir sua casa com um macaco pois ele perdeu seu habitat',

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
                texto: 'O Brasil se torna o pais mais rico do mundo.',
                consequencia: 'A amazonia sera explorada.',
                afirmacao: 'Além diss, voce vai dividir sua casa com um macaco, ja que seu habitat natural foi destruido, mas ele e gente boa',
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
                texto: 'Os componentes eletronicos ficam mais baratos.',
                consequencia: 'A exploraçao infantil aumenta.',
                afirmacao: 'Contudo, você tem um pc gamer bom, mas terá que entregar seu filho aos chineses.',

            },

            {
                texto: 'Tornar o acesso a saúde extremamente barato.',
                consequencia: 'Os medicos agora ganham mal.',
                afirmacao: 'Contudo, quem quer ser médico é visto como uma pessoa caridosa.',

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
