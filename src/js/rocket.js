let oRocket = document.querySelector('.rocket');
let oBody = document.querySelector('body');
let oReset = document.querySelector('#reset_rocket');
let scroll_timer = null;

oRocket.style.transform = ' scale(0)';



oReset.addEventListener('click', clickReset);


window.addEventListener('scroll', showRocket);



oRocket.addEventListener('click', clickRocket);

function clickReset() {
    oRocket.style.top = '';
    oRocket.classList.remove('rocket_run');
    scrollTo(10000, 1000);
    oRocket.style = '';
    window.addEventListener('scroll', showRocket);

    oRocket.removeEventListener('click', clickRocket);
    oReset.removeEventListener('click', clickReset);
}

function clickRocket() {
    window.removeEventListener('scroll', showRocket);
    scrollTo(0, 1000);
    rocketFly('1s');
    oRocket.removeEventListener('click', clickRocket);
    oReset.removeEventListener('click', clickReset);
    oRocket.classList.add('rocket_run');
}

function scrollTo(target, time) {
    let browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let max_distance = document.querySelector('body').offsetHeight - browserHeight;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    let frame_interval = 30;
    let times = time / frame_interval;
    let count = 0;
    

    if (target > max_distance) {
        target = max_distance;
    };

    let speed = (target - scrollTop) / times;


    console.log('start');

    scroll_timer = setInterval(() => {

        console.log(++count);

        scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let distance = target - scrollTop;


        if (Math.abs(distance) > Math.abs(speed)) {



            if (document.documentElement.scrollTop != null || undefined) {

                document.documentElement.scrollTop += speed;
            } else {

                document.body.scrollTop += speed;

            }

        } else {
            console.log('end123');

            if (document.documentElement.scrollTop) {
                document.documentElement.scrollTop += distance;
            } else {
                document.body.scrollTop += distance;
            }
            clearInterval(scroll_timer);
            oRocket.addEventListener('click', clickRocket);
            oReset.addEventListener('click', clickReset);
        }

    }, frame_interval)

}

function showRocket() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop > 400 ? oRocket.style.transform = 'scale(1)' : oRocket.style.transform = ' scale(0)';
}


function rocketFly(time) {

    oRocket.style.transition = `${time} linear`
    oRocket.style.top = '-30%'
}


function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}