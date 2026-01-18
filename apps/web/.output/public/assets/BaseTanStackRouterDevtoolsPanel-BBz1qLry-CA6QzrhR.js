import{Q as ct,i as ut,U as W,V as Pe,W as G,X as I,Y as nt,Z as Ae,$ as d,a0 as ft,a1 as p,a2 as a,a3 as _,a4 as L,a5 as Ee,a6 as ue,a as R,a7 as te,a8 as vt,a9 as gt,aa as it,ab as Xe,ac as ht,ad as $t,ae as mt,af as pt,ag as ot,ah as Re}from"./main-DrgFmjJ8.js";import{u as Se}from"./goober.modern-D2HZIzZw.js";const bt=typeof window>"u";function Me(o){const e={pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"};return o.isFetching&&o.status==="success"?o.isFetching==="beforeLoad"?"purple":"blue":e[o.status]}function yt(o,e){const n=o.find(t=>t.routeId===e.id);return n?Me(n):"gray"}function tr(){const[o,e]=W(!1);return(bt?Pe:p)(()=>{e(!0)}),o}const xt=o=>{const e=Object.getOwnPropertyNames(Object(o)),n=typeof o=="bigint"?`${o.toString()}n`:o;try{return JSON.stringify(n,e)}catch{return"unable to stringify"}};function wt(o,e=[n=>n]){return o.map((n,t)=>[n,t]).sort(([n,t],[m,s])=>{for(const c of e){const u=c(n),y=c(m);if(typeof u>"u"){if(typeof y>"u")continue;return 1}if(u!==y)return u>y?1:-1}return t-s}).map(([n])=>n)}const B={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",70:"b3",20:"33"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)"},weight:{normal:"400",medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",full:"9999px"}},size:{0:"0px",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",5:"calc(var(--tsrd-font-size) * 1.25)",8:"calc(var(--tsrd-font-size) * 2)"}},Ct=o=>{const{colors:e,font:n,size:t,alpha:m,border:s}=B,{fontFamily:c,lineHeight:u,size:y}=n,i=o?Se.bind({target:o}):Se;return{devtoolsPanelContainer:i`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${e.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:r=>i`
        visibility: ${r?"visible":"hidden"};
      `,devtoolsPanelContainerResizing:r=>r()?i`
          transition: none;
        `:i`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(r,b)=>r?i`
          pointer-events: auto;
          transform: translateY(0);
        `:i`
        pointer-events: none;
        transform: translateY(${b}px);
      `,logo:i`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${c.sans};
      gap: ${B.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${e.blue[800]};
      }
    `,tanstackLogo:i`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${e.gray[300]};
    `,routerLogo:i`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:i`
      display: flex;
      font-size: ${y.sm};
      font-family: ${c.sans};
      background-color: ${e.darkGray[700]};
      color: ${e.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${y.xs};
      }
    `,dragHandle:i`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${e.purple[400]}${m[90]};
      }
    `,firstContainer:i`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${e.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:i`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:i`
      padding: ${B.size[2]};
    `,row:i`
      display: flex;
      align-items: center;
      padding: ${B.size[2]} ${B.size[2.5]};
      gap: ${B.size[2.5]};
      border-bottom: ${e.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:i`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${e.darkGray[600]};
      padding: 0px ${B.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${B.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:i`
      background: ${e.yellow[900]}${m[70]};
      color: ${e.yellow[300]};
      display: inline-block;
      padding: ${B.size[0]} ${B.size[2.5]};
      border-radius: ${s.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${e.yellow[300]};
    `,maskedLocation:i`
      color: ${e.yellow[300]};
    `,detailsContent:i`
      padding: ${B.size[1.5]} ${B.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:i`
      display: flex;
      align-items: center;
      border: 1px solid ${e.gray[500]};
      border-radius: ${s.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(r,b)=>{const k=[i`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${c.sans};
        font-weight: ${n.weight.medium};
      `];if(r){const h=i`
          background: ${e.darkGray[400]};
          color: ${e.gray[300]};
        `;k.push(h)}else{const h=i`
          color: ${e.gray[500]};
          background: ${e.darkGray[800]}${m[20]};
        `;k.push(h)}return b&&k.push(i`
          border-right: 1px solid ${B.colors.gray[500]};
        `),k},detailsHeaderInfo:i`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${e.gray[400]};
    `,matchRow:r=>{const x=[i`
        display: flex;
        border-bottom: 1px solid ${e.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${t[1]} ${t[2]};
        gap: ${t[2]};
        font-size: ${y.xs};
        color: ${e.gray[300]};
      `];if(r){const k=i`
          background: ${e.darkGray[500]};
        `;x.push(k)}return x},matchIndicator:r=>{const x=[i`
        flex: 0 0 auto;
        width: ${t[3]};
        height: ${t[3]};
        background: ${e[r][900]};
        border: 1px solid ${e[r][500]};
        border-radius: ${s.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(r==="gray"){const k=i`
          background: ${e.gray[700]};
          border-color: ${e.gray[400]};
        `;x.push(k)}return x},matchID:i`
      flex: 1;
      line-height: ${u.xs};
    `,ageTicker:r=>{const x=[i`
        display: flex;
        gap: ${t[1]};
        font-size: ${y.xs};
        color: ${e.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${u.xs};
      `];if(r){const k=i`
          color: ${e.yellow[400]};
        `;x.push(k)}return x},secondContainer:i`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${e.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:i`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${e.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${e.gray[700]};
      }
    `,fourthContainer:i`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:i`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(r,b)=>{const k=[i`
        display: flex;
        border-bottom: 1px solid ${e.darkGray[400]};
        align-items: center;
        padding: ${t[1]} ${t[2]};
        gap: ${t[2]};
        font-size: ${y.xs};
        color: ${e.gray[300]};
        cursor: ${b?"pointer":"default"};
        line-height: ${u.xs};
      `];if(r){const h=i`
          background: ${e.darkGray[500]};
        `;k.push(h)}return k},routesRow:r=>{const x=[i`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${y.xs};
        line-height: ${u.xs};
      `];if(!r){const k=i`
          color: ${e.gray[400]};
        `;x.push(k)}return x},routesRowInner:i`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:i`
      color: ${e.gray[400]};
      font-size: ${y.xs};
      line-height: ${u.xs};
    `,nestedRouteRow:r=>i`
        margin-left: ${r?0:t[3.5]};
        border-left: ${r?"":`solid 1px ${e.gray[700]}`};
      `,code:i`
      font-size: ${y.xs};
      line-height: ${u.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:i`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:i`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:i`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:i`
      padding: ${t[1]} ${t[2]};
      font-size: ${B.font.size.xs};
    `,maskedBadgeContainer:i`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:i`
      display: flex;
      flex-direction: column;
      padding: ${B.size[2]};
      font-size: ${B.font.size.xs};
      color: ${B.colors.gray[300]};
      line-height: ${B.font.lineHeight.sm};
    `,matchStatus:(r,b)=>{const k=b&&r==="success"?b==="beforeLoad"?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[r];return i`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${B.border.radius.sm};
        font-weight: ${B.font.weight.normal};
        background-color: ${B.colors[k][900]}${B.alpha[90]};
        color: ${B.colors[k][300]};
        border: 1px solid ${B.colors[k][600]};
        margin-bottom: ${B.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:i`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:i`
      display: flex;
    `,mainCloseBtn:i`
      background: ${e.darkGray[700]};
      padding: ${t[1]} ${t[2]} ${t[1]} ${t[1.5]};
      border-radius: ${s.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${e.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${e.darkGray[500]};
      }
    `,mainCloseBtnPosition:r=>i`
        ${r==="top-left"?`top: ${t[2]}; left: ${t[2]};`:""}
        ${r==="top-right"?`top: ${t[2]}; right: ${t[2]};`:""}
        ${r==="bottom-left"?`bottom: ${t[2]}; left: ${t[2]};`:""}
        ${r==="bottom-right"?`bottom: ${t[2]}; right: ${t[2]};`:""}
      `,mainCloseBtnAnimation:r=>r?i`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:i`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:i`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:i`
      width: 1px;
      background: ${B.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:i`
      position: relative;
      width: ${t[5]};
      height: ${t[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:i`
      width: ${t[5]};
      height: ${t[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:i`
      width: ${t[4]};
      height: ${t[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:i`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${e.darkGray[700]};
      &:hover {
        background-color: ${e.darkGray[500]};
      }

      top: 0;
      right: ${t[2]};
      transform: translate(0, -100%);
      border-right: ${e.darkGray[300]} 1px solid;
      border-left: ${e.darkGray[300]} 1px solid;
      border-top: ${e.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${s.radius.sm} ${s.radius.sm} 0px 0px;
      padding: ${t[1]} ${t[1.5]} ${t[.5]} ${t[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${t[2.5]};
        height: ${t[1.5]};
        width: calc(100% + ${t[5]});
      }
    `,panelCloseBtnIcon:i`
      color: ${e.gray[400]};
      width: ${t[2]};
      height: ${t[2]};
    `,navigateButton:i`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${e.gray[400]};
      font-size: ${y.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${e.blue[300]};
      }
    `}};function ve(){const o=it(ot),[e]=W(Ct(o));return e}const kt=o=>{try{const e=localStorage.getItem(o);return typeof e=="string"?JSON.parse(e):void 0}catch{return}};function Ze(o,e){const[n,t]=W();return Pe(()=>{const s=kt(o);t(typeof s>"u"||s===null?typeof e=="function"?e():e:s)}),[n,s=>{t(c=>{let u=s;typeof s=="function"&&(u=s(c));try{localStorage.setItem(o,JSON.stringify(u))}catch{}return u})}]}var _t=I('<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">'),xe=I("<div>"),St=I("<button><span> "),Ft=I("<div><div><button> [<!> ... <!>]"),zt=I("<button><span></span> 🔄 "),Dt=I("<span>:"),Bt=I("<span>");const qe=({expanded:o,style:e={}})=>{const n=at();return(()=>{var t=_t(),m=t.firstChild;return p(s=>{var c=n().expander,u=R(n().expanderIcon(o));return c!==s.e&&a(t,s.e=c),u!==s.t&&te(m,"class",s.t=u),s},{e:void 0,t:void 0}),t})()};function It(o,e){if(e<1)return[];let n=0;const t=[];for(;n<o.length;)t.push(o.slice(n,n+e)),n=n+e;return t}function Et(o){return Symbol.iterator in o}function ne({value:o,defaultExpanded:e,pageSize:n=100,filterSubEntries:t,...m}){const[s,c]=W(!!e),u=()=>c(O=>!O),y=G(()=>typeof o()),i=G(()=>{let O=[];const Z=f=>{const E=e===!0?{[f.label]:!0}:e?.[f.label];return{...f,value:()=>f.value,defaultExpanded:E}};return Array.isArray(o())?O=o().map((f,E)=>Z({label:E.toString(),value:f})):o()!==null&&typeof o()=="object"&&Et(o())&&typeof o()[Symbol.iterator]=="function"?O=Array.from(o(),(f,E)=>Z({label:E.toString(),value:f})):typeof o()=="object"&&o()!==null&&(O=Object.entries(o()).map(([f,E])=>Z({label:f,value:E}))),t?t(O):O}),r=G(()=>It(i(),n)),[b,x]=W([]),[k,h]=W(void 0),M=at(),N=()=>{h(o()())},U=O=>_(ne,Ae({value:o,filterSubEntries:t},m,O));return(()=>{var O=xe();return d(O,(()=>{var Z=L(()=>!!r().length);return()=>Z()?[(()=>{var f=St(),E=f.firstChild,S=E.firstChild;return f.$$click=()=>u(),d(f,_(qe,{get expanded(){return s()??!1}}),E),d(f,()=>m.label,E),d(E,()=>String(y).toLowerCase()==="iterable"?"(Iterable) ":"",S),d(E,()=>i().length,S),d(E,()=>i().length>1?"items":"item",null),p(K=>{var Q=M().expandButton,Y=M().info;return Q!==K.e&&a(f,K.e=Q),Y!==K.t&&a(E,K.t=Y),K},{e:void 0,t:void 0}),f})(),L(()=>L(()=>!!(s()??!1))()?L(()=>r().length===1)()?(()=>{var f=xe();return d(f,()=>i().map((E,S)=>U(E))),p(()=>a(f,M().subEntries)),f})():(()=>{var f=xe();return d(f,()=>r().map((E,S)=>(()=>{var K=Ft(),Q=K.firstChild,Y=Q.firstChild,ie=Y.firstChild,ge=ie.nextSibling,Fe=ge.nextSibling,P=Fe.nextSibling;return P.nextSibling,Y.$$click=()=>x(z=>z.includes(S)?z.filter(V=>V!==S):[...z,S]),d(Y,_(qe,{get expanded(){return b().includes(S)}}),ie),d(Y,S*n,ge),d(Y,S*n+n-1,P),d(Q,(()=>{var z=L(()=>!!b().includes(S));return()=>z()?(()=>{var V=xe();return d(V,()=>E.map(J=>U(J))),p(()=>a(V,M().subEntries)),V})():null})(),null),p(z=>{var V=M().entry,J=R(M().labelButton,"labelButton");return V!==z.e&&a(Q,z.e=V),J!==z.t&&a(Y,z.t=J),z},{e:void 0,t:void 0}),K})())),p(()=>a(f,M().subEntries)),f})():null)]:L(()=>y()==="function")()?_(ne,{get label(){return(()=>{var f=zt(),E=f.firstChild;return f.$$click=N,d(E,()=>m.label),p(()=>a(f,M().refreshValueBtn)),f})()},value:k,defaultExpanded:{}}):[(()=>{var f=Dt(),E=f.firstChild;return d(f,()=>m.label,E),f})()," ",(()=>{var f=Bt();return d(f,()=>xt(o())),p(()=>a(f,M().value)),f})()]})()),p(()=>a(O,M().entry)),O})()}const Tt=o=>{const{colors:e,font:n,size:t}=B,{fontFamily:m,lineHeight:s,size:c}=n,u=o?Se.bind({target:o}):Se;return{entry:u`
      font-family: ${m.mono};
      font-size: ${c.xs};
      line-height: ${s.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:u`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:u`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${t[3]};
      height: ${t[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:y=>y?u`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:u`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:u`
      display: flex;
      gap: ${t[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:u`
      color: ${e.purple[400]};
    `,subEntries:u`
      margin-left: ${t[2]};
      padding-left: ${t[2]};
      border-left: 2px solid ${e.darkGray[400]};
    `,info:u`
      color: ${e.gray[500]};
      font-size: ${c["2xs"]};
      padding-left: ${t[1]};
    `,refreshValueBtn:u`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${m.mono};
      font-size: ${c.xs};
    `}};function at(){const o=it(ot),[e]=W(Tt(o));return e}Re(["click"]);var Mt=I("<div><div></div><div>/</div><div></div><div>/</div><div>");function Te(o){const e=["s","min","h","d"],n=[o/1e3,o/6e4,o/36e5,o/864e5];let t=0;for(let s=1;s<n.length&&!(n[s]<1);s++)t=s;return new Intl.NumberFormat(navigator.language,{compactDisplay:"short",notation:"compact",maximumFractionDigits:0}).format(n[t])+e[t]}function we({match:o,router:e}){const n=ve();if(!o)return null;const t=e().looseRoutesById[o.routeId];if(!t.options.loader)return null;const m=Date.now()-o.updatedAt,s=t.options.staleTime??e().options.defaultStaleTime??0,c=t.options.gcTime??e().options.defaultGcTime??1800*1e3;return(()=>{var u=Mt(),y=u.firstChild,i=y.nextSibling,r=i.nextSibling,b=r.nextSibling,x=b.nextSibling;return d(y,()=>Te(m)),d(r,()=>Te(s)),d(x,()=>Te(c)),p(()=>a(u,R(n().ageTicker(m>s)))),u})()}var Pt=I("<button type=button>➔");function Ce({to:o,params:e,search:n,router:t}){const m=ve();return(()=>{var s=Pt();return s.$$click=c=>{c.stopPropagation(),t().navigate({to:o,params:e,search:n})},te(s,"title",`Navigate to ${o}`),p(()=>a(s,m().navigateButton)),s})()}Re(["click"]);var At=I("<button><div>TANSTACK</div><div>TanStack Router v1"),Rt=I("<div style=display:flex;align-items:center;width:100%><div style=flex-grow:1;min-width:0>"),Lt=I("<code> "),fe=I("<code>"),Ot=I("<div><div role=button><div>"),ke=I("<div>"),Ht=I("<div><ul>"),jt=I('<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>'),Nt=I("<div><span>masked"),et=I("<div role=button><div>"),Gt=I("<li><div>"),Vt=I("<li>This panel displays the most recent 15 navigations."),Jt=I("<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>"),Ut=I("<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>"),Yt=I("<div>Loader Data"),Kt=I("<div><div><span>Search Params</span></div><div>"),Wt=I("<span style=margin-left:0.5rem>"),Qt=I('<button type=button aria-label="Copy value to clipboard"style=cursor:pointer>');const tt=15;function Xt(o){const{className:e,...n}=o,t=ve();return(()=>{var m=At(),s=m.firstChild,c=s.nextSibling;return nt(m,Ae(n,{get class(){return R(t().logo,e?e():"")}}),!1),p(u=>{var y=t().tanstackLogo,i=t().routerLogo;return y!==u.e&&a(s,u.e=y),i!==u.t&&a(c,u.t=i),u},{e:void 0,t:void 0}),m})()}function _e(o){return(()=>{var e=Rt(),n=e.firstChild;return d(e,()=>o.left,n),d(n,()=>o.children),d(e,()=>o.right,null),p(()=>a(e,o.class)),e})()}function st({routerState:o,router:e,route:n,isRoot:t,activeId:m,setActiveId:s}){const c=ve(),u=G(()=>o().pendingMatches||o().matches),y=G(()=>o().matches.find(b=>b.routeId===n.id)),i=G(()=>{try{if(y()?.params){const b=y()?.params,x=n.path||Xe(n.id);if(x.startsWith("$")){const k=x.slice(1);if(b[k])return`(${b[k]})`}}return""}catch{return""}}),r=G(()=>{if(t||!n.path)return;const b=Object.assign({},...u().map(k=>k.params)),x=ht({path:n.fullPath,params:b,decodeCharMap:e().pathParamsDecodeCharMap});return x.isMissingParams?void 0:x.interpolatedPath});return(()=>{var b=Ot(),x=b.firstChild,k=x.firstChild;return x.$$click=()=>{y()&&s(m()===n.id?"":n.id)},d(x,_(_e,{get class(){return R(c().routesRow(!!y()))},get left(){return _($t,{get when(){return r()},children:h=>_(Ce,{get to(){return h()},router:e})})},get right(){return _(we,{get match(){return y()},router:e})},get children(){return[(()=>{var h=Lt(),M=h.firstChild;return d(h,()=>t?ue:n.path||Xe(n.id),M),p(()=>a(h,c().code)),h})(),(()=>{var h=fe();return d(h,i),p(()=>a(h,c().routeParamInfo)),h})()]}}),null),d(b,(()=>{var h=L(()=>!!n.children?.length);return()=>h()?(()=>{var M=ke();return d(M,()=>[...n.children].sort((N,U)=>N.rank-U.rank).map(N=>_(st,{routerState:o,router:e,route:N,activeId:m,setActiveId:s}))),p(()=>a(M,c().nestedRouteRow(!!t))),M})():null})(),null),p(h=>{var M=`Open match details for ${n.id}`,N=R(c().routesRowContainer(n.id===m(),!!y())),U=R(c().matchIndicator(yt(u(),n)));return M!==h.e&&te(x,"aria-label",h.e=M),N!==h.t&&a(x,h.t=N),U!==h.a&&a(k,h.a=U),h},{e:void 0,t:void 0,a:void 0}),b})()}const rt=function({...e}){const{isOpen:n=!0,setIsOpen:t,handleDragStart:m,router:s,routerState:c,shadowDOMTarget:u,...y}=e,{onCloseClick:i}=ct(),r=ve(),{className:b,style:x,...k}=y;ut(s,"No router was found for the TanStack Router Devtools. Please place the devtools in the <RouterProvider> component tree or pass the router instance to the devtools manually.");const[h,M]=Ze("tanstackRouterDevtoolsActiveTab","routes"),[N,U]=Ze("tanstackRouterDevtoolsActiveRouteId",""),[O,Z]=W([]),[f,E]=W(!1);Pe(()=>{const P=c().matches,z=P[P.length-1];if(!z)return;const V=pt(()=>O()),J=V[0],oe=J&&J.pathname===z.pathname&&JSON.stringify(J.search??{})===JSON.stringify(z.search??{});(!J||!oe)&&(V.length>=tt&&E(!0),Z(he=>{const ae=[z,...he];return ae.splice(tt),ae}))});const S=G(()=>[...c().pendingMatches??[],...c().matches,...c().cachedMatches].find(z=>z.routeId===N()||z.id===N())),K=G(()=>Object.keys(c().location.search).length),Q=G(()=>({...s(),state:c()})),Y=G(()=>Object.fromEntries(wt(Object.keys(Q()),["state","routesById","routesByPath","options","manifest"].map(P=>z=>z!==P)).map(P=>[P,Q()[P]]).filter(P=>typeof P[1]!="function"&&!["__store","basepath","injectedHtml","subscribers","latestLoadPromise","navigateTimeout","resetNextScroll","tempLocationKey","latestLocation","routeTree","history"].includes(P[0])))),ie=G(()=>S()?.loaderData),ge=G(()=>S()),Fe=G(()=>c().location.search);return(()=>{var P=jt(),z=P.firstChild,V=z.firstChild,J=z.nextSibling,oe=J.firstChild,he=oe.nextSibling,ae=he.firstChild,ze=J.nextSibling,Le=ze.firstChild,$e=Le.firstChild;$e.firstChild;var me=$e.nextSibling,lt=me.firstChild,De=me.nextSibling,Be=De.firstChild,pe=Be.firstChild,be=pe.nextSibling,Ie=be.nextSibling,dt=Be.nextSibling,Oe=De.nextSibling;return nt(P,Ae({get class(){return R(r().devtoolsPanel,"TanStackRouterDevtoolsPanel",b?b():"")},get style(){return x?x():""}},k),!1),d(P,m?(()=>{var l=ke();return ft(l,"mousedown",m,!0),p(()=>a(l,r().dragHandle)),l})():null,z),z.$$click=l=>{t&&t(!1),i(l)},d(oe,_(Xt,{"aria-hidden":!0,onClick:l=>{t&&t(!1),i(l)}})),d(ae,_(ne,{label:"Router",value:Y,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:l=>l.filter(v=>typeof v.value()!="function")})),d($e,(()=>{var l=L(()=>!!c().location.maskedLocation);return()=>l()?(()=>{var v=Nt(),D=v.firstChild;return p(F=>{var C=r().maskedBadgeContainer,w=r().maskedBadge;return C!==F.e&&a(v,F.e=C),w!==F.t&&a(D,F.t=w),F},{e:void 0,t:void 0}),v})():null})(),null),d(lt,()=>c().location.pathname),d(me,(()=>{var l=L(()=>!!c().location.maskedLocation);return()=>l()?(()=>{var v=fe();return d(v,()=>c().location.maskedLocation?.pathname),p(()=>a(v,r().maskedLocation)),v})():null})(),null),pe.$$click=()=>{M("routes")},be.$$click=()=>{M("matches")},Ie.$$click=()=>{M("history")},d(Oe,_(gt,{get children(){return[_(Ee,{get when(){return h()==="routes"},get children(){return _(st,{routerState:c,router:s,get route(){return s().routeTree},isRoot:!0,activeId:N,setActiveId:U})}}),_(Ee,{get when(){return h()==="matches"},get children(){var l=ke();return d(l,()=>(c().pendingMatches?.length?c().pendingMatches:c().matches)?.map((v,D)=>(()=>{var F=et(),C=F.firstChild;return F.$$click=()=>U(N()===v.id?"":v.id),d(F,_(_e,{get left(){return _(Ce,{get to(){return v.pathname},get params(){return v.params},get search(){return v.search},router:s})},get right(){return _(we,{match:v,router:s})},get children(){var w=fe();return d(w,()=>`${v.routeId===ue?ue:v.pathname}`),p(()=>a(w,r().matchID)),w}}),null),p(w=>{var g=`Open match details for ${v.id}`,T=R(r().matchRow(v===S())),j=R(r().matchIndicator(Me(v)));return g!==w.e&&te(F,"aria-label",w.e=g),T!==w.t&&a(F,w.t=T),j!==w.a&&a(C,w.a=j),w},{e:void 0,t:void 0,a:void 0}),F})())),l}}),_(Ee,{get when(){return h()==="history"},get children(){var l=Ht(),v=l.firstChild;return d(v,_(vt,{get each(){return O()},children:(D,F)=>(()=>{var C=Gt(),w=C.firstChild;return d(C,_(_e,{get left(){return _(Ce,{get to(){return D.pathname},get params(){return D.params},get search(){return D.search},router:s})},get right(){return _(we,{match:D,router:s})},get children(){var g=fe();return d(g,()=>`${D.routeId===ue?ue:D.pathname}`),p(()=>a(g,r().matchID)),g}}),null),p(g=>{var T=R(r().matchRow(D===S())),j=R(r().matchIndicator(F()===0?"green":"gray"));return T!==g.e&&a(C,g.e=T),j!==g.t&&a(w,g.t=j),g},{e:void 0,t:void 0}),C})()}),null),d(v,(()=>{var D=L(()=>!!f());return()=>D()?(()=>{var F=Vt();return p(()=>a(F,r().historyOverflowContainer)),F})():null})(),null),l}})]}})),d(ze,(()=>{var l=L(()=>!!c().cachedMatches.length);return()=>l()?(()=>{var v=Jt(),D=v.firstChild,F=D.firstChild,C=F.nextSibling,w=D.nextSibling;return d(w,()=>c().cachedMatches.map(g=>(()=>{var T=et(),j=T.firstChild;return T.$$click=()=>U(N()===g.id?"":g.id),d(T,_(_e,{get left(){return _(Ce,{get to(){return g.pathname},get params(){return g.params},get search(){return g.search},router:s})},get right(){return _(we,{match:g,router:s})},get children(){var A=fe();return d(A,()=>`${g.id}`),p(()=>a(A,r().matchID)),A}}),null),p(A=>{var q=`Open match details for ${g.id}`,X=R(r().matchRow(g===S())),ee=R(r().matchIndicator(Me(g)));return q!==A.e&&te(T,"aria-label",A.e=q),X!==A.t&&a(T,A.t=X),ee!==A.a&&a(j,A.a=ee),A},{e:void 0,t:void 0,a:void 0}),T})())),p(g=>{var T=r().cachedMatchesContainer,j=r().detailsHeader,A=r().detailsHeaderInfo;return T!==g.e&&a(v,g.e=T),j!==g.t&&a(D,g.t=j),A!==g.a&&a(C,g.a=A),g},{e:void 0,t:void 0,a:void 0}),v})():null})(),null),d(P,(()=>{var l=L(()=>!!(S()&&S()?.status));return()=>l()?(()=>{var v=Ut(),D=v.firstChild,F=D.nextSibling,C=F.firstChild,w=C.firstChild,g=w.firstChild,T=w.nextSibling,j=T.firstChild,A=j.nextSibling,q=A.firstChild,X=T.nextSibling,ee=X.firstChild,se=ee.nextSibling,le=X.nextSibling,ye=le.firstChild,de=ye.nextSibling,re=F.nextSibling,ce=re.nextSibling;return d(g,(()=>{var $=L(()=>!!(S()?.status==="success"&&S()?.isFetching));return()=>$()?"fetching":S()?.status})()),d(q,()=>S()?.id),d(se,(()=>{var $=L(()=>!!c().pendingMatches?.find(H=>H.id===S()?.id));return()=>$()?"Pending":c().matches.find(H=>H.id===S()?.id)?"Active":"Cached"})()),d(de,(()=>{var $=L(()=>!!S()?.updatedAt);return()=>$()?new Date(S()?.updatedAt).toLocaleTimeString():"N/A"})()),d(v,(()=>{var $=L(()=>!!ie());return()=>$()?[(()=>{var H=Yt();return p(()=>a(H,r().detailsHeader)),H})(),(()=>{var H=ke();return d(H,_(ne,{label:"loaderData",value:ie,defaultExpanded:{}})),p(()=>a(H,r().detailsContent)),H})()]:null})(),re),d(ce,_(ne,{label:"Match",value:ge,defaultExpanded:{}})),p($=>{var H=r().thirdContainer,He=r().detailsHeader,je=r().matchDetails,Ne=r().matchStatus(S()?.status,S()?.isFetching),Ge=r().matchDetailsInfoLabel,Ve=r().matchDetailsInfo,Je=r().matchDetailsInfoLabel,Ue=r().matchDetailsInfo,Ye=r().matchDetailsInfoLabel,Ke=r().matchDetailsInfo,We=r().detailsHeader,Qe=r().detailsContent;return H!==$.e&&a(v,$.e=H),He!==$.t&&a(D,$.t=He),je!==$.a&&a(C,$.a=je),Ne!==$.o&&a(w,$.o=Ne),Ge!==$.i&&a(T,$.i=Ge),Ve!==$.n&&a(A,$.n=Ve),Je!==$.s&&a(X,$.s=Je),Ue!==$.h&&a(se,$.h=Ue),Ye!==$.r&&a(le,$.r=Ye),Ke!==$.d&&a(de,$.d=Ke),We!==$.l&&a(re,$.l=We),Qe!==$.u&&a(ce,$.u=Qe),$},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),v})():null})(),null),d(P,(()=>{var l=L(()=>!!K());return()=>l()?(()=>{var v=Kt(),D=v.firstChild;D.firstChild;var F=D.nextSibling;return d(D,typeof navigator<"u"?(()=>{var C=Wt();return d(C,_(Zt,{getValue:()=>{const w=c().location.search;return JSON.stringify(w)}})),C})():null,null),d(F,_(ne,{value:Fe,get defaultExpanded(){return Object.keys(c().location.search).reduce((C,w)=>(C[w]={},C),{})}})),p(C=>{var w=r().fourthContainer,g=r().detailsHeader,T=r().detailsContent;return w!==C.e&&a(v,C.e=w),g!==C.t&&a(D,C.t=g),T!==C.a&&a(F,C.a=T),C},{e:void 0,t:void 0,a:void 0}),v})():null})(),null),p(l=>{var v=r().panelCloseBtn,D=r().panelCloseBtnIcon,F=r().firstContainer,C=r().row,w=r().routerExplorerContainer,g=r().routerExplorer,T=r().secondContainer,j=r().matchesContainer,A=r().detailsHeader,q=r().detailsContent,X=r().detailsHeader,ee=r().routeMatchesToggle,se=h()==="routes",le=R(r().routeMatchesToggleBtn(h()==="routes",!0)),ye=h()==="matches",de=R(r().routeMatchesToggleBtn(h()==="matches",!0)),re=h()==="history",ce=R(r().routeMatchesToggleBtn(h()==="history",!1)),$=r().detailsHeaderInfo,H=R(r().routesContainer);return v!==l.e&&a(z,l.e=v),D!==l.t&&te(V,"class",l.t=D),F!==l.a&&a(J,l.a=F),C!==l.o&&a(oe,l.o=C),w!==l.i&&a(he,l.i=w),g!==l.n&&a(ae,l.n=g),T!==l.s&&a(ze,l.s=T),j!==l.h&&a(Le,l.h=j),A!==l.r&&a($e,l.r=A),q!==l.d&&a(me,l.d=q),X!==l.l&&a(De,l.l=X),ee!==l.u&&a(Be,l.u=ee),se!==l.c&&(pe.disabled=l.c=se),le!==l.w&&a(pe,l.w=le),ye!==l.m&&(be.disabled=l.m=ye),de!==l.f&&a(be,l.f=de),re!==l.y&&(Ie.disabled=l.y=re),ce!==l.g&&a(Ie,l.g=ce),$!==l.p&&a(dt,l.p=$),H!==l.b&&a(Oe,l.b=H),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),P})()};function Zt({getValue:o}){const[e,n]=W(!1);let t=null;const m=async()=>{if(typeof navigator>"u"||!navigator.clipboard?.writeText){console.warn("TanStack Router Devtools: Clipboard API unavailable");return}try{const s=o();await navigator.clipboard.writeText(s),n(!0),t&&clearTimeout(t),t=setTimeout(()=>n(!1),2500)}catch(s){console.error("TanStack Router Devtools: Failed to copy",s)}};return mt(()=>{t&&clearTimeout(t)}),(()=>{var s=Qt();return s.$$click=m,d(s,()=>e()?"✅":"📋"),p(()=>te(s,"title",e()?"Copied!":"Copy")),s})()}Re(["click","mousedown"]);const rr=Object.freeze(Object.defineProperty({__proto__:null,BaseTanStackRouterDevtoolsPanel:rt,default:rt},Symbol.toStringTag,{value:"Module"}));export{rt as B,tr as a,ve as b,rr as c,Ze as u};
