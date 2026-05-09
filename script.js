// Este projeto é de front-end. Não há código de back-end neste repositório.

// Seleciona todos os itens do carrossel
let list = document.querySelectorAll('.item')

// Seleciona os botões de navegação
let next = document.getElementById('next')
let prev = document.getElementById('prev')

// Quantidade total de slides
let count = list.length // 3

// Índice do slide atualmente ativo
let active = 0

// Função chamada ao clicar no botão "próximo"
next.onclick = () => {
    // Remove a classe active do slide atual
    const activeOld = document.querySelector('.active')
    if (activeOld) activeOld.classList.remove('active')

    // Avança para o próximo slide ou volta para o primeiro
    active = active >= count - 1 ? 0 : active + 1

    // Exibe o slide novo
    list[active].classList.add('active')
}

// Função chamada ao clicar no botão "anterior"
prev.onclick = () => {
    // Remove a classe active do slide atual
    const activeOld = document.querySelector('.active')
    if (activeOld) activeOld.classList.remove('active')

    // Vai para o slide anterior ou volta para o último
    active = active <= 0 ? count - 1 : active - 1

    // Exibe o slide novo
    list[active].classList.add('active')
}

