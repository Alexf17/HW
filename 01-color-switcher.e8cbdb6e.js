const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let l=null;t.disabled=!1,e.disabled=!0,t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),e.disabled=!1,l=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;d.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(l),t.removeAttribute("disabled"),e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.e8cbdb6e.js.map
