(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const de="modulepreload",fe=function(e,t){return new URL(e,t).href},U={},pe=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=Promise.all(r.map(l=>{if(l=fe(l,n),l in U)return;U[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let w=s.length-1;w>=0;w--){const _=s[w];if(_.href===l&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":de,u||(m.as="script",m.crossOrigin=""),m.href=l,c&&m.setAttribute("nonce",c),document.head.appendChild(m),u)return new Promise((w,_)=>{m.addEventListener("load",w),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};var he={};(function(e){(function(){var t={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function r(c){return i(a(c),arguments)}function n(c,l){return r.apply(null,[c].concat(l||[]))}function i(c,l){var u=1,h=c.length,o,m="",w,_,f,x,S,O,P,d;for(w=0;w<h;w++)if(typeof c[w]=="string")m+=c[w];else if(typeof c[w]=="object"){if(f=c[w],f.keys)for(o=l[u],_=0;_<f.keys.length;_++){if(o==null)throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"',f.keys[_],f.keys[_-1]));o=o[f.keys[_]]}else f.param_no?o=l[f.param_no]:o=l[u++];if(t.not_type.test(f.type)&&t.not_primitive.test(f.type)&&o instanceof Function&&(o=o()),t.numeric_arg.test(f.type)&&typeof o!="number"&&isNaN(o))throw new TypeError(r("[sprintf] expecting number but found %T",o));switch(t.number.test(f.type)&&(P=o>=0),f.type){case"b":o=parseInt(o,10).toString(2);break;case"c":o=String.fromCharCode(parseInt(o,10));break;case"d":case"i":o=parseInt(o,10);break;case"j":o=JSON.stringify(o,null,f.width?parseInt(f.width):0);break;case"e":o=f.precision?parseFloat(o).toExponential(f.precision):parseFloat(o).toExponential();break;case"f":o=f.precision?parseFloat(o).toFixed(f.precision):parseFloat(o);break;case"g":o=f.precision?String(Number(o.toPrecision(f.precision))):parseFloat(o);break;case"o":o=(parseInt(o,10)>>>0).toString(8);break;case"s":o=String(o),o=f.precision?o.substring(0,f.precision):o;break;case"t":o=String(!!o),o=f.precision?o.substring(0,f.precision):o;break;case"T":o=Object.prototype.toString.call(o).slice(8,-1).toLowerCase(),o=f.precision?o.substring(0,f.precision):o;break;case"u":o=parseInt(o,10)>>>0;break;case"v":o=o.valueOf(),o=f.precision?o.substring(0,f.precision):o;break;case"x":o=(parseInt(o,10)>>>0).toString(16);break;case"X":o=(parseInt(o,10)>>>0).toString(16).toUpperCase();break}t.json.test(f.type)?m+=o:(t.number.test(f.type)&&(!P||f.sign)?(d=P?"+":"-",o=o.toString().replace(t.sign,"")):d="",S=f.pad_char?f.pad_char==="0"?"0":f.pad_char.charAt(1):" ",O=f.width-(d+o).length,x=f.width&&O>0?S.repeat(O):"",m+=f.align?d+o+x:S==="0"?d+x+o:x+d+o)}return m}var s=Object.create(null);function a(c){if(s[c])return s[c];for(var l=c,u,h=[],o=0;l;){if((u=t.text.exec(l))!==null)h.push(u[0]);else if((u=t.modulo.exec(l))!==null)h.push("%");else if((u=t.placeholder.exec(l))!==null){if(u[2]){o|=1;var m=[],w=u[2],_=[];if((_=t.key.exec(w))!==null)for(m.push(_[1]);(w=w.substring(_[0].length))!=="";)if((_=t.key_access.exec(w))!==null)m.push(_[1]);else if((_=t.index_access.exec(w))!==null)m.push(_[1]);else throw new SyntaxError("[sprintf] failed to parse named argument key");else throw new SyntaxError("[sprintf] failed to parse named argument key");u[2]=m}else o|=2;if(o===3)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");h.push({placeholder:u[0],param_no:u[1],keys:u[2],sign:u[3],pad_char:u[4],align:u[5],width:u[6],precision:u[7],type:u[8]})}else throw new SyntaxError("[sprintf] unexpected placeholder");l=l.substring(u[0].length)}return s[c]=h}e.sprintf=r,e.vsprintf=n,typeof window<"u"&&(window.sprintf=r,window.vsprintf=n)})()})(he);var I,ee,T,te;I={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1};ee=["(","?"];T={")":["("],":":["?","?:"]};te=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;function we(e){for(var t=[],r=[],n,i,s,a;n=e.match(te);){for(i=n[0],s=e.substr(0,n.index).trim(),s&&t.push(s);a=r.pop();){if(T[i]){if(T[i][0]===a){i=T[i][1]||i;break}}else if(ee.indexOf(a)>=0||I[a]<I[i]){r.push(a);break}t.push(a)}T[i]||r.push(i),e=e.substr(n.index+i.length)}return e=e.trim(),e&&t.push(e),t.concat(r.reverse())}var ge={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,r){if(e)throw t;return r}};function me(e,t){var r=[],n,i,s,a,c,l;for(n=0;n<e.length;n++){if(c=e[n],a=ge[c],a){for(i=a.length,s=Array(i);i--;)s[i]=r.pop();try{l=a.apply(null,s)}catch(u){return u}}else t.hasOwnProperty(c)?l=t[c]:l=+c;r.push(l)}return r[0]}function ye(e){var t=we(e);return function(r){return me(t,r)}}function _e(e){var t=ye(e);return function(r){return+t({n:r})}}var $={contextDelimiter:"",onMissingKey:null};function be(e){var t,r,n;for(t=e.split(";"),r=0;r<t.length;r++)if(n=t[r].trim(),n.indexOf("plural=")===0)return n.substr(7)}function H(e,t){var r;this.data=e,this.pluralForms={},this.options={};for(r in $)this.options[r]=t!==void 0&&r in t?t[r]:$[r]}H.prototype.getPluralForm=function(e,t){var r=this.pluralForms[e],n,i,s;return r||(n=this.data[e][""],s=n["Plural-Forms"]||n["plural-forms"]||n.plural_forms,typeof s!="function"&&(i=be(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),s=_e(i)),r=this.pluralForms[e]=s),r(t)};H.prototype.dcnpgettext=function(e,t,r,n,i){var s,a,c;return i===void 0?s=0:s=this.getPluralForm(e,i),a=r,t&&(a=t+this.options.contextDelimiter+r),c=this.data[e][a],c&&c[s]?c[s]:(this.options.onMissingKey&&this.options.onMissingKey(r,e),s===0?r:n)};const z={"":{plural_forms(e){return e===1?0:1}}},ve=/^i18n\.(n?gettext|has_translation)(_|$)/,Ee=(e,t,r)=>{const n=new H({}),i=new Set,s=()=>{i.forEach(d=>d())},a=d=>(i.add(d),()=>i.delete(d)),c=(d="default")=>n.data[d],l=(d,p="default")=>{n.data[p]={...n.data[p],...d},n.data[p][""]={...z[""],...n.data[p]?.[""]},delete n.pluralForms[p]},u=(d,p)=>{l(d,p),s()},h=(d,p="default")=>{n.data[p]={...n.data[p],...d,"":{...z[""],...n.data[p]?.[""],...d?.[""]}},delete n.pluralForms[p],s()},o=(d,p)=>{n.data={},n.pluralForms={},u(d,p)},m=(d="default",p,g,v,E)=>(n.data[d]||l(void 0,d),n.dcnpgettext(d,p,g,v,E)),w=(d="default")=>d,_=(d,p)=>{let g=m(p,void 0,d);return r?(g=r.applyFilters("i18n.gettext",g,d,p),r.applyFilters("i18n.gettext_"+w(p),g,d,p)):g},f=(d,p,g)=>{let v=m(g,p,d);return r?(v=r.applyFilters("i18n.gettext_with_context",v,d,p,g),r.applyFilters("i18n.gettext_with_context_"+w(g),v,d,p,g)):v},x=(d,p,g,v)=>{let E=m(v,void 0,d,p,g);return r?(E=r.applyFilters("i18n.ngettext",E,d,p,g,v),r.applyFilters("i18n.ngettext_"+w(v),E,d,p,g,v)):E},S=(d,p,g,v,E)=>{let F=m(E,v,d,p,g);return r?(F=r.applyFilters("i18n.ngettext_with_context",F,d,p,g,v,E),r.applyFilters("i18n.ngettext_with_context_"+w(E),F,d,p,g,v,E)):F},O=()=>f("ltr","text direction")==="rtl",P=(d,p,g)=>{const v=p?p+""+d:d;let E=!!n.data?.[g??"default"]?.[v];return r&&(E=r.applyFilters("i18n.has_translation",E,d,p,g),E=r.applyFilters("i18n.has_translation_"+w(g),E,d,p,g)),E};if(r){const d=p=>{ve.test(p)&&s()};r.addAction("hookAdded","core/i18n",d),r.addAction("hookRemoved","core/i18n",d)}return{getLocaleData:c,setLocaleData:u,addLocaleData:h,resetLocaleData:o,subscribe:a,__:_,_x:f,_n:x,_nx:S,isRTL:O,hasTranslation:P}};function re(e){return typeof e!="string"||e===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}function D(e){return typeof e!="string"||e===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}function N(e,t){return function(n,i,s,a=10){const c=e[t];if(!D(n)||!re(i))return;if(typeof s!="function"){console.error("The hook callback must be a function.");return}if(typeof a!="number"){console.error("If specified, the hook priority must be a number.");return}const l={callback:s,priority:a,namespace:i};if(c[n]){const u=c[n].handlers;let h;for(h=u.length;h>0&&!(a>=u[h-1].priority);h--);h===u.length?u[h]=l:u.splice(h,0,l),c.__current.forEach(o=>{o.name===n&&o.currentIndex>=h&&o.currentIndex++})}else c[n]={handlers:[l],runs:0};n!=="hookAdded"&&e.doAction("hookAdded",n,i,s,a)}}function k(e,t,r=!1){return function(i,s){const a=e[t];if(!D(i)||!r&&!re(s))return;if(!a[i])return 0;let c=0;if(r)c=a[i].handlers.length,a[i]={runs:a[i].runs,handlers:[]};else{const l=a[i].handlers;for(let u=l.length-1;u>=0;u--)l[u].namespace===s&&(l.splice(u,1),c++,a.__current.forEach(h=>{h.name===i&&h.currentIndex>=u&&h.currentIndex--}))}return i!=="hookRemoved"&&e.doAction("hookRemoved",i,s),c}}function q(e,t){return function(n,i){const s=e[t];return typeof i<"u"?n in s&&s[n].handlers.some(a=>a.namespace===i):n in s}}function K(e,t,r=!1){return function(i,...s){const a=e[t];a[i]||(a[i]={handlers:[],runs:0}),a[i].runs++;const c=a[i].handlers;if(!c||!c.length)return r?s[0]:void 0;const l={name:i,currentIndex:0};for(a.__current.push(l);l.currentIndex<c.length;){const h=c[l.currentIndex].callback.apply(null,s);r&&(s[0]=h),l.currentIndex++}if(a.__current.pop(),r)return s[0]}}function B(e,t){return function(){var n;const i=e[t];return(n=i.__current[i.__current.length-1]?.name)!==null&&n!==void 0?n:null}}function G(e,t){return function(n){const i=e[t];return typeof n>"u"?typeof i.__current[0]<"u":i.__current[0]?n===i.__current[0].name:!1}}function Q(e,t){return function(n){const i=e[t];if(D(n))return i[n]&&i[n].runs?i[n].runs:0}}class Ae{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=N(this,"actions"),this.addFilter=N(this,"filters"),this.removeAction=k(this,"actions"),this.removeFilter=k(this,"filters"),this.hasAction=q(this,"actions"),this.hasFilter=q(this,"filters"),this.removeAllActions=k(this,"actions",!0),this.removeAllFilters=k(this,"filters",!0),this.doAction=K(this,"actions"),this.applyFilters=K(this,"filters",!0),this.currentAction=B(this,"actions"),this.currentFilter=B(this,"filters"),this.doingAction=G(this,"actions"),this.doingFilter=G(this,"filters"),this.didAction=Q(this,"actions"),this.didFilter=Q(this,"filters")}}function xe(){return new Ae}const Se=xe(),b=Ee(void 0,void 0,Se);b.getLocaleData.bind(b);b.setLocaleData.bind(b);b.resetLocaleData.bind(b);b.subscribe.bind(b);const L=b.__.bind(b);b._x.bind(b);b._n.bind(b);b._nx.bind(b);b.isRTL.bind(b);b.hasTranslation.bind(b);function Oe(e){const t=(r,n)=>{const{headers:i={}}=r;for(const s in i)if(s.toLowerCase()==="x-wp-nonce"&&i[s]===t.nonce)return n(r);return n({...r,headers:{...i,"X-WP-Nonce":t.nonce}})};return t.nonce=e,t}const ne=(e,t)=>{let r=e.path,n,i;return typeof e.namespace=="string"&&typeof e.endpoint=="string"&&(n=e.namespace.replace(/^\/|\/$/g,""),i=e.endpoint.replace(/^\//,""),i?r=n+"/"+i:r=n),delete e.namespace,delete e.endpoint,t({...e,path:r})},Pe=e=>(t,r)=>ne(t,n=>{let i=n.url,s=n.path,a;return typeof s=="string"&&(a=e,e.indexOf("?")!==-1&&(s=s.replace("?","&")),s=s.replace(/^\//,""),typeof a=="string"&&a.indexOf("?")!==-1&&(s=s.replace("?","&")),i=a+s),r({...n,url:i})});function Te(e){let t;try{t=new URL(e,"http://example.com").search.substring(1)}catch{}if(t)return t}function ie(e){let t="";const r=Object.entries(e);let n;for(;n=r.shift();){let[i,s]=n;if(Array.isArray(s)||s&&s.constructor===Object){const c=Object.entries(s).reverse();for(const[l,u]of c)r.unshift([`${i}[${l}]`,u])}else s!==void 0&&(s===null&&(s=""),t+="&"+[i,s].map(encodeURIComponent).join("="))}return t.substr(1)}function Re(e){try{return decodeURIComponent(e)}catch{return e}}function Fe(e,t,r){const n=t.length,i=n-1;for(let s=0;s<n;s++){let a=t[s];!a&&Array.isArray(e)&&(a=e.length.toString()),a=["__proto__","constructor","prototype"].includes(a)?a.toUpperCase():a;const c=!isNaN(Number(t[s+1]));e[a]=s===i?r:e[a]||(c?[]:{}),Array.isArray(e[a])&&!c&&(e[a]={...e[a]}),e=e[a]}}function M(e){return(Te(e)||"").replace(/\+/g,"%20").split("&").reduce((t,r)=>{const[n,i=""]=r.split("=").filter(Boolean).map(Re);if(n){const s=n.replace(/\]/g,"").split("[");Fe(t,s,i)}return t},Object.create(null))}function A(e="",t){if(!t||!Object.keys(t).length)return e;let r=e;const n=e.indexOf("?");return n!==-1&&(t=Object.assign(M(e),t),r=r.substr(0,n)),r+"?"+ie(t)}function j(e,t){return M(e)[t]}function J(e,t){return j(e,t)!==void 0}function X(e,...t){const r=e.indexOf("?");if(r===-1)return e;const n=M(e),i=e.substr(0,r);t.forEach(a=>delete n[a]);const s=ie(n);return s?i+"?"+s:i}function V(e){const t=e.split("?"),r=t[1],n=t[0];return r?n+"?"+r.split("&").map(i=>i.split("=")).map(i=>i.map(decodeURIComponent)).sort((i,s)=>i[0].localeCompare(s[0])).map(i=>i.map(encodeURIComponent)).map(i=>i.join("=")).join("&"):n}function ke(e){const t=Object.fromEntries(Object.entries(e).map(([r,n])=>[V(r),n]));return(r,n)=>{const{parse:i=!0}=r;let s=r.path;if(!s&&r.url){const{rest_route:l,...u}=M(r.url);typeof l=="string"&&(s=A(l,u))}if(typeof s!="string")return n(r);const a=r.method||"GET",c=V(s);if(a==="GET"&&t[c]){const l=t[c];return delete t[c],Z(l,!!i)}else if(a==="OPTIONS"&&t[a]&&t[a][c]){const l=t[a][c];return delete t[a][c],Z(l,!!i)}return n(r)}}function Z(e,t){return Promise.resolve(t?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}const Le=({path:e,url:t,...r},n)=>({...r,url:t&&A(t,n),path:e&&A(e,n)}),Y=e=>e.json?e.json():Promise.reject(e),Me=e=>{if(!e)return{};const t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}},W=e=>{const{next:t}=Me(e.headers.get("link"));return t},Ie=e=>{const t=!!e.path&&e.path.indexOf("per_page=-1")!==-1,r=!!e.url&&e.url.indexOf("per_page=-1")!==-1;return t||r},se=async(e,t)=>{if(e.parse===!1||!Ie(e))return t(e);const r=await y({...Le(e,{per_page:100}),parse:!1}),n=await Y(r);if(!Array.isArray(n))return n;let i=W(r);if(!i)return n;let s=[].concat(n);for(;i;){const a=await y({...e,path:void 0,url:i,parse:!1}),c=await Y(a);s=s.concat(c),i=W(a)}return s},je=new Set(["PATCH","PUT","DELETE"]),He="GET",De=(e,t)=>{const{method:r=He}=e;return je.has(r.toUpperCase())&&(e={...e,headers:{...e.headers,"X-HTTP-Method-Override":r,"Content-Type":"application/json"},method:"POST"}),t(e)},Ce=(e,t)=>(typeof e.url=="string"&&!J(e.url,"_locale")&&(e.url=A(e.url,{_locale:"user"})),typeof e.path=="string"&&!J(e.path,"_locale")&&(e.path=A(e.path,{_locale:"user"})),t(e)),Ue=(e,t=!0)=>t?e.status===204?null:e.json?e.json():Promise.reject(e):e,$e=e=>{const t={code:"invalid_json",message:L("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch(()=>{throw t})},ae=(e,t=!0)=>Promise.resolve(Ue(e,t)).catch(r=>C(r,t));function C(e,t=!0){if(!t)throw e;return $e(e).then(r=>{const n={code:"unknown_error",message:L("An unknown error occurred.")};throw r||n})}function ze(e){const t=!!e.method&&e.method==="POST";return(!!e.path&&e.path.indexOf("/wp/v2/media")!==-1||!!e.url&&e.url.indexOf("/wp/v2/media")!==-1)&&t}const Ne=(e,t)=>{if(!ze(e))return t(e);let r=0;const n=5,i=s=>(r++,t({path:`/wp/v2/media/${s}/post-process`,method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch(()=>r<n?i(s):(t({path:`/wp/v2/media/${s}?force=true`,method:"DELETE"}),Promise.reject())));return t({...e,parse:!1}).catch(s=>{const a=s.headers.get("x-wp-upload-attachment-id");return s.status>=500&&s.status<600&&a?i(a).catch(()=>e.parse!==!1?Promise.reject({code:"post_process",message:L("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(s)):C(s,e.parse)}).then(s=>ae(s,e.parse))},qe=e=>(t,r)=>{if(typeof t.url=="string"){const n=j(t.url,"wp_theme_preview");n===void 0?t.url=A(t.url,{wp_theme_preview:e}):n===""&&(t.url=X(t.url,"wp_theme_preview"))}if(typeof t.path=="string"){const n=j(t.path,"wp_theme_preview");n===void 0?t.path=A(t.path,{wp_theme_preview:e}):n===""&&(t.path=X(t.path,"wp_theme_preview"))}return r(t)},Ke={Accept:"application/json, */*;q=0.1"},Be={credentials:"include"},oe=[Ce,ne,De,se];function Ge(e){oe.unshift(e)}const ce=e=>{if(e.status>=200&&e.status<300)return e;throw e},Qe=e=>{const{url:t,path:r,data:n,parse:i=!0,...s}=e;let{body:a,headers:c}=e;return c={...Ke,...c},n&&(a=JSON.stringify(n),c["Content-Type"]="application/json"),window.fetch(t||r||window.location.href,{...Be,...s,body:a,headers:c}).then(u=>Promise.resolve(u).then(ce).catch(h=>C(h,i)).then(h=>ae(h,i)),u=>{throw u&&u.name==="AbortError"?u:{code:"fetch_error",message:L("You are probably offline.")}})};let ue=Qe;function Je(e){ue=e}function y(e){return oe.reduceRight((r,n)=>i=>n(i,r),ue)(e).catch(r=>r.code!=="rest_cookie_invalid_nonce"?Promise.reject(r):window.fetch(y.nonceEndpoint).then(ce).then(n=>n.text()).then(n=>(y.nonceMiddleware.nonce=n,y(e))))}y.use=Ge;y.setFetchHandler=Je;y.createNonceMiddleware=Oe;y.createPreloadingMiddleware=ke;y.createRootURLMiddleware=Pe;y.fetchAllMiddleware=se;y.mediaUploadMiddleware=Ne;y.createThemePreviewMiddleware=qe;function R(){if(window.GBKit)return window.GBKit;const e={};try{return JSON.parse(localStorage.getItem("GBKit"))||e}catch(t){return console.error("Failed parsing GBKit from localStorage:",t),e}}function Xe(){const{post:e}=R();return e?{id:e.id,title:{raw:decodeURIComponent(e.title)},content:{raw:decodeURIComponent(e.content)},type:e.type||"post"}:{type:"post",status:"draft"}}function Ve(){const{siteApiRoot:e,authHeader:t}=R();y.use(y.createRootURLMiddleware(e)),y.use(Ze),y.use(Ye),y.use(We(t)),y.use(y.createPreloadingMiddleware({"/wp/v2/types?context=view":{body:{post:{description:"",hierarchical:!1,has_archive:!1,name:"Posts",slug:"post",taxonomies:["category","post_tag"],rest_base:"posts",rest_namespace:"wp/v2",template:[],template_lock:!1,_links:{}},page:{description:"",hierarchical:!0,has_archive:!1,name:"Pages",slug:"page",taxonomies:[],rest_base:"pages",rest_namespace:"wp/v2",template:[],template_lock:!1,_links:{}}}},"/wp/v2/types/post?context=edit":{body:{name:"Posts",slug:"post",supports:{title:!0,editor:!0,author:!0,thumbnail:!0,excerpt:!0,trackbacks:!0,"custom-fields":!0,comments:!0,revisions:!0,"post-formats":!0,autosave:!0},taxonomies:["category","post_tag"],rest_base:"posts",rest_namespace:"wp/v2",template:[],template_lock:!1}}}))}function Ze(e,t){return e.mode="cors",delete e.headers["x-wp-api-fetch-from-editor"],t(e)}function Ye(e,t){const{siteApiNamespace:r}=R();return e.path&&r&&!e.path.includes(r)&&(e.path=e.path.replace(/^((?:\/[\w.-]+){2})/,`$1/${r}`)),t(e)}function We(e){return(t,r)=>(t.headers=t.headers||{},e&&(t.headers.Authorization=e),r(t))}window.GBKit=R();window.wp=window.wp||{};window.wp.apiFetch=y;Ve();le();window.initalizeRemoteEditor=le;async function le(){try{const{themeStyles:e,siteApiRoot:t}=R(),{styles:r,scripts:n}=await y({path:"__experimental/wp-block-editor/v1/editor-assets"});await et([...r,...n].join(""));const{dispatch:i}=window.wp.data,{store:s}=window.wp.editor,{store:a}=window.wp.preferences;t?.length&&y({path:"/wp-block-editor/v1/settings"}).then(w=>{i(s).updateEditorSettings(w)}).catch(w=>{console.error("Error fetching editor settings:",w)}),i(a).setDefaults("core/edit-post",{themeStyles:e});const l={post:Xe()},{default:u}=await pe(()=>import("./App.js"),[],import.meta.url),{createRoot:h,createElement:o,StrictMode:m}=window.wp.element;h(document.getElementById("root")).render(o(m,null,o(u,l)))}catch(e){console.error("Error initializing the remote editor",e)}}async function et(e){const t=new window.DOMParser().parseFromString(e,"text/html"),r=Array.from(t.querySelectorAll('link[rel="stylesheet"],script')).filter(n=>n.id&&!rt.test(n.src));for(const n of r)await nt(n)}const tt=["api-fetch"],rt=new RegExp(tt.flatMap(e=>[`wp-content/plugins/gutenberg/build/${e.replace(/\//g,"\\/")}\\b`,`wp-includes/js/dist/${e.replace(/\//g,"\\/")}\\b`]).join("|"));function nt(e){return new Promise(t=>{const r=document.createElement(e.nodeName);["id","rel","src","href","type"].forEach(n=>{e[n]&&(r[n]=e[n])}),e.innerHTML&&r.appendChild(document.createTextNode(e.innerHTML)),r.onload=()=>t(!0),r.onerror=n=>{console.error("Error loading asset",n),t(!1)},document.body.appendChild(r),(r.nodeName.toLowerCase()==="link"||r.nodeName.toLowerCase()==="script"&&!r.src)&&t()})}
