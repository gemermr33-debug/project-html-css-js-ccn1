
document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.getElementById('top-btn');

  if (topBtn) {
    
    window.addEventListener('scroll', () => {
      topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});