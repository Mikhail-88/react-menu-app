(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/shopping-cart-solid.701d6d1d.svg"},32:function(e,t,a){e.exports=a.p+"static/media/food-bg.698e5e80.jpg"},34:function(e,t,a){e.exports=a(53)},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),l=a(7),s=a(12),o=a(15),u=a(13),m=a(16),d=a(14),E=(a(39),function(e){var t=e.menuItem,a=e.onAddToCart,n=t.title,c=t.price,i=t.url,l=t.category,s=t.id;return r.a.createElement("li",{className:"menu__item"},r.a.createElement("div",{className:"menu__title"},n),r.a.createElement("img",{className:"menu__img",src:i,alt:n}),r.a.createElement("div",{className:"menu__category"},"Category: ",r.a.createElement("span",null,l)),r.a.createElement("div",{className:"menu__price"},"Price: ",r.a.createElement("span",null,c,"$")),r.a.createElement("span",{className:"menu__category_img ".concat(l)}),r.a.createElement("div",{className:"menu__buttons"},r.a.createElement("button",{className:"menu__btn",onClick:function(){return a()}},"Add to cart"),r.a.createElement(d.b,{to:"/menu/".concat(s),className:"menu__link"},"View description")))}),p=a(8),f=r.a.createContext(),_=function(){return function(e){return function(t){return r.a.createElement(f.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{RestoService:a}))})}}},v=function(e){return{type:"MENU_LOADED",payload:e}},h=function(){return{type:"REQUSTED"}},b=function(){return{type:"HAS_ERROR"}},g=function(e){return{type:"ADD_TO_CART",payload:e}},O=(a(45),function(){return r.a.createElement("div",{className:"loadingio-spinner-spin-1kcfyr334q1"},r.a.createElement("div",{className:"ldio-0qyrhlsmw4yp"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),y=(a(46),function(){return r.a.createElement("div",{className:"info-block"},r.a.createElement("img",{src:"https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif",alt:"error"}),r.a.createElement("p",null,"Something goes wrong, try again later"))}),N=(a(47),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.RestoService,a=e.menuItems,n=e.menuLoaded,r=e.requested,c=e.hasError;a.length||(r(),t.getMenuItems().then(function(e){return n(e)}).catch(function(e){return c()}))}},{key:"render",value:function(){var e=this.props,t=e.menuItems,a=e.isLoading,n=e.isError,c=e.addToCart;return n?r.a.createElement("div",{className:"item__page"},r.a.createElement(y,null)):a?r.a.createElement("div",{className:"item__page"},r.a.createElement(O,null)):r.a.createElement("ul",{className:"menu__list"},t.map(function(e){return r.a.createElement(E,{key:e.id,menuItem:e,onAddToCart:function(){return c(e.id)}})}))}}]),t}(n.Component)),C={menuLoaded:v,requested:h,hasError:b,addToCart:g},j=_()(Object(p.b)(function(e){return{menuItems:e.menu,isLoading:e.isLoading,isError:e.isError}},C)(N)),k=function(){return r.a.createElement(j,null)},T=(a(48),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onTakeOrder=function(){var e=a.props,t=e.RestoService,n=e.itemsInCart,r=e.clearCart,c=e.requested,i=e.hasError;c(),t.setOrder(I(n)).then(function(){return r()}).catch(function(){return i()})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.itemsInCart,n=t.isOrderTook,c=t.deleteFromCart,i=t.isLoading,l=t.isError;return a.length||n?n?r.a.createElement("div",{className:"cart__title"},"We have accepted your order!"):l?r.a.createElement(y,null):i?r.a.createElement(O,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart__title"},"Your order:"),r.a.createElement("div",{className:"cart__list"},a.map(function(e){var t=e.title,a=e.price,n=e.url,i=e.id,l=e.quantity;return r.a.createElement("div",{key:i,className:"cart__item"},r.a.createElement("img",{src:n,className:"cart__item-img",alt:"Cesar salad"}),r.a.createElement("div",{className:"cart__item-title"},t),r.a.createElement("div",{className:"cart__item-details"},r.a.createElement("span",{className:"cart__item-ins"},"Price:"),r.a.createElement("span",null,a," $")),r.a.createElement("div",{className:"cart__item-details"},r.a.createElement("span",{className:"cart__item-ins"},"Quantity:"),r.a.createElement("span",null,l)),r.a.createElement("div",{className:"cart__item-details"},r.a.createElement("span",{className:"cart__item-ins"},"Amount:"),r.a.createElement("span",null,a*l," $")),r.a.createElement("div",{className:"cart__close",onClick:function(){return c(i)}},"\xd7"))})),r.a.createElement("button",{className:"order",onClick:function(){return e.onTakeOrder()}},"Make order")):r.a.createElement("div",{className:"cart__title"},"Your cart is empty!")}}]),t}(n.Component)),I=function(e){return e.map(function(e){return{name:e.title,portions:e.quantity}})},w=_()(Object(p.b)(function(e){return{itemsInCart:e.itemsInCart,isOrderTook:e.isOrderTook,isLoading:e.isLoading,isError:e.isError}},{deleteFromCart:function(e){return{type:"DELETE_FROM_CART",payload:e}},clearCart:function(){return{type:"CLEAR_CART"}},requested:h,hasError:b})(T)),R=function(){return r.a.createElement("div",{className:"cart"},r.a.createElement(w,null))},L=(a(49),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.RestoService,a=e.menuItems,n=e.menuLoaded,r=e.requested,c=e.hasError;a.length||(r(),t.getMenuItems().then(function(e){return n(e)}).catch(function(e){return c()}))}},{key:"render",value:function(){var e=this.props,t=e.menuItems,a=e.isLoading,n=e.isError,c=e.addToCart,i=e.match,l=e.history;if(n)return r.a.createElement("div",{className:"item__page"},r.a.createElement(y,null));if(a)return r.a.createElement("div",{className:"item__page"},r.a.createElement(O,null));var s=t.find(function(e){return e.id===Number(i.params.id)}),o=s.title,u=s.url,m=s.category,d=s.price,E=s.description,p=s.id;return r.a.createElement("div",{className:"item__page"},r.a.createElement("div",{className:"menu__item item__block"},r.a.createElement("div",{className:"menu__title"},o),r.a.createElement("img",{className:"menu__img",src:u,alt:o}),r.a.createElement("div",{className:"menu__title"},E),r.a.createElement("div",{className:"menu__category"},"Category: ",r.a.createElement("span",null,m)),r.a.createElement("div",{className:"menu__price"},"Price: ",r.a.createElement("span",null,d,"$")),r.a.createElement("span",{className:"menu__category_img ".concat(m)}),r.a.createElement("div",{className:"menu__buttons"},r.a.createElement("button",{onClick:function(){return c(p)},className:"menu__btn"},"Add to cart"),r.a.createElement("button",{onClick:function(){return l.goBack()},className:"menu__btn"},"Back"))))}}]),t}(n.Component)),A={menuLoaded:v,requested:h,hasError:b,addToCart:g},x=_()(Object(p.b)(function(e){return{menuItems:e.menu,isLoading:e.isLoading,isError:e.isError}},A)(L)),P=function(e){var t=e.match,a=e.history;return r.a.createElement(x,{match:t,history:a})},D=a(31),q=a.n(D),S=(a(50),Object(p.b)(function(e){return{totalPrice:e.totalPrice}},null)(function(e){var t=e.totalPrice;return r.a.createElement("header",{className:"header"},r.a.createElement(d.c,{to:"/",className:"header__link"},"Menu"),r.a.createElement(d.c,{to:"/cart/",className:"header__link"},r.a.createElement("img",{className:"header__cart",src:q.a,alt:"cart"}),"Total: ",t," $"))})),M=a(17),U=a(32),B=a.n(U),F=function(){return r.a.createElement("div",{style:{background:"url(".concat(B.a,") center center/cover no-repeat")},className:"app"},r.a.createElement(S,null),r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/",exact:!0,component:k}),r.a.createElement(M.a,{path:"/cart/",exact:!0,component:R}),r.a.createElement(M.a,{path:"/menu/:id",component:P})))},$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?r.a.createElement("div",{className:"item__page"},r.a.createElement(y,null)):this.props.children}}]),t}(n.Component),J=a(11),Q=a.n(J),H=a(19),Y=a(22),V=a(33),W=a(9),z={menu:[],itemsInCart:[],isLoading:!0,isError:!1,isOrderTook:!1,totalPrice:0},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUSTED":return Object(W.a)({},e,{isLoading:!0});case"MENU_LOADED":return Object(W.a)({},e,{menu:t.payload,isLoading:!1});case"HAS_ERROR":return Object(W.a)({},e,{isError:!0,isLoading:!1});case"ADD_TO_CART":if(e.itemsInCart.some(function(e){return e.id===t.payload})){var a=e.itemsInCart.find(function(e){return e.id===t.payload}),n=Object(W.a)({},a,{quantity:++a.quantity}),r=e.itemsInCart.filter(function(e){return e.id!==a.id}).concat(n);return Object(W.a)({},e,{itemsInCart:r,totalPrice:e.totalPrice+n.price,isOrderTook:!1})}var c=e.menu.find(function(e){return e.id===t.payload}),i=Object(W.a)({},c,{quantity:1}),l=[].concat(Object(V.a)(e.itemsInCart),[i]);return Object(W.a)({},e,{itemsInCart:l,totalPrice:e.totalPrice+i.price,isOrderTook:!1});case"DELETE_FROM_CART":var s=e.itemsInCart.find(function(e){return e.id===t.payload});return Object(W.a)({},e,{itemsInCart:e.itemsInCart.filter(function(e){return e.id!==s.id}),totalPrice:e.totalPrice-s.price*s.quantity,isOrderTook:!1});case"CLEAR_CART":return Object(W.a)({},e,{itemsInCart:[],isOrderTook:!0,isLoading:!1,totalPrice:0});default:return e}},K=Object(Y.b)(G),X=(a(52),new function e(){var t=this;Object(l.a)(this,e),this._apiBaseUrl="http://localhost:3000",this.getResource=function(){var e=Object(H.a)(Q.a.mark(function e(a){var n;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBaseUrl).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Server Error: ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getMenuItems=Object(H.a)(Q.a.mark(function e(){return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/menu/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),this.getOrderNumber=Object(H.a)(Q.a.mark(function e(){var a,n;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/orders/");case 2:return a=e.sent,n=a.length+1,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)})),this.setOrder=function(){var e=Object(H.a)(Q.a.mark(function e(a){var n,r,c;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getOrderNumber();case 2:return n=e.sent,r={id:n,order:a},c={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)},e.next=7,fetch("".concat(t._apiBaseUrl,"/orders"),c);case 7:if(e.sent.ok){e.next=10;break}throw new Error("Server error");case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});i.a.render(r.a.createElement(p.a,{store:K},r.a.createElement($,null,r.a.createElement(f.Provider,{value:X},r.a.createElement(d.a,null,r.a.createElement(F,null))))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.29731452.chunk.js.map