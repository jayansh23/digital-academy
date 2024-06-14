$('.owl-services').owlCarousel({
    items:4,
    loop:true,
    dots: true,
    nav: false,
    autoplay: true,
    margin:5,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1600:{
              items:4
          }
      }
})
