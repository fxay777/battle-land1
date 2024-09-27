document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});

document.querySelector('.hero img').addEventListener('click', function() {
    this.classList.add('animate');

    // Remove a classe 'animate' após a duração da animação para poder clicar novamente
    setTimeout(() => {
        this.classList.remove('animate');
    }, 500); // A duração aqui deve ser igual à da animação
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});




