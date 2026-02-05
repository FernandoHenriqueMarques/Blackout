// ===============================
// CARROSSEL CONTÍNUO DE CLIENTES
// ===============================

const carousel = document.querySelector('.clientes-carousel');
const track = document.querySelector('.clientes-carousel-track');

if (carousel && track) {
  // Duplica os logos para efeito infinito
  track.innerHTML += track.innerHTML;

  let position = 0;
  const speed = 1.2; // ajuste fino da velocidade

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

// ===============================
// WHATSAPP FLUTUANTE
// ===============================

const whatsappButton = document.querySelector('.whatsapp-float');

if (whatsappButton) {
  whatsappButton.addEventListener('click', () => {
    const phone = '5585999999999'; // atualizar número
    const message = encodeURIComponent('Olá, vim pelo site da Blackout.');
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, '_blank');
  });
}
