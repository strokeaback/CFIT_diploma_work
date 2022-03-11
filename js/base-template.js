/*!
 * Bootstrap.js by @fat & @mdo
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);

/*
 * Project: Twitter Bootstrap Hover Dropdown
 * Author: Cameron Spear
* Contributors: Mattia Larentis
*
* Dependencies?: Twitter Bootstrap's Dropdown plugin
* A simple plugin to enable twitter bootstrap dropdowns to active on hover and provide a nice user experience.
* No license, do what you want. I'd love credit or a shoutout, though.
* http://cameronspear.com/blog/twitter-bootstrap-dropdown-on-hover-plugin/
*/
(function(e,t,n){var r=e();e.fn.dropdownHover=function(n){r=r.add(this.parent());return this.each(function(){var s=e(this),o=s.parent(),u={delay:500,instantlyCloseOthers:!0},a={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},f=e.extend(!0,{},u,n,a),l;o.hover(function(e){if(!o.hasClass("open")&&!s.is(e.target))return!0;if(i()){f.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(l);o.addClass("open")}},function(){i()&&(l=t.setTimeout(function(){o.removeClass("open")},f.delay))});s.hover(function(){if(i()){f.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(l);o.addClass("open")}});o.find(".dropdown-submenu").each(function(){var n=e(this),r;n.hover(function(){if(i()){t.clearTimeout(r);n.children(".dropdown-menu").show();n.siblings().children(".dropdown-menu").hide()}},function(){var e=n.children(".dropdown-menu");i()?r=t.setTimeout(function(){e.hide()},f.delay):e.hide()})})})};var i=function(){return!e("#cwspear-is-awesome").is(":visible")};e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover();e('<div class="navbar" style="visibility:hidden;position:fixed"><div class="btn-navbar" id="cwspear-is-awesome">.</div></div>').appendTo("body")});var s=".dropdown-submenu:hover>.dropdown-menu{display:none}",o=document.createElement("style");o.type="text/css";o.styleSheet?o.styleSheet.cssText=s:o.appendChild(document.createTextNode(s));e("head")[0].appendChild(o)})(jQuery,this);

/**
* bootstrap-modal.js by @fat & @mdo
* plugins: bootstrap-modal.js
* Copyright 2013 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery)


function UTF8_to_CP1251_URL(sValue) {
    var    text = "", Ucode, ExitValue, s;
    for (var i = 0; i < sValue.length; i++) {
        s = sValue.charAt(i);
        Ucode = s.charCodeAt(0);
        var Acode = Ucode;
        if (Ucode > 1039 && Ucode < 1104) {
            Acode -= 848;
            ExitValue = "%" + Acode.toString(16);
        }
        else if (Ucode == 1025) {
            Acode = 168;
            ExitValue = "%" + Acode.toString(16);
        }
        else if (Ucode == 1105) {
            Acode = 184;
            ExitValue = "%" + Acode.toString(16);
        }
        else if (Ucode == 32) {
            Acode = 32;
            ExitValue = "%" + Acode.toString(16);
        }
        else if (Ucode == 10){
            Acode = 10;
            ExitValue = "%0A";
        }
        else {
            ExitValue = s;
        }
        text = text + ExitValue;
    }
    return text;
}
/**
 * Перезагружает CAPTCHA/reCAPTCHA в форме
 * @param {jQuery} $form целевая форма
 */
function resetCaptcha (form) {
	var recaptcha = $(".g-recaptcha-umi", form);
	var captchaImg = $('.captcha img', form);
	if (recaptcha.length > 0) {
		form.data('recaptcha-verified', false);
		grecaptcha.reset(form.data("recaptcha-widget-id"));
	} else {
		captchaImg.attr('src', '/captcha.php?' + Math.random());
	}
}
/**
 * Проверяет заполненность полей
 * @param {JQuery} $elements поля формы
 * @return {Boolean}
 */
function validateRequired($elements) {
	var validationResult = true;
	$elements.each(function() {
		if ($(this)[0].type == 'checkbox' && !$(this).attr('checked')) {
			validationResult = false;
		} else if ($.trim($(this).val()) == '') {
			validationResult = false;
		}
	});
	return validationResult;
}
/**
 * Проверяет корректность номера телефона для Qiwi и возвращает скорректированный вариант.
 * Qiwi поддерживает только мобильные телефонные номера России, Казахстана, Украины и Белоруси, поэтому 11 или 12 цифр.
 * Юкасса требует эти номера без + в начале.
 * @param {String} phone строка с номером телефона
 * @return {Boolean|String}
 */
