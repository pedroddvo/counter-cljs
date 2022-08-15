goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__17601,p__17602){
var map__17603 = p__17601;
var map__17603__$1 = cljs.core.__destructure_map(map__17603);
var svc = map__17603__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17603__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17603__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17603__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17604 = p__17602;
var map__17604__$1 = cljs.core.__destructure_map(map__17604);
var msg = map__17604__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17604__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17604__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17604__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17604__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__17605,p__17606){
var map__17607 = p__17605;
var map__17607__$1 = cljs.core.__destructure_map(map__17607);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17607__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__17608 = p__17606;
var map__17608__$1 = cljs.core.__destructure_map(map__17608);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17608__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__17609,p__17610){
var map__17611 = p__17609;
var map__17611__$1 = cljs.core.__destructure_map(map__17611);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17611__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17611__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17612 = p__17610;
var map__17612__$1 = cljs.core.__destructure_map(map__17612);
var msg = map__17612__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17612__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__17613,tid){
var map__17614 = p__17613;
var map__17614__$1 = cljs.core.__destructure_map(map__17614);
var svc = map__17614__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17614__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__17619 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__17620 = null;
var count__17621 = (0);
var i__17622 = (0);
while(true){
if((i__17622 < count__17621)){
var vec__17632 = chunk__17620.cljs$core$IIndexed$_nth$arity$2(null,i__17622);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17632,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17632,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17658 = seq__17619;
var G__17659 = chunk__17620;
var G__17660 = count__17621;
var G__17661 = (i__17622 + (1));
seq__17619 = G__17658;
chunk__17620 = G__17659;
count__17621 = G__17660;
i__17622 = G__17661;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17619);
if(temp__5804__auto__){
var seq__17619__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17619__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17619__$1);
var G__17662 = cljs.core.chunk_rest(seq__17619__$1);
var G__17663 = c__5568__auto__;
var G__17664 = cljs.core.count(c__5568__auto__);
var G__17665 = (0);
seq__17619 = G__17662;
chunk__17620 = G__17663;
count__17621 = G__17664;
i__17622 = G__17665;
continue;
} else {
var vec__17639 = cljs.core.first(seq__17619__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17639,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17639,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17666 = cljs.core.next(seq__17619__$1);
var G__17667 = null;
var G__17668 = (0);
var G__17669 = (0);
seq__17619 = G__17666;
chunk__17620 = G__17667;
count__17621 = G__17668;
i__17622 = G__17669;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__17615_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__17615_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__17616_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__17616_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__17617_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__17617_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__17618_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__17618_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__17647){
var map__17649 = p__17647;
var map__17649__$1 = cljs.core.__destructure_map(map__17649);
var svc = map__17649__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17649__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17649__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
