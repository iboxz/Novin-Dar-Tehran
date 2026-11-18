(()=>{var ml={phone:"[PLACEHOLDER_PHONE]",messenger:"[PLACEHOLDER_MESSENGER]",servicePages:{}},Bt=(r,e=document)=>e.querySelector(r),qs=(r,e=document)=>[...e.querySelectorAll(r)],$_=matchMedia("(min-width: 68em)"),K_=r=>r.replace(/[۰-۹]/g,e=>"\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9".indexOf(e)).replace(/[٠-٩]/g,e=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(e)),fl=r=>K_(r).replace(/[\s()\-]/g,""),Ku=r=>/^(?:0[1-9]\d{9}|(?:\+98|0098)[1-9]\d{9})$/.test(r),Vd=r=>{try{let e=new URL(r);return e.protocol==="https:"?e.href:null}catch{return null}},zd=fl(ml.phone);Ku(zd)&&(qs("[data-phone-link]").forEach(r=>{r.href=`tel:${zd}`}),qs("[data-phone-label]").forEach(r=>{r.textContent=ml.phone}));var Zu=Vd(ml.messenger);Zu&&(qs("[data-messenger-link]").forEach(r=>{r.href=Zu,r.rel="noopener noreferrer"}),qs("[data-messenger-label]").forEach(r=>{r.textContent=Zu}));var Zi=Bt("#mobile-menu"),Di=Bt(".menu-btn"),Qu=typeof Zi.showPopover=="function",Hd=()=>Qu?Zi.matches(":popover-open"):Zi.classList.contains("is-open"),dl=()=>{Hd()&&(Qu?Zi.hidePopover():Zi.classList.remove("is-open"),Di.setAttribute("aria-expanded","false"),Di.setAttribute("aria-label","\u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0645\u0646\u0648"))};Qu?Zi.addEventListener("toggle",r=>{let e=r.newState==="open";Di.setAttribute("aria-expanded",String(e)),Di.setAttribute("aria-label",e?"\u0628\u0633\u062A\u0646 \u0645\u0646\u0648":"\u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0645\u0646\u0648")}):(document.documentElement.classList.add("js-menu"),Di.removeAttribute("popovertarget"),Di.addEventListener("click",()=>{let r=Zi.classList.toggle("is-open");Di.setAttribute("aria-expanded",String(r)),Di.setAttribute("aria-label",r?"\u0628\u0633\u062A\u0646 \u0645\u0646\u0648":"\u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0645\u0646\u0648")}),document.addEventListener("click",r=>{!Zi.contains(r.target)&&!Di.contains(r.target)&&dl()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&Hd()&&(dl(),Di.focus())}));qs("a",Zi).forEach(r=>r.addEventListener("click",()=>{dl();let e=Bt(r.hash||"#contact");e&&(e.setAttribute("tabindex","-1"),e.focus({preventScroll:!0}))}));$_.addEventListener("change",r=>{r.matches&&dl()});var Qr=Bt("#service-dialog"),Ju=Bt("#service-type"),Gd="";qs("[data-details]").forEach(r=>{let e=Vd(ml.servicePages[r.dataset.details]);if(e){r.href=e;return}r.addEventListener("click",t=>{if(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey||typeof Qr.showModal!="function")return;t.preventDefault();let n=r.closest(".svc-item");Gd=n.dataset.service,Bt("#dialog-title").textContent=Bt(".service-select",n).textContent,Bt("#dialog-description").textContent=Bt(".svc-body p",n).textContent,Qr.showModal()})});Qr.addEventListener("click",r=>{if(r.target!==Qr)return;let e=Qr.getBoundingClientRect();(r.clientX<e.x||r.clientX>e.x+e.width||r.clientY<e.y||r.clientY>e.y+e.height)&&Qr.close()});Bt("#dialog-contact").addEventListener("click",()=>{Ju.value=Gd,Ju.dispatchEvent(new Event("input",{bubbles:!0})),Qr.close(),Bt("#full-name").focus({preventScroll:!0})});var $u=Bt("#quote-form"),jr=Bt("#full-name"),es=Bt("#phone"),Wd=Bt("#request-result"),pl=Bt("#form-status");jr.addEventListener("input",()=>jr.setCustomValidity(jr.value&&!jr.value.trim()?"\u0644\u0637\u0641\u0627\u064B \u0646\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F.":""));es.addEventListener("input",()=>es.setCustomValidity(es.value&&!Ku(fl(es.value))?"\u0634\u0645\u0627\u0631\u0647\u0654 \u0627\u06CC\u0631\u0627\u0646 \u0631\u0627 \u06A9\u0627\u0645\u0644\u060C \u0628\u0627 \u06F0 \u06CC\u0627 \u06F9\u06F8+ \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F.":""));$u.addEventListener("input",()=>{Wd.hidden=!0,pl.textContent=""});$u.addEventListener("submit",r=>{if(r.preventDefault(),jr.setCustomValidity(jr.value.trim()?"":"\u0644\u0637\u0641\u0627\u064B \u0646\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."),es.setCustomValidity(Ku(fl(es.value))?"":"\u0634\u0645\u0627\u0631\u0647\u0654 \u0627\u06CC\u0631\u0627\u0646 \u0631\u0627 \u06A9\u0627\u0645\u0644\u060C \u0628\u0627 \u06F0 \u06CC\u0627 \u06F9\u06F8+ \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."),!$u.reportValidity())return;let e=Ju.selectedOptions[0].textContent;Bt("#request-text").value=["\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u0648\u0631\u0647 \u0648 \u0642\u06CC\u0645\u062A \u2014 \u0646\u0648\u06CC\u0646 \u062F\u0631\u0628 \u062A\u0647\u0631\u0627\u0646",`\u0646\u0627\u0645: ${jr.value.trim()}`,`\u0634\u0645\u0627\u0631\u0647\u0654 \u062A\u0645\u0627\u0633: ${fl(es.value)}`,`\u0646\u0648\u0639 \u062E\u062F\u0645\u062A: ${e}`,Bt("#description").value.trim()?`\u062A\u0648\u0636\u06CC\u062D: ${Bt("#description").value.trim()}`:""].filter(Boolean).join(`
`),Wd.hidden=!1,pl.textContent="\u0645\u062A\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0622\u0645\u0627\u062F\u0647 \u0634\u062F\u060C \u0627\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0622\u0646 \u0631\u0627 \u06A9\u067E\u06CC \u06A9\u0646\u06CC\u062F.",Bt("#request-text").focus()});Bt("#copy-request").addEventListener("click",async()=>{let r=Bt("#request-text");try{if(!navigator.clipboard)throw new Error("Clipboard unavailable");await navigator.clipboard.writeText(r.value),pl.textContent="\u0645\u062A\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u06A9\u067E\u06CC \u0634\u062F. \u0627\u0631\u0633\u0627\u0644 \u0622\u0646 \u0628\u0627\u06CC\u062F \u062A\u0648\u0633\u0637 \u0634\u0645\u0627 \u0627\u0646\u062C\u0627\u0645 \u0634\u0648\u062F."}catch{r.focus(),r.select(),pl.textContent="\u06A9\u067E\u06CC \u062E\u0648\u062F\u06A9\u0627\u0631 \u062F\u0631 \u062F\u0633\u062A\u0631\u0633 \u0646\u06CC\u0633\u062A\u061B \u0645\u062A\u0646 \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647 \u0631\u0627 \u0628\u0627 \u06AF\u0632\u06CC\u0646\u0647\u0654 \u06A9\u067E\u06CC \u062F\u0633\u062A\u06AF\u0627\u0647 \u062E\u0648\u062F \u06A9\u067E\u06CC \u06A9\u0646\u06CC\u062F."}});function Ji(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Qd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zs={duration:.5,overwrite:!1,delay:0},_h,on,It,ui=1e8,Tt=1/ui,oh=Math.PI*2,Q_=oh/4,j_=0,jd=Math.sqrt,e0=Math.cos,t0=Math.sin,Kt=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},wl=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},kn=function(e){return e!==!1},xh=function(){return typeof window<"u"},gl=function(e){return kt(e)||Kt(e)},ep=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,ah=/(?:-?\.?\d|\.)+/gi,vh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ju=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yh=/[+-]=-?[.\d]+/,tp=/[^,'"\[\]\s]+/gi,n0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Li,lh,Mh,Yn={},yl={},np,ip=function(e){return(yl=Js(e,Yn))&&un},El=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ta=function(e,t){return!t&&console.warn(e)},rp=function(e,t){return e&&(Yn[e]=t)&&yl&&(yl[e]=t)||Yn},na=function(){return 0},i0={suppressEvents:!0,isStart:!0,kill:!1},_l={suppressEvents:!0,kill:!1},r0={suppressEvents:!0},Sh={},Sr=[],ch={},sp,On={},eh={},Xd=30,xl=[],bh="",Th=function(e){var t=e[0],n,i;if(Ni(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xl.length;i--&&!xl[i].targetTest(t););n=xl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ch(e[i],n)))||e.splice(i,1);return e},br=function(e){return e._gsap||Th(hi(e))[0]._gsap},wh=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():wl(n)&&e.getAttribute&&e.getAttribute(t)||n},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},zt=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},ss=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},s0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ml=function(){var e=Sr.length,t=Sr.slice(0),n,i;for(ch={},Sr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Eh=function(e){return!!(e._initted||e._startAt||e.add)},op=function(e,t,n,i){Sr.length&&!on&&Ml(),e.render(t,n,i||!!(on&&t<0&&Eh(e))),Sr.length&&!on&&Ml()},ap=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tp).length<2?t:Kt(e)?e.trim():e},lp=function(e){return e},Zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},o0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Js=function(e,t){for(var n in t)e[n]=t[n];return e},qd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ni(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Sl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Qo=function(e){var t=e.parent||Ut,n=e.keyframes?o0(cn(e.keyframes)):Zn;if(kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},a0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},cp=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Al=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},l0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uh=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(_l):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},c0=function r(e){return!e||e._ts&&r(e.parent)},Yd=function(e){return e._repeat?$s(e._tTime,e=e.duration()+e._rDelay)*e:0},$s=function(e,t){var n=Math.floor(e=qt(e/t));return e&&n===e?n-1:n},bl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Cl=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},Rl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Cl(e),n._dirty||ts(n,e)),e},up=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=bl(e.rawTime(),t),(!t._dur||sa(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Ui=function(e,t,n,i){return t.parent&&Tr(t),t._start=qt((Ki(n)?n:n||e!==Ut?ci(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),cp(e,t,"_first","_last",e._sort?"_start":0),hh(t)||(e._recent=t),i||up(e,t),e._ts<0&&Rl(e,e._tTime),e},hp=function(e,t){return(Yn.ScrollTrigger||El("scrollTrigger",t))&&Yn.ScrollTrigger.create(t,e)},fp=function(e,t,n,i,s){if(Ih(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sp!==Bn.frame)return Sr.push(e),e._lazy=[s,i],1},u0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},hh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},h0=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&u0(e)&&!(!e._initted&&hh(e))||(e._ts<0||e._dp._ts<0)&&!hh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=sa(0,e._tDur,t),u=$s(l,a),e._yoyo&&u&1&&(o=1-o),u!==$s(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||on||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&fp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&uh(e,t,n,!0),e._onUpdate&&!n&&qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Tr(e,1),!n&&!on&&(qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},f0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ks=function(e,t,n,i){var s=e._repeat,o=qt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:qt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Rl(e,e._tTime=e._tDur*a),e.parent&&Cl(e),n||ts(e.parent,e),e},Zd=function(e){return e instanceof sn?ts(e):Ks(e,e._dur)},d0={_start:0,endTime:na,totalDuration:na},ci=function r(e,t,n){var i=e.labels,s=e._recent||d0,o=e.duration()>=ui?s.endTime(!1):e._dur,a,l,c;return Kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},jo=function(e,t,n){var i=Ki(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;o.immediateRender=kn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Wt(t[0],o,t[s+1])},wr=function(e,t){return e||e===0?t(e):t},sa=function(e,t,n){return n<e?e:n>t?t:n},an=function(e,t){return!Kt(e)||!(t=n0.exec(e))?"":t[1]},p0=function(e,t,n){return wr(n,function(i){return sa(e,t,i)})},fh=[].slice,dp=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==Li},m0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Kt(i)&&!t||dp(i,1)?(s=n).push.apply(s,hi(i)):n.push(i)})||n},hi=function(e,t,n){return It&&!t&&It.selector?It.selector(e):Kt(e)&&!n&&(lh||!Qs())?fh.call((t||Mh).querySelectorAll(e),0):cn(e)?m0(e,n):dp(e)?fh.call(e,0):e?[e]:[]},dh=function(e){return e=hi(e)[0]||ta("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hi(t,n.querySelectorAll?n:n===e?ta("Invalid scope")||Mh.createElement("div"):e)}},pp=function(e){return e.sort(function(){return .5-Math.random()})},mp=function(e){if(kt(e))return e;var t=Ni(e)?e:{each:e},n=ns(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Kt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,T,b,x,w,C,E,P,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,ui])[1],!M){for(E=-ui;E<(E=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=o[g]=[],m=l?Math.min(M,g)*u-.5:i%M,T=M===ui?0:l?g*h/M-.5:i/M|0,E=0,P=ui,C=0;C<g;C++)b=C%M-m,x=T-(C/M|0),p[C]=w=c?Math.abs(c==="y"?x:b):jd(b*b+x*x),w>E&&(E=w),w<P&&(P=w);i==="random"&&pp(p),p.max=E-P,p.min=P,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=an(t.amount||t.each)||0,n=n&&g<0?Tp(n):n}return g=(p[f]-p.min)/p.max||0,qt(p.b+(n?n(g):g)*p.v)+p.u}},ph=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ki(n)?0:an(n))}},gp=function(e,t){var n=cn(e),i,s;return!n&&Ni(e)&&(i=n=e.radius||ui,e.values?(e=hi(e.values),(s=!Ki(e[0]))&&(i*=i)):e=ph(e.increment)),wr(t,n?kt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ui,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Ki(o)?u:u+an(o)}:ph(e))},_p=function(e,t,n,i){return wr(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},g0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},_0=function(e,t){return function(n){return e(parseFloat(n))+(t||an(n))}},x0=function(e,t,n){return vp(e,t,0,1,n)},xp=function(e,t,n){return wr(n,function(i){return e[~~t(i)]})},v0=function r(e,t,n){var i=t-e;return cn(e)?xp(e,r(0,e.length),t):wr(n,function(s){return(i+(s-e)%i)%i+e})},y0=function r(e,t,n){var i=t-e,s=i*2;return cn(e)?xp(e,r(0,e.length-1),t):wr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},js=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?tp:ah),n+=e.substr(t,i-t)+_p(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},vp=function(e,t,n,i,s){var o=t-e,a=i-n;return wr(s,function(l){return n+((l-e)/o*a||0)})},M0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Kt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Js(cn(e)?[]:{},e));if(!u){for(l in t)Rh.call(a,e,l,"get",t[l]);s=function(_){return Uh(_,a)||(o?e.p:e)}}}return wr(n,s)},Jd=function(e,t,n){var i=e.labels,s=ui,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(e,t,n){var i=e.vars,s=i[t],o=It,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Sr.length&&Ml(),a&&(It=a),u=l?s.apply(c,l):s.call(c),It=o,u},$o=function(e){return Tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&qn(e,"onInterrupt"),e},Ys,yp=[],Mp=function(e){if(e)if(e=!e.name&&e.default||e,xh()||e.headless){var t=e.name,n=kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:na,render:Uh,add:Rh,kill:O0,modifier:F0,rawVars:0},o={targetTest:0,get:0,getSetter:Pl,aliases:{},register:0};if(Qs(),e!==i){if(On[t])return;Zn(i,Zn(Sl(e,s),o)),Js(i.prototype,Js(s,Sl(e,o))),On[i.prop=t]=i,e.targetTest&&(xl.push(i),Sh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rp(t,i),e.register&&e.register(un,i,wn)}else yp.push(e)},bt=255,Ko={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},th=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},Sp=function(e,t,n){var i=e?Ki(e)?[e>>16,e>>8&bt,e&bt]:0:Ko.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ko[e])i=Ko[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(ah),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=th(l+1/3,s,o),i[1]=th(l,s,o),i[2]=th(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(vh),n&&i.length<4&&(i[3]=1),i}else i=e.match(ah)||Ko.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/bt,o=i[1]/bt,a=i[2]/bt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},bp=function(e){var t=[],n=[],i=-1;return e.split($i).forEach(function(s){var o=s.match(rs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},$d=function(e,t,n){var i="",s=(e+i).match($i),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Sp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=bp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace($i,"1").split(rs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split($i),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},$i=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ko)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),S0=/hsl[a]?\(/,Ah=function(e){var t=e.join(" "),n;if($i.lastIndex=0,$i.test(t))return n=S0.test(t),e[1]=$d(e[1],n),e[0]=$d(e[0],n,bp(e[1])),!0},ia,Bn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,T=p===!0,b,x,w,C;if((m>e||m<0)&&(n+=m-t),i+=m,w=i-n,b=w-o,(b>0||T)&&(C=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=b+(b>=s?4:s-b),x=1),T||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](w,f,C,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){np&&(!lh&&xh()&&(Li=lh=window,Mh=Li.document||{},Yn.gsap=un,(Li.gsapVersions||(Li.gsapVersions=[])).push(un.version),ip(yl||Li.GreenSockGlobals||!Li.gsap&&Li||{}),yp.forEach(Mp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ia=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ia=0,c=na},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,T){var b=m?function(x,w,C,E){p(x,w,C,E),h.remove(b)}:p;return h.remove(p),a[T?"unshift":"push"](b),Qs(),b},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h})(),Qs=function(){return!ia&&Bn.wake()},dt={},b0=/^[\d.\-M][\d.\-,\s]/,T0=/["']/g,w0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(T0,"").trim():+c,i=l.substr(a+1).trim();return t},E0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},A0=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[w0(t[1])]:E0(e).split(",").map(ap)):dt._CE&&b0.test(e)?dt._CE("",e):n},Tp=function(e){return function(t){return 1-e(1-t)}},wp=function r(e,t){for(var n=e._first,i;n;)n instanceof sn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ns=function(e,t){return e&&(kt(e)?e:dt[e]||A0(e))||t},os=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Tn(e,function(a){dt[a]=Yn[a]=s,dt[o=a.toLowerCase()]=n;for(var l in s)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=s[l]}),s},Ep=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/oh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*t0((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ep(a);return s=oh/s,l.config=function(c,u){return r(e,c,u)},l},ih=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ep(n);return i.config=function(s){return r(e,s)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;os(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;os("Elastic",nh("in"),nh("out"),nh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};os("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);os("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});os("Circ",function(r){return-(jd(1-r*r)-1)});os("Sine",function(r){return r===1?1:-e0(r*Q_)+1});os("Back",ih("in"),ih("out"),ih());dt.SteppedEase=dt.steps=Yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((i*sa(0,o,a)|0)+s)*n}}};Zs.ease=dt["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return bh+=r+","+r+"Params,"});var Ch=function(e,t){this.id=j_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wh,this.set=t?t.getSetter:Pl},ra=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ks(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),ia||Bn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rl(this,n),!s._dp||s.parent||up(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),op(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$s(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?bl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(sa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Cl(this),l0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ui(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=r0);var i=on;return on=n,Eh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kn(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=kt(n)?n:lp,a=function(){var c=i.then;i.then=null,kt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){$o(this)},r})();Zn(ra.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var sn=(function(r){Qd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),Ut&&Ui(n.parent||Ut,Ji(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hp(Ji(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return jo(0,arguments,this),this},t.from=function(i,s,o){return jo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return jo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Qo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,ci(this,o),1),this},t.call=function(i,s,o){return Ui(this,Wt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Wt(i,o,ci(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Qo(o).immediateRender=kn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Qo(a).immediateRender=kn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:qt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,T,b,x,w,C,E;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,b=this._ts,m=!b,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=qt(u%p),u===l?(g=this._repeat,f=c):(w=qt(u/p),g=~~w,g&&g===w&&(f=c,g--),f>c&&(f=c)),w=$s(this._tTime,p),!a&&this._tTime&&w!==g&&this._tTime-w*p-this._dur<=0&&(w=g),C&&g&1&&(f=c-f,E=1),g!==w&&!this._lock){var P=C&&w&1,M=P===(C&&g&1);if(g<w&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(E?0:qt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;wp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=f0(this,qt(a),qt(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!w&&(qn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){T=0,_&&(u+=this._zTime=-Tt);break}}d=_}else{d=this._last;for(var y=i<0?i:f;d;){if(_=d._prev,(d._act||y<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||on&&Eh(d)),f!==this._time||!this._ts&&!m){T=0,_&&(u+=this._zTime=y?-Tt:Tt);break}}d=_}}if(T&&!s&&(this.pause(),T.render(f>=a?0:-Tt)._zTime=f>=a?1:-1,this._ts))return this._start=x,Cl(this),this.render(i,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Tr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(qn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ki(s)||(s=ci(this,s,i)),!(i instanceof ra)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Kt(i))return this.addLabel(i,s);if(kt(i))i=Wt.delayedCall(0,i);else return this}return this!==i?Ui(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ui);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Wt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Kt(i)?this.removeLabel(i):kt(i)?this.killTweensOf(i):(i.parent===this&&Al(this,i),i===this._recent&&(this._recent=this._last),ts(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Wt.delayedCall(0,s||na,o);return a.data="isPause",this._hasPause=1,Ui(this,a,ci(this,i))},t.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&Tr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Mr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=hi(i),l=this._first,c=Ki(s),u;l;)l instanceof Wt?s0(l._targets,a)&&(c?(!Mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ci(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Wt.to(o,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Ks(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Zn({startAt:{time:ci(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Jd(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Jd(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ts(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ts(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ui,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ui(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ks(o,o===Ut&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ut._ts&&(op(Ut,bl(i,Ut)),sp=Bn.frame),Bn.frame>=Xd){Xd+=zn.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&zn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},e})(ra);Zn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var C0=function(e,t,n,i,s,o,a){var l=new wn(this._pt,e,t,0,1,Lh,null,s),c=0,u=0,h,f,d,_,g,p,m,T;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=js(i)),o&&(T=[n,i],o(T,e,t),n=T[0],i=T[1]),f=n.match(ju)||[];h=ju.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ss(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=ju.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(yh.test(i)||m)&&(l.e=0),this._pt=l,l},Rh=function(e,t,n,i,s,o,a,l,c,u){kt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:kt(h)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=kt(h)?c?L0:Rp:Dh,_;if(Kt(i)&&(~i.indexOf("random(")&&(i=js(i)),i.charAt(1)==="="&&(_=ss(f,i)+(an(f)||0),(_||_===0)&&(i=_))),!u||f!==i||mh)return!isNaN(f*i)&&i!==""?(_=new wn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?N0:Pp,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&El(t,i),C0.call(this,e,t,f,i,d,l||zn.stringFilter,c))},R0=function(e,t,n,i,s){if(kt(e)&&(e=ea(e,s,t,n,i)),!Ni(e)||e.style&&e.nodeType||cn(e)||ep(e))return Kt(e)?ea(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ea(e[a],s,t,n,i);return o},Ph=function(e,t,n,i,s,o){var a,l,c,u;if(On[e]&&(a=new On[e]).init(s,a.rawVars?t[e]:R0(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new wn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ys))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Mr,mh,Ih=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,T=m&&m.data==="nested"?m.vars.targets:p,b=e._overwrite==="auto"&&!_h,x=e.timeline,w,C,E,P,M,y,I,D,z,V,X,H,Q;if(x&&(!f||!s)&&(s="none"),e._ease=ns(s,Zs.ease),e._yEase=h?Tp(ns(h===!0?s:h,Zs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(D=p[0]?br(p[0]).harness:0,H=D&&i[D.prop],w=Sl(i,Sh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?_l:i0),g._lazy=0),o){if(Tr(e._startAt=Wt.set(p,Zn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!a&&!d)&&e._startAt.revert(_l),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),E=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&kn(l),immediateRender:a,stagger:0,parent:m},w),H&&(E[D.prop]=H),Tr(e._startAt=Wt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(_l):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&kn(l)||l&&!_,C=0;C<p.length;C++){if(M=p[C],I=M._gsap||Th(p)[C]._gsap,e._ptLookup[C]=V={},ch[I.id]&&Sr.length&&Ml(),X=T===p?C:T.indexOf(M),D&&(z=new D).init(M,H||w,e,X,T)!==!1&&(e._pt=P=new wn(e._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(G){V[G]=P}),z.priority&&(y=1)),!D||H)for(E in w)On[E]&&(z=Ph(E,w,e,X,M,T))?z.priority&&(y=1):V[E]=P=Rh.call(e,M,E,"get",w[E],X,T,0,i.stringFilter);e._op&&e._op[C]&&e.kill(M,e._op[C]),b&&e._pt&&(Mr=e,Ut.killTweensOf(M,V,e.globalTime(t)),Q=!e.parent,Mr=0),e._pt&&l&&(ch[I.id]=1)}y&&Nh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,f&&t<=0&&x.render(ui,!0,!0)},P0=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return mh=1,e.vars[t]="+=0",Ih(e,a),mh=0,l?ta(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=zt(n)+an(h.e)),h.b&&(h.b=u.s+an(h.b))},I0=function(e,t){var n=e[0]?br(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Js({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},D0=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ea=function(e,t,n,i,s){return kt(e)?e.call(t,n,i,s):Kt(e)&&~e.indexOf("random(")?js(e):e},Ap=bh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cp={};Tn(Ap+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Cp[r]=1});var Wt=(function(r){Qd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Qo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,T=i.parent||Ut,b=(cn(n)||ep(n)?Ki(n[0]):"length"in i)?[n]:hi(n),x,w,C,E,P,M,y,I;if(a._targets=b.length?Th(b):ta("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||gl(c)||gl(u)){if(i=a.vars,x=a.timeline=new sn({data:"nested",defaults:g||{},targets:T&&T.data==="nested"?T.vars.targets:b}),x.kill(),x.parent=x._dp=Ji(a),x._start=0,f||gl(c)||gl(u)){if(E=b.length,y=f&&mp(f),Ni(f))for(P in f)~Ap.indexOf(P)&&(I||(I={}),I[P]=f[P]);for(w=0;w<E;w++)C=Sl(i,Cp),C.stagger=0,m&&(C.yoyoEase=m),I&&Js(C,I),M=b[w],C.duration=+ea(c,Ji(a),w,M,b),C.delay=(+ea(u,Ji(a),w,M,b)||0)-a._delay,!f&&E===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),x.to(M,C,y?y(w,M,b):0),x._ease=dt.none;x.duration()?c=u=0:a.timeline=0}else if(_){Qo(Zn(x.vars.defaults,{ease:"none"})),x._ease=ns(_.ease||i.ease||"none");var D=0,z,V,X;if(cn(_))_.forEach(function(H){return x.to(b,H,">")}),x.duration();else{C={};for(P in _)P==="ease"||P==="easeEach"||D0(P,_[P],C,_.easeEach);for(P in C)for(z=C[P].sort(function(H,Q){return H.t-Q.t}),D=0,w=0;w<z.length;w++)V=z[w],X={ease:V.e,duration:(V.t-(w?z[w-1].t:0))/100*c},X[P]=V.v,x.to(b,X,D),D+=X.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!_h&&(Mr=Ji(a),Ut.killTweensOf(b),Mr=0),Ui(T,Ji(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===qt(T._time)&&kn(h)&&c0(Ji(a))&&T.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),p&&hp(Ji(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Tt&&!u?l:i<Tt?0:i,f,d,_,g,p,m,T,b,x;if(!c)h0(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=qt(h%g),h===l?(_=this._repeat,f=c):(p=qt(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(x=this._yEase,f=c-f),p=$s(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(b&&this._yEase&&wp(b,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(qt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(fp(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(x||this._ease)(f/c),this._from&&(this.ratio=T=1-T),!a&&h&&!s&&!p&&(qn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&uh(this,i,s,o),qn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&uh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Tr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(qn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ia||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ih(this,c),u=this._ease(c/this._dur),P0(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Rl(this,0),this.parent||cp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$o(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Mr&&Mr.vars.overwrite!==!0)._first||$o(this),this.parent&&o!==this.timeline.totalDuration()&&Ks(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?hi(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&a0(a,l))return s==="all"&&(this._pt=0),$o(this);for(h=this._op=this._op||[],s!=="all"&&(Kt(s)&&(g={},Tn(s,function(T){return g[T]=1}),s=g),s=I0(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Al(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&$o(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return jo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return jo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ut.killTweensOf(i,s,o)},e})(ra);Zn(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new sn,t=fh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Dh=function(e,t,n){return e[t]=n},Rp=function(e,t,n){return e[t](n)},L0=function(e,t,n,i){return e[t](i.fp,n)},U0=function(e,t,n){return e.setAttribute(t,n)},Pl=function(e,t){return kt(e[t])?Rp:wl(e[t])&&e.setAttribute?U0:Dh},Pp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},N0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Uh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},F0=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},O0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Al(this,t,"_pt"):t.dep||(n=1),t=i;return!n},B0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Nh=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},wn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Pp,this.d=l||this,this.set=c||Dh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=B0,this.m=n,this.mt=s,this.tween=i},r})();Tn(bh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Sh[r]=1});Yn.TweenMax=Yn.TweenLite=Wt;Yn.TimelineLite=Yn.TimelineMax=sn;Ut=new sn({sortChildren:!1,defaults:Zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Ah;var is=[],vl={},k0=[],Kd=0,z0=0,rh=function(e){return(vl[e]||k0).map(function(t){return t()})},gh=function(){var e=Date.now(),t=[];e-Kd>2&&(rh("matchMediaInit"),is.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Li.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),rh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Kd=e,rh("matchMedia"))},Ip=(function(){function r(t,n){this.selector=n&&dh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=z0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){kt(n)&&(s=i,i=n,n=kt);var o=this,a=function(){var c=It,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=dh(s)),It=o,h=i.apply(o,arguments),kt(h)&&o._r.push(h),It=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===kt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=is.length;o--;)is[o].id===this.id&&is.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),V0=(function(){function r(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ni(n)||(n={matches:n});var o=new Ip(0,s||this.scope),a=o.conditions={},l,c,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Li.matchMedia(n[c]),l&&(is.indexOf(o)<0&&is.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(gh):l.addEventListener("change",gh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Tl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Mp(i)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){Kt(e)&&(e=hi(e)[0]);var s=br(e||{}).get,o=n?lp:ap;return n==="native"&&(n=""),e&&(t?o((On[t]&&On[t].get||s)(e,t,n,i)):function(a,l,c){return o((On[a]&&On[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=hi(e),e.length>1){var i=e.map(function(u){return un.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=On[t],a=br(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ys._pt=0,h.init(e,n?u+n:u,Ys,0,[e]),h.render(1,h),Ys._pt&&Uh(1,Ys)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=un.to(e,Zn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ns(e.ease,Zs.ease)),qd(Zs,e||{})},config:function(e){return qd(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!On[a]&&!Yn[a]&&ta(t+" effect requires "+a+" plugin.")}),eh[t]=function(a,l,c){return n(hi(a),Zn(l||{},s),c)},o&&(sn.prototype[t]=function(a,l,c){return this.add(eh[t](a,Ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=ns(t)},parseEase:function(e,t){return arguments.length?ns(e,t):dt},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),i,s;for(n.smoothChildTiming=kn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&Ui(n,i,i._start-i._delay),i=s;return Ui(Ut,n,0),n},context:function(e,t){return e?new Ip(e,t):It},matchMedia:function(e){return new V0(e)},matchMediaRefresh:function(){return is.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||gh()},addEventListener:function(e,t){var n=vl[e]||(vl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:v0,wrapYoyo:y0,distribute:mp,random:_p,snap:gp,normalize:x0,getUnit:an,clamp:p0,splitColor:Sp,toArray:hi,selector:dh,mapRange:vp,pipe:g0,unitize:_0,interpolate:M0,shuffle:pp},install:ip,effects:eh,ticker:Bn,updateRoot:sn.updateRoot,plugins:On,globalTimeline:Ut,core:{PropTween:wn,globals:rp,Tween:Wt,Timeline:sn,Animation:ra,getCache:br,_removeLinkedListItem:Al,reverting:function(){return on},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return _h=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Tl[r]=Wt[r]});Bn.add(sn.updateRoot);Ys=Tl.to({},{duration:0});var H0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},G0=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=H0(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},sh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Kt(s)&&(l={},Tn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}G0(a,s)}}}},un=Tl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},sh("roundProps",ph),sh("modifiers"),sh("snap",gp))||Tl;Wt.version=sn.version=un.version="3.13.0";np=1;xh()&&Qs();var W0=dt.Power0,X0=dt.Power1,q0=dt.Power2,Y0=dt.Power3,Z0=dt.Power4,J0=dt.Linear,$0=dt.Quad,K0=dt.Cubic,Q0=dt.Quart,j0=dt.Quint,ex=dt.Strong,tx=dt.Elastic,nx=dt.Back,ix=dt.SteppedEase,rx=dt.Bounce,sx=dt.Sine,ox=dt.Expo,ax=dt.Circ;var Dp,Er,to,Vh,us,lx,Lp,Hh,cx=function(){return typeof window<"u"},ji={},cs=180/Math.PI,no=Math.PI/180,eo=Math.atan2,Up=1e8,Gh=/([A-Z])/g,ux=/(left|right|width|margin|padding|x)/i,hx=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},px=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Hp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},mx=function(e,t,n){return e.style[t]=n},gx=function(e,t,n){return e.style.setProperty(t,n)},_x=function(e,t,n){return e._gsap[t]=n},xx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},vx=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},yx=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Nt="transform",Vn=Nt+"Origin",Mx=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Qi(i,a)}):this.tfm[e]=o.x?o[e]:Qi(i,e),e===Vn&&(this.tfm.zOrigin=o.zOrigin);else return Fi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Nt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},Wp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Sx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Gh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Hh(),(!s||!s.isStart)&&!n[Nt]&&(Wp(n),i.zOrigin&&n[Vn]&&(n[Vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Xp=function(e,t){var n={target:e,props:[],revert:Sx,save:Mx};return e._gsap||un.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},qp,Bh=function(e,t){var n=Er.createElementNS?Er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Er.createElement(e);return n&&n.style?n:Er.createElement(e)},fi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Gh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,io(t)||t,1)||""},Np="O,Moz,ms,Ms,Webkit".split(","),io=function(e,t,n){var i=t||us,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Np[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Np[o]:"")+e},kh=function(){cx()&&window.document&&(Dp=window,Er=Dp.document,to=Er.documentElement,us=Bh("div")||{style:{}},lx=Bh("div"),Nt=io(Nt),Vn=Nt+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qp=!!io("perspective"),Hh=un.core.reverting,Vh=1)},Fp=function(e){var t=e.ownerSVGElement,n=Bh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),to.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),to.removeChild(n),s},Op=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Yp=function(e){var t,n;try{t=e.getBBox()}catch{t=Fp(e),n=1}return t&&(t.width||t.height)||n||(t=Fp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Op(e,["x","cx","x1"])||0,y:+Op(e,["y","cy","y1"])||0,width:0,height:0}:t},Zp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yp(e))},hs=function(e,t){if(t){var n=e.style,i;t in ji&&t!==Vn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Gh,"-$1").toLowerCase())):n.removeAttribute(t)}},Ar=function(e,t,n,i,s,o){var a=new wn(e._pt,t,n,0,1,o?Gp:Hp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Bp={deg:1,rad:1,turn:1},bx={grid:1,flex:1},Cr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=us.style,l=ux.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||Bp[i]||Bp[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Zp(e),(d||o==="%")&&(ji[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],zt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Er||!g.appendChild)&&(g=Er.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Bn.time&&!p.uncache)return zt(s/p.width*h);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=h+i,_=e[u],T?e.style[t]=T:hs(e,t)}else(d||o==="%")&&!bx[fi(g,"display")]&&(a.position=fi(e,"position")),g===e&&(a.position="static"),g.appendChild(us),_=us[u],g.removeChild(us),a.position="absolute";return l&&d&&(p=br(g),p.time=Bn.time,p.width=g[u]),zt(f?_*s/h:_&&s?h/_*s:0)},Qi=function(e,t,n,i){var s;return Vh||kh(),t in Fi&&t!=="transform"&&(t=Fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ji[t]&&t!=="transform"?(s=la(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Dl(fi(e,Vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Il[t]&&Il[t](e,t,n)||fi(e,t)||wh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cr(e,t,s,n)+n:s},Tx=function(e,t,n,i){if(!n||n==="none"){var s=io(t,e,1),o=s&&fi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=fi(e,"borderTopColor"))}var a=new wn(this._pt,e.style,t,0,1,Lh),l=0,c=0,u,h,f,d,_,g,p,m,T,b,x,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=fi(e,t)||i,g?e.style[t]=g:hs(e,t)),u=[n,i],Ah(u),n=u[0],i=u[1],f=n.match(rs)||[],w=i.match(rs)||[],w.length){for(;h=rs.exec(i);)p=h[0],T=i.substring(l,h.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=ss(d,p)+x),m=parseFloat(p),b=p.substr((m+"").length),l=rs.lastIndex-b.length,b||(b=b||zn.units[t]||x,l===i.length&&(i+=b,a.e+=b)),x!==b&&(d=Cr(e,t,g,b)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Gp:Hp;return yh.test(i)&&(a.e=0),this._pt=a,a},kp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=kp[n]||n,t[1]=kp[i]||i,t.join(" ")},Ex=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ji[a]&&(l=1,a=a==="transformOrigin"?Vn:Nt),hs(n,a);l&&(hs(n,Nt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",la(n,1),o.uncache=1,Wp(i)))}},Il={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new wn(e._pt,t,n,0,0,Ex);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},aa=[1,0,0,1,0,0],Jp={},$p=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zp=function(e){var t=fi(e,Nt);return $p(t)?aa:t.substr(7).match(vh).map(zt)},Wh=function(e,t){var n=e._gsap||br(e),i=e.style,s=zp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?aa:s):(s===aa&&!e.offsetParent&&e!==to&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,to.appendChild(e)),s=zp(e),l?i.display=l:hs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):to.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zh=function(e,t,n,i,s,o){var a=e._gsap,l=s||Wh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],T=l[5],b=t.split(" "),x=parseFloat(b[0])||0,w=parseFloat(b[1])||0,C,E,P,M;n?l!==aa&&(E=d*p-_*g)&&(P=x*(p/E)+w*(-g/E)+(g*T-p*m)/E,M=x*(-_/E)+w*(d/E)-(d*T-_*m)/E,x=P,w=M):(C=Yp(e),x=C.x+(~b[0].indexOf("%")?x/100*C.width:x),w=C.y+(~(b[1]||b[0]).indexOf("%")?w/100*C.height:w)),i||i!==!1&&a.smooth?(m=x-c,T=w-u,a.xOffset=h+(m*d+T*g)-m,a.yOffset=f+(m*_+T*p)-T):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Vn]="0px 0px",o&&(Ar(o,a,"xOrigin",c,x),Ar(o,a,"yOrigin",u,w),Ar(o,a,"xOffset",h,a.xOffset),Ar(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},la=function(e,t){var n=e._gsap||new Ch(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=fi(e,Vn)||"0",u,h,f,d,_,g,p,m,T,b,x,w,C,E,P,M,y,I,D,z,V,X,H,Q,G,ae,U,me,Be,Ke,He,Ge;return u=h=f=g=p=m=T=b=x=0,d=_=1,n.svg=!!(e.getCTM&&Zp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),E=Wh(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),zh(e,Q||c,!!Q||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,C=n.yOrigin||0,E!==aa&&(I=E[0],D=E[1],z=E[2],V=E[3],u=X=E[4],h=H=E[5],E.length===6?(d=Math.sqrt(I*I+D*D),_=Math.sqrt(V*V+z*z),g=I||D?eo(D,I)*cs:0,T=z||V?eo(z,V)*cs+g:0,T&&(_*=Math.abs(Math.cos(T*no))),n.svg&&(u-=w-(w*I+C*z),h-=C-(w*D+C*V))):(Ge=E[6],Ke=E[7],U=E[8],me=E[9],Be=E[10],He=E[11],u=E[12],h=E[13],f=E[14],P=eo(Ge,Be),p=P*cs,P&&(M=Math.cos(-P),y=Math.sin(-P),Q=X*M+U*y,G=H*M+me*y,ae=Ge*M+Be*y,U=X*-y+U*M,me=H*-y+me*M,Be=Ge*-y+Be*M,He=Ke*-y+He*M,X=Q,H=G,Ge=ae),P=eo(-z,Be),m=P*cs,P&&(M=Math.cos(-P),y=Math.sin(-P),Q=I*M-U*y,G=D*M-me*y,ae=z*M-Be*y,He=V*y+He*M,I=Q,D=G,z=ae),P=eo(D,I),g=P*cs,P&&(M=Math.cos(P),y=Math.sin(P),Q=I*M+D*y,G=X*M+H*y,D=D*M-I*y,H=H*M-X*y,I=Q,X=G),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=zt(Math.sqrt(I*I+D*D+z*z)),_=zt(Math.sqrt(H*H+Ge*Ge)),P=eo(X,H),T=Math.abs(P)>2e-4?P*cs:0,x=He?1/(He<0?-He:He):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!$p(fi(e,Nt)),Q&&e.setAttribute("transform",Q))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=zt(d),n.scaleY=zt(_),n.rotation=zt(g)+a,n.rotationX=zt(p)+a,n.rotationY=zt(m)+a,n.skewX=T+a,n.skewY=b+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Vn]=Dl(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?Cx:qp?Kp:Ax,n.uncache=0,n},Dl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fh=function(e,t,n){var i=an(t);return zt(parseFloat(t)+parseFloat(Cr(e,"x",n+"px",i)))+i},Ax=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Kp(e,t)},as="0deg",oa="0px",ls=") ",Kp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,T=n.target,b=n.zOrigin,x="",w=m==="auto"&&e&&e!==1||m===!0;if(b&&(h!==as||u!==as)){var C=parseFloat(u)*no,E=Math.sin(C),P=Math.cos(C),M;C=parseFloat(h)*no,M=Math.cos(C),o=Fh(T,o,E*M*-b),a=Fh(T,a,-Math.sin(C)*-b),l=Fh(T,l,P*M*-b+b)}p!==oa&&(x+="perspective("+p+ls),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(w||o!==oa||a!==oa||l!==oa)&&(x+=l!==oa||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ls),c!==as&&(x+="rotate("+c+ls),u!==as&&(x+="rotateY("+u+ls),h!==as&&(x+="rotateX("+h+ls),(f!==as||d!==as)&&(x+="skew("+f+", "+d+ls),(_!==1||g!==1)&&(x+="scale("+_+", "+g+ls),T.style[Nt]=x||"translate(0, 0)"},Cx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,T=n.forceCSS,b=parseFloat(o),x=parseFloat(a),w,C,E,P,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=no,c*=no,w=Math.cos(l)*h,C=Math.sin(l)*h,E=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=no,M=Math.tan(c-u),M=Math.sqrt(1+M*M),E*=M,P*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,C*=M)),w=zt(w),C=zt(C),E=zt(E),P=zt(P)):(w=h,P=f,C=E=0),(b&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(b=Cr(d,"x",o,"px"),x=Cr(d,"y",a,"px")),(_||g||p||m)&&(b=zt(b+_-(_*w+g*E)+p),x=zt(x+g-(_*C+g*P)+m)),(i||s)&&(M=d.getBBox(),b=zt(b+i/100*M.width),x=zt(x+s/100*M.height)),M="matrix("+w+","+C+","+E+","+P+","+b+","+x+")",d.setAttribute("transform",M),T&&(d.style[Nt]=M)},Rx=function(e,t,n,i,s){var o=360,a=Kt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?cs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Up)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Up)%o-~~(c/o)*o)),e._pt=f=new wn(e._pt,t,n,i,c,fx),f.e=u,f.u="deg",e._props.push(n),f},Vp=function(e,t){for(var n in t)e[n]=t[n];return e},Px=function(e,t,n){var i=Vp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Nt]=t,a=la(n,1),hs(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],o[Nt]=t,a=la(n,1),o[Nt]=c);for(l in ji)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=an(c),_=an(u),h=d!==_?Cr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new wn(e._pt,a,l,h,f-h,Oh),e._pt.u=_||0,e._props.push(l));Vp(a,i)};Tn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Il[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Qi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Xh={name:"css",register:kh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,T,b,x,w,C,E,P;Vh||kh(),this.styles=this.styles||Xp(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(On[g]&&Ph(g,t,n,i,e,s)))){if(d=typeof u,_=Il[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=js(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(p=an(c),m=an(u)),m?p!==m&&(c=Cr(e,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Kt(c)&&~c.indexOf("random(")&&(c=js(c)),an(c+"")||c==="auto"||(c+=zn.units[g]||an(Qi(e,g))||""),(c+"").charAt(1)==="="&&(c=Qi(e,g))):c=Qi(e,g),f=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),g in Fi&&(g==="autoAlpha"&&(f===1&&Qi(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Ar(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Fi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in ji,b){if(this.styles.save(g),d==="string"&&u.substring(0,6)==="var(--"&&(u=fi(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||la(e,t.parseTransform),C=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new wn(this._pt,a,Nt,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new wn(this._pt,w,"scaleY",w.scaleY,(T?ss(w.scaleY,T+h):h)-w.scaleY||0,Oh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Vn,0,a[Vn]),u=wx(u),w.svg?zh(e,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&Ar(this,w,"zOrigin",w.zOrigin,m),Ar(this,a,g,Dl(c),Dl(u)));continue}else if(g==="svgOrigin"){zh(e,u,1,C,0,this);continue}else if(g in Jp){Rx(this,w,g,f,T?ss(f,T+u):u);continue}else if(g==="smoothOrigin"){Ar(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){Px(this,u,e);continue}}else g in a||(g=io(g)||g);if(b||(h||h===0)&&(f||f===0)&&!hx.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=an(u)||(g in zn.units?zn.units[g]:p),p!==m&&(f=Cr(e,g,c,m)),this._pt=new wn(this._pt,b?w:a,g,f,(T?ss(f,T+h):h)-f,!b&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?px:Oh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=dx);else if(g in a)Tx.call(this,e,g,c,T?T+u:u);else if(g in e)this.add(e,g,c||e[g],T?T+u:u,i,s);else if(g!=="parseTransform"){El(g,u);continue}b||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}E&&Nh(this)},render:function(e,t){if(t.tween._time||!Hh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qi,aliases:Fi,getSetter:function(e,t,n){var i=Fi[t];return i&&i.indexOf(",")<0&&(t=i),t in ji&&t!==Vn&&(e._gsap.x||Qi(e,"x"))?n&&Lp===n?t==="scale"?xx:_x:(Lp=n||{})&&(t==="scale"?vx:yx):e.style&&!wl(e.style[t])?mx:~t.indexOf("-")?gx:Pl(e,t)},core:{_removeProperty:hs,_getMatrix:Wh}};un.utils.checkPrefix=io;un.core.getStyleSaver=Xp;(function(r,e,t,n){var i=Tn(r+","+e+","+t,function(s){ji[s]=1});Tn(e,function(s){zn.units[s]="deg",Jp[s]=1}),Fi[i[13]]=r+","+e,Tn(n,function(s){var o=s.split(":");Fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});un.registerPlugin(Xh);var yi=un.registerPlugin(Xh)||un,k1=yi.core.Tween;function Qp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ix(r,e,t){return e&&Qp(r.prototype,e),t&&Qp(r,t),r}var ln,Nl,Dx,Jn,Rr,Pr,so,em,fs,ua,tm,er,Mi,nm,im=function(){return ln||typeof window<"u"&&(ln=window.gsap)&&ln.registerPlugin&&ln},rm=1,ro=[],st=[],Si=[],ha=Date.now,qh=function(e,t){return t},Lx=function(){var e=ua.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Si),st=n,Si=i,qh=function(o,a){return t[o](a)}},nr=function(e,t){return~Si.indexOf(e)&&Si[Si.indexOf(e)+1][t]},fa=function(e){return!!~tm.indexOf(e)},An=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},En=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ll="scrollLeft",Ul="scrollTop",Yh=function(){return er&&er.isPressed||st.cache++},Fl=function(e,t){var n=function i(s){if(s||s===0){rm&&(Jn.history.scrollRestoration="manual");var o=er&&er.isPressed;s=i.v=Math.round(s)||(er&&er.iOS?1:0),e(s),i.cacheID=st.cache,o&&qh("ss",s)}else(t||st.cache!==i.cacheID||qh("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},hn={s:Ll,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fl(function(r){return arguments.length?Jn.scrollTo(r,Yt.sc()):Jn.pageXOffset||Rr[Ll]||Pr[Ll]||so[Ll]||0})},Yt={s:Ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:hn,sc:Fl(function(r){return arguments.length?Jn.scrollTo(hn.sc(),r):Jn.pageYOffset||Rr[Ul]||Pr[Ul]||so[Ul]||0})},Cn=function(e,t){return(t&&t._ctx&&t._ctx.selector||ln.utils.toArray)(e)[0]||(typeof e=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ux=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},tr=function(e,t){var n=t.s,i=t.sc;fa(e)&&(e=Rr.scrollingElement||Pr);var s=st.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||An(e,"scroll",Yh);var a=st[s+o],l=a||(st[s+o]=Fl(nr(e,n),!0)||(fa(e)?i:Fl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=ln.getProperty(e,"scrollBehavior")==="smooth"),l},Ol=function(e,t,n){var i=e,s=e,o=ha(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=ha();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=ha();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},ca=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},jp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},sm=function(){ua=ln.core.globals().ScrollTrigger,ua&&ua.core&&Lx()},om=function(e){return ln=e||im(),!Nl&&ln&&typeof document<"u"&&document.body&&(Jn=window,Rr=document,Pr=Rr.documentElement,so=Rr.body,tm=[Jn,Rr,Pr,so],Dx=ln.utils.clamp,nm=ln.core.context||function(){},fs="onpointerenter"in so?"pointer":"mouse",em=Vt.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=Vt.eventTypes=("ontouchstart"in Pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return rm=0},500),sm(),Nl=1),Nl};hn.op=Yt;st.cache=0;var Vt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Nl||om(ln)||console.warn("Please gsap.registerPlugin(Observer)"),ua||sm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,T=n.onDrag,b=n.onPress,x=n.onRelease,w=n.onRight,C=n.onLeft,E=n.onUp,P=n.onDown,M=n.onChangeX,y=n.onChangeY,I=n.onChange,D=n.onToggleX,z=n.onToggleY,V=n.onHover,X=n.onHoverEnd,H=n.onMove,Q=n.ignoreCheck,G=n.isNormalizer,ae=n.onGestureStart,U=n.onGestureEnd,me=n.onWheel,Be=n.onEnable,Ke=n.onDisable,He=n.onClick,Ge=n.scrollSpeed,j=n.capture,te=n.allowClicks,_e=n.lockAxis,Ie=n.onLockAxis;this.target=a=Cn(a)||Pr,this.vars=n,d&&(d=ln.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,Ge=Ge||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(so).lineHeight)||22);var Ee,We,ft,R,Ze,Fe,Le,N=this,et=0,Y=0,F=n.passive||!u&&n.passive!==!1,se=tr(a,hn),xe=tr(a,Yt),A=se(),v=xe(),O=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Mi[0]==="pointerdown",$=fa(a),K=a.ownerDocument||Rr,q=[0,0,0],fe=[0,0,0],ie=0,ve=function(){return ie=ha()},ne=function(Ne,Qe){return(N.event=Ne)&&d&&Ux(Ne.target,d)||Qe&&O&&Ne.pointerType!=="touch"||Q&&Q(Ne,Qe)},ue=function(){N._vx.reset(),N._vy.reset(),We.pause(),h&&h(N)},de=function(){var Ne=N.deltaX=jp(q),Qe=N.deltaY=jp(fe),Se=Math.abs(Ne)>=i,qe=Math.abs(Qe)>=i;I&&(Se||qe)&&I(N,Ne,Qe,q,fe),Se&&(w&&N.deltaX>0&&w(N),C&&N.deltaX<0&&C(N),M&&M(N),D&&N.deltaX<0!=et<0&&D(N),et=N.deltaX,q[0]=q[1]=q[2]=0),qe&&(P&&N.deltaY>0&&P(N),E&&N.deltaY<0&&E(N),y&&y(N),z&&N.deltaY<0!=Y<0&&z(N),Y=N.deltaY,fe[0]=fe[1]=fe[2]=0),(R||ft)&&(H&&H(N),ft&&(p&&ft===1&&p(N),T&&T(N),ft=0),R=!1),Fe&&!(Fe=!1)&&Ie&&Ie(N),Ze&&(me(N),Ze=!1),Ee=0},Ue=function(Ne,Qe,Se){q[Se]+=Ne,fe[Se]+=Qe,N._vx.update(Ne),N._vy.update(Qe),c?Ee||(Ee=requestAnimationFrame(de)):de()},Ae=function(Ne,Qe){_e&&!Le&&(N.axis=Le=Math.abs(Ne)>Math.abs(Qe)?"x":"y",Fe=!0),Le!=="y"&&(q[2]+=Ne,N._vx.update(Ne,!0)),Le!=="x"&&(fe[2]+=Qe,N._vy.update(Qe,!0)),c?Ee||(Ee=requestAnimationFrame(de)):de()},pe=function(Ne){if(!ne(Ne,1)){Ne=ca(Ne,u);var Qe=Ne.clientX,Se=Ne.clientY,qe=Qe-N.x,ze=Se-N.y,Je=N.isDragging;N.x=Qe,N.y=Se,(Je||(qe||ze)&&(Math.abs(N.startX-Qe)>=s||Math.abs(N.startY-Se)>=s))&&(ft=Je?2:1,Je||(N.isDragging=!0),Ae(qe,ze))}},Xe=N.onPress=function(Me){ne(Me,1)||Me&&Me.button||(N.axis=Le=null,We.pause(),N.isPressed=!0,Me=ca(Me),et=Y=0,N.startX=N.x=Me.clientX,N.startY=N.y=Me.clientY,N._vx.reset(),N._vy.reset(),An(G?a:K,Mi[1],pe,F,!0),N.deltaX=N.deltaY=0,b&&b(N))},L=N.onRelease=function(Me){if(!ne(Me,1)){En(G?a:K,Mi[1],pe,!0);var Ne=!isNaN(N.y-N.startY),Qe=N.isDragging,Se=Qe&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),qe=ca(Me);!Se&&Ne&&(N._vx.reset(),N._vy.reset(),u&&te&&ln.delayedCall(.08,function(){if(ha()-ie>300&&!Me.defaultPrevented){if(Me.target.click)Me.target.click();else if(K.createEvent){var ze=K.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,Jn,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),Me.target.dispatchEvent(ze)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,h&&Qe&&!G&&We.restart(!0),ft&&de(),m&&Qe&&m(N),x&&x(N,Se)}},le=function(Ne){return Ne.touches&&Ne.touches.length>1&&(N.isGesturing=!0)&&ae(Ne,N.isDragging)},ce=function(){return(N.isGesturing=!1)||U(N)},he=function(Ne){if(!ne(Ne)){var Qe=se(),Se=xe();Ue((Qe-A)*Ge,(Se-v)*Ge,1),A=Qe,v=Se,h&&We.restart(!0)}},re=function(Ne){if(!ne(Ne)){Ne=ca(Ne,u),me&&(Ze=!0);var Qe=(Ne.deltaMode===1?l:Ne.deltaMode===2?Jn.innerHeight:1)*_;Ue(Ne.deltaX*Qe,Ne.deltaY*Qe,0),h&&!G&&We.restart(!0)}},ee=function(Ne){if(!ne(Ne)){var Qe=Ne.clientX,Se=Ne.clientY,qe=Qe-N.x,ze=Se-N.y;N.x=Qe,N.y=Se,R=!0,h&&We.restart(!0),(qe||ze)&&Ae(qe,ze)}},Te=function(Ne){N.event=Ne,V(N)},De=function(Ne){N.event=Ne,X(N)},at=function(Ne){return ne(Ne)||ca(Ne,u)&&He(N)};We=N._dc=ln.delayedCall(f||.25,ue).pause(),N.deltaX=N.deltaY=0,N._vx=Ol(0,50,!0),N._vy=Ol(0,50,!0),N.scrollX=se,N.scrollY=xe,N.isDragging=N.isGesturing=N.isPressed=!1,nm(this),N.enable=function(Me){return N.isEnabled||(An($?K:a,"scroll",Yh),o.indexOf("scroll")>=0&&An($?K:a,"scroll",he,F,j),o.indexOf("wheel")>=0&&An(a,"wheel",re,F,j),(o.indexOf("touch")>=0&&em||o.indexOf("pointer")>=0)&&(An(a,Mi[0],Xe,F,j),An(K,Mi[2],L),An(K,Mi[3],L),te&&An(a,"click",ve,!0,!0),He&&An(a,"click",at),ae&&An(K,"gesturestart",le),U&&An(K,"gestureend",ce),V&&An(a,fs+"enter",Te),X&&An(a,fs+"leave",De),H&&An(a,fs+"move",ee)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=R=ft=!1,N._vx.reset(),N._vy.reset(),A=se(),v=xe(),Me&&Me.type&&Xe(Me),Be&&Be(N)),N},N.disable=function(){N.isEnabled&&(ro.filter(function(Me){return Me!==N&&fa(Me.target)}).length||En($?K:a,"scroll",Yh),N.isPressed&&(N._vx.reset(),N._vy.reset(),En(G?a:K,Mi[1],pe,!0)),En($?K:a,"scroll",he,j),En(a,"wheel",re,j),En(a,Mi[0],Xe,j),En(K,Mi[2],L),En(K,Mi[3],L),En(a,"click",ve,!0),En(a,"click",at),En(K,"gesturestart",le),En(K,"gestureend",ce),En(a,fs+"enter",Te),En(a,fs+"leave",De),En(a,fs+"move",ee),N.isEnabled=N.isPressed=N.isDragging=!1,Ke&&Ke(N))},N.kill=N.revert=function(){N.disable();var Me=ro.indexOf(N);Me>=0&&ro.splice(Me,1),er===N&&(er=0)},ro.push(N),G&&fa(a)&&(er=N),N.enable(g)},Ix(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Vt.version="3.13.0";Vt.create=function(r){return new Vt(r)};Vt.register=om;Vt.getAll=function(){return ro.slice()};Vt.getById=function(r){return ro.filter(function(e){return e.vars.id===r})[0]};im()&&ln.registerPlugin(Vt);var Pe,lo,lt,wt,Qn,_t,cf,jl,wa,va,pa,Bl,fn,ic,tf,Pn,am,lm,co,Tm,Zh,wm,Rn,nf,Em,Am,Ir,rf,uf,uo,hf,ec,sf,Jh,kl=1,dn=Date.now,$h=dn(),mi=0,ma=0,cm=function(e,t,n){var i=Kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},um=function(e,t){return t&&(!Kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Nx=function r(){return ma&&requestAnimationFrame(r)},hm=function(){return ic=1},fm=function(){return ic=0},Oi=function(e){return e},ga=function(e){return Math.round(e*1e5)/1e5||0},Cm=function(){return typeof window<"u"},Rm=function(){return Pe||Cm()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},xs=function(e){return!!~cf.indexOf(e)},Pm=function(e){return(e==="Height"?hf:lt["inner"+e])||Qn["client"+e]||_t["client"+e]},Im=function(e){return nr(e,"getBoundingClientRect")||(xs(e)?function(){return Ql.width=lt.innerWidth,Ql.height=hf,Ql}:function(){return ir(e)})},Fx=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=nr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Pm(s):e["client"+s])||0}},Ox=function(e,t){return!t||~Si.indexOf(e)?Im(e):function(){return Ql}},Bi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=nr(e,n))?o()-Im(e)()[s]:xs(e)?(Qn[n]||_t[n])-Pm(i):e[n]-e["offset"+i])},zl=function(e,t){for(var n=0;n<co.length;n+=3)(!t||~t.indexOf(co[n+1]))&&e(co[n],co[n+1],co[n+2])},Kn=function(e){return typeof e=="string"},pn=function(e){return typeof e=="function"},_a=function(e){return typeof e=="number"},ds=function(e){return typeof e=="object"},da=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Kh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},oo=Math.abs,Dm="left",Lm="top",ff="right",df="bottom",ms="width",gs="height",ya="Right",Ma="Left",Sa="Top",ba="Bottom",Zt="padding",di="margin",fo="Width",pf="Height",Qt="px",pi=function(e){return lt.getComputedStyle(e)},Bx=function(e){var t=pi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},dm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ir=function(e,t){var n=t&&pi(e)[tf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},tc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Um=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},kx=function(e){return function(t){return Pe.utils.snap(Um(e),t)}},mf=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},zx=function(e){return function(t,n){return mf(Um(e))(t,n.direction)}},Vl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Hl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},pm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Gl={toggleActions:"play",anticipatePin:0},nc={top:0,left:0,center:.5,bottom:1,right:1},Zl=function(e,t){if(Kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in nc?nc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Wl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=wt.createElement("div"),g=xs(n)||nr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?_t:n,T=e.indexOf("start")!==-1,b=T?c:u,x="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(x+=(i===Yt?ff:df)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=T,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Jl(_,0,i,T),_},Jl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+fo]=1,s["border"+a+fo]=0,s[n.p]=t+"px",Pe.set(e,s)},ot=[],of={},Ea,mm=function(){return dn()-mi>34&&(Ea||(Ea=requestAnimationFrame(rr)))},ao=function(){(!Rn||!Rn.isPressed||Rn.startX>_t.clientWidth)&&(st.cache++,Rn?Ea||(Ea=requestAnimationFrame(rr)):rr(),mi||ys("scrollStart"),mi=dn())},Qh=function(){Am=lt.innerWidth,Em=lt.innerHeight},xa=function(e){st.cache++,(e===!0||!fn&&!wm&&!wt.fullscreenElement&&!wt.webkitFullscreenElement&&(!nf||Am!==lt.innerWidth||Math.abs(lt.innerHeight-Em)>lt.innerHeight*.25))&&jl.restart(!0)},vs={},Vx=[],Nm=function r(){return tn($e,"scrollEnd",r)||ps(!0)},ys=function(e){return vs[e]&&vs[e].map(function(t){return t()})||Vx},$n=[],Fm=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},gf=function(e,t){var n;for(Pn=0;Pn<ot.length;Pn++)n=ot[Pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ec=!0,t&&Fm(t),t||ys("revert")},Om=function(e,t){st.cache++,(t||!In)&&st.forEach(function(n){return pn(n)&&n.cacheID++&&(n.rec=0)}),Kn(e)&&(lt.history.scrollRestoration=uf=e)},In,_s=0,gm,Hx=function(){if(gm!==_s){var e=gm=_s;requestAnimationFrame(function(){return e===_s&&ps(!0)})}},Bm=function(){_t.appendChild(uo),hf=!Rn&&uo.offsetHeight||lt.innerHeight,_t.removeChild(uo)},_m=function(e){return wa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ps=function(e,t){if(Qn=wt.documentElement,_t=wt.body,cf=[lt,wt,Qn,_t],mi&&!e&&!ec){nn($e,"scrollEnd",Nm);return}Bm(),In=$e.isRefreshing=!0,st.forEach(function(i){return pn(i)&&++i.cacheID&&(i.rec=i())});var n=ys("refreshInit");Tm&&$e.sort(),t||gf(),st.forEach(function(i){pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),ec=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),sf=1,_m(!0),ot.forEach(function(i){var s=Bi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),_m(!1),sf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Om(uf,1),jl.pause(),_s++,In=2,rr(2),ot.forEach(function(i){return pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=$e.isRefreshing=!1,ys("refresh")},af=0,$l=1,Ta,rr=function(e){if(e===2||!In&&!ec){$e.isUpdating=!0,Ta&&Ta.update(0);var t=ot.length,n=dn(),i=n-$h>=50,s=t&&ot[0].scroll();if($l=af>s?-1:1,In||(af=s),i&&(mi&&!ic&&n-mi>200&&(mi=0,ys("scrollEnd")),pa=$h,$h=n),$l<0){for(Pn=t;Pn-- >0;)ot[Pn]&&ot[Pn].update(0,i);$l=1}else for(Pn=0;Pn<t;Pn++)ot[Pn]&&ot[Pn].update(0,i);$e.isUpdating=!1}Ea=0},lf=[Dm,Lm,df,ff,di+ba,di+ya,di+Sa,di+Ma,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Kl=lf.concat([ms,gs,"boxSizing","max"+fo,"max"+pf,"position",di,Zt,Zt+Sa,Zt+ya,Zt+ba,Zt+Ma]),Gx=function(e,t,n){ho(n);var i=e._gsap;if(i.spacerIsNative)ho(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},jh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=lf.length,o=t.style,a=e.style,l;s--;)l=lf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[df]=a[ff]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ms]=tc(e,hn)+Qt,o[gs]=tc(e,Yt)+Qt,o[Zt]=a[di]=a[Lm]=a[Dm]="0",ho(i),a[ms]=a["max"+fo]=n[ms],a[gs]=a["max"+pf]=n[gs],a[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Wx=/([A-Z])/g,ho=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Wx,"-$1").toLowerCase())}},Xl=function(e){for(var t=Kl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Kl[s],n[Kl[s]]);return i.t=e,i},Xx=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ql={left:0,top:0},xm=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){pn(e)&&(e=e(l)),Kn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Zl("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,T;if(d&&d.seek(0),isNaN(e)||(e=+e),_a(e))d&&(e=Pe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Jl(a,n,i,!0);else{pn(t)&&(t=t(l));var b=(e||"0").split(" "),x,w,C,E;T=Cn(t,l)||_t,x=ir(T)||{},(!x||!x.left&&!x.top)&&pi(T).display==="none"&&(E=T.style.display,T.style.display="block",x=ir(T),E?T.style.display=E:T.style.removeProperty("display")),w=Zl(b[0],x[i.d]),C=Zl(b[1]||"0",n),e=x[i.p]-c[i.p]-u+w+s-C,a&&Jl(a,C,i,n-C<20||a._isStart&&C>20),n-=n-C}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+n,M=o._isStart;p="scroll"+i.d2,Jl(o,P,i,M&&P>20||!M&&(h?Math.max(_t[p],Qn[p]):o.parentNode[p])<=P+1),h&&(c=ir(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Qt))}return d&&T&&(p=ir(T),d.seek(f),m=ir(T),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},qx=/(webkit|moz|length|cssText|inset)/i,vm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=pi(e);for(o in a)!+o&&!qx.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},km=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ql=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},ym=function(e,t){var n=tr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=km(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){st.cache++,o.tween&&rr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Pe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(e,"wheel",n.wheelHandler),$e.isTouch&&nn(e,"touchmove",n.wheelHandler),s},$e=(function(){function r(t,n){lo||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),rf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ma){this.update=this.refresh=this.kill=Oi;return}n=dm(Kn(n)||_a(n)||n.nodeType?{trigger:n}:n,Gl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,T=s.onSnapComplete,b=s.once,x=s.snap,w=s.pinReparent,C=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,M=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?hn:Yt,I=!h&&h!==0,D=Cn(n.scroller||lt),z=Pe.core.getCache(D),V=xs(D),X=("pinType"in n?n.pinType:nr(D,"pinType")||V&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Q=I&&n.toggleActions.split(" "),G="markers"in n?n.markers:Gl.markers,ae=V?0:parseFloat(pi(D)["border"+y.p2+fo])||0,U=this,me=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Be=Fx(D,V,y),Ke=Ox(D,V),He=0,Ge=0,j=0,te=tr(D,y),_e,Ie,Ee,We,ft,R,Ze,Fe,Le,N,et,Y,F,se,xe,A,v,O,$,K,q,fe,ie,ve,ne,ue,de,Ue,Ae,pe,Xe,L,le,ce,he,re,ee,Te,De;if(U._startClamp=U._endClamp=!1,U._dir=y,p*=45,U.scroller=D,U.scroll=E?E.time.bind(E):te,We=te(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(Tm=1,n.refreshPriority===-9999&&(Ta=U)),z.tweenScroll=z.tweenScroll||{top:ym(D,Yt),left:ym(D,hn)},U.tweenTo=_e=z.tweenScroll[y.p],U.scrubDuration=function(Se){le=_a(Se)&&Se,le?L?L.duration(Se):L=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return m&&m(U)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(h),pe=0,l||(l=i.vars.id)),x&&((!ds(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in _t.style&&Pe.set(V?[_t,Qn]:D,{scrollBehavior:"auto"}),st.forEach(function(Se){return pn(Se)&&Se.target===(V?wt.scrollingElement||Qn:D)&&(Se.smooth=!1)}),Ee=pn(x.snapTo)?x.snapTo:x.snapTo==="labels"?kx(i):x.snapTo==="labelsDirectional"?zx(i):x.directional!==!1?function(Se,qe){return mf(x.snapTo)(Se,dn()-Ge<500?0:qe.direction)}:Pe.utils.snap(x.snapTo),ce=x.duration||{min:.1,max:2},ce=ds(ce)?va(ce.min,ce.max):va(ce,ce),he=Pe.delayedCall(x.delay||le/2||.1,function(){var Se=te(),qe=dn()-Ge<500,ze=_e.tween;if((qe||Math.abs(U.getVelocity())<10)&&!ze&&!ic&&He!==Se){var Je=(Se-R)/se,Ht=i&&!I?i.totalProgress():Je,it=qe?0:(Ht-Xe)/(dn()-pa)*1e3||0,Pt=Pe.utils.clamp(-Je,1-Je,oo(it/2)*it/.185),Gt=Je+(x.inertia===!1?0:Pt),Et,Mt,vt=x,Gn=vt.onStart,At=vt.onInterrupt,Sn=vt.onComplete;if(Et=Ee(Gt,U),_a(Et)||(Et=Gt),Mt=Math.max(0,Math.round(R+Et*se)),Se<=Ze&&Se>=R&&Mt!==Se){if(ze&&!ze._initted&&ze.data<=oo(Mt-Se))return;x.inertia===!1&&(Pt=Et-Je),_e(Mt,{duration:ce(oo(Math.max(oo(Gt-Ht),oo(Et-Ht))*.185/it/.05||0)),ease:x.ease||"power3",data:oo(Mt-Se),onInterrupt:function(){return he.restart(!0)&&At&&At(U)},onComplete:function(){U.update(),He=te(),i&&!I&&(L?L.resetTo("totalProgress",Et,i._tTime/i._tDur):i.progress(Et)),pe=Xe=i&&!I?i.totalProgress():U.progress,T&&T(U),Sn&&Sn(U)}},Se,Pt*se,Mt-Se-Pt*se),Gn&&Gn(U,_e.tween)}}else U.isActive&&He!==Se&&he.restart(!0)}).pause()),l&&(of[l]=U),f=U.trigger=Cn(f||d!==!0&&d),De=f&&f._gsap&&f._gsap.stRevert,De&&(De=De(U)),d=d===!0?f:Cn(d),Kn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===di||(_=!_&&d.parentNode&&d.parentNode.style&&pi(d.parentNode).display==="flex"?!1:Zt),U.pin=d,Ie=Pe.core.getCache(d),Ie.spacer?xe=Ie.pinState:(C&&(C=Cn(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),Ie.spacerIsNative=!!C,C&&(Ie.spacerState=Xl(C))),Ie.spacer=O=C||wt.createElement("div"),O.classList.add("pin-spacer"),l&&O.classList.add("pin-spacer-"+l),Ie.pinState=xe=Xl(d)),n.force3D!==!1&&Pe.set(d,{force3D:!0}),U.spacer=O=Ie.spacer,Ae=pi(d),ve=Ae[_+y.os2],K=Pe.getProperty(d),q=Pe.quickSetter(d,y.a,Qt),jh(d,O,Ae),v=Xl(d)),G){Y=ds(G)?dm(G,pm):pm,N=Wl("scroller-start",l,D,y,Y,0),et=Wl("scroller-end",l,D,y,Y,0,N),$=N["offset"+y.op.d2];var at=Cn(nr(D,"content")||D);Fe=this.markerStart=Wl("start",l,at,y,Y,$,0,E),Le=this.markerEnd=Wl("end",l,at,y,Y,$,0,E),E&&(Te=Pe.quickSetter([Fe,Le],y.a,Qt)),!X&&!(Si.length&&nr(D,"fixedMarkers")===!0)&&(Bx(V?_t:D),Pe.set([N,et],{force3D:!0}),ue=Pe.quickSetter(N,y.a,Qt),Ue=Pe.quickSetter(et,y.a,Qt))}if(E){var Me=E.vars.onUpdate,Ne=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){U.update(0,0,1),Me&&Me.apply(E,Ne||[])})}if(U.previous=function(){return ot[ot.indexOf(U)-1]},U.next=function(){return ot[ot.indexOf(U)+1]},U.revert=function(Se,qe){if(!qe)return U.kill(!0);var ze=Se!==!1||!U.enabled,Je=fn;ze!==U.isReverted&&(ze&&(re=Math.max(te(),U.scroll.rec||0),j=U.progress,ee=i&&i.progress()),Fe&&[Fe,Le,N,et].forEach(function(Ht){return Ht.style.display=ze?"none":"block"}),ze&&(fn=U,U.update(ze)),d&&(!w||!U.isActive)&&(ze?Gx(d,O,xe):jh(d,O,pi(d),ne)),ze||U.update(ze),fn=Je,U.isReverted=ze)},U.refresh=function(Se,qe,ze,Je){if(!((fn||!U.enabled)&&!qe)){if(d&&Se&&mi){nn(r,"scrollEnd",Nm);return}!In&&me&&me(U),fn=U,_e.tween&&!ze&&(_e.tween.kill(),_e.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)})),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var Ht=Be(),it=Ke(),Pt=E?E.duration():Bi(D,y),Gt=se<=.01||!se,Et=0,Mt=Je||0,vt=ds(ze)?ze.end:n.end,Gn=n.endTrigger||f,At=ds(ze)?ze.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Sn=U.pinnedContainer=n.pinnedContainer&&Cn(n.pinnedContainer,U),oi=f&&Math.max(0,ot.indexOf(U))||0,$t=oi,S,B,Z,J,k,oe,ge,Re,we,Ve,ke,Oe,tt;for(G&&ds(ze)&&(Oe=Pe.getProperty(N,y.p),tt=Pe.getProperty(et,y.p));$t-- >0;)oe=ot[$t],oe.end||oe.refresh(0,1)||(fn=U),ge=oe.pin,ge&&(ge===f||ge===d||ge===Sn)&&!oe.isReverted&&(Ve||(Ve=[]),Ve.unshift(oe),oe.revert(!0,!0)),oe!==ot[$t]&&(oi--,$t--);for(pn(At)&&(At=At(U)),At=cm(At,"start",U),R=xm(At,f,Ht,y,te(),Fe,N,U,it,ae,X,Pt,E,U._startClamp&&"_startClamp")||(d?-.001:0),pn(vt)&&(vt=vt(U)),Kn(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Kn(At)?At.split(" ")[0]:"")+vt:(Et=Zl(vt.substr(2),Ht),vt=Kn(At)?At:(E?Pe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,R):R)+Et,Gn=f)),vt=cm(vt,"end",U),Ze=Math.max(R,xm(vt||(Gn?"100% 0":Pt),Gn,Ht,y,te()+Et,Le,et,U,it,ae,X,Pt,E,U._endClamp&&"_endClamp"))||-.001,Et=0,$t=oi;$t--;)oe=ot[$t],ge=oe.pin,ge&&oe.start-oe._pinPush<=R&&!E&&oe.end>0&&(S=oe.end-(U._startClamp?Math.max(0,oe.start):oe.start),(ge===f&&oe.start-oe._pinPush<R||ge===Sn)&&isNaN(At)&&(Et+=S*(1-oe.progress)),ge===d&&(Mt+=S));if(R+=Et,Ze+=Et,U._startClamp&&(U._startClamp+=Et),U._endClamp&&!In&&(U._endClamp=Ze||-.001,Ze=Math.min(Ze,Bi(D,y))),se=Ze-R||(R-=.01)&&.001,Gt&&(j=Pe.utils.clamp(0,1,Pe.utils.normalize(R,Ze,re))),U._pinPush=Mt,Fe&&Et&&(S={},S[y.a]="+="+Et,Sn&&(S[y.p]="-="+te()),Pe.set([Fe,Le],S)),d&&!(sf&&U.end>=Bi(D,y)))S=pi(d),J=y===Yt,Z=te(),fe=parseFloat(K(y.a))+Mt,!Pt&&Ze>1&&(ke=(V?wt.scrollingElement||Qn:D).style,ke={style:ke,value:ke["overflow"+y.a.toUpperCase()]},V&&pi(_t)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ke.style["overflow"+y.a.toUpperCase()]="scroll")),jh(d,O,S),v=Xl(d),B=ir(d,!0),Re=X&&tr(D,J?hn:Yt)(),_?(ne=[_+y.os2,se+Mt+Qt],ne.t=O,$t=_===Zt?tc(d,y)+se+Mt:0,$t&&(ne.push(y.d,$t+Qt),O.style.flexBasis!=="auto"&&(O.style.flexBasis=$t+Qt)),ho(ne),Sn&&ot.forEach(function(ct){ct.pin===Sn&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),X&&te(re)):($t=tc(d,y),$t&&O.style.flexBasis!=="auto"&&(O.style.flexBasis=$t+Qt)),X&&(k={top:B.top+(J?Z-R:Re)+Qt,left:B.left+(J?Re:Z-R)+Qt,boxSizing:"border-box",position:"fixed"},k[ms]=k["max"+fo]=Math.ceil(B.width)+Qt,k[gs]=k["max"+pf]=Math.ceil(B.height)+Qt,k[di]=k[di+Sa]=k[di+ya]=k[di+ba]=k[di+Ma]="0",k[Zt]=S[Zt],k[Zt+Sa]=S[Zt+Sa],k[Zt+ya]=S[Zt+ya],k[Zt+ba]=S[Zt+ba],k[Zt+Ma]=S[Zt+Ma],A=Xx(xe,k,w),In&&te(0)),i?(we=i._initted,Zh(1),i.render(i.duration(),!0,!0),ie=K(y.a)-fe+se+Mt,de=Math.abs(se-ie)>1,X&&de&&A.splice(A.length-2,2),i.render(0,!0,!0),we||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Zh(0)):ie=se,ke&&(ke.value?ke.style["overflow"+y.a.toUpperCase()]=ke.value:ke.style.removeProperty("overflow-"+y.a));else if(f&&te()&&!E)for(B=f.parentNode;B&&B!==_t;)B._pinOffset&&(R-=B._pinOffset,Ze-=B._pinOffset),B=B.parentNode;Ve&&Ve.forEach(function(ct){return ct.revert(!1,!0)}),U.start=R,U.end=Ze,We=ft=In?re:te(),!E&&!In&&(We<re&&te(re),U.scroll.rec=0),U.revert(!1,!0),Ge=dn(),he&&(He=-1,he.restart(!0)),fn=0,i&&I&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(Gt||j!==U.progress||E||g||i&&!i._initted)&&(i&&!I&&(i._initted||j||i.vars.immediateRender!==!1)&&i.totalProgress(E&&R<-.001&&!j?Pe.utils.normalize(R,Ze,0):j,!0),U.progress=Gt||(We-R)/se===j?0:j),d&&_&&(O._pinOffset=Math.round(U.progress*ie)),L&&L.invalidate(),isNaN(Oe)||(Oe-=Pe.getProperty(N,y.p),tt-=Pe.getProperty(et,y.p),ql(N,y,Oe),ql(Fe,y,Oe-(Je||0)),ql(et,y,tt),ql(Le,y,tt-(Je||0))),Gt&&!In&&U.update(),u&&!In&&!F&&(F=!0,u(U),F=!1)}},U.getVelocity=function(){return(te()-ft)/(dn()-pa)*1e3||0},U.endAnimation=function(){da(U.callbackAnimation),i&&(L?L.progress(1):i.paused()?I||da(i,U.direction<0,1):da(i,i.reversed()))},U.labelToScroll=function(Se){return i&&i.labels&&(R||U.refresh()||R)+i.labels[Se]/i.duration()*se||0},U.getTrailing=function(Se){var qe=ot.indexOf(U),ze=U.direction>0?ot.slice(0,qe).reverse():ot.slice(qe+1);return(Kn(Se)?ze.filter(function(Je){return Je.vars.preventOverlaps===Se}):ze).filter(function(Je){return U.direction>0?Je.end<=R:Je.start>=Ze})},U.update=function(Se,qe,ze){if(!(E&&!ze&&!Se)){var Je=In===!0?re:U.scroll(),Ht=Se?0:(Je-R)/se,it=Ht<0?0:Ht>1?1:Ht||0,Pt=U.progress,Gt,Et,Mt,vt,Gn,At,Sn,oi;if(qe&&(ft=We,We=E?te():Je,x&&(Xe=pe,pe=i&&!I?i.totalProgress():it)),p&&d&&!fn&&!kl&&mi&&(!it&&R<Je+(Je-ft)/(dn()-pa)*p?it=1e-4:it===1&&Ze>Je+(Je-ft)/(dn()-pa)*p&&(it=.9999)),it!==Pt&&U.enabled){if(Gt=U.isActive=!!it&&it<1,Et=!!Pt&&Pt<1,At=Gt!==Et,Gn=At||!!it!=!!Pt,U.direction=it>Pt?1:-1,U.progress=it,Gn&&!fn&&(Mt=it&&!Pt?0:it===1?1:Pt===1?2:3,I&&(vt=!At&&Q[Mt+1]!=="none"&&Q[Mt+1]||Q[Mt],oi=i&&(vt==="complete"||vt==="reset"||vt in i))),M&&(At||oi)&&(oi||h||!i)&&(pn(M)?M(U):U.getTrailing(M).forEach(function(Z){return Z.endAnimation()})),I||(L&&!fn&&!kl?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",it,i._tTime/i._tDur):(L.vars.totalProgress=it,L.invalidate().restart())):i&&i.totalProgress(it,!!(fn&&(Ge||Se)))),d){if(Se&&_&&(O.style[_+y.os2]=ve),!X)q(ga(fe+ie*it));else if(Gn){if(Sn=!Se&&it>Pt&&Ze+1>Je&&Je+1>=Bi(D,y),w)if(!Se&&(Gt||Sn)){var $t=ir(d,!0),S=Je-R;vm(d,_t,$t.top+(y===Yt?S:0)+Qt,$t.left+(y===Yt?0:S)+Qt)}else vm(d,O);ho(Gt||Sn?A:v),de&&it<1&&Gt||q(fe+(it===1&&!Sn?ie:0))}}x&&!_e.tween&&!fn&&!kl&&he.restart(!0),a&&(At||b&&it&&(it<1||!Jh))&&wa(a.targets).forEach(function(Z){return Z.classList[Gt||b?"add":"remove"](a.className)}),o&&!I&&!Se&&o(U),Gn&&!fn?(I&&(oi&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(U)),(At||!Jh)&&(c&&At&&Kh(U,c),H[Mt]&&Kh(U,H[Mt]),b&&(it===1?U.kill(!1,1):H[Mt]=0),At||(Mt=it===1?1:3,H[Mt]&&Kh(U,H[Mt]))),P&&!Gt&&Math.abs(U.getVelocity())>(_a(P)?P:2500)&&(da(U.callbackAnimation),L?L.progress(1):da(i,vt==="reverse"?1:!it,1))):I&&o&&!fn&&o(U)}if(Ue){var B=E?Je/E.duration()*(E._caScrollDist||0):Je;ue(B+(N._isFlipped?1:0)),Ue(B)}Te&&Te(-Je/E.duration()*(E._caScrollDist||0))}},U.enable=function(Se,qe){U.enabled||(U.enabled=!0,nn(D,"resize",xa),V||nn(D,"scroll",ao),me&&nn(r,"refreshInit",me),Se!==!1&&(U.progress=j=0,We=ft=He=te()),qe!==!1&&U.refresh())},U.getTween=function(Se){return Se&&_e?_e.tween:L},U.setPositions=function(Se,qe,ze,Je){if(E){var Ht=E.scrollTrigger,it=E.duration(),Pt=Ht.end-Ht.start;Se=Ht.start+Pt*Se/it,qe=Ht.start+Pt*qe/it}U.refresh(!1,!1,{start:um(Se,ze&&!!U._startClamp),end:um(qe,ze&&!!U._endClamp)},Je),U.update()},U.adjustPinSpacing=function(Se){if(ne&&Se){var qe=ne.indexOf(y.d)+1;ne[qe]=parseFloat(ne[qe])+Se+Qt,ne[1]=parseFloat(ne[1])+Se+Qt,ho(ne)}},U.disable=function(Se,qe){if(U.enabled&&(Se!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,qe||L&&L.pause(),re=0,Ie&&(Ie.uncache=1),me&&tn(r,"refreshInit",me),he&&(he.pause(),_e.tween&&_e.tween.kill()&&(_e.tween=0)),!V)){for(var ze=ot.length;ze--;)if(ot[ze].scroller===D&&ot[ze]!==U)return;tn(D,"resize",xa),V||tn(D,"scroll",ao)}},U.kill=function(Se,qe){U.disable(Se,qe),L&&!qe&&L.kill(),l&&delete of[l];var ze=ot.indexOf(U);ze>=0&&ot.splice(ze,1),ze===Pn&&$l>0&&Pn--,ze=0,ot.forEach(function(Je){return Je.scroller===U.scroller&&(ze=1)}),ze||In||(U.scroll.rec=0),i&&(i.scrollTrigger=null,Se&&i.revert({kill:!1}),qe||i.kill()),Fe&&[Fe,Le,N,et].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),Ta===U&&(Ta=0),d&&(Ie&&(Ie.uncache=1),ze=0,ot.forEach(function(Je){return Je.pin===d&&ze++}),ze||(Ie.spacer=0)),n.onKill&&n.onKill(U)},ot.push(U),U.enable(!1,!1),De&&De(U),i&&i.add&&!se){var Qe=U.update;U.update=function(){U.update=Qe,st.cache++,R||Ze||U.refresh()},Pe.delayedCall(.01,U.update),se=.01,R=Ze=0}else U.refresh();d&&Hx()},r.register=function(n){return lo||(Pe=n||Rm(),Cm()&&window.document&&r.enable(),lo=ma),lo},r.defaults=function(n){if(n)for(var i in n)Gl[i]=n[i];return Gl},r.disable=function(n,i){ma=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(lt,"wheel",ao),tn(wt,"scroll",ao),clearInterval(Bl),tn(wt,"touchcancel",Oi),tn(_t,"touchstart",Oi),Vl(tn,wt,"pointerdown,touchstart,mousedown",hm),Vl(tn,wt,"pointerup,touchend,mouseup",fm),jl.kill(),zl(tn);for(var s=0;s<st.length;s+=3)Hl(tn,st[s],st[s+1]),Hl(tn,st[s],st[s+2])},r.enable=function(){if(lt=window,wt=document,Qn=wt.documentElement,_t=wt.body,Pe&&(wa=Pe.utils.toArray,va=Pe.utils.clamp,rf=Pe.core.context||Oi,Zh=Pe.core.suppressOverwrites||Oi,uf=lt.history.scrollRestoration||"auto",af=lt.pageYOffset||0,Pe.core.globals("ScrollTrigger",r),_t)){ma=1,uo=document.createElement("div"),uo.style.height="100vh",uo.style.position="absolute",Bm(),Nx(),Vt.register(Pe),r.isTouch=Vt.isTouch,Ir=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nf=Vt.isTouch===1,nn(lt,"wheel",ao),cf=[lt,wt,Qn,_t],Pe.matchMedia?(r.matchMedia=function(c){var u=Pe.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Pe.addEventListener("matchMediaInit",function(){return gf()}),Pe.addEventListener("matchMediaRevert",function(){return Fm()}),Pe.addEventListener("matchMedia",function(){ps(0,1),ys("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return Qh(),Qh})):console.warn("Requires GSAP 3.11.0 or later"),Qh(),nn(wt,"scroll",ao);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,o=Pe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ir(_t),Yt.m=Math.round(a.top+Yt.sc())||0,hn.m=Math.round(a.left+hn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),Bl=setInterval(mm,250),Pe.delayedCall(.5,function(){return kl=0}),nn(wt,"touchcancel",Oi),nn(_t,"touchstart",Oi),Vl(nn,wt,"pointerdown,touchstart,mousedown",hm),Vl(nn,wt,"pointerup,touchend,mouseup",fm),tf=Pe.utils.checkPrefix("transform"),Kl.push(tf),lo=dn(),jl=Pe.delayedCall(.2,ps).pause(),co=[wt,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;wt.hidden?(am=c,lm=u):(am!==c||lm!==u)&&xa()},wt,"DOMContentLoaded",ps,lt,"load",ps,lt,"resize",xa],zl(nn),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)Hl(tn,st[l],st[l+1]),Hl(tn,st[l],st[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Jh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Bl)||(Bl=i)&&setInterval(mm,i),"ignoreMobileResize"in n&&(nf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(zl(tn)||zl(nn,n.autoRefreshEvents||"none"),wm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Cn(n),o=st.indexOf(s),a=xs(s);~o&&st.splice(o,a?6:2),i&&(a?Si.unshift(lt,i,_t,i,Qn,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Kn(n)?Cn(n):n).getBoundingClientRect(),a=o[s?ms:gs]*i||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},r.positionInViewport=function(n,i,s){Kn(n)&&(n=Cn(n));var o=n.getBoundingClientRect(),a=o[s?ms:gs],l=i==null?a/2:i in nc?nc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=vs.killAll||[];vs={},i.forEach(function(s){return s()})}},r})();$e.version="3.13.0";$e.saveStyles=function(r){return r?wa(r).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),rf())}}):$n};$e.revert=function(r,e){return gf(!r,e)};$e.create=function(r,e){return new $e(r,e)};$e.refresh=function(r){return r?xa(!0):(lo||$e.register())&&ps(!0)};$e.update=function(r){return++st.cache&&rr(r===!0?2:0)};$e.clearScrollMemory=Om;$e.maxScroll=function(r,e){return Bi(r,e?hn:Yt)};$e.getScrollFunc=function(r,e){return tr(Cn(r),e?hn:Yt)};$e.getById=function(r){return of[r]};$e.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!mi};$e.snapDirectional=mf;$e.addEventListener=function(r,e){var t=vs[r]||(vs[r]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(r,e){var t=vs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Pe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return pn(s)&&(s=s(),nn($e,"refresh",function(){return s=e.batchMax()})),wa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push($e.create(c))}),t};var Mm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ef=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===Qn&&r(_t,t)},Yl={auto:1,scroll:1},Yx=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Pe.core.getCache(s),a=dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Yl[(l=pi(s)).overflowY]||Yl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!xs(s)&&(Yl[(l=pi(s)).overflowY]||Yl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},zm=function(e,t,n,i){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Yx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(wt,Vt.eventTypes[0],bm,!1,!0)},onDisable:function(){return tn(wt,Vt.eventTypes[0],bm,!0)}})},Zx=/(input|label|select|textarea)/i,Sm,bm=function(e){var t=Zx.test(e.target.tagName);(t||Sm)&&(e._gsapAllow=!0,Sm=t)},Jx=function(e){ds(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Cn(e.target)||Qn,u=Pe.core.globals().ScrollSmoother,h=u&&u.get(),f=Ir&&(e.content&&Cn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=tr(c,Yt),_=tr(c,hn),g=1,p=(Vt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,m=0,T=pn(i)?function(){return i(a)}:function(){return i||2.8},b,x,w=zm(c,e.type,!0,s),C=function(){return x=!1},E=Oi,P=Oi,M=function(){l=Bi(c,Yt),P=va(Ir?1:0,l),n&&(E=va(0,Bi(c,hn))),b=_s},y=function(){f._gsap.y=ga(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(x){requestAnimationFrame(C);var G=ga(a.deltaY/2),ae=P(d.v-G);if(f&&ae!==d.v+d.offset){d.offset=ae-d.v;var U=ga((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",f._gsap.y=U+"px",d.cacheID=st.cache,rr()}return!0}d.offset&&y(),x=!0},D,z,V,X,H=function(){M(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(Q){return Ir&&Q.type==="touchmove"&&I(Q)||g>1.05&&Q.type!=="touchstart"||a.isGesturing||Q.touches&&Q.touches.length>1},e.onPress=function(){x=!1;var Q=g;g=ga((lt.visualViewport&&lt.visualViewport.scale||1)/p),D.pause(),Q!==g&&ef(c,g>1.01?!0:n?!1:"x"),z=_(),V=d(),M(),b=_s},e.onRelease=e.onGestureStart=function(Q,G){if(d.offset&&y(),!G)X.restart(!0);else{st.cache++;var ae=T(),U,me;n&&(U=_(),me=U+ae*.05*-Q.velocityX/.227,ae*=Mm(_,U,me,Bi(c,hn)),D.vars.scrollX=E(me)),U=d(),me=U+ae*.05*-Q.velocityY/.227,ae*=Mm(d,U,me,Bi(c,Yt)),D.vars.scrollY=P(me),D.invalidate().duration(ae).play(.01),(Ir&&D.vars.scrollY>=l||U>=l-1)&&Pe.to({},{onUpdate:H,duration:ae})}o&&o(Q)},e.onWheel=function(){D._ts&&D.pause(),dn()-m>1e3&&(b=0,m=dn())},e.onChange=function(Q,G,ae,U,me){if(_s!==b&&M(),G&&n&&_(E(U[2]===G?z+(Q.startX-Q.x):_()+G-U[1])),ae){d.offset&&y();var Be=me[2]===ae,Ke=Be?V+Q.startY-Q.y:d()+ae-me[1],He=P(Ke);Be&&Ke!==He&&(V+=He-Ke),d(He)}(ae||G)&&rr()},e.onEnable=function(){ef(c,n?!1:"x"),$e.addEventListener("refresh",H),nn(lt,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){ef(c,!0),tn(lt,"resize",H),$e.removeEventListener("refresh",H),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Vt(e),a.iOS=Ir,Ir&&!d()&&d(1),Ir&&Pe.ticker.add(Oi),X=a._dc,D=Pe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:km(d,d(),function(){return D.pause()})},onUpdate:rr,onComplete:X.vars.onComplete}),a};$e.sort=function(r){if(pn(r))return ot.sort(r);var e=lt.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),ot.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$e.observe=function(r){return new Vt(r)};$e.normalizeScroll=function(r){if(typeof r>"u")return Rn;if(r===!0&&Rn)return Rn.enable();if(r===!1){Rn&&Rn.kill(),Rn=r;return}var e=r instanceof Vt?r:Jx(r);return Rn&&Rn.target===e.target&&Rn.kill(),xs(e.target)&&(Rn=e),e};$e.core={_getVelocityProp:Ol,_inputObserver:zm,_scrollers:st,_proxies:Si,bridge:{ss:function(){mi||ys("scrollStart"),mi=dn()},ref:function(){return fn}}};Rm()&&Pe.registerPlugin($e);var mn,Gm,sr,ki,Dr,Wm,po,rc,Xm=function(){return typeof window<"u"},qm=function(){return mn||Xm()&&(mn=window.gsap)&&mn.registerPlugin&&mn},Ym=function(e){return typeof e=="string"},Vm=function(e){return typeof e=="function"},Aa=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===sr||e===ki||e===Dr?Math.max(ki[i],Dr[i])-(sr["inner"+n]||ki[s]||Dr[s]):e[i]-e["offset"+n]},Ca=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===sr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=ki[n]!=null?ki:Dr),function(){return e[n]}},$x=function(e,t,n,i){if(Vm(e)&&(e=e(t,n,i)),typeof e!="object")return Ym(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Vm(e[o])?e[o](t,n,i):e[o];return s},Zm=function(e,t){if(e=Wm(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===sr||t===Dr,s=i?{top:ki.clientTop-(sr.pageYOffset||ki.scrollTop||Dr.scrollTop||0),left:ki.clientLeft-(sr.pageXOffset||ki.scrollLeft||Dr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=Ca(t,"x")(),o.y+=Ca(t,"y")()),o},Hm=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:Ym(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?Aa(t,n)-s:Math.min(Aa(t,n),Zm(e,t)[n]-s)},_f=function(){mn=qm(),Xm()&&mn&&typeof document<"u"&&document.body&&(sr=window,Dr=document.body,ki=document.documentElement,Wm=mn.utils.toArray,mn.config({autoKillThreshold:7}),po=mn.config(),Gm=1)},Ms={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(e){mn=e,_f()},init:function(e,t,n,i,s){Gm||_f();var o=this,a=mn.getProperty(e,"scrollSnapType");o.isWin=e===sr,o.target=e,o.tween=n,t=$x(t,i,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:po).autoKill,o.getX=Ca(e,"x"),o.getY=Ca(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),rc||(rc=mn.core.globals().ScrollTrigger),mn.getProperty(e,"scrollBehavior")==="smooth"&&mn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Hm(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Hm(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,h=t.snapInline,f,d,_,g,p;n;)n.r(e,n.d),n=n._next;f=c||!t.skipX?t.getX():a,d=c||!t.skipY?t.getY():l,_=d-l,g=f-a,p=po.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(g>p||g<-p)&&f<Aa(i,"x")&&(t.skipX=1),!t.skipY&&(_>p||_<-p)&&d<Aa(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?sr.scrollTo(t.skipX?f:t.x,t.skipY?d:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&(d=i.scrollTop,f=i.scrollLeft,h?i.style.scrollSnapType=h:i.style.removeProperty("scroll-snap-type"),i.scrollTop=d+1,i.scrollLeft=f+1,i.scrollTop=d,i.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,rc&&rc.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Ms.max=Aa;Ms.getOffset=Zm;Ms.buildGetter=Ca;Ms.config=function(r){po||_f()||(po=mn.config());for(var e in r)po[e]=r[e]};qm()&&mn.registerPlugin(Ms);function Jm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Kx(r,e,t){return e&&Jm(r.prototype,e),t&&Jm(r,t),r}var xt,sc,gn,or,mo,zi,Qx,Ss,$m,nt,Vi,oc,Km,Qm,jm,eg,tg=function(){return typeof window<"u"},ng=function(){return xt||tg()&&(xt=window.gsap)&&xt.registerPlugin&&xt};var jx=function(e){return Math.round(e*1e5)/1e5||0},Lr=function(e){return nt.maxScroll(e||gn)},ev=function(e,t){var n=e.parentNode||mo,i=e.getBoundingClientRect(),s=n.getBoundingClientRect(),o=s.top-i.top,a=s.bottom-i.bottom,l=(Math.abs(o)>Math.abs(a)?o:a)/(1-t),c=-l*t,u,h;return l>0&&(u=s.height/(gn.innerHeight+s.height),h=u===.5?s.height*2:Math.min(s.height,Math.abs(-l*u/(2*u-1)))*2*(t||1),c+=t?-h*t:-h/2,l+=h),{change:l,offset:c}},tv=function(e){var t=or.querySelector(".ScrollSmoother-wrapper");return t||(t=or.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},Ur=(function(){function r(e){var t=this;sc||r.register(xt)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},Vi&&Vi.kill(),Vi=this,jm(this);var n=e,i=n.smoothTouch,s=n.onUpdate,o=n.onStop,a=n.smooth,l=n.onFocusIn,c=n.normalizeScroll,u=n.wholePixels,h,f,d,_,g,p,m,T,b,x,w,C,E,P,M=this,y=e.effectsPrefix||"",I=nt.getScrollFunc(gn),D=nt.isTouch===1?i===!0?.8:parseFloat(i)||0:a===0||a===!1?0:parseFloat(a)||.8,z=D&&+e.speed||1,V=0,X=0,H=1,Q=Km(0),G=function(){return Q.update(-V)},ae={y:0},U=function(){return h.style.overflow="visible"},me,Be=function(F){F.update();var se=F.getTween();se&&(se.pause(),se._time=se._dur,se._tTime=se._tDur),me=!1,F.animation.progress(F.progress,!0)},Ke=function(F,se){(F!==V&&!x||se)&&(u&&(F=Math.round(F)),D&&(h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",h._gsap.y=F+"px"),X=F-V,V=F,nt.isUpdating||r.isRefreshing||nt.update())},He=function(F){return arguments.length?(F<0&&(F=0),ae.y=-F,me=!0,x?V=-F:Ke(-F),nt.isRefreshing?_.update():I(F/z),this):-V},Ge=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!nt.isRefreshing){var Y=Lr(f)*z;Y<-V&&He(Y),eg.restart(!0)}}),j,te=function(F){f.scrollTop=0,!(F.target.contains&&F.target.contains(f)||l&&l(t,F)===!1)&&(nt.isInViewport(F.target)||F.target===j||t.scrollTo(F.target,!1,"center center"),j=F.target)},_e=function(F,se){if(F<se.start)return F;var xe=isNaN(se.ratio)?1:se.ratio,A=se.end-se.start,v=F-se.start,O=se.offset||0,$=se.pins||[],K=$.offset||0,q=se._startClamp&&se.start<=0||se.pins&&se.pins.offset?0:se._endClamp&&se.end===Lr()?1:.5;return $.forEach(function(fe){A-=fe.distance,fe.nativeStart<=F&&(v-=fe.distance)}),K&&(v*=(A-K/xe)/A),F+(v-O*q)/xe-v},Ie=function Y(F,se,xe){xe||(F.pins.length=F.pins.offset=0);var A=F.pins,v=F.markers,O,$,K,q,fe,ie,ve,ne;for(ve=0;ve<se.length;ve++)if(ne=se[ve],F.trigger&&ne.trigger&&F!==ne&&(ne.trigger===F.trigger||ne.pinnedContainer===F.trigger||F.trigger.contains(ne.trigger))&&(fe=ne._startNative||ne._startClamp||ne.start,ie=ne._endNative||ne._endClamp||ne.end,K=_e(fe,F),q=ne.pin&&ie>0?K+(ie-fe):_e(ie,F),ne.setPositions(K,q,!0,(ne._startClamp?Math.max(0,K):K)-fe),ne.markerStart&&v.push(xt.quickSetter([ne.markerStart,ne.markerEnd],"y","px")),ne.pin&&ne.end>0&&!xe)){if(O=ne.end-ne.start,$=F._startClamp&&ne.start<0,$){if(F.start>0){F.setPositions(0,F.end+(F._startNative-F.start),!0),Y(F,se);return}O+=ne.start,A.offset=-ne.start}A.push({start:ne.start,nativeStart:fe,end:ne.end,distance:O,trig:ne}),F.setPositions(F.start,F.end+($?-ne.start:O),!0)}},Ee=function(F,se){g.forEach(function(xe){return Ie(xe,F,se)})},We=function(){mo=or.documentElement,zi=or.body,U(),requestAnimationFrame(U),g&&(nt.getAll().forEach(function(F){F._startNative=F.start,F._endNative=F.end}),g.forEach(function(F){var se=F._startClamp||F.start,xe=F.autoSpeed?Math.min(Lr(),F.end):se+Math.abs((F.end-se)/F.ratio),A=xe-F.end;if(se-=A/2,xe-=A/2,se>xe){var v=se;se=xe,xe=v}F._startClamp&&se<0?(xe=F.ratio<0?Lr():F.end/F.ratio,A=xe-F.end,se=0):(F.ratio<0||F._endClamp&&xe>=Lr())&&(xe=Lr(),se=F.ratio<0||F.ratio>1?0:xe-(xe-F.start)/F.ratio,A=(xe-se)*F.ratio-(F.end-F.start)),F.offset=A||1e-4,F.pins.length=F.pins.offset=0,F.setPositions(se,xe,!0)}),Ee(nt.sort())),Q.reset()},ft=function(){return nt.addEventListener("refresh",We)},R=function(){return g&&g.forEach(function(F){return F.vars.onRefresh(F)})},Ze=function(){return g&&g.forEach(function(F){return F.vars.onRefreshInit(F)}),R},Fe=function(F,se,xe,A){return function(){var v=typeof se=="function"?se(xe,A):se;v||v===0||(v=A.getAttribute("data-"+y+F)||(F==="speed"?1:0)),A.setAttribute("data-"+y+F,v);var O=(v+"").substr(0,6)==="clamp(";return{clamp:O,value:O?v.substr(6,v.length-7):v}}},Le=function(F,se,xe,A,v){v=(typeof v=="function"?v(A,F):v)||0;var O=Fe("speed",se,A,F),$=Fe("lag",xe,A,F),K=xt.getProperty(F,"y"),q=F._gsap,fe,ie,ve,ne,ue,de,Ue=[],Ae=function(){se=O(),xe=parseFloat($().value),fe=parseFloat(se.value)||1,ve=se.value==="auto",ue=ve||ie&&ie._startClamp&&ie.start<=0||Ue.offset?0:ie&&ie._endClamp&&ie.end===Lr()?1:.5,ne&&ne.kill(),ne=xe&&xt.to(F,{ease:oc,overwrite:!1,y:"+=0",duration:xe}),ie&&(ie.ratio=fe,ie.autoSpeed=ve)},pe=function(){q.y=K+"px",q.renderTransform(1),Ae()},Xe=[],L=0,le=function(he){if(ve){pe();var re=ev(F,$m(0,1,-he.start/(he.end-he.start)));L=re.change,de=re.offset}else de=Ue.offset||0,L=(he.end-he.start-de)*(1-fe);Ue.forEach(function(ee){return L-=ee.distance*(1-fe)}),he.offset=L||.001,he.vars.onUpdate(he),ne&&ne.progress(1)};return Ae(),(fe!==1||ve||ne)&&(ie=nt.create({trigger:ve?F.parentNode:F,start:function(){return se.clamp?"clamp(top bottom+="+v+")":"top bottom+="+v},end:function(){return se.value<0?"max":se.clamp?"clamp(bottom top-="+v+")":"bottom top-="+v},scroller:f,scrub:!0,refreshPriority:-999,onRefreshInit:pe,onRefresh:le,onKill:function(he){var re=g.indexOf(he);re>=0&&g.splice(re,1),pe()},onUpdate:function(he){var re=K+L*(he.progress-ue),ee=Ue.length,Te=0,De,at,Me;if(he.offset){if(ee){for(at=-V,Me=he.end;ee--;){if(De=Ue[ee],De.trig.isActive||at>=De.start&&at<=De.end){ne&&(De.trig.progress+=De.trig.direction<0?.001:-.001,De.trig.update(0,0,1),ne.resetTo("y",parseFloat(q.y),-X,!0),H&&ne.progress(1));return}at>De.end&&(Te+=De.distance),Me-=De.distance}re=K+Te+L*((xt.utils.clamp(he.start,he.end,at)-he.start-Te)/(Me-he.start)-ue)}Xe.length&&!ve&&Xe.forEach(function(Ne){return Ne(re-Te)}),re=jx(re+de),ne?(ne.resetTo("y",re,-X,!0),H&&ne.progress(1)):(q.y=re+"px",q.renderTransform(1))}}}),le(ie),xt.core.getCache(ie.trigger).stRevert=Ze,ie.startY=K,ie.pins=Ue,ie.markers=Xe,ie.ratio=fe,ie.autoSpeed=ve,F.style.willChange="transform"),ie};ft(),nt.addEventListener("killAll",ft),xt.delayedCall(.5,function(){return H=0}),this.scrollTop=He,this.scrollTo=function(Y,F,se){var xe=xt.utils.clamp(0,Lr(),isNaN(Y)?t.offset(Y,se,!!F&&!x):+Y);F?x?xt.to(t,{duration:D,scrollTop:xe,overwrite:"auto",ease:oc}):I(xe):He(xe)},this.offset=function(Y,F,se){Y=Ss(Y)[0];var xe=Y.style.cssText,A=nt.create({trigger:Y,start:F||"top top"}),v;return g&&(H?nt.refresh():Ee([A],!0)),v=A.start/(se?z:1),A.kill(!1),Y.style.cssText=xe,xt.core.getCache(Y).uncache=1,v};function N(){return d=h.clientHeight,h.style.overflow="visible",zi.style.height=gn.innerHeight+(d-gn.innerHeight)/z+"px",d-gn.innerHeight}this.content=function(Y){if(arguments.length){var F=Ss(Y||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||zi.children[0];return F!==h&&(h=F,b=h.getAttribute("style")||"",Ge&&Ge.observe(h),xt.set(h,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),D||xt.set(h,{clearProps:"transform"})),this}return h},this.wrapper=function(Y){return arguments.length?(f=Ss(Y||"#smooth-wrapper")[0]||tv(h),T=f.getAttribute("style")||"",N(),xt.set(f,D?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):f},this.effects=function(Y,F){var se;if(g||(g=[]),!Y)return g.slice(0);Y=Ss(Y),Y.forEach(function(fe){for(var ie=g.length;ie--;)g[ie].trigger===fe&&g[ie].kill()}),F=F||{};var xe=F,A=xe.speed,v=xe.lag,O=xe.effectsPadding,$=[],K,q;for(K=0;K<Y.length;K++)q=Le(Y[K],A,v,K,O),q&&$.push(q);return(se=g).push.apply(se,$),F.refresh!==!1&&nt.refresh(),$},this.sections=function(Y,F){var se;if(p||(p=[]),!Y)return p.slice(0);var xe=Ss(Y).map(function(A){return nt.create({trigger:A,start:"top 120%",end:"bottom -20%",onToggle:function(O){A.style.opacity=O.isActive?"1":"0",A.style.pointerEvents=O.isActive?"all":"none"}})});return F&&F.add?(se=p).push.apply(se,xe):p=xe.slice(0),xe},this.content(e.content),this.wrapper(e.wrapper),this.render=function(Y){return Ke(Y||Y===0?Y:V)},this.getVelocity=function(){return Q.getVelocity(-V)},nt.scrollerProxy(f,{scrollTop:He,scrollHeight:function(){return N()&&zi.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!D,content:h,getBoundingClientRect:function(){return{top:0,left:0,width:gn.innerWidth,height:gn.innerHeight}}}),nt.defaults({scroller:f});var et=nt.getAll().filter(function(Y){return Y.scroller===gn||Y.scroller===f});et.forEach(function(Y){return Y.revert(!0,!0)}),_=nt.create({animation:xt.fromTo(ae,{y:function(){return P=0,0}},{y:function(){return P=1,-N()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(P){var F=me;F&&(Be(_),ae.y=V),Ke(ae.y,F),G(),s&&!x&&s(M)}}}),onRefreshInit:function(F){if(!r.isRefreshing){if(r.isRefreshing=!0,g){var se=nt.getAll().filter(function(A){return!!A.pin});g.forEach(function(A){A.vars.pinnedContainer||se.forEach(function(v){if(v.pin.contains(A.trigger)){var O=A.vars;O.pinnedContainer=v.pin,A.vars=null,A.init(O,A.animation)}})})}var xe=F.getTween();E=xe&&xe._end>xe._dp._time,C=V,ae.y=0,D&&(nt.isTouch===1&&(f.style.position="absolute"),f.scrollTop=0,nt.isTouch===1&&(f.style.position="fixed"))}},onRefresh:function(F){F.animation.invalidate(),F.setPositions(F.start,N()/z),E||Be(F),ae.y=-I()*z,Ke(ae.y),H||(E&&(me=!1),F.animation.progress(xt.utils.clamp(0,1,C/z/-F.end))),E&&(F.progress-=.001,F.update()),r.isRefreshing=!1},id:"ScrollSmoother",scroller:gn,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return N()/z},onScrubComplete:function(){Q.reset(),o&&o(t)},scrub:D||!0}),this.smooth=function(Y){return arguments.length&&(D=Y||0,z=D&&+e.speed||1,_.scrubDuration(Y)),_.getTween()?_.getTween().duration():0},_.getTween()&&(_.getTween().vars.ease=e.ease||oc),this.scrollTrigger=_,e.effects&&this.effects(e.effects===!0?"[data-"+y+"speed], [data-"+y+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),et.forEach(function(Y){Y.vars.scroller=f,Y.revert(!1,!0),Y.init(Y.vars,Y.animation)}),this.paused=function(Y,F){return arguments.length?(!!x!==Y&&(Y?(_.getTween()&&_.getTween().pause(),I(-V/z),Q.reset(),w=nt.normalizeScroll(),w&&w.disable(),x=nt.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return He(-V)}}),x.nested=Qm(mo,"wheel,touch,scroll",!0,F!==!1)):(x.nested.kill(),x.kill(),x=0,w&&w.enable(),_.progress=(-V/z-_.start)/(_.end-_.start),Be(_))),this):!!x},this.kill=this.revert=function(){t.paused(!1),Be(_),_.kill();for(var Y=(g||[]).concat(p||[]),F=Y.length;F--;)Y[F].kill();nt.scrollerProxy(f),nt.removeEventListener("killAll",ft),nt.removeEventListener("refresh",We),f.style.cssText=T,h.style.cssText=b;var se=nt.defaults({});se&&se.scroller===f&&nt.defaults({scroller:gn}),t.normalizer&&nt.normalizeScroll(!1),clearInterval(m),Vi=null,Ge&&Ge.disconnect(),zi.style.removeProperty("height"),gn.removeEventListener("focusin",te)},this.refresh=function(Y,F){return _.refresh(Y,F)},c&&(this.normalizer=nt.normalizeScroll(c===!0?{debounce:!0,content:!D&&h}:c)),nt.config(e),"scrollBehavior"in gn.getComputedStyle(zi)&&xt.set([zi,mo],{scrollBehavior:"auto"}),gn.addEventListener("focusin",te),m=setInterval(G,250),or.readyState==="loading"||requestAnimationFrame(function(){return nt.refresh()})}return r.register=function(t){return sc||(xt=t||ng(),tg()&&window.document&&(gn=window,or=document,mo=or.documentElement,zi=or.body),xt&&(Ss=xt.utils.toArray,$m=xt.utils.clamp,oc=xt.parseEase("expo"),jm=xt.core.context||function(){},nt=xt.core.globals().ScrollTrigger,xt.core.globals("ScrollSmoother",r),zi&&nt&&(eg=xt.delayedCall(.2,function(){return nt.isRefreshing||Vi&&Vi.refresh()}).pause(),Qx=[gn,or,mo,zi],Km=nt.core._getVelocityProp,Qm=nt.core._inputObserver,r.refresh=nt.refresh,sc=1))),sc},Kx(r,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),r})();Ur.version="3.13.0";Ur.create=function(r){return Vi&&r&&Vi.content()===Ss(r.content)[0]?Vi:new Ur(r)};Ur.get=function(){return Vi};ng()&&xt.registerPlugin(Ur);var bg=0,Zf=1,Tg=2;var Jf=1,Jc=2,Wi=3,dr=0,Nn=1,Xi=2,xr=0,Cs=1,$f=2,Kf=3,Qf=4,wg=5,Gr=100,Eg=101,Ag=102,Cg=103,Rg=104,Pg=200,Ig=201,Dg=202,Lg=203,Ec=204,Ac=205,Ug=206,Ng=207,Fg=208,Og=209,Bg=210,kg=211,zg=212,Vg=213,Hg=214,$c=0,Kc=1,Qc=2,Rs=3,jc=4,eu=5,tu=6,nu=7,jf=0,Gg=1,Wg=2,vr=0,Xg=1,qg=2,Yg=3,Zg=4,Jg=5,$g=6,Kg=7;var ed=300,Us=301,Ns=302,iu=303,ru=304,nl=306,Cc=1e3,Hr=1001,Rc=1002,_i=1003,Qg=1004;var il=1005;var Ai=1006,su=1007;var Zr=1008;var Pi=1009,td=1010,nd=1011,Oo=1012,ou=1013,Jr=1014,qi=1015,Bo=1016,au=1017,lu=1018,ko=1020,id=35902,rd=35899,sd=1021,od=1022,xi=1023,Po=1026,zo=1027,ad=1028,cu=1029,ld=1030,uu=1031;var hu=1033,rl=33776,sl=33777,ol=33778,al=33779,fu=35840,du=35841,pu=35842,mu=35843,gu=36196,_u=37492,xu=37496,vu=37808,yu=37809,Mu=37810,Su=37811,bu=37812,Tu=37813,wu=37814,Eu=37815,Au=37816,Cu=37817,Ru=37818,Pu=37819,Iu=37820,Du=37821,Lu=36492,Uu=36494,Nu=36495,Fu=36283,Ou=36284,Bu=36285,ku=36286;var Na=2300,Pc=2301,wc=2302,zf=2400,Vf=2401,Hf=2402;var jg=3200,e_=3201;var cd=0,t_=1,yr="",Ln="srgb",Ps="srgb-linear",Fa="linear",yt="srgb";var As=7680;var Gf=519,n_=512,i_=513,r_=514,ud=515,s_=516,o_=517,a_=518,l_=519,Wf=35044;var hd="300 es",Ei=2e3,Oa=2001;var pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ig=1234567,La=Math.PI/180,Io=180/Math.PI;function Vo(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function fd(r,e){return(r%e+e)%e}function nv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function iv(r,e,t){return r!==e?(t-r)/(e-r):0}function Ua(r,e,t){return(1-t)*r+t*e}function rv(r,e,t,n){return Ua(r,e,1-Math.exp(-t*n))}function sv(r,e=1){return e-Math.abs(fd(r,e*2)-e)}function ov(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function av(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function lv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function cv(r,e){return r+Math.random()*(e-r)}function uv(r){return r*(.5-Math.random())}function hv(r){r!==void 0&&(ig=r);let e=ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fv(r){return r*La}function dv(r){return r*Io}function pv(r){return(r&r-1)===0&&r!==0}function mv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _v(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Co(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var zu={DEG2RAD:La,RAD2DEG:Io,generateUUID:Vo,clamp:ut,euclideanModulo:fd,mapLinear:nv,inverseLerp:iv,lerp:Ua,damp:rv,pingpong:sv,smoothstep:ov,smootherstep:av,randInt:lv,randFloat:cv,randFloatSpread:uv,seededRandom:hv,degToRad:fv,radToDeg:dv,isPowerOfTwo:pv,ceilPowerOfTwo:mv,floorPowerOfTwo:gv,setQuaternionFromProperEuler:_v,normalize:Dn,denormalize:Co},mt=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mr=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a,m=l*f+c*d+u*_+h*g,T=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let w=Math.sqrt(b),C=Math.atan2(w,m*T);p=Math.sin(p*C)/w,a=Math.sin(a*C)/w}let x=a*T;if(l=l*p+f*x,c=c*p+d*x,u=u*p+_*x,h=h*p+g*x,p===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xf.copy(this).projectOnVector(e),this.sub(xf)}reflect(e){return this.sub(xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xf=new W,rg=new mr,je=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],T=i[1],b=i[4],x=i[7],w=i[2],C=i[5],E=i[8];return s[0]=o*g+a*T+l*w,s[3]=o*p+a*b+l*C,s[6]=o*m+a*x+l*E,s[1]=c*g+u*T+h*w,s[4]=c*p+u*b+h*C,s[7]=c*m+u*x+h*E,s[2]=f*g+d*T+_*w,s[5]=f*p+d*b+_*C,s[8]=f*m+d*x+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vf.makeScale(e,t)),this}rotate(e){return this.premultiply(vf.makeRotation(-e)),this}translate(e,t){return this.premultiply(vf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vf=new je;function dd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function c_(){let r=Ba("canvas");return r.style.display="block",r}var sg={};function Do(r){r in sg||(sg[r]=!0,console.warn(r))}function u_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var og=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xv(){let r={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(i.r=Ro(i.r),i.g=Ro(i.g),i.b=Ro(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yr?Fa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Do("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Do("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ps]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:og,fromXYZ:ag,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:og,fromXYZ:ag,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),r}var pt=xv();function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ro(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var go,Ic=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{go===void 0&&(go=Ba("canvas")),go.width=e.width,go.height=e.height;let i=go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=go}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ba("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vv=0,Lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(yf(i[o].image)):s.push(yf(i[o]))}else s=yf(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function yf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ic.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yv=0,Mf=new W,ii=class r extends pr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Hr,i=Hr,s=Ai,o=Zr,a=xi,l=Pi,c=r.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Vo(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mf).x}get height(){return this.source.getSize(Mf).y}get depth(){return this.source.getSize(Mf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cc:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cc:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=ed;ii.DEFAULT_ANISOTROPY=1;var Ft=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(d+1)/2,w=(m+1)/2,C=(u+f)/4,E=(h+g)/4,P=(_+p)/4;return b>x&&b>w?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=C/n,s=E/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=C/i,s=P/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=P/s),this.set(n,i,s,t),this}let T=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(h-g)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dc=class extends pr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new ii(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Lo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gi=class extends Dc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ka=class extends ii{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_i,this.minFilter=_i,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lc=class extends ii{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_i,this.minFilter=_i,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wr=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(s,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ac.copy(n.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),lc.subVectors(this.max,Ra),_o.subVectors(e.a,Ra),xo.subVectors(e.b,Ra),vo.subVectors(e.c,Ra),Nr.subVectors(xo,_o),Fr.subVectors(vo,xo),bs.subVectors(_o,vo);let t=[0,-Nr.z,Nr.y,0,-Fr.z,Fr.y,0,-bs.z,bs.y,Nr.z,0,-Nr.x,Fr.z,0,-Fr.x,bs.z,0,-bs.x,-Nr.y,Nr.x,0,-Fr.y,Fr.x,0,-bs.y,bs.x,0];return!Sf(t,_o,xo,vo,lc)||(t=[1,0,0,0,1,0,0,0,1],!Sf(t,_o,xo,vo,lc))?!1:(cc.crossVectors(Nr,Fr),t=[cc.x,cc.y,cc.z],Sf(t,_o,xo,vo,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new W,new W,new W,new W,new W,new W,new W,new W],bi=new W,ac=new Wr,_o=new W,xo=new W,vo=new W,Nr=new W,Fr=new W,bs=new W,Ra=new W,lc=new W,cc=new W,Ts=new W;function Sf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ts.fromArray(r,s);let a=i.x*Math.abs(Ts.x)+i.y*Math.abs(Ts.y)+i.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),u=n.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Mv=new Wr,Pa=new W,bf=new W,Uo=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);let t=Pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(bf)),this.expandByPoint(Pa.copy(e.center).sub(bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lr=new W,Tf=new W,uc=new W,Or=new W,wf=new W,hc=new W,Ef=new W,Uc=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Tf.copy(e).add(t).multiplyScalar(.5),uc.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Tf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(uc),a=Or.dot(this.direction),l=-Or.dot(uc),c=Or.lengthSq(),u=Math.abs(1-o*o),h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Tf).addScaledVector(uc,f),d}intersectSphere(e,t){lr.subVectors(e.center,this.origin);let n=lr.dot(this.direction),i=lr.dot(lr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,n,i,s){wf.subVectors(t,e),hc.subVectors(n,e),Ef.crossVectors(wf,hc);let o=this.direction.dot(Ef),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,e);let l=a*this.direction.dot(hc.crossVectors(Or,hc));if(l<0)return null;let c=a*this.direction.dot(wf.cross(Or));if(c<0||l+c>o)return null;let u=-a*Or.dot(Ef);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class r{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/yo.setFromMatrixColumn(e,0).length(),s=1/yo.setFromMatrixColumn(e,1).length(),o=1/yo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){let f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sv,e,bv)}lookAt(e,t,n){let i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Br.crossVectors(n,jn),Br.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Br.crossVectors(n,jn)),Br.normalize(),fc.crossVectors(jn,Br),i[0]=Br.x,i[4]=fc.x,i[8]=jn.x,i[1]=Br.y,i[5]=fc.y,i[9]=jn.y,i[2]=Br.z,i[6]=fc.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],T=n[3],b=n[7],x=n[11],w=n[15],C=i[0],E=i[4],P=i[8],M=i[12],y=i[1],I=i[5],D=i[9],z=i[13],V=i[2],X=i[6],H=i[10],Q=i[14],G=i[3],ae=i[7],U=i[11],me=i[15];return s[0]=o*C+a*y+l*V+c*G,s[4]=o*E+a*I+l*X+c*ae,s[8]=o*P+a*D+l*H+c*U,s[12]=o*M+a*z+l*Q+c*me,s[1]=u*C+h*y+f*V+d*G,s[5]=u*E+h*I+f*X+d*ae,s[9]=u*P+h*D+f*H+d*U,s[13]=u*M+h*z+f*Q+d*me,s[2]=_*C+g*y+p*V+m*G,s[6]=_*E+g*I+p*X+m*ae,s[10]=_*P+g*D+p*H+m*U,s[14]=_*M+g*z+p*Q+m*me,s[3]=T*C+b*y+x*V+w*G,s[7]=T*E+b*I+x*X+w*ae,s[11]=T*P+b*D+x*H+w*U,s[15]=T*M+b*z+x*Q+w*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],T=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,b=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,w=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,C=t*T+n*b+i*x+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/C;return e[0]=T*E,e[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*E,e[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=b*E,e[5]=(u*p*s-_*f*s+_*i*d-t*p*d-u*i*m+t*f*m)*E,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=x*E,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*E,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=w*E,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*E,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,T=l*c,b=l*u,x=l*h,w=n.x,C=n.y,E=n.z;return i[0]=(1-(g+m))*w,i[1]=(d+x)*w,i[2]=(_-b)*w,i[3]=0,i[4]=(d-x)*C,i[5]=(1-(f+m))*C,i[6]=(p+T)*C,i[7]=0,i[8]=(_+b)*E,i[9]=(p-T)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=yo.set(i[0],i[1],i[2]).length(),o=yo.set(i[4],i[5],i[6]).length(),a=yo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ti.copy(this);let c=1/s,u=1/o,h=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,t.setFromRotationMatrix(Ti),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ei,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),_,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Ei)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Oa)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ei,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),_,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Ei)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Oa)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yo=new W,Ti=new Xt,Sv=new W(0,0,0),bv=new W(1,1,1),Br=new W,fc=new W,jn=new W,lg=new Xt,cg=new mr,Ci=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tv=0,ug=new W,Mo=new mr,cr=new Xt,dc=new W,Ia=new W,wv=new W,Ev=new mr,hg=new W(1,0,0),fg=new W(0,1,0),dg=new W(0,0,1),pg={type:"added"},Av={type:"removed"},So={type:"childadded",child:null},Af={type:"childremoved",child:null},vn=class r extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new W,t=new Ci,n=new mr,i=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new je}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(fg,e)}rotateZ(e){return this.rotateOnAxis(dg,e)}translateOnAxis(e,t){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(fg,e)}translateZ(e){return this.translateOnAxis(dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dc.copy(e):dc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(Ia,dc,this.up):cr.lookAt(dc,Ia,this.up),this.quaternion.setFromRotationMatrix(cr),i&&(cr.extractRotation(i.matrixWorld),Mo.setFromRotationMatrix(cr),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pg),So.child=e,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Av),Af.child=e,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pg),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,wv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,Ev,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};vn.DEFAULT_UP=new W(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new W,ur=new W,Cf=new W,hr=new W,bo=new W,To=new W,mg=new W,Rf=new W,Pf=new W,If=new W,Df=new Ft,Lf=new Ft,Uf=new Ft,Vr=class r{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wi.subVectors(i,t),ur.subVectors(n,t),Cf.subVectors(e,t);let o=wi.dot(wi),a=wi.dot(ur),l=wi.dot(Cf),c=ur.dot(ur),u=ur.dot(Cf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hr.x),l.addScaledVector(o,hr.y),l.addScaledVector(a,hr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Df.setScalar(0),Lf.setScalar(0),Uf.setScalar(0),Df.fromBufferAttribute(e,t),Lf.fromBufferAttribute(e,n),Uf.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Df,s.x),o.addScaledVector(Lf,s.y),o.addScaledVector(Uf,s.z),o}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),ur.subVectors(e,t),wi.cross(ur).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),wi.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;bo.subVectors(i,n),To.subVectors(s,n),Rf.subVectors(e,n);let l=bo.dot(Rf),c=To.dot(Rf);if(l<=0&&c<=0)return t.copy(n);Pf.subVectors(e,i);let u=bo.dot(Pf),h=To.dot(Pf);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(bo,o);If.subVectors(e,s);let d=bo.dot(If),_=To.dot(If);if(_>=0&&d<=_)return t.copy(s);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(To,a);let p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return mg.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(mg,a);let m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(bo,o).addScaledVector(To,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},h_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Nf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var ht=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=fd(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Nf(o,s,e+1/3),this.g=Nf(o,s,e),this.b=Nf(o,s,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){let n=h_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return pt.workingToColorSpace(xn.copy(this),e),Math.round(ut(xn.r*255,0,255))*65536+Math.round(ut(xn.g*255,0,255))*256+Math.round(ut(xn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(xn.copy(this),t);let n=xn.r,i=xn.g,s=xn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Ln){pt.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,i=xn.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(pc);let n=Ua(kr.h,pc.h,t),i=Ua(kr.s,pc.s,t),s=Ua(kr.l,pc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new ht;ht.NAMES=h_;var Cv=0,gr=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Cs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Ac,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ec&&(n.blendSrc=this.blendSrc),this.blendDst!==Ac&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Va=class extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new W,mc=new mt,Rv=0,ti=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wf,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXY(t,mc.x,mc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Co(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Co(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Co(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Co(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Co(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),i=Dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),i=Dn(i,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),e}};var Ha=class extends ti{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ga=class extends ti{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ni=class extends ti{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pv=0,gi=new Xt,Ff=new vn,wo=new W,ei=new Wr,Da=new Wr,rn=new W,_r=class r extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?Ga:Ha)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return Ff.lookAt(e),Ff.updateMatrix(),this.applyMatrix4(Ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ni(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Da.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(ei.min,Da.min),ei.expandByPoint(rn),rn.addVectors(ei.max,Da.max),ei.expandByPoint(rn)):(ei.expandByPoint(Da.min),ei.expandByPoint(Da.max))}ei.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(wo.fromBufferAttribute(e,c),rn.add(wo)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new W,l[P]=new W;let c=new W,u=new W,h=new W,f=new mt,d=new mt,_=new mt,g=new W,p=new W;function m(P,M,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),_.sub(f);let I=1/(d.x*_.y-_.x*d.y);isFinite(I)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(I),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(I),a[P].add(g),a[M].add(g),a[y].add(g),l[P].add(p),l[M].add(p),l[y].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,M=T.length;P<M;++P){let y=T[P],I=y.start,D=y.count;for(let z=I,V=I+D;z<V;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let b=new W,x=new W,w=new W,C=new W;function E(P){w.fromBufferAttribute(i,P),C.copy(w);let M=a[P];b.copy(M),b.sub(w.multiplyScalar(w.dot(M))).normalize(),x.crossVectors(C,M);let I=x.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,I)}for(let P=0,M=T.length;P<M;++P){let y=T[P],I=y.start,D=y.count;for(let z=I,V=I+D;z<V;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,d=e.count;f<d;f+=3){let _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new ti(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gg=new Xt,ws=new Uc,gc=new Uo,_g=new W,_c=new W,xc=new W,vc=new W,Of=new W,yc=new W,xg=new W,Mc=new W,yn=class extends vn{constructor(e=new _r,t=new Va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){yc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Of.fromBufferAttribute(h,e),o?yc.addScaledVector(Of,u):yc.addScaledVector(Of.sub(t),u))}t.add(yc)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(s),ws.copy(e.ray).recast(e.near),!(gc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(gc,_g)===null||ws.origin.distanceToSquared(_g)>(e.far-e.near)**2))&&(gg.copy(s).invert(),ws.copy(e.ray).applyMatrix4(gg),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let p=f[_],m=o[p.materialIndex],T=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=T,w=b;x<w;x+=3){let C=a.getX(x),E=a.getX(x+1),P=a.getX(x+2);i=Sc(this,m,e,n,c,u,h,C,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){let T=a.getX(p),b=a.getX(p+1),x=a.getX(p+2);i=Sc(this,o,e,n,c,u,h,T,b,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let p=f[_],m=o[p.materialIndex],T=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=T,w=b;x<w;x+=3){let C=x,E=x+1,P=x+2;i=Sc(this,m,e,n,c,u,h,C,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){let T=p,b=p+1,x=p+2;i=Sc(this,o,e,n,c,u,h,T,b,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Iv(r,e,t,n,i,s,o,a){let l;if(e.side===Nn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===dr,a),l===null)return null;Mc.copy(a),Mc.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Mc);return c<t.near||c>t.far?null:{distance:c,point:Mc.clone(),object:r}}function Sc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,_c),r.getVertexPosition(l,xc),r.getVertexPosition(c,vc);let u=Iv(r,e,t,n,_c,xc,vc,xg);if(u){let h=new W;Vr.getBarycoord(xg,_c,xc,vc,h),i&&(u.uv=Vr.getInterpolatedAttribute(i,a,l,c,h,new mt)),s&&(u.uv1=Vr.getInterpolatedAttribute(s,a,l,c,h,new mt)),o&&(u.normal=Vr.getInterpolatedAttribute(o,a,l,c,h,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new W,materialIndex:0};Vr.getNormal(_c,xc,vc,f.normal),u.face=f,u.barycoord=h}return u}var Xr=class r extends _r{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ni(c,3)),this.setAttribute("normal",new ni(u,3)),this.setAttribute("uv",new ni(h,2));function _(g,p,m,T,b,x,w,C,E,P,M){let y=x/E,I=w/P,D=x/2,z=w/2,V=C/2,X=E+1,H=P+1,Q=0,G=0,ae=new W;for(let U=0;U<H;U++){let me=U*I-z;for(let Be=0;Be<X;Be++){let Ke=Be*y-D;ae[g]=Ke*T,ae[p]=me*b,ae[m]=V,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[p]=0,ae[m]=C>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Be/E),h.push(1-U/P),Q+=1}}for(let U=0;U<P;U++)for(let me=0;me<E;me++){let Be=f+me+X*U,Ke=f+me+X*(U+1),He=f+(me+1)+X*(U+1),Ge=f+(me+1)+X*U;l.push(Be,Ke,Ge),l.push(Ke,He,Ge),G+=6}a.addGroup(d,G,M),d+=G,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(r){let e={};for(let t=0;t<r.length;t++){let n=Fs(r[t]);for(let i in n)e[i]=n[i]}return e}function Dv(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function pd(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var f_={clone:Fs,merge:Mn},Lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ri=class extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lv,this.fragmentShader=Uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wa=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zr=new W,vg=new mt,yg=new mt,Hn=class extends Wa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,vg,yg),t.subVectors(yg,vg)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(La*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Eo=-90,Ao=1,Nc=class extends vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Hn(Eo,Ao,e,t);i.layers=this.layers,this.add(i);let s=new Hn(Eo,Ao,e,t);s.layers=this.layers,this.add(s);let o=new Hn(Eo,Ao,e,t);o.layers=this.layers,this.add(o);let a=new Hn(Eo,Ao,e,t);a.layers=this.layers,this.add(a);let l=new Hn(Eo,Ao,e,t);l.layers=this.layers,this.add(l);let c=new Hn(Eo,Ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Xa=class extends ii{constructor(e=[],t=Us,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fc=class extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xr(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:xr});s.uniforms.tEquirect.value=t;let o=new yn(i,s),a=t.minFilter;return t.minFilter===Zr&&(t.minFilter=Ai),new Nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Un=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nv={type:"move"},No=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var qa=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Bf=new W,Fv=new W,Ov=new je,Hi=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Bf.subVectors(n,t).cross(Fv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Bf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ov.getNormalMatrix(e),i=this.coplanarPoint(Bf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new Uo,Bv=new mt(.5,.5),bc=new W,Fo=class{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,s=new Hi,o=new Hi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],_=s[8],g=s[9],p=s[10],m=s[11],T=s[12],b=s[13],x=s[14],w=s[15];if(i[0].setComponents(c-o,d-u,m-_,w-T).normalize(),i[1].setComponents(c+o,d+u,m+_,w+T).normalize(),i[2].setComponents(c+a,d+h,m+g,w+b).normalize(),i[3].setComponents(c-a,d-h,m-g,w-b).normalize(),n)i[4].setComponents(l,f,p,x).normalize(),i[5].setComponents(c-l,d-f,m-p,w-x).normalize();else if(i[4].setComponents(c-l,d-f,m-p,w-x).normalize(),t===Ei)i[5].setComponents(c+l,d+f,m+p,w+x).normalize();else if(t===Oa)i[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=Bv.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(bc.x=i.normal.x>0?e.max.x:e.min.x,bc.y=i.normal.y>0?e.max.y:e.min.y,bc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ya=class extends ii{constructor(e,t,n=Jr,i,s,o,a=_i,l=_i,c,u=Po,h=1){if(u!==Po&&u!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Za=class extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ja=class r extends _r{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],f=[],d=[],_=0,g=[],p=n/2,m=0;T(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ni(h,3)),this.setAttribute("normal",new ni(f,3)),this.setAttribute("uv",new ni(d,2));function T(){let x=new W,w=new W,C=0,E=(t-e)/n;for(let P=0;P<=s;P++){let M=[],y=P/s,I=y*(t-e)+e;for(let D=0;D<=i;D++){let z=D/i,V=z*l+a,X=Math.sin(V),H=Math.cos(V);w.x=I*X,w.y=-y*n+p,w.z=I*H,h.push(w.x,w.y,w.z),x.set(X,E,H).normalize(),f.push(x.x,x.y,x.z),d.push(z,1-y),M.push(_++)}g.push(M)}for(let P=0;P<i;P++)for(let M=0;M<s;M++){let y=g[M][P],I=g[M+1][P],D=g[M+1][P+1],z=g[M][P+1];(e>0||M!==0)&&(u.push(y,I,z),C+=3),(t>0||M!==s-1)&&(u.push(I,D,z),C+=3)}c.addGroup(m,C,0),m+=C}function b(x){let w=_,C=new mt,E=new W,P=0,M=x===!0?e:t,y=x===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,p*y,0),f.push(0,y,0),d.push(.5,.5),_++;let I=_;for(let D=0;D<=i;D++){let V=D/i*l+a,X=Math.cos(V),H=Math.sin(V);E.x=M*H,E.y=p*y,E.z=M*X,h.push(E.x,E.y,E.z),f.push(0,y,0),C.x=X*.5+.5,C.y=H*.5*y+.5,d.push(C.x,C.y),_++}for(let D=0;D<i;D++){let z=w+D,V=I+D;x===!0?u.push(V,V+1,z):u.push(V+1,V,z),P+=3}c.addGroup(m,P,x===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Is=class r extends _r{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){let T=m*f-o;for(let b=0;b<c;b++){let x=b*h-s;_.push(x,-T,0),g.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let b=T+c*m,x=T+c*(m+1),w=T+1+c*(m+1),C=T+1+c*m;d.push(b,x,C),d.push(x,w,C)}this.setIndex(d),this.setAttribute("position",new ni(_,3)),this.setAttribute("normal",new ni(g,3)),this.setAttribute("uv",new ni(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var $a=class extends gr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ht(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Ka=class extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Oc=class extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bc=class extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function kv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ds=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kc=class extends Ds{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zf,endingEnd:zf}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vf:s=e,a=2*t-n;break;case Hf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vf:o=e,l=2*n-t;break;case Hf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,T=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,b=(-1-d)*p+(1.5+d)*g+.5*_,x=d*p-d*g;for(let w=0;w!==a;++w)s[w]=m*o[u+w]+T*o[c+w]+b*o[l+w]+x*o[h+w];return s}},zc=class extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Vc=class extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ri=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tc(t,this.TimeBufferType),this.values=Tc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tc(e.times,Array),values:Tc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Pc:t=this.InterpolantFactoryMethodLinear;break;case wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Pc;case this.InterpolantFactoryMethodSmooth:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&kv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){let g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Pc;var qr=class extends ri{constructor(e,t,n){super(e,t,n)}};qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Na;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}};Hc.prototype.ValueTypeName="color";var Gc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}};Gc.prototype.ValueTypeName="number";var Wc=class extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)mr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Qa=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}};Qa.prototype.ValueTypeName="quaternion";Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends ri{constructor(e,t,n){super(e,t,n)}};Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Na;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}};Xc.prototype.ValueTypeName="vector";var qc=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},d_=new qc,Yc=class{constructor(e){this.manager=e!==void 0?e:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ja=class extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},el=class extends ja{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kf=new Xt,Mg=new W,Sg=new W,Xf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mg),Sg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sg),t.updateMatrixWorld(),kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ls=class extends Wa{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qf=class extends Xf{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tl=class extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new qf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Zc=class extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var md="\\[\\]\\.:\\/",zv=new RegExp("["+md+"]","g"),gd="[^"+md+"]",Vv="[^"+md.replace("\\.","")+"]",Hv=/((?:WC+[\/:])*)/.source.replace("WC",gd),Gv=/(WCOD+)?/.source.replace("WCOD",Vv),Wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gd),Xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gd),qv=new RegExp("^"+Hv+Gv+Wv+Xv+"$"),Yv=["material","materials","bones","map"],Yf=class{constructor(e,t,n){let i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zv,"")}static parseTrackName(e){let t=qv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Yv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Yf;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q1=new Float32Array(1);function _d(r,e,t,n){let i=Zv(n);switch(t){case sd:return r*e;case ad:return r*e/i.components*i.byteLength;case cu:return r*e/i.components*i.byteLength;case ld:return r*e*2/i.components*i.byteLength;case uu:return r*e*2/i.components*i.byteLength;case od:return r*e*3/i.components*i.byteLength;case xi:return r*e*4/i.components*i.byteLength;case hu:return r*e*4/i.components*i.byteLength;case rl:case sl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case du:case mu:return Math.max(r,16)*Math.max(e,8)/4;case fu:case pu:return Math.max(r,8)*Math.max(e,8)/2;case gu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Su:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Au:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Iu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Du:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Lu:case Uu:case Nu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Fu:case Ou:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bu:case ku:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zv(r){switch(r){case Pi:case td:return{byteLength:1,components:1};case Oo:case nd:case Bo:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case Jr:case ou:case qi:return{byteLength:4,components:1};case id:case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function O_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function $v(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){let _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){let g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ly=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,My=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ry=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,By=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$y=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Kv,alphahash_pars_fragment:Qv,alphamap_fragment:jv,alphamap_pars_fragment:ey,alphatest_fragment:ty,alphatest_pars_fragment:ny,aomap_fragment:iy,aomap_pars_fragment:ry,batching_pars_vertex:sy,batching_vertex:oy,begin_vertex:ay,beginnormal_vertex:ly,bsdfs:cy,iridescence_fragment:uy,bumpmap_pars_fragment:hy,clipping_planes_fragment:fy,clipping_planes_pars_fragment:dy,clipping_planes_pars_vertex:py,clipping_planes_vertex:my,color_fragment:gy,color_pars_fragment:_y,color_pars_vertex:xy,color_vertex:vy,common:yy,cube_uv_reflection_fragment:My,defaultnormal_vertex:Sy,displacementmap_pars_vertex:by,displacementmap_vertex:Ty,emissivemap_fragment:wy,emissivemap_pars_fragment:Ey,colorspace_fragment:Ay,colorspace_pars_fragment:Cy,envmap_fragment:Ry,envmap_common_pars_fragment:Py,envmap_pars_fragment:Iy,envmap_pars_vertex:Dy,envmap_physical_pars_fragment:Gy,envmap_vertex:Ly,fog_vertex:Uy,fog_pars_vertex:Ny,fog_fragment:Fy,fog_pars_fragment:Oy,gradientmap_pars_fragment:By,lightmap_pars_fragment:ky,lights_lambert_fragment:zy,lights_lambert_pars_fragment:Vy,lights_pars_begin:Hy,lights_toon_fragment:Wy,lights_toon_pars_fragment:Xy,lights_phong_fragment:qy,lights_phong_pars_fragment:Yy,lights_physical_fragment:Zy,lights_physical_pars_fragment:Jy,lights_fragment_begin:$y,lights_fragment_maps:Ky,lights_fragment_end:Qy,logdepthbuf_fragment:jy,logdepthbuf_pars_fragment:eM,logdepthbuf_pars_vertex:tM,logdepthbuf_vertex:nM,map_fragment:iM,map_pars_fragment:rM,map_particle_fragment:sM,map_particle_pars_fragment:oM,metalnessmap_fragment:aM,metalnessmap_pars_fragment:lM,morphinstance_vertex:cM,morphcolor_vertex:uM,morphnormal_vertex:hM,morphtarget_pars_vertex:fM,morphtarget_vertex:dM,normal_fragment_begin:pM,normal_fragment_maps:mM,normal_pars_fragment:gM,normal_pars_vertex:_M,normal_vertex:xM,normalmap_pars_fragment:vM,clearcoat_normal_fragment_begin:yM,clearcoat_normal_fragment_maps:MM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:bM,opaque_fragment:TM,packing:wM,premultiplied_alpha_fragment:EM,project_vertex:AM,dithering_fragment:CM,dithering_pars_fragment:RM,roughnessmap_fragment:PM,roughnessmap_pars_fragment:IM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:LM,shadowmap_vertex:UM,shadowmask_pars_fragment:NM,skinbase_vertex:FM,skinning_pars_vertex:OM,skinning_vertex:BM,skinnormal_vertex:kM,specularmap_fragment:zM,specularmap_pars_fragment:VM,tonemapping_fragment:HM,tonemapping_pars_fragment:GM,transmission_fragment:WM,transmission_pars_fragment:XM,uv_pars_fragment:qM,uv_pars_vertex:YM,uv_vertex:ZM,worldpos_vertex:JM,background_vert:$M,background_frag:KM,backgroundCube_vert:QM,backgroundCube_frag:jM,cube_vert:eS,cube_frag:tS,depth_vert:nS,depth_frag:iS,distanceRGBA_vert:rS,distanceRGBA_frag:sS,equirect_vert:oS,equirect_frag:aS,linedashed_vert:lS,linedashed_frag:cS,meshbasic_vert:uS,meshbasic_frag:hS,meshlambert_vert:fS,meshlambert_frag:dS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:gS,meshnormal_frag:_S,meshphong_vert:xS,meshphong_frag:vS,meshphysical_vert:yS,meshphysical_frag:MS,meshtoon_vert:SS,meshtoon_frag:bS,points_vert:TS,points_frag:wS,shadow_vert:ES,shadow_frag:AS,sprite_vert:CS,sprite_frag:RS},be={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Yi={basic:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Mn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Mn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ht(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Mn([be.points,be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Mn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Mn([be.common,be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Mn([be.sprite,be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Mn([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Mn([be.lights,be.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Yi.physical={uniforms:Mn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Vu={r:0,b:0,g:0},Os=new Ci,PS=new Xt;function IS(r,e,t,n,i,s,o){let a=new ht(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function g(b){let x=!1,w=_(b);w===null?m(a,l):w&&w.isColor&&(m(w,1),x=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(b,x){let w=_(x);w&&(w.isCubeTexture||w.mapping===nl)?(u===void 0&&(u=new yn(new Xr(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Fs(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Os.copy(x.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PS.makeRotationFromEuler(Os)),u.material.toneMapped=pt.getTransfer(w.colorSpace)!==yt,(h!==w||f!==w.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new yn(new Is(2,2),new Ri({name:"BackgroundMaterial",uniforms:Fs(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pt.getTransfer(w.colorSpace)!==yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,x){b.getRGB(Vu,pd(r)),n.buffers.color.setClear(Vu.r,Vu.g,Vu.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:g,addToRenderList:p,dispose:T}}function DS(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(y,I,D,z,V){let X=!1,H=h(z,D,I);s!==H&&(s=H,c(s.object)),X=d(y,z,D,V),X&&_(y,z,D,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(y,I,D,z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,I,D){let z=D.wireframe===!0,V=n[y.id];V===void 0&&(V={},n[y.id]=V);let X=V[I.id];X===void 0&&(X={},V[I.id]=X);let H=X[z];return H===void 0&&(H=f(l()),X[z]=H),H}function f(y){let I=[],D=[],z=[];for(let V=0;V<t;V++)I[V]=0,D[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:z,object:y,attributes:{},index:null}}function d(y,I,D,z){let V=s.attributes,X=I.attributes,H=0,Q=D.getAttributes();for(let G in Q)if(Q[G].location>=0){let U=V[G],me=X[G];if(me===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),U===void 0||U.attribute!==me||me&&U.data!==me.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function _(y,I,D,z){let V={},X=I.attributes,H=0,Q=D.getAttributes();for(let G in Q)if(Q[G].location>=0){let U=X[G];U===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(U=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(U=y.instanceColor));let me={};me.attribute=U,U&&U.data&&(me.data=U.data),V[G]=me,H++}s.attributes=V,s.attributesNum=H,s.index=z}function g(){let y=s.newAttributes;for(let I=0,D=y.length;I<D;I++)y[I]=0}function p(y){m(y,0)}function m(y,I){let D=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;D[y]=1,z[y]===0&&(r.enableVertexAttribArray(y),z[y]=1),V[y]!==I&&(r.vertexAttribDivisor(y,I),V[y]=I)}function T(){let y=s.newAttributes,I=s.enabledAttributes;for(let D=0,z=I.length;D<z;D++)I[D]!==y[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function b(y,I,D,z,V,X,H){H===!0?r.vertexAttribIPointer(y,I,D,V,X):r.vertexAttribPointer(y,I,D,z,V,X)}function x(y,I,D,z){g();let V=z.attributes,X=D.getAttributes(),H=I.defaultAttributeValues;for(let Q in X){let G=X[Q];if(G.location>=0){let ae=V[Q];if(ae===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){let U=ae.normalized,me=ae.itemSize,Be=e.get(ae);if(Be===void 0)continue;let Ke=Be.buffer,He=Be.type,Ge=Be.bytesPerElement,j=He===r.INT||He===r.UNSIGNED_INT||ae.gpuType===ou;if(ae.isInterleavedBufferAttribute){let te=ae.data,_e=te.stride,Ie=ae.offset;if(te.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)m(G.location+Ee,te.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let Ee=0;Ee<G.locationSize;Ee++)b(G.location+Ee,me/G.locationSize,He,U,_e*Ge,(Ie+me/G.locationSize*Ee)*Ge,j)}else{if(ae.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)m(G.location+te,ae.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let te=0;te<G.locationSize;te++)p(G.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let te=0;te<G.locationSize;te++)b(G.location+te,me/G.locationSize,He,U,me*Ge,me/G.locationSize*te*Ge,j)}}else if(H!==void 0){let U=H[Q];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(G.location,U);break;case 3:r.vertexAttrib3fv(G.location,U);break;case 4:r.vertexAttrib4fv(G.location,U);break;default:r.vertexAttrib1fv(G.location,U)}}}}T()}function w(){P();for(let y in n){let I=n[y];for(let D in I){let z=I[D];for(let V in z)u(z[V].object),delete z[V];delete I[D]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let D in I){let z=I[D];for(let V in z)u(z[V].object),delete z[V];delete I[D]}delete n[y.id]}function E(y){for(let I in n){let D=n[I];if(D[y.id]===void 0)continue;let z=D[y.id];for(let V in z)u(z[V].object),delete z[V];delete D[y.id]}}function P(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:T}}function LS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function US(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==xi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let P=E===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Pi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==qi&&!P)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:w,maxSamples:C}}function NS(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Hi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{let T=s?0:n,b=T*4,x=m.clippingState||null;l.value=x,x=u(_,f,b,d);for(let w=0;w!==b;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){let g=h!==null?h.length:0,p=null;if(g!==0){if(p=l.value,_!==!0||p===null){let m=d+g*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,x=d;b!==g;++b,x+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function FS(r){let e=new WeakMap;function t(o,a){return a===iu?o.mapping=Us:a===ru&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===iu||a===ru)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Fc(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Go=4,p_=[.125,.215,.35,.446,.526,.582],zs=20,xd=new Ls,m_=new ht,vd=null,yd=0,Md=0,Sd=!1,ks=(1+Math.sqrt(5))/2,Ho=1/ks,g_=[new W(-ks,Ho,0),new W(ks,Ho,0),new W(-Ho,0,ks),new W(Ho,0,ks),new W(0,ks,-Ho),new W(0,ks,Ho),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],OS=new W,Wu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=OS}=s;vd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,yd,Md),this._renderer.xr.enabled=Sd,e.scissorTest=!1,Hu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Bo,format:xi,colorSpace:Ps,depthBuffer:!1},i=__(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BS(s)),this._blurMaterial=kS(s,e,t)}return i}_compileMaterial(e){let t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,xd)}_sceneToCubeUV(e,t,n,i,s){let l=new Hn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(m_),h.toneMapping=vr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let g=new Va({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),p=new yn(new Xr,g),m=!1,T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,m=!0):(g.color.copy(m_),m=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));let w=this._cubeSize;Hu(i,x*w,b>2?w:0,w,w),h.setRenderTarget(i),m&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Us||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x_());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Hu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=g_[(i-s-1)%g_.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new yn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zs-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):zs;p>zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zs}`);let m=[],T=0;for(let E=0;E<zs;++E){let P=E/g,M=Math.exp(-P*P/2);m.push(M),E===0?T+=M:E<p&&(T+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;let x=this._sizeLods[i],w=3*x*(i>b-Go?i-b+Go:0),C=4*(this._cubeSize-x);Hu(t,w,C,3*x,2*x),l.setRenderTarget(t),l.render(h,xd)}};function BS(r){let e=[],t=[],n=[],i=r,s=r-Go+1+p_.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Go?l=p_[o-r+Go-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,T=new Float32Array(g*_*d),b=new Float32Array(p*_*d),x=new Float32Array(m*_*d);for(let C=0;C<d;C++){let E=C%3*2/3-1,P=C>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];T.set(M,g*_*C),b.set(f,p*_*C);let y=[C,C,C,C,C,C];x.set(y,m*_*C)}let w=new _r;w.setAttribute("position",new ti(T,g)),w.setAttribute("uv",new ti(b,p)),w.setAttribute("faceIndex",new ti(x,m)),e.push(w),i>Go&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function __(r,e,t){let n=new Gi(r,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hu(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function kS(r,e,t){let n=new Float32Array(zs),i=new W(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function x_(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function v_(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===iu||l===ru,u=l===Us||l===Ns;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Wu(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Wu(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function VS(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Do("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function HS(r,e,t,n){let i={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,_=h.attributes.position,g=0;if(d!==null){let T=d.array;g=d.version;for(let b=0,x=T.length;b<x;b+=3){let w=T[b+0],C=T[b+1],E=T[b+2];f.push(w,C,C,E,E,w)}}else if(_!==void 0){let T=_.array;g=_.version;for(let b=0,x=T.length/3-1;b<x;b+=3){let w=b+0,C=b+1,E=b+2;f.push(w,C,C,E,E,w)}}else return;let p=new(dd(f)?Ga:Ha)(f,1);p.version=g;let m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function GS(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function h(f,d,_,g){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let T=0;T<_;T++)m+=d[T]*g[T];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function WS(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function XS(r,e,t){let n=new WeakMap,i=new Ft;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],b=0;d===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let x=a.attributes.position.count*b,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let C=new Float32Array(x*w*4*h),E=new ka(C,x,w,h);E.type=qi,E.needsUpdate=!0;let P=b*4;for(let y=0;y<h;y++){let I=p[y],D=m[y],z=T[y],V=x*w*4*y;for(let X=0;X<I.count;X++){let H=X*P;d===!0&&(i.fromBufferAttribute(I,X),C[V+H+0]=i.x,C[V+H+1]=i.y,C[V+H+2]=i.z,C[V+H+3]=0),_===!0&&(i.fromBufferAttribute(D,X),C[V+H+4]=i.x,C[V+H+5]=i.y,C[V+H+6]=i.z,C[V+H+7]=0),g===!0&&(i.fromBufferAttribute(z,X),C[V+H+8]=i.x,C[V+H+9]=i.y,C[V+H+10]=i.z,C[V+H+11]=z.itemSize===4?i.w:1)}}f={count:h,texture:E,size:new mt(x,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function qS(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var B_=new ii,y_=new Ya(1,1),k_=new ka,z_=new Lc,V_=new Xa,M_=[],S_=[],b_=new Float32Array(16),T_=new Float32Array(9),w_=new Float32Array(4);function Xo(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=M_[i];if(s===void 0&&(s=new Float32Array(i),M_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function qu(r,e){let t=S_[e];t===void 0&&(t=new Int32Array(e),S_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function YS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ZS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function JS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function $S(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function KS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;w_.set(n),r.uniformMatrix2fv(this.addr,!1,w_),en(t,n)}}function QS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;T_.set(n),r.uniformMatrix3fv(this.addr,!1,T_),en(t,n)}}function jS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;b_.set(n),r.uniformMatrix4fv(this.addr,!1,b_),en(t,n)}}function eb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function nb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function ib(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function rb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function ob(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function ab(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function lb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(y_.compareFunction=ud,s=y_):s=B_,t.setTexture2D(e||s,i)}function cb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||z_,i)}function ub(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||V_,i)}function hb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||k_,i)}function fb(r){switch(r){case 5126:return YS;case 35664:return ZS;case 35665:return JS;case 35666:return $S;case 35674:return KS;case 35675:return QS;case 35676:return jS;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return hb}}function db(r,e){r.uniform1fv(this.addr,e)}function pb(r,e){let t=Xo(e,this.size,2);r.uniform2fv(this.addr,t)}function mb(r,e){let t=Xo(e,this.size,3);r.uniform3fv(this.addr,t)}function gb(r,e){let t=Xo(e,this.size,4);r.uniform4fv(this.addr,t)}function _b(r,e){let t=Xo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xb(r,e){let t=Xo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vb(r,e){let t=Xo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function yb(r,e){r.uniform1iv(this.addr,e)}function Mb(r,e){r.uniform2iv(this.addr,e)}function Sb(r,e){r.uniform3iv(this.addr,e)}function bb(r,e){r.uniform4iv(this.addr,e)}function Tb(r,e){r.uniform1uiv(this.addr,e)}function wb(r,e){r.uniform2uiv(this.addr,e)}function Eb(r,e){r.uniform3uiv(this.addr,e)}function Ab(r,e){r.uniform4uiv(this.addr,e)}function Cb(r,e,t){let n=this.cache,i=e.length,s=qu(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||B_,s[o])}function Rb(r,e,t){let n=this.cache,i=e.length,s=qu(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||z_,s[o])}function Pb(r,e,t){let n=this.cache,i=e.length,s=qu(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||V_,s[o])}function Ib(r,e,t){let n=this.cache,i=e.length,s=qu(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||k_,s[o])}function Db(r){switch(r){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return bb;case 5125:return Tb;case 36294:return wb;case 36295:return Eb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}var Td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fb(t.type)}},wd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Db(t.type)}},Ed=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},bd=/(\w+)(\])?(\[|\.)?/g;function E_(r,e){r.seq.push(e),r.map[e.id]=e}function Lb(r,e,t){let n=r.name,i=n.length;for(bd.lastIndex=0;;){let s=bd.exec(n),o=bd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){E_(t,c===void 0?new Td(a,r,e):new wd(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Ed(a),E_(t,h)),t=h}}}var Wo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Lb(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function A_(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Ub=37297,Nb=0;function Fb(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var C_=new je;function Ob(r){pt._getMatrix(C_,pt.workingColorSpace,r);let e=`mat3( ${C_.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(r)){case Fa:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function R_(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Fb(r.getShaderSource(e),a)}else return s}function Bb(r,e){let t=Ob(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kb(r,e){let t;switch(e){case Xg:t="Linear";break;case qg:t="Reinhard";break;case Yg:t="Cineon";break;case Zg:t="ACESFilmic";break;case $g:t="AgX";break;case Kg:t="Neutral";break;case Jg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gu=new W;function zb(){pt.getLuminanceCoefficients(Gu);let r=Gu.x.toFixed(4),e=Gu.y.toFixed(4),t=Gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function Hb(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gb(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ll(r){return r!==""}function P_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(r){return r.replace(Wb,qb)}var Xb=new Map;function qb(r,e){let t=rt[e];if(t===void 0){let n=Xb.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ad(t)}var Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(r){return r.replace(Yb,Zb)}function Zb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function L_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function $b(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kb(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ns&&(e="ENVMAP_MODE_REFRACTION"),e}function Qb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jf:e="ENVMAP_BLENDING_MULTIPLY";break;case Gg:e="ENVMAP_BLENDING_MIX";break;case Wg:e="ENVMAP_BLENDING_ADD";break}return e}function jb(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function e1(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Jb(t),c=$b(t),u=Kb(t),h=Qb(t),f=jb(t),d=Vb(t),_=Hb(s),g=i.createProgram(),p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ll).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ll).join(`
`),m.length>0&&(m+=`
`)):(p=[L_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),m=[L_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vr?"#define TONE_MAPPING":"",t.toneMapping!==vr?rt.tonemapping_pars_fragment:"",t.toneMapping!==vr?kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Bb("linearToOutputTexel",t.outputColorSpace),zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ll).join(`
`)),o=Ad(o),o=P_(o,t),o=I_(o,t),a=Ad(a),a=P_(a,t),a=I_(a,t),o=D_(o),a=D_(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=T+p+o,x=T+m+a,w=A_(i,i.VERTEX_SHADER,b),C=A_(i,i.FRAGMENT_SHADER,x);i.attachShader(g,w),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(I){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(w)||"",V=i.getShaderInfoLog(C)||"",X=D.trim(),H=z.trim(),Q=V.trim(),G=!0,ae=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,C);else{let U=R_(i,w,"vertex"),me=R_(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+U+`
`+me)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||Q==="")&&(ae=!1);ae&&(I.diagnostics={runnable:G,programLog:X,vertexShader:{log:H,prefix:p},fragmentShader:{log:Q,prefix:m}})}i.deleteShader(w),i.deleteShader(C),P=new Wo(i,g),M=Gb(i,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Ub)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}var t1=0,Cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rd(e),t.set(e,n)),n}},Rd=class{constructor(e){this.id=t1++,this.code=e,this.usedTimes=0}};function n1(r,e,t,n,i,s,o){let a=new za,l=new Cd,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,y,I,D,z){let V=D.fog,X=z.geometry,H=M.isMeshStandardMaterial?D.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),G=Q&&Q.mapping===nl?Q.image.height:null,ae=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let U=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,me=U!==void 0?U.length:0,Be=0;X.morphAttributes.position!==void 0&&(Be=1),X.morphAttributes.normal!==void 0&&(Be=2),X.morphAttributes.color!==void 0&&(Be=3);let Ke,He,Ge,j;if(ae){let Me=Yi[ae];Ke=Me.vertexShader,He=Me.fragmentShader}else Ke=M.vertexShader,He=M.fragmentShader,l.update(M),Ge=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);let te=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,Ee=z.isBatchedMesh===!0,We=!!M.map,ft=!!M.matcap,R=!!Q,Ze=!!M.aoMap,Fe=!!M.lightMap,Le=!!M.bumpMap,N=!!M.normalMap,et=!!M.displacementMap,Y=!!M.emissiveMap,F=!!M.metalnessMap,se=!!M.roughnessMap,xe=M.anisotropy>0,A=M.clearcoat>0,v=M.dispersion>0,O=M.iridescence>0,$=M.sheen>0,K=M.transmission>0,q=xe&&!!M.anisotropyMap,fe=A&&!!M.clearcoatMap,ie=A&&!!M.clearcoatNormalMap,ve=A&&!!M.clearcoatRoughnessMap,ne=O&&!!M.iridescenceMap,ue=O&&!!M.iridescenceThicknessMap,de=$&&!!M.sheenColorMap,Ue=$&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,pe=!!M.specularColorMap,Xe=!!M.specularIntensityMap,L=K&&!!M.transmissionMap,le=K&&!!M.thicknessMap,ce=!!M.gradientMap,he=!!M.alphaMap,re=M.alphaTest>0,ee=!!M.alphaHash,Te=!!M.extensions,De=vr;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(De=r.toneMapping);let at={shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:He,defines:M.defines,customVertexShaderID:Ge,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ps,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:ft,envMap:R,envMapMode:R&&Q.mapping,envMapCubeUVHeight:G,aoMap:Ze,lightMap:Fe,bumpMap:Le,normalMap:N,displacementMap:f&&et,emissiveMap:Y,normalMapObjectSpace:N&&M.normalMapType===t_,normalMapTangentSpace:N&&M.normalMapType===cd,metalnessMap:F,roughnessMap:se,anisotropy:xe,anisotropyMap:q,clearcoat:A,clearcoatMap:fe,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:v,iridescence:O,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:$,sheenColorMap:de,sheenRoughnessMap:Ue,specularMap:Ae,specularColorMap:pe,specularIntensityMap:Xe,transmission:K,transmissionMap:L,thicknessMap:le,gradientMap:ce,opaque:M.transparent===!1&&M.blending===Cs&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:re,alphaHash:ee,combine:M.combine,mapUv:We&&g(M.map.channel),aoMapUv:Ze&&g(M.aoMap.channel),lightMapUv:Fe&&g(M.lightMap.channel),bumpMapUv:Le&&g(M.bumpMap.channel),normalMapUv:N&&g(M.normalMap.channel),displacementMapUv:et&&g(M.displacementMap.channel),emissiveMapUv:Y&&g(M.emissiveMap.channel),metalnessMapUv:F&&g(M.metalnessMap.channel),roughnessMapUv:se&&g(M.roughnessMap.channel),anisotropyMapUv:q&&g(M.anisotropyMap.channel),clearcoatMapUv:fe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(M.sheenRoughnessMap.channel),specularMapUv:Ae&&g(M.specularMap.channel),specularColorMapUv:pe&&g(M.specularColorMap.channel),specularIntensityMapUv:Xe&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:le&&g(M.thicknessMap.channel),alphaMapUv:he&&g(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(N||xe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(We||he),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:De,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===yt,decodeVideoTextureEmissive:Y&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xi,flipSided:M.side===Nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Te&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function m(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)y.push(I),y.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(T(y,M),b(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let y=_[M.type],I;if(y){let D=Yi[y];I=f_.clone(D.uniforms)}else I=M.uniforms;return I}function w(M,y){let I;for(let D=0,z=u.length;D<z;D++){let V=u[D];if(V.cacheKey===y){I=V,++I.usedTimes;break}}return I===void 0&&(I=new e1(r,y,M,s),u.push(I)),I}function C(M){if(--M.usedTimes===0){let y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:C,releaseShaderCache:E,programs:u,dispose:P}}function i1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function r1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function U_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function N_(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){let m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){let m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||r1),n.length>1&&n.sort(f||U_),i.length>1&&i.sort(f||U_)}function u(){for(let h=e,f=r.length;h<f;h++){let d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function s1(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new N_,r.set(n,[o])):i>=s.length?(o=new N_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function o1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ht};break;case"SpotLight":t={position:new W,direction:new W,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function a1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var l1=0;function c1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function u1(r){let e=new o1,t=a1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let i=new W,s=new Xt,o=new Xt;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,T=0,b=0,x=0,w=0,C=0,E=0;c.sort(c1);for(let M=0,y=c.length;M<y;M++){let I=c[M],D=I.color,z=I.intensity,V=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=D.r*z,h+=D.g*z,f+=D.b*z;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],z);E++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,G=t.get(I);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=I.shadow.matrix,T++}n.directional[d]=H,d++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(D).multiplyScalar(z),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[g]=H;let Q=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,Q.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[g]=Q.matrix,I.castShadow){let G=t.get(I);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=X,x++}g++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(D).multiplyScalar(z),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=H,p++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let Q=I.shadow,G=t.get(I);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=I.shadow.matrix,b++}n.point[_]=H,_++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(z),H.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=H,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==T||P.numPointShadows!==b||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+w-C,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=T,P.numPointShadows=b,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=E,n.version=l1++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0,p=u.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){let b=c[m];if(b.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(b.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(b.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function F_(r){let e=new u1(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function h1(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new F_(r),e.set(i,[a])):s>=o.length?(a=new F_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p1(r,e,t){let n=new Fo,i=new mt,s=new mt,o=new Ft,a=new Oc({depthPacking:e_}),l=new Bc,c={},u=t.maxTextureSize,h={[dr]:Nn,[Nn]:dr,[Xi]:Xi},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:f1,fragmentShader:d1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new _r;_.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new yn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let m=this.type;this.render=function(C,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let M=r.getRenderTarget(),y=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(xr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=m!==Wi&&this.type===Wi,V=m===Wi&&this.type!==Wi;for(let X=0,H=C.length;X<H;X++){let Q=C[X],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let ae=G.getFrameExtents();if(i.multiply(ae),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ae.x),i.x=s.x*ae.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ae.y),i.y=s.y*ae.y,G.mapSize.y=s.y)),G.map===null||z===!0||V===!0){let me=this.type!==Wi?{minFilter:_i,magFilter:_i}:{};G.map!==null&&G.map.dispose(),G.map=new Gi(i.x,i.y,me),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let U=G.getViewportCount();for(let me=0;me<U;me++){let Be=G.getViewport(me);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),D.viewport(o),G.updateMatrices(Q,me),n=G.getFrustum(),x(E,P,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Wi&&T(G,P),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,y,I)};function T(C,E){let P=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gi(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,g,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(E,null,P,d,g,null)}function b(C,E,P,M){let y=null,I=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)y=I;else if(y=P.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=y.uuid,z=E.uuid,V=c[D];V===void 0&&(V={},c[D]=V);let X=V[z];X===void 0&&(X=y.clone(),V[z]=X,E.addEventListener("dispose",w)),y=X}if(y.visible=E.visible,y.wireframe=E.wireframe,M===Wi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=r.properties.get(y);D.light=P}return y}function x(C,E,P,M,y){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Wi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let z=e.update(C),V=C.material;if(Array.isArray(V)){let X=z.groups;for(let H=0,Q=X.length;H<Q;H++){let G=X[H],ae=V[G.materialIndex];if(ae&&ae.visible){let U=b(C,ae,M,y);C.onBeforeShadow(r,C,E,P,z,U,G),r.renderBufferDirect(P,null,z,U,C,G),C.onAfterShadow(r,C,E,P,z,U,G)}}}else if(V.visible){let X=b(C,V,M,y);C.onBeforeShadow(r,C,E,P,z,X,null),r.renderBufferDirect(P,null,z,X,C,null),C.onAfterShadow(r,C,E,P,z,X,null)}}let D=C.children;for(let z=0,V=D.length;z<V;z++)x(D[z],E,P,M,y)}function w(C){C.target.removeEventListener("dispose",w);for(let P in c){let M=c[P],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var m1={[$c]:Kc,[Qc]:tu,[jc]:nu,[Rs]:eu,[Kc]:$c,[tu]:Qc,[nu]:jc,[eu]:Rs};function g1(r,e){function t(){let L=!1,le=new Ft,ce=null,he=new Ft(0,0,0,0);return{setMask:function(re){ce!==re&&!L&&(r.colorMask(re,re,re,re),ce=re)},setLocked:function(re){L=re},setClear:function(re,ee,Te,De,at){at===!0&&(re*=De,ee*=De,Te*=De),le.set(re,ee,Te,De),he.equals(le)===!1&&(r.clearColor(re,ee,Te,De),he.copy(le))},reset:function(){L=!1,ce=null,he.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,ce=null,he=null,re=null;return{setReversed:function(ee){if(le!==ee){let Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),le=ee;let De=re;re=null,this.setClear(De)}},getReversed:function(){return le},setTest:function(ee){ee?te(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(ee){ce!==ee&&!L&&(r.depthMask(ee),ce=ee)},setFunc:function(ee){if(le&&(ee=m1[ee]),he!==ee){switch(ee){case $c:r.depthFunc(r.NEVER);break;case Kc:r.depthFunc(r.ALWAYS);break;case Qc:r.depthFunc(r.LESS);break;case Rs:r.depthFunc(r.LEQUAL);break;case jc:r.depthFunc(r.EQUAL);break;case eu:r.depthFunc(r.GEQUAL);break;case tu:r.depthFunc(r.GREATER);break;case nu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=ee}},setLocked:function(ee){L=ee},setClear:function(ee){re!==ee&&(le&&(ee=1-ee),r.clearDepth(ee),re=ee)},reset:function(){L=!1,ce=null,he=null,re=null,le=!1}}}function i(){let L=!1,le=null,ce=null,he=null,re=null,ee=null,Te=null,De=null,at=null;return{setTest:function(Me){L||(Me?te(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(Me){le!==Me&&!L&&(r.stencilMask(Me),le=Me)},setFunc:function(Me,Ne,Qe){(ce!==Me||he!==Ne||re!==Qe)&&(r.stencilFunc(Me,Ne,Qe),ce=Me,he=Ne,re=Qe)},setOp:function(Me,Ne,Qe){(ee!==Me||Te!==Ne||De!==Qe)&&(r.stencilOp(Me,Ne,Qe),ee=Me,Te=Ne,De=Qe)},setLocked:function(Me){L=Me},setClear:function(Me){at!==Me&&(r.clearStencil(Me),at=Me)},reset:function(){L=!1,le=null,ce=null,he=null,re=null,ee=null,Te=null,De=null,at=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,T=null,b=null,x=null,w=null,C=null,E=new ht(0,0,0),P=0,M=!1,y=null,I=null,D=null,z=null,V=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=Q>=2);let ae=null,U={},me=r.getParameter(r.SCISSOR_BOX),Be=r.getParameter(r.VIEWPORT),Ke=new Ft().fromArray(me),He=new Ft().fromArray(Be);function Ge(L,le,ce,he){let re=new Uint8Array(4),ee=r.createTexture();r.bindTexture(L,ee),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Te=0;Te<ce;Te++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(le+Te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return ee}let j={};j[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(r.DEPTH_TEST),o.setFunc(Rs),Le(!1),N(Zf),te(r.CULL_FACE),Ze(xr);function te(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function _e(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Ie(L,le){return h[L]!==le?(r.bindFramebuffer(L,le),h[L]=le,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=le),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(L,le){let ce=d,he=!1;if(L){ce=f.get(le),ce===void 0&&(ce=[],f.set(le,ce));let re=L.textures;if(ce.length!==re.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,Te=re.length;ee<Te;ee++)ce[ee]=r.COLOR_ATTACHMENT0+ee;ce.length=re.length,he=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,he=!0);he&&r.drawBuffers(ce)}function We(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let ft={[Gr]:r.FUNC_ADD,[Eg]:r.FUNC_SUBTRACT,[Ag]:r.FUNC_REVERSE_SUBTRACT};ft[Cg]=r.MIN,ft[Rg]=r.MAX;let R={[Pg]:r.ZERO,[Ig]:r.ONE,[Dg]:r.SRC_COLOR,[Ec]:r.SRC_ALPHA,[Bg]:r.SRC_ALPHA_SATURATE,[Fg]:r.DST_COLOR,[Ug]:r.DST_ALPHA,[Lg]:r.ONE_MINUS_SRC_COLOR,[Ac]:r.ONE_MINUS_SRC_ALPHA,[Og]:r.ONE_MINUS_DST_COLOR,[Ng]:r.ONE_MINUS_DST_ALPHA,[kg]:r.CONSTANT_COLOR,[zg]:r.ONE_MINUS_CONSTANT_COLOR,[Vg]:r.CONSTANT_ALPHA,[Hg]:r.ONE_MINUS_CONSTANT_ALPHA};function Ze(L,le,ce,he,re,ee,Te,De,at,Me){if(L===xr){g===!0&&(_e(r.BLEND),g=!1);return}if(g===!1&&(te(r.BLEND),g=!0),L!==wg){if(L!==p||Me!==M){if((m!==Gr||x!==Gr)&&(r.blendEquation(r.FUNC_ADD),m=Gr,x=Gr),Me)switch(L){case Cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $f:r.blendFunc(r.ONE,r.ONE);break;case Kf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $f:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,b=null,w=null,C=null,E.set(0,0,0),P=0,p=L,M=Me}return}re=re||le,ee=ee||ce,Te=Te||he,(le!==m||re!==x)&&(r.blendEquationSeparate(ft[le],ft[re]),m=le,x=re),(ce!==T||he!==b||ee!==w||Te!==C)&&(r.blendFuncSeparate(R[ce],R[he],R[ee],R[Te]),T=ce,b=he,w=ee,C=Te),(De.equals(E)===!1||at!==P)&&(r.blendColor(De.r,De.g,De.b,at),E.copy(De),P=at),p=L,M=!1}function Fe(L,le){L.side===Xi?_e(r.CULL_FACE):te(r.CULL_FACE);let ce=L.side===Nn;le&&(ce=!ce),Le(ce),L.blending===Cs&&L.transparent===!1?Ze(xr):Ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let he=L.stencilWrite;a.setTest(he),he&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Y(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function Le(L){y!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),y=L)}function N(L){L!==bg?(te(r.CULL_FACE),L!==I&&(L===Zf?r.cullFace(r.BACK):L===Tg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),I=L}function et(L){L!==D&&(H&&r.lineWidth(L),D=L)}function Y(L,le,ce){L?(te(r.POLYGON_OFFSET_FILL),(z!==le||V!==ce)&&(r.polygonOffset(le,ce),z=le,V=ce)):_e(r.POLYGON_OFFSET_FILL)}function F(L){L?te(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function se(L){L===void 0&&(L=r.TEXTURE0+X-1),ae!==L&&(r.activeTexture(L),ae=L)}function xe(L,le,ce){ce===void 0&&(ae===null?ce=r.TEXTURE0+X-1:ce=ae);let he=U[ce];he===void 0&&(he={type:void 0,texture:void 0},U[ce]=he),(he.type!==L||he.texture!==le)&&(ae!==ce&&(r.activeTexture(ce),ae=ce),r.bindTexture(L,le||j[L]),he.type=L,he.texture=le)}function A(){let L=U[ae];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){Ke.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ke.copy(L))}function Ue(L){He.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),He.copy(L))}function Ae(L,le){let ce=c.get(le);ce===void 0&&(ce=new WeakMap,c.set(le,ce));let he=ce.get(L);he===void 0&&(he=r.getUniformBlockIndex(le,L.name),ce.set(L,he))}function pe(L,le){let he=c.get(le).get(L);l.get(le)!==he&&(r.uniformBlockBinding(le,he,L.__bindingPointIndex),l.set(le,he))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ae=null,U={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,T=null,b=null,x=null,w=null,C=null,E=new ht(0,0,0),P=0,M=!1,y=null,I=null,D=null,z=null,V=null,Ke.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:_e,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:We,setBlending:Ze,setMaterial:Fe,setFlipSided:Le,setCullFace:N,setLineWidth:et,setPolygonOffset:Y,setScissorTest:F,activeTexture:se,bindTexture:xe,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:ne,texImage3D:ue,updateUBOMapping:Ae,uniformBlockBinding:pe,texStorage2D:ie,texStorage3D:ve,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:fe,scissor:de,viewport:Ue,reset:Xe}}function _1(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return d?new OffscreenCanvas(A,v):Ba("canvas")}function g(A,v,O){let $=1,K=xe(A);if((K.width>O||K.height>O)&&($=O/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor($*K.width),fe=Math.floor($*K.height);h===void 0&&(h=_(q,fe));let ie=v?_(q,fe):h;return ie.width=q,ie.height=fe,ie.getContext("2d").drawImage(A,0,0,q,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+fe+")."),ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function m(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(A,v,O,$,K=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=v;if(v===r.RED&&(O===r.FLOAT&&(q=r.R32F),O===r.HALF_FLOAT&&(q=r.R16F),O===r.UNSIGNED_BYTE&&(q=r.R8)),v===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.R8UI),O===r.UNSIGNED_SHORT&&(q=r.R16UI),O===r.UNSIGNED_INT&&(q=r.R32UI),O===r.BYTE&&(q=r.R8I),O===r.SHORT&&(q=r.R16I),O===r.INT&&(q=r.R32I)),v===r.RG&&(O===r.FLOAT&&(q=r.RG32F),O===r.HALF_FLOAT&&(q=r.RG16F),O===r.UNSIGNED_BYTE&&(q=r.RG8)),v===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RG8UI),O===r.UNSIGNED_SHORT&&(q=r.RG16UI),O===r.UNSIGNED_INT&&(q=r.RG32UI),O===r.BYTE&&(q=r.RG8I),O===r.SHORT&&(q=r.RG16I),O===r.INT&&(q=r.RG32I)),v===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RGB8UI),O===r.UNSIGNED_SHORT&&(q=r.RGB16UI),O===r.UNSIGNED_INT&&(q=r.RGB32UI),O===r.BYTE&&(q=r.RGB8I),O===r.SHORT&&(q=r.RGB16I),O===r.INT&&(q=r.RGB32I)),v===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),O===r.UNSIGNED_INT&&(q=r.RGBA32UI),O===r.BYTE&&(q=r.RGBA8I),O===r.SHORT&&(q=r.RGBA16I),O===r.INT&&(q=r.RGBA32I)),v===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),v===r.RGBA){let fe=K?Fa:pt.getTransfer($);O===r.FLOAT&&(q=r.RGBA32F),O===r.HALF_FLOAT&&(q=r.RGBA16F),O===r.UNSIGNED_BYTE&&(q=fe===yt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(A,v){let O;return A?v===null||v===Jr||v===ko?O=r.DEPTH24_STENCIL8:v===qi?O=r.DEPTH32F_STENCIL8:v===Oo&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Jr||v===ko?O=r.DEPTH_COMPONENT24:v===qi?O=r.DEPTH_COMPONENT32F:v===Oo&&(O=r.DEPTH_COMPONENT16),O}function w(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==_i&&A.minFilter!==Ai?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){let v=A.target;v.removeEventListener("dispose",C),P(v),v.isVideoTexture&&u.delete(v)}function E(A){let v=A.target;v.removeEventListener("dispose",E),y(v)}function P(A){let v=n.get(A);if(v.__webglInit===void 0)return;let O=A.source,$=f.get(O);if($){let K=$[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(A),Object.keys($).length===0&&f.delete(O)}n.remove(A)}function M(A){let v=n.get(A);r.deleteTexture(v.__webglTexture);let O=A.source,$=f.get(O);delete $[v.__cacheKey],o.memory.textures--}function y(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let K=0;K<v.__webglFramebuffer[$].length;K++)r.deleteFramebuffer(v.__webglFramebuffer[$][K]);else r.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)r.deleteFramebuffer(v.__webglFramebuffer[$]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=A.textures;for(let $=0,K=O.length;$<K;$++){let q=n.get(O[$]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(A)}let I=0;function D(){I=0}function z(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function V(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function X(A,v){let O=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,A,v);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+v)}function H(A,v){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){j(O,A,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+v)}function Q(A,v){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){j(O,A,v);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+v)}function G(A,v){let O=n.get(A);if(A.version>0&&O.__version!==A.version){te(O,A,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+v)}let ae={[Cc]:r.REPEAT,[Hr]:r.CLAMP_TO_EDGE,[Rc]:r.MIRRORED_REPEAT},U={[_i]:r.NEAREST,[Qg]:r.NEAREST_MIPMAP_NEAREST,[il]:r.NEAREST_MIPMAP_LINEAR,[Ai]:r.LINEAR,[su]:r.LINEAR_MIPMAP_NEAREST,[Zr]:r.LINEAR_MIPMAP_LINEAR},me={[n_]:r.NEVER,[l_]:r.ALWAYS,[i_]:r.LESS,[ud]:r.LEQUAL,[r_]:r.EQUAL,[a_]:r.GEQUAL,[s_]:r.GREATER,[o_]:r.NOTEQUAL};function Be(A,v){if(v.type===qi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ai||v.magFilter===su||v.magFilter===il||v.magFilter===Zr||v.minFilter===Ai||v.minFilter===su||v.minFilter===il||v.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ae[v.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ae[v.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ae[v.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,U[v.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,U[v.minFilter]),v.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===_i||v.minFilter!==il&&v.minFilter!==Zr||v.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(A,v){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));let $=v.source,K=f.get($);K===void 0&&(K={},f.set($,K));let q=V(v);if(q!==A.__cacheKey){K[q]===void 0&&(K[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[q].usedTimes++;let fe=K[A.__cacheKey];fe!==void 0&&(K[A.__cacheKey].usedTimes--,fe.usedTimes===0&&M(v)),A.__cacheKey=q,A.__webglTexture=K[q].texture}return O}function He(A,v,O){return Math.floor(Math.floor(A/O)/v)}function Ge(A,v,O,$){let q=A.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,O,$,v.data);else{q.sort((ue,de)=>ue.start-de.start);let fe=0;for(let ue=1;ue<q.length;ue++){let de=q[fe],Ue=q[ue],Ae=de.start+de.count,pe=He(Ue.start,v.width,4),Xe=He(de.start,v.width,4);Ue.start<=Ae+1&&pe===Xe&&He(Ue.start+Ue.count-1,v.width,4)===pe?de.count=Math.max(de.count,Ue.start+Ue.count-de.start):(++fe,q[fe]=Ue)}q.length=fe+1;let ie=r.getParameter(r.UNPACK_ROW_LENGTH),ve=r.getParameter(r.UNPACK_SKIP_PIXELS),ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let ue=0,de=q.length;ue<de;ue++){let Ue=q[ue],Ae=Math.floor(Ue.start/4),pe=Math.ceil(Ue.count/4),Xe=Ae%v.width,L=Math.floor(Ae/v.width),le=pe,ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Xe,L,le,ce,O,$,v.data)}A.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ie),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function j(A,v,O){let $=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=r.TEXTURE_3D);let K=Ke(A,v),q=v.source;t.bindTexture($,A.__webglTexture,r.TEXTURE0+O);let fe=n.get(q);if(q.version!==fe.__version||K===!0){t.activeTexture(r.TEXTURE0+O);let ie=pt.getPrimaries(pt.workingColorSpace),ve=v.colorSpace===yr?null:pt.getPrimaries(v.colorSpace),ne=v.colorSpace===yr||ie===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ue=g(v.image,!1,i.maxTextureSize);ue=se(v,ue);let de=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type),Ae=b(v.internalFormat,de,Ue,v.colorSpace,v.isVideoTexture);Be($,v);let pe,Xe=v.mipmaps,L=v.isVideoTexture!==!0,le=fe.__version===void 0||K===!0,ce=q.dataReady,he=w(v,ue);if(v.isDepthTexture)Ae=x(v.format===zo,v.type),le&&(L?t.texStorage2D(r.TEXTURE_2D,1,Ae,ue.width,ue.height):t.texImage2D(r.TEXTURE_2D,0,Ae,ue.width,ue.height,0,de,Ue,null));else if(v.isDataTexture)if(Xe.length>0){L&&le&&t.texStorage2D(r.TEXTURE_2D,he,Ae,Xe[0].width,Xe[0].height);for(let re=0,ee=Xe.length;re<ee;re++)pe=Xe[re],L?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,de,Ue,pe.data):t.texImage2D(r.TEXTURE_2D,re,Ae,pe.width,pe.height,0,de,Ue,pe.data);v.generateMipmaps=!1}else L?(le&&t.texStorage2D(r.TEXTURE_2D,he,Ae,ue.width,ue.height),ce&&Ge(v,ue,de,Ue)):t.texImage2D(r.TEXTURE_2D,0,Ae,ue.width,ue.height,0,de,Ue,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Ae,Xe[0].width,Xe[0].height,ue.depth);for(let re=0,ee=Xe.length;re<ee;re++)if(pe=Xe[re],v.format!==xi)if(de!==null)if(L){if(ce)if(v.layerUpdates.size>0){let Te=_d(pe.width,pe.height,v.format,v.type);for(let De of v.layerUpdates){let at=pe.data.subarray(De*Te/pe.data.BYTES_PER_ELEMENT,(De+1)*Te/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,De,pe.width,pe.height,1,de,at)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ue.depth,de,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ae,pe.width,pe.height,ue.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ue.depth,de,Ue,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ae,pe.width,pe.height,ue.depth,0,de,Ue,pe.data)}else{L&&le&&t.texStorage2D(r.TEXTURE_2D,he,Ae,Xe[0].width,Xe[0].height);for(let re=0,ee=Xe.length;re<ee;re++)pe=Xe[re],v.format!==xi?de!==null?L?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,de,Ue,pe.data):t.texImage2D(r.TEXTURE_2D,re,Ae,pe.width,pe.height,0,de,Ue,pe.data)}else if(v.isDataArrayTexture)if(L){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Ae,ue.width,ue.height,ue.depth),ce)if(v.layerUpdates.size>0){let re=_d(ue.width,ue.height,v.format,v.type);for(let ee of v.layerUpdates){let Te=ue.data.subarray(ee*re/ue.data.BYTES_PER_ELEMENT,(ee+1)*re/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,ue.width,ue.height,1,de,Ue,Te)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,de,Ue,ue.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,ue.width,ue.height,ue.depth,0,de,Ue,ue.data);else if(v.isData3DTexture)L?(le&&t.texStorage3D(r.TEXTURE_3D,he,Ae,ue.width,ue.height,ue.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,de,Ue,ue.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,ue.width,ue.height,ue.depth,0,de,Ue,ue.data);else if(v.isFramebufferTexture){if(le)if(L)t.texStorage2D(r.TEXTURE_2D,he,Ae,ue.width,ue.height);else{let re=ue.width,ee=ue.height;for(let Te=0;Te<he;Te++)t.texImage2D(r.TEXTURE_2D,Te,Ae,re,ee,0,de,Ue,null),re>>=1,ee>>=1}}else if(Xe.length>0){if(L&&le){let re=xe(Xe[0]);t.texStorage2D(r.TEXTURE_2D,he,Ae,re.width,re.height)}for(let re=0,ee=Xe.length;re<ee;re++)pe=Xe[re],L?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,de,Ue,pe):t.texImage2D(r.TEXTURE_2D,re,Ae,de,Ue,pe);v.generateMipmaps=!1}else if(L){if(le){let re=xe(ue);t.texStorage2D(r.TEXTURE_2D,he,Ae,re.width,re.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Ue,ue)}else t.texImage2D(r.TEXTURE_2D,0,Ae,de,Ue,ue);p(v)&&m($),fe.__version=q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function te(A,v,O){if(v.image.length!==6)return;let $=Ke(A,v),K=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+O);let q=n.get(K);if(K.version!==q.__version||$===!0){t.activeTexture(r.TEXTURE0+O);let fe=pt.getPrimaries(pt.workingColorSpace),ie=v.colorSpace===yr?null:pt.getPrimaries(v.colorSpace),ve=v.colorSpace===yr||fe===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ne=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!ne&&!ue?de[ee]=g(v.image[ee],!0,i.maxCubemapSize):de[ee]=ue?v.image[ee].image:v.image[ee],de[ee]=se(v,de[ee]);let Ue=de[0],Ae=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),Xe=b(v.internalFormat,Ae,pe,v.colorSpace),L=v.isVideoTexture!==!0,le=q.__version===void 0||$===!0,ce=K.dataReady,he=w(v,Ue);Be(r.TEXTURE_CUBE_MAP,v);let re;if(ne){L&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Xe,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){re=de[ee].mipmaps;for(let Te=0;Te<re.length;Te++){let De=re[Te];v.format!==xi?Ae!==null?L?ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,De.width,De.height,Ae,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,De.width,De.height,Ae,pe,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Xe,De.width,De.height,0,Ae,pe,De.data)}}}else{if(re=v.mipmaps,L&&le){re.length>0&&he++;let ee=xe(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ue){L?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Ae,pe,de[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,de[ee].width,de[ee].height,0,Ae,pe,de[ee].data);for(let Te=0;Te<re.length;Te++){let at=re[Te].image[ee].image;L?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,at.width,at.height,Ae,pe,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Xe,at.width,at.height,0,Ae,pe,at.data)}}else{L?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ae,pe,de[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,Ae,pe,de[ee]);for(let Te=0;Te<re.length;Te++){let De=re[Te];L?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Ae,pe,De.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Xe,Ae,pe,De.image[ee])}}}p(v)&&m(r.TEXTURE_CUBE_MAP),q.__version=K.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function _e(A,v,O,$,K,q){let fe=s.convert(O.format,O.colorSpace),ie=s.convert(O.type),ve=b(O.internalFormat,fe,ie,O.colorSpace),ne=n.get(v),ue=n.get(O);if(ue.__renderTarget=v,!ne.__hasExternalTextures){let de=Math.max(1,v.width>>q),Ue=Math.max(1,v.height>>q);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,q,ve,de,Ue,v.depth,0,fe,ie,null):t.texImage2D(K,q,ve,de,Ue,0,fe,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),Y(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,K,ue.__webglTexture,0,et(v)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,K,ue.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(A,v,O){if(r.bindRenderbuffer(r.RENDERBUFFER,A),v.depthBuffer){let $=v.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=x(v.stencilBuffer,K),fe=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=et(v);Y(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,q,v.width,v.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,q,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,A)}else{let $=v.textures;for(let K=0;K<$.length;K++){let q=$[K],fe=s.convert(q.format,q.colorSpace),ie=s.convert(q.type),ve=b(q.internalFormat,fe,ie,q.colorSpace),ne=et(v);O&&Y(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,ve,v.width,v.height):Y(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,ve,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ve,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let K=$.__webglTexture,q=et(v);if(v.depthTexture.format===Po)Y(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(v.depthTexture.format===zo)Y(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function We(A){let v=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=$}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let $=A.texture.mipmaps;$&&$.length>0?Ee(v.__webglFramebuffer[0],A):Ee(v.__webglFramebuffer,A)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=r.createRenderbuffer(),Ie(v.__webglDepthbuffer[$],A,!1);else{let K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,q)}}else{let $=A.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ie(v.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(A,v,O){let $=n.get(A);v!==void 0&&_e($.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&We(A)}function R(A){let v=A.texture,O=n.get(A),$=n.get(v);A.addEventListener("dispose",E);let K=A.textures,q=A.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=v.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let ve=0;ve<v.mipmaps.length;ve++)O.__webglFramebuffer[ie][ve]=r.createFramebuffer()}else O.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)O.__webglFramebuffer[ie]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(fe)for(let ie=0,ve=K.length;ie<ve;ie++){let ne=n.get(K[ie]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&Y(A)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){let ve=K[ie];O.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);let ne=s.convert(ve.format,ve.colorSpace),ue=s.convert(ve.type),de=b(ve.internalFormat,ne,ue,ve.colorSpace,A.isXRRenderTarget===!0),Ue=et(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,de,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Be(r.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)_e(O.__webglFramebuffer[ie][ve],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else _e(O.__webglFramebuffer[ie],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(v)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ie=0,ve=K.length;ie<ve;ie++){let ne=K[ie],ue=n.get(ne),de=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,ue.__webglTexture),Be(de,ne),_e(O.__webglFramebuffer,A,ne,r.COLOR_ATTACHMENT0+ie,de,0),p(ne)&&m(de)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),Be(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)_e(O.__webglFramebuffer[ve],A,v,r.COLOR_ATTACHMENT0,ie,ve);else _e(O.__webglFramebuffer,A,v,r.COLOR_ATTACHMENT0,ie,0);p(v)&&m(ie),t.unbindTexture()}A.depthBuffer&&We(A)}function Ze(A){let v=A.textures;for(let O=0,$=v.length;O<$;O++){let K=v[O];if(p(K)){let q=T(A),fe=n.get(K).__webglTexture;t.bindTexture(q,fe),m(q),t.unbindTexture()}}}let Fe=[],Le=[];function N(A){if(A.samples>0){if(Y(A)===!1){let v=A.textures,O=A.width,$=A.height,K=r.COLOR_BUFFER_BIT,q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(A),ie=v.length>1;if(ie)for(let ne=0;ne<v.length;ne++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ve=A.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ne=0;ne<v.length;ne++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ne]);let ue=n.get(v[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,O,$,0,0,O,$,K,r.NEAREST),l===!0&&(Fe.length=0,Le.length=0,Fe.push(r.COLOR_ATTACHMENT0+ne),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Fe.push(q),Le.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let ne=0;ne<v.length;ne++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ne]);let ue=n.get(v[ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function et(A){return Math.min(i.maxSamples,A.samples)}function Y(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(A){let v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function se(A,v){let O=A.colorSpace,$=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ps&&O!==yr&&(pt.getTransfer(O)===yt?($!==xi||K!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=ft,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Y}function x1(r,e){function t(n,i=yr){let s,o=pt.getTransfer(i);if(n===Pi)return r.UNSIGNED_BYTE;if(n===au)return r.UNSIGNED_SHORT_4_4_4_4;if(n===lu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===id)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===rd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===td)return r.BYTE;if(n===nd)return r.SHORT;if(n===Oo)return r.UNSIGNED_SHORT;if(n===ou)return r.INT;if(n===Jr)return r.UNSIGNED_INT;if(n===qi)return r.FLOAT;if(n===Bo)return r.HALF_FLOAT;if(n===sd)return r.ALPHA;if(n===od)return r.RGB;if(n===xi)return r.RGBA;if(n===Po)return r.DEPTH_COMPONENT;if(n===zo)return r.DEPTH_STENCIL;if(n===ad)return r.RED;if(n===cu)return r.RED_INTEGER;if(n===ld)return r.RG;if(n===uu)return r.RG_INTEGER;if(n===hu)return r.RGBA_INTEGER;if(n===rl||n===sl||n===ol||n===al)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fu||n===du||n===pu||n===mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===_u||n===xu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gu||n===_u)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vu||n===yu||n===Mu||n===Su||n===bu||n===Tu||n===wu||n===Eu||n===Au||n===Cu||n===Ru||n===Pu||n===Iu||n===Du)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Su)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Au)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ru)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Iu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Du)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lu||n===Uu||n===Nu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Lu)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fu||n===Ou||n===Bu||n===ku)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ou)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ku)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ko?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ri({vertexShader:v1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Id=class extends pr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null,g=typeof XRWebGLBinding<"u",p=new Pd,m={},T=t.getContextAttributes(),b=null,x=null,w=[],C=[],E=new mt,P=null,M=new Hn;M.viewport=new Ft;let y=new Hn;y.viewport=new Ft;let I=[M,y],D=new Zc,z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=w[j];return te===void 0&&(te=new No,w[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=w[j];return te===void 0&&(te=new No,w[j]=te),te.getGripSpace()},this.getHand=function(j){let te=w[j];return te===void 0&&(te=new No,w[j]=te),te.getHandSpace()};function X(j){let te=C.indexOf(j.inputSource);if(te===-1)return;let _e=w[te];_e!==void 0&&(_e.update(j.inputSource,j.frame,c||o),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Q);for(let j=0;j<w.length;j++){let te=C[j];te!==null&&(C[j]=null,w[j].disconnect(te))}z=null,V=null,p.reset();for(let j in m)delete m[j];e.setRenderTarget(b),d=null,f=null,h=null,i=null,x=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ie=null,Ee=null;T.depth&&(Ee=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?zo:Po,Ie=T.stencil?ko:Jr);let We={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(We),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Gi(f.textureWidth,f.textureHeight,{format:xi,type:Pi,depthTexture:new Ya(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Gi(d.framebufferWidth,d.framebufferHeight,{format:xi,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(j){for(let te=0;te<j.removed.length;te++){let _e=j.removed[te],Ie=C.indexOf(_e);Ie>=0&&(C[Ie]=null,w[Ie].disconnect(_e))}for(let te=0;te<j.added.length;te++){let _e=j.added[te],Ie=C.indexOf(_e);if(Ie===-1){for(let We=0;We<w.length;We++)if(We>=C.length){C.push(_e),Ie=We;break}else if(C[We]===null){C[We]=_e,Ie=We;break}if(Ie===-1)break}let Ee=w[Ie];Ee&&Ee.connect(_e)}}let G=new W,ae=new W;function U(j,te,_e){G.setFromMatrixPosition(te.matrixWorld),ae.setFromMatrixPosition(_e.matrixWorld);let Ie=G.distanceTo(ae),Ee=te.projectionMatrix.elements,We=_e.projectionMatrix.elements,ft=Ee[14]/(Ee[10]-1),R=Ee[14]/(Ee[10]+1),Ze=(Ee[9]+1)/Ee[5],Fe=(Ee[9]-1)/Ee[5],Le=(Ee[8]-1)/Ee[0],N=(We[8]+1)/We[0],et=ft*Le,Y=ft*N,F=Ie/(-Le+N),se=F*-Le;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(se),j.translateZ(F),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let xe=ft+F,A=R+F,v=et-se,O=Y+(Ie-se),$=Ze*R/A*xe,K=Fe*R/A*xe;j.projectionMatrix.makePerspective(v,O,$,K,xe,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function me(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let te=j.near,_e=j.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),D.near=y.near=M.near=te,D.far=y.far=M.far=_e,(z!==D.near||V!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,V=D.far),D.layers.mask=j.layers.mask|6,M.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;let Ie=j.parent,Ee=D.cameras;me(D,Ie);for(let We=0;We<Ee.length;We++)me(Ee[We],Ie);Ee.length===2?U(D,M,y):D.projectionMatrix.copy(M.projectionMatrix),Be(j,D,Ie)};function Be(j,te,_e){_e===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Io*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(j){return m[j]};let Ke=null;function He(j,te){if(u=te.getViewerPose(c||o),_=te,u!==null){let _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ie=!1;_e.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let R=0;R<_e.length;R++){let Ze=_e[R],Fe=null;if(d!==null)Fe=d.getViewport(Ze);else{let N=h.getViewSubImage(f,Ze);Fe=N.viewport,R===0&&(e.setRenderTargetTextures(x,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(x))}let Le=I[R];Le===void 0&&(Le=new Hn,Le.layers.enable(R),Le.viewport=new Ft,I[R]=Le),Le.matrix.fromArray(Ze.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Ze.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),R===0&&(D.matrix.copy(Le.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push(Le)}let Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let R=h.getDepthInformation(_e[0]);R&&R.isValid&&R.texture&&p.init(R,i.renderState)}if(Ee&&Ee.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let R=0;R<_e.length;R++){let Ze=_e[R].camera;if(Ze){let Fe=m[Ze];Fe||(Fe=new Za,m[Ze]=Fe);let Le=h.getCameraImage(Ze);Fe.sourceTexture=Le}}}}for(let _e=0;_e<w.length;_e++){let Ie=C[_e],Ee=w[_e];Ie!==null&&Ee!==void 0&&Ee.update(Ie,te,c||o)}Ke&&Ke(j,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}let Ge=new O_;Ge.setAnimationLoop(He),this.setAnimationLoop=function(j){Ke=j},this.dispose=function(){}}},Bs=new Ci,M1=new Xt;function S1(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,pd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,T,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,T,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=e.get(m),b=T.envMap,x=T.envMapRotation;b&&(p.envMap.value=b,Bs.copy(x),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),p.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(Bs)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){let T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b1(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){let x=b.program;n.uniformBlockBinding(T,x)}function c(T,b){let x=i[T.id];x===void 0&&(_(T),x=u(T),i[T.id]=x,T.addEventListener("dispose",p));let w=b.program;n.updateUBOMapping(T,w);let C=e.render.frame;s[T.id]!==C&&(f(T),s[T.id]=C)}function u(T){let b=h();T.__bindingPointIndex=b;let x=r.createBuffer(),w=T.__size,C=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let b=i[T.id],x=T.uniforms,w=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let C=0,E=x.length;C<E;C++){let P=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,y=P.length;M<y;M++){let I=P[M];if(d(I,C,M,w)===!0){let D=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],V=0;for(let X=0;X<z.length;X++){let H=z[X],Q=g(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,D+V,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(T,b,x,w){let C=T.value,E=b+"_"+x;if(w[E]===void 0)return typeof C=="number"||typeof C=="boolean"?w[E]=C:w[E]=C.clone(),!0;{let P=w[E];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return w[E]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(T){let b=T.uniforms,x=0,w=16;for(let E=0,P=b.length;E<P;E++){let M=Array.isArray(b[E])?b[E]:[b[E]];for(let y=0,I=M.length;y<I;y++){let D=M[y],z=Array.isArray(D.value)?D.value:[D.value];for(let V=0,X=z.length;V<X;V++){let H=z[V],Q=g(H),G=x%w,ae=G%Q.boundary,U=G+ae;x+=ae,U!==0&&w-U<Q.storage&&(x+=w-U),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=Q.storage}}}let C=x%w;return C>0&&(x+=w-C),T.__size=x,T.__cache={},this}function g(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function p(T){let b=T.target;b.removeEventListener("dispose",p);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function m(){for(let T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var Xu=class{constructor(e={}){let{canvas:t=c_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),g=new Int32Array(4),p=null,m=null,T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=Ln;let C=0,E=0,P=null,M=-1,y=null,I=new Ft,D=new Ft,z=null,V=new ht(0),X=0,H=t.width,Q=t.height,G=1,ae=null,U=null,me=new Ft(0,0,H,Q),Be=new Ft(0,0,H,Q),Ke=!1,He=new Fo,Ge=!1,j=!1,te=new Xt,_e=new W,Ie=new Ft,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function ft(){return P===null?G:1}let R=n;function Ze(S,B){return t.getContext(S,B)}try{let S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",re,!1),R===null){let B="webgl2";if(R=Ze(B,S),R===null)throw Ze(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Fe,Le,N,et,Y,F,se,xe,A,v,O,$,K,q,fe,ie,ve,ne,ue,de,Ue,Ae,pe,Xe;function L(){Fe=new VS(R),Fe.init(),Ae=new x1(R,Fe),Le=new US(R,Fe,e,Ae),N=new g1(R,Fe),Le.reversedDepthBuffer&&f&&N.buffers.depth.setReversed(!0),et=new WS(R),Y=new i1,F=new _1(R,Fe,N,Y,Le,Ae,et),se=new FS(x),xe=new zS(x),A=new $v(R),pe=new DS(R,A),v=new HS(R,A,et,pe),O=new qS(R,v,A,et),ue=new XS(R,Le,F),ie=new NS(Y),$=new n1(x,se,xe,Fe,Le,pe,ie),K=new S1(x,Y),q=new s1,fe=new h1(Fe),ne=new IS(x,se,xe,N,O,d,l),ve=new p1(x,O,Le),Xe=new b1(R,et,Le,N),de=new LS(R,Fe,et),Ue=new GS(R,Fe,et),et.programs=$.programs,x.capabilities=Le,x.extensions=Fe,x.properties=Y,x.renderLists=q,x.shadowMap=ve,x.state=N,x.info=et}L();let le=new Id(x,R);this.xr=le,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let S=Fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(H,Q,!1))},this.getSize=function(S){return S.set(H,Q)},this.setSize=function(S,B,Z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,Q=B,t.width=Math.floor(S*G),t.height=Math.floor(B*G),Z===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(H*G,Q*G).floor()},this.setDrawingBufferSize=function(S,B,Z){H=S,Q=B,G=Z,t.width=Math.floor(S*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(me)},this.setViewport=function(S,B,Z,J){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,B,Z,J),N.viewport(I.copy(me).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,B,Z,J){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,B,Z,J),N.scissor(D.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){N.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){U=S},this.getClearColor=function(S){return S.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,Z=!0){let J=0;if(S){let k=!1;if(P!==null){let oe=P.texture.format;k=oe===hu||oe===uu||oe===cu}if(k){let oe=P.texture.type,ge=oe===Pi||oe===Jr||oe===Oo||oe===ko||oe===au||oe===lu,Re=ne.getClearColor(),we=ne.getClearAlpha(),Ve=Re.r,ke=Re.g,Oe=Re.b;ge?(_[0]=Ve,_[1]=ke,_[2]=Oe,_[3]=we,R.clearBufferuiv(R.COLOR,0,_)):(g[0]=Ve,g[1]=ke,g[2]=Oe,g[3]=we,R.clearBufferiv(R.COLOR,0,g))}else J|=R.COLOR_BUFFER_BIT}B&&(J|=R.DEPTH_BUFFER_BIT),Z&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ne.dispose(),q.dispose(),fe.dispose(),Y.dispose(),se.dispose(),xe.dispose(),O.dispose(),pe.dispose(),Xe.dispose(),$.dispose(),le.dispose(),le.removeEventListener("sessionstart",Qe),le.removeEventListener("sessionend",Se),qe.stop()};function ce(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let S=et.autoReset,B=ve.enabled,Z=ve.autoUpdate,J=ve.needsUpdate,k=ve.type;L(),et.autoReset=S,ve.enabled=B,ve.autoUpdate=Z,ve.needsUpdate=J,ve.type=k}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ee(S){let B=S.target;B.removeEventListener("dispose",ee),Te(B)}function Te(S){De(S),Y.remove(S)}function De(S){let B=Y.get(S).programs;B!==void 0&&(B.forEach(function(Z){$.releaseProgram(Z)}),S.isShaderMaterial&&$.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,Z,J,k,oe){B===null&&(B=Ee);let ge=k.isMesh&&k.matrixWorld.determinant()<0,Re=vt(S,B,Z,J,k);N.setMaterial(J,ge);let we=Z.index,Ve=1;if(J.wireframe===!0){if(we=v.getWireframeAttribute(Z),we===void 0)return;Ve=2}let ke=Z.drawRange,Oe=Z.attributes.position,tt=ke.start*Ve,ct=(ke.start+ke.count)*Ve;oe!==null&&(tt=Math.max(tt,oe.start*Ve),ct=Math.min(ct,(oe.start+oe.count)*Ve)),we!==null?(tt=Math.max(tt,0),ct=Math.min(ct,we.count)):Oe!=null&&(tt=Math.max(tt,0),ct=Math.min(ct,Oe.count));let Ot=ct-tt;if(Ot<0||Ot===1/0)return;pe.setup(k,J,Re,Z,we);let Ct,St=de;if(we!==null&&(Ct=A.get(we),St=Ue,St.setIndex(Ct)),k.isMesh)J.wireframe===!0?(N.setLineWidth(J.wireframeLinewidth*ft()),St.setMode(R.LINES)):St.setMode(R.TRIANGLES);else if(k.isLine){let Ye=J.linewidth;Ye===void 0&&(Ye=1),N.setLineWidth(Ye*ft()),k.isLineSegments?St.setMode(R.LINES):k.isLineLoop?St.setMode(R.LINE_LOOP):St.setMode(R.LINE_STRIP)}else k.isPoints?St.setMode(R.POINTS):k.isSprite&&St.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Do("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))St.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ye=k._multiDrawStarts,Dt=k._multiDrawCounts,gt=k._multiDrawCount,Wn=we?A.get(we).bytesPerElement:1,Xs=Y.get(J).currentProgram.getUniforms();for(let Xn=0;Xn<gt;Xn++)Xs.setValue(R,"_gl_DrawID",Xn),St.render(Ye[Xn]/Wn,Dt[Xn])}else if(k.isInstancedMesh)St.renderInstances(tt,Ot,k.count);else if(Z.isInstancedBufferGeometry){let Ye=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Dt=Math.min(Z.instanceCount,Ye);St.renderInstances(tt,Ot,Dt)}else St.render(tt,Ot)};function at(S,B,Z){S.transparent===!0&&S.side===Xi&&S.forceSinglePass===!1?(S.side=Nn,S.needsUpdate=!0,Gt(S,B,Z),S.side=dr,S.needsUpdate=!0,Gt(S,B,Z),S.side=Xi):Gt(S,B,Z)}this.compile=function(S,B,Z=null){Z===null&&(Z=S),m=fe.get(Z),m.init(B),b.push(m),Z.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),S!==Z&&S.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let J=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let oe=k.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){let Re=oe[ge];at(Re,Z,k),J.add(Re)}else at(oe,Z,k),J.add(oe)}),m=b.pop(),J},this.compileAsync=function(S,B,Z=null){let J=this.compile(S,B,Z);return new Promise(k=>{function oe(){if(J.forEach(function(ge){Y.get(ge).currentProgram.isReady()&&J.delete(ge)}),J.size===0){k(S);return}setTimeout(oe,10)}Fe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Me=null;function Ne(S){Me&&Me(S)}function Qe(){qe.stop()}function Se(){qe.start()}let qe=new O_;qe.setAnimationLoop(Ne),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(S){Me=S,le.setAnimationLoop(S),S===null?qe.stop():qe.start()},le.addEventListener("sessionstart",Qe),le.addEventListener("sessionend",Se),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(B),B=le.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,B,P),m=fe.get(S,b.length),m.init(B),b.push(m),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),He.setFromProjectionMatrix(te,Ei,B.reversedDepth),j=this.localClippingEnabled,Ge=ie.init(this.clippingPlanes,j),p=q.get(S,T.length),p.init(),T.push(p),le.enabled===!0&&le.isPresenting===!0){let oe=x.xr.getDepthSensingMesh();oe!==null&&ze(oe,B,-1/0,x.sortObjects)}ze(S,B,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(ae,U),We=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,We&&ne.addToRenderList(p,S),this.info.render.frame++,Ge===!0&&ie.beginShadows();let Z=m.state.shadowsArray;ve.render(Z,S,B),Ge===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=p.opaque,k=p.transmissive;if(m.setupLights(),B.isArrayCamera){let oe=B.cameras;if(k.length>0)for(let ge=0,Re=oe.length;ge<Re;ge++){let we=oe[ge];Ht(J,k,S,we)}We&&ne.render(S);for(let ge=0,Re=oe.length;ge<Re;ge++){let we=oe[ge];Je(p,S,we,we.viewport)}}else k.length>0&&Ht(J,k,S,B),We&&ne.render(S),Je(p,S,B);P!==null&&E===0&&(F.updateMultisampleRenderTarget(P),F.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(x,S,B),pe.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(m=b[b.length-1],Ge===!0&&ie.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function ze(S,B,Z,J){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||He.intersectsSprite(S)){J&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(te);let ge=O.update(S),Re=S.material;Re.visible&&p.push(S,ge,Re,Z,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||He.intersectsObject(S))){let ge=O.update(S),Re=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ie.copy(ge.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(te)),Array.isArray(Re)){let we=ge.groups;for(let Ve=0,ke=we.length;Ve<ke;Ve++){let Oe=we[Ve],tt=Re[Oe.materialIndex];tt&&tt.visible&&p.push(S,ge,tt,Z,Ie.z,Oe)}}else Re.visible&&p.push(S,ge,Re,Z,Ie.z,null)}}let oe=S.children;for(let ge=0,Re=oe.length;ge<Re;ge++)ze(oe[ge],B,Z,J)}function Je(S,B,Z,J){let k=S.opaque,oe=S.transmissive,ge=S.transparent;m.setupLightsView(Z),Ge===!0&&ie.setGlobalState(x.clippingPlanes,Z),J&&N.viewport(I.copy(J)),k.length>0&&it(k,B,Z),oe.length>0&&it(oe,B,Z),ge.length>0&&it(ge,B,Z),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Ht(S,B,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Gi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Bo:Pi,minFilter:Zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let oe=m.state.transmissionRenderTarget[J.id],ge=J.viewport||I;oe.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);let Re=x.getRenderTarget(),we=x.getActiveCubeFace(),Ve=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(V),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),We&&ne.render(Z);let ke=x.toneMapping;x.toneMapping=vr;let Oe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),Ge===!0&&ie.setGlobalState(x.clippingPlanes,J),it(S,Z,J),F.updateMultisampleRenderTarget(oe),F.updateRenderTargetMipmap(oe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ct=0,Ot=B.length;ct<Ot;ct++){let Ct=B[ct],St=Ct.object,Ye=Ct.geometry,Dt=Ct.material,gt=Ct.group;if(Dt.side===Xi&&St.layers.test(J.layers)){let Wn=Dt.side;Dt.side=Nn,Dt.needsUpdate=!0,Pt(St,Z,J,Ye,Dt,gt),Dt.side=Wn,Dt.needsUpdate=!0,tt=!0}}tt===!0&&(F.updateMultisampleRenderTarget(oe),F.updateRenderTargetMipmap(oe))}x.setRenderTarget(Re,we,Ve),x.setClearColor(V,X),Oe!==void 0&&(J.viewport=Oe),x.toneMapping=ke}function it(S,B,Z){let J=B.isScene===!0?B.overrideMaterial:null;for(let k=0,oe=S.length;k<oe;k++){let ge=S[k],Re=ge.object,we=ge.geometry,Ve=ge.group,ke=ge.material;ke.allowOverride===!0&&J!==null&&(ke=J),Re.layers.test(Z.layers)&&Pt(Re,B,Z,we,ke,Ve)}}function Pt(S,B,Z,J,k,oe){S.onBeforeRender(x,B,Z,J,k,oe),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(x,B,Z,J,S,oe),k.transparent===!0&&k.side===Xi&&k.forceSinglePass===!1?(k.side=Nn,k.needsUpdate=!0,x.renderBufferDirect(Z,B,J,k,S,oe),k.side=dr,k.needsUpdate=!0,x.renderBufferDirect(Z,B,J,k,S,oe),k.side=Xi):x.renderBufferDirect(Z,B,J,k,S,oe),S.onAfterRender(x,B,Z,J,k,oe)}function Gt(S,B,Z){B.isScene!==!0&&(B=Ee);let J=Y.get(S),k=m.state.lights,oe=m.state.shadowsArray,ge=k.state.version,Re=$.getParameters(S,k.state,oe,B,Z),we=$.getProgramCacheKey(Re),Ve=J.programs;J.environment=S.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(S.isMeshStandardMaterial?xe:se).get(S.envMap||J.environment),J.envMapRotation=J.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ve===void 0&&(S.addEventListener("dispose",ee),Ve=new Map,J.programs=Ve);let ke=Ve.get(we);if(ke!==void 0){if(J.currentProgram===ke&&J.lightsStateVersion===ge)return Mt(S,Re),ke}else Re.uniforms=$.getUniforms(S),S.onBeforeCompile(Re,x),ke=$.acquireProgram(Re,we),Ve.set(we,ke),J.uniforms=Re.uniforms;let Oe=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=ie.uniform),Mt(S,Re),J.needsLights=At(S),J.lightsStateVersion=ge,J.needsLights&&(Oe.ambientLightColor.value=k.state.ambient,Oe.lightProbe.value=k.state.probe,Oe.directionalLights.value=k.state.directional,Oe.directionalLightShadows.value=k.state.directionalShadow,Oe.spotLights.value=k.state.spot,Oe.spotLightShadows.value=k.state.spotShadow,Oe.rectAreaLights.value=k.state.rectArea,Oe.ltc_1.value=k.state.rectAreaLTC1,Oe.ltc_2.value=k.state.rectAreaLTC2,Oe.pointLights.value=k.state.point,Oe.pointLightShadows.value=k.state.pointShadow,Oe.hemisphereLights.value=k.state.hemi,Oe.directionalShadowMap.value=k.state.directionalShadowMap,Oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Oe.spotShadowMap.value=k.state.spotShadowMap,Oe.spotLightMatrix.value=k.state.spotLightMatrix,Oe.spotLightMap.value=k.state.spotLightMap,Oe.pointShadowMap.value=k.state.pointShadowMap,Oe.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=ke,J.uniformsList=null,ke}function Et(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Wo.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Mt(S,B){let Z=Y.get(S);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function vt(S,B,Z,J,k){B.isScene!==!0&&(B=Ee),F.resetTextureUnits();let oe=B.fog,ge=J.isMeshStandardMaterial?B.environment:null,Re=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ps,we=(J.isMeshStandardMaterial?xe:se).get(J.envMap||ge),Ve=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ke=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Oe=!!Z.morphAttributes.position,tt=!!Z.morphAttributes.normal,ct=!!Z.morphAttributes.color,Ot=vr;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ot=x.toneMapping);let Ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=Ct!==void 0?Ct.length:0,Ye=Y.get(J),Dt=m.state.lights;if(Ge===!0&&(j===!0||S!==y)){let bn=S===y&&J.id===M;ie.setState(J,S,bn)}let gt=!1;J.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Dt.state.version||Ye.outputColorSpace!==Re||k.isBatchedMesh&&Ye.batching===!1||!k.isBatchedMesh&&Ye.batching===!0||k.isBatchedMesh&&Ye.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ye.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ye.instancing===!1||!k.isInstancedMesh&&Ye.instancing===!0||k.isSkinnedMesh&&Ye.skinning===!1||!k.isSkinnedMesh&&Ye.skinning===!0||k.isInstancedMesh&&Ye.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ye.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ye.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ye.instancingMorph===!1&&k.morphTexture!==null||Ye.envMap!==we||J.fog===!0&&Ye.fog!==oe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ie.numPlanes||Ye.numIntersection!==ie.numIntersection)||Ye.vertexAlphas!==Ve||Ye.vertexTangents!==ke||Ye.morphTargets!==Oe||Ye.morphNormals!==tt||Ye.morphColors!==ct||Ye.toneMapping!==Ot||Ye.morphTargetsCount!==St)&&(gt=!0):(gt=!0,Ye.__version=J.version);let Wn=Ye.currentProgram;gt===!0&&(Wn=Gt(J,B,k));let Xs=!1,Xn=!1,Jo=!1,Lt=Wn.getUniforms(),ai=Ye.uniforms;if(N.useProgram(Wn.program)&&(Xs=!0,Xn=!0,Jo=!0),J.id!==M&&(M=J.id,Xn=!0),Xs||y!==S){N.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Lt.setValue(R,"projectionMatrix",S.projectionMatrix),Lt.setValue(R,"viewMatrix",S.matrixWorldInverse);let Fn=Lt.map.cameraPosition;Fn!==void 0&&Fn.setValue(R,_e.setFromMatrixPosition(S.matrixWorld)),Le.logarithmicDepthBuffer&&Lt.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Lt.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Xn=!0,Jo=!0)}if(k.isSkinnedMesh){Lt.setOptional(R,k,"bindMatrix"),Lt.setOptional(R,k,"bindMatrixInverse");let bn=k.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Lt.setValue(R,"boneTexture",bn.boneTexture,F))}k.isBatchedMesh&&(Lt.setOptional(R,k,"batchingTexture"),Lt.setValue(R,"batchingTexture",k._matricesTexture,F),Lt.setOptional(R,k,"batchingIdTexture"),Lt.setValue(R,"batchingIdTexture",k._indirectTexture,F),Lt.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&Lt.setValue(R,"batchingColorTexture",k._colorsTexture,F));let li=Z.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&ue.update(k,Z,Wn),(Xn||Ye.receiveShadow!==k.receiveShadow)&&(Ye.receiveShadow=k.receiveShadow,Lt.setValue(R,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ai.envMap.value=we,ai.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(ai.envMapIntensity.value=B.environmentIntensity),Xn&&(Lt.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Gn(ai,Jo),oe&&J.fog===!0&&K.refreshFogUniforms(ai,oe),K.refreshMaterialUniforms(ai,J,G,Q,m.state.transmissionRenderTarget[S.id]),Wo.upload(R,Et(Ye),ai,F)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Wo.upload(R,Et(Ye),ai,F),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Lt.setValue(R,"center",k.center),Lt.setValue(R,"modelViewMatrix",k.modelViewMatrix),Lt.setValue(R,"normalMatrix",k.normalMatrix),Lt.setValue(R,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let bn=J.uniformsGroups;for(let Fn=0,Yu=bn.length;Fn<Yu;Fn++){let Kr=bn[Fn];Xe.update(Kr,Wn),Xe.bind(Kr,Wn)}}return Wn}function Gn(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function At(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,B,Z){let J=Y.get(S);J.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Y.get(S.texture).__webglTexture=B,Y.get(S.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let Z=Y.get(S);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0};let Sn=R.createFramebuffer();this.setRenderTarget=function(S,B=0,Z=0){P=S,C=B,E=Z;let J=!0,k=null,oe=!1,ge=!1;if(S){let we=Y.get(S);if(we.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(R.FRAMEBUFFER,null),J=!1;else if(we.__webglFramebuffer===void 0)F.setupRenderTarget(S);else if(we.__hasExternalTextures)F.rebindTextures(S,Y.get(S.texture).__webglTexture,Y.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Oe=S.depthTexture;if(we.__boundDepthTexture!==Oe){if(Oe!==null&&Y.has(Oe)&&(S.width!==Oe.image.width||S.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(S)}}let Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ge=!0);let ke=Y.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?k=ke[B][Z]:k=ke[B],oe=!0):S.samples>0&&F.useMultisampledRTT(S)===!1?k=Y.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[Z]:k=ke,I.copy(S.viewport),D.copy(S.scissor),z=S.scissorTest}else I.copy(me).multiplyScalar(G).floor(),D.copy(Be).multiplyScalar(G).floor(),z=Ke;if(Z!==0&&(k=Sn),N.bindFramebuffer(R.FRAMEBUFFER,k)&&J&&N.drawBuffers(S,k),N.viewport(I),N.scissor(D),N.setScissorTest(z),oe){let we=Y.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,Z)}else if(ge){let we=B;for(let Ve=0;Ve<S.textures.length;Ve++){let ke=Y.get(S.textures[Ve]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ve,ke.__webglTexture,Z,we)}}else if(S!==null&&Z!==0){let we=Y.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,we.__webglTexture,Z)}M=-1},this.readRenderTargetPixels=function(S,B,Z,J,k,oe,ge,Re=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){N.bindFramebuffer(R.FRAMEBUFFER,we);try{let Ve=S.textures[Re],ke=Ve.format,Oe=Ve.type;if(!Le.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-J&&Z>=0&&Z<=S.height-k&&(S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),R.readPixels(B,Z,J,k,Ae.convert(ke),Ae.convert(Oe),oe))}finally{let Ve=P!==null?Y.get(P).__webglFramebuffer:null;N.bindFramebuffer(R.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(S,B,Z,J,k,oe,ge,Re=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we)if(B>=0&&B<=S.width-J&&Z>=0&&Z<=S.height-k){N.bindFramebuffer(R.FRAMEBUFFER,we);let Ve=S.textures[Re],ke=Ve.format,Oe=Ve.type;if(!Le.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,tt),R.bufferData(R.PIXEL_PACK_BUFFER,oe.byteLength,R.STREAM_READ),S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),R.readPixels(B,Z,J,k,Ae.convert(ke),Ae.convert(Oe),0);let ct=P!==null?Y.get(P).__webglFramebuffer:null;N.bindFramebuffer(R.FRAMEBUFFER,ct);let Ot=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await u_(R,Ot,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,tt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,oe),R.deleteBuffer(tt),R.deleteSync(Ot),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,Z=0){let J=Math.pow(2,-Z),k=Math.floor(S.image.width*J),oe=Math.floor(S.image.height*J),ge=B!==null?B.x:0,Re=B!==null?B.y:0;F.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,ge,Re,k,oe),N.unbindTexture()};let oi=R.createFramebuffer(),$t=R.createFramebuffer();this.copyTextureToTexture=function(S,B,Z=null,J=null,k=0,oe=null){oe===null&&(k!==0?(Do("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=k,k=0):oe=0);let ge,Re,we,Ve,ke,Oe,tt,ct,Ot,Ct=S.isCompressedTexture?S.mipmaps[oe]:S.image;if(Z!==null)ge=Z.max.x-Z.min.x,Re=Z.max.y-Z.min.y,we=Z.isBox3?Z.max.z-Z.min.z:1,Ve=Z.min.x,ke=Z.min.y,Oe=Z.isBox3?Z.min.z:0;else{let li=Math.pow(2,-k);ge=Math.floor(Ct.width*li),Re=Math.floor(Ct.height*li),S.isDataArrayTexture?we=Ct.depth:S.isData3DTexture?we=Math.floor(Ct.depth*li):we=1,Ve=0,ke=0,Oe=0}J!==null?(tt=J.x,ct=J.y,Ot=J.z):(tt=0,ct=0,Ot=0);let St=Ae.convert(B.format),Ye=Ae.convert(B.type),Dt;B.isData3DTexture?(F.setTexture3D(B,0),Dt=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(F.setTexture2DArray(B,0),Dt=R.TEXTURE_2D_ARRAY):(F.setTexture2D(B,0),Dt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);let gt=R.getParameter(R.UNPACK_ROW_LENGTH),Wn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Xs=R.getParameter(R.UNPACK_SKIP_PIXELS),Xn=R.getParameter(R.UNPACK_SKIP_ROWS),Jo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ct.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ct.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Oe);let Lt=S.isDataArrayTexture||S.isData3DTexture,ai=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let li=Y.get(S),bn=Y.get(B),Fn=Y.get(li.__renderTarget),Yu=Y.get(bn.__renderTarget);N.bindFramebuffer(R.READ_FRAMEBUFFER,Fn.__webglFramebuffer),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,Yu.__webglFramebuffer);for(let Kr=0;Kr<we;Kr++)Lt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Y.get(S).__webglTexture,k,Oe+Kr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,oe,Ot+Kr)),R.blitFramebuffer(Ve,ke,ge,Re,tt,ct,ge,Re,R.DEPTH_BUFFER_BIT,R.NEAREST);N.bindFramebuffer(R.READ_FRAMEBUFFER,null),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||Y.has(S)){let li=Y.get(S),bn=Y.get(B);N.bindFramebuffer(R.READ_FRAMEBUFFER,oi),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,$t);for(let Fn=0;Fn<we;Fn++)Lt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,li.__webglTexture,k,Oe+Fn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,li.__webglTexture,k),ai?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bn.__webglTexture,oe,Ot+Fn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bn.__webglTexture,oe),k!==0?R.blitFramebuffer(Ve,ke,ge,Re,tt,ct,ge,Re,R.COLOR_BUFFER_BIT,R.NEAREST):ai?R.copyTexSubImage3D(Dt,oe,tt,ct,Ot+Fn,Ve,ke,ge,Re):R.copyTexSubImage2D(Dt,oe,tt,ct,Ve,ke,ge,Re);N.bindFramebuffer(R.READ_FRAMEBUFFER,null),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ai?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(Dt,oe,tt,ct,Ot,ge,Re,we,St,Ye,Ct.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Dt,oe,tt,ct,Ot,ge,Re,we,St,Ct.data):R.texSubImage3D(Dt,oe,tt,ct,Ot,ge,Re,we,St,Ye,Ct):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,oe,tt,ct,ge,Re,St,Ye,Ct.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,oe,tt,ct,Ct.width,Ct.height,St,Ct.data):R.texSubImage2D(R.TEXTURE_2D,oe,tt,ct,ge,Re,St,Ye,Ct);R.pixelStorei(R.UNPACK_ROW_LENGTH,gt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Wn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Xs),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Jo),oe===0&&B.generateMipmaps&&R.generateMipmap(Dt),N.unbindTexture()},this.initRenderTarget=function(S){Y.get(S).__webglFramebuffer===void 0&&F.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?F.setTextureCube(S,0):S.isData3DTexture?F.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?F.setTexture2DArray(S,0):F.setTexture2D(S,0),N.unbindTexture()},this.resetState=function(){C=0,E=0,P=null,N.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Ld=zu.clamp,T1=zu.lerp,$r=r=>{let e=Ld(r,0,1);return e*e*(3-2*e)},w1=new Xr(1,1,1),E1=new Ja(1,1,1,12),vi=(r,e={})=>new Ka({color:r,roughness:.82,metalness:.08,flatShading:!0,...e}),ye={stone:vi(14013381),chalk:vi(15329243),edge:vi(11910316),ink:vi(2438958),dark:vi(1516829),steel:vi(11253932,{metalness:.52,roughness:.45}),green:vi(9813842),timber:vi(11968633),timberDark:vi(10915689),glass:vi(7902603,{transparent:!0,opacity:.34,depthWrite:!1,roughness:.25}),highlight:vi(15003362,{transparent:!0,opacity:.5,depthWrite:!1}),road:vi(9081991)},Ce=(r,e,t,n,i,s,o,a=ye.ink)=>{let l=new yn(w1,a);return l.position.set(e,t,n),l.scale.set(i,s,o),l.castShadow=!a.transparent,l.receiveShadow=!0,r.add(l),l},Vs=(r,e,t,n,i,s,o=ye.steel)=>{let a=new yn(E1,o);return a.position.set(e,t,n),a.scale.set(i,s,i),a.castShadow=!0,a.receiveShadow=!0,r.add(a),a},si=(r,e=0,t=0,n=0)=>{let i=new Un;return i.position.set(e,t,n),r.add(i),i},qo=(r,e=7.6,t=4.2)=>{Ce(r,0,-.16,0,e,.22,t,ye.stone),Ce(r,0,-.035,0,e-.12,.06,t-.12,ye.chalk)},Hs=(r,e,t,{timber:n=!1,green:i=!1,horizontal:s=!1,frameless:o=!1}={})=>{if(Ce(r,0,t/2,0,e,t,.045,n?ye.timber:ye.glass),[-1,1].forEach(a=>Ce(r,a*(e/2-(o?.006:.03)),t/2,.005,o?.012:.06,t,o?.05:.09,o?ye.steel:ye.ink)),[0,t].forEach(a=>Ce(r,0,a,.005,e+.035,o?.04:.075,.1,o?ye.steel:ye.ink)),n){let a=Math.round(e/.2);for(let l=0;l<a;l++)Ce(r,-e/2+(l+.5)*e/a,t/2,.04,e/a-.018,t-.12,.08,l%3?ye.timber:ye.timberDark);Ce(r,0,t*.43,.1,e,.11,.08)}else if(o||Ce(r,0,t*.51,.005,e,.04,.07),Ce(r,-e*.28,t*.65,.033,.015,t*.38,.006,ye.highlight),s)for(let a=-e/2+e/3;a<e/2;a+=e/3)Ce(r,a,t/2,0,.045,t,.075);i&&Ce(r,0,.05,.062,e*.93,.035,.026,ye.green)},A1=r=>{let e=Vs(r,0,0,0,.066,1,ye.ink),t=Vs(r,0,0,0,.03,1,ye.steel),n=Vs(r,0,0,0,.075,.09,ye.green),i=new W,s=new W(0,1,0);return(o,a)=>{i.subVectors(a,o);let l=i.length();i.normalize();let c=l*.57;e.position.copy(o).addScaledVector(i,c/2),e.scale.y=c,t.position.copy(o).addScaledVector(i,c+(l-c)/2),t.scale.y=l-c,n.position.copy(o).addScaledVector(i,.07),[e,t,n].forEach(u=>u.quaternion.setFromUnitVectors(s,i))}};function Ud(r=!1){let e=new Un;qo(e,7.7,4.4),[-1,1].forEach(n=>{Ce(e,n*2.86,1.55,0,.64,3.1,.8,ye.stone),Ce(e,n*2.86,3.13,0,.73,.09,.91,ye.chalk),Ce(e,n*3.38,.95,-.09,.4,1.9,.6,ye.chalk),[1,2].forEach(i=>Ce(e,n*2.86,i,.405,.64,.012,.012,ye.edge))}),r&&(Ce(e,0,3.29,-.06,6.45,.25,1.12,ye.chalk),Ce(e,0,3.12,.36,5.12,.065,.12,ye.ink),Ce(e,-3.23,.08,.4,.04,.012,1.7,ye.green));let t=[-1,1].map(n=>{let i=n*2.51,s=si(e,i,.15,.03),o=si(s,-n*1.235,0,0);Hs(o,2.45,2.63,{timber:!0}),[.35,2.36].forEach(l=>Vs(e,i,l,.055,.066,.22,ye.ink));let a=A1(e);return{g:s,side:n,hingeX:i,drive:a}});return Ce(e,2.9,1.3,.435,.19,.3,.055,ye.ink),Ce(e,2.9,1.37,.468,.11,.055,.008,ye.green),{root:e,update(n){let i=$r(n)*Math.PI*.43;t.forEach(({g:s,side:o,hingeX:a,drive:l})=>{s.rotation.y=o*i;let c=new W(-o*.97,1.12,.18).applyAxisAngle(new W(0,1,0),s.rotation.y),u=new W(a+c.x,1.12,.03+c.z);l(new W(a+o*.13,1.12,.43),u)})}}}function H_(){let r=new Un;qo(r,7.5,4.1),Ce(r,0,.04,-.65,6.65,.075,1.8,ye.edge),[-1,1].forEach(t=>{Ce(r,t*3.27,1.6,-.06,.24,3.2,.45,ye.stone);let n=si(r,t*2.36,.08,-.065);Hs(n,1.46,2.92)}),Ce(r,0,3.14,0,6.75,.31,.42,ye.steel),Ce(r,0,3.04,.23,.32,.115,.11,ye.ink),Ce(r,0,3.06,.293,.15,.032,.012,ye.green),Ce(r,0,.055,.055,6.35,.04,.23,ye.ink);let e=[-1,1].map(t=>{let n=si(r,t*.785,.085,.07);return Hs(n,1.52,2.9),Ce(n,-t*.57,1.32,.073,.024,.36,.04,ye.steel),{g:n,s:t}});return Ce(r,0,.006,1.22,2.4,.014,.66,ye.road),{root:r,update(t){e.forEach(({g:n,s:i})=>{n.position.x=i*(.785+$r(t)*1.54)})}}}function G_(){let r=new Un;qo(r,7.5,4.4),[-1,1].forEach(i=>{Ce(r,i*2.96,1.7,-.22,.77,3.4,.9,ye.stone),Ce(r,i*2.62,1.48,.065,.11,2.97,.2,ye.ink)}),Ce(r,0,3.31,-.19,6.74,.5,.85,ye.chalk),Ce(r,0,3.34,.25,5.45,.4,.08,ye.edge);let e=Vs(r,0,3.1,-.35,.28,5.12,ye.ink);e.rotation.z=Math.PI/2,Ce(r,2.93,2.65,.35,.28,.59,.27,ye.green),Ce(r,2.93,2.23,.35,.05,.25,.04,ye.ink);let t=Array.from({length:21},(i,s)=>Ce(r,0,.13+s*.14,.07,5.2,.132,.09,s%2?ye.steel:ye.edge)),n=Ce(r,0,.065,.08,5.23,.12,.13,ye.ink);return{root:r,update(i){let s=$r(i)*3.26;t.forEach((o,a)=>{let l=.13+a*.14+s;if(l<=2.96)o.position.set(0,l,.07),o.rotation.x=0;else{let c=(l-2.96)/.29,u=.29+Math.floor(c/(Math.PI*2))*.025;o.position.set(0,2.96+u*Math.sin(c),.07-u+u*Math.cos(c)),o.rotation.x=-c}}),n.position.y=Math.min(3.04,.065+s)}}}function W_(){let r=new Un;qo(r,7.5,4.4),Ce(r,.6,.025,0,5.2,.035,4.18,ye.road),[-1.05,.4,1.85].forEach(i=>Ce(r,.8,.047,i,.065,.012,.7,ye.chalk));let e=-2.68;Ce(r,e,.89,0,.64,1.78,.77,ye.ink),Ce(r,e,1.81,0,.7,.1,.83,ye.green),Ce(r,e,.81,.395,.46,1.23,.033,ye.edge),Ce(r,e+.13,1.15,.42,.07,.1,.035,ye.ink),Ce(r,e,1.53,.41,.22,.11,.035,ye.dark);let t=si(r,e,1.65,.08),n=Vs(t,0,0,0,.18,.22,ye.steel);n.rotation.x=Math.PI/2,Ce(t,2.37,.025,.17,4.84,.15,.16,ye.chalk);for(let i=0;i<6;i++)Ce(t,.5+i*.74,.025,.262,.23,.152,.024,ye.ink);return Ce(t,4.71,.025,.264,.13,.154,.026,ye.green),Ce(r,2.15,.75,.22,.16,1.5,.16,ye.ink),Ce(r,2.15,1.5,.22,.31,.08,.26,ye.steel),{root:r,tall:!0,update(i){t.rotation.z=$r(i)*Math.PI*.47}}}function X_(){let r=new Un;qo(r,7.5,5),Ce(r,0,.07,-.28,6.1,.13,3.6,ye.timberDark);for(let t=-1.95;t<1.5;t+=.27)Ce(r,0,.141,t,6.06,.015,.016,ye.timber);[-1,1].forEach(t=>{[-1.6,1.4].forEach(i=>Ce(r,t*2.9,1.65,i,.17,3.02,.17,ye.timber)),Ce(r,t*2.9,3.12,-.1,.19,.25,3.5,ye.timber);let n=si(r,t*2.9,.19,-.13);n.rotation.y=Math.PI/2,Hs(n,2.88,2.76,{frameless:!0})}),[-1.65,1.43].forEach(t=>{Ce(r,0,3.12,t,6.11,.27,.19,ye.timber),Ce(r,0,.18,t,5.8,.055,.075,ye.steel)}),Ce(r,0,3.31,-.08,6.32,.1,3.54,ye.chalk);let e=Array.from({length:6},(t,n)=>{let i=si(r,-2.82+n*.947,.22,1.45),s=si(i,.46,0,0);return Hs(s,.92,2.73,{frameless:!0}),Ce(s,.3,1.2,.04,.02,.22,.03,ye.steel),i});return Ce(r,0,2.93,1.55,5.7,.023,.025,ye.green),{root:r,update(t){e.forEach((n,i)=>{let s=Ld(t*6-i,0,1);n.position.x=T1(-2.82+i*.947,-2.82+i*.08,$r(s/.56)),n.rotation.y=$r((s-.5)/.5)*Math.PI/2})}}}function Nd(r=!1){let e=new Un;if(qo(e,7.7,r?6:4.4),[-1,1].forEach(n=>{Ce(e,n*2.93,1.62,-.16,.55,3.24,.7,ye.stone),Ce(e,n*2.62,1.57,.14,.075,3.1,.16,ye.ink)}),Ce(e,0,3.3,-.4,6.43,.25,1.35,ye.chalk),Ce(e,0,3.1,.23,5.34,.12,.19,ye.ink),!r){let n=si(e,0,3.08,.22),i=si(n,0,-1.46,0);Hs(i,5.21,1.46,{horizontal:!0});let s=si(n,0,-1.46,0),o=si(s,0,-1.46,0);return Hs(o,5.21,1.46,{horizontal:!0,green:!0}),[-2.3,0,2.3].forEach(a=>{let l=Vs(n,a,-1.46,.075,.045,.19,ye.steel);l.rotation.z=Math.PI/2}),{root:e,update(a){let l=$r(a)*Math.PI*.46;n.rotation.x=-l,s.rotation.x=2*l}}}[-1,1].forEach(n=>Ce(e,n*2.57,3.16,-1.83,.065,.09,3.6,ye.steel)),Ce(e,0,3.37,-2.17,.46,.21,.55,ye.green),Ce(e,0,3.25,-1.73,.075,.04,3.5,ye.steel);let t=Array.from({length:6},(n,i)=>{let s=si(e,0,.26+i*.477,.21);return Ce(s,0,0,0,5.2,.456,.115,ye.edge),Ce(s,0,.2,.069,5.14,.015,.016,ye.steel),i===4&&[-1.55,0,1.55].forEach(o=>Ce(s,o,0,.063,.86,.22,.018,ye.ink)),s});return{root:e,wide:!0,update(n){t.forEach((i,s)=>{let o=.26+s*.477+$r(n)*3.43,a=o-2.57,l=.48;if(a<0)i.position.set(0,o,.21),i.rotation.x=0;else if(a<l*Math.PI/2){let c=a/l;i.position.set(0,2.57+l*Math.sin(c),.21-l+l*Math.cos(c)),i.rotation.x=-c}else i.position.set(0,3.05,.21-l-(a-l*Math.PI/2)),i.rotation.x=-Math.PI/2})}}}function Fd(r,e){let t;try{t=new Xu({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{return r.dataset.rendering="static",null}t.setPixelRatio(Math.min(devicePixelRatio,matchMedia("(max-width:63.99em)").matches?1.25:1.5)),t.outputColorSpace=Ln,t.shadowMap.enabled=!0,t.shadowMap.type=Jc,t.domElement.setAttribute("aria-hidden","true"),r.append(t.domElement),r.classList.add("has-renderer");let n=new qa,i=new Ls(-5,5,4,-4,.1,60);i.position.set(7,6.4,10),i.lookAt(0,1.25,0),n.add(new el(16777215,9476998,2.55));let s=new tl(16775400,3.15);s.position.set(-3,9,6),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.camera.left=-7,s.shadow.camera.right=7,s.shadow.camera.top=7,s.shadow.camera.bottom=-7,s.shadow.normalBias=.035,n.add(s);let o=new yn(new Is(24,24),new $a({opacity:.12}));o.rotation.x=-Math.PI/2,o.position.y=-.275,o.receiveShadow=!0,n.add(o),Object.values(e).forEach(p=>{n.add(p.root),p.root.visible=!1,p.update(0)});let a,l=0,c=!0,u=null,h=0;r.tabIndex=0,r.setAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home");let f=p=>{a&&(a.root.rotation.y=Ld(p,-.6,.6),r.dataset.rotation=a.root.rotation.y.toFixed(3),_())};r.addEventListener("pointerdown",p=>{!p.isPrimary||p.button!==0||(u=p.clientX,h=a?.root.rotation.y||0,r.setPointerCapture(p.pointerId))}),r.addEventListener("pointermove",p=>{u!==null&&f(h+(p.clientX-u)*.005)});let d=()=>{u=null};r.addEventListener("pointerup",d),r.addEventListener("pointercancel",d),r.addEventListener("keydown",p=>{["ArrowLeft","ArrowRight","Home"].includes(p.key)&&(p.preventDefault(),f(p.key==="Home"?0:(a?.root.rotation.y||0)+(p.key==="ArrowLeft"?-.12:.12)))});let _=()=>{l||!c||document.hidden||(l=requestAnimationFrame(()=>{l=0,t.render(n,i)}))},g=()=>{let p=r.clientWidth,m=r.clientHeight;if(!p||!m)return;let T=p/m,b=Math.max(a?.tall?8.6:5.9,(a?.wide?10.6:9.4)/T);i.left=-b*T/2,i.right=b*T/2,i.top=b/2,i.bottom=-b/2,i.position.set(7,a?.tall?7.9:6.4,10),i.lookAt(0,a?.tall?2.3:1.25,0),i.updateProjectionMatrix(),t.setSize(p,m,!1),_()};return new ResizeObserver(g).observe(r),new IntersectionObserver(p=>{c=p[0].isIntersecting,c&&_()},{rootMargin:"150px"}).observe(r),document.addEventListener("visibilitychange",_),t.domElement.addEventListener("webglcontextlost",p=>{p.preventDefault(),r.classList.remove("has-renderer"),r.dataset.rendering="static"}),t.domElement.addEventListener("webglcontextrestored",()=>{r.classList.add("has-renderer"),r.dataset.rendering="webgl",_()}),{select(p){let m=e[p];a!==m&&(a&&(a.root.visible=!1),a=m,a.root.visible=!0,r.dataset.model=p,g())},update(p){a&&(a.update(p),r.dataset.progress=p.toFixed(3),_())},refresh:g}}yi.registerPlugin($e,Ms,Ur);$e.config({ignoreMobileResize:!0});var ul=r=>document.querySelector(r),Ws=r=>[...document.querySelectorAll(r)],Zo=Ws(".svc-item"),C1=Ws(".catalog-nav a"),R1={jack:Ud,glass:H_,shutter:G_,barrier:W_,balcony:X_},Gs=Zo.map(()=>({progress:0,shown:0,manual:null,stage:null,attempted:!1})),Od=!1,Ii=!1,Yo=null,Bd="folding",cl=ul(".motion-toggle"),kd=Fd(ul("#hero-render"),{jack:Ud(!0)});kd?.select("jack");var hl=r=>{let e=Gs[r];e.shown=e.manual??(Ii?.4:e.progress),e.stage?.update(e.shown);let t=Zo[r].querySelector(".model-toggle");t.textContent=e.shown>.5?"\u0628\u0633\u062A\u0646":"\u0628\u0627\u0632 \u06A9\u0631\u062F\u0646",t.setAttribute("aria-pressed",String(e.shown>.5))},P1=r=>{let e=Gs[r];if(e.attempted)return;e.attempted=!0;let t=Zo[r],n=t.dataset.service,i=n==="sectional"?{folding:Nd(),sectional:Nd(!0)}:{[n]:R1[n]()};e.stage=Fd(t.querySelector(".render-host"),i),e.stage?.select(n==="sectional"?Bd:n),t.querySelector(".product-controls").hidden=!e.stage,hl(r)},Z_=new IntersectionObserver(r=>r.forEach(e=>{e.isIntersecting&&(P1(Zo.indexOf(e.target)),Z_.unobserve(e.target))}),{rootMargin:"500px"});Zo.forEach((r,e)=>{Z_.observe(r),r.querySelector(".model-toggle").addEventListener("click",()=>{let t=Gs[e],n=t.shown>.5?0:1;t.manual=t.shown,yi.to(t,{manual:n,duration:Ii?0:.8,ease:"power2.inOut",overwrite:"auto",onUpdate:()=>hl(e)})})});Ws(".variant-btn").forEach(r=>r.addEventListener("click",()=>{Bd=r.dataset.variant,Ws(".variant-btn").forEach(e=>e.setAttribute("aria-pressed",String(e===r))),Gs[5].stage?.select(Bd),hl(5)}));Ws("[data-consult]").forEach(r=>r.addEventListener("click",()=>{ul("#service-type").value=r.dataset.consult,ul("#service-type").dispatchEvent(new Event("input",{bubbles:!0}))}));Ws('a[href^="#"]').forEach(r=>r.addEventListener("click",e=>{if(e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let t=document.getElementById(r.hash.slice(1));t&&(e.preventDefault(),Yo?Yo.scrollTo(t,!0,"top 110px"):yi.to(window,{duration:Ii?0:.75,ease:"power2.inOut",scrollTo:{y:t,offsetY:100,autoKill:!0}}),r.closest(".catalog-nav")&&(t.tabIndex=-1,t.focus({preventScroll:!0})))}));var q_=r=>C1.forEach((e,t)=>e.setAttribute("aria-current",String(t===r))),Y_=yi.matchMedia();function J_(){Y_.revert(),Gs.forEach(r=>{yi.killTweensOf(r),r.manual=null}),Y_.add({desktop:"(min-width:64em)",mobile:"(max-width:63.99em)",reduced:"(prefers-reduced-motion:reduce)"},r=>{Ii=Od||r.conditions.reduced,document.documentElement.classList.toggle("motion-paused",Ii),cl.hidden=!1,cl.disabled=r.conditions.reduced,cl.setAttribute("aria-pressed",String(Ii)),cl.setAttribute("aria-label",Ii?"\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 \u0627\u0646\u06CC\u0645\u06CC\u0634\u0646\u200C\u0647\u0627":"\u062A\u0648\u0642\u0641 \u0627\u0646\u06CC\u0645\u06CC\u0634\u0646\u200C\u0647\u0627"),r.conditions.desktop&&!Ii&&(Yo=Ur.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.05,smoothTouch:0,effects:!1})),document.documentElement.dataset.smoother=Yo?"on":"off",r.conditions.desktop&&$e.create({trigger:".catalog-layout",start:"top 120px",end:"bottom bottom",pin:".catalog-nav",pinSpacing:!1,invalidateOnRefresh:!0});let e=0;if(Zo.forEach((t,n)=>{let i=$e.create({trigger:t,start:"top 48%",end:"bottom 48%",onToggle(s){s.isActive?q_(n):Gs[n].manual=null}});(i.isActive||i.progress===1)&&(e=n),Ii||(yi.fromTo(Gs[n],{progress:0},{progress:1,ease:"none",scrollTrigger:{trigger:t,start:"top 80%",end:"bottom 35%",scrub:.65},onUpdate:()=>hl(n)}),yi.fromTo(t.querySelector(".product-stage"),{y:r.conditions.desktop?65:24,rotationX:r.conditions.desktop?-6:0,opacity:.5},{y:0,rotationX:0,opacity:1,ease:"none",scrollTrigger:{trigger:t,start:"top bottom",end:"top 38%",scrub:.7}})),hl(n)}),q_(e),kd?.update(Ii?.3:0),!Ii){let t={progress:0};yi.to(t,{progress:1,ease:"none",scrollTrigger:{trigger:"#home",start:"top top",end:"bottom top",scrub:.7},onUpdate:()=>kd?.update(t.progress)}),Ws(".section-head, .card, .stat").forEach(n=>yi.from(n,{y:15,opacity:0,duration:.4,scrollTrigger:{trigger:n,start:"top 94%",once:!0},clearProps:"transform,opacity"}))}return()=>{Yo?.kill(),Yo=null}}),$e.refresh()}cl.addEventListener("click",I1);function I1(){Od=!Od,J_()}document.documentElement.classList.add("gsap-ready");J_();document.fonts.ready.then(()=>$e.refresh());new ResizeObserver(()=>$e.refresh()).observe(ul("#quote-form"));})();
/*! For license information please see app.js.LEGAL.txt */
