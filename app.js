var ct=globalThis,Ot=ct.trustedTypes,$e=Ot?Ot.createPolicy("lit-html",{createHTML:e=>e}):void 0,_e="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Te="?"+F,hn=`<${Te}>`,K=document,pt=()=>K.createComment(""),dt=e=>e===null||typeof e!="object"&&typeof e!="function",Zt=Array.isArray,gn=e=>Zt(e)||typeof e?.[Symbol.iterator]=="function",Ut=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,Ae=/>/g,q=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Se=/'/g,ze=/"/g,Ee=/^(?:script|style|textarea|title)$/i,Qt=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),m=Qt(1),Yn=Qt(2),Wn=Qt(3),ht=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Me=new WeakMap,U=K.createTreeWalker(K,129);function He(e,t){if(!Zt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $e!==void 0?$e.createHTML(t):t}var fn=(e,t)=>{let n=e.length-1,s=[],r,a=t===2?"<svg>":t===3?"<math>":"",i=lt;for(let h=0;h<n;h++){let o=e[h],l,c,d=-1,u=0;for(;u<o.length&&(i.lastIndex=u,c=i.exec(o),c!==null);)u=i.lastIndex,i===lt?c[1]==="!--"?i=ye:c[1]!==void 0?i=Ae:c[2]!==void 0?(Ee.test(c[2])&&(r=RegExp("</"+c[2],"g")),i=q):c[3]!==void 0&&(i=q):i===q?c[0]===">"?(i=r??lt,d=-1):c[1]===void 0?d=-2:(d=i.lastIndex-c[2].length,l=c[1],i=c[3]===void 0?q:c[3]==='"'?ze:Se):i===ze||i===Se?i=q:i===ye||i===Ae?i=lt:(i=q,r=void 0);let g=i===q&&e[h+1].startsWith("/>")?" ":"";a+=i===lt?o+hn:d>=0?(s.push(l),o.slice(0,d)+_e+o.slice(d)+F+g):o+F+(d===-2?h:g)}return[He(e,a+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},gt=class e{constructor({strings:t,_$litType$:n},s){let r;this.parts=[];let a=0,i=0,h=t.length-1,o=this.parts,[l,c]=fn(t,n);if(this.el=e.createElement(l,s),U.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=U.nextNode())!==null&&o.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(_e)){let u=c[i++],g=r.getAttribute(d).split(F),f=/([.?@])?(.*)/.exec(u);o.push({type:1,index:a,name:f[2],strings:g,ctor:f[1]==="."?Vt:f[1]==="?"?Gt:f[1]==="@"?Xt:et}),r.removeAttribute(d)}else d.startsWith(F)&&(o.push({type:6,index:a}),r.removeAttribute(d));if(Ee.test(r.tagName)){let d=r.textContent.split(F),u=d.length-1;if(u>0){r.textContent=Ot?Ot.emptyScript:"";for(let g=0;g<u;g++)r.append(d[g],pt()),U.nextNode(),o.push({type:2,index:++a});r.append(d[u],pt())}}}else if(r.nodeType===8)if(r.data===Te)o.push({type:2,index:a});else{let d=-1;for(;(d=r.data.indexOf(F,d+1))!==-1;)o.push({type:7,index:a}),d+=F.length-1}a++}}static createElement(t,n){let s=K.createElement("template");return s.innerHTML=t,s}};function tt(e,t,n=e,s){if(t===ht)return t;let r=s!==void 0?n._$Co?.[s]:n._$Cl,a=dt(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),a===void 0?r=void 0:(r=new a(e),r._$AT(e,n,s)),s!==void 0?(n._$Co??(n._$Co=[]))[s]=r:n._$Cl=r),r!==void 0&&(t=tt(e,r._$AS(e,t.values),r,s)),t}var Kt=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:n},parts:s}=this._$AD,r=(t?.creationScope??K).importNode(n,!0);U.currentNode=r;let a=U.nextNode(),i=0,h=0,o=s[0];for(;o!==void 0;){if(i===o.index){let l;o.type===2?l=new ft(a,a.nextSibling,this,t):o.type===1?l=new o.ctor(a,o.name,o.strings,this,t):o.type===6&&(l=new Jt(a,this,t)),this._$AV.push(l),o=s[++h]}i!==o?.index&&(a=U.nextNode(),i++)}return U.currentNode=K,r}p(t){let n=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}},ft=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=tt(this,t,n),dt(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==ht&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&dt(this._$AH)?this._$AA.nextSibling.data=t:this.T(K.createTextNode(t)),this._$AH=t}$(t){let{values:n,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=gt.createElement(He(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(n);else{let a=new Kt(r,this),i=a.u(this.options);a.p(n),this.T(i),this._$AH=a}}_$AC(t){let n=Me.get(t.strings);return n===void 0&&Me.set(t.strings,n=new gt(t)),n}k(t){Zt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,s,r=0;for(let a of t)r===n.length?n.push(s=new e(this.O(pt()),this.O(pt()),this,this.options)):s=n[r],s._$AI(a),r++;r<n.length&&(this._$AR(s&&s._$AB.nextSibling,r),n.length=r)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,r,a){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=n,this._$AM=r,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,n=this,s,r){let a=this.strings,i=!1;if(a===void 0)t=tt(this,t,n,0),i=!dt(t)||t!==this._$AH&&t!==ht,i&&(this._$AH=t);else{let h=t,o,l;for(t=a[0],o=0;o<a.length-1;o++)l=tt(this,h[s+o],n,o),l===ht&&(l=this._$AH[o]),i||(i=!dt(l)||l!==this._$AH[o]),l===y?t=y:t!==y&&(t+=(l??"")+a[o+1]),this._$AH[o]=l}i&&!r&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Vt=class extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},Gt=class extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},Xt=class extends et{constructor(t,n,s,r,a){super(t,n,s,r,a),this.type=5}_$AI(t,n=this){if((t=tt(this,t,n,0)??y)===ht)return;let s=this._$AH,r=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==y&&(s===y||r);r&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Jt=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}};var un=ct.litHtmlPolyfillSupport;un?.(gt,ft),(ct.litHtmlVersions??(ct.litHtmlVersions=[])).push("3.2.1");var te=(e,t,n)=>{let s=n?.renderBefore??t,r=s._$litPart$;if(r===void 0){let a=n?.renderBefore??null;s._$litPart$=r=new ft(t.insertBefore(pt(),a),a,void 0,n??{})}return r._$AI(e),r};var mn=/[一-鿿]/g,vn=e=>(e.match(mn)||[]).length,V=e=>/^\d+\.$/.test(e.t),Ne=(e,t,n=!1)=>e.chapters[t].title.filter(s=>n||!V(s)).map(s=>V(s)?s.t+" ":s.t).join(""),Oe=(e,t,n=!1)=>e.chapters[t].title.filter(s=>n||!V(s)),ut=(e,t)=>t?`${Math.round(100*e/t)}%`:"\u2013",mt=e=>new Date(e).toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}),ee=new WeakMap;function j(e){if(ee.has(e))return ee.get(e);let t=[],n=new Map,s=new Map;e.chapters.forEach((a,i)=>{let h=(o,l)=>{n.set(`${i}.${o}`,t.length),t.push({pos:`${i}.${o}`,c:i,b:o,tokens:l,hz:l.reduce((c,d)=>c+vn(d.t),0)});for(let c of l)c.py&&!s.has(c.key)&&s.set(c.key,c)};h(-1,a.title),a.blocks.forEach((o,l)=>h(l,o.tokens||[]))});let r={blocks:t,blockAt:n,entryOf:s,totalHz:t.reduce((a,i)=>a+i.hz,0)};return ee.set(e,r),r}var Ce=10*6e4,ne=new WeakMap;function R(e,t){if(ne.has(t))return ne.get(t);let n=bn(e,t);return ne.set(t,n),n}function bn(e,t){let{blocks:n,blockAt:s}=e,r=[];for(let l of t.taps){let c=s.get(`${l.chapter}.${l.block}`);c!==void 0&&r.push({n:c,at:Date.parse(l.at),tap:l})}for(let l of t.trail){let c=s.get(l.pos);c!==void 0&&r.push({n:c,at:Date.parse(l.at),ev:l.ev||"move",logged:!0})}r.sort((l,c)=>l.at-c.at);let a=[],i=null;r.forEach((l,c)=>{let d=r[c-1];if(!i||l.at-d.at>Ce)i={start:l.at,end:l.at,ms:0,covered:new Set,taps:[],steps:[],logged:!1},a.push(i);else{let u=l.at-d.at;if(d.ev!=="hide")if(i.ms+=u,i.steps.push({n:d.n,dt:u}),l.n>d.n&&l.ev!=="jump"){let g=0;for(let f=d.n;f<l.n;f++)g+=n[f].hz;if(!(g>=200&&g/(u/6e4)>300))for(let f=d.n;f<l.n;f++)i.covered.add(f)}else l.n===d.n&&u>=1e4&&i.covered.add(l.n);i.end=l.at}l.logged&&(i.logged=!0),l.tap&&(i.covered.add(l.n),i.taps.push(l))});let h=new Map;a.forEach((l,c)=>{for(let d of l.covered)h.has(d)||h.set(d,c)});let o=t.furthest!=null&&s.has(t.furthest)?s.get(t.furthest):-1;for(let l of h.keys())o=Math.max(o,l);return{sittings:a,firstSitting:h,far:o}}function oe(e,t,n,s){let{blocks:r}=e,{sittings:a,firstSitting:i,far:h}=s,o=new Set,l=new Set;a.forEach((f,w)=>{for(let b of f.taps){let A=`${b.n}.${b.tap.token}`;l.add(A),i.get(b.n)===w&&o.add(A)}});let c=new Map;a.forEach((f,w)=>{for(let b of f.steps){if(i.get(b.n)!==w)continue;let A=r[b.n].c;c.set(A,(c.get(A)||0)+b.dt)}});let d=[],u=new Set,g=new Set;return t.chapters.forEach((f,w)=>{let b={c:w,fresh:[0,0],again:[0,0],known:[0,0],hz:0,words:new Set,tapped:new Set,any:new Map},A=!1;if(r.forEach((M,C)=>{M.c!==w||C>h||(A=!0,M.b>=0&&(b.hz+=M.hz),M.tokens.forEach((x,$)=>{if(!x.py||x.name)return;let E=b.any.get(x.key)||[0,0];if(E[0]++,l.has(`${C}.${$}`)&&E[1]++,b.any.set(x.key,E),M.b<0)return;let O=o.has(`${C}.${$}`),P=u.has(x.key)?g.has(x.key)?b.again:b.known:b.fresh;P[0]++,O&&(P[1]++,b.tapped.add(x.key)),b.words.add(x.key)}))}),!A||!b.words.size)return;b.total=[b.fresh[0]+b.again[0]+b.known[0],b.fresh[1]+b.again[1]+b.known[1]];let S=(c.get(w)||0)/6e4;b.speed=S>=1?b.hz/S:null,b.earlier=new Set(n.taps.filter(M=>M.chapter<w&&!M.name).map(M=>M.key)),d.push(b);for(let M of b.words)u.add(M);for(let M of b.tapped)g.add(M)}),d}function je(e,t,n){let s=R(e,n),{blocks:r}=e,a=oe(e,t,n,s),i=r.reduce((f,w,b)=>f+(b<=s.far?w.hz:0),0),h=[...a].reverse().find(f=>f.speed),o=h?(e.totalHz-i)/h.speed/60:null,l=null,c=[...a].reverse().find(f=>[...f.any.values()].some(w=>w[1]));if(c){let f=[...c.any.entries()].filter(([w,b])=>c.earlier.has(w)&&b[1]>=3).sort((w,b)=>b[1][1]-w[1][1]||b[1][1]/b[1][0]-w[1][1]/w[1][0]).map(([w,b])=>({tok:e.entryOf.get(w),tapped:b[1],seen:b[0]}));f.length&&(l={c:c.c,list:f})}let d=s.sittings.map((f,w)=>({s:f,i:w})).filter(({s:f})=>f.covered.size).reverse().map(({s:f,i:w})=>{let b=0,A=0,S=0;for(let $ of f.covered)s.firstSitting.get($)===w?b+=r[$].hz:A+=r[$].hz,r[$].b>=0&&(S+=r[$].tokens.filter(E=>E.py&&!E.name).length);let M=new Set(f.taps.filter($=>$.tap.block>=0&&!$.tap.name).map($=>`${$.n}.${$.tap.token}`)).size,C=f.ms/6e4,x=[`${b} new`,`${A} reread`];return C>=1&&x.push(`${Math.round((b+A)/C)}/min`),x.push(`${ut(M,S)} tapped`),f.logged||x.push("estimated"),{start:f.start,mins:Math.round(C),sub:x.join(" \xB7 ")}}),u=n.answers.filter(f=>f.pinyin),g={answers:n.answers.length,pinyin:[u.filter(f=>f.pinyin==="got").length,u.length],meaning:[u.filter(f=>f.meaning==="got").length,u.length]};return{readHz:i,totalHz:e.totalHz,left:o,rows:a,stuck:l,sittings:d,cards:g}}function se(e,t,n,s){let r=n.find(u=>u.key===s&&u.block>=0),a,i,h;if(r)a=t.chapters[r.chapter].blocks[r.block].tokens,i=r.token,h=r.chapter;else{let u=e.blocks.find(g=>g.b>=0&&g.tokens.some(f=>f.key===s))||e.blocks.find(g=>g.tokens.some(f=>f.key===s));if(!u)return null;a=u.tokens,i=a.findIndex(g=>g.key===s),h=u.c}let o=u=>!u.py&&/[。！？…]/.test(u.t),l=u=>u&&!u.py&&/^[”’」』]/.test(u.t),c=i;for(;c>0&&!o(a[c-1])&&!l(a[c-1]);)c--;let d=i;for(;d<a.length-1&&!o(a[d]);)d++;return l(a[d+1])&&d++,{tokens:a.slice(c,d+1),at:i-c,c:h}}function Be(e,t,n,s){let{far:r}=R(e,t),a=new Map;for(let u=0;u<=r;u++)for(let g of e.blocks[u].tokens)!g.py||g.name||(a.has(g.key)||a.set(g.key,{t:g,seen:0,taps:0}),a.get(g.key).seen++);for(let u of t.taps)a.has(u.key)&&a.get(u.key).taps++;let i=new Set(n.known),h=new Set(t.known),o=[...a.values()].map(u=>({...u,conf:n.confidence[u.t.key]??null,known:i.has(u.t.key),marked:h.has(u.t.key)}));for(let u of o)u.state=u.known?"known":u.conf!=null&&u.conf<n.threshold?"live":"solid";let l=u=>u.known?2:u.conf??1;o.sort(s==="taps"?(u,g)=>g.taps-u.taps||g.seen-u.seen:(u,g)=>l(u)-l(g)||g.taps-u.taps);let c=[...e.entryOf.values()].filter(u=>!u.name).length,d={known:0,solid:0,live:0,ahead:c-o.length};for(let u of o)d[u.state]++;return{list:o,ahead:c-o.length,counts:d,total:c}}function Pe(e,t,n,s){return[...new Set(n.taps.filter(a=>a.chapter===s&&!a.name).map(a=>a.key))].map(a=>e.entryOf.get(a)).filter(Boolean)}function De(e){let t=e.lastExport,n=t?e.taps.length-t.count:e.taps.length,s=e.answers.length-(t&&t.answers||0);return{warn:n>0||s>0,text:`${e.taps.length} taps \xB7 `+(t?`${n} since last export`:"not exported yet")+(s>0?` \xB7 ${s} new answers`:"")}}function Re(e,t,n,s){let r=new Set(s.known),{far:a}=R(e,n),i=l=>r.has(l)?Math.max(.95,s.confidence[l]??0):s.confidence[l]??0,h=t.chapters.map((l,c)=>{let d=0,u=0,g=new Set;for(let f of e.blocks)if(!(f.c!==c||f.b<0))for(let w of f.tokens)!w.py||w.name||(u++,d+=i(w.key),w.key in s.confidence||g.add(w.key));return{c,cov:u?d/u:0,unmet:g.size}}),o=e.blocks[a+1]||e.blocks[e.blocks.length-1];return{rows:h,next:o.c,here:n.position?Number(n.position.pos.split(".")[0]):o.c}}function Ie(e){let t=new Set(e.known),n=Array.from({length:10},(s,r)=>({i:r,lo:r/10,n:0,known:0}));for(let[s,r]of Object.entries(e.confidence)){let a=n[Math.min(9,Math.floor(r*10))];a.n++,t.has(s)&&a.known++}return n}function Le(e,t){let s=l=>new Date(l).toDateString(),r=e.answers.filter(l=>l.pinyin).map(l=>({...l,t:Date.parse(l.at)})).sort((l,c)=>l.t-c.t),a=new Map,i=new Set,h=[0,0],o={pinyin:0,meaning:0};for(let l of r){let c=s(l.t),d=t-l.t<=30*864e5;d&&(l.pinyin==="miss"&&o.pinyin++,l.meaning==="miss"&&o.meaning++),i.has(l.key+c)||(i.add(l.key+c),d&&a.has(l.key)&&a.get(l.key)!==c&&(h[1]++,l.pinyin==="got"&&l.meaning==="got"&&h[0]++)),a.has(l.key)||a.set(l.key,c)}return{recall:h,miss:o}}var xn=e=>Array.isArray(e.ratings)?e.ratings:Object.entries(e.ratings||{}).map(([t,n])=>({chapter:Number(t),...n}));function vt(e,t,n,s){let{blocks:r}=e,a=R(e,n),i=r.reduce((l,c)=>l+(c.c===s&&c.b>=0?c.hz:0),0),h=[],o=xn(n).filter(l=>l.chapter===s).map(l=>({...l,t:Date.parse(l.at)}));for(let l of a.sittings){let c=[...l.covered].filter(A=>r[A].c===s&&r[A].b>=0);if(!c.length)continue;let d=c.reduce((A,S)=>A+r[S].hz,0),u=l.steps.reduce((A,S)=>A+(r[S.n].c===s?S.dt:0),0),g=c.reduce((A,S)=>A+r[S].tokens.filter(M=>M.py&&!M.name).length,0),f=l.taps.filter(A=>r[A.n].c===s&&A.tap.block>=0&&!A.tap.name),w=new Set(f.map(A=>`${A.n}.${A.tap.token}`)).size,b=[...new Set(f.map(A=>A.tap.key))].map(A=>e.entryOf.get(A)).filter(Boolean);h.push({start:l.start,end:l.end,rating:null,ratingAt:null,hz:d,share:i?d/i:0,mins:u/6e4,speed:u>=6e4?d/(u/6e4):null,rate:g?w/g:0,tapped:w,words:g,keys:b})}for(let l of o.sort((c,d)=>c.t-d.t)){let c=h.find(d=>l.t>=d.start&&l.t<=d.end+Ce)||[...h].reverse().find(d=>d.start<=l.t&&!d.rating);c&&(c.rating=l.rating,c.ratingAt=l.at)}return{passes:h,chHz:i}}var Fe=(e,t,n,s)=>e.map((r,a)=>{if(!r.py)return V(r)?r.t+" ":r.t;let i=`${t}.${n}.${a}`;return m`<span class="w ${s.active&&s.active.at===i?"on":""}" data-at=${i}>${r.t}</span>`}),re=(e,t,n,s=-1)=>e.map((r,a)=>{if(!r.py)return V(r)?r.t+" ":r.t;let i=`${n}.${a}`,h=t.zpop&&t.zpop.id===i,o=m`<span class="z ${h?"on":""}" data-z=${i} data-k=${r.key}>${r.t}</span>`;return a===s?m`<b>${o}</b>`:o}),I=(e,t,n,s,r=!1)=>re(Oe(e.book,n,r),t,s),nt=(e,t,n)=>re([e],t,n),Ct=(e,t)=>t.kind==="chapter"?{kind:"index"}:t.kind==="review"?{kind:"chapter",c:t.c}:null,jt=(e,t)=>t.kind==="index"?{kind:"chapter",c:0,land:"top"}:t.kind==="chapter"?{kind:"review",c:t.c}:t.kind==="review"&&t.c+1<e.book.chapters.length?{kind:"chapter",c:t.c+1}:null,Bt=e=>e.progress.position?{kind:"chapter",c:Number(e.progress.position.pos.split(".")[0]),land:"pos"}:{kind:"chapter",c:0,land:"top"},ae=(e,t)=>{let n=e.book.chapters[t].title.find(V);return n?n.t.replace(".",""):null},ot=(e,t)=>ae(e,t)?`chapter ${ae(e,t)}`:Ne(e.book,t),Ue=(e,t)=>t?t.kind==="index"?"contents":t.kind==="review"?`${ot(e,t.c)} review`:ot(e,t.c):"",ie=(e,t,n)=>{if(t.sec.kind==="index"){let r=Bt(e).c;return m`<div class="hint top" @click=${n.sling}><span class="ar">↑</span><span class="hw">${e.progress.position?`continue reading ${ot(e,r)}`:`start ${ot(e,0)}`}</span></div>`}let s=Ct(e,t.sec);return s?m`<div class="hint top" @click=${n.back}><span class="ar">↑</span><span class="hw">${Ue(e,s)}</span></div>`:y},le=(e,t,n)=>{let s=jt(e,t.sec);if(!s)return m`<div class="hint end done"><span class="label">End of the book</span></div>`;let r=t.sec.kind==="index"?`start ${ot(e,0)}`:Ue(e,s);return m`<div class="hint end" @click=${n.next}><span class="hw">${r}</span><span class="ar">↓</span></div>`},kn=(e,t,n,s)=>{let r=j(e.book),a=e.progress,i=Pe(r,e.book,a,s),{passes:h}=vt(r,e.book,a,s),o=h[h.length-1]||null,l=o&&o.rating,c=[...h].reverse().find(d=>d!==o&&d.rating);return m`<div class="book revw">
    ${ie(e,t,n)}
    <div class="label">${ot(e,s)} · review</div>
    <h1 class="rvt">${I(e,t,s,"rvt")}</h1>
    ${o?m`<div class="island thisread">
      <div class="label">This read</div>
      <div class="trn"><span><b>${Math.max(1,Math.round(o.mins))}</b> min</span><span><b>${Math.round(o.rate*100)}%</b> tapped</span><span><b>${o.speed?Math.round(o.speed):"\u2013"}</b> /min</span></div>
      ${o.keys.length?m`<div class="pchips">${o.keys.map(d=>m`<span class="gc">${nt(d,t,`tr.${d.key}`)}</span>`)}</div>`:y}
    </div>`:y}
    <div class="rate"><span class="label">This read felt</span>
      ${["easy","ok","hard"].map(d=>m`<button class="pick ${l===d?"on":""}" @click=${()=>n.rate(s,l===d?null:d,o&&o.ratingAt)}>${d}</button>`)}
    </div>
    ${c?m`<div class="lastrate label">last read: <span class="rt ${c.rating}">${c.rating}</span> · ${mt(c.start)}</div>`:y}
    <details class="words" ?open=${t.openReviews.has(s)} @toggle=${d=>n.reviewToggle(s,d.target.open)}>
      <summary><span class="label">Tapped in this chapter, all reads · ${i.length}</span></summary>
      <div class="rows">${i.length?i.map(d=>m`<div class="row"><div class="zh">${nt(d,t,`rv${s}.${d.key}`)}</div><div class="rp">${d.py}</div><div class="rg">${d.gloss}</div></div>`):m`<div class="none">Nothing tapped yet.</div>`}</div>
    </details>
    ${le(e,t,n)}
  </div>`},wn=(e,t,n)=>{let s=j(e.book),r=e.progress,a=R(s,r),i=r.position?Number(r.position.pos.split(".")[0]):null,h=l=>{let c=0,d=0;return s.blocks.forEach((u,g)=>{u.c===l&&u.b>=0&&(c+=u.hz,g<=a.far&&(d+=u.hz))}),c?d/c:0},o=s.blocks.reduce((l,c,d)=>l+(d<=a.far?c.hz:0),0);return m`<div class="book idx">
    ${ie(e,t,n)}
    <div class="label mark">zher</div>
    <h1 class="bt">${e.book.title}</h1>
    <div class="note">${e.book.chapters.length} chapters · ${s.totalHz.toLocaleString()} hanzi · ${ut(o,s.totalHz)} read</div>
    <div class="label section">Contents</div>
    <div class="island toc2">${e.book.chapters.map((l,c)=>{let d=h(c),{passes:u}=vt(s,e.book,r,c),g=([...u].reverse().find(f=>f.rating)||{}).rating;return m`<button class="tr2 ${c===i?"here":""}" @click=${()=>n.openSec({kind:"chapter",c,land:c===i?"pos":"top"},"up")}>
        <span class="tn label">${ae(e,c)??""}</span>
        <span class="tt">${I(e,t,c,"ix"+c)}</span>
        <span class="tm">${g?m`<span class="rt ${g}">${g}</span>`:y}${c===i?m`<span class="label hereL">here</span>`:y}</span>
        <span class="tb"><i style="width:${Math.round(d*100)}%"></i></span>
      </button>`})}</div>
    ${le(e,t,n)}
  </div>`},$n=(e,t,n,s)=>{let r=e.book.chapters[s];return m`<div class="book">
    ${ie(e,t,n)}
    <section class="chapter">
      <h2 data-pos="${s}.-1">${Fe(r.title,s,-1,t)}</h2>
      ${r.blocks.map((a,i)=>a.image?m`<figure data-pos="${s}.${i}"><img src=${a.image} width=${a.w} height=${a.h} alt="" draggable="false"></figure>`:m`<p data-pos="${s}.${i}">${Fe(a.tokens,s,i,t)}</p>`)}
    </section>
    ${le(e,t,n)}
  </div>`},yn=(e,t)=>{let n=j(e.book),{far:s}=R(n,e.progress),r=n.blocks.map((a,i)=>({b:a,n:i})).filter(a=>a.b.c===t);return!r.length||s<r[0].n?0:s>=r[r.length-1].n?1:(s-r[0].n+1)/r.length},An=(e,t,n)=>m`<div class="pane read sec-${t.sec.kind}" ?hidden=${t.view!=="read"} @scroll=${n.scroll} @click=${n.readerClick}>
  ${t.sec.kind==="index"?wn(e,t,n):t.sec.kind==="review"?kn(e,t,n,t.sec.c):$n(e,t,n,t.sec.c)}
</div>
${t.view==="read"&&t.sec.kind==="chapter"?m`<div class="rail" aria-hidden="true"><i></i><b style="top:${Math.round(yn(e,t.sec.c)*100)}%"></b></div>`:y}
<div class="fx"></div>
<div class="pull" aria-hidden="true"><span class="pt"></span><span class="pb"><i></i></span></div>`,Sn=(e,t)=>{let n=j(e.book).entryOf.get(t.zpop.key);return m`<div class="pop" role="status"><div class="py">${n.py}</div>${t.zpop.level===2?m`<div class="gl">${n.gloss}</div>`:y}</div>`},zn=(e,t)=>{if(t.zpop)return Sn(e,t);if(!t.active||t.view!=="read")return y;let[n,s,r]=t.active.at.split(".").map(Number),i=(s<0?e.book.chapters[n].title:e.book.chapters[n].blocks[s].tokens)[r];return m`<div class="pop" role="status"><div class="py">${i.py}</div>${t.active.level===2?m`<div class="gl">${i.gloss}</div>`:y}</div>`},Ke=(e,t,n,s)=>e?m`<div class="sent">
  <div class="sx">${re(e.tokens,n,s,e.at)}</div>
  <div class="label src">${I(t,n,e.c,s+"t",!0)}</div>
</div>`:y,Ye=(e,t,n)=>m`<span class="st ${t||""} ${n?"live":""}"><i></i>${e}</span>`,Mn=(e,t,n)=>{let s=j(e.book),r=m`<header class="chead"><span class="label">Cards</span><span class="label dim">${e.stream.length} in rotation</span></header>`,a=t.card;if(!a){let o=Object.keys(e.confidence).length>0;return m`<div class="pane page cards">${r}
      <div class="empty island">
        ${o?m`<div class="et">Nothing needs you right now.</div><div class="ed">Every word you've read is above the line. Read on and new ones join by themselves.</div>`:m`<div class="et">Cards come from what you've read.</div><div class="ed">Read a chapter, and the words you meet start turning up here.</div>`}
        <button class="btn main" @click=${()=>n.go("read")}>Read</button>
      </div>
    </div>`}let i=s.entryOf.get(a.key),h=a.stage>=2?se(s,e.book,e.progress.taps,a.key):null;return m`<div class="pane page cards">${r}
    <div class="card island stage${a.stage}" @click=${()=>a.stage===0&&n.reveal()}>
      <div class="ctop">
        <div class="steps">${Ye("pinyin",a.py,a.stage===1)}${Ye("meaning",null,a.stage===2)}</div>
        <button class="iknow" @click=${o=>{o.stopPropagation(),n.markKnown(a.key)}}>I know this</button>
      </div>
      <div class="face">
        <div class="zh">${i.t}</div>
        <div class="py ${a.stage>=1?"":"hide"}">${i.py}</div>
        <div class="gl ${a.stage>=2?"":"hide"}">${i.gloss}</div>
      </div>
      ${Ke(h,e,t,"cs")}
    </div>
    <div class="ask">
      ${a.stage===0?m`<div class="q label">Read it. Say it in your head.</div><button class="btn main wide" @click=${n.reveal}>Show pinyin</button>`:m`<div class="q label">${a.stage===1?"Pinyin":"Meaning"} · did you have it?</div>
          <div class="two"><button class="btn miss" @click=${()=>n.answer("miss")}>Missed</button><button class="btn main" @click=${()=>n.answer("got")}>Got it</button></div>`}
    </div>
  </div>`};var _n=(e,t)=>e.known?m`<span class="cf known">known</span>`:e.conf==null?y:m`<span class="cf ${e.state}"><span class="bar"><i style="width:${Math.round(e.conf*100)}%"></i><u style="left:${Math.round(t*100)}%"></u></span><span class="n">${Math.round(e.conf*100)}</span></span>`,Tn=(e,t,n)=>{let s=j(e.book),r=e.progress,{list:a,counts:i}=Be(s,r,e,t.dictSort),h=t.dictFilter.startsWith("bin:")?Number(t.dictFilter.slice(4)):null,o=c=>c.conf!=null&&Math.min(9,Math.floor(c.conf*10))===h,l=t.dictFilter==="all"?a:h!=null?a.filter(o):a.filter(c=>c.state===t.dictFilter);return m`<div class="pane page">
    <button class="back label" @click=${()=>n.go("stats")}>← Stats</button>
    <h1>Dictionary <span class="hc">${a.length}</span></h1>
    <div class="chips">${[["known","known"],["solid","solid"],["live","in rotation"]].map(([c,d])=>m`<button class="chip ${c} ${t.dictFilter===c?"on":""}" @click=${()=>n.dictFilter(t.dictFilter===c?"all":c)}><i></i>${d}<span>${i[c]}</span></button>`)}</div>
    ${h!=null?m`<div class="binline label">confidence ${h*10}–${h*10+9} · ${l.length} words <button @click=${()=>n.dictFilter("all")}>clear</button></div>`:y}
    <div class="sortline label">sort <button class="${t.dictSort==="weak"?"on":""}" @click=${()=>n.dictSort("weak")}>weakest</button><button class="${t.dictSort==="taps"?"on":""}" @click=${()=>n.dictSort("taps")}>most tapped</button></div>
    ${l.length?m`<div class="island">${l.map(c=>{let d=t.dictOpen===c.t.key,u=d?se(s,e.book,r.taps,c.t.key):null;return m`<div class="dict ${d?"open":""}" @click=${()=>n.dictOpen(d?null:c.t.key)}>
        <div class="zh">${nt(c.t,t,"dz"+c.t.key)}</div>
        <div class="mid"><div class="rp">${c.t.py}</div><div class="rg">${c.t.gloss}</div><div class="ct">${c.taps} ${c.taps===1?"tap":"taps"} · seen ${c.seen}</div></div>
        ${_n(c,e.threshold)}
        ${d?m`<div class="more">${Ke(u,e,t,"ds")}
          ${c.known?m`<div class="why label">${c.marked?"you marked it known":`never tapped in ${c.seen} reads`}</div><button class="btn" @click=${g=>{g.stopPropagation(),n.unmarkKnown(c.t.key)}}>Put in cards</button>`:m`<button class="btn" @click=${g=>{g.stopPropagation(),n.markKnown(c.t.key)}}>I know this</button>`}</div>`:y}
      </div>`})}</div>`:m`<div class="note">${a.length?"No words in this state.":"Nothing read yet."}</div>`}
  </div>`},En=(e,t)=>{let n=Ie(e),s=Math.max(1,...n.map(o=>o.n)),r=e.threshold,a=n.reduce((o,l)=>o+(l.lo+.1<=r?l.n-l.known:0),0),i=n.reduce((o,l)=>o+l.n,0),h=n.reduce((o,l)=>o+l.known,0);return m`<div class="island hist">
    <div class="hh"><span class="label">Confidence</span><span class="label dim">${i} words read</span></div>
    <div class="bars">
      ${n.map(o=>m`<button class="bin ${o.lo+.1<=r?"under":"over"}" ?disabled=${!o.n} @click=${()=>t.openDict("bin:"+o.i)} aria-label="${o.n} words at ${o.i*10} to ${o.i*10+9}">
        <span class="bn">${o.n||""}</span><span class="col" style="height:${Math.round(o.n/s*96)}px"><i class="kn" style="height:${o.n?o.known/o.n*100:0}%"></i></span></button>`)}
      <span class="line" style="left:${r*100}%"><span class="label">${Math.round(r*100)}</span></span>
    </div>
    <div class="axis label"><span>0</span><span>50</span><span>100</span></div>
    <div class="hl"><span><i class="under"></i>${a} below the line</span><span><i class="over"></i>${i-a-h} above</span><span><i class="kn"></i>${h} known</span></div>
    <button class="todict label" @click=${()=>t.openDict("all")}>Dictionary →</button>
  </div>`},Hn=(e,t,n)=>{let s=j(e.book),r=e.progress,a=je(s,e.book,r),i=Re(s,e.book,r,e),h=i.rows[i.next],o=Le(r,e.now||Date.now()),l=o.miss.pinyin+o.miss.meaning,c=(e.moved&&e.moved.up||[]).map(f=>s.entryOf.get(f)).filter(Boolean),d=a.left==null?null:a.left<1?`~${Math.max(1,Math.round(a.left*60))}m left`:`~${a.left.toFixed(1)}h left`,u=.4,g=De(r);return m`<div class="pane page stats">
    <h1>Stats</h1>
    <div class="island cover">
      <div class="label">Next up · ${I(e,t,h.c,"nx",!0)}</div>
      <div class="cbig">${Math.round(h.cov*100)}<span>%</span></div>
      <div class="cd">of its words you'd likely know, weighted by how often they come up.${h.unmet?` ${h.unmet} you haven't met yet.`:""}</div>
      <div class="covs">${i.rows.map(f=>m`<div class="cv ${f.c===i.next?"next":""}">
        <span class="t">${I(e,t,f.c,"cv"+f.c)}</span><span class="bar"><i style="width:${Math.round(f.cov*100)}%"></i><u style="left:${Math.round(e.threshold*100)}%"></u></span><span class="n">${Math.round(f.cov*100)}%</span></div>`)}</div>
    </div>
    ${En(e,n)}
    <div class="bookline label">${a.readHz}/${a.totalHz} hanzi · ${ut(a.readHz,a.totalHz)} of the book${d?` \xB7 ${d}`:""}</div>

    <div class="label section">Cards</div>
    <div class="island recall">
      <div class="label">Recall after a gap · last 30 days</div>
      <div class="cbig">${o.recall[1]?Math.round(100*o.recall[0]/o.recall[1]):"\u2013"}${o.recall[1]?m`<span>%</span>`:y}</div>
      <div class="cd">${o.recall[1]?`of words coming back on a later day, you had both pinyin and meaning first time. ${o.recall[0]} of ${o.recall[1]}.`:"Shows once a word comes back on a later day."}</div>
      <div class="rl"><div class="rh"><span class="label">Crossed the line from cards</span><span class="label dim">this week</span></div>
        <div class="rv"><b>${c.length}</b>${c.length?m`<span class="gchips">${c.map(f=>m`<span class="gc">${nt(f,t,"gr"+f.key)}</span>`)}</span>`:m`<span class="k">none yet</span>`}</div></div>
      ${l?m`<div class="rl"><div class="rh"><span class="label">Where misses fall</span><span class="label dim">${l} misses</span></div>
        <div class="split"><i class="sm" style="width:${100*o.miss.meaning/l}%"></i><i class="sp" style="width:${100*o.miss.pinyin/l}%"></i></div>
        <div class="sl"><span><i class="sm"></i>meaning ${Math.round(100*o.miss.meaning/l)}%</span><span><i class="sp"></i>pinyin ${Math.round(100*o.miss.pinyin/l)}%</span></div></div>`:y}
    </div>

    ${a.rows.length?m`
      <div class="label section">Chapters</div>
      <div class="island">${e.book.chapters.map((f,w)=>{let{passes:b}=vt(s,e.book,r,w),A=([...b].reverse().find(M=>M.rating)||{}).rating,S=[...b].reverse().find(M=>M.share>=.25)||b[b.length-1];return b.length?m`<div class="ch" @click=${()=>n.openChapter(w)}>
          <div class="chh"><span class="t">${I(e,t,w,"ch"+w)}</span><span class="cr">${A?m`<span class="rt ${A}">${A}</span>`:y}<span class="label">${b.length} ${b.length===1?"read":"reads"} →</span></span></div>
          <div class="chb"><span class="tr"><i style="width:${Math.round(S.rate/u*100)}%"></i></span><span class="n">${Math.round(S.rate*100)}%</span><span class="sp">${S.speed?`${Math.round(S.speed)}/min`:"\u2013"}</span></div>
        </div>`:m`<div class="ch unread"><div class="chh"><span class="t">${I(e,t,w,"ch"+w)}</span><span class="label dim">not read</span></div></div>`})}</div>
      ${a.stuck?m`<div class="label section">Still not sticking · ${I(e,t,a.stuck.c,"sk")}</div>
        <div class="stuckchips">${a.stuck.list.map(f=>m`<span class="sc"><b>${nt(f.tok,t,"sc"+f.tok.key)}</b><span>${f.tapped}/${f.seen}</span></span>`)}</div>`:y}
    `:m`<div class="note">Nothing read yet.</div>`}
    <div class="label section">Backup</div>
    <div class="island backup">
      <div class="bl ${g.warn&&e.storageOk?"warn":""}">${e.storageOk?g.text:"This browser isn't saving. Taps and place will be lost when it closes."}</div>
      <div class="two"><button class="btn main" @click=${n.exportIt}>Export</button><button class="btn" @click=${n.importStart}>Import</button></div>
    </div>
    ${a.sittings.length?m`
      <details class="words sits" ?open=${t.allSittings} @toggle=${f=>n.allSittings(f.target.open)}>
        <summary><span class="label">Sittings · ${a.sittings.length}</span></summary>
        <div class="rows">${a.sittings.map(f=>m`<div class="sit"><div class="stat-head"><span>${mt(f.start)}</span><span>${f.mins} min</span></div><div class="stat-sub">${f.sub}</div></div>`)}</div>
      </details>
    `:y}
  </div>`},Nn=(e,t,n)=>{let s=j(e.book),r=e.progress,a=t.chapter,{passes:i}=vt(s,e.book,r,a),h=oe(s,e.book,r,R(s,r)),o=h.find(g=>g.c===a),l=([...i].reverse().find(g=>g.rating)||{}).rating,c=Math.max(.1,...i.map(g=>g.rate)),d=i.map(g=>g.speed).filter(Boolean),u=Math.max(1,...d);return m`<div class="pane page">
    <button class="back label" @click=${()=>n.go("stats")}>← Stats</button>
    <h1>${I(e,t,a,"cht",!0)}</h1>
    <div class="note">${i.length} ${i.length===1?"read":"reads"}${l?` \xB7 last felt ${l}`:""}</div>
    ${i.length?m`
    <div class="island graph">
      <div class="hh"><span class="label">Tapped, each read</span><span class="label dim">lower = more known</span></div>
      <div class="gbars">${i.map((g,f)=>m`<div class="gb ${f===i.length-1?"last":""} ${g.share<.25?"part":""}">
        <span class="gv">${Math.round(g.rate*100)}%</span><span class="gcol" style="height:${Math.round(g.rate/c*84)}px"></span><span class="gx label">${f+1}</span><span class="gr ${g.rating||""}">${g.rating||"\xB7"}</span></div>`)}</div>
      ${d.length?m`<div class="hh sp2"><span class="label">Speed</span><span class="label dim">hanzi / min</span></div>
      <div class="gspeed">${i.map(g=>m`<span class="gs">${g.speed?m`<i style="width:${Math.round(g.speed/u*100)}%"></i><b>${Math.round(g.speed)}</b>`:m`<b class="dim">–</b>`}</span>`)}</div>`:y}
    </div>
    <div class="label section">Each read</div>
    ${[...i].map((g,f)=>({x:g,i:f})).reverse().map(({x:g,i:f})=>m`<div class="island pass">
      <div class="stat-head"><span>Read ${f+1} · ${mt(g.start)}</span><span class="ph2">${g.rating?m`<span class="rt ${g.rating}">${g.rating}</span>`:y}${Math.max(1,Math.round(g.mins))} min</span></div>
      <div class="stat-sub">${g.share<.98?`${Math.round(g.share*100)}% of the chapter \xB7 `:""}${g.speed?`${Math.round(g.speed)}/min \xB7 `:""}${Math.round(g.rate*100)}% tapped · ${g.keys.length} words</div>
      ${g.keys.length?m`<div class="pchips">${g.keys.map(w=>m`<span class="gc">${nt(w,t,`p${f}.${w.key}`)}</span>`)}</div>`:y}
      ${f===0&&o?m`<div class="tri">${[["new words",o.fresh],["tapped before",o.again],["never tapped",o.known]].map(([w,b])=>m`<div><div class="n">${ut(b[1],b[0])}</div><div class="k">${w}</div><div class="k">${b[1]}/${b[0]}</div></div>`)}</div>`:y}
    </div>`)}`:m`<div class="note">Not read yet.</div>`}
  </div>`},On=(e,t,n)=>m`<div class="pane page first">
  <div class="mark label">zher</div>
  <h1>Put your book on this phone</h1>
  <div class="note">It stays here. Nothing is uploaded, and it all works offline.</div>
  <div class="island step ${e.book?"done":"live"}">
    <div class="sh"><span class="label">1 · Book</span>${e.book?m`<span class="label ok">loaded</span>`:y}</div>
    ${e.book?m`<div class="sb"><b>${e.book.title}</b><span>${e.book.chapters.length} chapters · ${j(e.book).totalHz.toLocaleString()} hanzi</span></div>`:m`<div class="sb"><span>The book file from home: one .json.</span></div>
        <button class="btn main wide" ?disabled=${t.busy==="book"} @click=${n.pickBook}>${t.busy==="book"?"Loading\u2026":"Choose book file"}</button>`}
  </div>
  <div class="island step ${e.book?"live":"wait"}">
    <div class="sh"><span class="label">2 · Progress</span><span class="label dim">optional</span></div>
    <div class="sb"><span>Coming from the stitch reader? Import its export to carry over your taps, cards and place.</span></div>
    <button class="btn wide" ?disabled=${!e.book||t.busy==="import"} @click=${n.importStart}>${t.busy==="import"?"Reading\u2026":"Import progress"}</button>
  </div>
  <button class="btn main wide start" ?disabled=${!e.book} @click=${n.begin}>Start reading</button>
</div>`,Cn=(e,t,n)=>m`<nav class="dock ${t.dockAway&&t.view==="read"?"away":""}">
  <button class="${t.view==="read"?"on":""}" @click=${()=>n.go("read")}>Read</button>
  <button class="${t.view==="cards"?"on":""}" @click=${()=>n.go("cards")}>Cards</button>
  <button class="${t.view==="stats"||t.view==="dict"||t.view==="chapter"?"on":""}" @click=${()=>n.go("stats")}>Stats</button>
</nav>`,We=(e,t,n)=>{if(!t.confirm)return y;let s=t.confirm;return m`<div class="scrim" @click=${n.cancelConfirm}></div>
  <div class="modal">
    <div class="mt">Reset to this backup?</div>
    <div class="md">From ${s.exportedAt?mt(Date.parse(s.exportedAt)):"an unknown date"} · ${s.taps} taps · ${s.answers} answers. Everything on this phone since then is lost.</div>
    <div class="two"><button class="btn" @click=${n.cancelConfirm}>Cancel</button><button class="btn danger" @click=${n.confirmImport}>Reset</button></div>
  </div>`},qe=e=>e.toast?m`<div class="toast" role="status"><span>${e.toast.text}</span>${e.toast.action?m`<button @click=${e.toast.action.fn}>${e.toast.action.label}</button>`:y}</div>`:y;function Ve(e,t,n){return!e.book||t.view==="first"?m`${On(e,t,n)}${We(e,t,n)}${qe(t)}`:m`
    ${An(e,t,n)}
    ${t.view==="cards"?Mn(e,t,n):t.view==="dict"?Tn(e,t,n):t.view==="stats"?Hn(e,t,n):t.view==="chapter"?Nn(e,t,n):y}
    ${zn(e,t)}
    ${Cn(e,t,n)}${We(e,t,n)}${qe(t)}`}var Ge=`
.ph{
  color-scheme: dark;
  --sans: "IBM Plex Sans", "Noto Sans SC", "PingFang SC", system-ui, -apple-system, sans-serif;
  --zh: "Noto Sans SC", "PingFang SC", "Hiragino Sans GB", system-ui, sans-serif;
  --mono: "IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace;
  --void: #111214; --island: #1a1c20; --island-2: #202227; --line: #2a2d33; --line-2: #23262b;
  --text: #d9d7d0; --bright: #efede6; --muted: #84858a; --dim: #5d5f64;
  --inv: #e9e7df; --inv-ink: #15161a;
  --active: #e2b04a; --active-ink: #17140c;
  --known: #7fa6a0; --got: #8fb08a; --got-wash: #1f2a20; --miss: #d0806a; --miss-wash: #2d1f1b;
  --float: 0 1px 0 rgb(255 255 255 / .04) inset, 0 18px 40px -16px rgb(0 0 0 / .85);
  position: relative; width: 100%; height: 820px; overflow: hidden; border-radius: 34px;
  background: var(--void); color: var(--text); font-family: var(--sans);
  -webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none; user-select: none; touch-action: manipulation;
  box-shadow: 0 0 0 1px rgb(255 255 255 / .06), 0 30px 70px -30px rgb(0 0 0 / .8);
}
.ph *{ box-sizing: border-box }
.ph button{ font: inherit; color: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent }
.ph button:disabled{ opacity: .4; cursor: default }
[hidden]{ display: none !important }
.label{ font: 500 11px/1.4 var(--mono); letter-spacing: .14em; text-transform: uppercase; color: var(--muted) }
.ph button.label{ font: 500 11px/1.4 var(--mono); letter-spacing: .14em; text-transform: uppercase }
.label.dim{ color: var(--dim) } .label.ok{ color: var(--got) }

/* panes: the reader keeps its own scroll while hidden; pages scroll on their own */
.pane{ position: absolute; inset: 0; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none }
.pane::-webkit-scrollbar{ display: none }
.page{ padding: 58px 20px 120px }
.page h1{ font: 700 24px/1.35 var(--sans); margin: 0 0 6px; color: var(--bright) }
.note{ font: 12px/1.6 var(--mono); color: var(--muted); margin-bottom: 20px }
.island{ background: var(--island); border: 1px solid var(--line); border-radius: 16px; padding: 4px 16px; margin-bottom: 14px }
.section{ margin: 26px 0 8px }

.btn{ height: 50px; padding: 0 18px; border: 1px solid var(--line); border-radius: 12px; background: transparent; color: var(--text);
  font: 600 12px/1 var(--mono) !important; letter-spacing: .12em; text-transform: uppercase; transition: background .15s, transform .08s }
.btn:active{ transform: scale(.98) }
.btn.main{ background: var(--inv); border-color: var(--inv); color: var(--inv-ink) }
.btn.miss{ color: var(--miss); border-color: color-mix(in oklab, var(--miss) 35%, var(--line)) }
.btn.danger{ background: var(--miss); border-color: var(--miss); color: var(--inv-ink) }
.btn.wide{ width: 100% }
.two{ display: flex; gap: 10px } .two .btn{ flex: 1 }

/* ================= reader ================= */
.book{ max-width: 620px; margin: 0 auto; padding: 64px 22px 45vh }
.chapter{ margin-bottom: 40px }
.book h2{ font: 700 24px/1.6 var(--zh); margin: 0 0 32px; color: var(--bright) }
.book p{ font: 400 22px/2.05 var(--zh); margin: 0 0 26px; letter-spacing: .01em }
.w{ cursor: pointer; border-radius: 4px; padding: .22em 0; -webkit-box-decoration-break: clone; box-decoration-break: clone }
.w.on{ background: var(--active); color: var(--active-ink) }
.z{ cursor: pointer; border-radius: 3px; -webkit-box-decoration-break: clone; box-decoration-break: clone; font-family: var(--zh); text-transform: none; letter-spacing: normal }
.z.on{ background: var(--active); color: var(--active-ink) }
figure{ margin: 34px 0 }
figure img{ display: block; width: 100%; max-width: 340px; height: auto; margin: 0 auto; border-radius: 14px; filter: brightness(.86); background: var(--island) }

.pop{ position: absolute; z-index: 60; pointer-events: none; max-width: min(82%, 340px); padding: 9px 14px 10px;
  background: var(--island-2); border: 1px solid var(--line); border-radius: 12px; box-shadow: 0 8px 26px rgb(0 0 0 / .5) }
.pop .py{ font: 700 20px/1.3 var(--sans); color: var(--bright); white-space: nowrap }
.pop .gl{ font: 16px/1.4 var(--sans); color: var(--text); margin-top: 3px }


.rate{ display: flex; align-items: center; gap: 8px; margin-bottom: 12px }
.rate .label{ flex: 1 }
.pick{ min-width: 56px; height: 44px; padding: 0 10px; border: 1px solid var(--line); border-radius: 11px; background: transparent; color: var(--muted) !important; font: 500 12px/1 var(--mono) !important }
.pick.on{ background: var(--inv); border-color: var(--inv); color: var(--inv-ink) !important; font-weight: 700 !important }
details.words{ padding: 0 18px; background: var(--island); border: 1px solid var(--line); border-radius: 16px }
details.words summary{ display: flex; align-items: center; justify-content: space-between; min-height: 50px; cursor: pointer; list-style: none }
details.words summary::-webkit-details-marker{ display: none }
details.words summary::after{ content: "+"; font: 500 18px/1 var(--mono); color: var(--muted) }
details.words[open] summary::after{ content: "\u2212" }
.rows{ padding-bottom: 8px }
.none{ font-size: 15px; color: var(--muted); padding: 12px 0; border-top: 1px solid var(--line) }
.row{ display: grid; grid-template-columns: 92px 1fr; gap: 2px 14px; padding: 10px 0; border-top: 1px solid var(--line) }
.row .zh{ font: 600 21px/1.3 var(--zh); grid-row: span 2 }
.row .rp{ font-size: 15px; font-weight: 600; color: var(--bright) }
.row .rg{ font-size: 14px; line-height: 1.4; color: var(--muted) }

/* ================= reader sections ================= */
.book{ padding-bottom: 130px }
.pane.read{ will-change: transform }
.ghost{ pointer-events: none; z-index: 5; background: var(--void) }
.fx{ display: contents }
.hint{ display: flex; align-items: center; gap: 10px; border: 0; background: none; padding: 0; color: var(--dim) }
.hint.top{ flex-direction: column; gap: 8px; margin: -44px 0 28px; padding: 8px 0 14px; cursor: pointer; text-align: center }
.hint.end{ flex-direction: column; align-items: center; gap: 8px; margin-top: 64px; padding: 18px 0 8px; cursor: pointer; text-align: center }
.hint .hw{ font: 500 11px/1 var(--mono); letter-spacing: .16em; text-transform: uppercase; color: var(--dim) }
.hint .ar{ font: 400 18px/1 var(--mono); color: var(--dim) }
.hint.end.done{ border-top-style: solid }

/* the pull: a bar that fills as you drag past the end */
.pull{ position: absolute; z-index: 25; left: 50%; transform: translateX(-50%); width: 168px; display: none; flex-direction: column; align-items: center; gap: 7px;
  padding: 9px 12px 10px; background: var(--island); border: 1px solid var(--line); border-radius: 12px; box-shadow: var(--float); pointer-events: none }
.pull.on{ display: flex }
.pull.up{ bottom: 84px } .pull.down{ top: 16px }
.pull .pt{ font: 500 10.5px/1 var(--mono); letter-spacing: .12em; text-transform: uppercase; color: var(--muted) }
.pull .pb{ width: 100%; height: 3px; border-radius: 2px; background: var(--line) }
.pull .pb i{ display: block; height: 100%; border-radius: 2px; background: var(--muted) }
.pull.ready .pt{ color: var(--bright) } .pull.ready .pb i{ background: var(--inv) }

/* the rail: how far down this chapter, and the furthest you've been */
.rail{ position: absolute; z-index: 15; right: 7px; top: 64px; bottom: 112px; width: 3px; border-radius: 2px; background: var(--line-2); pointer-events: none }
.rail i{ position: absolute; left: 0; right: 0; top: 0; height: 0; border-radius: 2px; background: var(--muted) }
.rail b{ position: absolute; left: -3px; width: 9px; height: 2px; margin-top: -1px; border-radius: 1px; background: var(--active) }

/* index */
.idx{ padding-top: 70px }
.idx .mark{ color: var(--active); margin-bottom: 18px }
.bt{ font: 700 34px/1.25 var(--zh); color: var(--bright); margin: 0 0 6px }
.toc2{ padding: 2px 14px }
.tr2{ display: grid; grid-template-columns: 22px 1fr auto; grid-template-rows: auto auto; gap: 8px 10px; align-items: center; width: 100%; padding: 13px 0 12px;
  border: 0; border-top: 1px solid var(--line); background: none; text-align: left }
.tr2:first-child{ border-top: 0 }
.tr2 .tn{ color: var(--dim) }
.tr2 .tt{ font: 17px/1.3 var(--zh); color: var(--text) }
.tr2.here .tt{ color: var(--bright); font-weight: 700 }
.tr2 .tm{ display: inline-flex; align-items: center; gap: 8px }
.hereL{ color: var(--active) }
.tr2 .tb{ grid-column: 2 / -1; height: 3px; border-radius: 2px; background: var(--line-2) }
.tr2 .tb i{ display: block; height: 100%; border-radius: 2px; background: var(--muted) }
.tr2.here .tb i{ background: var(--text) }

/* review screen */
.revw{ padding-top: 64px }
.rvt{ font: 700 26px/1.4 var(--zh); color: var(--bright); margin: 8px 0 22px }
.thisread{ padding: 14px 16px; margin-bottom: 22px }
.trn{ display: flex; gap: 20px; margin-top: 10px; font: 12px/1 var(--mono); color: var(--muted) }
.trn b{ font: 700 22px/1 var(--sans); color: var(--bright); margin-right: 4px }
.revw .rate{ margin-bottom: 8px }
.revw details.words{ margin-top: 18px }

/* ================= cards ================= */
.cards{ display: flex; flex-direction: column; padding-bottom: 96px; overflow: hidden }
.chead{ display: flex; justify-content: space-between; align-items: baseline; padding: 0 4px 14px }
.card{ flex: 1; min-height: 0; display: flex; flex-direction: column; padding: 16px 18px 18px; margin: 0; box-shadow: var(--float); overflow: hidden }
.card.stage0{ cursor: pointer }
.ctop{ display: flex; justify-content: space-between; align-items: center }
.steps{ display: flex; gap: 14px }
.st{ display: inline-flex; align-items: center; gap: 7px; font: 500 10.5px/1 var(--mono); letter-spacing: .14em; text-transform: uppercase; color: var(--dim) }
.st i{ width: 7px; height: 7px; border-radius: 2px; border: 1px solid currentColor }
.st.live{ color: var(--text) }
.st.got{ color: var(--got) } .st.got i{ background: var(--got) }
.st.miss{ color: var(--miss) } .st.miss i{ background: var(--miss) }
.iknow{ border: 0; background: none; padding: 8px 0 8px 12px; font: 500 10.5px/1 var(--mono) !important; letter-spacing: .14em; text-transform: uppercase; color: var(--dim) !important }
.iknow:hover{ color: var(--muted) !important }
.face{ flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 0 }
.face .zh{ font: 700 68px/1.25 var(--zh); color: var(--bright); overflow-wrap: anywhere; transition: font-size .2s }
.stage2 .face .zh{ font-size: 52px }
.face .py{ font: 600 24px/1.3 var(--sans); color: var(--bright); margin-top: 14px; transition: opacity .18s }
.face .gl{ font: 400 18px/1.4 var(--sans); color: var(--text); margin-top: 6px; transition: opacity .18s }
.face .hide{ opacity: 0; visibility: hidden }
.sent{ border-top: 1px solid var(--line); padding-top: 14px; margin-top: 8px }
.sx{ font: 400 19px/1.85 var(--zh); color: var(--text) }
.sx b{ font-weight: 400; background: var(--active); color: var(--active-ink); border-radius: 4px; padding: .12em 0 }
.src{ margin-top: 8px; color: var(--dim) }
.ask{ padding-top: 14px }
.ask .q{ text-align: center; margin-bottom: 10px }
.ask .btn{ height: 56px }
.empty{ padding: 22px 20px 20px; margin-top: 30%; text-align: left }
.empty .et{ font: 600 18px/1.4 var(--sans); color: var(--bright) }
.empty .ed{ font-size: 14px; line-height: 1.55; color: var(--muted); margin: 6px 0 18px }

/* ================= dictionary ================= */
.dict{ display: grid; grid-template-columns: 70px 1fr 64px; gap: 0 12px; align-items: center; padding: 11px 0; border-top: 1px solid var(--line); cursor: pointer }
.dict:first-child{ border-top: 0 }
.dict .zh{ font: 600 20px/1.3 var(--zh); overflow-wrap: anywhere }
.dict .rp{ font-size: 15px; font-weight: 600; color: var(--bright) }
.dict .rg{ font-size: 14px; line-height: 1.4; color: var(--muted) }
.dict .ct{ font: 11px/1.6 var(--mono); color: var(--dim); margin-top: 2px }
.cf{ display: flex; flex-direction: column; align-items: flex-end; gap: 5px }
.cf .bar{ position: relative; width: 52px; height: 4px; border-radius: 2px; background: var(--line) }
.cf .bar i{ position: absolute; inset: 0 auto 0 0; border-radius: 2px; background: var(--muted) }
.cf.live .bar i{ background: var(--active) }
.cf.solid .bar i{ background: var(--got) }
.cf .bar u{ position: absolute; top: -3px; bottom: -3px; width: 1px; background: var(--dim) }
.cf .n{ font: 11px/1 var(--mono); color: var(--muted) }
.cf.known{ font: 500 10.5px/1 var(--mono); letter-spacing: .12em; text-transform: uppercase; color: var(--known) }
.dict .more{ grid-column: 1 / -1; padding: 10px 0 4px; display: grid; gap: 12px }
.dict .more .sent{ margin-top: 0; padding-top: 10px; border-top: 1px dashed var(--line) }
.dict .more .why{ color: var(--dim) }
.dict .more .btn{ height: 42px; justify-self: start }

/* dictionary filters */
.back{ border: 0; background: none; padding: 0; margin: -18px 0 14px; display: block; color: var(--muted) }
.chips{ display: flex; flex-wrap: wrap; gap: 5px; margin: 10px 0 10px }
.chip{ display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 9px; white-space: nowrap; border: 1px solid var(--line); border-radius: 10px; background: none;
  font: 500 10.5px/1 var(--mono) !important; letter-spacing: .04em; text-transform: uppercase; color: var(--muted) !important }
.chip i{ width: 7px; height: 7px; border-radius: 2px; background: var(--c) }
.page h1 .hc{ font: 500 14px/1 var(--mono); color: var(--dim); margin-left: 6px }
.chip span{ color: var(--dim) }
.chip.on{ background: var(--island-2); border-color: var(--muted); color: var(--bright) !important }
.chip.on span{ color: var(--muted) }
.known{ --c: var(--known) } .solid{ --c: var(--got) } .live{ --c: var(--active) } .ahead{ --c: var(--line) }
.sortline{ display: flex; gap: 12px; align-items: center; margin-bottom: 12px; color: var(--dim) }
.sortline button{ border: 0; background: none; padding: 4px 0; font: inherit !important; letter-spacing: inherit; text-transform: inherit; color: var(--dim) !important }
.sortline button.on{ color: var(--text) !important }

/* ================= stats ================= */
.big{ font: 700 44px/1 var(--sans); color: var(--bright); letter-spacing: -.02em; font-variant-numeric: tabular-nums }
.todict{ display: block; width: 100%; margin-top: 8px; padding: 10px 0 2px; border: 0; background: none; text-align: right; color: var(--muted) }

/* coverage: the hero */
.cover{ padding: 18px 18px 14px; margin-top: 10px }
.cbig{ font: 700 64px/1 var(--sans); color: var(--bright); letter-spacing: -.03em; margin: 14px 0 8px; font-variant-numeric: tabular-nums }
.cbig span{ font-size: 28px; font-weight: 500; color: var(--muted); margin-left: 2px }
.cd{ font-size: 14px; line-height: 1.5; color: var(--muted); max-width: 30ch }
.covs{ margin-top: 16px; border-top: 1px solid var(--line); padding-top: 6px }
.cv{ display: grid; grid-template-columns: 1fr 112px 40px; gap: 12px; align-items: center; padding: 7px 0 }
.cv .t{ font: 15px/1.3 var(--zh); color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis }
.cv.next .t{ color: var(--bright); font-weight: 600 }
.cv .bar{ position: relative; height: 5px; border-radius: 3px; background: var(--line-2) }
.cv .bar i{ position: absolute; inset: 0 auto 0 0; border-radius: 3px; background: var(--muted) }
.cv.next .bar i{ background: var(--text) }
.cv .bar u{ position: absolute; top: -3px; bottom: -3px; width: 1px; background: var(--dim) }
.cv .n{ font: 12px/1 var(--mono); color: var(--muted); text-align: right; font-variant-numeric: tabular-nums }
.cv.next .n{ color: var(--bright) }

/* histogram: 10 fixed bins, any book size */
.hist{ padding: 16px 18px 12px }
.hh{ display: flex; justify-content: space-between; margin-bottom: 14px }
.bars{ position: relative; display: grid; grid-template-columns: repeat(10, 1fr); gap: 4px; height: 120px; align-items: end }
.bin{ position: relative; height: 100%; padding: 0; border: 0; background: none; display: flex; flex-direction: column; justify-content: flex-end; align-items: stretch }
.bin:disabled{ opacity: 1 !important }
.bin .col{ position: relative; display: flex; flex-direction: column; justify-content: flex-start; min-height: 2px; border-radius: 4px 4px 2px 2px; overflow: hidden; background: var(--c) }
.bin.under{ --c: var(--active) } .bin.over{ --c: var(--got) }
.bin .kn{ display: block; width: 100%; background: var(--known) }
.bin .bn{ font: 10px/1 var(--mono); color: var(--dim); text-align: center; margin-bottom: 5px; pointer-events: none }
.bin:active .col{ filter: brightness(1.15) }
.bars .line{ position: absolute; top: -4px; bottom: -9px; width: 0; border-left: 1px dashed var(--muted); transform: translateX(-2px) }
.bars .line .label{ position: absolute; bottom: -9px; left: 0; transform: translateX(-50%); font-size: 10px; color: var(--text); letter-spacing: .04em }
.axis{ display: flex; justify-content: space-between; margin-top: 10px; color: var(--dim); font-size: 10px }
.hl{ display: flex; flex-wrap: wrap; gap: 6px 16px; margin-top: 14px; font: 11.5px/1.4 var(--mono); color: var(--muted) }
.hl i{ display: inline-block; width: 7px; height: 7px; border-radius: 2px; margin-right: 7px; background: var(--c) }
.hl i.under{ --c: var(--active) } .hl i.over{ --c: var(--got) } .hl i.kn{ --c: var(--known) }
/* cards: recall after a gap */
.recall{ padding: 18px 18px 6px }
.rl{ border-top: 1px solid var(--line); padding: 12px 0; margin-top: 14px }
.rl + .rl{ margin-top: 0 }
.rh{ display: flex; justify-content: space-between; margin-bottom: 8px }
.rv{ display: flex; align-items: center; gap: 12px }
.rv > b{ font: 700 26px/1 var(--sans); color: var(--bright); font-variant-numeric: tabular-nums }
.rv .k{ font: 12px/1 var(--mono); color: var(--dim) }
.gchips, .pchips{ display: flex; flex-wrap: wrap; gap: 6px }
.pchips{ margin-top: 10px }
.gc{ padding: 5px 9px; border: 1px solid var(--line); border-radius: 9px; font: 600 16px/1.2 var(--zh); color: var(--bright) }
.split{ display: flex; gap: 3px; height: 6px }
.split i{ display: block; height: 100%; border-radius: 3px }
.split .sm, .sl i.sm{ background: var(--miss) } .split .sp, .sl i.sp{ background: color-mix(in oklab, var(--miss) 45%, var(--line)) }
.sl{ display: flex; gap: 16px; margin-top: 8px; font: 11.5px/1.4 var(--mono); color: var(--muted) }
.sl i{ display: inline-block; width: 7px; height: 7px; border-radius: 2px; margin-right: 7px }

/* chapters list + one chapter */
.cr{ display: inline-flex; align-items: center; gap: 10px }
.ch.unread{ cursor: default } .ch.unread .chh{ margin-bottom: 0 } .ch.unread .t{ color: var(--muted) }
.graph{ padding: 16px 18px }
.gbars{ display: flex; gap: 8px; align-items: flex-end; height: 144px; margin-top: 6px }
.gb{ flex: 1; max-width: 56px; display: flex; flex-direction: column; align-items: stretch; justify-content: flex-end; gap: 5px }
.gv{ font: 11px/1 var(--mono); color: var(--muted); text-align: center }
.gcol{ display: block; min-height: 2px; border-radius: 4px 4px 2px 2px; background: var(--muted) }
.gb.last .gcol{ background: var(--text) } .gb.last .gv{ color: var(--bright) }
.gb.part{ opacity: .45 }
.gx{ text-align: center; color: var(--dim) }
.sp2{ margin-top: 18px; margin-bottom: 8px }
.gspeed{ display: flex; gap: 8px }
.gs{ flex: 1; max-width: 56px; position: relative; height: 22px; border-radius: 5px; background: var(--line-2); overflow: hidden; display: flex; align-items: center; justify-content: center }
.gs i{ position: absolute; inset: 0 auto 0 0; background: var(--line) }
.gs b{ position: relative; font: 500 11px/1 var(--mono); color: var(--text) } .gs b.dim{ color: var(--dim) }
.pass{ padding: 12px 16px 14px }
.pass .tri{ margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--line) }
.binline{ display: flex; gap: 12px; align-items: center; margin: -2px 0 10px; color: var(--text) }
.binline button{ border: 0; background: none; padding: 4px 0; font: inherit !important; letter-spacing: inherit; text-transform: inherit; color: var(--active) !important }
.bookline{ text-align: center; color: var(--dim); margin: 4px 0 0 }
.duo{ display: grid; grid-template-columns: 1fr 1fr; padding: 18px }
.duo .big{ font-size: 34px; margin-bottom: 8px }
.duo .k{ font: 11px/1.6 var(--mono); color: var(--dim); margin-top: 2px }
.ch{ padding: 13px 0; border-top: 1px solid var(--line); cursor: pointer }
.ch:first-child{ border-top: 0 }
.chh{ display: flex; justify-content: space-between; align-items: center; margin-bottom: 9px }
.chh .t{ font: 600 16px/1.3 var(--zh); color: var(--bright) }
.rt{ font: 500 10px/1 var(--mono); letter-spacing: .12em; text-transform: uppercase; color: var(--muted); padding: 5px 7px; border: 1px solid var(--line); border-radius: 7px }
.chb{ display: grid; grid-template-columns: 1fr 38px 52px; gap: 10px; align-items: center }
.chb .tr{ height: 5px; border-radius: 3px; background: var(--line-2); overflow: hidden }
.chb .tr i{ display: block; height: 100%; border-radius: 3px; background: var(--text) }
.chb .n, .chb .sp{ font: 12px/1 var(--mono); color: var(--text); text-align: right }
.chb .sp{ color: var(--muted) }
.ch .tri{ margin-top: 12px }
.stuckchips{ display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px }
.sc{ display: inline-flex; align-items: baseline; gap: 8px; padding: 9px 12px; background: var(--island); border: 1px solid var(--line); border-radius: 11px }
.sc b{ font: 600 19px/1 var(--zh); color: var(--bright) }
.sc span{ font: 11px/1 var(--mono); color: var(--active) }
.sit{ padding: 11px 0; border-top: 1px solid var(--line) }
.sit:first-of-type{ border-top: 0 }

