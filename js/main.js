// ===============================
// CARROSSEL CONTÍNUO DE CLIENTES
// ===============================

const carousel = document.querySelector('.clientes-carousel');
const track = document.querySelector('.clientes-carousel-track');

if (carousel && track) {
  // Duplica os logos para efeito infinito
  track.innerHTML += track.innerHTML;

  let position = 0;
  const speed = 0.5; // ajuste fino da velocidade

  function animateCarousel() {
    position -= speed;

    // Quando metade do conteúdo passar, reseta suavemente
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();
}

// O botão de WhatsApp flutuante já possui URL no atributo `href` do HTML.
// Não adicionamos listener aqui para evitar abrir abas duplicadas e usar
// um número hardcoded diferente do configurado no markup.
