window.addEventListener('load', () => {
    const giftBox = document.querySelector('.gift-box');
    const flowers = document.querySelector('.flowers');

    // Abre o presente após 1 segundo
    setTimeout(() => {
        giftBox.classList.add('open'); // Adiciona a classe para abrir o presente
    }, 1000);

    // Mostra as flores após 4 segundos
    setTimeout(() => {
        flowers.classList.remove('hidden'); // Remove a classe hidden
        flowers.classList.add('visible'); // Adiciona a classe visible para animar as flores
    }, 4000);
});
window.addEventListener('load', () => {
    const giftBox = document.querySelector('.gift-box');
    const confetti = document.querySelector('.confetti');
    const flowers = document.querySelector('.flowers');

    // Abre o presente após 1 segundo
    setTimeout(() => {
        giftBox.classList.add('open'); // Adiciona a classe para abrir o presente
    }, 1000);

    // Mostra os confetes após 2 segundos
    setTimeout(() => {
        confetti.classList.remove('hidden'); // Remove a classe hidden dos confetes
        confetti.classList.add('visible'); // Adiciona a classe visible para animar os confetes
    }, 2000);

    // Mostra as flores após 5 segundos
    setTimeout(() => {
        flowers.classList.remove('hidden'); // Remove a classe hidden das flores
        flowers.classList.add('visible'); // Adiciona a classe visible para animar as flores
    }, 5000);
});