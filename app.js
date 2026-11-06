var Xn=Object.defineProperty;var Zn=(n,t,e)=>t in n?Xn(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var R=(n,t,e)=>Zn(n,typeof t!="symbol"?t+"":t,e);var yt=globalThis,Zt=yt.trustedTypes,Ke=Zt?Zt.createPolicy("lit-html",{createHTML:n=>n}):void 0,an="$lit$",J=`lit$${Math.random().toFixed(9).slice(2)}$`,rn="?"+J,Jn=`<${rn}>`,nt=document,wt=()=>nt.createComment(""),kt=n=>n===null||typeof n!="object"&&typeof n!="function",ye=Array.isArray,Kn=n=>ye(n)||typeof n?.[Symbol.iterator]=="function",fe=`[ 	
\f\r]`,bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qe=/-->/g,tn=/>/g,tt=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),en=/'/g,nn=/"/g,on=/^(?:script|style|textarea|title)$/i,we=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),v=we(1),Vs=we(2),Xs=we(3),$t=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),sn=new WeakMap,et=nt.createTreeWalker(nt,129);function ln(n,t){if(!ye(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ke!==void 0?Ke.createHTML(t):t}var Qn=(n,t)=>{let e=n.length-1,s=[],a,r=t===2?"<svg>":t===3?"<math>":"",i=bt;for(let c=0;c<e;c++){let o=n[c],l,p,d=-1,m=0;for(;m<o.length&&(i.lastIndex=m,p=i.exec(o),p!==null);)m=i.lastIndex,i===bt?p[1]==="!--"?i=Qe:p[1]!==void 0?i=tn:p[2]!==void 0?(on.test(p[2])&&(a=RegExp("</"+p[2],"g")),i=tt):p[3]!==void 0&&(i=tt):i===tt?p[0]===">"?(i=a??bt,d=-1):p[1]===void 0?d=-2:(d=i.lastIndex-p[2].length,l=p[1],i=p[3]===void 0?tt:p[3]==='"'?nn:en):i===nn||i===en?i=tt:i===Qe||i===tn?i=bt:(i=tt,a=void 0);let f=i===tt&&n[c+1].startsWith("/>")?" ":"";r+=i===bt?o+Jn:d>=0?(s.push(l),o.slice(0,d)+an+o.slice(d)+J+f):o+J+(d===-2?c:f)}return[ln(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},_t=class n{constructor({strings:t,_$litType$:e},s){let a;this.parts=[];let r=0,i=0,c=t.length-1,o=this.parts,[l,p]=Qn(t,e);if(this.el=n.createElement(l,s),et.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(a=et.nextNode())!==null&&o.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(let d of a.getAttributeNames())if(d.endsWith(an)){let m=p[i++],f=a.getAttribute(d).split(J),u=/([.?@])?(.*)/.exec(m);o.push({type:1,index:r,name:u[2],strings:f,ctor:u[1]==="."?me:u[1]==="?"?ve:u[1]==="@"?xe:ot}),a.removeAttribute(d)}else d.startsWith(J)&&(o.push({type:6,index:r}),a.removeAttribute(d));if(on.test(a.tagName)){let d=a.textContent.split(J),m=d.length-1;if(m>0){a.textContent=Zt?Zt.emptyScript:"";for(let f=0;f<m;f++)a.append(d[f],wt()),et.nextNode(),o.push({type:2,index:++r});a.append(d[m],wt())}}}else if(a.nodeType===8)if(a.data===rn)o.push({type:2,index:r});else{let d=-1;for(;(d=a.data.indexOf(J,d+1))!==-1;)o.push({type:7,index:r}),d+=J.length-1}r++}}static createElement(t,e){let s=nt.createElement("template");return s.innerHTML=t,s}};function it(n,t,e=n,s){if(t===$t)return t;let a=s!==void 0?e._$Co?.[s]:e._$Cl,r=kt(t)?void 0:t._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),r===void 0?a=void 0:(a=new r(n),a._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=a:e._$Cl=a),a!==void 0&&(t=it(n,a._$AS(n,t.values),a,s)),t}var ge=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,a=(t?.creationScope??nt).importNode(e,!0);et.currentNode=a;let r=et.nextNode(),i=0,c=0,o=s[0];for(;o!==void 0;){if(i===o.index){let l;o.type===2?l=new Mt(r,r.nextSibling,this,t):o.type===1?l=new o.ctor(r,o.name,o.strings,this,t):o.type===6&&(l=new be(r,this,t)),this._$AV.push(l),o=s[++c]}i!==o?.index&&(r=et.nextNode(),i++)}return et.currentNode=nt,a}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},Mt=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,a){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=it(this,t,e),kt(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==$t&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==S&&kt(this._$AH)?this._$AA.nextSibling.data=t:this.T(nt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=_t.createElement(ln(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===a)this._$AH.p(e);else{let r=new ge(a,this),i=r.u(this.options);r.p(e),this.T(i),this._$AH=r}}_$AC(t){let e=sn.get(t.strings);return e===void 0&&sn.set(t.strings,e=new _t(t)),e}k(t){ye(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,a=0;for(let r of t)a===e.length?e.push(s=new n(this.O(wt()),this.O(wt()),this,this.options)):s=e[a],s._$AI(r),a++;a<e.length&&(this._$AR(s&&s._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ot=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,a,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=S}_$AI(t,e=this,s,a){let r=this.strings,i=!1;if(r===void 0)t=it(this,t,e,0),i=!kt(t)||t!==this._$AH&&t!==$t,i&&(this._$AH=t);else{let c=t,o,l;for(t=r[0],o=0;o<r.length-1;o++)l=it(this,c[s+o],e,o),l===$t&&(l=this._$AH[o]),i||(i=!kt(l)||l!==this._$AH[o]),l===S?t=S:t!==S&&(t+=(l??"")+r[o+1]),this._$AH[o]=l}i&&!a&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},me=class extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}},ve=class extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}},xe=class extends ot{constructor(t,e,s,a,r){super(t,e,s,a,r),this.type=5}_$AI(t,e=this){if((t=it(this,t,e,0)??S)===$t)return;let s=this._$AH,a=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==S&&(s===S||a);a&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},be=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}};var ts=yt.litHtmlPolyfillSupport;ts?.(_t,Mt),(yt.litHtmlVersions??(yt.litHtmlVersions=[])).push("3.2.1");var ke=(n,t,e)=>{let s=e?.renderBefore??t,a=s._$litPart$;if(a===void 0){let r=e?.renderBefore??null;s._$litPart$=a=new Mt(t.insertBefore(wt(),r),r,void 0,e??{})}return a._$AI(n),a};var es=/[一-鿿]/g,ns=n=>(n.match(es)||[]).length,st=n=>/^\d+\.$/.test(n.t),cn=(n,t,e=!1)=>n.chapters[t].title.filter(s=>e||!st(s)).map(s=>st(s)?s.t+" ":s.t).join(""),dn=(n,t,e=!1)=>n.chapters[t].title.filter(s=>e||!st(s)),St=(n,t)=>t?`${Math.round(100*n/t)}%`:"\u2013",At=n=>new Date(n).toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}),$e=new WeakMap;function F(n){if($e.has(n))return $e.get(n);let t=[],e=new Map,s=new Map;n.chapters.forEach((r,i)=>{let c=(o,l)=>{e.set(`${i}.${o}`,t.length),t.push({pos:`${i}.${o}`,c:i,b:o,tokens:l,hz:l.reduce((p,d)=>p+ns(d.t),0)});for(let p of l)p.py&&!s.has(p.key)&&s.set(p.key,p)};c(-1,r.title),r.blocks.forEach((o,l)=>c(l,o.tokens||[]))});let a={blocks:t,blockAt:e,entryOf:s,totalHz:t.reduce((r,i)=>r+i.hz,0)};return $e.set(n,a),a}var pn=10*6e4,_e=new WeakMap;function W(n,t){if(_e.has(t))return _e.get(t);let e=ss(n,t);return _e.set(t,e),e}function ss(n,t){let{blocks:e,blockAt:s}=n,a=[];for(let l of t.taps){let p=s.get(`${l.chapter}.${l.block}`);p!==void 0&&a.push({n:p,at:Date.parse(l.at),tap:l})}for(let l of t.trail){let p=s.get(l.pos);p!==void 0&&a.push({n:p,at:Date.parse(l.at),ev:l.ev||"move",logged:!0})}a.sort((l,p)=>l.at-p.at);let r=[],i=null;a.forEach((l,p)=>{let d=a[p-1];if(!i||l.at-d.at>pn)i={start:l.at,end:l.at,ms:0,covered:new Set,taps:[],steps:[],logged:!1},r.push(i);else{let m=l.at-d.at;if(d.ev!=="hide")if(i.ms+=m,i.steps.push({n:d.n,dt:m}),l.n>d.n&&l.ev!=="jump"){let f=0;for(let u=d.n;u<l.n;u++)f+=e[u].hz;if(!(f>=200&&f/(m/6e4)>300))for(let u=d.n;u<l.n;u++)i.covered.add(u)}else l.n===d.n&&m>=1e4&&i.covered.add(l.n);i.end=l.at}l.logged&&(i.logged=!0),l.tap&&(i.covered.add(l.n),i.taps.push(l))});let c=new Map;r.forEach((l,p)=>{for(let d of l.covered)c.has(d)||c.set(d,p)});let o=t.furthest!=null&&s.has(t.furthest)?s.get(t.furthest):-1;for(let l of c.keys())o=Math.max(o,l);return{sittings:r,firstSitting:c,far:o}}function Me(n,t,e,s){let{blocks:a}=n,{sittings:r,firstSitting:i,far:c}=s,o=new Set,l=new Set;r.forEach((u,$)=>{for(let b of u.taps){let _=`${b.n}.${b.tap.token}`;l.add(_),i.get(b.n)===$&&o.add(_)}});let p=new Map;r.forEach((u,$)=>{for(let b of u.steps){if(i.get(b.n)!==$)continue;let _=a[b.n].c;p.set(_,(p.get(_)||0)+b.dt)}});let d=[],m=new Set,f=new Set;return t.chapters.forEach((u,$)=>{let b={c:$,fresh:[0,0],again:[0,0],known:[0,0],hz:0,words:new Set,tapped:new Set,any:new Map},_=!1;if(a.forEach((z,j)=>{z.c!==$||j>c||(_=!0,z.b>=0&&(b.hz+=z.hz),z.tokens.forEach((g,w)=>{if(!g.py||g.name)return;let T=b.any.get(g.key)||[0,0];if(T[0]++,l.has(`${j}.${w}`)&&T[1]++,b.any.set(g.key,T),z.b<0)return;let L=o.has(`${j}.${w}`),Y=m.has(g.key)?f.has(g.key)?b.again:b.known:b.fresh;Y[0]++,L&&(Y[1]++,b.tapped.add(g.key)),b.words.add(g.key)}))}),!_||!b.words.size)return;b.total=[b.fresh[0]+b.again[0]+b.known[0],b.fresh[1]+b.again[1]+b.known[1]];let M=(p.get($)||0)/6e4;b.speed=M>=1?b.hz/M:null,b.earlier=new Set(e.taps.filter(z=>z.chapter<$&&!z.name).map(z=>z.key)),d.push(b);for(let z of b.words)m.add(z);for(let z of b.tapped)f.add(z)}),d}function hn(n,t,e){let s=W(n,e),{blocks:a}=n,r=Me(n,t,e,s),i=a.reduce((u,$,b)=>u+(b<=s.far?$.hz:0),0),c=[...r].reverse().find(u=>u.speed),o=c?(n.totalHz-i)/c.speed/60:null,l=null,p=[...r].reverse().find(u=>[...u.any.values()].some($=>$[1]));if(p){let u=[...p.any.entries()].filter(([$,b])=>p.earlier.has($)&&b[1]>=3).sort(($,b)=>b[1][1]-$[1][1]||b[1][1]/b[1][0]-$[1][1]/$[1][0]).map(([$,b])=>({tok:n.entryOf.get($),tapped:b[1],seen:b[0]}));u.length&&(l={c:p.c,list:u})}let d=s.sittings.map((u,$)=>({s:u,i:$})).filter(({s:u})=>u.covered.size).reverse().map(({s:u,i:$})=>{let b=0,_=0,M=0;for(let w of u.covered)s.firstSitting.get(w)===$?b+=a[w].hz:_+=a[w].hz,a[w].b>=0&&(M+=a[w].tokens.filter(T=>T.py&&!T.name).length);let z=new Set(u.taps.filter(w=>w.tap.block>=0&&!w.tap.name).map(w=>`${w.n}.${w.tap.token}`)).size,j=u.ms/6e4,g=[`${b} new`,`${_} reread`];return j>=1&&g.push(`${Math.round((b+_)/j)}/min`),g.push(`${St(z,M)} tapped`),u.logged||g.push("estimated"),{start:u.start,mins:Math.round(j),sub:g.join(" \xB7 ")}}),m=e.answers.filter(u=>u.pinyin),f={answers:e.answers.length,pinyin:[m.filter(u=>u.pinyin==="got").length,m.length],meaning:[m.filter(u=>u.meaning==="got").length,m.length]};return{readHz:i,totalHz:n.totalHz,left:o,rows:r,stuck:l,sittings:d,cards:f}}function Se(n,t,e,s){let a=e.find(m=>m.key===s&&m.block>=0),r,i,c;if(a)r=t.chapters[a.chapter].blocks[a.block].tokens,i=a.token,c=a.chapter;else{let m=n.blocks.find(f=>f.b>=0&&f.tokens.some(u=>u.key===s))||n.blocks.find(f=>f.tokens.some(u=>u.key===s));if(!m)return null;r=m.tokens,i=r.findIndex(f=>f.key===s),c=m.c}let o=m=>!m.py&&/[。！？…]/.test(m.t),l=m=>m&&!m.py&&/^[”’」』]/.test(m.t),p=i;for(;p>0&&!o(r[p-1])&&!l(r[p-1]);)p--;let d=i;for(;d<r.length-1&&!o(r[d]);)d++;return l(r[d+1])&&d++,{tokens:r.slice(p,d+1),at:i-p,c}}function un(n,t,e,s){let{far:a}=W(n,t),r=new Map;for(let d=0;d<=a;d++)for(let m of n.blocks[d].tokens)!m.py||m.name||(r.has(m.key)||r.set(m.key,{t:m,seen:0,taps:0}),r.get(m.key).seen++);for(let d of t.taps)r.has(d.key)&&r.get(d.key).taps++;let i=new Set(e.known),c=[...r.values()].map(d=>({...d,conf:e.confidence[d.t.key]??null,known:i.has(d.t.key)}));for(let d of c)d.state=d.known?"known":d.conf!=null&&d.conf<e.threshold?"live":"solid";let o=d=>d.known?2:d.conf??1;c.sort(s==="taps"?(d,m)=>m.taps-d.taps||m.seen-d.seen:(d,m)=>o(d)-o(m)||m.taps-d.taps);let l=[...n.entryOf.values()].filter(d=>!d.name).length,p={known:0,solid:0,live:0,ahead:l-c.length};for(let d of c)p[d.state]++;return{list:c,ahead:l-c.length,counts:p,total:l}}function fn(n,t,e,s){return[...new Set(e.taps.filter(r=>r.chapter===s&&!r.name).map(r=>r.key))].map(r=>n.entryOf.get(r)).filter(Boolean)}function gn(n){let t=n.lastExport,e=t?n.taps.length-t.count:n.taps.length,s=n.answers.length-(t&&t.answers||0);return{warn:e>0||s>0,text:`${n.taps.length} taps \xB7 `+(t?`${e} since last export`:"not exported yet")+(s>0?` \xB7 ${s} new answers`:"")}}function mn(n,t,e,s){let a=new Set(s.known),{far:r}=W(n,e),i=l=>a.has(l)?Math.max(.95,s.confidence[l]??0):s.confidence[l]??0,c=t.chapters.map((l,p)=>{let d=0,m=0,f=new Set;for(let u of n.blocks)if(!(u.c!==p||u.b<0))for(let $ of u.tokens)!$.py||$.name||(m++,d+=i($.key),$.key in s.confidence||f.add($.key));return{c:p,cov:m?d/m:0,unmet:f.size}}),o=n.blocks[r+1]||n.blocks[n.blocks.length-1];return{rows:c,next:o.c,here:e.position?Number(e.position.pos.split(".")[0]):o.c}}function vn(n){let t=new Set(n.known),e=Array.from({length:10},(s,a)=>({i:a,lo:a/10,n:0,known:0}));for(let[s,a]of Object.entries(n.confidence)){let r=e[Math.min(9,Math.floor(a*10))];r.n++,t.has(s)&&r.known++}return e}function xn(n,t){let s=l=>new Date(l).toDateString(),a=n.answers.filter(l=>l.pinyin).map(l=>({...l,t:Date.parse(l.at)})).sort((l,p)=>l.t-p.t),r=new Map,i=new Set,c=[0,0],o={pinyin:0,meaning:0};for(let l of a){let p=s(l.t),d=t-l.t<=30*864e5;d&&(l.pinyin==="miss"&&o.pinyin++,l.meaning==="miss"&&o.meaning++),i.has(l.key+p)||(i.add(l.key+p),d&&r.has(l.key)&&r.get(l.key)!==p&&(c[1]++,l.pinyin==="got"&&l.meaning==="got"&&c[0]++)),r.has(l.key)||r.set(l.key,p)}return{recall:c,miss:o}}var as=n=>Array.isArray(n.ratings)?n.ratings:Object.entries(n.ratings||{}).map(([t,e])=>({chapter:Number(t),...e}));function zt(n,t,e,s){let{blocks:a}=n,r=W(n,e),i=a.reduce((l,p)=>l+(p.c===s&&p.b>=0?p.hz:0),0),c=[],o=as(e).filter(l=>l.chapter===s).map(l=>({...l,t:Date.parse(l.at)}));for(let l of r.sittings){let p=[...l.covered].filter(_=>a[_].c===s&&a[_].b>=0);if(!p.length)continue;let d=p.reduce((_,M)=>_+a[M].hz,0),m=l.steps.reduce((_,M)=>_+(a[M.n].c===s?M.dt:0),0),f=p.reduce((_,M)=>_+a[M].tokens.filter(z=>z.py&&!z.name).length,0),u=l.taps.filter(_=>a[_.n].c===s&&_.tap.block>=0&&!_.tap.name),$=new Set(u.map(_=>`${_.n}.${_.tap.token}`)).size,b=[...new Set(u.map(_=>_.tap.key))].map(_=>n.entryOf.get(_)).filter(Boolean);c.push({start:l.start,end:l.end,rating:null,ratingAt:null,hz:d,share:i?d/i:0,mins:m/6e4,speed:m>=6e4?d/(m/6e4):null,rate:f?$/f:0,tapped:$,words:f,keys:b})}for(let l of o.sort((p,d)=>p.t-d.t)){let p=c.find(d=>l.t>=d.start&&l.t<=d.end+pn)||[...c].reverse().find(d=>d.start<=l.t&&!d.rating);p&&(p.rating=l.rating,p.ratingAt=l.at)}return{passes:c,chHz:i}}var bn=(n,t,e,s)=>n.map((a,r)=>{if(!a.py)return st(a)?a.t+" ":a.t;let i=`${t}.${e}.${r}`;return v`<span class="w ${s.active&&s.active.at===i?"on":""}" data-at=${i}>${a.t}</span>`}),ze=(n,t,e,s=-1)=>n.map((a,r)=>{if(!a.py)return st(a)?a.t+" ":a.t;let i=`${e}.${r}`,c=t.zpop&&t.zpop.id===i,o=v`<span class="z ${c?"on":""}" data-z=${i} data-k=${a.key}>${a.t}</span>`;return r===s?v`<b>${o}</b>`:o}),V=(n,t,e,s,a=!1)=>ze(dn(n.book,e,a),t,s),lt=(n,t,e)=>ze([n],t,e),Jt=(n,t)=>t.kind==="chapter"?{kind:"index"}:t.kind==="review"?{kind:"chapter",c:t.c}:null,Kt=(n,t)=>t.kind==="index"?{kind:"chapter",c:0,land:"top"}:t.kind==="chapter"?{kind:"review",c:t.c}:t.kind==="review"&&t.c+1<n.book.chapters.length?{kind:"chapter",c:t.c+1}:null,Qt=n=>n.progress.position?{kind:"chapter",c:Number(n.progress.position.pos.split(".")[0]),land:"pos"}:{kind:"chapter",c:0,land:"top"},Ae=(n,t)=>{let e=n.book.chapters[t].title.find(st);return e?e.t.replace(".",""):null},ct=(n,t)=>Ae(n,t)?`chapter ${Ae(n,t)}`:cn(n.book,t),$n=(n,t)=>t?t.kind==="index"?"contents":t.kind==="review"?`${ct(n,t.c)} review`:ct(n,t.c):"",Ee=(n,t,e)=>{if(t.sec.kind==="index"){let a=Qt(n).c;return v`<div class="hint top" @click=${e.sling}><span class="ar">↑</span><span class="hw">${n.progress.position?`continue reading ${ct(n,a)}`:`start ${ct(n,0)}`}</span></div>`}let s=Jt(n,t.sec);return s?v`<div class="hint top" @click=${e.back}><span class="ar">↑</span><span class="hw">${$n(n,s)}</span></div>`:S},Te=(n,t,e)=>{let s=Kt(n,t.sec);if(!s)return v`<div class="hint end done"><span class="label">End of the book</span></div>`;let a=t.sec.kind==="index"?`start ${ct(n,0)}`:$n(n,s);return v`<div class="hint end" @click=${e.next}><span class="hw">${a}</span><span class="ar">↓</span></div>`},rs=(n,t,e,s)=>{let a=F(n.book),r=n.progress,i=fn(a,n.book,r,s),{passes:c}=zt(a,n.book,r,s),o=c[c.length-1]||null,l=o&&o.rating,p=[...c].reverse().find(d=>d!==o&&d.rating);return v`<div class="book revw">
    ${Ee(n,t,e)}
    <div class="label">${ct(n,s)} · review</div>
    <h1 class="rvt">${V(n,t,s,"rvt")}</h1>
    ${o?v`<div class="island thisread">
      <div class="label">This read</div>
      <div class="trn"><span><b>${Math.max(1,Math.round(o.mins))}</b> min</span><span><b>${Math.round(o.rate*100)}%</b> tapped</span><span><b>${o.speed?Math.round(o.speed):"\u2013"}</b> /min</span></div>
      ${o.keys.length?v`<div class="pchips">${o.keys.map(d=>v`<span class="gc">${lt(d,t,`tr.${d.key}`)}</span>`)}</div>`:S}
    </div>`:S}
    <div class="rate"><span class="label">This read felt</span>
      ${["easy","ok","hard"].map(d=>v`<button class="pick ${l===d?"on":""}" @click=${()=>e.rate(s,l===d?null:d,o&&o.ratingAt)}>${d}</button>`)}
    </div>
    ${p?v`<div class="lastrate label">last read: <span class="rt ${p.rating}">${p.rating}</span> · ${At(p.start)}</div>`:S}
    <details class="words" ?open=${t.openReviews.has(s)} @toggle=${d=>e.reviewToggle(s,d.target.open)}>
      <summary><span class="label">Tapped in this chapter, all reads · ${i.length}</span></summary>
      <div class="rows">${i.length?i.map(d=>v`<div class="row"><div class="zh">${lt(d,t,`rv${s}.${d.key}`)}</div><div class="rp">${d.py}</div><div class="rg">${d.gloss}</div></div>`):v`<div class="none">Nothing tapped yet.</div>`}</div>
    </details>
    ${Te(n,t,e)}
  </div>`},is=(n,t,e)=>{let s=F(n.book),a=n.progress,r=W(s,a),i=a.position?Number(a.position.pos.split(".")[0]):null,c=l=>{let p=0,d=0;return s.blocks.forEach((m,f)=>{m.c===l&&m.b>=0&&(p+=m.hz,f<=r.far&&(d+=m.hz))}),p?d/p:0},o=s.blocks.reduce((l,p,d)=>l+(d<=r.far?p.hz:0),0);return v`<div class="book idx">
    ${Ee(n,t,e)}
    <div class="label mark">zher</div>
    <h1 class="bt">${n.book.title}</h1>
    <div class="note">${n.book.chapters.length} chapters · ${s.totalHz.toLocaleString()} hanzi · ${St(o,s.totalHz)} read</div>
    <div class="label section">Contents</div>
    <div class="island toc2">${n.book.chapters.map((l,p)=>{let d=c(p),{passes:m}=zt(s,n.book,a,p),f=([...m].reverse().find(u=>u.rating)||{}).rating;return v`<button class="tr2 ${p===i?"here":""}" @click=${()=>e.openSec({kind:"chapter",c:p,land:p===i?"pos":"top"},"up")}>
        <span class="tn label">${Ae(n,p)??""}</span>
        <span class="tt">${V(n,t,p,"ix"+p)}</span>
        <span class="tm">${f?v`<span class="rt ${f}">${f}</span>`:S}${p===i?v`<span class="label hereL">here</span>`:S}</span>
        <span class="tb"><i style="width:${Math.round(d*100)}%"></i></span>
      </button>`})}</div>
    ${Te(n,t,e)}
  </div>`},os=(n,t,e,s)=>{let a=n.book.chapters[s];return v`<div class="book">
    ${Ee(n,t,e)}
    <section class="chapter">
      <h2 data-pos="${s}.-1">${bn(a.title,s,-1,t)}</h2>
      ${a.blocks.map((r,i)=>r.image?v`<figure data-pos="${s}.${i}"><img src=${r.image} width=${r.w} height=${r.h} alt="" draggable="false"></figure>`:v`<p data-pos="${s}.${i}">${bn(r.tokens,s,i,t)}</p>`)}
    </section>
    ${Te(n,t,e)}
  </div>`},ls=(n,t)=>{let e=F(n.book),{far:s}=W(e,n.progress),a=e.blocks.map((r,i)=>({b:r,n:i})).filter(r=>r.b.c===t);return!a.length||s<a[0].n?0:s>=a[a.length-1].n?1:(s-a[0].n+1)/a.length},cs=(n,t,e)=>v`<div class="pane read sec-${t.sec.kind}" ?hidden=${t.view!=="read"} @scroll=${e.scroll} @click=${e.readerClick}>
  ${t.sec.kind==="index"?is(n,t,e):t.sec.kind==="review"?rs(n,t,e,t.sec.c):os(n,t,e,t.sec.c)}