.stat-row{ padding: 12px 0; border-top: 1px solid var(--line) }
.stat-row:first-child{ border-top: 0 }
.stat-head{ display: flex; justify-content: space-between; gap: 12px; font-size: 15px; font-weight: 600; color: var(--bright) }
.stat-head span:last-child{ font: 12px/1.7 var(--mono); color: var(--muted); font-weight: 400; white-space: nowrap }
.stat-sub{ font: 12px/1.7 var(--mono); color: var(--muted); margin-top: 3px }
.tri{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 8px }
.tri .n{ font-size: 17px; font-weight: 600; color: var(--bright) }
.tri .k{ font: 10px/1.5 var(--mono); color: var(--muted) }
.stuck{ display: flex; justify-content: space-between; align-items: baseline; padding: 9px 0; border-top: 1px solid var(--line); font: 18px/1.4 var(--zh) }
.stuck:first-child{ border-top: 0 }
.stuck span{ font: 12px/1 var(--mono); color: var(--muted) }

/* ================= first run ================= */
.first{ display: flex; flex-direction: column; padding-top: 72px; padding-bottom: 28px }
.first .mark{ color: var(--active); margin-bottom: 18px }
.first h1{ font-size: 26px }
.step{ padding: 16px; margin-bottom: 12px; transition: opacity .2s }
.step.wait{ opacity: .45 }
.step .sh{ display: flex; justify-content: space-between; margin-bottom: 8px }
.step .sb{ display: grid; gap: 2px; font-size: 14px; line-height: 1.5; color: var(--muted); margin-bottom: 14px }
.step .sb b{ font: 600 18px/1.4 var(--zh); color: var(--bright) }
.step.done .sb{ margin-bottom: 0 }
.first .start{ margin-top: auto; height: 56px }

