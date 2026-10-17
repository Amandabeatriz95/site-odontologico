document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".menu-link");
  const buttons = document.querySelectorAll(".s-controller__button");
  const cards = document.querySelectorAll(".s-card");

  function activateItem(index) {
    // Atualiza o estado ativo das bolinhas
    buttons.forEach((btn) => btn.classList.remove("is-active"));
    if (buttons[index]) {
      buttons[index].classList.add("is-active");
    }

    // Vira o card correspondente e desvira os outros
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.toggle("is-flipped");
      } else {
        card.classList.remove("is-flipped");
      }
    });
  }

  // Clique no menu superior
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const index = parseInt(link.getAttribute("data-index"));
      activateItem(index);
    });
  });

  // Clique nas bolinhas embaixo
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      activateItem(index);
    });
  });

  // Clique direto no card
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
      if (buttons[index]) {
        buttons[index].classList.toggle("is-active");
      }
    });
  });
});
