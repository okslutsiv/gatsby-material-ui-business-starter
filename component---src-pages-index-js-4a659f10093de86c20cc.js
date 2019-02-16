(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(150),i=a(4),c=a.n(i),o=a(179),s=a(203),u=a.n(s),m=a(3935),d=a.n(m),p=a(204),f=a.n(p),h=a(3937),E=a.n(h),g=function(e){var t=e.children,a=e.title,n=e.subheader,l=e.avatar,i=e.action,c=e.style,o=void 0===c?{}:c;return r.a.createElement(u.a,{style:o},r.a.createElement(d.a,{avatar:l||null,title:a,subheader:n||null}),r.a.createElement(f.a,null,t),r.a.createElement(E.a,{style:{float:"right"}},i))},y=a(176),b=a(186),v=a.n(b),x=a(178),k=a.n(x),C=a(185),w=a.n(C),S=a(166),M=a(162),I=function(e){return r.a.createElement(k.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center",className:e.classes.featureGrid},r.a.createElement(k.a,{item:!0,xs:6},r.a.createElement(v.a,{className:e.classes.featureChipRight,avatar:r.a.createElement(w.a,{className:e.classes.avi,style:{backgroundColor:e.theme.palette.secondary.light}},r.a.createElement(M.e,null)),label:"Uses Material UI"})),r.a.createElement(k.a,{item:!0,xs:6},r.a.createElement(v.a,{className:e.classes.featureChip,avatar:r.a.createElement(w.a,{className:e.classes.avi,style:{backgroundColor:e.theme.palette.secondary.light}},r.a.createElement(M.e,null)),label:"Uses Material Icons"})))};I.propTypes={classes:c.a.object.isRequired,theme:c.a.object.isRequired};var T=Object(S.withStyles)(function(e){return{featureChip:{fontSize:"16px",backgroundColor:"#fff",border:"1pt solid #eee"},featureChipRight:{fontSize:"16px",backgroundColor:"#fff",border:"1pt solid #eee",float:"right"},featureGrid:{marginBottom:"25px"},avi:{width:"40px",height:"40px",color:"#fff"}}},{withTheme:!0})(I),q=a(181),_=a.n(q),j=a(7),N=a.n(j),R=a(3957),B=a.n(R),P=a(184),G=a.n(P),L=a(160),U=a.n(L),A=a(3939),O=a.n(A),Q=a(211),F=a.n(Q),z=a(3950),D=Object(z.autoPlay)(O.a),H=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeStep:0},t.handleNext=function(){t.setState(function(e){return{activeStep:e.activeStep+1}})},t.handleBack=function(){t.setState(function(e){return{activeStep:e.activeStep-1}})},t.handleStepChange=function(e){t.setState({activeStep:e})},t}return N()(t,e),t.prototype.render=function(){var e=this.state.activeStep,t=this.props.items,a=t.length;return r.a.createElement(G.a,{elevation:0},r.a.createElement("div",null,r.a.createElement(U.a,null,t[e].title),r.a.createElement(D,{axis:"x",index:e,onChangeIndex:this.handleStepChange,enableMouseEvents:!0},t.map(function(t,a){var n=t.node,i=n.excerpt,c=n.frontmatter,o=c.path,s=c.title,m=c.image;return r.a.createElement("div",{key:a},Math.abs(e-a)<=2?r.a.createElement(u.a,null,r.a.createElement(F.a,{style:{height:"200px"},image:Object(l.withPrefix)(m)}),r.a.createElement(f.a,null,r.a.createElement(U.a,{gutterBottom:!0,variant:"h5",component:"h2"},r.a.createElement(l.Link,{to:o},s)),r.a.createElement(U.a,{component:"p"},i))):null)})),r.a.createElement(B.a,{steps:a,position:"static",activeStep:e,nextButton:r.a.createElement(_.a,{size:"small",onClick:this.handleNext,disabled:e===a-1},"Next"),backButton:r.a.createElement(_.a,{size:"small",onClick:this.handleBack,disabled:0===e},"Back")})))},t}(r.a.Component),J=a(174);a.d(t,"query",function(){return W});var V=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(y.a,{title:"Gatsby Material UI Business Starter"},r.a.createElement(o.a,{title:"Home"},r.a.createElement("meta",{name:"description",content:"Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."})),r.a.createElement(T,null),r.a.createElement(k.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center"},r.a.createElement(k.a,{item:!0,xs:12,md:10,style:{minHeight:"523px"}},r.a.createElement(g,{title:"Our Products",avatar:r.a.createElement(w.a,null,r.a.createElement(M.b,null)),action:r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{variant:"contained",color:"secondary",className:e.classes.root},r.a.createElement(l.Link,{to:"/products"},"View All Products")))},r.a.createElement(H,{items:t})))))},W="1090688908";V.propTypes={classes:c.a.object.isRequired};t.default=Object(J.a)(Object(S.withStyles)(function(e){return{root:{backgroundColor:"#9c27b0"}}})(V))},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p}),a.d(t,"useStaticQuery",function(){return f});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(151),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(164),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},164:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"hi@foxandgeese.com",phone:"503-555-1111"}}}}}},170:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},171:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},172:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},173:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(166),o=a(202),s=a.n(o),u=a(197),m=a.n(u),d=a(175),p=a(163),f=a.n(p);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(d.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return i.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},i.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(s.a,null),i.a.createElement(f.a,{implementation:"css"},i.a.createElement(e,this.props))))},a}(i.a.Component)}},175:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return d});a(74),a(53),a(75),a(199);var r=a(182),l=a(166),i=a(200),c=a.n(i),o=a(201),s=a.n(o),u=Object(l.createMuiTheme)({palette:{primary:{light:c.a[300],main:c.a[500],dark:c.a[700]},secondary:{light:s.a[300],main:s.a[500],dark:s.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:u,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function d(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(198),a(73))},176:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(165),o=a(150),s=(a(168),a(169),a(171)),u=a(181),m=a.n(u),d=a(167),p=a.n(d),f=a(162),h=function(e){var t=e.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,t.map(function(e){return i.a.createElement(o.Link,{key:e.name,to:e.link},i.a.createElement(m.a,{style:{color:"#fff"}},e.name))}),i.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(p.a,{style:{color:"#fff"}},i.a.createElement(f.c,null))))},E=function(e){return i.a.createElement(o.StaticQuery,{query:"240237662",render:function(e){return i.a.createElement(h,{data:e})},data:s})},g=a(172),y=a(191),b=a.n(y),v=a(192),x=a.n(v),k=a(190),C=a.n(k),w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:this.handleOpen},i.a.createElement(f.a,{style:{color:"#efefef"}})),i.a.createElement(C.a,{onClickAway:this.handleClose},i.a.createElement(b.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return i.a.createElement(o.Link,{key:e.name,to:e.link},i.a.createElement(x.a,null,e.name))}),i.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(x.a,null,"Fork me on Github")))))},t}(i.a.Component),S=function(e){return i.a.createElement(o.StaticQuery,{query:"709782962",render:function(t){return i.a.createElement(w,{active:e.active,data:t})},data:g})},M=a(163),I=a.n(M),T=a(178),q=a.n(T),_=a(194),j=a.n(_),N=a(193),R=a.n(N),B=a(160),P=a.n(B),G=a(186),L=a.n(G),U=a(185),A=a.n(U),O=function(e){return i.a.createElement(R.a,{id:"appBar"},i.a.createElement(j.a,null,i.a.createElement(q.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},i.a.createElement(q.a,{item:!0},i.a.createElement(L.a,{id:"logo",variant:"outlined",avatar:i.a.createElement(A.a,{id:"logoIcon"},i.a.createElement(f.d,null)),label:i.a.createElement(o.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),i.a.createElement(q.a,{item:!0},i.a.createElement(I.a,{smDown:!0},i.a.createElement(P.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},i.a.createElement(E,null))),i.a.createElement(I.a,{mdUp:!0},i.a.createElement(S,null)))),i.a.createElement(q.a,{item:!0})))},Q=function(e){return i.a.createElement(o.StaticQuery,{query:"4102418190",render:function(e){return i.a.createElement(O,{data:e})},data:c})},F=a(195),z=a.n(F),D=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return i.a.createElement(i.a.Fragment,null,i.a.createElement(z.a,{style:{marginTop:"48px",marginBottom:"24px"}}),i.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},i.a.createElement("span",null,i.a.createElement(P.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",i.a.createElement(I.a,{only:["xs","sm"]},"–"),i.a.createElement(I.a,{only:["xl","lg","md"]},i.a.createElement("br",null))," ",r," – ",l,i.a.createElement("br",null),"·",i.a.createElement("br",null),"Starter created by"," ",i.a.createElement("a",{href:"https://foxandgeese.com"},"Fox and Geese")))))},H=function(e){return i.a.createElement(o.StaticQuery,{query:"4102418190",render:function(e){return i.a.createElement(D,{data:e})},data:c})},J=a(196),V=(a(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Q,null),i.a.createElement(J.Grid,{style:{marginTop:"94px"}},i.a.createElement(J.Row,null,i.a.createElement(J.Col,{xs:12},t?i.a.createElement(P.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,i.a.createElement(H,null)))))},t}(i.a.Component));t.a=V},179:function(e,t,a){"use strict";var n=a(180),r=a(0),l=a.n(r),i=a(205),c=a.n(i),o=a(150),s=function(e){return l.a.createElement(o.StaticQuery,{query:u,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(c.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var u="1175772"},180:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-4a659f10093de86c20cc.js.map