$(document).ready(function () {
   $('.dropdown').click(function(e){
    e.preventDefault;
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
   }); 

   const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  $(".top").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 500);
  });
});
