"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{708:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return f}});var i=n(439),s=n(791),a=n(689),u=n(87),h=n(409),l=n(184),f=function(){var e,t,n=(0,s.useState)([]),r=(0,i.Z)(n,2),c=r[0],f=r[1],d=(0,a.UO)().movieId,j=(0,a.TH)(),p=null!==(e=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,s.useEffect)((function(){(0,h.l2)(d).then((function(e){return f(e)})).catch((function(e){console.log(e)}))}),[d]);var v,m=c.title,w=c.overview,b=c.genres,y=c.poster_path,g=c.name,x=c.vote_average;return(0,l.jsxs)("main",{children:[(0,l.jsx)(u.rU,{to:p,children:"Back to movie"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:(v=y,"https://image.tmdb.org/t/p/w500".concat(v)),alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:m||g}),(0,l.jsxs)("p",{children:["User score: ",x,"%"]}),(0,l.jsx)("p",{children:"Overview "}),(0,l.jsxs)("span",{children:[" ",w]}),(0,l.jsx)("p",{children:"Genres"}),null===b||void 0===b?void 0:b.map((function(e){var t=e.id,n=e.name;return(0,l.jsx)("span",{children:n},t)}))]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Additional information"}),(0,l.jsx)("hr",{}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"cast",state:o({},j.state),children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"reviews",state:o({},j.state),children:"Reviews"})})]})]}),(0,l.jsx)("hr",{}),(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading movie info..."}),children:(0,l.jsx)(a.j3,{})})]})}},409:function(e,t,n){n.d(t,{Tg:function(){return o},bI:function(){return i},kK:function(){return a},l2:function(){return s},sv:function(){return u}});var r="https://api.themoviedb.org/3",c="ab7e82ec9455b58954116ec4a812321e",o=function(){try{return fetch("".concat(r,"/trending/all/day?api_key=").concat(c)).then((function(e){return e.json()}))}catch(e){throw new Error(e.message)}},i=function(e){try{return fetch("".concat(r,"/search/movie?api_key=").concat(c,"&query=").concat(e)).then((function(e){return e.json()}))}catch(t){throw new Error(t.message)}},s=function(e){try{return fetch("".concat(r,"/movie/").concat(e,"?api_key=").concat(c)).then((function(e){return e.json()}))}catch(t){throw new Error(t.message)}},a=function(e){try{return fetch("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(c)).then((function(e){return e.json()}))}catch(t){throw new Error(t.message)}},u=function(e){try{return fetch("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(c)).then((function(e){return e.json()}))}catch(t){throw new Error(t.message)}}}}]);
//# sourceMappingURL=708.e5d4f100.chunk.js.map