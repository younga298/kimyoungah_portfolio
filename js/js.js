var swiper = new Swiper(".brandimg-text .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,

  pagination: {
    el: ".brandimg-text .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".brandimg-text .swiper-button-next",
    prevEl: ".brandimg-text .swiper-button-prev",
  },
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },
});


//brandimg slider

var swiper = new Swiper(".brandimg .mySwiper1", {
  direction: "vertical",

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});

//popup

$(document).ready(function () {

  // nav menu
  $('nav > ul > li').mouseenter(function () {
    $(`.sub-menu`).removeClass('active');

    const targetId = $(this).attr('data-target');

    $(`.sub-menu[data-id="${targetId}"]`).addClass('active');
  })

  // $('.sub-menu').mouseleave(function () {
  //   $(this).removeClass('active');
  // })


});


//popup 닫기


$(document).ready(function () {
  $('.navbtn ').click(function () {
    $('.popup').show();
  })
  $('.closebtn').click(function () {
    $('.popup').hide();
  })
});


//Circle

$(document).ready(function () {
  $('.img-box').mouseenter(function () {
    $(this).addClass('active');
  })

  $('.img-box').mouseleave(function () {
    $(this).removeClass('active')
  })
});

//header

$(document).ready(function () {
  let lastScrollTop = 0;
  const header = $('.main');

  $(window).scroll(function () {
    const currentScroll = $(this).scrollTop();

    if (currentScroll > lastScrollTop) {
      header.addClass('hidden');
    } else {
      header.removeClass('hidden');
    }

    lastScrollTop = currentScroll;
  })
});

//readmore-circle

$(document).ready(function () {
  $('.readmore').mouseenter(function () {
    $(this).addClass('active');
  })

  $('.readmore').mouseleave(function () {
    $(this).removeClass('active');
  })
});

//newsall

$(document).ready(function () {
  $('.container').mouseenter(function () {
    $(this).addClass('active');
  });
  $('.container').mouseleave(function () {
    $(this).removeClass('active');
  });
});


//.loading

$(document).ready(function () {
  $('.container').mouseenter(function () {
    $(this).addClass('active');
  });
  $('.container').mouseleave(function () {
    $(this).removeClass('active');
  })
});