goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15222 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15222(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15223 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15223(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14549 = coll;
var G__14550 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14549,G__14550) : shadow.dom.lazy_native_coll_seq.call(null,G__14549,G__14550));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14592 = arguments.length;
switch (G__14592) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14601 = arguments.length;
switch (G__14601) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14614 = arguments.length;
switch (G__14614) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14622 = arguments.length;
switch (G__14622) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14628 = arguments.length;
switch (G__14628) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14646 = arguments.length;
switch (G__14646) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e14651){if((e14651 instanceof Object)){
var e = e14651;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14651;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14660 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14661 = null;
var count__14662 = (0);
var i__14663 = (0);
while(true){
if((i__14663 < count__14662)){
var el = chunk__14661.cljs$core$IIndexed$_nth$arity$2(null,i__14663);
var handler_15230__$1 = ((function (seq__14660,chunk__14661,count__14662,i__14663,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14660,chunk__14661,count__14662,i__14663,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15230__$1);


var G__15231 = seq__14660;
var G__15232 = chunk__14661;
var G__15233 = count__14662;
var G__15234 = (i__14663 + (1));
seq__14660 = G__15231;
chunk__14661 = G__15232;
count__14662 = G__15233;
i__14663 = G__15234;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14660);
if(temp__5804__auto__){
var seq__14660__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14660__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14660__$1);
var G__15235 = cljs.core.chunk_rest(seq__14660__$1);
var G__15236 = c__5568__auto__;
var G__15237 = cljs.core.count(c__5568__auto__);
var G__15238 = (0);
seq__14660 = G__15235;
chunk__14661 = G__15236;
count__14662 = G__15237;
i__14663 = G__15238;
continue;
} else {
var el = cljs.core.first(seq__14660__$1);
var handler_15239__$1 = ((function (seq__14660,chunk__14661,count__14662,i__14663,el,seq__14660__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14660,chunk__14661,count__14662,i__14663,el,seq__14660__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15239__$1);


var G__15240 = cljs.core.next(seq__14660__$1);
var G__15241 = null;
var G__15242 = (0);
var G__15243 = (0);
seq__14660 = G__15240;
chunk__14661 = G__15241;
count__14662 = G__15242;
i__14663 = G__15243;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14670 = arguments.length;
switch (G__14670) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14689 = cljs.core.seq(events);
var chunk__14690 = null;
var count__14691 = (0);
var i__14692 = (0);
while(true){
if((i__14692 < count__14691)){
var vec__14702 = chunk__14690.cljs$core$IIndexed$_nth$arity$2(null,i__14692);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14702,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14702,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15245 = seq__14689;
var G__15246 = chunk__14690;
var G__15247 = count__14691;
var G__15248 = (i__14692 + (1));
seq__14689 = G__15245;
chunk__14690 = G__15246;
count__14691 = G__15247;
i__14692 = G__15248;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14689);
if(temp__5804__auto__){
var seq__14689__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14689__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14689__$1);
var G__15249 = cljs.core.chunk_rest(seq__14689__$1);
var G__15250 = c__5568__auto__;
var G__15251 = cljs.core.count(c__5568__auto__);
var G__15252 = (0);
seq__14689 = G__15249;
chunk__14690 = G__15250;
count__14691 = G__15251;
i__14692 = G__15252;
continue;
} else {
var vec__14705 = cljs.core.first(seq__14689__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14705,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14705,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15253 = cljs.core.next(seq__14689__$1);
var G__15254 = null;
var G__15255 = (0);
var G__15256 = (0);
seq__14689 = G__15253;
chunk__14690 = G__15254;
count__14691 = G__15255;
i__14692 = G__15256;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14708 = cljs.core.seq(styles);
var chunk__14709 = null;
var count__14710 = (0);
var i__14711 = (0);
while(true){
if((i__14711 < count__14710)){
var vec__14719 = chunk__14709.cljs$core$IIndexed$_nth$arity$2(null,i__14711);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14719,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14719,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15257 = seq__14708;
var G__15258 = chunk__14709;
var G__15259 = count__14710;
var G__15260 = (i__14711 + (1));
seq__14708 = G__15257;
chunk__14709 = G__15258;
count__14710 = G__15259;
i__14711 = G__15260;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14708);
if(temp__5804__auto__){
var seq__14708__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14708__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14708__$1);
var G__15261 = cljs.core.chunk_rest(seq__14708__$1);
var G__15262 = c__5568__auto__;
var G__15263 = cljs.core.count(c__5568__auto__);
var G__15264 = (0);
seq__14708 = G__15261;
chunk__14709 = G__15262;
count__14710 = G__15263;
i__14711 = G__15264;
continue;
} else {
var vec__14722 = cljs.core.first(seq__14708__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14722,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15265 = cljs.core.next(seq__14708__$1);
var G__15266 = null;
var G__15267 = (0);
var G__15268 = (0);
seq__14708 = G__15265;
chunk__14709 = G__15266;
count__14710 = G__15267;
i__14711 = G__15268;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14740_15269 = key;
var G__14740_15270__$1 = (((G__14740_15269 instanceof cljs.core.Keyword))?G__14740_15269.fqn:null);
switch (G__14740_15270__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15272 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_15272,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_15272,"aria-");
}
})())){
el.setAttribute(ks_15272,value);
} else {
(el[ks_15272] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14765){
var map__14769 = p__14765;
var map__14769__$1 = cljs.core.__destructure_map(map__14769);
var props = map__14769__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14769__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14779 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14779,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14779,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14779,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14791 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14791,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14791;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14793 = arguments.length;
switch (G__14793) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14797){
var vec__14799 = p__14797;
var seq__14800 = cljs.core.seq(vec__14799);
var first__14801 = cljs.core.first(seq__14800);
var seq__14800__$1 = cljs.core.next(seq__14800);
var nn = first__14801;
var first__14801__$1 = cljs.core.first(seq__14800__$1);
var seq__14800__$2 = cljs.core.next(seq__14800__$1);
var np = first__14801__$1;
var nc = seq__14800__$2;
var node = vec__14799;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14805 = nn;
var G__14806 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14805,G__14806) : create_fn.call(null,G__14805,G__14806));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14809 = nn;
var G__14810 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14809,G__14810) : create_fn.call(null,G__14809,G__14810));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14812 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14812,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14812,(1),null);
var seq__14815_15274 = cljs.core.seq(node_children);
var chunk__14816_15275 = null;
var count__14817_15276 = (0);
var i__14818_15277 = (0);
while(true){
if((i__14818_15277 < count__14817_15276)){
var child_struct_15278 = chunk__14816_15275.cljs$core$IIndexed$_nth$arity$2(null,i__14818_15277);
var children_15279 = shadow.dom.dom_node(child_struct_15278);
if(cljs.core.seq_QMARK_(children_15279)){
var seq__14847_15280 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15279));
var chunk__14849_15281 = null;
var count__14850_15282 = (0);
var i__14851_15283 = (0);
while(true){
if((i__14851_15283 < count__14850_15282)){
var child_15284 = chunk__14849_15281.cljs$core$IIndexed$_nth$arity$2(null,i__14851_15283);
if(cljs.core.truth_(child_15284)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15284);


var G__15285 = seq__14847_15280;
var G__15286 = chunk__14849_15281;
var G__15287 = count__14850_15282;
var G__15288 = (i__14851_15283 + (1));
seq__14847_15280 = G__15285;
chunk__14849_15281 = G__15286;
count__14850_15282 = G__15287;
i__14851_15283 = G__15288;
continue;
} else {
var G__15289 = seq__14847_15280;
var G__15290 = chunk__14849_15281;
var G__15291 = count__14850_15282;
var G__15292 = (i__14851_15283 + (1));
seq__14847_15280 = G__15289;
chunk__14849_15281 = G__15290;
count__14850_15282 = G__15291;
i__14851_15283 = G__15292;
continue;
}
} else {
var temp__5804__auto___15293 = cljs.core.seq(seq__14847_15280);
if(temp__5804__auto___15293){
var seq__14847_15294__$1 = temp__5804__auto___15293;
if(cljs.core.chunked_seq_QMARK_(seq__14847_15294__$1)){
var c__5568__auto___15295 = cljs.core.chunk_first(seq__14847_15294__$1);
var G__15296 = cljs.core.chunk_rest(seq__14847_15294__$1);
var G__15297 = c__5568__auto___15295;
var G__15298 = cljs.core.count(c__5568__auto___15295);
var G__15299 = (0);
seq__14847_15280 = G__15296;
chunk__14849_15281 = G__15297;
count__14850_15282 = G__15298;
i__14851_15283 = G__15299;
continue;
} else {
var child_15300 = cljs.core.first(seq__14847_15294__$1);
if(cljs.core.truth_(child_15300)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15300);


var G__15301 = cljs.core.next(seq__14847_15294__$1);
var G__15302 = null;
var G__15303 = (0);
var G__15304 = (0);
seq__14847_15280 = G__15301;
chunk__14849_15281 = G__15302;
count__14850_15282 = G__15303;
i__14851_15283 = G__15304;
continue;
} else {
var G__15305 = cljs.core.next(seq__14847_15294__$1);
var G__15306 = null;
var G__15307 = (0);
var G__15308 = (0);
seq__14847_15280 = G__15305;
chunk__14849_15281 = G__15306;
count__14850_15282 = G__15307;
i__14851_15283 = G__15308;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15279);
}


var G__15309 = seq__14815_15274;
var G__15310 = chunk__14816_15275;
var G__15311 = count__14817_15276;
var G__15312 = (i__14818_15277 + (1));
seq__14815_15274 = G__15309;
chunk__14816_15275 = G__15310;
count__14817_15276 = G__15311;
i__14818_15277 = G__15312;
continue;
} else {
var temp__5804__auto___15313 = cljs.core.seq(seq__14815_15274);
if(temp__5804__auto___15313){
var seq__14815_15314__$1 = temp__5804__auto___15313;
if(cljs.core.chunked_seq_QMARK_(seq__14815_15314__$1)){
var c__5568__auto___15315 = cljs.core.chunk_first(seq__14815_15314__$1);
var G__15316 = cljs.core.chunk_rest(seq__14815_15314__$1);
var G__15317 = c__5568__auto___15315;
var G__15318 = cljs.core.count(c__5568__auto___15315);
var G__15319 = (0);
seq__14815_15274 = G__15316;
chunk__14816_15275 = G__15317;
count__14817_15276 = G__15318;
i__14818_15277 = G__15319;
continue;
} else {
var child_struct_15320 = cljs.core.first(seq__14815_15314__$1);
var children_15321 = shadow.dom.dom_node(child_struct_15320);
if(cljs.core.seq_QMARK_(children_15321)){
var seq__14853_15322 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15321));
var chunk__14855_15323 = null;
var count__14856_15324 = (0);
var i__14857_15325 = (0);
while(true){
if((i__14857_15325 < count__14856_15324)){
var child_15326 = chunk__14855_15323.cljs$core$IIndexed$_nth$arity$2(null,i__14857_15325);
if(cljs.core.truth_(child_15326)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15326);


var G__15327 = seq__14853_15322;
var G__15328 = chunk__14855_15323;
var G__15329 = count__14856_15324;
var G__15330 = (i__14857_15325 + (1));
seq__14853_15322 = G__15327;
chunk__14855_15323 = G__15328;
count__14856_15324 = G__15329;
i__14857_15325 = G__15330;
continue;
} else {
var G__15331 = seq__14853_15322;
var G__15332 = chunk__14855_15323;
var G__15333 = count__14856_15324;
var G__15334 = (i__14857_15325 + (1));
seq__14853_15322 = G__15331;
chunk__14855_15323 = G__15332;
count__14856_15324 = G__15333;
i__14857_15325 = G__15334;
continue;
}
} else {
var temp__5804__auto___15335__$1 = cljs.core.seq(seq__14853_15322);
if(temp__5804__auto___15335__$1){
var seq__14853_15336__$1 = temp__5804__auto___15335__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14853_15336__$1)){
var c__5568__auto___15337 = cljs.core.chunk_first(seq__14853_15336__$1);
var G__15338 = cljs.core.chunk_rest(seq__14853_15336__$1);
var G__15339 = c__5568__auto___15337;
var G__15340 = cljs.core.count(c__5568__auto___15337);
var G__15341 = (0);
seq__14853_15322 = G__15338;
chunk__14855_15323 = G__15339;
count__14856_15324 = G__15340;
i__14857_15325 = G__15341;
continue;
} else {
var child_15342 = cljs.core.first(seq__14853_15336__$1);
if(cljs.core.truth_(child_15342)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15342);


var G__15343 = cljs.core.next(seq__14853_15336__$1);
var G__15344 = null;
var G__15345 = (0);
var G__15346 = (0);
seq__14853_15322 = G__15343;
chunk__14855_15323 = G__15344;
count__14856_15324 = G__15345;
i__14857_15325 = G__15346;
continue;
} else {
var G__15347 = cljs.core.next(seq__14853_15336__$1);
var G__15348 = null;
var G__15349 = (0);
var G__15350 = (0);
seq__14853_15322 = G__15347;
chunk__14855_15323 = G__15348;
count__14856_15324 = G__15349;
i__14857_15325 = G__15350;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15321);
}


var G__15351 = cljs.core.next(seq__14815_15314__$1);
var G__15352 = null;
var G__15353 = (0);
var G__15354 = (0);
seq__14815_15274 = G__15351;
chunk__14816_15275 = G__15352;
count__14817_15276 = G__15353;
i__14818_15277 = G__15354;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14897 = cljs.core.seq(node);
var chunk__14898 = null;
var count__14899 = (0);
var i__14900 = (0);
while(true){
if((i__14900 < count__14899)){
var n = chunk__14898.cljs$core$IIndexed$_nth$arity$2(null,i__14900);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15355 = seq__14897;
var G__15356 = chunk__14898;
var G__15357 = count__14899;
var G__15358 = (i__14900 + (1));
seq__14897 = G__15355;
chunk__14898 = G__15356;
count__14899 = G__15357;
i__14900 = G__15358;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14897);
if(temp__5804__auto__){
var seq__14897__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14897__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14897__$1);
var G__15359 = cljs.core.chunk_rest(seq__14897__$1);
var G__15360 = c__5568__auto__;
var G__15361 = cljs.core.count(c__5568__auto__);
var G__15362 = (0);
seq__14897 = G__15359;
chunk__14898 = G__15360;
count__14899 = G__15361;
i__14900 = G__15362;
continue;
} else {
var n = cljs.core.first(seq__14897__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15363 = cljs.core.next(seq__14897__$1);
var G__15364 = null;
var G__15365 = (0);
var G__15366 = (0);
seq__14897 = G__15363;
chunk__14898 = G__15364;
count__14899 = G__15365;
i__14900 = G__15366;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14922 = arguments.length;
switch (G__14922) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14926 = arguments.length;
switch (G__14926) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14954 = arguments.length;
switch (G__14954) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15370 = arguments.length;
var i__5770__auto___15371 = (0);
while(true){
if((i__5770__auto___15371 < len__5769__auto___15370)){
args__5775__auto__.push((arguments[i__5770__auto___15371]));

var G__15372 = (i__5770__auto___15371 + (1));
i__5770__auto___15371 = G__15372;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14968_15373 = cljs.core.seq(nodes);
var chunk__14969_15374 = null;
var count__14970_15375 = (0);
var i__14971_15376 = (0);
while(true){
if((i__14971_15376 < count__14970_15375)){
var node_15377 = chunk__14969_15374.cljs$core$IIndexed$_nth$arity$2(null,i__14971_15376);
fragment.appendChild(shadow.dom._to_dom(node_15377));


var G__15378 = seq__14968_15373;
var G__15379 = chunk__14969_15374;
var G__15380 = count__14970_15375;
var G__15381 = (i__14971_15376 + (1));
seq__14968_15373 = G__15378;
chunk__14969_15374 = G__15379;
count__14970_15375 = G__15380;
i__14971_15376 = G__15381;
continue;
} else {
var temp__5804__auto___15382 = cljs.core.seq(seq__14968_15373);
if(temp__5804__auto___15382){
var seq__14968_15383__$1 = temp__5804__auto___15382;
if(cljs.core.chunked_seq_QMARK_(seq__14968_15383__$1)){
var c__5568__auto___15384 = cljs.core.chunk_first(seq__14968_15383__$1);
var G__15385 = cljs.core.chunk_rest(seq__14968_15383__$1);
var G__15386 = c__5568__auto___15384;
var G__15387 = cljs.core.count(c__5568__auto___15384);
var G__15388 = (0);
seq__14968_15373 = G__15385;
chunk__14969_15374 = G__15386;
count__14970_15375 = G__15387;
i__14971_15376 = G__15388;
continue;
} else {
var node_15389 = cljs.core.first(seq__14968_15383__$1);
fragment.appendChild(shadow.dom._to_dom(node_15389));


var G__15390 = cljs.core.next(seq__14968_15383__$1);
var G__15391 = null;
var G__15392 = (0);
var G__15393 = (0);
seq__14968_15373 = G__15390;
chunk__14969_15374 = G__15391;
count__14970_15375 = G__15392;
i__14971_15376 = G__15393;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14963){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14963));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14985_15394 = cljs.core.seq(scripts);
var chunk__14986_15395 = null;
var count__14987_15396 = (0);
var i__14988_15397 = (0);
while(true){
if((i__14988_15397 < count__14987_15396)){
var vec__14995_15398 = chunk__14986_15395.cljs$core$IIndexed$_nth$arity$2(null,i__14988_15397);
var script_tag_15399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995_15398,(0),null);
var script_body_15400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995_15398,(1),null);
eval(script_body_15400);


var G__15401 = seq__14985_15394;
var G__15402 = chunk__14986_15395;
var G__15403 = count__14987_15396;
var G__15404 = (i__14988_15397 + (1));
seq__14985_15394 = G__15401;
chunk__14986_15395 = G__15402;
count__14987_15396 = G__15403;
i__14988_15397 = G__15404;
continue;
} else {
var temp__5804__auto___15405 = cljs.core.seq(seq__14985_15394);
if(temp__5804__auto___15405){
var seq__14985_15406__$1 = temp__5804__auto___15405;
if(cljs.core.chunked_seq_QMARK_(seq__14985_15406__$1)){
var c__5568__auto___15407 = cljs.core.chunk_first(seq__14985_15406__$1);
var G__15408 = cljs.core.chunk_rest(seq__14985_15406__$1);
var G__15409 = c__5568__auto___15407;
var G__15410 = cljs.core.count(c__5568__auto___15407);
var G__15411 = (0);
seq__14985_15394 = G__15408;
chunk__14986_15395 = G__15409;
count__14987_15396 = G__15410;
i__14988_15397 = G__15411;
continue;
} else {
var vec__14998_15412 = cljs.core.first(seq__14985_15406__$1);
var script_tag_15413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14998_15412,(0),null);
var script_body_15414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14998_15412,(1),null);
eval(script_body_15414);


var G__15415 = cljs.core.next(seq__14985_15406__$1);
var G__15416 = null;
var G__15417 = (0);
var G__15418 = (0);
seq__14985_15394 = G__15415;
chunk__14986_15395 = G__15416;
count__14987_15396 = G__15417;
i__14988_15397 = G__15418;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15001){
var vec__15002 = p__15001;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15002,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15002,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15018 = arguments.length;
switch (G__15018) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15032 = cljs.core.seq(style_keys);
var chunk__15033 = null;
var count__15034 = (0);
var i__15035 = (0);
while(true){
if((i__15035 < count__15034)){
var it = chunk__15033.cljs$core$IIndexed$_nth$arity$2(null,i__15035);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15420 = seq__15032;
var G__15421 = chunk__15033;
var G__15422 = count__15034;
var G__15423 = (i__15035 + (1));
seq__15032 = G__15420;
chunk__15033 = G__15421;
count__15034 = G__15422;
i__15035 = G__15423;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15032);
if(temp__5804__auto__){
var seq__15032__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15032__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15032__$1);
var G__15424 = cljs.core.chunk_rest(seq__15032__$1);
var G__15425 = c__5568__auto__;
var G__15426 = cljs.core.count(c__5568__auto__);
var G__15427 = (0);
seq__15032 = G__15424;
chunk__15033 = G__15425;
count__15034 = G__15426;
i__15035 = G__15427;
continue;
} else {
var it = cljs.core.first(seq__15032__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15428 = cljs.core.next(seq__15032__$1);
var G__15429 = null;
var G__15430 = (0);
var G__15431 = (0);
seq__15032 = G__15428;
chunk__15033 = G__15429;
count__15034 = G__15430;
i__15035 = G__15431;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15047,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15051 = k15047;
var G__15051__$1 = (((G__15051 instanceof cljs.core.Keyword))?G__15051.fqn:null);
switch (G__15051__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15047,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15052){
var vec__15053 = p__15052;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15046){
var self__ = this;
var G__15046__$1 = this;
return (new cljs.core.RecordIter((0),G__15046__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15048,other15049){
var self__ = this;
var this15048__$1 = this;
return (((!((other15049 == null)))) && ((((this15048__$1.constructor === other15049.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15048__$1.x,other15049.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15048__$1.y,other15049.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15048__$1.__extmap,other15049.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15047){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15079 = k15047;
var G__15079__$1 = (((G__15079 instanceof cljs.core.Keyword))?G__15079.fqn:null);
switch (G__15079__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15047);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15046){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15082 = cljs.core.keyword_identical_QMARK_;
var expr__15083 = k__5352__auto__;
if(cljs.core.truth_((pred__15082.cljs$core$IFn$_invoke$arity$2 ? pred__15082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15083) : pred__15082.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15083)))){
return (new shadow.dom.Coordinate(G__15046,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15082.cljs$core$IFn$_invoke$arity$2 ? pred__15082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15083) : pred__15082.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15083)))){
return (new shadow.dom.Coordinate(self__.x,G__15046,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15046),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15046){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15046,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15050){
var extmap__5385__auto__ = (function (){var G__15109 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15050,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15050)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15109);
} else {
return G__15109;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15050),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15050),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15116,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15122 = k15116;
var G__15122__$1 = (((G__15122 instanceof cljs.core.Keyword))?G__15122.fqn:null);
switch (G__15122__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15116,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15134){
var vec__15135 = p__15134;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15135,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15135,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15115){
var self__ = this;
var G__15115__$1 = this;
return (new cljs.core.RecordIter((0),G__15115__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15117,other15118){
var self__ = this;
var this15117__$1 = this;
return (((!((other15118 == null)))) && ((((this15117__$1.constructor === other15118.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15117__$1.w,other15118.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15117__$1.h,other15118.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15117__$1.__extmap,other15118.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15116){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15138 = k15116;
var G__15138__$1 = (((G__15138 instanceof cljs.core.Keyword))?G__15138.fqn:null);
switch (G__15138__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15116);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15115){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15139 = cljs.core.keyword_identical_QMARK_;
var expr__15140 = k__5352__auto__;
if(cljs.core.truth_((pred__15139.cljs$core$IFn$_invoke$arity$2 ? pred__15139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15140) : pred__15139.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15140)))){
return (new shadow.dom.Size(G__15115,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15139.cljs$core$IFn$_invoke$arity$2 ? pred__15139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15140) : pred__15139.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15140)))){
return (new shadow.dom.Size(self__.w,G__15115,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15115),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15115){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15115,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15119){
var extmap__5385__auto__ = (function (){var G__15142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15119,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15119)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15142);
} else {
return G__15142;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15119),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15119),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__15438 = (i + (1));
var G__15439 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15438;
ret = G__15439;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15147){
var vec__15148 = p__15147;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15148,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15152 = arguments.length;
switch (G__15152) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15441 = ps;
var G__15442 = (i + (1));
el__$1 = G__15441;
i = G__15442;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15153 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15156_15443 = cljs.core.seq(props);
var chunk__15157_15444 = null;
var count__15158_15445 = (0);
var i__15159_15446 = (0);
while(true){
if((i__15159_15446 < count__15158_15445)){
var vec__15166_15447 = chunk__15157_15444.cljs$core$IIndexed$_nth$arity$2(null,i__15159_15446);
var k_15448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15166_15447,(0),null);
var v_15449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15166_15447,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15448);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15448),v_15449);


var G__15450 = seq__15156_15443;
var G__15451 = chunk__15157_15444;
var G__15452 = count__15158_15445;
var G__15453 = (i__15159_15446 + (1));
seq__15156_15443 = G__15450;
chunk__15157_15444 = G__15451;
count__15158_15445 = G__15452;
i__15159_15446 = G__15453;
continue;
} else {
var temp__5804__auto___15454 = cljs.core.seq(seq__15156_15443);
if(temp__5804__auto___15454){
var seq__15156_15455__$1 = temp__5804__auto___15454;
if(cljs.core.chunked_seq_QMARK_(seq__15156_15455__$1)){
var c__5568__auto___15456 = cljs.core.chunk_first(seq__15156_15455__$1);
var G__15457 = cljs.core.chunk_rest(seq__15156_15455__$1);
var G__15458 = c__5568__auto___15456;
var G__15459 = cljs.core.count(c__5568__auto___15456);
var G__15460 = (0);
seq__15156_15443 = G__15457;
chunk__15157_15444 = G__15458;
count__15158_15445 = G__15459;
i__15159_15446 = G__15460;
continue;
} else {
var vec__15169_15461 = cljs.core.first(seq__15156_15455__$1);
var k_15462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169_15461,(0),null);
var v_15463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169_15461,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15462);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15462),v_15463);


var G__15464 = cljs.core.next(seq__15156_15455__$1);
var G__15465 = null;
var G__15466 = (0);
var G__15467 = (0);
seq__15156_15443 = G__15464;
chunk__15157_15444 = G__15465;
count__15158_15445 = G__15466;
i__15159_15446 = G__15467;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15173 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15173,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15173,(1),null);
var seq__15176_15468 = cljs.core.seq(node_children);
var chunk__15178_15469 = null;
var count__15179_15470 = (0);
var i__15180_15471 = (0);
while(true){
if((i__15180_15471 < count__15179_15470)){
var child_struct_15472 = chunk__15178_15469.cljs$core$IIndexed$_nth$arity$2(null,i__15180_15471);
if((!((child_struct_15472 == null)))){
if(typeof child_struct_15472 === 'string'){
var text_15473 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15473),child_struct_15472].join(''));
} else {
var children_15474 = shadow.dom.svg_node(child_struct_15472);
if(cljs.core.seq_QMARK_(children_15474)){
var seq__15194_15475 = cljs.core.seq(children_15474);
var chunk__15196_15476 = null;
var count__15197_15477 = (0);
var i__15198_15478 = (0);
while(true){
if((i__15198_15478 < count__15197_15477)){
var child_15479 = chunk__15196_15476.cljs$core$IIndexed$_nth$arity$2(null,i__15198_15478);
if(cljs.core.truth_(child_15479)){
node.appendChild(child_15479);


var G__15480 = seq__15194_15475;
var G__15481 = chunk__15196_15476;
var G__15482 = count__15197_15477;
var G__15483 = (i__15198_15478 + (1));
seq__15194_15475 = G__15480;
chunk__15196_15476 = G__15481;
count__15197_15477 = G__15482;
i__15198_15478 = G__15483;
continue;
} else {
var G__15484 = seq__15194_15475;
var G__15485 = chunk__15196_15476;
var G__15486 = count__15197_15477;
var G__15487 = (i__15198_15478 + (1));
seq__15194_15475 = G__15484;
chunk__15196_15476 = G__15485;
count__15197_15477 = G__15486;
i__15198_15478 = G__15487;
continue;
}
} else {
var temp__5804__auto___15488 = cljs.core.seq(seq__15194_15475);
if(temp__5804__auto___15488){
var seq__15194_15489__$1 = temp__5804__auto___15488;
if(cljs.core.chunked_seq_QMARK_(seq__15194_15489__$1)){
var c__5568__auto___15490 = cljs.core.chunk_first(seq__15194_15489__$1);
var G__15491 = cljs.core.chunk_rest(seq__15194_15489__$1);
var G__15492 = c__5568__auto___15490;
var G__15493 = cljs.core.count(c__5568__auto___15490);
var G__15494 = (0);
seq__15194_15475 = G__15491;
chunk__15196_15476 = G__15492;
count__15197_15477 = G__15493;
i__15198_15478 = G__15494;
continue;
} else {
var child_15495 = cljs.core.first(seq__15194_15489__$1);
if(cljs.core.truth_(child_15495)){
node.appendChild(child_15495);


var G__15496 = cljs.core.next(seq__15194_15489__$1);
var G__15497 = null;
var G__15498 = (0);
var G__15499 = (0);
seq__15194_15475 = G__15496;
chunk__15196_15476 = G__15497;
count__15197_15477 = G__15498;
i__15198_15478 = G__15499;
continue;
} else {
var G__15500 = cljs.core.next(seq__15194_15489__$1);
var G__15501 = null;
var G__15502 = (0);
var G__15503 = (0);
seq__15194_15475 = G__15500;
chunk__15196_15476 = G__15501;
count__15197_15477 = G__15502;
i__15198_15478 = G__15503;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15474);
}
}


var G__15504 = seq__15176_15468;
var G__15505 = chunk__15178_15469;
var G__15506 = count__15179_15470;
var G__15507 = (i__15180_15471 + (1));
seq__15176_15468 = G__15504;
chunk__15178_15469 = G__15505;
count__15179_15470 = G__15506;
i__15180_15471 = G__15507;
continue;
} else {
var G__15508 = seq__15176_15468;
var G__15509 = chunk__15178_15469;
var G__15510 = count__15179_15470;
var G__15511 = (i__15180_15471 + (1));
seq__15176_15468 = G__15508;
chunk__15178_15469 = G__15509;
count__15179_15470 = G__15510;
i__15180_15471 = G__15511;
continue;
}
} else {
var temp__5804__auto___15513 = cljs.core.seq(seq__15176_15468);
if(temp__5804__auto___15513){
var seq__15176_15514__$1 = temp__5804__auto___15513;
if(cljs.core.chunked_seq_QMARK_(seq__15176_15514__$1)){
var c__5568__auto___15515 = cljs.core.chunk_first(seq__15176_15514__$1);
var G__15516 = cljs.core.chunk_rest(seq__15176_15514__$1);
var G__15517 = c__5568__auto___15515;
var G__15518 = cljs.core.count(c__5568__auto___15515);
var G__15519 = (0);
seq__15176_15468 = G__15516;
chunk__15178_15469 = G__15517;
count__15179_15470 = G__15518;
i__15180_15471 = G__15519;
continue;
} else {
var child_struct_15520 = cljs.core.first(seq__15176_15514__$1);
if((!((child_struct_15520 == null)))){
if(typeof child_struct_15520 === 'string'){
var text_15521 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15521),child_struct_15520].join(''));
} else {
var children_15522 = shadow.dom.svg_node(child_struct_15520);
if(cljs.core.seq_QMARK_(children_15522)){
var seq__15200_15523 = cljs.core.seq(children_15522);
var chunk__15202_15524 = null;
var count__15203_15525 = (0);
var i__15204_15526 = (0);
while(true){
if((i__15204_15526 < count__15203_15525)){
var child_15527 = chunk__15202_15524.cljs$core$IIndexed$_nth$arity$2(null,i__15204_15526);
if(cljs.core.truth_(child_15527)){
node.appendChild(child_15527);


var G__15528 = seq__15200_15523;
var G__15529 = chunk__15202_15524;
var G__15530 = count__15203_15525;
var G__15531 = (i__15204_15526 + (1));
seq__15200_15523 = G__15528;
chunk__15202_15524 = G__15529;
count__15203_15525 = G__15530;
i__15204_15526 = G__15531;
continue;
} else {
var G__15532 = seq__15200_15523;
var G__15533 = chunk__15202_15524;
var G__15534 = count__15203_15525;
var G__15535 = (i__15204_15526 + (1));
seq__15200_15523 = G__15532;
chunk__15202_15524 = G__15533;
count__15203_15525 = G__15534;
i__15204_15526 = G__15535;
continue;
}
} else {
var temp__5804__auto___15536__$1 = cljs.core.seq(seq__15200_15523);
if(temp__5804__auto___15536__$1){
var seq__15200_15537__$1 = temp__5804__auto___15536__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15200_15537__$1)){
var c__5568__auto___15538 = cljs.core.chunk_first(seq__15200_15537__$1);
var G__15539 = cljs.core.chunk_rest(seq__15200_15537__$1);
var G__15540 = c__5568__auto___15538;
var G__15541 = cljs.core.count(c__5568__auto___15538);
var G__15542 = (0);
seq__15200_15523 = G__15539;
chunk__15202_15524 = G__15540;
count__15203_15525 = G__15541;
i__15204_15526 = G__15542;
continue;
} else {
var child_15543 = cljs.core.first(seq__15200_15537__$1);
if(cljs.core.truth_(child_15543)){
node.appendChild(child_15543);


var G__15544 = cljs.core.next(seq__15200_15537__$1);
var G__15545 = null;
var G__15546 = (0);
var G__15547 = (0);
seq__15200_15523 = G__15544;
chunk__15202_15524 = G__15545;
count__15203_15525 = G__15546;
i__15204_15526 = G__15547;
continue;
} else {
var G__15548 = cljs.core.next(seq__15200_15537__$1);
var G__15549 = null;
var G__15550 = (0);
var G__15551 = (0);
seq__15200_15523 = G__15548;
chunk__15202_15524 = G__15549;
count__15203_15525 = G__15550;
i__15204_15526 = G__15551;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15522);
}
}


var G__15552 = cljs.core.next(seq__15176_15514__$1);
var G__15553 = null;
var G__15554 = (0);
var G__15555 = (0);
seq__15176_15468 = G__15552;
chunk__15178_15469 = G__15553;
count__15179_15470 = G__15554;
i__15180_15471 = G__15555;
continue;
} else {
var G__15557 = cljs.core.next(seq__15176_15514__$1);
var G__15558 = null;
var G__15559 = (0);
var G__15560 = (0);
seq__15176_15468 = G__15557;
chunk__15178_15469 = G__15558;
count__15179_15470 = G__15559;
i__15180_15471 = G__15560;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15561 = arguments.length;
var i__5770__auto___15562 = (0);
while(true){
if((i__5770__auto___15562 < len__5769__auto___15561)){
args__5775__auto__.push((arguments[i__5770__auto___15562]));

var G__15563 = (i__5770__auto___15562 + (1));
i__5770__auto___15562 = G__15563;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15206){
var G__15207 = cljs.core.first(seq15206);
var seq15206__$1 = cljs.core.next(seq15206);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15207,seq15206__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__15209 = arguments.length;
switch (G__15209) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__12241__auto___15565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_15214){
var state_val_15215 = (state_15214[(1)]);
if((state_val_15215 === (1))){
var state_15214__$1 = state_15214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15214__$1,(2),once_or_cleanup);
} else {
if((state_val_15215 === (2))){
var inst_15211 = (state_15214[(2)]);
var inst_15212 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_15214__$1 = (function (){var statearr_15216 = state_15214;
(statearr_15216[(7)] = inst_15211);

return statearr_15216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15214__$1,inst_15212);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__12159__auto__ = null;
var shadow$dom$state_machine__12159__auto____0 = (function (){
var statearr_15217 = [null,null,null,null,null,null,null,null];
(statearr_15217[(0)] = shadow$dom$state_machine__12159__auto__);

(statearr_15217[(1)] = (1));

return statearr_15217;
});
var shadow$dom$state_machine__12159__auto____1 = (function (state_15214){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_15214);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e15218){var ex__12162__auto__ = e15218;
var statearr_15219_15566 = state_15214;
(statearr_15219_15566[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_15214[(4)]))){
var statearr_15220_15567 = state_15214;
(statearr_15220_15567[(1)] = cljs.core.first((state_15214[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15568 = state_15214;
state_15214 = G__15568;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
shadow$dom$state_machine__12159__auto__ = function(state_15214){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__12159__auto____0.call(this);
case 1:
return shadow$dom$state_machine__12159__auto____1.call(this,state_15214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__12159__auto____0;
shadow$dom$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__12159__auto____1;
return shadow$dom$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_15221 = f__12242__auto__();
(statearr_15221[(6)] = c__12241__auto___15565);

return statearr_15221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
