"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(n,t,e){e.r(t);var r=e(439),c=e(791),o=e(689),i=e(409),u=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],a=t[1],s=(0,o.UO)().movieId;return console.log(e),console.log(s),(0,c.useEffect)((function(){(0,i.sv)(s).then((function(n){return a(n.results)})).catch((function(n){console.log(n)}))}),[s]),(0,u.jsx)("div",{children:0===e.length?(0,u.jsx)("div",{style:{fontWeight:500,fontSize:"20px",color:"red"},children:"We don`t have any rewiews for this movie`"}):(0,u.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h2",{children:["Author: ",e]}),(0,u.jsx)("p",{children:r})]},t)}))})})}},409:function(n,t,e){e.d(t,{Tg:function(){return o},bI:function(){return i},kK:function(){return a},l2:function(){return u},sv:function(){return s}});var r="https://api.themoviedb.org/3",c="ab7e82ec9455b58954116ec4a812321e",o=function(){try{return fetch("".concat(r,"/trending/all/day?api_key=").concat(c)).then((function(n){return n.json()}))}catch(n){throw new Error(n.message)}},i=function(n){try{return fetch("".concat(r,"/search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.json()}))}catch(t){throw new Error(t.message)}},u=function(n){try{return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()}))}catch(t){throw new Error(t.message)}},a=function(n){try{return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()}))}catch(t){throw new Error(t.message)}},s=function(n){try{return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()}))}catch(t){throw new Error(t.message)}}}}]);
//# sourceMappingURL=186.be19d2d6.chunk.js.map