</div>
${t.view==="read"&&t.sec.kind==="chapter"?v`<div class="rail" aria-hidden="true"><i></i><b style="top:${Math.round(ls(n,t.sec.c)*100)}%"></b></div>`:S}
<div class="fx"></div>
<div class="pull" aria-hidden="true"><span class="pt"></span><span class="pb"><i></i></span></div>`,ds=(n,t)=>{let e=F(n.book).entryOf.get(t.zpop.key);return v`<div class="pop" role="status"><div class="py">${e.py}</div>${t.zpop.level===2?v`<div class="gl">${e.gloss}</div>`:S}</div>`},ps=(n,t)=>{if(t.zpop)return ds(n,t);if(!t.active||t.view!=="read")return S;let[e,s,a]=t.active.at.split(".").map(Number),i=(s<0?n.book.chapters[e].title:n.book.chapters[e].blocks[s].tokens)[a];return v`<div class="pop" role="status"><div class="py">${i.py}</div>${t.active.level===2?v`<div class="gl">${i.gloss}</div>`:S}</div>`},_n=(n,t,e,s)=>n?v`<div class="sent">
  <div class="sx">${ze(n.tokens,e,s,n.at)}</div>
  <div class="label src">${V(t,e,n.c,s+"t",!0)}</div>
</div>`:S,yn=(n,t,e)=>v`<span class="st ${t||""} ${e?"live":""}"><i></i>${n}</span>`,hs=(n,t,e)=>{let s=F(n.book),a=v`<header class="chead"><span class="label">Cards</span><span class="label dim">${n.due} due · ${n.stream.length} cards</span></header>`,r=t.card;if(!r){let o=Object.keys(n.confidence).length>0;return v`<div class="pane page cards">${a}
      <div class="empty island">
        ${o?v`<div class="et">No cards yet.</div><div class="ed">A word becomes a card the first time you tap it while reading.</div>`:v`<div class="et">Cards come from what you've read.</div><div class="ed">Read a chapter, and the words you meet start turning up here.</div>`}
        <button class="btn main" @click=${()=>e.go("read")}>Read</button>
      </div>
    </div>`}let i=s.entryOf.get(r.key),c=r.stage>=2?Se(s,n.book,n.progress.taps,r.key):null;return v`<div class="pane page cards">${a}
    <div class="card island stage${r.stage}" @click=${()=>r.stage===0&&e.reveal()}>
      <div class="ctop">
        <div class="steps">${yn("pinyin",r.py,r.stage===1)}${yn("meaning",null,r.stage===2)}</div>
      </div>
      <div class="face">
        <div class="zh">${i.t}</div>
        <div class="py ${r.stage>=1?"":"hide"}">${i.py}</div>
        <div class="gl ${r.stage>=2?"":"hide"}">${i.gloss}</div>
      </div>
      ${_n(c,n,t,"cs")}
    </div>
    <div class="ask">
      ${r.stage===0?v`<div class="q label">Read it. Say it in your head.</div><button class="btn main wide" @click=${e.reveal}>Show pinyin</button>`:v`<div class="q label">${r.stage===1?"Pinyin":"Meaning"} · did you have it?</div>
          <div class="two"><button class="btn miss" @click=${()=>e.answer("miss")}>Missed</button><button class="btn main" @click=${()=>e.answer("got")}>Got it</button></div>`}
    </div>
  </div>`};var us=(n,t)=>n.known?v`<span class="cf known">known</span>`:n.conf==null?S:v`<span class="cf ${n.state}"><span class="bar"><i style="width:${Math.round(n.conf*100)}%"></i><u style="left:${Math.round(t*100)}%"></u></span><span class="n">${Math.round(n.conf*100)}</span></span>`,fs=(n,t,e)=>{let s=F(n.book),a=n.progress,{list:r,counts:i}=un(s,a,n,t.dictSort),c=t.dictFilter.startsWith("bin:")?Number(t.dictFilter.slice(4)):null,o=p=>p.conf!=null&&Math.min(9,Math.floor(p.conf*10))===c,l=t.dictFilter==="all"?r:c!=null?r.filter(o):r.filter(p=>p.state===t.dictFilter);return v`<div class="pane page">
    <button class="back label" @click=${()=>e.go("stats")}>← Stats</button>
    <h1>Dictionary <span class="hc">${r.length}</span></h1>
    <div class="chips">${[["known","known"],["solid","solid"],["live","due"]].map(([p,d])=>v`<button class="chip ${p} ${t.dictFilter===p?"on":""}" @click=${()=>e.dictFilter(t.dictFilter===p?"all":p)}><i></i>${d}<span>${i[p]}</span></button>`)}</div>
    ${c!=null?v`<div class="binline label">confidence ${c*10}–${c*10+9} · ${l.length} words <button @click=${()=>e.dictFilter("all")}>clear</button></div>`:S}
    <div class="sortline label">sort <button class="${t.dictSort==="weak"?"on":""}" @click=${()=>e.dictSort("weak")}>weakest</button><button class="${t.dictSort==="taps"?"on":""}" @click=${()=>e.dictSort("taps")}>most tapped</button></div>
    ${l.length?v`<div class="island">${l.map(p=>{let d=t.dictOpen===p.t.key,m=d?Se(s,n.book,a.taps,p.t.key):null;return v`<div class="dict ${d?"open":""}" @click=${()=>e.dictOpen(d?null:p.t.key)}>
        <div class="zh">${lt(p.t,t,"dz"+p.t.key)}</div>
        <div class="mid"><div class="rp">${p.t.py}</div><div class="rg">${p.t.gloss}</div><div class="ct">${p.taps} ${p.taps===1?"tap":"taps"} · seen ${p.seen}</div></div>
        ${us(p,n.threshold)}
        ${d?v`<div class="more">${_n(m,n,t,"ds")}
          ${p.known?v`<div class="why label">never tapped in ${p.seen} ${p.seen===1?"read":"reads"}</div>`:S}</div>`:S}
      </div>`})}</div>`:v`<div class="note">${r.length?"No words in this state.":"Nothing read yet."}</div>`}
  </div>`},gs=(n,t)=>{let e=vn(n),s=Math.max(1,...e.map(o=>o.n)),a=n.threshold,r=e.reduce((o,l)=>o+(l.lo+.1<=a?l.n-l.known:0),0),i=e.reduce((o,l)=>o+l.n,0),c=e.reduce((o,l)=>o+l.known,0);return v`<div class="island hist">
    <div class="hh"><span class="label">Confidence</span><span class="label dim">${i} words read</span></div>
    <div class="bars">
      ${e.map(o=>v`<button class="bin ${o.lo+.1<=a?"under":"over"}" ?disabled=${!o.n} @click=${()=>t.openDict("bin:"+o.i)} aria-label="${o.n} words at ${o.i*10} to ${o.i*10+9}">
        <span class="bn">${o.n||""}</span><span class="col" style="height:${Math.round(o.n/s*96)}px"><i class="kn" style="height:${o.n?o.known/o.n*100:0}%"></i></span></button>`)}
      <span class="line" style="left:${a*100}%"><span class="label">${Math.round(a*100)}</span></span>
    </div>
    <div class="axis label"><span>0</span><span>50</span><span>100</span></div>
    <div class="hl"><span><i class="under"></i>${r} below the line</span><span><i class="over"></i>${i-r-c} above</span><span><i class="kn"></i>${c} known</span></div>
    <button class="todict label" @click=${()=>t.openDict("all")}>Dictionary →</button>
  </div>`},ms=(n,t,e)=>{let s=F(n.book),a=n.progress,r=hn(s,n.book,a),i=mn(s,n.book,a,n),c=i.rows[i.next],o=xn(a,n.now||Date.now()),l=o.miss.pinyin+o.miss.meaning,p=(n.moved&&n.moved.up||[]).map(u=>s.entryOf.get(u)).filter(Boolean),d=r.left==null?null:r.left<1?`~${Math.max(1,Math.round(r.left*60))}m left`:`~${r.left.toFixed(1)}h left`,m=.4,f=gn(a);return v`<div class="pane page stats">
    <h1>Stats</h1>
    <div class="island cover">
      <div class="label">Next up · ${V(n,t,c.c,"nx",!0)}</div>
      <div class="cbig">${Math.round(c.cov*100)}<span>%</span></div>
      <div class="cd">of its words you'd likely know, weighted by how often they come up.${c.unmet?` ${c.unmet} you haven't met yet.`:""}</div>
      <div class="covs">${i.rows.map(u=>v`<div class="cv ${u.c===i.next?"next":""}">
        <span class="t">${V(n,t,u.c,"cv"+u.c)}</span><span class="bar"><i style="width:${Math.round(u.cov*100)}%"></i><u style="left:${Math.round(n.threshold*100)}%"></u></span><span class="n">${Math.round(u.cov*100)}%</span></div>`)}</div>
    </div>
    ${gs(n,e)}
    <div class="bookline label">${r.readHz}/${r.totalHz} hanzi · ${St(r.readHz,r.totalHz)} of the book${d?` \xB7 ${d}`:""}</div>

    <div class="label section">Cards</div>
    <div class="island recall">
      <div class="label">Recall after a gap · last 30 days</div>
      <div class="cbig">${o.recall[1]?Math.round(100*o.recall[0]/o.recall[1]):"\u2013"}${o.recall[1]?v`<span>%</span>`:S}</div>
      <div class="cd">${o.recall[1]?`of words coming back on a later day, you had both pinyin and meaning first time. ${o.recall[0]} of ${o.recall[1]}.`:"Shows once a word comes back on a later day."}</div>
      <div class="rl"><div class="rh"><span class="label">Crossed the line from cards</span><span class="label dim">this week</span></div>
        <div class="rv"><b>${p.length}</b>${p.length?v`<span class="gchips">${p.map(u=>v`<span class="gc">${lt(u,t,"gr"+u.key)}</span>`)}</span>`:v`<span class="k">none yet</span>`}</div></div>
      ${l?v`<div class="rl"><div class="rh"><span class="label">Where misses fall</span><span class="label dim">${l} misses</span></div>
        <div class="split"><i class="sm" style="width:${100*o.miss.meaning/l}%"></i><i class="sp" style="width:${100*o.miss.pinyin/l}%"></i></div>
        <div class="sl"><span><i class="sm"></i>meaning ${Math.round(100*o.miss.meaning/l)}%</span><span><i class="sp"></i>pinyin ${Math.round(100*o.miss.pinyin/l)}%</span></div></div>`:S}
    </div>

    ${r.rows.length?v`
      <div class="label section">Chapters</div>
      <div class="island">${n.book.chapters.map((u,$)=>{let{passes:b}=zt(s,n.book,a,$),_=([...b].reverse().find(z=>z.rating)||{}).rating,M=[...b].reverse().find(z=>z.share>=.25)||b[b.length-1];return b.length?v`<div class="ch" @click=${()=>e.openChapter($)}>
          <div class="chh"><span class="t">${V(n,t,$,"ch"+$)}</span><span class="cr">${_?v`<span class="rt ${_}">${_}</span>`:S}<span class="label">${b.length} ${b.length===1?"read":"reads"} →</span></span></div>
          <div class="chb"><span class="tr"><i style="width:${Math.round(M.rate/m*100)}%"></i></span><span class="n">${Math.round(M.rate*100)}%</span><span class="sp">${M.speed?`${Math.round(M.speed)}/min`:"\u2013"}</span></div>
        </div>`:v`<div class="ch unread"><div class="chh"><span class="t">${V(n,t,$,"ch"+$)}</span><span class="label dim">not read</span></div></div>`})}</div>
      ${r.stuck?v`<div class="label section">Still not sticking · ${V(n,t,r.stuck.c,"sk")}</div>
        <div class="stuckchips">${r.stuck.list.map(u=>v`<span class="sc"><b>${lt(u.tok,t,"sc"+u.tok.key)}</b><span>${u.tapped}/${u.seen}</span></span>`)}</div>`:S}
    `:v`<div class="note">Nothing read yet.</div>`}
    <div class="label section">Backup</div>
    <div class="island backup">
      <div class="bl ${f.warn&&n.storageOk?"warn":""}">${n.storageOk?f.text:"This browser isn't saving. Taps and place will be lost when it closes."}</div>
      <div class="two"><button class="btn main" @click=${e.exportIt}>Export</button><button class="btn" @click=${e.importStart}>Import</button></div>
    </div>
    ${r.sittings.length?v`
      <details class="words sits" ?open=${t.allSittings} @toggle=${u=>e.allSittings(u.target.open)}>
        <summary><span class="label">Sittings · ${r.sittings.length}</span></summary>
        <div class="rows">${r.sittings.map(u=>v`<div class="sit"><div class="stat-head"><span>${At(u.start)}</span><span>${u.mins} min</span></div><div class="stat-sub">${u.sub}</div></div>`)}</div>
      </details>
    `:S}
  </div>`},vs=(n,t,e)=>{let s=F(n.book),a=n.progress,r=t.chapter,{passes:i}=zt(s,n.book,a,r),c=Me(s,n.book,a,W(s,a)),o=c.find(f=>f.c===r),l=([...i].reverse().find(f=>f.rating)||{}).rating,p=Math.max(.1,...i.map(f=>f.rate)),d=i.map(f=>f.speed).filter(Boolean),m=Math.max(1,...d);return v`<div class="pane page">
    <button class="back label" @click=${()=>e.go("stats")}>← Stats</button>
    <h1>${V(n,t,r,"cht",!0)}</h1>
    <div class="note">${i.length} ${i.length===1?"read":"reads"}${l?` \xB7 last felt ${l}`:""}</div>
    ${i.length?v`
    <div class="island graph">
      <div class="hh"><span class="label">Tapped, each read</span><span class="label dim">lower = more known</span></div>
      <div class="gbars">${i.map((f,u)=>v`<div class="gb ${u===i.length-1?"last":""} ${f.share<.25?"part":""}">
        <span class="gv">${Math.round(f.rate*100)}%</span><span class="gcol" style="height:${Math.round(f.rate/p*84)}px"></span><span class="gx label">${u+1}</span><span class="gr ${f.rating||""}">${f.rating||"\xB7"}</span></div>`)}</div>
      ${d.length?v`<div class="hh sp2"><span class="label">Speed</span><span class="label dim">hanzi / min</span></div>
      <div class="gspeed">${i.map(f=>v`<span class="gs">${f.speed?v`<i style="width:${Math.round(f.speed/m*100)}%"></i><b>${Math.round(f.speed)}</b>`:v`<b class="dim">–</b>`}</span>`)}</div>`:S}
    </div>
    <div class="label section">Each read</div>
    ${[...i].map((f,u)=>({x:f,i:u})).reverse().map(({x:f,i:u})=>v`<div class="island pass">
      <div class="stat-head"><span>Read ${u+1} · ${At(f.start)}</span><span class="ph2">${f.rating?v`<span class="rt ${f.rating}">${f.rating}</span>`:S}${Math.max(1,Math.round(f.mins))} min</span></div>
      <div class="stat-sub">${f.share<.98?`${Math.round(f.share*100)}% of the chapter \xB7 `:""}${f.speed?`${Math.round(f.speed)}/min \xB7 `:""}${Math.round(f.rate*100)}% tapped · ${f.keys.length} words</div>
      ${f.keys.length?v`<div class="pchips">${f.keys.map($=>v`<span class="gc">${lt($,t,`p${u}.${$.key}`)}</span>`)}</div>`:S}
      ${u===0&&o?v`<div class="tri">${[["new words",o.fresh],["tapped before",o.again],["never tapped",o.known]].map(([$,b])=>v`<div><div class="n">${St(b[1],b[0])}</div><div class="k">${$}</div><div class="k">${b[1]}/${b[0]}</div></div>`)}</div>`:S}
    </div>`)}`:v`<div class="note">Not read yet.</div>`}
  </div>`},xs=(n,t,e)=>v`<div class="pane page first">
  <div class="mark label">zher</div>
  <h1>Put your book on this phone</h1>
  <div class="note">It stays here. Nothing is uploaded, and it all works offline.</div>
  <div class="island step ${n.book?"done":"live"}">
    <div class="sh"><span class="label">1 · Book</span>${n.book?v`<span class="label ok">loaded</span>`:S}</div>
    ${n.book?v`<div class="sb"><b>${n.book.title}</b><span>${n.book.chapters.length} chapters · ${F(n.book).totalHz.toLocaleString()} hanzi</span></div>`:v`<div class="sb"><span>The book file from home: one .json.</span></div>
        <button class="btn main wide" ?disabled=${t.busy==="book"} @click=${e.pickBook}>${t.busy==="book"?"Loading\u2026":"Choose book file"}</button>`}
  </div>
  <div class="island step ${n.book?"live":"wait"}">
    <div class="sh"><span class="label">2 · Progress</span><span class="label dim">optional</span></div>
    <div class="sb"><span>Coming from the stitch reader? Import its export to carry over your taps, cards and place.</span></div>
    <button class="btn wide" ?disabled=${!n.book||t.busy==="import"} @click=${e.importStart}>${t.busy==="import"?"Reading\u2026":"Import progress"}</button>
  </div>
  <button class="btn main wide start" ?disabled=${!n.book} @click=${e.begin}>Start reading</button>
</div>`,bs=(n,t,e)=>v`<nav class="dock ${t.dockAway&&t.view==="read"?"away":""}">
  <button class="${t.view==="read"?"on":""}" @click=${()=>e.go("read")}>Read</button>
  <button class="${t.view==="cards"?"on":""}" @click=${()=>e.go("cards")}>Cards</button>
  <button class="${t.view==="stats"||t.view==="dict"||t.view==="chapter"?"on":""}" @click=${()=>e.go("stats")}>Stats</button>
</nav>`,wn=(n,t,e)=>{if(!t.confirm)return S;let s=t.confirm;return v`<div class="scrim" @click=${e.cancelConfirm}></div>
  <div class="modal">
    <div class="mt">Reset to this backup?</div>
    <div class="md">From ${s.exportedAt?At(Date.parse(s.exportedAt)):"an unknown date"} · ${s.taps} taps · ${s.answers} answers. Everything on this phone since then is lost.</div>
    <div class="two"><button class="btn" @click=${e.cancelConfirm}>Cancel</button><button class="btn danger" @click=${e.confirmImport}>Reset</button></div>
  </div>`},kn=n=>n.toast?v`<div class="toast" role="status"><span>${n.toast.text}</span>${n.toast.action?v`<button @click=${n.toast.action.fn}>${n.toast.action.label}</button>`:S}</div>`:S;function Mn(n,t,e){return!n.book||t.view==="first"?v`${xs(n,t,e)}${wn(n,t,e)}${kn(t)}`:v`
    ${cs(n,t,e)}
    ${t.view==="cards"?hs(n,t,e):t.view==="dict"?fs(n,t,e):t.view==="stats"?ms(n,t,e):t.view==="chapter"?vs(n,t,e):S}
    ${ps(n,t)}
    ${bs(n,t,e)}${wn(n,t,e)}${kn(t)}`}var Sn=`
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
`;function An(n,t,{on:e=()=>{},backMotion:s="slide"}={}){let a=matchMedia("(prefers-reduced-motion: reduce)").matches,r=document.createElement("style");r.textContent=Sn;let i=document.createElement("div");i.className="ph",n.append(r,i);let c=t,o={view:c.book?c.mode==="cards"?"cards":"read":"first",sec:{kind:"index"},active:null,zpop:null,openReviews:new Set,card:null,lastKey:null,menu:!1,confirm:null,toast:null,busy:null,dictSort:"weak",dictOpen:null,dictFilter:"all",statOpen:null,allSittings:!1},l=!1,p=null,d=null,m=0,f=!1,u=0,$=null,b=()=>i.querySelector(".pane.read"),_=()=>{l=!1,g(),ke(Mn(c,o,ue),i),Y()},M=()=>{l||(l=!0,requestAnimationFrame(_))},z=(h,x)=>{let k;try{k=e(h,x)}catch(A){return j(A.message),Promise.resolve()}return Promise.resolve(k).then(A=>(typeof A=="string"&&j(A),A),A=>{j(A&&A.message||"Something went wrong")})};function j(h,x){clearTimeout(p),o.toast={text:h,action:x},p=setTimeout(()=>{o.toast=null,M()},x?5e3:2600),M()}function g(){if(!c.book||(o.card&&!c.stream.includes(o.card.key)&&o.card.stage===0&&(o.card=null),o.card))return;let h=c.stream.find(x=>x!==o.lastKey)||c.stream[0];o.card=h?{key:h,stage:0,py:null,shown:Date.now(),ms:null}:null}function w(){let h=b();if(!h)return null;let x=h.getBoundingClientRect().top;for(let k of h.querySelectorAll("[data-pos]")){let A=k.getBoundingClientRect();if(A.bottom>x+60)return{pos:k.dataset.pos,offset:Math.round(A.top-x)}}return null}function T(){if(o.view!=="read"||o.sec.kind!=="chapter")return;let h=w();h&&($=h,z("position",f?{...h,jump:!0}:h),f=!1)}function L(){let h=b(),x=c.progress.position;if(!h||!x||o.sec.kind!=="chapter"||Number(x.pos.split(".")[0])!==o.sec.c)return;let k=h.querySelector(`[data-pos="${x.pos}"]`);k&&(h.scrollTop+=k.getBoundingClientRect().top-h.getBoundingClientRect().top-x.offset),$=x}function Y(){let h=i.querySelector(".pop"),x=i.querySelector(o.zpop?".z.on":".pane.read .w.on");if(!h||!x)return;let k=i.getBoundingClientRect(),A=x.getClientRects()[0],B=h.offsetWidth,C=h.offsetHeight,P=10,I=10,Pt=Math.max(I,Math.min(A.left-k.left+A.width/2-B/2,k.width-B-I)),K=A.top-k.top-C-P;h.style.left=`${Pt}px`,h.style.top=`${K>=I+6?K:A.bottom-k.top+P}px`}let gt=()=>{o.active&&(o.active=null,M())};function Gn(h){let[x,k,A]=h.split(".").map(Number);return{t:(k<0?c.book.chapters[x].title:c.book.chapters[x].blocks[k].tokens)[A],c:x,b:k,i:A}}function Pe(h,x){let{t:k,c:A,b:B,i:C}=Gn(h),P={word:k.t,key:k.key,chapter:A,block:B,token:C,level:x===1?"pinyin":"meaning"};k.name&&(P.name=!0),z("tap",P)}function jt(){let h=b(),x=i.querySelector(".rail i");if(!h||!x)return;let k=h.scrollHeight-h.clientHeight;x.style.height=`${k>0?Math.min(100,100*h.scrollTop/k):100}%`}let Ft="cubic-bezier(.16,1,.3,1)",Ge=680,mt=!1;function Ue(h){let x=b();x&&(h.land==="pos"?(x.scrollTop=0,L()):x.scrollTop=h.land==="end"?x.scrollHeight:0,jt())}function vt(h,x="up",k=x==="up"?"slide":s){if(!h||mt)return;let A=b(),B=i.querySelector(".fx");T();let C=null;A&&B&&!a&&(C=A.cloneNode(!0),C.classList.add("ghost"),C.removeAttribute("hidden"),B.append(C),C.scrollTop=A.scrollTop),o.active=null,o.zpop=null,o.dockAway=!1,u=0,h.kind==="chapter"&&o.sec.kind==="index"&&h.land!=="pos"&&(f=!0),o.sec={kind:h.kind,c:h.c},_();let P=h.land||(h.kind==="chapter"&&x==="down"?"end":"top");Ue({land:P});let I=b();if(!C)return;mt=!0;let Pt=()=>{C.remove(),mt=!1,I.style.transform="",I.style.opacity=""},K,Ys=(Z,Q,Gt=0)=>{I.scrollTop=0;let Ut=performance.now()+Gt,qt=Yt=>{let Wt=Math.max(0,Math.min(1,(Yt-Ut)/Q)),Vt=1-Math.pow(1-Wt,4);I.scrollTop=Z*Vt,jt(),Wt<1&&requestAnimationFrame(qt)};requestAnimationFrame(qt)};if(k==="fade")K=[C.animate([{opacity:1},{opacity:0}],{duration:320,easing:"ease-out",fill:"forwards"}),I.animate([{opacity:0,transform:"translateY(-14px)"},{opacity:1,transform:"none"}],{duration:520,delay:140,easing:Ft,fill:"backwards"})];else if(k==="sling"){let Z=I.scrollTop,Q=I.clientHeight,Gt=pe||0;pe=0,I.scrollTop=0,I.style.transform=`translateY(${Q+Gt}px)`;let Ut=-Gt,qt=Q+Z,Yt=qt-Ut,Wt=Math.min(2300,Math.max(1100,900+Yt*.45)),Vt=4.2,Yn=xt=>(1-Math.exp(-Vt*xt))/(1-Math.exp(-Vt));K=[new Promise(xt=>{let Wn=performance.now(),Ze=Vn=>{let Je=Math.min(1,(Vn-Wn)/Wt),Xt=Ut+Yt*Yn(Je);C.style.transform=`translateY(${-Xt}px)`,Xt<Q?(I.style.transform=`translateY(${Q-Xt}px)`,I.scrollTop=0):(I.style.transform="none",I.scrollTop=Xt-Q),jt(),Je<1?requestAnimationFrame(Ze):xt()};requestAnimationFrame(Ze)})].map(xt=>({finished:xt}))}else{let Z=x==="up"?1:-1;K=[C.animate([{transform:"none",opacity:1},{transform:`translateY(${-100*Z}%)`,opacity:.4}],{duration:Ge,easing:Ft,fill:"forwards"}),I.animate([{transform:`translateY(${100*Z}%)`},{transform:"none"}],{duration:Ge,easing:Ft})]}Promise.all(K.map(Z=>Z.finished)).then(Pt,Pt)}let le=()=>vt(Kt(c,o.sec),"up"),ce=()=>{o.sec.kind==="index"&&vt(Qt(c),"down","sling")},de=()=>vt(Jt(c,o.sec),"down"),Bt=96,Un=150,H=null,pe=0,he=()=>i.querySelector(".pull");function qe(h,x){let k=he(),A=b();if(!k||!A)return;if(!(h==="up"?Kt(c,o.sec):o.sec.kind==="index"?Qt(c):Jt(c,o.sec)))return rt();let C=Math.min(1,x/Bt),P=h==="down"&&o.sec.kind==="index";if(k.className=`pull on ${h} ${P?"sl":""} ${C>=1?"ready":""}`,k.querySelector(".pt").textContent=P?C>=1?"release":"charging":C>=1?"let go":"keep pulling",k.querySelector(".pb i").style.width=`${C*100}%`,P){let I=Un*(1-Math.exp(-x/110));if(A.style.transform=`translateY(${I}px)`,H.off=I,C>=1&&!H.clicked){H.clicked=!0,k.animate([{transform:"translateX(-50%) scale(1)"},{transform:"translateX(-50%) scale(1.08)"},{transform:"translateX(-50%) scale(1)"}],{duration:160,easing:"ease-out"}),A.animate([{transform:`translateY(${I}px)`},{transform:`translateY(${I+6}px)`},{transform:`translateY(${I}px)`}],{duration:140,easing:"ease-out"});try{navigator.vibrate&&navigator.vibrate(8)}catch{}}else C<1&&(H.clicked=!1);return}A.style.transform=`translateY(${(h==="up"?-1:1)*Math.min(x,Bt*1.5)*.35}px)`}function rt(){let h=he(),x=b();h&&(h.className="pull"),x&&x.style.transform&&(x.animate([{transform:x.style.transform},{transform:"none"}],{duration:420,easing:Ft}),x.style.transform="")}let Ye=h=>h.scrollTop+h.clientHeight>=h.scrollHeight-2,We=h=>h.scrollTop<=0;function Ve(){if(!H)return;let h=H.d>=Bt,x=H.dir,k=x==="down"&&o.sec.kind==="index",A=H.off||0;H=null;let B=he();if(B&&(B.className="pull"),h&&k){pe=A,ce();return}let C=b();h?(C&&(C.style.transform=""),(x==="up"?le:de)()):rt()}i.addEventListener("touchstart",h=>{o.view!=="read"||mt||!h.target.closest(".pane.read")||(H={y0:h.touches[0].clientY,dir:null,d:0})},{passive:!0}),i.addEventListener("touchmove",h=>{if(!H)return;let x=b(),k=h.touches[0].clientY-H.y0;if(!H.dir)if(k<-6&&Ye(x))H.dir="up";else if(k>6&&We(x))H.dir="down";else if(Math.abs(k)>6){H=null;return}else return;let A=H.dir==="up"?-k:k;if(A<=0){H.d=0,rt();return}h.preventDefault(),H.d=A,qe(H.dir,A)},{passive:!1}),i.addEventListener("touchend",Ve),i.addEventListener("touchcancel",()=>{H=null,rt()});let Xe=null;i.addEventListener("wheel",h=>{if(o.view!=="read"||mt||!h.target.closest(".pane.read"))return;let x=b(),k=h.deltaY>0?"up":"down";if(!(k==="up"?Ye(x):We(x))){H&&(H=null,rt());return}(!H||H.dir!==k)&&(H={dir:k,d:0}),h.preventDefault(),H.d+=Math.abs(h.deltaY)*.35,qe(k,H.d),clearTimeout(Xe),Xe=setTimeout(()=>{H&&H.d>=Bt?Ve():(H=null,rt())},220)},{passive:!1});let ue={readerClick(h){let x=h.target.closest(".w");if(!x){gt();return}let k=x.dataset.at;if(o.active&&o.active.at===k){if(o.active.level===2){gt();return}o.active.level=2,Pe(k,2)}else o.active={at:k,level:1},m=b().scrollTop,Pe(k,1);M()},scroll(){jt();let h=b().scrollTop,x=h-u;if(Math.abs(x)>6){let k=x>0&&h>40;u=h,k!==!!o.dockAway&&(o.dockAway=k,M())}o.active&&Math.abs(b().scrollTop-m)>24&&gt(),clearTimeout(d),d=setTimeout(T,250)},rate:(h,x,k)=>z("rate",{chapter:h,rating:x,replaces:k||null}),reviewToggle(h,x){x?o.openReviews.add(h):o.openReviews.delete(h)},next:le,back:de,sling:ce,openSec:vt,go(h){if(o.menu=!1,o.active=null,o.zpop=null,o.dockAway=!1,h===o.view){h==="read"&&o.sec.kind!=="index"?vt({kind:"index"},"down"):M();return}o.view==="read"&&T(),o.view=h,o.dictOpen=null,(h==="read"||h==="cards")&&h!==c.mode&&z("mode",{mode:h}),M(),requestAnimationFrame(()=>{let x=i.querySelector(".pane.page");x&&(x.scrollTop=0)})},reveal(){o.card&&o.card.stage===0&&(o.card.stage=1,o.card.ms=Date.now()-o.card.shown,M())},answer(h){let x=o.card;if(x){if(x.stage===1){x.py=h,x.stage=2,M();return}x.stage===2&&(o.lastKey=x.key,o.card=null,z("answer",{key:x.key,word:qn(x.key),pinyin:x.py,meaning:h,ms:x.ms}),M())}},dictSort(h){o.dictSort=h,M()},dictOpen(h){o.dictOpen=h,M()},dictFilter(h){o.dictFilter=h,o.dictOpen=null,M()},openDict(h="all"){o.dictFilter=h,ue.go("dict")},openChapter(h){o.chapter=h,ue.go("chapter")},allSittings(h){o.allSittings=h},pickBook(){o.busy="book",M(),z("pickBook",{}).finally(()=>{o.busy=null,M()})},begin(){o.view=c.mode==="cards"?"cards":"read",o.sec={kind:"index"},M()},importStart(){o.menu=!1,o.busy="import",M(),z("import",{}).then(h=>{o.busy=null,h&&typeof h=="object"&&(o.confirm=h),M()})},cancelConfirm(){o.confirm=null,M()},confirmImport(){o.confirm=null,$=null,z("importConfirm",{}),M()},exportIt(){o.menu=!1,z("export",{}),M()}},qn=h=>{for(let x of c.book.chapters)for(let k of[{tokens:x.title},...x.blocks])for(let A of k.tokens||[])if(A.key===h)return A.t;return h};return i.addEventListener("click",h=>{let x=h.target.closest(".z");if(x){h.stopPropagation(),h.preventDefault(),o.active=null,o.zpop=o.zpop&&o.zpop.id===x.dataset.z?o.zpop.level===1?{...o.zpop,level:2}:null:{id:x.dataset.z,key:x.dataset.k,level:1},M();return}o.zpop&&(o.zpop=null,M())},!0),i.addEventListener("scroll",()=>{o.zpop&&(o.zpop=null,M())},!0),_(),{update(h){let x=!!c.book,k=c.progress&&c.progress.position;c=h,c.book||(o.view="first",o.card=null),_();let A=c.progress.position;x&&A&&A!==k&&(!$||A.pos!==$.pos||A.offset!==$.offset)&&(o.sec={kind:"index"},_())},navigate(h){h==="up"?le():h==="sling"?ce():de()},show(h){o.view="read",o.sec={kind:h.kind,c:h.c},_(),Ue({land:h.land||"top"})},toast:j,destroy(){clearTimeout(p),clearTimeout(d),ke(null,i),i.remove(),r.remove()}}}var De=class n extends Error{constructor(t="FSRS Error"){super(t),this.name="FSRSError",Error.captureStackTrace?.(this,n)}},O=class n extends De{constructor(t){super(t),this.name="FSRSValidationError",Error.captureStackTrace?.(this,n)}},N=(n=>(n[n.New=0]="New",n[n.Learning=1]="Learning",n[n.Review=2]="Review",n[n.Relearning=3]="Relearning",n))(N||{}),y=(n=>(n[n.Manual=0]="Manual",n[n.Again=1]="Again",n[n.Hard=2]="Hard",n[n.Good=3]="Good",n[n.Easy=4]="Easy",n))(y||{}),D=class n{static card(t){return{...t,state:n.state(t.state),due:n.time(t.due),last_review:t.last_review?n.time(t.last_review):void 0}}static rating(t){if(typeof t=="string"){let e=t.charAt(0).toUpperCase(),s=t.slice(1).toLowerCase(),a=y[`${e}${s}`];if(a===void 0)throw new O(`Invalid rating:[${t}]`);return a}else if(typeof t=="number")return t;throw new O(`Invalid rating:[${t}]`)}static state(t){if(typeof t=="string"){let e=t.charAt(0).toUpperCase(),s=t.slice(1).toLowerCase(),a=N[`${e}${s}`];if(a===void 0)throw new O(`Invalid state:[${t}]`);return a}else if(typeof t=="number")return t;throw new O(`Invalid state:[${t}]`)}static time(t){if(t instanceof Date)return t;let e=new Date(t);if(typeof t=="object"&&t!==null&&!Number.isNaN(Date.parse(t)||+e))return e;if(typeof t=="string"){let s=Date.parse(t);if(Number.isNaN(s))throw new O(`Invalid date:[${t}]`);return new Date(s)}else if(typeof t=="number")return new Date(t);throw new O(`Invalid date:[${t}]`)}static review_log(t){return{...t,due:n.time(t.due),rating:n.rating(t.rating),state:n.state(t.state),review:n.time(t.review)}}};Date.prototype.scheduler=function(n,t){return U(this,n,t)};Date.prototype.diff=function(n,t){return dt(this,n,t)};Date.prototype.format=function(){return ys(this)};Date.prototype.dueFormat=function(n,t,e){return ws(this,n,t,e)};function U(n,t,e){return new Date(e?D.time(n).getTime()+t*24*60*60*1e3:D.time(n).getTime()+t*60*1e3)}function dt(n,t,e){if(!n||!t)throw new O("Invalid date");let s=D.time(n).getTime()-D.time(t).getTime(),a=0;switch(e){case"days":a=Math.floor(s/(24*60*60*1e3));break;case"minutes":a=Math.floor(s/(60*1e3));break}return a}function ys(n){let t=D.time(n),e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),r=t.getHours(),i=t.getMinutes(),c=t.getSeconds();return`${e}-${Et(s)}-${Et(a)} ${Et(r)}:${Et(i)}:${Et(c)}`}function Et(n){return n<10?`0${n}`:`${n}`}var Ne=[60,60,24,31,12],He=["second","min","hour","day","month","year"];function ws(n,t,e,s=He){n=D.time(n),t=D.time(t),s.length!==He.length&&(s=He);let a=n.getTime()-t.getTime(),r=0;for(a/=1e3,r=0;r<Ne.length&&!(a<Ne[r]);r++)a/=Ne[r];return`${Math.floor(a)}${e?s[r]:""}`}var ks=Object.freeze([y.Again,y.Hard,y.Good,y.Easy]),$s=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function _s(n,t,e){let s=1;for(let i of $s)s+=i.factor*Math.max(Math.min(n,i.end)-i.start,0);n=Math.min(n,e);let a=Math.max(2,Math.round(n-s)),r=Math.min(Math.round(n+s),e);return n>t&&(a=Math.max(a,t+1)),a=Math.min(a,r),{min_ivl:a,max_ivl:r}}function q(n,t,e){return Math.min(Math.max(n,t),e)}function G(n,t){let e=10**t;return Math.round(n*e)/e}function Ms(n,t){let e=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),s=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate());return Math.floor((s-e)/864e5)}var Ss=n=>{let t=n.slice(-1),e=parseInt(n.slice(0,-1),10);if(Number.isNaN(e)||!Number.isFinite(e)||e<0)throw new O(`Invalid step value: ${n}`);switch(t){case"m":return e;case"h":return e*60;case"d":return e*1440;default:throw new O(`Invalid step unit: ${n}, expected m/h/d`)}},As=(n,t,e)=>{let s=t===N.Relearning||t===N.Review?n.relearning_steps:n.learning_steps,a=s.length;if(a===0||e>=a)return{};let r=s[0],i=Ss,c=()=>i(r),o=()=>{if(a===1)return Math.round(i(r)*1.5);let f=s[1];return Math.round((i(r)+i(f))/2)},l=f=>f<0||f>=a?null:s[f],p=f=>i(f),d={},m=l(Math.max(0,e));if(t===N.Review)return d[y.Again]={scheduled_minutes:i(m),next_step:0},d;{d[y.Again]={scheduled_minutes:c(),next_step:0},d[y.Hard]={scheduled_minutes:o(),next_step:e};let f=l(e+1);if(f){let u=p(f);u&&(d[y.Good]={scheduled_minutes:Math.round(u),next_step:e+1})}}return d};function zs(){let n=this.review_time.getTime(),t=this.current.reps,e=this.current.difficulty*this.current.stability;return`${n}_${t}_${e}`}var ae=(n=>(n.SCHEDULER="Scheduler",n.LEARNING_STEPS="LearningSteps",n.SEED="Seed",n))(ae||{}),ee=class{constructor(t,e,s,a){R(this,"last");R(this,"current");R(this,"review_time");R(this,"next",new Map);R(this,"algorithm");R(this,"strategies");R(this,"elapsed_days",0);this.algorithm=s,this.last=D.card(t),this.current=D.card(t),this.review_time=D.time(e),this.strategies=a,this.init()}checkGrade(t){if(!Number.isFinite(t)||t<1||t>4)throw new O(`Invalid grade "${t}",expected 1-4`)}init(){let{state:t,last_review:e}=this.current,s=0;t!==N.New&&e&&(s=Ms(e,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=s,this.current.elapsed_days=s,this.current.reps+=1;let a=zs;if(this.strategies){let r=this.strategies.get(ae.SEED);r&&(a=r)}this.algorithm.seed=a.call(this)}preview(){return{[y.Again]:this.review(y.Again),[y.Hard]:this.review(y.Hard),[y.Good]:this.review(y.Good),[y.Easy]:this.review(y.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(let t of ks)yield this.review(t)}review(t){let{state:e}=this.last,s;switch(this.checkGrade(t),e){case N.New:s=this.newState(t);break;case N.Learning:case N.Relearning:s=this.learningState(t);break;case N.Review:s=this.reviewState(t);break}return s}buildLog(t){let{last_review:e,due:s,elapsed_days:a}=this.last;return{rating:t,state:this.current.state,due:e||s,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:a,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}},Ce=class{constructor(t){R(this,"c");R(this,"s0");R(this,"s1");R(this,"s2");let e=Es();this.c=1,this.s0=e(" "),this.s1=e(" "),this.s2=e(" "),t==null&&(t=Date.now()),this.s0-=e(t),this.s0<0&&(this.s0+=1),this.s1-=e(t),this.s1<0&&(this.s1+=1),this.s2-=e(t),this.s2<0&&(this.s2+=1)}next(){let t=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=t|0,this.s2=t-this.c,this.s2}set state(t){this.c=t.c,this.s0=t.s0,this.s1=t.s1,this.s2=t.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}};function Es(){let n=4022871197;return function(e){e=String(e);for(let s=0;s<e.length;s++){n+=e.charCodeAt(s);let a=.02519603282416938*n;n=a>>>0,a-=n,a*=n,n=a>>>0,a-=n,n+=a*4294967296}return(n>>>0)*23283064365386963e-26}}function Ts(n){let t=new Ce(n),e=()=>t.next();return e.int32=()=>t.next()*4294967296|0,e.double=()=>e()+(e()*2097152|0)*11102230246251565e-32,e.state=()=>t.state,e.importState=s=>(t.state=s,e),e}var Ns="5.4.2",Hs=.9,Ds=36500,Cs=!1,re=!0,Is=Object.freeze(["1m","10m"]),Ls=Object.freeze(["10m"]),oa=`v${Ns} using FSRS-6.0`,X=.001;var te=100,zn=.5,Rs=.1542,En=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,Rs]),Tn=2,Os=(n,t=re)=>[[X,te],[X,te],[X,te],[X,te],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,n],[0,n],[t?.01:0,.8],[.1,.8]],pt=(n,t,e=re)=>{let s=Os(Tn,e).slice(0,n.length);if(Math.max(0,t)>1){let a=q(n[11]||0,s[11][0],s[11][1]),r=q(n[13]||0,s[13][0],s[13][1]),i=q(n[14]||0,s[14][0],s[14][1]),c=-(Math.log(a)+Math.log(Math.pow(2,r)-1)+i*.3)/t,o=q(G(Math.sqrt(Math.max(c,0)),8),.01,Tn);s[17]&&(s[17]=[s[17][0],o]),s[18]&&(s[18]=[s[18][0],o])}return s.map(([a,r],i)=>q(n[i]||0,a,r))};var Oe=(n,t=0,e=re)=>{if(n===void 0)return[...En];switch(n.length){case 21:return pt(Array.from(n),t,e);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),pt(Array.from(n),t,e).concat([0,zn]);case 17:{let s=pt(Array.from(n),t,e);return s[4]=+(s[5]*2+s[4]).toFixed(8),s[5]=+(Math.log(s[5]*3+1)/3).toFixed(8),s[6]=+(s[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),s.concat([0,0,0,zn])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...En]}},je=n=>{let t=Array.isArray(n?.learning_steps)?n.learning_steps:Is,e=Array.isArray(n?.relearning_steps)?n.relearning_steps:Ls,s=n?.enable_short_term??re,a=Oe(n?.w,e.length,s);return{request_retention:n?.request_retention||Hs,maximum_interval:n?.maximum_interval||Ds,w:a,enable_fuzz:n?.enable_fuzz??Cs,enable_short_term:s,learning_steps:t,relearning_steps:e}};function Nt(n,t){let e={due:n?D.time(n):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:N.New,last_review:void 0};return t&&typeof t=="function"?t(e):e}var Nn=n=>{let t=typeof n=="number"?-n:-n[20],e=Math.exp(Math.pow(t,-1)*Math.log(.9))-1;return{decay:t,factor:G(e,8)}};function Ht(n,t,e){let{decay:s,factor:a}=Nn(n);return G(Math.pow(1+a*t/e,s),8)}var Ie=class{constructor(t){R(this,"param");R(this,"intervalModifier");R(this,"_seed");R(this,"prepare_parameters",t=>{let e=je(t);return e.w=pt(Array.from(e.w),e.relearning_steps.length,e.enable_short_term),e});R(this,"forgetting_curve");this.param=new Proxy(this.prepare_parameters(t),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=Ht.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(t){this._seed=t}calculate_interval_modifier(t){if(t<=0||t>1)throw new O("Requested retention rate should be in the range (0,1]");let{decay:e,factor:s}=Nn(this.param.w);return G((Math.pow(t,1/e)-1)/s,8)}get parameters(){return this.param}set parameters(t){this.update_parameters(t)}params_handler_proxy(){let t=this;return{set:function(e,s,a){return s==="request_retention"&&Number.isFinite(a)?t.intervalModifier=t.calculate_interval_modifier(Number(a)):s==="w"&&(a=Oe(a,e.relearning_steps.length,e.enable_short_term),a=pt(Array.from(a),e.relearning_steps.length,e.enable_short_term),t.forgetting_curve=Ht.bind(this,a),t.intervalModifier=t.calculate_interval_modifier(Number(e.request_retention))),Reflect.set(e,s,a),!0}}}update_parameters(t){let e=this.prepare_parameters(t);for(let s in e){let a=s;this.param[a]=e[a]}}init_stability(t){return Math.max(this.param.w[t-1],.1)}init_difficulty(t){let e=this.param.w,s=e[4]-Math.exp((t-1)*e[5])+1;return G(s,8)}apply_fuzz(t,e){if(!this.param.enable_fuzz||t<2.5)return Math.round(t);let a=Ts(this._seed)(),{min_ivl:r,max_ivl:i}=_s(t,e,this.param.maximum_interval);return Math.floor(a*(i-r+1)+r)}next_interval(t,e){let s=Math.min(Math.max(1,Math.round(t*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(s,e)}linear_damping(t,e){return G(t*(10-e)/9,8)}next_difficulty(t,e){let s=-this.param.w[6]*(e-3),a=t+this.linear_damping(s,t);return q(this.mean_reversion(this.init_difficulty(y.Easy),a),1,10)}mean_reversion(t,e){let s=this.param.w;return G(s[7]*t+(1-s[7])*e,8)}next_recall_stability(t,e,s,a){let r=this.param.w,i=y.Hard===a?r[15]:1,c=y.Easy===a?r[16]:1;return G(q(e*(1+Math.exp(r[8])*(11-t)*Math.pow(e,-r[9])*(Math.exp((1-s)*r[10])-1)*i*c),X,36500),8)}next_forget_stability(t,e,s){let a=this.param.w;return G(q(a[11]*Math.pow(t,-a[12])*(Math.pow(e+1,a[13])-1)*Math.exp((1-s)*a[14]),X,36500),8)}next_short_term_stability(t,e){let s=this.param.w,a=Math.pow(t,-s[19])*Math.exp(s[17]*(e-3+s[18])),r=e>=y.Hard?Math.max(a,1):a;return G(q(t*r,X,36500),8)}next_state(t,e,s,a){let{difficulty:r,stability:i}=t??{difficulty:0,stability:0};if(e<0)throw new O(`Invalid delta_t "${e}"`);if(s<0||s>4)throw new O(`Invalid grade "${s}"`);if(r===0&&i===0)return{difficulty:q(this.init_difficulty(s),1,10),stability:this.init_stability(s)};if(s===0)return{difficulty:r,stability:i};if(r<1||i<X)throw new O(`Invalid memory state { difficulty: ${r}, stability: ${i} }`);let c=this.param.w;a=typeof a=="number"?a:this.forgetting_curve(e,i);let o;if(e===0&&this.param.enable_short_term)o=this.next_short_term_stability(i,s);else if(s===1){let p=this.next_forget_stability(r,i,a),[d,m]=[0,0];this.param.enable_short_term&&(d=c[17],m=c[18]);let f=i/Math.exp(d*m);o=q(G(f,8),X,p)}else o=this.next_recall_stability(r,i,a,s);return{difficulty:this.next_difficulty(r,s),stability:o}}},ne=class extends ee{constructor(e,s,a,r){super(e,s,a,r);R(this,"learningStepsStrategy");let i=As;if(this.strategies){let c=this.strategies.get(ae.LEARNING_STEPS);c&&(i=c)}this.learningStepsStrategy=i}getLearningInfo(e,s){let a=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;let r=this.learningStepsStrategy(a,e.state,e.learning_steps),i=Math.max(0,r[s]?.scheduled_minutes??0),c=Math.max(0,r[s]?.next_step??0);return{scheduled_minutes:i,next_steps:c}}applyLearningSteps(e,s,a){let{scheduled_minutes:r,next_steps:i}=this.getLearningInfo(this.current,s);if(r>0&&r<1440)e.learning_steps=i,e.scheduled_days=0,e.state=a,e.due=U(this.review_time,Math.round(r),!1);else if(e.state=N.Review,r>=1440)e.learning_steps=i,e.due=U(this.review_time,Math.round(r),!1),e.scheduled_days=Math.floor(r/1440);else{e.learning_steps=0;let c=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=c,e.due=U(this.review_time,c,!0)}}newState(e){let s=this.next.get(e);if(s)return s;let a=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(a,e,N.Learning);let r={card:a,log:this.buildLog(e)};return this.next.set(e,r),r}learningState(e){let s=this.next.get(e);if(s)return s;let a=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(a,e,this.last.state);let r={card:a,log:this.buildLog(e)};return this.next.set(e,r),r}reviewState(e){let s=this.next.get(e);if(s)return s;let a=this.elapsed_days,r=this.algorithm.forgetting_curve(a,this.current.stability),i=this.next_ds(a,y.Again,r),c=this.next_ds(a,y.Hard,r),o=this.next_ds(a,y.Good,r),l=this.next_ds(a,y.Easy,r);this.next_interval(c,o,l,a),this.next_state(c,o,l),this.applyLearningSteps(i,y.Again,N.Relearning),i.lapses+=1;let p={card:i,log:this.buildLog(y.Again)},d={card:c,log:super.buildLog(y.Hard)},m={card:o,log:super.buildLog(y.Good)},f={card:l,log:super.buildLog(y.Easy)};return this.next.set(y.Again,p),this.next.set(y.Hard,d),this.next.set(y.Good,m),this.next.set(y.Easy,f),this.next.get(e)}next_ds(e,s,a){let r=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,s,a),i=D.card(this.current);return i.difficulty=r.difficulty,i.stability=r.stability,i}next_interval(e,s,a,r){let i,c;i=this.algorithm.next_interval(e.stability,r),c=this.algorithm.next_interval(s.stability,r),i=Math.min(i,c),c=Math.max(c,i+1);let o=Math.max(this.algorithm.next_interval(a.stability,r),c+1);e.scheduled_days=i,e.due=U(this.review_time,i,!0),s.scheduled_days=c,s.due=U(this.review_time,c,!0),a.scheduled_days=o,a.due=U(this.review_time,o,!0)}next_state(e,s,a){e.state=N.Review,e.learning_steps=0,s.state=N.Review,s.learning_steps=0,a.state=N.Review,a.learning_steps=0}},se=class extends ee{newState(t){let e=this.next.get(t);if(e)return e;this.current.scheduled_days=0,this.current.elapsed_days=0;let s=0,a=this.next_ds(s,y.Again),r=this.next_ds(s,y.Hard),i=this.next_ds(s,y.Good),c=this.next_ds(s,y.Easy);return this.next_interval(a,r,i,c,s),this.next_state(a,r,i,c),this.update_next(a,r,i,c),this.next.get(t)}next_ds(t,e,s){let a=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},t,e,s),r=D.card(this.current);return r.difficulty=a.difficulty,r.stability=a.stability,r}learningState(t){return this.reviewState(t)}reviewState(t){let e=this.next.get(t);if(e)return e;let s=this.elapsed_days,a=this.algorithm.forgetting_curve(s,this.current.stability),r=this.next_ds(s,y.Again,a),i=this.next_ds(s,y.Hard,a),c=this.next_ds(s,y.Good,a),o=this.next_ds(s,y.Easy,a);return this.next_interval(r,i,c,o,s),this.next_state(r,i,c,o),r.lapses+=1,this.update_next(r,i,c,o),this.next.get(t)}next_interval(t,e,s,a,r){let i,c,o,l;i=this.algorithm.next_interval(t.stability,r),c=this.algorithm.next_interval(e.stability,r),o=this.algorithm.next_interval(s.stability,r),l=this.algorithm.next_interval(a.stability,r),i=Math.min(i,c),c=Math.max(c,i+1),o=Math.max(o,c+1),l=Math.max(l,o+1),t.scheduled_days=i,t.due=U(this.review_time,i,!0),e.scheduled_days=c,e.due=U(this.review_time,c,!0),s.scheduled_days=o,s.due=U(this.review_time,o,!0),a.scheduled_days=l,a.due=U(this.review_time,l,!0)}next_state(t,e,s,a){t.state=N.Review,t.learning_steps=0,e.state=N.Review,e.learning_steps=0,s.state=N.Review,s.learning_steps=0,a.state=N.Review,a.learning_steps=0}update_next(t,e,s,a){let r={card:t,log:this.buildLog(y.Again)},i={card:e,log:super.buildLog(y.Hard)},c={card:s,log:super.buildLog(y.Good)},o={card:a,log:super.buildLog(y.Easy)};this.next.set(y.Again,r),this.next.set(y.Hard,i),this.next.set(y.Good,c),this.next.set(y.Easy,o)}},Le=class{constructor(t){R(this,"fsrs");this.fsrs=t}replay(t,e,s){return this.fsrs.next(t,e,s)}handleManualRating(t,e,s,a,r,i,c){if(typeof e>"u")throw new O("reschedule: state is required for manual rating");let o,l;if(e===N.New)o={rating:y.Manual,state:e,due:c??s,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,learning_steps:t.learning_steps,review:s},l=Nt(s),l.last_review=s;else{if(typeof c>"u")throw new O("reschedule: due is required for manual rating");let p=dt(c,s,"days");o={rating:y.Manual,state:t.state,due:t.last_review||t.due,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,learning_steps:t.learning_steps,review:s},l={...t,state:e,due:c,last_review:s,stability:r||t.stability,difficulty:i||t.difficulty,elapsed_days:a,scheduled_days:p,reps:t.reps+1}}return{card:l,log:o}}reschedule(t,e){let s=[],a=Nt(t.due);for(let r of e){let i;if(r.review=D.time(r.review),r.rating===y.Manual){let c=0;a.state!==N.New&&a.last_review&&(c=dt(r.review,a.last_review,"days")),i=this.handleManualRating(a,r.state,r.review,c,r.stability,r.difficulty,r.due?D.time(r.due):void 0)}else i=this.replay(a,r.review,r.rating);s.push(i),a=i.card}return s}calculateManualRecord(t,e,s,a){if(!s)return null;let{card:r,log:i}=s,c=D.card(t);return c.due.getTime()===r.due.getTime()?null:(c.scheduled_days=dt(r.due,c.due,"days"),this.handleManualRating(c,r.state,D.time(e),i.elapsed_days,a?r.stability:void 0,a?r.difficulty:void 0,r.due))}};function Tt(n,t){return typeof t=="function"?t(n):n}var Re=class extends Ie{constructor(e){super(e);R(this,"strategyHandler",new Map);R(this,"Scheduler");let{enable_short_term:s}=this.parameters;this.Scheduler=s?ne:se}params_handler_proxy(){let e=this;return{set:function(s,a,r){return a==="request_retention"&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):a==="enable_short_term"?e.Scheduler=r===!0?ne:se:a==="w"&&(r=Oe(r,s.relearning_steps.length,s.enable_short_term),r=pt(Array.from(r),s.relearning_steps.length,s.enable_short_term),e.forgetting_curve=Ht.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(s.request_retention))),Reflect.set(s,a,r),!0}}}useStrategy(e,s){return this.strategyHandler.set(e,s),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,s){let r=this.strategyHandler.get(ae.SCHEDULER)||this.Scheduler;return new r(e,s,this,this.strategyHandler)}repeat(e,s,a){let i=this.getScheduler(e,s).preview();return Tt(i,a)}next(e,s,a,r){let i=this.getScheduler(e,s),c=D.rating(a);if(c===y.Manual)throw new O("Cannot review a manual rating");let o=i.review(c);return Tt(o,r)}get_retrievability(e,s,a=!0){let r=D.card(e);s=s?D.time(s):new Date;let i=r.state!==N.New?Math.max(dt(s,r.last_review,"days"),0):0,c=r.state!==N.New?this.forgetting_curve(i,+r.stability.toFixed(8)):0;return a?`${(c*100).toFixed(2)}%`:c}rollback(e,s,a){let r=D.card(e),i=D.review_log(s);if(i.rating===y.Manual)throw new O("Cannot rollback a manual rating");let c,o,l;switch(i.state){case N.New:c=i.due,o=void 0,l=0;break;case N.Learning:case N.Relearning:case N.Review:c=i.review,o=i.due,l=r.lapses-(i.rating===y.Again&&i.state===N.Review?1:0);break}let p={...r,due:c,stability:i.stability,difficulty:i.difficulty,elapsed_days:i.last_elapsed_days,scheduled_days:i.scheduled_days,reps:Math.max(0,r.reps-1),lapses:Math.max(0,l),learning_steps:i.learning_steps,state:i.state,last_review:o};return Tt(p,a)}forget(e,s,a=!1,r){let i=D.card(e);s=D.time(s);let c=i.state===N.New?0:dt(s,i.due,"days"),o={rating:y.Manual,state:i.state,due:i.due,stability:i.stability,difficulty:i.difficulty,elapsed_days:0,last_elapsed_days:i.elapsed_days,scheduled_days:c,learning_steps:i.learning_steps,review:s},p={card:{...i,due:s,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:a?0:i.reps,lapses:a?0:i.lapses,learning_steps:0,state:N.New,last_review:i.last_review},log:o};return Tt(p,r)}reschedule(e,s=[],a={}){let{recordLogHandler:r,reviewsOrderBy:i,skipManual:c=!0,now:o=new Date,update_memory_state:l=!1}=a;i&&typeof i=="function"&&s.sort(i),c&&(s=s.filter($=>$.rating!==y.Manual));let p=new Le(this),d=p.reschedule(a.first_card||Nt(),s),m=d.length,f=D.card(e),u=p.calculateManualRecord(f,o,m?d[m-1]:void 0,l);return{collections:typeof r=="function"?d.map(r):d,reschedule_item:u?Tt(u,r):null}}},Hn=n=>new Re(n||{});var ut=.9,Cn=864e5,Ct={readGate:.9,tapIgnore:.9,streak:3,pinyinWeight:.75},In=Hn(je({request_retention:ut,enable_fuzz:!1,enable_short_term:!0})),Dt=(n,t)=>n?Ht(In.parameters.w,Math.max(0,t-+n.last_review)/Cn,n.stability):1,ht=(n,t,e)=>In.next(n||Nt(new Date(t)),new Date(t),e).card,js=(n,t)=>Math.min(n,1-Ct.pinyinWeight*(1-t));function Ln({book:n,progress:t,now:e=Date.now()}){let s=Dn(n,t,e),a=e-7*Cn,r=l=>Date.parse(l.at)<a,i=Dn(n,{...t,taps:t.taps.filter(r),answers:t.answers.filter(r),trail:t.trail.filter(r),position:null,furthest:null},a),c=new Set(t.answers.filter(l=>!r(l)).map(l=>l.key)),o=Object.keys(s.confidence).filter(l=>c.has(l)&&s.confidence[l]>=ut&&(i.confidence[l]??0)<ut);return{...s,moved:{since:new Date(a).toISOString(),up:o}}}function Dn(n,t,e){let s=F(n),a=W(s,t),r=new Map,i=new Set,c=g=>{r.set(g.key,g.rank??5e3),i.add(g.key)},o=a.sittings.map(g=>({start:g.start,words:new Set,taps:new Map}));a.sittings.forEach((g,w)=>{for(let T of g.covered)for(let L of s.blocks[T].tokens)L.py&&!L.name&&(c(L),o[w].words.add(L.key))});let l=a.far;t.position&&s.blockAt.has(t.position.pos)&&(l=Math.max(l,s.blockAt.get(t.position.pos)-1));for(let g=0;g<=l;g++)for(let w of s.blocks[g].tokens)w.py&&!w.name&&c(w);for(let g of t.taps){if(g.name)continue;let w=Date.parse(g.at),T=a.sittings.findIndex(Y=>w>=Y.start&&w<=Y.end);T<0&&(o.push({start:w,words:new Set,taps:new Map}),T=o.length-1);let L=o[T].taps.get(g.key);o[T].taps.set(g.key,{at:Math.min(L?.at??w,w),meaning:!!L?.meaning||g.level==="meaning"}),o[T].words.add(g.key)}let p=[],d=new Map;o.sort((g,w)=>g.start-w.start);for(let g of o)for(let w of g.words){let T=g.taps.get(w),L=T?(d.get(w)||0)+1:0;d.set(w,L),p.push({at:T?T.at:g.start,key:w,kind:"read",tap:T?T.meaning?"meaning":"pinyin":null,run:L})}for(let g of t.answers)p.push({at:Date.parse(g.at),key:g.key,kind:"answer",a:g});p.sort((g,w)=>g.at-w.at);let m=new Map,f=(g,w,T)=>T>=Ct.streak?y.Again:Dt(g,w)>Ct.tapIgnore?null:y.Hard;for(let g of p){let w=m.get(g.key);if(g.kind==="answer"){let Y=g.a.pinyin||(g.a.result==="got"?"got":"miss"),gt=g.a.meaning||Y;w||m.set(g.key,w={m:null,p:null}),w.m=ht(w.m,g.at,gt==="got"?y.Good:y.Again),w.p=ht(w.p,g.at,Y==="got"?y.Good:y.Again);continue}if(!w){if(!g.tap)continue;m.set(g.key,{m:ht(null,g.at,g.tap==="meaning"?y.Hard:y.Good),p:ht(null,g.at,y.Hard)});continue}let T=g.tap==="meaning"?f(w.m,g.at,g.run):Dt(w.m,g.at)<Ct.readGate?y.Good:null,L=g.tap?f(w.p,g.at,g.run):Dt(w.p,g.at)<Ct.readGate?y.Good:null;T&&(w.m=ht(w.m,g.at,T)),L&&(w.p=ht(w.p,g.at,L))}let u={},$={},b=[],_=new Set,M=g=>Math.round(g*100)/100;for(let g of i)m.has(g)||(u[g]=1,b.push(g));for(let[g,w]of m){r.has(g)||r.set(g,s.entryOf.get(g)?.rank??5e3);let T=Dt(w.m,e),L=Dt(w.p,e);u[g]=M(js(T,L)),$[g]={meaning:M(T),pinyin:M(L),S:[M(w.m.stability),M(w.p.stability)],last:[w.m.last_review,w.p.last_review]},(T<ut||L<ut)&&_.add(g)}let z=t.answers.slice(-3).map(g=>g.key),j=[...m.keys()].sort((g,w)=>z.includes(g)-z.includes(w)||_.has(w)-_.has(g)||u[g]-u[w]||r.get(g)-r.get(w));return{confidence:u,memory:$,stream:j,due:_.size,threshold:ut,known:b}}var Fs="zher",Fe="kv";function Bs(){return new Promise((n,t)=>{let e=indexedDB.open(Fs,1);e.onupgradeneeded=()=>e.result.createObjectStore(Fe),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Rn(){let n=await Bs(),t=(r,i)=>new Promise((c,o)=>{let l=n.transaction(Fe,r),p=l.objectStore(Fe),d=i(p);l.oncomplete=()=>c(d&&d.result),l.onerror=l.onabort=()=>o(l.error)}),e=null,s=null,a=async()=>{for(;e;){let r=e;e=null,await t("readwrite",i=>i.put(r,"state"))}s=null};try{await navigator.storage?.persist?.()}catch{}return{get:r=>t("readonly",i=>i.get(r)),putBook:r=>t("readwrite",i=>i.put(r,"book")),saveState:r=>(e=r,s||(s=a())),flush:()=>s||Promise.resolve()}}var ie=()=>({taps:[],answers:[],trail:[],ratings:[],furthest:null,position:null,lastExport:null});function On(n,t){if(!n||typeof n!="object"||!Array.isArray(n.taps))throw new Error("That file isn't a zher export.");if(t&&n.book&&n.book!==t)throw new Error(`That export is for ${n.book}, not this book.`);let e=Array.isArray(n.ratings)?n.ratings:Object.entries(n.ratings||{}).map(([r,i])=>({chapter:+r,rating:i.rating,at:i.at})).sort((r,i)=>r.at.localeCompare(i.at)),s=(n.answers||[]).map(r=>r.pinyin?r:{key:r.key,word:r.word,pinyin:r.result==="got"?"got":"miss",meaning:r.result==="got"?"got":"miss",at:r.at}),a=n.exportedAt||new Date().toISOString();return{...ie(),taps:n.taps,answers:s,trail:n.trail||[],ratings:e,furthest:n.furthest||n.position&&n.position.pos||null,position:n.position||null,lastExport:{at:a,count:n.taps.length,answers:s.length}}}var jn=(n,t,e=new Date)=>({book:t,exportedAt:e.toISOString(),app:"zher 4",position:n.position,taps:n.taps,answers:n.answers,trail:n.trail,ratings:n.ratings,furthest:n.furthest});var Lt=()=>new Date().toISOString(),E={book:null,progress:ie(),mode:"read",storageOk:!0},at=null,Rt=null,ft=null,Ps={confidence:{},memory:{},stream:[],due:0,threshold:.9,known:[],moved:{since:null,up:[]}};function Ot(){let n=E.book?Ln({book:E.book,progress:E.progress,now:Date.now()}):Ps;return{book:E.book,progress:E.progress,mode:E.mode,storageOk:E.storageOk,...n}}function oe(){at&&at.saveState({progress:E.progress,mode:E.mode}).catch(()=>{E.storageOk=!1,Rt?.update(Ot())})}function It(n){E.progress={...E.progress},n(E.progress),oe(),Rt.update(Ot())}function Fn(n){return new Promise(t=>{let e=document.createElement("input");e.type="file",e.accept=n,e.style.display="none",document.body.append(e),e.addEventListener("change",()=>{t(e.files[0]||null),e.remove()},{once:!0}),e.addEventListener("cancel",()=>{t(null),e.remove()},{once:!0}),e.click()})}var Bn=async n=>{try{return JSON.parse(await n.text())}catch{throw new Error("That file isn't JSON.")}};function Gs(n,t){let e=URL.createObjectURL(new Blob([JSON.stringify(t,null,1)],{type:"application/json"})),s=Object.assign(document.createElement("a"),{href:e,download:n});document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(e),1e4)}var Pn=n=>E.book?F(E.book).blockAt.get(n)??-1:-1;function Us(n,t){switch(n){case"tap":It(e=>{e.taps=[...e.taps,{...t,at:Lt()}]});return;case"position":{It(e=>{let s=e.trail[e.trail.length-1];e.position={pos:t.pos,offset:t.offset},(!s||s.pos!==t.pos)&&(e.trail=[...e.trail,{pos:t.pos,at:Lt(),...t.jump?{ev:"jump"}:{}}]),!t.jump&&Pn(t.pos)>Pn(e.furthest)&&(e.furthest=t.pos)});return}case"rate":It(e=>{e.ratings=e.ratings.filter(s=>!(s.chapter===t.chapter&&t.replaces&&s.at===t.replaces)),t.rating&&(e.ratings=[...e.ratings,{chapter:t.chapter,rating:t.rating,at:Lt()}])});return;case"answer":It(e=>{e.answers=[...e.answers,{...t,at:Lt()}]});return;case"mode":E.mode=t.mode,oe();return;case"export":{let e=new Date;Gs(`zher-${e.toISOString().slice(0,16).replace(/[T:]/g,"-")}.json`,jn(E.progress,E.book.title,e)),It(s=>{s.lastExport={at:e.toISOString(),count:s.taps.length,answers:s.answers.length}});return}case"pickBook":return Fn(".json,application/json").then(async e=>{if(!e)return;let s=await Bn(e);if(!s||!Array.isArray(s.chapters)||!s.title)throw new Error("That file isn't a zher book.");if(s.chapters.some(a=>a.blocks.some(r=>r.image&&!r.image.startsWith("data:"))))throw new Error("That book file has no images inside it. Use zher-book.json.");await at.putBook(s),E.book=s,Rt.update(Ot())});case"import":return Fn(".json,application/json").then(async e=>{if(!e)return;let s=await Bn(e);try{ft=On(s,E.book&&E.book.title)}catch(a){return a.message}return{exportedAt:s.exportedAt,taps:ft.taps.length,answers:ft.answers.length}});case"importConfirm":return ft?(E.progress=ft,ft=null,oe(),Rt.update(Ot()),"Reset to the backup."):void 0}}function Be(n){if(!E.book||!E.progress.position)return;let t=E.progress.trail[E.progress.trail.length-1];t&&t.ev===n||(E.progress={...E.progress,trail:[...E.progress.trail,{pos:E.progress.position.pos,at:Lt(),ev:n}]},oe(),n==="hide"&&at?.flush())}async function qs(){try{at=await Rn();let[s,a]=await Promise.all([at.get("book"),at.get("state")]);s&&(E.book=s),a&&(E.progress={...ie(),...a.progress},E.mode=a.mode||"read")}catch{E.storageOk=!1}E.book&&(document.title=E.book.title);let t=document.getElementById("app").attachShadow({mode:"open"});Rt=An(t,Ot(),{on:Us});let e=document.createElement("style");e.textContent=".ph{ height: 100dvh; border-radius: 0; box-shadow: none }",t.append(e),Be("show"),document.addEventListener("visibilitychange",()=>Be(document.hidden?"hide":"show")),addEventListener("pagehide",()=>Be("hide")),"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}qs();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*! Bundled license information:

ts-fsrs/dist/index.mjs:
ts-fsrs/dist/index.mjs:
ts-fsrs/dist/index.mjs:
  (* istanbul ignore next -- @preserve *)
*/
