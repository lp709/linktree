const footerChild = document.querySelector('.footer_child');


function time() {
  const anoAtual = new Date().getFullYear();
  return `&copy; ${anoAtual} | Autor: Leandro Jesus`;
}

function updateFooter() {
  const footerEl = document.querySelector('.footer_child');
  if (footerEl) {
    footerEl.innerHTML = time();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateFooter);
} else {
  updateFooter();
}
