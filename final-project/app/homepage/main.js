$(document).ready(function(){
  $('.frame3').slick({
    infinite: true,      // Бесконечная прокрутка
    slidesToShow: 3,      // Количество видимых слайдов
    slidesToScroll: 1,    // Сколько слайдов прокручивать за раз
    dots: true,           // Показывать индикаторы (точки)
    arrows: true,         // Включить стрелки навигации
    autoplay: true,       // Автопрокрутка
    autoplaySpeed: 2000   // Интервал автопрокрутки (мс)
  });
});