"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[383],{287:function(e,n,r){r.d(n,{h:function(){return i}});var t=r(731),a={Header:"Header_Header__Z9Z4k",Conteiner:"Header_Conteiner__xQHII",Navigation:"Header_Navigation__MNhDV",Links:"Header_Links__9o8Hs",DeActive:"Header_DeActive__cSG2U",Items:"Header_Items__l77sU",Title:"Header_Title__9Hkag",Content:"Header_Content__3q873",PrimaryTitle:"Header_PrimaryTitle__hdn6t"},s=r(184),i=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("header",{className:a.Header,children:(0,s.jsxs)("nav",{className:a.Navigation,children:[(0,s.jsxs)("ul",{className:a.Container,children:[(0,s.jsx)("li",{className:a.Items,children:(0,s.jsx)(t.OL,{className:function(e){return e.isActive?a.DeActive:a.Links},to:"/",end:!0,children:(0,s.jsx)("h2",{className:a.Title,children:"HOME"})})}),(0,s.jsx)("li",{className:a.Items,children:(0,s.jsx)(t.OL,{className:function(e){return e.isActive?a.DeActive:a.Links},to:"/movies",children:(0,s.jsx)("h2",{className:a.Title,children:"MOVIES"})})})]}),(0,s.jsx)("div",{className:a.Content,children:(0,s.jsx)("h1",{className:a.PrimaryTitle,children:"THE BEST MOVIES SELECTION"})})]})})})}},383:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t=r(861),a=r(885),s=r(757),i=r.n(s),c=r(228),o=r(287),u=r(791),l=r(731),d=r(470),p=r(333),h={section:"MovieDetails_section__CCh0q",Container:"MovieDetails_Container__nukdg",Items:"MovieDetails_Items__GJA1f",Link:"MovieDetails_Link__HT1W6",Img:"MovieDetails_Img__BiNph",Title:"MovieDetails_Title__dmr4s",Genres:"MovieDetails_Genres__6YSgc",Paragraphe:"MovieDetails_Paragraphe__p5wks"},m="Button_Btn__cWlfc",v=r(184),_=function(){var e=(0,d.s0)();return(0,v.jsx)("button",{onClick:function(){return e(-1)},className:m,type:"button",children:"Go Back"})},f=function(){var e,n=(0,u.useState)({}),r=(0,a.Z)(n,2),s=r[0],m=r[1],f=(0,d.UO)().movieId;return(0,u.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.TP)(f);case 2:n=e.sent,m(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.h,{}),(0,v.jsx)("div",{className:h.Section,children:(0,v.jsxs)("div",{className:h.Container,children:[(0,v.jsx)(_,{}),(0,v.jsx)("img",{className:h.Img,src:(0,p.N)(s.poster_path),alt:"poster"}),(0,v.jsxs)("h2",{className:h.Title,children:["Title: ",s.original_title]}),(0,v.jsxs)("p",{className:h.Genres,children:[(0,v.jsx)("span",{className:h.Paragraphe,children:"Genres: "})," ",null===s||void 0===s||null===(e=s.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(", ")]}),(0,v.jsxs)("p",{className:h.Genres,children:[(0,v.jsx)("span",{className:h.Paragraphe,children:"Overview: "})," ",s.overview]}),(0,v.jsxs)("p",{className:h.Genres,children:[(0,v.jsx)("span",{className:h.Paragraphe,children:"Release date: "})," ",s.release_date]}),(0,v.jsxs)("p",{className:h.Genres,children:[(0,v.jsx)("span",{className:h.Paragraphe,children:"Popularity: "})," ",s.vote_average]}),(0,v.jsx)(l.rU,{className:h.Link,to:"cast",children:"Cast"}),(0,v.jsx)(l.rU,{className:h.Link,to:"reviews",children:"Reviews"}),(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)("p",{children:"Loading..."}),children:(0,v.jsx)(d.j3,{})})]})})]})}},228:function(e,n,r){r.d(n,{Hg:function(){return o},IQ:function(){return d},Jh:function(){return p},Pt:function(){return u},TP:function(){return l}});var t=r(861),a=r(757),s=r.n(a),i=r(44),c="2996ac4c632c41fce1458614a9485a98";i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/trending/movie/day",{params:{api_key:c}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t,a,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,i.ZP.get("/search/movie",{params:{api_key:c,query:n,page:r}});case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(n),{params:{api_key:c}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(n,"/credits"),{params:{api_key:c}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(n,"/reviews"),{params:{api_key:c}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},333:function(e,n,r){r.d(n,{N:function(){return t}});var t=function(e){return e?"https://image.tmdb.org/t/p/w500".concat(e):"https://media.tenor.com/nEP6ovplEd8AAAAi/so-really.gif"}}}]);
//# sourceMappingURL=383.eeff9c10.chunk.js.map