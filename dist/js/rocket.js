"use strict";function clickReset(){oRocket.style.top="",oRocket.classList.remove("rocket_run"),scrollTo(1e4,1e3),oRocket.style="",window.addEventListener("scroll",showRocket),oRocket.removeEventListener("click",clickRocket),oReset.removeEventListener("click",clickReset)}function clickRocket(){window.removeEventListener("scroll",showRocket),scrollTo(0,1e3),rocketFly("1s"),oRocket.removeEventListener("click",clickRocket),oReset.removeEventListener("click",clickReset),oRocket.classList.add("rocket_run")}function scrollTo(e,o){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,c=document.querySelector("body").offsetHeight-t,l=document.documentElement.scrollTop||document.body.scrollTop,n=o/30,r=0;e>c&&(e=c);var s=(e-l)/n;console.log("start"),scroll_timer=setInterval(function(){console.log(++r),l=document.documentElement.scrollTop||document.body.scrollTop;var o=e-l;Math.abs(o)>Math.abs(s)?null!=document.documentElement.scrollTop?document.documentElement.scrollTop+=s:document.body.scrollTop+=s:(console.log("end123"),document.documentElement.scrollTop?document.documentElement.scrollTop+=o:document.body.scrollTop+=o,clearInterval(scroll_timer),oRocket.addEventListener("click",clickRocket),oReset.addEventListener("click",clickReset))},30)}function showRocket(){var e=document.documentElement.scrollTop||document.body.scrollTop;oRocket.style.transform=e>400?"scale(1)":" scale(0)"}function rocketFly(e){oRocket.style.transition=e+" linear",oRocket.style.top="-30%"}function getStyle(e,o){return e.currentStyle?e.currentStyle[o]:getComputedStyle(e,!1)[o]}var oRocket=document.querySelector(".rocket"),oBody=document.querySelector("body"),oReset=document.querySelector("#reset_rocket"),scroll_timer=null;oRocket.style.transform=" scale(0)",oReset.addEventListener("click",clickReset),window.addEventListener("scroll",showRocket),oRocket.addEventListener("click",clickRocket);