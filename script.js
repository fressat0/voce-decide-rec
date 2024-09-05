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
                texto: 'Destruir qualquer forma de exploração humana.',
                consequencia: 'Você não será feliz.',
                afirmacao: 'Você destriu a exploração humana, mas nunca vai sentir a doce felicidade.',

            },

            {
                texto: 'Acabar com todas as drogas do mundo.',
                consequencia: 'Os usuários de drogas morreram.',
                afirmacao: 'Você acabou com as drogas, até aquelas que fazem bem, mas acabou matando todos os usuários do mundo.',

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
                texto: 'Ter internet para sempre.',
                consequencia: 'Ninguém pode se comunicar nas redes sociais ou qualquer meio de comunicação digital.',
                afirmacao: 'Contudo, agora você tem internet para sempre, mesmo não podendo se comunicar nas redes digitais.',

            },

            {
                texto: 'Criar a cura do Câncer.',
                consequencia: 'Todos os habitantes do mundo terão tumores com sequelas visuais.',
                afirmacao: 'Contudo, você criou a cura do câncer, mesmo assim, todos os humanos terão tumores visíveis.',

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
