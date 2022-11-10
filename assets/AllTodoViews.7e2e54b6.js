import{h as f,I as T,D as P,_ as g,e as d,o as n,C as h,w as C,n as q,a as o,f as c,t as A,g as b,v as B,B as L,c as l,p as E,b as N,d as z,S as H,u as R,x as k,y as j,l as I,F as S,A as O}from"./index.65347ae3.js";import{A as x}from"./AppEmptyState.eb056a82.js";import{u as w}from"./tasks.51903f19.js";let u=!0;const G=f({name:"AppTodoItem",components:{Icon:T,AppListItem:P},data:()=>({}),props:{todo:{type:Object,required:!0,default:()=>({title:"Todo title",description:"Todo description"})}},computed:{isSelected(){return u},priority(){const e=this.todo.priority.toLowerCase().trim();return e==="urgent"?"todo__item--urgent":e==="delicate"?"todo__item--delicate":e==="not-urgent"?"todo__item--not__urgent":e==="important"?"todo__item--important":"todo__item--normal"}},mounted(){const e=document.getElementsByClassName("todo__item"),t=1300;for(const s of e)s.addEventListener("mousedown",function(_){setTimeout(r,t);function r(){u=!1,console.log("long press ",u),s.classList.add("is__selected")}}),s.addEventListener("mouseup",function(_){setTimeout(r,t);function r(){console.log("long press"),s.classList.add("is__selected")}})}});const J={class:"todo__item"},K={class:"todo__item__header__actions__delete"},Q={class:"todo__item__header trim__text"},U={class:"todo__item__header__title"},W={class:"todo__item__content"},X={class:"trim__text"};function Y(e,t,s,_,r,v){const i=d("Icon"),a=d("AppListItem");return n(),h(a,{class:q(e.priority)},{default:C(()=>[o("div",J,[o("div",K,[c(i,{icon:"mdi:close-circle-outline",onClick:t[0]||(t[0]=p=>e.$emit("delete-todo"))})]),o("div",null,[o("div",Q,[o("div",U,[o("h3",null,A(e.todo.title),1)])]),o("div",W,[o("p",X,A(e.todo.description),1)])]),b(o("div",{class:"todo__item__header__actions",onClick:t[1]||(t[1]=p=>e.$emit("show-options"))},[c(i,{icon:"mdi:dots-vertical",class:"d-none"})],512),[[B,e.isSelected]])])]),_:1},8,["class"])}const Z=g(G,[["render",Y],["__scopeId","data-v-b56cd120"]]),ee=f({name:"AppEmptyState",props:{message:{type:String,default:"There is error in your network connection. Please check your connection and try again."}},components:{BaseButton:L,Icon:T},methods:{refreshPage(){window.location.reload()}}}),oe="/assets/network-error.3fc7fca8.svg";const te=e=>(E("data-v-cec126d1"),e=e(),N(),e),se={class:"network__error"},ne=te(()=>o("img",{src:oe,alt:"empty state"},null,-1)),de=["innerHTML"];function re(e,t,s,_,r,v){const i=d("Icon"),a=d("BaseButton");return n(),l("div",se,[ne,o("div",null,[o("p",{innerHTML:e.message},null,8,de)]),c(a,{text:"refresh",class:"refresh__button",onClick:e.refreshPage},{default:C(()=>[c(i,{icon:"mdi:refresh"})]),_:1},8,["onClick"])])}const ie=g(ee,[["render",re],["__scopeId","data-v-cec126d1"]]),ae=f({name:"TodoView",components:{BaseButton:L,Icon:T,BaseTextInput:z,AppEmptyState:x,AppTodoItem:Z,AppNetworkError:ie,Spinner:H},data:()=>({showTodoModal:!1,todo:{title:"",description:"",date:"",priority:""}}),mounted(){console.log("mounted")},created(){this.makeTodoRequest(),console.log("created hook")},methods:{...R(w,{makeTodoRequest:"fetchAllTodo",createTodo:"createTodo",deleteTodo:"deleteTodo"}),async makeCreateTodo(){this.createTodo({...this.todo}),this.showTodoModal=!1},editTodo(e){this.$router.push({name:"edit-todo",params:{noteId:String(e)}})}},computed:{...k(w,["todoArray","isLoading","isFetchingTodoArray","errorFetchingTodo"]),...k(j,{bearerToken:"authorizationToken"}),disabledState(){return this.isLoading===!0}}});const ce=e=>(E("data-v-029b11bf"),e=e(),N(),e),_e={class:"fetching__todo"},le=ce(()=>o("p",null,"fetching tasks",-1)),pe={key:1};function me(e,t,s,_,r,v){var y,$;const i=d("Spinner"),a=d("AppEmptyState"),p=d("AppTodoItem");return n(),l(S,null,[b(o("div",_e,[c(i),le],512),[[B,e.isFetchingTodoArray]]),((y=e.todoArray)==null?void 0:y.length)==0?(n(),h(a,{key:0})):I("",!0),Number(($=e.todoArray)==null?void 0:$.length)>0&&!e.isFetchingTodoArray?(n(),l("div",pe,[(n(!0),l(S,null,O(e.todoArray,({title:F,description:V,id:m,priority:D})=>(n(),h(p,{todo:{title:F,description:V,id:m,priority:D},onDeleteTodo:M=>e.deleteTodo(m),onClick:M=>e.editTodo(m)},null,8,["todo","onDeleteTodo","onClick"]))),256))])):I("",!0)],64)}const Te=g(ae,[["render",me],["__scopeId","data-v-029b11bf"]]);export{Te as default};
