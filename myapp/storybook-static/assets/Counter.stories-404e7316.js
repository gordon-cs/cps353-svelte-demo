import{u as k,s as W,S as te,i as se,e as w,a as O,w as N,c as T,b as M,g as U,d as z,x as A,f as C,h as y,G,j as ne,k as m,z as P,y as V,H as oe,I as ae}from"./index-c8338b3f.js";const X=typeof window<"u";let R=X?()=>window.performance.now():()=>Date.now(),Y=X?e=>requestAnimationFrame(e):k;const E=new Set;function Z(e){E.forEach(s=>{s.c(e)||(E.delete(s),s.f())}),E.size!==0&&Y(Z)}function re(e){let s;return E.size===0&&Y(Z),{promise:new Promise(t=>{E.add(s={c:e,f:t})}),abort(){E.delete(s)}}}const B=[];function ie(e,s=k){let t;const c=new Set;function i(o){if(W(e,o)&&(e=o,t)){const l=!B.length;for(const a of c)a[1](),B.push(a,e);if(l){for(let a=0;a<B.length;a+=2)B[a][0](B[a+1]);B.length=0}}}function n(o){i(o(e))}function r(o,l=k){const a=[o,l];return c.add(a),c.size===1&&(t=s(i,n)||k),o(e),()=>{c.delete(a),c.size===0&&t&&(t(),t=null)}}return{set:i,update:n,subscribe:r}}function F(e){return Object.prototype.toString.call(e)==="[object Date]"}function H(e,s,t,c){if(typeof t=="number"||F(t)){const i=c-t,n=(t-s)/(e.dt||1/60),r=e.opts.stiffness*i,o=e.opts.damping*n,l=(r-o)*e.inv_mass,a=(n+l)*e.dt;return Math.abs(a)<e.opts.precision&&Math.abs(i)<e.opts.precision?c:(e.settled=!1,F(t)?new Date(t.getTime()+a):t+a)}else{if(Array.isArray(t))return t.map((i,n)=>H(e,s[n],t[n],c[n]));if(typeof t=="object"){const i={};for(const n in t)i[n]=H(e,s[n],t[n],c[n]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function ce(e,s={}){const t=ie(e),{stiffness:c=.15,damping:i=.8,precision:n=.01}=s;let r,o,l,a=e,g=e,p=1,_=0,b=!1;function x(v,h={}){g=v;const D=l={};return e==null||h.hard||u.stiffness>=1&&u.damping>=1?(b=!0,r=R(),a=v,t.set(e=g),Promise.resolve()):(h.soft&&(_=1/((h.soft===!0?.5:+h.soft)*60),p=0),o||(r=R(),b=!1,o=re(f=>{if(b)return b=!1,o=null,!1;p=Math.min(p+_,1);const d={inv_mass:p,opts:u,settled:!0,dt:(f-r)*60/1e3},I=H(d,a,e,g);return r=f,a=e,t.set(e=I),d.settled&&(o=null),!d.settled})),new Promise(f=>{o.promise.then(()=>{D===l&&f()})}))}const u={set:x,update:(v,h)=>x(v(g,e),h),subscribe:t.subscribe,stiffness:c,damping:i,precision:n};return u}function le(e){let s,t,c='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg>',i,n,r,o,l=Math.floor(e[1]+1)+"",a,g,p,_=Math.floor(e[1])+"",b,x,u,v='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg>',h,D;return{c(){s=w("div"),t=w("button"),t.innerHTML=c,i=O(),n=w("div"),r=w("div"),o=w("strong"),a=N(l),g=O(),p=w("strong"),b=N(_),x=O(),u=w("button"),u.innerHTML=v,this.h()},l(f){s=T(f,"DIV",{class:!0});var d=M(s);t=T(d,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),U(t)!=="svelte-97ppyc"&&(t.innerHTML=c),i=z(d),n=T(d,"DIV",{class:!0});var I=M(n);r=T(I,"DIV",{class:!0,style:!0});var L=M(r);o=T(L,"STRONG",{class:!0,"aria-hidden":!0});var j=M(o);a=A(j,l),j.forEach(C),g=z(L),p=T(L,"STRONG",{class:!0});var q=M(p);b=A(q,_),q.forEach(C),L.forEach(C),I.forEach(C),x=z(d),u=T(d,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),U(u)!=="svelte-irev0c"&&(u.innerHTML=v),d.forEach(C),this.h()},h(){y(t,"aria-label","Decrease the counter by one"),y(t,"class","svelte-y96mxt"),y(o,"class","hidden svelte-y96mxt"),y(o,"aria-hidden","true"),y(p,"class","svelte-y96mxt"),y(r,"class","counter-digits svelte-y96mxt"),G(r,"transform","translate(0, "+100*e[2]+"%)"),y(n,"class","counter-viewport svelte-y96mxt"),y(u,"aria-label","Increase the counter by one"),y(u,"class","svelte-y96mxt"),y(s,"class","counter svelte-y96mxt")},m(f,d){ne(f,s,d),m(s,t),m(s,i),m(s,n),m(n,r),m(r,o),m(o,a),m(r,g),m(r,p),m(p,b),m(s,x),m(s,u),h||(D=[P(t,"click",e[4]),P(u,"click",e[5])],h=!0)},p(f,[d]){d&2&&l!==(l=Math.floor(f[1]+1)+"")&&V(a,l),d&2&&_!==(_=Math.floor(f[1])+"")&&V(b,_),d&4&&G(r,"transform","translate(0, "+100*f[2]+"%)")},i:k,o:k,d(f){f&&C(s),h=!1,oe(D)}}}function de(e,s){return(e%s+s)%s}function fe(e,s,t){let c,i,n=0;const r=ce();ae(e,r,a=>t(1,i=a));const o=()=>t(0,n-=1),l=()=>t(0,n+=1);return e.$$.update=()=>{e.$$.dirty&1&&r.set(n),e.$$.dirty&2&&t(2,c=de(i,1))},[n,i,c,r,o,l]}class $ extends te{constructor(s){super(),se(this,s,fe,le,W,{})}}const ee=$;$.__docgen={version:3,name:"Counter.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const pe={component:ee},S={render:e=>({Component:ee}),play:async({canvasElement:e})=>{const s=within(CanvasElement);await expect(s.getByText("0")).toBeInTheDocument(),await userEvent.click(s.getByTestLabel("Increase the counter by one")),await expect(s.getByText("0")).not.toBeInTheDocument(),await expect(s.getByText("1")).toBeInTheDocument()}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => ({
    Component: Counter
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(CanvasElement);

    // Counter starts at 0
    await expect(canvas.getByText('0')).toBeInTheDocument();

    // Click + and see Counter at 1
    await userEvent.click(canvas.getByTestLabel('Increase the counter by one'));
    await expect(canvas.getByText('0')).not.toBeInTheDocument();
    await expect(canvas.getByText('1')).toBeInTheDocument();
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const me=["CountUp"];export{S as CountUp,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=Counter.stories-404e7316.js.map