function validateQiwiPhone(phone) {
	var filteredPhone = phone.replace(/[^\d]/g, ""),
		trimmedPhone = filteredPhone.replace(/[\s|+]/g, ""),
		phoneLength = trimmedPhone.length,
		minimalCountryCodeLength = 1,
		maximalCountryCodeLength = 2,
		regionCodeLength = 3,
		abonentNumberLength = 7,
		regionAndAbonentNumberLength = regionCodeLength + abonentNumberLength,
		minimalNumberLength = regionAndAbonentNumberLength + minimalCountryCodeLength,
		maximalNumberLength = regionAndAbonentNumberLength + maximalCountryCodeLength,
		localRussiaCountryCode = "8",
		internationalRussiaCountryCode = "7",
		countryPart = '', regionPart = '', abonentPart = '', formattedPhone = '';

	if (phoneLength >= minimalNumberLength && phoneLength <= maximalNumberLength) {
		countryPart = trimmedPhone.substring(0, phoneLength - regionAndAbonentNumberLength);
		regionPart = trimmedPhone.substring(phoneLength - regionAndAbonentNumberLength, phoneLength - abonentNumberLength);
		abonentPart = trimmedPhone.substring(phoneLength - abonentNumberLength, phoneLength);
	} else {
		return false;
	}

	if (countryPart === localRussiaCountryCode) {
		countryPart = internationalRussiaCountryCode;
	}

	formattedPhone = countryPart + regionPart + abonentPart;

	if (formattedPhone.length >= minimalNumberLength) {
		filteredPhone = formattedPhone;
	}

	return filteredPhone;
}
function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}
function setCookie (name, value, expires, path, domain, secure) {
	document.cookie = name + "=" + escape(value) +
		((expires) ? "; expires=" + expires : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
}
function appendCookie (name, value) {
	var currentCookie = '';
	if (getCookie(name)) {
		currentCookie = getCookie(name);
	}

	if (currentCookie.length > 0) {
		currentCookie += '|' + value;

		deleteCookie(name);
		setCookie(name, currentCookie, 0, '/');
	}
}
function deleteCookie(name) {
	var mydate = new Date();
	mydate.setTime(mydate.getTime() - 1);

	setCookie(name, '', mydate.toGMTString(), '/');
}
function removeFromCookie(name, value) {
	var currentCookie = '';
	if (getCookie(name)) {
		currentCookie = getCookie(name);
	}

	if (currentCookie.length > 0) {
		var arrCookie = currentCookie.split('|');

		var index = $.inArray(value.toString(), arrCookie);
		if (index > -1) {
			arrCookie.splice(index, 1);
		}

		var stringCookie = arrCookie.join('|');

		deleteCookie(name);
		setCookie(name, stringCookie, 0, '/');
	}
}
function now() {
	return +new Date;
}
var _jsonc = now();
function jsonp(url, data, callback) {
	var head   = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	var callbackName = "jsonp" + _jsonc++;
	window[ callbackName ] = function(tmp){
		if(callback) callback(tmp);
		window[ callbackName ] = undefined;
		try{ delete window[ callbackName ]; } catch(e){}
		if ( head ) head.removeChild( script );
	};
	var query  = [];
	for(var i in data) {
		query.push(i + "=" + encodeURIComponent(data[i]));
	}
	script.src = url + (url.indexOf("?") != -1 ? "&" : "?") +
				 query.join("&") + (query.length ? "&" : "") +
				 "json-callback=" + callbackName;
	script.charset = "utf-8";
	head.appendChild(script);
}
cdek = {
	init : function() {
		$('input[name=tariffId]').click(function() {
			var $cityId = parseInt($('input[name=delivery_city_id]').val());
			$('input[name=delivery_tariff_id]').val($(this).val());
			if ($cityId > 0 && parseInt($(this).data('pvz'))) {
				$('.pvz-details').show();
				$('.pvz').show();
			} else {
				$('.pvz-details').hide();
				$('.pvz').hide();
			}
			cdek.update();
		});

		$("input[name=dest_city]").autocomplete({
			source: function(request,response) {
				$.ajax({
					url: "https://api.cdek.ru/city/getListByTerm/jsonp.php?callback=?",
					dataType: "jsonp",
					data: {
						q: function () { return $("input[name=dest_city]").val() },
						name_startsWith: function () { return $("input[name=dest_city]").val() }
					},
					success: function(data) {
						response(data && data.geonames && data.geonames.length ?
							$.map(data.geonames, function(item) {
								return {
									label: item.name,
									value: item.name,
									id: item.id
								}
							}) : {}
						);
					}
				});
			},
			minLength: 1,
			select: function(event,ui) {
				var isCdek = $('select[name=delivery]').find(":selected").attr('data-is-cdek');
				if (isCdek) {
					$('input[name=delivery_city_id]').val(ui.item.id);
					if (parseInt($('input[name=tariffId]:checked').data('pvz'))) {
						$('.pvz-details').show();
						$('.pvz').show();
					}
					cdek.showPvz(ui.item.id);
					cdek.update();
				}
			}
		});

		$('select[name=pvz]').change(function() {
			$('.pvz-details').html('');
			$('.pvz-errors').html('');
			var $selected = $("select[name=pvz] option:selected");
			if ($selected.val() == 0) {
				return;
			}

			$('input[name=delivery_pvz_id]').val($selected.val());
			$('.pvz-details').append("<strong>Адрес: </strong>" + $selected.data('address') + "<br />");
			$('.pvz-details').append("<strong>Время работы: </strong>" + $selected.data('work-time') + "<br />");
			$('.pvz-details').append("<strong>Телефон: </strong>" + $selected.data('phone') + "<br />");
		});
	},

	showPvz : function(cityId) {
		$.ajax({
			url: "/emarket/getCDEKPVZList/" + cityId + "/",
			dataType: "json",
			success: function(data) {

				$('select[name=pvz]').html('');
				$('select[name=pvz]').append($('<option />')
					.attr('value', 0)
					.text('-- Выберите пункт выдачи --')
				);
				$(data).each(function(i, elm) {
					$('select[name=pvz]').append($('<option />')
						.attr('value', elm["code"])
						.text(elm["address"])
						.attr('data-work-time', elm["work_time"])
						.attr('data-phone', elm["phone"])
						.attr('data-address', elm["address"])
						.attr('data-coord-x', elm["coordX"])
						.attr('data-coord-y', elm["coordY"])
					);
				});
				$('img.loader').remove();
				$('select[name=pvz]').show();
			},
			beforeSend: function() {
				$('.pvz-details').html('');
				$('select[name=pvz]').hide();
				$('select[name=pvz]').after('<img src="/base-img/loader.gif" alt="loading..." class="loader" />');
			}
		});
	},

	update : function() {
		var destCityId = $('input[name=delivery_city_id]').val(),
			tariffId = $('input[name=delivery_tariff_id]').val(),
			deliveryId = $('div.delivery_options select[name="delivery"]').val(),
			cityPostCode = $('input[name="dest_postcode"]').val();

		$('.delivery-details').html('');
		$('.delivery-details').attr('id', 'delivery-details' + tariffId);

		if ((destCityId =="0" && cityPostCode=="" ) || tariffId=="0" || deliveryId=="0") {
			return false;
		}
		$.ajax({
			url: "/emarket/getCDEKDeliveryPrice/",
			data: {
				destCityId: destCityId,
				tariffId: tariffId,
				deliveryId: deliveryId,
				destCityPostCode: cityPostCode
			},
			dataType: "json",
			success: function(data) {
				$('.pvz-errors').html('');
				if (typeof data['errors'] == 'object') {
					$(data['errors']).each(function(i, text) {
						$('.pvz-errors').append('<strong />').text(text);
					});
					basket.__recalculateWithModifierPrices(0);
				} else {
					$deliveryDetails = $('#delivery-details' + tariffId);
					$deliveryDetails.html('');
					$deliveryDetails.append('<strong>Стоимость доставки: </strong>' + data['price'] + ' ' + data['currency'] + '<br />');
					$deliveryDetails.append('<strong>Минимальный срок доставки (дней): </strong>' + data['deliveryPeriodMin'] + '<br />');
					$deliveryDetails.append('<strong>Максимальный срок доставки (дней): </strong>' + data['deliveryPeriodMax'] + '<br />');
					basket.__recalculateWithModifierPrices(data["price"]);
				}
				$('.price-loader').remove();
				$('.total_price_value').children().show();
			},
			beforeSend: function() {
				$('.total_price_value').children().hide();
				$('.total_price_value').append('<img src="/base-img/loader.gif" alt="loading..." class="price-loader" />');
			}
		});

	},
	validateData: function () {
		var	destCityId = $('input[name=delivery_city_id]').val(),
			tariffId = $('input[name=delivery_tariff_id]').val(),
			deliveryId = $('div.delivery_options select[name="delivery"]').val(),
			isCdek = $('select[name=delivery]').find(":selected").attr('data-is-cdek'),
			isPointSelected = $('div.cdek_options div.pvz:visible').length,
			addressError = false;

		if (isCdek) {
			if (destCityId == "0" || tariffId == "0") {
				$('.pvz-errors').append('<strong />').text(destCityId !== '0'
					? 'Не настроен тариф доставки!'
					: 'Не выбран город из списка службы доставки!');
				return false;
			}
		}

		if (isPointSelected){
			if (parseInt($('select[name="pvz"]').val()) == 0){
				$('.pvz-errors').append('<strong />').text('Не выбран пункт выдачи');
			}
		}


		if (isCdek) {
			$('#custom_address div.cdek_options input.address').each(function (id, item) {
				var $item = $(item),
					val = $item.val();

				if ((!val) && ($item.attr('name') !== 'dest_flat') && !isPointSelected) {
					addressError = true;
				}
			})
		}

		if (addressError){
			$('.pvz-errors').append('<strong />').text('Все поля адреса, кроме номера квартиры или офиса, обязательны для заполнения');
			return false;
		}
		return true;
	},

	hasErrors : function() {
		var isCdek = $('select[name=delivery]').find(":selected").attr('data-is-cdek');

		if ( isCdek && $('.pvz-errors').text()) {
			return true;
		}

		return false;

	}
}
basket = {
    _modifierPrices: 0,
	get : function(callback) {
		basket.__request("/udata/emarket/basket.json", {}, callback);
	},
	putElement : function(id, options, callback) {
		basket.__request("/udata/emarket/basket/put/element/" + id + ".json", options, callback);
	},
	modifyItem : function(id, options, callback) {
		if(options.amount == 0) {
			this.removeItem(id, callback);
			return;
		}
		basket.__request("/udata/emarket/basket/put/item/" + id + ".json", options, callback);
	},
	removeElement : function(id, callback) {
		basket.__request("/udata/emarket/basket/remove/element/" + id + ".json", {}, callback);
	},
	removeItem    : function(id, callback) {
		basket.__request("/udata/emarket/basket/remove/item/" + id + ".json", {}, callback);
	},
	removeAll     : function(callback) {
		basket.__request("/udata/emarket/basket/remove_all.json", {}, callback);
	},
	setDeliveryOption: function(deliveryId) {
		var modifier = $('select[name=delivery] option[value=' + deliveryId + ']').attr('data-sum') || 0;
		basket.__recalculateWithModifierPrices(modifier);
		$('#purchase_block form input[name=delivery_id]').val(deliveryId);
		if ($('select[name=delivery]').find(":selected").attr('data-is-cdek') == 1){
			$('tr.cdek_details').show();
			$('#custom_address').show();

			if ($('div.field_cust_adres_dostavki').hasClass('required')) {
				$('div.field_cust_adres_dostavki').removeClass('required').addClass('required_by_adminzone');
			}

			$('div.field_cust_adres_dostavki').hide();
		} else {
			$('tr.cdek_details').hide();
			$('#custom_address').hide();

			if ($('div.field_cust_adres_dostavki').hasClass('required_by_adminzone')) {
				$('div.field_cust_adres_dostavki').removeClass('required_by_adminzone').addClass('required');
			}

			$('div.field_cust_adres_dostavki').show();
		}
		$('.pvz-errors').html('');
	},
	__recalculateWithModifierPrices: function(newModifierPrices) {
		if (newModifierPrices !== false) {
			newModifierPrices || (newModifierPrices = 0);
			newModifierPrices = parseFloat(newModifierPrices);
			var oldSum = Number(parseFloat($('#basket_summary_price').text()).toFixed(2) - basket._modifierPrices);
			basket._modifierPrices = newModifierPrices;
		} else {
			var oldSum = Number(parseFloat($('#basket_summary_price').text()).toFixed(2));
		}

		$('#basket_summary_price').text(parseFloat(parseInt((oldSum + basket._modifierPrices) * 100) / 100).toFixed(2));
	},
	__cleanupHash : function(input) {
		var output = {
			discount : typeof input.discount != 'undefined' ? input.discount : undefined,
			customer : input.customer.object.id,
			items    : input.items,
			summary  : input.summary,
			id	:input.id
		};
		return output;
	},
	__transformOptions : function(options) {
		var o = {};
		for(var i in options) {
			var k;
			if(i.toLowerCase() != "amount") k = "options[" + i + "]";
			else k = i;
			o[k] = options[i];
		}
		return o;
	},
	__request : function(url, options, callback) {
		jsonp(url, basket.__transformOptions(options),
			  function(data){
				  if(callback) callback( basket.__cleanupHash(data) );
			  });
	}
};
var application = {
	/**
	 * Перегрузка fancybox из UMI.CMS, чтобы fancybox не включался при включённом режиме редактирования
	 */
	fancybox:{
		init:function(){
			$("a.fancybox-group").fancybox({
				'transitionIn'	     : 'elastic',
				'transitionOut'	     : 'elastic',
				'titlePosition'      : 'over',
				'speedIn'		     : 600,
				'speedOut'		     : 200,
				'cyclic'             : true,
				'hideOnOverlayClick' : true,
				'showCloseButton'    : true,
				'margin'             : 15,
				'width'              : 'auto',
				'height'             : 'auto',
				'onStart'			 : function () { return !application.isEipEnabled(); },
				'onComplete'		 : function() {
					$("#fancybox-wrap").hover(function() {
						$("#fancybox-title").show();
					}, function() {
						$("#fancybox-title").hide();
					});
				}
			});
		}
	},
	placeholders:{
		init:function(app){
			$('.form_placeholder').each(function(){
				var input = $(this);
				var title = input.attr('title');
				if (input.length){
					input.focus(function(){
						if (input.hasClass('placeholder_text'))
							input.removeClass('placeholder_text').val('');
					}).blur(function(){
						if ($.trim(input.val()) == '')
							input.addClass('placeholder_text').val(title);
					});
					if ($.trim(input.val()) == ''){
						input.addClass('placeholder_text').val(title);
					}
				}
			});
			$('form').submit(function(){
				$(this).find('.placeholder_text').val('');
			});
		}
    },
	verification:{
		init:function(app){
			var self = this;

			$checkbox = $('.required').find('input:checkbox');
			$checkbox.change(function() {
				$(this).prev().val( ($(this).prop('checked')) ? 'on' : '');
			});

			self.initChangeToggle();
			self.initChangeForm();
			self.validateClientPhone();
			self.checkQiwiConditions();

			$('.site_form').submit(function(event){
				event.preventDefault();

				if ($(this).hasClass('placeholder')) {
					return false;
				}

				var result = true;
				var $form = $(this)[0];
				var $checkRecaptcha = $(this).find('.g-recaptcha-umi');
				$('input[type=hidden][name=control_check]').val('0');
				$(this).find('.required').each(function(){
					var $required = $(this).removeClass('verification_error').removeClass('email_verification_error');
					var $formElements = $(this).find('input, textarea, select');

					if (validateRequired($formElements) === false) {
						result = false;
						$required.addClass('verification_error');
					}

					if ($required.hasClass('field_email')) {
						var $input = $(this).find('input');
						$input.each(function(){
							if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/i.test($.trim($(this).val())))) {
								result = false;
								$required.addClass('email_verification_error');
							}
						});
					}
				});

				if (result === true) {
					$(".system_basket_submit .basket_submit_button").attr('disabled', true).addClass('no-hover');
					if ($(this).data("recaptcha-verified") || $checkRecaptcha.length == 0) {
						$form.submit();
					} else {
						grecaptcha.execute($(this).find(".g-recaptcha-umi").data("recaptcha-widget-id"));
					}
				}
			});
		},
		/**
		 * Проверяет подходят ли контакты пользователя для оплаты через Qiwi, если нет, то отключает кнопку оплаты
		 */
		checkQiwiConditions : function () {
			var minPhoneLength = 11;
			var maxPhoneLength = 12;
			var clientContacts = $('.contacts_hint');
			var qiwiPaysystemButton = clientContacts.parent().find('#ymoney_qw');

			if (!clientContacts.length || !qiwiPaysystemButton.length) {
				return false;
			}

			var clientPhone = clientContacts.find('.client_phone').data('value').toString();

			if (clientPhone.length < minPhoneLength || clientPhone.length > maxPhoneLength) {
				qiwiPaysystemButton.addClass('no-hover').addClass('disabled');
				qiwiPaysystemButton.attr('disabled', 'disabled');

				var errorNode = document.createElement('div');
				var wrongPhoneMessage = 'Ваш номер телефона "' + clientPhone + '" не подходит для оплаты через QIWI.';
				wrongPhoneMessage += '<br/>Требуется телефон с кодом, например: "79991112233"';
				errorNode.innerHTML = wrongPhoneMessage;
				$(errorNode).appendTo(qiwiPaysystemButton.parent().parent());

			}
		},
		/**
		 * Проверяет корректность введённого пользователем телефона в формах заказа, изменения настроек и регистрации,
		 * корректирует формат номера и выводит подсказки в страницу формы
		 */
		validateClientPhone: function () {
			var phoneInput = $('.site_form').find('.required.field_phone, .required.field_cust_phone').find('input');
			var fieldRoot = phoneInput.parent().parent();
			var errorsDiv = fieldRoot.find('.webforms_error_text');
			var hintDiv = fieldRoot.find('span.hint');
			var notValidError = "Этот телефон не подходит для оплаты через QIWI. Нужно 11 или 12 цифр в номере";
			var standardError = "Заполните обязательное поле";

			if (phoneInput.length) {
				var phone = phoneInput.val();

				if (phone.length) {
					var validPhone = validateQiwiPhone(phone);

					if (validPhone === false) {
						fieldRoot.addClass("verification_error");
						errorsDiv[0].innerHTML = notValidError;
					}
				}

				phoneInput.change(function () {
					var phone = phoneInput.val();
					hintDiv[0].innerHTML = "Введите телефон в формате 79998887766";

					if (!phone.length) {
						errorsDiv[0].innerHTML = standardError;
						return false;
					}

					var validPhone = validateQiwiPhone(phone);

					if (validPhone === false) {
						fieldRoot.addClass("verification_error");
						errorsDiv[0].innerHTML = notValidError;
						return false;
					}

					fieldRoot.removeClass("verification_error");
					errorsDiv[0].innerHTML = standardError;
					hintDiv[0].innerHTML = "Телефон приведён к нужному формату";
					phoneInput.val(validPhone);
				});
			}
		},
		/**
		 * Инициализирует скрытие\показ формы изменения контактов
		 */
		initChangeToggle: function () {
			$('.change_form_toggle').on('click', function (e) {
				e.preventDefault();

				var changeForm = $('.site_form.placeholder');

				if (!changeForm.length) {
					return false;
				}

				changeForm.toggle();
			});
		},
		/**
		 * Инициализирует работу формы изменения контактов
		 * @returns {boolean}
		 */
		initChangeForm: function () {
			var clientContacts = $('.contacts_hint');
			var changeForm = $('.change_contacts');

			if (!clientContacts.length) {
				return false;
			}

			var orderId = clientContacts.parent().find('.order_paysystem').first().attr('id');

			if (!orderId.length) {
				return false
			}

			changeForm.submit(function (e) {
				e.preventDefault();

				var result = true;
				$('input[type=hidden][name=control_check]').val('0');

				changeForm.find('.required').each(function(){
					var required = $(this).removeClass('verification_error').removeClass('email_verification_error');
					var formElements = $(this).find('input, textarea, select');

					if (validateRequired(formElements) === false) {
						result = false;
						required.addClass('verification_error');
					}

					if (required.hasClass('field_email')) {
						var input = $(this).find('input');
						input.each(function(){
							if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/i.test($.trim($(this).val())))) {
								result = false;
								required.addClass('email_verification_error');
							}
						});
					}
				});

				if (result !== true) {
					return false;
				}

				var preloader = $('.webform_ajax_preloader');
				var inputs = changeForm.find('input');
				var send_data = changeForm.serializeArray();

				preloader.show();
				inputs.prop('disabled', true);

				$.ajax({
					type: "POST",
					data: send_data,
					dataType: 'json',
					url: '/emarket/updateOrderContacts/',
					success: function(data){
						if (data.error) {
							$('.error-text')[0].innerHTML = data.error;
							preloader.hide();
							inputs.prop('disabled', false);
						} else {
							location.reload();
						}
					},
					error: function(jqXHR, textStatus, errorThrown) {
						preloader.hide();
						inputs.prop('disabled', false);
						console.log(jqXHR);
						console.log(textStatus);
						console.log(errorThrown);
					}
				});
			});
		}
    },
	ajaxMail:{
		current:{
            sending:false
        },
		init: function(app){
            var self = this;
			var orderButtons = $('.callback');
			orderButtons.each(function(){
				var button = $(this);
				self.orderButton(button);
				button.fancybox({
					'transitionIn'	     :	'elastic',
					'transitionOut'	     :	'elastic',
					'speedIn'		     :	400,
					'speedOut'		     :	400,
					'hideOnOverlayClick' : true,
					'showCloseButton'    : true,
					'width'              : 'auto',
					'height'             : 'auto',
					'padding'			 : 0,
					'titleShow'          : false,
					'onStart'			 : function () { return !application.isEipEnabled(); },
					'onComplete'         : function() {
						(function() {
							this.globalRecaptcha.init(this);
						}).call(app);
						self.initRecaptcha();
						self.initMail(self,app);
						initCaptchaRefreshButtons();
					}
				});
			});
			return true;
        },
		/**
		 * Инициализирует виджет reCaptcha для формы обратная связь
		 */
		initRecaptcha: function () {
			var $form =  $('#order_form');
			var $recaptcha = $(".g-recaptcha-umi", $form);
			var attributes;
			if ($recaptcha.length > 0) {
				attributes = {
					'sitekey'  : $recaptcha.data('sitekey'),
					'size'     : $recaptcha.data('size'),
					'callback' : $recaptcha.data('callback'),
					'badge'    : 'inline'
				}
				$form.attr('data-recaptcha-widget-id', grecaptcha.render($recaptcha[0], attributes));
				$('.recaptcha_use_info', $form).click(function(e) {
					e.preventDefault();
					$(this).parent().find('.grecaptcha-badge').toggle();
				});
			}
		},
		initMail: function(self,app){
			var form =  $('#order_form');
			var pdnCheckbox = form.find('.ajax_pdn_accept input');
			var pdnError = $('.order_form_pdn_error_text');
			form.submit(function(event){
				event.preventDefault();
				if (pdnCheckbox.length && !pdnCheckbox.attr('checked')) {
					pdnError.show();
					$('.ajax_pdn_accept').addClass('pdn_error');
					return;
				}
				if (!form.data("recaptcha-verified") && form.find('.g-recaptcha-umi').length > 0) {
					grecaptcha.execute(form.data("recaptcha-widget-id"));
					return;
				}
				pdnError.hide();
				$('.ajax_pdn_accept').removeClass('pdn_error');
				self.ajaxSendMail($('#order_form'),self,app);
			});
		},
		orderButton:function(button){
			var href = (button.attr('href') || '').replace(/#ajax#/g,'/ajax/');
			var holder = button.find('.thumbnail_holder');
			button.attr('href',href);
			if(holder.length){

			}
			button.show();
			return true;
		},
		ajaxSendMail:function(form,self,app){
			if(self.current.sending) return false;
			self.current.sending = true;
	  		
			form.find('.order_form_error').removeClass('order_form_error');
			form.find('.order_form_success').hide();
			form.find('.order_form_errors').hide();
			form.find('input[type=hidden][name=control_check]').val('0');

			var send_data = form.serializeArray();
			send_data[0].value = document.location.href;

			$.ajax({
				type: "POST",
				data: send_data,
				dataType: 'json',
				url: '/webforms/custom_order_send/',
				success: function(data){
				    if (data.status) {
				        self.errorMail(data, form, self, app);
				        self.resetCaptcha(form);
				    } else {
						self.resetForm(form);
						self.resetCaptcha(form);
						self.okMail(form, self, app);
					}
				    self.current.sending = false;
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
			return false;
		},
		/**
		 * Перезагружает CAPTCHA/reCAPTCHA в форме
		 * @param {jQuery} $form целевая форма
		 */
		resetCaptcha: function ($form) {
		    var $recaptcha = $(".g-recaptcha-umi", $form);
		    var captchaImg = $('.captcha img', $form);
		    if ($recaptcha.length > 0) {
		    	$('#order_form').data('recaptcha-verified', false);
		    	grecaptcha.reset($form.data("recaptcha-widget-id"))
		    } else {
		    	captchaImg.attr('src', '/captcha.php?' + Math.random());
		    }
		},
		/**
		 * Сбрасывает значения всех полей формы
		 * @param {jQuery} $form целевая форма
		 */
		resetForm: function($form) {
			$form.get(0).reset();
		},
		okMail:function(form, self, app){
		    form.find('.order_form_success').show();
		    form.get(0).reset();
		},
        errorMail:function(error, form, self, app){
            form.find('.order_form_errors').show();
            if(error.phone){
                form.find('.order_phone').addClass('order_form_error');
            };
            if(error.name){
                form.find('.order_name').addClass('order_form_error');
            };
            if(error.captcha !== undefined){
            	form.find('.captcha_input').addClass('order_form_error');
			}
        }
	},
	emarket:{
		constants:{
			cart: false
		},
		init:function(app, scope){
			var self = this;
			self.buttonBuy(app, self, scope);

			// Init edit in place events.
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				self.initEditInPlaceEvents();
			}

			self.constants.cart = $('#header_basket');
			if(self.constants.cart.length){
				self.cartUpdate(app,self);
			}
			$('#system_basket .system_basket_delete').click(function(){
				self.basketRemove(this.id, app, self);
				return false;
			});
			$('#system_basket .system_basket_amount').keyup(function(){
				var next = $(this).next('input');
				var old = next.val();
				next.val(this.value);
				self.basketModify($(this).attr('name'), this.value, old, app, self);
			});
			$('#purchase_block').hide();
			$('#basket_to_form').click(function(){
				if (!cdek.validateData()){
					return false;
				}

				if (cdek.hasErrors()) {
					return false;
				}

				$('input[type=hidden][name=control_check]').val('0');

				$('.pvz-errors').html('');
				$('input[type=text].address').each(function (id, item) {
					var $item=$(item);
					$('input[type=hidden][name='+$item.attr('name')+']').val($item.val());
				})

				$('.basket_page > .basket_table_wrapper').fadeOut(300, function() {
					$('#purchase_block').fadeIn(300);
				})

				return false;
			});
			cdek.init();
			$('#basket_to_cart').click(function(){
				$('#purchase_block').fadeOut('300');
				setTimeout(function(){
					$('.basket_table_wrapper').fadeIn('300');
				}, 300)
				return false;
			});

			$('.basket_table').on('change','select[name=delivery]', function() {
				basket.setDeliveryOption($(this).val());
			});
			// Вызываем событие изменения что бы модифицировать цену сразу после загрузки
			basket.setDeliveryOption($('select[name=delivery]').val());

			$('.paysystem_buttons .paysystem_button').click(function (event) {
				var button = $(this);

				if (button.attr('data-request-type') == 'POST') {
					event.preventDefault();

					if (typeof button.data('loading') === "undefined") {
						button.hide().after('<img src="/base-img/loader.gif">').data('loading', true);

						$.getJSON(button.attr('href'), {}, function (response) {
							var respFields = response.fields,
								respAction =  typeof response.action === 'string' && response.action,
								respActionError = (typeof response.action === 'object' && response.action.error) ||
									'Ошибка создания оплаты!';

							if (!respAction) {
								button.next('img').replaceWith('<span>' + respActionError + '</span>');
								return;
							}

							if (respFields && respFields.requestType && respFields.requestType === 'GET') {
								document.location = respAction;
								return;
							}

							var html = '<form style="display:none" method="post" action="' +
								respAction + '">';

							for (var key in respFields) if (respFields.hasOwnProperty(key)) {
								html += '<input type="hidden" name="' + key + '" value=\'' + respFields[key] + '\'>';
							}

							html += '</form>';

							var form = $(html).appendTo(button);

							form.submit();
						})
							.fail(function() {
								button.next('img').replaceWith('<span>Ошибка создания оплаты!</span>');
							});
					}
				} else {
					var link = button.attr('href');

					if (link) {
						location.href = link;
					}
				}
			});

			return true;
		},
		initButtonBuy: function(app, button, nodeForGoToBasket) {
			var self = this;

			if (button.hasClass('gotobasket')) return;

			button.click(function() {
				var _buttonClicked = $(this);
				if (!app.isEipEnabled()) {
					var dataHref = $(this).data('href');
					var sRequest = typeof dataHref != 'undefined' ? dataHref : $(this).attr('href');

					$('a.button_buy:not(.gotobasket)').each(function() {
						_buttonClicked.attr('disabled', 'disabled');
					});
					_buttonClicked.unbind('click');

					var re = /(redirect-uri[=\/\w]+[&]?)/g;

					sRequest = sRequest.replace(re, '');

					if (sRequest.substring(sRequest.length-1) == '?') {
						sRequest = sRequest.substring(0, sRequest.length-1);
					}
					$.ajax({
						url: sRequest,
						data: {'no-redirect': !_buttonClicked.data('redirect')},
						success: function() {
							if (_buttonClicked.data('redirect') == 1) {
								window.location.href = '/emarket/cart/';
							}

							self.cartUpdate(app, self);
							$('a.button_buy:not(.gotobasket)').each(function() {
								_buttonClicked.attr('disabled', false);
							});

							if (nodeForGoToBasket) {
								_buttonClicked = nodeForGoToBasket;

								parent.$.fancybox.close();
							}

							_buttonClicked.hide();
							_buttonClicked.siblings('.gotobasket').removeClass('gotobasket_hidden');
						}
					});
					return false;
				}
				return false;
			})
		},
		cartUpdate:function(app, self){
			$.ajax({
				type: "POST",
				data: "",
				dataType: 'html',
				url: '/ajax/ajax-cart.0.ajax',
				success: function(data){
					self.constants.cart.html(data);
					return true;
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);
					return false;
				}
			});
		},
		buttonBuy: function(app, self, scope) {
			var buttonSelector = 'a.button_buy:not(.gotobasket)';
			var $buyButtons = typeof scope != 'undefined' ? $(buttonSelector, scope) : $(buttonSelector);
			this.initButtonBuy(app, $buyButtons);
		},
		initEditInPlaceEvents: function () {
			var self = this;

			uAdmin.eip.bind('Disable', function () {
				self.buttonBuy(application, self);
			});
		},
		basketRemove:function(id, app, self) {
			if (id == 'system_basket_delete_all') basket.removeAll(self.basketReplace(id, app, self));
			else basket.removeItem(id, self.basketReplace(id, app, self));
		},
		basketModify:function(id, amount_new, amount_old, app, self) {
			if (amount_new.replace(/[\d]+/) == 'undefined' && amount_new != amount_old) {
				basket.modifyItem(id, {amount:amount_new}, self.basketReplace(id));
			}
		},
		basketReplace:function(id, app, self) {
			return function(response) {
				var item_total_price, cart_item, basket, i, item,
					rem_item = true,
					detect_options = {}, discountLabelSet = false;

				var new_total_price = 0;
				if (response.summary.amount > 0) {
					for (i in response.items.item) {
						item = response.items.item[i];

						var custom_item = $(".cart_item_" + item.id);
						var custom_price = custom_item.data('price');
						var custom_available = custom_item.data('available');
						var custom_item_total = item.amount * custom_price;

						if (custom_available) {
							new_total_price += custom_item_total;
						}

						if (item.id == id) {
							rem_item = false;
							item_total_price = Math.round(custom_item_total) == custom_item_total ? custom_item_total : parseFloat(custom_item_total).toFixed(2);
						}
						if (item.page.id == id) {
							if (detect_options.amount) {
								detect_options.amount = detect_options.amount + item.amount;
							}
							else detect_options = {'id':id, 'amount':item.amount};
						}
					}
					if(rem_item){
						if (cart_item = $('.cart_item_' + id)){
							cart_item.remove();
						}
					}else {
						$('#cart_item_price_' + id).text(item_total_price);
					}
					if (typeof item.discount != 'undefined' || typeof response.discount != 'undefined') {
						$('.total_price_title.discount_title').removeClass('hidden');
						$('.total_price_title.no_discount_title').addClass('hidden');
						discountLabelSet = true;
					} else if (discountLabelSet == false) {
						$('.total_price_title.no_discount_title').removeClass('hidden');
						$('.total_price_title.discount_title').addClass('hidden');
					}

					var basket_discount_value = response.summary.price.discount,
						currency_rate = $(".total_price").data('currency-rate') != 0 ? $(".total_price").data('currency-rate') : 1;

					if (basket_discount_value > 0 && typeof response.discount != 'undefined') {
						new_total_price = new_total_price - (basket_discount_value * currency_rate);
					}

					var min_sum = $(".total_price").data('min-sum');

					if (new_total_price >= min_sum) {
						$(".minimum-order-sum").addClass('hidden');
						$(".basket_to_form_wrapper").removeClass('hidden');
					} else {
						$(".minimum-order-sum").removeClass('hidden');
						$(".basket_to_form_wrapper").addClass('hidden');

						$(".sum-left").text(min_sum - new_total_price);
					}

					$('#basket_summary_price').text(new_total_price.toFixed(2));
					$('#header_basket_summ_head').text(new_total_price.toFixed(2));
					$('#header_basket_amount').text(response.summary.amount);
					window['basket'].__recalculateWithModifierPrices(false);
				}else{
					$('#system_basket').hide();
					$('#system_empty_basket_text').show();
					self.cartUpdate(app,self);
				}
			}
		}
	},
	users:{
		current:{
            sending:false
        },
		init: function(app){
            var self = this;
			var usersBlock = $('#main_big_user_block');
			if(usersBlock.length){
				$.ajax({
					type: "POST",
					data: "",
					dataType: 'html',
					url: '/ajax/ajax-login.0.ajax',
					success: function(data){
						usersBlock.html(data).css('display','inline-block');
						app.placeholders.init(app);

						(function() {
							this.globalRecaptcha.init(this);
						}).call(app);

						var usersLoginForm = $('#ajax_login_form');
						var usersToggleButtons = $('.ajax_login_toggle');
						var $recaptcha = $('.g-recaptcha-umi', usersLoginForm);
						var attributes;
						var toggleWidth = usersBlock.width() - 30;

						if (!(/personal_office=1/.test(document.location.href))){
							self.usersToggle(usersBlock,toggleWidth,0,self,app);
						}else{
							self.usersToggle(usersBlock,toggleWidth,0,self,app);
							self.usersToggle(usersBlock,toggleWidth,250,self,app);
						}
						if(usersToggleButtons.length){
							usersToggleButtons.each(function(){
								$(this).click(function(){
									self.usersToggle(usersBlock,toggleWidth,500,self,app);
									return false;
								});
							});
						}
						if ($recaptcha.length > 0) {
							attributes = {
								'sitekey': $recaptcha.data('sitekey'),
								'size': $recaptcha.data('size'),
								'callback': $recaptcha.data('callback'),
								'badge': 'inline'
							};
							usersLoginForm.attr('data-recaptcha-widget-id', grecaptcha.render($recaptcha[0], attributes));
							$('.recaptcha_use_info', usersLoginForm).click(function(e) {
								e.preventDefault();
								$(this).parent().find('.grecaptcha-badge').toggle();
							});
						}
						if(usersLoginForm.length){
							self.usersAjaxLogin(usersLoginForm,self,app);
						}
						return true;
					},
					error: function(jqXHR, textStatus, errorThrown){
						console.log(jqXHR);
						console.log(textStatus);
						console.log(errorThrown);
					}
				});
			}
			return true;
        },
		usersToggle:function(usersBlock,toggleWidth,speed,self,app){
			if (usersBlock.hasClass('js_hidden')){
				usersBlock.removeClass('js_hidden');
				usersBlock.animate({right:'0'},speed)
			}else {
				usersBlock.addClass('js_hidden');
				usersBlock.animate({right:'-'+toggleWidth},speed)
			}
			return true;
		},
		usersAjaxLogin:function(usersLoginForm,self,app){
			usersLoginForm.submit(function(){
				var $checkRecaptcha = $(this).find('.g-recaptcha-umi');
				var globalRecaptcha = $(this).find('.globalRecaptcha')[0];

				if (!$(this).data("recaptcha-verified") && $checkRecaptcha.length > 0) {
					grecaptcha.execute($(this).data("recaptcha-widget-id"));
					return false;
				}

				if (typeof globalRecaptcha !== 'undefined' && !globalRecaptcha.checked) {
					return false;
				}

				if(self.current.sending) return false;
				self.current.sending = true;
				var send_data = usersLoginForm.serializeArray();
				$('#ajax_login_error').hide('slow');
				$.ajax({
					type: "POST",
					data: send_data,
					dataType: 'json',
					url: '/users/custom_login_do/',
					success: function(data){
						if(data.status) {
							showError(data.status);
						}else{
							$('#ajax_login_ok').show('slow',function() {
								if (/\?/.test(document.location.href)){
									document.location.href = document.location.href + '&personal_office=1';
								}else{
									document.location.href = document.location.href + '?personal_office=1';
								}
							});
						}
						self.current.sending = false;
					},
					error: function(jqXHR, textStatus, errorThrown){
						console.log(jqXHR);
						console.log(textStatus);
						console.log(errorThrown);
					}
				});

				/**
				 * Отображает сообщение об ошибке на основе статуса авторизации
				 * @param {Number} statusCode код статуса
				 */
				function showError(statusCode) {
					var WRONG_CAPTCHA_STATUS = 2;

					$('.ajax_login_messages').hide();

					switch (statusCode) {
						case WRONG_CAPTCHA_STATUS:
							$('#ajax_captcha_error').show('slow');
							break;
						default:
							$('#ajax_login_error').show('slow');
							break;
					}
				}
				return false;
			});
		}
	},
	stars:{
		init: function(app){
            var self = this;
			var starsFields = $('.field_grade_stars');
			if(starsFields.length){
				starsFields.each(function(){
					var starsField = $(this);
					var gradeInput = starsField.find('input:eq(0)');
					starsField.find('.star').click(function(){
						var currentGrade = gradeInput.val();
						var grade = $(this).attr('rel');
						starsField.removeClass('big-grade-stars-'+currentGrade).addClass('big-grade-stars-'+grade);
						gradeInput.val(grade);
						return false;
					}).hover(function(){
						var grade = $(this).attr('rel');
						starsField.removeClass('big-grade-stars-1');
                        starsField.removeClass('big-grade-stars-2');
                        starsField.removeClass('big-grade-stars-3');
                        starsField.removeClass('big-grade-stars-4');
                        starsField.removeClass('big-grade-stars-5');
                        starsField.addClass('big-grade-stars-'+grade);
                    });
                    starsField.mouseout(function(){
						var currentGrade = gradeInput.val();
						starsField.removeClass('big-grade-stars-1');
                        starsField.removeClass('big-grade-stars-2');
                        starsField.removeClass('big-grade-stars-3');
                        starsField.removeClass('big-grade-stars-4');
                        starsField.removeClass('big-grade-stars-5');
                        starsField.addClass('big-grade-stars-'+currentGrade);
                    });
				});
			}
			return true;
        }
	},
	isEipEnabled: function () {
		if ('uPageEditor' in window) {
			var oEip = uPageEditor.get();
			return oEip.isEnabled();
		} else if ('uAdmin' in window && 'eip' in window.uAdmin) {
			return uAdmin.eip.enabled;
		} else {
			return false;
		};
	},
	/**
	 * Класс для открытия окна "поделиться"
	 */
	socialButtons:{
		open: function(sType) {
			sTitle = document.title;
			sUrl = application.removeParams(location.href);
			href = '';
			widnow_size = '';
			switch(sType) {
				case 'vk': {
					href = 'https://vkontakte.ru/share.php?url='+encodeURIComponent(sUrl);
					window_size = 'width=640,height=480';
				} break;
				case 'odnoklassniki': {
					href = 'https://connect.ok.ru/offer?url=' + encodeURIComponent(sUrl) + '&title=' + encodeURIComponent(sTitle);
					window_size = 'width=640,height=480';
				} break;
				case 'moikrug': {
					href = 'https://moikrug.ru/share?url=' + encodeURIComponent(sUrl) + '&title=' + UTF8_to_CP1251_URL(sTitle) + '&description=';
					window_size = 'width=1000,height=600';
				} break;
				case 'moimir': {
					href = 'https://connect.mail.ru/share?url=' + encodeURIComponent(sUrl) + '&title=' + encodeURIComponent(sTitle);
					window_size = 'width=640,height=480';
				} break;
				case 'facebook': {
					href = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(sUrl);
					window_size = 'width=640,height=480';
				} break;
				case 'twitter': {
					href = 'https://twitter.com/home?status=' + encodeURIComponent(sTitle) + '+' + encodeURIComponent(sUrl);
					window_size = 'width=640,height=480';
				} break;
				case 'livejournal': {
					href = 'https://www.livejournal.com/update.bml?event=' + encodeURIComponent(sUrl) + '&subject=' + encodeURIComponent(sTitle);
					window_size = '';
				} break;
				case 'liveinternet': {
					href = 'https://www.liveinternet.ru/journal_post.php?action=n_add&cnurl=' + encodeURIComponent(sUrl);
					window_size = '';
				} break;
			}
			window.open(href, '_blank', window_size);
			return false;
		}
	},
	/**
	 * Рекламная полоса
	 */
	promoLine:{
		init: function() {
			// Сокрытие полосы в нижнем положении скролла экрана
			$(window).scroll(function() {
				if($(window).scrollTop() + $(window).height() == $(document).height()) {
					$('.promo_line').fadeOut(100);
				}
				else {
					$('.promo_line').fadeIn(100);
				}
			});

			// Начальное состояние отображения полосы в зависимости от состояния режима редактирования EiP
			if (application.isEipEnabled()) {
				$('.promo-close').hide();
			} else {
				$('.promo-close').show();
			};
		}
	},
	/**
	 * Создание и инициализация различных popup-сообщений
	 */
	modalMessage:{
		data: {},
		/**
		 * Формирует попап-сообщение об удалении рекламных ссылок в футере
		 */
		initCopyrightDeletePopupData: function() {
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				$.ajax({
					url: '/udata/custom/getEditableFooterData.json',
					dataType: 'json',
					context: this,
					success: function (data) {
						this.data['editable_footer'] = data;
						this.initCopyrightDeletePopup();
					}
				})
			}
		},
		/**
		 * Получить (создать, если ещё нет) враппер для сообщений в вёрстке
		 * @returns {*|jQuery|HTMLElement}
		 */
		getWrapper: function() {
			if($('#modal_wrap').length == 0) {
				$('body').append('<div id="modal_wrap"></div>');
			}
			return $('#modal_wrap');
		},
		/**
		 * Попап-сообщение об удалении рекламных ссылок в футере
		 */
		initCopyrightDeletePopup: function() {
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				var msg = $('#copy_del_new');
				if (msg.length == 0) {
					msg = $('<div id="copy_del_new" class="modal fade">\
								<div class="modal-header">\
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>\
									<h4 id="myModalLabel">'
						+ this.data['editable_footer']['title']
						+ '</h4>\
								</div>\
								<div class="modal-body">\
									<p>'
						+ this.data['editable_footer']['text']
						+ '<a class="link-tarif-pay" href="'
						+ this.data['editable_footer']['link']
						+ '">'
						+ this.data['editable_footer']['link_title']
						+ '</a>.</p>\
								</div>\
							</div>');
					var modalWrap = this.getWrapper();
					modalWrap.append(msg);
					$('.copy_wrap .copy-del-button').on('click', function () {
						ga('umiru.send', 'event', "site", "footer_copyright", "clickdelete");
						msg.on('hide', function() {
							ga('umiru.send', 'event', "site", "footer_copyright_popup", "close");
						});
						msg.on('click', '.link-tarif-pay', function() {
							ga('umiru.send', 'event', "site", "footer_copyright_popup", "clickpay");
						});
						msg.modal('show');
						return false;
					});
				}
			}
		},
		/**
		 * Попап-сообщение об удалении рекламной полосы
		 */
		initPromolineDeletePopup: function() {
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				var msg = $('#promoline_del_new');
				if(msg.length == 0) {
					msg = $('<div id="promoline_del_new" class="modal hide fade">\
								<div class="modal-header">\
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>\
									<h4 id="myModalLabel_2">Удалить рекламную полосу</h4>\
								</div>\
								<div class="modal-body">\
									<p>Рекламная полоса показывается только на бесплатном сайте. <a class="link-tarif-pay" href="/adminzone/money/">Перейдите на платный тариф</a>, чтобы ее убрать.</p>\
								</div>\
							</div>');
					var modalWrap = this.getWrapper();
					modalWrap.append(msg);
					$('#promo_button_eip').on('click', function () {
						ga('umiru.send', 'event', "site", "promoline", "clickdelete");
						msg.on('hide', function() {
							ga('umiru.send', 'event', "site", "promoline_popup", "close");
						});
						msg.on('click', '.link-tarif-pay', function() {
							ga('umiru.send', 'event', "site", "promoline_popup", "clickpay");
						});
						msg.modal('show');
						return false;
					});
				}
			}
		},
		/**
		 * Попап-сообщение об удалении рекламного блока
		 */
		initAdvertisementDeletePopup: function() {
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				var msg = $('<div id="advertisement_del_popup" class="modal hide fade">\
								<div class="modal-header">\
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>\
									<h4 id="myModalLabel_2">Удалить рекламу</h4>\
								</div>\
								<div class="modal-body">\
									<p>Реклама показывается только на бесплатном сайте. <a class="link-tarif-pay" href="/adminzone/money/">Перейдите на платный тариф</a>, чтобы ее убрать.</p>\
								</div>\
							</div>');
				var modalWrap = this.getWrapper();
				modalWrap.append(msg);
				$('#advertisement_button_eip').on('click', function () {
					ga('umiru.send', 'event', "site", "advertisement", "clickdelete");
					msg.on('hide', function() {
						ga('umiru.send', 'event', "site", "advertisement_popup", "close");
					});
					msg.on('click', '.link-tarif-pay', function() {
						ga('umiru.send', 'event', "site", "advertisement_popup", "clickpay");
					});
					msg.modal('show');
					return false;
				});
			}
		},
		initCompareErrorPopup: function() {
			var msg = $('<div id="compare_error_popup" class="modal modal-lg hide fade">\
							<div class="modal-header">\
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>\
								<h4 id="compare_modal_label">Ошибка добавления к сравнению</h4>\
							</div>\
							<div class="modal-body">\
								<p class="modal-compare-error-text">\
								<span class="error-text"></span> \
								<a href="/emarket/compare" class="modal-compare-link">Перейти к сравнению</a>.</p>\
							</div>\
						</div>');
			var modalWrap = this.getWrapper();
			modalWrap.append(msg);
		},
		init: function(){
			this.initCopyrightDeletePopupData();
			this.initPromolineDeletePopup();
			this.initAdvertisementDeletePopup();
			this.initCompareErrorPopup();
		}
	},
	catalog:{
		constants:{
			catalogFiltersForm: false,
			catalogLayout: false,
			catalogPerPage: false,
			catalogOrderFilter: false,
			catalogOrderFilterName:false
		},
		init: function(app){
			var self = this;
			self.catalogFiltersForm = $('#catalog_filters');
			self.catalogLayout = $('#catalog_layout');
			self.catalogPerPage = $('#catalog_per_page');
			self.catalogOrderFilter = $('#order');
			self.catalogOrderFilterName = $('#order_filter_name');
			var expireDate = new Date(new Date().getTime() + 60 * 1000);
			$('.layout_control a').click(function() {
				var layout = ($(this).attr('id')).substr(7);
				self.catalogLayout.val(layout);
				self.catalogFiltersForm.submit();
				setCookie('layout_control',layout,expireDate,'/');
				return false;
			});
			$('#catalog_perpage').change(function() {
				var perPage = $(this).val();
				self.catalogPerPage.val(perPage);
				self.catalogFiltersForm.submit();
				return false;
			});
			$('#order_name').click(function() {
				self.catalogOrderFilter.attr('name', 'order_filter[name]').val(getFilterParam($(this)));
				self.catalogOrderFilterName.val(1);
				self.catalogFiltersForm.submit();
				return false;
			});
			$('#order_price').click(function() {
				self.catalogOrderFilter.attr('name', 'order_filter[price]').val(getFilterParam($(this)));
				self.catalogOrderFilterName.val(2);
				self.catalogFiltersForm.submit();
				return false;
			});
			$('#order_quantity').click(function() {
				self.catalogOrderFilter.attr('name', 'order_filter[common_quantity]').val(getFilterParam($(this)));
				self.catalogOrderFilterName.val(3);
				self.catalogFiltersForm.submit();
				return false;
			});
			self.catalogFiltersForm.find('.filter_anchor').click(function() {
				var filter = $(this);
				var fieldName = (filter.attr('id')).substr(4);
				$('#field_' + fieldName).remove();
				var arParts = (filter.attr('href')).split('=');
				var sHiddenControlName = arParts[0].replace(/^\?/g, '');
				var sHiddenControl = '<input type="hidden" id="field_'+fieldName+'" name="'+sHiddenControlName+'" value="'+arParts[1]+'" />';
				self.catalogFiltersForm.append(sHiddenControl);
				self.catalogFiltersForm.submit();
				return false;
			});

			if(!!$().selectize){
				$('.ct_filter_select').selectize({
					create: false,
					sortField: {
						field: 'text',
						direction: 'asc'
					},
					dropdownParent: 'body',
					closeAfterSelect: true,
					hideSelected: true,
					onChange: function(value) {
						if(value == '') return false;
						var valueParts = value.split('##');
						var arParts = valueParts[1].split('=');
						var sHiddenControlName = arParts[0].replace(/^\?/g, '');
						var sHiddenControl = '<input type="hidden" id="field_'+valueParts[0]+'" name="'+sHiddenControlName+'" value="'+arParts[1]+'" />';
						self.catalogFiltersForm.append(sHiddenControl);
						self.catalogFiltersForm.submit();
						return false;
					}
				});
			}

			/**
			 * Возвращает последний символ ссылки из якоря как число.
			 * @param {Object} $anchor - html-element <a/>
			 * @returns {number}
			 */
			function getFilterParam($anchor) {
				var href = $anchor.attr('href'),
					param = href.substr(href.length - 1, href.length);
				return parseInt(param);
			}
		}
	},
	removeParams: function(sUrl) {
		var sResult = sUrl.replace(/u\-login=([a-zA-Z0-9\-]+)\&?/g, '');
		var sResult = sResult.replace(/u\-password=([a-zA-Z0-9\-]+)\&?/g, '');
		var sResult = sResult.replace(/u\-password\-md5=([a-zA-Z0-9\-]+)\&?/g, '');
		var sResult = sResult.replace(/u\-login\-store=([a-zA-Z0-9\-]+)\&?/g, '');
		var sResult = sResult.replace(/\?$/g, '');
		return sResult;
	},
	init: function(app){
		$.ajax({
			type: "POST",
			data: "",
			dataType: 'text',
			url: '/udata://users/user_type/.json',
			success: function(data){
				app.constants.userType = data.type;
				app.constants.admin = data.admin;
				(function() {
					this.users.init(this);
				}).call(app);
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
	},
	constants:{
		userType: 0,
		admin: 0
	},
	frameKiller:function(){
		if (!(/\/adminzone/.test(top.location.pathname)) && !(/metrika.yandex/.test(top.location.host)) && !(/google/.test(top.location.host))){
			if (top != self) top.location.replace("http://help-cms.ru/domain_not_connected/");
		}
		return true;
	},
	counter: new function(){
		var self = this;
		this.init = function() {
			$('.counter').each(function(){
				var node = $(this);
				self.countDown(node);
				setInterval(function(){self.countDown(node)}, 1000);
			});
		}
		this.countDown = function(node) {
			var d = new Date();
			var hours = 23 - d.getHours();
			var minutes = 59 - d.getMinutes();
			var seconds = 59 - d.getSeconds();
			hours = (hours < 10) ? "0"+hours:hours;
			minutes = (minutes < 10) ? "0"+minutes:minutes;
			seconds = (seconds < 10) ? "0"+seconds:seconds;
			values = [
				self.declOfNum(hours,[":",":",":"]),
				self.declOfNum(minutes,[":",":",":"]),
				self.declOfNum(seconds,[" "," "," "])
			];
			node.html(values.join(""));
		}
		this.declOfNum = function(number, titles) {
			cases = [2,0,1,1,1,2];
			return "<b>"+number+"</b>"+titles[(number%100>4 && number%100<20)? 2 : cases[Math.min(number%10,5)]];
		}
	},
	priceDisplay: {
		initOnNode: function (node) {

			var prices = node.find('.price_value'),
				originalPrice = parseFloat(prices.first().text() == '' ? 0 : prices.first().text()),
				buttonBuy = node.find('a.button_buy:not(.gotobasket)');

			/**
			 * Разобрает урл строку на составляющие
			 * @param url - урл
			 * @returns {Element}
			 */
			function parseUrl(url){
				var parser = document.createElement('a');
				parser.href = url;
				return parser;
			}

			/**
			 * Разбирает строку гет парамтеров в обьект
			 * @param paramsStr - строка гет параметров
			 * @returns {*}
			 */
			function parseGetParam(paramsStr){
				if (paramsStr.length == 0) {return [];}
				var paramsArray = {};
				paramsStr = String(paramsStr);
				if (paramsStr.indexOf('?') == 0){
					paramsStr = paramsStr.substr(1);
				}

				paramsStr = paramsStr.split('&');
				for (var i = 0, length=paramsStr.length; i<length; i++ ){
					if (paramsStr[i].indexOf('=')>-1){
						paramsStr[i] = paramsStr[i].split('=');
						paramsArray[paramsStr[i][0]] = paramsStr[i][1];
					} else {
						paramsArray[paramsStr[i]] = '';
					}
				}

				return paramsArray;
			}

			/**
			 * Собирает урл строку на основании переданных данных
			 * @param object - объект содержащий компоненты урла
			 * @param params - новые гет параметры виде объекта
			 * @returns {*}
			 */
			function buildUrl(object, params){
				var keys = Object.keys(params);
				if (keys.length > 0) {
					object.search = '?';
					for(var i=0, length= keys.length; i<length; i++){
						object.search+= (i>0 ? '&' : '' )+keys[i]+'='+params[keys[i]];
					}
				}
				return object.href;
			}

			function calcPrice() {
				if (application.isEipEnabled()) return;

				buttonBuy.each(function() {
					var newPrice = originalPrice,
						dataHref = $(this).data('href'),
						originalButtonBuyHref = typeof dataHref != 'undefined' ? dataHref : $(this).attr('href'),
						newHref = parseUrl(originalButtonBuyHref),
						params = parseGetParam(newHref.search);

					node.find('.item_characteristics input:checked').each(function () {
						newPrice = parseFloat($(this).val());
						params['characteristic'] = $(this).attr('id')
					});

					node.find('.opt_props input:checked').each(function () {
						newPrice += parseFloat($(this).val() || 0);
						params['options[' + $(this).attr('name') + ']'] = $(this).attr('id');
					});

					newPrice = Math.round(newPrice) == newPrice ? newPrice : parseFloat(Math.ceil(newPrice * 100) / 100).toFixed(2);
					newPrice *= application.amountChecker.getAmount();
					prices.text(newPrice.toFixed(2));
					if (typeof dataHref != 'undefined') {
						$(this).data('href', buildUrl(newHref, params));
					} else {
						$(this).attr('href', buildUrl(newHref, params));
					}
				});
			}

			function showQuantity() {
				if ($('span.quantity.value')) {
					input = $('.opt_prop input:checked');
					if ($(input).data('quantity') !== undefined && $(input).data('measure') !== undefined) {
						$('span.quantity.value').text($(input).data('quantity') + ' ' + $(input).data('measure'));
					}
				}
			}
			//uncomment for jQuery < 1.7
			//$('input', optProps).unbind('change').bind('change', calcPrice);
			node.on('change', '.opt_prop input, .price_change_flag', calcPrice);
			node.on('change', '.opt_prop input, .price_change_flag', showQuantity);

			$('.opt_prop:nth-child(2) input:radio', node).attr('checked', 'True');
			calcPrice();
			showQuantity();
		},
		init : function () {
			$('.object').each(function() {
				application.priceDisplay.initOnNode($(this));
			});
		}
	},
	priceWithDiscountDisplay: {
		initOnNode : function(node) {
			var originalPrice = parseFloat(node.text() == '' ? 0 : node.text()),
					priceWithoutDiscount = node.data('original');

			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				uAdmin.eip.bind('Disable', function () {
					if (parseFloat(priceWithoutDiscount) == parseFloat($(node).text()) && !$(node).hasClass('u-eip-editing')) {
						$(node).text(parseFloat(originalPrice).toFixed(2));
					} else {
						priceWithoutDiscount = $(node).text();
						originalPrice = parseFloat(priceWithoutDiscount).toFixed(2);
					}
				});

				uAdmin.eip.bind('Enable', function () {
					priceWithoutDiscount = node.data('original');
					$(node).text(parseFloat(priceWithoutDiscount).toFixed(2));
				});
			}

			if (application.isEipEnabled()) {
				$(node).text(parseFloat(priceWithoutDiscount).toFixed(2));
			}
		},
		init : function () {
			$('.price_with_discount').each(function () {
				application.priceWithDiscountDisplay.initOnNode($(this));
			});
		}
	},
	optionedPricePopup: {
		initOnNode: function (node) {
			var button_buy = node.find('a.button_buy:not(.gotobasket)').eq(0);
			var element_id = button_buy.data('element-id');
			// Legacy-код, т.к. раньше id элемента выбиралось из id-аттрибута. После сброса статического кэша на всех Интернет-магазинах станет не актуально
			if (!element_id) {
				element_id = parseInt(button_buy.attr('id'), 10);
			}
			var uri = '/ajax/ajax-optioned.' + element_id + '.ajax';
			// Disable click logic to prevent accidental buy with default option
			node.find('a.button_buy:not(.gotobasket)').unbind('click');

			$('a.button_buy:not(.gotobasket)', node).fancybox({
                'autoScale': true,
                'overlayShow' : true,
				'showCloseButton': false,
				'showNavArrows': false,
                'overlayOpacity' : .3,
                'hideOnOverlayClick' : true,
                'type': 'inline',
                'href': uri,
				'onStart': function () { return !application.isEipEnabled(); },
				'onComplete': function () {
					$(window).trigger("fancybox-opened");
					checkedRadio = 0;
					if($('.object .opt_prop input').length){
						$('.object .opt_prop input').each(function (i) {
							if($(this).prop( "checked" )) {
								setTimeout(function() {
									$('.order_popup .opt_prop input').eq(i).attr('checked','checked');
									$('.order_popup .opt_prop input').trigger('change');
								}, 0);
							}
						});
					}

					application.priceDisplay.initOnNode($('.order_popup'));
					application.emarket.initButtonBuy(application, $('.order_popup a.button_buy:not(.gotobasket)'), node.find('a.button_buy:not(.gotobasket)'));
				}
            });
		},
		init: function () {
			$('.buy_order_popup, .buy_button_popup').each(function() {
				application.optionedPricePopup.initOnNode($(this));
			});
		}
	},
	amountChecker:{
		product_amount: 0,
		init: function(){

			$(document).on("click", '.order_popup .product_amount_plus', function(){
				application.amountChecker.setAmount(1,true);
				application.amountChecker.updateAmountOnPage();
			});

			$(document).on("click", '.order_popup .product_amount_minus', function(){
				application.amountChecker.setAmount(-1,true);
				application.amountChecker.updateAmountOnPage();
			});

			$(document).on("change", '.order_popup .product_amount_value', function(){
				application.amountChecker.setAmount(application.amountChecker.getAmount());
				application.amountChecker.updateAmountOnPage();
			});
		},
		getAmount: function(){
			var amount = 0;
			if(amount = parseInt($('.order_popup .product_amount_value').val())){
				application.amountChecker.product_amount = amount;
				return amount;
			}else{
				application.amountChecker.product_amount = 1;
				return 1;
			}
		},

		setAmount: function(amount,addAmount){
			if(addAmount === true){
				application.amountChecker.getAmount();
				application.amountChecker.product_amount += amount;
			}else{
				application.amountChecker.product_amount = amount;
			}

			if(application.amountChecker.product_amount < 1) application.amountChecker.product_amount = 1;
			return true;
		},

		updateAmountOnPage: function(){
			$('.product_amount_value').val(application.amountChecker.product_amount);
			var button = $('.order_popup .button_buy');
			var dataHref = button.data('href');
			var url = typeof dataHref != 'undefined' ? dataHref : button.attr('href');
			application.urlTools.parseUrl(url);

			application.urlTools.params['amount'] = application.amountChecker.product_amount;
			application.urlTools.params['amountAdd'] = 1;

			if (typeof dataHref != 'undefined') {
				button.data('href', application.urlTools.mergeUrl());
			} else {
				button.attr('href', application.urlTools.mergeUrl());
			}

			//дергаем событие, для обновления цены во всплывающем окне
			$('.order_popup .price_change_flag').trigger('change');

		}
	},
	urlTools:{
		host : '',
		params : [],

		parseUrl: function(url){
			var splitUrl = url.split('?');
			application.urlTools.host = splitUrl[0];
			var splitParams = splitUrl[splitUrl.length-1].split('&');
			var splitParameter = [];

			$(splitParams).each(function (i) {
				splitParameter = this.split('=')
				application.urlTools.params[splitParameter[0]]=splitParameter[1];
			});
		},
		mergeUrl: function(){
			var arr = application.urlTools.params;
			var url = application.urlTools.host + '?';
			for (var key in arr) {
				var val = arr [key];
				url = url + key + '=' + val + '&';
			}

			if(url.substring(url.length-1, url.length) == '&'){
				url = url.substring(0, url.length-1)
			}

			return url;
		}
	},
	MenuLazyLoad: {
		init: function() {
			$('div.menu-vertical ul li.baby').hover(
					function() {
						var parent = $(this);

						if (parent.children('ul').length) {
							return;
						}

						var itemId = $(this).data('id');
						$.ajax({
							type: "GET",
							url: '/udata://content/menu//1/' + itemId + '//' + $('div.menu-vertical').data('curpageid') + '/',
								dataType: "xml"
					}).done(function(xml) {
							var children = $('udata items item', xml);

							if (children.length == 0) {
								return;
							}



							var ul = document.createElement('ul');

							children.each(function() {
								var item = $(this);
								var li = document.createElement('li');
								var a = document.createElement('a');
								if($(item).attr('status') == 'active') li.setAttribute('class','current');
								a.setAttribute('href', item.attr('link'));
								a.innerHTML = item.attr('name');
								li.appendChild(a);
								ul.appendChild(li);
							});

							parent.append(ul);
						});
					}
			);
		}
	},
	AdapTempl:{
		init: function(){
			if( $('html').hasClass('adaptive') ) {

				// Dropdown menu (class + hover + .clip)
				$('.level-0 li').each(function (i) {
					if ($(this).find('.level-1').length) {
						$(this).addClass('baby')
						$(this).prepend('<div class="clip"></div>')
					}
					$(this).on({
						mouseenter: function () {
							$(this).addClass('hover');
						},
						mouseleave: function () {
							$(this).removeClass('hover');
						}
					});
				});

				// Dropdown menu (.clip hover switch off)
				$('.clip').on('click', function () {
					$(this).closest('.baby').toggleClass('hover');
				});

				// Dropdown menu - Vertical (.baby)
				$('.menu-vertical ul li').each(function (i) {
					if ($(this).find('ul').length) {
						$(this).addClass('baby');
					}
				});

				// Touch out of menu
				$('body').delegate('.general_wrap', 'click', function (ev) {
					if (!$(ev.target).is('.navbar') && !$(ev.target).closest('.navbar').length && !$(ev.target).is('#footer-btn') && !$(ev.target).closest('#footer-btn').length) {
						$('.nav-collapse')
							.removeClass('in')
							.css('height', '0');
					}
				});

				// Footer Up BTN
				$('#footer-btn').on('click', function () {
					var $target = $('.navbar');
					$("body, html").scrollTo($target, 300, {axis: 'y', offset: {top: -10}});
					$('.b-navbar').click();
					return false;
				});

				// iPad Class
				if (navigator.userAgent.match(/iPad/i) != null) {
					$('body').addClass("ipad");
				}
			}
		}
	},
	AdapTemplShop:{
		init: function(){
			if( $('html').hasClass('adaptive') && $('html').hasClass('shop') ) {

				// BIG carousel init (with resize)
				if ($('.carousel-inner').length) {
					function runCarousel() {
							$('.carousel-inner').carouFredSel({
								circular: true,
								infinite: false,
								responsive: true,
								direction:	"left",
								align: "left",
								prev: "#big_prev",
								next: "#big_next",
								auto: {
									play: false,
									pauseOnHover: "immediate"
								},
								items: {
									width: 940,
									visible: {min: 1, max: 1},
									start: 0
								},
								scroll: {
									items:		1,
									fx:			"scroll",
									easing:		"quadratic",
									duration:		1000,
									pauseOnHover:	true
								},
								swipe: {
									onTouch: true,
									onMouse: false,
									items: 1,
									easing : "linear",
									duration : 300
								},
								mousewheel: false,
								onCreate: function(data) {
									$('.carousel-inner .from_tan').removeClass('hidden');
								}
							});
							$(".carousel-inner").trigger("updateSizes");
					}
					$(".carousel-inner").imagesLoaded(runCarousel);
					$(window).resize(function(){
						runCarousel()
					});
				}

				// Popular offers carousel
				if ($('#recent-goods').length) {
					$('#recent-goods').carouFredSel({
						circular: false,
						infinite: false,
						auto: {
							play: false,
							pauseOnHover: "immediate"
						},
						align: "left",
						prev: "#recent_prev",
						next: "#recent_next",
						responsive: true,
						easing: "easeOutBounce",
						items: {width: 280, visible: {min: 1, max: 4}},
						swipe: {
							onTouch: true,
							onMouse: false,
							items: 1,
							easing : "linear",
							duration : 300
						},
						mousewheel: false
					});
				}

				// Popular offers carousel
				if ($('#popular-goods').length) {
					$('#popular-goods').carouFredSel({
						circular: false,
						infinite: false,
						auto: {
							play: false,
							pauseOnHover: "immediate"
						},
						align: "left",
						prev: "#pop_prev",
						next: "#pop_next",
						responsive: true,
						easing: "easeOutBounce",
						items: {width: 280, visible: {min: 1, max: 4}},
						swipe: {
							onTouch: true,
							onMouse: false,
							items: 1,
							easing : "linear",
							duration : 300
						},
						mousewheel: false
					});
				}

				// Special offers carousel
				if ($('#special-offers').length) {
					$('#special-offers').carouFredSel({
						circular: false,
						infinite: false,
						auto: {
							play: false,
							pauseOnHover: "immediate"
						},
						align: "left",
						prev: "#spec_prev",
						next: "#spec_next",
						responsive: true,
						easing: "easeOutBounce",
						items: {width: 280, visible: {min: 1, max: 4}},
						swipe: {
							onTouch: true,
							onMouse: false,
							items: 1,
							easing : "linear",
							duration : 300
						},
						mousewheel: false
					});
				}

				// News carousel
				if ($('.umi-news-carousel .news').length) {
					$('.umi-news-carousel .news').carouFredSel({
						circular: false,
						infinite: false,
						auto: {
							play: false,
							pauseOnHover: "immediate"
						},
						align: "left",
						prev: "#news_prev",
						next: "#news_next",
						responsive: true,
						easing: "easeOutBounce",
						items: {width: 280, visible: {min: 1, max: 4}},
						swipe: {
							onTouch: true,
							onMouse: false,
							items: 1,
							easing : "linear",
							duration : 300
						},
						height: 'variable',
						mousewheel: false
					});
				}

				// Item card carousel
				if ($('.object .photo_list').length) {
					$('.object .photo_list').carouFredSel({
						circular: false,
						infinite: false,
						auto: {
							play: false,
							pauseOnHover: "immediate"
						},
						align: "left",
						prev: "#item_prev",
						next: "#item_next",
						responsive: true,
						easing: "easeOutBounce",
						items: {width: 77, visible: {min: 1, max: 3}},
						swipe: true,
						mousewheel: true
					});
				}

				// Init CloudZoom
				$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
				// Disabling zoom
				$('.product-img').on({
					mouseenter: function () {
						if ($('.object_image img').is('.u-eip-edit-box')) {
							$(this).find('.mousetrap').addClass('hide');
							$(this).find('.cloud-zoom-big').addClass('hide');
						}
					},
					mouseleave: function () {
						$(this).find('.mousetrap').removeClass('hide');
						$(this).find('.cloud-zoom-big').removeClass('hide');
					}
				});

			}
		}
	},
	AdapTemplCompany:{
		init: function(){
			if( $('html').hasClass('adaptive') && $('html').hasClass('company') ) {

				// Portfolio random show
				setTimeout(function () {
					var $items = $(".umi-second-content .simple_catalog_item, .photo_list li");
					$items.each(function () {
						var $article = $(this);
						setTimeout(function () {
							$article.addClass('tech');
						}, Math.random() * 500)
					});
				}, 100);

				/**
				 * Инициализирует карусель
				 * @param $element {jQuery} - родительский элемент слайдов карусели
				 * @param $button {jQuery} - элемент для добавления кнопок карусели
				 * @param idPrefix string - префикс идентификатора кнопок вперед, назад
				 * @param maxItemsDefault int - максимальное количество слайдов по умолчанию
				 */
				var initCarousel = function ($element, $button, idPrefix, maxItemsDefault) {
					if ($element.length === 0) {
						return;
					}

					$button.prepend('<a class="prev" id="' + idPrefix + 'cato_prev" href="#"></a>');
					$button.prepend('<a class="next" id="' + idPrefix + 'cato_next" href="#"></a>');

					$element.carouFredSel(getSettings($element, idPrefix, maxItemsDefault));
				}

				/**
				 * Возвращает настройки
				 * @param $element {jQuery} - родительский элемент слайдов карусели
				 * @param idPrefix string - префикс идентификатора кнопок вперед, назад
				 * @param maxItemsDefault int - максимальное количество слайдов по умолчанию
				 * @return {}
				 */
				var getSettings = function ($element, idPrefix, maxItemsDefault) {
					var itemWidthDefault = 280;
					var settings = {
						circular: false,
						infinite: false,
						auto: {
							play: false
						},
						align: "left",
						prev : '#' + idPrefix + 'cato_prev',
						next : '#' + idPrefix + 'cato_next',
						responsive: true,
						easing: "easeOutBounce",
						items : {
							width: $element.data('item-width') || itemWidthDefault,
							visible : {
								min: 1,
								max: $element.data('item-max') || maxItemsDefault,
							}
						},
						swipe: {
							items : {
								visible : {
									min: 1,
									max: 2,
								}
							},
							onTouch: true,
							onMouse: false,
							items: 1,
							easing : "linear",
							duration : 300
						},
						mousewheel: false
					}

					var itemHeight = $element.data('item-height');
					if (itemHeight) {
						settings.items.height = itemHeight;
					}

					return settings;
				}

				initCarousel($('.mainpage_items_catalog'), $('.mainpage_catalog_title'), '', 4);
				initCarousel($('.special_offers_list'), $('.index_special_offers'), 'spec_', 3);
			}
		}
	},
	AdapTemplPersonal:{
		init: function(){
			if( $('html').hasClass('adaptive') && $('html').hasClass('personal') ) {

				// Portfolio random show
				var $items = $(".photo_list li");
				setTimeout(function () {
					$items.each(function () {
						var $article = $(this);
						setTimeout(function () {
							$article.addClass('tech');
						}, Math.random() * 500)
					});
				}, 100);
				$items.each(function () {
					var $block = $(this).find('.photo_title, .photo_album_title');
					var title = $block.find('a').text();
					if (!title) {
						$block.addClass('none');
					}
				});

				// Adding menu class .level-0
				$('.nav-collapse').find('ul').addClass('level-0');
			}
		}
	},
	extraGoods: {
		init: function () {
			// Extra goods carousel
			this.loadCarousel();

			// Init edit in place events.
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				this.initEditInPlaceEvents();
			}
		},
		loadCarousel: function () {
			var self = this;
			$('.extra_goods_holder').each(function () {
				var holder = $(this),
					id = holder.attr('data-id') || 0,
					type = holder.attr('data-type') || 'goods',
					callback = function () {
						self.initCarusel();

						// Enable edit in place
						if (application.isEipEnabled()) {
							self.onEnableEditInPlace();
							if (typeof uAdmin.eip.reEnable !== "undefined") {
								uAdmin.eip.reEnable();
							}
						}

						// Enable ops.
						$('.extra_goods_holder .buy_button_popup').each(function() {
							application.optionedPricePopup.initOnNode($(this));
						});
					};
				var cache = (type == 'goods' ? 'true' : 'false');
				holder.load('/catalog/getExtraGoods/?id=' + id + '&type=' + type + '&cache=' + cache, callback);
			});
		},
		initCarusel: function () {
			var carouselVar = $('.extra_goods_holder:not(.show_only_when_eip_enabled) .extra_goods .carousel');
			var carouselHeight = carouselVar.children().length ? 300 : 'auto';

			carouselVar.carouFredSel({
				circular: false,
				infinite: false,
				auto: {
					play: false,
					pauseOnHover: "immediate"
				},
				align: "left",
				prev: {
					button: "#carousel_prev",
					onBefore: function () {
						$("#carousel_next").css({
							cursor: 'pointer'
						});
					},
					onEnd: function () {
						$("#carousel_prev").css({
							cursor: 'default'
						});
					}
				},
				next: {
					button: "#carousel_next",
					onBefore: function () {
						$("#carousel_prev").css({
							cursor: 'pointer'
						});
					},
					onEnd: function () {
						$("#carousel_next").css({
							cursor: 'default'
						});
					}
				},
				responsive: true,
				easing: "easeOutBounce",
				items: {
					width: 280,
					height: carouselHeight,
					visible: {
						min: 1,
						max: 4
					}
				},
				swipe: {
					onTouch: true,
					onMouse: false,
					items: 1,
					easing: "linear",
					duration: 300
				},
				mousewheel: false
			});

			application.emarket.initButtonBuy(application, carouselVar.find('.button_buy:not(.gotobasket)'));
		},
		initEditInPlaceEvents: function () {
			var self = this;

			uAdmin.eip.bind('Enable', function () {
				self.onEnableEditInPlace();
			});

			uAdmin.eip.bind('Disable', function (when) {
				self.onDisableEditInPlace(when)
			});
		},
		onEnableEditInPlace: function (when) {
			$('.extra_goods_holder.show_only_when_eip_enabled').show();
			$('.extra_goods').removeClass('hidden');
			$('.extra_goods .list').show();
		},
		onDisableEditInPlace: function (when) {
			$('.extra_goods_holder.show_only_when_eip_enabled').hide();
			$('.extra_goods .list').hide();
			// Reload caruosel after editing
			if (when == 'after') {
				this.loadCarousel();
			}
		}
	},
	compareGoods: {
		init: function() {
			this.noItemsBlock = $('.compare-wrapper .compare-no-items');
			this.itemsTable = $('table.emarket_compare');

			if (this.itemsTable.length < 1) {
				this.noItemsBlock.show();
			}

			this.showInCompare();

			this.addToCompareHandler();
			this.removeFromCompareHandler();

			// Init edit in place events.
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				this.initEditInPlaceEvents();
			}
		},
		showInCompare: function() {
			var addToCompareButtons = $("a.compare_button.add_compare"),
				elementsInCompare = [];

			if (getCookie('inCompare')) {
				elementsInCompare = getCookie('inCompare').split('|');
			}

			if (elementsInCompare.length > 0) {
				addToCompareButtons.each(function (btn) {
					var elementID = $(this).parent('.compare_button').data('element-id');

					if ($.inArray(elementID.toString(), elementsInCompare) !== -1) {
						$(this).hide().siblings('.goto_compare').show();
					}
				});
			}
		},
		addToCompareHandler: function() {
			var addToCompareButton = $("a.compare_button.add_compare");

			if (application.isEipEnabled()) {
				addToCompareButton.die();
			} else {
				var self = this;
				addToCompareButton.die('click');
				addToCompareButton.live('click', function(e) {
					var compareButton	= $(e.target),
						toCompareButton = compareButton.siblings('.goto_compare'),
						preloader 		= compareButton.siblings(".compare_preloader"),
						elementID 		= compareButton.parent().data('element-id'),
						compareCookies	= getCookie('inCompare');

					if (!compareCookies || compareCookies && compareCookies.split('|').length < 3) {
						preloader.show();
					}

					$.ajax({
						url: compareButton.attr('href'),
						success: function(data) {
							preloader.hide(400, function() {
								if (!data.result) {
									$('.modal-compare-error-text .error-text').text(data.message);
									$("#compare_error_popup").modal('show');
								} else {
									compareButton.hide();
									toCompareButton.show();
								}
							});

							if (elementID > 0 && data.result) {
								if (!getCookie('inCompare')) {
									setCookie('inCompare', elementID, 0, '/');
								} else {
									appendCookie('inCompare', elementID);
								}
							}
						}
					})

					return false;
				})
			}
		},
		removeFromCompareHandler: function() {
			var self = this,
				removeFromCompareButton = $("a.compare-delete-item");

			removeFromCompareButton.click(function(e) {
				var removeUrl 	= $(this).attr('href'),
					column 		= $(this).parent('th').index(),
					elementID 	= $(this).parent('th').data('element-id');

				$.ajax({
					url: removeUrl,
					success: function() {
						self.itemsTable.find('tr').each(function() {

							$(this).find('td, th').eq(column).remove();
							if ($(this).find('td, th').length < 2) {
								self.itemsTable.hide();
								self.noItemsBlock.show();

								deleteCookie('inCompare');
							}
						})

						if (getCookie('inCompare')) {
							removeFromCookie('inCompare', elementID);
						}

					}
				});

				return false;
			});
		},
		initEditInPlaceEvents: function () {
			var self = this;

			uAdmin.eip.bind('Enable', function () {
				self.addToCompareHandler();
				$("a.compare-delete-item").hide();
			});

			uAdmin.eip.bind('Disable', function (when) {
				self.addToCompareHandler();
				$("a.compare-delete-item").show();
			});
		},
	},
	customForms: {
		init: function() {
			this.initValidation();
		},
		bindDatePicker: function(element) {
			element.datepicker();
			element.inputmask({
				alias: 'date',
				placeholder: 'ДД/ММ/ГГГГ'
			});
		},
		bindNumberValid: function(element) {
			element.inputmask('integer', {rightAlign: false});
		},
		bindFloatValid: function(element) {
			element.inputmask('Regex', {
				regex: "[0-9]+[\,\.]?[0-9]*?",
			});
		},
		initValidation: function() {
			var _self = this,
				form = $(".site_form.feedback_form");

			if (!form.length) return;

			var inputs = form.find('input');

			inputs.each(function(e) {
				var el = $(inputs[e]);
				if (el.data('validate') == 'date') {
					_self.bindDatePicker(el);
				}
				if (el.data('validate') == 'int') {
					_self.bindNumberValid(el);
				}
				if (el.data('validate') == 'float') {
					_self.bindFloatValid(el);
				}
			});
		}
	},
	menu: {
		init: function() {
			// Init edit in place events.
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				this.initEditInPlaceEvents();

				if (application.isEipEnabled()) {
					this.onEnableEditInPlace();
				}
			}

		},
		initEditInPlaceEvents: function() {
			var self = this;

			uAdmin.eip.bind('Enable', function () {
				self.onEnableEditInPlace();
			});

			uAdmin.eip.bind('Disable', function (when) {
				if ($("a.direction_block_link").length) {
					$("a.direction_block_link").unbind('click');
				}
			});
		},
		onEnableEditInPlace: function() {
			if ($("a.direction_block_link").length) {
				$("a.direction_block_link").click(function(ev) {
					var _elem = $(ev.toElement);

					_elem.parent('a').click(function(ev) {
						ev.preventDefault();
					});
				})
			}
		}
	},
	customPopupMessage:{
		message: '',
		messageCounter: 1,
		style: 'font-weight: 600;',
		init: function(){
			var cookie_popupMessageCounter = getCookie('popupMessageCounter');
			if(cookie_popupMessageCounter) this.messageCounter = cookie_popupMessageCounter;

			if(parseInt(this.messageCounter) > 0) {
				setCookie('popupMessageCounter',this.messageCounter-1);
				popup = $.fancybox({
					'padding'			:	30,
					'overlayShow'		:	true,
					'showCloseButton'	:	false,
					'content'			:	'<div style="max-width: 660px">' + this.message + '</div>'
				});
			}
		},
		showPopup: function() {
			$.fancybox({
				'padding'			:	30,
				'overlayShow'		:	true,
				'showCloseButton'	:	false,
				'content'			:	'<div style="max-width: 660px; ' + this.style + '">' + this.message + '</div>'
			});
		},
		closePopup: function() {
			$.fancybox.close();
		}
	},
	appointments: {
		constants: {
			__hiddenClass: 'appointments-hidden',
			__noDataMessage: 'Добавьте Услуги, тогда Запись заработает',
			__wrapper: false,
			__data: {},
			__choises: {},
			__loaded: {},
			__step: 0,
			__workTime: ['09:00', '18:00'],
			__chosenDate: '',
			__loadedMonth: [],
			__mobileWidth: 1190,
			__cropChar: '..',
			__cropLimit: 8,
			__defaultPersonalPhoto: '/base-img/person.png',
			__acceptedStatus: '2'
		},

		/**
		 * Иницилизирует виджет
		 * @returns {boolean}
         */
		init: function() {
			var _self = this;

			if (typeof _ == "undefined" || typeof moment == "undefined") {
				return false;
			}
			_self.constants.__wrapper = $(".appointments");
			_self.getData();
			
		},
		getData: function() {
			var _self = this;

			$.ajax({
				url: '/udata/content/getAppointmentsData/',
				dataType: 'json',
				success: function(data) {
					_self.constants.__data = data;
					_self.constants.__loadedMonth.push(moment().format('MMYYYY'));
					if (_self.isDataLoaded()) {
						_self._startAppointments();
					} else {
						_self.showMessage(_self.constants.__noDataMessage);
					}
				}
			})
		},
		/**
		 * Проверяет загружены ли данные для отрисовки виджета
		 * @returns {boolean}
         */
		isDataLoaded: function() {
			return !_.isUndefined(this.constants.__data['service']);
		},
		/**
		 * Иницилизирует отрисовку виджета
		 * @private
         */
		_startAppointments: function() {
			this.showStep('service');
		},
		/**
		 * Отображает сообщение message
		 * @param {String} message текст сообщения
		 */
		showMessage: function(message) {
			var htmlElement = document.createElement('h1');
			$(htmlElement).text(this.constants.__noDataMessage);
			this.constants.__wrapper.html(htmlElement);
		},
		draw: {
			stepDone: $('<div class="step-done__wrapper"><span class="step-done">ок</span><span class="online-entry__btn">Изменить</span></div>'),
			entryButton: $('<span class="online-entry__btn">Выбрать</span>'),

			/**
			 * Проверяет работает ли сервис и мастера в переданное время и день
			 * @param {String} time текстовое представление промежутка времени в формате hh:mm-hh:mm
			 * @param {Number} day порядковый номер дня недели, начинается с нуля
			 * @param {JSON} data полные данные записи от сервера
			 * @param {Object} service информация о текущей услуге
			 * @private
			 */
			_isAvailableTime: function(time, day, data, service) {
				var commonOpeningHours = data.default.days;

				if (!isIncluded(time, day, commonOpeningHours, service.time)) {
					return false;
				}

				var specialists = service.personal;
				var hasTime = false;

				for (var i = 0; i < specialists.length; i++) {
					var specialistDays = data.personal[specialists[i]].days;
					if (isIncluded(time, day, specialistDays)) {
						hasTime = true;
						break;
					}
				}

				if (!hasTime) {
					return false;
				}

				return true;

				/**
				 * Проверяет полностью ли может быть включено время выполнения услуги
				 * @param {String} time промежуток времени в формате hh:mm-hh:mm,
				 * в котором может быть выполнена услуга
				 * @param {Number} day орядковый номер дня недели, начинается с нуля
				 * @param String} openingHours промежуток времени в формате hh:mm-hh:mm,
				 * который ограничивает часы выполнения услуги
				 * @returns {boolean}
				 */
				function isIncluded(time, day, openingHours) {
					if (_.isUndefined(openingHours[day])) {
						return false;
					}

					var timeFrom = moment.duration(splitTime(time).from);
					var timeTo = moment.duration(splitTime(time).to);
					var currentOpeningHours = openingHours[day];
					var openningHoursFrom = moment.duration(splitTime(currentOpeningHours).from);
					var openningHoursTo = moment.duration(splitTime(currentOpeningHours).to);
					var serviceDuration = moment.duration(service.time);

					if ((timeFrom + serviceDuration) > timeTo || (timeFrom + serviceDuration) > openningHoursTo) {
						return false;
					}

					if ((timeTo - serviceDuration) < timeFrom || (timeTo - serviceDuration) < openningHoursFrom) {
						return false;
					}

					return true;
				}

				/**
				 * Преобразует текстовое представление интервала времени в объект
				 * @param {String} time интервал времени в формате hh:mm-hh:mm
				 * @returns {{from: {String}, to: {String}}}
				 */
				function splitTime(time) {
					return {
						from: time.split('-')[0],
						to: time.split('-')[1]
					}
				}
			},
			/**
			 * Обрезает заголовок, если его длина превышает определенное количество символов
			 * @param {String} title обрабатываемый заголовок
             * @returns {String} обрезанный заголовок
             */
			chopTitle: function(title) {
				var _self = application.appointments;
				var cropLimit = _self.constants.__cropLimit;
				var cropString = _self.constants.__cropChar;

				if (title.length < cropLimit) {
					return title;
				}
				return title.substring(0, cropLimit - 1) + cropString;
			},
			/**
			 * Проверяет является ли текущее устройство - мобильным
			 * @returns {boolean} результат проверки
             */
			isMobile: function() {
				return ($(window).width() < application.appointments.constants.__mobileWidth);
			},
			/**
			 * Удаляет тексты кнопок в заголовках шагов
			 */

			removeButtonsText: function() {
				$('.step-done__wrapper span').text('');
			},
			/**
			 * Устанавливает обработчик события отображения времени работы сервиса
			 * @param {jQuery|HTMLElement} serviceElement, элемент услуги, для которой отображается время работы
             */
			bindTimeHover: function(serviceElement) {
				var _self = application.appointments;
				var recordingTime = $('.recording-time');

				$(serviceElement).hover(function() {
					var service = $(this).data('service');

					recordingTime.show().siblings().hide();
					_self.draw.recordingTime(service);
				}, function() {
					recordingTime.hide().siblings().show();
				})
			},

			/**
			 * Устанавливает обработчик события отображения времени работы сервиса для мобильной версии виджета
			 * @param {jQuery|HTMLElement} serviceElement, элемент услуги, для которой отображается время работы
             */
			showMobileRecordingTime: function(serviceElement) {
				var _self = application.appointments;
				var recordingTime = $('.recording-time');
				var serviceItems = $('service-chooose li');

				 $(serviceElement).click(function() {
					 if (isHidden(recordingTime)) {
						 recordingTime.show().siblings().show();
						 _self.draw.recordingTime($(this).data('service'));
						 serviceItems.hide();
						 $(this).show();
						 serviceItems.attr('data-status', '');
						 $(this).attr('data-status', 'active');
					 } else {
						 recordingTime.hide();
						 serviceItems.show();
					 }
				 });
				/**
				 * Проверяет скрыт ли элемент
				 * @param element
                 * @returns {boolean} результат проверки
                 */
				function isHidden(element) {
					return (element.css('display') == 'none' || element.css('visibility') == 'hidden');
				}
			},
			/**
			 *
			 * @param service
             */
			recordingTime: function(service) {
				var _self = application.appointments,
					_data = _self.constants.__data;
				var wrapper = $(".recording-time");

				var master_list = wrapper.find('.masters-list').empty();
				var master_count = 4;
				if (service.personal) {
					for (var i in service.personal) {
						var personal_id = service.personal[i];

						var more_masters_text = "";

						if (i == master_count - 1 && service.personal.length > master_count) {
							more_masters_text = " (И ещё " + (service.personal.length - master_count) + ")";
						}

						if (i >= master_count) {
							break;
						}

						master_list.append(
							$("<li/>", {
								'text': _data['personal'][personal_id]['name'] + more_masters_text
							})
						)
					}
				}

				var days = {
					0: moment(),
					1: moment().add(moment.duration({'days': 1})),
					2: moment().add(moment.duration({'days': 2})),
					3: moment().add(moment.duration({'days': 3}))
				};

				var times = {
					'08:00-12:00': 'утро',
					'12:00-16:00': 'день',
					'16:00-20:00': 'вечер'
				};

				var entries = (_.isUndefined(_data['entry']['service'])) ? "undefined" : _data['entry']['service'][service['id']];
				var service_time = _data['service'][service['id']].time;

				var time_wrapper = wrapper.find('.recording-time-selection__wrapper').empty();

				/**
				 * Возвращает диапазон, содержащий только "полные" промежутки
				 * @param {Number} start начало диапазона
				 * @param {Number} end конец диапазона
				 * @param {Number} step шаг
				 * @returns {*}
				 */
				var getFullRange = function (start, end, step) {
					var range = _.range(start, end, step);

					if (range.length > 0) {
						var lastElement = range[range.length - 1];

						if (end - lastElement < step) {
							range.splice(range.length - 1, 1);
						}
					}

					return range;
				}

				for (var i in days) {
					var entry_date = days[i].format('DD.MM.YYYY'),
						entries_date = {};

					if (!_.isUndefined(entries)) {
						entries_date = entries[entry_date];
					}

					var c_day = days[i].calendar(),
						short_day = days[i].format('ddd'),
						c_item = $("<div/>", {
							'class': 'recording-time__item',
							'text': c_day
						}),
						time_item = $("<div/>", {
							'class': 'recording-time__selection'
						});
					if (!_self.draw.isMobile()) {

						c_item.append($("<span/>").text(short_day));

					}

					time_item.append(c_item);

					for (var t in times) {
						var ex_time = t.split('-');
						var time_class = '';

						var intersections = 0;
						var exTimeFrom = moment.duration(ex_time[0]);
						var exTimeTo = moment.duration(ex_time[1]);
						var serviceDuration = moment.duration(service_time);
						var periods = getFullRange(exTimeFrom, exTimeTo, serviceDuration);
						var period_total = periods.length;

						for (var d in entries_date) {
							if (_self.haveIntersectionBetween(ex_time[0], ex_time[1], entries_date[d].time)) {
								intersections++;
							}
						}

						if (!this._isAvailableTime(t, days[i].weekday(), _data, service) || (intersections * 100)/period_total >= 100) {
							time_class = 'closed';
						} else {
							time_class = 'free';
						}

						if (moment().weekday() == days[i].weekday()) {
							if (_data['default']['now'] == '0') {
								time_class = 'closed';
							}
						}

						var t_time = c_item.clone().addClass(time_class).text(times[t]);
						time_item.append(t_time);
					}

					time_wrapper.append(time_item);
				}

			},

			/**
			 * Отрисовка шага service
			 * @param data
             * @returns {boolean}
             */
			service: function(data) {
				if (typeof data == "undefined") {
					return false;
				}

				var list = $(".service-choose"),
					_self = application.appointments;

				if (list.children().length > 1) {
					return false;
				}

				var category_html = $("<div/>", {
						'class': 'service-type'
					}),
					service_item = $("<span/>", {
						'class': 'service-item'
					}),
					service_price = $("<span/>", {
						'class': 'service-price'
					});

				var category = _self.constants.__data['scats'];

				for (var cat in category) {
					var cat_item = category[cat],
						ul = $("<ul/>");

					list.append(category_html.clone().text(cat));

					for (var service in cat_item) {
						var s_id = cat_item[service],
							li = $("<li/>"),
							item = data[s_id];

						li.append(service_item.clone().append($("<span/>", {
							'text': item.name
						})));
						li.append(service_price.clone().text(
							item.cost ? item.cost : ''
						));
						li.data('service', item);
						li.data('personal', item.personal);
						li.data('category', cat);

						if (!_self.draw.isMobile()) {
							_self.draw.bindTimeHover(li);
							li.click(function(event) {
								$(this).parents('service-choose').find('li').removeClass('selected');
								$(this).addClass('selected');

								_self.constants.__choises['service'] = $(this).data('service');
								_self.constants.__choises['category'] = $(this).data('category');

								_self.showStep('personal', $(this).data('personal'));

								var stepDoneButton = _self.draw.stepDone.clone();
								stepDoneButton.click(function() {

									_self.showStep('service');

								});

								var serviceStep = $('#data-service');
								serviceStep.addClass('step-passed').find('.online-entry__title').append(stepDoneButton);
								serviceStep.find('.online-entry__choise').text($(this).data('service').name)
							});
						} else {
							_self.draw.showMobileRecordingTime(li);
							var nextStepBtn = $('.mobile_next_step');

							nextStepBtn.click(function() {
								var activeLi = $('[data-status="' + 'active' + '"]');
								_self.constants.__choises['service'] = activeLi.data('service');
								_self.constants.__choises['category'] = activeLi.data('category');
								_self.constants.__choises['personal'] = activeLi.data('personal');

								_self.showStep('personal', activeLi.data('personal'));

								var stepDoneButton = _self.draw.stepDone.clone();

								stepDoneButton.click(function() {

									_self.showStep('service');

								});
								var serviceStep = $('#data-service');
								serviceStep.addClass('step-passed').find('.online-entry__title').append(stepDoneButton);
								_self.draw.removeButtonsText();
								var serviceTitle = activeLi.data('service').name;
								serviceTitle = _self.draw.chopTitle(serviceTitle);
								serviceStep.find('.online-entry__choise').text(serviceTitle);
							});
						}


						ul.append(li);
					}

					list.append(ul);
				}

				list.find('li .service-item span').hoverForMore({
					speed: 60.0,		// Measured in pixels-per-second
					loop: false,		// Scroll to the end and stop, or loop continuously?
					gap: 20,		// When looping, insert this many pixels of blank space
					target: false,		// Hover on this CSS selector instead of the text line itself
					removeTitle: true,	// By default, remove the title attribute, as a tooltip is redundant
					snapback: true,		// Animate when de-activating, as opposed to instantly reverting
					addStyles: true,	// Auto-add CSS; leave this on unless you need to override default styles
					alwaysOn: false,	// If you're insane, you can turn this into a <marquee> tag. (Please don't.)
				});

				$("#service-loader").remove();
			},
			/**
			 *
			 * Отрисовка шага personal
			 * @param data
             * @returns {boolean}
             */
			personal: function(data) {
				var _self = application.appointments,
					ids = Object.keys(data),
					stepDoneButton = _self.draw.stepDone.clone();

				var adminPersonal = {
					photo: '/base-img/person.png',
					description: 'Администратор сервиса',
					name: 'Администратор',
					id: '*'
				};

				stepDoneButton.off('click').click(function() {
					_self.showStep('personal', ids)
				});

				$(".operator_click_btn").click(function() {
					_self.constants.__choises['personal'] = adminPersonal;
					_self.showStep('entry', '*');

					var personalStep = $('#data-personal');
					personalStep.find('.step-done__wrapper').remove();
					personalStep.addClass("step-passed").find(".online-entry__title").append(stepDoneButton);

					var adminTitle = adminPersonal.name;

					if (_self.draw.isMibile()) {

						_self.draw.removeButtonsText();
						adminTitle = _self.draw.chopTitle(adminTitle);

					}
					personalStep.find(".online-entry__choise").text(adminTitle);
					return false;
				});

				if (_.isUndefined(data)) {
					return false;
				}

				var list = $(".master-list").empty();

				var chosen_person = false;
				if (!_.isUndefined(_self.constants.__choises['personal'])) {
					chosen_person = (!_.isUndefined(_self.constants.__choises['personal'].id)) ?
						_self.constants.__choises['personal'].id : false;
				}

				var chosen_service = _self.constants.__choises['service'].id;
				if (!list.data('service') || (list.data('service') != chosen_service)) {
					list.data('service', chosen_service);
					chosen_person = false;
				}

				if (_.isEmpty(data)) {
					data = [adminPersonal]
				}

				var person_item = $("<div/>", {
						'class': 'master-item'
					}),
					person_photo = $("<div/>", {
						'class': 'master-photo'
					}),
					person_info = $("<div/>", {
						'class': 'master-info'
					}),
					person_name = $("<div/>", {
						'class': 'master-name'
					}),
					person_desc = $("<div/>", {
						'class': 'master-description'
					});

				for (var i in data) {
					var item = person_item.clone(),
						photo = getPersonPhoto(data, i),
						img = $("<img/>", {
							'src': photo
						});

					item.append(person_photo.clone().append(img));

					var info = person_info.clone(),
						name = person_name.clone().text(data[i].name),
						desc = person_desc.clone().text(
							(data[i].description) ? data[i].description : ''
						),
						entryButton = _self.draw.entryButton.clone();

					entryButton.data('personal_id', data[i].id);
					entryButton.data('personal', data[i]);

					if (chosen_person == entryButton.data('personal_id')) {
						item.addClass('selected');
					}

					entryButton.click(function() {
						var master_item = $(this).parents('.master-item');
						master_item.addClass('selected').siblings().removeClass('selected');

						_self.constants.__choises['personal'] = $(this).data('personal');
						_self.showStep('entry', $(this).data('personal_id'));

						var personalStep = $('#data-personal');
						personalStep.addClass("step-passed").find(".online-entry__title").append(stepDoneButton);

						if (_self.draw.isMobile()) {
							_self.draw.removeButtonsText();
						}

						var personalTitle = $(this).data('personal').name;
						if (_self.draw.isMobile()) {
							personalTitle = _self.draw.chopTitle(personalTitle);
						}

						personalStep.find(".online-entry__choise").text(personalTitle);


					});

					info.append(name, desc, entryButton);
					item.append(info);
					list.append(item);
				}
				/**
				* @param data
				* @param id
				* returns {String}
				*/
				function getPersonPhoto(data, id) {
					if (!_.isUndefined(data[id].photo)) {
						return data[i].photo;	
					}
					return _self.constants.__defaultPersonalPhoto;
				}
			},
			entry: function(data) {
				$("#datepicker").datepicker("refresh");
			},
			confirm: function(data) {
				var list = $(".online-entry__ordering").find('ul'),
					_self = application.appointments,
					_c = _self.constants.__choises;

				list.empty();

				var submit_array = {};

				for (var i in _c) {
					var list_item = $("<li/>"),
						item = _c[i];

					if (i != "category") {
						if (typeof item == "object") {
							list_item.text(item.name);
							submit_array[i] = item.id;
						} else {
							list_item.text(item);
							submit_array[i] = item;
						}

						list.append(list_item);
					}

					submit_array['full_' + i] = item;
				}

				var submit_form = $(".online-entry__ordering form"),
					submit_fields = submit_form.find('input');

				submit_fields.inputmask();

				var create_button = $("#create-appointment");

				create_button.click(function(e) {
					var form = $(this).parents('form');
					var checkRecaptcha = form.find('.g-recaptcha-umi');
					if (checkRecaptcha.length == 0) {
						form.submit();
					} else {
						grecaptcha.execute(form.find(".g-recaptcha-umi").data("recaptcha-widget-id"));
					}
					return false;
				});

				submit_form.submit(function(e) {
					e.preventDefault();

					var $form = $(this);
					var $acceptPdn = $form.find('input[name=acceptPdn]').first();
					var $acceptPdnError;
					var form_array;

					if ($acceptPdn.length > 0 && !$acceptPdn.attr('checked')) {
						$acceptPdnError = $form.find('.webforms_error_text');
						application.customPopupMessage.message = ($acceptPdnError.length > 0) ? $acceptPdnError.first().text() : "Не отмечен обязательный чекбокс";
						application.customPopupMessage.showPopup();
						setTimeout(function() {
							application.customPopupMessage.closePopup();
						}, 2000);
						return;
					}

					form_array = $form.serializeArray();

					for (var i in form_array) {
						var name = form_array[i]['name'],
							value = form_array[i]['value'];

						submit_array[name] = value;
					}

					create_button.hide();

					$.ajax({
						type: 'POST',
						url: '/udata/content/postAppointment/',
						data: submit_array,
						dataType: 'json',
						success: function(result) {

							if (result.error) {
								application.customPopupMessage.message = result.text;
							} else {
								application.customPopupMessage.message = "Заявка успешно оформлена.<br/> Администратор свяжется с вами по телефону/email.";
							}

							application.customPopupMessage.showPopup();

							if (result.error) {

								create_button.show();

								setTimeout(function() {
									application.customPopupMessage.closePopup();
								}, 2000);
							} else {
								setTimeout(function() {
									application.customPopupMessage.closePopup();
									window.location.reload();
								}, 5000);
							}

							$('#closePopup').on('click',function(){
								$('#fancybox-overlay').trigger('click');

								window.location.reload();
								return false;
							})
						}
					});

					return false;
				});
			}
		},
		binder: {
			calendar: {
				showFreeTime: function(date) {
					$(".choose-time").show().siblings().hide();

					var _self = application.appointments,
						_p = _self.constants.__choises['personal'],
						_s = _self.constants.__choises['service'];

					if (_p && _p['id'] == "*") {
						_p = _self.constants.__data['default'];
					}

					var date_string = $("#datepicker").datepicker("getDate");
					var day_of_week = Number(moment(date_string).format('e'));

					var work_time = (!_.isUndefined(_p['days'][day_of_week])) ? _p['days'][day_of_week] : false;
					var service_time = _s.time;

					if (typeof _p !== 'undefined' && _p['now'] != null && typeof _p['now'] !== 'string') {
						if (moment(date_string).format('DD.MM.YYYY') === moment().format('DD.MM.YYYY')) {
							work_time = _p['now'][day_of_week];
							if (work_time === '0') {
								work_time = false;
							}
						}
					}

					var split_time = work_time.split('-'),
						start_time = split_time[0],
						end_time = split_time[1];

					var start_duration = moment.duration(start_time),
						end_duration = moment.duration(end_time),
						service_duration = moment.duration(service_time);

					var time_range = _.range(start_duration, end_duration, service_duration);
					var list = $(".choose-time").find(".choose-time_selection").empty();
					var entries = _self.constants.__data['entry']['personal'],
						entry_date = moment(date_string).format('DD.MM.YYYY');

					var date_entries = (entries &&
					!_.isUndefined(entries[_p.id]) &&
					!_.isUndefined(entries[_p.id][entry_date])) ?
						entries[_p.id][entry_date] :
						false;
					
					if (!date_entries) {
						entries = _self.constants.__data['entry']['service'];

						date_entries = (entries &&
						!_.isUndefined(entries[_s.id]) &&
						!_.isUndefined(entries[_s.id][entry_date])) ?
							entries[_s.id][entry_date] :
							false;
					}

					for (var i in time_range) {
						var hours = moment.duration(time_range[i]).hours(),
							hour_duration = (hours.toString().length < 2) ? '0' + hours : hours;

						var minutes = moment.duration(time_range[i]).minutes(),
							minutes_duration = (minutes.toString().length < 2) ? '0' + minutes : minutes;

						var service_split_time = hour_duration + ":" + minutes_duration;

						var item_class = (date_entries && _self.haveIntersection(service_split_time, service_duration, date_entries)) ? "time-output" : "time-free";

						var div_item = $("<div/>", {
							'class': 'choose-time_item ' + item_class,
							'text': service_split_time
						}).data({
							'time': service_split_time,
							'date': date
						});

						div_item.click(function() {
							if ($(this).hasClass('time-output') || $(this).hasClass('time-busy')) {
								return false;
							}

							$(this).addClass('selected').siblings().removeClass('selected');

							_self.constants.__choises['time'] = $(this).data('time');
							_self.constants.__choises['date'] = $(this).data('date');

							var stepDoneButton = _self.draw.stepDone.clone();

							stepDoneButton.click(function() {
								_self.showStep('entry')
							});

							var entryStep = $('#data-entry');
							entryStep.addClass("step-passed").find(".online-entry__title").append(stepDoneButton);

							if (_self.draw.isMobile) {

								_self.draw.removeButtonsText();	

							}

							entryStep.find(".online-entry__choise").text($(this).data('date') + " " + $(this).data('time'));

							_self.showStep('confirm');
						});

						list.append(div_item);
					}
				},
				disableDate: function(date){
					var string = $.datepicker.formatDate('yy-mm-dd', date);
					var weekend = !$.datepicker.noWeekends(date)[0];

					var thisDate = moment(date);
					var currentDate = moment();
					var dayOfWeek = Number(moment(date).format('e'));

					var _self = application.appointments,
						_p = _self.constants.__choises['personal'];

					if (_p && _p['id'] == "*") {
						_p = _self.constants.__data['default'];
					}

					if (typeof _p !== 'undefined' && _p['now'] != null && typeof _p['now'] !== 'string' && typeof _p['now'][dayOfWeek] !== 'undefined') {
						if (moment(date).format('DD.MM.YYYY') === moment().format('DD.MM.YYYY') && _p['now'][dayOfWeek] == '0') {
							return [false, 'ui-disabled'];
						}
					}

					if (moment(thisDate).isBefore(currentDate, 'day')) {
						return [false, "ui-disabled"];
					}

					if (_.isUndefined(_p)) {
						return [false, "ui-weekend"];
					}

					if (!_.isUndefined(_p) &&
						(_.isUndefined(_p['days']) ||
						!(_p['days'][dayOfWeek]))) {
						return [false, "ui-weekend"];
					}

					if (_p['weekends']) {
						for (i = 0; i < _p['weekends'].length; i++) {
							if (thisDate.format('DD.MM.YYYY') == _p['weekends'][i]) {
								return [false, "ui-weekend"];

							}
						}
					}

					return [true, "ui-enabled"];
				}
			}
		},
		showStep: function(name, ids) {
			var _self = this,
				_ids = ids || false;

			var	_data = {};

			var need_ids = (name == "personal" || name == "entry");

			if (need_ids && _ids) {
				for (var i in _ids) {
					_data[_ids[i]] = _self.constants.__data[name][_ids[i]];
				}
			} else if (need_ids && !_ids) {
				_data = {};
			} else {
				_data = _self.constants.__data[name];
			}

			$("#data-" + name)
				.addClass('selected')
				.removeClass('step-passed')
					.find('.step-done__wrapper')
						.remove()
						.end()
				.siblings()
				.removeClass('selected');

			$("#data-" + name)
				.nextAll('.step-passed')
					.find('.step-done__wrapper')
					.remove();

			switch(name) {
				case 'service':
					_self.draw.service(_data);
					break;
				case 'personal':
					_self.draw.personal(_data);
					break;
				case 'entry':
					_self.draw.entry(_data);
					break;
				case 'confirm':
					_self.draw.confirm(_data);
					break;
				default:
					break;
			}
		},
		haveIntersection: function(service_start, service_duration, entries) {
			var duration = moment.duration(service_start);
			var end_duration = duration + service_duration;
			var acceptedStatus = this.constants.__acceptedStatus;

			for (var i in entries) {
				var entry_serv_duration;
				if (entries[i]['duration']) {
					entry_serv_duration = moment.duration(entries[i]['duration']);
				} else {
					entry_serv_duration = moment.duration(this.constants.__data['service'][parseInt(entries[i]['service'])]['time']);
				}
				var serv_start_duration = moment.duration(entries[i]['time']);
				var serv_end_duration = serv_start_duration + entry_serv_duration;

				if (duration >= serv_start_duration && duration < serv_end_duration && entries[i]['status'] == acceptedStatus) {
					return true;
				}
			}
		},
		haveIntersectionBetween: function(time_start, time_end, service_time) {
			var start_dur = moment.duration(time_start),
				end_dur = moment.duration(time_end),
				serv_dur = moment.duration(service_time);

			if (serv_dur >= start_dur && serv_dur <= end_dur) {
				return true;
			} else {
				return false;
			}
		}
	},
	gamification: {
		init: function() {
			// Init edit in place events.
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				this.initEditInPlaceEvents();
			}

		},
		initEditInPlaceEvents: function() {
			var self = this;

			uAdmin.eip.bind('Enable', function () {
				setCookie('gamification_edit_site', 1);
			});
		},
	},
	characteristicsControl:{
		init: function(){
			this.initEvents();
			this.scanEqualPrice();
		},
		initEvents: function(){
			var _self = this;
			
			$(window).on("fancybox-opened",function(){
				_self.scanEqualPrice();
			});
			
			$('.item_characteristics input[type="radio"]').on('click',function(){
				if($('a.button_buy:not(.gotobasket)').is(":hidden")){
					application.emarket.initButtonBuy(application, $('a.button_buy:not(.gotobasket)'))
					$('a.button_buy:not(.gotobasket)').show();
					$('a.button_buy:not(.gotobasket)').siblings('.gotobasket').addClass('gotobasket_hidden');
				}
			})
		},
		scanEqualPrice: function(){
			var _self = this;
			
			var previousValue = 0;
			var hidePrices = true;
			$('.item_characteristics .char-float').each(function( i, node ) {
				if(previousValue == 0){
					previousValue = parseFloat($(node).text());
				}
				
				if(previousValue != parseFloat($(node).text())){
					_self.showCharacteristicPrice();
					hidePrices = false;
				}
			});
			
			if(hidePrices){
				_self.hideCharacteristicPrice()
			}
		},
		hideCharacteristicPrice: function(){
			$('.item_characteristics').removeClass('showPrices');
		},
		showCharacteristicPrice: function(){
			$('.item_characteristics').addClass('showPrices');
		},
	},
	editCharacteristics: {
		init: function() {
			// Init edit in place events.
			if ('uAdmin' in window && 'eip' in window.uAdmin) {
				this.initEditInPlaceEvents();
			}

			this.initPopupClicks();
		},
		initEditInPlaceEvents: function() {
			var self = this;

			uAdmin.eip.bind('Enable', function () {
				self.initPopupClicks();
			});

			uAdmin.eip.bind('Disable', function() {
				$('.popup_characteristics').off('click');

				$('.buy_order_popup, .buy_button_popup').each(function() {
					application.optionedPricePopup.initOnNode($(this));
				});
			});

		},
		initPopupClicks: function() {
			var self = this;
			$('.popup_characteristics').on('click', function(e) {
				if(uAdmin.eip.enabled){
					e.preventDefault();

					$(this).parents('li, tr, .object-content, .object').find('.characteristics_edit').find('.fancybox-click').fancybox({
						'width': 640,
					});
					$(this).parents('li, tr, .object-content, .object').find('.characteristics_edit').find('.fancybox-click').click();

					return false;
				}
			});

			$(".submit-chars").on('click', function() {
				self.editCharFields($(this));
			});
		},
		editCharFields: function(element) {
			var edit = $(element).parents('.characteristics-popup'),
				pageId = edit.data('pageid');

			var arFields = {};

			edit.find('.option').each(function() {
				var opt = $(this);

				arFields[opt.data('position')] = {
					'text': opt.find('.char-text').val(),
					'float': opt.find('.char-float').val(),
					'int': opt.find('.char-int').val()
				}
			});

			$.ajax({
				url: '/udata/content/setCharacteristics/',
				data: {'char-fields': arFields, 'page-id': pageId},
				dataType: 'json',
				success: function(data) {
					$('.characteristics_edit[data-pageid=' + pageId + ']').parents('li, tr')
						.find('.catalog-objects-amount span')
						.text(data.new_quantity);
					
					$.each( $('.item_characteristics .opt_prop .opt_prop_rel'), function( key, node ) {
						$.each(arFields[key],function(property,properyValue){
							$(node).find('.char-' + property).text(properyValue);
						})
					});
					
					$.each( $('.item_characteristics .opt_prop input[name="item_characteristics"]'), function( key, node ) {
						$(node).val(arFields[key]['float']);
					});
					
					$.fancybox.close();
				}
			})

		}
	},
	isMobile: {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
		}
	},
	callbackButton:{
		config: {
			animationPeriod	: 2500,
			animationPart	: 300,
			maxButtonSize	: 35,
			minButtonSize	: 30,
			maxRotateAngle	: 40,
			openButOnTop	: 2000,
			overlay			: false,
			visibleOnScroll	: true
		},
		items: {
			callbackButtonOverlay	: null,
			buttonWrapper			: null,
			button					: null,
			link					: null,
			intervalID				: null,
			timeoutID				: null,
			visibilityTimeout		: null,
			scrollEvent				: null,
			phoneNumber				: null
		},
		init: function(app) {
			if(!!app.isMobile.any()){
				if(this.createButton()){
					this.initAnimation();
					this.initEvents();
				}
			}
		},
		createButton:function(){
			var _self = this;

			if(!!!document.getElementById('callbackButtonOn')) return false;

			var phone = document.getElementsByClassName('phone_number')[0];
			if (phone.textContent.trim() !== '') {
				var phoneElements = phone.textContent.match(/([+\d]+)/ig);
				_self.items.phoneNumber = phoneElements ? phoneElements.join('') : '';
			}

			if(_self.items.phoneNumber == '') return false;

			var body  = document.getElementsByTagName('body')[0];

			var callbackButtonOverlay  = document.createElement('div');
			callbackButtonOverlay.id   = 'umiCallbackButtonOverlay';
			callbackButtonOverlay.className  = 'umiCallbackButtonOverlay';

			var buttonWrapper  = document.createElement('div');
			buttonWrapper.id   = 'umiCallbackButtonWrapper';
			buttonWrapper.className  = 'umiCallbackButtonWrapper';

			var link  = document.createElement('a');
			link.href   = 'tel:' + _self.items.phoneNumber;

			var buttonDiv  = document.createElement('div');
			buttonDiv.id   = 'umiCallbackButton';
			buttonDiv.className  = 'umiCallbackButton';

			if(_self.config.overlay){
				body.appendChild(callbackButtonOverlay);
			}

			buttonWrapper.appendChild(link);
			link.appendChild(buttonDiv);
			body.appendChild(buttonWrapper);

			_self.items.callbackButtonOverlay = callbackButtonOverlay;
			_self.items.buttonWrapper = buttonWrapper;
			_self.items.button = buttonDiv;
			_self.items.link = link;

			return true;
		},
		visibility: function(visibility, delay){
			var _self = this,
				vis = visibility === undefined ? true : visibility,
				del = delay === undefined ? 0 : delay,
				visibleOnScroll = this.config.visibleOnScroll;

			clearTimeout(_self.items.visibilityTimeout);

			_self.items.visibilityTimeout = setTimeout(function() {
				if(vis || visibleOnScroll){
					_self.items.callbackButtonOverlay.style.display = 'block';
					_self.items.buttonWrapper.style.display = 'block';
				}else{
					_self.items.callbackButtonOverlay.style.display = 'none';
					_self.items.buttonWrapper.style.display = 'none';
				}
			}, del);
		},
		initAnimation: function(){
			var _self = this;

			callbackButtonOverlay = _self.items.callbackButtonOverlay;
			buttonWrapper = _self.items.buttonWrapper;
			button = _self.items.button;

			var animationPart = parseInt(_self.config.animationPart)
			if(animationPart >= parseInt(_self.config.animationPeriod)){
				animationPart = parseInt(_self.config.animationPeriod) - 1;
			}

			if(_self.items.intervalID){
				clearInterval(_self.items.intervalID);
			}

			if(_self.items.timeoutID){
				clearTimeout(_self.items.timeoutID);
			}

			_self.items.intervalID = setInterval(function() {
				button.style.transform = "rotate(" + parseInt(_self.config.maxRotateAngle) + "deg)";
				_self.items.timeoutID = setTimeout(function(){
					button.style.transform = "rotate(0deg)";
				}, animationPart);
			}, parseInt(_self.config.animationPeriod));

			button.onmouseenter = function(){
				button.style.backgroundSize = parseInt(_self.config.maxButtonSize) + "px";
			}

			button.onmouseout = function(){
				button.style.backgroundSize = parseInt(_self.config.minButtonSize) + "px";
			}
		},
		initEvents: function(){
			var _self = this;

			window.removeEventListener('scroll',_self.items.scrollEvent);

			var currentStatusFlag = 0;

			_self.items.scrollEvent = function() {
				var scrolled = window.pageYOffset || document.documentElement.scrollTop;

				if(scrolled > 10){
					if(currentStatusFlag !== 1){
						_self.visibility(false);
						currentStatusFlag = 1;
					}
				}else{
					if(currentStatusFlag !== 2){
						_self.visibility(true,parseInt(_self.config.openButOnTop));
						currentStatusFlag = 2;
					}
				}
			};

			window.addEventListener('scroll',_self.items.scrollEvent);
		},
		switchOff: function(){
			_self = this;
			_self.visibility(false);
			window.removeEventListener('scroll',_self.items.scrollEvent);
		}
	},
	buyOneClick: {
		init: function(){
			$('.button_buy_one_click').fancybox({
				'padding': 30,
			});

			var formOneClick = $('#form_one_click');
			var error = formOneClick.parent().find('.one_click_ajax_message');

			formOneClick.find('#button_confirm_buy_one_click').click(function(event) {
				event.preventDefault();
				error.hide();
				formOneClick.find('.webforms_error_text').hide();
				var checkRecaptcha = formOneClick.find('.g-recaptcha-umi');
				var result = true;

				formOneClick.find('.required').each(function(){
					var required = $(this).removeClass('verification_error');
					var formElements = $(this).find('input:not(.globalRecaptcha), textarea, select');

					if (validateRequired(formElements) === false) {
						result = false;
						required.addClass('verification_error');
						$(this).find('.webforms_error_text').show();
					}
				});

				if (result === true) {
					if (formOneClick.data("recaptcha-verified") || checkRecaptcha.length == 0) {
						formOneClick.submit();
					} else {
						grecaptcha.execute(checkRecaptcha.data("recaptcha-widget-id"));
					}
				}
			});

			formOneClick.submit(function() {
				if ($(this).find('.captcha_div').hasClass("required")) {
					return;
				}

				$.ajax({
					type: "POST",
					data: formOneClick.serializeArray(),
					dataType: 'json',
					url: '/emarket/sendOneClickOrder/',
					success: function(data) {
						if (data.status) {
							error.text(data.message);
							error.show();
							formOneClick.find('.captcha_input').val('');
							resetCaptcha(formOneClick);
						} else {
							$.fancybox({
								content: '<div style="padding:20px;">Заказ отправлен. <br /> Наш менеджер свяжется с вами для уточнения деталей заказа.</div>'
							});
						}
					}
				});
			});
		}
	},
	responsiveVideo: {
		init: function () {
			if($(window).width() < 769) {
				$(".general_wrap iframe").each(function(){
					if($(this).attr('src').includes('youtube')){
						$(this).wrap("<div class='responsive_Iframe'></div>");
					}
				});
			}
		}
	},
	/**
	 * Включает глобальную Google reCaptcha при необходимости
	 */
	globalRecaptcha: {
		init: function(app) {
			$('div.captcha_control').each(function() {
				var self = $(this);
				$.ajax({
					type: "GET",
					dataType: 'json',
					url: '/udata://custom/isGlobalRecaptchaEnabled/.json'
				}).done(function(data) {
					app.globalRecaptchaLoad.init(data, self);
				}).fail(function() {
					self.removeClass('hidden');
				});
			});
		}
	},
	/**
	 * Подгружает глобальную Google reCaptcha
	 */
	globalRecaptchaLoad: {
		init: function(data, captchaElement) {
			var isGlobalRecaptchaEnabled = data.result;

			if (isGlobalRecaptchaEnabled == 1) {
				$.ajax({
					type: "GET",
					dataType: 'json',
					url: '/udata://custom/globalRecaptchaContent/.json?' + Math.random()
				}).done(function(data) {
					captchaElement.empty();
					captchaElement.append(data.result);
					captchaElement.removeClass('hidden');
				});
			} else if (isGlobalRecaptchaEnabled == 2) {
				$.ajax({
					type: "GET",
					dataType: 'json',
					url: '/udata://custom/recaptchaV3IframeContent/.json'
				}).done(function(data) {
					captchaElement.append(data.result);
				});
				captchaElement.removeClass('hidden');
			} else {
				captchaElement.removeClass('hidden');
			}
		}
	}
}

