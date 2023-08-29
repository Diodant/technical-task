
//  $('.owl-carousel').owlCarousel({
//      dots: true,
//      loop: true,
//      margin:1,
//      autoWidth:true,
//      center:true,
//      responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//         }
//     }
//  })

$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    sync1.owlCarousel({
        loop:true,
         margin:38,
         autoWidth:true,
         center:true,
         responsiveClass:true,
         responsive:{
            0:{
                items:1,

            },
            600:{
                items:3,

            },
            1000:{
                items:5,

            }
        }


    });

    sync2.owlCarousel({
        loop: true,
        margin:30,
        autoWidth:true,
        responsiveClass:true,
        responsive:{
           0:{
            center:true,

           },
           476:{
            center:false,

           },
           900:{
            center:false,

           }
       }
    })

  });
