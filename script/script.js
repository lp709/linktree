const footerChild = document.querySelector('.footer_child');
const img = document.querySelector('img');

if (img) {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    if (src && src.includes('profile.jpg')) {
      img.setAttribute('src', './img/image.png');
    } else {
      img.setAttribute('src', './img/profile.jpg');
    }
  });
}

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
