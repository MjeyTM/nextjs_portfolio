(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{33581:function(e,t,n){Promise.resolve().then(n.bind(n,79512)),Promise.resolve().then(n.t.bind(n,86088,23)),Promise.resolve().then(n.t.bind(n,4549,23)),Promise.resolve().then(n.t.bind(n,58877,23))},58877:function(){},4549:function(e){e.exports={style:{fontFamily:"'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},86088:function(e){e.exports={style:{fontFamily:"'__geistSans_1e4310', '__geistSans_Fallback_1e4310'"},className:"__className_1e4310",variable:"__variable_1e4310"}},79512:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return r}});var a=n(2265),c=["light","dark"],o="(prefers-color-scheme: dark)",s="undefined"==typeof window,l=a.createContext(void 0),r=e=>a.useContext(l)?e.children:a.createElement(m,{...e}),i=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:r=!0,storageKey:m="theme",themes:v=i,defaultTheme:y=s?"system":"light",attribute:_="data-theme",value:b,children:g,nonce:S}=e,[p,k]=a.useState(()=>u(m,y)),[w,C]=a.useState(()=>u(m)),E=b?Object.values(b):v,T=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=f());let a=b?b[t]:t,o=n?h():null,l=document.documentElement;if("class"===_?(l.classList.remove(...E),a&&l.classList.add(a)):a?l.setAttribute(_,a):l.removeAttribute(_),r){let e=c.includes(y)?y:null,n=c.includes(t)?t:e;l.style.colorScheme=n}null==o||o()},[]),N=a.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(m,t)}catch(e){}},[t]),x=a.useCallback(e=>{C(f(e)),"system"===p&&s&&!t&&T("system")},[p,t]);a.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),a.useEffect(()=>{let e=e=>{e.key===m&&N(e.newValue||y)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),a.useEffect(()=>{T(null!=t?t:p)},[t,p]);let L=a.useMemo(()=>({theme:p,setTheme:N,forcedTheme:t,resolvedTheme:"system"===p?w:p,themes:s?[...v,"system"]:v,systemTheme:s?w:void 0}),[p,N,t,w,s,v]);return a.createElement(l.Provider,{value:L},a.createElement(d,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:r,storageKey:m,themes:v,defaultTheme:y,attribute:_,value:b,children:g,attrs:E,nonce:S}),g)},d=a.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:l,enableColorScheme:r,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===s?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),v=r?(c.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=m?m[e]:e,o=t?e+"|| ''":"'".concat(a,"'"),l="";return r&&n&&!t&&c.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===s?t||a?l+="c.add(".concat(o,")"):l+="null":a&&(l+="d[s](n,".concat(o,")")),l},_=t?"!function(){".concat(f).concat(y(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+y(i,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}else{").concat(y(i,!1,!1),";}").concat(v,"}catch(t){}}();");return a.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:_}})}),u=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},f=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},function(e){e.O(0,[229,971,23,744],function(){return e(e.s=33581)}),_N_E=e.O()}]);