/* ================= chrome ================= */
.dock{ position: absolute; z-index: 30; left: 50%; bottom: 18px; transform: translateX(-50%); display: flex; gap: 4px; padding: 5px;
  background: var(--island); border: 1px solid var(--line); border-radius: 16px; box-shadow: var(--float);
  transition: transform .42s cubic-bezier(.16,1,.3,1), opacity .32s }
.dock.away{ transform: translate(-50%, calc(100% + 26px)); opacity: 0; pointer-events: none }
@media (prefers-reduced-motion: reduce){ .dock{ transition: none } }
.dock button{ height: 42px; min-width: 74px; padding: 0 12px; border: 0; border-radius: 11px; background: none; color: var(--muted);
  font: 600 11.5px/1 var(--mono); letter-spacing: .14em; text-transform: uppercase; transition: background .15s, color .15s }
.dock button.on{ background: var(--inv); color: var(--inv-ink) }

.scrim{ position: absolute; inset: 0; z-index: 35; background: rgb(0 0 0 / .45) }
@keyframes up{ from{ transform: translateY(10px); opacity: 0 } }
.lastrate{ display: flex; align-items: center; gap: 8px; margin: -2px 0 12px; color: var(--dim) }
.rt.easy{ color: var(--got); border-color: color-mix(in oklab, var(--got) 35%, var(--line)) }
.rt.hard{ color: var(--miss); border-color: color-mix(in oklab, var(--miss) 35%, var(--line)) }
.gr{ font: 500 9.5px/1 var(--mono); letter-spacing: .08em; text-transform: uppercase; text-align: center; color: var(--dim) }
.gr.easy{ color: var(--got) } .gr.hard{ color: var(--miss) } .gr.ok{ color: var(--muted) }
.ph2{ display: inline-flex; align-items: center; gap: 10px }
.ph2 .rt{ font: 500 10px/1 var(--mono) !important }
.sits{ margin-bottom: 14px } .sits .sit:first-child{ border-top: 1px solid var(--line) }
.backup{ padding: 14px 16px 16px }
.bl{ font: 12px/1.6 var(--mono); color: var(--muted); margin-bottom: 12px }
.bl.warn{ color: var(--active) }

