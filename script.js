const cards = document.querySelectorAll('.produto-card');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    fecharTodosProdutos(); // Oculta qualquer produto já aberto

    // Usa o índice para identificar qual produto mostrar
    const produtoClasses = ['produto-all-white', 'produto-all-black', 'produto-black-white'];
    const classe = produtoClasses[index];
    const produto = document.querySelector(`.${classe}`);
    if (produto) {
      produto.style.display = 'flex';
      produto.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function fecharTodosProdutos() {
  const todos = document.querySelectorAll('.pagina-produto');
  todos.forEach(p => p.style.display = 'none');
}

function trocarFotoProduto(el) {
  const container = el.closest('.galeria');
  const fotoPrincipal = container.querySelector('img');
  fotoPrincipal.src = el.src;
}
