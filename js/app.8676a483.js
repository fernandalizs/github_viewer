(function(){"use strict";var t={7180:function(t,e,n){var s=n(144),o=n(1096),r=n(9203),i=n(4202),a=n(5057),l=n(3551),u=n(2370),c=function(){var t=this,e=t._self._c;return e(o.Z,[e(r.Z,{staticClass:"d-flex align-center",attrs:{"max-height":"60px",color:"indigo lighten-2",dense:"",dark:""}},[e(i.Z,{staticClass:"ml-2",attrs:{icon:"",href:"https://github.com/fernandalizs",target:"_blank"}},[e(a.Z,{attrs:{"x-large":""}},[t._v("mdi-github")])],1),e(u.qW,[t._v("GitHub Vuewer")])],1),e(l.Z,[e("GithubVuewer")],1)],1)},h=[],p=n(1200),d=function(){var t=this,e=t._self._c;return e(p.Z,[e("github-repos",{on:{repoSelected:t.onRepoSelected}}),e("github-repos-content",{attrs:{repo:t.repo}})],1)},f=[],g=n(4177),m=n(8819),b=n(4437),v=n(5294),w=n(9009),y=function(){var t=this,e=t._self._c;return e(p.Z,[e(v.Z,{staticClass:"text-center"},[t.user?e(b.Z,{attrs:{cols:"2"}},[e(m.Z,[e("img",{attrs:{src:t.avatar}})])],1):t._e(),e(b.Z,{attrs:{cols:"5"}},[e(g.Z,{attrs:{label:"Encontre seu usuário",items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(b.Z,{attrs:{cols:"5"}},[e(w.Z,{attrs:{items:t.repolist,loading:t.repoloading,"item-text":"name",label:"Selecione um repositório","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},Z=[];function _(t,e){let n=null;function s(){n&&clearTimeout(n);const s=this,o=arguments;n=setTimeout((()=>{t.apply(s,o),n=null}),e)}return s}async function x(t){let e=!0,n=[],s=1;while(e){const o=await fetch(`${t}?page=${s}`),r=await o.json();r.length>0?(n=n.concat(r),s++):e=!1}return n}const C={async searchUsers(t){const e=`https://api.github.com/search/users?q=${t}`,n=await fetch(e);return await n.json()},async listRepos(t){const e=`https://api.github.com/users/${t}/repos`,n=await x(e);return n},async listIssues(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/issues?page=${n}`,o=await fetch(s);return await o.json()},async listReposContent(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/contents/${n}`,o=await fetch(s);return await o.json()},async listContent(t,e){const n=`https://api.github.com/repos/${t}/${e}/contents/`,s=await fetch(n);return await s.json()},async treeRepos(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/git/tree/${n}`,o=await fetch(s);return await o.json()}};var $={data:()=>({user:null,repo:null,usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1,avatar:null}),methods:{searchUsersGithub:_((async function(){this.userloading=!0;const t=await C.searchUsers(this.usersearch);this.userlist=t.items,this.avatar=this.userlist.map((t=>t.avatar_url)),this.userloading=!1}),500),async listRepository(){this.repoloading=!0;const t=await C.listRepos(this.user);this.repolist=t,this.repoloading=!1}},watch:{usersearch(){this.searchUsersGithub()},user(){this.user&&this.listRepository()},repo(){this.$emit("repoSelected",this.repo)}}},j=$,k=n(1001),R=(0,k.Z)(j,y,Z,!1,null,null,null),O=R.exports,P=n(6275),S=n(4397),G=function(){var t=this,e=t._self._c;return e(p.Z,[e(v.Z,[e(b.Z,{attrs:{cols:"12"}},[e(S.Z,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Documentos")])])]),e("tbody",[t._l(t.docs,(function(n){return e("tr",{key:n.name},["dir"==n.type?e("td",{staticClass:"text-left"},[e(a.Z,{staticClass:"icon"},[t._v("mdi-folder")]),e(i.Z,{attrs:{"x-small":"",color:"deep-purple lighten-2"},on:{click:function(e){return t.openFolder(n.path)}}},[t._v(" "+t._s(n.name)+" ")])],1):e("td",[e(a.Z,{staticClass:"icon"},[t._v("mdi-file-outline")]),t._v(" "+t._s(n.name)+" ")],1)])})),"string"==typeof t.currentPath?e("div",[e(i.Z,{staticClass:"ma-2",attrs:{outlined:"",color:"deep-purple lighten-2"},on:{click:t.backFolder}},[t._v(" Voltar ")])],1):t._e()],2)]},proxy:!0}])})],1)],1),e(v.Z,[e(b.Z,{attrs:{cols:"12"}},[t.loading?e(P.Z,{attrs:{indeterminate:"",color:"primary"}}):t._e()],1)],1)],1)},T=[],F={props:["repo"],data:()=>({docs:[],currentPath:null,loading:!1}),methods:{async listContent(){this.loading=!0;const t=await C.listContent(this.repo.owner.login,this.repo.name);this.docs=this.docs.concat(t),this.currentPath=null,this.loading=!1},async listReposContent(t){this.loading=!0;const e=await C.listReposContent(this.repo.owner.login,this.repo.name,t);let n=t.split("/");n.pop();const s=n.join("/");this.currentPath=s,this.docs=this.docs.concat(e),this.loading=!1},openFolder(t){this.docs=[],this.listReposContent(t)},backFolder(){""==this.currentPath?(this.docs=[],this.listContent()):(this.docs=[],this.listReposContent(this.currentPath))}},watch:{repo(){this.docs=[],this.listContent()}}},U=F,V=(0,k.Z)(U,G,T,!1,null,null,null),M=V.exports,q={components:{GithubRepos:O,GithubReposContent:M},data:()=>({repo:null}),methods:{onRepoSelected(t){this.repo=t}}},E=q,I=(0,k.Z)(E,d,f,!1,null,null,null),z=I.exports,A={name:"App",components:{GithubVuewer:z},data:()=>({})},D=A,H=(0,k.Z)(D,c,h,!1,null,null,null),W=H.exports,B=n(2250);s.ZP.use(B.Z);var J=new B.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:J,render:t=>t(W)}).$mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,r){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,i=s[0],a=s[1],l=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var c=l(n)}for(e&&e(s);u<i.length;u++)r=i[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},s=self["webpackChunkgithub_viewer"]=self["webpackChunkgithub_viewer"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(7180)}));s=n.O(s)})();
//# sourceMappingURL=app.8676a483.js.map