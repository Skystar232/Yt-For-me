import{s as k,f as g,a as T,g as b,h as N,r as E,c as y,d as $,j as C,i as z,u as f,v as U,w as x,x as F,l as H,m as O,y as G,z as J,A as K,n as D,B as P,C as Q,D as R}from"../chunks/scheduler.225e1b8e.js";import{S as A,i as j,b as B,d as V,m as W,a as I,t as L,e as q}from"../chunks/index.05821111.js";function X(n){let e,t,l,a='<img width="24px" src="bars-solid.svg" alt="Menu"/>',i,h,r="logo",u,d,w='<div><label class="sr-only" for="search">Search</label> <input id="search" type="text" placeholder="Search"/></div> <button class="m-4"><img width="24px" src="magnifying-glass-solid.svg" alt="search"/></button>',v,p,m='<div class="notification m-4"><img width="24px" src="bell-solid.svg" alt="Notifications"/></div> <div class="profile m-4">profile icon</div>',M,c;return{c(){e=g("nav"),t=g("section"),l=g("button"),l.innerHTML=a,i=T(),h=g("a"),h.textContent=r,u=T(),d=g("section"),d.innerHTML=w,v=T(),p=g("section"),p.innerHTML=m,this.h()},l(s){e=b(s,"NAV",{class:!0});var o=N(e);t=b(o,"SECTION",{class:!0});var _=N(t);l=b(_,"BUTTON",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-1a4awc4"&&(l.innerHTML=a),i=y(_),h=b(_,"A",{href:!0,"data-svelte-h":!0}),E(h)!=="svelte-pax8a4"&&(h.textContent=r),_.forEach($),u=y(o),d=b(o,"SECTION",{class:!0,"data-svelte-h":!0}),E(d)!=="svelte-13ujtz1"&&(d.innerHTML=w),v=y(o),p=b(o,"SECTION",{class:!0,"data-svelte-h":!0}),E(p)!=="svelte-63gm9i"&&(p.innerHTML=m),o.forEach($),this.h()},h(){C(l,"class","menu m-4"),C(h,"href","/"),C(t,"class","yt-fixed flex items-center svelte-1boznvw"),C(d,"class","yt-fill flex items-center svelte-1boznvw"),C(p,"class","flex"),C(e,"class","bg-slate-900 svelte-1boznvw")},m(s,o){z(s,e,o),f(e,t),f(t,l),f(t,i),f(t,h),f(e,u),f(e,d),f(e,v),f(e,p),M||(c=U(l,"click",n[1]),M=!0)},p:x,i:x,o:x,d(s){s&&$(e),M=!1,c()}}}function Y(n){let e=F();return[e,()=>e("hamburger")]}class Z extends A{constructor(e){super(),j(this,e,Y,X,k,{})}}function ee(n){let e,t,l="Sidenav that shouuld hide on small screen";return{c(){e=H(`(#if show)\r
`),t=g("section"),t.textContent=l,this.h()},l(a){e=O(a,`(#if show)\r
`),t=b(a,"SECTION",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-8ji33o"&&(t.textContent=l),this.h()},h(){C(t,"class","min-h-screen bg-slate-800 svelte-1ccpi6d")},m(a,i){z(a,e,i),z(a,t,i)},p:x,i:x,o:x,d(a){a&&($(e),$(t))}}}function te(n,e,t){let{show:l=!0}=e,{isMobile:a=!1}=e;return n.$$set=i=>{"show"in i&&t(0,l=i.show),"isMobile"in i&&t(1,a=i.isMobile)},[l,a]}class se extends A{constructor(e){super(),j(this,e,te,ee,k,{show:0,isMobile:1})}}function ne(n){let e,t,l,a,i,h,r,u,d,w,v,p,m;t=new Z({}),t.$on("hamburger",n[6]),i=new se({props:{show:n[3],isMobile:n[2]}});const M=n[5].default,c=G(M,n,n[4],null);return{c(){e=g("div"),B(t.$$.fragment),l=T(),a=g("section"),B(i.$$.fragment),h=T(),r=g("main"),u=H(n[2]),d=T(),w=H(n[0]),v=T(),c&&c.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var o=N(e);V(t.$$.fragment,o),l=y(o),a=b(o,"SECTION",{class:!0});var _=N(a);V(i.$$.fragment,_),h=y(_),r=b(_,"MAIN",{});var S=N(r);u=O(S,n[2]),d=y(S),w=O(S,n[0]),v=y(S),c&&c.l(S),S.forEach($),_.forEach($),o.forEach($),this.h()},h(){C(a,"class","flex flex-nowrap"),C(e,"class","min-h-screen bg-slate-800 text-slate-100"),J(()=>n[7].call(e))},m(s,o){z(s,e,o),W(t,e,null),f(e,l),f(e,a),W(i,a,null),f(a,h),f(a,r),f(r,u),f(r,d),f(r,w),f(r,v),c&&c.m(r,null),p=K(e,n[7].bind(e)),m=!0},p(s,[o]){const _={};o&8&&(_.show=s[3]),o&4&&(_.isMobile=s[2]),i.$set(_),(!m||o&4)&&D(u,s[2]),(!m||o&1)&&D(w,s[0]),c&&c.p&&(!m||o&16)&&P(c,M,s,s[4],m?R(M,s[4],o,null):Q(s[4]),null)},i(s){m||(I(t.$$.fragment,s),I(i.$$.fragment,s),I(c,s),m=!0)},o(s){L(t.$$.fragment,s),L(i.$$.fragment,s),L(c,s),m=!1},d(s){s&&$(e),q(t),q(i),c&&c.d(s),p()}}}function ae(n,e,t){let l,a,{$$slots:i={},$$scope:h}=e,r=0,u=!1;const d=()=>t(1,u=!u);function w(){r=this.clientWidth,t(0,r)}return n.$$set=v=>{"$$scope"in v&&t(4,h=v.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&t(2,l=r<768),n.$$.dirty&6&&t(3,a=l||u)},[r,u,l,a,h,i,d,w]}class oe extends A{constructor(e){super(),j(this,e,ae,ne,k,{})}}export{oe as component};
