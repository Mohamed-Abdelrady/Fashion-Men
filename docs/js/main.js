var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1500,
});

const bars = document.querySelector('.navbar-up .bars'),
  navParent = document.querySelector('.navbar-up .nav-parent');

bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  navParent.classList.toggle('active');
  document.body.classList.toggle('active');
});
