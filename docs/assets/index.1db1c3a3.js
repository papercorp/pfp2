const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};se();function M(){}function oe(e){return e()}function ee(){return Object.create(null)}function I(e){e.forEach(oe)}function re(e){return typeof e=="function"}function ae(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ce(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function P(e,t,o){e.insertBefore(t,o||null)}function x(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function le(e){return document.createTextNode(e)}function y(){return le(" ")}function R(e,t,o,i){return e.addEventListener(t,o,i),()=>e.removeEventListener(t,o,i)}function ue(e){return function(t){return t.preventDefault(),e.call(this,t)}}function he(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function c(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function de(e){return Array.from(e.childNodes)}function C(e,t){e.value=t==null?"":t}let W;function T(e){W=e}const F=[],te=[],O=[],ne=[],fe=Promise.resolve();let D=!1;function ye(){D||(D=!0,fe.then(ie))}function U(e){O.push(e)}const z=new Set;let A=0;function ie(){const e=W;do{for(;A<F.length;){const t=F[A];A++,T(t),pe(t.$$)}for(T(null),F.length=0,A=0;te.length;)te.pop()();for(let t=0;t<O.length;t+=1){const o=O[t];z.has(o)||(z.add(o),o())}O.length=0}while(F.length);for(;ne.length;)ne.pop()();D=!1,z.clear(),T(e)}function pe(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}const me=new Set;function ge(e,t){e&&e.i&&(me.delete(e),e.i(t))}function we(e,t,o,i){const{fragment:n,on_mount:r,on_destroy:h,after_update:d}=e.$$;n&&n.m(t,o),i||U(()=>{const a=r.map(oe).filter(re);h?h.push(...a):I(a),e.$$.on_mount=[]}),d.forEach(U)}function be(e,t){const o=e.$$;o.fragment!==null&&(I(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(F.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(e,t,o,i,n,r,h,d=[-1]){const a=W;T(e);const l=e.$$={fragment:null,ctx:null,props:r,update:M,not_equal:n,bound:ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ee(),dirty:d,skip_bound:!1,root:t.target||a.$$.root};h&&h(l.root);let b=!1;if(l.ctx=o?o(e,t.props||{},(f,v,...p)=>{const _=p.length?p[0]:v;return l.ctx&&n(l.ctx[f],l.ctx[f]=_)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](_),b&&ve(e,f)),v}):[],l.update(),b=!0,I(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const f=de(t.target);l.fragment&&l.fragment.l(f),f.forEach(x)}else l.fragment&&l.fragment.c();t.intro&&ge(e.$$.fragment),we(e,t.target,t.anchor,t.customElement),ie()}T(a)}class xe{$destroy(){be(this,1),this.$destroy=M}$on(t,o){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(o),()=>{const n=i.indexOf(o);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ke(e){let t,o,i,n,r,h;return{c(){t=u("form"),o=u("input"),i=y(),n=u("input"),c(o,"type","text"),c(o,"placeholder","enter your NFT looksrare URL"),c(o,"class","svelte-1we8yby"),c(n,"type","submit"),n.value="claim",c(n,"class","svelte-1we8yby")},m(d,a){P(d,t,a),s(t,o),C(o,e[0]),s(t,i),s(t,n),r||(h=[R(o,"input",e[4]),R(t,"submit",he(ue(e[2])))],r=!0)},p(d,a){a&1&&o.value!==d[0]&&C(o,d[0])},d(d){d&&x(t),r=!1,I(h)}}}function Fe(e){let t,o,i,n,r,h,d;return{c(){t=u("textarea"),o=y(),i=u("a"),n=le("Tweet to Claim"),t.readOnly=!0,c(t,"class","svelte-1we8yby"),c(i,"class","twitter-share-button svelte-1we8yby"),c(i,"href",r="https://twitter.com/intent/tweet?text="+encodeURIComponent(e[1])),c(i,"data-size","large")},m(a,l){P(a,t,l),C(t,e[1]),P(a,o,l),P(a,i,l),s(i,n),h||(d=R(t,"input",e[3]),h=!0)},p(a,l){l&2&&C(t,a[1]),l&2&&r!==(r="https://twitter.com/intent/tweet?text="+encodeURIComponent(a[1]))&&c(i,"href",r)},d(a){a&&x(t),a&&x(o),a&&x(i),h=!1,d()}}}function Pe(e){let t,o,i,n,r,h,d,a,l,b,f,v,p,_,N,Y,$,q,m,H,G,j,J,K,Q,B,V,S,X,k;function Z(w,E){return w[1]?Fe:ke}let L=Z(e),g=L(e);return{c(){t=u("main"),o=u("h1"),o.textContent="PFP2 Airdrop Claim",i=y(),n=u("ul"),r=u("li"),r.innerHTML='<strong class="svelte-1we8yby">What is the problem being solved?:</strong> Opensea has delisted the original <a href="https://pfp.factoria.app" class="svelte-1we8yby">PFP collection</a> for copyright violation. It looks like one of the minters minted an image of an already existing NFT. Instead of just delisting that specific NFT, Opensea has delisted the entire collection wholesale. I have reached out to them to appeal but never received a response. Because Twitter Blue uses Opensea&#39;s proprietary API instead of using the blockchain, this means the PFP NFT holders won&#39;t be able to use the hexagon avatar anymore.',h=y(),d=u("li"),d.innerHTML='<strong class="svelte-1we8yby">Are the NFTs gone?</strong> NO. It is impossible for an NFT to disappear once they are on the blockchain. The collection is on the blockchain and exists everywhere else, including <a href="https://looksrare.org/collections/0x54e94F18Ddd14946d071EC5AF77183971549A819" class="svelte-1we8yby">Looksrare</a>, <a href="https://rarible.com/collection/0x54e94f18ddd14946d071ec5af77183971549a819/items" class="svelte-1we8yby">Rarible</a>, and <a href="https://etherscan.io/token/0x54e94F18Ddd14946d071EC5AF77183971549A819" class="svelte-1we8yby">Etherscan</a>. It is ONLY delisted on Opensea.',a=y(),l=u("li"),l.innerHTML='<strong class="svelte-1we8yby">So what is this PFP2 airdrop?</strong> Even though you still own the PFP NFTs on the blockchain, I still feel bad that you will all be very disappointed, since you can&#39;t use them for what you minted them for. So I have come up with a solution. Basically, I have created an entirely new collection, and going to mint the same NFTs WITH MY OWN MONEY for you. Then you will be able to use those NFTs on the new PFP2 collection as your profile with no problem at zero additional cost.',b=y(),f=u("li"),f.innerHTML='<strong class="svelte-1we8yby">How are you going to deal with the copyright issue?</strong> Because we learned a lesson here that Opensea delists the entire collection even if only one of the items violates copyright, we have to be very careful here. Just one user submitting another copyrighted image could delist everyone else&#39;s NFT all over again. So this time I am going to ask that everyone confirm that they actually have the copyright to the profile images and that they are not a copy of existing NFTs.',v=y(),p=u("li"),p.innerHTML='<strong class="svelte-1we8yby">How will you exactly do this?</strong> First, I am going to ask that everyone who wants to claim the PFP2 NFT tweet with their own account confirming they own the copyright. Then, I am going to mint an identical NFT to the current holder of the NFT.',_=y(),N=u("li"),N.innerHTML='<strong class="svelte-1we8yby">Will you mint it as soon as I tweet?</strong> No. As you can see, this is a pretty manual process, and I won&#39;t be able to do it immediately and probably need to do it when I can get to it. But I can promise you that as long as you tweet to verify, you will get your PFP2 NFT, and I will reply to your tweet when they are minted.',Y=y(),$=u("li"),$.innerHTML='<strong class="svelte-1we8yby">Will people be able to mint more PFPs?</strong>No. The PFP project was a simple side project meant to provide value to people but this whole delisting thing has taken a toll on me, and since I am working on other high priority projects such as <a href="https://factoria.app" class="svelte-1we8yby">factoria</a> and <a href="https://cell.computer" class="svelte-1we8yby">cell</a>, I do not have time to waste dealing with Opensea. I will only use the PFP2 collection to mint for the existing PFP holders, and since minting for you guys will cost gas, I will be actually losing money overall. Still I think this is the right thing to do, and will end the experiment here.',q=y(),m=u("div"),H=u("hr"),G=y(),j=u("div"),j.innerHTML='<strong class="svelte-1we8yby">How to claim</strong>Go to your <a href="https://looksrare.org/accounts/me#owned" class="svelte-1we8yby">Looksrare profile</a> to find the PFP NFT, or find from the PFP collection here: <a href="https://looksrare.org/collections/0x54e94F18Ddd14946d071EC5AF77183971549A819" class="svelte-1we8yby">PFP on Looksrare</a>. Then enter the URL below to generate a tweet, and Tweet it to confirm and verify that you own the copyright. Then I will mint them for you. It is probably not going to be immediate since it&#39;s a manual process, but I will reply to your tweet when it&#39;s minted.',J=y(),K=u("br"),Q=y(),B=u("div"),B.innerHTML='<strong class="svelte-1we8yby">Questions</strong>Feel free to reach out to me at <a href="https://twitter.com/skogard" class="svelte-1we8yby">@skogard</a> on Twitter if you have any questions.',V=y(),S=u("hr"),X=y(),k=u("div"),g.c(),c(o,"class","svelte-1we8yby"),c(r,"class","svelte-1we8yby"),c(d,"class","svelte-1we8yby"),c(l,"class","svelte-1we8yby"),c(f,"class","svelte-1we8yby"),c(p,"class","svelte-1we8yby"),c(N,"class","svelte-1we8yby"),c($,"class","svelte-1we8yby"),c(H,"class","svelte-1we8yby"),c(S,"class","svelte-1we8yby"),c(k,"class","container"),c(n,"class","svelte-1we8yby"),c(t,"class","svelte-1we8yby")},m(w,E){P(w,t,E),s(t,o),s(t,i),s(t,n),s(n,r),s(n,h),s(n,d),s(n,a),s(n,l),s(n,b),s(n,f),s(n,v),s(n,p),s(n,_),s(n,N),s(n,Y),s(n,$),s(n,q),s(n,m),s(m,H),s(m,G),s(m,j),s(m,J),s(m,K),s(m,Q),s(m,B),s(m,V),s(m,S),s(m,X),s(m,k),g.m(k,null)},p(w,[E]){L===(L=Z(w))&&g?g.p(w,E):(g.d(1),g=L(w),g&&(g.c(),g.m(k,null)))},i:M,o:M,d(w){w&&x(t),g.d()}}}function Te(e,t,o){let i,n;const r=()=>{/https:\/\/looksrare.org\/collections\/([^/]+)\/([0-9]+)$/.test(i)?o(1,n=`Claiming my PFP2 NFT hexagon avatar. I confirm that I am the copyright owner for this profile picture NFT and is not a copy of another NFT ${i} @skogard`):alert("please enter a valid looksrare URL. it must look something like: https://looksrare.org/collections/0x54e94F18Ddd14946d071EC5AF77183971549A819/1643010425948")};window.twttr=function(a,l,b){var f,v=a.getElementsByTagName(l)[0],p=window.twttr||{};return a.getElementById(b)||(f=a.createElement(l),f.id=b,f.src="https://platform.twitter.com/widgets.js",v.parentNode.insertBefore(f,v),p._e=[],p.ready=function(_){p._e.push(_)}),p}(document,"script","twitter-wjs");function h(){n=this.value,o(1,n)}function d(){i=this.value,o(0,i)}return e.$$.update=()=>{if(e.$$.dirty&1){let l=/https:\/\/looksrare.org\/collections\/${PFP}\/([0-9]+)$/i.exec(i);l&&l.length>0&&(l[1],l[2])}},[i,n,r,h,d]}class Ie extends xe{constructor(t){super(),_e(this,t,Te,Pe,ae,{})}}new Ie({target:document.getElementById("app")});
