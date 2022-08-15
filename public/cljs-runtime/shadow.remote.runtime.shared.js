goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__15905,res){
var map__15906 = p__15905;
var map__15906__$1 = cljs.core.__destructure_map(map__15906);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15906__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15906__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__15907 = res;
var G__15907__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15907,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__15907);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15907__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__15907__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__15909 = arguments.length;
switch (G__15909) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__15910,msg,handlers,timeout_after_ms){
var map__15911 = p__15910;
var map__15911__$1 = cljs.core.__destructure_map(map__15911);
var runtime = map__15911__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15911__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16020 = arguments.length;
var i__5770__auto___16021 = (0);
while(true){
if((i__5770__auto___16021 < len__5769__auto___16020)){
args__5775__auto__.push((arguments[i__5770__auto___16021]));

var G__16022 = (i__5770__auto___16021 + (1));
i__5770__auto___16021 = G__16022;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15917,ev,args){
var map__15918 = p__15917;
var map__15918__$1 = cljs.core.__destructure_map(map__15918);
var runtime = map__15918__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15918__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__15919 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15922 = null;
var count__15923 = (0);
var i__15924 = (0);
while(true){
if((i__15924 < count__15923)){
var ext = chunk__15922.cljs$core$IIndexed$_nth$arity$2(null,i__15924);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16023 = seq__15919;
var G__16024 = chunk__15922;
var G__16025 = count__15923;
var G__16026 = (i__15924 + (1));
seq__15919 = G__16023;
chunk__15922 = G__16024;
count__15923 = G__16025;
i__15924 = G__16026;
continue;
} else {
var G__16027 = seq__15919;
var G__16028 = chunk__15922;
var G__16029 = count__15923;
var G__16030 = (i__15924 + (1));
seq__15919 = G__16027;
chunk__15922 = G__16028;
count__15923 = G__16029;
i__15924 = G__16030;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15919);
if(temp__5804__auto__){
var seq__15919__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15919__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15919__$1);
var G__16031 = cljs.core.chunk_rest(seq__15919__$1);
var G__16032 = c__5568__auto__;
var G__16033 = cljs.core.count(c__5568__auto__);
var G__16034 = (0);
seq__15919 = G__16031;
chunk__15922 = G__16032;
count__15923 = G__16033;
i__15924 = G__16034;
continue;
} else {
var ext = cljs.core.first(seq__15919__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16035 = cljs.core.next(seq__15919__$1);
var G__16036 = null;
var G__16037 = (0);
var G__16038 = (0);
seq__15919 = G__16035;
chunk__15922 = G__16036;
count__15923 = G__16037;
i__15924 = G__16038;
continue;
} else {
var G__16039 = cljs.core.next(seq__15919__$1);
var G__16040 = null;
var G__16041 = (0);
var G__16042 = (0);
seq__15919 = G__16039;
chunk__15922 = G__16040;
count__15923 = G__16041;
i__15924 = G__16042;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq15912){
var G__15913 = cljs.core.first(seq15912);
var seq15912__$1 = cljs.core.next(seq15912);
var G__15914 = cljs.core.first(seq15912__$1);
var seq15912__$2 = cljs.core.next(seq15912__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15913,G__15914,seq15912__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__15927,p__15928){
var map__15929 = p__15927;
var map__15929__$1 = cljs.core.__destructure_map(map__15929);
var runtime = map__15929__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15929__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15930 = p__15928;
var map__15930__$1 = cljs.core.__destructure_map(map__15930);
var msg = map__15930__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__15931 = cljs.core.deref(state_ref);
var map__15931__$1 = cljs.core.__destructure_map(map__15931);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15931__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15931__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__15932){
var map__15933 = p__15932;
var map__15933__$1 = cljs.core.__destructure_map(map__15933);
var runtime = map__15933__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15933__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__15934,msg){
var map__15935 = p__15934;
var map__15935__$1 = cljs.core.__destructure_map(map__15935);
var runtime = map__15935__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15935__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__15936,key,p__15937){
var map__15938 = p__15936;
var map__15938__$1 = cljs.core.__destructure_map(map__15938);
var state = map__15938__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15938__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__15939 = p__15937;
var map__15939__$1 = cljs.core.__destructure_map(map__15939);
var spec = map__15939__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15939__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__15940,key,spec){
var map__15941 = p__15940;
var map__15941__$1 = cljs.core.__destructure_map(map__15941);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15941__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__15942_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__15942_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__15943_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__15943_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__15944_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__15944_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__15945_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__15945_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__15946_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__15946_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__15947,key){
var map__15948 = p__15947;
var map__15948__$1 = cljs.core.__destructure_map(map__15948);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15948__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__15951,msg){
var map__15952 = p__15951;
var map__15952__$1 = cljs.core.__destructure_map(map__15952);
var runtime = map__15952__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15952__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__15955,p__15956){
var map__15957 = p__15955;
var map__15957__$1 = cljs.core.__destructure_map(map__15957);
var runtime = map__15957__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15957__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15958 = p__15956;
var map__15958__$1 = cljs.core.__destructure_map(map__15958);
var msg = map__15958__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15958__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15958__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__15961 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15963 = null;
var count__15964 = (0);
var i__15965 = (0);
while(true){
if((i__15965 < count__15964)){
var map__15991 = chunk__15963.cljs$core$IIndexed$_nth$arity$2(null,i__15965);
var map__15991__$1 = cljs.core.__destructure_map(map__15991);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15991__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16043 = seq__15961;
var G__16044 = chunk__15963;
var G__16045 = count__15964;
var G__16046 = (i__15965 + (1));
seq__15961 = G__16043;
chunk__15963 = G__16044;
count__15964 = G__16045;
i__15965 = G__16046;
continue;
} else {
var G__16047 = seq__15961;
var G__16048 = chunk__15963;
var G__16049 = count__15964;
var G__16050 = (i__15965 + (1));
seq__15961 = G__16047;
chunk__15963 = G__16048;
count__15964 = G__16049;
i__15965 = G__16050;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15961);
if(temp__5804__auto__){
var seq__15961__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15961__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15961__$1);
var G__16051 = cljs.core.chunk_rest(seq__15961__$1);
var G__16052 = c__5568__auto__;
var G__16053 = cljs.core.count(c__5568__auto__);
var G__16054 = (0);
seq__15961 = G__16051;
chunk__15963 = G__16052;
count__15964 = G__16053;
i__15965 = G__16054;
continue;
} else {
var map__16011 = cljs.core.first(seq__15961__$1);
var map__16011__$1 = cljs.core.__destructure_map(map__16011);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16011__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16055 = cljs.core.next(seq__15961__$1);
var G__16056 = null;
var G__16057 = (0);
var G__16058 = (0);
seq__15961 = G__16055;
chunk__15963 = G__16056;
count__15964 = G__16057;
i__15965 = G__16058;
continue;
} else {
var G__16059 = cljs.core.next(seq__15961__$1);
var G__16060 = null;
var G__16061 = (0);
var G__16062 = (0);
seq__15961 = G__16059;
chunk__15963 = G__16060;
count__15964 = G__16061;
i__15965 = G__16062;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
