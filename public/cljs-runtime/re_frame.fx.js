goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__12382 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12383 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12383);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___12500 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___12500)){
var new_db_12501 = temp__5804__auto___12500;
var fexpr__12386_12502 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__12386_12502.cljs$core$IFn$_invoke$arity$1 ? fexpr__12386_12502.cljs$core$IFn$_invoke$arity$1(new_db_12501) : fexpr__12386_12502.call(null,new_db_12501));
} else {
}

var seq__12387 = cljs.core.seq(effects_without_db);
var chunk__12388 = null;
var count__12389 = (0);
var i__12390 = (0);
while(true){
if((i__12390 < count__12389)){
var vec__12403 = chunk__12388.cljs$core$IIndexed$_nth$arity$2(null,i__12390);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12403,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12403,(1),null);
var temp__5802__auto___12503 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12503)){
var effect_fn_12504 = temp__5802__auto___12503;
(effect_fn_12504.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12504.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12504.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12509 = seq__12387;
var G__12510 = chunk__12388;
var G__12511 = count__12389;
var G__12512 = (i__12390 + (1));
seq__12387 = G__12509;
chunk__12388 = G__12510;
count__12389 = G__12511;
i__12390 = G__12512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12387);
if(temp__5804__auto__){
var seq__12387__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12387__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12387__$1);
var G__12513 = cljs.core.chunk_rest(seq__12387__$1);
var G__12514 = c__5568__auto__;
var G__12515 = cljs.core.count(c__5568__auto__);
var G__12516 = (0);
seq__12387 = G__12513;
chunk__12388 = G__12514;
count__12389 = G__12515;
i__12390 = G__12516;
continue;
} else {
var vec__12407 = cljs.core.first(seq__12387__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12407,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12407,(1),null);
var temp__5802__auto___12518 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12518)){
var effect_fn_12519 = temp__5802__auto___12518;
(effect_fn_12519.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12519.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12519.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12521 = cljs.core.next(seq__12387__$1);
var G__12522 = null;
var G__12523 = (0);
var G__12524 = (0);
seq__12387 = G__12521;
chunk__12388 = G__12522;
count__12389 = G__12523;
i__12390 = G__12524;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12079__auto___12525 = re_frame.interop.now();
var duration__12080__auto___12526 = (end__12079__auto___12525 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12080__auto___12526,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12079__auto___12525);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12382);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___12527 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___12527)){
var new_db_12528 = temp__5804__auto___12527;
var fexpr__12411_12529 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__12411_12529.cljs$core$IFn$_invoke$arity$1 ? fexpr__12411_12529.cljs$core$IFn$_invoke$arity$1(new_db_12528) : fexpr__12411_12529.call(null,new_db_12528));
} else {
}

