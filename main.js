(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(e){t(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):("string"!=typeof e&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var o=864e5;function i(e){t(1,arguments);var n=r(e),a=n.getUTCDay(),o=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function s(e){t(1,arguments);var n=r(e),a=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var s=i(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var d=i(u);return n.getTime()>=s.getTime()?a+1:n.getTime()>=d.getTime()?a:a-1}var u=6048e5;var d={};function c(){return d}function l(e,n){var o,i,s,u,d,l,m,f;t(1,arguments);var h=c(),g=a(null!==(o=null!==(i=null!==(s=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(d=n.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==s?s:h.weekStartsOn)&&void 0!==i?i:null===(m=h.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(e),y=v.getUTCDay(),w=(y<g?7:0)+y-g;return v.setUTCDate(v.getUTCDate()-w),v.setUTCHours(0,0,0,0),v}function m(e,n){var o,i,s,u,d,m,f,h;t(1,arguments);var g=r(e),v=g.getUTCFullYear(),y=c(),w=a(null!==(o=null!==(i=null!==(s=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(d=n.locale)||void 0===d||null===(m=d.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==s?s:y.firstWeekContainsDate)&&void 0!==i?i:null===(f=y.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==o?o:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(v+1,0,w),p.setUTCHours(0,0,0,0);var b=l(p,n),k=new Date(0);k.setUTCFullYear(v,0,w),k.setUTCHours(0,0,0,0);var T=l(k,n);return g.getTime()>=b.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}var f=6048e5;function h(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const g=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return h("yy"===e?r%100:r,e.length)},v=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):h(n+1,2)},y=function(t,e){return h(t.getUTCDate(),e.length)},w=function(t,e){return h(t.getUTCHours()%12||12,e.length)},p=function(t,e){return h(t.getUTCHours(),e.length)},b=function(t,e){return h(t.getUTCMinutes(),e.length)},k=function(t,e){return h(t.getUTCSeconds(),e.length)},T=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return h(Math.floor(r*Math.pow(10,n-3)),e.length)};var E={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g(t,e)},Y:function(t,e,n,r){var a=m(t,r),o=a>0?a:1-a;return"YY"===e?h(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):h(o,e.length)},R:function(t,e){return h(s(t),e.length)},u:function(t,e){return h(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return h(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return h(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return v(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return h(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,o,i){var s=function(e,n){t(1,arguments);var o=r(e),i=l(o,n).getTime()-function(e,n){var r,o,i,s,u,d,f,h;t(1,arguments);var g=c(),v=a(null!==(r=null!==(o=null!==(i=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(u=n.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==o?o:null===(f=g.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==r?r:1),y=m(e,n),w=new Date(0);return w.setUTCFullYear(y,0,v),w.setUTCHours(0,0,0,0),l(w,n)}(o,n).getTime();return Math.round(i/f)+1}(e,i);return"wo"===n?o.ordinalNumber(s,{unit:"week"}):h(s,n.length)},I:function(e,n,a){var o=function(e){t(1,arguments);var n=r(e),a=i(n).getTime()-function(e){t(1,arguments);var n=s(e),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),i(r)}(n).getTime();return Math.round(a/u)+1}(e);return"Io"===n?a.ordinalNumber(o,{unit:"week"}):h(o,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):y(t,e)},D:function(e,n,a){var i=function(e){t(1,arguments);var n=r(e),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=a-n.getTime();return Math.floor(i/o)+1}(e);return"Do"===n?a.ordinalNumber(i,{unit:"dayOfYear"}):h(i,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return h(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return h(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return h(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):k(t,e)},S:function(t,e){return T(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return C(a);case"XXXX":case"XX":return S(a);default:return S(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return C(a);case"xxxx":case"xx":return S(a);default:return S(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+D(a,":");default:return"GMT"+S(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+D(a,":");default:return"GMT"+S(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return h(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return h((r._originalDate||t).getTime(),e.length)}};function D(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+h(o,2)}function C(t,e){return t%60==0?(t>0?"-":"+")+h(Math.abs(t)/60,2):S(t,e)}function S(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+h(Math.floor(a/60),2)+n+h(a%60,2)}const j=E;var M=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},x=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},P={p:x,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return M(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",M(a,e)).replace("{{time}}",x(o,e))}};const L=P;var U=["D","DD"],I=["YY","YYYY"];function q(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var W={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function B(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var N,Y={date:B({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:B({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:B({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},F={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function O(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function A(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(u);return i=t.valueCallback?t.valueCallback(d):d,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(s.length)}}}const H={code:"en-US",formatDistance:function(t,e,n){var r,a=W[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Y,formatRelative:function(t,e,n,r){return F[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:O({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:O({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:O({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:O({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:O({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(N={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(N.matchPattern);if(!n)return null;var r=n[0],a=t.match(N.parsePattern);if(!a)return null;var o=N.valueCallback?N.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:A({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:A({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:A({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:A({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:A({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,X=/''/g,R=/[a-zA-Z]/;function J(n,o,i){var s,u,d,l,m,f,h,g,v,y,w,p,b,k,T,E,D,C;t(2,arguments);var S=String(o),M=c(),x=null!==(s=null!==(u=null==i?void 0:i.locale)&&void 0!==u?u:M.locale)&&void 0!==s?s:H,P=a(null!==(d=null!==(l=null!==(m=null!==(f=null==i?void 0:i.firstWeekContainsDate)&&void 0!==f?f:null==i||null===(h=i.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:M.firstWeekContainsDate)&&void 0!==l?l:null===(v=M.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==d?d:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=a(null!==(w=null!==(p=null!==(b=null!==(k=null==i?void 0:i.weekStartsOn)&&void 0!==k?k:null==i||null===(T=i.locale)||void 0===T||null===(E=T.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==b?b:M.weekStartsOn)&&void 0!==p?p:null===(D=M.locale)||void 0===D||null===(C=D.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==w?w:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var B=r(n);if(!function(n){if(t(1,arguments),!function(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(B))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(B),Y=function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var o=r(e).getTime(),i=a(n);return new Date(o+i)}(e,-a(n))}(B,N),F={firstWeekContainsDate:P,weekStartsOn:W,locale:x,_originalDate:B};return S.match(Q).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,L[e])(t,x.formatLong):t})).join("").match(z).map((function(t){if("''"===t)return"'";var e,r,a=t[0];if("'"===a)return(r=(e=t).match(G))?r[1].replace(X,"'"):e;var s,u=j[a];if(u)return null!=i&&i.useAdditionalWeekYearTokens||(s=t,-1===I.indexOf(s))||q(t,o,String(n)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==U.indexOf(t)}(t)||q(t,o,String(n)),u(Y,t,x.localize,F);if(a.match(R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}function $(e,n){t(2,arguments);var o=r(e),i=a(n);return isNaN(i)?new Date(NaN):i?(o.setDate(o.getDate()+i),o):o}class _{constructor(t,e,n,r,a,o){this.id=t,this.description=e,this.dueDate=n,this.priority=r,this.projectId=a,this.projectName=o}}function V(){const e=st.find((t=>t.id===rt));if(document.querySelector(".user-tasks").textContent="",null==rt||"1"==rt)st.forEach((t=>{t.projectTasks.forEach(((t,e)=>{ot(t,e)}))}));else if("today"==rt){let e=Date.parse(J(new Date,"yyyy-MM-dd"));st.forEach((n=>{n.projectTasks.forEach(((n,a)=>{(function(e,n){t(2,arguments);var a=r(e),o=r(n);return a.getTime()===o.getTime()})(Date.parse(n.dueDate),e)&&ot(n,a)}))}))}else"week"==rt?st.forEach((e=>{e.projectTasks.forEach(((e,n)=>{(function(e){let n=$(new Date,7),o=function(e,n){return t(2,arguments),$(e,-a(n))}(new Date,1);return function(e,n){t(2,arguments);var a=r(e).getTime(),o=r(n.start).getTime(),i=r(n.end).getTime();if(!(o<=i))throw new RangeError("Invalid interval");return a>=o&&a<=i}(e,{start:o,end:n})})(Date.parse(e.dueDate))&&ot(e,n)}))})):e.projectTasks.forEach(((t,e)=>{ot(t,e)}));!function(){const t=document.querySelectorAll(".edit-task-btn"),e=document.getElementById("editTaskForm");t.forEach((t=>{t.addEventListener("click",(t=>{it().showEditTaskForm();const n=t.target.dataset.taskProjectId,r=st.find((t=>t.id===n));at=t.target.dataset.taskId;const a=r.projectTasks.find((t=>t.id===at));let o=a.id,i=a.description,s=a.dueDate,u=a.priority,d=a.projectName;document.getElementById("editTaskDescription").setAttribute("value",i),document.getElementById("editTaskDueDate").setAttribute("value",s),document.getElementById("editPriorityLevel").value=u;const c=d,l=document.querySelector("#editTaskProject");Array.from(l.options).find((t=>t.text===c)).selected=!0,e.addEventListener("submit",(t=>{const e=document.querySelector("#editTaskDescription"),n=document.querySelector("#editTaskDueDate"),s=document.querySelector("#editPriorityLevel"),u=document.getElementById("editTaskProject");if(t.preventDefault(),null==i||""===i)return;const d={description:e.value,dueDate:n.value,priority:s.value,projectId:u.value,projectName:u.options[u.selectedIndex].id},c=a;if(u.value!==a.projectId){const t=new _(o,e.value,n.value,s.value,u.value,u.options[u.selectedIndex].id),i=st.find((t=>t.id===u.value));i.projectTasks.push(t);const d=r.projectTasks.filter((t=>t!=a));r.projectTasks=d,r.projectTasks;const c=[];for(const t of i.projectTasks)c.find((e=>e.id===t.id))||c.push(t);i.projectTasks=c}else Object.assign(c,d);document.getElementById("taskForm").reset(),V()}))}))}))}(),document.querySelectorAll(".remove-task-btn").forEach((t=>{t.addEventListener("click",(e=>{const n=e.target.dataset.taskProjectId;st.find((t=>t.id===n)).projectTasks.splice(t.getAttribute("data"),1),V()}))}))}const K=document.querySelector("[data-user-projects]"),Z=document.querySelector("[data-project-tasks]"),tt=document.querySelector(".all-tasks"),et=document.querySelector(".today-tasks"),nt=document.querySelector(".week-tasks");let rt=null,at=null;function ot(t,e){const n=document.querySelector(".user-tasks"),r=document.createElement("div");r.classList.add("user-task"),r.dataset.taskId=t.id;const a=document.createElement("p");a.classList.add("project-title"),a.innerText=`${t.description}`,r.append(a);const o=document.createElement("p");o.classList.add("task-date"),o.innerText=`${t.dueDate}`,r.append(o);const i=document.createElement("p");i.classList.add("task-priority"),i.innerText=`${t.priority}`,r.append(i);const s=document.createElement("p");s.classList.add("project-folder"),s.innerText=`${t.projectName}`,r.append(s);const u=document.createElement("div");u.classList.add("task-btns"),r.append(u);const d=document.createElement("img");d.setAttribute("data",e),d.dataset.taskId=t.id,d.dataset.taskProjectId=t.projectId,d.classList.add("edit-task-btn"),d.src="./images/edit-button.svg",u.appendChild(d);const c=document.createElement("img");c.setAttribute("data",e),c.dataset.taskProjectId=t.projectId,c.classList.add("remove-task-btn"),c.src="./images/trash-can.svg",u.appendChild(c),t.id===at&&r.classList.add("selected-task"),n.append(r)}function it(){const t=document.getElementById("taskFormDispBtn"),e=(document.querySelectorAll(".edit-task-btn"),document.getElementById("task-submit-btn")),n=document.getElementById("edit-task-submit-btn"),r=document.getElementById("task-cancel-btn"),a=document.getElementById("edit-task-cancel-btn"),o=document.querySelector(".edit-task-modal"),i=document.querySelector(".new-task-modal"),s=document.querySelector(".overlay");function u(){i.classList.remove("active"),o.classList.remove("active"),s.classList.remove("active")}return t.onclick=function(){i.classList.add("active"),s.classList.add("active"),document.getElementById("taskDescription").focus()},e.onclick=u,n.onclick=u,s.onclick=u,r.addEventListener("click",(()=>{u(),document.getElementById("taskForm").reset()})),a.addEventListener("click",(()=>{u(),document.getElementById("editTaskForm").reset()})),{showEditTaskForm:function(){o.classList.add("active"),s.classList.add("active"),document.getElementById("editTaskDescription").focus()}}}K.addEventListener("click",(t=>{"div"===t.target.tagName.toLowerCase()&&(rt=t.target.dataset.projectId,tt.classList.remove("selected"),et.classList.remove("selected"),nt.classList.remove("selected"),dt(),V())})),tt.addEventListener("click",(t=>{rt="1",tt.classList.add("selected"),et.classList.remove("selected"),nt.classList.remove("selected"),dt(),V()})),et.addEventListener("click",(t=>{rt="today",et.classList.add("selected"),tt.classList.remove("selected"),nt.classList.remove("selected"),dt(),V()})),nt.addEventListener("click",(t=>{rt="week",nt.classList.add("selected"),tt.classList.remove("selected"),et.classList.remove("selected"),dt(),V()})),Z.addEventListener("click",(t=>{at=t.target.dataset.taskId,V()}));let st=[];class ut{constructor(t,e){this.id=t,this.projectTitle=e,this.projectTasks=[]}}function dt(){const t=document.querySelector("[data-user-projects]"),e=document.getElementById("taskProject"),n=document.getElementById("editTaskProject");t.textContent="",e.textContent="",n.textContent="",st.forEach(((t,e)=>{!function(t,e){const n=document.querySelector("[data-user-projects]"),r=document.createElement("div");r.classList.add("user-project"),r.setAttribute("id",`${t.projectTitle}`),r.dataset.projectId=t.id;const a=document.createElement("p");a.classList.add("project-title"),a.innerText=t.projectTitle,r.append(a);const o=document.createElement("img");o.setAttribute("data",e),o.classList.add("remove-project-btn"),o.src="./images/trash-can.svg",r.appendChild(o),t.id===rt&&r.classList.add("selected"),n.append(r)}(t,e)})),st.forEach((t=>{let n=document.createElement("option");n.value=t.id,n.innerText=t.projectTitle,n.id=t.projectTitle,e.appendChild(n)})),st.forEach((t=>{let e=document.createElement("option");e.value=t.id,e.innerText=t.projectTitle,e.id=t.projectTitle,n.appendChild(e)})),document.querySelectorAll(".remove-project-btn").forEach((t=>{t.addEventListener("click",(()=>{st.splice(t.getAttribute("data"),1),dt(),V()}))}))}if(""==st){const t=new ut("2","Default");st.push(t);const e=new _("3","Add a project to get started","Now","High","2","Default"),n=st.find((t=>"2"===t.id));n.projectTasks.push(e),dt(),V()}!function(){const t=document.getElementById("newProjectBtn"),e=document.getElementById("project-submit-btn"),n=document.getElementById("project-cancel-btn");t.addEventListener("click",(()=>{document.getElementById("projectForm").style.display="block",document.getElementById("newProjectBtn").style.display="none",document.getElementById("projectInput").focus()})),e.addEventListener("click",(()=>{document.getElementById("projectForm").style.display="none",document.getElementById("newProjectBtn").style.display="block"})),n.addEventListener("click",(()=>{document.getElementById("projectForm").style.display="none",document.getElementById("newProjectBtn").style.display="block",document.getElementById("projectForm").reset()}))}(),it(),function(){const t=document.querySelector("[data-new-project-form]"),e=document.querySelector("[data-new-project-input]");t.addEventListener("submit",(t=>{if(t.preventDefault(),null==e||""===e)return;let n=Date.now().toString();const r=new ut(n,e.value);e.value=null,st.push(r),dt()}))}(),function(){const t=document.getElementById("taskForm"),e=document.querySelector("#taskDescription"),n=document.querySelector("#taskDueDate"),r=document.querySelector("#priorityLevel"),a=document.getElementById("taskProject");t.addEventListener("submit",(t=>{t.preventDefault(),null!=e&&""!==e&&(!function(t,e,n,r,a,o){const i=new _(t,e,n,r,a,o);st.find((t=>t.id===a)).projectTasks.push(i)}(Date.now().toString(),e.value,n.value,r.value,a.value,a.options[a.selectedIndex].id),document.getElementById("taskForm").reset(),V())}))}()})();