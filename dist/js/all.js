"use strict";!function(r,e){var t,i=r.document,a=i.documentElement,n=i.querySelector('meta[name="viewport"]'),o=i.querySelector('meta[name="flexible"]'),l=0,s=0,d=e.flexible||(e.flexible={});if(o){var m=o.getAttribute("content");if(m){var c=m.match(/initial\-dpr=([\d\.]+)/),p=m.match(/maximum\-dpr=([\d\.]+)/);c&&(l=parseFloat(c[1]),s=parseFloat((1/l).toFixed(2))),p&&(l=parseFloat(p[1]),s=parseFloat((1/l).toFixed(2)))}}if(!l&&!s){r.navigator.appVersion.match(/android/gi),r.navigator.appVersion.match(/iphone/gi);var f=r.devicePixelRatio;s=1/(l=3<=f&&(!l||3<=l)?3:2<=f&&(!l||2<=l)?2:1)}if(a.setAttribute("data-dpr",l),(n=i.createElement("meta")).setAttribute("name","viewport"),n.setAttribute("content","width=device-width, initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(n);else{var u=i.createElement("div");u.appendChild(n),i.write(u.innerHTML)}function v(){var e=a.getBoundingClientRect().width;540<e/l&&(e=540*l);var t=e/10;a.style.fontSize=t+"px",d.rem=r.rem=t;var i=parseFloat(a.style.fontSize),n=parseFloat(window.getComputedStyle(a).getPropertyValue("font-size"));console.log("flexible.refreshRem: fontSize && finalFontSize => ",i,n),i!==n&&(a.style.fontSize=i*(i/n)+"px",console.log("flexible.refreshRem.fixed: fontSize  => ",a.style.fontSize))}r.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(v,300)},!1),r.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(v,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*l+"px":i.addEventListener("DOMContentLoaded",function(e){i.body.style.fontSize=12*l+"px"},!1),v(),d.dpr=r.dpr=l,d.refreshRem=v,d.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}));var abb=function(){return 1},d=function(){return 2},c=function(){};d=function(){};