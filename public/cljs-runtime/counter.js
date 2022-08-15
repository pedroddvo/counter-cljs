goog.provide('counter');
counter.dispatch_ticker = (function counter$dispatch_ticker(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter-increment","counter-increment",-181725540)], null));
});
counter.ticker = (function counter$ticker(time){
counter.dispatch_ticker();

return setTimeout((function (){
var G__12758 = (time / 1.05);
return (counter.ticker.cljs$core$IFn$_invoke$arity$1 ? counter.ticker.cljs$core$IFn$_invoke$arity$1(G__12758) : counter.ticker.call(null,G__12758));
}),time);
});
counter.ticker((1000));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"increase-rate","increase-rate",-1360038184),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"rate","rate",-1428659698),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-increment","counter-increment",-181725540),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"counter","counter",804008177),(function (p1__12759_SHARP_){
return (p1__12759_SHARP_ + (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rate","rate",-1428659698)) : db.call(null,new cljs.core.Keyword(null,"rate","rate",-1428659698))));
}));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return ["Money: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"counter","counter",804008177),(0))),"$"].join('');
})], 0));
counter.counter_view = (function counter$counter_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"increase-rate","increase-rate",-1360038184)], null));
})], null),"+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",804008177)], null)))], null)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.counter_view], null),document.getElementById("app"));

//# sourceMappingURL=counter.js.map
