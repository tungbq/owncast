(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(41594)}])},42093:function(e,t,n){"use strict";n.d(t,{e:function(){return d}});var o=n(85893),s=n(71577),a=n(5152),r=n.n(a),i=n(75624),l=n.n(i);let c=r()(()=>n.e(5903).then(n.t.bind(n,5903,23)),{loadableGenerated:{webpack:()=>[5903]},ssr:!1}),d=e=>{let{onClick:t,props:n}=e;return(0,o.jsx)(s.Z,{...n,type:"primary",className:l().button,icon:(0,o.jsx)(c,{}),onClick:t,id:"follow-button",children:"Follow"})}},21756:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var o=n(85893),s=n(4480),a=n(44974);let r=()=>{let e=(0,s.sJ)(a.g1),{appearanceVariables:t,customStyles:n}=e,r=Object.keys(t).filter(e=>!!t[e]).map(e=>"--".concat(e,": ").concat(t[e]));return(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(r.join(";\n"),"\n				}\n				").concat(n,"\n			")}})}},69183:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var o=n(85893),s=n(14670),a=n(71577);let r=()=>{window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},i=e=>{let{message:t,componentName:n,details:s,canRetry:a}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."}),!!a&&(0,o.jsx)("p",{children:"You may optionally retry, however functionality, if there are errors, may be unexpected."}),(0,o.jsxs)("code",{children:[(0,o.jsx)("div",{children:t&&"Error: ".concat(t)}),(0,o.jsxs)("div",{children:["Component: ",n]}),(0,o.jsx)("div",{children:s&&s})]})]})},l=e=>{let{message:t,componentName:n,details:l,retryFunction:c}=e;return(0,o.jsx)(s.Z,{message:"Error",showIcon:!0,description:(0,o.jsx)(i,{message:t,details:l,componentName:n,canRetry:!!c}),type:"error",action:(0,o.jsxs)(o.Fragment,{children:[c&&(0,o.jsx)(a.Z,{ghost:!0,size:"small",onClick:c,children:"Retry"}),(0,o.jsx)(a.Z,{ghost:!0,size:"small",danger:!0,onClick:r,children:"Report Error"})]})})}},14940:function(e,t,n){"use strict";n.d(t,{h:function(){return f}});var o=n(85893),s=n(94199),a=n(20550),r=n(94184),i=n.n(r),l=n(5152),c=n.n(l),d=n(41664),h=n.n(d),u=n(42099),p=n(91935),m=n.n(p);let x=c()(()=>Promise.all([n.e(4931),n.e(3013),n.e(9266)]).then(n.bind(n,79266)).then(e=>e.UserDropdown),{loadableGenerated:{webpack:()=>[79266]},ssr:!1}),f=e=>{let{name:t,chatAvailable:n,chatDisabled:r,online:l}=e;return(0,o.jsxs)("header",{className:i()(["".concat(m().header)],"global-header"),children:[l?(0,o.jsx)(h(),{href:"#player",className:m().skipLink,children:"Skip to player"}):(0,o.jsx)(h(),{href:"#offline-message",className:m().skipLink,children:"Skip to offline message"}),(0,o.jsx)(h(),{href:"#skip-to-content",className:m().skipLink,children:"Skip to page content"}),(0,o.jsx)(h(),{href:"#footer",className:m().skipLink,children:"Skip to footer"}),(0,o.jsxs)("div",{className:m().logo,children:[(0,o.jsx)("div",{id:"header-logo",className:m().logoImage,children:(0,o.jsx)(u.C,{variant:"contrast"})}),(0,o.jsx)("h1",{className:m().title,id:"global-header-text",children:t})]}),n&&!r&&(0,o.jsx)(x,{}),!n&&!r&&(0,o.jsx)(s.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,o.jsx)(a.Z,{className:m().offlineTag,children:"Chat offline"})})]})};t.Z=f},29614:function(e,t,n){"use strict";n.r(t),n.d(t,{Modal:function(){return d}});var o=n(85893),s=n(85402),a=n(26303),r=n(11382),i=n(67294),l=n(70051),c=n.n(l);let d=e=>{let{title:t,url:n,open:l,handleOk:d,handleCancel:h,afterClose:u,height:p,width:m,children:x}=e,[f,j]=(0,i.useState)(!!n),g="100%",_="520px";n&&(g="70vh",_="900px");let b={padding:"0px",minHeight:p,height:null!=p?p:g},v=n&&(0,o.jsx)("iframe",{title:t,src:n,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>j(!1)});return(0,o.jsx)(s.Z,{title:t,open:l,onOk:d,onCancel:h,afterClose:u,bodyStyle:b,width:null!=m?m:_,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,children:(0,o.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[f&&(0,o.jsx)(a.Z,{active:f,style:{padding:"10px"},paragraph:{rows:10}}),v&&(0,o.jsx)("div",{style:{display:f?"none":"inline"},children:v}),x&&(0,o.jsx)("div",{className:c().content,children:x}),f&&(0,o.jsx)(r.Z,{className:c().spinner,spinning:f,size:"large"})]})})};t.default=d,d.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},74681:function(e,t,n){"use strict";n.d(t,{R:function(){return p}});var o=n(85893),s=n(27049),a=n(45938),r=n(5152),i=n.n(r),l=n(94184),c=n.n(l),d=n(40158),h=n.n(d);let u=i()(()=>Promise.all([n.e(2074),n.e(9095)]).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1}),p=e=>{let t,{streamName:n,customText:r,lastLive:i,notificationsEnabled:l,fediverseAccount:d,showsHeader:p=!0,onNotifyClick:m,onFollowClick:x,className:f}=e;return t=r||(!r&&l&&d?(0,o.jsxs)("span",{children:["This stream is offline. You can"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:h().actionLink,onClick:m,children:"be notified"})," ","the next time ",n," goes live or"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:h().actionLink,onClick:x,children:"follow"})," ",d," on the Fediverse."]}):!r&&l?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:h().actionLink,onClick:m,children:"Be notified"})," ","the next time ",n," goes live."]}):!r&&d?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:h().actionLink,onClick:x,children:"Follow"})," ",d," on the Fediverse to see the next time ",n," goes live."]}):"This stream is offline. Check back soon!"),(0,o.jsx)("div",{id:"offline-banner",className:c()(h().outerContainer,f),children:(0,o.jsxs)("div",{className:h().innerContainer,children:[p&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:h().header,children:n}),(0,o.jsx)(s.Z,{className:h().separator})]}),(0,o.jsx)("div",{className:h().bodyText,children:t}),i&&(0,o.jsxs)("div",{className:h().lastLiveDate,children:[(0,o.jsx)(u,{className:h().clockIcon}),"Last live ".concat((0,a.Z)(new Date(i))," ago.")]})]})})}},48831:function(e,t,n){"use strict";n.d(t,{X:function(){return x}});var o=n(85893),s=n(45938),a=n(68730),r=n(67294),i=n(5152),l=n.n(i),c=n(94184),d=n.n(c),h=n(29485),u=n.n(h),p=n(63516);let m=l()(()=>Promise.all([n.e(2074),n.e(1965)]).then(n.t.bind(n,41965,23)),{loadableGenerated:{webpack:()=>[41965]},ssr:!1}),x=e=>{let t,{online:n,lastConnectTime:i,lastDisconnectTime:l,viewerCount:c,className:h}=e,[,x]=(0,r.useState)(new Date);(0,r.useEffect)(()=>{let e=setInterval(()=>x(new Date),1e3);return()=>{clearInterval(e)}},[]);let f="";if(n&&i){let e=function(e){let t="hour",n="minute",o=(0,a.Z)({start:e,end:new Date});return o.days>=1?"".concat(o.days," ").concat((0,p._6)("day",o.days),"\n			").concat(o.hours," ").concat((0,p._6)(t,o.hours)):o.hours>=1?"".concat(o.hours," ").concat((0,p._6)(t,o.hours)," ").concat(o.minutes,"\n			").concat((0,p._6)(n,o.minutes)):"".concat(o.minutes," ").concat((0,p._6)(n,o.minutes),"\n		").concat(o.seconds," ").concat((0,p._6)("second",o.seconds))}(new Date(i));f=n?"Live for  ".concat(e):"Offline",t=c>0&&(0,o.jsxs)("div",{className:u().right,children:[(0,o.jsx)("span",{children:(0,o.jsx)(m,{})}),(0,o.jsx)("span",{children:" ".concat(c)})]})}else!n&&(f="Offline",l&&(t="Last live ".concat((0,s.Z)(new Date(l))," ago.")));return(0,o.jsxs)("div",{className:d()(u().statusbar,h),role:"status",children:[(0,o.jsx)("div",{children:f}),(0,o.jsx)("div",{children:t})]})};x.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},41594:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eO}});var o=n(85893),s=n(4480),a=n(9008),r=n.n(a),i=n(67294),l=n(97183),c=n(5152),d=n.n(c),h=n(4298),u=n.n(h),p=n(44974),m=n(26303),x=n(94184),f=n.n(x),j=n(61225),g=n(34148),_=n(18843),b=n.n(_),v=n(87412),w=n(60522),y=n.n(w);let k=d()(()=>Promise.all([n.e(1272),n.e(8700),n.e(5320),n.e(2093),n.e(7533)]).then(n.bind(n,92093)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[92093]},ssr:!1}),N=()=>{let e=(0,s.sJ)(p.db),t=(0,s.sJ)(p.pH),n=(0,s.sJ)(p.di);if(!e)return(0,o.jsx)(v.ZP,{className:y().root,collapsedWidth:0,width:320});let{id:a,isModerator:r,displayName:i}=e;return(0,o.jsx)(v.ZP,{className:y().root,collapsedWidth:0,width:320,children:(0,o.jsx)(k,{messages:t,usernameToHighlight:i,chatUserId:a,isModerator:r,chatAvailable:n})})};var C=n(84379),S=n.n(C);let L=e=>{let{version:t}=e;return(0,o.jsxs)("footer",{className:S().footer,id:"footer",children:[(0,o.jsxs)("span",{children:["Powered by ",(0,o.jsx)("a",{href:"https://owncast.online",children:t})]}),(0,o.jsxs)("span",{className:S().links,children:[(0,o.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"}),(0,o.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"}),(0,o.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})]})]})};var T=n(18700),B=n.n(T);let E=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"".concat(B().row),children:t})};var I=n(71577),P=n(75624),H=n.n(P);let M=e=>{let{action:t,primary:n=!0,externalActionSelected:s}=e,{title:a,description:r,icon:i,color:l}=t;return(0,o.jsxs)(I.Z,{type:n?"primary":"default",className:f()(["".concat(H().button),"action-button"]),onClick:()=>s(t),style:{backgroundColor:l},children:[i&&(0,o.jsx)("img",{src:i,className:"".concat(H().icon),alt:r}),a]})};var Z=n(74681),A=n(42093);let F=d()(()=>n.e(62).then(n.t.bind(n,30062,23)),{loadableGenerated:{webpack:()=>[30062]},ssr:!1}),D=e=>{let{onClick:t,text:n}=e;return(0,o.jsx)(I.Z,{type:"primary",className:"".concat(H().button),icon:(0,o.jsx)(F,{}),onClick:t,id:"notify-button",children:n||"Notify"})};var R=n(48831),J=n(29614),z=n(68570),O=n.n(z);let G=e=>{let{content:t}=e;return(0,o.jsx)("div",{id:"custom-page-content",children:(0,o.jsx)("div",{className:O().customPageContent,dangerouslySetInnerHTML:{__html:t}})})};var U=n(53731),W=n(89763),q=n.n(W);let Y=e=>{let{src:t}=e;return(0,o.jsx)("div",{className:q().root,children:(0,o.jsx)("div",{className:q().container,children:(0,o.jsx)("img",{src:t,alt:"Logo",className:q().image,loading:"lazy"})})})};var Q=n(25675),V=n.n(Q),K=n(13025),X=n.n(K);let $=e=>{let{links:t}=e;return(0,o.jsx)("div",{className:X().links,children:t.map(e=>(0,o.jsx)("a",{href:e.url,className:X().link,target:"_blank",rel:"noreferrer me",children:(0,o.jsx)(V(),{src:e.icon||"/img/platformlogos/default.svg",alt:e.platform,className:X().link,width:"30",height:"30"})},e.platform))})};var ee=n(18366),et=n.n(ee);let en=e=>{let{name:t,summary:n,logo:s,tags:a,links:r}=e;return(0,o.jsx)("div",{className:et().root,children:(0,o.jsxs)("div",{className:et().logoTitleSection,children:[(0,o.jsx)("div",{className:et().logo,children:(0,o.jsx)(Y,{src:s})}),(0,o.jsxs)("div",{className:et().titleSection,children:[(0,o.jsx)("h2",{className:f()(et().title,et().row,"header-title"),children:t}),(0,o.jsx)("h3",{className:f()(et().subtitle,et().row,"header-subtitle"),children:(0,o.jsx)(U.Z,{children:n})}),(0,o.jsx)("div",{className:f()(et().tagList,et().row),children:a.length>0&&a.map(e=>(0,o.jsxs)("span",{children:["#",e,"\xa0"]},e))}),(0,o.jsx)("div",{className:f()(et().socialLinks,et().row),children:(0,o.jsx)($,{links:r})})]})]})})},eo=d()(()=>Promise.all([n.e(4885),n.e(173),n.e(5818),n.e(8980),n.e(4041),n.e(3698),n.e(4398),n.e(4526),n.e(5101),n.e(4734),n.e(4763),n.e(9292),n.e(8861),n.e(7916),n.e(3859),n.e(5647)]).then(n.bind(n,35647)).then(e=>e.Tabs),{loadableGenerated:{webpack:()=>[35647]},ssr:!1}),es=d()(()=>Promise.all([n.e(173),n.e(5818),n.e(4041),n.e(3698),n.e(5481)]).then(n.bind(n,77558)).then(e=>e.FollowerCollection),{loadableGenerated:{webpack:()=>[77558]},ssr:!1}),ea=e=>{let{name:t,summary:n,tags:s,socialHandles:a,extraPageContent:r,setShowFollowModal:i,supportFediverseFeatures:l}=e,c=(0,o.jsx)("div",{className:b().bottomPageContentContainer,children:(0,o.jsx)(G,{content:r})}),d=(0,o.jsx)("div",{className:b().bottomPageContentContainer,children:(0,o.jsx)(es,{name:t,onFollowButtonClick:()=>i(!0)})}),h=[!!r&&{label:"About",key:"2",children:c}];return l&&h.push({label:"Followers",key:"3",children:d}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:b().lowerHalf,id:"skip-to-content",children:(0,o.jsx)(en,{name:t,summary:n,tags:s,links:a,logo:"/logo"})}),(0,o.jsx)("div",{className:b().lowerSection,children:h.length>1?(0,o.jsx)(eo,{defaultActiveKey:"0",items:h}):!!r&&c})]})};var er=n(35800),ei=n(66516),el=n(13013),ec=n(3771),ed=n.n(ec);let eh=d()(()=>n.e(6937).then(n.t.bind(n,26937,23)),{loadableGenerated:{webpack:()=>[26937]},ssr:!1}),eu=d()(()=>n.e(6820).then(n.t.bind(n,96820,23)),{loadableGenerated:{webpack:()=>[96820]},ssr:!1}),ep=d()(()=>n.e(1008).then(n.t.bind(n,11008,23)),{loadableGenerated:{webpack:()=>[11008]},ssr:!1}),em="notify",ex="follow",ef=e=>{let{actions:t,externalActionSelected:n,notifyItemSelected:s,followItemSelected:a,showFollowItem:r,showNotifyItem:i,className:l}=e,c=e=>{if(e.key===em){s();return}if(e.key===ex){a();return}let o=t.find(t=>t.url===e.key);n(o)},d=t.map(e=>({key:e.url,label:(0,o.jsxs)("span",{className:ed().item,children:[e.icon&&(0,o.jsx)("img",{className:ed().icon,src:e.icon,alt:e.title})," ",e.title]})}));r&&d.unshift({key:ex,label:(0,o.jsxs)("span",{className:ed().item,children:[(0,o.jsx)(eu,{className:ed().icon})," Follow this stream"]})}),i&&d.unshift({key:em,label:(0,o.jsxs)("span",{className:ed().item,children:[(0,o.jsx)(ep,{className:ed().icon}),"Notify when live"]})});let h=(0,o.jsx)(ei.Z,{items:d,onClick:c}),u=f()([ed().menu,l]);return(0,o.jsx)(el.Z,{overlay:h,placement:"bottomRight",trigger:["click"],className:u,children:(0,o.jsx)("div",{className:ed().buttonWrap,children:(0,o.jsx)(I.Z,{type:"default",onClick:e=>e.preventDefault(),size:"large",icon:(0,o.jsx)(eh,{size:6,style:{rotate:"90deg"}})})})})};var ej=n(69183);let eg=d()(()=>Promise.all([n.e(4885),n.e(173),n.e(5818),n.e(8980),n.e(4041),n.e(3698),n.e(4398),n.e(4526),n.e(5101),n.e(4734),n.e(4763),n.e(9292),n.e(8861),n.e(7916),n.e(3859),n.e(5647)]).then(n.bind(n,35647)).then(e=>e.Tabs),{loadableGenerated:{webpack:()=>[35647]},ssr:!1}),e_=d()(()=>Promise.all([n.e(173),n.e(5818),n.e(4041),n.e(3698),n.e(5481)]).then(n.bind(n,77558)).then(e=>e.FollowerCollection),{loadableGenerated:{webpack:()=>[77558]},ssr:!1}),eb=d()(()=>Promise.all([n.e(1272),n.e(8700),n.e(5320),n.e(2093),n.e(7533)]).then(n.bind(n,92093)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[92093]},ssr:!1}),ev=e=>{let{error:t,resetErrorBoundary:n}=e;return(0,o.jsx)(ej.A,{message:t,componentName:"MobileContent",retryFunction:n})},ew=e=>{let{showChat:t,chatEnabled:n,messages:s,currentUser:a}=e,{id:r,displayName:i}=a;return t&&a?(0,o.jsx)(eb,{messages:s,usernameToHighlight:i,chatUserId:r,isModerator:!1,chatAvailable:n}):(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:7}})},ey=e=>{let{name:t,summary:n,tags:s,socialHandles:a,extraPageContent:r,messages:i,currentUser:l,showChat:c,chatEnabled:d,actions:h,setExternalActionToDisplay:u,setShowNotifyPopup:p,setShowFollowModal:m,supportFediverseFeatures:x,supportsBrowserNotifications:f}=e,j=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(en,{name:t,summary:n,tags:s,links:a,logo:"/logo"}),!!r&&(0,o.jsx)("div",{className:b().bottomPageContentContainer,children:(0,o.jsx)(G,{content:r})})]}),g=(0,o.jsx)("div",{className:b().bottomPageContentContainer,children:(0,o.jsx)(e_,{name:t,onFollowButtonClick:()=>m(!0)})}),_=[];c&&_.push({label:"Chat",key:"0",children:(0,o.jsx)(ew,{showChat:c,chatEnabled:d,messages:i,currentUser:l})}),_.push({label:"About",key:"2",children:j}),x&&_.push({label:"Followers",key:"3",children:g});let v=(e,t)=>(0,o.jsxs)("div",{className:b().replacementBar,children:[(0,o.jsx)(t,{...e,className:b().defaultTabBar}),(0,o.jsx)(ef,{className:b().actionButtonMenu,showFollowItem:x,showNotifyItem:f,actions:h,externalActionSelected:u,notifyItemSelected:()=>p(!0),followItemSelected:()=>m(!0)})]});return(0,o.jsx)(er.ErrorBoundary,{fallbackRender:e=>{let{error:t,resetErrorBoundary:n}=e;return(0,o.jsx)(ev,{error:t,resetErrorBoundary:n})},children:(0,o.jsx)("div",{className:b().lowerSectionMobile,children:_.length>1?(0,o.jsx)(eg,{className:b().tabs,defaultActiveKey:"0",items:_,renderTabBar:v}):j})})},ek=d()(()=>Promise.all([n.e(173),n.e(8714)]).then(n.bind(n,68714)).then(e=>e.FollowModal),{loadableGenerated:{webpack:()=>[68714]},ssr:!1,loading:()=>(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:8}})}),eN=d()(()=>Promise.all([n.e(173),n.e(5818),n.e(1398)]).then(n.bind(n,41398)).then(e=>e.BrowserNotifyModal),{loadableGenerated:{webpack:()=>[41398]},ssr:!1,loading:()=>(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:6}})}),eC=d()(()=>n.e(5111).then(n.bind(n,85111)).then(e=>e.NotifyReminderPopup),{loadableGenerated:{webpack:()=>[85111]},ssr:!1,loading:()=>(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:8}})}),eS=d()(()=>Promise.all([n.e(2544),n.e(5273),n.e(781),n.e(4114)]).then(n.bind(n,22864)).then(e=>e.OwncastPlayer),{loadableGenerated:{webpack:()=>[22864]},ssr:!1,loading:()=>(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:12}})}),eL=e=>{let{externalActionToDisplay:t,setExternalActionToDisplay:n}=e,{title:s,description:a,url:r,html:i}=t;return(0,o.jsx)(J.Modal,{title:a||s,url:r,open:!!t,height:"80vh",handleCancel:()=>n(null),children:i?(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:i},style:{height:"100%",width:"100%",overflow:"auto"}}):null})},eT=()=>{let e=(0,s.sJ)(p.Q),t=(0,s.sJ)(p.g1),n=(0,s.sJ)(p.pT),a=(0,s.sJ)(p.di),r=(0,s.sJ)(p.db),l=(0,s.sJ)(p.RI),[c,d]=(0,s.FV)(p.hz),h=(0,s.sJ)(p.j$),u=(0,s.sJ)(p.YW),{viewerCount:x,lastConnectTime:_,lastDisconnectTime:v,streamTitle:w}=(0,s.sJ)(p.RI),{extraPageContent:y,version:k,name:C,summary:S,socialHandles:T,tags:B,externalActions:I,offlineMessage:P,chatDisabled:H,federation:F,notifications:z}=t,[O,G]=(0,i.useState)(!1),[U,W]=(0,i.useState)(!1),[q,Y]=(0,i.useState)(!1),{account:Q,enabled:V}=F,{browser:K}=z,{enabled:X}=K,{online:$}=l,[ee,et]=(0,i.useState)(null),[en,eo]=(0,i.useState)(!1),es=e=>{let{openExternally:t,url:n}=e;t&&n?window.open(n,"_blank"):et(e)},er=I.map(e=>(0,o.jsx)(M,{action:e,externalActionSelected:es},e.url||e.html)),ei=()=>{let e=parseInt((0,j.$o)(j.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,j.qQ)(j.dA.userVisitCount,e+1),e>2&&!(0,j.$o)(j.dA.hasDisplayedNotificationModal)&&G(!0)},el=()=>{W(!1),G(!1),(0,j.qQ)(j.dA.hasDisplayedNotificationModal,!0)},ec=()=>{let e=window.innerWidth;void 0===c&&(e<=768?d(!0):d(!1)),!c&&e<=768&&d(!0),c&&e>768&&d(!1)};(0,i.useEffect)(()=>(ei(),ec(),window.addEventListener("resize",ec),()=>{window.removeEventListener("resize",ec)}),[]),(0,i.useEffect)(()=>{eo((0,g.Z)()&&X)},[X]);let ed=!H&&a&&n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:b().root,children:[(0,o.jsxs)("div",{className:f()(b().mainSection,{[b().offline]:!u}),children:[e.appLoading?(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:7},className:b().topSectionElement}):(0,o.jsx)("div",{className:"skeleton-placeholder"}),u&&(0,o.jsx)(eS,{source:"/hls/stream.m3u8",online:u,title:w||C,className:b().topSectionElement}),!u&&!e.appLoading&&(0,o.jsx)("div",{id:"offline-message",children:(0,o.jsx)(Z.R,{showsHeader:!1,streamName:C,customText:P,notificationsEnabled:en,fediverseAccount:Q,lastLive:v,onNotifyClick:()=>W(!0),onFollowClick:()=>Y(!0),className:b().topSectionElement})}),$?(0,o.jsx)(R.X,{online:u,lastConnectTime:_,lastDisconnectTime:v,viewerCount:x,className:f()(b().topSectionElement,b().statusBar)}):(0,o.jsx)("div",{className:"statusbar-placeholder"}),(0,o.jsx)("div",{className:b().midSection,children:(0,o.jsxs)("div",{className:b().buttonsLogoTitleSection,children:[!c&&(0,o.jsxs)(E,{children:[er,V&&(0,o.jsx)(A.e,{size:"small",onClick:()=>Y(!0)}),en&&(0,o.jsx)(eC,{open:O,notificationClicked:()=>W(!0),notificationClosed:()=>el(),children:(0,o.jsx)(D,{onClick:()=>W(!0)})})]}),(0,o.jsx)(J.Modal,{title:"Browser Notifications",open:U,afterClose:()=>el(),handleCancel:()=>el(),children:(0,o.jsx)(eN,{})})]})}),c?(0,o.jsx)(ey,{name:C,summary:S,tags:B,socialHandles:T,extraPageContent:y,messages:h,currentUser:r,showChat:ed,actions:I,setExternalActionToDisplay:es,setShowNotifyPopup:W,setShowFollowModal:Y,supportFediverseFeatures:V,supportsBrowserNotifications:en,notifyItemSelected:()=>W(!0),followItemSelected:()=>Y(!0),externalActionSelected:es,chatEnabled:a}):(0,o.jsx)(ea,{name:C,summary:S,tags:B,socialHandles:T,extraPageContent:y,setShowFollowModal:Y,supportFediverseFeatures:V}),!c&&(0,o.jsx)(L,{version:k})]}),ed&&!c&&(0,o.jsx)(N,{})]}),ee&&(0,o.jsx)(eL,{externalActionToDisplay:ee,setExternalActionToDisplay:et}),(0,o.jsx)(J.Modal,{title:"Follow ".concat(C),open:q,handleCancel:()=>Y(!1),width:"550px",children:(0,o.jsx)(ek,{account:Q,name:C,handleClose:()=>Y(!1)})})]})};var eB=n(14940);let eE=e=>{let{name:t}=e,n=(0,s.sJ)(p.j$),o=(0,s.sJ)(p.RI),[a,r]=(0,i.useState)(!1),{online:l}=o,c=e=>{document.title=e},d=()=>{r(!0)},h=()=>{r(!1),c(t)},u=()=>{window.addEventListener("blur",d),window.addEventListener("focus",h)},m=()=>{window.removeEventListener("blur",d),window.removeEventListener("focus",h)};return(0,i.useEffect)(()=>(u(),()=>{m()}),[t]),(0,i.useEffect)(()=>{if(!a||!l)return;let e=n[n.length-1];"CHAT"===e.type&&c("\uD83D\uDCAC :: ".concat(t))},[n,t]),(0,i.useEffect)(()=>{a&&(l?c(" \uD83D\uDFE2 :: ".concat(t)):l||c(" \uD83D\uDD34 :: ".concat(t)))},[l,t]),null},eI=()=>(0,o.jsx)("script",{id:"server-side-hydration",nonce:"{{.Nonce}}",dangerouslySetInnerHTML:{__html:"\n	window.configHydration = {{.ServerConfigJSON}};\n	window.statusHydration = {{.StatusJSON}};\n	"}});var eP=n(21756),eH=n(92346),eM=n.n(eH);let eZ=()=>{let e=()=>{navigator.serviceWorker.register("/serviceWorker.js").then(e=>{console.debug("Service Worker registration successful with scope: ",e.scope)},e=>{console.error("Service Worker registration failed: ",e)})};return(0,i.useEffect)(()=>("serviceWorker"in navigator&&window.addEventListener("load",e),()=>{window.removeEventListener("load",e)}),[]),null};var eA=n(42099),eF=n(43678),eD=n.n(eF);let eR=()=>(0,o.jsx)("noscript",{className:eD().noscript,children:(0,o.jsx)("div",{className:eD().scrollContainer,children:(0,o.jsxs)("div",{className:eD().content,children:[(0,o.jsx)(eA.C,{className:eD().logo}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["This website is powered by\xa0",(0,o.jsx)("a",{href:"https://owncast.online",rel:"noopener noreferrer",target:"_blank",children:"Owncast"}),"."]}),(0,o.jsx)("p",{children:"Owncast uses JavaScript for playing the HTTP Live Streaming (HLS) video, and its chat client. But your web browser does not seem to support JavaScript, or you have it disabled."}),(0,o.jsx)("p",{children:"For the best experience, you should use a different browser with JavaScript support. If you have disabled JavaScript in your browser, you can re-enable it."}),(0,o.jsx)("h2",{children:"How can I watch this stream without JavaScript?"}),(0,o.jsxs)("p",{children:["You can open the URL of this website in your media player (such as\xa0",(0,o.jsx)("a",{href:"https://mpv.io",rel:"noopener noreferrer",target:"_blank",children:"mpv"}),"\xa0or\xa0",(0,o.jsx)("a",{href:"https://www.videolan.org/vlc/",rel:"noopener noreferrer",target:"_blank",children:"VLC"}),") to watch the stream."]}),(0,o.jsx)("h2",{children:"How can I chat with the others without JavaScript?"}),(0,o.jsx)("p",{children:"Currently, there is no option to use the chat without JavaScript."})]})})}),eJ=d()(()=>n.e(2979).then(n.bind(n,12979)).then(e=>e.FatalErrorStateModal),{loadableGenerated:{webpack:()=>[12979]},ssr:!1}),ez=()=>{let e=(0,s.sJ)(p.g1),t=(0,s.sJ)(p.RI),{name:n,customStyles:a}=e,c=(0,s.sJ)(p.di),d=(0,s.sJ)(p.ap),h=(0,s.sJ)(p.Q),m=(0,i.useRef)(null),{chatDisabled:x}=e,{videoAvailable:f}=h,{online:j,streamTitle:g}=t;return(0,i.useEffect)(()=>{!function(e){let t=e=>{let t=e.getAttribute("rel");e.setAttribute("rel","".concat(t," noopener noreferrer"))};e.querySelectorAll("a").forEach(e=>t(e));let n=new MutationObserver(function(e){for(let n of e)for(let e of n.addedNodes)e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()&&t(e)});n.observe(e,{attributes:!1,childList:!0,subtree:!0})}(m.current)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r(),{children:[(0,o.jsx)(eI,{}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,o.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsxs)("style",{children:[a,"\nbody {\n  overflow: hidden;\n}\n"]}),(0,o.jsx)("base",{target:"_blank"})]}),(0,o.jsxs)(r(),{children:[n?(0,o.jsx)("title",{children:n}):(0,o.jsx)("title",{children:"{{.Name}}"}),(0,o.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:type",content:"video.other"}),(0,o.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,o.jsx)("meta",{property:"og:image",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:url",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"{{.RequestedURL}}{{.Image}}"}),(0,o.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:height",content:"315"}),(0,o.jsx)("meta",{property:"og:video:width",content:"560"}),(0,o.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,o.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"twitter:card",content:"player"}),(0,o.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,o.jsx)("meta",{property:"twitter:player:height",content:"315"})]}),(0,o.jsx)(p.me,{}),(0,o.jsx)(eZ,{}),(0,o.jsx)(eE,{name:n}),(0,o.jsx)(eP.Q,{}),(0,o.jsx)(u(),{strategy:"afterInteractive",src:"/customjavascript"}),(0,o.jsxs)(l.Z,{ref:m,className:eM().layout,children:[(0,o.jsx)(eB.h,{name:j&&g||n,chatAvailable:c,chatDisabled:x,online:f}),(0,o.jsx)(eT,{}),d&&(0,o.jsx)(eJ,{title:d.title,message:d.message})]}),(0,o.jsx)(eR,{})]})};function eO(){return(0,o.jsx)(ez,{})}eO.getLayout=function(e){return e}},34148:function(e,t,n){"use strict";function o(){return"serviceWorker"in navigator&&"PushManager"in window}n.d(t,{Z:function(){return o}})},75624:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},3771:function(e){e.exports={item:"ActionButtonMenu_item__OJQdr",buttonWrap:"ActionButtonMenu_buttonWrap__WQ9kt",icon:"ActionButtonMenu_icon__edY1D",menu:"ActionButtonMenu_menu__GChDk"}},18700:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},18366:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},92346:function(e){e.exports={layout:"Main_layout__Bm6Gz"}},18843:function(e){e.exports={root:"Content_root__h1mNK",mainSection:"Content_mainSection__Gk78Y",offline:"Content_offline__Mnva4",lowerSection:"Content_lowerSection__BZHYI",lowerSectionMobile:"Content_lowerSectionMobile__hRr0_",topSectionElement:"Content_topSectionElement__4Mqi_",statusBar:"Content_statusBar__KyO4I",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC",replacementBar:"Content_replacementBar__yLglI",defaultTabBar:"Content_defaultTabBar__BjyV0",actionButtonMenu:"Content_actionButtonMenu__dQUjK",tabs:"Content_tabs__LMcZ1",bottomPageContentContainer:"Content_bottomPageContentContainer__nFPo7"}},68570:function(e){e.exports={customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},84379:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV"}},91935:function(e){e.exports={header:"Header_header__U4Ro1",logoImage:"Header_logoImage__beIL2",logo:"Header_logo__HLZ6Z",title:"Header_title__FIts2",skipLink:"Header_skipLink__9Pusb",offlineTag:"Header_offlineTag__0p3lk"}},89763:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},70051:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},43678:function(e){e.exports={noscript:"Noscript_noscript__vXxzh",scrollContainer:"Noscript_scrollContainer__2F8M3",content:"Noscript_content__sSYOq",logo:"Noscript_logo__tWoh6"}},40158:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},60522:function(e){e.exports={root:"Sidebar_root__8HE0A"}},13025:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},29485:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}}},function(e){e.O(0,[2074,5874,2744,7941,4931,5402,1664,3013,5938,7606,2928,9863,9243,9915,8035,4974,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);