.modal{ position: absolute; z-index: 40; left: 16px; right: 16px; top: 50%; transform: translateY(-50%); padding: 20px 18px 18px;
  background: var(--island); border: 1px solid var(--line); border-radius: 18px; box-shadow: var(--float) }
.mt{ font: 600 18px/1.4 var(--sans); color: var(--bright) }
.md{ font-size: 14px; line-height: 1.55; color: var(--muted); margin: 6px 0 18px }

.toast{ position: absolute; z-index: 50; left: 16px; right: 16px; top: 14px; display: flex; align-items: center; gap: 12px; padding: 12px 14px 12px 16px;
  background: var(--island-2); border: 1px solid var(--line); border-radius: 14px; box-shadow: var(--float); font-size: 14px; color: var(--text); animation: up .18s ease-out }
.toast span{ flex: 1 }
.toast button{ border: 0; background: none; padding: 4px 0; font: 600 11.5px/1 var(--mono); letter-spacing: .14em; text-transform: uppercase; color: var(--active) }
@keyframes down{ from{ transform: translateY(-10px); opacity: 0 } }
.toast{ animation-name: down }
`;function Xe(e,t,{on:n=()=>{},backMotion:s="slide"}={}){let r=matchMedia("(prefers-reduced-motion: reduce)").matches,a=document.createElement("style");a.textContent=Ge;let i=document.createElement("div");i.className="ph",e.append(a,i);let h=t,o={view:h.book?h.mode==="cards"?"cards":"read":"first",sec:{kind:"index"},active:null,zpop:null,openReviews:new Set,card:null,lastKey:null,menu:!1,confirm:null,toast:null,busy:null,dictSort:"weak",dictOpen:null,dictFilter:"all",statOpen:null,allSittings:!1},l=!1,c=null,d=null,u=0,g=!1,f=0,w=null,b=()=>i.querySelector(".pane.read"),A=()=>{l=!1,x(),te(Ve(h,o,qt),i),P()},S=()=>{l||(l=!0,requestAnimationFrame(A))},M=(p,v)=>{let k;try{k=n(p,v)}catch(z){return C(z.message),Promise.resolve()}return Promise.resolve(k).then(z=>(typeof z=="string"&&C(z),z),z=>{C(z&&z.message||"Something went wrong")})};function C(p,v){clearTimeout(c),o.toast={text:p,action:v},c=setTimeout(()=>{o.toast=null,S()},v?5e3:2600),S()}function x(){if(!h.book||(o.card&&!h.stream.includes(o.card.key)&&o.card.stage===0&&(o.card=null),o.card))return;let p=h.stream.find(v=>v!==o.lastKey)||h.stream[0];o.card=p?{key:p,stage:0,py:null}:null}function $(){let p=b();if(!p)return null;let v=p.getBoundingClientRect().top;for(let k of p.querySelectorAll("[data-pos]")){let z=k.getBoundingClientRect();if(z.bottom>v+60)return{pos:k.dataset.pos,offset:Math.round(z.top-v)}}return null}function E(){if(o.view!=="read"||o.sec.kind!=="chapter")return;let p=$();p&&(w=p,M("position",g?{...p,jump:!0}:p),g=!1)}function O(){let p=b(),v=h.progress.position;if(!p||!v||o.sec.kind!=="chapter"||Number(v.pos.split(".")[0])!==o.sec.c)return;let k=p.querySelector(`[data-pos="${v.pos}"]`);k&&(p.scrollTop+=k.getBoundingClientRect().top-p.getBoundingClientRect().top-v.offset),w=v}function P(){let p=i.querySelector(".pop"),v=i.querySelector(o.zpop?".z.on":".pane.read .w.on");if(!p||!v)return;let k=i.getBoundingClientRect(),z=v.getClientRects()[0],B=p.offsetWidth,H=p.offsetHeight,D=10,N=10,St=Math.max(N,Math.min(z.left-k.left+z.width/2-B/2,k.width-B-N)),Y=z.top-k.top-H-D;p.style.left=`${St}px`,p.style.top=`${Y>=N+6?Y:z.bottom-k.top+D}px`}let Z=()=>{o.active&&(o.active=null,S())};function rn(p){let[v,k,z]=p.split(".").map(Number);return{t:(k<0?h.book.chapters[v].title:h.book.chapters[v].blocks[k].tokens)[z],c:v,b:k,i:z}}function de(p,v){let{t:k,c:z,b:B,i:H}=rn(p),D={word:k.t,key:k.key,chapter:z,block:B,token:H,level:v===1?"pinyin":"meaning"};k.name&&(D.name=!0),M("tap",D)}function $t(){let p=b(),v=i.querySelector(".rail i");if(!p||!v)return;let k=p.scrollHeight-p.clientHeight;v.style.height=`${k>0?Math.min(100,100*p.scrollTop/k):100}%`}let yt="cubic-bezier(.16,1,.3,1)",he=680,at=!1;function ge(p){let v=b();v&&(p.land==="pos"?(v.scrollTop=0,O()):v.scrollTop=p.land==="end"?v.scrollHeight:0,$t())}function rt(p,v="up",k=v==="up"?"slide":s){if(!p||at)return;let z=b(),B=i.querySelector(".fx");E();let H=null;z&&B&&!r&&(H=z.cloneNode(!0),H.classList.add("ghost"),H.removeAttribute("hidden"),B.append(H),H.scrollTop=z.scrollTop),o.active=null,o.zpop=null,o.dockAway=!1,f=0,p.kind==="chapter"&&o.sec.kind==="index"&&p.land!=="pos"&&(g=!0),o.sec={kind:p.kind,c:p.c},A();let D=p.land||(p.kind==="chapter"&&v==="down"?"end":"top");ge({land:D});let N=b();if(!H)return;at=!0;let St=()=>{H.remove(),at=!1,N.style.transform="",N.style.opacity=""},Y,Fn=(L,W,zt=0)=>{N.scrollTop=0;let Mt=performance.now()+zt,_t=Tt=>{let Et=Math.max(0,Math.min(1,(Tt-Mt)/W)),Ht=1-Math.pow(1-Et,4);N.scrollTop=L*Ht,$t(),Et<1&&requestAnimationFrame(_t)};requestAnimationFrame(_t)};if(k==="fade")Y=[H.animate([{opacity:1},{opacity:0}],{duration:320,easing:"ease-out",fill:"forwards"}),N.animate([{opacity:0,transform:"translateY(-14px)"},{opacity:1,transform:"none"}],{duration:520,delay:140,easing:yt,fill:"backwards"})];else if(k==="sling"){let L=N.scrollTop,W=N.clientHeight,zt=Yt||0;Yt=0,N.scrollTop=0,N.style.transform=`translateY(${W+zt}px)`;let Mt=-zt,_t=W+L,Tt=_t-Mt,Et=Math.min(2300,Math.max(1100,900+Tt*.45)),Ht=4.2,cn=it=>(1-Math.exp(-Ht*it))/(1-Math.exp(-Ht));Y=[new Promise(it=>{let pn=performance.now(),ke=dn=>{let we=Math.min(1,(dn-pn)/Et),Nt=Mt+Tt*cn(we);H.style.transform=`translateY(${-Nt}px)`,Nt<W?(N.style.transform=`translateY(${W-Nt}px)`,N.scrollTop=0):(N.style.transform="none",N.scrollTop=Nt-W),$t(),we<1?requestAnimationFrame(ke):it()};requestAnimationFrame(ke)})].map(it=>({finished:it}))}else{let L=v==="up"?1:-1;Y=[H.animate([{transform:"none",opacity:1},{transform:`translateY(${-100*L}%)`,opacity:.4}],{duration:he,easing:yt,fill:"forwards"}),N.animate([{transform:`translateY(${100*L}%)`},{transform:"none"}],{duration:he,easing:yt})]}Promise.all(Y.map(L=>L.finished)).then(St,St)}let It=()=>rt(jt(h,o.sec),"up"),Lt=()=>{o.sec.kind==="index"&&rt(Bt(h),"down","sling")},Ft=()=>rt(Ct(h,o.sec),"down"),At=96,ln=150,T=null,Yt=0,Wt=()=>i.querySelector(".pull");function fe(p,v){let k=Wt(),z=b();if(!k||!z)return;if(!(p==="up"?jt(h,o.sec):o.sec.kind==="index"?Bt(h):Ct(h,o.sec)))return Q();let H=Math.min(1,v/At),D=p==="down"&&o.sec.kind==="index";if(k.className=`pull on ${p} ${D?"sl":""} ${H>=1?"ready":""}`,k.querySelector(".pt").textContent=D?H>=1?"release":"charging":H>=1?"let go":"keep pulling",k.querySelector(".pb i").style.width=`${H*100}%`,D){let N=ln*(1-Math.exp(-v/110));if(z.style.transform=`translateY(${N}px)`,T.off=N,H>=1&&!T.clicked){T.clicked=!0,k.animate([{transform:"translateX(-50%) scale(1)"},{transform:"translateX(-50%) scale(1.08)"},{transform:"translateX(-50%) scale(1)"}],{duration:160,easing:"ease-out"}),z.animate([{transform:`translateY(${N}px)`},{transform:`translateY(${N+6}px)`},{transform:`translateY(${N}px)`}],{duration:140,easing:"ease-out"});try{navigator.vibrate&&navigator.vibrate(8)}catch{}}else H<1&&(T.clicked=!1);return}z.style.transform=`translateY(${(p==="up"?-1:1)*Math.min(v,At*1.5)*.35}px)`}function Q(){let p=Wt(),v=b();p&&(p.className="pull"),v&&v.style.transform&&(v.animate([{transform:v.style.transform},{transform:"none"}],{duration:420,easing:yt}),v.style.transform="")}let ue=p=>p.scrollTop+p.clientHeight>=p.scrollHeight-2,me=p=>p.scrollTop<=0;function ve(){if(!T)return;let p=T.d>=At,v=T.dir,k=v==="down"&&o.sec.kind==="index",z=T.off||0;T=null;let B=Wt();if(B&&(B.className="pull"),p&&k){Yt=z,Lt();return}let H=b();p?(H&&(H.style.transform=""),(v==="up"?It:Ft)()):Q()}i.addEventListener("touchstart",p=>{o.view!=="read"||at||!p.target.closest(".pane.read")||(T={y0:p.touches[0].clientY,dir:null,d:0})},{passive:!0}),i.addEventListener("touchmove",p=>{if(!T)return;let v=b(),k=p.touches[0].clientY-T.y0;if(!T.dir)if(k<-6&&ue(v))T.dir="up";else if(k>6&&me(v))T.dir="down";else if(Math.abs(k)>6){T=null;return}else return;let z=T.dir==="up"?-k:k;if(z<=0){T.d=0,Q();return}p.preventDefault(),T.d=z,fe(T.dir,z)},{passive:!1}),i.addEventListener("touchend",ve),i.addEventListener("touchcancel",()=>{T=null,Q()});let be=null;i.addEventListener("wheel",p=>{if(o.view!=="read"||at||!p.target.closest(".pane.read"))return;let v=b(),k=p.deltaY>0?"up":"down";if(!(k==="up"?ue(v):me(v))){T&&(T=null,Q());return}(!T||T.dir!==k)&&(T={dir:k,d:0}),p.preventDefault(),T.d+=Math.abs(p.deltaY)*.35,fe(k,T.d),clearTimeout(be),be=setTimeout(()=>{T&&T.d>=At?ve():(T=null,Q())},220)},{passive:!1});let qt={readerClick(p){let v=p.target.closest(".w");if(!v){Z();return}let k=v.dataset.at;if(o.active&&o.active.at===k){if(o.active.level===2){Z();return}o.active.level=2,de(k,2)}else o.active={at:k,level:1},u=b().scrollTop,de(k,1);S()},scroll(){$t();let p=b().scrollTop,v=p-f;if(Math.abs(v)>6){let k=v>0&&p>40;f=p,k!==!!o.dockAway&&(o.dockAway=k,S())}o.active&&Math.abs(b().scrollTop-u)>24&&Z(),clearTimeout(d),d=setTimeout(E,250)},rate:(p,v,k)=>M("rate",{chapter:p,rating:v,replaces:k||null}),reviewToggle(p,v){v?o.openReviews.add(p):o.openReviews.delete(p)},next:It,back:Ft,sling:Lt,openSec:rt,go(p){if(o.menu=!1,o.active=null,o.zpop=null,o.dockAway=!1,p===o.view){p==="read"&&o.sec.kind!=="index"?rt({kind:"index"},"down"):S();return}o.view==="read"&&E(),o.view=p,o.dictOpen=null,(p==="read"||p==="cards")&&p!==h.mode&&M("mode",{mode:p}),S(),requestAnimationFrame(()=>{let v=i.querySelector(".pane.page");v&&(v.scrollTop=0)})},reveal(){o.card&&o.card.stage===0&&(o.card.stage=1,S())},answer(p){let v=o.card;if(v){if(v.stage===1){v.py=p,v.stage=2,S();return}v.stage===2&&(o.lastKey=v.key,o.card=null,M("answer",{key:v.key,word:xe(v.key),pinyin:v.py,meaning:p}),S())}},markKnown(p){let v=xe(p);o.card&&o.card.key===p&&(o.lastKey=p,o.card=null),M("markKnown",{key:p}),C(`${v} is known. It won't come up in cards.`,{label:"Undo",fn:()=>{o.toast=null,M("unmarkKnown",{key:p}),S()}})},unmarkKnown:p=>M("unmarkKnown",{key:p}),dictSort(p){o.dictSort=p,S()},dictOpen(p){o.dictOpen=p,S()},dictFilter(p){o.dictFilter=p,o.dictOpen=null,S()},openDict(p="all"){o.dictFilter=p,qt.go("dict")},openChapter(p){o.chapter=p,qt.go("chapter")},allSittings(p){o.allSittings=p},pickBook(){o.busy="book",S(),M("pickBook",{}).finally(()=>{o.busy=null,S()})},begin(){o.view=h.mode==="cards"?"cards":"read",o.sec={kind:"index"},S()},importStart(){o.menu=!1,o.busy="import",S(),M("import",{}).then(p=>{o.busy=null,p&&typeof p=="object"&&(o.confirm=p),S()})},cancelConfirm(){o.confirm=null,S()},confirmImport(){o.confirm=null,w=null,M("importConfirm",{}),S()},exportIt(){o.menu=!1,M("export",{}),S()}},xe=p=>{for(let v of h.book.chapters)for(let k of[{tokens:v.title},...v.blocks])for(let z of k.tokens||[])if(z.key===p)return z.t;return p};return i.addEventListener("click",p=>{let v=p.target.closest(".z");if(v){p.stopPropagation(),p.preventDefault(),o.active=null,o.zpop=o.zpop&&o.zpop.id===v.dataset.z?o.zpop.level===1?{...o.zpop,level:2}:null:{id:v.dataset.z,key:v.dataset.k,level:1},S();return}o.zpop&&(o.zpop=null,S())},!0),i.addEventListener("scroll",()=>{o.zpop&&(o.zpop=null,S())},!0),A(),{update(p){let v=!!h.book,k=h.progress&&h.progress.position;h=p,h.book||(o.view="first",o.card=null),A();let z=h.progress.position;v&&z&&z!==k&&(!w||z.pos!==w.pos||z.offset!==w.offset)&&(o.sec={kind:"index"},A())},navigate(p){p==="up"?It():p==="sling"?Lt():Ft()},show(p){o.view="read",o.sec={kind:p.kind,c:p.c},A(),ge({land:p.land||"top"})},toast:C,destroy(){clearTimeout(c),clearTimeout(d),te(null,i),i.remove(),a.remove()}}}var Pt=.8,Ze=864e5,G={readPast:.03,pinyin:{got:.15,miss:.2},meaning:{got:.2,miss:.25},fadePerDay:.03,fadeMax:.15},jn=e=>e<=40?.97:e<=300?.88:e<=1e3?.72:e<=3e3?.64:.58,bt=(e,t,n)=>n==="got"?e+t.got*(1-e):e*(1-t.miss);function Qe({book:e,progress:t,now:n=Date.now()}){let s=Je(e,t,n),r=n-7*Ze,a=c=>Date.parse(c.at)<r,i=Je(e,{...t,taps:t.taps.filter(a),answers:t.answers.filter(a),trail:t.trail.filter(a),position:null,furthest:null},r),h=new Set(t.answers.filter(c=>!a(c)).map(c=>c.key)),o=new Set(s.known),l=Object.keys(s.confidence).filter(c=>h.has(c)&&!o.has(c)&&s.confidence[c]>=Pt&&(i.confidence[c]??0)<Pt);return{...s,moved:{since:new Date(r).toISOString(),up:l}}}function Je(e,t,n){let s=j(e),r=R(s,t),a=[],i=new Map,h=new Set,o=new Map;for(let x of t.taps){if(x.name)continue;h.add(x.key);let $=Date.parse(x.at),E=r.sittings.findIndex(Z=>$>=Z.start&&$<=Z.end),O=`${E<0?x.at:E}|${x.key}`,P=o.get(O)||{key:x.key,kind:"tap",sitting:E,meaning:!1,at:$};P.meaning||(P.meaning=x.level==="meaning"),P.at=Math.min(P.at,$),o.set(O,P)}let l=new Set([...o.values()].map(x=>`${x.sitting}|${x.key}`)),c=new Set,d=(x,$,E)=>{for(let O of s.blocks[x].tokens)!O.py||O.name||(i.set(O.key,O.rank??5e3),a.push({at:$,key:O.key,kind:"read",tapped:l.has(`${E}|${O.key}`)}))};r.sittings.forEach((x,$)=>{for(let E of x.covered)c.add(E),d(E,x.start,$)});let u=r.far;t.position&&s.blockAt.has(t.position.pos)&&(u=Math.max(u,s.blockAt.get(t.position.pos)-1));for(let x=0;x<=u;x++)c.has(x)||d(x,0,-2);for(let x of o.values())a.push(x);for(let x of t.answers)a.push({at:Date.parse(x.at),key:x.key,kind:"answer",a:x});a.sort((x,$)=>x.at-$.at||(x.kind==="read")-($.kind==="read"));let g=new Map;for(let x of a){let $=g.get(x.key);if(!$){if(x.kind!=="read")continue;g.set(x.key,$={conf:jn(i.get(x.key)),last:0,gots:0,seen:0,met:!1})}if(x.kind==="read")$.seen++,$.met&&!x.tapped&&($.conf=bt($.conf,{got:G.readPast},"got")),$.met=!0;else if(x.kind==="tap")$.conf=bt($.conf,G.pinyin,"miss"),x.meaning&&($.conf=bt($.conf,G.meaning,"miss"));else{let E=x.a.pinyin||(x.a.result==="got"?"got":"miss"),O=x.a.meaning||E;$.conf=bt(bt($.conf,G.pinyin,E),G.meaning,O),E==="got"&&O==="got"&&$.gots++}$.last=Math.max($.last,x.at)}let f={};for(let[x,$]of g){let E=$.last?Math.max(0,n-$.last)/Ze:0,O=Math.min(G.fadeMax,E*G.fadePerDay/(1+$.gots));f[x]=Math.round(Math.max(.01,Math.min(.99,$.conf-O))*100)/100}let w=new Set(t.keep||[]),b=new Set(t.known||[]),A=Object.keys(f).filter(x=>b.has(x)||!w.has(x)&&!h.has(x)&&g.get(x).seen>=2),S=new Set(A),M=t.answers.slice(-3).map(x=>x.key),C=Object.keys(f).filter(x=>!S.has(x)&&f[x]<Pt).sort((x,$)=>M.includes(x)-M.includes($)||f[x]-f[$]);return{confidence:f,stream:C,threshold:Pt,known:A}}var Bn="zher",ce="kv";function Pn(){return new Promise((e,t)=>{let n=indexedDB.open(Bn,1);n.onupgradeneeded=()=>n.result.createObjectStore(ce),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function tn(){let e=await Pn(),t=(a,i)=>new Promise((h,o)=>{let l=e.transaction(ce,a),c=l.objectStore(ce),d=i(c);l.oncomplete=()=>h(d&&d.result),l.onerror=l.onabort=()=>o(l.error)}),n=null,s=null,r=async()=>{for(;n;){let a=n;n=null,await t("readwrite",i=>i.put(a,"state"))}s=null};try{await navigator.storage?.persist?.()}catch{}return{get:a=>t("readonly",i=>i.get(a)),putBook:a=>t("readwrite",i=>i.put(a,"book")),saveState:a=>(n=a,s||(s=r())),flush:()=>s||Promise.resolve()}}var Dt=()=>({taps:[],answers:[],trail:[],ratings:[],furthest:null,position:null,known:[],keep:[],lastExport:null});function en(e,t){if(!e||typeof e!="object"||!Array.isArray(e.taps))throw new Error("That file isn't a zher export.");if(t&&e.book&&e.book!==t)throw new Error(`That export is for ${e.book}, not this book.`);let n=Array.isArray(e.ratings)?e.ratings:Object.entries(e.ratings||{}).map(([i,h])=>({chapter:+i,rating:h.rating,at:h.at})).sort((i,h)=>i.at.localeCompare(h.at)),s=(e.answers||[]).map(i=>i.pinyin?i:{key:i.key,word:i.word,pinyin:i.result==="got"?"got":"miss",meaning:i.result==="got"?"got":"miss",at:i.at}),r=[...new Set([...e.keep||[],...Object.keys(e.cards||{})])].filter(i=>!(e.known||[]).includes(i)),a=e.exportedAt||new Date().toISOString();return{...Dt(),taps:e.taps,answers:s,trail:e.trail||[],ratings:n,furthest:e.furthest||e.position&&e.position.pos||null,position:e.position||null,known:e.known||[],keep:r,lastExport:{at:a,count:e.taps.length,answers:s.length}}}var nn=(e,t,n=new Date)=>({book:t,exportedAt:n.toISOString(),app:"zher 4",position:e.position,taps:e.taps,answers:e.answers,trail:e.trail,ratings:e.ratings,furthest:e.furthest,known:e.known,keep:e.keep});var xt=()=>new Date().toISOString(),_={book:null,progress:Dt(),mode:"read",storageOk:!0},J=null,kt=null,st=null,Dn={confidence:{},stream:[],threshold:.8,known:[],moved:{since:null,up:[]}};function wt(){let e=_.book?Qe({book:_.book,progress:_.progress,now:Date.now()}):Dn;return{book:_.book,progress:_.progress,mode:_.mode,storageOk:_.storageOk,...e}}function Rt(){J&&J.saveState({progress:_.progress,mode:_.mode}).catch(()=>{_.storageOk=!1,kt?.update(wt())})}function X(e){_.progress={..._.progress},e(_.progress),Rt(),kt.update(wt())}function on(e){return new Promise(t=>{let n=document.createElement("input");n.type="file",n.accept=e,n.style.display="none",document.body.append(n),n.addEventListener("change",()=>{t(n.files[0]||null),n.remove()},{once:!0}),n.addEventListener("cancel",()=>{t(null),n.remove()},{once:!0}),n.click()})}var sn=async e=>{try{return JSON.parse(await e.text())}catch{throw new Error("That file isn't JSON.")}};function Rn(e,t){let n=URL.createObjectURL(new Blob([JSON.stringify(t,null,1)],{type:"application/json"})),s=Object.assign(document.createElement("a"),{href:n,download:e});document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e4)}var an=e=>_.book?j(_.book).blockAt.get(e)??-1:-1;function In(e,t){switch(e){case"tap":X(n=>{n.taps=[...n.taps,{...t,at:xt()}]});return;case"position":{X(n=>{let s=n.trail[n.trail.length-1];n.position={pos:t.pos,offset:t.offset},(!s||s.pos!==t.pos)&&(n.trail=[...n.trail,{pos:t.pos,at:xt(),...t.jump?{ev:"jump"}:{}}]),!t.jump&&an(t.pos)>an(n.furthest)&&(n.furthest=t.pos)});return}case"rate":X(n=>{n.ratings=n.ratings.filter(s=>!(s.chapter===t.chapter&&t.replaces&&s.at===t.replaces)),t.rating&&(n.ratings=[...n.ratings,{chapter:t.chapter,rating:t.rating,at:xt()}])});return;case"answer":X(n=>{n.answers=[...n.answers,{...t,at:xt()}]});return;case"markKnown":X(n=>{n.known=[...new Set([...n.known,t.key])],n.keep=n.keep.filter(s=>s!==t.key)});return;case"unmarkKnown":X(n=>{n.known=n.known.filter(s=>s!==t.key),n.keep=[...new Set([...n.keep,t.key])]});return;case"mode":_.mode=t.mode,Rt();return;case"export":{let n=new Date;Rn(`zher-${n.toISOString().slice(0,16).replace(/[T:]/g,"-")}.json`,nn(_.progress,_.book.title,n)),X(s=>{s.lastExport={at:n.toISOString(),count:s.taps.length,answers:s.answers.length}});return}case"pickBook":return on(".json,application/json").then(async n=>{if(!n)return;let s=await sn(n);if(!s||!Array.isArray(s.chapters)||!s.title)throw new Error("That file isn't a zher book.");if(s.chapters.some(r=>r.blocks.some(a=>a.image&&!a.image.startsWith("data:"))))throw new Error("That book file has no images inside it. Use zher-book.json.");await J.putBook(s),_.book=s,kt.update(wt())});case"import":return on(".json,application/json").then(async n=>{if(!n)return;let s=await sn(n);try{st=en(s,_.book&&_.book.title)}catch(r){return r.message}return{exportedAt:s.exportedAt,taps:st.taps.length,answers:st.answers.length}});case"importConfirm":return st?(_.progress=st,st=null,Rt(),kt.update(wt()),"Reset to the backup."):void 0}}function pe(e){if(!_.book||!_.progress.position)return;let t=_.progress.trail[_.progress.trail.length-1];t&&t.ev===e||(_.progress={..._.progress,trail:[..._.progress.trail,{pos:_.progress.position.pos,at:xt(),ev:e}]},Rt(),e==="hide"&&J?.flush())}async function Ln(){try{J=await tn();let[s,r]=await Promise.all([J.get("book"),J.get("state")]);s&&(_.book=s),r&&(_.progress={...Dt(),...r.progress},_.mode=r.mode||"read")}catch{_.storageOk=!1}_.book&&(document.title=_.book.title);let t=document.getElementById("app").attachShadow({mode:"open"});kt=Xe(t,wt(),{on:In});let n=document.createElement("style");n.textContent=".ph{ height: 100dvh; border-radius: 0; box-shadow: none }",t.append(n),pe("show"),document.addEventListener("visibilitychange",()=>pe(document.hidden?"hide":"show")),addEventListener("pagehide",()=>pe("hide")),"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}Ln();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