first_message_1c = 'Для изменения дизайна вашего сайта, перейдите по ссылке:<br/> <a href="http://' + window.location.hostname + '/adminzone/design/design/">' + window.location.hostname + '/adminzone/design/design/</a>';

$(document).ready(function(){
    (function() {
		this.globalRecaptcha.init(this);
		this.MenuLazyLoad.init(this);
		this.AdapTempl.init(this);
		this.AdapTemplShop.init(this);
		this.AdapTemplCompany.init(this);
		this.AdapTemplPersonal.init(this);
		//Пока неактуально.	Данные о пользователе в js не требуются.
		//this.init(this);
		//this.frameKiller(this);
		this.fancybox.init(this);
		this.amountChecker.init(this);
		this.placeholders.init(this);
		this.verification.init(this);
		this.emarket.init(this);
		this.catalog.init(this);
		this.ajaxMail.init(this);
		this.stars.init(this);
		this.promoLine.init(this);
		this.modalMessage.init(this);
		this.extraGoods.init(this);
		this.compareGoods.init(this);
		this.menu.init(this);
		this.customForms.init(this);
		this.gamification.init(this);
		this.editCharacteristics.init(this);
		this.buyOneClick.init(this);
		this.responsiveVideo.init(this);

		this.characteristicsControl.init(this);
		this.callbackButton.init(this);

		//for 1C sites
		this.urlTools.parseUrl(window.location.search);
		if(this.urlTools.params['1c_site_create']){
			this.customPopupMessage.message = first_message_1c + '<div class="first_site_1c link_button">' +
				'<a class="green all_system_buttons" href="http://' + window.location.hostname + '/adminzone/design/design/">Сменить дизайн</a>' +
				'<a class="red all_system_buttons" href="#" id="closePopup">Оставить текущий дизайн</a></div>';
			this.customPopupMessage.init(this);
			$('#closePopup').on('click',function(){
				$('#fancybox-overlay').trigger('click');
				return false;
			})
		}
		this.appointments.init(this);
	}).call(application);
	application.counter.init();
	application.priceDisplay.init();
	application.priceWithDiscountDisplay.init();
	application.optionedPricePopup.init();

	/**
	 * Устанавливает флаг выполненной проверки, после решения Google reCaptcha для форм сайта
	 */
	siteFormRecaptchaCallback = function() {
		$('.site_form').data('recaptcha-verified', true).submit();
	}

	/**
	 * Устанавливает флаг выполненной проверки, после решения Google reCaptcha для форм сайта
	 */
	formOneClickRecaptchaCallback = function() {
		$('.form_one_click').data('recaptcha-verified', true).submit();
	}

	/**
	 * Устанавливает флаг выполненной проверки, после решения Google reCaptcha для формы вход/атворизация
	 */
	loginFormRecaptchaCallback = function() {
		$('#ajax_login_form').data('recaptcha-verified', true).submit();
	}

	/**
	 * Устанавливает флаг выполненной проверки, после решения Google reCaptcha для формы обратная связь
	 */
	ajaxFormRecaptchaCallback = function() {
		$('#order_form').data('recaptcha-verified', true).submit();
	}

	/**
	 * Отправка формы, после проверки Google reCaptcha для формы запись на прием
	 */
	appointmentFormRecaptchaCallback = function() {
		$('#appointment_form').submit();
	}

	/**
	 * Инициализирует Google reCaptcha после загрузки скрипта reCaptcha
	 */
	reCaptchaOnload = function() {
		$(".g-recaptcha-umi").each(function(index, element) {
			var attributes = {
				'sitekey'  : $(element).data('sitekey'),
				'size'     : $(element).data('size'),
				'callback' : $(element).data('callback'),
				'badge'    : 'inline'
			};
			$(element).attr('data-recaptcha-widget-id', grecaptcha.render(element, attributes));
		});
		$('.recaptcha_use_info').click(function(e) {
			e.preventDefault();
			$(this).parent().find('.grecaptcha-badge').toggle();
		});
		(function() {
			this.users.init(this);
		}).call(application);
	};
});

