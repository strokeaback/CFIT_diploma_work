(function(B){var O,ay="2.5.1",x=this,T=Math.round,Z,t=0,e=1,aM=2,s=3,ar=4,q=5,Q=6,au={},aG={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},ai=(typeof module!=="undefined"&&module.exports&&typeof require!=="undefined"),b=/^\/?Date\((\-?\d+)/i,aV=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,aA=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,al=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Y=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,f=/\d\d?/,aa=/\d{1,3}/,C=/\d{1,4}/,a2=/[+\-]?\d{1,6}/,aR=/\d+/,G=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,n=/Z|[\+\-]\d\d:?\d\d/gi,j=/T/i,aJ=/[\+\-]?\d+(\.\d{1,3})?/,X=/\d/,o=/\d\d/,aU=/\d{3}/,aI=/\d{4}/,ae=/[+-]?\d{6}/,V=/[+-]?\d+/,aE=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,R="YYYY-MM-DDTHH:mm:ssZ",aT=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],E=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],W=/([\+\-]|\d\d)/gi,aB="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),A={Milliseconds:1,Seconds:1000,Minutes:60000,Hours:3600000,Days:86400000,Months:2592000000,Years:31536000000},c={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},aQ={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},ah={},aL="DDD w W M D d".split(" "),aj="M D H h m s w W".split(" "),aN={M:function(){return this.month()+1},MMM:function(a4){return this.lang().monthsShort(this,a4)},MMMM:function(a4){return this.lang().months(this,a4)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a4){return this.lang().weekdaysMin(this,a4)},ddd:function(a4){return this.lang().weekdaysShort(this,a4)},dddd:function(a4){return this.lang().weekdays(this,a4)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return H(this.year()%100,2)},YYYY:function(){return H(this.year(),4)},YYYYY:function(){return H(this.year(),5)},YYYYYY:function(){var a5=this.year(),a4=a5>=0?"+":"-";return a4+H(Math.abs(a5),6)},gg:function(){return H(this.weekYear()%100,2)},gggg:function(){return H(this.weekYear(),4)},ggggg:function(){return H(this.weekYear(),5)},GG:function(){return H(this.isoWeekYear()%100,2)},GGGG:function(){return H(this.isoWeekYear(),4)},GGGGG:function(){return H(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),true)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),false)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return J(this.milliseconds()/100)},SS:function(){return H(J(this.milliseconds()/10),2)},SSS:function(){return H(this.milliseconds(),3)},SSSS:function(){return H(this.milliseconds(),3)},Z:function(){var a5=-this.zone(),a4="+";if(a5<0){a5=-a5;a4="-"}return a4+H(J(a5/60),2)+":"+H(J(a5)%60,2)},ZZ:function(){var a5=-this.zone(),a4="+";if(a5<0){a5=-a5;a4="-"}return a4+H(J(a5/60),2)+H(J(a5)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},S=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];function ac(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}}function L(a5,a4){return function(a6){return H(a5.call(this,a6),a4)}}function g(a4,a5){return function(a6){return this.lang().ordinal(a4.call(this,a6),a5)}}while(aL.length){Z=aL.pop();aN[Z+"o"]=g(aN[Z],Z)}while(aj.length){Z=aj.pop();aN[Z+Z]=L(aN[Z],2)}aN.DDDD=L(aN.DDD,3);function aC(){}function I(a4){aZ(a4);aw(this,a4)}function ab(a7){var ba=l(a7),a9=ba.year||0,a5=ba.month||0,a4=ba.week||0,bd=ba.day||0,bb=ba.hour||0,a8=ba.minute||0,bc=ba.second||0,a6=ba.millisecond||0;this._milliseconds=+a6+bc*1000+a8*60000+bb*3600000;this._days=+bd+a4*7;this._months=+a5+a9*12;this._data={};this._bubble()}function aw(a5,a4){for(var a6 in a4){if(a4.hasOwnProperty(a6)){a5[a6]=a4[a6]}}if(a4.hasOwnProperty("toString")){a5.toString=a4.toString}if(a4.hasOwnProperty("valueOf")){a5.valueOf=a4.valueOf}return a5}function a1(a5){var a4={},a6;for(a6 in a5){if(a5.hasOwnProperty(a6)&&aG.hasOwnProperty(a6)){a4[a6]=a5[a6]}}return a4}function k(a4){if(a4<0){return Math.ceil(a4)}else{return Math.floor(a4)}}function H(a8,a7,a6){var a5=""+Math.abs(a8),a4=a8>=0;while(a5.length<a7){a5="0"+a5}return(a4?(a6?"+":""):"-")+a5}function D(a7,a6,ba,a9){var a5=a6._milliseconds,bc=a6._days,a4=a6._months,a8,bb;if(a5){a7._d.setTime(+a7._d+a5*ba)}if(bc||a4){a8=a7.minute();bb=a7.hour()}if(bc){a7.date(a7.date()+bc*ba)}if(a4){a7.month(a7.month()+a4*ba)}if(a5&&!a9){O.updateOffset(a7)}if(bc||a4){a7.minute(a8);a7.hour(bb)}}function a(a4){return Object.prototype.toString.call(a4)==="[object Array]"}function d(a4){return Object.prototype.toString.call(a4)==="[object Date]"||a4 instanceof Date}function aK(a9,a8,a5){var a4=Math.min(a9.length,a8.length),a6=Math.abs(a9.length-a8.length),ba=0,a7;for(a7=0;a7<a4;a7++){if((a5&&a9[a7]!==a8[a7])||(!a5&&J(a9[a7])!==J(a8[a7]))){ba++}}return ba+a6}function aP(a5){if(a5){var a4=a5.toLowerCase().replace(/(.)s$/,"$1");a5=c[a5]||aQ[a4]||a4}return a5}function l(a6){var a5={},a4,a7;for(a7 in a6){if(a6.hasOwnProperty(a7)){a4=aP(a7);if(a4){a5[a4]=a6[a7]}}}return a5}function ao(a5){var a4,a6;if(a5.indexOf("week")===0){a4=7;a6="day"}else{if(a5.indexOf("month")===0){a4=12;a6="month"}else{return}}O[a5]=function(bb,a8){var ba,a7,bc=O.fn._lang[a5],a9=[];if(typeof bb==="number"){a8=bb;bb=B}a7=function(be){var bd=O().utc().set(a6,be);return bc.call(O.fn._lang,bd,bb||"")};if(a8!=null){return a7(a8)}else{for(ba=0;ba<a4;ba++){a9.push(a7(ba))}return a9}}}function J(a4){var a6=+a4,a5=0;if(a6!==0&&isFinite(a6)){if(a6>=0){a5=Math.floor(a6)}else{a5=Math.ceil(a6)}}return a5}function aX(a4,a5){return new Date(Date.UTC(a4,a5+1,0)).getUTCDate()}function aS(a4){return aF(a4)?366:365}function aF(a4){return(a4%4===0&&a4%100!==0)||a4%400===0}function aZ(a4){var a5;if(a4._a&&a4._pf.overflow===-2){a5=a4._a[e]<0||a4._a[e]>11?e:a4._a[aM]<1||a4._a[aM]>aX(a4._a[t],a4._a[e])?aM:a4._a[s]<0||a4._a[s]>23?s:a4._a[ar]<0||a4._a[ar]>59?ar:a4._a[q]<0||a4._a[q]>59?q:a4._a[Q]<0||a4._a[Q]>999?Q:-1;if(a4._pf._overflowDayOfYear&&(a5<t||a5>aM)){a5=aM}a4._pf.overflow=a5}}function ax(a4){if(a4._isValid==null){a4._isValid=!isNaN(a4._d.getTime())&&a4._pf.overflow<0&&!a4._pf.empty&&!a4._pf.invalidMonth&&!a4._pf.nullInput&&!a4._pf.invalidFormat&&!a4._pf.userInvalidated;if(a4._strict){a4._isValid=a4._isValid&&a4._pf.charsLeftOver===0&&a4._pf.unusedTokens.length===0}}return a4._isValid}function z(a4){return a4?a4.toLowerCase().replace("_","-"):a4}function u(a4,a5){return a5._isUTC?O(a4).zone(a5._offset||0):O(a4).local()}aw(aC.prototype,{set:function(a4){var a6,a5;for(a5 in a4){a6=a4[a5];if(typeof a6==="function"){this[a5]=a6}else{this["_"+a5]=a6}}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a4){return this._months[a4.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a4){return this._monthsShort[a4.month()]},monthsParse:function(a4){var a5,a7,a6;if(!this._monthsParse){this._monthsParse=[]}for(a5=0;a5<12;a5++){if(!this._monthsParse[a5]){a7=O.utc([2000,a5]);a6="^"+this.months(a7,"")+"|^"+this.monthsShort(a7,"");this._monthsParse[a5]=new RegExp(a6.replace(".",""),"i")}if(this._monthsParse[a5].test(a4)){return a5}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a4){return this._weekdays[a4.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a4){return this._weekdaysShort[a4.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a4){return this._weekdaysMin[a4.day()]},weekdaysParse:function(a7){var a4,a6,a5;if(!this._weekdaysParse){this._weekdaysParse=[]}for(a4=0;a4<7;a4++){if(!this._weekdaysParse[a4]){a6=O([2000,1]).day(a4);a5="^"+this.weekdays(a6,"")+"|^"+this.weekdaysShort(a6,"")+"|^"+this.weekdaysMin(a6,"");this._weekdaysParse[a4]=new RegExp(a5.replace(".",""),"i")}if(this._weekdaysParse[a4].test(a7)){return a4}}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a5){var a4=this._longDateFormat[a5];if(!a4&&this._longDateFormat[a5.toUpperCase()]){a4=this._longDateFormat[a5.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a6){return a6.slice(1)});this._longDateFormat[a5]=a4}return a4},isPM:function(a4){return((a4+"").toLowerCase().charAt(0)==="p")},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a4,a5,a6){if(a4>11){return a6?"pm":"PM"}else{return a6?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a5,a6){var a4=this._calendar[a5];return typeof a4==="function"?a4.apply(a6):a4},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a7,a6,a5,a8){var a4=this._relativeTime[a5];return(typeof a4==="function")?a4(a7,a6,a5,a8):a4.replace(/%d/i,a7)},pastFuture:function(a6,a4){var a5=this._relativeTime[a6>0?"future":"past"];return typeof a5==="function"?a5(a4):a5.replace(/%s/i,a4)},ordinal:function(a4){return this._ordinal.replace("%d",a4)},_ordinal:"%d",preparse:function(a4){return a4},postformat:function(a4){return a4},week:function(a4){return y(a4,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}});function ag(a5,a4){a4.abbr=a5;if(!au[a5]){au[a5]=new aC()}au[a5].set(a4);return au[a5]}function aW(a4){delete au[a4]}function av(a8){var a7=0,a5,ba,a9,a6,a4=function(bb){if(!au[bb]&&ai){try{require("./lang/"+bb)}catch(bc){}}return au[bb]};if(!a8){return O.fn._lang}if(!a(a8)){ba=a4(a8);if(ba){return ba}a8=[a8]}while(a7<a8.length){a6=z(a8[a7]).split("-");a5=a6.length;a9=z(a8[a7+1]);a9=a9?a9.split("-"):null;while(a5>0){ba=a4(a6.slice(0,a5).join("-"));if(ba){return ba}if(a9&&a9.length>=a5&&aK(a6,a9,true)>=a5-1){break}a5--}a7++}return O.fn._lang}function af(a4){if(a4.match(/\[[\s\S]/)){return a4.replace(/^\[|\]$/g,"")}return a4.replace(/\\/g,"")}function p(a6){var a7=a6.match(al),a4,a5;for(a4=0,a5=a7.length;a4<a5;a4++){if(aN[a7[a4]]){a7[a4]=aN[a7[a4]]}else{a7[a4]=af(a7[a4])}}return function(a9){var a8="";for(a4=0;a4<a5;a4++){a8+=a7[a4] instanceof Function?a7[a4].call(a9,a6):a7[a4]}return a8}}function ak(a4,a5){if(!a4.isValid()){return a4.lang().invalidDate()}a5=a3(a5,a4.lang());if(!ah[a5]){ah[a5]=p(a5)}return ah[a5](a4)}function a3(a6,a7){var a4=5;function a5(a8){return a7.longDateFormat(a8)||a8}Y.lastIndex=0;while(a4>=0&&Y.test(a6)){a6=a6.replace(Y,a5);Y.lastIndex=0;a4-=1}return a6}function an(a7,a6){var a5,a4=a6._strict;switch(a7){case"DDDD":return aU;case"YYYY":case"GGGG":case"gggg":return a4?aI:C;case"Y":case"G":case"g":return V;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return a4?ae:a2;case"S":if(a4){return X}case"SS":if(a4){return o}case"SSS":if(a4){return aU}case"DDD":return aa;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return G;case"a":case"A":return av(a6._l)._meridiemParse;case"X":return aJ;case"Z":case"ZZ":return n;case"T":return j;case"SSSS":return aR;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return a4?o:f;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return f;default:a5=new RegExp(a0(aq(a7.replace("\\","")),"i"));return a5}}function v(a5){a5=a5||"";var a4=(a5.match(n)||[]),a8=a4[a4.length-1]||[],a7=(a8+"").match(W)||["-",0,0],a6=+(a7[1]*60)+J(a7[2]);return a7[0]==="+"?-a6:a6}function ap(a8,a6,a7){var a5,a4=a7._a;switch(a8){case"M":case"MM":if(a6!=null){a4[e]=J(a6)-1}break;case"MMM":case"MMMM":a5=av(a7._l).monthsParse(a6);if(a5!=null){a4[e]=a5}else{a7._pf.invalidMonth=a6}break;case"D":case"DD":if(a6!=null){a4[aM]=J(a6)}break;case"DDD":case"DDDD":if(a6!=null){a7._dayOfYear=J(a6)}break;case"YY":a4[t]=J(a6)+(J(a6)>68?1900:2000);break;case"YYYY":case"YYYYY":case"YYYYYY":a4[t]=J(a6);break;case"a":case"A":a7._isPm=av(a7._l).isPM(a6);break;case"H":case"HH":case"h":case"hh":a4[s]=J(a6);break;case"m":case"mm":a4[ar]=J(a6);break;case"s":case"ss":a4[q]=J(a6);break;case"S":case"SS":case"SSS":case"SSSS":a4[Q]=J(("0."+a6)*1000);break;case"X":a7._d=new Date(parseFloat(a6)*1000);break;case"Z":case"ZZ":a7._useUTC=true;a7._tzm=v(a6);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a8=a8.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a8=a8.substr(0,2);if(a6){a7._w=a7._w||{};a7._w[a8]=a6}break}}function ad(a8){var ba,a9,bd=[],a6,bc,a5,be,bf,a7,bb,a4;if(a8._d){return}a6=m(a8);if(a8._w&&a8._a[aM]==null&&a8._a[e]==null){a5=function(bh){var bg=parseInt(bh,10);return bh?(bh.length<3?(bg>68?1900+bg:2000+bg):bg):(a8._a[t]==null?O().weekYear():a8._a[t])};be=a8._w;if(be.GG!=null||be.W!=null||be.E!=null){bf=r(a5(be.GG),be.W||1,be.E,4,1)}else{a7=av(a8._l);bb=be.d!=null?aY(be.d,a7):(be.e!=null?parseInt(be.e,10)+a7._week.dow:0);a4=parseInt(be.w,10)||1;if(be.d!=null&&bb<a7._week.dow){a4++}bf=r(a5(be.gg),a4,bb,a7._week.doy,a7._week.dow)}a8._a[t]=bf.year;a8._dayOfYear=bf.dayOfYear}if(a8._dayOfYear){bc=a8._a[t]==null?a6[t]:a8._a[t];if(a8._dayOfYear>aS(bc)){a8._pf._overflowDayOfYear=true}a9=F(bc,0,a8._dayOfYear);a8._a[e]=a9.getUTCMonth();a8._a[aM]=a9.getUTCDate()}for(ba=0;ba<3&&a8._a[ba]==null;++ba){a8._a[ba]=bd[ba]=a6[ba]}for(;ba<7;ba++){a8._a[ba]=bd[ba]=(a8._a[ba]==null)?(ba===2?1:0):a8._a[ba]}bd[s]+=J((a8._tzm||0)/60);bd[ar]+=J((a8._tzm||0)%60);a8._d=(a8._useUTC?F:am).apply(null,bd)}function az(a5){var a4;if(a5._d){return}a4=l(a5._i);a5._a=[a4.year,a4.month,a4.day,a4.hour,a4.minute,a4.second,a4.millisecond];ad(a5)}function m(a5){var a4=new Date();if(a5._useUTC){return[a4.getUTCFullYear(),a4.getUTCMonth(),a4.getUTCDate()]}else{return[a4.getFullYear(),a4.getMonth(),a4.getDate()]}}function N(a7){a7._a=[];a7._pf.empty=true;var a6=av(a7._l),ba=""+a7._i,a9,a5,bd,a8,bc,a4=ba.length,bb=0;bd=a3(a7._f,a6).match(al)||[];for(a9=0;a9<bd.length;a9++){a8=bd[a9];a5=(ba.match(an(a8,a7))||[])[0];if(a5){bc=ba.substr(0,ba.indexOf(a5));if(bc.length>0){a7._pf.unusedInput.push(bc)}ba=ba.slice(ba.indexOf(a5)+a5.length);bb+=a5.length}if(aN[a8]){if(a5){a7._pf.empty=false}else{a7._pf.unusedTokens.push(a8)}ap(a8,a5,a7)}else{if(a7._strict&&!a5){a7._pf.unusedTokens.push(a8)}}}a7._pf.charsLeftOver=a4-bb;if(ba.length>0){a7._pf.unusedInput.push(ba)}if(a7._isPm&&a7._a[s]<12){a7._a[s]+=12}if(a7._isPm===false&&a7._a[s]===12){a7._a[s]=0}ad(a7);aZ(a7)}function aq(a4){return a4.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a5,a9,a8,a7,a6){return a9||a8||a7||a6})}function a0(a4){return a4.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aO(a4){var a8,a6,a7,a5,a9;if(a4._f.length===0){a4._pf.invalidFormat=true;a4._d=new Date(NaN);return}for(a5=0;a5<a4._f.length;a5++){a9=0;a8=aw({},a4);a8._pf=ac();a8._f=a4._f[a5];N(a8);if(!ax(a8)){continue}a9+=a8._pf.charsLeftOver;a9+=a8._pf.unusedTokens.length*10;a8._pf.score=a9;if(a7==null||a9<a7){a7=a9;a6=a8}}aw(a4,a6||a8)}function h(a7){var a8,a4,a6=a7._i,a5=aE.exec(a6);if(a5){a7._pf.iso=true;for(a8=0,a4=aT.length;a8<a4;a8++){if(aT[a8][1].exec(a6)){a7._f=aT[a8][0]+(a5[6]||" ");break}}for(a8=0,a4=E.length;a8<a4;a8++){if(E[a8][1].exec(a6)){a7._f+=E[a8][0];break}}if(a6.match(n)){a7._f+="Z"}N(a7)}else{a7._d=new Date(a6)}}function M(a6){var a5=a6._i,a4=b.exec(a5);if(a5===B){a6._d=new Date()}else{if(a4){a6._d=new Date(+a4[1])}else{if(typeof a5==="string"){h(a6)}else{if(a(a5)){a6._a=a5.slice(0);ad(a6)}else{if(d(a5)){a6._d=new Date(+a5)}else{if(typeof(a5)==="object"){az(a6)}else{a6._d=new Date(a5)}}}}}}}function am(bb,a4,a9,a8,ba,a7,a6){var a5=new Date(bb,a4,a9,a8,ba,a7,a6);if(bb<1970){a5.setFullYear(bb)}return a5}function F(a5){var a4=new Date(Date.UTC.apply(null,arguments));if(a5<1970){a4.setUTCFullYear(a5)}return a4}function aY(a4,a5){if(typeof a4==="string"){if(!isNaN(a4)){a4=parseInt(a4,10)}else{a4=a5.weekdaysParse(a4);if(typeof a4!=="number"){return null}}}return a4}function aD(a4,a6,a5,a7,a8){return a8.relativeTime(a6||1,!!a5,a4,a7)}function w(a6,a4,a5){var bb=T(Math.abs(a6)/1000),a7=T(bb/60),ba=T(a7/60),bc=T(ba/24),a8=T(bc/365),a9=bb<45&&["s",bb]||a7===1&&["m"]||a7<45&&["mm",a7]||ba===1&&["h"]||ba<22&&["hh",ba]||bc===1&&["d"]||bc<=25&&["dd",bc]||bc<=45&&["M"]||bc<345&&["MM",T(bc/30)]||a8===1&&["y"]||["yy",a8];a9[2]=a4;a9[3]=a6>0;a9[4]=a5;return aD.apply({},a9)}function y(a8,a6,a9){var a5=a9-a6,a4=a9-a8.day(),a7;if(a4>a5){a4-=7}if(a4<a5-7){a4+=7}a7=O(a8).add("d",a4);return{week:Math.ceil(a7.dayOfYear()/7),year:a7.year()}}function r(a8,a7,a9,bb,a4){var ba=F(a8,0,1).getUTCDay(),a6,a5;a9=a9!=null?a9:a4;a6=a4-ba+(ba>bb?7:0)-(ba<a4?7:0);a5=7*(a7-1)+(a9-a4)+a6+1;return{year:a5>0?a8:a8-1,dayOfYear:a5>0?a5:aS(a8-1)+a5}}function K(a5){var a4=a5._i,a6=a5._f;if(a4===null){return O.invalid({nullInput:true})}if(typeof a4==="string"){a5._i=a4=av().preparse(a4)}if(O.isMoment(a4)){a5=a1(a4);a5._d=new Date(+a4._d)}else{if(a6){if(a(a6)){aO(a5)}else{N(a5)}}else{M(a5)}}return new I(a5)}O=function(a5,a6,a7,a4){var a8;if(typeof(a7)==="boolean"){a4=a7;a7=B}a8={};a8._isAMomentObject=true;a8._i=a5;a8._f=a6;a8._l=a7;a8._strict=a4;a8._isUTC=false;a8._pf=ac();return K(a8)};O.utc=function(a5,a6,a7,a4){var a8;if(typeof(a7)==="boolean"){a4=a7;a7=B}a8={};a8._isAMomentObject=true;a8._useUTC=true;a8._isUTC=true;a8._l=a7;a8._i=a5;a8._f=a6;a8._strict=a4;a8._pf=ac();return K(a8).utc()};O.unix=function(a4){return O(a4*1000)};O.duration=function(a5,a9){var ba=a5,a8=null,a4,a7,a6;if(O.isDuration(a5)){ba={ms:a5._milliseconds,d:a5._days,M:a5._months}}else{if(typeof a5==="number"){ba={};if(a9){ba[a9]=a5}else{ba.milliseconds=a5}}else{if(!!(a8=aV.exec(a5))){a4=(a8[1]==="-")?-1:1;ba={y:0,d:J(a8[aM])*a4,h:J(a8[s])*a4,m:J(a8[ar])*a4,s:J(a8[q])*a4,ms:J(a8[Q])*a4}}else{if(!!(a8=aA.exec(a5))){a4=(a8[1]==="-")?-1:1;a6=function(bc){var bb=bc&&parseFloat(bc.replace(",","."));return(isNaN(bb)?0:bb)*a4};ba={y:a6(a8[2]),M:a6(a8[3]),d:a6(a8[4]),h:a6(a8[5]),m:a6(a8[6]),s:a6(a8[7]),w:a6(a8[8])}}}}}a7=new ab(ba);if(O.isDuration(a5)&&a5.hasOwnProperty("_lang")){a7._lang=a5._lang}return a7};O.version=ay;O.defaultFormat=R;O.updateOffset=function(){};O.lang=function(a5,a4){var a6;if(!a5){return O.fn._lang._abbr}if(a4){ag(z(a5),a4)}else{if(a4===null){aW(a5);a5="en"}else{if(!au[a5]){av(a5)}}}a6=O.duration.fn._lang=O.fn._lang=av(a5);return a6._abbr};O.langData=function(a4){if(a4&&a4._lang&&a4._lang._abbr){a4=a4._lang._abbr}return av(a4)};O.isMoment=function(a4){return a4 instanceof I||(a4!=null&&a4.hasOwnProperty("_isAMomentObject"))};O.isDuration=function(a4){return a4 instanceof ab};for(Z=S.length-1;Z>=0;--Z){ao(S[Z])}O.normalizeUnits=function(a4){return aP(a4)};O.invalid=function(a5){var a4=O.utc(NaN);if(a5!=null){aw(a4._pf,a5)}else{a4._pf.userInvalidated=true}return a4};O.parseZone=function(a4){return O(a4).parseZone()};aw(O.fn=I.prototype,{clone:function(){return O(this)},valueOf:function(){return +this._d+((this._offset||0)*60000)},unix:function(){return Math.floor(+this/1000)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a4=O(this).utc();if(0<a4.year()&&a4.year()<=9999){return ak(a4,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}else{return ak(a4,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}},toArray:function(){var a4=this;return[a4.year(),a4.month(),a4.date(),a4.hours(),a4.minutes(),a4.seconds(),a4.milliseconds()]},isValid:function(){return ax(this)},isDSTShifted:function(){if(this._a){return this.isValid()&&aK(this._a,(this._isUTC?O.utc(this._a):O(this._a)).toArray())>0}return false},parsingFlags:function(){return aw({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){this.zone(0);this._isUTC=false;return this},format:function(a5){var a4=ak(this,a5||O.defaultFormat);return this.lang().postformat(a4)},add:function(a4,a6){var a5;if(typeof a4==="string"){a5=O.duration(+a6,a4)}else{a5=O.duration(a4,a6)}D(this,a5,1);return this},subtract:function(a4,a6){var a5;if(typeof a4==="string"){a5=O.duration(+a6,a4)}else{a5=O.duration(a4,a6)}D(this,a5,-1);return this},diff:function(a8,a7,a4){var a9=u(a8,this),a5=(this.zone()-a9.zone())*60000,ba,a6;a7=aP(a7);if(a7==="year"||a7==="month"){ba=(this.daysInMonth()+a9.daysInMonth())*43200000;a6=((this.year()-a9.year())*12)+(this.month()-a9.month());a6+=((this-O(this).startOf("month"))-(a9-O(a9).startOf("month")))/ba;a6-=((this.zone()-O(this).startOf("month").zone())-(a9.zone()-O(a9).startOf("month").zone()))*60000/ba;if(a7==="year"){a6=a6/12}}else{ba=(this-a9);a6=a7==="second"?ba/1000:a7==="minute"?ba/60000:a7==="hour"?ba/3600000:a7==="day"?(ba-a5)/86400000:a7==="week"?(ba-a5)/604800000:ba}return a4?a6:k(a6)},from:function(a5,a4){return O.duration(this.diff(a5)).lang(this.lang()._abbr).humanize(!a4)},fromNow:function(a4){return this.from(O(),a4)},calendar:function(){var a4=u(O(),this).startOf("day"),a6=this.diff(a4,"days",true),a5=a6<-6?"sameElse":a6<-1?"lastWeek":a6<0?"lastDay":a6<1?"sameDay":a6<2?"nextDay":a6<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(a5,this))},isLeapYear:function(){return aF(this.year())},isDST:function(){return(this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone())},day:function(a5){var a4=this._isUTC?this._d.getUTCDay():this._d.getDay();if(a5!=null){a5=aY(a5,this.lang());return this.add({d:a5-a4})}else{return a4}},month:function(a4){var a5=this._isUTC?"UTC":"",a6;if(a4!=null){if(typeof a4==="string"){a4=this.lang().monthsParse(a4);if(typeof a4!=="number"){return this}}a6=this.date();this.date(1);this._d["set"+a5+"Month"](a4);this.date(Math.min(a6,this.daysInMonth()));O.updateOffset(this);return this}else{return this._d["get"+a5+"Month"]()}},startOf:function(a4){a4=aP(a4);switch(a4){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}if(a4==="week"){this.weekday(0)}else{if(a4==="isoWeek"){this.isoWeekday(1)}}return this},endOf:function(a4){a4=aP(a4);return this.startOf(a4).add((a4==="isoWeek"?"week":a4),1).subtract("ms",1)},isAfter:function(a5,a4){a4=typeof a4!=="undefined"?a4:"millisecond";return +this.clone().startOf(a4)>+O(a5).startOf(a4)},isBefore:function(a5,a4){a4=typeof a4!=="undefined"?a4:"millisecond";return +this.clone().startOf(a4)<+O(a5).startOf(a4)},isSame:function(a5,a4){a4=a4||"ms";return +this.clone().startOf(a4)===+u(a5,this).startOf(a4)},min:function(a4){a4=O.apply(null,arguments);return a4<this?this:a4},max:function(a4){a4=O.apply(null,arguments);return a4>this?this:a4},zone:function(a4){var a5=this._offset||0;if(a4!=null){if(typeof a4==="string"){a4=v(a4)}if(Math.abs(a4)<16){a4=a4*60}this._offset=a4;this._isUTC=true;if(a5!==a4){D(this,O.duration(a5-a4,"m"),1,true)}}else{return this._isUTC?a5:this._d.getTimezoneOffset()}return this},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){if(this._tzm){this.zone(this._tzm)}else{if(typeof this._i==="string"){this.zone(this._i)}}return this},hasAlignedHourOffset:function(a4){if(!a4){a4=0}else{a4=O(a4).zone()}return(this.zone()-a4)%60===0},daysInMonth:function(){return aX(this.year(),this.month())},dayOfYear:function(a4){var a5=T((O(this).startOf("day")-O(this).startOf("year"))/86400000)+1;return a4==null?a5:this.add("d",(a4-a5))},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(a4){var a5=y(this,this.lang()._week.dow,this.lang()._week.doy).year;return a4==null?a5:this.add("y",(a4-a5))},isoWeekYear:function(a4){var a5=y(this,1,4).year;return a4==null?a5:this.add("y",(a4-a5))},week:function(a4){var a5=this.lang().week(this);return a4==null?a5:this.add("d",(a4-a5)*7)},isoWeek:function(a4){var a5=y(this,1,4).week;return a4==null?a5:this.add("d",(a4-a5)*7)},weekday:function(a4){var a5=(this.day()+7-this.lang()._week.dow)%7;return a4==null?a5:this.add("d",a4-a5)},isoWeekday:function(a4){return a4==null?this.day()||7:this.day(this.day()%7?a4:a4-7)},get:function(a4){a4=aP(a4);return this[a4]()},set:function(a4,a5){a4=aP(a4);if(typeof this[a4]==="function"){this[a4](a5)}return this},lang:function(a4){if(a4===B){return this._lang}else{this._lang=av(a4);return this}}});function aH(a4,a5){O.fn[a4]=O.fn[a4+"s"]=function(a6){var a7=this._isUTC?"UTC":"";if(a6!=null){this._d["set"+a7+a5](a6);O.updateOffset(this);return this}else{return this._d["get"+a7+a5]()}}}for(Z=0;Z<aB.length;Z++){aH(aB[Z].toLowerCase().replace(/s$/,""),aB[Z])}aH("year","FullYear");O.fn.days=O.fn.day;O.fn.months=O.fn.month;O.fn.weeks=O.fn.week;O.fn.isoWeeks=O.fn.isoWeek;O.fn.toJSON=O.fn.toISOString;aw(O.duration.fn=ab.prototype,{_bubble:function(){var a6=this._milliseconds,bb=this._days,a4=this._months,a9=this._data,ba,a8,a5,a7;a9.milliseconds=a6%1000;ba=k(a6/1000);a9.seconds=ba%60;a8=k(ba/60);a9.minutes=a8%60;a5=k(a8/60);a9.hours=a5%24;bb+=k(a5/24);a9.days=bb%30;a4+=k(bb/30);a9.months=a4%12;a7=k(a4/12);a9.years=a7},weeks:function(){return k(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*86400000+(this._months%12)*2592000000+J(this._months/12)*31536000000},humanize:function(a5){var a6=+this,a4=w(a6,!a5,this.lang());if(a5){a4=this.lang().pastFuture(a6,a4)}return this.lang().postformat(a4)},add:function(a4,a6){var a5=O.duration(a4,a6);this._milliseconds+=a5._milliseconds;this._days+=a5._days;this._months+=a5._months;this._bubble();return this},subtract:function(a4,a6){var a5=O.duration(a4,a6);this._milliseconds-=a5._milliseconds;this._days-=a5._days;this._months-=a5._months;this._bubble();return this},get:function(a4){a4=aP(a4);return this[a4.toLowerCase()+"s"]()},as:function(a4){a4=aP(a4);return this["as"+a4.charAt(0).toUpperCase()+a4.slice(1)+"s"]()},lang:O.fn.lang,toIsoString:function(){var a7=Math.abs(this.years()),a4=Math.abs(this.months()),a9=Math.abs(this.days()),a5=Math.abs(this.hours()),a6=Math.abs(this.minutes()),a8=Math.abs(this.seconds()+this.milliseconds()/1000);if(!this.asSeconds()){return"P0D"}return(this.asSeconds()<0?"-":"")+"P"+(a7?a7+"Y":"")+(a4?a4+"M":"")+(a9?a9+"D":"")+((a5||a6||a8)?"T":"")+(a5?a5+"H":"")+(a6?a6+"M":"")+(a8?a8+"S":"")}});function U(a4){O.duration.fn[a4]=function(){return this._data[a4]}}function at(a4,a5){O.duration.fn["as"+a4]=function(){return +this/a5}}for(Z in A){if(A.hasOwnProperty(Z)){at(Z,A[Z]);U(Z.toLowerCase())}}at("Weeks",604800000);O.duration.fn.asMonths=function(){return(+this-this.years()*31536000000)/2592000000+this.years()*12};O.lang("en",{ordinal:function(a6){var a4=a6%10,a5=(J(a6%100/10)===1)?"th":(a4===1)?"st":(a4===2)?"nd":(a4===3)?"rd":"th";return a6+a5}});function P(a5){var a4=false,a6=O;if(typeof ender!=="undefined"){return}if(a5){x.moment=function(){if(!a4&&console&&console.warn){a4=true;console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")}return a6.apply(null,arguments)};aw(x.moment,a6)}else{x.moment=O}}if(ai){module.exports=O;P(true)}else{if(typeof define==="function"&&define.amd){define("moment",function(a5,a4,a6){if(a6.config&&a6.config()&&a6.config().noGlobal!==true){P(a6.config().noGlobal===B)}return O})}else{P()}}}).call(this);(function(a){if(typeof define==="function"&&define.amd){define(["moment"],a)}else{if(typeof exports==="object"){module.exports=a(require("../moment"))}else{a(window.moment)}}}(function(e){function c(j,h){var g=j.split("_");return h%10===1&&h%100!==11?g[0]:(h%10>=2&&h%10<=4&&(h%100<10||h%100>=20)?g[1]:g[2])}function f(j,h,g){var k={mm:"?????????????????????????_??????????????????????????_?????????????????????",hh:"?????????????_?????????????????_?????????????????????",dd:"????????????????_????????????_?????????????????",MM:"?????????????????????_?????????????????????????_?????????????????????????????",yy:"????????????_????????????????_?????????????"};if(g==="m"){return h?"?????????????????????????":"?????????????????????????"}else{return j+" "+c(k[g],+j)}}function d(h,k){var g={nominative:"????????????????????????_?????????????????????????????_?????????????????_????????????????????????_?????????????_????????????????_????????????????_?????????????????????????_?????????????????????????????????_?????????????????????????????_????????????????????????_????????????????????????????".split("_"),accusative:"????????????????????????_?????????????????????????????_?????????????????????_????????????????????????_????????????_????????????????_????????????????_?????????????????????????????_?????????????????????????????????_?????????????????????????????_????????????????????????_????????????????????????????".split("_")},j=(/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(k)?"accusative":"nominative";return g[j][h.month()]}function b(g,k){var j={nominative:"????????????_?????????????_????????????_????????????_?????????????_????????????????_????????????????_????????????_????????????_?????????????_????????????_????????????".split("_"),accusative:"????????????_?????????????_????????????_????????????_????????????_????????????????_????????????????_????????????_????????????_?????????????_????????????_????????????".split("_")},h=(/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(k)?"accusative":"nominative";return j[h][g.month()]}function a(g,k){var h={nominative:"????????????????????????????????????????????_????????????????????????????????????????????_?????????????????????????????_????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????".split("_"),accusative:"????????????????????????????????????????????_????????????????????????????????????????????_?????????????????????????????_????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????".split("_")},j=(/\[ ?[?????????] ?(?:?????????????????????????????|?????????????????????????????????????)? ?\] ?dddd/).test(k)?"accusative":"nominative";return h[j][g.day()]}return e.lang("ru",{months:d,monthsShort:b,weekdays:a,weekdaysShort:"????????_????????_?????????_????????_??????????_?????????_????????".split("_"),weekdaysMin:"????????_????????_?????????_????????_??????????_?????????_????????".split("_"),monthsParse:[/^????????????/i,/^?????????????/i,/^????????????/i,/^????????????/i,/^????????[?????|????]/i,/^????????????/i,/^????????????/i,/^????????????/i,/^????????????/i,/^?????????????/i,/^????????????/i,/^????????????/i],longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY ????.",LLL:"D MMMM YYYY ????., LT",LLLL:"dddd, D MMMM YYYY ????., LT"},calendar:{sameDay:"[???????????????????????????? ????] LT",nextDay:"[?????????????????????????? ????] LT",lastDay:"[?????????????????????? ????] LT",nextWeek:function(){return this.day()===2?"[?????????] dddd [????] LT":"[?????] dddd [????] LT"},lastWeek:function(){switch(this.day()){case 0:return"[????? ?????????????????????????????] dddd [????] LT";case 1:case 2:case 4:return"[????? ???????????????????????????????] dddd [????] LT";case 3:case 5:case 6:return"[????? ?????????????????????????????] dddd [????] LT"}},sameElse:"L"},relativeTime:{future:"????????????????????? %s",past:"%s ????????????????????",s:"???????????????????????????????????? ????????????????????????",m:f,mm:f,h:"?????????????",hh:f,d:"????????????????",dd:f,M:"?????????????????????",MM:f,y:"????????????",yy:f},meridiem:function(g,j,h){if(g<4){return"?????????????????"}else{if(g<12){return"?????????????????"}else{if(g<17){return"????????????"}else{return"?????????????????????????"}}}},ordinal:function(g,h){switch(h){case"M":case"d":case"DDD":return g+"-?????";case"D":return g+"-????????";case"w":case"W":return g+"-????";default:return g}},week:{dow:1,doy:7}})}));var uAdmin=(function(){var onLoadEventHandlers={};function uAdmin(){if(uAdmin.prototype.instance==null){uAdmin.prototype.instance=new uAdmin.prototype.get()}register(arguments);return uAdmin.prototype.instance}function register(){var checkClass=function(parent,parent_str){for(var module in parent.reg){if(parent.reg[parent_str]){return parent.reg[parent_str]}else{return checkClass(parent.reg[module],parent_str)}}return false};var name;var value;var parent;var params=arguments[0];if(!params.length){return false}if(typeof params[0]==="object"){if(Object.prototype.toString.call(params[0])==="[object Array]"){return false}for(var i in params[0]){register([i,params[0][i],params[1]||null])}return true}else{if(typeof params[0]==="string"){if(typeof params[1]==="undefined"){return false}name=params[0];value=params[1];parent=params[2]||null}else{return false}}if(!parent){parent=uAdmin}if(typeof parent==="string"){parent=checkClass(uAdmin,parent)}if(typeof parent!=="function"){return false}var isClass=false;name=name.split(".");if(name.length>1){isClass=true}name=name.pop();var reg=function(){parent.reg[name]=value;if(isClass){parent.reg[name].isclass=true}};if(!parent.reg){parent.reg=reg}reg();return true}uAdmin.prototype.get=function(){return this};uAdmin.prototype.get.prototype=uAdmin.prototype;uAdmin.prototype.init=function(){uAdmin.load(uAdmin);delete uAdmin.reg;if(uAdmin.csrf){jQuery(document).ajaxSend(function(event,jqXhr,settings){if(settings.data instanceof FormData){settings.data.append("csrf",uAdmin.csrf);return}if(!settings||!settings.type||(typeof settings.data!=="string"&&typeof settings.data!=="undefined")){return true}switch(settings.type){case"POST":if(typeof settings.data=="undefined"){settings.data=""}settings.data+=settings.data.length?"&csrf="+uAdmin.csrf:"csrf="+uAdmin.csrf;break;case"GET":settings.url+=~settings.url.indexOf("?")?"&csrf="+uAdmin.csrf:"?csrf="+uAdmin.csrf;break}})}var images=document.getElementsByTagName("img");for(var i=0;i<images.length;i++){if(images[i].getAttribute("umi:field-name")=="photo"){if(!!images[i].width){images[i].style.maxWidth=images[i].width+"px"}if(!!images[i].height){images[i].style.maxHeight=images[i].height+"px"}}}};if(typeof JSON=="undefined"){JSON={parse:function(str){try{if(str.match(/^{/g)){var val=eval("("+str+")");if(Object.prototype.toString.call(val)=="[object Object]"){return val}}throw new SyntaxError("JSON.parse: unexpected end of data")}catch(e){throw new SyntaxError("JSON.parse: unexpected end of data")}}}}uAdmin.prototype.isCustomFunction=function(name){return typeof cmsCustoms==="object"&&cmsCustoms!==null&&name&&typeof cmsCustoms[name]==="function"};uAdmin.onLoad=function(module,handler){if(typeof handler!=="function"){return false}if(module in onLoadEventHandlers===false){onLoadEventHandlers[module]=[]}onLoadEventHandlers[module].push(handler);return handler in onLoadEventHandlers[module]};uAdmin.load=function(parent){for(var module in parent.reg){if(parent.reg[module].reg){uAdmin.load(parent.reg[module])}if(parent.reg[module].isclass){var extend=function(usedClass,extendClass){for(var i in extendClass){usedClass.prototype[i]=extendClass[i]}return new usedClass()};if(parent==uAdmin){parent[module]=new parent.reg[module](extend)}else{parent.prototype[module]=new parent.reg[module](extend)}}else{if(parent==uAdmin){parent[module]=parent.reg[module]}else{parent.prototype[module]=parent.reg[module]}}var moduleOnLoadEventHandlers=onLoadEventHandlers[module];if(moduleOnLoadEventHandlers!=undefined&&moduleOnLoadEventHandlers.length>0){for(var j=0;j<moduleOnLoadEventHandlers.length;j++){if(typeof moduleOnLoadEventHandlers[j]==="function"){moduleOnLoadEventHandlers[j]()}}}}};var pageData;if(window.pageData){pageData=window.pageData}else{var data=jQuery.ajax({url:location.pathname+".json"+location.search,dataType:"json",async:false});pageData=JSON.parse(data.responseText)}uAdmin("data",pageData);return uAdmin})();jQuery(document).ready(function(){var a=uAdmin();a.init();if(a.isCustomFunction("uAdminInit")){cmsCustoms.uAdminInit()}});uAdmin(".panel",function(b){function a(){var c=this;$("html").addClass("u-eip");this.panelHolder=this.addPanelHolder();this.quickpanel=this.addQuickpanel();this.showHideBtn=this.addShowHideBtn();this.drawControls();$(document).bind("click",function(f){if(!$(f.target).parents("#u-quickpanel").length){c.changeAct()}});if(!$.cookie("eip-panel-state-first")){this.quickpanel.css({overflow:"hidden",height:"0"});this.showHideBtn.addClass("collapse");this.quickpanel.delay(500).animate({height:"38px"},500,function(){$(this).css("overflow","visible");c.showHideBtn.removeClass("collapse")});this.quickpanel.fadeTo(300,0.3);this.quickpanel.fadeTo(300,1);$.cookie("eip-panel-state","",{path:"/",expires:0});var e=new Date();e.setTime(e.getTime()+(30*24*60*60*1000));$.cookie("eip-panel-state-first","Y",{path:"/",expires:e})}var d=c.getUrlPrefix()+"/admin/content/frontendPanel/.json?links";d+="&ts="+Math.round(Math.random()*1000);$.ajax({url:d,dataType:"json",success:this.onLoadData})}a.prototype.getUrlPrefix=function(){return uAdmin.lang_prefix?"/"+uAdmin.lang_prefix:""};a.prototype.drawControls=function(){this.exitButton=this.addExitButton();this.helpButton=this.addHelpButton();this.butterfly=this.addButtrfly();this.eipHolder=this.addEipHolder();this.editMenu=this.addEditMenu();this.lastDoc=this.addLastDoc();this.changelogDd=this.addChangelogDd();this.note=this.addNote();this.metaHolder=this.addMetaHolder()};a.prototype.addPanelHolder=function(){return $('<div id="u-panel-holder" />').appendTo("body")};a.prototype.addQuickpanel=function(){if(!this.panelHolder.length){return null}return $('<div id="u-quickpanel" />').appendTo(this.panelHolder)};a.prototype.addShowHideBtn=function(){if(!this.panelHolder.length){return null}var c=this;return $('<div id="u-show_hide_btn" title="' + getLabel("js-group-collapse") + '" />').appendTo(this.panelHolder).click(function(){c.swap(this)})};a.prototype.addExitButton=function(){if(!this.quickpanel.length){return null}var c=this;return $('\n			<div id="exit" title="'+getLabel("js-panel-exit")+'">&#160;</div>\n		').appendTo(this.quickpanel).click(function(){window.location=c.getUrlPrefix()+"/users/logout/";return false})};a.prototype.addHelpButton=function(){if(!this.quickpanel.length){return null}return $('\n			<div id="help" title="'+getLabel("js-panel-documentation")+'">&#160;</div>\n		').appendTo(this.quickpanel).click(function(){window.open("http://help.docs.umi-cms.ru");return false})};a.prototype.addButtrfly=function(){if(!this.quickpanel.length){return null}return $('\n			<div id="butterfly">\n				<span class="in_ico_bg">&#160;</span>'+getLabel("js-panel-modules")+'\n				<div class="bg">\n					<ul id="u-mods-cont-left" />\n					<ul id="u-mods-cont-right" />\n					<div class="clear separate" />\n					<ul id="u-mods-utils" />\n					<ul id="u-mods-admin" />\n					<div class="clear" />\n				</div>\n			</div>\n		').appendTo(this.quickpanel)};a.prototype.addEipHolder=function(){if(!this.quickpanel.length){return null}return $("<div />").attr({id:"eip_holder", title:getLabel('js-panel-edit')}).appendTo(this.quickpanel)};a.prototype.addMetaHolder=function(){if(!this.quickpanel.length){return null}return $("<div />").attr({id:"meta_holder",title: getLabel('js-panel-meta')}).appendTo(this.quickpanel)};a.prototype.addEditMenu=function(){if(!this.quickpanel.length){return null}return $('\n			<div id="edit_menu" title="'+getLabel("js-panel-edit-menu")+'">\n				<span class="in_ico_bg">&#160;</span>\n				<div>\n					<ul id="u-docs-edit"/>\n					<span class="clear" />\n				</div>\n			</div>\n		').appendTo(this.quickpanel)};a.prototype.addLastDoc=function(){if(!this.quickpanel.length){return null}var c=this;return $('\n			<div id="last_doc">\n				<span class="in_ico_bg" />\n				'+getLabel("js-panel-last-documents")+'\n				<div>\n					<ul id="u-docs-recent" />\n					<span class="clear" />\n				</div>\n			</div>\n		').appendTo(this.quickpanel).click(function(){c.changeAct(this)})};a.prototype.addChangelogDd=function(){if(!this.quickpanel.length){return null}var c=this;return $('\n			<div id="changelog_dd" style="display:none;">\n				<span class="in_ico_bg">&#160;</span>\n				'+getLabel("js-panel-history-changes")+'\n				<div>\n					<ul id="u-changelog" />\n					<span class="clear" />\n				</div>\n			</div>\n		').appendTo(this.quickpanel).click(function(){c.changeAct(this)})};a.prototype.addNote=function(){if(!this.quickpanel.length){return null}return $('\n			<div id="note">\n				<span class="in_ico_bg">&#160;</span>\n				'+getLabel("js-panel-note")+"\n			</div>\n		").appendTo(this.quickpanel)};a.prototype.addSeoButton=function(){if(!this.quickpanel.length){return null}var c=this;return $('\n			<div id="seo">				<span class="in_ico_bg">&#160;</span>\n				'+getLabel("module-seo")+"\n			</div>\n		").appendTo(this.quickpanel).click(function(){window.location=c.getUrlPrefix()+"/admin/seo/"})};a.prototype.onLoadData=function(e){var l=uAdmin.panel;if(!l){return false}$('<link type="text/css" rel="stylesheet" href="/styles/skins/_eip/css/theme.css" />').appendTo("head");var g,c;for(g in e.documents.recent.page){g=e.documents.recent.page[g];$("ul#u-docs-recent",l.lastDoc).append('<li><a href="'+g.link+'">'+g.name+"</a></li>")}var f=0;for(g in e.documents.editable.page){g=e.documents.editable.page[g];if(typeof g!=="object"){continue}for(c in e.modules.module){c=e.modules.module[c];if(c.name==g.basetype.module){continue}}$("ul#u-docs-edit",l.quickpanel||null).append('<li><a href="'+l.getUrlPrefix()+g["edit-link"]+'">'+g.name+"</a></li>");f++}if(f&&l.editMenu){l.editMenu.click(function(){l.changeAct(this)})}else{if(l.editMenu){l.editMenu.hide(0)}}f=0;for(c in e.modules.module){c=e.modules.module[c];var d;switch(c.type){case"system":d="ul#u-mods-utils";break;case"util":d="ul#u-mods-admin";break;default:d=(++f%2)?"ul#u-mods-cont-left":"ul#u-mods-cont-right"}$(d,l.butterfly||null).append('<li><a href="'+l.getUrlPrefix()+"/admin/"+c.name+'/">'+c.label+"</a></li>")}if(f&&l.butterfly){l.butterfly.click(function(){l.changeAct(this)}).addClass("butterfly_hover")}if(typeof e.changelog!="undefined"&&l.changelogDd){for(var j in e.changelog.revision){j=e.changelog.revision[j];var k=j.date.std+(j.author.name?" - "+j.author.name:"")+(j.active=="active"?"&nbsp;&nbsp;&nbsp;&larr;":"");var h=j.link+"?force-redirect="+window.location.pathname;$("#u-changelog",l.changelogDd).append('<li><a href="'+h+'">'+k+"</a></li>")}l.changelogDd.css("display","")}else{if(l.changelogDd){l.changelogDd.css("display","none")}}if(typeof e.tickets!="undefined"&&typeof uAdmin.tickets=="object"){uAdmin.tickets.draw(e)}else{if(l.note){l.note.remove()}}};a.prototype.swap=function(d){var c=$("#u-quickpanel").css("height");if(c=="0px"){return this.expand(d)}else{if(uAdmin.eip.meta.enabled){$("#u-quickpanel #meta").trigger("click")}return this.collapse(d)}};a.prototype.expand=function(d){var c=$("#u-quickpanel");c.css("overflow","visible");c.animate({height:"38px"},700);$(d).removeClass("collapse").attr( "title", getLabel("js-group-collapse"));$.cookie("eip-panel-state","",{path:"/",expires:0})};a.prototype.collapse=function(e){var d=$("#u-quickpanel");d.css("overflow","hidden");d.animate({height:"0"},700);$(e).addClass("collapse").attr( "title", getLabel("js-group-expand"));var c=new Date();c.setTime(c.getTime()+(30*24*60*60*1000));$.cookie("eip-panel-state","collapsed",{path:"/",expires:c})};a.prototype.loadRes=function(c,e,f){var d;switch(c){case"js":case"text/javascript":d=document.createElement("script");d.src=e;d.charset="utf-8";break;case"css":case"text/css":d=document.createElement("link");d.href=e;d.rel="stylesheet";break;default:return}document.body.parentNode.firstChild.appendChild(d);if(typeof f=="function"){$(document).one("ready",f)}};a.prototype.changeAct=function(f){var d=(uAdmin.eip&&uAdmin.eip.enabled)?"[id != 'edit'][id != 'ieditor-switcher']":"",c=$("#save_edit");if(!f){$("#u-quickpanel .act div:first").hide();$("#u-quickpanel .act"+d).removeClass("act")}else{if($(f).hasClass("act")){$("#u-quickpanel .act div:first").hide();$("#u-quickpanel .act"+d).removeClass("act");if(f.id=="edit"){c.css("display","none")}}else{var e=$("#u-quickpanel .act"),g=false;if(e.length){$("#u-quickpanel .act div:first").hide();$("#u-quickpanel .act"+d).removeClass("act");if(f.id=="edit"&&!d){c.css("display","none")}}if($.browser.opera){g=$(f).width()}$(f).addClass("act");if(g){$(f).width(g)}$("#u-quickpanel .act div:first").show();if(f.id=="edit"){c.css("display","block")}}}if($(f).attr("id")!="meta"&&uAdmin.eip&&uAdmin.eip.meta.enabled){$("#u-quickpanel #meta").addClass("act")}
}; a.prototype.editInAdmin=function(c){if(c=="enable"){$(document).bind("keypress",this.editInAdmin.bindEvents)}if(c=="disable"){$(document).unbind("keypress",this.editInAdmin.bindEvents)}};a.prototype.editInAdmin.bindEvents=function(c){if(c.shiftKey){switch(c.charCode||c.keyCode){case 68:case 100:case 1042:case 1074:$("#u-quickpanel #edit_menu").each(function(d,e){uAdmin.panel.changeAct(e)});break}}};return b(a,this)});uAdmin(".tickets",function(b){function a(){var d=100;this.defaultColor="#FFFFE1";this.colorProperty="ticketsColor";this.buttonSelector="#u-quickpanel #note, #quickpanel #note";var c=function(f){jQuery.jGrowl(f,{header:"UMI.CMS",life:5000})};var e=function(h){var f=this;f.params=h;(function g(){if(h.message){f.createMessage()}f.update()})()};e.prototype.rollbackParams=function(){if(this.params.oldWidth){this.params.width=this.params.oldWidth}if(this.params.oldHeight){this.params.height=this.params.oldHeight}if(this.params.oldX){this.params.x=this.params.oldX}if(this.params.oldY){this.params.y=this.params.oldY}if(this.params.oldMessage){this.params.message.text=this.params.oldMessage}};e.prototype.resetSelection=function(){if(document.selection&&document.selection.empty){document.selection.empty()}else{if(window.getSelection){var f=window.getSelection();if(f&&f.removeAllRanges){f.removeAllRanges()}}}};e.prototype.createMessage=function(){var f=this;f.messageNode=jQuery('<div class="u-ticket-comment"><div /><textarea /><a /></div>').appendTo("body");f.messageNode.css("background-color",f.params.message.color);f.messageNode.draggable({scroll:false,containment:document.body,stop:function(g,h){f.params.oldX=f.params.x;f.params.oldY=f.params.y;f.params.x=h.position.left;f.params.y=h.position.top;f.save()}});if(f.params.message){jQuery("div",f.messageNode).html("<span>"+f.params.message.authorName+" ("+f.params.message.authorLogin+")</span>");jQuery("textarea",f.messageNode).prop("value",f.params.message.text)}f.messageNode.resizable({minWidth:jQuery("div:first-child span",f.messageNode).outerWidth(),minHeight:d,containment:document.body,start:function(){jQuery(f.messageNode).css("cursor","default")},stop:function(g,h){f.params.oldWidth=f.params.width;f.params.oldHeight=f.params.height;f.params.width=h.size.width;f.params.height=h.size.height;f.save();jQuery(f.messageNode).css("cursor","move")}});jQuery("a",f.messageNode).html(getLabel("js-ticket-delete"));jQuery("textarea",f.messageNode).bind("change",function(){f.save()});jQuery("textarea",f.messageNode).bind("focus",function(){f.params.oldMessage=jQuery(this).prop("value")});jQuery("a",f.messageNode).bind("click",function(){f.del()})};e.prototype.del=function(){var f=this;if(f.params.id){var g="/tickets/manage/delete/"+f.params.id+"/";jQuery.ajax({url:g,dataType:"json",type:"get",success:function(j){if(j&&typeof j.error=="string"){c(j.error);return}h(f.node,f.messageNode)}})}else{h(f.node,f.messageNode)}function h(k,j){if(k&&typeof k.remove=="function"){k.remove()}if(j&&typeof j.remove=="function"){j.remove()}}};e.prototype.save=function(){var f=this;var h=f.params.id?"modify":"create";var g="/tickets/manage/"+h+"/"+f.params.id+"/";g+="?ts="+Math.round(Math.random()*1000);jQuery.ajax({type:"POST",url:g,dataType:"json",data:{x:f.params.x,y:f.params.y,width:f.params.width,height:f.params.height,message:jQuery("textarea",f.messageNode).prop("value"),color:f.params.message.color||uAdmin.tickets.defaultColor,referer:window.location.href.split("#")[0]},success:function(j){if(j&&typeof j.error=="string"){c(j.error);f.rollbackParams();f.update();return}f.params.id=j.id}})};e.prototype.update=function(){var f=this;f.params.width=f.params.width||f.messageNode.outerWidth();f.params.height=f.params.height||f.messageNode.outerHeight();if(f.messageNode){jQuery("textarea",f.messageNode).prop("value",f.params.message.text);f.messageNode.css({top:parseInt(f.params.y),left:parseInt(f.params.x),width:f.params.width,height:f.params.height})}};this.ticket=e}a.prototype.initNewTicket=function(){this.changeState(jQuery(this.buttonSelector).get(0));if(!uAdmin.tickets.created){alert(getLabel("js-panel-note-add"));uAdmin.tickets.created=true}if(uAdmin.tickets.isInit){return false}uAdmin.tickets.isInit=true;var d=this;var e=uAdmin.tickets.user.fname;var c=(uAdmin.tickets.user.lname==null)?"":" "+uAdmin.tickets.user.lname;jQuery(document).one("mousedown",function(f){new uAdmin.tickets.ticket({x:f.pageX,y:f.pageY,message:{authorName:e+c,authorLogin:uAdmin.tickets.user.login,color:uAdmin.tickets.user[d.colorProperty],text:getLabel("js-ticket-empty")}});uAdmin.tickets.isInit=false;d.changeState(jQuery(d.buttonSelector).get(0))})};a.prototype.changeState=function(e){var d=jQuery(e);if(typeof uAdmin.panel=="object"){uAdmin.panel.changeAct(e)}else{if(jQuery("#quickpanel").length>0){var c="act";if(d.hasClass(c)){d.removeClass(c)}else{d.addClass(c)}}}};a.prototype.swapVisible=function(){this.disabled?this.enable():this.disable()};a.prototype.disable=function(){var c=this;jQuery("div.u-ticket, div.u-ticket-comment, "+c.buttonSelector).hide();jQuery(document).unbind("keydown",c.bindEvents);jQuery(c.buttonSelector).unbind("click",c.bindEvents);c.disabled=true};a.prototype.enable=function(){var c=this;jQuery("div.u-ticket, div.u-ticket-comment, "+c.buttonSelector).show();jQuery(document).bind("keydown",c.bindEvents);jQuery(c.buttonSelector).bind("click",c.bindEvents);c.disabled=false};a.prototype.bindEvents=function(c){if(c.delegateTarget!==document){c.preventDefault()}if((c.shiftKey&&(c.keyCode==67||c.keyCode==99)&&(c.target.nodeName!="INPUT"&&c.target.nodeName!="TEXTAREA"))||(c.type=="click"&&document.getElementById("note").id=="note")){uAdmin.tickets.initNewTicket()}};a.prototype.draw=function(j){var d=this;uAdmin.tickets.user=j.user;for(var f in j.tickets.ticket){f=j.tickets.ticket[f];var k=f.position,h=f.author;var g=h.fname;var c=(h.lname==null)?"":" "+h.lname;var e=new this.ticket({id:f.id,x:k.x,y:k.y,width:k.width,height:k.height,message:{authorName:g+c,authorLogin:h.login,color:h[d.colorProperty]||d.defaultColor,text:f.message}});e.update()}};a.prototype.disabled=true;a.prototype.isInit=false;return b(a,this)});uAdmin(".eip",function(b){function a(){this.isMac=(navigator.userAgent.indexOf("Mac OS")!=-1);this.drawControls();if(uAdmin.data&&uAdmin.data.pageId){this.metaInit()}else{uAdmin.onLoad("data",function(){uAdmin.eip.metaInit()})}this.bindEditorEvents();if(!uAdmin.tickets&&uAdmin.panel){uAdmin.onLoad("tickets",this.activateByCookie)}else{if(uAdmin.tickets&&!uAdmin.panel){uAdmin.onLoad("panel",this.activateByCookie)}else{uAdmin.onLoad("eip",this.activateByCookie)}}this.init();this.bindGlobalEvents()}a.prototype.init=function(){this.deleteButtonsTimeout=null;this.initEditBoxes()};a.prototype.initEditBoxes=function(){var c=this;jQuery(document).on("mouseover",".u-eip-edit-box",function(){c.editBoxMouseoverHandler(this)});jQuery(document).on("mouseout",".u-eip-edit-box-hover",function(){c.editBoxMouseoutHandler(this)})};a.prototype.editBoxMouseoverHandler=function(d){var c=this,e=jQuery(d).addClass("u-eip-edit-box-hover"),f=c.searchAttr(d);if(e.attr("umi:delete")&&f.id){c.addDeleteButton(d,f)}else{c.dropDeleteButtons()}d.onclick=function(g){d.onclick=function(){return true};if(window.event){return window.event.ctrlKey}else{return g.ctrlKey}}};a.prototype.editBoxMouseoutHandler=function(d){var e=jQuery(d).removeClass("u-eip-edit-box-hover"),c=this;if(e.attr("umi:delete")){c.deleteButtonsTimeout=setTimeout(c.dropDeleteButtons,500)}e.click(function(){return true})};a.prototype.addDeleteButton=function(d,e){var c=this;if(this.deleteButtonsTimeout){clearTimeout(this.deleteButtonsTimeout)}this.dropDeleteButtons();var f=document.createElement("div");jQuery(f).attr("class","eip-del-button");document.body.appendChild(f);c.placeWith(d,f,"right","middle");jQuery(f).bind("mouseover",function(){if(c.deleteButtonsTimeout){clearTimeout(c.deleteButtonsTimeout)}}).bind("mouseout",function(){c.deleteButtonsTimeout=setTimeout(c.dropDeleteButtons,500)}).bind("click",function(){e["delete"]=true;c.queue.add(e);uAdmin.eip.normalizeBoxes()});return f};a.prototype.dropDeleteButtons=function(){jQuery(".eip-del-button").remove()};a.prototype.bindGlobalEvents=function(){this.bindKeyboardShortcut();window.onresize=function(){uAdmin.eip.normalizeBoxes()}};a.prototype.bindKeyboardShortcut=function(){jQuery(document).bind("keydown",function(c){if(c.keyCode==113){uAdmin.eip.swapEditor()}})};a.prototype.activateByCookie=function(){if(jQuery.cookie("eip-editor-state")){uAdmin.eip.swapEditor()}else{uAdmin.tickets.enable();uAdmin.panel.editInAdmin("enable")}};a.prototype.drawControls=function(){this.editorToggleButton=this.addEditorToggleButton();this.editorControlsHolder=this.addEditorControlsHolder();this.saveButton=this.addSaveButton();this.undoButton=this.addUndoButton();this.redoButton=this.addRedoButton()};a.prototype.addEditorControlsHolder=function(){return jQuery('\n			<div id="save_edit"></div>\n		').appendTo(uAdmin.panel.eipHolder)};a.prototype.addSaveButton=function(){var c=this;if(!this.editorControlsHolder){return null}return jQuery('\n			<div id="save" title="'+getLabel("js-panel-save")+" ("+(this.isMac?"Cmd":"Ctrl")+'+S)">&#160;</div>\n		').appendTo(this.editorControlsHolder).click(function(){c.queue.save();return false})};a.prototype.addUndoButton=function(){var c=this;if(!this.editorControlsHolder){return null}return jQuery('\n			<div id="edit_back" title="'+getLabel("js-panel-cancel")+" ("+(this.isMac?"Cmd":"Ctrl")+'+Z)">&#160;</div>\n		').appendTo(this.editorControlsHolder).click(function(){c.queue.back();return false})};a.prototype.addRedoButton=function(){var c=this;if(!this.editorControlsHolder){return null}return jQuery('\n			<div id="edit_next" title="'+getLabel("js-panel-repeat")+" ("+(this.isMac?"Cmd+Shift+Z":"Ctrl+Y")+')">&#160;</div>\n		').appendTo(this.editorControlsHolder).click(function(){c.queue.forward();return false})};a.prototype.addEditorToggleButton=function(){var c=this,d=jQuery('\n				<div id="edit">\n					<span class="in_ico_bg">&#160;</span>\n					<span class="edit-button-label"></span> (F2)				</div>\n			');d.appendTo(uAdmin.panel.eipHolder).click(function(){c.swapEditor();return false});d.setLabelText=function(e){if(e){d.find(".edit-button-label").text(e)}};d.setLabelText(getLabel("js-panel-edit"));return d};a.prototype.metaInit=function(){var c=this;this.meta.element_id=uAdmin.data.pageId;function d(e){return(e||"").replace(/"/g,"&quot;")}this.meta.old={alt_name:d(uAdmin.data.page["alt-name"]),title:d(uAdmin.data.title),keywords:d(uAdmin.data.meta.keywords),descriptions:d(uAdmin.data.meta.description)};this.meta["new"]={};this.metaToggleButton=this.addMetaToggleButton();this.metaPanel=this.addMetaPanel();this.metaSaveButton=this.getMetaSaveButton();this.metaPanel.find('input[type!="submit"]').bind("blur",function(g){var f=this.name.replace(/^meta_/g,"");c.meta["new"][f]=this.value}).bind("keyup mousedown blur",function(){var e=this.value.length;if(e>255){this.value=this.value.substring(0,255)}else{var f=this.id+"-count";jQuery("#"+f).html(e)}}).trigger("keyup")};a.prototype.showBlockInfo=function(){};a.prototype.addMetaToggleButton=function(){var c=jQuery('\n			<div id="meta">\n				<span class="in_ico_bg">&#160;</span>\n				'+getLabel("js-panel-meta")+"\n			</div>\n		").appendTo(uAdmin.panel.metaHolder);if(this.addMetaToggleButtonClickHandler(c)){return c}c.click(function(){uAdmin.panel.changeAct(this);uAdmin.eip.metaPanel.toggle();uAdmin.eip.meta.enabled=uAdmin.eip.metaPanel.is(":visible");return false});return c};a.prototype.addMetaToggleButtonClickHandler=function(c){return false};a.prototype.addMetaPanel=function(){if(!uAdmin.panel.panelHolder){return null}var c=this;return jQuery('\n				<div id="u-quickpanel-meta">\n					<table>\n						<tr>\n							<td width="100px">'+getLabel("js-panel-meta-altname")+': </td>\n							<td>\n								<input type="text" name="alt_name" id="u-quickpanel-metaaltname" value="'+c.meta.old.alt_name+'"/>\n								<div class="meta_count" id="u-quickpanel-metaaltname-count"/>\n							</td>\n						</tr>\n						<tr>\n							<td width="100px">'+getLabel("js-panel-meta-title")+': </td>\n							<td>\n								<input type="text" name="title" id="u-quickpanel-metatitle" value="'+c.meta.old.title+'"/>\n								<div class="meta_count" id="u-quickpanel-metatitle-count"/>\n							</td>\n						</tr>\n						<tr>\n							<td>'+getLabel("js-panel-meta-keywords")+': </td>\n							<td>\n								<input type="text" name="meta_keywords" id="u-quickpanel-metakeywords" value="'+c.meta.old.keywords+'"/>\n								<div class="meta_count" id="u-quickpanel-metakeywords-count"/>\n								<div class="meta_buttons"><a href="/admin/seo/" style="color:white;">'+getLabel("js-panel-meta-analysis")+"</a></div>\n							</td>\n						</tr>\n						<tr>\n							<td>"+getLabel("js-panel-meta-descriptions")+':</td>\n							<td>\n								<input type="text" name="meta_descriptions" id="u-quickpanel-metadescription" value="'+c.meta.old.descriptions+'"/>\n								<div class="meta_count" id="u-quickpanel-metadescription-count"/>\n								<div class="meta_buttons">\n									<input type="submit" id="save_meta_button" value="'+getLabel("js-panel-save")+'">\n								</div>\n							</td>\n						</tr>\n					</table>\n				</div>\n			').appendTo(uAdmin.panel.panelHolder)};a.prototype.getMetaSaveButton=function(){if(!this.metaPanel){return null}var c=this;return this.metaPanel.find("#save_meta_button").click(function(){c.metaSave();return false})};a.prototype.metaSave=function(){var g={},d,c=this,f=0,e=0;for(d in c.meta["new"]){if(c.meta["new"][d]!=c.meta.old[d]){g["field-name"]=((d=="keywords"||d=="descriptions")?"meta_"+d:d);g["element-id"]=c.meta.element_id;g.value=c.meta["new"][d];f++;jQuery.post("/admin/content/editValue/save.json",g,function(h){if(h.error){c.message(h.error);return}e++;if(e==f){c.message(getLabel("js-panel-message-changes-saved"));uAdmin.eip.metaToggleButton.click();c.onMetaSaved()}},"json")}delete c.meta["new"][d]}};a.prototype.onMetaSaved=function(){};a.prototype.bindEditorEvents=function(){this.bind("Enable",this.enableEventHandler);this.bind("Disable",this.disableEventHandler);this.bind("Repaint",this.repaintEventHandler);this.bind("Save",this.saveEventHandler)};a.prototype.enableEventHandler=function(c){if(c=="after"){uAdmin.panel.changeAct(uAdmin.eip.editorToggleButton.get(0))}};a.prototype.disableEventHandler=function(c){if(c=="after"){uAdmin.panel.changeAct(uAdmin.eip.editorToggleButton.get(0))}};a.prototype.repaintEventHandler=function(c){};a.prototype.saveEventHandler=function(c){};a.prototype.swapEditor=function(){this.onSwapEditor();if(this.enabled){this.disable();this.editorToggleButton.setLabelText(getLabel("js-panel-edit"));jQuery("#eip_holder").attr( "title", getLabel("js-panel-edit"));jQuery("#on_edit_in_place").html(getLabel("js-on-eip"));uAdmin.tickets.enable();uAdmin.panel.editInAdmin("enable");this.onSwapEnabledEditor()}else{this.enable();jQuery("#eip_holder").attr( "title", getLabel("js-panel-view"));this.editorToggleButton.setLabelText(getLabel("js-panel-view"));jQuery("#on_edit_in_place").html(getLabel("js-off-eip"));uAdmin.tickets.disable();uAdmin.panel.editInAdmin("disable");this.onSwapDisabledEditor()}this.bindEvents()};a.prototype.onSwapEditor=function(){};a.prototype.onSwapEnabledEditor=function(){};a.prototype.onSwapDisabledEditor=function(){};a.prototype.enable=function(){var c=this;c.onEnable("before");c.finishLast();c.inspectDocument();c.highlight();c.normalizeBoxes();jQuery(window).on("load",function(){setTimeout(function(){c.normalizeBoxes()},250)});c.enabled=true;if(c.queue.current>=0){c.queue.setSaveStatus(true)}var d=new Date();d.setTime(d.getTime()+(3*24*60*60*1000));jQuery.cookie("eip-editor-state","enabled",{path:"/",expires:d});c.message(getLabel("js-panel-message-edit-on"));jQuery(document).bind("keydown",c.bindHotkeys);c.onEnable("after")};a.prototype.disable=function(){this.onDisable("before");this.finishLast();this.unhighlight();this.enabled=false;jQuery.cookie("eip-editor-state","",{path:"/",expires:0});this.queue.setSaveStatus(false);this.message(getLabel("js-panel-message-edit-off"));if(this.queue.current>=0){this.onDisableWithQueueSave()}jQuery(document).unbind("keydown",this.bindHotkeys);this.onDisable("after")};a.prototype.onDisableWithQueueSave=function(){var c=this;jQuery.openPopupLayer({name:"save",width:200,height:80,data:'\n            						<div class="eip_win_head popupHeader">\n            							<div class="eip_win_close popupClose">&#160;</div>\n            						</div>\n                                    <div class="eip_win_body popupBody">\n                                    <div class="popupText">'+getLabel("js-panel-message-save-confirm")+'</div>\n  z                                  <div class="eip_buttons">\n                                        <input type="button" class                                        ="primary ok" id="saveProgressBtn" value="OK" />\n                                        <input type="button" id="closeProgressBtn"class                                        ="primary back" id="" value="?????????????????????????"/>\n                                        <div style="clear: both;" />\n                                    </div>\n            					'});jQuery("#saveProgressBtn").click(function(){jQuery.closePopupLayer("save");uAdmin.eip.queue.save()});jQuery("#closeProgressBtn").click(function(){jQuery.closePopupLayer("save")})};a.prototype.bind=function(d,g){var c=this,e=(typeof c["on"+d]=="function")?c["on"+d]:function(){};c["on"+d]=function(h,f){e(h,f);g(h,f)}};a.prototype.trigger=function(e,d,c){if(typeof this["on"+e]=="function"){this["on"+e](d,c)}};a.prototype.bindHotkeys=function(d){var c=uAdmin.eip.queue;if(navigator.userAgent.indexOf("Mac OS")!=-1){if(d.metaKey){switch(d.keyCode){case 83:c.save();break;case 90:if(d.shiftKey){c.forward()}else{c.back()}break;default:return true}return false}}else{if(d.ctrlKey){switch(d.keyCode){case 83:c.save();break;case 90:c.back();break;case 89:c.forward();break;default:return true}return false}}return true};a.prototype.finishLast=function(){if(this.previousEditBox){this.previousEditBox.finish(true);this.previousEditBox=null}};a.prototype.normalizeBoxes=function(){var c=this;jQuery(c.listNodes).each(function(h,l){if(!l.boxNode){return}var f=c.nodePositionInfo(l);jQuery(l.boxNode).css({width:f.width,height:f.height,left:f.x,top:f.y});var j=l.addButtonNode;var k="bottom",e="left";if(j){var g;if((g=jQuery(l).attr("umi:button-position"))){var d=g.split(/ /);if(d.length==2){k=d[0];e=d[1]}}c.placeWith(l,j,k,e)}});c.onRepaint("after")};a.prototype.bindEvents=function(){var d=this,c=jQuery(".u-eip-edit-box");jQuery(document).off("click drop dragexit dragover",".u-eip-edit-box");c.unbind("click");c.unbind("drop");c.unbind("dragexit");c.unbind("dragover");var e="click";if(navigator.userAgent.toLowerCase().indexOf("firefox")||navigator.userAgent.toLowerCase().indexOf("chrome")){e=e+" drop";jQuery(document).on("dragexit",".u-eip-edit-box",function(f){f.stopPropagation();f.preventDefault()});jQuery(document).on("dragover",".u-eip-edit-box",function(f){f.stopPropagation();f.preventDefault()})}jQuery(document).on(e,".u-eip-edit-box",function(j){var h=j.target;if(j.ctrlKey||(navigator.userAgent.indexOf("Mac OS")!=-1&&j.metaKey)){if(this.tagName=="A"){location.href=this.href}return true}var g=(typeof h.onclick=="function")?h.onclick:function(){};var k=function(){return false};h.onclick=k;setTimeout(function(){if(h&&g!=k){h.onclick=g}},100);for(var f=0;f<25;f++){if(!h){return false}if(h.tagName!="TABLE"&&jQuery(h).attr("umi:field-name")){break}h=h.parentNode}if(!h){return false}j.stopPropagation();j.stopImmediatePropagation();j.preventDefault();d.edit(h,j&&j.originalEvent&&j.originalEvent.dataTransfer?j.originalEvent.dataTransfer.files:null);j.stopPropagation();j.stopImmediatePropagation();j.preventDefault();return false});window.onbeforeunload=function(){if(uAdmin.eip.queue.current>=0||uAdmin.eip.queue.save.count>0){return getLabel("js-panel-message-save-before-exit")}}};a.prototype.inspectDocument=function(){var c=this;c.editNodes=[];c.listNodes=[];var d=c.getRegions();d.each(function(e,f){if(jQuery(f).css("display")=="none"){return}c.inspectNode(f)})};a.prototype.inspectNode=function(c){if(c.tagName=="TABLE"){return}if(jQuery(c).attr("umi:field-name")){this.editNodes.push(c)}if(jQuery(c).attr("umi:module")){this.listNodes.push(c)}if(jQuery.browser.msie){jQuery(c).parents("a:first").each(function(){var d=this.href;jQuery(this).click(function(f){if(f.ctrlKey){window.location.href=d}});this.removeAttribute("href")})}};a.prototype.getRegions=function(){return jQuery("*[umi\\:field-name], *[umi\\:module]")};a.prototype.isParentOf=function(d,c){if(!c||!d){return false}if(c==d){return true}if(d.parentNode){return this.isParentOf(d.parentNode,c)}return false};a.prototype.highlight=function(d,c){var e=this;if(e.highlighted){e.unhighlight()}e.highlighted=true;jQuery(e.editNodes).each(function(f,g){if(e.isParentOf(g,d)==false){e.highlightNode(g)}});if(!c){jQuery(e.listNodes).each(function(f,g){if(e.isParentOf(g,d)==false){e.highlightListNode(g)}})}e.onRepaint("after");e.markInversedBoxes()};a.prototype.unhighlight=function(){var c=jQuery(".u-eip-edit-box");c.each(function(d,e){e=jQuery(e);var f=e.attr("umi:empty");if(f&&(e.attr("tagName")!="IMG")&&(e.html()==f)){e.html("")}e.attr("title","")});c.removeClass("u-eip-edit-box u-eip-edit-box-hover u-eip-modified u-eip-deleted u-eip-edit-box-inversed");c.unbind("click");c.unbind("mouseover");c.unbind("mouseout");c.unbind("mousedown");c.unbind("mouseup");jQuery(".u-eip-add-box, .u-eip-add-button, .u-eip-del-button").remove();jQuery(".u-eip-sortable").sortable("destroy");jQuery(".u-eip-sortable").removeClass("u-eip-sortable")};a.prototype.highlightNode=function(d){if(!jQuery(d).attr("umi:field-name")){return}var h=this.searchAttr(d);if(!h){return}var f=this.htmlTrim(jQuery(d).attr("umi:empty"));if(f&&this.htmlTrim(jQuery(d).html())==""&&(jQuery(d).attr("tagName")!="IMG")){try{jQuery(d).html(f)}catch(g){}jQuery(d).addClass("u-eip-empty-field")}jQuery(d).addClass("u-eip-edit-box");if(this.queue.search(h)){jQuery(d).addClass("u-eip-modified")}if(d.tagName=="A"||d.parentNode.tagName=="A"||jQuery("a",d).length>0){var c=getLabel("js-panel-link-to-go");if(navigator.userAgent.indexOf("Mac OS")!=-1){c=c.replace(/Ctrl/g,"Cmd")}jQuery(d).attr("title",c);jQuery(d).bind("dblclick",function(){return false})}else{jQuery(d).attr("title","")}this.markInversedBoxes(jQuery(d))};a.prototype.searchAttr=function(d,h,c){if(!d){return false}var f;c=c||20;if(this.getAttrSearchReturnCondition(c,d.tagName)){return false}if(!this.searchAttr.info.node&&jQuery(d).attr("umi:field-name")){this.searchAttr.info.node=d;var g=jQuery(d).attr("umi:field-name");if(!g&&typeof h!="function"){this.message("You should specify umi:field-name attribute");return false}if(!this.searchAttr.info.field_name){this.searchAttr.info.field_name=g}}var e=jQuery(d);if(typeof h!="function"||h(d)){if(e.attr("umi:element-id")){this.searchAttr.info.id=e.attr("umi:element-id");this.searchAttr.info.type="element";f=this.searchAttr.info;this.searchAttr.info={};return f}else{if(e.attr("umi:object-id")){this.searchAttr.info.id=e.attr("umi:object-id");this.searchAttr.info.type="object";f=this.searchAttr.info;this.searchAttr.info={};return f}}}if(d.parentNode){return this.searchAttr(d.parentNode,h,--c)}this.message("You should specify umi:element-id or umi:object attribute");return false};a.prototype.getAttrSearchReturnCondition=function(c,d){return jQuery.inArray(d,["BODY","TABLE"])>=0};a.prototype.searchAttr.info={};a.prototype.searchRow=function(d,c){if(c){if(d.tagName=="BODY"||d.tagName=="TABLE"){return false}if(jQuery(d.parentNode).attr("umi:region")){return d.parentNode}else{return this.searchRow(d.parentNode,true)}}else{return jQuery("*[umi\\:region]",d).filter(function(){var e='[umi\\:element-id^="new"], [umi\\:object-id^="new"]';return !jQuery(this).find(e).length&&!jQuery(this).is(e)}).get(0)}};a.prototype.searchRowId=function(d){var c=jQuery(d).attr("umi:element-id");return c||(jQuery("*[umi\\:element-id]",d).length?jQuery("*[umi\\:element-id]",d).get(0).attr("umi:element-id"):null)};a.prototype.inlineAddPage=function(p){var n=this,f=n.searchRow(p);if(!f){n.message("Error, umi:region=row is not defined");return false}p=jQuery(p);var q={element:p.attr("umi:element-id"),object:p.attr("umi:object-id")},j=p.attr("umi:type-id");var g=false;jQuery(".u-eip-deleted").each(function(w,x){if(n.searchAttr(x).id==(q.element||q.object)){g=true;return}});if(g){n.message(getLabel("js-panel-message-cant-add"));return false}if(!j&&q.element){if(q.element.match(/^new/g)){var k=n.queue.search({id:q.element});j=k.type_id}else{var v=jQuery.ajax({url:"/admin/content/getTypeAdding/"+q.element+"/.json",async:false,dataType:"json"});v=JSON.parse(v.responseText);j=v.result}}if(!j){n.message("Error, umi:type-id is not defined");return false}var u=(p.attr("umi:method")=="lastlist"||jQuery(p).attr("umi:add-prepend")=="prepend"),d=jQuery(f).clone(),h=(u)?d.prependTo(f.parentNode):d.appendTo(f.parentNode);h.removeClass("blank_item");var m=function(y){var x,w;if(jQuery(y).attr("umi:field-name")){return y}else{if(y.children){for(w=0;w<y.children.length;w++){x=m(y.children[w]);if(x){return x}}}}return false};d=m(h.get(0));if(!d){n.message("Error, umi:field-name is not defined");return false}var s=n.searchAttr(d);s.id="new_"+new Date().getTime();s.type_id=j;s.add=true;s.node=h.get(0);if(q.object){s.parent=q.object;s.type="object"}if(q.element){s.parent=q.element;s.type="element"}delete s.field_name;if(jQuery(f).attr("umi:"+s.type+"-id")==""){jQuery(f).remove();jQuery(h).attr("umi:"+s.type+"-id",s.id);jQuery("*",h).each(function(w,x){if(!x.children.length){x.style.display=""}})}var e=jQuery.ajax({url:"/admin/content/getTypeFields/"+j+"/.json",async:false,dataType:"json"});e=jQuery.parseJSON(e.responseText);var o=[];for(var r in e){if(parseInt(r)==r){o.push(e[r])}}o.push("name");var c=function(w){var y="umi:"+s.type+"-id";if(jQuery(w).attr("tagName")=="TABLE"){return}if(jQuery(w).attr("umi:field-name")){if(jQuery.inArray(jQuery(w).attr("umi:field-name"),o)==-1){return false}var x=jQuery(w).attr("umi:empty");n.onClearTags(w);if(jQuery(w).is("img")&&x){jQuery(w).attr("src",x)}else{jQuery(w).html(x?x:"")}jQuery(w).addClass("u-eip-empty-field");n.editNodes[n.editNodes.length]=w}if(jQuery(w).attr(y)){jQuery(w).attr("umi:clone-source-id",jQuery(w).attr(y));jQuery(w).attr(y,s.id)}};var l=jQuery('*[umi\\:region="row"]',h).get(0);jQuery('*[umi\\:region="row"]',h).remove();c(h);h.addClass("u-eip-newitem");var t=jQuery("*",h);t.each(function(w,x){n.inspectNode(x);n.highlightListNode(x);if(jQuery(x).attr("umi:region")){jQuery(x).html(l);jQuery("*",x).each(function(y,z){z=jQuery(z);if(!z.children().length){z.text("");z.css("display","none")}if(z.attr("href")){z.attr("href","")}if(z.attr("umi:"+s.type+"-id")){z.attr("umi:"+s.type+"-id","")}})}c(x)});n.onAfterInlineAdd(h);n.queue.add(s);n.normalizeBoxes();return true};a.prototype.onClearTags=function(c){};a.prototype.onAfterInlineAdd=function(c){};a.prototype.onSuccessAddNewPage=function(d){this.onSuccessAddNewPageBegin(d);if(!d||d.forceReload){document.location.reload();return false}var e=jQuery("[umi\\:element-id="+d.parentId+"][umi\\:region=list][umi\\:add-method=popup]");if(!e.length){return false}var c=this;e.each(function(){c.appendNewPageToDOM(d,jQuery(this))});jQuery.closePopupLayer(null,{})};a.prototype.replaceNewPageAttributes=function(e,d){e.removeClass("current blank_item");if(e.is("[umi\\:url-attribute]")){e.attr(e.attr("umi:url-attribute"),d.url)}else{if(e.is("a")){e.attr("href",d.url)}}if(e.is("[umi\\:element-id]")){e.attr("umi:element-id",d.elementId)}if(e.is("[umi\\:field-name=name]")){e.text(d.title)}var c=this;e.children().each(function(){c.replaceNewPageAttributes(jQuery(this),d)})};a.prototype.appendNewPageToDOM=function(d,e){var c=e.find("[umi\\:region=row]").first().clone();this.replaceNewPageAttributes(c,d);c.appendTo(e)};a.prototype.onSuccessAddNewPageBegin=function(c){};a.prototype.htmlTrim=function(c){c=jQuery.trim(c);return c.replace(/<br ?\/?>/g,"").replace(/(<p>)|(<\/p>)/g,"")};a.prototype.markInversedBoxes=function(c){setTimeout(function(){if(!c){c=jQuery(".u-eip-edit-box")}c.each(function(e,g){var d=new RGBColor(jQuery(g).css("color"));var f=d.toHash();var h=(f.red/255+f.green/255+f.blue/224)/3;if(h>=0.9){jQuery(g).addClass("u-eip-edit-box-inversed")}})},500)};a.prototype.highlightListNode=function(f){var d=this;if(!jQuery(f).attr("umi:module")){return false}var e=document.createElement("div");document.body.appendChild(e);f.boxNode=e;var c=d.nodePositionInfo(f);if(!c.x&&!c.y){return false}jQuery(e).attr("class","u-eip-add-box");jQuery(e).css({position:"absolute",width:c.width,height:c.height,left:c.x,top:c.y});if(jQuery(f).attr("umi:add-method")!="none"){this.addAddButton(f,e)}if(jQuery(f).attr("umi:sortable")=="sortable"){this.setNodeSortable(f,e)}return e};a.prototype.addAddButton=function(c,d){var h=this.getEipAddButtonTagName(),e=document.createElement(h);c.addButtonNode=e;jQuery(e).attr({"class":"u-eip-add-button"}).html(getLabel("js-panel-add"));this.onSetAddButtonText(c,e);jQuery(e).hover(function(){jQuery(this).addClass("u-eip-add-button-hover")},function(){jQuery(this).removeClass("u-eip-add-button-hover")});this.onSetAddButtonHoverEvents(c,e);var j="bottom";var g="left";var k;if(k=jQuery(c).attr("umi:button-position")){var f=k.split(/ /);if(f.length==2){j=f[0];g=f[1]}}this.placeWith(c,e,j,g);var l=this;jQuery(e).bind("mouseup",function(){l.onAddButtonMouseup(c)}).bind("mouseover",function(){l.onAddButtonMouseover(d)}).bind("mouseout",function(){l.onAddButtonMouseout(d)});document.body.appendChild(e)};a.prototype.onSetAddButtonText=function(d,c){};a.prototype.onSetAddButtonHoverEvents=function(d,c){};a.prototype.onAddButtonMouseup=function(h){var o=this;var l=jQuery(h).attr("umi:region");var f=o.searchRow(h);var k=jQuery(h).attr("umi:element-id");var g=jQuery(h).attr("umi:module");var d=jQuery(h).attr("umi:method");var j=jQuery(h).attr("umi:add-method");var c=jQuery(h).attr("umi:type-id");if(f&&(l=="list")&&(j!="popup")){o.inlineAddPage(h);o.onListAddButtonMouseUp(jQuery(h))}else{if(o.queue.current>=0){o.message(getLabel("js-panel-message-save-first"));return}var e="/admin/content/eip_add_page/choose/"+parseInt(k)+"/"+g+"/"+d+"/",m=uAdmin.csrf?"?csrf="+uAdmin.csrf:"",n=c?"&type-id="+c:"";jQuery.ajax({url:e+".json"+m,dataType:"json",success:function(p){if(p.data.error){uAdmin.eip.message(p.data.error);return}jQuery.openPopupLayer({name:"CreatePage",title:getLabel("js-eip-create-page"),url:e+m+n});o.onListAddButtonMouseUp(jQuery(h))},error:function(){uAdmin.eip.message(getLabel("error-require-more-permissions"));return}})}};a.prototype.onListAddButtonMouseUp=function(c){};a.prototype.onAddButtonMouseupPopupOpened=function(){};a.prototype.onAddButtonMouseover=function(c){jQuery(c).addClass("u-eip-add-box-hover")};a.prototype.onAddButtonMouseout=function(c){jQuery(c).removeClass("u-eip-add-box-hover")};a.prototype.setNodeSortable=function(c,f){var l=this;jQuery(c).addClass("u-eip-sortable");var d=null,k=null,j,e,h=false,g=[];jQuery("*").each(function(p,q){if(q.tagName=="TABLE"){return}if(jQuery(q).attr("umi:sortable")!="sortable"){return}var o=false;jQuery(q).parents().each(function(r,n){if(n==c){o=true}});if(o){return}var m=false;jQuery("*",q).each(function(r,n){if(n==c){m=true}});if(m){return}g.push(q)});jQuery(c).sortable({items:'> [umi\\:region="row"]',tolerance:"pointer",cursor:"move",dropOnEmpty:true,revert:true,forcePlaceholderSize:true,placeholder:"u-eip-sortable-placeholder",update:function(p,q){j=q.item[0];if(!jQuery(j).hasClass("u-eip-newitem")&&!(window.cloudController&&window.cloudController.onController)){var o=jQuery.ajax({url:"/admin/content/eip_move_page/"+jQuery(j).attr("umi:element-id")+"/.json?check",async:false,dataType:"json",type:"GET"});var n=jQuery.parseJSON(o.responseText);if(n.error){jQuery(c).sortable("cancel");uAdmin.eip.message(n.error);return false}}var m=j.nextSibling;do{if(!m){break}if(m.nodeType!=1){continue}if(l.searchRowId(m)){break}}while(m=m.nextSibling);d=m;k=j.parentNode;var r=l.searchAttr(j.parentNode,function(t){return jQuery(t).attr("umi:sortable")=="sortable"});var s=parseInt(r?r.id:null);r.node=j;r.move=true;r.moved=l.searchRowId(j);r.next=m;r.old_next=d;r.parent_id=s;r.parent=j.parentNode;r.old_parent=k;delete r.field_name;d=null;k=null;l.normalizeBoxes();l.queue.add(r)}})};a.prototype.nodePositionInfo=function(c){c=jQuery(c);return{width:c.innerWidth(),height:c.innerHeight(),x:c.offset().left,y:c.offset().top}};a.prototype.placeWith=function(c,d,n,h){if(!c||!d){return}var g=this.nodePositionInfo(c);var l=jQuery(d);var m,k;switch(n){case"top":k=g.y-parseInt(l.css("height"));break;case"right":m=g.x+g.width;break;case"left":m=g.x-l.width();break;default:k=g.y+g.height}if(n=="top"||n=="bottom"){switch(h){case"right":m=g.x+g.width-l.width();break;case"middle":case"center":if(g.width-parseInt(l.css("width"))>0){m=g.x+Math.ceil((g.width-l.width())/2)}else{m=g.x}break;default:m=g.x;m+=parseInt(jQuery(c).css("padding-left"))}}else{switch(h){case"top":k=g.y;break;case"bottom":k=g.y+g.height-parseInt(l.css("height"));break;default:if(g.height-parseInt(l.css("height"))>0){k=g.y+Math.ceil((g.height-parseInt(l.css("height")))/2)}else{k=g.y}}}var o=l.width()+m;var f=jQuery(window);if(o>f.width()){m=f.width()-l.width()-30}try{l.css({position:"absolute",left:m+"px",top:k+"px","z-index":560})}catch(j){}};a.prototype.applyStyles=function(f,h,c){var e=["font-size","font-family","font-name","margin-left","margin-right","margin-top","margin-bottom","font-weight"],d;f=jQuery(f);h=jQuery(h);for(d in e){var g=e[d];h.css(g,f.css(g))}if(c!==false){h.width(f.outerWidth());h.height(f.outerHeight())}};a.prototype.message=function(c){jQuery.jGrowl("<p>"+c+"</p>",{header:"UMI.CMS",life:10000})};a.prototype.edit=function(d,c){if(jQuery(d).hasClass("u-eip-deleted")||jQuery(d).parents().hasClass("u-eip-deleted")){this.message(getLabel("js-panel-message-cant-edit"));return false}this.finishLast();jQuery(".eip-del-button").remove();this.previousEditBox=this.editor.get(d,c);if(this.previousEditBox){jQuery(".u-eip-add-button, .u-eip-add-box").css("display","none")}jQuery(d).removeClass("u-eip-edit-box u-eip-edit-box-hover u-eip-modified u-eip-deleted u-eip-empty-field u-eip-edit-box-inversed");if(this.previousEditBox){jQuery(d).addClass("u-eip-editing"); this.addMaskOnLinksBackground(); }var e=this.htmlTrim(jQuery(d).attr("umi:empty"));if(e&&this.htmlTrim(jQuery(d).html())==e){jQuery(d).html("&nbsp;");jQuery(d).removeClass("u-eip-empty-field")}return true};
    /** ?????? ???????????????????????????? ?????????????????? ?????? ???????????? <a href> ?? ???????????????????????????? ?????????????????????? **/
    a.prototype.addMaskOnLinksBackground = function () {
        $('a').addClass("u-block-all-no-links");
        $('a[href="javascript:void(0);"]').removeClass("u-block-all-no-links");
        $('a > .u-eip-edit-box, a > .u-eip-editing').parent().removeClass("u-block-all-no-links");
        $('a > img.u-eip-edit-box').addClass("u-block-all-no-links");
        $('.u-eip-editing .u-block-all-no-links').removeClass("u-block-all-no-links");
        $('.u-eip-editing.u-block-all-no-links').removeClass("u-block-all-no-links");
    }
    /** ?????? ?????????????????? ???????????????????????????? ???????????????? ?????????? ?????????????????????? ???????????? <a href> ?? ???????????????????????????? ?????????????????????? **/
    a.prototype.removeMaskOnLinksBackground = function () {
        $('.u-block-all-no-links').removeClass("u-block-all-no-links");
    };
a.prototype.queue=[];a.prototype.queue.add=function(c){if(this.current==-1){this.setSaveStatus(true)}if(this.current<this.length-1){for(var d=this.length-1;d>this.current;d--){this.pop()}this.current=(this.length)}else{++this.current}this.push(c);this.step();if(c.add){uAdmin.eip.message(getLabel("js-panel-message-add-after-save"));jQuery(c.node).css("display","")}if(c.move){jQuery(c.node.parentNode).addClass("u-eip-modified")}if(c["delete"]){uAdmin.eip.message(getLabel("js-panel-message-delete-after-save"));jQuery(c.node).addClass("u-eip-deleted")}jQuery(c.node).addClass("u-eip-modified");return this.length};a.prototype.queue.get=function(c){if(!parseInt(c)){c=this.current}return this[c]||null};a.prototype.queue._saveStatus=false;a.prototype.queue.setSaveStatus=function(d){var c=uAdmin.eip;if(d){jQuery("#save").addClass("save_me");c.editorToggleButton.setLabelText(getLabel("js-panel-edit-save"))}else{jQuery("#save").removeClass("save_me");c.editorToggleButton.setLabelText(c.enabled?getLabel("js-panel-view"):getLabel("js-panel-edit"))}uAdmin.eip.queue._saveStatus=d};a.prototype.queue.getSaveStatus=function(c){return uAdmin.eip.queue._saveStatus};a.prototype.queue.search=function(c){var d=this.current;while(d>=0){if(this[d].id==c.id&&(this[d].field_name==c.field_name||(this[d].add&&c.add)||(this[d].move&&c.move)||(this[d]["delete"]&&c["delete"])||(this[d].custom&&c.custom))){return this[d]}--d}return false};a.prototype.queue.back=function(c){c=parseInt(c)||1;while(c--){if(this[this.current]){this.cancel()}}uAdmin.eip.normalizeBoxes();this.step()};a.prototype.queue.forward=function(c){c=parseInt(c)||1;while(c--){if(this[this.current+1]){this.apply()}}uAdmin.eip.normalizeBoxes();this.step()};a.prototype.queue.apply=function(){uAdmin.eip.finishLast();++this.current;var c=this.get();if(!c.add&&!c.move&&!c["delete"]&&!c.custom&&!uAdmin.eip.editor.replace(c,c.new_value,c.old_value)){--this.current}else{switch(true){case c.add:uAdmin.eip.message(getLabel("js-panel-message-add-after-save"));jQuery(c.node).css("display","");break;case c["delete"]:uAdmin.eip.message(getLabel("js-panel-message-delete-after-save"));jQuery(c.node).addClass("u-eip-deleted");break;case c.move:if(c.next){jQuery(c.node).insertBefore(c.next)}else{jQuery(c.node).appendTo(c.parent)}jQuery(c.node).addClass("u-eip-modified");jQuery(c.parent).addClass("u-eip-modified");break;case c.custom:if(c.target&&c.target.forward){c.target.forward()}break;default:jQuery(c.node).addClass("u-eip-modified")}}if(this.current==0){this.setSaveStatus(true)}};a.prototype.queue.cancel=function(){uAdmin.eip.finishLast();var d=this.get(),c=false;switch(true){case d.add:--this.current;jQuery(d.node).css("display","none");break;case d["delete"]:--this.current;jQuery(d.node).removeClass("u-eip-deleted");break;case d.move:--this.current;if(d.old_next){jQuery(d.node).insertBefore(d.old_next)}else{jQuery(d.node).appendTo(d.old_parent)}jQuery(d.node).removeClass("u-eip-modified");if(!this.search(d)){jQuery(d.parent).removeClass("u-eip-modified")}break;case d.custom:--this.current;if(d.target&&d.target.back){d.target.back()}break;default:c=uAdmin.eip.editor.replace(d,d.old_value,d.new_value);if(c){--this.current;jQuery(d.node).addClass("u-eip-modified")}}if(d.add||d.move||d["delete"]||d.custom||c){if(!this.search(d)){jQuery(d.node).removeClass("u-eip-modified")}if(this.current==-1){this.setSaveStatus(false);uAdmin.eip.message(getLabel("js-panel-message-changes-revert"))}}};a.prototype.queue.step=function(){jQuery("#u-quickpanel #save_edit #edit_back").attr("class",(this.current==-1)?"":"ac");jQuery("#u-quickpanel #save_edit #edit_next").attr("class",((this.length-this.current)==1)?"":"ac")};a.prototype.onEipSaveQueue=function(c){};a.prototype.onEipSaveQueueWithEdit=function(c){};a.prototype.queue.save=function(h){uAdmin.eip.finishLast();if(this.current==-1&&!h){return false}var l=this,f=false,g={},c=jQuery("div.popupText span",l.progress);uAdmin.eip.onEipSaveQueue(this);switch(h){case"add":for(j in l.save.add){f=l.save.add[j];delete l.save.add[j];break}if(f){for(j in l.save.added){if(f.parent==j){f.parent=l.save.added[j]}}var d="/admin/content/eip_quick_add/"+f.parent+".json?type-id="+f.type_id;var e=function(p){if(uAdmin.eip.performSaveError.call(l,p,f)){return}var q=parseInt(p.data["element-id"]);var u=parseInt(p.data["object-id"]);l.save.added[f.id]=q||u;jQuery(f.node).removeClass("u-eip-newitem u-eip-modified");jQuery(f.node).attr("umi:"+f.type+"-id",q||u);jQuery("*[umi\\:"+f.type+'-id="'+f.id+'"]',f.node).attr("umi:"+f.type+"-id",q||u);var o=jQuery(f.node);var n=q||u;var r=f.parent;var s=o.parents("[umi\\:region=list]").first();var w=s.attr("umi:add-prepend")=="prepend";var v=function(z,y,x){x=!!x;if(z.attr("umi:element-id")){z.attr("umi:element-id",y.attr("umi:element-id")||n)}if(z.attr("umi:object-id")){z.attr("umi:object-id",y.attr("umi:object-id")||n)}if(z.is("img")){z.attr("src",y.attr("src"))}else{if(x&&z.is("a")){z.attr("href",y.attr("href"))}if(z.is("[umi\\:field-name]")){if(y.attr("umi:empty")){z.attr("umi:empty",y.attr("umi:empty"))}if(z.attr("umi:empty")){z.addClass("u-eip-empty-field")}else{z.removeClass("u-eip-empty-field")}z.text(y.text()||y.attr("umi:empty")||"")}}};var t=s.attr("umi:type-id");jQuery("[umi\\:"+f.type+"-id="+r+"][umi\\:region=list]").filter(function(){return jQuery(this).find("[umi\\:"+f.type+"-id="+n+"]").length==0}).filter(function(){var x=false,y=jQuery(this).attr("umi:type-id");if((!y&&!t)||y==t){x=true}return x}).each(function(){var x=jQuery(this),z=x.children("[umi\\:region=row]:first").clone().removeClass("blank_item current"),y=uAdmin.eip.addPrevOnStack(o.find("*")).filter("[umi\\:url-attribute]").first();if(y.length){var B=y.attr("umi:url-attribute"),A=uAdmin.eip.addPrevOnStack(z.find("*"));if(A.filter("[umi\\:url-attribute]").attr(B,y.attr(B)).length==0){A.filter("a").attr("href",y.attr(B))}v(z,o)}else{v(z,o,true)}o.find("[umi\\:field-name]").each(function(){var C=jQuery(this);var D=C.attr("umi:field-name");z.find("[umi\\:field-name="+D+"]").each(function(){v(jQuery(this),C)})});if(w){z.prependTo(x)}else{z.appendTo(x)}x.find("[umi\\:field-name]").each(function(){uAdmin.eip.highlightNode(this)})});f=false;uAdmin.eip.normalizeBoxes();c.text(parseInt(c.text())+1);--l.save.count;l.save("add")};if(uAdmin.eip.getSaveAjaxMethod()==="GET"){jQuery.get(d,e,"json")}else{jQuery.post(d,e,"json")}}else{l.save("move")}break;case"move":for(j in l.save.move){f=l.save.move[j];delete l.save.move[j];break}if(f){f.next=(f.next==null?"":uAdmin.eip.searchRowId(f.next));for(j in l.save.added){if(f.parent_id==j){f.parent_id=l.save.added[j]}if(f.moved==j){f.moved=l.save.added[j]}if(f.next==j){f.next=l.save.added[j]}}jQuery.post("/admin/content/eip_move_page/"+f.moved+"/"+f.next+".json",{"parent-id":f.parent_id},function(n){if(n.error){uAdmin.eip.message(n.error);return}jQuery(f.node).removeClass("u-eip-modified");jQuery(f.node).parent().removeClass("u-eip-modified");jQuery("[umi\\:region=list]").filter("[umi\\:element-id="+f.parent_id+"], [umi\\:object-id="+f.parent_id+"]").filter(function(){return this!=f.parent}).each(function(){var p=jQuery(f.node).index(),q=jQuery(this).find("[umi\\:region=row][umi\\:"+f.type+"-id="+f.moved+"]"),o=jQuery(this).children().eq(p);if(q.index()>p){q.insertBefore(o)}else{if(q.index()<p){q.insertAfter(o)}}});uAdmin.eip.normalizeBoxes();if(uAdmin.eip.enabled){uAdmin.eip.highlight(f.moved)}uAdmin.eip.message(getLabel("js-panel-message-page-moved"));--l.save.count;c.text(parseInt(c.text())+1);l.save("move")},"json")}else{l.save("edit")}break;case"edit":for(j in l.save.edit){f=l.save.edit[j];delete l.save.edit[j];break}if(f){for(j in l.save.added){if(f.id==j){f.id=l.save.added[j]}}uAdmin.eip.onEipSaveQueueWithEdit(f);if(uAdmin.eip.editor.equals(f.new_value,f.old_value)){jQuery(f.node).removeClass("u-eip-modified");f=false;uAdmin.eip.normalizeBoxes();c.text(parseInt(c.text())+1);--l.save.count;l.save("edit")}else{g={};g[f.type+"-id"]=f.id;g.qt=new Date().getTime();g["field-name"]=f.field_name;var k,j;switch(typeof f.new_value){case"object":if(f.new_value.src){k=f.new_value.src}else{k=[];for(j in f.new_value){k.push(j)}}break;case"string":if(jQuery.browser.mozilla&&f.new_value.match(/="\.\.\//g)){f.new_value=f.new_value.replace(/="[\.\.\/]+/g,'="/')}k=f.new_value.replace(/\sumi:[-a-z]+="[^"]*"/g,"");break;default:k=f.new_value}g.value=k;jQuery.post("/admin/content/editValue/save.json",g,function(r){if(r.error){uAdmin.eip.message(r.error);return}var p=r.property["new-link"],s=r.property["old-link"];var o=jQuery(f.node).parents("[umi\\:element-id], [umi\\:object-id]").first(),u=o.is("[umi\\:object-id]")?"object":"element",t=o.attr("umi:"+u+"-id"),n=jQuery("[umi\\:"+u+"-id="+t+"]");if(!n.length){n=jQuery(f.node).parent()}if(s&&p){var q=0;n.each(function(){jQuery(this).find("[umi\\:url-attribute]").each(function(){jQuery(this).attr(jQuery(this).attr("umi:url-attribute"),p).bind("click mousedown mouseup",function(){return true});q++})});if(!q){n.find("a").each(function(v,w){jQuery(this).attr("href",p).bind("click mousedown mouseup",function(){return true})})}}jQuery("[umi\\:"+f.type+"-id='"+f.id+"']").find("[umi\\:field-name="+r.property.name+"]").add("[umi\\:"+f.type+"-id='"+f.id+"'][umi\\:field-name="+r.property.name+"]").not("[umi\\:"+f.type+"-id][umi\\:"+f.type+"-id!='"+f.id+"']").each(function(){var v=jQuery(this);if(v.is("img")){var w=(r.property.value===null)?"":r.property.value["src"];v.attr("src",w)}else{v.html(f.node.innerHTML)}v.parents(".not_hidden").removeClass("not_hidden")});jQuery(f.node).removeClass("u-eip-modified");f=false;uAdmin.eip.normalizeBoxes();c.text(parseInt(c.text())+1);--l.save.count;l.save("edit")},"json")}}else{l.save("custom")}break;case"custom":for(j in l.save.custom){f=l.save.custom[j];delete l.save.custom[j];break}if(f){if(f.target&&f.target.save&&typeof f.target.save=="function"){f.target.save()}c.text(parseInt(c.text())+1);--l.save.count;l.save("custom")}else{l.save("del")}break;case"del":for(j in l.save.del){f=l.save.del[j];delete l.save.del[j];break}if(f){for(j in l.save.added){if(f.id==j){f.id=l.save.added[j]}}g={};g[f.type+"-id"]=f.id;g.qt=new Date().getTime();jQuery.ajax({type:"POST",url:"/admin/content/eip_del_page.json",data:g,dataType:"json",success:function(o){if(o.error){uAdmin.eip.message(o.error);return}var n=uAdmin.eip.searchRow(f.node,true);if(n&&jQuery(n).attr("umi:region")!="list"){jQuery(n).remove()}else{jQuery(f.node).remove()}jQuery("[umi\\:element-id="+f.id+"], [umi\\:object-id="+f.id+"]").remove();uAdmin.eip.normalizeBoxes();f=false;uAdmin.eip.normalizeBoxes();c.text(parseInt(c.text())+1);--l.save.count;l.save("del")},error:function(n){var o=getLabel("js-label-request-error");if(n.status===403&&n.responseJSON&&n.responseJSON.data&&n.responseJSON.data.error){o=n.responseJSON.data.error}uAdmin.eip.message(o)}})}else{l.save.add={};l.save.added={};l.save.move={};l.save.edit={};l.save.del={};l.save.custom={};l.setSaveStatus(false);this.step();var m=uAdmin.eip.getDeleteMessageOfEipSave(parseInt(c.text())===0);uAdmin.eip.message(m);jQuery("input:button",l.progress).removeClass("hidden");uAdmin.eip.onSave("after")}break;default:uAdmin.eip.onSave("before");while(0<=this.current){if(l[0].add){l.save.add[l[0].id]=l[0];++l.save.count}else{if(this[0].move){if(l.save.move[l[0].moved]){delete l.save.move[l[0].moved];--l.save.count}l.save.move[l[0].moved]=l[0];++l.save.count}else{if(this[0]["delete"]){l.save.del[l[0].id]=l[0];++l.save.count}else{if(this[0]["custom"]){l.save.custom[l[0].id]=l[0];++l.save.count}else{if(l.save.edit[l[0].id+"_"+l[0].field_name]){l.save.edit[l[0].id+"_"+l[0].field_name].new_value=l[0].new_value}else{l.save.edit[l[0].id+"_"+l[0].field_name]=l[0];++l.save.count}}}}}l.shift();--l.current}l.progress=jQuery.openPopupLayer({name:"SaveProgress",width:400,height:80,data:'\n						<div class="eip_win_head popupHeader">\n							<div class="eip_win_close popupClose hidden">&#160;</div>\n							<div class="eip_win_title">'+getLabel("js-cms-eip-edit_in_place-save_processing")+'</div>\n						</div>\n						<div class="eip_win_body popupBody">\n							<div class="popupText">'+getLabel("js-cms-eip-edit_in_place-saved_count_modify",l.save.count)+'</div>\n							<div class="eip_buttons">\n								<input type="button" class="primary ok hidden" value="OK" />\n								<div style="clear: both;" />\n							</div>\n						</div>\n					'}).find("#popupLayer_SaveProgress");jQuery("input:button",l.progress).click(function(){jQuery.closePopupLayer("SaveProgress");uAdmin.eip.onSaveFinish()});l.save("add")}return false};a.prototype.getSaveAjaxMethod=function(){return"GET"};a.prototype.performSaveError=function(d,c){if(d&&d.error){uAdmin.eip.message(d.error);return true}return false};a.prototype.removeAddFail=function(c){};a.prototype.getDeleteMessageOfEipSave=function(c){return getLabel("js-panel-message-changes-saved")};a.prototype.isImageEditorReinitEnabled=function(c){return true};a.prototype.onEditModuleActivate=function(){};a.prototype.onSaveFinish=function(){};a.prototype.getEipAddButtonTagName=function(){return"a"};a.prototype.isRelationDrawApplyDimentions=function(){return null};a.prototype.addPrevOnStack=function(c){return c.addBack()};a.prototype.isBindFinishEventCustomReturn=function(c){return false};a.prototype.getRelationSearchFieldWidth=function(c){return 0};a.prototype.isCleanupHtmlOnWysiwygCtrlShift=function(){return true};a.prototype.getMSIEStubImgCondition=function(){return true};a.prototype.onTinymceInitEditorTune=function(c){};a.prototype.showWizard=function(){};a.prototype.isEditedImageTypeSlider=function(c){return c&&c.iImageType&&c.iImageType==c.IMAGE_TYPE_SLIDER};a.prototype.getSliderEditPopupLayerUrl=function(d){var c={slider_id:$(d.jqImgNode[0]).attr("umi:slider-id"),token:uAdmin.csrf,prefix:uAdmin.lang_prefix};return"/styles/common/other/slidereditor/slideEditor.html?"+$.param(c)};a.prototype.queue.save.add={};a.prototype.queue.save.added={};a.prototype.queue.save.move={};a.prototype.queue.save.edit={};a.prototype.queue.save.del={};a.prototype.queue.save.custom={};a.prototype.queue.save.count=0;a.prototype.queue.current=-1;a.prototype.enabled=false;a.prototype.previousEditBox=null;a.prototype.editNodes=[];a.prototype.listNodes=[];a.prototype.meta={};return b(a,this)});uAdmin(".ieditor",function(p){var q={backend_request_url:"/udata://content/ieditor/",backend_request_method:"POST",image_data_url:"/admin/content/getImageData.json",image_data_request_method:"POST",coockie_name:"eip_ieditor_state",preloader_src:"/images/cms/eip/loader.gif",preloader_holder_css_class:"eip-ieditor-preloader",collection:{editor_id_attribute:"data-ieditor-id"},editor:{menu_wrapper_css_class:"eip-ieditor-menu-wrapper",img_wrapper_css_class:"eip-ieditor-img-wrapper",animation_speed:100},layout:{extended:{css_class:"eip-ieditor-layout-extended",right_margin:"5px",bottom_margin:"5px"},simple:{css_class:"eip-ieditor-layout-simple",right_margin:"5px",bottom_margin:"5px"},bubble:{css_class:"eip-ieditor-layout-bubble",arrow_css_class:"eip-ieditor-layout-bubble-arrow",bottom_margin:-50,bottom_margin_delta:0},big_img_min_width:300,big_img_min_height:350,small_img_max_width:150,small_img_max_height:150},module:{module_css_class:"eip-ieditor-module",icon_holder_css_class:"eip-ieditor-module-icon",title_holder_css_class:"eip-ieditor-module-title",upload_module:{url:"/udata/content/ieditor/upload.json",iframe_name:"eip-ieditor-upload-iframe",file_input_name:"eip-ieditor-upload-fileinput[]",css_class:"eip-ieditor-module-upload"},filemanager_module:{css_class:"eip-ieditor-module-filemanager"},popup_module:{css_class:"eip-ieditor-module-popup",fancybox_css_class:"fancybox-group",wrapper_css_class:"eip-ieditor-module-popup-wrapper",thumb_width:100},delete_module:{css_class:"eip-ieditor-module-delete"},apply_module:{css_class:"eip-ieditor-module-apply"},cancel_module:{css_class:"eip-ieditor-module-cancel"}},img_area_select:{css_class:"eip-ieditor-imgareaselect-wrapper",plugin_options:{parent:null,hide:true,handles:true,instance:true,keys:true,movable:true,persistent:true,resizeMargin:10,zIndex:100001}},filemanager:{url:"/styles/common/other/elfinder/umifilebrowser.html?lang=ru",window_width:1200,window_height:600},browser_modules:{msie:[s,n,b,f,l,a],mozilla:[s,n,b,g,f,l,a],opera:[s,n,b,g,f,l,a],webkit:[s,n,b,g,f,l,a]}};uAdmin.inherit=function(w,v){var x=function(){};x.prototype=v.prototype;w.prototype=new x();w.prototype.constructor=w;w.superclass=v.prototype};var e=function(){if(!uAdmin||!uAdmin.eip){throw"Edit-in-place is not initialized"}this.COOKIE_NAME=q.coockie_name;this.COOKIE_ENABLED_VALUE="enabled";this.COOKIE_DISABLED_VALUE="disabled";this.jqToggleButton=null;this.bEnabled=true;this.skipDeactivateClick=false;var v=this;uAdmin.eip.bind("Enable",function(w){if(w=="after"){v.addPanelButton()}});uAdmin.eip.bind("Disable",function(w){if(w=="after"){v.removePanelButton();v.disable()}});uAdmin.eip.bind("ActiveEditorCommit",function(w){if(w=="before"&&uAdmin.eip.editor.info.field_type=="wysiwyg"&&uAdmin.eip.editor.info.old_value&&uAdmin.eip.editor.info.new_value){uAdmin.eip.editor.info.old_value=uAdmin.eip.editor.info.old_value.replace(/\sdata-ieditor-id=["']{1}[0-9\._]+["']{1}/gi,"");uAdmin.eip.editor.info.new_value=uAdmin.eip.editor.info.new_value.replace(/\sdata-ieditor-id=["']{1}[0-9\._]+["']{1}/gi,"");uAdmin.eip.editor.info.old_value=uAdmin.eip.editor.info.old_value.replace(/(src=".*)\?[0-9]+/gi,"$1");uAdmin.eip.editor.info.new_value=uAdmin.eip.editor.info.new_value.replace(/(src=".*)\?[0-9]+/gi,"$1")}else{uAdmin.eip.normalizeBoxes()}});uAdmin.eip.bind("AddPhotoToAlbum",function(z,x){if(z=="after"&&x&&x.newNode&&x.newNode.length){var y=u.getInstance().EDITOR_ID_ATTRIBUTE,C=x.newNode.find("img["+y+"]");uAdmin.eip.addPrevOnStack(C).removeAttr(y);if(!uAdmin.ieditor.isEnabled()){return}var A=x.newNode.find("img")[0],w=jQuery(A),B=u.getInstance().initEditor(A);if(B instanceof m){w.on("load",function(){B.init(w,w.attr(y))})}}});uAdmin.onLoad("wysiwyg",function(){tinymce.on("AddEditor",function(w){w.editor.on("SetAttrib",function(y){jQuery(y.attrElm).on("load",function(z){if(!uAdmin.ieditor.isEnabled()){return}var A=u.getInstance().initEditor(this);if(A.getEditState()){return}A.destroy(true);A.init(jQuery(this),jQuery(this).attr(u.getInstance().EDITOR_ID_ATTRIBUTE));window.setTimeout(function(){tinymce.activeEditor.selection.collapse()},0)})});w.editor.on("init",function(y){var z=this.dom.select("img:not(.mce-object)");if(uAdmin.ieditor.isEnabled()&&z&&z.length){uAdmin.ieditor.enable(z)}});var x=w.editor.windowManager.open;w.editor.windowManager.open=function(){uAdmin.ieditor.disable();var z=x.apply(this,arguments);z.on("close",function y(){setTimeout(function(){uAdmin.ieditor.enable()},500)});return z}})});jQuery("body").on("click",function(x){if((jQuery(x.target).closest("."+q.collection.editor_id_attribute+", ."+q.img_area_select.css_class).length)||(jQuery(x.target).is(".mce-resizehandle, img"))){return}var y=u.getInstance().getActiveEditor();if((y instanceof m===false)||(uAdmin.ieditor.skipDeactivateClick)){return}var w=y.getEnabledModule();w.cancel();w.deactivate();y.hide();y.switchOn();y.redrawMenu();y.drawDeleteButton()});if(uAdmin.eip.enabled){this.addPanelButton()}};e.prototype.isEnabled=function(){return this.bEnabled};e.prototype.getNodes=e.getNodes=function(v){jqNodes=jQuery("img[umi\\:field-name], .mceEditor img, [umi\\:field-type='wysiwyg'] img, img[umi\\:slider-id]");return v?jqNodes:jqNodes.toArray()};e.prototype.enable=function(y){if(!uAdmin.eip.enabled){return}if(!y){y=this.getNodes()}var v=u.getInstance(),x=v.getActiveEditor();for(var w=0;w<y.length;w++){if(v.getEditorByNode(y[w])){if(!x||x.jqImgNode[0]!==y[w]){v.getEditorByNode(y[w]).destroy();v.initEditor(y[w])}}else{v.initEditor(y[w])}}this.removeEipDeleteButtons();this.bEnabled=true;this.jqToggleButton.addClass("act")};e.prototype.disable=function(){if(!this.isEnabled()){return}var v=u.getInstance().getActiveEditor();if(v instanceof m){v.getEnabledModule()&&v.getEnabledModule().cancel()}u.getInstance().removeAllEditors();u.getInstance().turnOffEditMode();this.addEipDeleteButtons();this.bEnabled=false;this.jqToggleButton.removeClass("act")};e.prototype.reinit=function(){u.getInstance().reinitActiveEditors()};e.prototype.setSettings=function(w){var v=function(y,z){for(var x in y){if(!y.hasOwnProperty(x)||!z.hasOwnProperty(x)){continue}if(typeof y[x]==="object"&&y[x] instanceof Object){v(y[x],z[x])}else{z[x]=y[x]}}};v(w,q);u.getInstance().reinitActiveEditors()};e.prototype.getEditorsCollection=function(){return u.getInstance()};e.prototype.removeEipDeleteButtons=function(){this.jqEipDeleteButtonsNodes=this.getNodes(true);if(!this.jqEipDeleteButtonsNodes.length){return}var v=this.jqEipDeleteButtonsNodes.parents("[umi\\:delete]").filter(function(w,x){return !!jQuery(this).parents("[umi\\:module='photoalbum']").length});this.jqEipDeleteButtonsNodes=this.jqEipDeleteButtonsNodes.filter("[umi\\:delete]").add(v);this.jqEipDeleteButtonsNodes.removeAttr("umi:delete");uAdmin.eip.dropDeleteButtons()};e.prototype.addEipDeleteButtons=function(){if(!this.jqEipDeleteButtonsNodes||!this.jqEipDeleteButtonsNodes.length){return}this.jqEipDeleteButtonsNodes.attr("umi:delete","delete");uAdmin.eip.dropDeleteButtons()};e.prototype.addPanelButton=function(){var v=this;this.jqToggleButton=jQuery("<div/>");this.jqToggleButton.attr({id:"ieditor-switcher",title: getLabel('js-ieditor-switcher')}).text(getLabel("js-ieditor-switcher")).appendTo(uAdmin.panel.quickpanel).on("click",function(){if(v.isEnabled()){v.disable()}else{v.enable()}v.saveStateToCookie()});jQuery('<span class="in_ico_bg">').prependTo(this.jqToggleButton);this.applyStateFromCookie()};e.prototype.removePanelButton=function(){this.jqToggleButton&&this.jqToggleButton.length&&this.jqToggleButton.remove()};e.prototype.applyStateFromCookie=function(){if(!jQuery.cookie){return}if(jQuery.cookie(this.COOKIE_NAME)==this.COOKIE_ENABLED_VALUE){this.enable()}else{if(jQuery.cookie(this.COOKIE_NAME)==this.COOKIE_DISABLED_VALUE){this.disable()}else{
    /**  ???????????????????? ???????????????????????????? ?????????????????????? ???? ?????????????????? **/
    this.disable();
}}};e.prototype.saveStateToCookie=function(){if(!jQuery.cookie){return}var w=this.isEnabled()?this.COOKIE_ENABLED_VALUE:this.COOKIE_DISABLED_VALUE,v=new Date();v.setTime(v.getTime()+(3*24*60*60*1000));jQuery.cookie(this.COOKIE_NAME,w,{path:"/",expires:v})};var c=function(){this.oEventHandlers={}};c.prototype.bindEvent=function(v,w){if(typeof w!="function"){return false}if(!this.oEventHandlers[v]){this.oEventHandlers[v]=[]}this.oEventHandlers[v].push({context:this,handler:w});return true};c.prototype.triggerEvent=function(y,v){var x=this._getHandlersForObjectEvent(y,this);if(!x||!x.length){return false}for(var w=0;w<x.length;w++){x[w].apply(this,v)}return true};c.prototype._getHandlersForObjectEvent=function(z,x){var v=this.oEventHandlers[z];if(!v){return[]}var y=[];for(var w in v){if(v.hasOwnProperty(w)&&v[w].context===x&&typeof v[w].handler=="function"){y.push(v[w].handler)}}return y};var u=function(){this.settings=q;this.EDITOR_ID_ATTRIBUTE=q.collection.editor_id_attribute;this.BIG_IMG_MIN_WIDTH=q.collection.big_img_min_width;this.BIG_IMG_MIN_HEIGHT=q.collection.big_img_min_height;this.SMALL_IMG_MAX_WIDTH=q.collection.small_img_max_width;this.SMALL_IMG_MAX_HEIGHT=q.collection.small_img_max_height;this._arEditors={};this.oActiveEditor=null;this.bEditMode=false;jQuery("body").on("mouseenter","img",function(x){if(!uAdmin.eip.enabled||!uAdmin.ieditor.isEnabled()){return false}if(u.getInstance().isInEditState()){return false}var v=jQuery(this),w=u.getInstance().EDITOR_ID_ATTRIBUTE;if(!v.attr(w)){return false}var y=u.getInstance().initEditor(this);y.init(v,v.attr(w));y.show();window.setTimeout(function(){if(!y.isImageInFocus()){y.hide(function(){y.destroy(true)})}},100);return true}).on("mousemove",function(v){window.mouseX=v.pageX||v.clientX+jQuery(document).scrollLeft();window.mouseY=v.pageY||v.clientY+jQuery(document).scrollTop()})};u._instance=null;u.getInstance=function(){if(!u._instance){u._instance=new u()}return u._instance};u.cleanupHtml=function(v){return new m.cleanupHtml(v)};u.prototype.initEditor=function(x){if(u.getInstance().isInEditState()){return new r()}if(this.getEditorByNode(x)){return this.getEditorByNode(x)}var v=jQuery(x),w=this.getUniqueId();v.attr(this.EDITOR_ID_ATTRIBUTE,w);var y=new d();this._arEditors[w]=y;return y};u.prototype.reinitActiveEditors=function(){var w=[];for(var v in this._arEditors){if(!this._arEditors.hasOwnProperty(v)||this._arEditors[v] instanceof m===false){continue}w.push(this._arEditors[v].jqImgNode[0])}this.removeAllEditors();for(v=0;v<w.length;v++){this.initEditor(w[v])}};u.prototype.updateEditorsByNodes=function(v){jQuery("img",v).filter(function(){return !!jQuery(this).attr(u.getInstance().EDITOR_ID_ATTRIBUTE)}).each(function(w,x){var y=u.getInstance().initEditor(x);y.reinit()})};u.prototype.repositionActiveEditors=function(){for(var v in this._arEditors){if(!this._arEditors.hasOwnProperty(v)||this._arEditors[v] instanceof m===false){continue}if(!this._arEditors[v].jqImgNode||!this._arEditors[v].jqImgNode.length||!this._arEditors[v].jqImgNode.is(":visible")){this._arEditors[v].destroy();continue}this._arEditors[v].reinit()}};u.prototype.getEditorByNode=function(v){return this._arEditors[jQuery(v).attr(this.EDITOR_ID_ATTRIBUTE)]};u.prototype.getEditorByEditorId=function(v){return this._arEditors[v]};u.prototype.getAllEditors=function(){return this._arEditors};u.prototype.findEditors=function(y){var v=jQuery("img["+this.EDITOR_ID_ATTRIBUTE+"]",y),x=[],w=this;v.each(function(z,A){x.push(w.getEditorByNode(A))});return x};u.prototype.removeAllEditors=function(){for(var v in this._arEditors){if(!this._arEditors.hasOwnProperty(v)){continue}this.removeEditor(v)}this.oActiveEditor=null;this._arEditors={}};u.prototype.removeEditor=function(v){this._arEditors[v].destroy();delete this._arEditors[v]};u.prototype.removeEmptyEditors=function(){var v=this.getAllEditors();for(var w in v){if(!v.hasOwnProperty(w)){continue}var x=v[w];if(x instanceof m===false){continue}if(!x.getEditorId()){continue}if(!x.jqImgNode||!x.jqImgNode.length||!x.jqImgNode.is(":visible")){this.removeEditor(x.getEditorId())}}};u.prototype.getUniqueId=function(){var v="";do{v=new Date().getTime()+"_"+Math.random()}while(v in this._arEditors);return v};u.prototype.setActiveEditor=function(v){if(this.oActiveEditor&&this.oActiveEditor.deactivateEnabledModule){if(this.oActiveEditor.deactivateEnabledModule(true)){this.oActiveEditor=v;return true}else{return false}}else{this.oActiveEditor=v;return true}};u.prototype.getActiveEditor=function(){return this.oActiveEditor};u.prototype.deactivateActiveEditor=function(){return this.setActiveEditor(null)};u.prototype.turnOnEditMode=function(){this.bEditMode=true};u.prototype.turnOffEditMode=function(){this.bEditMode=false};u.prototype.isInEditState=function(){return this.bEditMode};u.prototype.each=function(x){if(typeof x!="function"){return}for(var v=0;v<this._arEditors;v++){var w=this._arEditors[v];if(w instanceof m===false){continue}x.call(w,v,w)}};var k=function(v){k.superclass.constructor.call(this);this.CSS_CLASS_NAME="";this.ANIMATIONS_SPEED=q.editor.animation_speed;this.oEditor=v};uAdmin.inherit(k,c);k.prototype.init=function(){this.oEditor.jqMenuWrapper.addClass(this.CSS_CLASS_NAME);this.reposition()};k.prototype.remove=function(){this.oEditor.jqMenuWrapper.removeClass(this.CSS_CLASS_NAME);this.resetPosition();this.oEditor.layout=null};k.prototype.reposition=function(){};k.prototype.resetPosition=function(){var v=this.oEditor.jqMenuWrapper[0];v.style.top="";v.style.bottom="";v.style.left="";v.style.right=""};k.prototype.show=function(){var v=this;this.oEditor.jqMenuWrapper.stop(true,true).fadeIn(this.ANIMATIONS_SPEED,function(){v.oEditor.triggerEvent("onShow")})};k.prototype.hide=function(w){var v=this;this.oEditor.jqMenuWrapper.add().stop(true,true).fadeOut(this.ANIMATIONS_SPEED,function(){if(typeof w=="function"){w()}v.oEditor.triggerEvent("onHide")})};var h=function(v){h.superclass.constructor.call(this,v);this.CSS_CLASS_NAME=q.layout.extended.css_class;this.init()};uAdmin.inherit(h,k);h.prototype.reposition=function(){this.oEditor.jqMenuWrapper.css({right:q.layout.extended.right_margin,bottom:q.layout.extended.bottom_margin})};var t=function(v){t.superclass.constructor.call(this,v);this.CSS_CLASS_NAME=q.layout.simple.css_class;this.init()};uAdmin.inherit(t,k);t.prototype.reposition=function(){this.oEditor.jqMenuWrapper.css({right:q.layout.simple.right_margin,bottom:q.layout.simple.bottom_margin})};var o=function(v){o.superclass.constructor.call(this,v);this.CSS_CLASS_NAME=q.layout.bubble.css_class;this.BUBBLE_ARROW_CSS_CLASS=q.layout.bubble.arrow_css_class;this.init()};uAdmin.inherit(o,k);o.prototype.init=function(){o.superclass.init.call(this);this.oEditor.jqMenuWrapper.prepend("<div class='"+this.BUBBLE_ARROW_CSS_CLASS+"'/>")};o.prototype.remove=function(){this.oEditor.jqMenuWrapper.find("."+this.BUBBLE_ARROW_CSS_CLASS).remove();o.superclass.remove.call(this)};o.prototype.reposition=function(){var v=this.oEditor.jqMenuWrapper.clone().css("left",-10000).appendTo("body").show();var w=(this.oEditor.jqImgWrapper.outerWidth()-v.outerWidth())/2;v.remove();this.oEditor.jqMenuWrapper.css({left:w+"px",bottom:q.layout.bubble.bottom_margin-q.layout.bubble.bottom_margin_delta+"px"})};o.prototype.show=function(){var v=this;this.oEditor.jqMenuWrapper.stop(true,true).fadeIn(this.ANIMATIONS_SPEED).animate({bottom:q.layout.bubble.bottom_margin+"px"},this.ANIMATIONS_SPEED,function(){v.oEditor.triggerEvent("onShow")})};o.prototype.hide=function(w){var v=this;this.oEditor.jqMenuWrapper.stop(true,true).animate({bottom:q.layout.bubble.bottom_margin-q.layout.bubble.bottom_margin_delta+"px"},this.ANIMATIONS_SPEED).fadeOut(this.ANIMATIONS_SPEED,function(){if(typeof w=="function"){w()}v.oEditor.triggerEvent("onHide")})};var m=function(){m.superclass.constructor.call(this);this.MENU_WRAPPER_CLASS_NAME=q.editor.menu_wrapper_css_class;this.IMG_WRAPPER_CLASS_NAME=q.editor.img_wrapper_css_class;this.ANIMATIONS_SPEED=q.editor.animation_speed;this.IMAGE_TYPE_UNKNOWN=0;this.IMAGE_TYPE_EIP=1;this.IMAGE_TYPE_WYSIWYG=2;this.IMAGE_TYPE_PHOTOALBUM=3;this.IMAGE_TYPE_SLIDER=4;this._imageUrl="";this.sEditorId="";this.layout="";this.jqImgNode=null;this.jqMenuWrapper=null;this.jqDeleteButton=null;this.jqCloseButton=null;this.jqImgWrapper=null;this.jqPreloader=null;this.iImageType=this.IMAGE_TYPE_UNKNOWN;this.bEditStateEnabled=false;this.arModulesSet=[];this.arDefaultModules=[g,s,n,b];this.arActiveModules=[];this.oEnabledModule=null;this.oEventHandlers={}};uAdmin.inherit(m,c);m.prototype.init=function(v,x){var w=this;if(!v){if(this.jqImgNode&&this.jqImgNode.length){v=this.jqImgNode}else{return false}}if(!x&&v&&v.length){x=v.attr(u.getInstance().EDITOR_ID_ATTRIBUTE)}this.sEditorId=x||v.attr(u.getInstance().EDITOR_ID_ATTRIBUTE);if(v.parents(".mceEditor").length||v.parents("[umi\\:field-type='wysiwyg']").length||v.parents(".mce-content-body").length){this.iImageType=this.IMAGE_TYPE_WYSIWYG}else{if(v.parents("[umi\\:module='photoalbum']").length){this.iImageType=this.IMAGE_TYPE_PHOTOALBUM}else{if(v.is("[umi\\:field-name]")){this.iImageType=this.IMAGE_TYPE_EIP}else{if(v.is("[umi\\:slider-id]")){this.iImageType=this.IMAGE_TYPE_SLIDER}}}}this.jqImgNode=v;this.jqImgWrapper=jQuery("<div/>").addClass(this.IMG_WRAPPER_CLASS_NAME);this.hideTimer=null;this.jqImgWrapper.attr(u.getInstance().EDITOR_ID_ATTRIBUTE,this.sEditorId).on("click",function(y){if(jQuery(y.target).parents("."+w.MENU_WRAPPER_CLASS_NAME).length){return false}w.jqImgNode.trigger("click");return false}).on("contextmenu",function(y){if(!tinymce||!tinymce.activeEditor){return true}y.preventDefault();y.target=w.jqImgNode[0];y.originalEvent.target=w.jqImgNode[0];y.currentTarget=w.jqImgNode[0];y.delegateTarget=w.jqImgNode[0];tinymce.activeEditor.selection.select(w.jqImgNode[0]);tinymce.activeEditor.dom.fire(w.jqImgNode[0],"contextmenu",y);return false}).appendTo("body");this.applyImageSizes();this.drawMenu();this.switchOn();this.jqImgNode.on("mousemove mouseover mouseout mouseenter mouseleave",function(y){y.stopPropagation();y.stopImmediatePropagation();y.preventDefault();return false});this.triggerEvent("onInit")};m.prototype.reinit=function(){var v=u.getInstance().EDITOR_ID_ATTRIBUTE;this.jqImgNode=jQuery("img["+v+"='"+this.sEditorId+"']");this.jqImgWrapper=jQuery("."+this.IMG_WRAPPER_CLASS_NAME).filter("["+v+"='"+this.sEditorId+"']").first();if(!this.jqImgWrapper.length){return}this.jqMenuWrapper=this.jqImgWrapper.find("."+this.MENU_WRAPPER_CLASS_NAME).first();if(!this.jqImgNode.length){return}this.applyImageSizes();this.layout.reposition();this.jqImgWrapper.offset(this.jqImgNode.offset())};m.prototype.initLayout=function(){if(this.layout instanceof k){this.layout.remove()}var w=this.jqImgNode.width(),v=this.jqImgNode.height();if(w>=q.layout.big_img_min_width&&v>=q.layout.big_img_min_height){this.layout=new h(this)}else{if(w<=q.layout.small_img_max_width||v<=q.layout.small_img_max_height){this.layout=new o(this)}else{this.layout=new t(this)}}};m.prototype.drawMenu=function(v){this.jqMenuWrapper=jQuery("<div/>").addClass(this.MENU_WRAPPER_CLASS_NAME);this.initLayout();this.drawModules(v);if(!this.isStub()||this.iImageType===this.IMAGE_TYPE_PHOTOALBUM){this.drawDeleteButton()}this.reposition();this.jqMenuWrapper.appendTo(this.jqImgWrapper)};m.prototype.applyImageBoxSizes=function(w){if(!w||!w.length){w=this.jqImgNode}var v=this,x=function(y){return w.css(y)};this.jqImgWrapper.css({width:x("width"),height:x("height"),paddingTop:x("paddingTop"),paddingRight:x("paddingRight"),paddingBottom:x("paddingBottom"),paddingLeft:x("paddingLeft"),borderTop:x("borderTop"),borderRight:x("borderRight"),borderBottom:x("borderBottom"),borderLeft:x("borderLeft"),marginTop:x("marginTop"),marginRight:x("marginRight"),marginBottom:x("marginBottom"),marginLeft:x("marginLeft")})};m.prototype.applyImageSizes=function(v){if(!v||!v.length){v=this.jqImgNode}this.applyImageBoxSizes(v);this.jqImgWrapper.offset(v.offset())};m.prototype.lockImageSize=function(){this.jqImgNode.css({maxWidth:this.jqImgNode.parent().width(),maxHeight:this.jqImgNode.parent().height()})};m.prototype.redrawMenu=function(v){for(var w in this.arActiveModules){var x=this.arActiveModules[w];if(x instanceof j){x.remove()}}this.jqMenuWrapper.children().remove();this.removeCloseButton();this.drawModules(v);this.initLayout()};m.prototype.drawModules=function(v){if(this.isPopupThumb()){v=[b]}this.resetModules();if(!v){this.setDefaultModules()}else{for(var x in v){this.addModule(v[x])}}var y=this.isStub();this.arActiveModules=[];for(var x in this.arModulesSet){if(!this.arModulesSet.hasOwnProperty(x)){continue}if(jQuery.browser.msie&&(this.arModulesSet[x]==g)){continue}var w=new this.arModulesSet[x](this);this.arActiveModules.push(w);this.jqMenuWrapper.append(w.getView(true))}};m.prototype.drawDeleteButton=function(w){if(this.iImageType==this.IMAGE_TYPE_SLIDER){return false}if(this.jqDeleteButton&&this.jqDeleteButton.length){this.jqDeleteButton.remove()}var x=a,v=this;if(!this.checkModule(x)){return false}x=new x(this);this.jqDeleteButton=x.getView(true);this.jqDeleteButton.addClass(this.layout.CSS_CLASS_NAME);this.jqImgWrapper.append(this.jqDeleteButton);if(w){this.jqDeleteButton.show()}return true};m.prototype.removeDeleteButton=function(){if(this.iImageType==this.IMAGE_TYPE_SLIDER){return false}this.jqDeleteButton&&this.jqDeleteButton.length&&this.jqDeleteButton.remove()&&(this.jqDeleteButton=null)};m.prototype.addCloseButton=function(v){if(this.jqCloseButton&&this.jqCloseButton.length){return}this.jqCloseButton=jQuery("<span/>").html("&times;");this.jqCloseButton.css({position:"absolute",top:0,right:0,cursor:"pointer",color:"white",fontSize:"15px",lineHeight:"10px",fontWeight:"bold",padding:"3px"}).on("click",function(w){if(typeof v=="function"){v(w)}}).appendTo(this.jqMenuWrapper)};m.prototype.removeCloseButton=function(){this.jqCloseButton&&this.jqCloseButton.length&&this.jqCloseButton.remove()&&(this.jqCloseButton=null)};m.prototype.showPreloader=function(){this.jqPreloader&&this.jqPreloader.length&&this.hidePreloader();this.jqPreloader=jQuery("<div/>").addClass(q.preloader_holder_css_class).append("<img src='"+q.preloader_src+"'>").appendTo(this.jqImgWrapper);if(!this.jqImgWrapper.data("incrementedZIndex")){this.jqImgWrapper.data("incrementedZIndex",true);this.jqImgWrapper.css("zIndex",parseInt(this.jqImgWrapper.css("zIndex"))*10||999999)}this.switchOff()};m.prototype.hidePreloader=function(){this.jqPreloader&&this.jqPreloader.length&&this.jqPreloader.remove()&&(this.jqPreloader=null);if(this.jqImgWrapper.data("incrementedZIndex")){this.jqImgWrapper.removeData();this.jqImgWrapper.css("zIndex",Math.floor(parseInt(this.jqImgWrapper.css("zIndex"))/10)||99999)}};m.prototype.reposition=function(){this.layout.reposition()};m.prototype.destroy=function(v){this.reinit();this.jqImgWrapper.remove();this.jqImgNode.off("mousemove mouseover mouseout mouseenter mouseleave");if(!v){this.jqImgNode.removeAttr(u.getInstance().EDITOR_ID_ATTRIBUTE)}this.triggerEvent("onDestroy")};m.prototype.show=function(){this.jqDeleteButton&&this.jqDeleteButton.length&&this.jqDeleteButton.show();this.layout.show()};m.prototype.hide=function(v){this.jqDeleteButton&&this.jqDeleteButton.length&&this.jqDeleteButton.hide();this.layout.hide(v)};m.prototype.switchOn=function(w){var v=this;this.jqImgWrapper.css("zIndex",parseInt(this.jqImgWrapper.css("zIndex"))||99999).on("mouseenter",function(){if(v.hideTimer){clearTimeout(v.hideTimer);v.hideTimer=null}v.show();if(v.jqDeleteButton&&v.jqDeleteButton.length){v.jqDeleteButton.stop(true,true).show(v.ANIMATIONS_SPEED)}}).on("mouseleave",function(){v.hideTimer=window.setTimeout(function(){v.hideTimer=null;if(v.jqDeleteButton&&v.jqDeleteButton.length){v.jqDeleteButton.stop(true,true).hide(v.ANIMATIONS_SPEED)}v.hide(function(){if(w===true){return}v.destroy(true)})},200)})};m.prototype.switchOff=function(v){this.jqImgWrapper.off("mouseenter mouseleave");if(v){this.hide();this.jqDeleteButton.hide()}};m.prototype.checkModule=function(w){var y=false;for(var x in q.browser_modules){if(!q.browser_modules.hasOwnProperty(x)||!jQuery.browser[x]){continue}for(var v=0;v<q.browser_modules[x].length;v++){if(q.browser_modules[x][v]===w){y=true;break}}}return typeof w==="function"&&!!w.isImageEditorModule&&y};m.prototype.addModule=function(v){if(this.checkModule(v)){this.arModulesSet.push(v);this.triggerEvent("onAddModule",[v])}};m.prototype.resetModules=function(){this.arModulesSet=[]};m.prototype.setDefaultModules=function(){this.resetModules();for(var v in this.arDefaultModules){this.addModule(this.arDefaultModules[v])}};m.prototype.isThumb=function(){return(!!this.jqImgNode.attr("src").match(/\/thumbs\//gi)||!!this.jqImgNode.attr("src").match(/\/autothumbs\//gi))};m.prototype.isPopupThumb=function(){if(typeof b=="undefined"){return false}return !!this.jqImgNode.parents("."+b.WRAPPER_CSS_CLASS).length};m.prototype.isStub=function(){var v=this.jqImgNode.attr("umi:is-stub")==="true",x=uAdmin.eip.getMSIEStubImgCondition(),w=x&&this.jqImgNode[0]&&this.jqImgNode[0].complete&&!this.jqImgNode[0].naturalWidth&&!this.jqImgNode[0].naturalHeight;return v||w};m.prototype.getImageUrl=function(){if(!this._imageUrl){if(this.iImageType===this.IMAGE_TYPE_WYSIWYG){this._imageUrl=this.jqImgNode.attr("src")}else{var x=uAdmin.eip.searchAttr(this.jqImgNode);var v=jQuery.ajax({async:false,url:"/udata/content/getImageUrl/"+x.id+"/"+x.field_name+"/.json",type:"GET"});var w=jQuery.parseJSON(v.responseText);this._imageUrl=w.result}}return this._imageUrl};m.prototype.getCurrentImageUrl=function(){return this.isThumb()?this.getImageUrl():this.jqImgNode.attr("src")};m.prototype.getEipInfo=function(v){v=v||this.jqImgNode[0];return uAdmin.eip.searchAttr(v)};m.prototype.getEipNode=function(){var v=this.getEipInfo();if(!v||!v.node){return null}return v.node};m.prototype.getEditorId=function(){return this.sEditorId};m.prototype.checkImageIsEmpty=function(){return this.jqImgNode.attr("src")==this.jqImgNode.attr("umi:empty")};m.prototype.setEnabledModule=function(v){if(!v||!v.deactivate){return false}this.oEnabledModule=v;u.getInstance().setActiveEditor(this);return true};m.prototype.getEnabledModule=function(){return this.oEnabledModule};m.prototype.deactivateEnabledModule=function(v){if(!this.oEnabledModule||!this.oEnabledModule.deactivate){this.oEnabledModule=null;return true}if(!v){this.oEnabledModule=null;return true}this.oEnabledModule.cancel();if(this.oEnabledModule.deactivate()){this.oEnabledModule=null;return true}return false};m.prototype.cleanupHtml=function(v){return v.replace(/\sdata-ieditor-id=["']{1}[0-9\._]+["']{1}/gi,"")};m.prototype.isImageInFocus=function(){var y=this.jqImgNode.offset().top,v=this.jqImgNode.offset().top+this.jqImgNode.height(),x=this.jqImgNode.offset().left,w=this.jqImgNode.offset().left+this.jqImgNode.width();return window.mouseX>x&&window.mouseX<w&&window.mouseY>y&&window.mouseY<v};m.prototype.getQueueValue=function(v){if(this.iImageType===this.IMAGE_TYPE_WYSIWYG){var w=this.getEipNode();return w?w.innerHTML:undefined}return(typeof v!=="undefined")?v:this.jqImgNode.attr("src")};var d=function(){d.superclass.constructor.call(this)};uAdmin.inherit(d,m);var r=function(){};r.prototype.show=function(){};r.prototype.hide=function(){};r.prototype.reposition=function(){};r.prototype.initLayout=function(){};r.prototype.init=function(){};r.prototype.reinit=function(){};r.prototype.destroy=function(){};r.prototype.switchOn=function(){};r.prototype.switchOff=function(){};var j=function(){j.superclass.constructor.call(this);this.MODULE_CSS_CLASS=q.module.module_css_class;this.MODULE_ICON_HOLDER_CSS_CLASS=q.module.icon_holder_css_class;this.MODULE_TITLE_HOLDER_CSS_CLASS=q.module.title_holder_css_class;this.BACKEND_REQUEST_URL=q.backend_request_url;this.BACKEND_REQUEST_METHOD=q.backend_request_method;this.title="";this.cssClass="";this.jqElement=null;this.oEditor=null};uAdmin.inherit(j,c);j.prototype.init=function(v){this.oEditor=v;this.jqElement=jQuery("<div/>");this.jqElement.addClass(this.cssClass);this.jqElement.addClass(this.MODULE_CSS_CLASS);this.jqElement.append(jQuery("<span/>"));jQuery("<span/>").addClass(this.MODULE_TITLE_HOLDER_CSS_CLASS).appendTo(this.jqElement);this.setIcon(this.MODULE_ICON_HOLDER_CSS_CLASS);this.setTitle(this.title);this.bindEvents();this.triggerEvent("onInit")};j.prototype.setIcon=function(w){var v=this.jqElement.find("span").first();v.get(0).className="";v.addClass(w)};j.prototype.setTitle=function(v){if(!v){v=this.title}this.title=v;this.jqElement.find("span").first().attr("title",v);this.jqElement.find("span").last().text(v)};j.prototype.bindEvents=function(){var v=this;this.jqElement.on("click",function(w){w.stopPropagation();w.stopImmediatePropagation();w.preventDefault();v.activate();return false})};j.prototype.getView=function(v){if(v===true){return this.jqElement}return this.jqElement[0].outerHTML};j.prototype.activate=function(){var v=this;u.getInstance().deactivateActiveEditor();this.oEditor.setEnabledModule(this);this.triggerEvent("onActivate")};j.prototype.deactivate=function(){this.triggerEvent("onDeactivate");return true};j.prototype.save=function(){this.triggerEvent("onSave")};j.prototype.cancel=function(){this.triggerEvent("onCancel")};j.prototype.remove=function(){this.jqElement.remove();this.triggerEvent("onRemove")};j.prototype.process=function(v,w){if(!v){return{result:false,error:getLabel("js-ieditor-invalid-action")}}this.oEditor.showPreloader();if(!w){w={}}w.image_url=this.oEditor.jqImgNode.attr("src");w.empty_url=this.oEditor.jqImgNode.attr("umi:empty");w.action=v;var z=uAdmin.eip.searchAttr(this.oEditor.jqImgNode[0]);if(z){w.element_id=z.id;w.field_name=z.field_name}var x=jQuery.ajax({async:false,url:this.BACKEND_REQUEST_URL+v+"/.json",type:this.BACKEND_REQUEST_METHOD,data:w});var y=jQuery.parseJSON(x.responseText);this.processResult(y);return y};j.prototype.processResult=function(v){if(!v){uAdmin.eip.message(getLabel("js-ieditor-request-failed"));this.oEditor.hidePreloader()}else{if(v.error&&typeof v.error=="string"){uAdmin.eip.message(v.error);this.oEditor.hidePreloader()}else{if(v.error&&v.error.message){uAdmin.eip.message(v.error.message);this.oEditor.hidePreloader()}else{if(v.result&&v.result.length){this.setNewImage(v.result)}else{uAdmin.eip.message(getLabel("js-ieditor-request-failed"));this.oEditor.hidePreloader()}}}}};j.prototype.addToEipQueue=function(y,x,v){var w=this.oEditor.getEipInfo(v);if(!w||!w.node){return false}if(this.oEditor.iImageType==this.oEditor.IMAGE_TYPE_WYSIWYG){w.old_value=x||w.node.innerHTML;w.new_value=y||w.node.innerHTML.replace(this.oEditor.jqImgNode.attr("src"),y);w.field_type="wysiwyg"}else{w.old_value={src:x||this.oEditor.getCurrentImageUrl()};w.new_value={src:y};w.field_type="img_file"}uAdmin.eip.queue.add(w);return true};j.prototype.getWysiwygContent=function(v){v=v||this.oEditor.getEipNode();if(!v||!v){return null}if(tinymce&&tinymce.activeEditor){return tinymce.activeEditor.getContent()}else{return v.innerHTML}};j.prototype.setNewImage=function(y,x){var v=this,w=(y||"");if(x!==false){this.oEditor.showPreloader();w+="?"+new Date().getTime()}if(this.oEditor.iImageType==this.oEditor.IMAGE_TYPE_WYSIWYG){if(b&&b.changeImage){b.changeImage(this.oEditor,!y)}if(!y){this.oEditor.jqImgNode.remove();this.oEditor.jqImgWrapper.remove()}else{this.oEditor.jqImgNode.attr("src",w);if(this.oEditor.jqImgNode.attr("data-mce-src")){this.oEditor.jqImgNode.attr("data-mce-src",w)}}}else{this.oEditor.jqImgNode.attr({src:w,"umi:is-stub":false})}this.oEditor.jqImgNode.on("load",function(){v.oEditor.hidePreloader();if(v.oEditor.jqImgNode){v.oEditor.jqImgNode.removeAttr("width").removeAttr("height").css({width:"",height:""})}v.oEditor.reinit();window.setTimeout(function(){uAdmin.eip.normalizeBoxes()},0)});this.oEditor.triggerEvent("onImageChange",{target:this,sNewSrc:y,sNewSrcNoCache:w})};j.prototype.getImageFromFilemanager=function(v){if(typeof v!="function"){return false}jQuery.openPopupLayer({name:"Filemanager",title:getLabel("js-file-manager"),width:q.filemanager.window_width,height:q.filemanager.window_height,url:q.filemanager.url,afterClose:function(w){if(w){v(w)}},success:function(){var w='<div id="watermark_wrapper"><label for="add_watermark">';w+=window.parent.getLabel("js-water-mark");w+='</label><input type="checkbox" name="add_watermark" id="add_watermark"/>';w+='<label for="remember_last_folder">';w+=window.parent.getLabel("js-remember-last-dir");w+='</label><input type="checkbox" name="remember_last_folder" id="remember_last_folder"';if(jQuery.cookie("remember_last_folder")){w+='checked="checked"'}w+="/></div>";window.parent.jQuery("#popupLayer_Filemanager .popupBody").append(w)}});return true};function g(v){g.superclass.constructor.call(this);this.UPLOAD_URL=q.module.upload_module.url;this.IFRAME_NAME=q.module.upload_module.iframe_name;this.FILE_INPUT_NAME=q.module.upload_module.file_input_name;this.title=getLabel("js-ieditor-module-upload-title");if(v.iImageType==v.IMAGE_TYPE_SLIDER){this.cssClass="eip-ieditor-empty"}else{this.cssClass=q.module.upload_module.css_class}this.jqFileInput=null;this.jqForm=null;this.jqIframe=null;this.init(v)}uAdmin.inherit(g,j);g.isImageEditorModule=true;g.prototype.init=function(w){var v=this;g.superclass.init.call(this,w);this.jqElement.css({overflow:"hidden",position:"relative"});this.jqFileInput=jQuery("<input/>").attr({type:"file",name:this.FILE_INPUT_NAME,title:this.title}).css({opacity:0,cursor:"pointer"}).on("click",function(x){x.stopPropagation();x.stopImmediatePropagation();v.activate()});this.jqForm=jQuery("<form/>").attr({method:"post",action:this.UPLOAD_URL,target:this.IFRAME_NAME,enctype:"multipart/form-data"}).css({padding:0,margin:0,border:"none",position:"absolute",top:0,right:0}).appendTo(this.jqElement).append(this.jqFileInput);this.jqForm.append('<input type="hidden" name="action" value="upload">')};g.prototype.activate=function(){g.superclass.activate.call(this);this.oEditor.switchOff();var v=this;jQuery("iframe[name="+this.IFRAME_NAME+"]").remove();this.jqIframe=jQuery("<iframe/>").attr({name:this.IFRAME_NAME}).css({display:"none"}).appendTo("body").on("load",function(){if(!v.bImageChanged){return}v.oEditor.hidePreloader();v.oEditor.switchOn();var x=jQuery(this).contents().find("body").text();if(!x){uAdmin.eip.message(getLabel("js-ieditor-request-failed"))}else{var w=v.oEditor.getQueueValue();v.setNewImage(x);v.addToEipQueue(v.oEditor.getQueueValue(x),w)}v.cleanup()});this.jqFileInput.on("change",function(){v.oEditor.showPreloader();v.bImageChanged=true;v.jqForm.submit()});window.setTimeout(function(){v.oEditor.switchOn(true);if(jQuery.browser.webkit){v.oEditor.hide()}},1000)};g.prototype.cleanup=function(){this.oEditor.switchOff();this.oEditor.switchOn();this.jqIframe.remove()};function n(v){n.superclass.constructor.call(this);this.title=getLabel("js-ieditor-module-slider-title");if(uAdmin.eip.isEditedImageTypeSlider(v)){this.cssClass="eip-ieditor-module-slider"}else{this.cssClass="eip-ieditor-empty"}this.init(v)}uAdmin.inherit(n,j);n.isImageEditorModule=true;n.prototype.activate=function(){n.superclass.activate.call(this);$.openPopupLayer({name:"SliderEditor",title:getLabel("js-ieditor-module-slider-popup-title"),url:uAdmin.eip.getSliderEditPopupLayerUrl(this.oEditor),width:710,height:700,success:function(){$("#popupLayer_SliderEditor .popupBody").css({padding:"0"});$("#popupLayer_SliderEditor iframe.umiPopupFrame").css({width:"100%"})}})};function s(v){s.superclass.constructor.call(this);this.title=getLabel("js-ieditor-module-filemanager-title");if(v.iImageType==v.IMAGE_TYPE_SLIDER){this.cssClass="eip-ieditor-empty"}else{this.cssClass=q.module.filemanager_module.css_class}this.init(v)}uAdmin.inherit(s,j);s.isImageEditorModule=true;s.prototype.activate=function(){s.superclass.activate.call(this);this.oEditor.switchOff();var v=this;this.getImageFromFilemanager(function(y){var w=v.oEditor.getQueueValue();var x=y[0];if(typeof x=="object"){x=x.url}v.setNewImage(x);v.addToEipQueue(v.oEditor.getQueueValue(x),w)});window.setTimeout(function(){v.oEditor.switchOn();if(jQuery.browser.webkit){v.oEditor.hide()}},500)};function b(v){b.superclass.constructor.call(this);this.title=getLabel("js-ieditor-module-popup-title");if(v.iImageType==v.IMAGE_TYPE_WYSIWYG){this.cssClass=q.module.popup_module.css_class}else{this.cssClass="eip-ieditor-empty"}this.jqWrapper=null;this.bEnabled=false;this.init(v)}uAdmin.inherit(b,j);b.isImageEditorModule=true;b.FANCYBOX_CSS_CLASS=q.module.popup_module.fancybox_css_class;b.WRAPPER_CSS_CLASS=q.module.popup_module.wrapper_css_class;b.THUMB_WIDTH=q.module.popup_module.thumb_width;b.prototype.init=function(v){b.superclass.init.call(this,v);this.jqWrapper=this.oEditor.jqImgNode.parents("."+b.WRAPPER_CSS_CLASS);if(!this.jqWrapper.length){this.bEnabled=false;this.setTitle(getLabel("js-ieditor-module-popup-title"));this.jqWrapper=jQuery("<a/>").addClass(b.FANCYBOX_CSS_CLASS).addClass(b.WRAPPER_CSS_CLASS).attr("href",this.oEditor.jqImgNode.attr("src"))}else{this.bEnabled=true;this.setTitle(getLabel("js-ieditor-module-popup-title-active"))}};b.prototype.activate=function(){b.superclass.activate.call(this);if(this.bEnabled){this.turnOff()}else{this.turnOn()}this.oEditor.reinit();this.oEditor.initLayout();uAdmin.ieditor.disable();uAdmin.ieditor.enable()};b.prototype.turnOn=function(){var y=this.oEditor.getEipNode(),v="",x="";if(y){v=this.oEditor.cleanupHtml(y.innerHTML)}var w=this.oEditor.jqImgNode.width()/this.oEditor.jqImgNode.height();this.oEditor.jqImgNode.width(b.THUMB_WIDTH).height(Math.round(b.THUMB_WIDTH/w)).attr({width:b.THUMB_WIDTH,height:Math.round(b.THUMB_WIDTH/w)}).wrap(this.jqWrapper).removeAttr("data-mce-style");if(y){x=this.oEditor.cleanupHtml(y.innerHTML)}if(tinymce&&tinymce.activeEditor){tinymce.activeEditor.on("remove",function(){window.setTimeout(fancybox_init,100)})}uAdmin.eip.bind("Disable",function(z){if(z=="after"){window.setTimeout(fancybox_init,500)}});this.addToEipQueue(x,v);uAdmin.eip.message(getLabel("js-ieditor-module-popup-title-msg"));uAdmin.eip.normalizeBoxes();this.bEnabled=true};b.prototype.turnOff=function(){var x=this.oEditor.getEipNode(),v="",w="";if(x){v=this.oEditor.cleanupHtml(x.innerHTML)}this.jqWrapper=this.oEditor.jqImgNode.parents("."+b.WRAPPER_CSS_CLASS);this.oEditor.jqImgNode.insertAfter(this.jqWrapper);this.jqWrapper.remove();this.oEditor.jqImgNode[0].style.width="";this.oEditor.jqImgNode[0].style.height="";this.oEditor.jqImgNode.removeAttr("data-mce-style width height");if(x){w=this.oEditor.cleanupHtml(x.innerHTML)}this.addToEipQueue(w,v);uAdmin.eip.message(getLabel("js-ieditor-module-popup-title-active-msg"));uAdmin.eip.normalizeBoxes();this.bEnabled=false};b.changeImage=function(x,w){if(x instanceof m===false){return}var v=new b(x);v.init(x);if(v.bEnabled){if(w){v.jqWrapper.remove()}else{v.turnOff();v.turnOn()}}v=null};function a(v){a.superclass.constructor.call(this);this.title=getLabel("js-ieditor-module-delete-title");this.cssClass=q.module.delete_module.css_class;this.init(v)}uAdmin.inherit(a,j);a.isImageEditorModule=true;a.prototype.init=function(v){a.superclass.init.call(this,v);this.jqElement.find("."+this.MODULE_ICON_HOLDER_CSS_CLASS).append('<img src="/images/cms/eip/del_button.svg" alt="??">')};a.prototype.activate=function(){a.superclass.activate.call(this);var A={};switch(this.oEditor.iImageType){case this.oEditor.IMAGE_TYPE_EIP:case this.oEditor.IMAGE_TYPE_PHOTOALBUM:var z=this.oEditor.jqImgNode.attr("umi:empty"),x=this.oEditor.jqImgNode.attr("src");this.setNewImage(z,false);this.oEditor.jqImgNode.attr("umi:is-stub",true);this.oEditor.redrawMenu();this.addToEipQueue(z,x);break;case this.oEditor.IMAGE_TYPE_WYSIWYG:var v=this.oEditor.getEipNode(),w=this.getWysiwygContent(v),y="";this.setNewImage("");y=this.getWysiwygContent(v);this.addToEipQueue(y,w,v);break}u.getInstance().removeEmptyEditors();uAdmin.eip.normalizeBoxes();this.triggerEvent("onActivate")};function f(v){l.superclass.constructor.call(this);this.title=getLabel("js-ieditor-module-apply-title");this.cssClass=q.module.apply_module.css_class;this.oActiveModule=v.getEnabledModule();this.init(v)}uAdmin.inherit(f,j);f.isImageEditorModule=true;f.prototype.activate=function(){if(this.oActiveModule instanceof j){this.oActiveModule.save();this.oEditor.reinit()}};function l(v){l.superclass.constructor.call(this);this.title=getLabel("js-ieditor-module-cancel-title");this.cssClass=q.module.cancel_module.css_class;this.oActiveModule=v.getEnabledModule();this.init(v)}uAdmin.inherit(l,j);l.isImageEditorModule=true;l.prototype.activate=function(){if(this.oActiveModule instanceof j){this.oActiveModule.cancel()}};return p(e,this)});uAdmin(".editor",function(b){function a(){}a.prototype.get=function(d,c){var e=uAdmin.eip.searchAttr(d);if(e){this.info=e;this.files=c;return this.load()}return false};a.prototype.load=function(){var o=this,h,e,j,n,m,l=uAdmin.eip.queue.search(o.info);if(l){if(l.add){if(o.info.field_name=="name"){o.info.field_type="string"}else{if(jQuery(o.info.node).attr("umi:field-type")){o.info.field_type=jQuery(o.info.node).attr("umi:field-type")}else{h=jQuery.ajax({url:"/utype/"+l.type_id+".json",async:false,dataType:"json"});h=JSON.parse(h.responseText);for(n in h.type.fieldgroups.group){n=h.type.fieldgroups.group[n];for(m in n.field){m=n.field[m];if(m.name==o.info.field_name){o.info.field_type=m.type["data-type"];break}}if(o.info.field_type){break}}}}o.info.old_value=jQuery(o.info.node).attr("umi:empty");return o.draw(o.info.field_type)}o.info.old_value=l.new_value;o.info.field_type=l.field_type;o.info.params=l.params;o.info.node=l.node;if(o.info.field_type=="relation"){o.info.guide_id=l.guide_id;o.info.multiple=l.multiple;o.info["public"]=l["public"]}return o.draw(l.field_type)}var d=jQuery(o.info.node),k=d.attr("umi:field-type");if(k&&k!="relation"&&k!="symlink"){o.info.field_type=k;if(o.info.node.tagName=="IMG"){o.info.old_value={src:d.attr("src")}}else{o.info.old_value=(d.attr("umi:empty")&&d.attr("umi:empty")==d.html())?"":d.html()}return o.draw(o.info.field_type)}e={};var g=jQuery(o.info.node).attr("umi:"+o.info.type+"-id");if(!g||g.match(/^new/)){g=jQuery(o.info.node).attr("umi:clone-source-id")||jQuery(o.info.node).parents("[umi\\:"+o.info.type+"-id]").first().attr("umi:clone-source-id")||o.info.id}e[o.info.type+"-id"]=g;e["field-name"]=o.info.field_name;e.qt=new Date().getTime();jQuery.ajax({async:false,type:"POST",url:"/admin/content/editValue/load.json",dataType:"json",data:e}).done(function(p){h=p});if(h.error){uAdmin.eip.message(h.error);return false}if(h.user&&h.user.type=="guest"){uAdmin.eip.message(getLabel("error-auth-required"));uAdmin.eip.closeMessages();uAdmin.session.sessionCloseMessage(true);return false}o.info.old_value={};if(h.property.type){d.attr("umi:field-type",h.property.type)}switch(h.property.type){case"relation":for(j in h.property.item){o.info.old_value[h.property.item[j].id]=h.property.item[j].name}o.info.guide_id=h.property["guide-id"];o.info.multiple=(h.property.multiple=="multiple");o.info["public"]=(h.property["public"]=="public");break;case"symlink":for(j in h.property.page){o.info.old_value[h.property.page[j].id]={name:h.property.page[j].name,type:{module:h.property.page[j].basetype.module,method:h.property.page[j].basetype.method}}}break;default:o.info.old_value=h.property.value}if(jQuery(o.info.node).attr("umi:clone-source-id")||jQuery(o.info.node).parents("[umi\\:clone-source-id]").length){var f=["img_file","swf_file","file","video_file"],c=["string","text","wysiwyg","int","date","boolean","password","float","formula","price","counter"];if(f.indexOf(h.property.type)!==-1){o.info.old_value={src:""}}else{if(c.indexOf(h.property.type)!==-1){o.info.old_value=""}else{o.info.old_value=[]}}}o.info.field_type=h.property.type;return o.draw(h.property.type)};a.prototype.bindFinishEvent=function(){var f=this,j,g,e,c,k,d,h;jQuery(document).on("click",function(l){j=jQuery(l.target);g=j.parents();e=uAdmin.eip.addPrevOnStack(g);if(!uAdmin.eip.enabled){return}if(j.attr("contentEditable")==="true"){return}if(jQuery.inArray(j.attr("class"),["eip-ui-element","ui-datepicker","symlink-item-delete"])>=0){return}if(e.hasClass("eip_win")||e.hasClass("eip-ieditor-img-wrapper")||e.hasClass("eip-ieditor-imgareaselect-wrapper")){return true}if(e.filter("#mce-modal-block").length||e.filter("#popupLayerScreenLocker").length||e.filter("#jGrowl").length){return true}if(j.parents(".eip-ui-element, .ui-datepicker, .ui-datepicker-title, .ui-datepicker-header, .ui-datepicker-calendar").length){return}if(uAdmin.eip.isBindFinishEventCustomReturn(j)){return true}for(h=0;h<g.length;h++){c=g[h];k=jQuery(c);d=uAdmin.eip.addPrevOnStack(k.parents());if(c.tagName==="TABLE"){continue}if(c.tagName==="BODY"){break}if(k.attr("class")==="symlink-item-delete"){return}if(k.attr("contentEditable")==="true"){return}if(k.hasClass("mceMenu")||k.hasClass("mceEditor")){return true}if(d.hasClass("mceColorSplitMenu")||d.hasClass("mceMenuItem")||d.hasClass("mce-panel")||d.hasClass("eip-ieditor-imgareaselect-wrapper")){return true}}f.finish(true)})};a.prototype.draw=function(d){var c=this;if(typeof c.draw[d]=="function"){return c.draw[d](c)}uAdmin.eip.message('Unknown field type "'+d+'"');return false};a.prototype.draw["boolean"]=function(d){a.prototype.YES_TEXT=getLabel("js-cms-eip-editor-yes");a.prototype.NO_TEXT=getLabel("js-cms-eip-editor-no");var c=uAdmin.eip.nodePositionInfo(d.info.node);if(typeof d.info.old_value!="boolean"){var f=d.info.old_value;f=(typeof f=="string")?f.trim():f;switch(f){case a.prototype.NO_TEXT:case"0":d.info.old_value=false;break;case a.prototype.YES_TEXT:case"1":d.info.old_value=true;break;default:d.info.old_value=!!d.info.old_value;break}}if(d.info.node.tagName=="INPUT"&&d.info.node.type=="checkbox"){setTimeout(function(){d.info.new_value=!d.info.old_value;d.info.node.checked=d.info.new_value;d.commit();d.cleanup()},300);return d}var e=document.createElement("input");e.type="checkbox";document.body.appendChild(e);jQuery(window).bind("resize.ns"+d.info.guide_id,function(){var g=uAdmin.eip.nodePositionInfo(d.info.node);jQuery(e).css({left:g.x,top:g.y})});d.finish=function(g){if(g){d.info.new_value=e.checked;jQuery(d.info.node).text(d.info.new_value?a.prototype.YES_TEXT:a.prototype.NO_TEXT);d.commit()}jQuery(e).remove();jQuery(window).unbind("resize.ns"+d.info.guide_id);d.info.node.style.visibility="visible";d.cleanup()};e.checked=!!d.info.old_value;jQuery(e).attr("class","eip-ui-element eip-ui-boolean");jQuery(e).css({position:"absolute",left:c.x,top:c.y,"z-index":1100});uAdmin.eip.applyStyles(d.info.node,e);d.info.node.style.visibility="hidden";jQuery(e).click(function(){d.finish(true)});return d};a.prototype.draw["int"]=function(c){return c.draw.text(c)};a.prototype.draw["float"]=function(c){return c.draw.text(c)};a.prototype.draw.counter=function(c){return c.draw.text(c)};a.prototype.draw.price=function(c){return c.draw.text(c)};a.prototype.draw.string=function(c){return c.draw.text(c)};a.prototype.draw.tags=function(c){return c.draw.text(c)};a.prototype.draw.color=function(d){var h=jQuery(d.info.node);h.html("");h.addClass("u-eip-editing");var g=jQuery('<input type="text" class="color_value">').appendTo(h);var e=d.info.old_value;g.val(e);if(typeof colorControl=="undefined"){jQuery('<script src="/styles/common/js/color.control.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head")}var c=new colorControl(h);jQuery(document).bind("mousedown.color",function(){jQuery(document).unbind("mousedown.color");var k=h.find(event.target).length>0;var l=event.target==h.get(0);var m=jQuery("color-picker");var n=m.find(event.target).length>0;var j=event.target==m.get(0);if(!k&&!l&&!n&&!j){f()}});h.bind("hidePicker",function(){f()});function f(){var j=g.val();d.info.new_value=j;h.html(j);d.commit();h.addClass("u-eip-edit-box");h.removeClass("u-eip-editing");h.data("colorpicker",null);
    /**  ???????????????????? ???????????? ?????????????? ???????????????? ???? ?????????????? <a href>  **/
    $('.u-block-all-no-links').removeClass("u-block-all-no-links");
    jQuery(".u-eip-add-button").css("display","block");uAdmin.eip.normalizeBoxes()}return d;};a.prototype.draw.text=function(c,k){var f=jQuery(c.info.node),g=f.html();if(!c.info.old_value){c.info.old_value=""}if(k&&c.info.old_value!==""){c.info.old_value=c.info.old_value.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')}if(!(c.info.field_type=="wysiwyg"&&uAdmin.wysiwyg.settings.inline)){f[0].innerHTML=c.info.old_value||"&nbsp;";f.attr("contentEditable",true)}f.blur().focus();c.finish=function(l){c.finish=function(){};jQuery(document).unbind("keyup");jQuery(document).unbind("click");f.attr("contentEditable",false);jQuery(".u-eip-sortable").sortable("enable");if(l){if(!k&&c.info.field_type!="wysiwyg"){var n=f.html();if(n.match(/\s<br>$/g)){n=n.replace(/<br>$/g,"")}var m=n;n=n.replace(/<!--[\w\W\n]*?-->/mig,"");n=n.replace(/<style[^>]*>[\w\W\n]*?<\/style>/mig,"");n=n.replace(/<([^>]+)>/mg,"");n=n.replace(/(\t|\n)/gi," ");n=n.replace(/[\s]{2,}/gi," ");if(jQuery.browser.safari){n=n.replace(/\bVersion:\d+\.\d+\s+StartHTML:\d+\s+EndHTML:\d+\s+StartFragment:\d+\s+EndFragment:\d+\s*\b/gi,"")}if(n!=m){f.html(n)}}c.info.new_value=f.html();if(c.info.new_value==" "||c.info.new_value=="&nbsp;"||c.info.new_value=="<p>&nbsp;</p>"){c.info.new_value="";f.html(c.info.new_value)}if(c.info.field_type!="wysiwyg"&&c.info.field_type!="text"){c.info.new_value=jQuery.trim(c.info.new_value);if(c.info.new_value.substr(-4,4)=="<br>"){c.info.new_value=c.info.new_value.substr(0,c.info.new_value.length-4)}}else{c.info.new_value=c.info.new_value.replace(/%[A-z0-9_]+(?:%20)+[A-z0-9_]+%28[A-z0-9%]*%29%/gi,unescape)}switch(c.info.field_type){case"int":case"float":case"price":case"counter":c.info.new_value=parseFloat(c.info.new_value);break}c.commit()}else{f.html(g)}c.cleanup()};c.bindFinishEvent();var e=f.width(),j=f.height(),h=null;jQuery(".u-eip-sortable").sortable("disable");f.focus();var d=null;jQuery(document).bind("keyup",function(l){if(e!=f.width()||j!=f.height()){e=f.width();j=f.height();if(h){clearTimeout(h)}h=setTimeout(function(){uAdmin.eip.normalizeBoxes();h=null},1000)}if(l.keyCode==46){if(d==f.html().length){if(d==1){f.html("")}}}}).bind("keydown",function(l){if(l.keyCode==46){d=f.html().length}if(l.keyCode==13&&c.info.field_type!="wysiwyg"&&c.info.field_type!="text"){c.finish(true);return false}if(l.keyCode==27){c.finish(false);return false}return true});return c};a.prototype.draw.wysiwyg=function(l){var g=jQuery(l.info.node),c=false,f=false,d=false,j=false,e=function(m){m=m.replace(/<![\s\S]*?--[ \t\n\r]*>/ig," ");m=m.replace(/<!--.*?-->/ig," ");if(jQuery.browser.mozilla){m=m.replace(/<\/?(style|font|title).*[^>]*>/ig,"")}m=m.replace(/<\/?(title|style|font|meta)\s*[^>]*>/ig,"");m=m.replace(/\s*mso-[^:]+:[^;""]+;?/ig,"");m=m.replace(/<\/?o:[^>]*\/?>/ig,"");m=m.replace(/ style=['"]?[^'"]*['"]?/ig,"");m=m.replace(/ class=['"]?[^'">]*['"]?/ig,"");m=m.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/ig," ");m=m.replace(/<span\s*[^>]*>/ig,"");m=m.replace(/<\/span\s*[^>]*>/ig,"");m=m.replace(/<\/(b|i|s|u|strong|center)>[\t\n]*<\1[^>]*>/gi,"");m=m.replace(/<\/(b|i|s|u|strong|center)>\s*<\1[^>]*>/gi," ");m=m.replace(/<(b|i|s|u|strong|center)[^>]*>[\s\t\n\xC2\xA0]*<\/\1>/gi,"");m=m.replace(/(\t|\n)/gi," ");m=m.replace(/[\s]{2,}/gi," ");if(jQuery.browser.safari){m=m.replace(/\bVersion:\d+\.\d+\s+StartHTML:\d+\s+EndHTML:\d+\s+StartFragment:\d+\s+EndFragment:\d+\s*\b/gi,"")}return m};l.draw.text(l,true);jQuery(document).bind("keyup",function(n){if((n.keyCode==86||c)||(n.keyCode==45&&f)){if(!(tinymce&&tinymce.settings&&tinymce.settings.inline)&&uAdmin.eip.isCleanupHtmlOnWysiwygCtrlShift()){var m=e(g.html());if(m!=g.html()){g.html(m)}}if(c&&!n.ctrlKey){c=false}if(f&&!n.shiftKey){f=false}}switch(n.keyCode){case 16:if(!j){f=false}break;case 17:if(!d){c=false}break;case 45:j=false;break;case 86:d=false;break}}).bind("keydown",function(m){switch(m.keyCode){case 16:f=true;break;case 17:c=true;break;case 45:j=true;break;case 86:d=true;break}});var h=uAdmin.wysiwyg.init(l.info.node);var k=l.finish;l.finish=function(m){if(h){h.destroy()}k(m);uAdmin.eip.bindEvents()};return l};a.prototype.draw.file=function(m,e){var c="./images/cms/data/",g="",d,h,f;m.finish=function(n){if(n){if(m.info.node.tagName=="IMG"){m.info.node.src=m.info.new_value.src}else{if(e){m.info.node.style.backgroundImage="url("+m.info.new_value.src+")"}else{m.info.node.innerText=m.info.new_value.src.substr(m.info.new_value.src.lastIndexOf("/")+1)}}m.commit();if(uAdmin&&uAdmin.eip&&uAdmin.eip.reinitEmptyLists){uAdmin.eip.reinitEmptyLists()}}m.cleanup()};if(m.info.old_value){if(m.info.old_value.src==undefined){m.info.old_value={src:m.info.old_value}}g=m.info.old_value.src.split(/\//g).pop();c="."+m.info.old_value.src.substr(0,m.info.old_value.src.length-g.length-1)}if(m.files&&m.files.length){d=m.files[0];d.folder=c;if(m.info.old_value){d.file=m.info.old_value.src}if(e){d.image=1}h=jQuery.ajax({url:"/admin/data/uploadfile/",async:false,data:d,type:"POST",dataType:"json"});h=JSON.parse(h.responseText);if(h.file.path){m.new_value=h.file.path;m.finish(true)}else{m.finish()}}else{f={folder:c,file:m.info.old_value?m.info.old_value.src:""};h=jQuery.ajax({url:"/admin/data/get_filemanager_info/",async:false,data:f,type:"POST",dataType:"json"});h=JSON.parse(h.responseText);var j="folder="+c;if(m.info.old_value){j+="&file="+m.info.old_value.src}if(e){j+="&image=1"}var k={flash:{height:460,url:"/styles/common/other/filebrowser/umifilebrowser.html?"+j},elfinder:{height:600,url:"/styles/common/other/elfinder/umifilebrowser.html?"+j+"&lang="+h.lang+"&file_hash="+h.file_hash+"&folder_hash="+h.folder_hash}};jQuery.openPopupLayer({name:"Filemanager",title:getLabel("js-file-manager"),width:1200,height:k[h.filemanager].height,url:k[h.filemanager].url,afterClose:function(n){if(n){if(typeof n=="object"){n=n[0]}if(typeof n=="object"){n=n.url}m.info.new_value=n?{src:n.toString()}:"";m.finish(true)}else{m.finish()}}});if(h.filemanager=="elfinder"){var l='<div id="watermark_wrapper"><label for="add_watermark">';l+=getLabel("js-water-mark");l+='</label><input type="checkbox" name="add_watermark" id="add_watermark"/>';l+='<label for="remember_last_folder">';l+=getLabel("js-remember-last-dir");l+='</label><input type="checkbox" name="remember_last_folder" id="remember_last_folder"';if(jQuery.cookie("remember_last_folder")){l+='checked="checked"'}l+="/></div>";jQuery("#popupLayer_Filemanager .popupBody").append(l)}}return m};a.prototype.draw.img_file=function(c){return c.draw.file(c,true)};a.prototype.draw.video_file=function(c){return c.draw.file(c)};a.prototype.draw.date=function(d){var e;if(d.info.old_value!=jQuery(d.info.node).attr("umi:empty")){e=d.info.old_value}e=moment(e,["DD-MM-YYYY hh:mm","DD-MM-YYYY","YYYY-MM-DD hh:mm","YYYY-MM-DD"]);if(!e.isValid()){e=moment()}d.info.old_value=e.format("DD-MM-YYYY");d.draw.text(d);var c=uAdmin.eip.nodePositionInfo(d.info.node);var f=jQuery("#u-datepicker-input");if(!f.length){f=document.createElement("input");f.id="u-datepicker-input";document.body.appendChild(f)}jQuery(window).bind("resize.ns"+d.info.guide_id,function(){var g=uAdmin.eip.nodePositionInfo(d.info.node);jQuery(".ui-datepicker-trigger").css({left:g.x+g.width+5,top:g.y});jQuery(f).css({left:(g.x+g.width+5),top:g.y})});d.finish=function(g){jQuery(window).unbind("resize.ns"+d.info.guide_id);jQuery(f).datepicker("destroy");jQuery(".ui-datepicker-trigger").remove();if(!d.info.new_value){d.info.new_value=jQuery(d.info.node).html()}d.cleanup();d.commit()};jQuery(f).css({position:"absolute",left:(c.x+c.width+5),top:(c.y),width:"1",height:"1",visibility:"hidden","font-size":"62.5%","z-index":560});jQuery(f).datepicker(jQuery.extend({},jQuery.datepicker.regional[uAdmin.data.lang],{showOn:"button",buttonImage:"/styles/common/other/calendar/icons_calendar_buttrefly_eip.png",buttonImageOnly:true,dateFormat:"dd-mm-yy",defaultDate:e.toDate(),onSelect:function(g){d.info.new_value=g;jQuery(d.info.node).html(g);jQuery(d.info.node).focus()}}));jQuery(d.info.node).html(d.info.old_value);uAdmin.eip.placeWith(d.info.node,jQuery(".ui-datepicker-trigger"),"right","middle");if(!d.info.id){d.info.old_value=""}jQuery(".ui-datepicker-trigger").css({left:(c.x+c.width+5),top:(c.y)});return d};a.prototype.draw.relation=function(p){jQuery(document).one("mouseup",function(){setTimeout(function(){p.bindFinishEvent()},100)});setTimeout(function(){jQuery(document).off("mouseup");p.bindFinishEvent()},1000);var j=uAdmin.eip.nodePositionInfo(p.info.node);var o=document.createElement("select");var n=document.createElement("input");document.body.appendChild(o);if(p.info.guide_id&&p.info["public"]){var k=document.createElement("input");k.type="button";k.value=" ";k.id="relationButton"+p.info.guide_id;k.className="relationAddButton";document.body.appendChild(k)}jQuery(o).attr("class","eip-ui-element");jQuery(o).css({position:"absolute",left:j.x,top:j.y,"z-index":1100});uAdmin.eip.applyStyles(p.info.node,o,uAdmin.eip.isRelationDrawApplyDimentions());jQuery(p.info.node).css("visibility","hidden");if(p.info.multiple){jQuery(o).attr("multiple","multiple");jQuery(o).attr("size",3)}for(var g in p.info.old_value){var h=document.createElement("option");jQuery(h).attr("value",g);jQuery(h).attr("selected","selected");jQuery(h).html(p.info.old_value[g]);o.appendChild(h)}jQuery(o).focus();jQuery(o).attr("name","rel_input");jQuery(o).attr("id","relationSelect"+p.info.guide_id);document.body.appendChild(n);uAdmin.eip.applyStyles(p.info.node,n);jQuery(n).attr({id:"relationInput"+p.info.guide_id,"class":"eip-ui-element",name:"rel_input_new"});if(typeof relationControl=="undefined"){jQuery('<script src="/styles/common/js/relation.control.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head")}var f=new relationControl(p.info.guide_id,null,true,"/admin/data/guide_items_all/");jQuery(window).bind("resize.ns"+p.info.guide_id,function(){var q=uAdmin.eip.nodePositionInfo(p.info.node);jQuery(o).css({left:q.x,top:q.y});jQuery(n).css({left:q.x,top:(q.y+jQuery(o).height()+5)});jQuery(k).css({left:(q.x+jQuery(n).width()+5),top:(q.y+jQuery(o).height()+Math.round((jQuery(n).height()-jQuery(k).height())/2))})});p.finish=function(){var r=[];p.info.new_value=f.getValue();p.commit();for(var q in p.info.new_value){r.push(p.info.new_value[q])}p.info.node.innerHTML=r.join(", ");p.info.node.style.visibility="visible";jQuery(o).resizable();try{jQuery(o).resizable("destroy")}catch(s){jQuery(o).resizable({disabled:true})}jQuery(o).remove();jQuery(n).remove();jQuery(k).remove();jQuery("#u-ep-search-trigger").remove();jQuery(window).unbind("resize.ns"+p.info.guide_id);p.cleanup()};f.loadItemsAll();if(p.info.multiple){var m=jQuery(o).height(),l=350;if(m<150){m=75;jQuery(o).css("height",m)}jQuery(o).resizable({minWidth:jQuery(o).width(),maxWidth:jQuery(o).width(),minHeight:m,maxHeight:l});jQuery(".ui-wrapper").css("z-index","1100")}var c=jQuery(o).width(),d=jQuery(n).width(),e=uAdmin.eip.getRelationSearchFieldWidth(o);if(e){d=c=e}jQuery(n).css({position:"absolute",width:c,left:j.x,top:(j.y+jQuery(o).height()+5),"z-index":1111});jQuery(k).css({position:"absolute",left:(j.x+d+5),top:(j.y+jQuery(o).height()+Math.round((jQuery(n).height()-jQuery(k).height())/2)),"z-index":1112});return p};a.prototype.draw.symlink=function(k){jQuery(document).one("mouseup",function(){setTimeout(function(){k.bindFinishEvent()},100)});setTimeout(function(){jQuery(document).off("mouseup");k.bindFinishEvent()},1000);var d=jQuery(k.info.node).attr("umi:type")?jQuery(k.info.node).attr("umi:type").split("::"):[];var g=uAdmin.eip.nodePositionInfo(k.info.node);var j=jQuery('<div><div id="symlinkInput'+k.info.id+'" /></div>').attr({"class":"eip-ui-element"}).css({position:"absolute",left:g.x,top:g.y,"z-index":1100}).appendTo("body");var l=150,h=jQuery(k.info.node).outerWidth(),c=(h>l?h:l);jQuery("#symlinkInput"+k.info.id).width(c);if(typeof symlinkControl=="undefined"){jQuery('<script src="/styles/common/js/symlink.control.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head")}var f=new symlinkControl(k.info.id,(d[0]||null),d,{inputName:k.info.field_name+"[]",fadeColorStart:[255,255,225],fadeColorEnd:[255,255,255]});if(jQuery.isEmptyObject(k.info.old_value)){f.addPlaceHolder()}for(var e in k.info.old_value){if(d.length===0){d=[k.info.old_value[e].type.module,k.info.old_value[e].type.method]}f.addItem(e,k.info.old_value[e].name,d,"")}jQuery(k.info.node).css("visibility","hidden");jQuery(window).bind("resize.ns"+k.info.guide_id,function(){var m=uAdmin.eip.nodePositionInfo(k.info.node);jQuery(j).css({left:m.x,top:m.y})});k.finish=function(){var m=jQuery('input[name="'+k.info.field_name+'[]"]'),p=[];jQuery(k.info.node).css("visibility","visible");k.info.new_value={};for(e=0;e<m.length;e++){if(m[e].value){var n=jQuery("ul li span",j)[e-1],o=jQuery(n).data("basetype").split(" ");k.info.new_value[m[e].value]={name:jQuery("ul li span",j)[e-1].innerHTML,type:{module:o[0],method:o[1]}};p.push(k.info.new_value[m[e].value].name)}}k.info.node.innerHTML=p.join(", ");k.commit();j.resizable();try{j.resizable("destroy")}catch(q){j.resizable({disabled:true})}j.remove();jQuery("div.symlinkAutosuggest").remove();jQuery("#u-ep-search-trigger").remove();jQuery(window).unbind("resize.ns"+k.info.guide_id);k.cleanup()};f.loadItems();return k};a.prototype.replace=function(e,d,c){return e?this.replace[e.field_type](e,d,c):false};a.prototype.replace.img_file=function(f,q,o){var l=false,g=jQuery(f.node),m,k,j;var e=function(u,t){return u==t};var d=function(t){if(t.indexOf("/images/cms/thumbs/")>=0){return true}if(t.indexOf("/images/autothumbs/")>=0){return true}return false};var s=function(z,x,t){z=z.toString();var v=z.split(/\./g);if(v.length<2){return false}var w=v[v.length-1].toString();v=v[v.length-2].toString().split(/\//g);var u=v[v.length-1].toString();var y=z.substr(0,z.length-u.length-w.length-1);return"/images/autothumbs"+y+u+"_"+x+"_"+t+"."+w};if(f.node.tagName=="IMG"){if(e(g.attr("src"),o.src||"")){f.node.src=q.src||"";l=true}else{if(d(f.node.src)){var c=g.width();var r=g.height();var p=f.node.src;if(p.indexOf(c)!=-1&&p.indexOf(r)==-1){r="auto"}if(p.indexOf(c)==-1&&p.indexOf(r)!=-1){c="auto"}f.node.src=s(q.src,c,r);l=true}}g.one("load",function(){uAdmin.eip.normalizeBoxes()})}var n=f.node.style.backgroundImage.replace(/"/g,"");if(n.substr(0,4)!="url("){if(!l&&g.attr("childNodes")){m=g.attr("childNodes");for(j=0;j<m.length;j++){k=m.item(j);if(k&&jQuery(k).attr("tagName")){replaceImage(jQuery(k),q.src,o.src)}}}return l}n=n.substring(4,n.length-1);var h=window.location.protocol+"//"+window.location.host;if(n.substr(0,h.length)==h){n=n.substr(h.length)}if(!n){return l}if(e(n,o.src)){f.node.style.backgroundImage="url("+q.src+")";l=true}if(!l&&g.attr("childNodes")){m=g.attr("childNodes");for(j=0;j<m.length;j++){k=m.item(j);if(k&&jQuery(k).attr("tagName")){replaceImage(jQuery(k),q.src,o.src)}}}return l};a.prototype.replace.video_file=function(f,d,c){var e=function(g){return(navigator.appName.indexOf("Microsoft")!=-1)?window[g]:document[g]};e("UmiVideoPlayer").setVideoFile(d);return true};a.prototype.replace["boolean"]=function(e,d,c){if(e.node.tagName=="INPUT"&&e.node.type=="checkbox"){e.node.checked=d?true:false}else{jQuery(e.node).html(d?getLabel("js-cms-eip-editor-yes"):getLabel("js-cms-eip-editor-no"))}return true};a.prototype.replace.relation=function(g,f,c){var e=[],d;for(d in f){e.push(f[d])}jQuery(g.node).html(e.join(", "));return true};a.prototype.replace.symlink=function(g,f,c){var e="",d;for(d in f){e+="<span>"+f[d]+"</span><br />"}jQuery(g.node).html(e);return true};a.prototype.replace["int"]=function(e,d,c){return this.text(e,d,c)};a.prototype.replace["float"]=function(e,d,c){return this.text(e,d,c)};a.prototype.replace.counter=function(e,d,c){return this.text(e,d,c)};a.prototype.replace.price=function(e,d,c){return this.text(e,d,c)};a.prototype.replace.string=function(e,d,c){return jQuery(e.node).html(d)};a.prototype.replace.tags=function(e,d,c){return this.text(e,d,c)};a.prototype.replace.text=function(e,d,c){return jQuery(e.node).html(d)};a.prototype.replace.wysiwyg=function(e,d,c){return jQuery(e.node).html(d||"&nbsp;")};a.prototype.replace.file=function(e,d,c){return this.text(e,d,c)};a.prototype.replace.date=function(e,d,c){return this.text(e,d,c)};a.prototype.commit=function(){uAdmin.eip.trigger("ActiveEditorCommit","before");var d=this.info.new_value,c=this.info.old_value;if(this.info.field_type.match(/file/)){d=this.info.new_value.src;c=this.info.old_value?this.info.old_value.src:""}if(!this.equals(d,c)){jQuery(this.info.node).addClass("u-eip-modified");uAdmin.eip.queue.add(this.info)}else{if(uAdmin.eip.queue.search(this.info)){jQuery(this.info.node).addClass("u-eip-modified")}}uAdmin.eip.trigger("ActiveEditorCommit","after")};a.prototype.cleanup=function(){uAdmin.eip.bindEvents();this.finish=function(){this.cleanup()};uAdmin.eip.highlightNode(this.info.node);jQuery(".u-eip-add-button").css("display","block");uAdmin.eip.normalizeBoxes();this.info.node.blur();jQuery(this.info.node).removeClass("u-eip-editing");
    /**  ???????????????????? ???????????? ?????????????? ???????????????? ???? ?????????????? <a href>  **/
    $('.u-block-all-no-links').removeClass("u-block-all-no-links");
};a.prototype.finish=function(){this.cleanup()};a.prototype.equals=function(){var d=false,c=arguments,g=Object.prototype.toString,f,e={length:0};switch(true){case (c.length!==2):break;case (typeof c[0]!==typeof c[1]):break;case (g.call(c[0])!==g.call(c[1])):break;default:switch(typeof c[0]){case"undefined":break;case"object":if(g.call(c[0])=="[object Array]"){d=(c[0].length===c[1].length);if(d){for(f=0;f<c[0].length;f++){e[c[0][f]]=f;++e.length}for(f=0;f<c[1].length;f++){if(delete e[c[0][f]]){--e.length}}if(e.length===0){d=true}}}else{for(f in c[0]){e[f]=f;++e.length}for(f in c[1]){if(delete e[f]){--e.length}}if(e.length===0){d=true}if(d){for(f in c[0]){d=this.equals(c[0][f],c[1][f]);if(!d){break}}}}break;default:d=(c[0]===c[1])}}return d};return b(a,this)},"eip");uAdmin(".wysiwyg",function(extend){function WYSIWYG(){this.settings=jQuery.extend(this[this.type].settings,this.settings);this[this.type]();this.init=this[this.type].init}WYSIWYG.prototype.init=function(){return false};WYSIWYG.prototype.settings=function(){return false};WYSIWYG.prototype.tinymce47=function(){window.tinyMCEPreInit={suffix:".min",base:"/js/cms/wysiwyg/tinymce47"};if(!window.tinymce){$('<script src="/js/cms/wysiwyg/tinymce47/tinymce.min.js" charset="utf-8"><\/script>').appendTo("head")}if(!window.mceCustomSettings){$('<script src="/js/cms/wysiwyg/tinymce47/tinymce_custom.js" charset="utf-8"><\/script>').appendTo("head")}};WYSIWYG.prototype.tinymce47.init=function(options){if(!tinyMCE){throw"tinyMCE is not defined"}options=options||{};var editor={};var selector="textarea.wysiwyg";if(uAdmin.eip&&uAdmin.eip.editor){editor={id:"mceEditor-"+new Date().getTime(),destroy:function(){tinymce&&tinymce.activeEditor&&tinymce.activeEditor.destroy()}};selector="#"+editor.id;options.id=editor.id;options.inline=true;tinymce.on("AddEditor",function(event){event.editor.on("init",function(){this.fire("focus")})})}var settings={language:uAdmin.data["interface-lang"]||uAdmin.data.lang};$.extend(settings,this.settings,window.mceCustomSettings,options.settings||{});tinyMCE.init(settings);if(typeof options.selector==="string"){selector=options.selector}jQuery(selector).each(function(i,n){tinyMCE.execCommand("mceToggleEditor",false,n.id)});return editor};WYSIWYG.prototype.tinymce47.settings={branding:false,theme:"modern",skin:"lightgray",paste_as_text:true,extended_valid_elements:"script[src|*],style[*],map[*],area[*],umi:*[*],input[*],noindex[*],nofollow[*],iframe[frameborder|src|width|height|name|align],div[*],span[*],a[*],-p[*]",plugins:["anchor","advlist","charmap","codemirror","contextmenu","fullscreen","image","link","lists","media","paste","searchreplace","table","textcolor","visualchars"],image_advtab:true,image_caption:true,toolbar:"paste pastetext removeformat link unlink anchor image media table charmap code blockquote formatselect fontselect fontsizeselect bold italic strikethrough underline alignleft aligncenter alignright alignjustify bullist numlist outdent indent forecolor backcolor subscript superscript",menubar:false,resize:true,min_height:300,codemirror:{indentOnInit:true,path:"codemirror",width:1000,height:500,config:{lineNumbers:true,lineWrapping:true,autofocus:true}},convert_urls:false,relative_urls:false,file_browser_callback:function(){uAdmin.wysiwyg.umiFileBrowserCallback.apply(uAdmin.wysiwyg,arguments)},urlconverter_callback:function(url){var umiPageLink=url.match(/^%content%20get_page_url\((\d+)\)%$/);return(umiPageLink===null)?url:"%content get_page_url("+umiPageLink[1]+")%"}};WYSIWYG.prototype.umiFileBrowserCallback=function(fieldName,url,type,win){switch(type){case"file":return uAdmin.wysiwyg.umiTreeLink(fieldName,url,type,win);case"image":case"media":var input=win.document.getElementById(fieldName);if(!input){return false}var folder="";var file="";if(input.value.length){folder=input.value.substr(0,input.value.lastIndexOf("/"));file=input.value}jQuery.ajax({url:"/admin/data/get_filemanager_info/",data:"folder="+folder+"&file="+file,dataType:"json",complete:function(data){data=jQuery.parseJSON(data.responseText);var folderHash=data.folder_hash;var fileHash=data.file_hash;var lang=data.lang;var fileManager=data.filemanager;if(fileManager==="elfinder"){return uAdmin.wysiwyg.umielfinderFileManager(fieldName,url,type,win,lang,folderHash,fileHash)}var functionName="uAdmin.wysiwyg.umi"+fileManager+"FileManager";eval(functionName+"(fieldName, url, type, win, lang, folderHash, fileHash)")}});break;default:throw"Invalid type"}return false};WYSIWYG.prototype.umielfinderFileManager=function(fieldName,url,type,win,lang,folderHash,fileHash){var query=[];query.push("id="+fieldName);switch(type){case"image":query.push("image=1");break;case"media":query.push("media=1");break}query.push("folder_hash="+folderHash);query.push("file_hash="+fileHash);query.push("lang="+lang);$.openPopupLayer(jQuery.extend({name:"Filemanager",title:getLabel("js-file-manager"),width:1200,height:600,url:"/styles/common/other/elfinder/umifilebrowser.html?"+query.join("&")},uAdmin.wysiwyg.getOpenPopupLayerExtParams(fieldName,win)));var selector="#popupLayer_Filemanager .popupBody",footerHtml='<div id="watermark_wrapper"><label for="add_watermark">'+getLabel("js-water-mark")+'</label><input type="checkbox" name="add_watermark" id="add_watermark"></div>';if(tinymce&&tinymce.activeEditor&&tinymce.activeEditor.settings.inline){jQuery(selector).append(footerHtml)}else{window.parent.jQuery(selector).append(footerHtml)}return false};WYSIWYG.prototype.getOpenPopupLayerExtParams=function(fieldName,win){return{}};WYSIWYG.prototype.umiTreeLink=function(fieldName,url,type,win){var domainFloated;var domainFloatedId;var langId;if(window.pageData){domainFloated=window.pageData.domain;domainFloatedId=window.pageData.domain_id;langId=window.pageData.lang_id}else{if(uAdmin&&uAdmin.data){domainFloated=uAdmin.data["domain-floated"];domainFloatedId=uAdmin.data["domain-id"];langId=uAdmin.data["lang-id"]}else{throw"Page data is not defined"}}var query="?domain="+domainFloated+"&domain_id="+domainFloatedId+"&lang_id="+langId;var treeLinkUrl="/js/cms/wysiwyg/tinymce47/skins/lightgray/treelink/treelink.html"+query;var pageHeight=320;if(tinyMCE.majorVersion==3){treeLinkUrl="/js/cms/wysiwyg/tinymce/jscripts/tiny_mce/themes/umi/treelink.html"+query;pageHeight=308}tinyMCE.activeEditor.windowManager.open({url:treeLinkUrl,title:getLabel("js-choose-page"),width:525,height:pageHeight,inline:true,scrollbars:false,resizable:false,maximizable:false,close_previous:false},{window:win,input:fieldName,editor_id:tinyMCE.activeEditor.id});return false};WYSIWYG.prototype.getFilemanagerFooter=function(filemanager){var footer="";if(filemanager==="elfinder"){footer='<div id="watermark_wrapper" class="ui-widget-header">';footer+='<label for="remember_last_folder">';footer+=getLabel("js-remember-last-dir");footer+='</label><input type="checkbox" name="remember_last_folder" id="remember_last_folder"';if(jQuery.cookie("remember_last_folder")){footer+='checked="checked"'}footer+="/></div>"}return footer};defineDeprecatedWysiwygFunctions(WYSIWYG);return extend(WYSIWYG,this)});uAdmin.onLoad("wysiwyg",function(){uAdmin.wysiwyg.curr_mouse_position={top:0,left:0};$("body").click(function(a){uAdmin.wysiwyg.curr_mouse_position={top:a.pageY-window.pageYOffset,left:a.pageX-window.pageXOffset}})});function defineDeprecatedWysiwygFunctions(a){a.prototype.inline=function(){jQuery('<script src="/js/cms/wysiwyg/inline/inlineWYSIWYG.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head")};a.prototype.inline.init=function(b){return new inlineWYSIWYG(b)};a.prototype.getTinymceUmiruDestroyHolderContent=function(b){var c=jQuery("iframe",b)[0];return c.contentDocument.body.innerHTML};a.prototype.getRepositionToolbarWidth=function(){return 1025};a.prototype.tinymce=function(){window.tinyMCEPreInit={suffix:"",base:"/js/cms/wysiwyg/tinymce/jscripts/tiny_mce"};jQuery('<script src="/js/cms/wysiwyg/tinymce/jscripts/tiny_mce/tiny_mce.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head");jQuery('<script src="/js/cms/wysiwyg/tinymce/jscripts/tiny_mce/tinymce_custom.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head")};a.prototype.tinymce.init=function(c){var e={},b="textarea.wysiwyg",d={};if(uAdmin.eip&&uAdmin.eip.editor){uAdmin.eip.onTinymceInitEditorTune.call(this,d);e={id:"mceEditor-"+new Date().getTime(),destroy:function(){tinyMCE.execCommand("mceToggleEditor",false,e.id)}};c.id=e.id;b="#"+e.id}d.language=uAdmin.data["interface-lang"]||uAdmin.data.lang;d=jQuery.extend(this.settings,d);d=jQuery.extend(d,window.mceCustomSettings);var f=c?(c.settings||{}):{};d=jQuery.extend(d,f);tinyMCE.init(d);if(c&&typeof c.selector==="string"){b=c.selector}jQuery(b).each(function(g,h){tinyMCE.execCommand("mceToggleEditor",false,h.id)});return e};a.prototype.tinymce.settings={mode:"none",theme:"umi",width:"100%",language:typeof window.interfaceLang=="string"?interfaceLang:"ru",plugins:"safari,spellchecker,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",inlinepopups_skin:"butterfly",toolbar_standart:"fontsettings,tablesettings,|,cut,copy,paste,|,pastetext,pasteword,|,selectall,cleanup,|,undo,redo,|,link,unlink,anchor,image,media,|,charmap,code",toolbar_tables:"table,delete_table,|,col_after,col_before,row_after,row_before,|,delete_col,delete_row,|,split_cells,merge_cells,|,row_props,cell_props",toolbar_fonts:"formatselect,fontselect,fontsizeselect,|,bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,outdent,indent,|,forecolor,backcolor,|,sub,sup",theme_umi_toolbar_location:"top",theme_umi_toolbar_align:"left",theme_umi_statusbar_location:"bottom",theme_umi_resize_horizontal:false,theme_umi_resizing:true,convert_urls:false,relative_urls:false,file_browser_callback:function(g,e,f,h){if(f=="file"){var d="/js/cms/wysiwyg/tinymce/jscripts/tiny_mce/themes/umi/treelink.html"+(window.lang_id?"?lang_id="+window.lang_id:"");tinyMCE.activeEditor.windowManager.open({url:d,width:525,height:308,inline:true,scrollbars:false,resizable:false,maximizable:false,close_previous:false},{window:h,input:g,editor_id:tinyMCE.selectedInstance.editorId});return false}else{var c=h.document.getElementById(g),j={},b=[];if(!c){return false}if(c.value.length){j.folder=c.value.substr(0,c.value.lastIndexOf("/"));j.file=c.value}b.push("id="+g);switch(f){case"image":b.push("image=1");break;case"media":b.push("media=1");break}jQuery.ajax({url:"/admin/data/get_filemanager_info/",data:j,dataType:"json",success:function(l){if(l.filemanager=="flash"){if(c.value.length){b.push("folder=."+j.folder);b.push("file="+c.value)}}else{b.push("folder_hash="+l.folder_hash);b.push("file_hash="+l.file_hash);b.push("lang="+l.lang)}var k={flash:{height:460,url:"/styles/common/other/filebrowser/umifilebrowser.html?"+b.join("&")},elfinder:{height:600,url:"/styles/common/other/elfinder/umifilebrowser.html?"+b.join("&")}};jQuery.openPopupLayer({name:"Filemanager",title:getLabel("js-file-manager"),width:1200,height:k[l.filemanager].height,url:k[l.filemanager].url});if(l.filemanager=="elfinder"){var m='<div id="watermark_wrapper"><label for="add_watermark">';m+=getLabel("js-water-mark");m+='</label><input type="checkbox" name="add_watermark" id="add_watermark"/>';m+='<label for="remember_last_folder">';m+=getLabel("js-remember-last-dir");m+='</label><input type="checkbox" name="remember_last_folder" id="remember_last_folder"';if(getCookie("remember_last_folder",true)>0){m+='checked="checked"'}m+="/></div>";window.parent.jQuery("#popupLayer_Filemanager .popupBody").append(m)}return false}})}return false},extended_valid_elements:"script[type=text/javascript|src|languge|lang],map[*],area[*],umi:*[*],input[*],noindex[*],nofollow[*],iframe[frameborder|src|width|height|name|align]",content_css:"/css/cms/style.css"};a.prototype.tinymce_umiru=function(){window.tinyMCEPreInit={suffix:"_src",base:"/js/cms/wysiwyg/tinymce/jscripts/tiny_mce"};if(!window.tinymce){jQuery('<script src="/js/cms/wysiwyg/tinymce/jscripts/tiny_mce/tiny_mce_src.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head")}jQuery('<script src="/js/cms/wysiwyg/tinymce/jscripts/tiny_mce/tinymce_src_custom.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head")};a.prototype.tinymce_umiru.init=function(e){var d,b="textarea.wysiwyg",c={};if(uAdmin.eip&&uAdmin.eip.editor){uAdmin.eip.onTinymceInitEditorTune.call(this,c);d={id:"mceEditor-"+new Date().getTime(),destroy:function(){var h=jQuery("#"+d.id),f=jQuery("#"+d.id+"_parent"),g;g=uAdmin.wysiwyg.getTinymceUmiruDestroyHolderContent(f);h.html(g);f.remove();h.css("display","");h[0].id=""}};e.id=d.id;b="#"+d.id}c.language=uAdmin.data["interface-lang"]||uAdmin.data.lang;c=jQuery.extend(this.settings,c);if(window.mceUmiRUCustomSettings){c=jQuery.extend(c,window.mceUmiRUCustomSettings)}tinyMCE.init(c);jQuery(b).each(function(f,g){tinyMCE.execCommand("mceAddControl",false,g.id)});return d};a.prototype.tinymce_umiru.settings={mode:"none",theme:"umiru",language:typeof window.interfaceLang=="string"?interfaceLang:"ru",width:"100%",suffix:"_src",body_class:"text",theme_umi_resizing_use_cookie:false,init_instance_callback:"uAdmin.wysiwyg.initInstance",theme_umi_path:false,constrain_menus:false,extended_valid_elements:"script[src|*],style[*],map[*],area[*],umi:*[*],input[*],noindex[*],nofollow[*],iframe[frameborder|src|width|height|name|align],div[*],span[*],a[*]",plugins:"safari,spellchecker,pagebreak,style,layer,table,save,advhr,umiimage,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",inlinepopups_skin:"butterfly",setup:function(b){function c(e,d){jQuery(e.getContainer()).children("table.mceLayout").eq(0).css("height","auto");var f=jQuery(e.getContentAreaContainer()).children("iframe")[0];var g=f.contentWindow.document.body;iHeight=Math.max(jQuery(g).parent().outerHeight(),jQuery(g).outerHeight());f.style.height=iHeight+"px";$("img",e.getBody()).on("load",function(){c(e,d)})}b.onChange.add(c);b.onKeyDown.add(c);b.onLoadContent.add(function(k,g){if(g.content=="&nbsp;"||g.content==" "){k.setContent("")}k.focus();function j(q){if(q.nodeType==3){return q}var r=$(q).contents();for(var p=0;p<r.length;p++){var o=j(r[p]);if(o){return o}}return false}var n=k.dom.select("body");var h=j(n[0]);if(!h){if(k.dom.select("body *").length>0){h=k.dom.select("body *")[0]}else{h=n[0]}}else{h=h.parentNode}var e=k.selection.getRng();if(!e||typeof e.selectNode=="undefined"){return}var m=k.getDoc().createTextNode(".");h.insertBefore(m,h.firstChild);e.selectNode(m);e.setStartBefore(m);e.setStartAfter(m);k.selection.setRng(e);h.removeChild(m);var f=$("#"+k.editorContainer+" .toolbarHolder");var d=1110;var l=$("body").width();f.css("position","fixed");f.css("top",40);if(l>d){f.css("left",(l-d)/2)}else{f.css("left",(l-800)/2)}})},toolbar_standart:"umiimage,tablesettings,|,pastetext,pasteword,|,cleanup,|,link,unlink,|,charmap,code",toolbar_tables:"table,delete_table,|,col_after,col_before,row_after,row_before,|,delete_col,delete_row,|,split_cells,merge_cells,|,row_props,cell_props",toolbar_fonts:"formatselect,fontselect,fontsizeselect,|,bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,outdent,indent,|,forecolor,backcolor,|,sub,sup",theme_umi_toolbar_location:"top",theme_umi_toolbar_align:"left",theme_umi_statusbar_location:"bottom",theme_umi_resize_horizontal:false,theme_umi_resizing:false,convert_urls:false,relative_urls:false,file_browser_callback:"uAdmin.wysiwyg.umiFileBrowserCallback",template_external_list_url:"js/template_list.js",external_link_list_url:"",external_image_list_url:"",media_external_list_url:""};a.prototype.tinymce4=function(){window.tinyMCEPreInit={suffix:".min",base:"/js/cms/wysiwyg/tinymce4"};jQuery('<script src="/js/cms/wysiwyg/tinymce4/tinymce_custom.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head");if(window.customLinkTinymce4){window.customLinkTinymce4()}else{if(!window.tinymce){jQuery('<script src="/js/cms/wysiwyg/tinymce4/tinymce.min.js" type="text/javascript" charset="utf-8"><\/script>').appendTo("head")}}var b=jQuery("<div/>").addClass("toolbarHolder").css({position:"fixed",top:"40px",display:"none"}).appendTo("body");var c=function(e){if(!e||e instanceof tinymce.Editor===false){e=tinymce&&tinymce.activeEditor}if(!e){return false}var h=jQuery(document).width(),d=Math.min(h*0.9,uAdmin.wysiwyg.getRepositionToolbarWidth()),f=(h-d)/2;var g=jQuery(e.theme.panel.getEl());b.width(d).offset({left:f}).draggable().css("cursor","move");g.find(".mce-toolbar").css("display","inline-block").parent().css("white-space","normal");if(jQuery.draggable){g.draggable()}};jQuery(document).add(window).on("resize",function(d){if(tinymce&&tinymce.activeEditor){c(tinymce.activeEditor)}});tinymce.on("AddEditor",function(d){d.editor.on("ShowPanel",function(e){c(e.target);window.setTimeout(function(){jQuery(".toolbarHolder").show()},0)})})};a.prototype.tinymce4.init=function(e){if(window.tinymce4InitAbort&&window.tinymce4InitAbort()){return null}var d,b="textarea.wysiwyg",c={};if(uAdmin.eip&&uAdmin.eip.editor){d={id:"mceEditor-"+new Date().getTime(),destroy:function(){tinymce&&tinymce.activeEditor&&tinymce.activeEditor.destroy()}};e.id=d.id;b="#"+d.id;c.fixed_toolbar_container=".toolbarHolder";tinymce.on("AddEditor",function(f){f.editor.on("init",function(g){this.fire("focus")})})}c.language=uAdmin.data["interface-lang"]||uAdmin.data.lang;c=jQuery.extend(this.settings,c);if(window.mceCustomSettings){c=jQuery.extend(c,window.mceCustomSettings)}if(window.mce4CustomSettings){c=jQuery.extend(c,window.mce4CustomSettings)}c.selector=b;tinymce.init(c);return d};a.prototype.tinymce4.settings={inline:true,theme:"modern",skin:"darkgray",language:typeof window.interfaceLang=="string"?interfaceLang:"ru",suffix:".min",schema:"html4",paste_as_text:true,convert_urls:false,toolbar_items_size:"small",extended_valid_elements:"script[src|*],style[*],map[*],area[*],umi:*[*],input[*],noindex[*],nofollow[*],iframe[frameborder|src|width|height|name|align],div[*],span[*],a[*]",plugins:"umiimage,spellchecker,pagebreak,layer,table,save,hr,image,link,emoticons,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,template,anchor,charmap,code,textcolor",inlinepopups_skin:"butterfly",toolbar1:"image table | paste pastetext | removeformat | link unlink | charmap code",toolbar2:"formatselect fontselect fontsizeselect",toolbar3:"bold italic underline",toolbar4:"alignleft aligncenter alignright alignjustify",toolbar5:"bullist numlist outdent indent",toolbar6:"forecolor backcolor",toolbar7:"subscript superscript",block_formats:getLabel("js-wysiwyg-paragraph")+"=p;Address=address;Pre=pre;Header 1=h1;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6",menubar:false,statusbar:false,resize:false,object_resizing:false,convert_urls:false,relative_urls:false,file_browser_callback:function(){uAdmin.wysiwyg.umiFileBrowserCallback.apply(uAdmin.wysiwyg,arguments)},template_external_list_url:"js/template_list.js",external_link_list_url:"",external_image_list_url:"",media_external_list_url:""};a.prototype.initInstance=function(l){jQuery("div.toolbarHolder").draggable();var c=jQuery(l.getElement());var m=jQuery(l.getDoc()).find("body").eq(0);var e=["font-family","font-size","font-weight","font-style","color","text-transform","text-decoration","letter-spacing","word-spacing","line-height","text-align","vertical-align","direction","background-color","background-image","background-repeat","background-position","background-attachment","opacity","top","right","bottom","left","padding-top","padding-right","padding-bottom","padding-left","overflow-x","overflow-y","white-space","clip","list-style-image","list-style-position","list-style-type","marker-offset"];for(var k in e){m.css(e[k],c.css(e[k]))}function g(){var o=-1;if(navigator.appName=="Microsoft Internet Explorer"){var j=navigator.userAgent;var n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(n.exec(j)!=null){o=parseFloat(RegExp.$1)}}return o}var h=g();if(h>-1&&h<=8){m.css("background-color","")}m.css("height","auto");var d=["margin-top","margin-right","margin-bottom","margin-left"];jQuery("#"+l.editorContainer).css("display","block");for(var f in d){jQuery("#"+l.editorContainer).css(d[f],c.css(d[f]))}l.formatter.register({fontsize:{inline:"span",styles:{fontSize:"%value","line-height":"1.3em"}}});var b=tinymce.util.Cookie;b.set("tinymcePasteText","1",new Date(new Date().getFullYear()+1,12,31))};a.prototype.umiflashFileManager=function(f,c,j,g,e,k,b){var l=g.document.getElementById(f);if(!l){return false}var h=[];h.push("id="+f);switch(j){case"image":h.push("image=1");break;case"media":h.push("media=1");break}if(l.value.length){var d=l.value.substr(0,l.value.lastIndexOf("/"));h.push("folder=."+d);h.push("file="+l.value)}$.openPopupLayer({name:"Filemanager",title:getLabel("js-file-manager"),width:1200,height:600,url:"/styles/common/other/filebrowser/umifilebrowser.html?"+h.join("&")});return false}}uAdmin(".session",function(b){function a(){var c=this;c.access=!!c.access;c.lifetime=parseInt(c.lifetime)||10;c.pingInterval=Math.min((c.lifetime*60)/2,300);c.awayTimeout=0;c.lastPingedTime=new Date();c.currentMessage=null;this.lastActionTime=new Date();(function d(){jQuery(document).bind("click keydown mousedown",null,function(e){c.eventHandler(e)});setTimeout(function(){jQuery("iframe").each(function(){try{var g=this.contentWindow||this.contentDocument;if(g.document){jQuery(g.document).bind("click keydown mousedown",function(e){c.eventHandler(e)})}}catch(f){}})},5000);c.pingIntervalHandler=setInterval(function(){c.pingHandler()},c.pingInterval*1000)})()}a.prototype.sessionAjax=function(c,d){jQuery.get("/session.php",c,function(e){if(typeof d=="function"){d(e)}})};a.prototype.login=function(c,d,e){this.sessionAjax({"u-login":c,"u-password":d,a:"ping"},function(f){if(typeof e=="function"){e(f!="-1")}})};a.prototype.check=function(){var c=this;this.sessionAjax(null,function(d){c.checkHandler(d)})};a.prototype.ping=function(d){var c=this;if(((new Date()).getTime()-c.lastPingedTime.getTime()<5000)&&!d){return}c.lastPingedTime=new Date();c.sessionAjax({a:"ping"},function(e){c.checkHandler(e)})};a.prototype.checkHandler=function(d){switch(d){case"-1":case"0":this.showCloseMessage(true);break;default:this.awayTimeout=parseInt(d,10);if(this.awayTimeout<=this.pingInterval+10){this.showWarningMessage()}else{if(!this.pingIntervalHandler){var c=this;this.pingIntervalHandler=setInterval(function(){c.pingHandler()},this.pingInterval*1000)}this.closeMessage()}break}};a.prototype.isUserActive=function(){return(new Date().getTime()-this.lastActionTime.getTime())/1000<this.pingInterval};a.prototype.eventHandler=function(c){this.lastActionTime=new Date();switch(this.currentMessage){case"warning":this.closeMessage();this.ping(true);case"close":this.ping()}};a.prototype.pingHandler=function(){if(this.isUserActive()){this.ping()}else{this.check()}};a.prototype.showWarningMessage=function(d){var c=this;if(d){clearInterval(c.timer);c.timer=null}c.currentMessage="warning";if(c.timer){return}c.timer=setInterval(function(){if(c.awayTimeout>0){var j=c.awayTimeout;var f=parseInt(j/60);var g=j%60;if(g<10){g="0"+g}var h=f+":"+g;var e=parseInt((c.lifetime*60-c.awayTimeout)/60);c.message(getLabel("js-session-is-away")+" "+e+" "+getLabel("js-minutes")+". "+getLabel("js-session-warning")+"<br/>"+h);c.awayTimeout--}else{c.closeMessage();c.check()}},1000)};a.prototype.showCloseMessage=function(e){var c=this;if(e){clearInterval(c.timer);c.timer=null}if(c.currentMessage=="close"){return}c.currentMessage="close";if(c.pingIntervalHandler){clearInterval(c.pingIntervalHandler);c.pingIntervalHandler=0}var f=jQuery("<div><br />"+getLabel("js-session-was-away")+" "+c.lifetime+" "+getLabel("js-minutes")+", "+getLabel("js-session-close")+"<br/><br/></div>");var d=jQuery('\n			<form>\n				<table cellspacing="5" width="100%">\n					<tr>\n						<td>'+getLabel("js-label-login")+': </td>\n						<td><input type="text" name="session_contorl_login" /></td>\n					</tr>\n					<tr>\n						<td>'+getLabel("js-label-password")+':</td>\n						<td><input type="password" name="session_contorl_passsword" /></td>\n					</tr>\n				</table>\n				<br/>\n				<input type="submit" value="'+getLabel("js-label-login-do")+'">\n			</form>\n		').appendTo(f);if(c.access){jQuery("<br/> <br/><a href='/admin/config/main/' target='_blank'>"+getLabel("js-session-lifetime-configure")+"</a>").appendTo(d)}d.submit(function(){var h=jQuery.trim(this.session_contorl_login.value),g=jQuery.trim(this.session_contorl_passsword.value);if(h&&g){c.login(h,g,function(j){if(j){jQuery.getJSON("/admin/config/main/.json",{},function(k){if(uAdmin.csrf&&uAdmin.csrf!=k.csrf){uAdmin.csrf=k.csrf}else{if(csrfProtection&&csrfProtection.getToken()!=k.csrf){csrfProtection.changeToken(k.csrf)}}});c.closeMessage();c.pingIntervalHandler=setInterval(function(){c.pingHandler()},c.pingInterval*1000);jQuery.jGrowl(getLabel("js-session-restored"),{header:"UMI.CMS",life:5000})}else{jQuery.jGrowl(getLabel("js-label-text-error"),{header:"UMI.CMS",life:5000})}})}else{jQuery.jGrowl(getLabel("js-label-text-error"),{header:"UMI.CMS",life:5000})}return false});c.message(f)};a.prototype.message=function(e){var c=this;if(typeof e=="string"){e="<br/><p> "+e+" </p>"}if(!c.jgrowl){c.jgrowl=-1;jQuery.jGrowl(e,{header:"UMI.CMS",dont_close:true,beforeOpen:function(f){c.jgrowl=jQuery(f)},close:function(){c.closeMessage();c.ping(true)}});return}else{if(c.jgrowl!=-1){var d=c.jgrowl.find(".jGrowl-message");if(typeof e=="string"){d.html(e)}else{d.html("");d.append(e)}}}};a.prototype.closeMessage=function(){this.currentMessage=null;if(this.timer){clearInterval(this.timer);this.timer=null}if(this.jgrowl&&this.jgrowl!=-1){this.jgrowl.mouseout();this.jgrowl.remove();this.jgrowl=null}};a.prototype.destroy=function(){if(this.pingIntervalHandler){clearInterval(this.pingIntervalHandler);this.pingIntervalHandler=0}if(this.timer){clearInterval(this.timer);this.timer=null}return true};return b(a,this)});function RGBColor(g){this.ok=false;if(g.charAt(0)=="#"){g=g.substr(1,6)}g=g.replace(/ /g,"");g=g.toLowerCase();var a={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(var c in a){if(g==c){g=a[c]}}var h=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(j){return[parseInt(j[1]),parseInt(j[2]),parseInt(j[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(j){return[parseInt(j[1],16),parseInt(j[2],16),parseInt(j[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(j){return[parseInt(j[1]+j[1],16),parseInt(j[2]+j[2],16),parseInt(j[3]+j[3],16)]}}];for(var b=0;b<h.length;b++){var e=h[b].re;var d=h[b].process;var f=e.exec(g);if(f){channels=d(f);this.r=channels[0];this.g=channels[1];this.b=channels[2];this.ok=true}}this.r=(this.r<0||isNaN(this.r))?0:((this.r>255)?255:this.r);this.g=(this.g<0||isNaN(this.g))?0:((this.g>255)?255:this.g);this.b=(this.b<0||isNaN(this.b))?0:((this.b>255)?255:this.b);this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"};this.toHash=function(){return{red:this.r,green:this.g,blue:this.b}};this.inverse=function(){this.r=255-this.r;this.g=255-this.g;this.b=255-this.b};this.toHex=function(){var l=this.r.toString(16);var k=this.g.toString(16);var j=this.b.toString(16);if(l.length==1){l="0"+l}if(k.length==1){k="0"+k}if(j.length==1){j="0"+j}return"#"+l+k+j}}function relationControl(r,b,j,h){var e=this;var d=r;var v=b||r;var q=true;var y=null;var B=null;var s=null;var f=null;var C=null;var a=null;var c=null;var A=null;var t=null;var m=0;var l=0;var z=h||"/admin/data/guide_items_all/";var w=function(){y=document.getElementById("relationSelect"+v);B=document.getElementById("relationInput"+v);s=document.getElementById("relationButton"+v);if(!y){alert("Select input for field #"+v+" not found");return}jQuery("option",y).each(function(){if(!this.selected&&this.value.length!==0){q=false}});if(s){s.onclick=function(){e.addObjectToGuide(null,null,function(F,G){e.addItem(F,G)})}}if(B){B.onkeyup=function(G){var F=G?G.keyCode:event.keyCode;if(F==13&&s){e.addItem();return false}else{e.doSearch()}};B.onkeydown=function(G){var F=G?G.keyCode:event.keyCode;if(F==13){return false}}}var E=function(){if(q){e.loadItemsAll();q=false}};y.onmouseover=E;y.onfocus=E;for(var D=0;D<y.childNodes.length;D++){if(y.childNodes[D].nodeType!=1){y.removeChild(y.childNodes[D]);D=0}}if(j&&jQuery("option[value='']",y).length==0){jQuery(y).prepend("<option value=''></option>")}};this.addObjectToGuide=function(K,J,M){var G=(typeof(B)==="object"?B.value:K);var L=(parseInt(d)>0?parseInt(d):parseInt(J));var F={url:"",data:null};var H={id:0,name:""};var I=document.getElementById("relationButton"+v);var E=null;var D=null;if(typeof(G)!=="string"||G.length<=0||L<=0){return}F.url="/admin/udata://data/addObjectToGuide/.json";F.data={param0:G,param1:L};I.setAttribute("disabled","");jQuery.ajax({url:F.url,dataType:"json",data:F.data,type:"post",success:function(N){if(typeof(N.data)!=="undefined"&&typeof(N.data.object)!=="undefined"){H.id=parseInt(N.data.object.id);if(isNaN(H.id)||H.id<=0){return}H.name=N.data.object.name;if(typeof(M)==="function"){M(H.name,H.id)}I.removeAttribute("disabled");if(C){E=jQuery("option:selected",y);D=jQuery("option:last",y);E=E.detach();jQuery(D).replaceWith(E)}}},error:function(){I.removeAttribute("disabled")}})};this.rescan=function(){B=document.getElementById("relationInput"+v);if(B){B.onkeyup=function(E){var D=E?E.keyCode:event.keyCode;if(D==13&&s){e.addItem()}else{e.doSearch()}}}};this.getValue=function(){var F=jQuery("option:selected",jQuery(y));var D={};for(var E=0;E<F.length;E++){D[F[E].value]=jQuery(F[E]).text()}return D};this.loadItems=function(D){jQuery.ajax({url:z+d+".xml?limit&search[]="+encodeURIComponent(D),type:"get",complete:function(F,E){e.updateItems(F)}})};this.loadItemsAll=function(){jQuery.ajax({url:z+d+".xml?allow-empty",type:"get",complete:function(E,D){e.updateItemsAll(E)}})};this.updateItemsAll=function(E){if(E.responseXML.getElementsByTagName("empty").length){if(B){B.onkeyup=function(P){var O=P?P.keyCode:event.keyCode;switch(O){case 38:if(A.length&&(t>0||t==null)){g((t===null)?(A.length-1):(t-1))}break;case 40:if(A.length&&(t<(A.length-1)||t==null)){g((t===null)?0:(t+1))}break;case 13:k();n();break;case 27:n();break;default:clearTimeout(c);c=setTimeout(function(){e.doSearchAjax()},500)}};B.onblur=function(){if(a){if(m<parseInt(a.style.left)||m>(parseInt(a.style.left)+parseInt(a.offsetWidth))||l<parseInt(a.style.top)||l>(parseInt(a.style.top)+parseInt(a.offsetHeight))){n()}}};var K=E.responseXML.getElementsByTagName("empty")[0].getAttribute("total");if(!C){C=new Option(" ","");C.innerHTML=getLabel("js-relation-total")+K+". "+getLabel("js-relation-use_search");y.insertBefore(C,y.firstChild)}}return}var I=E.responseXML.getElementsByTagName("object");var L=[];var F=0;for(F=0;F<y.options.length;F++){if(y.options[F].selected){L.push(y.options[F].value)}}jQuery("option",y).each(function(){if(!this.selected||this.value.length===0){jQuery(this).remove()}});if(j){$(y).prepend("<option value=''> </option>")}for(F=0;F<I.length;F++){var J=I[F].getAttribute("id");var G=false;for(var M in L){if(L[M]==J){G=true;delete L[M];break}}if(!G){var N=I[F].getAttribute("name");var D=new Option(N,J);D.innerHTML=N;y.appendChild(D)}}if(jQuery.browser.msie){var H=y.style.display;y.style.display="none";y.style.display=H}};this.updateItems=function(E){t=null;A=E.responseXML.getElementsByTagName("object");if(!A.length){return}var F=null;if(!a){a=document.createElement("div");a.className="relationAutosuggest";var H=jQuery(B).offset();a.style.position="absolute";a.style.zIndex=1050;a.style.width=B.clientWidth+"px";a.style.top=(H.top+B.offsetHeight)+"px";a.style.left=H.left+"px";F=document.createElement("ul");a.appendChild(F);document.body.appendChild(a)}a.style.display="";jQuery(document).mousemove(o);F=a.firstChild;while(F.firstChild){F.removeChild(F.firstChild)}for(i=0;i<A.length;i++){var G=A[i].getAttribute("name");var D=document.createElement("li");D.innerHTML=G;D.onmouseover=function(){g(this.suggestIndex)};D.onmouseout=function(){this.className=""};D.onclick=function(){k();n()};D.suggestIndex=i;F.appendChild(D)}};var o=function(D){if(!D){m=event.clientX+document.body.scrollLeft;l=event.clientY+document.body.scrollTop}else{m=D.pageX;l=D.pageY}return true};this.addItem=function(E,D){if(!(E&&E.length)&&!(B&&B.value.length)){return}x();u();if(!y.multiple&&f&&!E&&!D){f.innerHTML=(D?"":"&rarr;&nbsp;&nbsp;")+B.value;f.value=D?D:B.value;y.selectedIndex=0}else{f=new Option(E?E:B.value,D?D:B.value);f.innerHTML=(D?"":"&rarr;&nbsp;&nbsp;")+(E?E:B.value);if(y.options.length){y.insertBefore(f,y.firstChild)}else{y.appendChild(f)}}B.value="";f.selected=true;if(jQuery.browser.msie){setTimeout(function(){f.selected=false;f.selected=true},20)}};var g=function(E){if(a.style.display!="none"){var F=a.firstChild;var D=F.childNodes.item(t);if(D){D.className=""}F.childNodes.item(E).className="active";t=E}};var k=function(){if(a&&a.style.display!="none"&&t!==null){var G=A[t].getAttribute("name");var F=A[t].getAttribute("id");var E=false;for(var D=0;D<y.options.length;D++){if(y.options[D].value==F){E=true;y.options[D].selected=true;break}}if(!E){e.addItem(G,F)}}else{if(B.value.length&&s){e.addItem()}}};var n=function(){if(a&&a.style.display!="none"){a.style.display="none";jQuery(document).unbind("mousemove",o)}};this.doSearch=function(){var G=B.value.toLowerCase();x();if(G==""){if(y.multiple){u()}return}for(var E=0;E<y.options.length;E++){var H=y.options[E].text;var F=H.replace(/^.\s\s/,"");if(H.substring(0,G.length).toLowerCase()===G||F.substring(0,G.length).toLowerCase()===G){if(y.multiple){if(y.firstChild.nodeName.toLowerCase()!="optgroup"){p();searchGroup=y.firstChild;itemsGroup=y.lastChild}var D=y.options[E];if(D.parentNode==searchGroup){continue}D.oldPrevSibling=D.previousSibling;itemsGroup.removeChild(D);searchGroup.appendChild(D);if(searchGroup.childNodes.length==5){return}}else{y.selectedIndex=E;return}}}};this.doSearchAjax=function(){if(B.value){this.loadItems(B.value)}};var p=function(){var E=document.createElement("optgroup");E.label="Search results";var D=document.createElement("optgroup");D.label="------------------------------------------------";while(y.firstChild){var F=y.firstChild;y.removeChild(F);D.appendChild(F)}y.appendChild(E);y.appendChild(D)};var u=function(){if(y.firstChild&&y.firstChild.nodeName.toLowerCase()=="optgroup"){y.removeChild(y.firstChild);var D=y.firstChild;while(D.firstChild){var E=D.firstChild;D.removeChild(E);y.appendChild(E)}y.removeChild(D)}};var x=function(){if(y.firstChild&&y.firstChild.nodeName.toLowerCase()=="optgroup"){var E=y.firstChild;var D=y.lastChild;while(E.firstChild){var F=E.firstChild;E.removeChild(F);if(F.oldPrevSibling!==undefined||F.oldPrevSibling==null){if(F.oldPrevSibling&&F.oldPrevSibling.nextSibling){D.insertBefore(F,F.oldPrevSibling.nextSibling)}else{if(F.oldPrevSibling===null){D.insertBefore(F,D.firstChild)}else{D.appendChild(F)}}F.oldPrevSibling=undefined}}}};w()}function symlinkControl(C,n,K,N,M,j){M=(M instanceof Array)?M:[M];var h=this;var B=C;var I=(K instanceof Array)?K:[K];var d=(I)?"&hierarchy_types="+I.join("-"):"";var p=(M instanceof Array)?"&hierarchy_types="+M.join(","):"";var c=n||null;var y=null;var m=null;var A=null;var v=null;var P=null;var w=null;var H=null;var E=0;var D=0;if(!N){N={}}var O=N.iconsPath||"/images/cms/admin/mac/tree/";var G=N.fadeColorStart||[255,0,0];var s=N.fadeColorEnd||[255,255,255];var q=N.inputName||("symlinkInput"+B);var t=N.noImages||false;var e=N.treeURL||"/styles/common/js/tree.html";var F=N.rootId;var J=N.popupTitle||getLabel("js-cms-eip-symlink-choose-element");var o=typeof(N.showSuggestType)==="undefined"?true:N.showSuggestType;var b=typeof(N.cutSuggestNames)==="undefined"?true:N.cutSuggestNames;var a=parseInt(N.suggestDivWidth);var l={};var u=(j?"&callback=symlinkControlsList."+B+".onlyOne":"");var L=function(){if(!window.symlinkControlsList){window.symlinkControlsList={}}window.symlinkControlsList[B]=h;y=document.getElementById("symlinkInput"+B);if(!y){alert("Symlink container #"+B+" not found");return}var R=document.createElement("input");R.type="hidden";R.name=q;y.parentNode.insertBefore(R,y);v=document.createElement("ul");y.appendChild(v);var S=document.createElement("div");y.appendChild(S);m=document.createElement("input");m.setAttribute("placeholder",getLabel("js-cms-eip-symlink-search"));S.className="pick-element";S.appendChild(m);var T=18,U=28;m.style.width=S.parentNode.offsetWidth-(T+U)+"px";m.style.minWidth=S.parentNode.offsetWidth-(T+U)+"px";A=t?document.createElement("input"):document.createElement("img");S.appendChild(A);m.type="text";if(t){A.type="button";A.value="???????"}else{A.src="/images/cms/admin/mac/tree.png";A.height="18"}A.className="treeButton";A.onclick=function(){jQuery.openPopupLayer({name:"Sitetree",title:J,width:620,height:335,url:e+"?id="+B+(c?"&module="+c:"")+p+(window.lang_id?"&lang_id="+window.lang_id:"")+(F?"&root_id="+F:"")+u})};v.className="pageslist";m.onkeypress=function(W){var V=W?W.keyCode:window.event.keyCode;if(V==13){return false}};m.onkeyup=function(W){var V=W?W.keyCode:window.event.keyCode;switch(V){case 38:if(w.length&&(H>0||H==null)){r((H===null)?(w.length-1):(H-1))}break;case 40:if(w.length&&(H<(w.length-1)||H==null)){r((H===null)?0:(H+1))}break;case 13:x();Q();return false;break;case 27:Q();break;default:h.doSearch()}};m.onblur=function(){if(P){if(E<parseInt(P.style.left)||E>(parseInt(P.style.left)+parseInt(P.offsetWidth))||D<parseInt(P.style.top)||D>(parseInt(P.style.top)+parseInt(P.offsetHeight))){Q()}}}};this.loadItems=function(R){jQuery.ajax({url:"/admin/content/load_tree_node.xml?limit&domain_id[]="+(window.domain_id?window.domain_id:"1")+d+(window.lang_id?"&lang_id="+window.lang_id:"")+(F?"&rel="+F:"")+"&search-all-text[]="+encodeURIComponent(R),type:"get",complete:function(T,S){h.updateItems(T)}})};this.onlyOne=function(S,T,R,U){jQuery.closePopupLayer("Sitetree");if(confirm(getLabel("js-island-change-symlink-warning"))){jQuery("a.button",v).click();h.addItem(S,T,U,R);jQuery('form input[name="save-mode"]:first').click()}};this.updateItems=function(T){var U=(jQuery("html.u-eip").length>0);var R=null;H=null;R=T.responseXML.getElementsByTagName("page");if(!R.length){return}w=R;var V=[];for(var W=0;W<w.length;W++){if(l[w[W].getAttribute("id")]){continue}V[V.length]=w[W]}w=V;var X=null;if(!P){P=document.createElement("div");P.className="symlinkAutosuggest";var aa=jQuery(m).offset();P.style.position="absolute";P.style.zIndex=1100;P.style.width=m.clientWidth+"px";if(!isNaN(a)){P.style.width=a+"px"}P.style.top=(aa.top+m.offsetHeight)+"px";P.style.left=aa.left+"px";if(U){P.style.backgroundColor="white";P.style.border="1px solid #ccc"}X=document.createElement("ul");P.appendChild(X);document.body.appendChild(P)}z();jQuery(document).mousemove(g);X=P.firstChild;while(X.firstChild){X.removeChild(X.firstChild)}for(W=0;W<w.length;W++){if(l[w[W].getAttribute("id")]){continue}var S=k(w[W].getElementsByTagName("name")[0]);var Y=k(w[W].getElementsByTagName("basetype")[0]);var Z=w[W].getAttribute("link");var ad=document.createElement("li");var ac=document.createElement("span");var ab=document.createElement("a");ad.title=S;if(b){if(S.length>20){S=S.substr(0,20)+"..."}}if(Z.length>55){Z=Z.substr(0,55)+"..."}ad.appendChild(document.createTextNode(S));if(o){ad.appendChild(ac)}ac.appendChild(document.createTextNode(" ("+Y+")"));if(!U){ad.appendChild(document.createElement("br"));ad.appendChild(ab);ab.appendChild(document.createTextNode(Z));ab.href=Z;ab.target="_blank"}else{ac.style.display="block";ad.className="symlink-item-delete";ad.style.padding="3px"}ad.onmouseover=function(){r(this.suggestIndex)};ad.onclick=function(){x();Q()};ad.suggestIndex=W;X.appendChild(ad)}};this.doSearch=function(){var R=m.value;h.loadItems(R)};var r=function(T){var S=(jQuery("html.u-eip").length>0);if(P.style.display!="none"){var U=P.firstChild;var R=U.childNodes.item(H);if(R){if(S){R.style.backgroundColor=""}else{R.className=""}}if(S){U.childNodes.item(T).style.backgroundColor="#ceeaf6"}else{U.childNodes.item(T).className="active"}H=T}};var x=function(){if(P&&P.style.display!="none"&&H!==null){var X=w[H].getAttribute("id");var S=k(w[H].getElementsByTagName("name")[0]);var R=w[H].getAttribute("link");var V=w[H].getElementsByTagName("basetype")[0];var U="";var T=(U=V.getAttribute("module"))?U:"";var W=(U=V.getAttribute("method"))?U:"";h.addItem(X,S,[T,W],R)}};this.addItem=function(W,T,X,U){this.delPlaceHolder();if(l[W]!==undefined){return}var Y=(jQuery("html.u-eip").length>0);var Z=document.createElement("li");var ae=document.createElement("span");var ac=document.createElement("a");var V=document.createElement("a");var ad=document.createElement("input");var aa=this;ad.type="hidden";ad.name=q;ad.value=W;V.input=ad;ac.href=U;if(t){V.appendChild(document.createTextNode("[x]"))}else{var S=document.createElement("img");S.src=O+"symlink_delete.png";S.alt="delete";if(Y){S.className="symlink-item-delete"}V.appendChild(S)}V.href="javascript:void(0);";if(Y){V.style.marginRight="5px"}else{V.className="button"}V.onclick=function(){this.input.parentNode.removeChild(this.input);v.removeChild(this.parentNode);aa.addPlaceHolder();delete l[W]};ae.dataset.basetype=X[0]+" "+X[1];if(Y){ae.style.marginLeft="5px"}ae.appendChild(document.createTextNode(T));ac.appendChild(document.createTextNode(U));if(!t){var ab=document.createElement("img");ab.src=O+"ico_"+X[0]+"_"+X[1]+".png";Z.appendChild(ab)}Z.appendChild(ae);var af=32,R=38;ae.style.maxWidth=v.parentNode.offsetWidth-(af+R)+"px";Z.appendChild(V);if(Y){delete ac}else{Z.appendChild(ac)}v.appendChild(Z);y.parentNode.insertBefore(ad,y);Z.style.backgroundColor=makeHexRgb(G);Z.startColor=G;Z.endColor=s;Z.pname=T;Z.fade=f;setTimeout(function(){Z.fade()},2000);l[W]=true;if(jQuery("#eip_page").length){frameElement.height=(jQuery("#eip_page").height()>500)?500:jQuery("#eip_page").height()}};this.delPlaceHolder=function(){if(jQuery(".eip-placeholder",v).length>=1){jQuery(".eip-placeholder",v).remove()}};this.addPlaceHolder=function(U){var R=document.createElement("li"),T=U||getLabel("js-cms-eip-symlink-no-elements"),S="eip-placeholder";R.className=S;R.appendChild(document.createTextNode(T));if(jQuery("li",v).length<1){v.appendChild(R)}};var f=function(){if(this.fadeColor==undefined){this.fadeColor=[];this.fadeColor[0]=this.startColor[0];this.fadeColor[1]=this.startColor[1];this.fadeColor[2]=this.startColor[2]}if(Math.round(this.fadeColor[0]+this.fadeColor[1]+this.fadeColor[2])==Math.round(this.endColor[0]+this.endColor[1]+this.endColor[2])){return}this.fadeColor[0]+=(this.endColor[0]-this.startColor[0])/50;this.fadeColor[1]+=(this.endColor[1]-this.startColor[1])/50;this.fadeColor[2]+=(this.endColor[2]-this.startColor[2])/50;this.style.backgroundColor=makeHexRgb(this.fadeColor);var R=this;setTimeout(function(){R.fade()},20)};var z=function(){if(P){var R=jQuery(m).offset();P.style.width=m.clientWidth;P.style.top=R.top+m.offsetHeight;P.style.left=R.left;P.style.display=""}};var Q=function(){if(P&&P.style.display!="none"){P.style.display="none";jQuery(document).unbind("mousemove",g)}};var g=function(R){if(!R){E=event.clientX+document.body.scrollLeft;D=event.clientY+document.body.scrollTop}else{E=R.pageX;D=R.pageY}return true};var k=function(R){return(R.firstChild&&R.firstChild.nodeType==3)?R.firstChild.nodeValue:R.nodeValue};L()}var hex=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function makeHexRgb(b){var a="";for(var c=0;c<3;c++){a=a+hex[Math.floor(b[c]/16)]+hex[Math.floor(b[c]%16)]}return"#"+a};
// moment.js language configuration
// language : spanish (es)
// author : Julio Napur?? : https://github.com/julionc

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['moment'], factory); // AMD
	} else if (typeof exports === 'object') {
		module.exports = factory(require('../moment')); // Node
	} else {
		factory(window.moment); // Browser global
	}
}(function (moment) {
	return moment.lang('es', {
		months : "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
		monthsShort : "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
		weekdays : "domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado".split("_"),
		weekdaysShort : "dom._lun._mar._mi??._jue._vie._s??b.".split("_"),
		weekdaysMin : "Do_Lu_Ma_Mi_Ju_Vi_S??".split("_"),
		longDateFormat : {
			LT : "H:mm",
			L : "DD/MM/YYYY",
			LL : "D [de] MMMM [de] YYYY",
			LLL : "D [de] MMMM [de] YYYY LT",
			LLLL : "dddd, D [de] MMMM [de] YYYY LT"
		},
		calendar : {
			sameDay : function () {
				return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			nextDay : function () {
				return '[ma??ana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			nextWeek : function () {
				return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			lastDay : function () {
				return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			lastWeek : function () {
				return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
			},
			sameElse : 'L'
		},
		relativeTime : {
			future : "en %s",
			past : "hace %s",
			s : "unos segundos",
			m : "un minuto",
			mm : "%d minutos",
			h : "una hora",
			hh : "%d horas",
			d : "un d??a",
			dd : "%d d??as",
			M : "un mes",
			MM : "%d meses",
			y : "un a??o",
			yy : "%d a??os"
		},
		ordinal : '%d??',
		week : {
			dow : 1, // Monday is the first day of the week.
			doy : 4  // The week that contains Jan 4th is the first week of the year.
		}
	});
}));
function symlinkControlCustom(_id, _module, _types, _options, hierarchy_types) {
	hierarchy_types  = (hierarchy_types instanceof Array) ? hierarchy_types : [hierarchy_types];
	var _self      = this;
	var id         = _id;
	var types      = (_types instanceof Array) ? _types : [_types];
	var typesStr   = (types) ? '&hierarchy_types=' + types.join('-') : '';
	var htypesStr   = (hierarchy_types instanceof Array) ? '&hierarchy_types=' + hierarchy_types.join(',') : '';
	var module     = _module || null;
	var container  = null;
	var textInput  = null;
	var treeButton = null;
	var pagesList  = null;
	if(!_options) _options = {};
	var iconBase     = _options['iconsPath']      || '/images/cms/admin/mac/tree/';
	var fadeClrStart = _options['fadeColorStart'] || [255,   0,   0];
	var fadeClrEnd   = _options['fadeColorEnd']   || [255, 255, 255];
	var inputName    = _options['inputName']      || ('symlinkInput' + id);
	var noImages     = _options['noImages']       || false;
	var pagesCache   = {};

	var hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	var makeHexRgb = function (rgb) {
		var result = '';
		for(var i = 0; i < 3; i++) {
			result = result + hex[Math.floor(rgb[i] / 16)] + hex[Math.floor(rgb[i] % 16)];
		}
		return '#' + result;
	};

	var init = function() {
		if(!window.symlinkControlsList) window.symlinkControlsList = {};
		window.symlinkControlsList[id] = _self;
		container = document.getElementById('symlinkInput' + id);
		if(!container) {
			alert('Symlink container #' + id + ' not found');
			return;
		}

		var input = document.createElement('input');
		input.type  = 'hidden';
		input.name  = inputName;
		container.parentNode.insertBefore(input, container);

		pagesList  = document.createElement('ul');
		container.appendChild(pagesList);

		treeButton = document.createElement('span');
		treeButton.className = 'pLoader-add';
		treeButton.appendChild(document.createTextNode(getLabel('js-cms-eip-symlink_control_custom-add_goods')));
		container.appendChild(treeButton);

		treeButton.onclick = function() {
			jQuery.openPopupLayer({
				name   : "Sitetree",
				title  : getLabel('js-cms-eip-symlink_control_custom-select_goods'),
				width  : 620,
				height : 335,
				url    : "/styles/common/js/tree.custom.html?id=" + id + (module ? "&module=" + module : "" ) + htypesStr + (window.lang_id ? "&lang_id=" + window.lang_id : "")
			});
		};

		pagesList.className = 'pageslist';
	};

	this.loadItems = function(searchText) {
		jQuery.ajax({url      : "/admin/content/load_tree_node.xml?limit&domain_id[]=" + (window.domain_id ? window.domain_id : '1') + typesStr + (window.lang_id ? "&lang_id=" + window.lang_id : "") + "&search-all-text[]=" + encodeURIComponent(searchText),
			type     : "get",
			complete : function(r,t) { _self.updateItems(r); } });
	};

	this.updateItems = function(response) {
		var eip_mode = (jQuery('html.u-eip').size() > 0);
	};

	this.doSearch = function() {
		var text = textInput.value;
		_self.loadItems(text);
	};

	this.addItem = function(pageId, name, basetype, href) {
		if(pagesCache[pageId] !== undefined) return;
		var eip_mode = (jQuery('html.u-eip').size() > 0);
		var page  = document.createElement('li');
		var text  = document.createElement('span');
		var link  = document.createElement('a');
		var btn   = document.createElement('a');
		var input = document.createElement('input');
		input.type  = 'hidden';
		input.name  = inputName;
		input.value = pageId;
		btn.input  = input;
		link.href  = href;

		if (noImages) {
			btn.appendChild( document.createTextNode('[x]') );
		}
		else {
			var btnImage = document.createElement('img');
			btnImage.src = iconBase + 'symlink_delete.svg';
			btnImage.alt = 'delete';
			if (eip_mode) btnImage.className = 'symlink-item-delete';
			btn.appendChild(btnImage);
		}
		btn.href = 'javascript:void(0);';
		if (eip_mode) {
			btn.style.marginRight = '5px';
		}
		else btn.className = 'button';
		btn.onclick = function() {
			this.input.parentNode.removeChild(this.input);
			pagesList.removeChild(this.parentNode);
			delete pagesCache[pageId];
		};
		text.title = basetype[0] + " " + basetype[1];
		if (eip_mode) {
			text.style.marginLeft = '5px';
			text.style.position = 'relative';
			text.style.top = '1px';
		}
		text.appendChild(document.createTextNode(name));
		link.appendChild(document.createTextNode(href));
		page.appendChild(btn);
		if(!noImages) {
			var icon  = document.createElement('img');
			icon.src   = iconBase + 'ico_' + basetype[0] + '_' + basetype[1] + '.png';
			page.appendChild(icon);
		}
		page.appendChild(text);
		if (eip_mode) delete link;
		else page.appendChild(link);
		pagesList.appendChild(page);
		container.parentNode.insertBefore(input, container);
		page.style.backgroundColor = makeHexRgb(fadeClrStart);
		page.startColor = fadeClrStart;
		page.endColor   = fadeClrEnd;
		page.pname      = name;
		page.fade		= fader;
		setTimeout(function(){page.fade()}, 2000);
		pagesCache[pageId] = true;
		if (jQuery('#eip_page').size()) {
			frameElement.height = (jQuery('#eip_page').height() > 500) ? 500 : jQuery('#eip_page').height();
		}
	};

	var fader = function() {
		if(this.fadeColor == undefined) {
			this.fadeColor    = [];
			this.fadeColor[0] = this.startColor[0];
			this.fadeColor[1] = this.startColor[1];
			this.fadeColor[2] = this.startColor[2];
		}
		if(Math.round(this.fadeColor[0] + this.fadeColor[1] + this.fadeColor[2]) ==
			Math.round(this.endColor[0] + this.endColor[1] + this.endColor[2])) return;
		this.fadeColor[0] += (this.endColor[0] - this.startColor[0]) / 50;
		this.fadeColor[1] += (this.endColor[1] - this.startColor[1]) / 50;
		this.fadeColor[2] += (this.endColor[2] - this.startColor[2]) / 50;
		this.style.backgroundColor = makeHexRgb(this.fadeColor);
		var _p = this;
		setTimeout(function(){_p.fade();}, 20);
	};

	var getElementText = function(element) {
		return (element.firstChild && element.firstChild.nodeType == 3) ? element.firstChild.nodeValue : element.nodeValue;
	};

	// initialize
	init();
}
/**
 * Extend panel for cloud controller
 */
(function (){

	// ?????????????? ?????????????????????? ???????????? ???? ???????????????? ??????????????????????
	if (!window.cloudController) return;
	if (!window.cloudController.onController) return;

	// ???????????? ?????????????????? ????????????
	uAdmin('drawControls', function () {
		this.exitButton = this.addExitButton();
		this.helpButton = this.addHelpButton();
		this.butterfly = this.addButtrfly();
		this.eipHolder = this.addEipHolder();
		this.changelogDd = this.addChangelogDd();
		this.metaHolder = this.addMetaHolder();
	}, 'panel');

	// ???????????????? ???????????? "????????????"
	uAdmin('addButtrfly', function () {
		if (!this.quickpanel.length) return null;
		return jQuery('<a id="adminzone" href="/adminzone/" title="' + getLabel('js-cms-panel-panel_custom-admin_panel') + '"><span class="in_ico_bg">&nbsp;</span>' + getLabel('js-cms-panel-panel_custom-main') + '</a>')
			.appendTo(this.quickpanel);
	}, 'panel');

	// ???????????????????????? ?????? ?????????????????? ????????????????
	uAdmin.onLoad('panel', function () {

		// ???????????? ???????????? ????????????
		uAdmin.panel.helpButton.unbind('click');
		uAdmin.panel.helpButton.bind('click', function() {
			window.open(window.cloudController.helpPageLink || "http://help-cms.ru/");
			return false;
		});

		// ???????????? ???????????? ????????????
		uAdmin.panel.exitButton.unbind('click');
		uAdmin.panel.exitButton.bind('click', function() {
			window.location = "/adminzone/exit/";
			return false;
		});

	});

})();
/**
 * Extend uEditInPlace for cloud controller
 */
(function (){

	function onUmiDeleteMouseOver (element) {

		var eip = uAdmin.eip;
		var info = eip.searchAttr(element);
		info.node = element;
		if(eip.enabled && jQuery(element).attr('umi:delete') && (info['type'] == 'element' || info['type'] == 'object')) {
			eip.addDeleteButton(element, info);
		} else {
			eip.dropDeleteButtons();
		}

	};


	uAdmin('initEditBoxes', function () {

		var eip = this;

		jQuery(document).on('mouseover', '.u-eip-edit-box',  function () {
			eip.editBoxMouseoverHandler(this);
		});

		if(jQuery.browser.msie && parseFloat(jQuery.browser.version) < 8) {
			jQuery('*').each(function() {
				var del_attr = this.attributes.getNamedItem("umi:delete");
				if(del_attr) {
					jQuery(document).on('mouseover', this, function () {
						onUmiDeleteMouseOver(this);
					});
				} else if (jQuery(this).is('.u-eip-edit-box')) {
					jQuery(document).on('mouseover', this, function () {
						eip.editBoxMouseoverHandler(this);
					});
				}
			});
		} else {
			jQuery(document).on('mouseover', '[umi\\:delete]',  function () {
				onUmiDeleteMouseOver(this);
			});
			jQuery(document).on('mouseover', '.u-eip-edit-box:not([umi\\:delete])', function () {
				eip.editBoxMouseoverHandler(this);
			});
		};

		jQuery(document).on('mouseout', '.u-eip-edit-box-hover', function () {
			eip.editBoxMouseoutHandler(this);
		});

	}, 'eip');


	uAdmin('addDeleteButton', function (element, info) {

		var node = jQuery(element),
			eip = this;

		if(!node.hasClass('umiru-highlight-block-disable')) {
			node.addClass('u-eip-edit-box-hover');
		} else {
			return;
		}

		if(eip.deleteButtonsTimeout) clearTimeout(eip.deleteButtonsTimeout);
		eip.dropDeleteButtons();

		var deleteButton = document.createElement('div');
		jQuery(deleteButton)
			.attr('class', 'eip-del-button')
			.css({
				'z-index': '565'
			});
		var deleteText = getLabel('js-cms-eip-edit_in_place_custom-remove');
		if(node.attr('umi:delete-text')) {
			deleteText = node.attr('umi:delete-text');
		}

		jQuery(deleteButton).html('<span class="eip-del-buttonx"><img src="/images/cms/eip/del_button.svg" alt="??"/></span><span class="eip-del-buttontext">' + deleteText + '</span>');
		document.body.appendChild(deleteButton);

		var deleteButtonPosition = node.attr('umi:delele-button-position');
		var fDim = 'middle', sDim = 'right';

		if (deleteButtonPosition) {
			var arr = deleteButtonPosition.split(/ /);
			if (arr.length == 2) {
				fDim = arr[0];
				sDim = arr[1];
			}
		}
		eip.placeWith(element, deleteButton, sDim, fDim);
		jQuery(deleteButton)
			.css('left', (parseFloat(jQuery(deleteButton).css('left').replace('px', '')) - 12) + "px")
			.bind('mouseover', function () {
				var x, y, width, height;
				var box = document.createElement('div');
				document.body.appendChild(box);
				var position = eip.nodePositionInfo(node);
				if(!position.x && !position.y) return;
				jQuery(box).attr('class', 'u-eip-del-box-highlight');
				jQuery(box).css({
					'position':		'absolute',
					'width':		position.width,
					'height':		position.height,
					'left':			position.x,
					'top':			position.y
				});
				if(eip.deleteButtonsTimeout) clearTimeout(eip.deleteButtonsTimeout);
			})
			.bind('mouseout', function () {
				jQuery('.u-eip-del-box-highlight').remove();
				eip.deleteButtonsTimeout = setTimeout(eip.dropDeleteButtons, 500);
			})
			.bind('click', function () {
				info['delete'] = true;
				eip.queue.add(info);

				var additionalNotify = node.attr('umi:delete-additional-notify');

				if (additionalNotify) {
					setTimeout(uAdmin.eip.message(additionalNotify, 2000));
				}

				eip.normalizeBoxes();
			});

	}, 'eip');


	uAdmin('unhighlight', function () {

		jQuery('.u-eip-edit-box')
			.each(function (index, node) {
				jQuery('.umiru-eip-outline-block').removeClass('umiru-eip-outline-block');
				node = jQuery(node);
				var empty = node.attr('umi:empty');
				if(empty && (node.attr('tagName') != 'IMG') && (node.html() == empty)) {
					node.html('');
				}

				node.attr('title', '');
			})
			.removeClass('u-eip-edit-box u-eip-edit-box-hover u-eip-modified u-eip-deleted u-eip-edit-box-inversed')
			.unbind('click')
			.unbind('mouseover')
			.unbind('mouseout')
			.unbind('mousedown')
			.unbind('mouseup');

		jQuery('.u-eip-add-box, .u-eip-add-button, .u-eip-del-button').remove();

		jQuery('.u-eip-sortable').sortable('destroy').removeClass('u-eip-sortable');

	}, 'eip');


	uAdmin('searchRow', function(node, parent) {
		if (parent) {
			if (node.tagName == 'BODY' || node.tagName == 'TABLE') return false;
			if (jQuery(node.parentNode).attr('umi:region') == 'row') {
				return node.parentNode;
			}
			else return this.searchRow(node.parentNode, true);
		}
		else return jQuery('*[umi\\:region]', node).filter(function(){
			var selector = '[umi\\:element-id^="new"], [umi\\:object-id^="new"]';
			return !jQuery(this).find(selector).length && !jQuery(this).is(selector)
		}).get(0);
	}, 'eip');


	uAdmin('highlightNode', function (node) {
		if (!jQuery(node).attr('umi:field-name')) return;
		var info = this.searchAttr(node);
		if (!info) return;

		var empty = this.htmlTrim(jQuery(node).attr('umi:empty'));

		if(empty && this.htmlTrim(jQuery(node).html()) == '' && (jQuery(node).attr('tagName') != 'IMG')) {
			try{
				jQuery(node).html(empty);
			} catch(e) {}
			jQuery(node).addClass('u-eip-empty-field');
		}

		jQuery(node).addClass('u-eip-edit-box');

		if (this.queue.search(info)) {
			jQuery(node).addClass('u-eip-modified');
		}

		var label = getLabel('js-panel-link-to-go');
		if (navigator.userAgent.indexOf('Mac OS') != -1) {
			label = label.replace(/Ctrl/g, 'Cmd');
		}
		jQuery(node).attr('title', label);
		jQuery(node).bind('dblclick', function () {
			return false;
		});
		// Remove title from editing element
		jQuery(document).on('mouseenter', ".u-eip-editing", function() {
			this.title = '';
		});

		jQuery(document).on('mouseleave', ".u-eip-editing", function() {
			this.title = label;
		});

		this.markInversedBoxes(jQuery(node));

	}, 'eip');


	uAdmin('highlightListNode', function (node) {

		var self = this;
		if(!jQuery(node).attr('umi:module')) return false;

		var box = document.createElement('div');
		document.body.appendChild(box);
		node.boxNode = box;

		var position = self.nodePositionInfo(node);
		if(!position.x && !position.y) return false;

		jQuery(box).attr('class', 'u-eip-add-box');

		jQuery(node).addClass('umiru-eip-outline-block');

		jQuery(box).css({
			'position':		'absolute',
			'width':		position.width,
			'height':		position.height,
			'left':			position.x,
			'top':			position.y
		});

		if (jQuery(node).attr('umi:add-method') != 'none') {
			this.addAddButton(node, box);
		}

		if (jQuery(node).attr('umi:sortable') == 'sortable') {
			this.setNodeSortable(node, box);
		}

		return box;

	}, 'eip');


	uAdmin('addAddButton', function (node, box) {

		var button = document.createElement('div');
		node.addButtonNode = button;

		var addText = getLabel('js-panel-add');
		if(jQuery(node).attr('umi:add-text')) {
			addText = jQuery(node).attr('umi:add-text');
		}

		jQuery(button)
			.attr({
				'class': 'u-eip-add-button'
			})
			.css({
				'z-index':	'555'
			})
			.html('<span class="u-eip-addplusbtn"><img src="/images/cms/eip/add_button.svg" alt="+"></span><span class="u-eip-addtextbutton">' + addText + '</span>')
			.hover(function () {
				jQuery(this).addClass('u-eip-add-button-hover');
			}, function () {
				jQuery(this).removeClass('u-eip-add-button-hover');
			});

		jQuery(node)
			.mouseover(function() {
				jQuery(button).addClass('u-eip-add-button-hover');
			})
			.mouseout(function() {
				jQuery(button).removeClass('u-eip-add-button-hover');
			});

		var fDim = 'bottom';
		var sDim = 'left';
		var userPos;
		if (userPos = jQuery(node).attr('umi:button-position')) {
			var arr = userPos.split(/ /);
			if(arr.length == 2) {
				fDim = arr[0];
				sDim = arr[1];
			};
		};

		this.placeWith(node, button, fDim, sDim);

		var self = this;
		jQuery(button)
			.bind('click', function () {
				self.onAddButtonMouseup(node);
			})
			.bind('mouseover', function () {
				self.onAddButtonMouseover(box);
			})
			.bind('mouseout', function () {
				self.onAddButtonMouseout(box);
			});

		document.body.appendChild(button);

	}, 'eip');


	uAdmin('onAddButtonMouseup', function (node) {
		var self = this,
			regionType = jQuery(node).attr('umi:region') || null,
			rowNode = self.searchRow(node) || null,
			elementId = parseInt(jQuery(node).attr('umi:element-id')),
			module = jQuery(node).attr('umi:module') || '',
			method = jQuery(node).attr('umi:method') || '',
			addMethod = jQuery(node).attr('umi:add-method'),
			needReload = ((jQuery(node).attr('umi:add-reboot') || '').trim() == 'true'),
			callback = jQuery(node).attr('umi:callback');

		if (rowNode && (regionType == 'list') && (addMethod != 'popup')) {
			self.inlineAddPage(node);
			if (typeof window[callback] == 'function'){
				window[callback]();
			}
		}
		else {
			if (self.queue.current >= 0) {
				self.message(getLabel('js-panel-message-save-first'));
				return;
			}

			var popupTitle = jQuery(node).attr('umi:add-popup-title')
			if (!popupTitle) {
				popupTitle = getLabel('js-eip-create-page');
			}

			var url = '/admin/content/eip_add_page/choose/' + elementId + '/' + module + '/' + method + '/',
				sCsrfToken = uAdmin.csrf ? '?csrf=' + uAdmin.csrf : '';
			jQuery.ajax({
				url : url + '.json' + sCsrfToken,
				dataType : 'json',
				success  : function(data) {
					if (data.data.error) {
						uAdmin.eip.message(data.data.error);
						return;
					}
					jQuery.openPopupLayer({
						'name'   : "CreatePage",
						'title'  : popupTitle,
						'url'    : url + sCsrfToken,
						'beforeClose': function () {
							if (needReload) {
								document.location.reload();
								return false;
							};
						},
						success: function() {
							self.onAddButtonMouseupPopupOpened();
						},
					});
					if (typeof window[callback] == 'function'){
						window[callback]();
					}
				},
				error : function() {
					uAdmin.eip.message(getLabel('error-require-more-permissions'));
					return;
				}
			});
		};
	}, 'eip');


	uAdmin('placeWith', function (placer, node, fDim, sDim) {
		if(!placer || !node) return;
		var position = this.nodePositionInfo(placer);
		var region = jQuery(node);

		var x, y;
		switch(fDim) {
			case 'top':
				y = position.y - parseInt(region.css('height'));
				break;

			case 'right':
				x = position.x + position.width;
				break;

			case 'left':
				x = position.x - region.width();
				break;

			default:
				y = position.y + position.height;
		}

		if (fDim == 'top' || fDim == 'bottom') {
			switch(sDim) {
				case 'right':
					x = position.x + position.width;
					break;

				case 'middle':
				case 'center':
					if (position.width - parseInt(region.css('width')) > 0) {
						x = position.x + Math.ceil((position.width - region.width()) / 2);
					}
					else x = position.x;
					break;

				default: x = position.x;
					x += parseInt(jQuery(placer).css('padding-left'));
			}
		}
		else {
			switch(sDim) {
				case 'top':
					y = position.y;
					break;

				case 'bottom':
					y = position.y + position.height - parseInt(region.css('height'));
					break;

				default:
					y = Math.round(position.y + Math.ceil((position.height - parseInt(region.css('height'))) / 2));
			}
		}

		var rightBound = x;
		var jWindow = jQuery(window);

		if (rightBound > jWindow.width()) {
			x = jWindow.width() - region.width() - 30;
		}

		try {
			region.css({
				'position':		'absolute',
				'left':			x + 'px',
				'top':			y + 'px'
			});
		} catch(e) {};

	}, 'eip');


	uAdmin('switchElementActivity', function (iElementId) {

		var eip = this;

		var bLoading = $('a#'+iElementId).hasClass('loading');
		if (bLoading) return false;

		$('a#'+iElementId).addClass('loading');

		var oParams = {};

		$.ajax({
			type: "POST",
			url: "/udata/content/activityControl/" + iElementId + "/",
			data: oParams,
			dataType: "xml",
			success: function(data){
				if (data.getElementsByTagName('success')[0] &&
					data.getElementsByTagName('success')[0].childNodes[0] &&
					data.getElementsByTagName('success')[0].childNodes[0].nodeValue == 1
				) {
					var result = data.getElementsByTagName('result')[0];
					if (result && result.childNodes[0]) {
						result = parseInt(result.childNodes[0].nodeValue);
					}
					eip.updateElementActivityView(iElementId, result);
				}
				$('a#'+iElementId).removeClass('loading');
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log('error on switching activity: ' + textStatus);
			},
			complete: function() {
				$('a#'+iElementId).removeClass('loading');
			}
		});

		return false;

	}, 'eip');


	uAdmin('updateElementActivityView', function (iElementId, iNewState) {
		switch (iNewState) {
			case 1:
				$('a#'+iElementId).attr('class', 'deactivateButton');
				$('a#'+iElementId).parents('.cat-item-inactive').addClass('cat-item-active');
				$('a#'+iElementId).parents('.cat-item-inactive').removeClass('cat-item-inactive');
				$('a#'+iElementId).text(getLabel('js-cms-eip-edit_in_place_custom-active'));
				break;
			case -1:
				$('a#'+iElementId).attr('class', 'activateButton');
				$('a#'+iElementId).parents('.cat-item-active').addClass('cat-item-inactive');
				$('a#'+iElementId).parents('.cat-item-active').removeClass('cat-item-active');
				$('a#'+iElementId).text(getLabel('js-cms-eip-edit_in_place_custom-not_active'));
				break;
		}
	}, 'eip');


	uAdmin('initElementActivitySwitchers', function () {

		var eip = this;
		jQuery('.cat-item-active, .cat-item-inactive').each(function() {

			var iElementId = jQuery(this).attr('umi:element-id'),
				sActivityClass = '',
				sActivityTitle = '';

			if (jQuery(this).is('.cat-item-active')) {
				sActivityClass = 'deactivateButton';
				sActivityTitle = getLabel('js-cms-eip-edit_in_place_custom-active');
			} else if (jQuery(this).is('.cat-item-inactive')) {
				sActivityClass = 'activateButton';
				sActivityTitle = getLabel('js-cms-eip-edit_in_place_custom-not_active');
			};

			var jqButton = jQuery("<a />")
				.addClass(sActivityClass)
				.attr({
					'id': iElementId,
					'href': 'javascript:void(0)'
				})
				.text(sActivityTitle)
				.bind('click', function () {
					eip.switchElementActivity(iElementId);
				});

			var jqElement = jQuery("<div />")
				.addClass('actWrapper hidden')
				.append(jqButton)
				.append("<div class='cleaner' />");

			if (jQuery(this).is('tr')) {
				jqElement = jQuery("<td />").append(jqElement);
			};

			jQuery(this).prepend(jqElement);

		});

	}, 'eip');


	uAdmin('drawControls',function () {
		this.editorToggleButton = this.addEditorToggleButton();
		this.editorControlsHolder = this.addEditorControlsHolder();
		this.saveButton = this.addSaveButton();
		this.undoButton = this.addUndoButton();
		this.redoButton = this.addRedoButton();
		this.initElementActivitySwitchers();
		this.initCustomControls();
	}, 'eip');


	uAdmin('reinitEmptyLists', function(){

		jQuery('.eip-show-if-empty-list').hide().filter(function(){
			return jQuery(this).parents("[umi\\:region=list]").find("[umi\\:region=row]").not('.blank_item').not(this).length == 0;
		}).show();

	}, 'eip');


	uAdmin('initCustomControls', function () {

		this.bind('Enable', function (type) {
			if (type == 'after') {
				jQuery('.actWrapper').show();
				jQuery('.catalog-objects-amount').show();
				jQuery('.cat-item-inactive').show();
				jQuery('.hidden').addClass('not_hidden').removeClass('hidden');
				jQuery('.not_hidden').has('.custom-eip-control').addClass('custom-eip-control-wrapper');
				uAdmin.eip.reinitEmptyLists();
				uAdmin.eip.normalizeBoxes();
			};
		});

		this.bind('Disable', function (type) {
			if (type == 'after') {
				jQuery('.actWrapper').hide();
				jQuery('.catalog-objects-amount').hide();
				jQuery('.not_hidden').addClass('hidden').removeClass('not_hidden');
				jQuery('.eip-show-if-empty-list').hide();
				uAdmin.eip.normalizeBoxes();
			};
		});

		this.bind('Repaint', function(type){
			if (type == 'after') {
				uAdmin.eip.reinitEmptyLists();
			}
		});

	}, 'eip');


	uAdmin('disable', function () {

		this.onDisable('before');
		this.finishLast();
		this.unhighlight();

		this.enabled = false;

		jQuery.cookie('eip-editor-state', '', { path: '/', expires: 0});
		this.queue.setSaveStatus(false);
		this.message(getLabel('js-panel-message-edit-off'));

		if (this.queue.current >= 0) {
			this.queue.save();
		}
		jQuery(document).unbind('keydown', this.bindHotkeys);
		this.onDisable('after');
	}, 'eip');

	uAdmin('addMetaPanel', function () {
		if (!uAdmin.panel.panelHolder) return null;
		var self = this;
		return jQuery('\n\
				<div id="u-quickpanel-meta">\n\
					<table>\n\
						<tr>\n\
							<td width="100px">' + getLabel('js-panel-meta-altname') + ': </td>\n\
							<td>\n\
								<input type="text" name="alt_name" id="u-quickpanel-metaaltname" value="' + self.meta.old.alt_name + '"/>\n\
								<div class="meta_count" id="u-quickpanel-metaaltname-count"/>\n\
							</td>\n\
						</tr>\n\
						<tr>\n\
							<td width="100px">' + getLabel('js-panel-meta-title') + ': </td>\n\
							<td>\n\
								<input type="text" name="title" id="u-quickpanel-metatitle" value="' + self.meta.old.title + '"/>\n\
								<div class="meta_count" id="u-quickpanel-metatitle-count"/>\n\
							</td>\n\
						</tr>\n\
						<tr>\n\
							<td>' + getLabel('js-panel-meta-keywords') + ': </td>\n\
							<td>\n\
								<input type="text" name="meta_keywords" id="u-quickpanel-metakeywords" value="' + self.meta.old.keywords + '"/>\n\
								<div class="meta_count" id="u-quickpanel-metakeywords-count"/>\n\
							</td>\n\
						</tr>\n\
						<tr>\n\
							<td>' + getLabel('js-panel-meta-descriptions') + ':</td>\n\
							<td>\n\
								<input type="text" name="meta_descriptions" id="u-quickpanel-metadescription" value="' + self.meta.old.descriptions + '"/>\n\
								<div class="meta_count" id="u-quickpanel-metadescription-count"/>\n\
								<div class="meta_buttons">\n\
									<input type="submit" id="save_meta_button" value="' + getLabel('js-panel-save') + '">\n\
								</div>\n\
							</td>\n\
						</tr>\n\
					</table>\n\
				</div>\n\
			').appendTo(uAdmin.panel.panelHolder);
	}, 'eip');

	uAdmin('reEnable', function () {
		this.inspectDocument();
		this.highlight();
		this.normalizeBoxes();

		this.enabled = true;

		if (this.queue.current >=0) {
			this.queue.setSaveStatus(true);
		}
	}, 'eip');

	uAdmin('onAfterInlineAdd', function (newRowNode) {
		//?????????????????? ?????????????? "umi:no-inline-clone". ???????? ???? ???????????????????? ?? "true", ???? ?????????? html-?????? ?????????? ???????????? ?????? inline-???????????????? ???????????????? ?? EiP
		jQuery('*[umi\\:no\-inline\-clone="true"]', newRowNode).remove();
	}, 'eip');

	uAdmin('onSaveFinish', function(){
		var needReload = false;
		var queue = uAdmin.eip.source_queue;

		Object.keys(queue).forEach(function(key) {
			if(typeof queue[key].node != 'undefined'){
				if($(queue[key].node).attr('umi:add-reboot') == 'true') needReload = true;
			}
		});

		if(needReload) document.location.reload();
	}, 'eip');

	uAdmin.onLoad('wysiwyg', function(){
		tinymce.addI18n('ru',{
			"Internal link": "?? ?????? ???? ????????",
			"File link": "???????????? ???? ????????",
			"Open links in new window": "?????????????????? ???????????? ?? ?????????? ????????",
			"Address external reference in its format, including http://": "?????????? ?????????????? ???????????? ?? ???????????? ??????????????, ?????????????? http://"
		});
	});

	uAdmin('getEipAddButtonTagName', function () {
		return 'div';
	}, 'eip');

	uAdmin('showBlockInfo', function () {
		$.get('/js/cms/blockInfo.html', function (data) {
			var blockInfoId = $(data).attr('id');

			if ($('body').find('div#' + blockInfoId).hasClass('in')) {
				return false;
			}
			$(data).modal('show');
		});
	}, 'eip');

	uAdmin('onSwapEditor', function () {
		if (window.cloudController && window.cloudController.eipBlocked) {
			uAdmin.eip.showBlockInfo();
			return;
		}
	}, 'eip');

	uAdmin('onSwapEnabledEditor', function () {
		if (typeof destroyBuilder !== 'undefined') {
			destroyBuilder();
		}
	}, 'eip');

	uAdmin('onSwapDisabledEditor', function () {
		if (typeof initBuilder !== 'undefined') {
			initBuilder();
		}
	}, 'eip');

	uAdmin('onClearTags', function (node) {
		var empty = jQuery(node).attr('umi:empty');

		if (jQuery(node).attr('tagName') == 'IMG' && empty) {
			jQuery(node).attr('src', empty);
		}
	}, 'eip');

	uAdmin('onSuccessAddNewPageBegin', function (pageData) {
		if (uAdmin.isBuilderEnabled) {
			addPageSuccess(pageData);
			return true;
		}
	}, 'eip');

	uAdmin('onSetAddButtonText', function (node, button) {
		var addText = getLabel('js-panel-add');
		if(jQuery(node).attr('umi:add-text')) {
			addText = jQuery(node).attr('umi:add-text');
		}
		jQuery(button).html('<span class="u-eip-addplusbtn"><img src="/images/cms/eip/add_button.svg" alt="+"></span><span class="u-eip-addtextbutton">' + addText + '</span>');
	}, 'eip');

	uAdmin('onSetAddButtonHoverEvents', function (node, button) {
		jQuery(node).mouseover(function() {
			jQuery(button).addClass('u-eip-add-button-hover');
		}).mouseout(function() {
			jQuery(button).removeClass('u-eip-add-button-hover');
		});
	}, 'eip');

	uAdmin('onEipSaveQueue', function (eip) {
		if(!uAdmin.eip.source_queue ){
			uAdmin.eip.source_queue = $.extend(true, {}, eip);
		}
	}, 'eip');

	uAdmin('onEipSaveQueueWithEdit', function (node) {
		if (uAdmin.isBuilderEnabled) {
			node.new_value = getCleanHtml(node.node.id);
		}
	}, 'eip');

	uAdmin('onDisableWithQueueSave', function () {
		if (confirm(getLabel('js-panel-message-save-confirm'))) {
			uAdmin.eip.queue.save();
		}
	}, 'eip');

	uAdmin('addMetaToggleButtonClickHandler', function ($element) {
		if (!window.cloudController || !window.cloudController.eipBlocked) {
			return false;
		}

		$element.click(function () {
			uAdmin.eip.showBlockInfo();
			return false;
		});

		return true;
	}, 'eip');

	uAdmin('getAttrSearchReturnCondition', function (deep, tagName) {
		return deep <= 0 || tagName === 'BODY';
	}, 'eip');

	uAdmin('isImageEditorReinitEnabled', function () {
		return !uAdmin.isBuilderEnabled;
	}, 'eip');

	uAdmin('onEditModuleActivate', function () {
		var cropModule = new CropModule(this.oEditor);

		if (uAdmin.isBuilderEnabled) {
			if (!cropModule.initOriginalImageData()) {
				uAdmin.eip.message('?????? ???????????????????????????? ???????????????????? ??????????????????/???????????????? ???????? ????????????????');
				return;
			}
			this.arEditorModules.push(PopupModule);
		}
	}, 'eip');

	uAdmin('cropModuleOnActivateResize', function () {
		this.oEditor.jqImgNode.css({
			width: 'auto',
			height: 'auto'
		});

		this.oEditor.applyImageSizes(this.oEditor.jqImgNode);
	}, 'eip');

	uAdmin('cropModuleOnCancelResize', function () {
		this.oEditor.jqImgNode[0].style.width = '';
		this.oEditor.jqImgNode[0].style.height = '';
	}, 'eip');

	uAdmin('getDeleteMessageOfEipSave', function (isNotStarted) {
		return isNotStarted
			? getLabel('js-panel-message-no-changes')
			: getLabel('js-panel-message-changes-saved');
	}, 'eip');

	uAdmin('isRelationDrawApplyDimentions', function () {
		return false;
	}, 'eip');

	uAdmin('addPrevOnStack', function (elements) {
		return elements.andSelf();
	}, 'eip');

	uAdmin('isBindFinishEventCustomReturn', function (target) {
		return target && target.hasClass('relationAddButton');
	}, 'eip');

	uAdmin('getRelationSearchFieldWidth', function (box) {
		return jQuery(box).width() < 150 ? 150 : jQuery(box).width();
	}, 'eip');

	uAdmin('isCleanupHtmlOnWysiwygCtrlShift', function () {
		return uAdmin ? !uAdmin.isBuilderEnabled : true;
	}, 'eip');

	uAdmin('getMSIEStubImgCondition', function () {
		return !(jQuery.browser.msie && jQuery.browser.version < 10);
	}, 'eip');

	uAdmin('removeAddFail', function(elementId) {
		var i;

		for (i in this.save.edit) {
			if (~this.save.edit[i].id.indexOf(elementId)) {
				delete this.save.edit[i];
			}
		}
		delete this.save.move[elementId];
		delete this.save.del[elementId];
	}, 'eip');

	uAdmin('performSaveError', function (data, node) {
		if (!data && !data.data) {
			return false;
		}

		var message = data.error || data.data.error;
		if (!message) {
			return false;
		}

		uAdmin.eip.message(message);

		uAdmin.eip.removeAddFail.call(this, node.id);
		jQuery(node.node).remove();
		node = false;

		uAdmin.eip.normalizeBoxes();
		--this.save.count;

		this.save('add');
		return true;
	}, 'eip');

	uAdmin('onTinymceInitEditorTune', function(settings) {
		settings.toolbar_standart = this.settings.toolbar_standart.replace(/^imagemanager,/, '');
	}, 'eip');

	uAdmin('isEditedImageTypeSlider', function(editor) {
		return !!editor.jqImgNode[0].className.match('slide-img');
	}, 'eip');

	uAdmin('getSliderEditPopupLayerUrl', function(editor) {
		return '/styles/common/other/slidereditor/slideeditor.htm';
	}, 'eip');

	uAdmin('showWizard', function() {
		jQuery('<link href="/adminzone/css/siteguide/tour-site.css" type="text/css" rel="stylesheet"/>').appendTo('head');
		jQuery('<script src="/adminzone/js/siteguide/bootstrap-tour-standalone.0.12.0.js?v=0.1" type="text/javascript"></script>').appendTo('body');
		jQuery('<script src="/adminzone/js/siteguide/scenarios/siteFirstTime.js" type="text/javascript"></script>').appendTo('body');
	}, 'eip');
})();
/**
 * Extend eip.editor for cloud controller
 */
(function(){

	uAdmin('.pLoaderFactory', function (extend) {

		function pLoaderFactory () {
			this.init();
		};

		pLoaderFactory.prototype.init = function () {

			if (!uAdmin.eip) {
				uAdmin.onLoad('eip', this.init);
				return;
			}

			var eip = uAdmin.eip;

			jQuery('*[umi\\:photo-type-id], *[umi\\:album-type-id]').each(function () {
				var oPictureLoader = new pLoader(jQuery(this));
				oPictureLoader.init();
			});

			eip.bind('Enable', function (type) {
				jQuery(".pLoader").removeClass('hidden');
			});

			eip.bind('Disable', function (type) {
				jQuery(".pLoader").addClass('hidden');
			});

		};

		var pLoader = function (album) {

			var that = this,
				elementId = jQuery(album).attr('umi:element-id'),
				photoTypeId = jQuery(album).attr('umi:photo-type-id'),
				albumTypeId = jQuery(album).attr('umi:album-type-id'),
				tpl = jQuery('li[umi\\:region="row"]:not(.blank_item):last', album),
				phototpl = jQuery('li.photo.blank_item', album),
				albumtpl = jQuery('li.photo_album.blank_item', album),
				node,
				only;

			this.initView = function () {
				node = '<li class="pLoader hidden-text no-style"><div class="pLoader-title">';
				if (albumTypeId) {
					node += '<p class="pLoader-empty-album-title">' + getLabel('js-empty-photo-album') + '</p>';
				} else {
					node += '<p class="pLoader-add-photos-title">' + getLabel('js-upload-some-photos') + '</p>';
				}
				node += '</div>\
						<span class="pLoader-loading">\
							' + getLabel('js-created') + '<span class="pLoader-done" />\
							' + getLabel('js-out-of') + '<span class="pLoader-total" />.\
						</span>\
						<div class="pLoader-loading">' + getLabel('js-cant-touch-this') +'</div>\
						<div class="pLoader-none">' + getLabel('js-no-photos-selected') +'</div>\
						<span class="pLoader-add add-photo">' + '<img src="/images/cms/eip/add_button.svg" alt="+"/>' + getLabel('js-add-photos') + '</span>\
						<span class="pLoader-add add-album">' + '<img src="/images/cms/eip/add_button.svg" alt="+"/>' + getLabel('js-add-album') + '</span>\
					</li>';
				node = jQuery(node);
				node.addClass(window.uAdmin.eip.enabled ? 'not_hidden' : 'hidden');
				album.prepend(node);
			};

			this.switchStateTo = function (state) {
				switch (state) {
					case 'initial':
						jQuery('.pLoader-title, .pLoader-empty-album-title, .pLoader-add', node).show();
						jQuery('.pLoader-none, .pLoader-add-photos-title, .pLoader-loading', node).hide();
						break;
					case 'none':
						if (only === 'photo') { that.switchStateTo('initial-onlyphoto'); }
						if (only === 'album') { that.switchStateTo('initial-onlyalbum'); }
						jQuery('.pLoader-none', node).show();
						break;
					case 'loading':
						jQuery('.pLoader-loading', node).show();
						jQuery('.pLoader-title, .pLoader-add, .pLoader-none', node).hide();
						break;
					case 'initial-onlyphoto':
						that.switchStateTo('initial');
						only = 'photo';
						jQuery('.pLoader-add-photos-title', node).show();
						jQuery('.add-album, .pLoader-empty-album-title, .pLoader-title', node).hide();
						break;
					case 'initial-onlyalbum':
						that.switchStateTo('initial');
						only = 'album';
						jQuery('.add-photo, .pLoader-title', node).hide();
						break;
				}
			};

			this.drawNewNode = function (original, elementId, link, url) {
				var newNode = original.clone(true, true);

				newNode.attr('umi:element-id', elementId)
					.removeClass('blank_item');
				jQuery('*[umi\\:element-id]', newNode).attr('umi:element-id', elementId);

				jQuery('*[umi\\:field-name="photo"], *[umi\\:field-name="header_pic"]', newNode).each(function(){
					jQuery(this)
						.attr('src', url ||  jQuery(this).attr('umi:empty'))
						.attr('umi:is-stub', url ? false : true)
						.parents("a", newNode).attr('href', url || '');
				});

				jQuery('*[umi\\:field-name="name"]', newNode).attr('href', link || '').text('');

				node.after(newNode);

				uAdmin.eip.highlightNode(jQuery('*[umi\\:field-name="name"]' ,newNode)[0]);

				uAdmin.eip.trigger('AddPhotoToAlbum', 'after', {
					originalNode: original,
					newNode: newNode
				})
			};

			this.openElFinder = function () {
				var folder = './images/cms/data/',
					filename = '',
					qs = 'folder=' + folder + '&image=1&multiple=1&imagesOnly=1&noTumbs=1';
				jQuery.ajax({
					url: "/admin/data/get_filemanager_info/",
					data: "folder=" + folder,
					dataType: 'json',
					complete: function (data) {
						data = eval('(' + data.responseText + ')');
						var folder_hash = data.folder_hash,
							file_hash = data.file_hash,
							lang = data.lang;
						qs += '&lang=' + lang + '&folder_hash=' + folder_hash;
						jQuery.openPopupLayer({
							name: "Filemanager",
							title: getLabel('js-file-manager'),
							width: 1200,
							height: 600,
							url: "/styles/common/other/elfinder/umifilebrowser.html?" + qs,
							afterClose: that.addPhotos
						});
						jQuery('#popupLayer_Filemanager .popupBody').append(uAdmin.wysiwyg.getFilemanagerFooter(data.filemanager));
					}
				});
			};

			this.addPhotos = function (srcs) {
				if (!srcs || !srcs.length) {
					that.switchStateTo('none');
					return false;
				}
				var total = jQuery('.pLoader-total', node),
					done = jQuery('.pLoader-done', node),
					uri = '/admin/content/eip_quick_add/' + elementId + '.xml?type-id=' + photoTypeId + '&force-hierarchy=1';
				that.switchStateTo('loading');
				total.text(srcs.length);
				done.text('0');
				(function addOnePhoto(i) {
					//?????????????????? ????????????????
					jQuery.get(uri, function (data) {
						var newElementId = jQuery('data', data).attr('element-id');
						if (!newElementId || jQuery('data status', data).text() !== 'ok') {
							uAdmin.eip.message(getLabel('js-edcell-get-error'));
							return;
						}
						//?????????????????? ??????
						jQuery.post("/content/editValue/save.xml?qt=" + (new Date()).getTime(), {
							'element-id': newElementId,
							'field-name': 'photo',
							'object-id': '',
							'value': (typeof srcs[i] === 'object') ? srcs[i].url : srcs[i]
						}, function () {
							done.text(srcs.length - i);
							var mytpl = phototpl.size() ? phototpl : (tpl.size() ? tpl : null);
							if (mytpl) {
								jQuery.get('/upage/' + newElementId, function (data) {
									var	link = jQuery('page', data).attr('link'),
										url = jQuery('property[name="photo"] value', data).text();
									that.drawNewNode(mytpl, newElementId, link, url);
									if (i > 0) {
										addOnePhoto(--i);
									} else {
										that.finish('photo', false);
									}
								});
							} else {
								if (i > 0) {
									addOnePhoto(--i);
								} else {
									that.finish('photo', true);
								}
							}
						});
					});
				}(srcs.length - 1));
			};

			this.addAlbum = function () {
				var uri = '/admin/content/eip_quick_add/' + elementId + '.json?type-id=' + albumTypeId + '&force-hierarchy=1';
				jQuery.get(uri, function (result) {
					var newElementId = result.data['element-id'];
					var mytpl = albumtpl.size() ? albumtpl : (tpl.size() ? tpl : null);
					jQuery.get('/upage/'+newElementId+'.json', function(result){
						if (mytpl) {
							var link = '';
							if (result && result.page && result.page.link) {
								link = result.page.link;
							}
							that.drawNewNode(mytpl, newElementId, link, '');
							that.finish('album', false);
						} else {
							that.finish('album', true);
						}
					}, 'json');
				},'json');
			};

			this.init = function () {
				that.initView();
				if (photoTypeId && albumTypeId) {
					only = '';
					that.switchStateTo('initial');
				}
				if (photoTypeId && !albumTypeId) {
					only = 'photo';
					that.switchStateTo('initial-onlyphoto');
				}
				if (!photoTypeId && albumTypeId) {
					only = 'album';
					that.switchStateTo('initial-onlyalbum');
				}
				jQuery('.add-photo', node).bind('click', that.openElFinder);
				jQuery('.add-album', node).bind('click', that.addAlbum);
			};

			this.finish = function (what, reload) {
				switch (what) {
					case 'photo':
						that.switchStateTo('initial-onlyphoto');
						break;
					case 'album':
						that.switchStateTo('initial-onlyalbum');
						break;
					default:
						that.switchStateTo('initial');
				}

				if (reload) {
					var queue = window.uAdmin.eip.queue;
					if (queue && queue.isModified !== undefined && queue.isModified()) {
						queue.submit();
					} else {
						(window || document).location.reload(true);
					}
				}
			};

		};

		return extend(pLoaderFactory, this);

	}, 'eip');


	uAdmin('.optionedFieldsCollection', function () {
		var _isFunction = function (obj) {
			return typeof (obj) === 'function';
		};

		var self = this,
			collection = this,
			n = 0,
			items = [],
			itemsHash = {},
			elementsSelector = '[umi\\:field-type="optioned"],[umi\\:field-type="characteristic"]';

		/**
		 * Apply function on all items
		 * @fName string
		 * @fArgs array | undefined
		 */
		this.applyToAllFields = function (fName, fArgs) {
			var i = 0,
				res = [];
			if (!fName) { return false; }
			fArgs = fArgs || [];
			while (i < n) {
				res.push(!_isFunction(items[i][fName]) || items[i][fName].apply(this, fArgs));
				i += 1;
			}
			return res;
		};

		/**
		 * Apply function on all nodes of items
		 * @fName string
		 * @fArgs array | undefined
		 */
		this.applyToAllNodes = function (fName, fArgs) {
			var i = 0,
				res = [];
			if (!fName) { return false; }
			fArgs = fArgs || [];
			while (i < n) {
				res.push(!_isFunction(items[i].getNode()[fName]) || items[i].getNode()[fName].apply(items[i].getNode(), fArgs));
				i += 1;
			}
			return res;
		};

		/**
		 * Add item to collection
		 */
		this.addItem = function (node) {
			var newItem = new EditOptioned(node);
			if (uAdmin.eip.enabled) {
				newItem.getNode().addClass('field_editable');
			}
			items.push(newItem);
			itemsHash[newItem.hash()] = newItem;
			n += 1;
		};

		/**
		 * Update all items originalValue to currentValue
		 */
		this.updateAll = function (fields) {
			var i = 0, n,
				field, item, hash;
			n = fields.total;
			while (i < n) {
				field = fields[i];
				hash = field['element-id'] + '_' + field['field-id'];
				item = itemsHash[hash];
				item.updateData(field.value || {}, field.guide || {});
				++i;
			}
		};

		/**
		 * Push changes to server
		 */
		this.submit = function (callback) {
			var uri = '/udata/content/saveOptioned.json',
				query = collection.applyToAllFields('prepareDataForSubmit');
			$.post(uri, {data: query}, function (data) {
				self.submitCallback(data);
				if (_isFunction(callback)) {
					callback();
				}
			}, 'json');
		};

		this.submitCallback = function (data) {
			collection.applyToAllNodes('removeClass', ['field_modified u-eip-modified']);
			collection.updateAll(data);
		};

		/**
		 * Cancel all changes, show original markup
		 */
		this.restore = function () {
			self.applyToAllFields('finishEditing', [true]);
		};

		/**
		 * Finish editing on all items
		 */
		this.finishAll = function () {
			self.applyToAllFields('finishEditing');
		};

		/**
		 * Check for any changes in items values
		 */
		this.anyChanges = function () {
			return $.inArray(true, self.applyToAllFields('hadChanged')) !== -1;
		};

		/**
		 * Create collection, bind events
		 */
		this.init = function () {

			var nodes = jQuery(elementsSelector);

			nodes.each(function () {
				self.addItem($(this));
			});

			uAdmin.eip.bind('Enable', function (type) {
				if (type == 'after') {
					self.applyToAllNodes('addClass', ['field_editable']);
				}
			});

			uAdmin.eip.bind('Disable', function (type) {
				if (type == 'after') {
					self.applyToAllNodes('removeClass', ['field_editable']);
					self.finishAll();
				};
			});
		};

		/**
		 * ?????????????????????? ?????????????????????????????? ???????? ???????? optioned
		 * @node jQuery object
		 */
		function EditOptioned(node) {
			var self = this,
				elementId, fieldId, fieldName, guideId,
				props, originalProps,
				guide,
				guideHashMap,
				editNode,
				active = false,
				iWasClicked = false,
				hasData = false,
				selectTxt = getLabel('js-cms-eip-editor_custom-select_value'),
				emptyTxt;

			/**
			 * Helper to hard copy object or array
			 */
			var _hardCopy = function (obj) {
				return	jQuery.isArray(obj) ? jQuery.extend(true, [], obj) : jQuery.extend(true, {}, obj);
			};

			/**
			 * node getter
			 */
			this.getNode = function () {
				return node;
			};

			/**
			 * props getter
			 */
			this.getProps = function () {
				return props;
			};

			/**
			 * active getter
			 */
			this.isActive = function () {
				return active;
			};

			/**
			 * Returns hash of the field, it's implied that tuple (elementId, fieldId) is unique
			 */
			this.hash = function () {
				return elementId + '_' + fieldId;
			};
			/**
			 * Remove all nodes that don't have 'persisit' class
			 */
			this.clean = function () {
				$('> *:not(.persist)', node).remove();
			};

			/**
			 * Get guide and value of optioned property in one request
			 * @callback function
			 */
			this.getData = function (callback) {
				var uri = '/udata/content/getOptionedAndGuide/?element-id=' + elementId + '&property-id=' + fieldId + '&property-name=' + fieldName;

				if (hasData && _isFunction(callback)) {
					callback();
					return;
				}

				$.get(uri, function (data) {
					guide = [];
					guideHashMap = {};
					guideId = $('guide', data).attr('id');

					$('guide item', data).each(function () {
						var me = $(this),
							new_id = $('id', me).text(),
							new_name = $('name', me).text();
						guide.push({
							'id': new_id,
							'name': new_name
						});
						guideHashMap[new_id] = new_name;
					});

					props = [];
					$('optioned value', data).each(function () {
						var me = $(this);
						var rel = $('rel', me).text();
						props.push({
							'rel': rel,
							'float': $('float', me).text() || 0
						});

						if (typeof guideHashMap[rel] == 'undefined') {
							guideHashMap[rel] = $('text', me).text();
						}
					});

					$('characteristic value', data).each(function () {
						var me = $(this);
						var rel = $('rel', me).text();
						props.push({
							'rel': rel,
							'float': $('float', me).text() || 0,
							'int': $('int', me).text() || 0
						});

						if (typeof guideHashMap[rel] == 'undefined') {
							guideHashMap[rel] = $('text', me).text();
						}
					});
					originalProps = _hardCopy(props);

					hasData = true;

					if (typeof callback === 'function') {
						callback();
					}
				});

			};

			/**
			 * Generate html text that represents guide
			 * @selected boolean
			 */
			this.makeSelectFromGuide = function (selected) {
				var txt = '<select class="opt_prop_rel_select">',
					i;

				for (i = 0; i < guide.length; i++) {
					txt += '<option value="' + guide[i].id + '"';
					if (guide[i].id == selected) { txt += ' selected="selected" '; }
					txt += '>' + guide[i].name + '</option>';
				}

				txt += '</select>';

				txt += '<div class="add_item_to_guide_wrapper">' +
					'<input type="text" class="add_item_to_guide_field" placeholder="' + getLabel('js-cms-eip-editor_custom-new_value') + '"/>' +
					'<div class="add_item_to_guide_button"><img src="/images/cms/eip/add_button.svg" alt="+" /></div>' +
					'</div>';

				return txt;
			};

			this.makePropBlock = function (rel) {
				var txt =
					'<div class="opt_prop_rel with_val" data-rel="' + rel + '">' +
					'<span class="opt_prop_rel_val">' + guideHashMap[rel] +
					'</span></div>';

				return txt;
			};

			/**
			 * Create DOM node that represents single property
			 * @prop object with fields:
			 *		@rel int
			 *		@float float
			 *		@toDelete boolean | undefined
			 */
			this.makePropRowNode = function (prop) {
				var opt = this;
				var newNode = $(
					'<tr class="opt_prop_edit"><td>' + self.makePropBlock(prop.rel) + '</td>' +
					'<td><input type="text" class="prop_float" value="' + prop.float + '" /></td>' +
					'<td><span class="prop_delete"><img src="/images/cms/eip/del_button.svg" alt="??"/></span></td></tr>'
				);

				if (typeof prop.int != 'undefined' ) {
					newNode = $(
						'<tr class="opt_prop_edit"><td>' + self.makePropBlock(prop.rel) + '</td>' +
						'<td><input type="text" class="prop_float" value="' + prop.float + '" /></td>' +
						'<td><input type="text" class="prop_qty" value="' + prop.int + '" /></td>' +
						'<td><span class="prop_delete"><img src="/images/cms/eip/del_button.svg" alt="??"/></span></td></tr>'
					);
				}

				if (prop.toDelete) {
					newNode.addClass('opt-prop-deleted');
				}

				$('.prop_delete', newNode).bind('click', function () {
					newNode.toggleClass('opt-prop-deleted');
				});

				return newNode;
			};

			/**
			 * Return jQuery node with events to add new row
			 */
			this.makeAddRowNode = function (makeCharacteristic) {
				makeCharacteristic = (typeof makeCharacteristic !== 'undefined') ? makeCharacteristic : false;
				var new_node = $(
					'<tr class="opt_props_add_row">' +
					'<td><div class="opt_prop_add with_val">' + selectTxt + '</div></td>' +
					'<td><input type="text" class="prop_float" placeholder="'  + getLabel('js-cms-eip-editor_custom-price_modify') + '" /></td>' +
					'<td><span class="prop_add prop_add_disabled"><img src="/images/cms/eip/add_button.svg" alt="+"/></span></td></tr>'
				);

				if (makeCharacteristic) {
					new_node = $(
						'<tr class="opt_props_add_row">' +
						'<td><div class="opt_prop_add with_val">' + selectTxt + '</div></td>' +
						'<td><input type="text" class="prop_float" placeholder="'  + getLabel('js-cms-eip-editor_custom-price_replacement') + '" /></td>' +
						'<td><input type="text" class="prop_qty" placeholder="'  + getLabel('js-cms-eip-editor_custom-price_quantity') + '" /></td>' +
						'<td><span class="prop_add prop_add_disabled"><img src="/images/cms/eip/add_button.svg" alt="+"/></span></td></tr>'
					);
				}

				$('.opt_prop_add', new_node).click(function () {
					new_node.find('.prop_add').removeClass('prop_add_disabled');
				});

				$('.prop_add', new_node).bind('click', function () {
					var me = $(this).parent().parent(),
						val = me.find('.opt_prop_add select').val() ||
							me.find('.opt_prop_add').text(),
						new_prop;
					if (!val || val === selectTxt) { return false; }

					if (!guideHashMap[val]) {
						val = '_' + val;
					}

					new_prop = {
						'rel': val,
						'float': parseFloat($('.prop_float', me).val()) || 0
					};

					if (makeCharacteristic) {
						new_prop.int = $('.prop_qty', me).val() || 0;
					}

					$('tr:last', editNode).before(self.makePropRowNode(new_prop));
					//reset to default selection
					self.cleanAllSelects();
					$('.opt_prop_add', me).html(selectTxt);
					$('.prop_float', me).val('');
					$('.prop_qty', me).val('');
					$('.prop_add', me).addClass('prop_add_disabled');
				});

				return new_node;
			};


			/**
			 * Helper to count not deleted values from optioned field, used to check if it's empty
			 */
			this.countNotDeletedValues = function () {
				var res = 0,
					i = props.length - 1;
				while (i >= 0) {
					if (!props[i].toDelete) {
						res += 1;
					}
					i -= 1;
				}
				return res;
			};

			/**
			 * Show Original Markup
			 */
			this.showOriginalMarkup = function () {
				var i, newNode;

				if (!hasData) { return; }

				self.clean();

				if (!props.length) {
					node.append('<div class="u-eip-empty-field"> ' + emptyTxt + '</div>');
				}

				for (i = 0; i < props.length; i++) {
					if (props[i].rel && !props[i].toDelete) {
						newNode = $('<div class="opt_prop"><input type="radio" name="' + fieldName + '" value="' + (props[i].float || 0) + '" id="' + props[i].rel + '"/><span class="opt_prop_rel">' + guideHashMap[props[i].rel] + '</span></div>');
						node.append(newNode);
					}
				}

				if (self.countNotDeletedValues()) {
					node.removeClass('not_hidden hidden');
				} else {
					node.addClass('not_hidden');
				}
			};

			/**
			 * Hide unnecessary content and draw edit control
			 */
			this.initEditing = function () {
				var i, newNode;

				self.clean();

				editNode = $('<table class="opt_props_edit_block" valign="top"/>');
				for (i = 0; i < props.length; i++) {
					editNode.append(self.makePropRowNode(props[i]));
				}

				var isCharacteristic = node.hasClass('item_characteristics');
				editNode.append(self.makeAddRowNode(isCharacteristic));

				node.append(editNode);

				editNode.sortable({
					items: '.opt_prop_edit',
					axis: 'y',
					cursor: 'crosshair',
					cancel: 'td > *'
				});

				node.addClass('editting').removeClass('u-eip-modified');
				active = true;

				// setting initial state
				if (self.revision.current == -1) {
					self.revision.add(self);
				}

			};

			this.cleanAllSelects = function () {
				if (!editNode) { return ; }

				editNode.find('.opt_prop_rel, .opt_prop_add').each(function () {
					var me = $(this);
					if (!me.hasClass('with_val')) {
						var relId = me.find('select').val();
						me.addClass('with_val')
							.attr('data-rel', relId);
						if (me.hasClass('opt_prop_rel')) {
							me.html('<span class="opt_prop_rel_val">' + guideHashMap[relId] + '</span>');
						} else {
							me.html(guideHashMap[relId] || selectTxt);
						}
					}
				});

			};

			/**
			 * Agregate data from user input
			 */
			this.getDataFromNodes = function () {
				var res = [];
				$('.opt_prop_edit', editNode).each(function () {
					var me = $(this);
					var item = {
						'float': parseFloat($('.prop_float', me).val()) || 0,
						'rel': $('.opt_prop_rel_select', me).val() || $('.opt_prop_rel', me).attr('data-rel'),
						'toDelete': me.hasClass('opt-prop-deleted')
					};

					if (editNode.parent().hasClass('item_characteristics')) {
						item.int = $('.prop_qty', me).val() || 1;
					}

					res.push(item);
				});
				return res;
			};

			/**
			 * Finish editing
			 * @discardChanges boolean | undefined
			 */
			this.finishEditing = function (discardChanges) {
				if (!active) { return false; }
				active = false;
				props = discardChanges ? originalProps : self.getDataFromNodes();
				self.showOriginalMarkup();
				node.removeClass('editting');
				if (self.hadChanged()) {
					node.addClass('field_modified');
					self.revision.add(self);
				} else {
					node.removeClass('field_modified');
				}
				if (this.revision.current > 0) {
					node.addClass('u-eip-modified');
				}
			};

			/**
			 * Save element to backend
			 */
			this.save = function () {
				var uri = '/udata/content/saveOptioned.json';
				$.post(uri, {data: [this.prepareDataForSubmit()]}, function (data) {
					collection.submitCallback(data);
				}, 'json');
			};

			/**
			 * Switch to previous revision
			 */
			this.back = function () {
				this.revision.back();
				var newState = this.revision.getCurrent();
				node.html(newState.html);
				props = newState.props;
				this.showOriginalMarkup();
				node.removeClass('editing');
				if (!self.hadChanged()) {
					node.removeClass('field_modified');
				}
			};

			/**
			 * Switch to next revision
			 */
			this.forward = function () {
				this.revision.forward();
				var newState = this.revision.getCurrent();
				node.html(newState.html);
				props = newState.props;
				this.showOriginalMarkup();
				node.removeClass('editing');
				if (self.hadChanged()) {
					node.addClass('field_modified');
				}
			};

			/**
			 * Check if any changes were made
			 */
			this.hadChanged = function () {
				if (!hasData) { return false; }
				if (props.length !== originalProps.length) { return true; }
				var i;
				for (i = props.length - 1; i >= 0; i--) {
					if (props[i].toDelete) { return true; }
					if (props[i].rel != originalProps[i].rel) { return true; }
					if (props[i].float != originalProps[i].float) { return true; }
					if (props[i].int != originalProps[i].int) { return true; }
				}
				return false;
			};

			/**
			 * Submit changes to server
			 */
			this.prepareDataForSubmit = function () {
				var newProps = [],
					i;
				if (!self.hadChanged()) { return false; }
				for (i = 0; i < props.length; i++) {
					if (!props[i].toDelete) {
						delete props[i].toDelete;
						newProps.push(props[i]);
					}
				}
				return {
					'element-id': elementId,
					'field-id'	: fieldId,
					'field-name': fieldName,
					'value'		: newProps
				};
			};

			/**
			 * Copy props to originalProps
			 */
			this.updateData = function (data, newGuide) {
				var i;

				if (!hasData) { return false; }

				originalProps = [];
				for (i in data) {
					if (i && data[i]) {
						originalProps.push(_hardCopy(data[i]));
					}
				}
				props = _hardCopy(originalProps);

				guide = [];
				guideHashMap = {};

				for (i in newGuide) {

					guide.push({
						'id': i,
						'name': newGuide[i]
					});

					guideHashMap[i] = newGuide[i];
				}

				self.showOriginalMarkup();
			};

			/**
			 * Init control on node, bind events
			 */
			this.init = function () {
				active = false;

				elementId = node.attr('umi:element-id');
				fieldId = node.attr('umi:fieldId');
				this.fieldId = fieldId;
				fieldName = node.attr('umi:fieldName');

				emptyTxt = node.attr('umi:empty') || getLabel('js-cms-eip-editor_custom-add_properties');

				if (!elementId || !fieldId || !fieldName) { return false; }

				if (!node.find('.opt_prop').length) {
					node.append('<div class="u-eip-empty-field"> ' + emptyTxt + '</div>');
				}

				node.bind('click', function (e) {
					if (!uAdmin.eip.enabled) { return; }
					if (!active) {
						active = true;
						self.getData(self.initEditing);
					}
					iWasClicked = true;

					if (!hasData) { return; }

					var target = $(e.target);
					if (target.closest('.opt_prop_rel, .opt_prop_add').length) {
						var clickedRel = target.closest('.opt_prop_rel, .opt_prop_add'),
							relId = clickedRel.attr('data-rel');

						if (clickedRel.hasClass('with_val')) {
							self.cleanAllSelects();
							clickedRel.removeClass('with_val');
							clickedRel.html(self.makeSelectFromGuide(relId));


						}
					}

					if (target.hasClass('add_item_to_guide_button')) {
						var newGuideItem = target.prev().val(),
							searchFlag = true;

						if (newGuideItem !== '') {
							$.each(guide, function (index, val) {
								if (val.name === newGuideItem) {
									searchFlag = false;
									return false;
								}
							})

							if (searchFlag) {
								guide.push({
									'id': '_' + newGuideItem,
									'name': newGuideItem
								});

								guideHashMap['_' + newGuideItem] = newGuideItem;
								target.parent().prev().append('<option value="_' + newGuideItem + '" selected="selected">' + newGuideItem + '</option>');
								self.cleanAllSelects();
							}
						}
					}
				});

				$('html').bind('click', function () {
					if (iWasClicked) {
						iWasClicked = false;
						return;
					}
					if (active) { self.finishEditing(); }
				});
			};

			self.init();
		};

		/**
		 * Optioned versions control
		 * @type {Array}
		 */
		EditOptioned.prototype.revision = [];

		jQuery.extend(EditOptioned.prototype.revision, new RevisionMixin());

		/**
		 * Versions control mixin
		 * @constructor
		 */
		function RevisionMixin () {

			/**
			 * current revision number
			 * @type {Number}
			 */
			this.current = -1;

			/**
			 * get last revision number
			 * @return {Number}
			 */
			this.getLastId = function () {
				var max = 0;
				for (var i = 0; i < this.length; i++) {
					if (i > max) {
						max = i;
					};
				};
				return max;
			};

			/**
			 * get next revision number
			 * @return {Number}
			 */
			this.getNextId = function () {
				var next = this.current,
					last = this.getLastId();
				if (next < last)
					do {
						next++;
					} while (!this[next] && next != last);
				return next;
			};

			/**
			 * get previous revision number
			 * @return {Number}
			 */
			this.getPreviousId = function () {
				var prev = this.current;
				if (prev > 0)
					do {
						prev--;
					} while (!this[prev] && prev > 0);
				return prev;
			};

			/**
			 * get revision contents by number
			 * @param revNumber
			 * @return {*}
			 */
			this.get = function (revNumber) {
				return this[revNumber];
			};

			/**
			 * get current revision contents
			 * @return {*}
			 */
			this.getCurrent = function () {
				return this.get(this.current);
			};

			/**
			 * add new revision
			 * @param optioned
			 * @return {Number}
			 */
			this.add = function (optioned) {
				this.truncateToCurrent();
				this.current++;
				this[this.current] = {
					html: optioned.getNode().html(),
					props: optioned.getProps()
				};
				if (this.current > 0) {
					this.pushToEipQueue(optioned);
				}
				return this.current;
			};

			this.pushToEipQueue = function (optioned) {
				uAdmin.eip.queue.add({
					custom: true,
					id: optioned.fieldId + this.current,
					node: optioned.getNode().get(0),
					target: optioned
				});
			}

			/**
			 * remove revision by number
			 * @param revNumber
			 */
			var remove = function (revNumber) {
				if (!revNumber) revNumber = this.current;
				delete this[revNumber];
				if (revNumber == this.current) {
					this.current = this.getPreviousId();
				};
			};

			/**
			 * remove last revision
			 */
			this.removeLast = function () {
				remove(this.current);
				uAdmin.eip.queue.back();
			};

			/**
			 * truncate revisions collection to given revision number
			 * @param revNumber
			 */
			this.truncate = function (revNumber) {
				var needToRenewCurrent = false;
				for (var i = 0; i < this.length; i++) {
					if (i > revNumber) {
						delete this[i];
						if (i == this.current) {
							needToRenewCurrent = true;
						};
					};
				};
				if (needToRenewCurrent) {
					this.current = this.getLastId();
				};
			};

			/**
			 * truncate revisions collection to current revision
			 */
			this.truncateToCurrent = function () {
				this.truncate(this.current);
			};

			/**
			 * switch to previous revision
			 */
			this.back = function () {
				this.current = this.getPreviousId();
			};

			/**
			 * switch to next revision if exists
			 * @param node
			 */
			this.forward = function (node) {
				this.current = this.getNextId();
			}
		}

	}, 'eip');

	uAdmin.onLoad('eip', function () {

		uAdmin.eip.editor.draw.file = function(self, image) {
			var folder = './images/cms/data/',
				fileName = '', file, data, params;

			self.finish = function (apply) {
				if (apply) {
					if (self.info.node.tagName == 'IMG') {
						self.info.node.src = self.info.new_value.src;
					} else if (image) {
						self.info.node.style.backgroundImage = 'url(' + self.info.new_value.src + ')';
					} else {
						self.info.node.innerText = self.info.new_value.src.substr(self.info.new_value.src.lastIndexOf('/') + 1);
					}
					self.commit();
					if (uAdmin && uAdmin.eip && uAdmin.eip.reinitEmptyLists) {
						uAdmin.eip.reinitEmptyLists();
					}
				}
				self.cleanup();
			};

			if (self.info.old_value) {
				if (self.info.old_value.src == undefined) {
					self.info.old_value = {
						src: self.info.old_value
					}
				}
				fileName = self.info.old_value.src.split(/\//g).pop();
				folder = '.' + self.info.old_value.src.substr(0, self.info.old_value.src.length - fileName.length - 1);
			}

			if (self.files && self.files.length) {
				file = self.files[0];

				file.folder = folder;
				if (self.info.old_value) {
					file.file = self.info.old_value.src;
				}
				if (image) {
					file.image = 1;
				}

				data = jQuery.ajax({
					url: "/admin/data/uploadfile/",
					async : false,
					data : file,
					type : 'POST',
					dataType : 'json'
				});

				data = JSON.parse(data.responseText);

				if (data.file.path) {
					self.new_value = data.file.path;
					self.finish(true);
				}
				else self.finish();
			}
			else {
				params = {
					folder : folder,
					file   : self.info.old_value ? self.info.old_value.src : ''
				};
				data = jQuery.ajax({
					url: "/admin/data/get_filemanager_info/",
					async : false,
					data : params,
					type : 'POST',
					dataType : 'json'
				});
				data = JSON.parse(data.responseText);

				var qs = 'folder=' + folder;
				if (self.info.old_value) qs += '&file=' + self.info.old_value.src;
				if (image) qs += '&image=1';

				var fm = {
					flash :  {
						height : 460,
						url    : "/styles/common/other/filebrowser/umifilebrowser.html?" + qs
					},
					elfinder : {
						height : 600,
						url    : "/styles/common/other/elfinder/umifilebrowser.html?" + qs + '&lang=' + data.lang + '&file_hash=' + data.file_hash + '&folder_hash=' + data.folder_hash
					}
				};

				jQuery.openPopupLayer({
					name   : "Filemanager",
					title  : getLabel('js-file-manager'),
					width  : 1200,
					height : fm[data.filemanager].height,
					url    : fm[data.filemanager].url,
					afterClose : function (file) {
						if (file) {
							if (typeof file == 'object') file = file[0];
							self.info.new_value = file ? {src: file.url} : '';
							self.finish(true);
						}
						else self.finish();
					}
				});
				jQuery('#popupLayer_Filemanager .popupBody').append(uAdmin.wysiwyg.getFilemanagerFooter(data.filemanager));
			}
			return self;

		};


		uAdmin.eip.editor.draw.text = function(self, allowHTMLTags) {

			var node = jQuery(self.info.node), source = node.html();
			if (allowHTMLTags && self.info.old_value!=='') self.info.old_value = self.info.old_value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
			if (!(self.info.field_type == 'wysiwyg' && uAdmin.wysiwyg.settings.inline)) {
				node[0].innerHTML = self.info.old_value || '&nbsp;';
				node.attr('contentEditable', true);
			}
			node.blur().focus();

			self.finish = function (apply) {
				self.finish = function () {};
				jQuery(document).unbind('keyup');
				//jQuery(document).unbind('keydown');
				jQuery(document).unbind('click');

				node.attr('contentEditable', false);
				jQuery('.u-eip-sortable').sortable('enable');

				if (apply) {
					if (!allowHTMLTags && self.info.field_type != 'wysiwyg') {
						var html = node.html();
						if (html.match(/\s<br>$/g)) html = html.replace(/<br>$/g, '');
						var originalHtml = html;
						html = html.replace(/<!--[\w\W\n]*?-->/mig, '');
						html = html.replace(/<style[^>]*>[\w\W\n]*?<\/style>/mig, '');
						html = html.replace(/<([^>]+)>/mg, '');
						html = html.replace(/(\t|\n)/gi, " ");
						html = html.replace(/[\s]{2,}/gi, " ");
						if (jQuery.browser.safari) {
							html = html.replace(/\bVersion:\d+\.\d+\s+StartHTML:\d+\s+EndHTML:\d+\s+StartFragment:\d+\s+EndFragment:\d+\s*\b/gi, "");
						}
						if (html != originalHtml) node.html(html);
					}
					self.info.new_value = node.html();

					if (self.info.new_value == ' ' || self.info.new_value == '&nbsp;' || self.info.new_value == '<p>&nbsp;</p>') {
						self.info.new_value = '';
						node.html(self.info.new_value);
					}

					if (self.info.field_type != 'wysiwyg' && self.info.field_type != 'text') {
						self.info.new_value = jQuery.trim(self.info.new_value);
						if (self.info.new_value.substr(-4, 4) == '<br>') {
							self.info.new_value = self.info.new_value.substr(0, self.info.new_value.length -4);
						}
					}
					else {
						self.info.new_value = self.info.new_value.replace(/%[A-z0-9_]+(?:%20)+[A-z0-9_]+%28[A-z0-9%]*%29%/gi, unescape);
						self.info.new_value = self.info.new_value.replace(/\/\/\s\]\]>/gi, '// ]] >');
					}

					switch(self.info.field_type) {
						case "int":
						case "float":
						case "price":
							if(node.data('rate')){
								var newPrice = self.info.new_value * node.data('rate') / node.data('nominal') * ( 1 + node.data('percent') / 100);
								node.parent().find(".price_preview").html(newPrice.toFixed(2));

							}
							break;
						case "counter":
							self.info.new_value = parseFloat(self.info.new_value);
							break;
					}

					self.commit();
				}
				else node.html(source);
				self.cleanup();
			};

			self.bindFinishEvent();

			var prevWidth = node.width(),
				prevHeight = node.height(),
				timeoutId = null;

			jQuery('.u-eip-sortable').sortable('disable');
			node.focus();

			var prevLength = null;

			jQuery(document).bind('keyup', function (e) {
				if (prevWidth != node.width() || prevHeight != node.height()) {
					prevWidth = node.width();
					prevHeight = node.height();

					if (timeoutId) clearTimeout(timeoutId);
					timeoutId = setTimeout(function () {
						uAdmin.eip.normalizeBoxes();
						timeoutId = null;
					}, 1000);
				}

				if (e.keyCode == 46) {
					if (prevLength == node.html().length) {
						if (prevLength == 1) {
							node.html('');
						}
					}
				}
			}).bind('keydown', function (e) {
				if (e.keyCode == 46) {
					prevLength = node.html().length;
				}

				//Enter key - save content
				if (e.keyCode == 13 && self.info.field_type != 'wysiwyg' && self.info.field_type != 'text') {
					self.finish(true);
					return false;
				}

				//Esc key - cancel and revert original value
				if (e.keyCode == 27) {
					self.finish(false);
					return false;
				}

				return true;
			});
			return self;
		};

		uAdmin.eip.editor.draw.extragoodssymlink = function(self) {
			// Loading of old_value
			var params = {};

			var elementId = jQuery(self.info.node).attr("umi:"+self.info.type+"-id");
			if (!elementId || elementId.match(/^new/)) {
				elementId =
					jQuery(self.info.node).attr('umi:clone-source-id') ||
					jQuery(self.info.node).parents("[umi\\:"+self.info.type+"-id]").first().attr("umi:clone-source-id") ||
					self.info.id;
			}

			params[self.info.type + '-id'] = elementId;
			params['field-name'] = self.info.field_name;
			params.qt = new Date().getTime();

			jQuery.ajax({
				async : false,
				type : 'POST',
				url : '/admin/content/editValue/load.json',
				dataType : 'json',
				data : params
			}).done(function(response) {
				data = response;
			});

			if (data.error) {
				uAdmin.eip.message(data.error);
				return false;
			}

			if (data.user && data.user.type == 'guest') {
				uAdmin.eip.message(getLabel('error-auth-required'));
				uAdmin.eip.closeMessages();
				uAdmin.session.sessionCloseMessage(true);
				return false;
			}

			self.info.old_value = {};

			// Request to "load.json" will return data as for symlink control.
			for(i in data.property.page) {
				self.info.old_value[data.property.page[i].id] = data.property.page[i].name;
			}

			// Drawing control
			jQuery(document).one('mouseup', function () {
				setTimeout(function () {
					self.bindFinishEvent();
				}, 100);
			});
			setTimeout(function () {
				jQuery(document).die('mouseup');
				self.bindFinishEvent();
			}, 1000);

			var h_type = jQuery(self.info.node).attr('umi:type') ? jQuery(self.info.node).attr('umi:type').split('::') : [];
			var searchBox = jQuery('<div><div id="symlinkInput' + self.info.id + '" /></div>').attr({
				"class":'eip-ui-element'
			}).insertAfter(self.info.node);

			if (typeof symlinkControlCustom == 'undefined') {
				jQuery('<script src="/styles/common/js/extragoodssymlink.control.custom.js" type="text/javascript" charset="utf-8"></script>').appendTo('head');
			}

			var control = new symlinkControlCustom(self.info.id, (h_type[0] || null), h_type, {
				inputName      : self.info.field_name + '[]',
				fadeColorStart : [255, 255, 225],
				fadeColorEnd   : [255, 255, 255]
			});

			for (var i in self.info.old_value) {
				control.addItem(i, self.info.old_value[i], h_type, '');
			}

			uAdmin.eip.applyStyles(self.info.node, searchBox[0]);
			searchBox.css({'height': 'auto'});
			jQuery(self.info.node).hide();


			self.finish = function () {
				var inputs = jQuery('input[name="' + self.info.field_name + '[]"]'), value = [];
				jQuery(self.info.node).show();

				self.info.new_value = {};
				for (i = 0; i < inputs.length; i++) {
					if (inputs[i].value) {
						self.info.new_value[inputs[i].value] = jQuery('ul li span', searchBox)[i - 1].innerHTML;
						value.push(self.info.new_value[inputs[i].value]);
					}
				}
				self.info.node.innerHTML = value.join(', ');
				self.commit();

				try {
					searchBox.resizable('destroy');
				} catch (e) {
					searchBox.resizable({disabled: true});
				}

				searchBox.remove();
				jQuery('#u-ep-search-trigger').remove();

				self.cleanup();
			};

			control.loadItems();
			return self;
		};

		uAdmin.eip.editor.draw.templates = function(self) {
			jQuery(document).one('mouseup', function () {
				setTimeout(function () {
					self.bindFinishEvent();
				}, 100);
			});
			setTimeout(function () {
				jQuery(document).die('mouseup');
				self.bindFinishEvent();
			}, 1000);

			var position = uAdmin.eip.nodePositionInfo(self.info.node);
			var selectBox = document.createElement('select');
			document.body.appendChild(selectBox);

			params = {};
			params['element-id'] = self.info.id;
			params['field-name'] = self.info.field_name;
			params.qt = new Date().getTime();

			jQuery.ajax({
				async : false,
				type : 'POST',
				url : '/admin/content/editValue/load.json',
				dataType : 'json',
				data : params
			}).done(function(response) {
				data = response;
			});

			if (data.error) {
				uAdmin.eip.message(data.error);
				return false;
			}

			if (data.user && data.user.type == 'guest') {
				uAdmin.eip.message(getLabel('error-auth-required'));
				uAdmin.eip.closeMessages();
				uAdmin.session.sessionCloseMessage(true);
				return false;
			}

			var old_value = {};

			for(i in data.property.item) {
				old_value[data.property.item[i].id] = data.property.item[i].name;
			}
			guideId  = data.property['guide-id'];


			jQuery(selectBox).attr('class', 'eip-ui-element');
			jQuery(selectBox).css({
				'position':		'absolute',
				'left':			position.x,
				'top':			position.y,
				'z-index':		1100
			});

			uAdmin.eip.applyStyles(self.info.node, selectBox, false);

			jQuery(self.info.node).css('visibility', 'hidden');

			for (var i in old_value) {
				var option = document.createElement('option');
				jQuery(option).attr('value', i);
				jQuery(option).attr('disabled', 'disabled');
				jQuery(option).html(old_value[i]);
				selectBox.appendChild(option);
			}

			jQuery(selectBox).focus();
			jQuery(selectBox).attr('name', 'rel_input');
			jQuery(selectBox).attr('id', 'relationSelect' + guideId);

			if (typeof relationControl == 'undefined') {
				jQuery('<script src="/styles/common/js/relation.control.js" type="text/javascript" charset="utf-8"></script>').appendTo('head');
			}

			var control = new relationControl(guideId, null, false, '/admin/data/guide_items_all/');

			jQuery(window).bind("resize.ns"+guideId, function() {
				var position = uAdmin.eip.nodePositionInfo(self.info.node);
				jQuery(selectBox).css({
					'left':			position.x,
					'top':			position.y
				});
			});

			self.finish = function () {

				self.info.new_value = control.getValue();
				self.commit();

				var value = self.info.new_value;

				for(var i in value) {
					self.info.node.setAttribute('umi:selected-id', i);
					self.info.node.innerHTML = value[i];
				}

				self.info.node.style.visibility = 'visible';

				try {
					jQuery(selectBox).resizable('destroy');
				} catch (e) {
					jQuery(selectBox).resizable({disabled: true});
				}

				jQuery(selectBox).remove();
				jQuery('#u-ep-search-trigger').remove();
				jQuery(window).unbind("resize.ns"+guideId);
				uAdmin.eip.message(getLabel('js-cms-eip-editor_custom-need-reboot-after-save'));
				self.cleanup();
			};
			control.loadItemsAll();
			return self;
		};

		uAdmin.eip.editor.draw.options = function(self) {
			jQuery(document).one('mouseup', function () {
				setTimeout(function () {
					self.bindFinishEvent();
				}, 100);
			});
			setTimeout(function () {
				jQuery(document).die('mouseup');
				self.bindFinishEvent();
			}, 1000);

			var position = uAdmin.eip.nodePositionInfo(self.info.node);
			var selectBox = document.createElement('select');
			document.body.appendChild(selectBox);

			params = {};
			params['element-id'] = self.info.id;
			params['field-name'] = self.info.field_name;
			params.qt = new Date().getTime();

			jQuery.ajax({
				async : false,
				type : 'POST',
				url : '/admin/content/editValue/load.json',
				dataType : 'json',
				data : params
			}).done(function(response) {
				data = response;
			});

			if (data.error) {
				uAdmin.eip.message(data.error);
				return false;
			}

			if (data.user && data.user.type == 'guest') {
				uAdmin.eip.message(getLabel('error-auth-required'));
				uAdmin.eip.closeMessages();
				uAdmin.session.sessionCloseMessage(true);
				return false;
			}

			var old_value = {};

			for(i in data.property.item) {
				old_value[data.property.item[i].id] = data.property.item[i].name;
			}
			guideId  = data.property['guide-id'];

			jQuery(selectBox).attr('class', 'eip-ui-element');
			jQuery(selectBox).css({
				'position':		'absolute',
				'left':			position.x,
				'top':			position.y,
				'z-index':		1100
			});

			uAdmin.eip.applyStyles(self.info.node, selectBox, false);

			jQuery(self.info.node).css('visibility', 'hidden');

			for (var i in old_value) {
				var option = document.createElement('option');
				jQuery(option).attr('value', i);
				jQuery(option).attr('disabled', 'disabled');
				jQuery(option).html(old_value[i]);
				selectBox.appendChild(option);
			}

			jQuery(selectBox).attr('class', 'eip-ui-element');
			jQuery(selectBox).css({
				'position':		'absolute',
				'left':			position.x,
				'top':			position.y,
				'z-index':		1100
			});

			uAdmin.eip.applyStyles(self.info.node, selectBox, false);

			jQuery(self.info.node).css('visibility', 'hidden');
			jQuery(selectBox).focus();
			jQuery(selectBox).attr('name', 'rel_input');
			jQuery(selectBox).attr('id', 'relationSelect' + guideId);

			if (typeof relationControl == 'undefined') {
				jQuery('<script src="/styles/common/js/relation.control.js" type="text/javascript" charset="utf-8"></script>').appendTo('head');
			}

			var masterElementQuery = '#' + self.info.id + '_templates';
			var masterElement = jQuery(masterElementQuery);
			var masterSelectedObjectId = masterElement.attr('umi:selected-id');

			var control = new relationControl(guideId, null, false, '/admin/data/getOptionsByTemplate/' + guideId + '/' + masterSelectedObjectId + '/');

			jQuery(window).bind("resize.ns"+guideId, function() {
				var position = uAdmin.eip.nodePositionInfo(self.info.node);
				jQuery(selectBox).css({
					'left':			position.x,
					'top':			position.y
				});
			});

			self.finish = function () {
				var value = [];
				self.info.new_value = control.getValue();
				self.commit();

				for (var i in self.info.new_value) {
					value.push(self.info.new_value[i]);
				}
				self.info.node.innerHTML = value.join(', ');
				self.info.node.style.visibility = 'visible';

				try {
					jQuery(selectBox).resizable('destroy');
				} catch (e) {
					jQuery(selectBox).resizable({disabled: true});
				}

				jQuery(selectBox).remove();
				jQuery('#u-ep-search-trigger').remove();
				jQuery(window).unbind("resize.ns"+guideId);
				uAdmin.eip.message(getLabel('js-cms-eip-editor_custom-need-reboot-after-save'));
				self.cleanup();
			};
			control.loadItemsAll();
			return self;
		};

		uAdmin.eip.optionedFieldsCollection.init();

		if (typeof initBuilder === 'undefined' && jQuery.cookie('demo-wizard')) {
			uAdmin.eip.showWizard();
		}

	});

})();
function cmsCustomsClass() {
}

cmsCustomsClass.prototype.uAdminInit = function () {
	uAdmin.isBuilderEnabled = typeof initBuilder !== 'undefined';
};

cmsCustoms = new cmsCustomsClass();
/**
 * Extend WYSIWYG for cloud controller
 */
(function($) {

	uAdmin('getRepositionToolbarWidth', function() {
		return 1051;
	}, 'wysiwyg');

	uAdmin('umiTreeLink', function(field_name, url, type, win) {
		var domain_floated    = window.pageData ? window.pageData.domain : '';
		var domain_floated_id = window.pageData ? window.pageData.domain_id : '';
		var lang_id           = window.pageData.lang_id;
		var sTreeLinkUrl = "";
		var iPageHight = 0;
		if (tinyMCE.majorVersion < 4) {
			sTreeLinkUrl = "/js/cms/wysiwyg/tinymce/jscripts/tiny_mce/themes/umi/treelink.html?domain="+domain_floated+"&domain_id=" + domain_floated_id + "&lang_id="+lang_id;
			iPageHight = 308;
		} else {
			sTreeLinkUrl = "/js/cms/wysiwyg/tinymce4/skins/lightgray/treelink.html?domain="+domain_floated+"&domain_id=" + domain_floated_id + "&lang_id="+lang_id;
			iPageHight = 320;
		}
		tinyMCE.activeEditor.windowManager.open({
			url    : sTreeLinkUrl,
			title  : getLabel('js-choose-page'),
			width  : 525,
			height : iPageHight,
			inline         : true,
			scrollbars	   : false,
			resizable      : false,
			maximizable    : false,
			close_previous : false
		}, {
			window    : win,
			input     : field_name,
			editor_id : tinyMCE.activeEditor.id
		});
		return false;
	}, 'wysiwyg');
	
	uAdmin('getTinymceUmiruDestroyHolderContent', function(newNode) {
		if (jQuery.browser.msie && (typeof document.documentMode == 'undefined' || document.documentMode < 7)) {
			return window.frames[window.frames.length-1].document.body.innerHTML;
		}

		var frame = jQuery('iframe', newNode)[0];
		return frame.contentDocument.body.innerHTML;
	}, 'wysiwyg');

}(jQuery));
