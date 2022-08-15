goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__8736 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8737 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8737);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__8740 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8741 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8741);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8740);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8736);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__8747 = arguments.length;
switch (G__8747) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__8748 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8748,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8748,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__8754_8838 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__8755_8839 = null;
var count__8756_8840 = (0);
var i__8757_8841 = (0);
while(true){
if((i__8757_8841 < count__8756_8840)){
var vec__8779_8842 = chunk__8755_8839.cljs$core$IIndexed$_nth$arity$2(null,i__8757_8841);
var container_8843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8779_8842,(0),null);
var comp_8844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8779_8842,(1),null);
reagent.dom.re_render_component(comp_8844,container_8843);


var G__8845 = seq__8754_8838;
var G__8846 = chunk__8755_8839;
var G__8847 = count__8756_8840;
var G__8848 = (i__8757_8841 + (1));
seq__8754_8838 = G__8845;
chunk__8755_8839 = G__8846;
count__8756_8840 = G__8847;
i__8757_8841 = G__8848;
continue;
} else {
var temp__5804__auto___8849 = cljs.core.seq(seq__8754_8838);
if(temp__5804__auto___8849){
var seq__8754_8850__$1 = temp__5804__auto___8849;
if(cljs.core.chunked_seq_QMARK_(seq__8754_8850__$1)){
var c__5568__auto___8851 = cljs.core.chunk_first(seq__8754_8850__$1);
var G__8852 = cljs.core.chunk_rest(seq__8754_8850__$1);
var G__8853 = c__5568__auto___8851;
var G__8854 = cljs.core.count(c__5568__auto___8851);
var G__8855 = (0);
seq__8754_8838 = G__8852;
chunk__8755_8839 = G__8853;
count__8756_8840 = G__8854;
i__8757_8841 = G__8855;
continue;
} else {
var vec__8782_8856 = cljs.core.first(seq__8754_8850__$1);
var container_8857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8782_8856,(0),null);
var comp_8858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8782_8856,(1),null);
reagent.dom.re_render_component(comp_8858,container_8857);


var G__8859 = cljs.core.next(seq__8754_8850__$1);
var G__8860 = null;
var G__8861 = (0);
var G__8862 = (0);
seq__8754_8838 = G__8859;
chunk__8755_8839 = G__8860;
count__8756_8840 = G__8861;
i__8757_8841 = G__8862;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