// Cloud Zoom V1.0.2
// (c) 2010 by R Cecco. <http://www.professorcloud.com>
// MIT License
//
// Please retain this copyright header in all versions of the software
(function($){function format(str){for(var i=1;i<arguments.length;i++){str=str.replace('%'+(i-1),arguments[i])}return str}function CloudZoom(jWin,opts){var sImg=$('img',jWin);var img1;var img2;var zoomDiv=null;var $mouseTrap=null;var lens=null;var $tint=null;var softFocus=null;var $ie6Fix=null;var zoomImage;var controlTimer=0;var cw,ch;var destU=0;var destV=0;var currV=0;var currU=0;var filesLoaded=0;var mx,my;var ctx=this,zw;setTimeout(function(){if($mouseTrap===null){var w=jWin.width();jWin.parent().append(format('<div style="width:%0px;position:absolute;top:75%;left:%1px;text-align:center" class="cloud-zoom-loading" >Loading...</div>',w/3,(w/2)-(w/6))).find(':last').css('opacity',0.5)}},200);var ie6FixRemove=function(){if($ie6Fix!==null){$ie6Fix.remove();$ie6Fix=null}};this.removeBits=function(){if(lens){lens.remove();lens=null}if($tint){$tint.remove();$tint=null}if(softFocus){softFocus.remove();softFocus=null}ie6FixRemove();$('.cloud-zoom-loading',jWin.parent()).remove()};this.destroy=function(){jWin.data('zoom',null);if($mouseTrap){$mouseTrap.unbind();$mouseTrap.remove();$mouseTrap=null}if(zoomDiv){zoomDiv.remove();zoomDiv=null}this.removeBits()};this.fadedOut=function(){if(zoomDiv){zoomDiv.remove();zoomDiv=null}this.removeBits()};this.controlLoop=function(){if(lens){var x=(mx-sImg.offset().left-(cw*0.5))>>0;var y=(my-sImg.offset().top-(ch*0.5))>>0;if(x<0){x=0}else if(x>(sImg.outerWidth()-cw)){x=(sImg.outerWidth()-cw)}if(y<0){y=0}else if(y>(sImg.outerHeight()-ch)){y=(sImg.outerHeight()-ch)}lens.css({left:x,top:y});lens.css('background-position',(-x)+'px '+(-y)+'px');destU=(((x)/sImg.outerWidth())*zoomImage.width)>>0;destV=(((y)/sImg.outerHeight())*zoomImage.height)>>0;currU+=(destU-currU)/opts.smoothMove;currV+=(destV-currV)/opts.smoothMove;zoomDiv.css('background-position',(-(currU>>0)+'px ')+(-(currV>>0)+'px'))}controlTimer=setTimeout(function(){ctx.controlLoop()},30)};this.init2=function(img,id){filesLoaded++;if(id===1){zoomImage=img}if(filesLoaded===2){this.init()}};this.init=function(){$('.cloud-zoom-loading',jWin.parent()).remove();$mouseTrap=jWin.parent().append(format("<div class='mousetrap' style='background-image:url(\".\");z-index:999;position:absolute;width:%0px;height:%1px;left:%2px;top:%3px;\'></div>",sImg.outerWidth(),sImg.outerHeight(),0,0)).find(':last');$mouseTrap.bind('mousemove',this,function(event){mx=event.pageX;my=event.pageY});$mouseTrap.bind('mouseleave',this,function(event){clearTimeout(controlTimer);if(lens){lens.fadeOut(299)}if($tint){$tint.fadeOut(299)}if(softFocus){softFocus.fadeOut(299)}zoomDiv.fadeOut(300,function(){ctx.fadedOut()});return false});$mouseTrap.bind('mouseenter',this,function(event){mx=event.pageX;my=event.pageY;zw=event.data;if(zoomDiv){zoomDiv.stop(true,false);zoomDiv.remove()}var xPos=opts.adjustX,yPos=opts.adjustY;var siw=sImg.outerWidth();var sih=sImg.outerHeight();var w=opts.zoomWidth;var h=opts.zoomHeight;if(opts.zoomWidth=='auto'){w=siw}if(opts.zoomHeight=='auto'){h=sih}var appendTo=jWin.parent();switch(opts.position){case'top':yPos-=h;break;case'right':xPos+=siw;break;case'bottom':yPos+=sih;break;case'left':xPos-=w;break;case'inside':w=siw;h=sih;break;default:appendTo=$('#'+opts.position);if(!appendTo.length){appendTo=jWin;xPos+=siw;yPos+=sih}else{w=appendTo.innerWidth();h=appendTo.innerHeight()}}zoomDiv=appendTo.append(format('<div id="cloud-zoom-big" class="cloud-zoom-big" style="display:none;position:absolute;left:%0px;top:%1px;width:%2px;height:%3px;background-image:url(\'%4\');z-index:99;"></div>',xPos,yPos,w,h,zoomImage.src)).find(':last');if(sImg.attr('title')&&opts.showTitle){zoomDiv.append(format('<div class="cloud-zoom-title">%0</div>',sImg.attr('title'))).find(':last').css('opacity',opts.titleOpacity)}if($.browser.msie&&$.browser.version<7){$ie6Fix=$('<iframe frameborder="0" src="#"></iframe>').css({position:"absolute",left:xPos,top:yPos,zIndex:99,width:w,height:h}).insertBefore(zoomDiv)}zoomDiv.fadeIn(500);if(lens){lens.remove();lens=null}cw=(sImg.outerWidth()/zoomImage.width)*zoomDiv.width();ch=(sImg.outerHeight()/zoomImage.height)*zoomDiv.height();lens=jWin.append(format("<div class = 'cloud-zoom-lens' style='display:none;z-index:98;position:absolute;width:%0px;height:%1px;'></div>",cw,ch)).find(':last');$mouseTrap.css('cursor',lens.css('cursor'));var noTrans=false;if(opts.tint){lens.css('background','url("'+sImg.attr('src')+'")');$tint=jWin.append(format('<div style="display:none;position:absolute; left:0px; top:0px; width:%0px; height:%1px; background-color:%2;" />',sImg.outerWidth(),sImg.outerHeight(),opts.tint)).find(':last');$tint.css('opacity',opts.tintOpacity);noTrans=true;$tint.fadeIn(500)}if(opts.softFocus){lens.css('background','url("'+sImg.attr('src')+'")');softFocus=jWin.append(format('<div style="position:absolute;display:none;top:2px; left:2px; width:%0px; height:%1px;" />',sImg.outerWidth()-2,sImg.outerHeight()-2,opts.tint)).find(':last');softFocus.css('background','url("'+sImg.attr('src')+'")');softFocus.css('opacity',0.5);noTrans=true;softFocus.fadeIn(500)}if(!noTrans){lens.css('opacity',opts.lensOpacity)}if(opts.position!=='inside'){lens.fadeIn(500)}zw.controlLoop();return})};img1=new Image();$(img1).load(function(){ctx.init2(this,0)});img1.src=sImg.attr('src');img2=new Image();$(img2).load(function(){ctx.init2(this,1)});img2.src=jWin.attr('href')}$.fn.CloudZoom=function(options){try{document.execCommand("BackgroundImageCache",false,true)}catch(e){}this.each(function(){var relOpts,opts;eval('var	a = {'+$(this).attr('rel')+'}');relOpts=a;if($(this).is('.cloud-zoom')){$(this).css({'position':'relative','display':'block'});$('img',$(this)).css({'display':'block'});if($(this).parent().attr('id')!='wrap'){$(this).wrap('<div id="wrap" style="top:0px;z-index:9999;position:relative;"></div>')}opts=$.extend({},$.fn.CloudZoom.defaults,options);opts=$.extend({},opts,relOpts);$(this).data('zoom',new CloudZoom($(this),opts))}else if($(this).is('.cloud-zoom-gallery')){opts=$.extend({},relOpts,options);$(this).data('relOpts',opts);$(this).bind('click',$(this),function(event){var data=event.data.data('relOpts');$('#'+data.useZoom).data('zoom').destroy();$('#'+data.useZoom).attr('href',event.data.attr('href'));$('#'+data.useZoom+' img').attr('src',event.data.data('relOpts').smallImage);$('#'+event.data.data('relOpts').useZoom).CloudZoom();return false})}});return this};$.fn.CloudZoom.defaults={zoomWidth:'auto',zoomHeight:'auto',position:'right',tint:false,tintOpacity:0.5,lensOpacity:0.5,softFocus:false,smoothMove:3,showTitle:true,titleOpacity:0.5,adjustX:0,adjustY:0}})(jQuery);

