(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8399,7533],{62705:function(t,n,r){var e=r(55639).Symbol;t.exports=e},44239:function(t,n,r){var e=r(62705),o=r(89607),c=r(2333),i=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):c(t)}},27561:function(t,n,r){var e=r(67990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},31957:function(t,n,r){var e="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=e},89607:function(t,n,r){var e=r(62705),o=Object.prototype,c=o.hasOwnProperty,i=o.toString,u=e?e.toStringTag:void 0;t.exports=function(t){var n=c.call(t,u),r=t[u];try{t[u]=void 0;var e=!0}catch(t){}var o=i.call(t);return e&&(n?t[u]=r:delete t[u]),o}},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},55639:function(t,n,r){var e=r(31957),o="object"==typeof self&&self&&self.Object===Object&&self,c=e||o||Function("return this")();t.exports=c},67990:function(t){var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},23279:function(t,n,r){var e=r(13218),o=r(7771),c=r(14841),i=Math.max,u=Math.min;t.exports=function(t,n,r){var a,s,f,l,p,d,h=0,v=!1,y=!1,m=!0;if("function"!=typeof t)throw TypeError("Expected a function");function b(n){var r=a,e=s;return a=s=void 0,h=n,l=t.apply(e,r)}function g(t){var r=t-d,e=t-h;return void 0===d||r>=n||r<0||y&&e>=f}function w(){var t,r,e,c=o();if(g(c))return j(c);p=setTimeout(w,(t=c-d,r=c-h,e=n-t,y?u(e,f-r):e))}function j(t){return(p=void 0,m&&a)?b(t):(a=s=void 0,l)}function x(){var t,r=o(),e=g(r);if(a=arguments,s=this,d=r,e){if(void 0===p)return h=t=d,p=setTimeout(w,n),v?b(t):l;if(y)return clearTimeout(p),p=setTimeout(w,n),b(d)}return void 0===p&&(p=setTimeout(w,n)),l}return n=c(n)||0,e(r)&&(v=!!r.leading,f=(y="maxWait"in r)?i(c(r.maxWait)||0,n):f,m="trailing"in r?!!r.trailing:m),x.cancel=function(){void 0!==p&&clearTimeout(p),h=0,a=d=s=p=void 0},x.flush=function(){return void 0===p?l:j(o())},x}},13218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},33448:function(t,n,r){var e=r(44239),o=r(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},7771:function(t,n,r){var e=r(55639);t.exports=function(){return e.Date.now()}},14841:function(t,n,r){var e=r(27561),o=r(13218),c=r(33448),i=0/0,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return i;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=a.test(t);return r||s.test(t)?f(t.slice(2),r?2:8):u.test(t)?i:+t}},88054:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readonly",function(){return r(85466)}])},69183:function(t,n,r){"use strict";r.d(n,{A:function(){return a}});var e=r(85893),o=r(14670),c=r(71577);let i=()=>{window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},u=t=>{let{message:n,componentName:r,details:o,canRetry:c}=t;return(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."}),!!c&&(0,e.jsx)("p",{children:"You may optionally retry, however functionality, if there are errors, may be unexpected."}),(0,e.jsxs)("code",{children:[(0,e.jsx)("div",{children:n&&"Error: ".concat(n)}),(0,e.jsxs)("div",{children:["Component: ",r]}),(0,e.jsx)("div",{children:o&&o})]})]})},a=t=>{let{message:n,componentName:r,details:a,retryFunction:s}=t;return(0,e.jsx)(o.Z,{message:"Error",showIcon:!0,description:(0,e.jsx)(u,{message:n,details:a,componentName:r,canRetry:!!s}),type:"error",action:(0,e.jsxs)(e.Fragment,{children:[s&&(0,e.jsx)(c.Z,{ghost:!0,size:"small",onClick:s,children:"Retry"}),(0,e.jsx)(c.Z,{ghost:!0,size:"small",danger:!0,onClick:i,children:"Report Error"})]})})}},85466:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var e=r(85893),o=r(4480),c=r(92093),i=r(44974);function u(){let t=(0,o.sJ)(i.db),n=(0,o.sJ)(i.pH),r=(0,o.sJ)(i.di);return(0,e.jsxs)("div",{children:[(0,e.jsx)(i.me,{}),t&&(0,e.jsx)(c.ChatContainer,{messages:n,usernameToHighlight:t.displayName,chatUserId:t.id,isModerator:!1,showInput:!1,height:"100vh",chatAvailable:r})]})}},81453:function(t,n,r){"use strict";r.d(n,{$i:function(){return S},$l:function(){return X},Bu:function(){return m},E8:function(){return U},Ff:function(){return N},GC:function(){return w},GR:function(){return q},HP:function(){return P},IO:function(){return A},Kp:function(){return h},Kt:function(){return H},M_:function(){return I},N$:function(){return F},NE:function(){return a},NM:function(){return y},Q_:function(){return s},Qc:function(){return O},RB:function(){return b},UJ:function(){return W},WB:function(){return i},WE:function(){return _},WQ:function(){return E},Wr:function(){return C},XA:function(){return B},Y9:function(){return D},a_:function(){return d},ao:function(){return l},bl:function(){return f},e_:function(){return M},hn:function(){return k},iG:function(){return R},iV:function(){return p},jr:function(){return g},kb:function(){return K},kg:function(){return z},ms:function(){return T},nx:function(){return j},op:function(){return $},qk:function(){return v},rQ:function(){return J},sG:function(){return x},um:function(){return G}});var e=r(34155);let o=e.env.NEXT_PUBLIC_ADMIN_USERNAME,c=e.env.NEXT_PUBLIC_ADMIN_STREAMKEY,i="/",u="".concat(i,"api/admin/"),a=15e3,s="".concat(u,"status"),f="".concat(u,"serverconfig"),l="".concat(u,"config"),p="".concat(u,"viewersOverTime"),d="".concat(u,"viewers"),h="".concat(u,"chat/clients"),v="".concat(u,"chat/users/disabled"),y="".concat(u,"chat/users/setenabled"),m="".concat(u,"chat/users/ipbans"),b="".concat(u,"chat/users/ipbans/remove"),g="".concat(u,"chat/users/setmoderator"),w="".concat(u,"chat/users/moderators"),j="".concat(u,"hardwarestats"),x="".concat(u,"logs"),E="".concat(u,"logs/warnings"),_="".concat(u,"chat/messages"),k="/api/admin/chat/messagevisibility",O="".concat(u,"emoji/upload"),N="".concat(u,"emoji/delete"),T="".concat(u,"accesstokens"),C="".concat(u,"accesstokens/delete"),A="".concat(u,"accesstokens/create"),B="".concat(u,"webhooks"),I="".concat(u,"webhooks/delete"),R="".concat(u,"webhooks/create"),S="".concat(i,"api/socialplatforms"),M="".concat(u,"federation/send"),P="".concat(u,"followers"),U="".concat(u,"followers/pending"),D="".concat(u,"followers/blocked"),K="".concat(u,"followers/approve"),$="".concat(u,"federation/actions"),F="".concat(u,"metrics/video"),G="".concat(u,"config/streamkeys"),W="".concat(u,"yp/reset");async function J(t,n){let{data:r,method:e="GET",auth:i=!0}=n||{},u={method:e};if(r&&(u.body=JSON.stringify(r)),i&&o&&c){let t=btoa("".concat(o,":").concat(c));u.headers={Authorization:"Basic ".concat(t)},u.mode="cors",u.credentials="include"}try{let n=await fetch(t,u),r=await n.json();if(!n.ok){let t=r.message||"An error has occurred: ".concat(n.status);throw Error(t)}return r}catch(t){return console.error(t),t}}async function X(t,n){let r={method:"GET",auth:!1,...n};return J(t,r)}async function z(t){try{let n=await fetch(t,{referrerPolicy:"no-referrer",referrer:""});if(!n.ok){let t="An error has occured: ".concat(n.status);throw Error(t)}let r=await n.json();return r}catch(t){console.log(t)}return{}}async function H(){return z("https://api.github.com/repos/owncast/owncast/releases/latest")}let Q=/^\d+(\.\d+){0,2}$/;async function q(t){let n=await H(),r=n.tag_name;return("v"===r.substr(0,1)&&(r=r.substr(1)),!function(t,n){if(!t||!n||0===t.length||0===n.length)return!1;if(t===n)return!0;if(Q.test(t)&&Q.test(n)){let r=t.split(".");for(;r.length<3;)r.push("0");let e=n.split(".");for(;e.length<3;)e.push("0");for(let t=0;t<3;t++){let n=parseInt(r[t],10),o=parseInt(e[t],10);if(n!==o)return n>o}return!0}return t>=n}(t,r))?r:null}},35800:function(t,n,r){!function(t,n){"use strict";var r=function(t){if(t&&t.__esModule)return t;var n=Object.create(null);return t&&Object.keys(t).forEach(function(r){if("default"!==r){var e=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:function(){return t[r]}})}}),n.default=t,Object.freeze(n)}(n);function e(t,n){return(e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var o={error:null},c=function(t){function n(){for(var n,r=arguments.length,e=Array(r),c=0;c<r;c++)e[c]=arguments[c];return(n=t.call.apply(t,[this].concat(e))||this).state=o,n.resetErrorBoundary=function(){for(var t,r=arguments.length,e=Array(r),o=0;o<r;o++)e[o]=arguments[o];null==n.props.onReset||(t=n.props).onReset.apply(t,e),n.reset()},n}(c=n).prototype=Object.create(t.prototype),c.prototype.constructor=c,e(c,t),n.getDerivedStateFromError=function(t){return{error:t}};var c,i=n.prototype;return i.reset=function(){this.setState(o)},i.componentDidCatch=function(t,n){var r,e;null==(r=(e=this.props).onError)||r.call(e,t,n)},i.componentDidUpdate=function(t,n){var r,e,o,c,i=this.state.error,u=this.props.resetKeys;null!==i&&null!==n.error&&(void 0===(r=t.resetKeys)&&(r=[]),void 0===(e=u)&&(e=[]),r.length!==e.length||r.some(function(t,n){return!Object.is(t,e[n])}))&&(null==(o=(c=this.props).onResetKeysChange)||o.call(c,t.resetKeys,u),this.reset())},i.render=function(){var t=this.state.error,n=this.props,e=n.fallbackRender,o=n.FallbackComponent,c=n.fallback;if(null!==t){var i={error:t,resetErrorBoundary:this.resetErrorBoundary};if(r.isValidElement(c))return c;if("function"==typeof e)return e(i);if(o)return r.createElement(o,i);throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},n}(r.Component);t.ErrorBoundary=c,t.useErrorHandler=function(t){var n=r.useState(null),e=n[0],o=n[1];if(null!=t)throw t;if(null!=e)throw e;return o},t.withErrorBoundary=function(t,n){var e=function(e){return r.createElement(c,n,r.createElement(t,e))},o=t.displayName||t.name||"Unknown";return e.displayName="withErrorBoundary("+o+")",e},Object.defineProperty(t,"__esModule",{value:!0})}(n,r(67294))}},function(t){t.O(0,[1272,8700,2744,7941,7606,5320,4974,2093,9774,2888,179],function(){return t(t.s=88054)}),_N_E=t.O()}]);