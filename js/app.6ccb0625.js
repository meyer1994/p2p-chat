(function(){var n={4685:function(n,e,t){"use strict";var o=t(9242),r=t(3396),i=t(7139),u=t(4870),a=t(6523),s=t(2259);const l={id:"app"},p=(0,r._)("h1",null," P2P chat ",-1),c=(0,r._)("h2",null," Messages ",-1),d=["onSubmit"],b=(0,r._)("label",{for:"message"}," Message ",-1);var f={__name:"App",setup(n){const e=(0,r.f3)("libp2p"),t=(0,u.iH)([]),f=(0,u.iH)([]),v=(0,u.iH)(""),w=(0,u.iH)([]),h=(0,r.Fl)((()=>w.value.join("\n"))),g=async n=>f.value.push(n.detail);(0,r.bv)((()=>e.peerStore.addEventListener("peer",g)));const y=n=>{for(const e of n.detail.subscriptions)if("chat"===e.topic&&!0===e.subscribe)return void t.value.push(n.detail)};(0,r.bv)((()=>e.pubsub.addEventListener("pubsub:subscription-change",y)));const m=async n=>{const e=(0,a.B)(n.detail.data);w.value.push(e)};(0,r.bv)((()=>e.pubsub.addEventListener("chat",m)));const _=async()=>{const n=(0,s.m)(v.value);await e.pubsub.dispatchEvent({type:"chat",detail:n}),w.value.push(v.value),v.value=""};return(n,a)=>((0,r.wg)(),(0,r.iD)("div",l,[p,(0,r._)("p",null," Your id: "+(0,i.zw)((0,u.SU)(e).peerId),1),(0,r._)("section",null,[c,(0,r._)("p",null," Total messages: "+(0,i.zw)(w.value.length),1),(0,r.wy)((0,r._)("textarea",{rows:"10",readonly:"","onUpdate:modelValue":a[0]||(a[0]=n=>(0,u.dq)(h)?h.value=n:null)},null,512),[[o.nr,(0,u.SU)(h)]]),(0,r._)("form",{onSubmit:(0,o.iM)(_,["prevent"])},[b,(0,r.wy)((0,r._)("input",{type:"text",name:"message","onUpdate:modelValue":a[1]||(a[1]=n=>v.value=n),placeholder:"msg"},null,512),[[o.nr,v.value]]),(0,r._)("button",{onPress:_}," Send ",32)],40,d)]),(0,r._)("section",null,[(0,r._)("h2",null," Chat ("+(0,i.zw)(t.value.length)+") ",1),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.value,(n=>((0,r.wg)(),(0,r.iD)("li",{key:n.peerId},(0,i.zw)(n.peerId),1)))),128))])]),(0,r._)("section",null,[(0,r._)("h2",null," Peers ("+(0,i.zw)(f.value.length)+") ",1),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.value,(n=>((0,r.wg)(),(0,r.iD)("li",{key:n.id},(0,i.zw)(n.id),1)))),128))])])]))}};const v=f;var w=v,h=t(5844),g=t(1763),y=t(3804),m=t(4251),_=t(5147),j=t(4241),P=t(6596);const M=["/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN","/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb","/dnsaddr/bootstrap.libp2p.io/p2p/QmZa1sAxajnQjVM8WjWXoMbmPd7NsWhfKsPkErzpm9wGkp","/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa","/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt"],O=["/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star","/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star"],x=async n=>{const e=new j.z({list:M}),t=new P.x,o=await(0,h.N)({addresses:{listen:O},transports:[t],connectionEncryption:[new m.cy],streamMuxers:[new y.U],peerDiscovery:[e,t.discovery],pubsub:new _.K,dht:new g.i});return await o.start(),window.libp2p=o,{install(n,e){n.config.globalProperties.$libp2p=o,n.provide("libp2p",o)}}},S=async()=>{(0,o.ri)(w).use(await x()).mount("#app")};S()},7420:function(){},5856:function(){},5883:function(){},5819:function(){},2361:function(){},4616:function(){}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,i){if(!o){var u=1/0;for(p=0;p<n.length;p++){o=n[p][0],r=n[p][1],i=n[p][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[s])}))?o.splice(s--,1):(a=!1,i<u&&(u=i));if(a){n.splice(p--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var p=n.length;p>0&&n[p-1][2]>i;p--)n[p]=n[p-1];n[p]=[o,r,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,u=o[0],a=o[1],s=o[2],l=0;if(u.some((function(e){return 0!==n[e]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(s)var p=s(t)}for(e&&e(o);l<u.length;l++)i=u[l],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(p)},o=self["webpackChunkp2p_chat"]=self["webpackChunkp2p_chat"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4685)}));o=t.O(o)})();
//# sourceMappingURL=app.6ccb0625.js.map