/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function(t,n,e){"$:nomunge";function o(t){return"#"+(t=t||location.href).replace(/^[^#]*#?(.*)$/,"$1")}var i,r="hashchange",c=document,a=t.event.special,u=c.documentMode,f="on"+r in n&&(void 0===u||u>7);t.fn[r]=function(t){return t?this.bind(r,t):this.trigger(r)},t.fn[r].delay=50,a[r]=t.extend(a[r],{setup:function(){if(f)return!1;t(i.start)},teardown:function(){if(f)return!1;t(i.stop)}}),i=function(){function e(){var c=o(),a=l(u);c!==u?(d(u=c,a),t(n).trigger(r)):a!==u&&(location.href=location.href.replace(/#.*/,"")+a),i=setTimeout(e,t.fn[r].delay)}var i,a={},u=o(),s=function(t){return t},d=s,l=s;return a.start=function(){i||e()},a.stop=function(){i&&clearTimeout(i),i=void 0},void 0!==t.browser&&t.browser.msie&&!f&&function(){var n,i;a.start=function(){n||(i=t.fn[r].src,i=i&&i+o(),n=t('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){i||d(o()),e()}).attr("src",i||"javascript:0").insertAfter("body")[0].contentWindow,c.onpropertychange=function(){try{"title"===event.propertyName&&(n.document.title=c.title)}catch(t){}})},a.stop=s,l=function(){return o(n.location.href)},d=function(e,o){var i=n.document,a=t.fn[r].domain;e!==o&&(i.title=c.title,i.open(),a&&i.write('<script>document.domain="'+a+'"<\/script>'),i.close(),n.location.hash=e)}}(),a}()}(jQuery,this);