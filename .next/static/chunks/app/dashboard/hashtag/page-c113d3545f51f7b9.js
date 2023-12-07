(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9512],{1322:function(e,n,t){"use strict";t.d(n,{Z:function(){return z}});var r,a=t(3428),s=t(2554),l=t(3300),i=t(2265),o=t(4275),c=t.n(o),d=t(5693),u=t(3944),m=t(2544),f=t(172),x=t(2899),h={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right"},g=(r={},(0,x.Z)(r,h.TOP_LEFT,{top:50,left:50}),(0,x.Z)(r,h.TOP_RIGHT,{top:50,right:50}),(0,x.Z)(r,h.BOTTOM_LEFT,{bottom:50,left:50}),(0,x.Z)(r,h.BOTTOM_RIGHT,{bottom:50,right:50}),r),p=t(5797),j=t(488),v=t(9060),b=["className"];function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var N={},y=(0,i.memo)((0,i.forwardRef)(function(e,n){var t=e.className,r=(0,s.Z)(e,b),l=(0,j.m)("Card",N,N,N);return i.createElement(v.Z,(0,a.Z)({className:t},l,r,{ref:n}))}));y.propTypes=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach(function(n){(0,x.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},v.Z.propTypes);var C=t(4887),S="undefined"!=typeof document?i.useLayoutEffect:i.useEffect,_=function(e){var n=e.children,t=(0,i.useState)(!1),r=(0,l.Z)(t,2),a=r[0],s=r[1],o=(0,i.useRef)();return(S(function(){return s(!0),o.current=document.createElement("div"),o.current.setAttribute("evergreen-portal-container",""),document.body.appendChild(o.current),function(){document.body.removeChild(o.current)}},[]),a)?(0,C.createPortal)(n,o.current):null};_.propTypes={children:c().node.isRequired};var T=t(8704),O=t(1665),k=["className"],P={acceleration:"cubic-bezier(0.4, 0.0, 1, 1)",spring:"cubic-bezier(0.175, 0.885, 0.320, 1.175)"},$=(0,u.keyframes)("openAnimation",{from:{transform:"translateY(100%)"},to:{transform:"translateY(0)"}}),R=(0,u.keyframes)("closeAnimation",{from:{transform:"scale(1)",opacity:1},to:{transform:"scale(0.9)",opacity:0}}),I={animationName:$,animationDuration:240,animationTimingFunction:P.spring,animationFillMode:"both"},E={selectors:{'&[data-state="entering"]':I,'&[data-state="entered"]':I,'&[data-state="exiting"]':{animationName:R,animationDuration:120,animationTimingFunction:P.acceleration,animationFillMode:"both"}}},V=function(e){return e()},A=function(){},F={},Z=(0,i.memo)(function(e){var n=e.title,t=e.width,r=void 0===t?448:t,o=e.children,c=e.intent,u=void 0===c?"none":c,x=e.isShown,j=e.hasFooter,b=void 0===j||j,w=e.hasCancel,N=void 0===w||w,C=e.hasClose,S=void 0===C||C,P=e.cancelLabel,$=void 0===P?"Close":P,R=e.confirmLabel,I=void 0===R?"Learn More":R,Z=e.onOpenComplete,z=e.onCloseComplete,D=void 0===z?A:z,H=e.onCancel,M=void 0===H?V:H,G=e.onConfirm,B=void 0===G?V:G,L=e.containerProps,K=void 0===L?F:L,W=e.position,U=void 0===W?h.BOTTOM_RIGHT:W,q=(0,i.useState)(!1),Y=(0,l.Z)(q,2),X=Y[0],J=Y[1],Q=(0,i.useState)(!e.isShown),ee=(0,l.Z)(Q,2),en=ee[0],et=ee[1],er=(0,i.useRef)(null);(0,i.useEffect)(function(){x&&et(!1)},[x]);var ea=(0,i.useCallback)(function(){J(!1),et(!0),D()},[D]),es=(0,i.useCallback)(function(){return J(!0)},[]),el=(0,i.useCallback)(function(){M(es)},[M,es]),ei=(0,i.useCallback)(function(){B(es)},[B,es]),eo=(0,i.useCallback)(function(){return"function"==typeof o?o({close:es}):"string"==typeof o?i.createElement(T.Z,{size:400,color:"muted"},o):o},[o,es]);if(en)return null;var ec=K.className,ed=(0,s.Z)(K,k);return i.createElement(_,null,i.createElement(d.ZP,{nodeRef:er,appear:!0,unmountOnExit:!0,timeout:240,in:x&&!X,onExited:ea,onEntered:Z},function(e){return i.createElement(y,(0,a.Z)({},E,{ref:er,role:"dialog",backgroundColor:"white",elevation:4,width:r,className:ec,"data-state":e,padding:32,position:"fixed"},g[Object.keys(g).includes(U)?U:h.BOTTOM_RIGHT],ed),i.createElement(v.Z,{display:"flex",alignItems:"center",marginBottom:12},i.createElement(O.Z,{is:"h4",size:600,flex:"1"},n),S&&i.createElement(m.Z,{icon:p.a,appearance:"minimal",onClick:es})),i.createElement(v.Z,{overflowY:"auto","data-state":e},eo()),b&&i.createElement(v.Z,{marginTop:24,flexShrink:0,display:"flex",flexDirection:"row-reverse"},i.createElement(f.ZP,{appearance:"primary",intent:u,marginLeft:8,onClick:ei},I),N&&i.createElement(f.ZP,{onClick:el},$)))}))});Z.propTypes={children:c().oneOfType([c().node,c().func]).isRequired,intent:c().string,isShown:c().bool,title:c().node,onCloseComplete:c().func,onOpenComplete:c().func,hasFooter:c().bool,onConfirm:c().func,confirmLabel:c().string,hasCancel:c().bool,hasClose:c().bool,onCancel:c().func,cancelLabel:c().string,width:c().oneOfType([c().string,c().number]),containerProps:c().object,position:c().oneOf([h.TOP_LEFT,h.TOP_RIGHT,h.BOTTOM_LEFT,h.BOTTOM_RIGHT])};var z=Z},1597:function(e,n,t){Promise.resolve().then(t.bind(t,7288))},7288:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(7437),a=t(9394),s=t(9311),l=t(3023),i=t(6434);function o(e){let{column:n,title:t,className:o}=e;return n.getCanSort()?(0,r.jsx)("div",{className:(0,s.cn)("flex items-center space-x-2",o),children:(0,r.jsxs)(i.h_,{children:[(0,r.jsx)(i.$F,{asChild:!0,children:(0,r.jsxs)(l.z,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[(0,r.jsx)("span",{children:t}),"desc"===n.getIsSorted()?(0,r.jsx)(a.veu,{className:"ml-2 h-4 w-4"}):"asc"===n.getIsSorted()?(0,r.jsx)(a.Hf3,{className:"ml-2 h-4 w-4"}):(0,r.jsx)(a.jnn,{className:"ml-2 h-4 w-4"})]})}),(0,r.jsxs)(i.AW,{align:"start",children:[(0,r.jsxs)(i.Xi,{onClick:()=>n.toggleSorting(!1),children:[(0,r.jsx)(a.Hf3,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),(0,r.jsxs)(i.Xi,{onClick:()=>n.toggleSorting(!0),children:[(0,r.jsx)(a.veu,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),(0,r.jsx)(i.VD,{}),(0,r.jsxs)(i.Xi,{onClick:()=>n.toggleVisibility(!1),children:[(0,r.jsx)(a.L52,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Hide"]})]})]})}):(0,r.jsx)("div",{className:(0,s.cn)(o),children:t})}var c=t(1908),d=t(6672),u=t(6754),m=t(1322),f=t(2609),x=t(2265),h=t(658),g=t(3192);function p(e){let{row:n}=e,t=n.original,[s,o]=(0,x.useState)({state:!1,action:()=>{}}),[p,j]=(0,x.useState)({text:""}),[v,b]=(0,h.D)(g.rf,{onCompleted(e){u.Z.notify("Successful"),window.location.reload()},onError(e){u.Z.danger("Error"),console.log(e,"data")},variables:{limit:50,page:0}}),[w,N]=(0,h.D)(g.ly,{onCompleted(e){u.Z.notify("Successful"),window.location.reload()},onError(e){u.Z.danger("Error"),console.log(e,"data")},variables:{limit:50,page:0}});return(0,r.jsxs)(f.Vq,{children:[(0,r.jsxs)(i.h_,{children:[(0,r.jsx)(i.$F,{asChild:!0,children:(0,r.jsxs)(l.z,{variant:"ghost",className:"flex h-8 w-8 p-0 data-[state=open]:bg-muted",children:[(0,r.jsx)(a.nWS,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Open menu"})]})}),(0,r.jsxs)(i.AW,{align:"end",className:"w-[160px]",children:[(0,r.jsx)(f.hg,{asChild:!0,children:(0,r.jsx)(i.Xi,{children:"Change Ownership"})}),(0,r.jsx)(i.VD,{}),(0,r.jsx)(i.VD,{}),(0,r.jsxs)(i.Xi,{onClick:()=>o({...s,state:!0,action:()=>{}}),children:["Block Hashtag",(0,r.jsx)(i.KM,{children:"⌘⌫"})]})]}),(0,r.jsx)(m.Z,{title:"Confirm",confirmLabel:"Yes",intent:"danger",isShown:s.state,onCloseComplete:()=>o({...s,state:!1}),onConfirm:()=>{w({variables:{hashtagId:null==t?void 0:t._id}})},children:"Are your sure you want to perform this action"})]}),(0,r.jsxs)(f.cZ,{className:"sm:max-w-[425px]",children:[(0,r.jsxs)(f.fK,{children:[(0,r.jsx)(f.$N,{children:"Ownership"}),(0,r.jsx)(f.Be,{children:"Make changes here"})]}),(0,r.jsx)("div",{className:"grid gap-4 py-4",children:(0,r.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,r.jsx)(d._,{htmlFor:"name",className:"text-right",children:"Username of new owner"}),(0,r.jsx)(c.I,{id:"name",defaultValue:"username",className:"col-span-3",onChange:e=>j({...p,text:e.target.value})})]})}),(0,r.jsx)(f.cN,{children:(0,r.jsx)(l.z,{type:"button",onClick:()=>{v({variables:{contentId:null==t?void 0:t._id,newOwnerId:null==p?void 0:p.text}})},children:b.loading?"Loading":"Save changes"})})]})]})}let j=[{accessorKey:"_id",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"ID"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"max-w-[50px] truncate",children:n.getValue("_id")})},enableSorting:!1,enableHiding:!1},{accessorKey:"text",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Name/Text"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:n.getValue("text")})})}},{accessorKey:"posts",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Posts"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[50px] truncate font-medium",children:n.getValue("posts")})})}},{accessorKey:"rank",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Rank"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[50px] truncate font-medium",children:n.getValue("rank")})})}},{accessorKey:"followers",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Followers"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[50px] truncate font-medium",children:n.getValue("followers")})})}},{accessorKey:"contentViews",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Views"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[50px] truncate font-medium",children:n.getValue("contentViews")})})}},{accessorKey:"creator",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Creator"})},cell:e=>{var n;let{row:t}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:null===(n=t.getValue("creator"))||void 0===n?void 0:n.name})})}},{accessorKey:"owner",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Owner"})},cell:e=>{var n;let{row:t}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:null===(n=t.getValue("owner"))||void 0===n?void 0:n.name})})}},{accessorKey:"total_contents",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Total Contents"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:n.getValue("total_contents")})})}},{id:"actions",cell:e=>{let{row:n}=e;return(0,r.jsx)(p,{row:n})}}];var v=t(3216),b=t(7660),w=t(2553),N=t(8094);function y(e){let{table:n}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-between px-2",children:[(0,r.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[n.getFilteredSelectedRowModel().rows.length," of"," ",n.getFilteredRowModel().rows.length," row(s) selected."]}),(0,r.jsxs)("div",{className:"flex items-center space-x-6 lg:space-x-8",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("p",{className:"text-sm font-medium",children:"Rows per page"}),(0,r.jsxs)(N.Ph,{value:"".concat(n.getState().pagination.pageSize),onValueChange:e=>{n.setPageSize(Number(e))},children:[(0,r.jsx)(N.i4,{className:"h-8 w-[70px]",children:(0,r.jsx)(N.ki,{placeholder:n.getState().pagination.pageSize})}),(0,r.jsx)(N.Bw,{side:"top",children:[10,20,30,40,50].map(e=>(0,r.jsx)(N.Ql,{value:"".concat(e),children:e},e))})]})]}),(0,r.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",n.getState().pagination.pageIndex+1," of"," ",n.getPageCount()]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsxs)(l.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>n.setPageIndex(0),disabled:!n.getCanPreviousPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to first page"}),(0,r.jsx)(a.kRt,{className:"h-4 w-4"})]}),(0,r.jsxs)(l.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>n.previousPage(),disabled:!n.getCanPreviousPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,r.jsx)(a.wyc,{className:"h-4 w-4"})]}),(0,r.jsxs)(l.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>n.nextPage(),disabled:!n.getCanNextPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,r.jsx)(a.XCv,{className:"h-4 w-4"})]}),(0,r.jsxs)(l.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>n.setPageIndex(n.getPageCount()-1),disabled:!n.getCanNextPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to last page"}),(0,r.jsx)(a.yr4,{className:"h-4 w-4"})]})]})]})]})}let C=[{value:"email",label:"email"},{value:"google",label:"google"},{value:"apple",label:"apple"}],S=[{value:"android",label:"android"},{value:"ios",label:"ios"}],_=[{value:"backlog",label:"Backlog",icon:a.pjG},{value:"todo",label:"Todo",icon:a.J$M},{value:"in progress",label:"In Progress",icon:a.u0k},{value:"done",label:"Done",icon:a.NhS},{value:"canceled",label:"Canceled",icon:a.xrR}];a.veu,a.LZ3,a.Hf3;var T=t(9155),O=t(6523),k=t(5831),P=t(6775);function $(e){let{column:n,title:t,options:i}=e,o=null==n?void 0:n.getFacetedUniqueValues(),c=new Set(null==n?void 0:n.getFilterValue());return(0,r.jsxs)(k.J2,{children:[(0,r.jsx)(k.xo,{asChild:!0,children:(0,r.jsxs)(l.z,{variant:"outline",size:"sm",className:"h-8 border-dashed",children:[(0,r.jsx)(a.SPS,{className:"mr-2 h-4 w-4"}),t,(null==c?void 0:c.size)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P.Separator,{orientation:"vertical",className:"mx-2 h-4"}),(0,r.jsx)(T.C,{variant:"secondary",className:"rounded-sm px-1 font-normal lg:hidden",children:c.size}),(0,r.jsx)("div",{className:"hidden space-x-1 lg:flex",children:c.size>2?(0,r.jsxs)(T.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:[c.size," selected"]}):i.filter(e=>c.has(e.value)).map(e=>(0,r.jsx)(T.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:e.label},e.value))})]})]})}),(0,r.jsx)(k.yk,{className:"w-[200px] p-0",align:"start",children:(0,r.jsxs)(O.mY,{children:[(0,r.jsx)(O.sZ,{placeholder:t}),(0,r.jsxs)(O.e8,{children:[(0,r.jsx)(O.rb,{children:"No results found."}),(0,r.jsx)(O.fu,{children:i.map(e=>{let t=c.has(e.value);return(0,r.jsxs)(O.di,{onSelect:()=>{t?c.delete(e.value):c.add(e.value);let r=Array.from(c);null==n||n.setFilterValue(r.length?r:void 0)},children:[(0,r.jsx)("div",{className:(0,s.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",t?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:(0,r.jsx)(a.nQG,{className:(0,s.cn)("h-4 w-4")})}),e.icon&&(0,r.jsx)(e.icon,{className:"mr-2 h-4 w-4 text-muted-foreground"}),(0,r.jsx)("span",{children:e.label}),(null==o?void 0:o.get(e.value))&&(0,r.jsx)("span",{className:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",children:o.get(e.value)})]},e.value)})}),c.size>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O.zz,{}),(0,r.jsx)(O.fu,{children:(0,r.jsx)(O.di,{onSelect:()=>null==n?void 0:n.setFilterValue(void 0),className:"justify-center text-center",children:"Clear filters"})})]})]})]})})]})}var R=t(3291);function I(e){let{table:n}=e;return(0,r.jsxs)(i.h_,{children:[(0,r.jsx)(R.$F,{asChild:!0,children:(0,r.jsxs)(l.z,{variant:"outline",size:"sm",className:"ml-auto hidden h-8 lg:flex",children:[(0,r.jsx)(a.hsZ,{className:"mr-2 h-4 w-4"}),"View"]})}),(0,r.jsxs)(i.AW,{align:"end",className:"w-[150px]",children:[(0,r.jsx)(i.Ju,{children:"Toggle columns"}),(0,r.jsx)(i.VD,{}),n.getAllColumns().filter(e=>void 0!==e.accessorFn&&e.getCanHide()).map(e=>(0,r.jsx)(i.bO,{className:"capitalize",checked:e.getIsVisible(),onCheckedChange:n=>e.toggleVisibility(!!n),children:e.id},e.id))]})]})}var E=t(4033);function V(e){var n,t,s;let{table:i}=e,o=i.getState().columnFilters.length>0,d=(0,E.useSearchParams)(),u=d.get("id");return console.log(u),u&&(null===(t=i.getColumn("_id"))||void 0===t||t.setFilterValue(u)),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-1 items-center space-x-2",children:[(0,r.jsx)(c.I,{placeholder:"search hashtag...",value:null!==(s=null===(n=i.getColumn("text"))||void 0===n?void 0:n.getFilterValue())&&void 0!==s?s:"",onChange:e=>{var n;null===(n=i.getColumn("text"))||void 0===n||n.setFilterValue(e.target.value)},className:"h-8 w-[150px] lg:w-[250px]"}),i.getColumn("country")&&(0,r.jsx)($,{column:i.getColumn("country"),title:"Country",options:_}),i.getColumn("device")&&(0,r.jsx)($,{column:i.getColumn("device"),title:"Device",options:S}),i.getColumn("auth_type")&&(0,r.jsx)($,{column:i.getColumn("auth_type"),title:"Auth Type",options:C}),o&&(0,r.jsxs)(l.z,{variant:"ghost",onClick:()=>i.resetColumnFilters(),className:"h-8 px-2 lg:px-3",children:["Reset",(0,r.jsx)(a.Pxu,{className:"ml-2 h-4 w-4"})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(I,{table:i})})]})}function A(e){var n;let{columns:t,data:a}=e,[s,l]=x.useState({}),[i,o]=x.useState({}),[c,d]=x.useState([]),[u,m]=x.useState([]),f=(0,v.b7)({data:a,columns:t,state:{sorting:u,columnVisibility:i,rowSelection:s,columnFilters:c},enableRowSelection:!0,onRowSelectionChange:l,onSortingChange:m,onColumnFiltersChange:d,onColumnVisibilityChange:o,getCoreRowModel:(0,b.sC)(),getFilteredRowModel:(0,b.vL)(),getPaginationRowModel:(0,b.G_)(),getSortedRowModel:(0,b.tj)(),getFacetedRowModel:(0,b.o6)(),getFacetedUniqueValues:(0,b.JG)()});return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)(V,{table:f}),(0,r.jsx)("div",{className:"rounded-md border",children:(0,r.jsxs)(w.iA,{children:[(0,r.jsx)(w.xD,{children:f.getHeaderGroups().map(e=>(0,r.jsx)(w.SC,{children:e.headers.map(e=>(0,r.jsx)(w.ss,{colSpan:e.colSpan,children:e.isPlaceholder?null:(0,v.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(w.RM,{children:(null===(n=f.getRowModel().rows)||void 0===n?void 0:n.length)?f.getRowModel().rows.map(e=>(0,r.jsx)(w.SC,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(w.pj,{children:(0,v.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(w.SC,{children:(0,r.jsx)(w.pj,{colSpan:t.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,r.jsx)(y,{table:f})]})}var F=t(6571),Z=t(5854),z=t(6110);function D(){let[e,n]=(0,x.useState)([]);return(0,Z.a)(F.L0,{onCompleted(e){n(null==e?void 0:e.AdminGetAllHashtags)},onError(e){console.log(e,"data")},variables:{limit:290,page:0,sortBy:"trending"}}),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"hidden h-full flex-1 flex-col space-y-8 p-8 md:flex",children:[(0,r.jsx)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-5",children:(0,r.jsxs)(z.Zb,{children:[(0,r.jsx)(z.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:(0,r.jsx)(z.ll,{className:"text-sm font-medium",children:"Total Hashtags"})}),(0,r.jsxs)(z.aY,{children:[(0,r.jsx)("div",{className:"text-2xl font-bold",children:null==e?void 0:e.total}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"All time"})]})]})}),(null==e?void 0:e.data)?(0,r.jsx)(A,{data:null==e?void 0:e.data,columns:j}):(0,r.jsx)(r.Fragment,{})]})})}},9155:function(e,n,t){"use strict";t.d(n,{C:function(){return i}});var r=t(7437);t(2265);var a=t(6061),s=t(9311);let l=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:n,variant:t,...a}=e;return(0,r.jsx)("div",{className:(0,s.cn)(l({variant:t}),n),...a})}},6110:function(e,n,t){"use strict";t.d(n,{Ol:function(){return i},SZ:function(){return c},Zb:function(){return l},aY:function(){return d},ll:function(){return o}});var r=t(7437),a=t(2265),s=t(9311);let l=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:n,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});l.displayName="Card";let i=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:n,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...a})});i.displayName="CardHeader";let o=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("h3",{ref:n,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});o.displayName="CardTitle";let c=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("p",{ref:n,className:(0,s.cn)("text-sm text-muted-foreground",t),...a})});c.displayName="CardDescription";let d=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:n,className:(0,s.cn)("p-6 pt-0",t),...a})});d.displayName="CardContent";let u=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:n,className:(0,s.cn)("flex items-center p-6 pt-0",t),...a})});u.displayName="CardFooter"},6672:function(e,n,t){"use strict";t.d(n,{_:function(){return c}});var r=t(7437),a=t(2265),s=t(6743),l=t(6061),i=t(9311);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)(s.f,{ref:n,className:(0,i.cn)(o(),t),...a})});c.displayName=s.f.displayName},6775:function(e,n,t){"use strict";t.r(n),t.d(n,{Separator:function(){return i}});var r=t(7437),a=t(2265),s=t(6823),l=t(9311);let i=a.forwardRef((e,n)=>{let{className:t,orientation:a="horizontal",decorative:i=!0,...o}=e;return(0,r.jsx)(s.f,{ref:n,decorative:i,orientation:a,className:(0,l.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",t),...o})});i.displayName=s.f.displayName},2553:function(e,n,t){"use strict";t.d(n,{RM:function(){return o},SC:function(){return d},iA:function(){return l},pj:function(){return m},ss:function(){return u},xD:function(){return i}});var r=t(7437),a=t(2265),s=t(9311);let l=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:"w-full overflow-auto",children:(0,r.jsx)("table",{ref:n,className:(0,s.cn)("w-full caption-bottom text-sm",t),...a})})});l.displayName="Table";let i=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("thead",{ref:n,className:(0,s.cn)("[&_tr]:border-b",t),...a})});i.displayName="TableHeader";let o=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("tbody",{ref:n,className:(0,s.cn)("[&_tr:last-child]:border-0",t),...a})});o.displayName="TableBody";let c=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("tfoot",{ref:n,className:(0,s.cn)("bg-primary font-medium text-primary-foreground",t),...a})});c.displayName="TableFooter";let d=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("tr",{ref:n,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...a})});d.displayName="TableRow";let u=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("th",{ref:n,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...a})});u.displayName="TableHead";let m=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("td",{ref:n,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...a})});m.displayName="TableCell";let f=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)("caption",{ref:n,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",t),...a})});f.displayName="TableCaption"},3192:function(e,n,t){"use strict";t.d(n,{Bf:function(){return j},OT:function(){return p},PJ:function(){return y},Vk:function(){return _},bU:function(){return O},k3:function(){return v},ly:function(){return S},pK:function(){return N},rf:function(){return C},rq:function(){return w},rz:function(){return b},y$:function(){return T}});var r=t(230),a=t(1049);function s(){let e=(0,r._)(["\n  query LoginUserWithEmail($email: String) {\n    LoginUserWithEmail(email: $email) {\n      status\n      message\n      json\n    }\n  }\n"]);return s=function(){return e},e}function l(){let e=(0,r._)(["\n  mutation AdminGiveWarningStrike(\n    $userId: String!\n    $type: String!\n    $reason: String\n  ) {\n    AdminGiveWarningStrike(user_id: $userId, type: $type, reason: $reason) {\n      status\n      message\n      json\n    }\n  }\n"]);return l=function(){return e},e}function i(){let e=(0,r._)(["\n  mutation AdminBlockUser($userId: String!, $warningStrikeId: String!) {\n    AdminBlockUser(user_id: $userId, warning_strike_id: $warningStrikeId) {\n      status\n      message\n      json\n    }\n  }\n"]);return i=function(){return e},e}function o(){let e=(0,r._)(["\n  mutation AddCategories($name: String!) {\n    AddCategories(name: $name) {\n      status\n      message\n      json\n    }\n  }\n"]);return o=function(){return e},e}function c(){let e=(0,r._)(["\n  mutation AdminDeleteCategoriy($name: String!) {\n    AdminDeleteCategoriy(name: $name) {\n      status\n      message\n      json\n    }\n  }\n"]);return c=function(){return e},e}function d(){let e=(0,r._)(["\n  mutation AdminDeleteContent($contentId: String!) {\n    AdminDeleteContent(content_id: $contentId) {\n      status\n      message\n      json\n    }\n  }\n"]);return d=function(){return e},e}function u(){let e=(0,r._)(["\n  mutation AdminEditContent($contentId: String!, $caption: String) {\n    AdminEditContent(content_id: $contentId, caption: $caption) {\n      status\n      message\n      json\n    }\n  }\n"]);return u=function(){return e},e}function m(){let e=(0,r._)(["\n  mutation AdminChangeHashtagOwnership(\n    $hashtagId: String\n    $newOwnerId: String\n  ) {\n    AdminChangeHashtagOwnership(\n      hashtag_id: $hashtagId\n      new_owner_id: $newOwnerId\n    ) {\n      status\n      message\n      json\n    }\n  }\n"]);return m=function(){return e},e}function f(){let e=(0,r._)(["\n  mutation AdminBlockHashtag($hashtagId: String!) {\n    AdminBlockHashtag(hashtag_id: $hashtagId) {\n      status\n      message\n      json\n    }\n  }\n"]);return f=function(){return e},e}function x(){let e=(0,r._)(["\n  mutation Admin_ReportAction($reportId: String!, $action: String!) {\n    Admin_ReportAction(report_id: $reportId, action: $action) {\n      status\n      message\n      json\n    }\n  }\n"]);return x=function(){return e},e}function h(){let e=(0,r._)(["\n  query GetUserWarningStrikes($userId: String!, $limit: Int, $page: Int) {\n    GetUserWarningStrikes(user_id: $userId, limit: $limit, page: $page) {\n      _id\n      type\n      strike_count\n      reason\n      status\n    }\n  }\n"]);return h=function(){return e},e}function g(){let e=(0,r._)(["\n  mutation ValidateEmailVerifyOTP(\n    $email: String!\n    $otp: String!\n    $isAuth: Boolean!\n  ) {\n    ValidateEmailVerifyOTP(email: $email, OTP: $otp, isAuth: $isAuth) {\n      _id\n      name\n      auth_token\n      account_type\n      email\n      birthday\n      username\n      auth_type\n      account {\n        _id\n        balance\n      }\n      followers\n      following\n      bio\n      cover_picture\n      phone_number\n      profile_picture\n      socials\n      is_blocked\n    }\n  }\n"]);return g=function(){return e},e}let p=(0,a.Ps)(s()),j=(0,a.Ps)(l()),v=(0,a.Ps)(i()),b=(0,a.Ps)(o()),w=(0,a.Ps)(c()),N=(0,a.Ps)(d()),y=(0,a.Ps)(u()),C=(0,a.Ps)(m()),S=(0,a.Ps)(f()),_=(0,a.Ps)(x()),T=(0,a.Ps)(h()),O=(0,a.Ps)(g())},4033:function(e,n,t){e.exports=t(290)},6823:function(e,n,t){"use strict";t.d(n,{f:function(){return d}});var r=t(3428),a=t(2265),s=t(9381);let l="horizontal",i=["horizontal","vertical"],o=(0,a.forwardRef)((e,n)=>{let{decorative:t,orientation:i=l,...o}=e,d=c(i)?i:l;return(0,a.createElement)(s.WV.div,(0,r.Z)({"data-orientation":d},t?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},o,{ref:n}))});function c(e){return i.includes(e)}o.propTypes={orientation(e,n,t){let r=e[n],a=String(r);return r&&!c(r)?Error(`Invalid prop \`orientation\` of value \`${a}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`):null}};let d=o}},function(e){e.O(0,[8310,1677,3604,2273,8787,5508,667,5960,8090,3216,7055,4142,3862,443,2971,7864,1744],function(){return e(e.s=1597)}),_N_E=e.O()}]);