var seq__12412 = cljs.core.seq(effects_without_db);
var chunk__12413 = null;
var count__12414 = (0);
var i__12415 = (0);
while(true){
if((i__12415 < count__12414)){
var vec__12423 = chunk__12413.cljs$core$IIndexed$_nth$arity$2(null,i__12415);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12423,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12423,(1),null);
var temp__5802__auto___12530 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12530)){
var effect_fn_12531 = temp__5802__auto___12530;
(effect_fn_12531.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12531.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12531.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12532 = seq__12412;
var G__12533 = chunk__12413;
var G__12534 = count__12414;
var G__12535 = (i__12415 + (1));
seq__12412 = G__12532;
chunk__12413 = G__12533;
count__12414 = G__12534;
i__12415 = G__12535;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12412);
if(temp__5804__auto__){
var seq__12412__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12412__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12412__$1);
var G__12536 = cljs.core.chunk_rest(seq__12412__$1);
var G__12537 = c__5568__auto__;
var G__12538 = cljs.core.count(c__5568__auto__);
var G__12539 = (0);
seq__12412 = G__12536;
chunk__12413 = G__12537;
count__12414 = G__12538;
i__12415 = G__12539;
continue;
} else {
var vec__12430 = cljs.core.first(seq__12412__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(1),null);
var temp__5802__auto___12541 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12541)){
var effect_fn_12543 = temp__5802__auto___12541;
(effect_fn_12543.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12543.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12543.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12544 = cljs.core.next(seq__12412__$1);
var G__12545 = null;
var G__12546 = (0);
var G__12547 = (0);
seq__12412 = G__12544;
chunk__12413 = G__12545;
count__12414 = G__12546;
i__12415 = G__12547;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__12433){
var map__12434 = p__12433;
var map__12434__$1 = cljs.core.__destructure_map(map__12434);
var effect = map__12434__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12434__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12434__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__12447 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12448 = null;
var count__12449 = (0);
var i__12450 = (0);
while(true){
if((i__12450 < count__12449)){
var effect = chunk__12448.cljs$core$IIndexed$_nth$arity$2(null,i__12450);
re_frame.fx.dispatch_later(effect);


var G__12548 = seq__12447;
var G__12549 = chunk__12448;
var G__12550 = count__12449;
var G__12551 = (i__12450 + (1));
seq__12447 = G__12548;
chunk__12448 = G__12549;
count__12449 = G__12550;
i__12450 = G__12551;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12447);
if(temp__5804__auto__){
var seq__12447__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12447__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12447__$1);
var G__12552 = cljs.core.chunk_rest(seq__12447__$1);
var G__12553 = c__5568__auto__;
var G__12554 = cljs.core.count(c__5568__auto__);
var G__12555 = (0);
seq__12447 = G__12552;
chunk__12448 = G__12553;
count__12449 = G__12554;
i__12450 = G__12555;
continue;
} else {
var effect = cljs.core.first(seq__12447__$1);
re_frame.fx.dispatch_later(effect);


var G__12556 = cljs.core.next(seq__12447__$1);
var G__12557 = null;
var G__12558 = (0);
var G__12559 = (0);
seq__12447 = G__12556;
chunk__12448 = G__12557;
count__12449 = G__12558;
i__12450 = G__12559;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__12454 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__12455 = null;
var count__12456 = (0);
var i__12457 = (0);
while(true){
if((i__12457 < count__12456)){
var vec__12477 = chunk__12455.cljs$core$IIndexed$_nth$arity$2(null,i__12457);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12477,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12477,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___12560 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12560)){
var effect_fn_12561 = temp__5802__auto___12560;
(effect_fn_12561.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12561.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12561.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__12562 = seq__12454;
var G__12563 = chunk__12455;
var G__12564 = count__12456;
var G__12565 = (i__12457 + (1));
seq__12454 = G__12562;
chunk__12455 = G__12563;
count__12456 = G__12564;
i__12457 = G__12565;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12454);
if(temp__5804__auto__){
var seq__12454__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12454__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12454__$1);
var G__12566 = cljs.core.chunk_rest(seq__12454__$1);
var G__12567 = c__5568__auto__;
var G__12568 = cljs.core.count(c__5568__auto__);
var G__12569 = (0);
seq__12454 = G__12566;
chunk__12455 = G__12567;
count__12456 = G__12568;
i__12457 = G__12569;
continue;
} else {
var vec__12480 = cljs.core.first(seq__12454__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12480,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12480,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___12570 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12570)){
var effect_fn_12571 = temp__5802__auto___12570;
(effect_fn_12571.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12571.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12571.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__12572 = cljs.core.next(seq__12454__$1);
var G__12573 = null;
var G__12574 = (0);
var G__12575 = (0);
seq__12454 = G__12572;
chunk__12455 = G__12573;
count__12456 = G__12574;
i__12457 = G__12575;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__12486 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12487 = null;
var count__12488 = (0);
var i__12489 = (0);
while(true){
if((i__12489 < count__12488)){
var event = chunk__12487.cljs$core$IIndexed$_nth$arity$2(null,i__12489);
re_frame.router.dispatch(event);


var G__12576 = seq__12486;
var G__12577 = chunk__12487;
var G__12578 = count__12488;
var G__12579 = (i__12489 + (1));
seq__12486 = G__12576;
chunk__12487 = G__12577;
count__12488 = G__12578;
i__12489 = G__12579;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12486);
if(temp__5804__auto__){
var seq__12486__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12486__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12486__$1);
var G__12580 = cljs.core.chunk_rest(seq__12486__$1);
var G__12581 = c__5568__auto__;
var G__12582 = cljs.core.count(c__5568__auto__);
var G__12583 = (0);
seq__12486 = G__12580;
chunk__12487 = G__12581;
count__12488 = G__12582;
i__12489 = G__12583;
continue;
} else {
var event = cljs.core.first(seq__12486__$1);
re_frame.router.dispatch(event);


var G__12584 = cljs.core.next(seq__12486__$1);
var G__12585 = null;
var G__12586 = (0);
var G__12587 = (0);
seq__12486 = G__12584;
chunk__12487 = G__12585;
count__12488 = G__12586;
i__12489 = G__12587;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__12490 = cljs.core.seq(value);
var chunk__12491 = null;
var count__12492 = (0);
var i__12493 = (0);
while(true){
if((i__12493 < count__12492)){
var event = chunk__12491.cljs$core$IIndexed$_nth$arity$2(null,i__12493);
clear_event(event);


var G__12588 = seq__12490;
var G__12589 = chunk__12491;
var G__12590 = count__12492;
var G__12591 = (i__12493 + (1));
seq__12490 = G__12588;
chunk__12491 = G__12589;
count__12492 = G__12590;
i__12493 = G__12591;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12490);
if(temp__5804__auto__){
var seq__12490__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12490__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12490__$1);
var G__12592 = cljs.core.chunk_rest(seq__12490__$1);
var G__12593 = c__5568__auto__;
var G__12594 = cljs.core.count(c__5568__auto__);
var G__12595 = (0);
seq__12490 = G__12592;
chunk__12491 = G__12593;
count__12492 = G__12594;
i__12493 = G__12595;
continue;
} else {
var event = cljs.core.first(seq__12490__$1);
clear_event(event);


var G__12596 = cljs.core.next(seq__12490__$1);
var G__12597 = null;
var G__12598 = (0);
var G__12599 = (0);
seq__12490 = G__12596;
chunk__12491 = G__12597;
count__12492 = G__12598;
i__12493 = G__12599;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
