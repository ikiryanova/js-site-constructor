!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var s,i,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function i(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=i(u),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(s[d].references++,s[d].updater(m)):s.push({identifier:u,updater:h(m,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,v=0;function h(e,t){var n,r,o;if(t.singleton){var a=v++;n=f||(f=c(t)),r=m.bind(null,n,a,!1),o=m.bind(null,n,a,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);s[o].references--}for(var a=l(e,t),c=0;c<n.length;c++){var u=i(n[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"#app {\r\n  position: relative;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.content {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 200px;\r\n}\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 200px;\r\n  z-index: 100;\r\n  padding: 10px;\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  overflow: auto;\r\n}\r\n\r\n.column-text {\r\n  margin-right: 15px;\r\n  margin-left: 15px;\r\n  background: #dee9f5a6;\r\n  border-radius: 6px;\r\n  padding: 15px \r\n}\r\n",""]),t.default=o},function(e,t,n){"use strict";n.r(t);var r=n.p+"d700dae9d7a2125a4afa4dbefcadc7b7.jpg";function o(e,t=""){return`<div class = "row" style="${t}">${e}</div>`}function a(e,t=""){return`\n   <div class = "col-sm ${t}">\n      ${e}\n    </div>`}function s(e={}){return Object.keys(e).map(t=>`${t}: ${e[t]}`).join(";")}class i{constructor(e,t){this.value=e,this.options=t}toHTML(){throw new Error("Метод toHTML должен быть реализован")}}class l extends i{constructor(e,t){super(e,t)}toHTML(){const{tag:e="h2",styles:t}=this.options;return o(a(`\n      <${e}>${this.value}</${e}>\n    `),t)}}class c extends i{constructor(e,t){super(e,t)}toHTML(){return o(a(`\n      <p>${this.value}</p>\n    `),this.options.styles)}}class u extends i{constructor(e,t){super(e,t)}toHTML(){return o(`\n        ${this.value.map(e=>a(e,"column-text")).join("")}\n      `,this.options.styles)}}class d extends i{constructor(e,t){super(e,t)}toHTML(){const{alt:e,styles:t,imageStyles:n}=this.options;return o(`<img src="${this.value}" alt="${e} style="${n}" />`,t)}}const m=[new l("Test Title",{tag:"h2",styles:s({"text-align":"center",margin:"20px 0"})}),new c("text text text",{styles:s({margin:"15px 60px",padding:"1rem 0",background:"#dee9f5a6","border-radius":"6px"})}),new u(["Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, dicta esse. Earum reprehenderit molestiae doloremque quibusdam maiores sit veritatis repellendus!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, dicta esse. Earum reprehenderit molestiae doloremque quibusdam maiores sit veritatis repellendus!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, dicta esse. Earum reprehenderit molestiae doloremque quibusdam maiores sit veritatis repellendus!"],{styles:s({padding:"1rem",width:"1365px",margin:"0 auto"})}),new d(r,{styles:s({padding:"2rem 0",display:"flex","justify-content":"center"}),imageStyles:"width: 300px; hight: auto;",alt:"picture"})];function p(e){return`\n    <form name="${e}">\n      <h5>${e}</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="color: red; margin: 20px;">\n      </div>\n      <button type="submit" class="vtn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr/>\n  `}function f(e){return`\n    <form name="${e}">\n      <h5>${e}</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles">\n      </div>\n      <button type="submit" class="vtn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr/>\n  `}n(1);const v=new class{constructor(e){this.$el=document.querySelector(e)}render(e){this.$el.innerHTML="",e.forEach(e=>{this.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}("#site");new class{constructor(e,t){this.$el=document.querySelector(e),this.update=t,this.init()}init(){this.$el.addEventListener("submit",this.addBlock.bind(this)),this.$el.innerHTML=this.template}get template(){return[p("title"),p("text"),(e="image",`\n    <form name="${e}">\n      <h5>${e}</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="link to image">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="stylesImage" placeholder="styles img">\n      </div>\n      <button type="submit" class="vtn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr/>\n  `),f("column")].join("");var e}addBlock(e){e.preventDefault();const t=e.target.name;let n;const r=e.target.styles.value;let o,a,s=[];switch(t){case"text":n=e.target.value.value,a=c,e.target.value.value="";break;case"title":n=e.target.value.value,a=l,e.target.value.value="";break;case"column":let t=document.forms.column;s=Array.from(t.elements.value).map(e=>e.value),a=u;break;case"image":n=e.target.value.value,o=e.target.stylesImage.value,a=d,e.target.value.value="",e.target.stylesImage.value=""}const i=new a(n||s,{styles:r},o);this.update(i),e.target.styles.value=""}}("#panel",e=>{m.push(e),v.render(m)}),v.render(m)}]);