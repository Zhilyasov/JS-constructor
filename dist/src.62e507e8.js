parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CrKI":[function(require,module,exports) {
module.exports="/image.61dd97e5.png";
},{}],"FOZT":[function(require,module,exports) {
"use strict";function n(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class="row" style="'.concat(o,'">').concat(n,"</div>")}function o(n){return'<div class="col-sm">'.concat(n,"</div>")}function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(o){return"".concat(o,": ").concat(n[o])}).join(";")}function r(n){return'\n    <form name="'.concat(n,'">\n      <h5>').concat(n,'</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles">\n      </div>\n      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n  ')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.block=r,exports.col=o,exports.css=t,exports.row=n;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TitleBlock=exports.TextBlock=exports.ImageBlock=exports.ColumnsBlock=exports.Block=void 0;var t=require("../utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}function o(t,e){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function n(t){var e=u();return function(){var r,o=s(t);if(e){var n=s(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return i(this,r)}}function i(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return c(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,p(o.key),o)}}function a(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var r=y(t,"string");return"symbol"===e(r)?r:String(r)}function y(t,r){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,r||"default");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}var v=exports.Block=function(){function t(e,r){l(this,t),this.value=e,this.options=r}return a(t,[{key:"toHTML",value:function(){throw new Error("Метод toHTML должен быть реализован")}}]),t}(),b=exports.TitleBlock=function(e){r(i,v);var o=n(i);function i(t,e){return l(this,i),o.call(this,t,e)}return a(i,[{key:"toHTML",value:function(){var e=this.options,r=e.tag,o=void 0===r?"h1":r,n=e.styles;return(0,t.row)((0,t.col)("<".concat(o,">").concat(this.value,"</").concat(o,">")),(0,t.css)(n))}}]),i}(),h=exports.ImageBlock=function(e){r(i,v);var o=n(i);function i(t,e){return l(this,i),o.call(this,t,e)}return a(i,[{key:"toHTML",value:function(){var e=this.options,r=e.imageStyles,o=e.alt,n=void 0===o?"":o,i=e.styles;return(0,t.row)('<img src="'.concat(this.value,'" alt="').concat(n,'" style="').concat((0,t.css)(r),'">'),(0,t.css)(i))}}]),i}(),m=exports.ColumnsBlock=function(e){r(i,v);var o=n(i);function i(t,e){return l(this,i),o.call(this,t,e)}return a(i,[{key:"toHTML",value:function(){var e=this.value.map(t.col).join("");return(0,t.row)(e,(0,t.css)(this.options.styles))}}]),i}(),d=exports.TextBlock=function(e){r(i,v);var o=n(i);function i(t,e){return l(this,i),o.call(this,t,e)}return a(i,[{key:"toHTML",value:function(){return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(this.options.styles))}}]),i}();
},{"../utils":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=a(require("./assets/image.png")),t=require("./classes/blocks");function a(e){return e&&e.__esModule?e:{default:e}}var o='\nУАААУ тут тожее какой-то текст!!! <a href="https://youtube.com" target="_blank">И ДАЖЕ ССЫЛКА</a>',r=exports.model=[new t.TitleBlock("Конструктор сайтов на чистом JavaScript",{tag:"h2",styles:{background:"linear-gradient(to right, #ff0099, #493240)",color:"#fff",padding:"1.5rem","text-align":"center"}}),new t.ImageBlock(e.default,{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"500px",height:"auto"},alt:"Это картинка"}),new t.ColumnsBlock(["Приложение на чистом JS, без библиотек","Вторая колонка с какой-то информацией","Ну и 3 блок"],{styles:{background:"linear-gradient(to bottom, #8e2de2, #4a00e0)",color:"#fff",padding:"2rem","font-weight":"bold"}}),new t.TextBlock(o,{styles:{background:"linear-gradient(to left, #f2994a, #f2c94c)",padding:"1rem","font-weight":"bold"}})];
},{"./assets/image.png":"CrKI","./classes/blocks":"dDFO"}],"V48B":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(t){var r=i(t,"string");return"symbol"===e(r)?r:String(r)}function i(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var u=exports.Site=function(){function e(r){t(this,e),this.el=document.querySelector(r)}return n(e,[{key:"render",value:function(e){var t=this;this.el.innerHTML="",e.forEach(function(e){t.el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),e}();
},{}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var t=require("../utils"),e=require("./blocks");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function o(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t){var e=l(t,"string");return"symbol"===r(e)?e:String(e)}function l(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var a=exports.Sidebar=function(){function r(t,e){n(this,r),this.el=document.querySelector(t),this.update=e,this.init()}return o(r,[{key:"init",value:function(){this.el.insertAdjacentHTML("afterbegin",this.template),this.el.addEventListener("submit",this.add.bind(this))}},{key:"template",get:function(){return[(0,t.block)("text"),(0,t.block)("title")].join("")}},{key:"add",value:function(t){t.preventDefault();var r=t.target,n=t.target.value.value,i=t.target.styles.value,o="text"===r?new e.TextBlock(n,{styles:i}):new e.TitleBlock(n,{styles:i});this.update(o),t.target.value.value="",t.target.styles.value=""}}]),r}();
},{"../utils":"FOZT","./blocks":"dDFO"}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),t=require("./sidebar");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e){var t=l(e,"string");return"symbol"===r(t)?t:String(t)}function l(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var a=exports.App=function(){function r(e){n(this,r),this.model=e}return i(r,[{key:"init",value:function(){var r=this,n=new e.Site("#site");n.render(this.model);new t.Sidebar("#panel",function(e){r.model.push(e),n.render(r.model)})}}]),r}();
},{"./site":"V48B","./sidebar":"idI0"}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model"),s=require("./classes/app");require("./styles/main.css"),new s.App(e.model).init();
},{"./model":"JDu1","./classes/app":"Z1kE","./styles/main.css":"jExt"}]},{},["Focm"], null)