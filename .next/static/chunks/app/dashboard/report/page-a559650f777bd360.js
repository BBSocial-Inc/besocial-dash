(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6299],{6724:function(e,n,t){Promise.resolve().then(t.bind(t,5129))},5129:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var r=t(7437),s=t(9394),a=t(9311),l=t(3023),i=t(6434);function o(e){let{column:n,title:t,className:o}=e;return n.getCanSort()?(0,r.jsx)("div",{className:(0,a.cn)("flex items-center space-x-2",o),children:(0,r.jsxs)(i.h_,{children:[(0,r.jsx)(i.$F,{asChild:!0,children:(0,r.jsxs)(l.z,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[(0,r.jsx)("span",{children:t}),"desc"===n.getIsSorted()?(0,r.jsx)(s.veu,{className:"ml-2 h-4 w-4"}):"asc"===n.getIsSorted()?(0,r.jsx)(s.Hf3,{className:"ml-2 h-4 w-4"}):(0,r.jsx)(s.jnn,{className:"ml-2 h-4 w-4"})]})}),(0,r.jsxs)(i.AW,{align:"start",children:[(0,r.jsxs)(i.Xi,{onClick:()=>n.toggleSorting(!1),children:[(0,r.jsx)(s.Hf3,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),(0,r.jsxs)(i.Xi,{onClick:()=>n.toggleSorting(!0),children:[(0,r.jsx)(s.veu,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),(0,r.jsx)(i.VD,{}),(0,r.jsxs)(i.Xi,{onClick:()=>n.toggleVisibility(!1),children:[(0,r.jsx)(s.L52,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Hide"]})]})]})}):(0,r.jsx)("div",{className:(0,a.cn)(o),children:t})}var c=t(1908),d=t(6672),u=t(6754),m=t(2609),x=t(2265),h=t(658),g=t(3192);function p(e){let{row:n}=e,t=n.original,[a,o]=(0,x.useState)({state:!1,action:()=>{}}),[p,f]=(0,x.useState)({text:""}),[j,v]=(0,h.D)(g.Vk,{onCompleted(e){u.Z.notify("Successful"),window.location.reload()},onError(e){u.Z.danger("Error"),console.log(e,"data")},variables:{limit:50,page:0}});return(0,r.jsxs)(m.Vq,{children:[(0,r.jsxs)(i.h_,{children:[(0,r.jsx)(i.$F,{asChild:!0,children:(0,r.jsxs)(l.z,{variant:"ghost",className:"flex h-8 w-8 p-0 data-[state=open]:bg-muted",children:[(0,r.jsx)(s.nWS,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Open menu"})]})}),(0,r.jsxs)(i.AW,{align:"end",className:"w-[160px]",children:[(0,r.jsx)(m.hg,{asChild:!0,children:(0,r.jsx)(i.Xi,{children:"Add report"})}),(0,r.jsx)(i.Xi,{onClick:()=>{console.log(t),(null==t?void 0:t.report_type)=="hashtag"&&window.open("/dashboard/hashtag?id="+(null==t?void 0:t.report_id)),(null==t?void 0:t.report_type)=="content"&&window.open("/dashboard/hashtag?id="+(null==t?void 0:t.report_id)),(null==t?void 0:t.report_type)=="user"&&window.open("/dashboard/hashtag?id="+(null==t?void 0:t.report_id))},children:"View Item"})]})]}),(0,r.jsxs)(m.cZ,{className:"sm:max-w-[425px]",children:[(0,r.jsxs)(m.fK,{children:[(0,r.jsx)(m.$N,{children:"Report"}),(0,r.jsx)(m.Be,{children:"Deatils for this report"})]}),(0,r.jsx)("div",{className:"grid gap-4 py-4",children:(0,r.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,r.jsx)(d._,{htmlFor:"username",className:"text-right",children:"Action"}),(0,r.jsx)(c.I,{id:"username",defaultValue:"content policy violation",className:"col-span-3",onChange:e=>f({...p,text:e.target.value})})]})}),(0,r.jsx)(m.cN,{children:(0,r.jsx)(l.z,{type:"button",onClick:()=>{j({variables:{reportId:null==t?void 0:t._id,action:null==p?void 0:p.text}})},children:v.loading?"Loading":"Save changes"})})]})]})}let f=[{accessorKey:"_id",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"ID"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"w-[50px] truncate",children:n.getValue("_id")})},enableSorting:!1,enableHiding:!1},{accessorKey:"message",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Report"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:n.getValue("message")})})}},{accessorKey:"report_type",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Type"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:n.getValue("report_type")})})}},{accessorKey:"reported_by",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Reporter"})},cell:e=>{var n;let{row:t}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:null===(n=t.getValue("reported_by"))||void 0===n?void 0:n.name})})}},{accessorKey:"reported_by",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Username"})},cell:e=>{var n;let{row:t}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsxs)("span",{className:"max-w-[500px] truncate font-medium",children:["@",null===(n=t.getValue("reported_by"))||void 0===n?void 0:n.username]})})}},{accessorKey:"action",header:e=>{let{column:n}=e;return(0,r.jsx)(o,{column:n,title:"Admin Report"})},cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex space-x-2",children:(0,r.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:n.getValue("action")})})}},{id:"actions",cell:e=>{let{row:n}=e;return(0,r.jsx)(p,{row:n})}}];var j=t(3216),v=t(7660),N=t(2553),w=t(8094);function b(e){let{table:n}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-between px-2",children:[(0,r.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[n.getFilteredSelectedRowModel().rows.length," of"," ",n.getFilteredRowModel().rows.length," row(s) selected."]}),(0,r.jsxs)("div",{className:"flex items-center space-x-6 lg:space-x-8",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("p",{className:"text-sm font-medium",children:"Rows per page"}),(0,r.jsxs)(w.Ph,{value:"".concat(n.getState().pagination.pageSize),onValueChange:e=>{n.setPageSize(Number(e))},children:[(0,r.jsx)(w.i4,{className:"h-8 w-[70px]",children:(0,r.jsx)(w.ki,{placeholder:n.getState().pagination.pageSize})}),(0,r.jsx)(w.Bw,{side:"top",children:[10,20,30,40,50].map(e=>(0,r.jsx)(w.Ql,{value:"".concat(e),children:e},e))})]})]}),(0,r.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",n.getState().pagination.pageIndex+1," of"," ",n.getPageCount()]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsxs)(l.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>n.setPageIndex(0),disabled:!n.getCanPreviousPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to first page"}),(0,r.jsx)(s.kRt,{className:"h-4 w-4"})]}),(0,r.jsxs)(l.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>n.previousPage(),disabled:!n.getCanPreviousPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,r.jsx)(s.wyc,{className:"h-4 w-4"})]}),(0,r.jsxs)(l.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>n.nextPage(),disabled:!n.getCanNextPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,r.jsx)(s.XCv,{className:"h-4 w-4"})]}),(0,r.jsxs)(l.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>n.setPageIndex(n.getPageCount()-1),disabled:!n.getCanNextPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to last page"}),(0,r.jsx)(s.yr4,{className:"h-4 w-4"})]})]})]})]})}var y=t(9155),C=t(6523),S=t(5831),_=t(6775);function $(e){let{column:n,title:t,options:i}=e,o=null==n?void 0:n.getFacetedUniqueValues(),c=new Set(null==n?void 0:n.getFilterValue());return(0,r.jsxs)(S.J2,{children:[(0,r.jsx)(S.xo,{asChild:!0,children:(0,r.jsxs)(l.z,{variant:"outline",size:"sm",className:"h-8 border-dashed",children:[(0,r.jsx)(s.SPS,{className:"mr-2 h-4 w-4"}),t,(null==c?void 0:c.size)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Separator,{orientation:"vertical",className:"mx-2 h-4"}),(0,r.jsx)(y.C,{variant:"secondary",className:"rounded-sm px-1 font-normal lg:hidden",children:c.size}),(0,r.jsx)("div",{className:"hidden space-x-1 lg:flex",children:c.size>2?(0,r.jsxs)(y.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:[c.size," selected"]}):i.filter(e=>c.has(e.value)).map(e=>(0,r.jsx)(y.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:e.label},e.value))})]})]})}),(0,r.jsx)(S.yk,{className:"w-[200px] p-0",align:"start",children:(0,r.jsxs)(C.mY,{children:[(0,r.jsx)(C.sZ,{placeholder:t}),(0,r.jsxs)(C.e8,{children:[(0,r.jsx)(C.rb,{children:"No results found."}),(0,r.jsx)(C.fu,{children:i.map(e=>{let t=c.has(e.value);return(0,r.jsxs)(C.di,{onSelect:()=>{t?c.delete(e.value):c.add(e.value);let r=Array.from(c);null==n||n.setFilterValue(r.length?r:void 0)},children:[(0,r.jsx)("div",{className:(0,a.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",t?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:(0,r.jsx)(s.nQG,{className:(0,a.cn)("h-4 w-4")})}),e.icon&&(0,r.jsx)(e.icon,{className:"mr-2 h-4 w-4 text-muted-foreground"}),(0,r.jsx)("span",{children:e.label}),(null==o?void 0:o.get(e.value))&&(0,r.jsx)("span",{className:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",children:o.get(e.value)})]},e.value)})}),c.size>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C.zz,{}),(0,r.jsx)(C.fu,{children:(0,r.jsx)(C.di,{onSelect:()=>null==n?void 0:n.setFilterValue(void 0),className:"justify-center text-center",children:"Clear filters"})})]})]})]})})]})}var k=t(3291);function P(e){let{table:n}=e;return(0,r.jsxs)(i.h_,{children:[(0,r.jsx)(k.$F,{asChild:!0,children:(0,r.jsxs)(l.z,{variant:"outline",size:"sm",className:"ml-auto hidden h-8 lg:flex",children:[(0,r.jsx)(s.hsZ,{className:"mr-2 h-4 w-4"}),"View"]})}),(0,r.jsxs)(i.AW,{align:"end",className:"w-[150px]",children:[(0,r.jsx)(i.Ju,{children:"Toggle columns"}),(0,r.jsx)(i.VD,{}),n.getAllColumns().filter(e=>void 0!==e.accessorFn&&e.getCanHide()).map(e=>(0,r.jsx)(i.bO,{className:"capitalize",checked:e.getIsVisible(),onCheckedChange:n=>e.toggleVisibility(!!n),children:e.id},e.id))]})]})}function R(e){var n,t;let{table:a}=e,i=a.getState().columnFilters.length>0;return(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-1 items-center space-x-2",children:[(0,r.jsx)(c.I,{placeholder:"search report...",value:null!==(t=null===(n=a.getColumn("message"))||void 0===n?void 0:n.getFilterValue())&&void 0!==t?t:"",onChange:e=>{var n;return null===(n=a.getColumn("message"))||void 0===n?void 0:n.setFilterValue(e.target.value)},className:"h-8 w-[150px] lg:w-[250px]"}),(0,r.jsx)($,{column:a.getColumn("report_type"),title:"Type",options:[{label:"app",value:"app"},{label:"content",value:"content"},{label:"user",value:"user"},{label:"hashtag",value:"hashtag"}]}),i&&(0,r.jsxs)(l.z,{variant:"ghost",onClick:()=>a.resetColumnFilters(),className:"h-8 px-2 lg:px-3",children:["Reset",(0,r.jsx)(s.Pxu,{className:"ml-2 h-4 w-4"})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(P,{table:a})})]})}function I(e){var n;let{columns:t,data:s}=e,[a,l]=x.useState({}),[i,o]=x.useState({}),[c,d]=x.useState([]),[u,m]=x.useState([]),h=(0,j.b7)({data:s,columns:t,state:{sorting:u,columnVisibility:i,rowSelection:a,columnFilters:c},enableRowSelection:!0,onRowSelectionChange:l,onSortingChange:m,onColumnFiltersChange:d,onColumnVisibilityChange:o,getCoreRowModel:(0,v.sC)(),getFilteredRowModel:(0,v.vL)(),getPaginationRowModel:(0,v.G_)(),getSortedRowModel:(0,v.tj)(),getFacetedRowModel:(0,v.o6)(),getFacetedUniqueValues:(0,v.JG)()});return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)(R,{table:h}),(0,r.jsx)("div",{className:"rounded-md border",children:(0,r.jsxs)(N.iA,{children:[(0,r.jsx)(N.xD,{children:h.getHeaderGroups().map(e=>(0,r.jsx)(N.SC,{children:e.headers.map(e=>(0,r.jsx)(N.ss,{colSpan:e.colSpan,children:e.isPlaceholder?null:(0,j.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(N.RM,{children:(null===(n=h.getRowModel().rows)||void 0===n?void 0:n.length)?h.getRowModel().rows.map(e=>(0,r.jsx)(N.SC,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(N.pj,{children:(0,j.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(N.SC,{children:(0,r.jsx)(N.pj,{colSpan:t.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,r.jsx)(b,{table:h})]})}var A=t(6571),V=t(5854);function z(){let[e,n]=(0,x.useState)([]);return(0,V.a)(A.gp,{onCompleted(e){n(null==e?void 0:e.ListReport),console.log(e.ListReport)},onError(e){console.log(e,"data")},variables:{limit:50,page:0}}),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"hidden h-full flex-1 flex-col space-y-8 p-8 md:flex",children:(0,r.jsx)(I,{data:e,columns:f})})})}},9155:function(e,n,t){"use strict";t.d(n,{C:function(){return i}});var r=t(7437);t(2265);var s=t(6061),a=t(9311);let l=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:n,variant:t,...s}=e;return(0,r.jsx)("div",{className:(0,a.cn)(l({variant:t}),n),...s})}},6672:function(e,n,t){"use strict";t.d(n,{_:function(){return c}});var r=t(7437),s=t(2265),a=t(6743),l=t(6061),i=t(9311);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.f,{ref:n,className:(0,i.cn)(o(),t),...s})});c.displayName=a.f.displayName},6775:function(e,n,t){"use strict";t.r(n),t.d(n,{Separator:function(){return i}});var r=t(7437),s=t(2265),a=t(6823),l=t(9311);let i=s.forwardRef((e,n)=>{let{className:t,orientation:s="horizontal",decorative:i=!0,...o}=e;return(0,r.jsx)(a.f,{ref:n,decorative:i,orientation:s,className:(0,l.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",t),...o})});i.displayName=a.f.displayName},2553:function(e,n,t){"use strict";t.d(n,{RM:function(){return o},SC:function(){return d},iA:function(){return l},pj:function(){return m},ss:function(){return u},xD:function(){return i}});var r=t(7437),s=t(2265),a=t(9311);let l=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{className:"w-full overflow-auto",children:(0,r.jsx)("table",{ref:n,className:(0,a.cn)("w-full caption-bottom text-sm",t),...s})})});l.displayName="Table";let i=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("thead",{ref:n,className:(0,a.cn)("[&_tr]:border-b",t),...s})});i.displayName="TableHeader";let o=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("tbody",{ref:n,className:(0,a.cn)("[&_tr:last-child]:border-0",t),...s})});o.displayName="TableBody";let c=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("tfoot",{ref:n,className:(0,a.cn)("bg-primary font-medium text-primary-foreground",t),...s})});c.displayName="TableFooter";let d=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("tr",{ref:n,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});d.displayName="TableRow";let u=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("th",{ref:n,className:(0,a.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});u.displayName="TableHead";let m=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("td",{ref:n,className:(0,a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});m.displayName="TableCell";let x=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("caption",{ref:n,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",t),...s})});x.displayName="TableCaption"},3192:function(e,n,t){"use strict";t.d(n,{Bf:function(){return j},OT:function(){return f},PJ:function(){return y},Vk:function(){return _},bU:function(){return k},k3:function(){return v},ly:function(){return S},pK:function(){return b},rf:function(){return C},rq:function(){return w},rz:function(){return N},y$:function(){return $}});var r=t(230),s=t(1049);function a(){let e=(0,r._)(["\n  query LoginUserWithEmail($email: String) {\n    LoginUserWithEmail(email: $email) {\n      status\n      message\n      json\n    }\n  }\n"]);return a=function(){return e},e}function l(){let e=(0,r._)(["\n  mutation AdminGiveWarningStrike(\n    $userId: String!\n    $type: String!\n    $reason: String\n  ) {\n    AdminGiveWarningStrike(user_id: $userId, type: $type, reason: $reason) {\n      status\n      message\n      json\n    }\n  }\n"]);return l=function(){return e},e}function i(){let e=(0,r._)(["\n  mutation AdminBlockUser($userId: String!, $warningStrikeId: String!) {\n    AdminBlockUser(user_id: $userId, warning_strike_id: $warningStrikeId) {\n      status\n      message\n      json\n    }\n  }\n"]);return i=function(){return e},e}function o(){let e=(0,r._)(["\n  mutation AddCategories($name: String!) {\n    AddCategories(name: $name) {\n      status\n      message\n      json\n    }\n  }\n"]);return o=function(){return e},e}function c(){let e=(0,r._)(["\n  mutation AdminDeleteCategoriy($name: String!) {\n    AdminDeleteCategoriy(name: $name) {\n      status\n      message\n      json\n    }\n  }\n"]);return c=function(){return e},e}function d(){let e=(0,r._)(["\n  mutation AdminDeleteContent($contentId: String!) {\n    AdminDeleteContent(content_id: $contentId) {\n      status\n      message\n      json\n    }\n  }\n"]);return d=function(){return e},e}function u(){let e=(0,r._)(["\n  mutation AdminEditContent($contentId: String!, $caption: String) {\n    AdminEditContent(content_id: $contentId, caption: $caption) {\n      status\n      message\n      json\n    }\n  }\n"]);return u=function(){return e},e}function m(){let e=(0,r._)(["\n  mutation AdminChangeHashtagOwnership(\n    $hashtagId: String\n    $newOwnerId: String\n  ) {\n    AdminChangeHashtagOwnership(\n      hashtag_id: $hashtagId\n      new_owner_id: $newOwnerId\n    ) {\n      status\n      message\n      json\n    }\n  }\n"]);return m=function(){return e},e}function x(){let e=(0,r._)(["\n  mutation AdminBlockHashtag($hashtagId: String!) {\n    AdminBlockHashtag(hashtag_id: $hashtagId) {\n      status\n      message\n      json\n    }\n  }\n"]);return x=function(){return e},e}function h(){let e=(0,r._)(["\n  mutation Admin_ReportAction($reportId: String!, $action: String!) {\n    Admin_ReportAction(report_id: $reportId, action: $action) {\n      status\n      message\n      json\n    }\n  }\n"]);return h=function(){return e},e}function g(){let e=(0,r._)(["\n  query GetUserWarningStrikes($userId: String!, $limit: Int, $page: Int) {\n    GetUserWarningStrikes(user_id: $userId, limit: $limit, page: $page) {\n      _id\n      type\n      strike_count\n      reason\n      status\n    }\n  }\n"]);return g=function(){return e},e}function p(){let e=(0,r._)(["\n  mutation ValidateEmailVerifyOTP(\n    $email: String!\n    $otp: String!\n    $isAuth: Boolean!\n  ) {\n    ValidateEmailVerifyOTP(email: $email, OTP: $otp, isAuth: $isAuth) {\n      _id\n      name\n      auth_token\n      account_type\n      email\n      birthday\n      username\n      auth_type\n      account {\n        _id\n        balance\n      }\n      followers\n      following\n      bio\n      cover_picture\n      phone_number\n      profile_picture\n      socials\n      is_blocked\n    }\n  }\n"]);return p=function(){return e},e}let f=(0,s.Ps)(a()),j=(0,s.Ps)(l()),v=(0,s.Ps)(i()),N=(0,s.Ps)(o()),w=(0,s.Ps)(c()),b=(0,s.Ps)(d()),y=(0,s.Ps)(u()),C=(0,s.Ps)(m()),S=(0,s.Ps)(x()),_=(0,s.Ps)(h()),$=(0,s.Ps)(g()),k=(0,s.Ps)(p())},6823:function(e,n,t){"use strict";t.d(n,{f:function(){return d}});var r=t(3428),s=t(2265),a=t(9381);let l="horizontal",i=["horizontal","vertical"],o=(0,s.forwardRef)((e,n)=>{let{decorative:t,orientation:i=l,...o}=e,d=c(i)?i:l;return(0,s.createElement)(a.WV.div,(0,r.Z)({"data-orientation":d},t?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},o,{ref:n}))});function c(e){return i.includes(e)}o.propTypes={orientation(e,n,t){let r=e[n],s=String(r);return r&&!c(r)?Error(`Invalid prop \`orientation\` of value \`${s}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`):null}};let d=o}},function(e){e.O(0,[8310,1677,3604,2273,8787,5508,667,5960,8090,3216,7055,4142,3862,443,2971,7864,1744],function(){return e(e.s=6724)}),_N_E=e.O()}]);