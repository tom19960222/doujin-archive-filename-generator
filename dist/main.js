parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"M2pF":[function(require,module,exports) {
var define;
var t;!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof t&&t.amd?t(n):e.dayjs=n()}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",h="date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(f){return{M:u,y:o,w:s,d:i,D:h,h:r,m:n,s:e,ms:t,Q:a}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},v=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},D=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=v,g.i=m,g.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=v(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return D(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<D(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var f=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(f.$u?Date.UTC(f.$y,e,t):new Date(f.$y,e,t),f);return c?n:n.endOf(i)},l=function(t,e){return g.w(f.toDate()[t].apply(f.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),f)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var D=this.$locale().weekStart||0,S=(y<D?y+7:y)-D;return $(c?m-S:m+(6-S),M);case i:case h:return l(v+"Hours",0);case r:return l(v+"Minutes",1);case n:return l(v+"Seconds",2);case e:return l(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var f,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(f={},f[i]=d+"Date",f[h]=d+"Date",f[u]=d+"Month",f[o]=d+"FullYear",f[r]=d+"Hours",f[n]=d+"Minutes",f[e]=d+"Seconds",f[t]=d+"Milliseconds",f)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(h,1);y.$d[$](l),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var h,f=this;t=Number(t);var c=g.p(a),d=function(e){var n=D(f);return g.w(n.date(n.date()+Math.round(e*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[n]=6e4,h[r]=36e5,h[e]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,h=i.months,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:f(i.monthsShort,a,h,3),MMMM:f(h,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,h,f){var c,d=g.p(h),$=D(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,f?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return D.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",h]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),D.extend=function(t,e){return t(e,S,D),D},D.locale=v,D.isDayjs=m,D.unix=function(t){return D(1e3*t)},D.en=M[y],D.Ls=M,D.p={},D});
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=t(require("dayjs"));function t(e){return e&&e.__esModule?e:{default:e}}var n,o,r,a=["(同人ゲーム)","(18禁ゲーム)","(同人アニメ)","(18禁アニメ)"],l="filename-generator-prefix-dropdown",d="filename-generator-generated-filename",u=function(){var t,n,o,r,a,l,d,u,c=null!==(t=null===(n=document.querySelector("#work_maker > tbody > tr > td > span > a"))||void 0===n?void 0:n.textContent)&&void 0!==t?t:"",i=null!==(o=null===(r=document.querySelector("#work_name"))||void 0===r?void 0:r.textContent)&&void 0!==o?o:"",m=null!==(a=null===(l=document.URL.match(new RegExp("RJ[0-9]+.html"))[0])||void 0===l?void 0:l.replace(/\.html/g,""))&&void 0!==a?a:"",v=null!==(d=null===(u=document.querySelector("#work_outline > tbody > tr:nth-child(1) > td > a"))||void 0===u?void 0:u.textContent)&&void 0!==d?d:"";return{makerName:c,saleDate:""!==v?(0,e.default)(v.replace(/(年|月|日)/g,"-").substr(0,"YYYY-MM-DD".length),"YYYY-MM-DD"):(0,e.default)(),workName:i,workId:m}},c=function(){var e,t=document.createElement("select");return a.forEach(function(e){var n=document.createElement("option");n.innerText=e,t.appendChild(n)}),t.id=l,t.value=null!==(e=null==a?void 0:a[0])&&void 0!==e?e:"",t.onchange=v,t},i=function(){var e=document.createElement("input");return e.type="text",e.id=d,e.style.width="700px",e.style.height="auto",e},m=function(e,t){var n=e.saleDate.format("YYMMDD");return"".concat(t," [").concat(n,"][").concat(e.workId,"][").concat(e.makerName,"] ").concat(e.workName)},v=function(){r.value=m(u(),o.value)},p=function(){n=document.createElement("div"),o=c(),r=i(),n.appendChild(o),n.appendChild(r),v(),document.querySelector("#top_wrapper").appendChild(n)};document.URL.match(/maniax\/work\/=\/product_id\/RJ[0-9]+.html/)&&p();
},{"dayjs":"M2pF"}]},{},["epB2"], null)
//# sourceMappingURL=/main.js.map