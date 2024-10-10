import{s as O,e as A,a as P,c as L,b as R,g as D,f as h,m as v,i as E,h as $,H as J,t as M,d as q,j as B,A as K}from"../chunks/scheduler.Ck7Ga1hZ.js";import{S as Q,i as U,c as w,a as C,m as I,t as y,g as X,e as Y,b,d as T}from"../chunks/index.DorOvAdr.js";import{g as j}from"../chunks/entry.DssHp-J1.js";import{T as z}from"../chunks/Typography.C9h9Web6.js";import"../chunks/Footer.svelte_svelte_type_style_lang.BPZ5Cr7j.js";import{e as G}from"../chunks/each.D6YF6ztN.js";import{B as Z}from"../chunks/Button.BCivvIp4.js";function W(s,t,e){const n=s.slice();return n[6]=t[e],n}function x(s){let t;return{c(){t=M(s[0])},l(e){t=q(e,s[0])},m(e,n){E(e,t,n)},p(e,n){n&1&&B(t,e[0])},d(e){e&&h(t)}}}function tt(s){let t;return{c(){t=M(s[1])},l(e){t=q(e,s[1])},m(e,n){E(e,t,n)},p(e,n){n&2&&B(t,e[1])},d(e){e&&h(t)}}}function et(s){let t=s[6]+"",e;return{c(){e=M(t)},l(n){e=q(n,t)},m(n,m){E(n,e,m)},p(n,m){m&4&&t!==(t=n[6]+"")&&B(e,t)},d(n){n&&h(e)}}}function H(s){let t,e,n,m,l,p,f;return l=new z({props:{type:"impact",_color:"var(--primary-700)",$$slots:{default:[et]},$$scope:{ctx:s}}}),{c(){t=A("li"),e=A("img"),m=P(),w(l.$$.fragment),p=P(),this.h()},l(i){t=L(i,"LI",{class:!0});var a=R(t);e=L(a,"IMG",{src:!0,alt:!0}),m=D(a),C(l.$$.fragment,a),p=D(a),a.forEach(h),this.h()},h(){K(e.src,n="/images/Pricing/Tick.svg")||v(e,"src",n),v(e,"alt",""),v(t,"class","svelte-1k7ks76")},m(i,a){E(i,t,a),$(t,e),$(t,m),I(l,t,null),$(t,p),f=!0},p(i,a){const u={};a&516&&(u.$$scope={dirty:a,ctx:i}),l.$set(u)},i(i){f||(y(l.$$.fragment,i),f=!0)},o(i){b(l.$$.fragment,i),f=!1},d(i){i&&h(t),T(l)}}}function nt(s){let t,e,n,m,l,p,f,i,a,u;n=new z({props:{type:"body",$$slots:{default:[x]},$$scope:{ctx:s}}}),l=new z({props:{type:"cardTitle",$$slots:{default:[tt]},$$scope:{ctx:s}}});let g=G(s[2]),o=[];for(let r=0;r<g.length;r+=1)o[r]=H(W(s,g,r));const S=r=>b(o[r],1,1,()=>{o[r]=null});return a=new Z({props:{type:s[4],buttonLabel:s[3],onClick:s[5]}}),{c(){t=A("div"),e=A("div"),w(n.$$.fragment),m=P(),w(l.$$.fragment),p=P(),f=A("ul");for(let r=0;r<o.length;r+=1)o[r].c();i=P(),w(a.$$.fragment),this.h()},l(r){t=L(r,"DIV",{class:!0});var c=R(t);e=L(c,"DIV",{class:!0});var _=R(e);C(n.$$.fragment,_),m=D(_),C(l.$$.fragment,_),_.forEach(h),p=D(c),f=L(c,"UL",{class:!0});var F=R(f);for(let k=0;k<o.length;k+=1)o[k].l(F);F.forEach(h),i=D(c),C(a.$$.fragment,c),c.forEach(h),this.h()},h(){v(e,"class","card-header svelte-1k7ks76"),v(f,"class","description"),v(t,"class","pricing svelte-1k7ks76")},m(r,c){E(r,t,c),$(t,e),I(n,e,null),$(e,m),I(l,e,null),$(t,p),$(t,f);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(f,null);$(t,i),I(a,t,null),u=!0},p(r,[c]){const _={};c&513&&(_.$$scope={dirty:c,ctx:r}),n.$set(_);const F={};if(c&514&&(F.$$scope={dirty:c,ctx:r}),l.$set(F),c&4){g=G(r[2]);let d;for(d=0;d<g.length;d+=1){const V=W(r,g,d);o[d]?(o[d].p(V,c),y(o[d],1)):(o[d]=H(V),o[d].c(),y(o[d],1),o[d].m(f,null))}for(X(),d=g.length;d<o.length;d+=1)S(d);Y()}const k={};c&16&&(k.type=r[4]),c&8&&(k.buttonLabel=r[3]),c&32&&(k.onClick=r[5]),a.$set(k)},i(r){if(!u){y(n.$$.fragment,r),y(l.$$.fragment,r);for(let c=0;c<g.length;c+=1)y(o[c]);y(a.$$.fragment,r),u=!0}},o(r){b(n.$$.fragment,r),b(l.$$.fragment,r),o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)b(o[c]);b(a.$$.fragment,r),u=!1},d(r){r&&h(t),T(n),T(l),J(o,r),T(a)}}}function at(s,t,e){let{planLabel:n}=t,{amount:m}=t,{descriptions:l=[]}=t,{buttonLabel:p}=t,{buttonType:f}=t,{onClick:i=()=>{}}=t;return s.$$set=a=>{"planLabel"in a&&e(0,n=a.planLabel),"amount"in a&&e(1,m=a.amount),"descriptions"in a&&e(2,l=a.descriptions),"buttonLabel"in a&&e(3,p=a.buttonLabel),"buttonType"in a&&e(4,f=a.buttonType),"onClick"in a&&e(5,i=a.onClick)},[n,m,l,p,f,i]}class N extends Q{constructor(t){super(),U(this,t,at,nt,O,{planLabel:0,amount:1,descriptions:2,buttonLabel:3,buttonType:4,onClick:5})}}function rt(s){let t;return{c(){t=M("Plans and Pricing")},l(e){t=q(e,"Plans and Pricing")},m(e,n){E(e,t,n)},d(e){e&&h(t)}}}function ot(s){let t,e,n,m,l,p,f,i,a;return n=new z({props:{type:"cardTitle",$$slots:{default:[rt]},$$scope:{ctx:s}}}),p=new N({props:{planLabel:"FREE",amount:"",descriptions:["AR Setup: Basic setup of AR for products.","3D Model Integration: Easily integrate 3D models provided by your designer into the AR experience.","Product Display in AR: Display your products in AR FREE of cost.","Platform Integration: Full integration with major e-commerce platforms like Shopify, WordPress, and others.","Basic Support: Full support to assist in integrating AR on your platform."],onClick:s[0],buttonType:"secondary",buttonLabel:"Get this plan"}}),i=new N({props:{planLabel:"PRO",amount:"",descriptions:["Personalized AR Setup: Custom AR integration tailored to your codebase for seamless use.","Initial Setup & Integration: Full AR setup, including 3D model integration.","Advanced Platform Support: Integration with major platforms like Shopify, WordPress, Magento, etc.","Priority Support: Faster customer support for troubleshooting and updates.","Analytics & Insights: Track and optimize AR interactions with detailed stats.","Custom 3D Models: Personalized 3D models from product photos or modal images.","Tailored Design: Accurate, detailed models created to match your specifications.","Quick Delivery: Fast turnaround on 3D models for AR use.","Minimal Cost: Affordable pricing for enhanced product AR experiences."],onClick:s[1],buttonType:"primary",buttonLabel:"Get this plan"}}),{c(){t=A("main"),e=A("div"),w(n.$$.fragment),m=P(),l=A("div"),w(p.$$.fragment),f=P(),w(i.$$.fragment),this.h()},l(u){t=L(u,"MAIN",{class:!0});var g=R(t);e=L(g,"DIV",{class:!0});var o=R(e);C(n.$$.fragment,o),m=D(o),l=L(o,"DIV",{class:!0});var S=R(l);C(p.$$.fragment,S),f=D(S),C(i.$$.fragment,S),S.forEach(h),o.forEach(h),g.forEach(h),this.h()},h(){v(l,"class","pricing-list svelte-1qwgezy"),v(e,"class","pricing-box svelte-1qwgezy"),v(t,"class","svelte-1qwgezy")},m(u,g){E(u,t,g),$(t,e),I(n,e,null),$(e,m),$(e,l),I(p,l,null),$(l,f),I(i,l,null),a=!0},p(u,[g]){const o={};g&4&&(o.$$scope={dirty:g,ctx:u}),n.$set(o)},i(u){a||(y(n.$$.fragment,u),y(p.$$.fragment,u),y(i.$$.fragment,u),a=!0)},o(u){b(n.$$.fragment,u),b(p.$$.fragment,u),b(i.$$.fragment,u),a=!1},d(u){u&&h(t),T(n),T(p),T(i)}}}function st(s){return[()=>{j("/contact?plans=builder")},()=>{j("/contact?plans=all")}]}class gt extends Q{constructor(t){super(),U(this,t,st,ot,O,{})}}export{gt as component};
