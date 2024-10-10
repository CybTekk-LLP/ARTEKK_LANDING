var Z=Object.defineProperty;var q=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P=(t,e,n)=>(q(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,U as G,f as U,V as H,r as v,I as C,S as b,W as J,X as V,Y as M,b as K,Z as Q,_ as T,$ as tt,a0 as et,a1 as N,a2 as nt,a3 as it,a4 as st,a5 as rt,a6 as at}from"./scheduler.Ck7Ga1hZ.js";const B=typeof window<"u";let D=B?()=>window.performance.now():()=>Date.now(),z=B?t=>requestAnimationFrame(t):w;const p=new Set;function F(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),p.size!==0&&z(F)}function L(t){let e;return p.size===0&&z(F),{promise:new Promise(n=>{p.add(e={c:t,f:n})}),abort(){p.delete(e)}}}const k=new Map;let O=0;function ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:H(e),rules:{}};return k.set(t,n),n}function W(t,e,n,i,r,a,u,l=0){const d=16.666/i;let s=`{
`;for(let g=0;g<=1;g+=d){const m=e+(n-e)*a(g);s+=g*100+`%{${u(m,1-m)}}
`}const f=s+`100% {${u(n,1-n)}}
}`,o=`__svelte_${ot(f)}_${l}`,_=G(t),{stylesheet:c,rules:$}=k.get(_)||ft(_,t);$[o]||($[o]=!0,c.insertRule(`@keyframes ${o} ${f}`,c.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${o} ${i}ms linear ${r}ms 1 both`,O+=1,o}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||ut())}function ut(){z(()=>{O||(k.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&U(e)}),k.clear())})}let x;function X(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function j(t,e,n){t.dispatchEvent(J(`${e?"intro":"outro"}${n}`))}const E=new Set;let y;function gt(){y={r:0,c:[],p:y}}function yt(){y.r||v(y.c),y=y.p}function ct(t,e){t&&t.i&&(E.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),y.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Y={duration:0};function wt(t,e,n){const i={direction:"in"};let r=e(t,n,i),a=!1,u,l,d=0;function s(){u&&R(t,u)}function f(){const{delay:_=0,duration:c=300,easing:$=V,tick:h=w,css:g}=r||Y;g&&(u=W(t,0,1,c,_,$,g,d++)),h(0,1);const m=D()+_,S=m+c;l&&l.abort(),a=!0,b(()=>j(t,!0,"start")),l=L(I=>{if(a){if(I>=S)return h(1,0),j(t,!0,"end"),s(),a=!1;if(I>=m){const A=$((I-m)/c);h(A,1-A)}}return a})}let o=!1;return{start(){o||(o=!0,R(t),C(r)?(r=r(i),X().then(f)):f())},invalidate(){o=!1},end(){a&&(s(),a=!1)}}}function xt(t,e,n){const i={direction:"out"};let r=e(t,n,i),a=!0,u;const l=y;l.r+=1;let d;function s(){const{delay:f=0,duration:o=300,easing:_=V,tick:c=w,css:$}=r||Y;$&&(u=W(t,1,0,o,f,_,$));const h=D()+f,g=h+o;b(()=>j(t,!1,"start")),"inert"in t&&(d=t.inert,t.inert=!0),L(m=>{if(a){if(m>=g)return c(0,1),j(t,!1,"end"),--l.r||v(l.c),!1;if(m>=h){const S=_((m-h)/o);c(1-S,S)}}return a})}return C(r)?X().then(()=>{r=r(i),s()}):s(),{end(f){f&&"inert"in t&&(t.inert=d),f&&r.tick&&r.tick(1,0),a&&(u&&R(t,u),a=!1)}}}function vt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function St(t){t&&t.c()}function Et(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),b(()=>{const a=t.$$.on_mount.map(nt).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...a):v(a),t.$$.on_mount=[]}),r.forEach(b)}function dt(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(it.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(t,e,n,i,r,a,u=null,l=[-1]){const d=et;N(t);const s=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};u&&u(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(o,_,...c)=>{const $=c.length?c[0]:_;return s.ctx&&r(s.ctx[o],s.ctx[o]=$)&&(!s.skip_bound&&s.bound[o]&&s.bound[o]($),f&&_t(t,o)),_}):[],s.update(),f=!0,v(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){rt();const o=K(e.target);s.fragment&&s.fragment.l(o),o.forEach(U)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),lt(t,e.target,e.anchor),at(),Q()}N(d)}class kt{constructor(){P(this,"$$");P(this,"$$set")}$destroy(){dt(this,1),this.$destroy=w}$on(e,n){if(!C(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!T(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($t);export{kt as S,Et as a,pt as b,St as c,dt as d,yt as e,vt as f,gt as g,wt as h,bt as i,xt as j,lt as m,ct as t};
