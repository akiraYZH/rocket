let oRocket =$('.rocket');
let oReset = $('#reset_rocket');
let scroll_timer = null;

oRocket.css('transform', 'scale(0)');

oReset.on('click',clickReset);
oRocket.on('click',clickRocket);
$(window).on('scroll', showRocket);



function showRocket(){
    $(document).scrollTop()>400?oRocket.css('transform', 'scale(1)'):oRocket.css('transform', 'scale(0)');
}

function clickRocket() {
    $(window).unbind();
    oRocket.unbind();
    oReset.unbind();
    oRocket.animate({"top":-300},1000).addClass('rocket_run');
    $('html').animate({"scrollTop":0},1000,rebind);
    
}
function clickReset() {
    oRocket.unbind();
    oReset.unbind();
    oRocket.removeClass('rocket_run').css('top','');
    $('html').animate({"scrollTop":10000},1000,rebind);
    $(window).on('scroll', showRocket);
    
}

function rebind(){
    oReset.on('click',clickReset);
    oRocket.on('click',clickRocket);
}