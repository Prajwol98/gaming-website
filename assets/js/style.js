// (function ($) {
//   setTimeout(() => {
//     $(".pre-loader").hide();
//   }, 1000);
//   $(".testimonial-carousel").owlCarousel({
//     items: 1,
//     dots: true,
//   });
//   //initialize tooltip
//   var tooltipTriggerList = [].slice.call(
//     document.querySelectorAll('[data-bs-toggle="tooltip"]')
//   );
//   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl);
//   });

//   // returntotop
//   $(window).scroll(function () {
//     if ($(this).scrollTop() >= 200) {
//       $("#return-to-top").show(200);
//     } else {
//       $("#return-to-top").hide(200);
//     }
//   });
//   $("#return-to-top").click(function () {
//     $("body,html").animate({ scrollTop: 0 }, 1000);
//   });

//   // sticking the navbar
//   $(function () {
//     var header = $(".navbar-wrapper");
//     $(window).scroll(function () {
//       var scroll = $(window).scrollTop();
//       if (scroll >= 20) {
//         header.addClass("fixed-top");
//       } else {
//         header.removeClass("fixed-top");
//       }
//     });
//   });
//   //responsive navbar
//   $("#custom-navbar-toggler").click(function () {
//     $("header .menu").addClass("show");
//   });
//   $("#menuClose").click(function () {
//     $("header .menu").removeClass("show");
//   });
//   $(".menu-toggler .search").on("click", function () {
//     $(this).find("form").slideToggle(200);
//   });
//   $("#home-search").click(function () {
//     $("header .menu").addClass("search-on");
//     $("header .menu .search").addClass("extended");
//     $(".search input").focus();
//   });
//   $("#search-close").click(function () {
//     $("header .menu .search").removeClass("extended");
//     $("header .menu").removeClass("search-on");
//   });
//   //expandable text
//   $(".see-more-btn").click(function () {
//     $(".expandable-text").toggleClass("expanded");
//     if ($(".expandable-text").hasClass("expanded")) {
//       $(".see-more-btn").text("Show less");
//     } else {
//       $(".see-more-btn").text("See more");
//     }
//     $("html, body").animate(
//       {
//         scrollTop: $(".expandable-text").offset().top - 200,
//       },
//       1000
//     );
//   });
//   //pagination
//   var $children = $("#pagination").children(".game-card-wrapper");
//   display = 11;
//   redraw();
//   function redraw() {
//     $.each($children, function (k, v) {
//       if (k > display) {
//         $(this).addClass("hidden");
//       } else {
//         $(this).removeClass("hidden");
//       }
//     });
//   }
//   $("#pagination #view-more").click(function () {
//     display += display;
//     if (display > $children.length) {
//       $("#pagination #view-more").hide();
//     }
//     redraw();
//   });

//   $(".game-screenshot-carousel").owlCarousel({
//     items: 4,
//     margin: 10,
//     dots: false,
//     nav: false,
//     loop: false,
//     autoplay: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//       0: {
//         items: 4,
//       },
//       600: {
//         items: 6,
//       },
//       1000: {
//         items: 8,
//       },
//     },
//   });
//   $('.pop-up').magnificPopup({
//     type: 'iframe'
//   });
// })(jQuery);

// $(document).ready(function () {
//   $(".hamburger-menu-wrapper").click(function () {
//     $(".nav-wrapper").slideToggle();
//   });
// });

(function ($) {
  $(".hamburger-menu").click(function () {
    $(".nav-wrapper").addClass("show");
  });

  $(".mobile-menu-close").click(function () {
    $(".nav-wrapper").removeClass("show");
  });

  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
});
})(jQuery);
