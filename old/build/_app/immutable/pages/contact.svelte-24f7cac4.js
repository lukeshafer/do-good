import{S as Q,i as Y,s as x,e as y,t as S,k as q,w as U,c as E,a as w,h as N,d as h,m as R,x as A,g as k,K as P,y as B,q as L,o as D,B as F,l as C,b as u,M as H,j as z,R as ee,Z as te,_ as T,N as O,T as le,$ as K,P as ne,W as ae}from"../chunks/index-e0709932.js";import{l as se}from"../chunks/index-ce17f796.js";import{B as oe}from"../chunks/Box-65feda96.js";import{P as ie}from"../chunks/PaperSheet-24228c84.js";import{B as re}from"../chunks/Button-5f09256b.js";import"../chunks/___vite-browser-external_commonjs-proxy-4056ed2c.js";/* empty css                                                  */function V(t,e,l){const s=t.slice();return s[15]=e[l],s[16]=e,s[17]=l,s}function W(t,e,l){const s=t.slice();return s[18]=e[l],s}function ue(t){let e,l,s="-Select-",n,a,o,i,r,_,b=t[15].entries,m=[];for(let c=0;c<b.length;c+=1)m[c]=X(W(t,b,c));let d=t[15].allowOther&&Z();function g(){return t[9](t[17])}let f=t[3][I]===""&&G(t);return{c(){e=y("select"),l=y("option"),n=S(s);for(let c=0;c<m.length;c+=1)m[c].c();a=C(),d&&d.c(),o=q(),f&&f.c(),i=q(),this.h()},l(c){e=E(c,"SELECT",{name:!0,id:!0,class:!0});var v=w(e);l=E(v,"OPTION",{});var p=w(l);n=N(p,s),p.forEach(h);for(let $=0;$<m.length;$+=1)m[$].l(v);a=C(),d&&d.l(v),v.forEach(h),o=R(c),f&&f.l(c),i=R(c),this.h()},h(){l.__value="-Select-",l.value=l.__value,l.selected=!0,u(e,"name","Pronouns"),u(e,"id","pronouns"),u(e,"class","svelte-y0omde"),t[3][I]===void 0&&le(()=>t[8].call(e))},m(c,v){k(c,e,v),P(e,l),P(l,n);for(let p=0;p<m.length;p+=1)m[p].m(e,null);P(e,a),d&&d.m(e,null),K(e,t[3][I]),k(c,o,v),f&&f.m(c,v),k(c,i,v),r||(_=[O(e,"change",t[8]),O(e,"change",g)],r=!0)},p(c,v){if(t=c,v&1){b=t[15].entries;let p;for(p=0;p<b.length;p+=1){const $=W(t,b,p);m[p]?m[p].p($,v):(m[p]=X($),m[p].c(),m[p].m(e,a))}for(;p<m.length;p+=1)m[p].d(1);m.length=b.length}t[15].allowOther?d||(d=Z(),d.c(),d.m(e,null)):d&&(d.d(1),d=null),v&9&&K(e,t[3][I]),t[3][I]===""?f?f.p(t,v):(f=G(t),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null)},d(c){c&&h(e),ee(m,c),d&&d.d(),c&&h(o),f&&f.d(c),c&&h(i),r=!1,ne(_)}}}function fe(t){let e;function l(a,o){if(a[15].type==="short")return ce;if(a[15].type==="long")return me;if(a[15].type==="phone")return pe;if(a[15].type==="email")return _e}let s=l(t),n=s&&s(t);return{c(){n&&n.c(),e=C()},l(a){n&&n.l(a),e=C()},m(a,o){n&&n.m(a,o),k(a,e,o)},p(a,o){s===(s=l(a))&&n?n.p(a,o):(n&&n.d(1),n=s&&s(a),n&&(n.c(),n.m(e.parentNode,e)))},d(a){n&&n.d(a),a&&h(e)}}}function X(t){let e,l=t[18].value+"",s,n;return{c(){e=y("option"),s=S(l),this.h()},l(a){e=E(a,"OPTION",{});var o=w(e);s=N(o,l),o.forEach(h),this.h()},h(){e.__value=n=t[18].value,e.value=e.__value},m(a,o){k(a,e,o),P(e,s)},p(a,o){o&1&&l!==(l=a[18].value+"")&&z(s,l),o&1&&n!==(n=a[18].value)&&(e.__value=n,e.value=e.__value)},d(a){a&&h(e)}}}function Z(t){let e,l="Other - Please Specify",s;return{c(){e=y("option"),s=S(l),this.h()},l(n){e=E(n,"OPTION",{});var a=w(e);s=N(a,l),a.forEach(h),this.h()},h(){e.__value="",e.value=e.__value},m(n,a){k(n,e,a),P(e,s)},d(n){n&&h(e)}}}function G(t){let e,l,s;function n(){t[10].call(e,t[17])}return{c(){e=y("input"),this.h()},l(a){e=E(a,"INPUT",{name:!0,placeholder:!0,id:!0,class:!0}),this.h()},h(){u(e,"name","pronouns"),u(e,"placeholder","Enter your pronouns"),u(e,"id","pronouns"),u(e,"class","svelte-y0omde")},m(a,o){k(a,e,o),T(e,t[1][t[17]]),l||(s=O(e,"input",n),l=!0)},p(a,o){t=a,o&2&&e.value!==t[1][t[17]]&&T(e,t[1][t[17]])},d(a){a&&h(e),l=!1,s()}}}function _e(t){let e,l,s,n,a,o;function i(){t[7].call(e,t[17])}return{c(){e=y("input"),this.h()},l(r){e=E(r,"INPUT",{type:!0,name:!0,placeholder:!0,id:!0,class:!0}),this.h()},h(){u(e,"type","email"),u(e,"name",l=t[15].name),u(e,"placeholder",s=t[15].name),u(e,"id",n=t[15].name),u(e,"class","svelte-y0omde")},m(r,_){k(r,e,_),T(e,t[1][t[17]]),a||(o=O(e,"input",i),a=!0)},p(r,_){t=r,_&1&&l!==(l=t[15].name)&&u(e,"name",l),_&1&&s!==(s=t[15].name)&&u(e,"placeholder",s),_&1&&n!==(n=t[15].name)&&u(e,"id",n),_&2&&e.value!==t[1][t[17]]&&T(e,t[1][t[17]])},d(r){r&&h(e),a=!1,o()}}}function pe(t){let e,l,s,n,a,o;function i(){t[6].call(e,t[17])}return{c(){e=y("input"),this.h()},l(r){e=E(r,"INPUT",{type:!0,name:!0,placeholder:!0,id:!0,class:!0}),this.h()},h(){u(e,"type","tel"),u(e,"name",l=t[15].name),u(e,"placeholder",s=t[15].name),u(e,"id",n=t[15].name),u(e,"class","svelte-y0omde")},m(r,_){k(r,e,_),T(e,t[1][t[17]]),a||(o=O(e,"input",i),a=!0)},p(r,_){t=r,_&1&&l!==(l=t[15].name)&&u(e,"name",l),_&1&&s!==(s=t[15].name)&&u(e,"placeholder",s),_&1&&n!==(n=t[15].name)&&u(e,"id",n),_&2&&T(e,t[1][t[17]])},d(r){r&&h(e),a=!1,o()}}}function me(t){let e,l,s,n,a,o;function i(){t[5].call(e,t[17])}return{c(){e=y("textarea"),this.h()},l(r){e=E(r,"TEXTAREA",{name:!0,placeholder:!0,id:!0,class:!0}),w(e).forEach(h),this.h()},h(){u(e,"name",l=t[15].name),u(e,"placeholder",s=t[15].name),u(e,"id",n=t[15].name),u(e,"class","svelte-y0omde")},m(r,_){k(r,e,_),T(e,t[1][t[17]]),a||(o=O(e,"input",i),a=!0)},p(r,_){t=r,_&1&&l!==(l=t[15].name)&&u(e,"name",l),_&1&&s!==(s=t[15].name)&&u(e,"placeholder",s),_&1&&n!==(n=t[15].name)&&u(e,"id",n),_&2&&T(e,t[1][t[17]])},d(r){r&&h(e),a=!1,o()}}}function ce(t){let e,l,s,n,a,o;function i(){t[4].call(e,t[17])}return{c(){e=y("input"),this.h()},l(r){e=E(r,"INPUT",{type:!0,name:!0,placeholder:!0,id:!0,class:!0}),this.h()},h(){u(e,"type","text"),u(e,"name",l=t[15].name),u(e,"placeholder",s=t[15].name==="Reason - Please specify when possible"?"Reason":t[15].name),u(e,"id",n=t[15].name),u(e,"class","svelte-y0omde")},m(r,_){k(r,e,_),T(e,t[1][t[17]]),a||(o=O(e,"input",i),a=!0)},p(r,_){t=r,_&1&&l!==(l=t[15].name)&&u(e,"name",l),_&1&&s!==(s=t[15].name==="Reason - Please specify when possible"?"Reason":t[15].name)&&u(e,"placeholder",s),_&1&&n!==(n=t[15].name)&&u(e,"id",n),_&2&&e.value!==t[1][t[17]]&&T(e,t[1][t[17]])},d(r){r&&h(e),a=!1,o()}}}function J(t){let e,l,s=t[15].name+"",n,a,o,i,r,_=t[2][t[17]]+"",b,m,d,g;function f(p,$){if(p[15].__component==="form-fields.text")return fe;if(p[15].__component==="form-fields.drop-down")return ue}let c=f(t),v=c&&c(t);return{c(){e=y("span"),l=y("label"),n=S(s),a=S(":"),i=q(),r=y("label"),b=S(_),d=q(),v&&v.c(),g=C(),this.h()},l(p){e=E(p,"SPAN",{class:!0});var $=w(e);l=E($,"LABEL",{for:!0,class:!0});var j=w(l);n=N(j,s),a=N(j,":"),j.forEach(h),i=R($),r=E($,"LABEL",{for:!0,class:!0});var M=w(r);b=N(M,_),M.forEach(h),$.forEach(h),d=R(p),v&&v.l(p),g=C(),this.h()},h(){u(l,"for",o=""+(t[17].toString()+t[15].name)),u(l,"class","svelte-y0omde"),H(l,"required-field",t[15].isRequired),u(r,"for",m=""+(t[17].toString()+t[15].name)),u(r,"class","error svelte-y0omde"),u(e,"class","formField svelte-y0omde")},m(p,$){k(p,e,$),P(e,l),P(l,n),P(l,a),P(e,i),P(e,r),P(r,b),k(p,d,$),v&&v.m(p,$),k(p,g,$)},p(p,$){$&1&&s!==(s=p[15].name+"")&&z(n,s),$&1&&o!==(o=""+(p[17].toString()+p[15].name))&&u(l,"for",o),$&1&&H(l,"required-field",p[15].isRequired),$&4&&_!==(_=p[2][p[17]]+"")&&z(b,_),$&1&&m!==(m=""+(p[17].toString()+p[15].name))&&u(r,"for",m),c===(c=f(p))&&v?v.p(p,$):(v&&v.d(1),v=c&&c(p),v&&(v.c(),v.m(g.parentNode,g)))},d(p){p&&h(e),p&&h(d),v&&v.d(p),p&&h(g)}}}function he(t){let e;return{c(){e=S("Submit")},l(l){e=N(l,"Submit")},m(l,s){k(l,e,s)},d(l){l&&h(e)}}}function de(t){let e,l,s,n,a,o,i,r,_=t[0],b=[];for(let m=0;m<_.length;m+=1)b[m]=J(V(t,_,m));return i=new re({props:{type:"submit",$$slots:{default:[he]},$$scope:{ctx:t}}}),{c(){e=y("form"),l=y("span"),s=S("Required fields are marked by an asterisk. (*)"),n=q();for(let m=0;m<b.length;m+=1)b[m].c();a=q(),o=y("span"),U(i.$$.fragment),this.h()},l(m){e=E(m,"FORM",{action:!0,method:!0,class:!0});var d=w(e);l=E(d,"SPAN",{for:!0,class:!0});var g=w(l);s=N(g,"Required fields are marked by an asterisk. (*)"),g.forEach(h),n=R(d);for(let c=0;c<b.length;c+=1)b[c].l(d);a=R(d),o=E(d,"SPAN",{class:!0});var f=w(o);A(i.$$.fragment,f),f.forEach(h),d.forEach(h),this.h()},h(){u(l,"for","Required fields are marked by an asterisk. (*)"),u(l,"class","error info svelte-y0omde"),u(o,"class","btn-wrapper svelte-y0omde"),u(e,"action","https://formspree.io/f/xnqwygjw"),u(e,"method","POST"),u(e,"class","svelte-y0omde")},m(m,d){k(m,e,d),P(e,l),P(l,s),P(e,n);for(let g=0;g<b.length;g+=1)b[g].m(e,null);P(e,a),P(e,o),B(i,o,null),r=!0},p(m,d){if(d&15){_=m[0];let f;for(f=0;f<_.length;f+=1){const c=V(m,_,f);b[f]?b[f].p(c,d):(b[f]=J(c),b[f].c(),b[f].m(e,a))}for(;f<b.length;f+=1)b[f].d(1);b.length=_.length}const g={};d&2097152&&(g.$$scope={dirty:d,ctx:m}),i.$set(g)},i(m){r||(L(i.$$.fragment,m),r=!0)},o(m){D(i.$$.fragment,m),r=!1},d(m){m&&h(e),ee(b,m),F(i)}}}function ve(t){let e,l,s,n,a;return n=new ie({props:{$$slots:{default:[de]},$$scope:{ctx:t}}}),{c(){e=y("title"),l=S("Contact Us"),s=q(),U(n.$$.fragment)},l(o){e=E(o,"TITLE",{});var i=w(e);l=N(i,"Contact Us"),i.forEach(h),s=R(o),A(n.$$.fragment,o)},m(o,i){k(o,e,i),P(e,l),k(o,s,i),B(n,o,i),a=!0},p(o,[i]){const r={};i&2097167&&(r.$$scope={dirty:i,ctx:o}),n.$set(r)},i(o){a||(L(n.$$.fragment,o),a=!0)},o(o){D(n.$$.fragment,o),a=!1},d(o){o&&h(e),o&&h(s),F(n,o)}}}let I=0;function be(t,e,l){let{fields:s}=e;const n=s.map(()=>""),a=s.map(()=>""),o=s.filter(f=>f.__component==="form-fields.drop-down").map(()=>"-Select-");function i(f){n[f]=this.value,l(1,n)}function r(f){n[f]=this.value,l(1,n)}function _(f){n[f]=this.value,l(1,n)}function b(f){n[f]=this.value,l(1,n)}function m(){o[I]=te(this),l(3,o),l(0,s)}const d=f=>l(1,n[f]=o[I],n);function g(f){n[f]=this.value,l(1,n)}return t.$$set=f=>{"fields"in f&&l(0,s=f.fields)},[s,n,a,o,i,r,_,b,m,d,g]}class $e extends Q{constructor(e){super(),Y(this,e,be,ve,x,{fields:0})}}function ke(t){let e,l,s,n,a,o;return a=new $e({props:{fields:t[0]}}),{c(){e=y("h1"),l=S("Contact Us"),s=q(),n=y("div"),U(a.$$.fragment),this.h()},l(i){e=E(i,"H1",{class:!0});var r=w(e);l=N(r,"Contact Us"),r.forEach(h),s=R(i),n=E(i,"DIV",{class:!0});var _=w(n);A(a.$$.fragment,_),_.forEach(h),this.h()},h(){u(e,"class","svelte-1dkza0v"),u(n,"class","content svelte-1dkza0v")},m(i,r){k(i,e,r),P(e,l),k(i,s,r),k(i,n,r),B(a,n,null),o=!0},p(i,r){const _={};r&1&&(_.fields=i[0]),a.$set(_)},i(i){o||(L(a.$$.fragment,i),o=!0)},o(i){D(a.$$.fragment,i),o=!1},d(i){i&&h(e),i&&h(s),i&&h(n),F(a)}}}function ge(t){let e,l,s,n;return s=new oe({props:{background:"var(--accent-color)",$$slots:{default:[ke]},$$scope:{ctx:t}}}),{c(){e=q(),l=y("main"),U(s.$$.fragment),this.h()},l(a){ae('[data-svelte="svelte-bonrbl"]',document.head).forEach(h),e=R(a),l=E(a,"MAIN",{class:!0});var i=w(l);A(s.$$.fragment,i),i.forEach(h),this.h()},h(){document.title="Contact Us",u(l,"class","svelte-1dkza0v")},m(a,o){k(a,e,o),k(a,l,o),B(s,l,null),n=!0},p(a,[o]){const i={};o&3&&(i.$$scope={dirty:o,ctx:a}),s.$set(i)},i(a){n||(L(s.$$.fragment,a),n=!0)},o(a){D(s.$$.fragment,a),n=!1},d(a){a&&h(e),a&&h(l),F(s)}}}const ye=se.stringify({populate:{fields:{populate:"entries"}}}),Ie=async({fetch:t})=>{const l=`https://do-good-collective.herokuapp.com/api/contact-form?${ye}`,s=await t(l),{data:{attributes:{fields:n}}}=await s.json();return{status:s.status,props:{fields:n}}};function Ee(t,e,l){let{fields:s}=e;return t.$$set=n=>{"fields"in n&&l(0,s=n.fields)},[s]}class Oe extends Q{constructor(e){super(),Y(this,e,Ee,ge,x,{fields:0})}}export{Oe as default,Ie as load};
