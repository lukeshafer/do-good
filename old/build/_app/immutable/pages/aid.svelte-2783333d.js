import{S as F,i as q,s as B,k as w,e as p,w as $,W as G,d as o,m as E,c as _,a as d,x as h,b as v,g as m,y as g,q as A,o as b,B as k,t as y,h as x}from"../chunks/index-e0709932.js";import{P as S}from"../chunks/PaperSheet-24228c84.js";import{B as P}from"../chunks/Button-5f09256b.js";function D(c){let a;return{c(){a=y("General Aid")},l(e){a=x(e,"General Aid")},m(e,n){m(e,a,n)},d(e){e&&o(a)}}}function V(c){let a;return{c(){a=y("PrideFull Aid")},l(e){a=x(e,"PrideFull Aid")},m(e,n){m(e,a,n)},d(e){e&&o(a)}}}function C(c){let a,e,n,f,s,l,i;return n=new P({props:{type:"link",href:"/forms/GeneralApplication",$$slots:{default:[D]},$$scope:{ctx:c}}}),l=new P({props:{type:"link",href:"/forms/PrideFullApplication",$$slots:{default:[V]},$$scope:{ctx:c}}}),{c(){a=y(`I am applying for:
    `),e=p("div"),$(n.$$.fragment),f=w(),s=p("div"),$(l.$$.fragment),this.h()},l(t){a=x(t,`I am applying for:
    `),e=_(t,"DIV",{class:!0});var r=d(e);h(n.$$.fragment,r),r.forEach(o),f=E(t),s=_(t,"DIV",{class:!0});var u=d(s);h(l.$$.fragment,u),u.forEach(o),this.h()},h(){v(e,"class","options svelte-fk6mmb"),v(s,"class","options svelte-fk6mmb")},m(t,r){m(t,a,r),m(t,e,r),g(n,e,null),m(t,f,r),m(t,s,r),g(l,s,null),i=!0},p(t,r){const u={};r&1&&(u.$$scope={dirty:r,ctx:t}),n.$set(u);const I={};r&1&&(I.$$scope={dirty:r,ctx:t}),l.$set(I)},i(t){i||(A(n.$$.fragment,t),A(l.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),b(l.$$.fragment,t),i=!1},d(t){t&&o(a),t&&o(e),k(n),t&&o(f),t&&o(s),k(l)}}}function M(c){let a,e,n,f;return n=new S({props:{$$slots:{default:[C]},$$scope:{ctx:c}}}),{c(){a=w(),e=p("main"),$(n.$$.fragment),this.h()},l(s){G('[data-svelte="svelte-1lt8cuk"]',document.head).forEach(o),a=E(s),e=_(s,"MAIN",{class:!0});var i=d(e);h(n.$$.fragment,i),i.forEach(o),this.h()},h(){document.title="Apply For Aid",v(e,"class","svelte-fk6mmb")},m(s,l){m(s,a,l),m(s,e,l),g(n,e,null),f=!0},p(s,[l]){const i={};l&1&&(i.$$scope={dirty:l,ctx:s}),n.$set(i)},i(s){f||(A(n.$$.fragment,s),f=!0)},o(s){b(n.$$.fragment,s),f=!1},d(s){s&&o(a),s&&o(e),k(n)}}}class z extends F{constructor(a){super(),q(this,a,null,M,B,{})}}export{z as default};