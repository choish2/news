$('header nav li').click(function(){
    // $('header nav li').removeClass('on')
    // $(this).addClass('on')
    $(this).addClass('on').siblings().removeClass('on')
}) 

    $(window).scroll(function(){
        console.log( $(window).scrollTop() )
    
        // if($(window).scrollTop() > 5 ){
        //     $('.top').fadeIn()
        // }
        // if($(window).scrollTop() <= 0 ){
        //     $('.top').fadeOut()   
        // }

        if($(window).scrollTop() > 136 ){
            $('.header .menubar').addClass('on')
        }
        if($(window).scrollTop() <=136 ){
            $('.header .menubar').removeClass('on')
        }
    })

    $('.header .menubar ul li a').click(function(){

        var subin = $(this).attr('href')  //footer
        var yeeun = $('.' + subin).offset().top;
        $('html').animate({scrollTop:yeeun})

        return false;
      })

      $('#wrap .top').click(function(){ 
        $('html').animate({scrollTop:'0'})

        return false;
      })

