function setActive(el) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');
}
  document.addEventListener('DOMContentLoaded', () => {
      const portfolioCarousel = document.getElementById('portfolioCarousel');
      const pTitle = document.getElementById('pTitle');
      const pSub   = document.getElementById('pSub');

      portfolioCarousel.addEventListener('slid.bs.carousel', (e) => {
        const slide = e.relatedTarget;
        pTitle.innerText = slide.dataset.title;
        pSub.innerText   = slide.dataset.sub;
        pTitle.href      = slide.dataset.link;
      });
    });