(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),s=a.n(c),i=a(6),l=a(48),m=a(4),o=a(18),u=a(7),d=a(5),p=a(2),E=a.n(p),_=a(9),f=a(49),b=a.n(f),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(n,r){b()({url:"https://react-menu-app-e4c8b.firebaseio.com".concat(e),method:t,data:a}).then(function(e){return n(e)}).catch(function(e){return r(e)})})},h=function(){return function(){var e=Object(_.a)(E.a.mark(function e(t){var a,n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING"}),e.prev=1,e.next=4,g("/menu.json");case 4:a=e.sent,n=a.data,r=n.map(function(e){return Object(d.a)({},e,{inCart:!1})}),t({type:"MENU_LOADED",payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:"HAS_ERROR"});case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},v=function(e){return{type:"ADD_TO_CART",payload:e}},N={menu:[],itemsInCart:[],isLoading:!1,hasError:!1,isOrderTook:!1,totalPrice:0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_LOADED":return Object(d.a)({},e,{menu:t.payload,isLoading:!1});case"LOADING":return Object(d.a)({},e,{isLoading:!0});case"HAS_ERROR":return Object(d.a)({},e,{hasError:!0,isLoading:!1});case"ADD_TO_CART":if(e.itemsInCart.some(function(e){return e.id===t.payload})){var a=e.itemsInCart.find(function(e){return e.id===t.payload}),n=Object(d.a)({},a,{quantity:++a.quantity}),r=e.itemsInCart.map(function(e){return e.id===a.id?n:e});return Object(d.a)({},e,{itemsInCart:r,totalPrice:e.totalPrice+n.price})}var c=e.menu.find(function(e){return e.id===t.payload}),s=e.menu.map(function(e){return e.id===c.id?Object(d.a)({},e,{inCart:!0}):e});return Object(d.a)({},e,{menu:s,itemsInCart:[].concat(Object(u.a)(e.itemsInCart),[Object(d.a)({},c,{quantity:1})]),totalPrice:e.totalPrice+c.price});case"DELETE_FROM_CART":var i=e.itemsInCart.find(function(e){return e.id===t.payload});return Object(d.a)({},e,{menu:e.menu.map(function(e){return e.id===i.id?Object(d.a)({},e,{inCart:!1}):e}),itemsInCart:e.itemsInCart.filter(function(e){return e.id!==i.id}),totalPrice:e.totalPrice-i.price*i.quantity});case"DECREASE_IN_CART":var l=e.itemsInCart.find(function(e){return e.id===t.payload}),m=Object(d.a)({},l,{quantity:--l.quantity});return Object(d.a)({},e,{itemsInCart:e.itemsInCart.map(function(e){return e.id===l.id?m:e}),totalPrice:e.totalPrice-m.price});case"ORDER_SUCCESS":return Object(d.a)({},e,{isOrderTook:!0,isLoading:!1});case"REFRESH_ORDER":return Object(d.a)({},e,{menu:e.menu.map(function(e){return Object(d.a)({},e,{inCart:!1})}),itemsInCart:[],isOrderTook:!1,totalPrice:0});default:return e}},R=a(12),y=a(50),C=(a(104),{KEY:"AIzaSyD1LQ2M93txboZ4fi70dMYilAyEaP2MiwE",DOMAIN:"react-menu-app-e4c8b.firebaseapp.com",DATABASE:"https://react-menu-app-e4c8b.firebaseio.com",PROJECT_ID:"react-menu-app-e4c8b",STORAGE_BUCKET:"react-menu-app-e4c8b.appspot.com",SENDER_ID:0xed61691b35,APP_ID:"1:1019541527349:web:2da8967336234e9d84ca7c"}),j=C.KEY,k=C.DOMAIN,T=C.DATABASE,I=C.PROJECT_ID,A=C.STORAGE_BUCKET,L=C.SENDER_ID,S=C.APP_ID,P=y.initializeApp({apiKey:j,authDomain:k,databaseURL:T,projectId:I,storageBucket:A,messagingSenderId:L,appId:S}),w=function(){var e=Object(_.a)(E.a.mark(function e(t){var a,n,r,c,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("/users/".concat(t,".json"));case 3:return a=e.sent,n=a.data,r=Object.values(n),c=Object(R.a)(r,1),s=c[0],e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),D={currentUser:null,isUserLogin:!1,isRecording:!1,isError:!1,errorMessage:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROVIDE_USER":return Object(d.a)({},e,{currentUser:t.payload,isUserLogin:!0,isRecording:!1});case"REGISTRATION":return Object(d.a)({},e,{isRecording:!0});case"IS_ERROR":return Object(d.a)({},e,{isError:!0,errorMessage:t.payload,isRecording:!1});case"REFRESH_ERROR":return Object(d.a)({},e,{isError:!1});case"USER_LOGOUT":return Object(d.a)({},e,{isUserLogin:!1,isRecording:!1});default:return e}},x=Object(o.c)({menu:O,auth:U}),q=a(51),F=a(34),M=a(52),z={key:"root",storage:a.n(M).a},G=Object(F.a)(z,x),$=Object(o.d)(G,Object(o.a)(q.a)),H=Object(F.b)($),B=a(53),Y=a(23),Z=a(61),K=a(70),J=Object(i.b)(function(e){return{isUserLogin:e.auth.isUserLogin}},null)(function(e){var t=e.component,a=e.isUserLogin,n=Object(K.a)(e,["component","isUserLogin"]);return r.a.createElement(Y.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(Y.a,{to:"/react-menu-app/authorization/"})}}))}),V=a(55),W=a.n(V),Q=(a(109),Object(n.memo)(function(e){var t=e.menuItem,a=e.onAddToCart,c=t.title,s=t.price,i=t.url,l=t.category,o=t.id,u=t.inCart,d=t.description,p=Object(n.useState)(!1),E=Object(R.a)(p,2),_=E[0],f=E[1],b=function(){f(!_)};return r.a.createElement(W.a,{isFlipped:_,flipDirection:"horizontal"},r.a.createElement("li",{className:"menu__item"},r.a.createElement("div",{className:"menu__title"},c),r.a.createElement("img",{className:"menu__img",src:i,alt:c,title:"click me",onClick:b}),r.a.createElement("div",{className:"menu__category"},"Category: ",r.a.createElement("span",null,l)),r.a.createElement("div",{className:"menu__price"},"Price: ",r.a.createElement("span",null,s,"$")),r.a.createElement("span",{className:"menu__category_img ".concat(l)}),r.a.createElement("div",{className:"menu__buttons"},u?r.a.createElement(m.b,{to:"/react-menu-app/cart/",className:"menu__btn menu__link"},"CART"):r.a.createElement("button",{className:"menu__btn",onClick:function(){return a()}},"ORDER"),r.a.createElement(m.b,{to:"/react-menu-app/menu/".concat(o),className:"menu__link"},"DESCRIPTION"))),r.a.createElement("li",{className:"menu__item menu__item__back"},r.a.createElement("div",{className:"menu__title"},c),r.a.createElement("div",{className:"menu__description",onClick:b},d),r.a.createElement("div",{className:"menu__category"},"Category: ",r.a.createElement("span",null,l)),r.a.createElement("div",{className:"menu__price"},"Price: ",r.a.createElement("span",null,s,"$")),r.a.createElement("span",{className:"menu__category_img ".concat(l)}),r.a.createElement("div",{className:"menu__buttons"},u?r.a.createElement(m.b,{to:"/react-menu-app/cart/",className:"menu__btn menu__link"},"CART"):r.a.createElement("button",{className:"menu__btn",onClick:function(){return a()}},"ORDER"))))},function(e,t){return e.menuItem===t.menuItem})),X=(a(110),function(){return r.a.createElement("div",{className:"loadingio-spinner-spin-1kcfyr334q1"},r.a.createElement("div",{className:"ldio-0qyrhlsmw4yp"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),ee=(a(111),function(e){var t=e.message;return r.a.createElement("div",{className:"info-block"},r.a.createElement("img",{src:"https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif",alt:"error"}),r.a.createElement("p",null,t))});ee.defaultProps={message:"Something goes wrong, try again later!"};var te=ee,ae=(a(112),{menuLoaded:h,addToCart:v}),ne=Object(i.b)(function(e){var t=e.menu;return{menuItems:t.menu,isLoading:t.isLoading,hasError:t.hasError}},ae)(function(e){var t=e.menuItems,a=e.isLoading,c=e.hasError,s=e.menuLoaded,i=e.addToCart,l=c&&r.a.createElement("div",{className:"item__page"},r.a.createElement(te,null)),m=a&&r.a.createElement("div",{className:"item__page"},r.a.createElement(X,null));return Object(n.useEffect)(function(){!t.length&&s()},[]),l||m||r.a.createElement("ul",{className:"menu__list"},t.map(function(e){return r.a.createElement(Q,{key:e.id,menuItem:e,onAddToCart:function(){return i(e.id)}})}))}),re=function(){return r.a.createElement(ne,null)},ce=a(122),se=a(121),ie=(a(113),{deleteFromCart:function(e){return{type:"DELETE_FROM_CART",payload:e}},addToCart:v,decreaseInCart:function(e){return{type:"DECREASE_IN_CART",payload:e}},sendOrder:function(e,t){return function(){var a=Object(_.a)(E.a.mark(function a(n){var r,c,s,i;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"LOADING"}),a.prev=1,a.next=4,g("/orders.json");case 4:return r=a.sent,c=r.data,s=Object.values(c).length+1,i={id:s,order:e},a.next=10,g("/orders.json","POST",i);case 10:200===a.sent.status&&(n({type:"ORDER_SUCCESS"}),setTimeout(function(){t.push("/react-menu-app/"),n({type:"REFRESH_ORDER"})},5e3)),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(1),n({type:"HAS_ERROR"});case 17:case"end":return a.stop()}},a,null,[[1,14]])}));return function(e){return a.apply(this,arguments)}}()}}),le=Object(i.b)(function(e){var t=e.menu,a=e.auth;return{cart:t.itemsInCart,isOrderTook:t.isOrderTook,isLoading:t.isLoading,hasError:t.hasError,totalPrice:t.totalPrice,user:a.currentUser,isUserLogin:a.isUserLogin}},ie)(function(e){var t=e.cart,a=e.user,n=e.isUserLogin,c=e.isOrderTook,s=e.isLoading,i=e.hasError,l=e.totalPrice,o=e.deleteFromCart,u=e.addToCart,d=e.decreaseInCart,p=e.sendOrder,E=Object(Y.g)(),_=i&&r.a.createElement(te,null),f=s&&r.a.createElement(X,null);return t.length||c?c?r.a.createElement("p",{className:"cart__title"},"Thank you, we have accepted your order! ",r.a.createElement("br",null),"We will contact you shortly!"):_||f||r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement("div",{className:"cart__login"},r.a.createElement("p",{className:"cart__item-title"},"Before placing an order, please "),r.a.createElement(m.b,{to:"/react-menu-app/authorization/",className:"cart__link"},"Login!")),r.a.createElement("div",{className:"cart__title"},"Your order:"),r.a.createElement(ce.a,{className:"cart__list"},t.map(function(e){var t=e.title,a=e.price,n=e.url,c=e.id,s=e.quantity;return r.a.createElement(se.a,{key:c,timeout:500,classNames:"fade"},r.a.createElement("div",{className:"cart__item"},r.a.createElement("img",{src:n,className:"cart__item-img",alt:"Cesar salad"}),r.a.createElement("div",{className:"cart__item-title"},t),r.a.createElement("div",{className:"cart__item-details"},r.a.createElement("span",{className:"cart__item-ins"},"Price:"),r.a.createElement("span",null,a," $")),r.a.createElement("div",{className:"cart__item-details"},r.a.createElement("span",{className:"cart__item-ins"},"Quantity:"),r.a.createElement("span",null,s),r.a.createElement("div",{className:"cart__buttons"},r.a.createElement("button",{className:"cart__btn",onClick:function(){return d(c)},disabled:s<=1&&!0},"-"),r.a.createElement("button",{className:"cart__btn",onClick:function(){return u(c)}},"+"))),r.a.createElement("div",{className:"cart__item-details"},r.a.createElement("span",{className:"cart__item-ins"},"Amount:"),r.a.createElement("span",null,a*s," $")),r.a.createElement("div",{className:"cart__close",onClick:function(){return o(c)}},"\xd7")))})),r.a.createElement("button",{disabled:!n&&"disabled",title:n?"Make order":"Please, login!",className:"order__btn",onClick:function(){return function(){var e=t.map(function(e){return{name:e.title,portions:e.quantity}}),n=new Date(Date.now()).toLocaleString();p({dish:e,price:l,user:a,orderTime:n},E)}()}},"ORDER")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"cart__title"},"Your cart is empty!"),r.a.createElement(m.b,{to:"/react-menu-app/",className:"order__link"},r.a.createElement("button",{className:"order__btn"},"MENU")))}),me=function(){return r.a.createElement("div",{className:"cart"},r.a.createElement(le,null))},oe=a(120),ue=(a(114),{menuLoaded:h,addToCart:v}),de=Object(i.b)(function(e){var t=e.menu;return{menuItems:t.menu,isLoading:t.isLoading,hasError:t.hasError}},ue)(function(e){var t=e.menuItems,a=e.menuLoaded,c=e.isLoading,s=e.hasError,i=e.addToCart,l=Object(Y.h)(),o=Object(Y.g)(),u=t.find(function(e){return e.id===Number(l.id)}),d=s&&r.a.createElement(te,null),p=c&&r.a.createElement(X,null);return Object(n.useEffect)(function(){!t.length&&a()},[]),r.a.createElement("div",{className:"item__page"},d||p||r.a.createElement("div",{className:"menu__item item__block"},r.a.createElement("div",{className:"menu__title"},u.title),r.a.createElement("img",{className:"menu__img",src:u.url,alt:u.title}),r.a.createElement("div",{className:"menu__title"},u.description),r.a.createElement("div",{className:"menu__category"},"Category: ",r.a.createElement("span",null,u.category)),r.a.createElement("div",{className:"menu__price"},"Price: ",r.a.createElement("span",null,u.price,"$")),r.a.createElement("span",{className:"menu__category_img alert ".concat(u.category)}),r.a.createElement("div",{className:"menu__buttons"},r.a.createElement(oe.a,null,r.a.createElement(se.a,{key:u.inCart,addEndListener:function(e,t){return e.addEventListener("transitionend",t,!1)},classNames:"fade"},u.inCart?r.a.createElement(m.b,{to:"/react-menu-app/cart/",className:"menu__btn menu__link"},"CART"):r.a.createElement("button",{className:"menu__btn",onClick:function(){return i(u.id)}},"ORDER"))),r.a.createElement("button",{onClick:function(){return o.goBack()},className:"menu__btn menu__link"},"Back"))))}),pe=function(){return r.a.createElement(de,null)},Ee=a(56),_e=a.n(Ee),fe=a(29),be={email:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,password:/^[0-9a-zA-Z]{6,}$/,name:/^[a-zA-Z `']{3,}$/,phone:/^\d{10}$/},ge={login:function(e,t){return function(){var a=Object(_.a)(E.a.mark(function a(n){var r,c,s;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"REGISTRATION"}),a.prev=1,a.next=4,P.auth().signInWithEmailAndPassword(e.email,e.password);case 4:return r=a.sent,c=r.user,a.next=8,w(c.uid);case 8:s=a.sent,n({type:"PROVIDE_USER",payload:s}),setTimeout(function(){t.push("/react-menu-app/dashboard/")},2e3),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(1),n({type:"IS_ERROR",payload:a.t0.message}),setTimeout(function(){n({type:"REFRESH_ERROR"})},5e3);case 17:case"end":return a.stop()}},a,null,[[1,13]])}));return function(e){return a.apply(this,arguments)}}()}},he=Object(i.b)(null,ge)(function(e){var t=e.login,a=Object(Y.g)(),n=Object(fe.a)(),c=n.register,s=n.handleSubmit,i=n.reset,l=n.errors;return r.a.createElement("div",{className:"user_forms-login"},r.a.createElement("h2",{className:"forms_title"},"Login"),r.a.createElement("form",{className:"forms_form",onSubmit:s(function(e){t(e,a),i()})},r.a.createElement("fieldset",{className:"forms_fieldset"},r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{autoComplete:"off",name:"email",placeholder:"Email*",className:"forms_field-input",autoFocus:!0,ref:c({required:"This is required field",pattern:{value:be.email,message:"Please, provide validate email, example: test@test.com"}})}),l.email&&r.a.createElement("p",{className:"forms_field-error"},l.email.message)),r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{type:"password",name:"password",placeholder:"Password*",className:"forms_field-input",ref:c({required:"This is required field",pattern:{value:be.password,message:"Please, only letters and numbers, minlength 6 characters"}})}),l.password&&r.a.createElement("p",{className:"forms_field-error"},l.password.message))),r.a.createElement("div",{className:"forms_buttons"},r.a.createElement("input",{type:"submit",value:"Log In",className:"forms_buttons-action"}))))}),ve={signUp:function(e,t){return function(){var a=Object(_.a)(E.a.mark(function a(n){var r,c,s,i,l,m;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.email,c=e.password,s=e.name,i=e.phone,n({type:"REGISTRATION"}),a.prev=2,a.next=5,P.auth().createUserWithEmailAndPassword(r,c).then(function(e){return e.user.uid});case 5:return l=a.sent,m={name:s,email:r,phone:i,uid:l},a.next=9,g("/users/".concat(l,".json"),"POST",m);case 9:200===a.sent.status&&n({type:"PROVIDE_USER",payload:m}),setTimeout(function(){t.push("/react-menu-app/dashboard/")},2e3),a.next=18;break;case 14:a.prev=14,a.t0=a.catch(2),n({type:"IS_ERROR",payload:a.t0.message}),setTimeout(function(){n({type:"REFRESH_ERROR"})},5e3);case 18:case"end":return a.stop()}},a,null,[[2,14]])}));return function(e){return a.apply(this,arguments)}}()}},Ne=Object(i.b)(null,ve)(function(e){var t=e.signUp,a=Object(Y.g)(),n=Object(fe.a)(),c=n.register,s=n.handleSubmit,i=n.reset,l=n.errors;return r.a.createElement("div",{className:"user_forms-signup"},r.a.createElement("h2",{className:"forms_title"},"Sign Up"),r.a.createElement("form",{className:"forms_form",onSubmit:s(function(e){t(e,a),i()})},r.a.createElement("fieldset",{className:"forms_fieldset"},r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{autoComplete:"off",name:"name",placeholder:"Full Name*",className:"forms_field-input",ref:c({required:"This is required field",pattern:{value:be.name,message:"Please, only letters, minlength 3 characters"}})}),l.name&&r.a.createElement("p",{className:"forms_field-error"},l.name.message)),r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{autoComplete:"off",name:"phone",placeholder:"Phone number*",className:"forms_field-input",ref:c({required:"This is required field",pattern:{value:be.phone,message:"Please, only 10 numbers"}})}),l.phone&&r.a.createElement("p",{className:"forms_field-error"},l.phone.message)),r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{autoComplete:"off",name:"email",placeholder:"Email*",className:"forms_field-input",autoFocus:!0,ref:c({required:"This is required field",pattern:{value:be.email,message:"Please, provide validate email, example: test@test.com"}})}),l.email&&r.a.createElement("p",{className:"forms_field-error"},l.email.message)),r.a.createElement("div",{className:"forms_field"},r.a.createElement("input",{type:"password",name:"password",placeholder:"Password*",className:"forms_field-input",ref:c({required:"This is required field",pattern:{value:be.password,message:"Please, only letters or numbers, minlength 6 characters"}})}),l.password&&r.a.createElement("p",{className:"forms_field-error"},l.password.message))),r.a.createElement("div",{className:"forms_buttons"},r.a.createElement("input",{type:"submit",value:"Sign up",className:"forms_buttons-action"}))))}),Oe=(a(115),Object(i.b)(function(e){var t=e.auth;return{isUserLogin:t.isUserLogin,isRecording:t.isRecording,isError:t.isError,errorMessage:t.errorMessage}},null)(function(e){var t=e.isUserLogin,a=e.isRecording,c=e.isError,s=e.errorMessage,i=Object(n.useState)(!1),l=Object(R.a)(i,2),m=l[0],o=l[1],u=c&&r.a.createElement(te,{message:s}),d=a&&r.a.createElement(X,null),p=t&&r.a.createElement("p",{className:"user_success"},"Success!");return r.a.createElement("section",{className:"user"},r.a.createElement("div",{className:"user_options-container"},r.a.createElement("div",{className:"user_options-text"},r.a.createElement("div",{className:"user_options-unregistered"},d||p||r.a.createElement(r.a.Fragment,null,u||r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"user_unregistered-title"},"Don't have an account?"),r.a.createElement("p",{className:"user_unregistered-text"},"Please, click the button below and go through the short registration process.")),r.a.createElement("button",{className:"user_unregistered-signup",onClick:function(){return o(!m)}},"Sign up"))),r.a.createElement("div",{className:"user_options-registered"},d||p||r.a.createElement(r.a.Fragment,null,u||r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"user_registered-title"},"Have an account?"),r.a.createElement("p",{className:"user_registered-text"},"Please, enter your email and password.")),r.a.createElement("button",{className:"user_registered-login",onClick:function(){return o(!m)}},"Login")))),r.a.createElement("div",{className:_e()("user_options-forms",{bounceLeft:m,bounceRight:!m})},m?r.a.createElement(Ne,null):r.a.createElement(he,null))))})),Re=function(){return r.a.createElement(Oe,null)},ye=Object(i.b)(function(e){return{currentUser:e.auth.currentUser}},null)(function(e){var t=e.currentUser;return r.a.createElement("div",{className:"item__page"},r.a.createElement("div",{className:"menu__item item__block"},r.a.createElement("h4",{className:"menu__title"},"You are welcome, ",t.name,"!"),r.a.createElement("h6",{className:"menu__category"},"Your user data:"),r.a.createElement("p",{className:"menu__category"},"Phone number: ",r.a.createElement("span",null,t.phone)),r.a.createElement("p",{className:"menu__price"},"Email: ",r.a.createElement("span",null,t.email,"$")),r.a.createElement("div",{className:"menu__buttons"},r.a.createElement(m.b,{to:"/react-menu-app/cart/",className:"menu__btn menu__link"},"CART"),r.a.createElement(m.b,{to:"/react-menu-app/",className:"menu__btn menu__link"},"MENU"))))}),Ce=function(){return r.a.createElement(ye,null)},je=a(57),ke=a.n(je),Te=a(58),Ie=a.n(Te),Ae=a(59),Le=a.n(Ae),Se=(a(116),Object(i.b)(function(e){return{totalPrice:e.menu.totalPrice,isUserLogin:e.auth.isUserLogin}},null)(function(e){var t=e.totalPrice,a=e.isUserLogin;return r.a.createElement("header",{className:"header"},a&&r.a.createElement(m.c,{to:"/react-menu-app/dashboard/",className:"header__link"},r.a.createElement("img",{className:"header__exit",title:"DASHBOARD",src:Le.a,alt:"dashboard"})),r.a.createElement(m.c,{to:"/react-menu-app/",className:"header__link"},"Menu"),r.a.createElement(m.c,{to:"/react-menu-app/cart/",className:"header__link"},r.a.createElement("img",{className:"header__cart",src:ke.a,alt:"cart",title:"CART"}),"Total: ",t," $"),!a&&r.a.createElement(m.c,{to:"/react-menu-app/authorization/",className:"header__link"},"Login"),a&&r.a.createElement(m.c,{to:"/react-menu-app/authorization/",className:"header__link"},r.a.createElement("img",{className:"header__exit",onClick:function(){P.auth().signOut()},title:"EXIT",src:Ie.a,alt:"exit"})))})),Pe=(a(117),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"This is footer \xa92020. GitHub Mikhail-88"))}),we=a(60),De=a.n(we);function Ue(){var e=Object(B.a)(["\n    background: url(",") center center/cover no-repeat;\n"]);return Ue=function(){return e},e}var xe=Z.a.div(Ue(),De.a),qe={checkUserIsLogin:function(){return function(){var e=Object(_.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REGISTRATION"}),P.auth().onAuthStateChanged(function(e){e?w(e.uid).then(function(e){t({type:"PROVIDE_USER",payload:e})}).catch(function(e){t({type:"IS_ERROR",payload:e.message})}):t({type:"USER_LOGOUT"})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},Fe=Object(i.b)(null,qe)(function(e){var t=e.checkUserIsLogin;return Object(n.useEffect)(function(){t()},[]),r.a.createElement(xe,null,r.a.createElement(Se,null),r.a.createElement(Y.d,null,r.a.createElement(Y.b,{path:"/react-menu-app/",exact:!0,component:re}),r.a.createElement(Y.b,{path:"/react-menu-app/cart/",exact:!0,component:me}),r.a.createElement(Y.b,{path:"/react-menu-app/menu/:id",component:pe}),r.a.createElement(Y.b,{path:"/react-menu-app/authorization/",exact:!0,component:Re}),r.a.createElement(J,{exact:!0,path:"/react-menu-app/dashboard/",component:Ce})),r.a.createElement(Pe,null))}),Me=a(65),ze=a(66),Ge=a(68),$e=a(67),He=a(69),Be=function(e){function t(){var e,a;Object(Me.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(Ge.a)(this,(e=Object($e.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1},a}return Object(He.a)(t,e),Object(ze.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?r.a.createElement("div",{className:"item__page"},r.a.createElement(te,null)):this.props.children}}]),t}(n.Component);a(118);s.a.render(r.a.createElement(i.a,{store:$},r.a.createElement(Be,null,r.a.createElement(m.a,null,r.a.createElement(l.a,{persistor:H},r.a.createElement(Fe,null))))),document.getElementById("root"))},57:function(e,t,a){e.exports=a.p+"static/media/shopping-cart-solid.701d6d1d.svg"},58:function(e,t,a){e.exports=a.p+"static/media/exit.77c311f2.png"},59:function(e,t,a){e.exports=a.p+"static/media/user.fff3d037.png"},60:function(e,t,a){e.exports=a.p+"static/media/food-bg.698e5e80.jpg"},73:function(e,t,a){e.exports=a(119)}},[[73,1,2]]]);
//# sourceMappingURL=main.47dc4ceb.chunk.js.map