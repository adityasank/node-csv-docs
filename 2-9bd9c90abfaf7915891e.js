(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{185:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return d});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(18),s=n.n(l);n.d(t,"a",function(){return s.a});n(194);var c=o.a.createContext({}),d=function(t){return e.createElement(c.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}}).call(this,n(77))},189:function(e,t,n){"use strict";(function(e){var r=n(33),o=n.n(r),a=(n(198),n(55),n(79)),i=n.n(a),l=n(6),s=n.n(l),c=n(0),d=n(4),p=n.n(d),m=(n(54),n(199)),u={base:{width:"48px",height:"48px",borderRadius:"50%",transition:"background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)"},button:{":focus":{outline:"none"},":enabled:hover":{backgroundColor:"rgba(0, 0, 0, .08)"}},link:{":hover":{backgroundColor:"rgba(0, 0, 0, .08)"}}},f=function(t){function n(){return t.apply(this,arguments)||this}return s()(n,t),n.prototype.render=function(){var t=this.props,n=t.userStyles,r=t.children,a=i()(t,["userStyles","children"]);return n.base=Object.assign({},u.base,n.base),n.button=Object.assign({},u.button,n.button),n.link=Object.assign({},u.link,n.link),n.label=Object.assign({},u.label,n.label),e.createElement(m.a,o()({userStyles:n},a),r)},n}(c.Component);f.propTypes={role:p.a.string,tabIndex:p.a.number},f.defaultProps={role:"button",tabIndex:0,userStyles:{}},t.a=f}).call(this,n(77))},193:function(e,t,n){"use strict";(function(e){var r=n(33),o=n.n(r),a=(n(55),n(34)),i=n.n(a),l=n(6),s=n.n(l),c=n(203),d=n(0),p=n.n(d),m=n(4),u=n.n(m),f=n(229),g=n.n(f),h=n(185),b=n(205),E=n(208),y=n(210),v=n(211),x=n(212),k=n(214),w=(n(237),function(t){function n(e){var n;return(n=t.call(this,e)||this).styles={drawer:{backgroundColor:"#EBEBEB"},footer:{}},n.toggle=n.toggle.bind(i()(n)),n.state={open:!e.intro,breakpoint:980},n}s()(n,t);var r=n.prototype;return r.componentDidMount=function(){this.props.intro?this.setState({open:!1}):window.innerWidth<this.state.breakpoint&&this.setState({open:!1})},r.toggle=function(){this.setState({open:!this.state.open})},r.render=function(){var t=this,n=this.props,r=n.children,o=n.data,a=n.intro,i=n.page,l=this.styles,s=this.toggle,c=o.pages.edges.map(function(e){return Object.assign({},e.node.fields,e.node.frontmatter)}),d={};switch(d.slug=i.slug?/\/(\w+)/.exec(i.slug)[1]:"project",d.slug){case"project":d.name="node-csv";break;case"transform":d.name="node-stream-transform";break;default:d.name="node-csv-"+d.slug}return d.label=d.slug.charAt(0).toUpperCase()+d.slug.substr(1),d.issue="https://github.com/adaltas/"+d.name+"/issues",d.github="https://github.com/adaltas/"+d.name,e.createElement(p.a.Fragment,null,e.createElement(g.a,{title:"CSV "+d.label+" - "+i.title,meta:[{name:"description",content:i.description},{name:"keywords",content:i.keywords},{name:"google-site-verification",content:"ukvG8Ae6z6Ly-ABtoUMWzRAPMmn07QWlbRnot0AC5FA"}]},e.createElement("html",{lang:"en"})),e.createElement(b.a,{breakpoint:this.state.breakpoint,open:this.state.open,onClickModal:function(){return t.setState({open:!1})},width:"23%",main:e.createElement(p.a.Fragment,null,e.createElement(E.a,{onMenuClick:s,slug:i.slug,project:d},a&&e.createElement(y.a,null)),e.createElement(v.a,{page:i},r),e.createElement(k.a,null)),drawer:e.createElement(x.a,{slug:i.slug,pages:c,styles:l.drawer,onClickLink:function(){window.innerWidth<t.state.breakpoint&&t.setState({open:!1})}})}))},n}(d.Component));w.propTypes={children:u.a.node.isRequired},t.a=function(t){return e.createElement(h.b,{query:"256917004",render:function(n){return e.createElement(w,o()({data:n},t))},data:c})}}).call(this,n(77))},194:function(e,t,n){var r;e.exports=(r=n(204))&&r.default||r},199:function(e,t,n){"use strict";(function(e){var r=n(33),o=n.n(r),a=(n(198),n(55),n(79)),i=n.n(a),l=(n(186),n(32),n(34)),s=n.n(l),c=n(6),d=n.n(c),p=n(0),m=n.n(p),u=n(4),f=n.n(u),g=n(54),h={ripple:{top:0,left:0,width:"100%",height:"100%",display:"block",position:"absolute",overflow:"hidden",zIndex:0,pointerEvents:"none"},child:{transform:"scale(.0)",opacity:.5,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"#000"},active:{transform:"scale(1)",transition:"transform 150ms cubic-bezier(0.4, 0, 0.2, 1)"}},b=function(t){d()(r,t);var n=r.prototype;function r(e){var n;return(n=t.call(this,e)||this).state={active:!1},n.child=m.a.createRef(),n.start=n.start.bind(s()(n)),n.stop=n.stop.bind(s()(n)),n}return n.start=function(e){var t=this;this.child.current.classList.add(Object(g.css)(h.active).toString()),this.startTimer=setTimeout(function(){t.child.current.classList.remove(Object(g.css)(h.active).toString())},200)},n.stop=function(e,t){this.child.current.classList.remove(Object(g.css)(h.active).toString()),t&&t()},n.render=function(){var t=h;return e.createElement("span",{css:[t.ripple,this.state.active&&t.active]},e.createElement("span",{ref:this.child,css:t.child}))},r}(p.Component),E={display:"inline-flex",position:"relative",alignItems:"center",verticalAlign:"middle",justifyContent:"center",flex:"0 0 auto",padding:0,fontSize:"1.5rem",textAlign:"center",textDecoration:"none",backgroundColor:"transparent"},y={cursor:"pointer",":disabled":{cursor:"default"},border:0,margin:0,":focus":{outline:"none"}},v={},x={width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"},k=function(t){d()(r,t);var n=r.prototype;function r(e){var n;return(n=t.call(this,e)||this).state={isMobile:!1},n.ripple=m.a.createRef(),n}return n.handleBlur=function(e){},n.handleFocus=function(e){},n.handleKeyDown=function(e){},n.handleKeyUp=function(e){var t=this,n=e.key;"space"!==n&&"enter"!==n||(e.persist(),this.props.ripple&&this.ripple.current.stop(e,function(){t.ripple.current.start(e)}))},n.handleMouseDown=function(e){var t=this;e.persist(),this.props.ripple&&this.ripple.current.stop(e,function(){t.ripple.current.start(e)})},n.handleMouseLeave=function(e){},n.handleMouseUp=function(e){},n.handleTouchMove=function(e){},n.handleTouchEnd=function(e){},n.handleTouchStart=function(e){var t=this;e.persist(),this.props.ripple&&this.ripple.current.stop(e,function(){t.ripple.current.start(e)})},n.componentDidMount=function(){window.innerWidth<this.props.breakpoint&&this.setState({isMobile:!0})},n.render=function(){var t=this.props,n=t.children,r=t.disabled,a=t.title,l=t.tabIndex,s=t.href,c=t.role,d=t.className,p=t.ripple,m=t.userStyles,u=i()(t,["children","disabled","title","tabIndex","href","role","className","ripple","userStyles"]);m.base=Object.assign({},E,m.base),m.button=Object.assign({},y,m.button),m.link=Object.assign({},v,m.link),m.label=Object.assign({},x,m.label);var f=s?"a":"button",g={title:a,tabIndex:l};return s?(g.href=s,g.role=c):(g.type="button",g.disabled=r),e.createElement(f,o()({onBlur:this.handleBlur.bind(this),onFocus:this.handleFocus.bind(this),onKeyDown:this.handleKeyDown.bind(this),onKeyUp:this.handleKeyUp.bind(this),onMouseDown:this.handleMouseDown.bind(this),onMouseLeave:this.handleMouseLeave.bind(this),onMouseUp:this.handleMouseUp.bind(this),onTouchEnd:this.handleTouchEnd.bind(this),onTouchMove:this.handleTouchMove.bind(this),onTouchStart:this.handleTouchStart.bind(this),css:[m.base,s?m.link:m.button],className:d},g,u),e.createElement("span",{css:m.label},n),p&&e.createElement(b,{ref:this.ripple}))},r}(p.Component);k.propTypes={role:f.a.string,tabIndex:f.a.number},k.defaultProps={role:"button",tabIndex:0,userStyles:{}},t.a=k}).call(this,n(77))},203:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}},pages:{edges:[{node:{frontmatter:{title:"Usage",navtitle:null,sort:1},fields:{slug:"/parse/"}}},{node:{frontmatter:{title:"Getting started",navtitle:null,sort:1},fields:{slug:"/project/getting-started/"}}},{node:{frontmatter:{title:"Usage",navtitle:null,sort:1},fields:{slug:"/stringify/"}}},{node:{frontmatter:{title:"Usage",navtitle:null,sort:1},fields:{slug:"/transform/"}}},{node:{frontmatter:{title:"Usage",navtitle:null,sort:1},fields:{slug:"/generate/"}}},{node:{frontmatter:{title:"API",navtitle:null,sort:2},fields:{slug:"/parse/api/"}}},{node:{frontmatter:{title:"Examples",navtitle:null,sort:2},fields:{slug:"/project/examples/"}}},{node:{frontmatter:{title:"API",navtitle:null,sort:2},fields:{slug:"/stringify/api/"}}},{node:{frontmatter:{title:"API",navtitle:null,sort:2},fields:{slug:"/transform/api/"}}},{node:{frontmatter:{title:"API",navtitle:null,sort:2},fields:{slug:"/generate/api/"}}},{node:{frontmatter:{title:"Options",navtitle:null,sort:3},fields:{slug:"/parse/options/"}}},{node:{frontmatter:{title:"License",navtitle:null,sort:3},fields:{slug:"/project/license/"}}},{node:{frontmatter:{title:"Options",navtitle:null,sort:3},fields:{slug:"/stringify/options/"}}},{node:{frontmatter:{title:"Options",navtitle:null,sort:3},fields:{slug:"/transform/options/"}}},{node:{frontmatter:{title:"Options",navtitle:null,sort:3},fields:{slug:"/generate/options/"}}},{node:{frontmatter:{title:"Changelog",navtitle:null,sort:4},fields:{slug:"/project/changelog/"}}},{node:{frontmatter:{title:"Handler",navtitle:null,sort:4},fields:{slug:"/transform/handler/"}}},{node:{frontmatter:{title:"Changelog",navtitle:null,sort:4},fields:{slug:"/generate/changelog/"}}},{node:{frontmatter:{title:"Option bom",navtitle:"bom",sort:4},fields:{slug:"/parse/options/bom/"}}},{node:{frontmatter:{title:"Option cast",navtitle:"cast",sort:4},fields:{slug:"/parse/options/cast/"}}},{node:{frontmatter:{title:"Option columns",navtitle:"columns",sort:4},fields:{slug:"/parse/options/columns/"}}},{node:{frontmatter:{title:"Option max_record_size",navtitle:"max_record_size",sort:4},fields:{slug:"/parse/options/max_record_size/"}}},{node:{frontmatter:{title:"Option relax_column_count",navtitle:"relax_column_count",sort:4},fields:{slug:"/parse/options/relax_column_count/"}}},{node:{frontmatter:{title:"Option skip_lines_with_error",navtitle:"skip_lines_with_error",sort:4},fields:{slug:"/parse/options/skip_lines_with_error/"}}},{node:{frontmatter:{title:"Option cast",navtitle:"cast",sort:4},fields:{slug:"/stringify/options/cast/"}}},{node:{frontmatter:{title:"Option columns",navtitle:"columns",sort:4},fields:{slug:"/stringify/options/columns/"}}},{node:{frontmatter:{title:"Option delimiter",navtitle:"delimiter",sort:4},fields:{slug:"/stringify/options/delimiter/"}}},{node:{frontmatter:{title:"Option header",navtitle:"header",sort:4},fields:{slug:"/stringify/options/header/"}}},{node:{frontmatter:{title:"Info properties",navtitle:null,sort:5},fields:{slug:"/parse/info/"}}},{node:{frontmatter:{title:"Community",navtitle:null,sort:5},fields:{slug:"/project/contribute/"}}},{node:{frontmatter:{title:"Changelog",navtitle:null,sort:5},fields:{slug:"/stringify/changelog/"}}},{node:{frontmatter:{title:"State",navtitle:null,sort:5},fields:{slug:"/transform/state/"}}},{node:{frontmatter:{title:"Examples",navtitle:null,sort:5},fields:{slug:"/generate/examples/"}}},{node:{frontmatter:{title:"Errors",navtitle:null,sort:6},fields:{slug:"/parse/errors/"}}},{node:{frontmatter:{title:"Examples",navtitle:null,sort:6},fields:{slug:"/stringify/examples/"}}},{node:{frontmatter:{title:"Changelog",navtitle:null,sort:6},fields:{slug:"/transform/changelog/"}}},{node:{frontmatter:{title:"Examples",navtitle:null,sort:7},fields:{slug:"/transform/examples/"}}},{node:{frontmatter:{title:"Changelog",navtitle:null,sort:7},fields:{slug:"/parse/changelog/"}}},{node:{frontmatter:{title:"Examples",navtitle:null,sort:8},fields:{slug:"/parse/examples/"}}}]}}}},204:function(e,t,n){"use strict";n.r(t);n(55);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(58),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},205:function(e,t,n){"use strict";(function(e){n(186),n(32);var r=n(6),o=n.n(r),a=n(0),i=n.n(a),l=n(206),s=n.n(l),c=n(54),d={LARGER_DISPLAY:1600,LARGE_DISPLAY:1280,DEFAULT:980,TABLET:768,MOBILE:480},p=function(t){function n(e){var n,r,o,a;return(a=t.call(this,e)||this).styles={body:{width:"100%",overflowY:"hidden"},main:(n={position:"relative",margin:0,paddingLeft:250},n["@media (max-width: "+d.DEFAULT+"px)"]={paddingLeft:0},n),mainClose:{paddingLeft:0,left:0},mainOpen:(r={},r["@media (min-width: "+d.DEFAULT+"px)"]={paddingLeft:"250px",transition:"padding-left 225ms cubic-bezier(0.0, 0, 0.2, 1)"},r["@media (max-width: "+d.DEFAULT+"px)"]={left:250,transition:"left 225ms cubic-bezier(0.0, 0, 0.2, 1)"},r),drawer:(o={position:"fixed",top:0,height:"100vh",left:0,width:250,overflow:"auto","> *":{overflow:"auto"}},o["@media (max-width: "+d.DEFAULT+"px)"]={left:"-250px"},o),drawerClose:{left:"-250px"},drawerOpen:{left:0,transition:"left 225ms cubic-bezier(0.0, 0, 0.2, 1)",".ReactModal__Content--after-open":{left:0,transition:"left 225ms cubic-bezier(0.0, 0, 0.2, 1)"}},drawerOpenModal:{},overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, .6)"}},a.state={isMobile:!1},a.mainRef=i.a.createRef(),a}o()(n,t);var r=n.prototype;return r.componentDidMount=function(){window.innerWidth<this.props.breakpoint&&this.setState({isMobile:!0})},r.render=function(){var t=this.styles,n=this.state.isMobile,r="undefined"!=typeof window,o=this.props,a=o.drawer,l=o.main,p=o.open,m=o.width,u=this.props.styles||{},f=function(e){var t=e;return"number"==typeof t&&(t+="px"),void 0===t&&(t="250px"),n&&(t=250),t}(m);return t.main.paddingLeft=p?f:0,t.mainOpen["@media (min-width: "+d.DEFAULT+"px)"].paddingLeft=f,t.mainOpen["@media (max-width: "+d.DEFAULT+"px)"].left=f,t.drawer.left=p?0:"-"+f,t.drawer.width=f,t.drawer["@media (max-width: "+d.DEFAULT+"px)"].left="-"+f,t.drawerClose.left="-"+f,e.createElement(i.a.Fragment,null,e.createElement("div",{ref:this.mainRef,className:Object(c.css)([t.main,u.main,r&&p&&t.mainOpen,r&&!p&&t.mainClose]).toString()},l),r&&n?e.createElement(s.a,{isOpen:p,onRequestClose:this.props.onClickModal,aria:{labelledby:"Menu",describedby:"Navigate through the site"},appElement:this.mainRef.current,className:Object(c.css)([t.drawer,u.drawer,r&&p&&t.drawerOpen,r&&!p&&t.drawerClose]).toString(),overlayClassName:Object(c.css)([t.overlay,u.overlay]).toString(),bodyOpenClassName:Object(c.css)([t.body,u.body]).toString()},a):e.createElement("div",{className:Object(c.css)([t.drawer,r&&p&&t.drawerOpen,r&&!p&&t.drawerClose]).toString()},a))},n}(a.PureComponent);p.defaultProps={breakpoint:980},t.a=p}).call(this,n(77))},208:function(e,t,n){"use strict";(function(e){n(186),n(32);var r=n(6),o=n.n(r),a=n(0),i=n(185),l=n(54),s=n(197),c=n.n(s),d=n(189),p=n(187),m=n(209),u=n.n(m),f=n(258),g=function(t){function n(){for(var e,n,r,o,a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(o=t.call.apply(t,[this].concat(i))||this).styles={root:{background:"url("+u.a+")",backgroundSize:"cover","@media (max-width: 960px)":{},"& a":{color:"#FFF",textDecoration:"none"}},header:{backgroundColor:"rgba(0,0,0,.5)",borderBottom:".1rem solid #FFF",padding:"1rem 0 .5rem 0"},headerContainer:{maxWidth:"800",margin:"0 auto",padding:"0 1rem 0 3rem",boxSizing:"content-box",display:"flex",alignItems:"center",fontSize:"1.2rem","& *":{verticalAlign:"baseline"},"& a:hover button":{backgroundColor:"rgba(0, 0, 0, .08)"}},icon:{color:"#FFF",position:"relative",top:"-.1rem"},menu:{position:"absolute",padding:"1rem 0 0 .5rem"},title:{marginTop:0,marginBottom:0,margin:0,color:"#FFF",fontSize:"1.4rem"},logo:{fontFamily:"csvlogo",letterSpacing:".2rem",paddingRight:".2rem"},nodejs:(e={},e[p.MOBILE_MEDIA_QUERY]={display:"none"},e),grow:{flex:"1 1 auto"},button:{},quick:(n={marginLeft:"1rem"},n[p.TABLET_MEDIA_QUERY]={marginLeft:"0"},n),quick_label:(r={},r[p.TABLET_MEDIA_QUERY]={display:"none"},r)},o}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.children,r=t.onMenuClick,o=(t.slug,t.project),a=this.styles;return e.createElement("div",{css:a.root},e.createElement("div",{css:a.menu},e.createElement(d.a,{"aria-label":"Toggle the menu","data-for":"header-tooltip","data-tip":"Toggle the menu",onClick:r,className:Object(l.css)(a.button).toString(),ripple:!0},e.createElement(f.a,{css:a.icon}))),e.createElement("div",{css:a.header},e.createElement("header",{css:a.headerContainer},e.createElement("h1",{css:a.title},e.createElement(i.a,{to:"/"},e.createElement("span",{css:a.logo},"CSV"),"project"!==o.slug&&e.createElement("span",{css:a.project},o.label),e.createElement("span",{css:a.nodejs}," for Node.js"))),e.createElement("div",{css:a.grow}),e.createElement("a",{href:o.issue,css:a.quick,rel:"noopener",target:"_blank","data-for":"header-tooltip","data-tip":"Report an issue"},e.createElement(d.a,{color:"inherit","aria-labelledby":"header-bug",className:Object(l.css)(a.button).toString(),ripple:!0},e.createElement(f.b,{css:a.icon})),e.createElement("span",{id:"header-bug",css:a.quick_label},"Issues")),e.createElement("a",{href:o.github,css:a.quick,rel:"noopener",target:"_blank","data-for":"header-tooltip","data-tip":"GitHub repository"},e.createElement(d.a,{color:"inherit","aria-labelledby":"header-github",className:Object(l.css)(a.button).toString(),ripple:!0},e.createElement(f.c,{css:a.icon})),e.createElement("span",{id:"header-github",css:a.quick_label},"GitHub")),e.createElement(c.a,{id:"header-tooltip",delayShow:300,place:"bottom",effect:"solid"}))),n)},n}(a.Component);t.a=g}).call(this,n(77))},209:function(e,t,n){e.exports=n.p+"static/header_bck-18f8ad2b009852762184802b4a57c34a.svg"},210:function(e,t,n){"use strict";(function(e){var r=n(6),o=n.n(r),a=n(0),i=n.n(a),l=n(185),s=n(187),c=function(t){function n(){for(var e,n,r,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(r=t.call.apply(t,[this].concat(a))||this).styles={intro:{padding:"1rem 0",position:"relative",textAlign:"center",width:"100%",backgroundColor:"rgba(0,0,0,.3)"},about:(e={position:"relative",maxWidth:800,margin:"0 auto"},e[s.TABLET_MEDIA_QUERY]={padding:"1rem 1rem 1rem 1rem"},e[s.MIN_TABLET_MEDIA_QUERY]={padding:"0 1rem 0 3rem"},e.boxSizing="content-box",e["& svg"]={maxHeight:"100%"},e),headline:{position:"relative",backgroundColor:"rgba(25,47,74,.5)",borderTop:".1rem solid #FFF","& p":(n={margin:"0 auto",textAlign:"center",maxWidth:"800",boxSizing:"content-box",fontSize:"1.4rem"},n[s.TABLET_MEDIA_QUERY]={padding:"2rem 1rem 1rem 1rem",fontSize:"1.2rem"},n[s.MIN_TABLET_MEDIA_QUERY]={padding:"1rem 1rem .4rem 3rem"},n)}},r}return o()(n,t),n.prototype.render=function(){var t=this.styles;return e.createElement(i.a.Fragment,null,e.createElement("div",{css:t.intro},e.createElement("div",{css:t.about},e.createElement("svg",{style:{isolation:"isolate"},viewBox:"474.738 354.906 797.525 333.188"},e.createElement("g",{clipPath:"url(#_clipPath_ZpkOVFy48F6KQSyHNjGj8A5TiE8SZFb6)"},e.createElement("g",null,e.createElement("path",{d:" M 514.762 488.71 C 466.024 516.507 442.682 756.345 664.762 627.71",fill:"none",stroke:"rgb(255,255,255)",strokeLinecap:"square",strokeWidth:"5"}),e.createElement("path",{d:" M 960.762 599.71 C 960.975 661.703 885.792 732.126 1080.762 625.71",fill:"none",stroke:"rgb(255,255,255)",strokeLinecap:"square",strokeWidth:"5"}),e.createElement("path",{d:" M 841.762 522.71 C 905.55 485.527 954.658 241.047 959.762 438.71",fill:"none",stroke:"rgb(255,255,255)",strokeLinecap:"square",strokeWidth:"5"})),e.createElement("g",null,e.createElement("polygon",{fill:"rgb(235,235,235)",fillOpacity:"0.2",points:"635.565,528.712,541.03,528.712,493.762,449.727,541.03,370.741,635.565,370.741,682.833,449.727"}),e.createElement("radialgradient",{id:"_rgradient_4",cx:"0.5",cy:"0.5",fx:"0.5",fy:"0.5",gradientTransform:"matrix(189.071,0,0,157.971,493.762,370.741)",gradientUnits:"userSpaceOnUse",r:"0.5"},e.createElement("stop",{style:{stopColor:"rgb(26,66,43)"},offset:"2.608695652173913%",stopOpacity:"1"}),e.createElement("stop",{style:{stopColor:"rgb(63,41,100)"},offset:"97.82608695652173%",stopOpacity:"0"})),e.createElement("polygon",{fill:"url(#_rgradient_4)",fillOpacity:"0.3",points:"635.565,528.712,541.03,528.712,493.762,449.727,541.03,370.741,635.565,370.741,682.833,449.727"}),e.createElement("g",{style:{isolation:"isolate"}},e.createElement("polygon",{fill:"none",fillOpacity:"0.2",points:"635.565,528.712,541.03,528.712,493.762,449.727,541.03,370.741,635.565,370.741,682.833,449.727",stroke:"rgb(255,255,255)",strokeLinecap:"square",strokeOpacity:"0.7",strokeWidth:"1"})),e.createElement("g",{transform:"matrix(1,0,0,1,540.298,430.459)"},e.createElement("text",{style:{fontFamily:"Montserrat",fontWeight:"400",fontSize:"24px",fontStyle:"normal",fill:"#ffffff",stroke:"none"},transform:"matrix(1,0,0,1,0.462,24)"},"generate"))),e.createElement("g",null,e.createElement("polygon",{fill:"rgb(235,235,235)",fillOpacity:"0.2",points:"811.886,673.71,694.027,673.71,635.097,575.237,694.027,476.763,811.886,476.763,870.816,575.237"}),e.createElement("radialgradient",{id:"_rgradient_5",cx:"0.5",cy:"0.5",fx:"0.5",fy:"0.5",gradientTransform:"matrix(235.719,0,0,196.947,635.097,476.763)",gradientUnits:"userSpaceOnUse",r:"0.5"},e.createElement("stop",{style:{stopColor:"rgb(11,53,45)"},offset:"2.1739130434782608%",stopOpacity:"1"}),e.createElement("stop",{style:{stopColor:"rgb(63,41,100)"},offset:"97.82608695652173%",stopOpacity:"0"})),e.createElement("polygon",{fill:"url(#_rgradient_5)",fillOpacity:"0.3",points:"811.886,673.71,694.027,673.71,635.097,575.237,694.027,476.763,811.886,476.763,870.816,575.237"}),e.createElement("g",{style:{isolation:"isolate"}},e.createElement("polygon",{fill:"none",fillOpacity:"0.2",points:"811.886,673.71,694.027,673.71,635.097,575.237,694.027,476.763,811.886,476.763,870.816,575.237",stroke:"rgb(255,255,255)",strokeLinecap:"square",strokeOpacity:"0.7",strokeWidth:"1"})),e.createElement("g",{transform:"matrix(1,0,0,1,722.456,555.969)"},e.createElement("text",{style:{fontFamily:"Montserrat",fontWeight:"400",fontSize:"24px",fontStyle:"normal",fill:"#ffffff",stroke:"none"},transform:"matrix(1,0,0,1,0.264,24)"},"parse"))),e.createElement("g",null,e.createElement("polygon",{fill:"rgb(235,235,235)",fillOpacity:"0.2",points:"1009.926,597.544,915.391,597.544,868.123,518.559,915.391,439.573,1009.926,439.573,1057.194,518.559"}),e.createElement("radialgradient",{id:"_rgradient_6",cx:"0.5",cy:"0.5",fx:"0.5",fy:"0.5",gradientTransform:"matrix(189.071,0,0,157.971,868.123,439.573)",gradientUnits:"userSpaceOnUse",r:"0.5"},e.createElement("stop",{style:{stopColor:"rgb(11,51,53)"},offset:"0%",stopOpacity:"1"}),e.createElement("stop",{style:{stopColor:"rgb(63,41,100)"},offset:"100%",stopOpacity:"0"})),e.createElement("polygon",{fill:"url(#_rgradient_6)",fillOpacity:"0.3",points:"1009.926,597.544,915.391,597.544,868.123,518.559,915.391,439.573,1009.926,439.573,1057.194,518.559"}),e.createElement("g",{style:{isolation:"isolate"}},e.createElement("polygon",{fill:"none",fillOpacity:"0.2",points:"1009.926,597.544,915.391,597.544,868.123,518.559,915.391,439.573,1009.926,439.573,1057.194,518.559",stroke:"rgb(255,255,255)",strokeLinecap:"square",strokeOpacity:"0.7",strokeWidth:"1"})),e.createElement("g",{transform:"matrix(1,0,0,1,909.159,499.291)"},e.createElement("text",{style:{fontFamily:"Montserrat",fontWeight:"400",fontSize:"24px",fontStyle:"normal",fill:"#ffffff",stroke:"none"},transform:"matrix(1,0,0,1,0.071,24)"},"transform"))),e.createElement("g",null,e.createElement("polygon",{fill:"rgb(235,235,235)",fillOpacity:"0.2",points:"1216.62,665.858,1108.336,665.858,1054.194,575.385,1108.336,484.912,1216.62,484.912,1270.762,575.385"}),e.createElement("radialgradient",{id:"_rgradient_7",cx:"0.5",cy:"0.5",fx:"0.5",fy:"0.5",gradientTransform:"matrix(216.568,0,0,180.946,1054.194,484.912)",gradientUnits:"userSpaceOnUse",r:"0.5"},e.createElement("stop",{style:{stopColor:"rgb(11,40,53)"},offset:"0%",stopOpacity:"1"}),e.createElement("stop",{style:{stopColor:"rgb(63,41,100)"},offset:"100%",stopOpacity:"0"})),e.createElement("polygon",{fill:"url(#_rgradient_7)",fillOpacity:"0.3",points:"1216.62,665.858,1108.336,665.858,1054.194,575.385,1108.336,484.912,1216.62,484.912,1270.762,575.385"}),e.createElement("g",{style:{isolation:"isolate"}},e.createElement("polygon",{fill:"none",fillOpacity:"0.2",points:"1216.62,665.858,1108.336,665.858,1054.194,575.385,1108.336,484.912,1216.62,484.912,1270.762,575.385",stroke:"rgb(255,255,255)",strokeLinecap:"square",strokeOpacity:"0.7",strokeWidth:"1"})),e.createElement("g",{transform:"matrix(1,0,0,1,1119.478,556.117)"},e.createElement("text",{style:{fontFamily:"Montserrat",fontWeight:"400",fontSize:"24px",fontStyle:"normal",fill:"#ffffff",stroke:"none"},transform:"matrix(1,0,0,1,0.085,24)"},"stringify"))))))),e.createElement("div",{css:t.headline},e.createElement("p",null,"Comprehensive CSV suite combining 4 well tested packages to"," ",e.createElement(l.a,{to:"/generate/"},"generate"),","," ",e.createElement(l.a,{to:"/parse/"},"parse"),","," ",e.createElement(l.a,{to:"/transform/"},"transform")," and"," ",e.createElement(l.a,{to:"/stringify/"},"stringify")," CSV data.")))},n}(a.Component);t.a=c}).call(this,n(77))},211:function(e,t,n){"use strict";(function(e){n(186),n(32);var r=n(6),o=n.n(r),a=n(0),i=n.n(a),l=n(35),s=n.n(l),c=n(54),d=n(197),p=n.n(d),m=n(189),u=n(187);n(236);var f=function(t){function n(e){var n,r,o;return(o=t.call(this,e)||this).styles={root:(n={maxWidth:800,margin:"0 auto"},n[u.TABLET_MEDIA_QUERY]={padding:"0 1rem"},n[u.MIN_TABLET_MEDIA_QUERY]={padding:"0 1rem 0 3rem",boxSizing:"content-box"},n),tools:{float:"right",backgroundColor:"#626F6F",marginBottom:"1rem",padding:".4rem .4rem .4rem .4rem","@media (max-width: 960px)":{borderRadius:"0 0 1.8rem 1.8rem"},"@media (min-width: 960px)":{borderRadius:"0 0 1.4rem 1.4rem"}},svg:{fill:"#fff","@media (max-width: 960px)":{width:"1.4rem",height:"1.4rem"},"@media (min-width: 960px)":{width:"1.8rem",height:"1.8rem"}},icon:{outline:"none","@media (max-width: 960px)":{width:"1.8rem !important",height:"1.8rem !important"},"@media (min-width: 960px)":{width:"2.4rem !important",height:"2.4rem !important"}},main:(r={marginTop:"2rem"},r[u.MIN_TABLET_MEDIA_QUERY]={boxSizing:"border-box"},r.clear="right",r["& .toc"]={display:"none","& h2":{marginTop:0},"& ul":{marginTop:0,marginBottom:0}},r),toc:{backgroundColor:"#626F6F","& > div":{padding:"1rem"},"& h2":{marginTop:0},"& ul, & li":{marginTop:0,marginBottom:0}}},o.content=i.a.createRef(),o.toc=i.a.createRef(),o}return o()(n,t),n.prototype.render=function(){var t=this,n=this.props,r=n.page,o=n.children,a=this.styles;return e.createElement("main",{ref:this.content,css:a.root},e.createElement("div",{ref:this.toc,css:a.toc}),r&&r.edit_url&&e.createElement("div",{css:a.tools},e.createElement(m.a,{color:"inherit","aria-label":"content-edit","data-for":"content-tooltip","data-tip":"Edit on GitHub",href:r.edit_url,ripple:!0,target:"_blank",rel:"noopener",className:Object(c.css)(a.icon).toString()},e.createElement("svg",{viewBox:"0 0 24 24",css:a.svg},e.createElement("path",{d:"M14.06,9.02l0.92,0.92L5.92,19H5v-0.92L14.06,9.02 M17.66,3c-0.25,0-0.51,0.1-0.7,0.29l-1.83,1.83 l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C18.17,3.09,17.92,3,17.66,3L17.66,3z M14.06,6.19L3,17.25V21h3.75 L17.81,9.94L14.06,6.19L14.06,6.19z"}))),e.createElement(m.a,{color:"inherit","aria-label":"content-toc","data-for":"content-tooltip","data-tip":"Toggle the table of content",onClick:function(){if(r){var e=s.a.findDOMNode(t.content.current).querySelector(".toc");if(e){var n=e.querySelector(".anchor");n&&n.remove();var o=window.getComputedStyle(e).display;t.toc.current.appendChild(e),e.style.display="none"===o?"block":"none"}}},className:Object(c.css)(a.icon).toString(),ripple:!0},e.createElement("svg",{viewBox:"0 0 24 24",css:a.svg},e.createElement("path",{fill:"none",d:"M0,0h24v24H0V0z"}),e.createElement("path",{fill:"none",d:"M0,0h24v24H0V0z"}),e.createElement("path",{d:"M3,9h14V7H3V9z M3,13h14v-2H3V13z M3,17h14v-2H3V17z M19,17h2v-2h-2V17z M19,7v2h2V7H19z M19,13h2v-2h-2V13z"}))),e.createElement(p.a,{id:"content-tooltip",delayShow:300,place:"bottom",effect:"solid"})),e.createElement("div",{css:a.main},o))},n}(a.Component);t.a=f}).call(this,n(77))},212:function(e,t,n){"use strict";(function(e){n(80),n(56),n(213),n(81),n(186),n(32);var r=n(6),o=n.n(r),a=n(0),i=n.n(a),l=n(185),s=n(54),c=n(189),d={root:{fontWeight:"300","& h1":{fontSize:"1.2rem",fontWeight:"300",margin:"2rem 0 0 0",padding:"0 1rem",display:"flex",cursor:"pointer","& span":{flexGrow:"1"},":hover button":{backgroundColor:"rgba(255, 255, 255, .2)"}},"& ul":{margin:"0",paddingTop:"0",boxSizing:"border-box",overflow:"hidden",height:"0",opacity:"0"},"& a":{textDecoration:"none"}},current:{"& h1":{cursor:"default",":hover button":{backgroundColor:"rgba(255, 255, 255, 0)"}},"& ul":{paddingTop:"1rem",overflow:"visible",height:"auto",opacity:"1",transition:"opacity 1s"}},li:{margin:".3rem 0",padding:"0 1rem 0 1rem",textIndent:0,listStyleType:"none",":hover":{backgroundColor:"rgba(255,255,255,.1)"}},li_3:{margin:"0","& a":{borderLeft:"1px solid #fff",paddingLeft:"1rem"}},link:{color:"#FFFFFF",display:"block",lineHeight:"1.2rem",padding:".2rem 0"},linkActive:{color:"#00D0B4"},button:{width:"1.4rem !important",height:"1.4rem !important",float:"right",textAlign:"center",":enabled:hover":{backgroundColor:"rgba(255, 255, 255, .2)"}},icon:{color:"#FFF",padding:".2rem .15rem",width:"1.2rem",height:"1.2rem"},icon_up:{transform:"rotate(-90deg)",transition:"transform .5s ease-out"},icon_down:{transform:"rotate(0deg)"}},p=function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.current,r=t.title,o=t.pages,a=t.home,p=t.onClickLink,m=t.onToggle;return e.createElement("nav",{css:[d.root,n&&d.current]},e.createElement("h1",{onClick:m},e.createElement("span",null,r),e.createElement(c.a,{color:"inherit",ripple:!0,className:Object(s.css)(d.button).toString(),disabled:n},e.createElement("svg",{css:[d.icon,n?d.icon_up:d.icon_down]},e.createElement("polygon",{points:"8,14.124,1,2,15,2",fill:"none",stroke:"rgb(179,198,200)"})))),e.createElement("ul",null,a&&e.createElement(i.a.Fragment,null,e.createElement("li",{key:"/",css:d.li},e.createElement(l.a,{to:"/",className:Object(s.css)(d.link).toString(),activeClassName:Object(s.css)(d.linkActive).toString(),onClick:p},"Homepage")),e.createElement("li",{key:"/convert/",css:d.li},e.createElement(l.a,{to:"/convert/",className:Object(s.css)(d.link).toString(),activeClassName:Object(s.css)(d.linkActive).toString(),onClick:p},"Convertor"))),[].concat(o.map(function(t){return e.createElement("li",{key:t.slug,css:[d.li,d["li_"+(t.slug.split("/").length-2)]]},e.createElement(l.a,{to:t.slug,className:Object(s.css)(d.link).toString(),activeClassName:Object(s.css)(d.linkActive).toString(),onClick:p},t.navtitle||t.title))}))))},n}(a.Component),m={root:{height:"100%",backgroundColor:"rgb(79,79,79,1)",borderRight:"1rem solid #95A2A2","@media (min-width: 960px)":{display:"flex",flexDirection:"column"}},menu:{flexGrow:1,overflow:"auto",backgroundColor:"#343B3B",display:"block","&:after":{content:" ",display:"block",height:"2rem"}},footer:{borderTop:"1px solid rgb(200, 200, 200)",padding:"1rem",textAlign:"normal",fontSize:".8rem"}},u=function(t){function n(e){var n;n=t.call(this,e)||this;var r=e.slug?/^\/(\w+)/.exec(e.slug)[1]:"project";return n.state={current:r},n.menus={project:{title:"Project",home:!0,pages:[]},generate:{title:"Generate",pages:[]},parse:{title:"Parse",pages:[]},transform:{title:"Transform",pages:[]},stringify:{title:"Stringify",pages:[]}},e.pages.map(function(t){var r=/^\/(\w+)/.exec(t.slug)[1];t.current=t.slug===e.slug,!0===t.current&&(n.menus[r].current=!0),n.menus[r].pages.push(t)}),n}return o()(n,t),n.prototype.render=function(){var t=this,n=this.props,r=(n.pages,n.onClickLink),o=(n.slug,this.state.current),a=this.menus;return e.createElement("aside",{css:[m.root]},e.createElement("div",{css:m.menu},Object.keys(a).map(function(n){var i=a[n];return e.createElement(p,{key:n,current:o?o===n:i.current,home:i.home,title:i.title,pages:i.pages,onClickLink:r,onToggle:function(){return function(e){t.setState({current:e})}(n)}})})),e.createElement("div",{css:m.footer},"Help us"," ",e.createElement("a",{href:"https://github.com/adaltas/node-nikita-docs/issues",target:"_blank",rel:"noopener"},"improve the docs")," ","by proposing enhancements and fixing typos."))},n}(a.Component);t.a=u}).call(this,n(77))},214:function(e,t,n){"use strict";(function(e){var r=n(6),o=n.n(r),a=n(0),i=n(185),l=n(187),s=n(215),c=n.n(s),d=function(t){function n(){for(var e,n,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=t.call.apply(t,[this].concat(o))||this).styles={root:{background:"url("+c.a+")",backgroundSize:"cover",borderTop:".1rem solid #FFF",marginTop:"3rem",padding:"2rem 0"},container:(e={maxWidth:800},e[l.TABLET_MEDIA_QUERY]={padding:"0 1rem"},e[l.MIN_TABLET_MEDIA_QUERY]={padding:"0 1rem 0 3rem",boxSizing:"content-box"},e.display="flex",e.flexWrap="wrap",e.margin="0 auto",e["& h1"]={margin:"1rem 0 .5rem 0",fontSize:"1.4rem"},e["& ul, & p"]={margin:"0 0 0 0"},e["& li"]={margin:0,textIndent:0,listStyleType:"none"},e["& a"]={textDecoration:"none"},e["& p a"]={textDecoration:"underline"},e),navigate:{flex:"1","@media (max-width: 960px)":{flex:"0 0 50%"}},contribute:{flex:"1","@media (max-width: 960px)":{flex:"0 0 50%"}},about:{flex:"2","@media (max-width: 960px)":{flex:"0 0 100%"}}},n}return o()(n,t),n.prototype.render=function(){var t=this.styles;return e.createElement("footer",{css:t.root},e.createElement("div",{css:t.container},e.createElement("nav",{css:t.navigate},e.createElement("h1",null,"Navigate"),e.createElement("ul",null,e.createElement("li",null,e.createElement(i.a,{to:"/generate/"},"Generate")),e.createElement("li",null,e.createElement(i.a,{to:"/parse/"},"Parse")),e.createElement("li",null,e.createElement(i.a,{to:"/transform/"},"Transform")),e.createElement("li",null,e.createElement(i.a,{to:"/stringify/"},"Stringify")))),e.createElement("nav",{css:t.contribute},e.createElement("h1",null,"Contribute"),e.createElement("ul",null,e.createElement("li",null,e.createElement(i.a,{to:"/project/contribute/"},"How to contribute")),e.createElement("li",null,e.createElement("a",{href:"https://github.com/adaltas/node-csv",target:"_blank",rel:"noopener"},"GitHub")),e.createElement("li",null,e.createElement("a",{href:"https://github.com/adaltas/node-csv/issues",target:"_blank",rel:"noopener"},"Issue Tracker")),e.createElement("li",null,e.createElement(i.a,{to:"/project/license/"},"License")))),e.createElement("div",{css:t.about},e.createElement("h1",null,"About"),e.createElement("p",null,"The Node.js CSV project is an open source product hosted on"," ",e.createElement("a",{href:"https://www.github.com",target:"_blank",rel:"noopener"},"GitHub")," ","and developed by"," ",e.createElement("a",{href:"http://www.adaltas.com",target:"_blank",rel:"noopener"},"Adaltas"),"."))))},n}(a.Component);t.a=d}).call(this,n(77))},215:function(e,t,n){e.exports=n.p+"static/footer_bck-22e2a79c2dfdfffcd79bbee6ccb59315.svg"}}]);
//# sourceMappingURL=2-9bd9c90abfaf7915891e.js.map