/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
(function($){function sc_setScroll(a,b,c){return"transition"==c.transition&&"swing"==b&&(b="ease"),{anims:[],duration:a,orgDuration:a,easing:b,startTime:getTime()}}function sc_startScroll(a,b){for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e&&e[0][b.transition](e[1],a.duration,a.easing,e[2])}}function sc_stopScroll(a,b){is_boolean(b)||(b=!0),is_object(a.pre)&&sc_stopScroll(a.pre,b);for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e[0].stop(!0),b&&(e[0].css(e[1]),is_function(e[2])&&e[2]())}is_object(a.post)&&sc_stopScroll(a.post,b)}function sc_afterScroll(a,b,c){switch(b&&b.remove(),c.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":a.css("opacity",1),a.css("filter","")}}function sc_fireCallbacks(a,b,c,d,e){if(b[c]&&b[c].call(a,d),e[c].length)for(var f=0,g=e[c].length;g>f;f++)e[c][f].call(a,d);return[]}function sc_fireQueue(a,b,c){return b.length&&(a.trigger(cf_e(b[0][0],c),b[0][1]),b.shift()),b}function sc_hideHiddenItems(a){a.each(function(){var a=$(this);a.data("_cfs_isHidden",a.is(":hidden")).hide()})}function sc_showHiddenItems(a){a&&a.each(function(){var a=$(this);a.data("_cfs_isHidden")||a.show()})}function sc_clearTimers(a){return a.auto&&clearTimeout(a.auto),a.progress&&clearInterval(a.progress),a}function sc_mapCallbackArguments(a,b,c,d,e,f,g){return{width:g.width,height:g.height,items:{old:a,skipped:b,visible:c},scroll:{items:d,direction:e,duration:f}}}function sc_getDuration(a,b,c,d){var e=a.duration;return"none"==a.fx?0:("auto"==e?e=b.scroll.duration/b.scroll.items*c:10>e&&(e=d/e),1>e?0:("fade"==a.fx&&(e/=2),Math.round(e)))}function nv_showNavi(a,b,c){var d=is_number(a.items.minimum)?a.items.minimum:a.items.visible+1;if("show"==b||"hide"==b)var e=b;else if(d>b){debug(c,"Not enough items ("+b+" total, "+d+" needed): Hiding navigation.");var e="hide"}else var e="show";var f="show"==e?"removeClass":"addClass",g=cf_c("hidden",c);a.auto.button&&a.auto.button[e]()[f](g),a.prev.button&&a.prev.button[e]()[f](g),a.next.button&&a.next.button[e]()[f](g),a.pagination.container&&a.pagination.container[e]()[f](g)}function nv_enableNavi(a,b,c){if(!a.circular&&!a.infinite){var d="removeClass"==b||"addClass"==b?b:!1,e=cf_c("disabled",c);if(a.auto.button&&d&&a.auto.button[d](e),a.prev.button){var f=d||0==b?"addClass":"removeClass";a.prev.button[f](e)}if(a.next.button){var f=d||b==a.items.visible?"addClass":"removeClass";a.next.button[f](e)}}}function go_getObject(a,b){return is_function(b)?b=b.call(a):is_undefined(b)&&(b={}),b}function go_getItemsObject(a,b){return b=go_getObject(a,b),is_number(b)?b={visible:b}:"variable"==b?b={visible:b,width:b,height:b}:is_object(b)||(b={}),b}function go_getScrollObject(a,b){return b=go_getObject(a,b),is_number(b)?b=50>=b?{items:b}:{duration:b}:is_string(b)?b={easing:b}:is_object(b)||(b={}),b}function go_getNaviObject(a,b){if(b=go_getObject(a,b),is_string(b)){var c=cf_getKeyCode(b);b=-1==c?$(b):c}return b}function go_getAutoObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_boolean(b)?b={play:b}:is_number(b)&&(b={timeoutDuration:b}),b.progress&&(is_string(b.progress)||is_jquery(b.progress))&&(b.progress={bar:b.progress}),b}function go_complementAutoObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_boolean(b.play)||(b.play=!0),is_number(b.delay)||(b.delay=0),is_undefined(b.pauseOnEvent)&&(b.pauseOnEvent=!0),is_boolean(b.pauseOnResize)||(b.pauseOnResize=!0),is_number(b.timeoutDuration)||(b.timeoutDuration=10>b.duration?2500:5*b.duration),b.progress&&(is_function(b.progress.bar)&&(b.progress.bar=b.progress.bar.call(a)),is_string(b.progress.bar)&&(b.progress.bar=$(b.progress.bar)),b.progress.bar?(is_function(b.progress.updater)||(b.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(b.progress.interval)||(b.progress.interval=50)):b.progress=!1),b}function go_getPrevNextObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_number(b)&&(b={key:b}),b}function go_complementPrevNextObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_string(b.key)&&(b.key=cf_getKeyCode(b.key)),b}function go_getPaginationObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={container:b}:is_boolean(b)&&(b={keys:b}),b}function go_complementPaginationObject(a,b){return is_function(b.container)&&(b.container=b.container.call(a)),is_string(b.container)&&(b.container=$(b.container)),is_number(b.items)||(b.items=!1),is_boolean(b.keys)||(b.keys=!1),is_function(b.anchorBuilder)||is_false(b.anchorBuilder)||(b.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(b.deviation)||(b.deviation=0),b}function go_getSwipeObject(a,b){return is_function(b)&&(b=b.call(a)),is_undefined(b)&&(b={onTouch:!1}),is_true(b)?b={onTouch:b}:is_number(b)&&(b={items:b}),b}function go_complementSwipeObject(a,b){return is_boolean(b.onTouch)||(b.onTouch=!0),is_boolean(b.onMouse)||(b.onMouse=!1),is_object(b.options)||(b.options={}),is_boolean(b.options.triggerOnTouchEnd)||(b.options.triggerOnTouchEnd=!1),b}function go_getMousewheelObject(a,b){return is_function(b)&&(b=b.call(a)),is_true(b)?b={}:is_number(b)?b={items:b}:is_undefined(b)&&(b=!1),b}function go_complementMousewheelObject(a,b){return b}function gn_getItemIndex(a,b,c,d,e){if(is_string(a)&&(a=$(a,e)),is_object(a)&&(a=$(a,e)),is_jquery(a)?(a=e.children().index(a),is_boolean(c)||(c=!1)):is_boolean(c)||(c=!0),is_number(a)||(a=0),is_number(b)||(b=0),c&&(a+=d.first),a+=b,d.total>0){for(;a>=d.total;)a-=d.total;for(;0>a;)a+=d.total}return a}function gn_getVisibleItemsPrev(a,b,c){for(var d=0,e=0,f=c;f>=0;f--){var g=a.eq(f);if(d+=g.is(":visible")?g[b.d.outerWidth](!0):0,d>b.maxDimension)return e;0==f&&(f=a.length),e++}}function gn_getVisibleItemsPrevFilter(a,b,c){return gn_getItemsPrevFilter(a,b.items.filter,b.items.visibleConf.org,c)}function gn_getScrollItemsPrevFilter(a,b,c,d){return gn_getItemsPrevFilter(a,b.items.filter,d,c)}function gn_getItemsPrevFilter(a,b,c,d){for(var e=0,f=0,g=d,h=a.length;g>=0;g--){if(f++,f==h)return f;var i=a.eq(g);if(i.is(b)&&(e++,e==c))return f;0==g&&(g=h)}}function gn_getVisibleOrg(a,b){return b.items.visibleConf.org||a.children().slice(0,b.items.visible).filter(b.items.filter).length}function gn_getVisibleItemsNext(a,b,c){for(var d=0,e=0,f=c,g=a.length-1;g>=f;f++){var h=a.eq(f);if(d+=h.is(":visible")?h[b.d.outerWidth](!0):0,d>b.maxDimension)return e;if(e++,e==g+1)return e;f==g&&(f=-1)}}function gn_getVisibleItemsNextTestCircular(a,b,c,d){var e=gn_getVisibleItemsNext(a,b,c);return b.circular||c+e>d&&(e=d-c),e}function gn_getVisibleItemsNextFilter(a,b,c){return gn_getItemsNextFilter(a,b.items.filter,b.items.visibleConf.org,c,b.circular)}function gn_getScrollItemsNextFilter(a,b,c,d){return gn_getItemsNextFilter(a,b.items.filter,d+1,c,b.circular)-1}function gn_getItemsNextFilter(a,b,c,d){for(var f=0,g=0,h=d,i=a.length-1;i>=h;h++){if(g++,g>=i)return g;var j=a.eq(h);if(j.is(b)&&(f++,f==c))return g;h==i&&(h=-1)}}function gi_getCurrentItems(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsPrev(a,b,c){return a.slice(c,b.items.visibleConf.old+c)}function gi_getNewItemsPrev(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsNext(a,b){return a.slice(0,b.items.visibleConf.old)}function gi_getNewItemsNext(a,b,c){return a.slice(c,b.items.visible+c)}function sz_storeMargin(a,b,c){b.usePadding&&(is_string(c)||(c="_cfs_origCssMargin"),a.each(function(){var a=$(this),d=parseInt(a.css(b.d.marginRight),10);is_number(d)||(d=0),a.data(c,d)}))}function sz_resetMargin(a,b,c){if(b.usePadding){var d=is_boolean(c)?c:!1;is_number(c)||(c=0),sz_storeMargin(a,b,"_cfs_tempCssMargin"),a.each(function(){var a=$(this);a.css(b.d.marginRight,d?a.data("_cfs_tempCssMargin"):c+a.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(a){a.each(function(){var a=$(this);a.data("_cfs_origCss",a.attr("style")||"")})}function sz_restoreOrigCss(a){a.each(function(){var a=$(this);a.attr("style",a.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(a,b){var d=(a.items.visible,a.items[a.d.width]),e=a[a.d.height],f=is_percentage(e);b.each(function(){var b=$(this),c=d-ms_getPaddingBorderMargin(b,a,"Width");b[a.d.width](c),f&&b[a.d.height](ms_getPercentage(c,e))})}function sz_setSizes(a,b){var c=a.parent(),d=a.children(),e=gi_getCurrentItems(d,b),f=cf_mapWrapperSizes(ms_getSizes(e,b,!0),b,!1);if(c.css(f),b.usePadding){var g=b.padding,h=g[b.d[1]];b.align&&0>h&&(h=0);var i=e.last();i.css(b.d.marginRight,i.data("_cfs_origCssMargin")+h),a.css(b.d.top,g[b.d[0]]),a.css(b.d.left,g[b.d[3]])}return a.css(b.d.width,f[b.d.width]+2*ms_getTotalSize(d,b,"width")),a.css(b.d.height,ms_getLargestSize(d,b,"height")),f}function ms_getSizes(a,b,c){return[ms_getTotalSize(a,b,"width",c),ms_getLargestSize(a,b,"height",c)]}function ms_getLargestSize(a,b,c,d){return is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d?b[b.d[c]]:is_number(b.items[b.d[c]])?b.items[b.d[c]]:(c=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",ms_getTrueLargestSize(a,b,c))}function ms_getTrueLargestSize(a,b,c){for(var d=0,e=0,f=a.length;f>e;e++){var g=a.eq(e),h=g.is(":visible")?g[b.d[c]](!0):0;h>d&&(d=h)}return d}function ms_getTotalSize(a,b,c,d){if(is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d)return b[b.d[c]];if(is_number(b.items[b.d[c]]))return b.items[b.d[c]]*a.length;for(var e=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",f=0,g=0,h=a.length;h>g;g++){var i=a.eq(g);f+=i.is(":visible")?i[b.d[e]](!0):0}return f}function ms_getParentSize(a,b,c){var d=a.is(":visible");d&&a.hide();var e=a.parent()[b.d[c]]();return d&&a.show(),e}function ms_getMaxDimension(a,b){return is_number(a[a.d.width])?a[a.d.width]:b}function ms_hasVariableSizes(a,b,c){for(var d=!1,e=!1,f=0,g=a.length;g>f;f++){var h=a.eq(f),i=h.is(":visible")?h[b.d[c]](!0):0;d===!1?d=i:d!=i&&(e=!0),0==d&&(e=!0)}return e}function ms_getPaddingBorderMargin(a,b,c){return a[b.d["outer"+c]](!0)-a[b.d[c.toLowerCase()]]()}function ms_getPercentage(a,b){if(is_percentage(b)){if(b=parseInt(b.slice(0,-1),10),!is_number(b))return a;a*=b/100}return a}function cf_e(a,b,c,d,e){return is_boolean(c)||(c=!0),is_boolean(d)||(d=!0),is_boolean(e)||(e=!1),c&&(a=b.events.prefix+a),d&&(a=a+"."+b.events.namespace),d&&e&&(a+=b.serialNumber),a}function cf_c(a,b){return is_string(b.classnames[a])?b.classnames[a]:a}function cf_mapWrapperSizes(a,b,c){is_boolean(c)||(c=!0);var d=b.usePadding&&c?b.padding:[0,0,0,0],e={};return e[b.d.width]=a[0]+d[1]+d[3],e[b.d.height]=a[1]+d[0]+d[2],e}function cf_sortParams(a,b){for(var c=[],d=0,e=a.length;e>d;d++)for(var f=0,g=b.length;g>f;f++)if(b[f].indexOf(typeof a[d])>-1&&is_undefined(c[f])){c[f]=a[d];break}return c}function cf_getPadding(a){if(is_undefined(a))return[0,0,0,0];if(is_number(a))return[a,a,a,a];if(is_string(a)&&(a=a.split("px").join("").split("em").join("").split(" ")),!is_array(a))return[0,0,0,0];for(var b=0;4>b;b++)a[b]=parseInt(a[b],10);switch(a.length){case 0:return[0,0,0,0];case 1:return[a[0],a[0],a[0],a[0]];case 2:return[a[0],a[1],a[0],a[1]];case 3:return[a[0],a[1],a[2],a[1]];default:return[a[0],a[1],a[2],a[3]]}}function cf_getAlignPadding(a,b){var c=is_number(b[b.d.width])?Math.ceil(b[b.d.width]-ms_getTotalSize(a,b,"width")):0;switch(b.align){case"left":return[0,c];case"right":return[c,0];case"center":default:return[Math.ceil(c/2),Math.floor(c/2)]}}function cf_getDimensions(a){for(var b=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],c=b[0].length,d="right"==a.direction||"left"==a.direction?0:1,e={},f=0;c>f;f++)e[b[0][f]]=b[d][f];return e}function cf_getAdjust(a,b,c,d){var e=a;if(is_function(c))e=c.call(d,e);else if(is_string(c)){var f=c.split("+"),g=c.split("-");if(g.length>f.length)var h=!0,i=g[0],j=g[1];else var h=!1,i=f[0],j=f[1];switch(i){case"even":e=1==a%2?a-1:a;break;case"odd":e=0==a%2?a-1:a;break;default:e=a}j=parseInt(j,10),is_number(j)&&(h&&(j=-j),e+=j)}return(!is_number(e)||1>e)&&(e=1),e}function cf_getItemsAdjust(a,b,c,d){return cf_getItemAdjustMinMax(cf_getAdjust(a,b,c,d),b.items.visibleConf)}function cf_getItemAdjustMinMax(a,b){return is_number(b.min)&&b.min>a&&(a=b.min),is_number(b.max)&&a>b.max&&(a=b.max),1>a&&(a=1),a}function cf_getSynchArr(a){is_array(a)||(a=[[a]]),is_array(a[0])||(a=[a]);for(var b=0,c=a.length;c>b;b++)is_string(a[b][0])&&(a[b][0]=$(a[b][0])),is_boolean(a[b][1])||(a[b][1]=!0),is_boolean(a[b][2])||(a[b][2]=!0),is_number(a[b][3])||(a[b][3]=0);return a}function cf_getKeyCode(a){return"right"==a?39:"left"==a?37:"up"==a?38:"down"==a?40:-1}function cf_setCookie(a,b,c){if(a){var d=b.triggerHandler(cf_e("currentPosition",c));$.fn.carouFredSel.cookie.set(a,d)}}function cf_getCookie(a){var b=$.fn.carouFredSel.cookie.get(a);return""==b?0:b}function in_mapCss(a,b){for(var c={},d=0,e=b.length;e>d;d++)c[b[d]]=a.css(b[d]);return c}function in_complementItems(a,b,c,d){return is_object(a.visibleConf)||(a.visibleConf={}),is_object(a.sizesConf)||(a.sizesConf={}),0==a.start&&is_number(d)&&(a.start=d),is_object(a.visible)?(a.visibleConf.min=a.visible.min,a.visibleConf.max=a.visible.max,a.visible=!1):is_string(a.visible)?("variable"==a.visible?a.visibleConf.variable=!0:a.visibleConf.adjust=a.visible,a.visible=!1):is_function(a.visible)&&(a.visibleConf.adjust=a.visible,a.visible=!1),is_string(a.filter)||(a.filter=c.filter(":hidden").length>0?":visible":"*"),a[b.d.width]||(b.responsive?(debug(!0,"Set a "+b.d.width+" for the items!"),a[b.d.width]=ms_getTrueLargestSize(c,b,"outerWidth")):a[b.d.width]=ms_hasVariableSizes(c,b,"outerWidth")?"variable":c[b.d.outerWidth](!0)),a[b.d.height]||(a[b.d.height]=ms_hasVariableSizes(c,b,"outerHeight")?"variable":c[b.d.outerHeight](!0)),a.sizesConf.width=a.width,a.sizesConf.height=a.height,a}function in_complementVisibleItems(a,b){return"variable"==a.items[a.d.width]&&(a.items.visibleConf.variable=!0),a.items.visibleConf.variable||(is_number(a[a.d.width])?a.items.visible=Math.floor(a[a.d.width]/a.items[a.d.width]):(a.items.visible=Math.floor(b/a.items[a.d.width]),a[a.d.width]=a.items.visible*a.items[a.d.width],a.items.visibleConf.adjust||(a.align=!1)),("Infinity"==a.items.visible||1>a.items.visible)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),a.items.visibleConf.variable=!0)),a}function in_complementPrimarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerWidth")),a}function in_complementSecondarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerHeight")),a||(a=b.items[b.d.height]),a}function in_getAlignPadding(a,b){var c=cf_getAlignPadding(gi_getCurrentItems(b,a),a);return a.padding[a.d[1]]=c[1],a.padding[a.d[3]]=c[0],a}function in_getResponsiveValues(a,b){var d=cf_getItemAdjustMinMax(Math.ceil(a[a.d.width]/a.items[a.d.width]),a.items.visibleConf);d>b.length&&(d=b.length);var e=Math.floor(a[a.d.width]/d);return a.items.visible=d,a.items[a.d.width]=e,a[a.d.width]=d*e,a}function bt_pauseOnHoverConfig(a){if(is_string(a))var b=a.indexOf("immediate")>-1?!0:!1,c=a.indexOf("resume")>-1?!0:!1;else var b=c=!1;return[b,c]}function bt_mousesheelNumber(a){return is_number(a)?a:null}function is_null(a){return null===a}function is_undefined(a){return is_null(a)||a===void 0||""===a||"undefined"===a}function is_array(a){return a instanceof Array}function is_jquery(a){return a instanceof jQuery}function is_object(a){return(a instanceof Object||"object"==typeof a)&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a)}function is_number(a){return(a instanceof Number||"number"==typeof a)&&!isNaN(a)}function is_string(a){return(a instanceof String||"string"==typeof a)&&!is_undefined(a)&&!is_true(a)&&!is_false(a)}function is_function(a){return a instanceof Function||"function"==typeof a}function is_boolean(a){return a instanceof Boolean||"boolean"==typeof a||is_true(a)||is_false(a)}function is_true(a){return a===!0||"true"===a}function is_false(a){return a===!1||"false"===a}function is_percentage(a){return is_string(a)&&"%"==a.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(a,b){debug(!0,a+" is DEPRECATED, support for it will be removed. Use "+b+" instead.")}function debug(a,b){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(a)){var c=" ("+a.selector+")";a=a.debug}else var c="";if(!a)return!1;b=is_string(b)?"carouFredSel"+c+": "+b:["carouFredSel"+c+":",b],window.console.log(b)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={};FN._init=function(a,b,c){a=go_getObject($tt0,a),a.items=go_getItemsObject($tt0,a.items),a.scroll=go_getScrollObject($tt0,a.scroll),a.auto=go_getAutoObject($tt0,a.auto),a.prev=go_getPrevNextObject($tt0,a.prev),a.next=go_getPrevNextObject($tt0,a.next),a.pagination=go_getPaginationObject($tt0,a.pagination),a.swipe=go_getSwipeObject($tt0,a.swipe),a.mousewheel=go_getMousewheelObject($tt0,a.mousewheel),b&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,a)),opts=$.extend(!0,{},$.fn.carouFredSel.defaults,a),opts.d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var d=$cfs.children(),e=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,e),opts.items=in_complementItems(opts.items,opts,d,c),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,d),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,d),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(e,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,e)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=is_number(opts[opts.d.width])?"center":!1),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(d,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(d,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,d,e);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&(opts=in_getAlignPadding(opts,d),opts.usePadding=!0);break;default:opts.align=!1,opts.usePadding=0==opts.padding[0]&&0==opts.padding[1]&&0==opts.padding[2]&&0==opts.padding[3]?!1:!0}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},FN._build=function(){$cfs.data("_cfs_isCarousel",!0);var a=$cfs.children(),b=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),c="relative";switch(b.position){case"absolute":case"fixed":c=b.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(b),$wrp.css({overflow:"hidden",position:c}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",b.zIndex),$cfs.css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(a,opts),sz_storeOrigCss(a),opts.responsive&&sz_setResponsiveSizes(opts,a)},FN._bind_events=function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(a,b){return a.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),b)),!0}),$cfs.bind(cf_e("finish",conf),function(a){return a.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(a,b,c){if(a.stopPropagation(),tmrs=sc_clearTimers(tmrs),b&&crsl.isScrolling){scrl.isStopped=!0;var d=getTime()-scrl.startTime;scrl.duration-=d,scrl.pre&&(scrl.pre.duration-=d),scrl.post&&(scrl.post.duration-=d),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||c&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var e=opts.auto.timeoutDuration-tmrs.timePassed,f=100-Math.ceil(100*e/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,f,e)}return!0}),$cfs.bind(cf_e("play",conf),function(a,b,c,d){a.stopPropagation(),tmrs=sc_clearTimers(tmrs);var e=[b,c,d],f=["string","number","boolean"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],"prev"!=b&&"next"!=b&&(b=crsl.direction),is_number(c)||(c=0),is_boolean(d)||(d=!1),d&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return a.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var h=opts.auto.timeoutDuration+c;return dur2=h-tmrs.timePassed,perc=100-Math.ceil(100*dur2/h),opts.auto.progress&&(tmrs.progress=setInterval(function(){var a=getTime()-tmrs.startTime+tmrs.timePassed,b=Math.ceil(100*a/h);opts.auto.progress.updater.call(opts.auto.progress.bar[0],b)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),b):$cfs.trigger(cf_e(b,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(a){return a.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(a,b,c,d,e){if(a.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return a.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var f=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(f>itms.total)return a.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+f+" needed): Not scrolling.");var g=[b,c,d,e],h=["object","number/string","function","boolean"],i=cf_sortParams(g,h);b=i[0],c=i[1],d=i[2],e=i[3];var j=a.type.slice(conf.events.prefix.length);if(is_object(b)||(b={}),is_function(d)&&(b.onAfter=d),is_boolean(e)&&(b.queue=e),b=$.extend(!0,{},opts[j],b),b.conditions&&!b.conditions.call($tt0,j))return a.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(c)){if("*"!=opts.items.filter)c="visible";else for(var k=[c,b.items,opts[j].items],i=0,l=k.length;l>i;i++)if(is_number(k[i])||"page"==k[i]||"visible"==k[i]){c=k[i];break}switch(c){case"page":return a.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(j+"Page",conf),[b,d]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(c=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]]),a.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(b.duration>0&&crsl.isScrolling)return b.queue&&("last"==b.queue&&(queu=[]),("first"!=b.queue||0==queu.length)&&$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]])),a.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+j,conf),[b,c]),opts.synchronise)for(var m=opts.synchronise,n=[b,c],o=0,l=m.length;l>o;o++){var p=j;m[o][2]||(p="prev"==p?"next":"prev"),m[o][1]||(n[0]=m[o][0].triggerHandler("_cfs_triggerEvent",["configuration",p])),n[1]=c+m[o][3],m[o][0].trigger("_cfs_triggerEvent",["slide_"+p,n])}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if(opts.items.visibleConf.variable)c=gn_getVisibleItemsPrev(d,opts,itms.total-1);else if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsPrevFilter(d,opts,itms.total-1,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}if(opts.circular||itms.total-c<itms.first&&(c=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0);f>=opts.items.visible+c&&itms.total>c&&(c++,f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=f}else if("*"!=opts.items.filter){var f=gn_getVisibleItemsNextFilter(d,opts,itms.total-c);opts.items.visible=cf_getItemsAdjust(f,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items backward."),itms.first+=c;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&b.onEnd&&b.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-c,itms.total).prependTo($cfs),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),g=gi_getOldItemsPrev(d,opts,c),h=gi_getNewItemsPrev(d,opts),i=d.eq(c-1),j=g.last(),k=h.last();sz_resetMargin(d,opts);var l=0,m=0;if(opts.align){var n=cf_getAlignPadding(h,opts);l=n[0],m=n[1]}var o=0>l?opts.padding[opts.d[3]]:0,p=!1,q=$();if(c>opts.items.visible&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,i=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(h,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B={},C={},D=sc_getDuration(b,opts,c,t);switch(b.fx){case"cover":case"cover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visible),opts,"width")}p&&(opts.items[opts.d.width]=r),sz_resetMargin(d,opts,!0),m>=0&&sz_resetMargin(j,opts,opts.padding[opts.d[1]]),l>=0&&sz_resetMargin(i,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=m,opts.padding[opts.d[3]]=l),B[opts.d.left]=-(t-o),C[opts.d.left]=-(v-o),x[opts.d.left]=u[opts.d.width];var E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){},L=function(){},M=function(){},N=function(){},O=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp)}switch(b.fx){case"crossfade":case"uncover":case"uncover-fade":s.children().slice(0,c).remove(),s.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":s.children().slice(opts.items.visible).remove(),s.css(C)}if($cfs.css(B),scrl=sc_setScroll(D,b.easing,conf),w[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(E=function(){$wrp.css(u)},F=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){switch(k.not(i).length&&(y[opts.d.marginRight]=i.data("_cfs_origCssMargin"),0>l?i.css(y):(K=function(){i.css(y)},L=function(){scrl.anims.push([i,y])})),b.fx){case"cover":case"cover-fade":s.children().eq(c-1).css(y)}k.not(j).length&&(z[opts.d.marginRight]=j.data("_cfs_origCssMargin"),G=function(){j.css(z)},H=function(){scrl.anims.push([j,z])}),m>=0&&(A[opts.d.marginRight]=k.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],I=function(){k.css(A)},J=function(){scrl.anims.push([k,A])})}O=function(){$cfs.css(w)};var P=opts.items.visible+c-itms.total;N=function(){if(P>0&&($cfs.children().slice(itms.total).remove(),g=$($cfs.children().slice(itms.total-(opts.items.visible-P)).get().concat($cfs.children().slice(0,P).get()))),sc_showHiddenItems(p),opts.usePadding){var a=$cfs.children().eq(opts.items.visible+c-1);a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var Q=sc_mapCallbackArguments(g,q,h,c,"prev",D,u);switch(M=function(){sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",Q,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",Q,clbk),b.fx){case"none":$cfs.css(w),E(),G(),I(),K(),O(),N(),M();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){E(),G(),I(),K(),O(),N(),scrl=sc_setScroll(D,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},M]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},M]),F(),G(),I(),K(),O(),N();break;case"cover":scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"uncover":scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;default:scrl.anims.push([$cfs,w,function(){N(),M()}]),F(),H(),J(),L()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0
}),$cfs.bind(cf_e("slide_next",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsNextFilter(d,opts,0,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}var f=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable)var g=gn_getVisibleItemsNext(d,opts,c),e=gn_getVisibleItemsPrev(d,opts,f-1);else var g=opts.items.visible,e=opts.items.visible;c+g>f&&(c=f-e)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(var g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-c>=g&&itms.total>c;)c++,g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=g}else if("*"!=opts.items.filter){var g=gn_getVisibleItemsNextFilter(d,opts,c);opts.items.visible=cf_getItemsAdjust(g,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items forward."),itms.first-=c;0>itms.first;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&b.onEnd&&b.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),h=gi_getOldItemsNext(d,opts),i=gi_getNewItemsNext(d,opts,c),j=d.eq(c-1),k=h.last(),l=i.last();sz_resetMargin(d,opts);var m=0,n=0;if(opts.align){var o=cf_getAlignPadding(i,opts);m=o[0],n=o[1]}var p=!1,q=$();if(c>opts.items.visibleConf.old&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,j=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(i,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B=sc_getDuration(b,opts,c,t);switch(b.fx){case"uncover":case"uncover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visibleConf.old),opts,"width")}p&&(opts.items[opts.d.width]=r),opts.align&&0>opts.padding[opts.d[1]]&&(opts.padding[opts.d[1]]=0),sz_resetMargin(d,opts,!0),sz_resetMargin(k,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=n,opts.padding[opts.d[3]]=m),A[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var C=function(){},D=function(){},E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp),s.children().slice(opts.items.visibleConf.old).remove()}switch(b.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),s.css("zIndex",0)}if(scrl=sc_setScroll(B,b.easing,conf),w[opts.d.left]=-t,x[opts.d.left]=-v,0>m&&(w[opts.d.left]+=m),("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(C=function(){$wrp.css(u)},D=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){var L=l.data("_cfs_origCssMargin");n>=0&&(L+=opts.padding[opts.d[1]]),l.css(opts.d.marginRight,L),j.not(k).length&&(z[opts.d.marginRight]=k.data("_cfs_origCssMargin")),E=function(){k.css(z)},F=function(){scrl.anims.push([k,z])};var M=j.data("_cfs_origCssMargin");m>0&&(M+=opts.padding[opts.d[3]]),y[opts.d.marginRight]=M,G=function(){j.css(y)},H=function(){scrl.anims.push([j,y])}}K=function(){$cfs.css(A)};var N=opts.items.visible+c-itms.total;J=function(){N>0&&$cfs.children().slice(itms.total).remove();var a=$cfs.children().slice(0,c).appendTo($cfs).last();if(N>0&&(i=gi_getCurrentItems(d,opts)),sc_showHiddenItems(p),opts.usePadding){if(itms.total<opts.items.visible+c){var b=$cfs.children().eq(opts.items.visible-1);b.css(opts.d.marginRight,b.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var O=sc_mapCallbackArguments(h,q,i,c,"next",B,u);switch(I=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",O,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",O,clbk),b.fx){case"none":$cfs.css(w),C(),E(),G(),K(),J(),I();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){C(),E(),G(),K(),J(),scrl=sc_setScroll(B,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},I]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},I]),D(),E(),G(),K(),J();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"uncover":scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;default:scrl.anims.push([$cfs,w,function(){K(),J(),I()}]),D(),F(),H()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0}),$cfs.bind(cf_e("slideTo",conf),function(a,b,c,d,e,f,g){a.stopPropagation();var h=[b,c,d,e,f,g],i=["string/number/object","number","boolean","object","string","function"],j=cf_sortParams(h,i);return e=j[3],f=j[4],g=j[5],b=gn_getItemIndex(j[0],j[1],j[2],itms,$cfs),0==b?!1:(is_object(e)||(e=!1),"prev"!=f&&"next"!=f&&(f=opts.circular?itms.total/2>=b?"next":"prev":0==itms.first||itms.first>b?"next":"prev"),"prev"==f&&(b=itms.total-b),$cfs.trigger(cf_e(f,conf),[e,b,g]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d-1,b,"prev",c])}),$cfs.bind(cf_e("nextPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d+1,b,"next",c])}),$cfs.bind(cf_e("slideToPage",conf),function(a,b,c,d,e){a.stopPropagation(),is_number(b)||(b=$cfs.triggerHandler(cf_e("currentPage",conf)));var f=opts.pagination.items||opts.items.visible,g=Math.ceil(itms.total/f)-1;return 0>b&&(b=g),b>g&&(b=0),$cfs.triggerHandler(cf_e("slideTo",conf),[b*f,0,!0,c,d,e])}),$cfs.bind(cf_e("jumpToStart",conf),function(a,b){if(a.stopPropagation(),b=b?gn_getItemIndex(b,0,!0,itms,$cfs):0,b+=itms.first,0!=b){if(itms.total>0)for(;b>itms.total;)b-=itms.total;$cfs.prepend($cfs.children().slice(b,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(a,b){if(a.stopPropagation(),b)b=cf_getSynchArr(b);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");b=opts.synchronise}for(var c=$cfs.triggerHandler(cf_e("currentPosition",conf)),d=!0,e=0,f=b.length;f>e;e++)b[e][0].triggerHandler(cf_e("slideTo",conf),[c,b[e][3],!0])||(d=!1);return d}),$cfs.bind(cf_e("queue",conf),function(a,b,c){return a.stopPropagation(),is_function(b)?b.call($tt0,queu):is_array(b)?queu=b:is_undefined(b)||queu.push([b,c]),queu}),$cfs.bind(cf_e("insertItem",conf),function(a,b,c,d,e){a.stopPropagation();var f=[b,c,d,e],g=["string/object","string/number/object","boolean","number"],h=cf_sortParams(f,g);if(b=h[0],c=h[1],d=h[2],e=h[3],is_object(b)&&!is_jquery(b)?b=$(b):is_string(b)&&(b=$(b)),!is_jquery(b)||0==b.length)return debug(conf,"Not a valid object.");is_undefined(c)&&(c="end"),sz_storeMargin(b,opts),sz_storeOrigCss(b);var i=c,j="before";"end"==c?d?(0==itms.first?(c=itms.total-1,j="after"):(c=itms.first,itms.first+=b.length),0>c&&(c=0)):(c=itms.total-1,j="after"):c=gn_getItemIndex(c,e,d,itms,$cfs);var k=$cfs.children().eq(c);return k.length?k[j](b):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(b)),"end"==i||d||itms.first>c&&(itms.first+=b.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(a,b,c,d){a.stopPropagation();var e=[b,c,d],f=["string/number/object","boolean","number"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],b instanceof $&&b.length>1)return i=$(),b.each(function(){var e=$cfs.trigger(cf_e("removeItem",conf),[$(this),c,d]);e&&(i=i.add(e))}),i;if(is_undefined(b)||"end"==b)i=$cfs.children().last();else{b=gn_getItemIndex(b,d,c,itms,$cfs);var i=$cfs.children().eq(b);i.length&&itms.first>b&&(itms.first-=i.length)}return i&&i.length&&(i.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),i}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length);return is_array(b)&&(clbk[c]=b),is_function(b)&&clbk[c].push(b),clbk[c]}),$cfs.bind(cf_e("currentPosition",conf),function(a,b){if(a.stopPropagation(),0==itms.first)var c=0;else var c=itms.total-itms.first;return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("currentPage",conf),function(a,b){a.stopPropagation();var e,c=opts.pagination.items||opts.items.visible,d=Math.ceil(itms.total/c-1);return e=0==itms.first?0:itms.first<itms.total%c?0:itms.first!=c||opts.circular?Math.round((itms.total-itms.first)/c):d,0>e&&(e=0),e>d&&(e=d),is_function(b)&&b.call($tt0,e),e}),$cfs.bind(cf_e("currentVisible",conf),function(a,b){a.stopPropagation();var c=gi_getCurrentItems($cfs.children(),opts);return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("slice",conf),function(a,b,c,d){if(a.stopPropagation(),0==itms.total)return!1;var e=[b,c,d],f=["number","number","function"],g=cf_sortParams(e,f);if(b=is_number(g[0])?g[0]:0,c=is_number(g[1])?g[1]:itms.total,d=g[2],b+=itms.first,c+=itms.first,items.total>0){for(;b>itms.total;)b-=itms.total;for(;c>itms.total;)c-=itms.total;for(;0>b;)b+=itms.total;for(;0>c;)c+=itms.total}var i,h=$cfs.children();return i=c>b?h.slice(b,c):$(h.slice(b,itms.total).get().concat(h.slice(0,c).get())),is_function(d)&&d.call($tt0,i),i}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length),d=crsl[c];return is_function(b)&&b.call($tt0,d),d}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),b!==!1?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),c!==!1?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(a,b,c){return a.stopPropagation(),is_undefined(b)?b=$("body"):is_string(b)&&(b=$(b)),is_jquery(b)&&0!=b.length?(is_string(c)||(c="a.caroufredsel"),b.find(c).each(function(){var a=this.hash||"";a.length>0&&-1!=$cfs.children().index($(a))&&$(this).unbind("click").click(function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),a)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(a,b){if(a.stopPropagation(),opts.pagination.container){var d=opts.pagination.items||opts.items.visible,e=Math.ceil(itms.total/d);b&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var a=0;e>a;a++){var b=$cfs.children().eq(gn_getItemIndex(a*d,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(b[0],a+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[a*d,-opts.pagination.deviation,!0,opts.pagination])})})}));var f=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return f>=e&&(f=0),0>f&&(f=e-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(f).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(){var b=opts.items.visible,c=$cfs.children(),d=ms_getParentSize($wrp,opts,"width");if(itms.total=c.length,crsl.primarySizePercentage?(opts.maxDimension=d,opts[opts.d.width]=ms_getPercentage(d,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,d),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,opts=in_getResponsiveValues(opts,c,d),b=opts.items.visible,sz_setResponsiveSizes(opts,c)):opts.items.visibleConf.variable?b=gn_getVisibleItemsNext(c,opts,0):"*"!=opts.items.filter&&(b=gn_getVisibleItemsNextFilter(c,opts,0)),!opts.circular&&0!=itms.first&&b>itms.first){if(opts.items.visibleConf.variable)var e=gn_getVisibleItemsPrev(c,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)var e=gn_getVisibleItemsPrevFilter(c,opts,itms.first)-itms.first;else var e=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+e+" items backward."),$cfs.trigger(cf_e("prev",conf),e)}opts.items.visible=cf_getItemsAdjust(b,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,c);var f=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,f]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),f}),$cfs.bind(cf_e("destroy",conf),function(a,b){return a.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),b&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(a,b,c){return a.stopPropagation(),$cfs.triggerHandler(cf_e(b,conf),c)})},FN._unbind_events=function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},FN._bind_buttons=function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(a){a.preventDefault();var b=!1,c=null;crsl.isPaused?b="play":opts.auto.pauseOnEvent&&(b="pause",c=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),b&&$cfs.trigger(cf_e(b,conf),c)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b==opts.next.key&&(a.preventDefault(),$cfs.trigger(cf_e("next",conf))),b==opts.prev.key&&(a.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b>=49&&58>b&&(b=(b-49)*opts.items.visible,itms.total>=b&&(a.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[b,0,!0,opts.pagination])))}),$.fn.swipe){var b="ontouchstart"in window;if(b&&opts.swipe.onTouch||!b&&opts.swipe.onMouse){var c=$.extend(!0,{},opts.prev,opts.swipe),d=$.extend(!0,{},opts.next,opts.swipe),e=function(){$cfs.trigger(cf_e("prev",conf),[c])},f=function(){$cfs.trigger(cf_e("next",conf),[d])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=f,opts.swipe.options.swipeDown=e;break;default:opts.swipe.options.swipeLeft=f,opts.swipe.options.swipeRight=e}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var g=$.extend(!0,{},opts.prev,opts.mousewheel),h=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(a,b){a.preventDefault(),b>0?$cfs.trigger(cf_e("prev",conf),[g]):$cfs.trigger(cf_e("next",conf),[h])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var i=function(){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},j=$(window),k=null;if($.debounce&&"debounce"==conf.onWindowResize)k=$.debounce(200,i);else if($.throttle&&"throttle"==conf.onWindowResize)k=$.throttle(300,i);else{var l=0,m=0;k=function(){var a=j.width(),b=j.height();(a!=l||b!=m)&&(i(),l=a,m=b)}}j.bind(cf_e("resize",conf,!1,!0,!0),k)}},FN._unbind_buttons=function(){var b=(cf_e("",conf),cf_e("",conf,!1));ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(b),opts.auto.button&&opts.auto.button.unbind(b),opts.prev.button&&opts.prev.button.unbind(b),opts.next.button&&opts.next.button.unbind(b),opts.pagination.container&&(opts.pagination.container.unbind(b),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)},is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),start_arr.length>0)for(var a=0,l=start_arr.length;l>a;a++){var s=start_arr[a];if(0!=s){if(s===!0){if(s=window.location.hash,1>s.length)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(a){return'<a href="#"><span>'+a+"</span></a>"},$.fn.carouFredSel.progressbarUpdater=function(a){$(this).css("width",a+"%")},$.fn.carouFredSel.cookie={get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0,d=b.length;d>c;c++){for(var e=b[c];" "==e.charAt(0);)e=e.slice(1);if(0==e.indexOf(a))return e.slice(a.length)}return 0},set:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"},remove:function(a){$.fn.carouFredSel.cookie.set(a,"",-1)}},$.extend($.easing,{quadratic:function(a){var b=a*a;return a*(-b*a+4*b-6*a+4)},cubic:function(a){return a*(4*a*a-9*a+6)},elastic:function(a){var b=a*a;return a*(33*b*b-106*b*a+126*b-67*a+15)}}))})(jQuery);

/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(e){"use strict";function n(n){return!n||void 0!==n.allowPageScroll||void 0===n.swipe&&void 0===n.swipeStatus||(n.allowPageScroll=c),void 0!==n.click&&void 0===n.tap&&(n.tap=n.click),n||(n={}),n=e.extend({},e.fn.swipe.defaults,n),this.each(function(){var r=e(this),i=r.data(D);i||(i=new t(this,n),r.data(D,i))})}function t(n,t){function P(n){if(!(ce()||e(n.target).closest(t.excludedElements,Ve).length>0)){var r=n.originalEvent?n.originalEvent:n;if(!r.pointerType||"mouse"!=r.pointerType||0!=t.fallbackToMouseEvents){var i,l=r.touches,o=l?l[0]:r;return We=y,l?ze=l.length:!1!==t.preventDefaultEvents&&n.preventDefault(),je=0,Ne=null,He=null,Xe=null,_e=0,qe=0,Qe=0,Ce=1,Fe=0,Ye=we(),ue(),pe(0,o),!l||ze===t.fingers||t.fingers===T||X()?(Ze=Oe(),2==ze&&(pe(1,l[1]),qe=Qe=be(Ge[0].start,Ge[1].start)),(t.swipeStatus||t.pinchStatus)&&(i=j(r,We))):i=!1,!1===i?(We=x,j(r,We),i):(t.hold&&(nn=setTimeout(e.proxy(function(){Ve.trigger("hold",[r.target]),t.hold&&(i=t.hold.call(Ve,r,r.target))},this),t.longTapThreshold)),se(!0),null)}}}function L(e){var n=e.originalEvent?e.originalEvent:e;if(We!==m&&We!==x&&!ae()){var r,i=n.touches,l=fe(i?i[0]:n);if(Be=Oe(),i&&(ze=i.length),t.hold&&clearTimeout(nn),We=E,2==ze&&(0==qe?(pe(1,i[1]),qe=Qe=be(Ge[0].start,Ge[1].start)):(fe(i[1]),Qe=be(Ge[0].end,Ge[1].end),Xe=Ee(Ge[0].end,Ge[1].end)),Ce=ye(qe,Qe),Fe=Math.abs(qe-Qe)),ze===t.fingers||t.fingers===T||!i||X()){if(Ne=Se(l.start,l.end),He=Se(l.last,l.end),C(e,He),je=me(l.start,l.end),_e=Te(),de(Ne,je),r=j(n,We),!t.triggerOnTouchEnd||t.triggerOnTouchLeave){var o=!0;if(t.triggerOnTouchLeave){var u=Me(this);o=De(l.end,u)}!t.triggerOnTouchEnd&&o?We=U(E):t.triggerOnTouchLeave&&!o&&(We=U(m)),We!=x&&We!=m||j(n,We)}}else We=x,j(n,We);!1===r&&(We=x,j(n,We))}}function R(e){var n=e.originalEvent?e.originalEvent:e,r=n.touches;if(r){if(r.length&&!ae())return oe(n),!0;if(r.length&&ae())return!0}return ae()&&(ze=Ke),Be=Oe(),_e=Te(),_()||!H()?(We=x,j(n,We)):t.triggerOnTouchEnd||!1===t.triggerOnTouchEnd&&We===E?(!1!==t.preventDefaultEvents&&!1!==e.cancelable&&e.preventDefault(),We=m,j(n,We)):!t.triggerOnTouchEnd&&B()?(We=m,N(n,We,h)):We===E&&(We=x,j(n,We)),se(!1),null}function k(){ze=0,Be=0,Ze=0,qe=0,Qe=0,Ce=1,ue(),se(!1)}function A(e){var n=e.originalEvent?e.originalEvent:e;t.triggerOnTouchLeave&&(We=U(m),j(n,We))}function I(){Ve.unbind(Re,P),Ve.unbind(Ue,k),Ve.unbind(ke,L),Ve.unbind(Ae,R),Ie&&Ve.unbind(Ie,A),se(!1)}function U(e){var n=e,r=Q(),i=H(),l=_();return!r||l?n=x:!i||e!=E||t.triggerOnTouchEnd&&!t.triggerOnTouchLeave?!i&&e==m&&t.triggerOnTouchLeave&&(n=x):n=m,n}function j(e,n){var t,r=e.touches;return(z()||W())&&(t=N(e,n,p)),(Y()||X())&&!1!==t&&(t=N(e,n,f)),ie()&&!1!==t?t=N(e,n,d):le()&&!1!==t?t=N(e,n,g):re()&&!1!==t&&(t=N(e,n,h)),n===x&&k(e),n===m&&(r?r.length||k(e):k(e)),t}function N(n,c,s){var w;if(s==p){if(Ve.trigger("swipeStatus",[c,Ne||null,je||0,_e||0,ze,Ge,He]),t.swipeStatus&&!1===(w=t.swipeStatus.call(Ve,n,c,Ne||null,je||0,_e||0,ze,Ge,He)))return!1;if(c==m&&V()){if(clearTimeout(en),clearTimeout(nn),Ve.trigger("swipe",[Ne,je,_e,ze,Ge,He]),t.swipe&&!1===(w=t.swipe.call(Ve,n,Ne,je,_e,ze,Ge,He)))return!1;switch(Ne){case r:Ve.trigger("swipeLeft",[Ne,je,_e,ze,Ge,He]),t.swipeLeft&&(w=t.swipeLeft.call(Ve,n,Ne,je,_e,ze,Ge,He));break;case i:Ve.trigger("swipeRight",[Ne,je,_e,ze,Ge,He]),t.swipeRight&&(w=t.swipeRight.call(Ve,n,Ne,je,_e,ze,Ge,He));break;case l:Ve.trigger("swipeUp",[Ne,je,_e,ze,Ge,He]),t.swipeUp&&(w=t.swipeUp.call(Ve,n,Ne,je,_e,ze,Ge,He));break;case o:Ve.trigger("swipeDown",[Ne,je,_e,ze,Ge,He]),t.swipeDown&&(w=t.swipeDown.call(Ve,n,Ne,je,_e,ze,Ge,He))}}}if(s==f){if(Ve.trigger("pinchStatus",[c,Xe||null,Fe||0,_e||0,ze,Ce,Ge]),t.pinchStatus&&!1===(w=t.pinchStatus.call(Ve,n,c,Xe||null,Fe||0,_e||0,ze,Ce,Ge)))return!1;if(c==m&&F())switch(Xe){case u:Ve.trigger("pinchIn",[Xe||null,Fe||0,_e||0,ze,Ce,Ge]),t.pinchIn&&(w=t.pinchIn.call(Ve,n,Xe||null,Fe||0,_e||0,ze,Ce,Ge));break;case a:Ve.trigger("pinchOut",[Xe||null,Fe||0,_e||0,ze,Ce,Ge]),t.pinchOut&&(w=t.pinchOut.call(Ve,n,Xe||null,Fe||0,_e||0,ze,Ce,Ge))}}return s==h?c!==x&&c!==m||(clearTimeout(en),clearTimeout(nn),J()&&!ee()?($e=Oe(),en=setTimeout(e.proxy(function(){$e=null,Ve.trigger("tap",[n.target]),t.tap&&(w=t.tap.call(Ve,n,n.target))},this),t.doubleTapThreshold)):($e=null,Ve.trigger("tap",[n.target]),t.tap&&(w=t.tap.call(Ve,n,n.target)))):s==d?c!==x&&c!==m||(clearTimeout(en),clearTimeout(nn),$e=null,Ve.trigger("doubletap",[n.target]),t.doubleTap&&(w=t.doubleTap.call(Ve,n,n.target))):s==g&&(c!==x&&c!==m||(clearTimeout(en),$e=null,Ve.trigger("longtap",[n.target]),t.longTap&&(w=t.longTap.call(Ve,n,n.target)))),w}function H(){var e=!0;return null!==t.threshold&&(e=je>=t.threshold),e}function _(){var e=!1;return null!==t.cancelThreshold&&null!==Ne&&(e=ge(Ne)-je>=t.cancelThreshold),e}function q(){return null===t.pinchThreshold||Fe>=t.pinchThreshold}function Q(){return!(t.maxTimeThreshold&&_e>=t.maxTimeThreshold)}function C(e,n){if(!1!==t.preventDefaultEvents)if(t.allowPageScroll===c)e.preventDefault();else{var u=t.allowPageScroll===s;switch(n){case r:(t.swipeLeft&&u||!u&&t.allowPageScroll!=w)&&e.preventDefault();break;case i:(t.swipeRight&&u||!u&&t.allowPageScroll!=w)&&e.preventDefault();break;case l:(t.swipeUp&&u||!u&&t.allowPageScroll!=v)&&e.preventDefault();break;case o:(t.swipeDown&&u||!u&&t.allowPageScroll!=v)&&e.preventDefault()}}}function F(){var e=G(),n=Z(),t=q();return e&&n&&t}function X(){return!!(t.pinchStatus||t.pinchIn||t.pinchOut)}function Y(){return!(!F()||!X())}function V(){var e=Q(),n=H(),t=G(),r=Z();return!_()&&r&&t&&n&&e}function W(){return!!(t.swipe||t.swipeStatus||t.swipeLeft||t.swipeRight||t.swipeUp||t.swipeDown)}function z(){return!(!V()||!W())}function G(){return ze===t.fingers||t.fingers===T||!S}function Z(){return 0!==Ge[0].end.x}function B(){return!!t.tap}function J(){return!!t.doubleTap}function K(){return!!t.longTap}function $(){if(null==$e)return!1;var e=Oe();return J()&&e-$e<=t.doubleTapThreshold}function ee(){return $()}function ne(){return(1===ze||!S)&&(isNaN(je)||je<t.threshold)}function te(){return _e>t.longTapThreshold&&je<b}function re(){return!(!ne()||!B())}function ie(){return!(!$()||!J())}function le(){return!(!te()||!K())}function oe(e){Je=Oe(),Ke=e.touches.length+1}function ue(){Je=0,Ke=0}function ae(){var e=!1;return Je&&Oe()-Je<=t.fingerReleaseThreshold&&(e=!0),e}function ce(){return!(!0!==Ve.data(D+"_intouch"))}function se(e){Ve&&(!0===e?(Ve.bind(ke,L),Ve.bind(Ae,R),Ie&&Ve.bind(Ie,A)):(Ve.unbind(ke,L,!1),Ve.unbind(Ae,R,!1),Ie&&Ve.unbind(Ie,A,!1)),Ve.data(D+"_intouch",!0===e))}function pe(e,n){var t={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return t.start.x=t.last.x=t.end.x=n.pageX||n.clientX,t.start.y=t.last.y=t.end.y=n.pageY||n.clientY,Ge[e]=t,t}function fe(e){var n=void 0!==e.identifier?e.identifier:0,t=he(n);return null===t&&(t=pe(n,e)),t.last.x=t.end.x,t.last.y=t.end.y,t.end.x=e.pageX||e.clientX,t.end.y=e.pageY||e.clientY,t}function he(e){return Ge[e]||null}function de(e,n){e!=c&&(n=Math.max(n,ge(e)),Ye[e].distance=n)}function ge(e){if(Ye[e])return Ye[e].distance}function we(){var e={};return e[r]=ve(r),e[i]=ve(i),e[l]=ve(l),e[o]=ve(o),e}function ve(e){return{direction:e,distance:0}}function Te(){return Be-Ze}function be(e,n){var t=Math.abs(e.x-n.x),r=Math.abs(e.y-n.y);return Math.round(Math.sqrt(t*t+r*r))}function ye(e,n){return(n/e*1).toFixed(2)}function Ee(){return Ce<1?a:u}function me(e,n){return Math.round(Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2)))}function xe(e,n){var t=e.x-n.x,r=n.y-e.y,i=Math.atan2(r,t),l=Math.round(180*i/Math.PI);return l<0&&(l=360-Math.abs(l)),l}function Se(e,n){if(Pe(e,n))return c;var t=xe(e,n);return t<=45&&t>=0?r:t<=360&&t>=315?r:t>=135&&t<=225?i:t>45&&t<135?o:l}function Oe(){return(new Date).getTime()}function Me(n){var t=(n=e(n)).offset();return{left:t.left,right:t.left+n.outerWidth(),top:t.top,bottom:t.top+n.outerHeight()}}function De(e,n){return e.x>n.left&&e.x<n.right&&e.y>n.top&&e.y<n.bottom}function Pe(e,n){return e.x==n.x&&e.y==n.y}var t=e.extend({},t),Le=S||M||!t.fallbackToMouseEvents,Re=Le?M?O?"MSPointerDown":"pointerdown":"touchstart":"mousedown",ke=Le?M?O?"MSPointerMove":"pointermove":"touchmove":"mousemove",Ae=Le?M?O?"MSPointerUp":"pointerup":"touchend":"mouseup",Ie=Le?M?"mouseleave":null:"mouseleave",Ue=M?O?"MSPointerCancel":"pointercancel":"touchcancel",je=0,Ne=null,He=null,_e=0,qe=0,Qe=0,Ce=1,Fe=0,Xe=0,Ye=null,Ve=e(n),We="start",ze=0,Ge={},Ze=0,Be=0,Je=0,Ke=0,$e=0,en=null,nn=null;try{Ve.bind(Re,P),Ve.bind(Ue,k)}catch(n){e.error("events not supported "+Re+","+Ue+" on jQuery.swipe")}this.enable=function(){return this.disable(),Ve.bind(Re,P),Ve.bind(Ue,k),Ve},this.disable=function(){return I(),Ve},this.destroy=function(){I(),Ve.data(D,null),Ve=null},this.option=function(n,r){if("object"==typeof n)t=e.extend(t,n);else if(void 0!==t[n]){if(void 0===r)return t[n];t[n]=r}else{if(!n)return t;e.error("Option "+n+" does not exist on jQuery.swipe.options")}return null}}var r="left",i="right",l="up",o="down",u="in",a="out",c="none",s="auto",p="swipe",f="pinch",h="tap",d="doubletap",g="longtap",w="horizontal",v="vertical",T="all",b=10,y="start",E="move",m="end",x="cancel",S="ontouchstart"in window,O=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!S,M=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!S,D="TouchSwipe",P={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};e.fn.swipe=function(t){var r=e(this),i=r.data(D);if(i&&"string"==typeof t){if(i[t])return i[t].apply(i,Array.prototype.slice.call(arguments,1));e.error("Method "+t+" does not exist on jQuery.swipe")}else if(i&&"object"==typeof t)i.option.apply(i,arguments);else if(!(i||"object"!=typeof t&&t))return n.apply(this,arguments);return r},e.fn.swipe.version="1.6.18",e.fn.swipe.defaults=P,e.fn.swipe.phases={PHASE_START:y,PHASE_MOVE:E,PHASE_END:m,PHASE_CANCEL:x},e.fn.swipe.directions={LEFT:r,RIGHT:i,UP:l,DOWN:o,IN:u,OUT:a},e.fn.swipe.pageScroll={NONE:c,HORIZONTAL:w,VERTICAL:v,AUTO:s},e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:T}});

/*!
 * jQuery TransTC for CarouFredSel - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(d){function m(a){if(a in j.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in j.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in j.style)return d}}function l(a){"string"===typeof a&&this.parse(a);return this}function q(a,b,c,e){var h=[];d.each(a,function(a){a=d.camelCase(a);a=d.transit.propertyMap[a]||d.cssProps[a]||a;a=a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()});-1===d.inArray(a,h)&&h.push(a)});d.cssEase[c]&&(c=d.cssEase[c]);
	var f=""+n(b)+" "+c;0<parseInt(e,10)&&(f+=" "+n(e));var g=[];d.each(h,function(a,b){g.push(b+" "+f)});return g.join(", ")}function f(a,b){b||(d.cssNumber[a]=!0);d.transit.propertyMap[a]=e.transform;d.cssHooks[a]={get:function(b){return d(b).css("transit:transform").get(a)},set:function(b,e){var h=d(b).css("transit:transform");h.setFromString(a,e);d(b).css({"transit:transform":h})}}}function g(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?a:""+a+b}function n(a){d.fx.speeds[a]&&(a=d.fx.speeds[a]);
	return g(a,"ms")}d.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var j=document.createElement("div"),e={},r=-1<navigator.userAgent.toLowerCase().indexOf("chrome");e.transition=m("transition");e.transitionDelay=m("transitionDelay");e.transform=m("transform");e.transformOrigin=m("transformOrigin");j.style[e.transform]=
	"";j.style[e.transform]="rotateY(90deg)";e.transform3d=""!==j.style[e.transform];var p=e.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[e.transition]||null,k;for(k in e)e.hasOwnProperty(k)&&"undefined"===typeof d.support[k]&&(d.support[k]=e[k]);j=null;d.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",
	easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",
	easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};d.cssHooks["transit:transform"]={get:function(a){return d(a).data("transform")||
	new l},set:function(a,b){var c=b;c instanceof l||(c=new l(c));a.style[e.transform]="WebkitTransform"===e.transform&&!r?c.toString(!0):c.toString();d(a).data("transform",c)}};d.cssHooks.transform={set:d.cssHooks["transit:transform"].set};"1.8">d.fn.jquery&&(d.cssHooks.transformOrigin={get:function(a){return a.style[e.transformOrigin]},set:function(a,b){a.style[e.transformOrigin]=b}},d.cssHooks.transition={get:function(a){return a.style[e.transition]},set:function(a,b){a.style[e.transition]=b}});f("scale");
	f("translate");f("rotate");f("rotateX");f("rotateY");f("rotate3d");f("perspective");f("skewX");f("skewY");f("x",!0);f("y",!0);l.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a);l.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=
		g(a,"deg")},rotateX:function(a){this.rotateX=g(a,"deg")},rotateY:function(a){this.rotateY=g(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=g(a,"deg")},skewY:function(a){this.skewY=g(a,"deg")},perspective:function(a){this.perspective=g(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);
		null!==a&&void 0!==a&&(this._translateX=g(a,"px"));null!==b&&void 0!==b&&(this._translateY=g(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));
		a[3]&&(a[3]=g(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,d,e){b.setFromString(d,e)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(e.transform3d||!("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};d.fn.transition=d.fn.transit=function(a,
																																																																																																																															 b,c,f){var h=this,g=0,j=!0;"function"===typeof b&&(f=b,b=void 0);"function"===typeof c&&(f=c,c=void 0);"undefined"!==typeof a.easing&&(c=a.easing,delete a.easing);"undefined"!==typeof a.duration&&(b=a.duration,delete a.duration);"undefined"!==typeof a.complete&&(f=a.complete,delete a.complete);"undefined"!==typeof a.queue&&(j=a.queue,delete a.queue);"undefined"!==typeof a.delay&&(g=a.delay,delete a.delay);"undefined"===typeof b&&(b=d.fx.speeds._default);"undefined"===typeof c&&(c=d.cssEase._default);
		b=n(b);var l=q(a,b,c,g),k=d.transit.enabled&&e.transition?parseInt(b,10)+parseInt(g,10):0;if(0===k)return b=j,c=function(b){h.css(a);f&&f.apply(h);b&&b()},!0===b?h.queue(c):b?h.queue(b,c):c(),h;var m={};b=j;c=function(b){this.offsetWidth;var c=!1,g=function(){c&&h.unbind(p,g);0<k&&h.each(function(){this.style[e.transition]=m[this]||null});"function"===typeof f&&f.apply(h);"function"===typeof b&&b()};0<k&&p&&d.transit.useTransitionEnd?(c=!0,h.bind(p,g)):window.setTimeout(g,k);h.each(function(){0<k&&
		(this.style[e.transition]=l);d(this).css(a)})};!0===b?h.queue(c):b?h.queue(b,c):c();return this};d.transit.getTransitionValue=q})(jQuery);

/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 */
(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
	p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
	n();return d?d.promise(g):g}})(jQuery);

/*! Mouse-wheel
 * Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.0.6
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)

/* Lazy Load - jQuery plugin for lazy loading images
 * Copyright (c) 2007-2013 Mika Tuupola
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 * Version: 1.9.0
 */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.data(j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.data(j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License.
 * Copyright Г‚В© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * Open source under the BSD License.
 * Copyright Г‚В© 2008 George McGinley Smith
 * All rights reserved.
 *
 */
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.6
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,targ,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

$(document).ready(function(){
	initCaptchaRefreshButtons();
});

/**
 * Инициализируе кнопки обновить капчу в формах
 */
function initCaptchaRefreshButtons(){
	var	$parent = $('body'),
		$captchaArray = $('div.required.field.captcha', $parent);

	if ($captchaArray.length){
		$captchaArray.each(function (id, item) {
			var $captcha = $(item),
				$reset = $captcha.find('.captcha_reset'),
				$image = $captcha.find('.captcha_img');

			if (!$captcha.attr('capthca_enabled') ) {
				$captcha.attr('capthca_enabled', 1);
				$reset.on('click', function () {
					$.get('/udata:/system/captcha/').done(function (response) {
						var $response = $(response),
							$imageUrl = $response.find('url'),
							newImage = $(document.createElement('img')),
							imageSrc = '';

						$image.find('img').remove();
						if ($imageUrl.length) {
							imageSrc = $imageUrl.text();
							imageSrc += $imageUrl.attr('random-string');
							newImage.attr('src', imageSrc);
							$image.append(newImage);
						}

					})
				})
			}

		})
	}
}


/*!
 * jquery.inputmask.bundle
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 - 2015 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 3.1.64-92
 */
!function(a){function b(b){this.el=void 0,this.opts=a.extend(!0,{},this.defaults,b),this.noMasksCache=b&&void 0!==b.definitions,this.userOptions=b||{},e(this.opts.alias,b,this.opts)}function c(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}function d(a){var b="text"==a||"tel"==a||"password"==a;if(!b){var c=document.createElement("input");c.setAttribute("type",a),b="text"===c.type,c=null}return b}function e(b,c,d){var f=d.aliases[b];return f?(f.alias&&e(f.alias,void 0,d),a.extend(!0,d,f),a.extend(!0,d,c),!0):(void 0==d.mask&&(d.mask=b),!1)}function f(b,c,d){var f=a(b),g=f.data("inputmask");if(g&&""!=g)try{g=g.replace(new RegExp("'","g"),'"');var h=a.parseJSON("{"+g+"}");a.extend(!0,d,h)}catch(i){}for(var j in c){var k=f.data("inputmask-"+j.toLowerCase());void 0!=k&&(k="boolean"==typeof k?k:k.toString(),"mask"==j&&0==k.indexOf("[")?(d[j]=k.replace(/[\s[\]]/g,"").split("','"),d[j][0]=d[j][0].replace("'",""),d[j][d[j].length-1]=d[j][d[j].length-1].replace("'","")):d[j]=k)}return d.alias?e(d.alias,d,c):a.extend(!0,c,d),c}function g(c,d){function e(b){function d(a,b,c,d){this.matches=[],this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function e(b,d,e){var f=c.definitions[d],g=0==b.matches.length;if(e=void 0!=e?e:b.matches.length,f&&!o){f.placeholder=a.isFunction(f.placeholder)?f.placeholder.call(this,c):f.placeholder;for(var h=f.prevalidator,i=h?h.length:0,j=1;j<f.cardinality;j++){var k=i>=j?h[j-1]:[],l=k.validator,m=k.cardinality;b.matches.splice(e++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:m?m:1,optionality:b.isOptional,newBlockMarker:g,casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}b.matches.splice(e++,0,{fn:f.validator?"string"==typeof f.validator?new RegExp(f.validator):new function(){this.test=f.validator}:new RegExp("."),cardinality:f.cardinality,optionality:b.isOptional,newBlockMarker:g,casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}else b.matches.splice(e++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:g,casing:null,def:d,placeholder:void 0,mask:d}),o=!1}function f(a){a.isGroup&&(a.isGroup=!1,e(a,c.groupmarker.start,0),e(a,c.groupmarker.end))}function g(a,b,c,d){b.matches.length>0&&(void 0==d||d)&&(c=b.matches[b.matches.length-1],f(c)),e(b,a)}for(var h,i,j,k,l,m,n=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,o=!1,p=new d,q=[],r=[];h=n.exec(b);)if(i=h[0],o)g(i,p,m);else switch(i.charAt(0)){case c.escapeChar:o=!0;break;case c.optionalmarker.end:case c.groupmarker.end:if(j=q.pop(),q.length>0){if(k=q[q.length-1],k.matches.push(j),k.isAlternator){l=q.pop();for(var s=0;s<l.matches.length;s++)l.matches[s].isGroup=!1;q.length>0?(k=q[q.length-1],k.matches.push(l)):p.matches.push(l)}}else p.matches.push(j);break;case c.optionalmarker.start:q.push(new d(!1,!0));break;case c.groupmarker.start:q.push(new d(!0));break;case c.quantifiermarker.start:var t=new d(!1,!1,!0);i=i.replace(/[{}]/g,"");var u=i.split(","),v=isNaN(u[0])?u[0]:parseInt(u[0]),w=1==u.length?v:isNaN(u[1])?u[1]:parseInt(u[1]);if(("*"==w||"+"==w)&&(v="*"==w?0:1),t.quantifier={min:v,max:w},q.length>0){var x=q[q.length-1].matches;if(h=x.pop(),!h.isGroup){var y=new d(!0);y.matches.push(h),h=y}x.push(h),x.push(t)}else{if(h=p.matches.pop(),!h.isGroup){var y=new d(!0);y.matches.push(h),h=y}p.matches.push(h),p.matches.push(t)}break;case c.alternatormarker:q.length>0?(k=q[q.length-1],m=k.matches.pop()):m=p.matches.pop(),m.isAlternator?q.push(m):(l=new d(!1,!1,!1,!0),l.matches.push(m),q.push(l));break;default:if(q.length>0){if(k=q[q.length-1],g(i,k,m,!k.isAlternator),k.isAlternator){l=q.pop();for(var s=0;s<l.matches.length;s++)l.matches[s].isGroup=!1;q.length>0?(k=q[q.length-1],k.matches.push(l)):p.matches.push(l)}}else g(i,p,m)}return p.matches.length>0&&(m=p.matches[p.matches.length-1],f(m),r.push(p)),r}function f(f,g){if(void 0==f||""==f)return void 0;if(1==f.length&&0==c.greedy&&0!=c.repeat&&(c.placeholder=""),c.repeat>0||"*"==c.repeat||"+"==c.repeat){var h="*"==c.repeat?0:"+"==c.repeat?1:c.repeat;f=c.groupmarker.start+f+c.groupmarker.end+c.quantifiermarker.start+h+","+c.repeat+c.quantifiermarker.end}var i;return void 0==b.prototype.masksCache[f]||d===!0?(i={mask:f,maskToken:e(f),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:g},d!==!0&&(b.prototype.masksCache[f]=i)):i=a.extend(!0,{},b.prototype.masksCache[f]),i}function g(a){if(a=a.toString(),c.numericInput){a=a.split("").reverse();for(var b=0;b<a.length;b++)a[b]==c.optionalmarker.start?a[b]=c.optionalmarker.end:a[b]==c.optionalmarker.end?a[b]=c.optionalmarker.start:a[b]==c.groupmarker.start?a[b]=c.groupmarker.end:a[b]==c.groupmarker.end&&(a[b]=c.groupmarker.start);a=a.join("")}return a}var h=void 0;if(a.isFunction(c.mask)&&(c.mask=c.mask.call(this,c)),a.isArray(c.mask)){if(c.mask.length>1){c.keepStatic=void 0==c.keepStatic?!0:c.keepStatic;var i="(";return a.each(c.mask,function(b,c){i.length>1&&(i+=")|("),i+=g(void 0==c.mask||a.isFunction(c.mask)?c:c.mask)}),i+=")",f(i,c.mask)}c.mask=c.mask.pop()}return c.mask&&(h=void 0==c.mask.mask||a.isFunction(c.mask.mask)?f(g(c.mask),c.mask):f(g(c.mask.mask),c.mask)),h}function h(e,f,g){function h(a,b,c){b=b||0;var d,e,f,g=[],h=0;do{if(a===!0&&i().validPositions[h]){var j=i().validPositions[h];e=j.match,d=j.locator.slice(),g.push(c===!0?j.input:H(h,e))}else f=r(h,d,h-1),e=f.match,d=f.locator.slice(),g.push(H(h,e));h++}while((void 0==da||da>h-1)&&null!=e.fn||null==e.fn&&""!=e.def||b>=h);return g.pop(),g}function i(){return f}function n(a){var b=i();b.buffer=void 0,b.tests={},a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=0)}function o(a,b){var c=i(),d=-1,e=c.validPositions;void 0==a&&(a=-1);var f=d,g=d;for(var h in e){var j=parseInt(h);e[j]&&(b||null!=e[j].match.fn)&&(a>=j&&(f=j),j>=a&&(g=j))}return d=-1!=f&&a-f>1||a>g?f:g}function p(b,c,d){if(g.insertMode&&void 0!=i().validPositions[b]&&void 0==d){var e,f=a.extend(!0,{},i().validPositions),h=o();for(e=b;h>=e;e++)delete i().validPositions[e];i().validPositions[b]=c;var j,k=!0,l=i().validPositions;for(e=j=b;h>=e;e++){var m=f[e];if(void 0!=m)for(var n=j,p=-1;n<C()&&(null==m.match.fn&&l[e]&&(l[e].match.optionalQuantifier===!0||l[e].match.optionality===!0)||null!=m.match.fn);){if(null==m.match.fn||!g.keepStatic&&l[e]&&(void 0!=l[e+1]&&u(e+1,l[e].locator.slice(),e).length>1||void 0!=l[e].alternation)?n++:n=D(j),t(n,m.match.def)){k=A(n,m.input,!0,!0)!==!1,j=n;break}if(k=null==m.match.fn,p==n)break;p=n}if(!k)break}if(!k)return i().validPositions=a.extend(!0,{},f),!1}else i().validPositions[b]=c;return!0}function q(a,b,c,d){var e,f=a;i().p=a;for(e=f;b>e;e++)void 0!=i().validPositions[e]&&(c===!0||0!=g.canClearPosition(i(),e,o(),d,g))&&delete i().validPositions[e];for(n(!0),e=f+1;e<=o();){for(;void 0!=i().validPositions[f];)f++;var h=i().validPositions[f];f>e&&(e=f+1);var j=i().validPositions[e];void 0!=j&&void 0==h?(t(f,j.match.def)&&A(f,j.input,!0)!==!1&&(delete i().validPositions[e],e++),f++):e++}var k=o(),l=C();for(c!==!0&&void 0!=i().validPositions[k]&&i().validPositions[k].input==g.radixPoint&&delete i().validPositions[k],e=k+1;l>=e;e++)i().validPositions[e]&&delete i().validPositions[e];n(!0)}function r(a,b,c){var d=i().validPositions[a];if(void 0==d)for(var e=u(a,b,c),f=o(),h=i().validPositions[f]||u(0)[0],j=void 0!=h.alternation?h.locator[h.alternation].toString().split(","):[],k=0;k<e.length&&(d=e[k],!(d.match&&(g.greedy&&d.match.optionalQuantifier!==!0||(d.match.optionality===!1||d.match.newBlockMarker===!1)&&d.match.optionalQuantifier!==!0)&&(void 0==h.alternation||h.alternation!=d.alternation||void 0!=d.locator[h.alternation]&&z(d.locator[h.alternation].toString().split(","),j))));k++);return d}function s(a){return i().validPositions[a]?i().validPositions[a].match:u(a)[0].match}function t(a,b){for(var c=!1,d=u(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def==b){c=!0;break}return c}function u(b,c,d,e){function f(c,d,e,g){function j(e,g,n){if(h>1e4)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+i().mask),!0;if(h==b&&void 0==e.matches)return k.push({match:e,locator:g.reverse()}),!0;if(void 0!=e.matches){if(e.isGroup&&n!==!0){if(e=j(c.matches[m+1],g))return!0}else if(e.isOptional){var o=e;if(e=f(e,d,g,n)){var p=k[k.length-1].match,q=0==a.inArray(p,o.matches);if(!q)return!0;l=!0,h=b}}else if(e.isAlternator){var r,s=e,t=[],u=k.slice(),v=g.length,w=d.length>0?d.shift():-1;if(-1==w||"string"==typeof w){var x=h,y=d.slice(),z=[];"string"==typeof w&&(z=w.split(","));for(var A=0;A<s.matches.length;A++){if(k=[],e=j(s.matches[A],[A].concat(g),n)||e,e!==!0&&void 0!=e&&z[z.length-1]<s.matches.length){var B=c.matches.indexOf(e)+1;c.matches.length>B&&(e=j(c.matches[B],[B].concat(g.slice(1,g.length)),n),e&&(z.push(B.toString()),a.each(k,function(a,b){b.alternation=g.length-1})))}r=k.slice(),h=x,k=[];for(var C=0;C<y.length;C++)d[C]=y[C];for(var D=0;D<r.length;D++){var E=r[D];E.alternation=E.alternation||v;for(var F=0;F<t.length;F++){var G=t[F];if(E.match.mask==G.match.mask&&("string"!=typeof w||-1!=a.inArray(E.locator[E.alternation].toString(),z))){r.splice(D,1),D--,G.locator[E.alternation]=G.locator[E.alternation]+","+E.locator[E.alternation],G.alternation=E.alternation;break}}}t=t.concat(r)}"string"==typeof w&&(t=a.map(t,function(b,c){if(isFinite(c)){var d,e=b.alternation,f=b.locator[e].toString().split(",");b.locator[e]=void 0,b.alternation=void 0;for(var g=0;g<f.length;g++)d=-1!=a.inArray(f[g],z),d&&(void 0!=b.locator[e]?(b.locator[e]+=",",b.locator[e]+=f[g]):b.locator[e]=parseInt(f[g]),b.alternation=e);if(void 0!=b.locator[e])return b}})),k=u.concat(t),h=b,l=k.length>0}else e=s.matches[w]?j(s.matches[w],[w].concat(g),n):!1;if(e)return!0}else if(e.isQuantifier&&n!==!0)for(var H=e,I=d.length>0&&n!==!0?d.shift():0;I<(isNaN(H.quantifier.max)?I+1:H.quantifier.max)&&b>=h;I++){var J=c.matches[a.inArray(H,c.matches)-1];if(e=j(J,[I].concat(g),!0)){var p=k[k.length-1].match;p.optionalQuantifier=I>H.quantifier.min-1;var q=0==a.inArray(p,J.matches);if(q){if(I>H.quantifier.min-1){l=!0,h=b;break}return!0}return!0}}else if(e=f(e,d,g,n))return!0}else h++}for(var m=d.length>0?d.shift():0;m<c.matches.length;m++)if(c.matches[m].isQuantifier!==!0){var n=j(c.matches[m],[m].concat(e),g);if(n&&h==b)return n;if(h>b)break}}var g=i().maskToken,h=c?d:0,j=c||[0],k=[],l=!1;if(e===!0&&i().tests[b])return i().tests[b];if(void 0==c){for(var m,n=b-1;void 0==(m=i().validPositions[n])&&n>-1&&(!i().tests[n]||void 0==(m=i().tests[n][0]));)n--;void 0!=m&&n>-1&&(h=n,j=m.locator.slice())}for(var o=j.shift();o<g.length;o++){var p=f(g[o],j,[o]);if(p&&h==b||h>b)break}return(0==k.length||l)&&k.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),i().tests[b]=a.extend(!0,[],k),i().tests[b]}function v(){return void 0==i()._buffer&&(i()._buffer=h(!1,1)),i()._buffer}function w(){return void 0==i().buffer&&(i().buffer=h(!0,o(),!0)),i().buffer}function x(a,b,c){if(c=c||w().slice(),a===!0)n(),a=0,b=c.length;else for(var d=a;b>d;d++)delete i().validPositions[d],delete i().tests[d];for(var d=a;b>d;d++)c[d]!=g.skipOptionalPartCharacter&&A(d,c[d],!0,!0)}function y(a,b){switch(b.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase()}return a}function z(b,c){for(var d=g.greedy?c:c.slice(0,1),e=!1,f=0;f<b.length;f++)if(-1!=a.inArray(b[f],d)){e=!0;break}return e}function A(b,c,d,e){function f(b,c,d,e){var f=!1;return a.each(u(b),function(h,j){for(var k=j.match,l=c?1:0,m="",r=(w(),k.cardinality);r>l;r--)m+=F(b-(r-1));if(c&&(m+=c),f=null!=k.fn?k.fn.test(m,i(),b,d,g):c!=k.def&&c!=g.skipOptionalPartCharacter||""==k.def?!1:{c:k.def,pos:b},f!==!1){var s=void 0!=f.c?f.c:c;s=s==g.skipOptionalPartCharacter&&null===k.fn?k.def:s;var t=b,u=w();if(void 0!=f.remove&&(a.isArray(f.remove)||(f.remove=[f.remove]),a.each(f.remove.sort(function(a,b){return b-a}),function(a,b){q(b,b+1,!0)})),void 0!=f.insert&&(a.isArray(f.insert)||(f.insert=[f.insert]),a.each(f.insert.sort(function(a,b){return a-b}),function(a,b){A(b.pos,b.c,!0)})),f.refreshFromBuffer){var v=f.refreshFromBuffer;if(d=!0,x(v===!0?v:v.start,v.end,u),void 0==f.pos&&void 0==f.c)return f.pos=o(),!1;if(t=void 0!=f.pos?f.pos:b,t!=b)return f=a.extend(f,A(t,s,!0)),!1}else if(f!==!0&&void 0!=f.pos&&f.pos!=b&&(t=f.pos,x(b,t),t!=b))return f=a.extend(f,A(t,s,!0)),!1;return 1!=f&&void 0==f.pos&&void 0==f.c?!1:(h>0&&n(!0),p(t,a.extend({},j,{input:y(s,k)}),e)||(f=!1),!1)}}),f}function h(b,c,d,e){for(var f,h,j,k,l=a.extend(!0,{},i().validPositions),m=o();m>=0&&(k=i().validPositions[m],!k||void 0==k.alternation||(f=m,h=i().validPositions[f].alternation,r(f).locator[k.alternation]==k.locator[k.alternation]));m--);if(void 0!=h){f=parseInt(f);for(var p in i().validPositions)if(p=parseInt(p),k=i().validPositions[p],p>=f&&void 0!=k.alternation){var q=i().validPositions[f].locator[h].toString().split(","),s=k.locator[h]||q[0];s.length>0&&(s=s.split(",")[0]);for(var t=0;t<q.length;t++)if(s<q[t]){for(var u,v,w=p;w>=0;w--)if(u=i().validPositions[w],void 0!=u){v=u.locator[h],u.locator[h]=parseInt(q[t]);break}if(s!=u.locator[h]){for(var x=[],y=0,z=p+1;z<o()+1;z++){var B=i().validPositions[z];B&&(null!=B.match.fn?x.push(B.input):b>z&&y++),delete i().validPositions[z],delete i().tests[z]}for(n(!0),g.keepStatic=!g.keepStatic,j=!0;x.length>0;){var C=x.shift();if(C!=g.skipOptionalPartCharacter&&!(j=A(o()+1,C,!1,!0)))break}if(u.alternation=h,u.locator[h]=v,j){for(var D=o(b)+1,E=0,z=p+1;z<o()+1;z++){var B=i().validPositions[z];B&&null==B.match.fn&&b>z&&E++}b+=E-y,j=A(b>D?D:b,c,d,e)}if(g.keepStatic=!g.keepStatic,j)return j;n(),i().validPositions=a.extend(!0,{},l)}}break}}return!1}function j(b,c){for(var d=i().validPositions[c],e=d.locator,f=e.length,g=b;c>g;g++)if(!B(g)){var h=u(g),j=h[0],k=-1;a.each(h,function(a,b){for(var c=0;f>c;c++)b.locator[c]&&z(b.locator[c].toString().split(","),e[c].toString().split(","))&&c>k&&(k=c,j=b)}),p(g,a.extend({},j,{input:j.match.def}),!0)}}d=d===!0;for(var k=w(),l=b-1;l>-1&&!i().validPositions[l];l--);for(l++;b>l;l++)void 0==i().validPositions[l]&&((!B(l)||k[l]!=H(l))&&u(l).length>1||k[l]==g.radixPoint||"0"==k[l]&&a.inArray(g.radixPoint,k)<l)&&f(l,k[l],!0);var m=b,s=!1,t=a.extend(!0,{},i().validPositions);if(m<C()&&(s=f(m,c,d,e),(!d||e)&&s===!1)){var v=i().validPositions[m];if(!v||null!=v.match.fn||v.match.def!=c&&c!=g.skipOptionalPartCharacter){if((g.insertMode||void 0==i().validPositions[D(m)])&&!B(m))for(var E=m+1,G=D(m);G>=E;E++)if(s=f(E,c,d,e),s!==!1){j(m,E),m=E;break}}else s={caret:D(m)}}if(s===!1&&g.keepStatic&&N(k)&&(s=h(b,c,d,e)),s===!0&&(s={pos:m}),a.isFunction(g.postValidation)&&0!=s&&!d){n(!0);var I=g.postValidation(w(),g);if(I){if(I.refreshFromBuffer){var J=I.refreshFromBuffer;x(J===!0?J:J.start,J.end,I.buffer),n(!0),s=I}}else n(!0),i().validPositions=a.extend(!0,{},t),s=!1}return s}function B(a){var b=s(a);if(null!=b.fn)return b.fn;if(!g.keepStatic&&void 0==i().validPositions[a]){for(var c=u(a),d=!0,e=0;e<c.length;e++)if(""!=c[e].match.def&&(void 0==c[e].alternation||c[e].locator[c[e].alternation].length>1)){d=!1;break}return d}return!1}function C(){var a;da=ca.prop("maxLength"),-1==da&&(da=void 0);var b,c=o(),d=i().validPositions[c],e=void 0!=d?d.locator.slice():void 0;for(b=c+1;void 0==d||null!=d.match.fn||null==d.match.fn&&""!=d.match.def;b++)d=r(b,e,b-1),e=d.locator.slice();var f=s(b-1);return a=""!=f.def?b:b-1,void 0==da||da>a?a:da}function D(a){var b=C();if(a>=b)return b;for(var c=a;++c<b&&!B(c)&&(g.nojumps!==!0||g.nojumpsThreshold>c););return c}function E(a){var b=a;if(0>=b)return 0;for(;--b>0&&!B(b););return b}function F(a){return void 0==i().validPositions[a]?H(a):i().validPositions[a].input}function G(b,c,d,e,f){if(e&&a.isFunction(g.onBeforeWrite)){var h=g.onBeforeWrite.call(b,e,c,d,g);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;x(i===!0?i:i.start,i.end,h.buffer||c),n(!0),c=w()}d=h.caret||d}}b._valueSet(c.join("")),void 0!=d&&K(b,d),f===!0&&(ga=!0,a(b).trigger("input"))}function H(a,b){if(b=b||s(a),void 0!=b.placeholder)return b.placeholder;if(null==b.fn){if(!g.keepStatic&&void 0==i().validPositions[a]){for(var c,d=u(a),e=!1,f=0;f<d.length;f++){if(c&&""!=d[f].match.def&&d[f].match.def!=c.match.def&&(void 0==d[f].alternation||d[f].alternation==c.alternation)){e=!0;break}1!=d[f].match.optionality&&1!=d[f].match.optionalQuantifier&&(c=d[f])}if(e)return g.placeholder.charAt(a%g.placeholder.length)}return b.def}return g.placeholder.charAt(a%g.placeholder.length)}function I(c,d,e,f){function h(){var a=!1,b=v().slice(l,D(l)).join("").indexOf(k);if(-1!=b&&!B(l)){a=!0;for(var c=v().slice(l,l+b),d=0;d<c.length;d++)if(" "!=c[d]){a=!1;break}}return a}var j=void 0!=f?f.slice():c._valueGet().split(""),k="",l=0;if(n(),i().p=D(-1),d&&c._valueSet(""),!e)if(1!=g.autoUnmask){var m=v().slice(0,D(-1)).join(""),p=j.join("").match(new RegExp("^"+b.escapeRegex(m),"g"));p&&p.length>0&&(j.splice(0,p.length*m.length),l=D(l))}else l=D(l);a.each(j,function(b,d){var f=a.Event("keypress");if(f.which=d.charCodeAt(0),k+=d,ra=o(void 0,!0),lvTest=i().validPositions[ra],nextTest=r(ra+1,lvTest?lvTest.locator.slice():void 0,ra),!h()||e||g.autoUnmask){var j=e?b:null==nextTest.match.fn&&nextTest.match.optionality&&ra+1<i().p?ra+1:i().p;T.call(c,f,!0,!1,e,j),l=j+1,k=""}else T.call(c,f,!0,!1,!0,ra+1)}),d&&G(c,w(),a(c).is(":focus")?D(o(0)):void 0,a.Event("checkval"))}function J(b){if(b[0].inputmask&&!b.hasClass("hasDatepicker")){var c=[],d=i().validPositions;for(var e in d)d[e].match&&null!=d[e].match.fn&&c.push(d[e].input);var f=(ea?c.reverse():c).join(""),h=(ea?w().slice().reverse():w()).join("");return a.isFunction(g.onUnMask)&&(f=g.onUnMask.call(b,h,f,g)||f),f}return b[0]._valueGet()}function K(b,c,d){function e(a){if(ea&&"number"==typeof a&&(!g.greedy||""!=g.placeholder)){var b=w().length;a=b-a}return a}var f,h=b.jquery&&b.length>0?b[0]:b;if("number"!=typeof c)return h.setSelectionRange?(c=h.selectionStart,d=h.selectionEnd):window.getSelection?(f=window.getSelection().getRangeAt(0),(f.commonAncestorContainer.parentNode==h||f.commonAncestorContainer==h)&&(c=f.startOffset,d=f.endOffset)):document.selection&&document.selection.createRange&&(f=document.selection.createRange(),c=0-f.duplicate().moveStart("character",-1e5),d=c+f.text.length),{begin:e(c),end:e(d)};if(c=e(c),d=e(d),d="number"==typeof d?d:c,a(h).is(":visible")){var i=a(h).css("font-size").replace("px","")*d;if(h.scrollLeft=i>h.scrollWidth?i:0,k||0!=g.insertMode||c!=d||d++,h.setSelectionRange)h.selectionStart=c,h.selectionEnd=d;else if(window.getSelection){if(f=document.createRange(),void 0==h.firstChild){var j=document.createTextNode("");h.appendChild(j)}f.setStart(h.firstChild,c<h._valueGet().length?c:h._valueGet().length),f.setEnd(h.firstChild,d<h._valueGet().length?d:h._valueGet().length),f.collapse(!0);var l=window.getSelection();l.removeAllRanges(),l.addRange(f)}else h.createTextRange&&(f=h.createTextRange(),f.collapse(!0),f.moveEnd("character",d),f.moveStart("character",c),f.select())}}function L(b){var c,d,e=w(),f=e.length,g=o(),h={},j=i().validPositions[g],k=void 0!=j?j.locator.slice():void 0;for(c=g+1;c<e.length;c++)d=r(c,k,c-1),k=d.locator.slice(),h[c]=a.extend(!0,{},d);var l=j&&void 0!=j.alternation?j.locator[j.alternation]:void 0;for(c=f-1;c>g&&(d=h[c],(d.match.optionality||d.match.optionalQuantifier||l&&(l!=h[c].locator[j.alternation]&&null!=d.match.fn||null==d.match.fn&&d.locator[j.alternation]&&z(d.locator[j.alternation].toString().split(","),l.split(","))&&""!=u(c)[0].def))&&e[c]==H(c,d.match));c--)f--;return b?{l:f,def:h[f]?h[f].match:void 0}:f}function M(a){for(var b=L(),c=a.length-1;c>b&&!B(c);c--);return a.splice(b,c+1-b),a}function N(b){if(a.isFunction(g.isComplete))return g.isComplete.call(ca,b,g);if("*"==g.repeat)return void 0;{var c=!1,d=L(!0),e=E(d.l);o()}if(void 0==d.def||d.def.newBlockMarker||d.def.optionality||d.def.optionalQuantifier){c=!0;for(var f=0;e>=f;f++){var h=r(f).match;if(null!=h.fn&&void 0==i().validPositions[f]&&h.optionality!==!0&&h.optionalQuantifier!==!0||null==h.fn&&b[f]!=H(f,h)){c=!1;break}}}return c}function O(a,b){return ea?a-b>1||a-b==1&&g.insertMode:b-a>1||b-a==1&&g.insertMode}function P(c){var d=a._data(c).events,e=!1;a.each(d,function(c,d){a.each(d,function(a,c){if("inputmask"==c.namespace&&"setvalue"!=c.type){var d=c.handler;c.handler=function(a){if(!(this.disabled||this.readOnly&&!("keydown"==a.type&&a.ctrlKey&&67==a.keyCode||a.keyCode==b.keyCode.TAB))){switch(a.type){case"input":if(ga===!0||e===!0)return ga=!1,a.preventDefault();break;case"keydown":fa=!1,e=!1;break;case"keypress":if(fa===!0)return a.preventDefault();fa=!0;break;case"compositionstart":e=!0;break;case"compositionupdate":ga=!0;break;case"compositionend":e=!1}return d.apply(this,arguments)}a.preventDefault()}}})})}function Q(b){function c(b){if(void 0==a.valHooks[b]||1!=a.valHooks[b].inputmaskpatch){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},d=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(b){a(b);if(b.inputmask){if(b.inputmask.opts.autoUnmask)return b.inputmask.unmaskedvalue();var d=c(b),e=b.inputmask.maskset,f=e._buffer;return f=f?f.join(""):"",d!=f?d:""}return c(b)},set:function(b,c){var e,f=a(b);return e=d(b,c),b.inputmask&&f.triggerHandler("setvalue.inputmask"),e},inputmaskpatch:!0}}}function d(){a(this);return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():g.call(this)!=v().join("")?g.call(this):"":g.call(this)}function e(b){h.call(this,b),this.inputmask&&a(this).triggerHandler("setvalue.inputmask")}function f(b){a(b).bind("mouseenter.inputmask",function(b){var c=a(this),d=this,e=d._valueGet();""!=e&&e!=w().join("")&&c.triggerHandler("setvalue.inputmask")});
//!! the bound handlers are executed in the order they where bound
	var c=a._data(b).events,d=c.mouseover;if(d){for(var e=d[d.length-1],f=d.length-1;f>0;f--)d[f]=d[f-1];d[0]=e}}var g,h;if(!b._valueGet){var i;Object.getOwnPropertyDescriptor&&void 0==b.value?(g=function(){return this.textContent},h=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:d,set:e})):((i=Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(b,"value"))&&i.configurable,document.__lookupGetter__&&b.__lookupGetter__("value")?(g=b.__lookupGetter__("value"),h=b.__lookupSetter__("value"),b.__defineGetter__("value",d),b.__defineSetter__("value",e)):(g=function(){return b.value},h=function(a){b.value=a},c(b.type),f(b))),b._valueGet=function(a){return ea&&a!==!0?g.call(this).split("").reverse().join(""):g.call(this)},b._valueSet=function(a){h.call(this,ea?a.split("").reverse().join(""):a)}}}function R(c,d,e,f){function h(){if(g.keepStatic){n(!0);var b,d=[],e=a.extend(!0,{},i().validPositions);for(b=o();b>=0;b--){var f=i().validPositions[b];if(f&&(null!=f.match.fn&&d.push(f.input),delete i().validPositions[b],void 0!=f.alternation&&f.locator[f.alternation]==r(b).locator[f.alternation]))break}if(b>-1)for(;d.length>0;){i().p=D(o());var h=a.Event("keypress");h.which=d.pop().charCodeAt(0),T.call(c,h,!0,!1,!1,i().p)}else i().validPositions=a.extend(!0,{},e)}}if((g.numericInput||ea)&&(d==b.keyCode.BACKSPACE?d=b.keyCode.DELETE:d==b.keyCode.DELETE&&(d=b.keyCode.BACKSPACE),ea)){var j=e.end;e.end=e.begin,e.begin=j}if(d==b.keyCode.BACKSPACE&&(e.end-e.begin<1||0==g.insertMode)?(e.begin=E(e.begin),void 0==i().validPositions[e.begin]||i().validPositions[e.begin].input!=g.groupSeparator&&i().validPositions[e.begin].input!=g.radixPoint||e.begin--):d==b.keyCode.DELETE&&e.begin==e.end&&(e.end=B(e.end)?e.end+1:D(e.end)+1,void 0==i().validPositions[e.begin]||i().validPositions[e.begin].input!=g.groupSeparator&&i().validPositions[e.begin].input!=g.radixPoint||e.end++),q(e.begin,e.end,!1,f),f!==!0){h();var k=o(e.begin);k<e.begin?(-1==k&&n(),i().p=D(k)):i().p=e.begin}}function S(d){var e=this,f=a(e),h=d.keyCode,k=K(e);h==b.keyCode.BACKSPACE||h==b.keyCode.DELETE||j&&127==h||d.ctrlKey&&88==h&&!c("cut")?(d.preventDefault(),88==h&&($=w().join("")),R(e,h,k),G(e,w(),i().p,d,$!=w().join("")),e._valueGet()==v().join("")?f.trigger("cleared"):N(w())===!0&&f.trigger("complete"),g.showTooltip&&f.prop("title",i().mask)):h==b.keyCode.END||h==b.keyCode.PAGE_DOWN?setTimeout(function(){var a=D(o());g.insertMode||a!=C()||d.shiftKey||a--,K(e,d.shiftKey?k.begin:a,a)},0):h==b.keyCode.HOME&&!d.shiftKey||h==b.keyCode.PAGE_UP?K(e,0,d.shiftKey?k.begin:0):(g.undoOnEscape&&h==b.keyCode.ESCAPE||90==h&&d.ctrlKey)&&d.altKey!==!0?(I(e,!0,!1,$.split("")),f.click()):h!=b.keyCode.INSERT||d.shiftKey||d.ctrlKey?0!=g.insertMode||d.shiftKey||(h==b.keyCode.RIGHT?setTimeout(function(){var a=K(e);K(e,a.begin)},0):h==b.keyCode.LEFT&&setTimeout(function(){var a=K(e);K(e,ea?a.begin+1:a.begin-1)},0)):(g.insertMode=!g.insertMode,K(e,g.insertMode||k.begin!=C()?k.begin:k.begin-1)),g.onKeyDown.call(this,d,w(),K(e).begin,g),ha=-1!=a.inArray(h,g.ignorables)}function T(c,d,e,f,h){var j=this,k=a(j),l=c.which||c.charCode||c.keyCode;if(!(d===!0||c.ctrlKey&&c.altKey)&&(c.ctrlKey||c.metaKey||ha))return!0;if(l){46==l&&0==c.shiftKey&&","==g.radixPoint&&(l=44);var m,o=d?{begin:h,end:h}:K(j),q=String.fromCharCode(l),r=O(o.begin,o.end);r&&(i().undoPositions=a.extend(!0,{},i().validPositions),R(j,b.keyCode.DELETE,o,!0),o.begin=i().p,g.insertMode||(g.insertMode=!g.insertMode,p(o.begin,f),g.insertMode=!g.insertMode),r=!g.multi),i().writeOutBuffer=!0;var s=ea&&!r?o.end:o.begin,t=A(s,q,f);if(t!==!1){if(t!==!0&&(s=void 0!=t.pos?t.pos:s,q=void 0!=t.c?t.c:q),n(!0),void 0!=t.caret)m=t.caret;else{var v=i().validPositions;m=!g.keepStatic&&(void 0!=v[s+1]&&u(s+1,v[s].locator.slice(),s).length>1||void 0!=v[s].alternation)?s+1:D(s)}i().p=m}if(e!==!1){var y=this;if(setTimeout(function(){g.onKeyValidation.call(y,t,g)},0),i().writeOutBuffer&&t!==!1){var z=w();G(j,z,d?void 0:g.numericInput?E(m):m,c,d!==!0),d!==!0&&setTimeout(function(){N(z)===!0&&k.trigger("complete")},0)}else r&&(i().buffer=void 0,i().validPositions=i().undoPositions)}else r&&(i().buffer=void 0,i().validPositions=i().undoPositions);if(g.showTooltip&&k.prop("title",i().mask),d&&a.isFunction(g.onBeforeWrite)){var B=g.onBeforeWrite.call(this,c,w(),m,g);if(B&&B.refreshFromBuffer){var C=B.refreshFromBuffer;x(C===!0?C:C.start,C.end,B.buffer),n(!0),B.caret&&(i().p=B.caret)}}if(c.preventDefault(),d)return t}}function U(b){var c=this,d=a(c),e=c._valueGet(!0),f=K(c);if("propertychange"==b.type&&c._valueGet().length<=C())return!0;if("paste"==b.type){var h=e.substr(0,f.begin),i=e.substr(f.end,e.length);h==v().slice(0,f.begin).join("")&&(h=""),i==v().slice(f.end).join("")&&(i=""),window.clipboardData&&window.clipboardData.getData?e=h+window.clipboardData.getData("Text")+i:b.originalEvent&&b.originalEvent.clipboardData&&b.originalEvent.clipboardData.getData&&(e=h+b.originalEvent.clipboardData.getData("text/plain")+i)}var j=e;if(a.isFunction(g.onBeforePaste)){if(j=g.onBeforePaste.call(c,e,g),j===!1)return b.preventDefault(),!1;j||(j=e)}return I(c,!1,!1,ea?j.split("").reverse():j.split("")),G(c,w(),void 0,b,!0),d.click(),N(w())===!0&&d.trigger("complete"),!1}function V(b){var c=this;I(c,!0,!1),N(w())===!0&&a(c).trigger("complete"),b.preventDefault()}function W(a){var b=this;$=w().join(""),(""==aa||0!=a.originalEvent.data.indexOf(aa))&&(_=K(b))}function X(b){var c=this,d=K(c);0==b.originalEvent.data.indexOf(aa)&&(n(),d=_);var e=b.originalEvent.data;K(c,d.begin,d.end);for(var f=0;f<e.length;f++){var h=a.Event("keypress");h.which=e.charCodeAt(f),fa=!1,ha=!1,T.call(c,h)}setTimeout(function(){var a=i().p;G(c,w(),g.numericInput?E(a):a)},0),aa=b.originalEvent.data}function Y(a){}function Z(c){ca=a(c),g.showTooltip&&ca.prop("title",i().mask),("rtl"==c.dir||g.rightAlign)&&ca.css("text-align","right"),("rtl"==c.dir||g.numericInput)&&(c.dir="ltr",ca.removeAttr("dir"),c.inputmask.isRTL=!0,ea=!0),ca.unbind(".inputmask"),(ca.is(":input")&&d(ca.attr("type"))||c.isContentEditable)&&(ca.closest("form").bind("submit",function(a){$!=w().join("")&&ca.change(),g.clearMaskOnLostFocus&&ca[0]._valueGet&&ca[0]._valueGet()==v().join("")&&ca[0]._valueSet(""),g.removeMaskOnSubmit&&ca.inputmask("remove")}).bind("reset",function(){setTimeout(function(){ca.triggerHandler("setvalue.inputmask")},0)}),ca.bind("mouseenter.inputmask",function(){var b=a(this),c=this;ja=!0,!b.is(":focus")&&g.showMaskOnHover&&c._valueGet()!=w().join("")&&G(c,w())}).bind("blur.inputmask",function(b){var c=a(this),d=this;if(d.inputmask){var e=d._valueGet(),f=w().slice();ia=!0,$!=f.join("")&&setTimeout(function(){c.change(),$=f.join("")},0),""!=e&&(g.clearMaskOnLostFocus&&(e==v().join("")?f=[]:M(f)),N(f)===!1&&(setTimeout(function(){c.trigger("incomplete")},0),g.clearIncomplete&&(n(),f=g.clearMaskOnLostFocus?[]:v().slice())),G(d,f,void 0,b))}}).bind("focus.inputmask",function(b){var c=(a(this),this),d=c._valueGet();g.showMaskOnFocus&&(!g.showMaskOnHover||g.showMaskOnHover&&""==d)?c._valueGet()!=w().join("")&&G(c,w(),D(o())):ja===!1&&K(c,D(o())),$=w().join("")}).bind("mouseleave.inputmask",function(){var b=a(this),c=this;if(ja=!1,g.clearMaskOnLostFocus){var d=w().slice(),e=c._valueGet();b.is(":focus")||e==b.attr("placeholder")||""==e||(e==v().join("")?d=[]:M(d),G(c,d))}}).bind("click.inputmask",function(){var b=a(this),c=this;if(b.is(":focus")){var d=K(c);if(d.begin==d.end)if(g.radixFocus&&""!=g.radixPoint&&-1!=a.inArray(g.radixPoint,w())&&(ia||w().join("")==v().join("")))K(c,a.inArray(g.radixPoint,w())),ia=!1;else{var e=d.begin,f=D(o(e));f>e?K(c,B(e)?e:D(e)):K(c,f)}}}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){K(a,0,D(o()))},0)}).bind(m+".inputmask dragdrop.inputmask drop.inputmask",U).bind("cut.inputmask",function(c){ga=!0;var d=this,e=a(d),f=K(d);if(ea){var h=window.clipboardData||c.originalEvent.clipboardData,j=h.getData("text").split("").reverse().join("");h.setData("text",j)}R(d,b.keyCode.DELETE,f),G(d,w(),i().p,c,$!=w().join("")),d._valueGet()==v().join("")&&e.trigger("cleared"),g.showTooltip&&e.prop("title",i().mask)}).bind("complete.inputmask",g.oncomplete).bind("incomplete.inputmask",g.onincomplete).bind("cleared.inputmask",g.oncleared),ca.bind("keydown.inputmask",S).bind("keypress.inputmask",T),l||ca.bind("compositionstart.inputmask",W).bind("compositionupdate.inputmask",X).bind("compositionend.inputmask",Y),"paste"===m&&ca.bind("input.inputmask",V)),ca.bind("setvalue.inputmask",function(){var b=this,c=b._valueGet();b._valueSet(a.isFunction(g.onBeforeMask)?g.onBeforeMask.call(b,c,g)||c:c),I(b,!0,!1),$=w().join(""),(g.clearMaskOnLostFocus||g.clearIncomplete)&&b._valueGet()==v().join("")&&b._valueSet("")}),Q(c);var e=a.isFunction(g.onBeforeMask)?g.onBeforeMask.call(c,c._valueGet(),g)||c._valueGet():c._valueGet();I(c,!0,!1,e.split(""));var f=w().slice();$=f.join("");var h;try{h=document.activeElement}catch(j){}N(f)===!1&&g.clearIncomplete&&n(),g.clearMaskOnLostFocus&&(f.join("")==v().join("")?f=[]:M(f)),G(c,f),h===c&&K(c,D(o())),P(c)}var $,_,aa,ba,ca,da,ea=!1,fa=!1,ga=!1,ha=!1,ia=!0,ja=!0;if(void 0!=e)switch(e.action){case"isComplete":return ba=e.el,ca=a(ba),f=ba.inputmask.maskset,g=ba.inputmask.opts,N(e.buffer);case"unmaskedvalue":if(ba=e.el,void 0==ba){ca=a({}),ba=ca[0],ba.inputmask=new b,ba.inputmask.opts=g,ba.inputmask.el=ba,ba.inputmask.maskset=f,ba.inputmask.isRTL=g.numericInput,g.numericInput&&(ea=!0);var ka=(a.isFunction(g.onBeforeMask)?g.onBeforeMask.call(ca,e.value,g)||e.value:e.value).split("");I(ca,!1,!1,ea?ka.reverse():ka),a.isFunction(g.onBeforeWrite)&&g.onBeforeWrite.call(this,void 0,w(),0,g)}else ca=a(ba);return f=ba.inputmask.maskset,g=ba.inputmask.opts,ea=ba.inputmask.isRTL,J(ca);case"mask":$=w().join(""),Z(e.el);break;case"format":ca=a({}),ca[0].inputmask=new b,ca[0].inputmask.opts=g,ca[0].inputmask.el=ca[0],ca[0].inputmask.maskset=f,ca[0].inputmask.isRTL=g.numericInput,g.numericInput&&(ea=!0);var ka=(a.isFunction(g.onBeforeMask)?g.onBeforeMask.call(ca,e.value,g)||e.value:e.value).split("");return I(ca,!1,!1,ea?ka.reverse():ka),a.isFunction(g.onBeforeWrite)&&g.onBeforeWrite.call(this,void 0,w(),0,g),e.metadata?{value:ea?w().slice().reverse().join(""):w().join(""),metadata:ca.inputmask("getmetadata")}:ea?w().slice().reverse().join(""):w().join("");case"isValid":ca=a({}),ca[0].inputmask=new b,ca[0].inputmask.opts=g,ca[0].inputmask.el=ca[0],ca[0].inputmask.maskset=f,ca[0].inputmask.isRTL=g.numericInput,g.numericInput&&(ea=!0);var ka=e.value.split("");I(ca,!1,!0,ea?ka.reverse():ka);for(var la=w(),ma=L(),na=la.length-1;na>ma&&!B(na);na--);return la.splice(ma,na+1-ma),N(la)&&e.value==la.join("");case"getemptymask":return ba=e.el,ca=a(ba),f=ba.inputmask.maskset,g=ba.inputmask.opts,v();case"remove":ba=e.el,ca=a(ba),f=ba.inputmask.maskset,g=ba.inputmask.opts,ba._valueSet(J(ca)),ca.unbind(".inputmask"),ba.inputmask=void 0;var oa;Object.getOwnPropertyDescriptor&&(oa=Object.getOwnPropertyDescriptor(ba,"value")),oa&&oa.get?ba._valueGet&&Object.defineProperty(ba,"value",{get:ba._valueGet,set:ba._valueSet}):document.__lookupGetter__&&ba.__lookupGetter__("value")&&ba._valueGet&&(ba.__defineGetter__("value",ba._valueGet),ba.__defineSetter__("value",ba._valueSet));try{delete ba._valueGet,delete ba._valueSet}catch(pa){ba._valueGet=void 0,ba._valueSet=void 0}break;case"getmetadata":if(ba=e.el,ca=a(ba),f=ba.inputmask.maskset,g=ba.inputmask.opts,a.isArray(f.metadata)){for(var qa,ra=o(),sa=ra;sa>=0;sa--)if(i().validPositions[sa]&&void 0!=i().validPositions[sa].alternation){qa=i().validPositions[sa].alternation;break}return void 0!=qa?f.metadata[i().validPositions[ra].locator[qa]]:f.metadata[0]}return f.metadata}}b.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:a.noop,onBeforeMask:void 0,onBeforePaste:void 0,onBeforeWrite:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",groupSeparator:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,canClearPosition:a.noop,postValidation:void 0},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},masksCache:{},mask:function(c){var d=c.jquery&&c.length>0?c[0]:c,e=a.extend(!0,{},this.opts);f(c,e,a.extend(!0,{},this.userOptions));var i=g(e,this.noMasksCache);return void 0!=i&&(d.inputmask=new b,d.inputmask.opts=e,d.inputmask.noMasksCache=this.noMasksCache,d.inputmask.el=d,d.inputmask.maskset=i,d.inputmask.isRTL=!1,h({action:"mask",el:d},i,d.inputmask.opts)),c},unmaskedvalue:function(){return this.el?h({action:"unmaskedvalue",el:this.el}):void 0},remove:function(){return this.el?(h({action:"remove",el:this.el}),this.el.inputmask=void 0,this.el):void 0},getemptymask:function(){return this.el?h({action:"getemptymask",el:this.el}):void 0},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.el?h({action:"isComplete",buffer:this.el._valueGet().split(""),el:this.el}):void 0},getmetadata:function(){return this.el?h({action:"getmetadata",el:this.el}):void 0}},b.extendDefaults=function(c){a.extend(b.prototype.defaults,c)},b.extendDefinitions=function(c){a.extend(b.prototype.defaults.definitions,c)},b.extendAliases=function(c){a.extend(b.prototype.defaults.aliases,c)},b.format=function(c,d,f){var i=a.extend(!0,{},b.prototype.defaults,d);return e(i.alias,d,i),h({action:"format",value:c,metadata:f},g(i,d&&void 0!==d.definitions),i)},b.unmask=function(c,d){var f=a.extend(!0,{},b.prototype.defaults,d);return e(f.alias,d,f),h({action:"unmaskedvalue",value:c},g(f,d&&void 0!==d.definitions),f)},b.isValid=function(c,d){var f=a.extend(!0,{},b.prototype.defaults,d);return e(f.alias,d,f),h({action:"isValid",value:c},g(f,d&&void 0!==d.definitions),f)},b.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},b.keyCode={ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91};var i=navigator.userAgent,j=null!==i.match(new RegExp("iphone","i")),k=(null!==i.match(new RegExp("android.*safari.*","i")),null!==i.match(new RegExp("android.*chrome.*","i"))),l=null!==i.match(new RegExp("android.*firefox.*","i")),m=(/Kindle/i.test(i)||/Silk/i.test(i)||/KFTT/i.test(i)||/KFOT/i.test(i)||/KFJWA/i.test(i)||/KFJWI/i.test(i)||/KFSOWI/i.test(i)||/KFTHWA/i.test(i)||/KFTHWI/i.test(i)||/KFAPWA/i.test(i)||/KFAPWI/i.test(i),c("paste")?"paste":c("input")?"input":"propertychange");return window.inputmask=b,b}(jQuery),function(a){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(b,c){var d;if(c=c||{},"string"==typeof b)switch(b){case"mask":return d=new inputmask(c),this.each(function(){d.mask(this)});case"unmaskedvalue":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.unmaskedvalue():a(e).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.getemptymask():"";case"hasMaskedValue":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.hasMaskedValue():!1;case"isComplete":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.isComplete():!0;case"getmetadata":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.getmetadata():void 0;default:return c.alias=b,d=new inputmask(c),this.each(function(){d.mask(this)})}else{if("object"==typeof b)return d=new inputmask(b),this.each(function(){d.mask(this)});if(void 0==b)return this.each(function(){d=new inputmask(c),d.mask(this)})}}),a.fn.inputmask}(jQuery),function(a){return inputmask.extendDefinitions({h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}}),inputmask.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+b+"[01])")},val2:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+b+"(0[1-9]|1[012]))|(30"+b+"(0[13-9]|1[012]))|(31"+b+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return(isNaN(d)?!1:d>=b&&c>=d)||(isNaN(e)?!1:e>=b&&c>=e)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(d>b){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);e+c>b;)e--;var g=e+f;return a>g?a:g}return d},onKeyDown:function(b,c,d,e){var f=a(this);if(b.ctrlKey&&b.keyCode==inputmask.keyCode.RIGHT){var g=new Date;f.val(g.getDate().toString()+(g.getMonth()+1).toString()+g.getFullYear().toString()),f.triggerHandler("setvalue.inputmask")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!=a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!=e.separator&&-1=="-./".indexOf(a.charAt(1))||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1==f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);-1!=f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);if(!d&&!g&&(a.charAt(1)==e.separator||-1!="-./".indexOf(a.charAt(1)))&&(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0))))return b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)};if(e.mask.indexOf("2")==e.mask.length-1&&g){var h=b.buffer.join("").substr(4,4)+a;if(h!=e.leapday)return!0;var i=parseInt(b.buffer.join("").substr(0,4),10);return i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}return g},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);-1!=f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=1==a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){if(e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)){var f=b.buffer.join("").substr(0,6);if(f!=e.leapday)return!0;var g=parseInt(a,10);return g%4===0?g%100===0?g%400===0?!0:!1:!0:!1}return!1},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear)){var h=b.buffer.join("").substr(0,6);if(h!=e.leapday)f=!0;else{var i=parseInt(a,10);f=i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}}else f=!1;if(f)return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+b+"[0-3])|(02"+b+"[0-2])")},val2:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+b+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+b+"30)|((0[13578]|1[02])"+b+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(b,c,d,e){var f=a(this);if(b.ctrlKey&&b.keyCode==inputmask.keyCode.RIGHT){var g=new Date;f.val((g.getMonth()+1).toString()+g.getDate().toString()+g.getFullYear().toString()),f.triggerHandler("setvalue.inputmask")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(b,c,d,e){var f=a(this);if(b.ctrlKey&&b.keyCode==inputmask.keyCode.RIGHT){var g=new Date;f.val(g.getFullYear().toString()+(g.getMonth()+1).toString()+g.getDate().toString()),f.triggerHandler("setvalue.inputmask")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"==e.hourFormat&&24==parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)==e.timeseparator||-1!="-.:".indexOf(a.charAt(1)))&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24==g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,10>g?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+b+"[0-3])")},val2:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+b+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+b+"30)|((0[1-6])"+b+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),inputmask}(jQuery),function(a){return inputmask.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"}}),inputmask.extendAliases({url:{mask:"ir",placeholder:"",separator:"",defaultPrefix:"http://",regex:{urlpre1:new RegExp("[fh]"),urlpre2:new RegExp("(ft|ht)"),urlpre3:new RegExp("(ftp|htt)"),urlpre4:new RegExp("(ftp:|http|ftps)"),urlpre5:new RegExp("(ftp:/|ftps:|http:|https)"),urlpre6:new RegExp("(ftp://|ftps:/|http:/|https:)"),urlpre7:new RegExp("(ftp://|ftps://|http://|https:/)"),urlpre8:new RegExp("(ftp://|ftps://|http://|https://)")},definitions:{i:{validator:function(a,b,c,d,e){return!0},cardinality:8,prevalidator:function(){for(var a=[],b=8,c=0;b>c;c++)a[c]=function(){var a=c;return{validator:function(b,c,d,e,f){if(f.regex["urlpre"+(a+1)]){var g,h=b;a+1-b.length>0&&(h=c.buffer.join("").substring(0,a+1-b.length)+""+h);var i=f.regex["urlpre"+(a+1)].test(h);if(!e&&!i){for(d-=a,g=0;g<f.defaultPrefix.length;g++)c.buffer[d]=f.defaultPrefix[g],d++;for(g=0;g<h.length-1;g++)c.buffer[d]=h[g],d++;return{pos:d}}return i}return!1},cardinality:a}}();return a}()},r:{validator:".",cardinality:50}},insertMode:!1,autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!=b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!=b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}}},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,64}]@*{1,64}[.*{2,64}][.*{2,6}][.*{1,2}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"}}}}),inputmask}(jQuery),function(a){return inputmask.extendAliases({numeric:{mask:function(a){function b(b){for(var c="",d=0;d<b.length;d++)c+=a.definitions[b[d]]?"\\"+b[d]:b[d];return c}if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator==a.radixPoint&&("."==a.radixPoint?a.groupSeparator=",":","==a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=void 0),a.autoGroup=a.autoGroup&&""!=a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var c=Math.floor(a.integerDigits/a.groupSize),d=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0==d?c-1:c)}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),a.radixFocus=a.radixFocus&&"0"==a.placeholder,a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~";var e=b(a.prefix);return e+="[+]",e+="~{1,"+a.integerDigits+"}",void 0!=a.digits&&(isNaN(a.digits)||parseInt(a.digits)>0)&&(e+=a.digitsOptional?"["+(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}]":(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}"),""!=a.negationSymbol.back&&(e+="[-]"),e+=b(a.suffix),a.greedy=!1,e},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",radixFocus:!0,groupSize:3,autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:void 0,max:void 0,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,postFormat:function(b,c,d,e){var f=!1;b.length>=e.suffix.length&&b.join("").indexOf(e.suffix)==b.length-e.suffix.length&&(b.length=b.length-e.suffix.length,f=!0),c=c>=b.length?b.length-1:c<e.prefix.length?e.prefix.length:c;var g=!1,h=b[c];if(""==e.groupSeparator||-1!=a.inArray(e.radixPoint,b)&&c>a.inArray(e.radixPoint,b)||new RegExp("["+inputmask.escapeRegex(e.negationSymbol.front)+"+]").test(h)){if(f)for(var i=0,j=e.suffix.length;j>i;i++)b.push(e.suffix.charAt(i));return{pos:c}}var k=b.slice();h==e.groupSeparator&&(k.splice(c--,1),h=k[c]),d?h!=e.radixPoint&&(k[c]="?"):k.splice(c,0,"?");var l=k.join(""),m=l;if(l.length>0&&e.autoGroup||d&&-1!=l.indexOf(e.groupSeparator)){var n=inputmask.escapeRegex(e.groupSeparator);g=0==l.indexOf(e.groupSeparator),l=l.replace(new RegExp(n,"g"),"");var o=l.split(e.radixPoint);if(l=""==e.radixPoint?l:o[0],l!=e.prefix+"?0"&&l.length>=e.groupSize+e.prefix.length)for(var p=new RegExp("([-+]?[\\d?]+)([\\d?]{"+e.groupSize+"})");p.test(l);)l=l.replace(p,"$1"+e.groupSeparator+"$2"),l=l.replace(e.groupSeparator+e.groupSeparator,e.groupSeparator);""!=e.radixPoint&&o.length>1&&(l+=e.radixPoint+o[1])}g=m!=l,b.length=l.length;for(var i=0,j=l.length;j>i;i++)b[i]=l.charAt(i);var q=a.inArray("?",b);if(-1==q&&h==e.radixPoint&&(q=a.inArray(e.radixPoint,b)),d?b[q]=h:b.splice(q,1),!g&&f)for(var i=0,j=e.suffix.length;j>i;i++)b.push(e.suffix.charAt(i));return{pos:q,refreshFromBuffer:g,buffer:b}},onBeforeWrite:function(b,c,d,e){if(b&&"blur"==b.type){var f=c.join(""),g=f.replace(e.prefix,"");if(g=g.replace(e.suffix,""),g=g.replace(new RegExp(inputmask.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(g=g.replace(inputmask.escapeRegex(e.radixPoint),".")),isFinite(g)&&isFinite(e.min)&&parseFloat(g)<parseFloat(e.min))return a.extend(!0,{refreshFromBuffer:!0,buffer:(e.prefix+e.min).split("")},e.postFormat((e.prefix+e.min).split(""),0,!0,e));var h=""!=e.radixPoint?c.join("").split(e.radixPoint):[c.join("")],i=h[0].match(e.regex.integerPart(e)),j=2==h.length?h[1].match(e.regex.integerNPart(e)):void 0;!i||i[0]!=e.negationSymbol.front+"0"&&i[0]!=e.negationSymbol.front&&"+"!=i[0]||void 0!=j&&!j[0].match(/^0+$/)||c.splice(i.index,1);

	var k=a.inArray(e.radixPoint,c);if(-1!=k&&isFinite(e.digits)&&!e.digitsOptional){for(var l=1;l<=e.digits;l++)(void 0==c[k+l]||c[k+l]==e.placeholder.charAt(0))&&(c[k+l]="0");return{refreshFromBuffer:!0,buffer:c}}}if(e.autoGroup){var m=e.postFormat(c,d-1,!0,e);return m.caret=d<=e.prefix.length?m.pos:m.pos+1,m}},regex:{integerPart:function(a){return new RegExp("["+inputmask.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+inputmask.escapeRegex(a.groupSeparator)+"]+")}},signHandler:function(a,b,c,d,e){if(!d&&e.allowMinus&&"-"===a||e.allowPlus&&"+"===a){var f=b.buffer.join("").match(e.regex.integerPart(e));if(f&&f[0].length>0)return b.buffer[f.index]==("-"===a?"+":e.negationSymbol.front)?"-"==a?""!=e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c,insert:{pos:b.buffer.length-e.suffix.length-1,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c}:""!=e.negationSymbol.back?{pos:f.index,c:"+",remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c}:{pos:f.index,c:"+",remove:f.index,caret:c}:b.buffer[f.index]==("-"===a?e.negationSymbol.front:"+")?"-"==a&&""!=e.negationSymbol.back?{remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c-1}:{remove:f.index,caret:c-1}:"-"==a?""!=e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,caret:c+1,insert:{pos:b.buffer.length-e.suffix.length,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,caret:c+1}:{pos:f.index,c:a,caret:c+1}}return!1},radixHandler:function(b,c,d,e,f){if(!e&&b===f.radixPoint&&f.digits>0){var g=a.inArray(f.radixPoint,c.buffer),h=c.buffer.join("").match(f.regex.integerPart(f));if(-1!=g&&c.validPositions[g])return c.validPositions[g-1]?{caret:g+1}:{pos:h.index,c:h[0],caret:g+1};if(!h||"0"==h[0]&&h.index+1!=d)return c.buffer[h?h.index:d]="0",{pos:(h?h.index:d)+1}}return!1},leadingZeroHandler:function(b,c,d,e,f){var g=c.buffer.join("").match(f.regex.integerNPart(f)),h=a.inArray(f.radixPoint,c.buffer);if(g&&!e&&(-1==h||h>=d))if(0==g[0].indexOf("0")){d<f.prefix.length&&(d=g.index);var i=a.inArray(f.radixPoint,c._buffer),j=c._buffer&&c.buffer.slice(h).join("")==c._buffer.slice(i).join("")||0==parseInt(c.buffer.slice(h+1).join("")),k=c._buffer&&c.buffer.slice(g.index,h).join("")==c._buffer.slice(f.prefix.length,i).join("")||"0"==c.buffer.slice(g.index,h).join("");if(-1==h||j&&k)return c.buffer.splice(g.index,1),d=d>g.index?d-1:g.index,{pos:d,remove:g.index};if(g.index+1==d||"0"==b)return c.buffer.splice(g.index,1),d=g.index,{pos:d,remove:g.index}}else if("0"===b&&d<=g.index&&g[0]!=f.groupSeparator)return!1;return!0},postValidation:function(b,c){var d=!0,e=b.join(""),f=e.replace(c.prefix,"");return f=f.replace(c.suffix,""),f=f.replace(new RegExp(inputmask.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(f=f.replace(inputmask.escapeRegex(c.radixPoint),".")),f=f.replace(new RegExp("^"+inputmask.escapeRegex(c.negationSymbol.front)),"-"),f=f.replace(new RegExp(inputmask.escapeRegex(c.negationSymbol.back)+"$"),""),f=f==c.negationSymbol.front?f+"0":f,isFinite(f)&&(isFinite(c.max)&&(d=parseFloat(f)<=parseFloat(c.max)),d&&isFinite(c.min)&&(0>=f||f.toString().length>=c.min.toString().length)&&(d=parseFloat(f)>=parseFloat(c.min),d||(d=a.extend(!0,{refreshFromBuffer:!0,buffer:(c.prefix+c.min).split("")},c.postFormat((c.prefix+c.min).split(""),0,!0,c))))),d},definitions:{"~":{validator:function(b,c,d,e,f){var g=f.signHandler(b,c,d,e,f);if(!g&&(g=f.radixHandler(b,c,d,e,f),!g&&(g=e?new RegExp("[0-9"+inputmask.escapeRegex(f.groupSeparator)+"]").test(b):new RegExp("[0-9]").test(b),g===!0&&(g=f.leadingZeroHandler(b,c,d,e,f),g===!0)))){var h=a.inArray(f.radixPoint,c.buffer);g=-1!=h&&f.digitsOptional===!1&&d>h&&!e?{pos:d,remove:d}:{pos:d}}return g},cardinality:1,prevalidator:null},"+":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&(d&&e.allowMinus&&a===e.negationSymbol.front||e.allowMinus&&"-"==a||e.allowPlus&&"+"==a)&&(f="-"==a?""!=e.negationSymbol.back?{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1}:!0),f},cardinality:1,prevalidator:null,placeholder:""},"-":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&d&&e.allowMinus&&a===e.negationSymbol.back&&(f=!0),f},cardinality:1,prevalidator:null,placeholder:""},":":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);if(!f){var g="["+inputmask.escapeRegex(e.radixPoint)+"]";f=new RegExp(g).test(a),f&&b.validPositions[c]&&b.validPositions[c].match.placeholder==e.radixPoint&&(f={caret:c+1})}return f},cardinality:1,prevalidator:null,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,b,c){var d=a.replace(c.prefix,"");return d=d.replace(c.suffix,""),d=d.replace(new RegExp(inputmask.escapeRegex(c.groupSeparator),"g"),""),c.unmaskAsNumber?(d=d.replace(inputmask.escapeRegex.call(this,c.radixPoint),"."),Number(d)):d},isComplete:function(a,b){var c=a.join(""),d=a.slice();if(b.postFormat(d,0,!0,b),d.join("")!=c)return!1;var e=c.replace(b.prefix,"");return e=e.replace(b.suffix,""),e=e.replace(new RegExp(inputmask.escapeRegex(b.groupSeparator),"g"),""),","===b.radixPoint&&(e=e.replace(inputmask.escapeRegex(b.radixPoint),".")),isFinite(e)},onBeforeMask:function(a,b){if(""!=b.radixPoint&&isFinite(a))a=a.toString().replace(".",b.radixPoint);else{var c=a.match(/,/g),d=a.match(/\./g);d&&c?d.length>c.length?(a=a.replace(/\./g,""),a=a.replace(",",b.radixPoint)):c.length>d.length?(a=a.replace(/,/g,""),a=a.replace(".",b.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(inputmask.escapeRegex(b.groupSeparator),"g"),"")}if(0==b.digits&&(-1!=a.indexOf(".")?a=a.substring(0,a.indexOf(".")):-1!=a.indexOf(",")&&(a=a.substring(0,a.indexOf(",")))),""!=b.radixPoint&&isFinite(b.digits)&&-1!=a.indexOf(b.radixPoint)){var e=a.split(b.radixPoint),f=e[1].match(new RegExp("\\d*"))[0];if(parseInt(b.digits)<f.toString().length){var g=Math.pow(10,parseInt(b.digits));a=a.replace(inputmask.escapeRegex(b.radixPoint),"."),a=Math.round(parseFloat(a)*g)/g,a=a.toString().replace(".",b.radixPoint)}}return a.toString()},canClearPosition:function(b,c,d,e,f){var g=b.validPositions[c].input,h=g!=f.radixPoint&&isFinite(g)||c==d||g==f.groupSeparator||g==f.negationSymbol.front||g==f.negationSymbol.back;if(h&&isFinite(g)){var i;if(!e&&b.buffer){i=b.buffer.join("").substr(0,c).match(f.regex.integerNPart(f));var j=c+1,k=null==i||0==parseInt(i[0].replace(new RegExp(inputmask.escapeRegex(f.groupSeparator),"g"),""));if(k)for(;b.validPositions[j]&&(b.validPositions[j].input==f.groupSeparator||"0"==b.validPositions[j].input);)delete b.validPositions[j],j++}var l=[];for(var m in b.validPositions)l.push(b.validPositions[m].input);i=l.join("").match(f.regex.integerNPart(f));var n=a.inArray(f.radixPoint,b.buffer);if(i&&(-1==n||n>=c))if(0==i[0].indexOf("0"))h=i.index!=c||-1==n;else{var o=parseInt(i[0].replace(new RegExp(inputmask.escapeRegex(f.groupSeparator),"g"),""));-1!=n&&10>o&&(b.validPositions[c].input="0",b.p=f.prefix.length+1,h=!1)}}return h},onKeyDown:function(b,c,d,e){var f=a(this);if(b.ctrlKey)switch(b.keyCode){case inputmask.keyCode.UP:f.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(e.step)),f.triggerHandler("setvalue.inputmask");break;case inputmask.keyCode.DOWN:f.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(e.step)),f.triggerHandler("setvalue.inputmask")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1},numeric2:{alias:"numeric"}}),inputmask}(jQuery),function(a){return inputmask.extendAliases({phone:{url:"phone-codes/phone-codes.js",countrycode:"",mask:function(b){b.definitions["#"]=b.definitions[9];var c=[];return a.ajax({url:b.url,async:!1,dataType:"json",success:function(a){c=a},error:function(a,c,d){alert(d+" - "+b.url)}}),c=c.sort(function(a,b){return(a.mask||a)<(b.mask||b)?-1:1})},keepStatic:!1,nojumps:!0,nojumpsThreshold:1,onBeforeMask:function(a,b){var c=a.replace(/^0/g,"");return(c.indexOf(b.countrycode)>1||-1==c.indexOf(b.countrycode))&&(c="+"+b.countrycode+c),c}},phonebe:{alias:"phone",url:"phone-codes/phone-be.js",countrycode:"32",nojumpsThreshold:4}}),inputmask}(jQuery),function(a){return inputmask.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex).test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g(!0));break;case")":var e=d.pop();d.length>0?d[d.length-1].matches.push(e):c.matches.push(e);break;case"{":case"+":case"*":var h=new g(!1,!0);b=b.replace(/[{}]/g,"");var i=b.split(","),j=isNaN(i[0])?i[0]:parseInt(i[0]),k=1==i.length?j:isNaN(i[1])?i[1]:parseInt(i[1]);if(h.quantifier={min:j,max:k},d.length>0){var l=d[d.length-1].matches;if(a=l.pop(),!a.isGroup){var e=new g(!0);e.matches.push(a),a=e}l.push(a),l.push(h)}else{if(a=c.matches.pop(),!a.isGroup){var e=new g(!0);e.matches.push(a),a=e}c.matches.push(a),c.matches.push(h)}break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}function i(b,c){var d=!1;c&&(k+="(",m++);for(var e=0;e<b.matches.length;e++){var f=b.matches[e];if(1==f.isGroup)d=i(f,!0);else if(1==f.isQuantifier){var g=a.inArray(f,b.matches),h=b.matches[g-1],j=k;if(isNaN(f.quantifier.max)){for(;f.repeaterPart&&f.repeaterPart!=k&&f.repeaterPart.length>k.length&&!(d=i(h,!0)););d=d||i(h,!0),d&&(f.repeaterPart=k),k=j+f.quantifier.max}else{for(var l=0,o=f.quantifier.max-1;o>l&&!(d=i(h,!0));l++);k=j+"{"+f.quantifier.min+","+f.quantifier.max+"}"}}else if(void 0!=f.matches)for(var p=0;p<f.length&&!(d=i(f[p],c));p++);else{var q;if("["==f.charAt(0)){q=k,q+=f;for(var r=0;m>r;r++)q+=")";var s=new RegExp("^("+q+")$");d=s.test(n)}else for(var t=0,u=f.length;u>t;t++)if("\\"!=f.charAt(t)){q=k,q+=f.substr(0,t+1),q=q.replace(/\|$/,"");for(var r=0;m>r;r++)q+=")";var s=new RegExp("^("+q+")$");if(d=s.test(n))break}k+=f}if(d)break}return c&&(k+=")",m--),d}null==f.regexTokens&&h();var j=c.buffer.slice(),k="",l=!1,m=0;j.splice(d,0,b);for(var n=j.join(""),o=0;o<f.regexTokens.length;o++){var g=f.regexTokens[o];if(l=i(g,g.isGroup))break}return l},cardinality:1}}}}),inputmask}(jQuery);

