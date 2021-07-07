//ハンバーガーメニュー
$('.menu').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.header__nav-sp .gnav').fadeToggle();
});

//Swiper
var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {//自動再生
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
    },
    slidesPerView: '3',
    spaceBetween: 0,
    initialSlide: 2,
    //loopedSlides: 3,
    loop: true,//最初に戻る
  });