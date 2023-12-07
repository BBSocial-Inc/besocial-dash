"use strict";exports.id=433,exports.ids=[433],exports.modules={73994:(e,t,r)=>{r.d(t,{gm:()=>u});var o=r(9885);let n=(0,o.createContext)(void 0);function u(e){let t=(0,o.useContext)(n);return e||t||"ltr"}},76529:(e,t,r)=>{r.d(t,{M:()=>c});var o,n=r(9885),u=r(95852);let a=(o||(o=r.t(n,2)))["useId".toString()]||(()=>void 0),l=0;function c(e){let[t,r]=n.useState(a());return(0,u.b)(()=>{e||r(e=>null!=e?e:String(l++))},[e]),e||(t?`radix-${t}`:"")}},50433:(e,t,r)=>{r.d(t,{Pc:()=>E,ck:()=>D,fC:()=>M});var o=r(35108),n=r(9885),u=r(32840),a=r(36493),l=r(80880),c=r(8718),i=r(76529),s=r(43979),f=r(32285),d=r(43408),p=r(73994);let v="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[g,w,F]=(0,a.B)(b),[I,E]=(0,c.b)(b,[F]),[R,S]=I(b),A=(0,n.forwardRef)((e,t)=>(0,n.createElement)(g.Provider,{scope:e.__scopeRovingFocusGroup},(0,n.createElement)(g.Slot,{scope:e.__scopeRovingFocusGroup},(0,n.createElement)(T,(0,o.Z)({},e,{ref:t}))))),T=(0,n.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:c=!1,dir:i,currentTabStopId:b,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:F,onEntryFocus:I,...E}=e,S=(0,n.useRef)(null),A=(0,l.e)(t,S),T=(0,p.gm)(i),[h=null,x]=(0,d.T)({prop:b,defaultProp:g,onChange:F}),[M,D]=(0,n.useState)(!1),y=(0,f.W)(I),_=w(r),k=(0,n.useRef)(!1),[G,L]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=S.current;if(e)return e.addEventListener(v,y),()=>e.removeEventListener(v,y)},[y]),(0,n.createElement)(R,{scope:r,orientation:a,dir:T,loop:c,currentTabStopId:h,onItemFocus:(0,n.useCallback)(e=>x(e),[x]),onItemShiftTab:(0,n.useCallback)(()=>D(!0),[]),onFocusableItemAdd:(0,n.useCallback)(()=>L(e=>e+1),[]),onFocusableItemRemove:(0,n.useCallback)(()=>L(e=>e-1),[])},(0,n.createElement)(s.WV.div,(0,o.Z)({tabIndex:M||0===G?-1:0,"data-orientation":a},E,{ref:A,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{k.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let t=!k.current;if(e.target===e.currentTarget&&t&&!M){let t=new CustomEvent(v,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=_().filter(e=>e.focusable),t=e.find(e=>e.active),r=e.find(e=>e.id===h),o=[t,r,...e].filter(Boolean),n=o.map(e=>e.ref.current);C(n)}}k.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>D(!1))})))}),h=(0,n.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:l=!1,tabStopId:c,...f}=e,d=(0,i.M)(),p=c||d,v=S("RovingFocusGroupItem",r),m=v.currentTabStopId===p,b=w(r),{onFocusableItemAdd:F,onFocusableItemRemove:I}=v;return(0,n.useEffect)(()=>{if(a)return F(),()=>I()},[a,F,I]),(0,n.createElement)(g.ItemSlot,{scope:r,id:p,focusable:a,active:l},(0,n.createElement)(s.WV.span,(0,o.Z)({tabIndex:m?0:-1,"data-orientation":v.orientation},f,{ref:t,onMouseDown:(0,u.M)(e.onMouseDown,e=>{a?v.onItemFocus(p):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>v.onItemFocus(p)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var o;let n=(o=e.key,"rtl"!==r?o:"ArrowLeft"===o?"ArrowRight":"ArrowRight"===o?"ArrowLeft":o);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(n))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(n)))return x[n]}(e,v.orientation,v.dir);if(void 0!==t){e.preventDefault();let r=b().filter(e=>e.focusable),o=r.map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){"prev"===t&&o.reverse();let r=o.indexOf(e.currentTarget);o=v.loop?function(e,t){return e.map((r,o)=>e[(t+o)%e.length])}(o,r+1):o.slice(r+1)}setTimeout(()=>C(o))}})})))}),x={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function C(e){let t=document.activeElement;for(let r of e)if(r===t||(r.focus(),document.activeElement!==t))return}let M=A,D=h}};