// http://lukifer.github.com/HoverForMore.js 1.2.1
// opensource.org/licenses/mit-license.php
;(function(e,t){var n=!!e.fn.jquery;var r=/Firefox/.test(navigator.userAgent);var i=/Mobile/.test(navigator.userAgent);var s={speed:60,gap:20,loop:true,removeTitle:true,snapback:true,alwaysOn:false,addStyles:true,target:false,startEvent:i?"touchstart":n?"mouseenter":"mouseover",stopEvent:i?"touchend":n?"mouseleave":"mouseout"};e.fn["hoverForMore"]=function(t){var n=this;var o=document.getElementsByTagName("head")[0];var u,a,f;t=e.extend({},s,t);var l=t.target||n.selector;if(t.alwaysOn){t.loop=true;t.startEvent="startLooping"}var c=document.body.style.animationName?true:false,h="animation",p="transition",d="transform",v="",m="Webkit Moz O ms Khtml".split(" "),g="";if(c===false)for(var y=0;y<m.length;y++){if(document.body.style[m[y]+"AnimationName"]===undefined)continue;g=m[y];h=g+"Animation";p=g+"Transition";d=g+"Transform";cssPrefix="-"+g.toLowerCase()+"-";c=true;break}if(t.addStyles){o.appendChild(e('<style type="text/css">'+n.selector+"{"+"cursor:default;"+"text-align:left;"+"display:block;"+"overflow:hidden;"+"white-space:nowrap;"+"text-overflow:ellipsis;"+cssPrefix+"user-select: none;"+"}</style>")[0])}if(!c){e(t.target||n.selector).each(function(t,n){var r=e(n);r.attr("title",e.trim(r.text()))});return n}if(t.loop){var b=e('<style type="text/css"></style>');var w=e('<style type="text/css"></style>');o.appendChild(b[0]);o.appendChild(w[0])}else{e(n.selector).each(function(e,t){t.style[d]="translateX(0px)"})}e(l).live(t.startEvent,function(s){f=(new Date).getTime();var o=e(t.target?n.selector:this).filter(":first");if(!o.length)return true;var l=o.parent();var c=o[0].scrollWidth-o.width();if(c<=0)return true;if(t.removeTitle)o.removeAttr("title");a=a||l.css("overflow");u=u||o.css("overflow");l.css("overflow","hidden");if(i&&t.addStyles)e("body").css(cssPrefix+"user-select","none");o.css("overflow","visible").addClass("scrolling");if(t.loop){o.children(".hoverForMoreContent").remove();var v=e('<span class="hoverForMoreContent" />').css({paddingLeft:parseInt(t.gap)+"px"}).text(o.text());o.append(v);var m=v.width()+parseInt(t.gap);var g="@"+cssPrefix+"keyframes hoverForMoreSlide { "+"from {"+cssPrefix+"transform:translateX( 0 ) }"+"to {"+cssPrefix+"transform:translateX( -"+m+"px ) }"+"}";b[0].innerHTML=g;var y=m/parseFloat(t.speed);o[0].style[h]="hoverForMoreSlide "+y+"s linear infinite"}else{var y=c/parseFloat(t.speed);o[0].style[p]=cssPrefix+"transform "+y+"s linear";if(!r)o[0].style[d]="translateX(-"+c+"px)";else setTimeout(function(){o[0].style[d]="translateX(-"+c+"px)"},0)}});if(!t.alwaysOn)e(l).live(t.stopEvent,function(s){var o=e(t.target?n.selector:this).filter(":first");if(!o.length)return true;if(t.loop){if(t.snapback){var l=o.children(".hoverForMoreContent").width()+parseInt(t.gap);var c=((new Date).getTime()-f)*.001;var v=c*t.speed%l;var m=v>l/2;var g="@"+cssPrefix+"keyframes hoverForMoreSlideReverse { "+"from {"+cssPrefix+"transform:translateX( "+(0-v)+"px ) }"+"to {"+cssPrefix+"transform:translateX( "+(m?0-l:0)+"px ) }"+"}";w[0].innerHTML=g;var y=(m?l-v:v)*.2/parseFloat(t.speed);o[0].style[h]="hoverForMoreSlideReverse "+(y>1?1:y)+"s linear";o.removeClass("scrolling");setTimeout(function(){if(o.is(".scrolling"))return;o.children(".hoverForMoreContent").remove();o.css("overflow",u);o.parent().css("overflow",a);if(i&&t.addStyles)e("body").css(cssPrefix+"user-select","text")},y*1e3- -50)}else{o[0].style[h]="";o.css("overflow",u).find(".hoverForMoreContent").remove();o.parent().css("overflow",a);if(i&&t.addStyles)e("body").css(cssPrefix+"user-select","text")}}else{var c=((new Date).getTime()-f)/1e3;var b=o[0].style[p].match(/transform (.*)s/);var y=b&&b[1]&&parseFloat(b[1])<c?parseFloat(b[1]):c;y*=.5;if(!t.snapback)o[0].style[p]="";else o[0].style[p]=cssPrefix+"transform "+y+"s linear";o.removeClass("scrolling");if(!r)o[0].style[d]="translateX(0px)";else setTimeout(function(){o[0].style[d]="translateX(0px)"},0);if(!t.snapback){o.css("overflow",u);if(i&&t.addStyles)e("body").css(cssPrefix+"user-select","text")}else{setTimeout(function(){if(o.is(".scrolling"))return;o.css("overflow",u);if(i&&t.addStyles)e("body").css(cssPrefix+"user-select","text")},y*1e3)}}});n.refresh=function(){e(n.selector).each(function(n,r){e(r).not(".scrolling").trigger(t.startEvent)})};if(t.alwaysOn)n.refresh();return n}})(window.jQuery||$)

