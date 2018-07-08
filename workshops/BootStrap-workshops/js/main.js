'use strict';

$(function(){
    
    let servicesPos = $("#services").offset();
    
    $(window).scroll(function() {
        
        let winPos = $(window).scrollTop();
        
        if(winPos > servicesPos.top) {
            $('#main-nav').addClass('scroll');
        } else {
            $('#main-nav').removeClass('scroll');
        }           
    });
    
    let viewBtn = $('#view-more-btn');
    
    viewBtn.click(function(){
        $(window).scrollTop(servicesPos.top);
    });
        
});