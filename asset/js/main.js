$(function(){

    // 닫기 사라지기
    $('.sc-notice .close').click(function () {
        $('.sc-notice').hide();
    })

    // 메뉴호버
    $('.menu-area .show').hover(function(){
        $('.hide-menu').stop().slideDown();
    }, function(){
        $('.hide-menu').stop().slideUp();
    })
    
    // $('.menu-area .show').hover(function(){
    //     $('hide-menu').addClass('active')
    // })

    // 버튼 클릭시 관련사이트 나오기
    $('.tab-area .button').click(function(){
        $('.tab-list').stop().slideUp();
    }, function(){
        $('.tab-list').stop().slideDown();
    })
    
    
    // $('.tab-area .button').click(function(e){
    //     e.preventDefault();
    //     $('.gnb').addClass('on');
    // });
    // $('.tab-area .button').click(function(e){
    //     e.preventDefault();
    //     $('.gnb').removeClass('on');
    // });

    


// 메인슬라이드
    var mainslide = new Swiper(".mainslide", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop:true,
    });



// 두번째 슬라이드
    var midslide = new Swiper(".midslide", {
        slidesPerView: "1.1",
        spaceBetween: 30,
    });
//세번째 슬라이드
    var lastslide = new Swiper(".lastslide", {
        slidesPerView: "3",
        spaceBetween: 30,
    });


});