/** Abstract base class for collection plugins v1.0.1.
 Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
 Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. */
;(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);

/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.1.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.
   Please attribute the author if you use it. */
(function($){var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.JQPlugin.createPlugin({name:w,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,padZeroes:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{'':{labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false}},_getters:['getTimes'],_rtlClass:w+'-rtl',_sectionClass:w+'-section',_amountClass:w+'-amount',_periodClass:w+'-period',_rowClass:w+'-row',_holdingClass:w+'-holding',_showClass:w+'-show',_descrClass:w+'-descr',_timerElems:[],_init:function(){var c=this;this._super();this._serverSyncs=[];var d=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var e=(window.performance&&typeof window.performance.now=='function');function timerCallBack(a){var b=(a<1e12?(e?(performance.now()+performance.timing.navigationStart):d()):a||d());if(b-g>=1000){c._updateElems();g=b}f(timerCallBack)}var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var g=0;if(!f||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){c._updateElems()},980)}else{g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d();f(timerCallBack)}},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){if(!this._hasElem(a)){this._timerElems.push(a)}},_hasElem:function(a){return($.inArray(a,this._timerElems)>-1)},_removeElem:function(b){this._timerElems=$.map(this._timerElems,function(a){return(a==b?null:a)})},_updateElems:function(){for(var i=this._timerElems.length-1;i>=0;i--){this._updateCountdown(this._timerElems[i])}},_optionsChanged:function(a,b,c){if(c.layout){c.layout=c.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}this._resetExtraLabels(b.options,c);var d=(b.options.timezone!=c.timezone);$.extend(b.options,c);this._adjustSettings(a,b,c.until!=null||c.since!=null||d);var e=new Date();if((b._since&&b._since<e)||(b._until&&b._until>e)){this._addElem(a[0])}this._updateCountdown(a,b)},_updateCountdown:function(a,b){a=a.jquery?a:$(a);b=b||this._getInst(a);if(!b){return}a.html(this._generateHTML(b)).toggleClass(this._rtlClass,b.options.isRTL);if($.isFunction(b.options.onTick)){var c=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date());if(b.options.tickInterval==1||this.periodsToSeconds(c)%b.options.tickInterval==0){b.options.onTick.apply(a[0],[c])}}var d=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(d&&!b._expiring){b._expiring=true;if(this._hasElem(a[0])||b.options.alwaysExpire){this._removeElem(a[0]);if($.isFunction(b.options.onExpiry)){b.options.onExpiry.apply(a[0],[])}if(b.options.expiryText){var e=b.options.layout;b.options.layout=b.options.expiryText;this._updateCountdown(a[0],b);b.options.layout=e}if(b.options.expiryUrl){window.location=b.options.expiryUrl}}b._expiring=false}else if(b._hold=='pause'){this._removeElem(a[0])}},_resetExtraLabels:function(a,b){for(var n in b){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){a[n]=b[n]}}for(var n in a){if(n.match(/[Ll]abels[02-9]|compactLabels1/)&&typeof b[n]==='undefined'){a[n]=null}}},_adjustSettings:function(a,b,c){var d;var e=0;var f=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==b.options.serverSync){f=this._serverSyncs[i][1];break}}if(f!=null){e=(b.options.serverSync?f:0);d=new Date()}else{var g=($.isFunction(b.options.serverSync)?b.options.serverSync.apply(a[0],[]):null);d=new Date();e=(g?d.getTime()-g.getTime():0);this._serverSyncs.push([b.options.serverSync,e])}var h=b.options.timezone;h=(h==null?-d.getTimezoneOffset():h);if(c||(!c&&b._until==null&&b._since==null)){b._since=b.options.since;if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(b.options.until,d));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}}b._show=this._determineShow(b)},_preDestroy:function(a,b){this._removeElem(a[0]);a.empty()},pause:function(a){this._hold(a,'pause')},lap:function(a){this._hold(a,'lap')},resume:function(a){this._hold(a,null)},toggle:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'pause':'resume'](a)},toggleLap:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'lap':'resume'](a)},_hold:function(a,b){var c=$.data(a,this.name);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addElem(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,this.name,c);this._updateCountdown(a,c)}},getTimes:function(a){var b=$.data(a,this.name);return(!b?null:(b._hold=='pause'?b._savePeriods:(!b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date()))))},_determineTime:function(k,l){var m=this;var n=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var o=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var p=(k==null?l:(typeof k=='string'?o(k):(typeof k=='number'?n(k):k)));if(p)p.setMilliseconds(0);return p},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this;c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date()));var e=false;var f=0;var g=c.options.significant;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=(c.options.compact?c.options.compactLabels:c.options.labels);var l=c.options.whichLabels||this._normalLabels;var m=function(a){var b=c.options['compactLabels'+l(c._periods[a])];return(h[a]?d._translateDigits(c,c._periods[a])+(b?b[a]:k[a])+' ':'')};var n=(c.options.padZeroes?2:1);var o=function(a){var b=c.options['labels'+l(c._periods[a])];return((!c.options.significant&&h[a])||(c.options.significant&&j[a])?'<span class="'+d._sectionClass+'">'+'<span class="'+d._amountClass+'">'+d._minDigits(c,c._periods[a],n)+'</span>'+'<span class="'+d._periodClass+'">'+(b?b[a]:k[a])+'</span></span>':'')};return(c.options.layout?this._buildLayout(c,h,c.options.layout,c.options.compact,c.options.significant,j):((c.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(c._hold?' '+this._holdingClass:'')+'">'+m(Y)+m(O)+m(W)+m(D)+(h[H]?this._minDigits(c,c._periods[H],2):'')+(h[M]?(h[H]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[M],2):'')+(h[S]?(h[H]||h[M]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(c.options.significant||f)+(c._hold?' '+this._holdingClass:'')+'">'+o(Y)+o(O)+o(W)+o(D)+o(H)+o(M)+o(S))+'</span>'+(c.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+c.options.description+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=c.options[f?'compactLabels':'labels'];var k=c.options.whichLabels||this._normalLabels;var l=function(a){return(c.options[(f?'compactLabels':'labels')+k(c._periods[a])]||j)[a]};var m=function(a,b){return c.options.digits[Math.floor(a/b)%10]};var o={desc:c.options.description,sep:c.options.timeSeparator,yl:l(Y),yn:this._minDigits(c,c._periods[Y],1),ynn:this._minDigits(c,c._periods[Y],2),ynnn:this._minDigits(c,c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:this._minDigits(c,c._periods[O],1),onn:this._minDigits(c,c._periods[O],2),onnn:this._minDigits(c,c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:this._minDigits(c,c._periods[W],1),wnn:this._minDigits(c,c._periods[W],2),wnnn:this._minDigits(c,c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:this._minDigits(c,c._periods[D],1),dnn:this._minDigits(c,c._periods[D],2),dnnn:this._minDigits(c,c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:this._minDigits(c,c._periods[H],1),hnn:this._minDigits(c,c._periods[H],2),hnnn:this._minDigits(c,c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:this._minDigits(c,c._periods[M],1),mnn:this._minDigits(c,c._periods[M],2),mnnn:this._minDigits(c,c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:this._minDigits(c,c._periods[S],1),snn:this._minDigits(c,c._periods[S],2),snnn:this._minDigits(c,c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}([\\s\\S]*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b,c){b=''+b;if(b.length>=c){return this._translateDigits(a,b)}b='0000000000'+b;return this._translateDigits(a,b.substr(b.length-c))},_translateDigits:function(b,c){return(''+c).replace(/[0-9]/g,function(a){return b.options.digits[a]})},_determineShow:function(a){var b=a.options.format;var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=this._getDaysInMonth(f.getFullYear(),f.getMonth());var j=this._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=this._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}})})(jQuery);

(function ($) {
	$.countdown.regionalOptions['ru'] = {
		labels: ['Лет', 'Месяцев', 'Недель', 'Дней', 'Часов', 'Минут', 'Секунд'],
		labels1: ['Год', 'Месяц', 'Неделя', 'День', 'Час', 'Минута', 'Секунда'],
		labels2: ['Года', 'Месяца', 'Недели', 'Дня', 'Часа', 'Минуты', 'Секунды'],
		compactLabels: ['л', 'м', 'н', 'д'], compactLabels1: ['г', 'м', 'н', 'д'],
		whichLabels: function (amount) {
			var units = amount % 10;
			var tens = Math.floor((amount % 100) / 10);
			return (amount == 1 ? 1 : (units >= 2 && units <= 4 && tens != 1 ? 2 :
				(units == 1 && tens != 1 ? 1 : 0)));
		},
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':',
		isRTL: false,
		onExpiry: function () {
			$('.countdown_1').each(function() {
				$(this).addClass("hidden");
			});

			$('.countdown_expiry_event').each(function() {
				$(this).removeClass("hidden");
			});
		}
	};
	$.countdown.setDefaults($.countdown.regionalOptions['ru']);
})(jQuery);

/**
 * Содержит данные из последней отправленной формы.
 * @type {string|null}
 */
var universalValueInStorage = getFormDataInLocalStorage();

/**
 * Возвращает временно сохраненное значение из LocalStorage, одновременно очищая его в хранилище.
 */
function getFormDataInLocalStorage() {
	var key = 'universal_storage_form_data';
	var data = localStorage.getItem(key);
	localStorage.removeItem(key);
	return data;
}

/**
 * Устанавливает значение в хранилище.
 * @param {string} value
 */
function setFormDataInLocalStorage(value) {
	localStorage.setItem('universal_storage_form_data', value);
}

/**
 * Универсальный класс для запоминания в LocalStorage значений отосланной формы перед самой отправкой.
 * При возврате или перезагрузке страницы/возвращении назад за короткий отрезок времени восстанавливает введенные данные формы.
 */
var universalStorageFormData = {
	forbiddenNames: ['captcha', 'password'],
	sendData: [],
	lastSubmitForm: '',
	maxExecution: 500,
	intervalId: 0,
	init: function() {
		var parent = this;
		this.intervalId = setInterval(function() {
			if (parent.maxExecution < 1) {
				clearInterval(parent.intervalId);
				return;
			}
			$('textarea:not(hidden):not(.hidden)').each(function(num, elem) {
				if (!$(elem).attr('maxlength')) {
					$(elem).attr('maxlength', '300000');
				}
			});
			$('form:not(hidden):not(.hidden):not(.added-form-to-storage)').each(function(n, el) {
				var form = this;
				$(el).submit(function() {
					var data = universalStorageFormData;
					data.lastSubmitForm = '';
					var formClassList = $(this).attr('class').split(' ').join('.');
					var formId = $(this).attr('id');
					var formAction = $(this).attr('action');
					if (formId) {
						data.lastSubmitForm += '#' + formId;
					}
					if (formClassList) {
						data.lastSubmitForm += '.' + formClassList.replace('.added-form-to-storage', '');
					}
					if (formAction) {
						data.lastSubmitForm += '[action=\'' + formAction + '\']';
					}
					data.add(form);
				});
				$(el).addClass('added-form-to-storage');
			});
			parent.maxExecution--;
		}, 500);
	},
	add: function(el) {
		var data = universalStorageFormData;
		data.sendData = [];
		$(el).find('input[type=text]:not(hidden):not(.hidden), input[type=email]:not(hidden):not(.hidden)').each(function(num, elem) {
			var elemName = $(elem).attr('name');
			if (data.forbiddenNames.indexOf(elemName) < 0) {
				var part = data.lastSubmitForm + ' input[name=\'' + elemName + '\'] = ' + $(elem).val();
				data.sendData.push(part);
			}
		});
		$(el).find('textarea:not(hidden):not(.hidden)').each(function(num, elem) {
			if (elem) {
				var elemName = $(elem).attr('name');
				var elemText = $(elem).val();
				if (data.forbiddenNames.indexOf(elemName) < 0 && elemText && elemText.length > 0) {
					var part = data.lastSubmitForm + ' textarea[name=\'' + elemName + '\'] = ' + elemText;
					data.sendData.push(part);
				}
			}
		});
		if (data.lastSubmitForm) {
			setFormDataInLocalStorage(JSON.stringify(data.sendData));
			// Если по этому пути уже были сохранены данные формы
			setCookie('frmwebformcomments', '', -1, window.location.pathname.slice(0, -1));
			setCookie('frmwebformcontact', '', -1, window.location.pathname.slice(0, -1));
		}
	}
};

/**
 * Универсальный класс для получения предварительно запомненных данных последней отосланной формы и возврату данных в поля.
 */
var universalUpdateFormData = {
	data: null,
	maxExecution: 200,
	intervalId: 0,
	init: function() {
		var parent = this;
		this.intervalId = setInterval(function() {
			if (parent.maxExecution < 1 || window.location.search.indexOf('_err=') == -1) {
				clearInterval(parent.intervalId);
				return;
			}
			this.data = this.data ? this.data : universalValueInStorage;
			if (this.data) {
				var list = JSON.parse(this.data);
				if (list) {
					list.forEach(function(el) {
						var index = el.indexOf(' = ');
						var params = el.slice(0, index);
						var value = el.slice(index + 3);
						var $elStandard = $(params + ':not(.added-form-to-storage)');
						if ($elStandard) {
							if (checkFormComments(params)) {
								$elStandard.val('');
							} else {
								$elStandard.val(value);
							}
							$elStandard.addClass('added-form-to-storage');
						}
					});
				}
			}
			parent.maxExecution--;
		}, 500);

	}
};

/**
 * Отдельная проверка на форму с комментариями
 */
function checkFormComments(params) {
	// Проверка страницы `Добавить отзыв` по action формы
	if (params.indexOf('/comments/post/') != -1) {
		var $messageBlock = $('div.system_errors').first();
		// Так как номер ошибки везде различается - привязка к выдаче сообщения
		if ($messageBlock && typeof $messageBlock.text() != 'undefined' && ($messageBlock.text().indexOf('сообщение успешно добавлено') != -1 || $messageBlock.text().indexOf('mensaje ha sido enviado') != -1)) {
			return true;
		}
	}
	return false;
}

universalUpdateFormData.init();
universalStorageFormData.init();




