/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-bgsizecover-borderradius-boxshadow-cssanimations-cssgradients-csspositionsticky-csstransforms-csstransitions-fontface-input-inputtypes-lastchild-mediaqueries-nthchild-opacity-rgba-svg-userdata-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function s(){var e,t,n,s,r,o,a;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],t=x[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=i(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)o=e[r],a=o.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function r(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?w.className.baseVal=t:w.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=o(T?"svg":"body"),e.fake=!0),e}function l(e,n,i,s){var r,l,d,u,f="modernizr",c=o("div"),p=a();if(parseInt(i,10))for(;i--;)d=o("div"),d.id=s?s[i]:f+(i+1),c.appendChild(d);return r=o("style"),r.type="text/css",r.id="s"+f,(p.fake?p:c).appendChild(r),p.appendChild(c),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),l=n(c,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):c.parentNode.removeChild(c),!!l}function d(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var s;for(var r in e)if(e[r]in t)return n===!1?e[r]:(s=t[e[r]],i(s,"function")?f(s,n||t):s);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,i){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(t[s]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];s--;)r.push("("+p(t[s])+":"+i+")");return r=r.join(" or "),l("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,s,r){function a(){f&&(delete q.style,delete q.modElem)}if(r=i(r,"undefined")?!1:r,!i(s,"undefined")){var l=m(e,s);if(!i(l,"undefined"))return l}for(var f,c,p,h,g,v=["modernizr","tspan"];!q.style;)f=!0,q.modElem=o(v.shift()),q.style=q.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],g=q.style[h],d(h,"-")&&(h=u(h)),q.style[h]!==n){if(r||i(s,"undefined"))return a(),"pfx"==t?h:!0;try{q.style[h]=s}catch(y){}if(q.style[h]!=g)return a(),"pfx"==t?h:!0}return a(),!1}function g(e,t,n,s,r){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(o+" ")+o).split(" ");return i(t,"string")||i(t,"undefined")?h(a,t,s,r):(a=(e+" "+O.join(o+" ")+o).split(" "),c(a,t,n))}function v(e,t,i){return g(e,n,n,t,i)}var y=[],x=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var w=t.documentElement,T="svg"===w.nodeName.toLowerCase();Modernizr.addTest("userdata",!!o("div").addBehavior),Modernizr.addTest("rgba",function(){var e=o("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var C=o("input"),S="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),k={};Modernizr.input=function(t){for(var n=0,i=t.length;i>n;n++)k[t[n]]=!!(t[n]in C);return k.list&&(k.list=!(!o("datalist")||!e.HTMLDataListElement)),k}(S);var _="search tel url email datetime date month week time datetime-local number range color".split(" "),z={};Modernizr.inputtypes=function(e){for(var i,s,r,o=e.length,a="1)",l=0;o>l;l++)C.setAttribute("type",i=e[l]),r="text"!==C.type&&"style"in C,r&&(C.value=a,C.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&C.style.WebkitAppearance!==n?(w.appendChild(C),s=t.defaultView,r=s.getComputedStyle&&"textfield"!==s.getComputedStyle(C,null).WebkitAppearance&&0!==C.offsetHeight,w.removeChild(C)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?C.checkValidity&&C.checkValidity()===!1:C.value!=a)),z[e[l]]=!!r;return z}(_);var E=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=E,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",s=0,r=E.length-1;r>s;s++)e=0===s?"to ":"",i+=t+E[s]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var a=o("a"),l=a.style;return l.cssText=i,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=o("a").style;return e.cssText=E.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=o("a"),i=n.style;return i.cssText=e+E.join(t+";"+e).slice(0,-e.length),-1!==i.position.indexOf(t)});var N=b.testStyles=l,A=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,s=533>t&&e.match(/android/gi);return n||s||i}();A?Modernizr.addTest("fontface",!1):N('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,r=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"",o=/src/i.test(r)&&0===r.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",o)}),N("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),N("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5);var P=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();b.mq=P,Modernizr.addTest("mediaqueries",P("only all"));var R="Moz O ms Webkit",j=b._config.usePrefixes?R.split(" "):[];b._cssomPrefixes=j;var O=b._config.usePrefixes?R.toLowerCase().split(" "):[];b._domPrefixes=O;var $={elem:o("modernizr")};Modernizr._q.push(function(){delete $.elem});var q={style:$.elem.style};Modernizr._q.unshift(function(){delete q.style}),b.testAllProps=g,b.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("bgsizecover",v("backgroundSize","cover")),Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",v("boxShadow","1px 1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",v("transition","all",!0)),s(),r(y),delete b.addTest,delete b.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);