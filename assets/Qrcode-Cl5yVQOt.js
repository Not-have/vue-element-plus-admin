var ce=Object.defineProperty;var Rt=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var Dt=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lt=(e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&Dt(e,n,t[n]);if(Rt)for(var n of Rt(t))fe.call(t,n)&&Dt(e,n,t[n]);return e};var ft=(e,t,n)=>new Promise((i,r)=>{var o=a=>{try{l(n.next(a))}catch(f){r(f)}},s=a=>{try{l(n.throw(a))}catch(f){r(f)}},l=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,s);l((n=n.apply(e,t)).next())});import{p as et,b as de,k as kt,_ as ge,u as he,c as me}from"./index-TMlqmkkJ.js";import{c as we,p as F,q as x,s as Ce,b as Ut}from"./element-plus-5SedE8ZF.js";import{l as qt,a as Ct,e as pt,b as pe,ah as ye,ar as Ee,_ as be,m as rt,p as Ft,S as Kt,T as Be,L as xt,u as g,q as D,O as B,W as L,X as _e,U as Te,n as Ae,R as I}from"./vue-chunks-DV3VEwyd.js";import{_ as Se}from"./ContentWrap.vue_vue_type_script_setup_true_lang-B4WxKjpq.js";/* empty css               *//* empty css                */import{_ as zt}from"./logo-B185bVhG.js";/* empty css                  */var X={},Ie=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Jt={},M={};let _t;const Ne=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};M.getSymbolTotalCodewords=function(t){return Ne[t]};M.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};M.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');_t=t};M.isKanjiModeEnabled=function(){return typeof _t!="undefined"};M.toSJIS=function(t){return _t(t)};var at={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},e.from=function(i,r){if(e.isValid(i))return i;try{return t(i)}catch(o){return r}}})(at);function $t(){this.buffer=[],this.length=0}$t.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var ve=$t;function Z(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Z.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)};Z.prototype.get=function(e,t){return this.data[e*this.size+t]};Z.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};Z.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Me=Z,Yt={};(function(e){const t=M.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,o=t(i),s=o===145?26:Math.ceil((o-13)/(2*r-2))*2,l=[o-7];for(let a=1;a<r-1;a++)l[a]=l[a-1]-s;return l.push(6),l.reverse()},e.getPositions=function(i){const r=[],o=e.getRowColCoords(i),s=o.length;for(let l=0;l<s;l++)for(let a=0;a<s;a++)l===0&&a===0||l===0&&a===s-1||l===s-1&&a===0||r.push([o[l],o[a]]);return r}})(Yt);var jt={};const Pe=M.getSymbolSize,Vt=7;jt.getPositions=function(t){const n=Pe(t);return[[0,0],[n-Vt,0],[0,n-Vt]]};var Qt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const o=r.size;let s=0,l=0,a=0,f=null,d=null;for(let T=0;T<o;T++){l=a=0,f=d=null;for(let C=0;C<o;C++){let h=r.get(T,C);h===f?l++:(l>=5&&(s+=t.N1+(l-5)),f=h,l=1),h=r.get(C,T),h===d?a++:(a>=5&&(s+=t.N1+(a-5)),d=h,a=1)}l>=5&&(s+=t.N1+(l-5)),a>=5&&(s+=t.N1+(a-5))}return s},e.getPenaltyN2=function(r){const o=r.size;let s=0;for(let l=0;l<o-1;l++)for(let a=0;a<o-1;a++){const f=r.get(l,a)+r.get(l,a+1)+r.get(l+1,a)+r.get(l+1,a+1);(f===4||f===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const o=r.size;let s=0,l=0,a=0;for(let f=0;f<o;f++){l=a=0;for(let d=0;d<o;d++)l=l<<1&2047|r.get(f,d),d>=10&&(l===1488||l===93)&&s++,a=a<<1&2047|r.get(d,f),d>=10&&(a===1488||a===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let o=0;const s=r.data.length;for(let a=0;a<s;a++)o+=r.data[a];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function n(i,r,o){switch(i){case e.Patterns.PATTERN000:return(r+o)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(r+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return r*o%2+r*o%3===0;case e.Patterns.PATTERN110:return(r*o%2+r*o%3)%2===0;case e.Patterns.PATTERN111:return(r*o%3+(r+o)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(r,o){const s=o.size;for(let l=0;l<s;l++)for(let a=0;a<s;a++)o.isReserved(a,l)||o.xor(a,l,n(r,a,l))},e.getBestMask=function(r,o){const s=Object.keys(e.Patterns).length;let l=0,a=1/0;for(let f=0;f<s;f++){o(f),e.applyMask(f,r);const d=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(f,r),d<a&&(a=d,l=f)}return l}})(Qt);var lt={};const H=at,nt=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ot=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];lt.getBlocksCount=function(t,n){switch(n){case H.L:return nt[(t-1)*4+0];case H.M:return nt[(t-1)*4+1];case H.Q:return nt[(t-1)*4+2];case H.H:return nt[(t-1)*4+3];default:return}};lt.getTotalCodewordsCount=function(t,n){switch(n){case H.L:return ot[(t-1)*4+0];case H.M:return ot[(t-1)*4+1];case H.Q:return ot[(t-1)*4+2];case H.H:return ot[(t-1)*4+3];default:return}};var Gt={},ct={};const G=new Uint8Array(512),it=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)G[n]=t,it[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)G[n]=G[n-255]})();ct.log=function(t){if(t<1)throw new Error("log("+t+")");return it[t]};ct.exp=function(t){return G[t]};ct.mul=function(t,n){return t===0||n===0?0:G[it[t]+it[n]]};(function(e){const t=ct;e.mul=function(i,r){const o=new Uint8Array(i.length+r.length-1);for(let s=0;s<i.length;s++)for(let l=0;l<r.length;l++)o[s+l]^=t.mul(i[s],r[l]);return o},e.mod=function(i,r){let o=new Uint8Array(i);for(;o.length-r.length>=0;){const s=o[0];for(let a=0;a<r.length;a++)o[a]^=t.mul(r[a],s);let l=0;for(;l<o.length&&o[l]===0;)l++;o=o.slice(l)}return o},e.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let o=0;o<i;o++)r=e.mul(r,new Uint8Array([1,t.exp(o)]));return r}})(Gt);const Wt=Gt;function Tt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Tt.prototype.initialize=function(t){this.degree=t,this.genPoly=Wt.generateECPolynomial(this.degree)};Tt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const i=Wt.mod(n,this.genPoly),r=this.degree-i.length;if(r>0){const o=new Uint8Array(this.degree);return o.set(i,r),o}return i};var Re=Tt,Xt={},O={},At={};At.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var k={};const Zt="[0-9]+",De="[A-Z $%*+\\-./:]+";let W="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";W=W.replace(/u/g,"\\u");const Le="(?:(?![A-Z0-9 $%*+\\-./:]|"+W+`)(?:.|[\r
]))+`;k.KANJI=new RegExp(W,"g");k.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");k.BYTE=new RegExp(Le,"g");k.NUMERIC=new RegExp(Zt,"g");k.ALPHANUMERIC=new RegExp(De,"g");const ke=new RegExp("^"+W+"$"),Ue=new RegExp("^"+Zt+"$"),Fe=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");k.testKanji=function(t){return ke.test(t)};k.testNumeric=function(t){return Ue.test(t)};k.testAlphanumeric=function(t){return Fe.test(t)};(function(e){const t=At,n=k;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return n.testNumeric(o)?e.NUMERIC:n.testAlphanumeric(o)?e.ALPHANUMERIC:n.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(o,s){if(e.isValid(o))return o;try{return i(o)}catch(l){return s}}})(O);(function(e){const t=M,n=lt,i=at,r=O,o=At,s=7973,l=t.getBCHDigit(s);function a(C,h,p){for(let y=1;y<=40;y++)if(h<=e.getCapacity(y,p,C))return y}function f(C,h){return r.getCharCountIndicator(C,h)+4}function d(C,h){let p=0;return C.forEach(function(y){const S=f(y.mode,h);p+=S+y.getBitsLength()}),p}function T(C,h){for(let p=1;p<=40;p++)if(d(C,p)<=e.getCapacity(p,h,r.MIXED))return p}e.from=function(h,p){return o.isValid(h)?parseInt(h,10):p},e.getCapacity=function(h,p,y){if(!o.isValid(h))throw new Error("Invalid QR Code version");typeof y=="undefined"&&(y=r.BYTE);const S=t.getSymbolTotalCodewords(h),w=n.getTotalCodewordsCount(h,p),E=(S-w)*8;if(y===r.MIXED)return E;const c=E-f(y,h);switch(y){case r.NUMERIC:return Math.floor(c/10*3);case r.ALPHANUMERIC:return Math.floor(c/11*2);case r.KANJI:return Math.floor(c/13);case r.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(h,p){let y;const S=i.from(p,i.M);if(Array.isArray(h)){if(h.length>1)return T(h,S);if(h.length===0)return 1;y=h[0]}else y=h;return a(y.mode,y.getLength(),S)},e.getEncodedBits=function(h){if(!o.isValid(h)||h<7)throw new Error("Invalid QR Code version");let p=h<<12;for(;t.getBCHDigit(p)-l>=0;)p^=s<<t.getBCHDigit(p)-l;return h<<12|p}})(Xt);var te={};const yt=M,ee=1335,xe=21522,Ht=yt.getBCHDigit(ee);te.getEncodedBits=function(t,n){const i=t.bit<<3|n;let r=i<<10;for(;yt.getBCHDigit(r)-Ht>=0;)r^=ee<<yt.getBCHDigit(r)-Ht;return(i<<10|r)^xe};var ne={};const ze=O;function q(e){this.mode=ze.NUMERIC,this.data=e.toString()}q.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};q.prototype.getLength=function(){return this.data.length};q.prototype.getBitsLength=function(){return q.getBitsLength(this.data.length)};q.prototype.write=function(t){let n,i,r;for(n=0;n+3<=this.data.length;n+=3)i=this.data.substr(n,3),r=parseInt(i,10),t.put(r,10);const o=this.data.length-n;o>0&&(i=this.data.substr(n),r=parseInt(i,10),t.put(r,o*3+1))};var Ve=q;const He=O,dt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function K(e){this.mode=He.ALPHANUMERIC,this.data=e}K.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let i=dt.indexOf(this.data[n])*45;i+=dt.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(dt.indexOf(this.data[n]),6)};var Oe=K,qe=function(t){for(var n=[],i=t.length,r=0;r<i;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&i>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,r+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const Ke=qe,Je=O;function J(e){this.mode=Je.BYTE,typeof e=="string"&&(e=Ke(e)),this.data=new Uint8Array(e)}J.getBitsLength=function(t){return t*8};J.prototype.getLength=function(){return this.data.length};J.prototype.getBitsLength=function(){return J.getBitsLength(this.data.length)};J.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var $e=J;const Ye=O,je=M;function $(e){this.mode=Ye.KANJI,this.data=e}$.getBitsLength=function(t){return t*13};$.prototype.getLength=function(){return this.data.length};$.prototype.getBitsLength=function(){return $.getBitsLength(this.data.length)};$.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=je.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var Qe=$,oe={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,i,r){var o={},s={};s[i]=0;var l=t.PriorityQueue.make();l.push(i,0);for(var a,f,d,T,C,h,p,y,S;!l.empty();){a=l.pop(),f=a.value,T=a.cost,C=n[f]||{};for(d in C)C.hasOwnProperty(d)&&(h=C[d],p=T+h,y=s[d],S=typeof s[d]=="undefined",(S||y>p)&&(s[d]=p,l.push(d,p),o[d]=f))}if(typeof r!="undefined"&&typeof s[r]=="undefined"){var w=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(w)}return o},extract_shortest_path_from_predecessor_list:function(n,i){for(var r=[],o=i;o;)r.push(o),n[o],o=n[o];return r.reverse(),r},find_path:function(n,i,r){var o=t.single_source_shortest_paths(n,i,r);return t.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(n){var i=t.PriorityQueue,r={},o;n=n||{};for(o in i)i.hasOwnProperty(o)&&(r[o]=i[o]);return r.queue=[],r.sorter=n.sorter||i.default_sorter,r},default_sorter:function(n,i){return n.cost-i.cost},push:function(n,i){var r={value:n,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(oe);var Ge=oe.exports;(function(e){const t=O,n=Ve,i=Oe,r=$e,o=Qe,s=k,l=M,a=Ge;function f(w){return unescape(encodeURIComponent(w)).length}function d(w,E,c){const u=[];let m;for(;(m=w.exec(c))!==null;)u.push({data:m[0],index:m.index,mode:E,length:m[0].length});return u}function T(w){const E=d(s.NUMERIC,t.NUMERIC,w),c=d(s.ALPHANUMERIC,t.ALPHANUMERIC,w);let u,m;return l.isKanjiModeEnabled()?(u=d(s.BYTE,t.BYTE,w),m=d(s.KANJI,t.KANJI,w)):(u=d(s.BYTE_KANJI,t.BYTE,w),m=[]),E.concat(c,u,m).sort(function(_,A){return _.index-A.index}).map(function(_){return{data:_.data,mode:_.mode,length:_.length}})}function C(w,E){switch(E){case t.NUMERIC:return n.getBitsLength(w);case t.ALPHANUMERIC:return i.getBitsLength(w);case t.KANJI:return o.getBitsLength(w);case t.BYTE:return r.getBitsLength(w)}}function h(w){return w.reduce(function(E,c){const u=E.length-1>=0?E[E.length-1]:null;return u&&u.mode===c.mode?(E[E.length-1].data+=c.data,E):(E.push(c),E)},[])}function p(w){const E=[];for(let c=0;c<w.length;c++){const u=w[c];switch(u.mode){case t.NUMERIC:E.push([u,{data:u.data,mode:t.ALPHANUMERIC,length:u.length},{data:u.data,mode:t.BYTE,length:u.length}]);break;case t.ALPHANUMERIC:E.push([u,{data:u.data,mode:t.BYTE,length:u.length}]);break;case t.KANJI:E.push([u,{data:u.data,mode:t.BYTE,length:f(u.data)}]);break;case t.BYTE:E.push([{data:u.data,mode:t.BYTE,length:f(u.data)}])}}return E}function y(w,E){const c={},u={start:{}};let m=["start"];for(let b=0;b<w.length;b++){const _=w[b],A=[];for(let v=0;v<_.length;v++){const P=_[v],U=""+b+v;A.push(U),c[U]={node:P,lastCount:0},u[U]={};for(let Y=0;Y<m.length;Y++){const N=m[Y];c[N]&&c[N].node.mode===P.mode?(u[N][U]=C(c[N].lastCount+P.length,P.mode)-C(c[N].lastCount,P.mode),c[N].lastCount+=P.length):(c[N]&&(c[N].lastCount=P.length),u[N][U]=C(P.length,P.mode)+4+t.getCharCountIndicator(P.mode,E))}}m=A}for(let b=0;b<m.length;b++)u[m[b]].end=0;return{map:u,table:c}}function S(w,E){let c;const u=t.getBestModeForData(w);if(c=t.from(E,u),c!==t.BYTE&&c.bit<u.bit)throw new Error('"'+w+'" cannot be encoded with mode '+t.toString(c)+`.
 Suggested mode is: `+t.toString(u));switch(c===t.KANJI&&!l.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(w);case t.ALPHANUMERIC:return new i(w);case t.KANJI:return new o(w);case t.BYTE:return new r(w)}}e.fromArray=function(E){return E.reduce(function(c,u){return typeof u=="string"?c.push(S(u,null)):u.data&&c.push(S(u.data,u.mode)),c},[])},e.fromString=function(E,c){const u=T(E,l.isKanjiModeEnabled()),m=p(u),b=y(m,c),_=a.find_path(b.map,"start","end"),A=[];for(let v=1;v<_.length-1;v++)A.push(b.table[_[v]].node);return e.fromArray(h(A))},e.rawSplit=function(E){return e.fromArray(T(E,l.isKanjiModeEnabled()))}})(ne);const ut=M,gt=at,We=ve,Xe=Me,Ze=Yt,tn=jt,Et=Qt,bt=lt,en=Re,st=Xt,nn=te,on=O,ht=ne;function rn(e,t){const n=e.size,i=tn.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],s=i[r][1];for(let l=-1;l<=7;l++)if(!(o+l<=-1||n<=o+l))for(let a=-1;a<=7;a++)s+a<=-1||n<=s+a||(l>=0&&l<=6&&(a===0||a===6)||a>=0&&a<=6&&(l===0||l===6)||l>=2&&l<=4&&a>=2&&a<=4?e.set(o+l,s+a,!0,!0):e.set(o+l,s+a,!1,!0))}}function sn(e){const t=e.size;for(let n=8;n<t-8;n++){const i=n%2===0;e.set(n,6,i,!0),e.set(6,n,i,!0)}}function an(e,t){const n=Ze.getPositions(t);for(let i=0;i<n.length;i++){const r=n[i][0],o=n[i][1];for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)s===-2||s===2||l===-2||l===2||s===0&&l===0?e.set(r+s,o+l,!0,!0):e.set(r+s,o+l,!1,!0)}}function ln(e,t){const n=e.size,i=st.getEncodedBits(t);let r,o,s;for(let l=0;l<18;l++)r=Math.floor(l/3),o=l%3+n-8-3,s=(i>>l&1)===1,e.set(r,o,s,!0),e.set(o,r,s,!0)}function mt(e,t,n){const i=e.size,r=nn.getEncodedBits(t,n);let o,s;for(o=0;o<15;o++)s=(r>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(i-15+o,8,s,!0),o<8?e.set(8,i-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(i-8,8,1,!0)}function cn(e,t){const n=e.size;let i=-1,r=n-1,o=7,s=0;for(let l=n-1;l>0;l-=2)for(l===6&&l--;;){for(let a=0;a<2;a++)if(!e.isReserved(r,l-a)){let f=!1;s<t.length&&(f=(t[s]>>>o&1)===1),e.set(r,l-a,f),o--,o===-1&&(s++,o=7)}if(r+=i,r<0||n<=r){r-=i,i=-i;break}}}function un(e,t,n){const i=new We;n.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),on.getCharCountIndicator(a.mode,e)),a.write(i)});const r=ut.getSymbolTotalCodewords(e),o=bt.getTotalCodewordsCount(e,t),s=(r-o)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const l=(s-i.getLengthInBits())/8;for(let a=0;a<l;a++)i.put(a%2?17:236,8);return fn(i,e,t)}function fn(e,t,n){const i=ut.getSymbolTotalCodewords(t),r=bt.getTotalCodewordsCount(t,n),o=i-r,s=bt.getBlocksCount(t,n),l=i%s,a=s-l,f=Math.floor(i/s),d=Math.floor(o/s),T=d+1,C=f-d,h=new en(C);let p=0;const y=new Array(s),S=new Array(s);let w=0;const E=new Uint8Array(e.buffer);for(let _=0;_<s;_++){const A=_<a?d:T;y[_]=E.slice(p,p+A),S[_]=h.encode(y[_]),p+=A,w=Math.max(w,A)}const c=new Uint8Array(i);let u=0,m,b;for(m=0;m<w;m++)for(b=0;b<s;b++)m<y[b].length&&(c[u++]=y[b][m]);for(m=0;m<C;m++)for(b=0;b<s;b++)c[u++]=S[b][m];return c}function dn(e,t,n,i){let r;if(Array.isArray(e))r=ht.fromArray(e);else if(typeof e=="string"){let f=t;if(!f){const d=ht.rawSplit(e);f=st.getBestVersionForData(d,n)}r=ht.fromString(e,f||40)}else throw new Error("Invalid data");const o=st.getBestVersionForData(r,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=un(t,n,r),l=ut.getSymbolSize(t),a=new Xe(l);return rn(a,t),sn(a),an(a,t),mt(a,n,0),t>=7&&ln(a,t),cn(a,s),isNaN(i)&&(i=Et.getBestMask(a,mt.bind(null,a,n))),Et.applyMask(i,a),mt(a,n,i),{modules:a,version:t,errorCorrectionLevel:n,maskPattern:i,segments:r}}Jt.create=function(t,n){if(typeof t=="undefined"||t==="")throw new Error("No input text");let i=gt.M,r,o;return typeof n!="undefined"&&(i=gt.from(n.errorCorrectionLevel,gt.M),r=st.from(n.version),o=Et.from(n.maskPattern),n.toSJISFunc&&ut.setToSJISFunction(n.toSJISFunc)),dn(t,r,i,o)};var re={},St={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let i=n.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+n);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(o){return[o,o]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,o=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:o,scale:o?4:s,margin:r,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},e.getImageWidth=function(i,r){const o=e.getScale(i,r);return Math.floor((i+r.margin*2)*o)},e.qrToImageData=function(i,r,o){const s=r.modules.size,l=r.modules.data,a=e.getScale(s,o),f=Math.floor((s+o.margin*2)*a),d=o.margin*a,T=[o.color.light,o.color.dark];for(let C=0;C<f;C++)for(let h=0;h<f;h++){let p=(C*f+h)*4,y=o.color.light;if(C>=d&&h>=d&&C<f-d&&h<f-d){const S=Math.floor((C-d)/a),w=Math.floor((h-d)/a);y=T[l[S*s+w]?1:0]}i[p++]=y.r,i[p++]=y.g,i[p++]=y.b,i[p]=y.a}}})(St);(function(e){const t=St;function n(r,o,s){r.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch(r){throw new Error("You need to specify a canvas element")}}e.render=function(o,s,l){let a=l,f=s;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(f=i()),a=t.getOptions(a);const d=t.getImageWidth(o.modules.size,a),T=f.getContext("2d"),C=T.createImageData(d,d);return t.qrToImageData(C.data,o,a),n(T,f,d),T.putImageData(C,0,0),f},e.renderToDataURL=function(o,s,l){let a=l;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const f=e.render(o,s,a),d=a.type||"image/png",T=a.rendererOpts||{};return f.toDataURL(d,T.quality)}})(re);var ie={};const gn=St;function Ot(e,t){const n=e.a/255,i=t+'="'+e.hex+'"';return n<1?i+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function wt(e,t,n){let i=e+t;return typeof n!="undefined"&&(i+=" "+n),i}function hn(e,t,n){let i="",r=0,o=!1,s=0;for(let l=0;l<e.length;l++){const a=Math.floor(l%t),f=Math.floor(l/t);!a&&!o&&(o=!0),e[l]?(s++,l>0&&a>0&&e[l-1]||(i+=o?wt("M",a+n,.5+f+n):wt("m",r,0),r=0,o=!1),a+1<t&&e[l+1]||(i+=wt("h",s),s=0)):r++}return i}ie.render=function(t,n,i){const r=gn.getOptions(n),o=t.modules.size,s=t.modules.data,l=o+r.margin*2,a=r.color.light.a?"<path "+Ot(r.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",f="<path "+Ot(r.color.dark,"stroke")+' d="'+hn(s,o,r.margin)+'"/>',d='viewBox="0 0 '+l+" "+l+'"',C='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+d+' shape-rendering="crispEdges">'+a+f+`</svg>
