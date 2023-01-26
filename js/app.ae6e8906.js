(function(){"use strict";var t={5003:function(t,e,n){var s=n(144),o=n(1096),r=n(9203),i=n(7179),a=n(5057),l=n(3551),c=n(2370),u=function(){var t=this,e=t._self._c;return e(o.Z,[e(r.Z,{staticClass:"d-flex align-center",attrs:{"max-height":"60px",color:"indigo lighten-2",dense:"",dark:""}},[e(i.Z,{staticClass:"ml-2",attrs:{icon:"",href:"https://github.com/fernandalizs",target:"_blank"}},[e(a.Z,{attrs:{"x-large":""}},[t._v("mdi-github")])],1),e(c.qW,[t._v("GitHub Vuewer")])],1),e(l.Z,[e("GithubVuewer")],1)],1)},h=[],p=n(1200),d=function(){var t=this,e=t._self._c;return e(p.Z,[e("github-repos",{on:{repoSelected:t.onRepoSelected}}),e("github-repos-content",{attrs:{repo:t.repo}})],1)},f=[],g=n(4177),m=n(8819),v=n(4437),b=n(2469),Z=n(5476),_=n(12),w=n(5294),y=n(9943),x=function(){var t=this,e=t._self._c;return e(p.Z,[e(w.Z,{staticClass:"text-center"},[t.user?e(v.Z,{attrs:{cols:"2"}},[e(m.Z,[e("img",{attrs:{src:t.avatar}})])],1):t._e(),e(v.Z,{attrs:{cols:"5"}},[e(g.Z,{attrs:{label:"Encontre seu usuário",items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login",solo:"",clearable:""},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},scopedSlots:t._u([{key:"item",fn:function(n){return[e(Z.Z,[e(b.Z,{attrs:{src:n.item.avatar_url}})],1),e(_.km,[e(_.V9,{domProps:{innerHTML:t._s(n.item.login)}})],1)]}}]),model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(v.Z,{attrs:{cols:"5"}},[e(y.Z,{attrs:{items:t.repolist,loading:t.repoloading,"item-text":"name",label:"Selecione um repositório","return-object":"","single-line":"",solo:"",clearable:""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},C=[];function P(t,e){let n=null;function s(){n&&clearTimeout(n);const s=this,o=arguments;n=setTimeout((()=>{t.apply(s,o),n=null}),e)}return s}async function j(t){let e=!0,n=[],s=1;while(e){const o=await fetch(`${t}?page=${s}`),r=await o.json();r.length>0?(n=n.concat(r),s++):e=!1}return n}const k={async searchUsers(t){const e=`https://api.github.com/search/users?q=${t}`,n=await fetch(e);return await n.json()},async listRepos(t){const e=`https://api.github.com/users/${t}/repos`,n=await j(e);return n},async listIssues(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/issues?page=${n}`,o=await fetch(s);return await o.json()},async listReposContent(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/contents/${n}`,o=await fetch(s);return await o.json()},async listContent(t,e){const n=`https://api.github.com/repos/${t}/${e}/contents/`,s=await fetch(n);return await s.json()},async treeRepos(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/git/tree/${n}`,o=await fetch(s);return await o.json()}};var $={data:()=>({user:null,repo:null,usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1,avatar:null}),methods:{searchUsersGithub:P((async function(){this.userloading=!0;const t=await k.searchUsers(this.usersearch);this.userlist=t.items,this.avatar=this.userlist.map((t=>t.avatar_url)),this.userloading=!1}),500),async listRepository(){this.repoloading=!0;const t=await k.listRepos(this.user);this.repolist=t,this.repoloading=!1}},watch:{usersearch(){this.searchUsersGithub()},user(){this.user&&this.listRepository()},repo(){this.$emit("repoSelected",this.repo)}}},R=$,O=n(1001),S=(0,O.Z)(R,x,C,!1,null,null,null),T=S.exports,G=n(4546),F=n(6275),V=n(4397),M=function(){var t=this,e=t._self._c;return e(p.Z,[e(w.Z,[e(v.Z,{attrs:{cols:"12"}},[e(V.Z,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[t.actualPath?e(G.Z,[e(a.Z,[t._v("mdi-folder-account")]),t._v(" "+t._s(t.actualPath)+" ")],1):e(G.Z,{staticClass:"text-left"},[e(a.Z,[t._v("mdi-folder-account")]),t._v(" "+t._s(t.repo.name)+" ")],1)],1)]),e("tbody",[t._l(t.docs,(function(n){return e("tr",{key:n.name},["dir"==n.type?e("td",{staticClass:"text-left"},[e(a.Z,{staticClass:"icon"},[t._v("mdi-folder")]),e(i.Z,{attrs:{"x-small":"",color:"deep-purple lighten-2"},on:{click:function(e){return t.openFolder(n.path)}}},[t._v(" "+t._s(n.name)+" ")])],1):e("td",[e(a.Z,{staticClass:"icon"},[t._v("mdi-file-outline")]),t._v(" "+t._s(n.name)+" ")],1)])})),"string"==typeof t.currentPath?e("div",[e(i.Z,{staticClass:"ma-2",attrs:{outlined:"",color:"deep-purple lighten-2"},on:{click:t.backFolder}},[t._v(" Voltar ")])],1):t._e()],2)]},proxy:!0}])})],1)],1),e(w.Z,[e(v.Z,{attrs:{cols:"12"}},[t.loading?e(F.Z,{attrs:{indeterminate:"",color:"primary"}}):t._e()],1)],1)],1)},U=[],q=(n(7658),{props:["repo"],data:()=>({docs:[],currentPath:null,actualPath:null,loading:!1}),methods:{async listContent(){this.loading=!0;const t=await k.listContent(this.repo.owner.login,this.repo.name);this.docs=this.docs.concat(t),this.currentPath=null,this.loading=!1},async listReposContent(t){let e=[];this.loading=!0;const n=await k.listReposContent(this.repo.owner.login,this.repo.name,t);e.push(this.repo.name,t),this.actualPath=e.join("/");let s=t.split("/");s.pop();const o=s.join("/");this.currentPath=o,this.docs=this.docs.concat(n),this.loading=!1},openFolder(t){this.docs=[],this.listReposContent(t)},backFolder(){""==this.currentPath?(this.docs=[],this.listContent(),this.actualPath=""):(this.docs=[],this.listReposContent(this.currentPath))}},watch:{repo(){this.docs=[],this.listContent()}}}),E=q,H=(0,O.Z)(E,M,U,!1,null,null,null),I=H.exports,z={components:{GithubRepos:T,GithubReposContent:I},data:()=>({repo:null}),methods:{onRepoSelected(t){this.repo=t}}},A=z,L=(0,O.Z)(A,d,f,!1,null,null,null),W=L.exports,B={name:"App",components:{GithubVuewer:W},data:()=>({})},D=B,J=(0,O.Z)(D,u,h,!1,null,null,null),K=J.exports,N=n(2250);s.ZP.use(N.Z);var Q=new N.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:Q,render:t=>t(K)}).$mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,r){if(!s){var i=1/0;for(u=0;u<t.length;u++){s=t[u][0],o=t[u][1],r=t[u][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,i=s[0],a=s[1],l=s[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var u=l(n)}for(e&&e(s);c<i.length;c++)r=i[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},s=self["webpackChunkgithub_viewer"]=self["webpackChunkgithub_viewer"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(5003)}));s=n.O(s)})();
//# sourceMappingURL=app.ae6e8906.js.map