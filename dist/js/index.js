function setScreenAnimate(e){var s=document.querySelector(e),a=screenAnimateElements[e],n=!1,t=!1;s.onclick=function(){if(n===!1){for(var e=0;e<a.length;e++){var s=document.querySelector(a[e]),_=s.getAttribute("class");s.setAttribute("class",_+" "+a[e].substr(1)+"_animate_init")}return void(n=!0)}if(t===!1){for(var e=0;e<a.length;e++){var s=document.querySelector(a[e]),_=s.getAttribute("class");s.setAttribute("class",_.replace("_animate_init","_animate_done"))}return void(t=!0)}if(t===!0){for(var e=0;e<a.length;e++){var s=document.querySelector(a[e]),_=s.getAttribute("class");s.setAttribute("class",_.replace("_animate_done","_animate_init"))}return void(t=!1)}}}var getByClass=function(e){return document.getElementsByClassName(e)},addClass=function(e,s){for(var a=e.className.split(" "),n={},t=0;t<a.length;t++)n[a[t]]=1;n[s]=1,a=[];for(t in n)a.push(t);e.className=a.join(" ")},removeClass=function(e,s){for(var a=e.className.split(" "),n={},t=0;t<a.length;t++)n[a[t]]=1;delete n[s],a=[];for(t in n)a.push(t);e.className=a.join(" ")};window.onload=function(e){addClass(getByClass("header")[0],"header_active_1"),addClass(getByClass("screen-1__heading")[0],"screen-1__heading_animate_done"),addClass(getByClass("screen-1__phone")[0],"screen-1__phone_animate_done"),addClass(getByClass("screen-1__shadow")[0],"screen-1__shadow_animate_done"),addClass(getByClass("screen-2__heading")[0],"screen-2__heading_animate_init"),addClass(getByClass("screen-2__subheading")[0],"screen-2__subheading_animate_init"),addClass(getByClass("screen-2__phone")[0],"screen-2__phone_animate_init"),addClass(getByClass("screen-3__heading")[0],"screen-3__heading_animate_init"),addClass(getByClass("screen-3__subheading")[0],"screen-3__subheading_animate_init"),addClass(getByClass("screen-3__phone")[0],"screen-3__phone_animate_init"),addClass(getByClass("screen-3__features")[0],"screen-3__features_animate_init"),getByClass("header__nav-item_i_1")[0].onclick=function(){document.body.scrollTop=0},getByClass("header__nav-item_i_2")[0].onclick=function(){document.body.scrollTop=740},getByClass("header__nav-item_i_3")[0].onclick=function(){document.body.scrollTop=1540},getByClass("header__nav")[0].onmouseout=function(){getByClass("header__nav-item-tip")[0].style.left=""},getByClass("header__nav-item_i_1")[0].onmouseover=function(){getByClass("header__nav-item-tip")[0].style.left="20px"},getByClass("header__nav-item_i_2")[0].onmouseover=function(){getByClass("header__nav-item-tip")[0].style.left="120px"},getByClass("header__nav-item_i_3")[0].onmouseover=function(){getByClass("header__nav-item-tip")[0].style.left="220px"}},window.onscroll=function(){var e=document.body.scrollTop;e<100?(getByClass("header")[0].setAttribute("class","header header_active_1"),removeClass(getByClass("header")[0],"header_status_black")):addClass(getByClass("header")[0],"header_status_black"),e<400?getByClass("outline")[0].style.opacity=0:(getByClass("outline")[0].style.opacity=1,getByClass("outline")[0].setAttribute("class","outline outline_active_1")),e>739&&(getByClass("header")[0].setAttribute("class","header header_status_black header_active_2"),removeClass(getByClass("screen-2__heading")[0],"screen-2__heading_animate_init"),removeClass(getByClass("screen-2__subheading")[0],"screen-2__subheading_animate_init"),removeClass(getByClass("screen-2__phone")[0],"screen-2__phone_animate_init"),addClass(getByClass("screen-2__heading")[0],"screen-2__heading_animate_done"),addClass(getByClass("screen-2__subheading")[0],"screen-2__subheading_animate_done"),addClass(getByClass("screen-2__phone")[0],"screen-2__phone_animate_done"),getByClass("outline")[0].setAttribute("class","outline outline_active_2")),e>1539&&(getByClass("header")[0].setAttribute("class","header header_status_black header_active_3"),removeClass(getByClass("screen-3__heading")[0],"screen-3__heading_animate_init"),removeClass(getByClass("screen-3__subheading")[0],"screen-3__subheading_animate_init"),removeClass(getByClass("screen-3__phone")[0],"screen-3__phone_animate_init"),removeClass(getByClass("screen-3__features")[0],"screen-3__features_animate_init"),addClass(getByClass("screen-3__heading")[0],"screen-3__heading_animate_done"),addClass(getByClass("screen-3__subheading")[0],"screen-3__subheading_animate_done"),addClass(getByClass("screen-3__phone")[0],"screen-3__phone_animate_done"),addClass(getByClass("screen-3__features")[0],"screen-3__features_animate_done"),getByClass("outline")[0].setAttribute("class","outline outline_active_3"))};var screenAnimateElements={".screen-1":[".screen-1__heading",".screen-1__phone",".screen-1__shadow"],".screen-2":[".screen-2__heading",".screen-2__subheading",".screen-2__phone",".screen-2__point_i_1",".screen-2__point_i_2",".screen-2__point_i_3"],".screen-3":[".screen-3__heading",".screen-3__subheading",".screen-3__phone"]};for(var k in screenAnimateElements);
//# sourceMappingURL=index.js.map