`;return typeof i=="function"&&i(null,C),C};const mn=Ie,Bt=Jt,se=re,wn=ie;function It(e,t,n,i,r){const o=[].slice.call(arguments,1),s=o.length,l=typeof o[s-1]=="function";if(!l&&!mn())throw new Error("Callback required as last argument");if(l){if(s<2)throw new Error("Too few arguments provided");s===2?(r=n,n=t,t=i=void 0):s===3&&(t.getContext&&typeof r=="undefined"?(r=i,i=void 0):(r=i,i=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=i=void 0):s===2&&!t.getContext&&(i=n,n=t,t=void 0),new Promise(function(a,f){try{const d=Bt.create(n,i);a(e(d,t,i))}catch(d){f(d)}})}try{const a=Bt.create(n,i);r(null,e(a,t,i))}catch(a){r(a)}}X.create=Bt.create;X.toCanvas=It.bind(null,se.render);X.toDataURL=It.bind(null,se.renderToDataURL);X.toString=It.bind(null,function(e,t,n){return wn.render(e,n)});const Cn={class:"absolute top-[50%] left-[50%] font-bold"},pn=qt({__name:"Qrcode",props:{tag:et.string.validate(e=>["canvas","img"].includes(e)).def("canvas"),text:{type:[String,Array],default:null},options:{type:Object,default:()=>({})},width:et.number.def(200),logo:{type:[String,Object],default:""},disabled:et.bool.def(!1),disabledText:et.string.def("")},emits:["done","click","disabled-click"],setup(e,{emit:t}){const n=e,i=t,{getPrefixCls:r}=de(),o=r("qrcode"),{toCanvas:s,toDataURL:l}=X,a=Ct(!0),f=Ct(null),d=pt(()=>String(n.text)),T=pt(()=>({width:n.width+"px",height:n.width+"px"})),C=()=>ft(this,null,function*(){yield Ae();const c=we(n.options||{});if(n.tag==="canvas"){c.errorCorrectionLevel=c.errorCorrectionLevel||y(g(d));const u=yield p(g(d),c);c.scale=n.width===0?void 0:n.width/u*4;const m=yield s(g(f),g(d),c);if(n.logo){const b=yield h(m);i("done",b),a.value=!1}else i("done",m.toDataURL()),a.value=!1}else{const u=yield l(d.value,Lt({errorCorrectionLevel:"H",width:n.width},c));g(f).src=u,i("done",u),a.value=!1}});pe(()=>d.value,c=>{c&&C()},{deep:!0,immediate:!0});const h=c=>{const u=c.width,m=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},kt(n.logo)?{}:n.logo),{logoSize:b=.15,bgColor:_="#ffffff",borderSize:A=.05,crossOrigin:v="anonymous",borderRadius:P=8,logoRadius:U=0}=m,Y=kt(n.logo)?n.logo:n.logo.src,N=u*b,V=u*(1-b)/2,Nt=u*(b+A),vt=u*(1-b-A)/2,R=c.getContext("2d");if(!R)return;S(R)(vt,vt,Nt,Nt,P),R.fillStyle=_,R.fill();const j=new Image;(v||U)&&j.setAttribute("crossOrigin",v),j.src=Y;const ae=Q=>{R.drawImage(Q,V,V,N,N)},le=Q=>{const tt=document.createElement("canvas");tt.width=V+N,tt.height=V+N;const Mt=tt.getContext("2d");if(!Mt||!R||(Mt.drawImage(Q,V,V,N,N),S(R)(V,V,N,N,U),!R))return;const Pt=R.createPattern(tt,"no-repeat");Pt&&(R.fillStyle=Pt,R.fill())};return new Promise(Q=>{j.onload=()=>{U?le(j):ae(j),Q(c.toDataURL())}})},p=(c,u)=>ft(this,null,function*(){const m=document.createElement("canvas");return yield s(m,c,u),m.width}),y=c=>c.length>36?"M":c.length>16?"Q":"H",S=c=>(u,m,b,_,A)=>{const v=Math.min(b,_);return A>v/2&&(A=v/2),c.beginPath(),c.moveTo(u+A,m),c.arcTo(u+b,m,u+b,m+_,A),c.arcTo(u+b,m+_,u,m+_,A),c.arcTo(u,m+_,u,m,A),c.arcTo(u,m,u+b,m,A),c.closePath(),c},w=()=>{i("click")},E=()=>{i("disabled-click")};return(c,u)=>{const m=ye("Icon"),b=Ee("loading");return be((rt(),Ft("div",{class:xt([g(o),"relative inline-block"]),style:Te(T.value)},[(rt(),Kt(Be(e.tag),{ref_key:"wrapRef",ref:f,onClick:w},null,512)),e.disabled?(rt(),Ft("div",{key:0,class:xt([`${g(o)}--disabled`,"absolute top-0 left-0 flex w-full h-full items-center justify-center"]),onClick:E},[D("div",Cn,[B(m,{icon:"ep:refresh-right",size:30,color:"var(--el-color-primary)"}),D("div",null,L(e.disabledText),1)])],2)):_e("",!0)],6)),[[b,a.value]])}}}),z=ge(pn,[["__scopeId","data-v-91acd2ad"]]),yn={class:"font-bold"},En={class:"font-bold"},bn={class:"font-bold"},Bn={class:"font-bold"},_n={class:"font-bold"},Tn={class:"font-bold"},An={class:"font-bold"},Sn={class:"font-bold"},In={class:"font-bold"},Fn=qt({__name:"Qrcode",setup(e){const t=he(),{t:n}=me(),i=pt(()=>t.getTitle),r=Ct("");setTimeout(()=>{r.value=g(i)},3e3);const o=()=>{Ut.info(n("qrcodeDemo.click"))},s=()=>{Ut.info(n("qrcodeDemo.invalid"))};return(l,a)=>(rt(),Kt(g(Se),{title:g(n)("qrcodeDemo.qrcode"),message:g(n)("qrcodeDemo.qrcodeDes")},{default:I(()=>[B(g(Ce),{gutter:20,justify:"space-between"},{default:I(()=>[B(g(F),{xl:6,lg:6,md:12,sm:24,xs:24},{default:I(()=>[B(g(x),{shadow:"hover",class:"mb-10px text-center"},{default:I(()=>[D("div",yn,L(g(n)("qrcodeDemo.basicUsage")),1),B(g(z),{text:i.value},null,8,["text"])]),_:1})]),_:1}),B(g(F),{xl:6,lg:6,md:12,sm:24,xs:24},{default:I(()=>[B(g(x),{shadow:"hover",class:"mb-10px text-center"},{default:I(()=>[D("div",En,L(g(n)("qrcodeDemo.imgTag")),1),B(g(z),{text:i.value,tag:"img"},null,8,["text"])]),_:1})]),_:1}),B(g(F),{xl:6,lg:6,md:12,sm:24,xs:24},{default:I(()=>[B(g(x),{shadow:"hover",class:"mb-10px text-center"},{default:I(()=>[D("div",bn,L(g(n)("qrcodeDemo.style")),1),B(g(z),{text:i.value,options:{color:{dark:"#55D187",light:"#2d8cf0"}}},null,8,["text"])]),_:1})]),_:1}),B(g(F),{xl:6,lg:6,md:12,sm:24,xs:24},{default:I(()=>[B(g(x),{shadow:"hover",class:"mb-10px text-center"},{default:I(()=>[D("div",Bn,L(g(n)("qrcodeDemo.click")),1),B(g(z),{text:i.value,onClick:o},null,8,["text"])]),_:1})]),_:1}),B(g(F),{xl:6,lg:6,md:12,sm:24,xs:24},{default:I(()=>[B(g(x),{shadow:"hover",class:"mb-10px text-center"},{default:I(()=>[D("div",_n,L(g(n)("qrcodeDemo.asynchronousContent")),1),B(g(z),{text:r.value},null,8,["text"])]),_:1})]),_:1}),B(g(F),{xl:6,lg:6,md:12,sm:24,xs:24},{default:I(()=>[B(g(x),{shadow:"hover",class:"mb-10px text-center"},{default:I(()=>[D("div",Tn,L(g(n)("qrcodeDemo.invalid")),1),B(g(z),{text:i.value,disabled:"",onDisabledClick:s},null,8,["text"])]),_:1})]),_:1}),B(g(F),{xl:6,lg:6,md:12,sm:24,xs:24},{default:I(()=>[B(g(x),{shadow:"hover",class:"mb-10px text-center"},{default:I(()=>[D("div",An,L(g(n)("qrcodeDemo.logoConfig")),1),B(g(z),{text:i.value,logo:g(zt)},null,8,["text","logo"])]),_:1})]),_:1}),B(g(F),{xl:6,lg:6,md:12,sm:24,xs:24},{default:I(()=>[B(g(x),{shadow:"hover",class:"mb-10px text-center"},{default:I(()=>[D("div",Sn,L(g(n)("qrcodeDemo.logoStyle")),1),B(g(z),{text:i.value,logo:{src:g(zt),logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["text","logo"])]),_:1})]),_:1}),B(g(F),{xl:6,lg:6,md:12,sm:24,xs:24},{default:I(()=>[B(g(x),{shadow:"hover",class:"mb-10px text-center"},{default:I(()=>[D("div",In,L(g(n)("qrcodeDemo.size")),1),B(g(z),{text:i.value,width:100},null,8,["text"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","message"]))}});export{Fn as default};
