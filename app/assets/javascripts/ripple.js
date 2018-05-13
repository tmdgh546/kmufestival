  var LivereTower=function(){"use strict";function serial(a){return a+"-"+Math.floor(1e3*Math.random())}function addEventListener(a,b){return window.addEventListener?window.addEventListener(a,b):window.attachEvent("on"+a,b)}function removeEventListener(a,b){return window.removeEventListener?window.removeEventListener(a,b):window.detachEvent("on"+a,b)}function isMobile(){var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a}function postMessage(a,b){if(a&&b&&!isRestrictIEVersion(7))return a.postMessage(JSON.stringify(b),"*")}function animateScroll(a,b){function c(a){return a>=offset()}function d(a){return a<=offset()}function e(){return clearInterval(get("timer"))}set("timer",setInterval(function(){return(b?c(a):d(a))?(clearInterval(get("timer")),set("timer",null)):(setTimeout(e,1e3),window.scrollTo(0,b?offset()-100:offset()+100))},1))}function isRestrictIEVersion(a){if(a){var b=(get("browser")?get("browser"):setBrowser()).split(" ")[0],c=Number(get("browser").split(" ")[1]);return"MSIE"===b&&!(c&&c>a)}}function setBrowser(){return set("browser",function(){var a,b=navigator.userAgent,c=b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(c[1])?(a=/\brv[ :]+(\d+)/g.exec(b)||[],"IE "+(a[1]||"")):"Chrome"===c[1]&&null!=(a=b.match(/\bOPR\/(\d+)/))?"Opera "+a[1]:(c=c[2]?[c[1],c[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(a=b.match(/version\/(\d+)/i))&&c.splice(1,1,a[1]),c.join(" "))}())}function isObjectPropertiesNull(a){for(var b in a)if("string"!=typeof b||!a[b]&&0!==a[b])return!0;return!1}function hasProtocol(a){return new RegExp("^(http|https)://","i").test(a)}function search(a,b,c){return a<1?c:"object"==typeof c?search(a-1,b,c[b[b.length-a]]):void 0}function get(a){var b=variables[a],a=a.split(".");return"object"==typeof a&&a.length>1&&(b=search(a.length,a,variables)),b}function set(a,b){if("object"!=typeof a||b)return variables[a]=b,get(a);for(var c in a)variables[c]=a[c]}function warning(a){console.log(["WARN: ",a].join(""))}function error(a){throw["ERROR: ",a].join("")}function template(a,b){var c=["comment","sidebar","check"];if(a&&!(c.indexOf(a)<0))return function(a,b){var c=document.createElement("iframe"),d=get("baseURI")+a+"/"+b.id;return c.title="livere",c.scrolling="no",c.async=!0,c.frameBorder=0,c.allowTransparency="true",c.src="check"===a?"https://101.livere.co.kr/html/systemCheck.html":concatURI(d,b,!0),isRestrictIEVersion(7)&&(c.scrolling="auto",c.height="1000px"),c}(a,b)}function concatURI(a,b,c){var d="?";for(var e in b)b[e]&&(d+="?"!==d?"&":"",d+=e+"="+encodeURIComponent(b[e]));return a+d+(c?"":"callback=?")}function offset(){return window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop}function getCommentOffset(){var a=get("lv_comment"),b=a.ownerDocument,c=b.documentElement,d=a.getBoundingClientRect(),e=b.body,f=window,g=c.clientTop||e.clientTop||0,h=c.clientLeft||e.clientLeft||0,i=f.pageYOffset||e.scrollTop,j=f.pageXOffset||e.scrollLeft;return{top:d.top+i-g,left:d.left+j-h}}function getPosition(a){for(var b=0,c=0;a;){if("BODY"==a.tagName){var d=a.scrollLeft||document.documentElement.scrollLeft,e=a.scrollTop||document.documentElement.scrollTop;b+=a.offsetLeft-d+a.clientLeft,c+=a.offsetTop-e+a.clientTop}else b+=a.offsetLeft-a.scrollLeft+a.clientLeft,c+=a.offsetTop-a.scrollTop+a.clientTop;a=a.offsetParent}return{x:b,y:c}}var livere={},widget={},config={},variables={};return livere.__version__="9.1",livere.init=function(){return isRestrictIEVersion(9)?config.previousVersion.call(this):location.search.indexOf("redirectOrigin=true")>-1?widget.oauth.call(this):livere.start.call(this)},livere.start=function(){livere.attachEvents.call(this),set({baseURI:"https://livere.me/",mobile:isMobile(),common:config.parse()});var a=window.livereOptions||{},b=a.components||["comment","sidebar"];return livere.load(isRestrictIEVersion(7)?["comment"]:b)},livere.attachEvents=function(){var a={comment:{requestCustomLivereOption:function(a,b){widget.comment.sendCustomLivereOption()},loaded:function(a,b){widget.comment.resize(a,b.height),widget.comment.updateParams(),widget.comment.insertTaboola(b.taboola)},resize:function(a,b){return widget.comment.resize(a,b.height)},highlight:function(a,b){return widget.comment.highlight(a,b.top)},attached:function(){return addEventListener("scroll",widget.comment.parentHeight),widget.comment.parentHeight()},detached:function(){return removeEventListener("scroll",widget.comment.parentHeight)},scrollTo:function(a,b){var c=get("lv_comment").offsetTop,d=c+b.position;return window.scrollTo(0,Math.abs(d)-50)},scrollToQuotation:function(a,b){var c=get("lv_comment").offsetTop,d=get("quotation"),e=b.direction;return e?(set("quotation",offset()),offset()>5e3?window.scrollTo(0,c):animateScroll(c,e)):d>5e3?window.scrollTo(0,d):animateScroll(d,e)},sidebar:function(a,b){return widget.sidebar.open(b)},openCardReplyPopup:function(a,b){return widget.sidebar.openCardReplyPopup(b)},actionSuccess:function(a,b){return widget.sidebar.actionSuccess(b)},deleteSuccess:function(a,b){return widget.sidebar.deleteSuccess(b)},hooker:function(a,b){var c=window.livereHooks;if(c){var d={common:function(a){return c[b.type]?c[b.type].call(this,a):null},created:function(a){return d.common(a)},write:function(a){return d.common(a)},modify:function(a){return d.common(a)},remove:function(a){return d.common(a)},like:function(a){return d.common(a)},dislike:function(a){return d.common(a)}};return d[b.type]?d[b.type].call(this,b.data):null}}},sidebar:{inited:function(b,c){return a.sidebar.hooker(b,c)},fail:function(){return a.sidebar.close(this)},state:function(){return widget.comment.state()},close:function(a){return widget.sidebar.close()},updateBlock:function(a,b){return widget.comment.updateBlock(b)},closeCardReplyPopup:function(a,b){return widget.sidebar.closeCardReplyPopup()},requestAction:function(a,b){return widget.comment.requestAction(b)},requestDeleteReply:function(a,b){return widget.comment.requestDeleteReply(b)},hooker:function(a,b){var c=window.livereHooks;if(c){var d={inited:function(a){return c.sidebarInit?c.sidebarInit.call(this,a):null}};return d[b.type]?d[b.type].call(this,b.data):null}}},utils:{hooker:function(a,b){var c=window.livereHooks;if(c){var d={loginData:function(a){return c.loginData?c.loginData.call(this,a):null},sessionData:function(a){return c.sessionData?c.sessionData.call(this,a):null}};return d[b.type]?d[b.type].call(this,b.data):null}},livereLoggedIn:function(){return widget.sidebar.getLoginData()},cityLoggedIn:function(){return widget.sidebar.getCurrentSessionData()}},popup:{image:function(a,b){return widget.sidebar.image(b)}}};return addEventListener("message",function(b){if(b.data&&"string"==typeof b.data&&b.data.match(/^{.*}$/g)){var c=JSON.parse(b.data),d=a[c.caller];return!!d&&d[c.e](c.caller,c.params)}})},livere.load=function(a){var b=get("common");if(!(!a instanceof Array))for(var c=0;c<a.length;c++)widget[a[c]]&&widget[a[c]].draw(template(a[c],b))},widget.check=function(){var a={};return a.draw=function(a){if(console.log(a),a){var b=serial("lv-check");a.style.cssText="min-width:100%;width:100px;*width:100%;height:250px;overflow:hidden;border:0;z-index:124212;",a.id=b,document.getElementById("lv-container").appendChild(a)}},a}(),widget.comment=function(){var a={};return a.state=function(){var a=get("lv_comment");if(a)return postMessage(a.contentWindow,{e:"state"})},a.updateBlock=function(a){return postMessage(get("lv_comment").contentWindow,{e:"updateBlock",params:a})},a.highlight=function(a,b){var c=get("lv_comment").offsetTop;return window.scrollTo(0,c+b)},a.parentHeight=function(a){var b=offset()-getCommentOffset().top+30,c=document.documentElement.clientHeight,d=c/2;return postMessage(get("lv_comment").contentWindow,{e:"position",params:{top:b>0?b:0,center:b>0?b+d:d,bottom:c+offset()-100}})},a.draw=function(a){function b(a){return set("lv_comment",document.getElementById(a))}if(a){var c=serial("lv-comment");return a.style.cssText="min-width:100%;width:100px;*width:100%;height:500px;overflow:hidden;border:0;z-index:124212;",a.id=c,document.getElementById("lv-container").appendChild(a),b(c)}},a.resize=function(a,b){return get("lv_comment").style.height=b+40+"px"},a.updateParams=function(){var a=document.querySelector('meta[property="og:description"]');if(a&&a.content)return postMessage(get("lv_comment").contentWindow,{e:"updateParams",params:{description:a.content}})},a.sendCustomLivereOption=function(){var a=window.livereOptions;return postMessage(get("lv_comment").contentWindow,{e:"getCustomLivereOption",params:{options:a}})},a.insertTaboola=function(a){if(a&&void 0!==a.status&&!a.status){var b="taboola-livere";window._taboola=window._taboola||[],_taboola.push({article:"auto"}),function(a,b,c,d){document.getElementById(d)||(a.async=1,a.src=c,a.id=d,b.parentNode.insertBefore(a,b))}(document.createElement("script"),document.getElementsByTagName("script")[0],"//cdn.taboola.com/libtrc/"+a.accountId+"/loader.js","tb_loader_script"),window.performance&&"function"==typeof window.performance.mark&&window.performance.mark("tbl_ic");var c=document,d=c.querySelector("#lv-container"),e=c.createElement("div");e.id=b,d.parentNode.insertBefore(e,d.nextSibling),window._taboola=window._taboola||[],_taboola.push({mode:"thumbnails-a",container:b,placement:a.placement,target_type:"mix"}),window._taboola=window._taboola||[],_taboola.push({flush:!0})}},a.updateBlock=function(a){return postMessage(get("lv_comment").contentWindow,{e:"updateBlock",params:a})},a.requestAction=function(a){return postMessage(get("lv_comment").contentWindow,{e:"requestAction",params:a})},a.requestDeleteReply=function(a){return postMessage(get("lv_comment").contentWindow,{e:"requestDeleteReply",params:a})},a.emitPositionEvent=function(a){var b=get("lv_comment");if(b){var c=getPosition(b);return postMessage(b.contentWindow,{e:"scroll",params:{relativeX:c.x,relativeY:c.y,screenHeight:window.innerHeight}})}},a}(),widget.sidebar=function(){var a={};return a.open=function(a){function b(a){var b=get("lv_utils");return b.style.height="100%",b.style.display="block",postMessage(b.contentWindow,{e:"open",params:a})}function c(a){var b=get("common.id"),c="https://livere.me/sidebar/"+b;if(!a)return location.href=c;var d=concatURI(c,{uid:a.uid,member_group_seq:a.member_group_seq,path:a.path},!0);return location.href=d}return(get("mobile")?c:b).call(this,a)},a.image=function(a){var b=get("lv_utils");return b.style.display="block",postMessage(b.contentWindow,{e:"image",params:a})},a.draw=function(b){function c(a){return set("lv_utils",document.getElementById(a))}if(b){var d=serial("lv-utils");return b.style.cssText="width:100%;overflow:hidden;border:0;position:fixed;left:0;top:0;z-index:2147483647;display:none",b.style.height=document.documentElement.clientHeight+"px",b.id=d,document.getElementsByTagName("body")[0].appendChild(b),a.attachEvent(),c(d)}},a.openCardReplyPopup=function(a){var b=get("lv_utils");return b.style.display="block",postMessage(b.contentWindow,{e:"openCardReplyPopup",params:a})},a.closeCardReplyPopup=function(a){get("lv_utils").style.display="none"},a.actionSuccess=function(a){return postMessage(get("lv_utils").contentWindow,{e:"actionSuccess",params:a})},a.deleteSuccess=function(a){var b=get("lv_utils");return b.style.display="none",postMessage(b.contentWindow,{e:"deleteSuccess",params:a})},a.attachEvent=function(){addEventListener("resize",widget.sidebar.resize)},a.resize=function(){var a=get("lv_utils"),b=document.documentElement.clientHeight;a.style.height=b+"px",postMessage(a.contentWindow,{e:"resize",params:{height:b}})},a.close=function(){return get("lv_utils").style.display="none",removeEventListener("resize",widget.sidebar.resize)},a.getLoginData=function(){return postMessage(get("lv_utils").contentWindow,{e:"loginData"})},a.getCurrentSessionData=function(){return postMessage(get("lv_utils").contentWindow,{e:"sessionData"})},a}(),widget.oauth=function(){!function(a,b){var c,d=a.getElementsByTagName(b)[0];c=a.createElement(b),c.src="https://api-city.livere.com/smartlogin",c.async=!0,d.parentNode.insertBefore(c,d)}(document,"script")},config.previousVersion=function(){return Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1}),function(){var a=document.createStyleSheet(),b=function(b,c){var d,e=document.all,f=e.length,g=[];for(a.addRule(b,"foo:bar"),d=0;d<f&&!("bar"===e[d].currentStyle.foo&&(g.push(e[d]),g.length>c));d+=1);return a.removeRule(0),g};document.querySelectorAll||document.querySelector||(document.querySelectorAll=function(a){return b(a,1/0)},document.querySelector=function(a){return b(a,1)[0]||null})}(),"object"!=typeof JSON&&(JSON={}),function(){function f(a){return a<10?"0"+a:a}function this_value(){return this.valueOf()}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;c<f;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;c<f;c+=1)"string"==typeof rep[c]&&(d=rep[c],(e=str(d,i))&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i))&&g.push(quote(d)+(gap?": ":":")+e);return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;d<c;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),livere.start.call(this)},config.parse=function(){var a=document,b=a.querySelector("#lv-container"),c=window.livereOptions||{};if(b){var d=a.querySelector('meta[property="og:image"]'),e=a.querySelector('meta[property="og:title"]'),f=a.querySelector('meta[property="og:url"]'),g=location.hash,h=g.match(/#highlight-comment=([0-9]{1,})/),i={id:b.getAttribute("data-id"),refer:c.refer||window.refer||location.host+location.pathname};if(!isObjectPropertiesNull(i))return i.uid=b.getAttribute("data-uid")||null,i.site=c.site||(f?f.getAttribute("content"):location.href),i.title=(e?e.getAttribute("content"):document.title)||"Welcome to the black parade",i.logo=d?d.getAttribute("content"):null,i.highlightSeq=h?h[h.length-1]:null,i.redirectOrigin=c.redirectOrigin||null,i.title=i.title.replace(/\"/g,"竊�").replace(/\'/g,"竊�"),c.facebookPageId&&c.facebookUploadUrl&&(i.facebookPageId=c.facebookPageId,i.facebookUploadUrl=c.facebookUploadUrl),i}},addEventListener("scroll",widget.comment.emitPositionEvent),livere.get=get,livere.set=set,livere.refresh=function(){return widget.comment.state()},livere.common={utils:{open:function(){return widget.sidebar.open()},getLoginData:function(){return widget.sidebar.getLoginData()},getCurrentSessionData:function(){return widget.sidebar.getCurrentSessionData()}}},livere}();LivereTower.init();
