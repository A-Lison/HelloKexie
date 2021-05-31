var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{r as o,R as c,T as m,m as i,l as u,S as p,L as d,a as h,C as g,h as _,b as E,c as v,P as f,N as y,B as N,G as b,d as k,e as w,f as x,g as T,i as S}from"./vendor.93684884.js";var Y="_container_1mdfg_1",L="_logo_1mdfg_6",O="/assets/logo.3c0c45ef.png";class D extends o.exports.Component{constructor(){super(...arguments),this.state={nowY:10,nowX:10,targetX:100,targetY:100,mouseX:0,mouseY:0,cursor:"pointer",raf:null},this.menu=c.createRef()}render(){const{nowY:e,nowX:t,cursor:a}=this.state;return c.createElement("div",null,c.createElement("div",{ref:this.menu,className:Y,style:{top:e+"px",left:t+"px",cursor:a}},c.createElement("img",{className:L,src:O,alt:""})))}handleMove(e){e.preventDefault();const t=!e.clientX;t?this.setState({mouseX:e.changedTouches[0].clientX-this.menu.current.offsetLeft,mouseY:e.changedTouches[0].clientY-this.menu.current.offsetTop}):this.setState({cursor:"move",mouseX:e.clientX-this.menu.current.offsetLeft,mouseY:e.clientY-this.menu.current.offsetTop});const a=e=>{let a=0,n=0;t?(a=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY):(a=e.clientX,n=e.clientY),this.moveTo(a,n)},n=e=>{this.setState({cursor:"pointer"}),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",n),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",n)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",n),document.addEventListener("touchmove",a),document.addEventListener("touchend",n)}componentDidMount(){const e=this.menu.current;e.addEventListener("mousedown",(e=>{this.handleMove(e)})),e.addEventListener("touchstart",(e=>{this.handleMove(e)}))}moveTo(e,t){let a=Date.now();if(this.setState({targetX:e,targetY:t}),!this.state.raf){const e=()=>{let{nowX:t,nowY:n,targetX:r,targetY:s,mouseX:l,mouseY:o}=this.state;r-=l,s-=o;const c=Date.now();let m=c-a;a=c;let i=(r-t)*m/256,u=(s-n)*m/256;Math.abs(i)<.03&&Math.abs(u)<.03?this.setState({nowX:r,nowY:s,raf:null}):(this.setState({nowX:t+i,nowY:n+u}),requestAnimationFrame(e))},t=requestAnimationFrame(e);this.setState({raf:t})}}}var X="_container_1vfpe_1",z="_title_1vfpe_9",j="_description_1vfpe_9",C="_imgScale_1vfpe_18",I="_btnGroup_1vfpe_27",M="_btn_1vfpe_27",B="_blank_1vfpe_44",$="_sectionContainer_1vfpe_48",H="_displayItem_1vfpe_55",q="_department_1vfpe_55",P="_comment_1vfpe_67";var F="_description_1etzm_1",A="_container_1etzm_5",G="_blank_1etzm_11",R="_banner_1etzm_15";const{Title:U}=m;function Q({title:e,description:t,children:a}){return c.createElement("section",{className:A},c.createElement("div",{className:G}),c.createElement(U,{level:1},e),c.createElement("p",{className:F},t),c.createElement("div",{className:R},a))}const J=new i({highlight:function(e,t){try{return'<pre class="code-block"><code>'+u.highlight(e,{language:t}).value+"</code></pre>"}catch(a){}return""}}),K=e=>J.render(e);class W{}W.GithubIssueUrl="https://api.github.com/repos/sanyuankexie/hellokexie/issues/6/comments";var V="_comment_dajiv_1";var Z="_container_eqef6_1",ee="_avatar_eqef6_5",te="_right_eqef6_13",ae="_name_eqef6_18",ne="_bio_eqef6_24",re="_location_eqef6_28";function se({size:e}){return c.createElement(p,{indicator:c.createElement(d,{style:{fontSize:e},spin:!0})})}function le({login:e}){const[t,a]=o.exports.useState();o.exports.useEffect((()=>{h.get(`https://api.github.com/users/${e}`).then((e=>{const{login:t,name:n,bio:r,avatar_url:s,html_url:l,location:o,company:c}=e.data;a({login:t,name:n,bio:r,avatar:s,htmlUrl:l,location:o,company:c})}))}),[]);const[n,r]=o.exports.useState();return o.exports.useEffect((()=>{r(t?c.createElement("div",{className:Z},c.createElement("img",{className:ee,src:`${t.avatar}&s=60`,alt:""}),c.createElement("span",{className:te},c.createElement("span",{className:ae},t.login),c.createElement("span",{className:ne},t.bio),c.createElement("span",{className:re},c.createElement(g,{style:{marginRight:"5px"}}),t.company))):c.createElement(se,{size:30}))}),[t]),c.createElement("div",null,n)}const{Title:oe}=m;function ce(){const[e,t]=o.exports.useState();o.exports.useEffect((()=>{h.get(W.GithubIssueUrl).then((e=>{const a=e.data.map((e=>{const{user:t,body:a,updated_at:n}=e,{login:r,avatar_url:s}=t;return{author:r,avatar:`${s}&s=40`,content:K(a),datetime:_(n).format("YYYY-MM-DD HH:mm:ss")}}));t(a)}))}),[]);const[a,n]=o.exports.useState(!1);return o.exports.useEffect((()=>{n(!e&&{indicator:c.createElement(d,{style:{fontSize:50},spin:!0})})}),[e]),c.createElement("div",null,c.createElement(E,{header:c.createElement(oe,{level:3},"畅心所言"),loading:a,itemLayout:"horizontal",dataSource:e,renderItem:e=>c.createElement("li",null,c.createElement(v,{className:V,author:e.author,avatar:c.createElement(f,{content:c.createElement(le,{login:e.author}),placement:"topLeft"},c.createElement("img",{src:e.avatar,alt:""})),content:c.createElement("span",{dangerouslySetInnerHTML:{__html:e.content}}),datetime:e.datetime}))}))}var me="_project_6r3t4_1",ie="_avatar_6r3t4_7",ue="_name_6r3t4_14",pe="_description_6r3t4_20",de="_languageColor_6r3t4_25",he="_tags_6r3t4_38";const{Title:ge}=m;function _e(){return c.createElement(E,{header:c.createElement(ge,{level:3},"开源项目"),dataSource:ve,renderItem:e=>c.createElement("li",{style:{borderBottom:"1px solid #f0f0f0"}},c.createElement(Ee,{name:e.name,description:e.description,language:e.language,avatar:e.avatar,url:e.url,languageColor:e.languageColor}))})}const Ee=({name:e,description:t,language:a,avatar:n,url:r,languageColor:s})=>c.createElement("div",{className:me},c.createElement("span",null,c.createElement("span",{className:ue},c.createElement("a",{href:r,target:"_blank",rel:"noreferrer"},c.createElement("img",{className:ie,src:`${n}&s=20`,alt:""}),e),c.createElement("span",{className:he},a,c.createElement("span",{className:de,style:{background:s}})))),c.createElement("span",{className:pe},t)),ve=[{name:"Flexml",description:"🚀基于Litho的Android高性能动态业务容器。",language:"Kotlin",avatar:"https://avatars.githubusercontent.com/u/25474959?v=4",url:"https://github.com/sanyuankexie/Flexml",languageColor:"#F18E33"},{name:"ml.akasaki.space",description:"请跳转到仓库网页查看： https://ml.akasaki.space 。带有代码的深度学习方法从入门到放弃。talk is cheap, show me the code。如果有用请施舍一个star。",language:"Python",avatar:"https://avatars.githubusercontent.com/u/33346934?v=4",url:"https://ml.akasaki.space",languageColor:"#3572A5"},{name:"OneNet-IoT",description:"基于OneNet平台okHttp协议的远程环境监控App开发",language:"Java",avatar:"https://avatars.githubusercontent.com/u/37988832?s=48&v=4",url:"https://github.com/sanyuankexie/OneNet-IoT",languageColor:"#b07219"}];const fe={Multimedia:{shortName:"MD",fullName:"multimedia-department",logo:"/assets/multimedia-department.95b0e341.png",learningDirection:["网站开发","UI设计","视频剪辑","小程序"]},Software:{shortName:"SD",fullName:"software-depertment",logo:"/assets/software-depertment.87b7038b.png",learningDirection:["游戏制作","安卓开发","机器学习"]},Hardware:{shortName:"HD",fullName:"hardware-department",logo:"/assets/hardware-department.5b86d39d.png",learningDirection:["硬件开发"]},Organization:{shortName:"OD",fullName:"organization-department",logo:"/assets/organization-department.8a3e7c96.png",learningDirection:[]}},ye=Object.values(fe),Ne=Object.fromEntries(ye.map((e=>[e.shortName,e]))),be=(ke=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&l(e,a,t[a]);if(n)for(var a of n(t))s.call(t,a)&&l(e,a,t[a]);return e})({},Ne),t(ke,a({getByFullName:e=>ye.find((t=>t.fullName===e)),getByLearningDirection:e=>ye.find((t=>t.learningDirection.includes(e)))})));var ke;const{Title:we}=m;class xe extends o.exports.Component{render(){return Te.map((e=>c.createElement("div",{key:e.key,className:H},c.createElement(we,{style:{textAlign:"center"},level:2},e.name),c.createElement(y,{to:{pathname:`introduction/${be.getByLearningDirection(e.name).fullName}#${e.key}`}},c.createElement("img",{src:e.logo,alt:"",width:e.width,style:e.style||{},className:C})))))}}const Te=[{name:"网站开发",key:"web",logo:"/assets/react.639197a5.png",width:170},{name:"游戏制作",key:"game",logo:"/assets/unity.eb1ebd03.png",width:270,style:{marginTop:"2em"}},{name:"安卓开发",key:"android",logo:"/assets/android.95c6ec78.png",width:150},{name:"UI设计",key:"ui",logo:"/assets/ui.acdadff5.png",width:200,style:{marginTop:"0.5em"}},{name:"硬件开发",key:"hardware",logo:"/assets/embedded.df9f24db.svg",width:140,style:{background:"#2e2459",marginTop:"0.6em"}},{name:"机器学习",key:"machine-learning",logo:"/assets/python.721ab4bb.png",width:150},{name:"小程序",key:"applet",logo:"/assets/wechat.4b3339a2.png",width:140},{name:"视频剪辑",key:"video",logo:"/assets/bilibili.46491ee2.png",width:150}],{Title:Se}=m;function Ye(){return c.createElement("div",null,c.createElement("section",{className:X},c.createElement("div",{className:B,style:{height:"20vh"}}),c.createElement("img",{src:O,alt:"",width:200,height:200}),c.createElement(Se,{className:z,level:1},"桂电三院科协"),c.createElement("p",{className:j},"啦啦啦啦啦啊啦啦啊啦啦啦啦啦"),c.createElement("div",{className:I},c.createElement(N,{className:M,type:"primary",shape:"round",icon:c.createElement(b,null),size:"large"},"加入我们"),c.createElement(N,{className:M,type:"primary",shape:"round",icon:c.createElement(k,null),size:"large"},"练习编程"))),c.createElement(Q,{title:"四大部门",description:"科协有四大部门，不同的部门下有不同的学习方向"},c.createElement("div",{className:$},Object.values(Ne).map((e=>c.createElement("div",{className:q,key:e.fullName},c.createElement(y,{to:{pathname:`/introduction/${e.fullName}`,state:{icon:e.logo}}},c.createElement("img",{src:e.logo,className:C,width:250,alt:""}))))))),c.createElement(Q,{title:"学习方向"},c.createElement("div",{className:$},c.createElement(xe,null))),c.createElement(Q,{title:"近年参赛获奖",description:"很多，还在整理当中......"},c.createElement("div",{className:$})),c.createElement(Q,{title:"心灵之声"},c.createElement("div",{className:$,style:{marginBottom:"10vh"}},c.createElement("div",{className:P},c.createElement(ce,null)),c.createElement("div",{className:P},c.createElement(_e,null)))))}var Le="_container_1n4op_1",Oe="_title_1n4op_11",De="_itemsContainer_1n4op_15",Xe="_items_1n4op_15",ze="_item_1n4op_15",je="_blank_1n4op_31";const{Title:Ce}=m;function Ie(){return c.createElement("footer",{className:Le},c.createElement("div",{className:je}),c.createElement("div",{className:De},Me.map((e=>{return t=e,c.createElement("div",{key:t.title},c.createElement(Ce,{level:3,className:Oe},t.title),c.createElement("ul",{className:Xe},t.list.map((e=>{switch(e.name){case"微信公众号":return c.createElement(f,{content:c.createElement("img",{src:"/assets/wechat_QR_code.344df20f.jpg",alt:""}),trigger:"click",style:{padding:"0 !important"},key:e.name},c.createElement("a",{key:e.name,target:"_blank",href:e.url,style:{color:"white"},rel:"noreferrer"},c.createElement("li",{className:ze},e.name)));default:return c.createElement("a",{key:e.name,target:"_blank",href:e.url,style:{color:"white"},rel:"noreferrer"},c.createElement("li",{className:ze},e.name))}}))));var t}))))}const Me=[{title:"学习文档",list:[{name:"工具箱的深度學習記事簿",url:"https://ml.akasaki.space"},{name:"CottonPaper",url:"https://cp.therainisme.com"}]},{title:"与我相聚",list:[{name:"微信公众号",url:"https://github.com/sanyuankexie"},{name:"招新QQ群",url:"https://github.com/sanyuankexie"},{name:"招新报名表",url:"https://github.com/sanyuankexie"}]},{title:"科协相关",list:[{name:"OnlineJudge",url:"https://github.com/sanyuankexie"},{name:"GitHub",url:"https://github.com/sanyuankexie"}]},{title:"友情链接",list:[{name:"七院创新基地",url:"https://七院创新基地.cn/"}]}];var Be="_article_104ka_1",$e="_container_104ka_5";var He="_container_1h00e_1",qe="_icon_1h00e_6",Pe="_h1_1h00e_13",Fe="_caption_1h00e_17",Ae="_author_1h00e_23",Ge="_captionHeading_1h00e_28";function Re({title:e,author:t,published:a,icon:n}){return c.createElement("div",{className:He},c.createElement("h1",{className:Pe},c.createElement("img",{src:n,alt:"",className:qe}),e),c.createElement("span",{className:Ae},c.createElement("span",{className:Fe},c.createElement("span",{className:Ge},"Written By"),c.createElement("span",null,t)),c.createElement("span",{className:Fe},c.createElement("span",{className:Ge},"published"),c.createElement("span",null,a))))}function Ue({location:e,match:t}){const[a,n]=o.exports.useState(""),[r,s]=o.exports.useState(""),l=o.exports.useRef(null),{params:m}=t,i=m.target.split("#")[0],u=be.getByFullName(i).logo;return o.exports.useEffect((()=>{h.get(`/docs/introduction/${i}.md`).then((e=>{let t=K(e.data);const a=t.match(/<h1>(\S*)<\/h1>/)[1];t=t.replace(t.match(/<h1>(\S*)<\/h1>/)[0],""),n(t),s(a)}))}),[]),o.exports.useEffect((()=>{l.current.getElementsByTagName("h2"),window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,document.documentElement.scrollTop=110}),[a]),c.createElement("article",{className:`${Be} ${$e}`},c.createElement(Re,{icon:u,title:r,author:"Therainisme",published:"March 22, 2021"}),c.createElement("span",{dangerouslySetInnerHTML:{__html:a},ref:l}))}function Qe(){return c.createElement("div",null,c.createElement("div",null,c.createElement(D,null),c.createElement(w,null,c.createElement(x,{path:"/introduction/:target",component:Ue}),c.createElement(x,{path:"/",component:Ye})),c.createElement(Ie,null)))}T.render(c.createElement(S,null,c.createElement(Qe,null)),document.getElementById("root"));