goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12314 = arguments.length;
switch (G__12314) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12315 = (function (f,blockable,meta12316){
this.f = f;
this.blockable = blockable;
this.meta12316 = meta12316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12317,meta12316__$1){
var self__ = this;
var _12317__$1 = this;
return (new cljs.core.async.t_cljs$core$async12315(self__.f,self__.blockable,meta12316__$1));
}));

(cljs.core.async.t_cljs$core$async12315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12317){
var self__ = this;
var _12317__$1 = this;
return self__.meta12316;
}));

(cljs.core.async.t_cljs$core$async12315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12316","meta12316",-164476159,null)], null);
}));

(cljs.core.async.t_cljs$core$async12315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12315");

(cljs.core.async.t_cljs$core$async12315.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12315.
 */
cljs.core.async.__GT_t_cljs$core$async12315 = (function cljs$core$async$__GT_t_cljs$core$async12315(f__$1,blockable__$1,meta12316){
return (new cljs.core.async.t_cljs$core$async12315(f__$1,blockable__$1,meta12316));
});

}

return (new cljs.core.async.t_cljs$core$async12315(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12348 = arguments.length;
switch (G__12348) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12351 = arguments.length;
switch (G__12351) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12371 = arguments.length;
switch (G__12371) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14518 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14518) : fn1.call(null,val_14518));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14518) : fn1.call(null,val_14518));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12376 = arguments.length;
switch (G__12376) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___14522 = n;
var x_14523 = (0);
while(true){
if((x_14523 < n__5636__auto___14522)){
(a[x_14523] = x_14523);

var G__14524 = (x_14523 + (1));
x_14523 = G__14524;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12390 = (function (flag,meta12391){
this.flag = flag;
this.meta12391 = meta12391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12392,meta12391__$1){
var self__ = this;
var _12392__$1 = this;
return (new cljs.core.async.t_cljs$core$async12390(self__.flag,meta12391__$1));
}));

(cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12392){
var self__ = this;
var _12392__$1 = this;
return self__.meta12391;
}));

(cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12391","meta12391",817827959,null)], null);
}));

(cljs.core.async.t_cljs$core$async12390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12390");

(cljs.core.async.t_cljs$core$async12390.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12390.
 */
cljs.core.async.__GT_t_cljs$core$async12390 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12390(flag__$1,meta12391){
return (new cljs.core.async.t_cljs$core$async12390(flag__$1,meta12391));
});

}

return (new cljs.core.async.t_cljs$core$async12390(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12393 = (function (flag,cb,meta12394){
this.flag = flag;
this.cb = cb;
this.meta12394 = meta12394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12395,meta12394__$1){
var self__ = this;
var _12395__$1 = this;
return (new cljs.core.async.t_cljs$core$async12393(self__.flag,self__.cb,meta12394__$1));
}));

(cljs.core.async.t_cljs$core$async12393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12395){
var self__ = this;
var _12395__$1 = this;
return self__.meta12394;
}));

(cljs.core.async.t_cljs$core$async12393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12394","meta12394",-376300165,null)], null);
}));

(cljs.core.async.t_cljs$core$async12393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12393");

(cljs.core.async.t_cljs$core$async12393.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12393.
 */
cljs.core.async.__GT_t_cljs$core$async12393 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12393(flag__$1,cb__$1,meta12394){
return (new cljs.core.async.t_cljs$core$async12393(flag__$1,cb__$1,meta12394));
});

}

return (new cljs.core.async.t_cljs$core$async12393(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12409_SHARP_){
var G__12420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12409_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12420) : fret.call(null,G__12420));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12410_SHARP_){
var G__12421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12410_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12421) : fret.call(null,G__12421));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14525 = (i + (1));
i = G__14525;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14526 = arguments.length;
var i__5770__auto___14527 = (0);
while(true){
if((i__5770__auto___14527 < len__5769__auto___14526)){
args__5775__auto__.push((arguments[i__5770__auto___14527]));

var G__14528 = (i__5770__auto___14527 + (1));
i__5770__auto___14527 = G__14528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12428){
var map__12429 = p__12428;
var map__12429__$1 = cljs.core.__destructure_map(map__12429);
var opts = map__12429__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12426){
var G__12427 = cljs.core.first(seq12426);
var seq12426__$1 = cljs.core.next(seq12426);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12427,seq12426__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__12436 = arguments.length;
switch (G__12436) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12241__auto___14530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_12477){
var state_val_12478 = (state_12477[(1)]);
if((state_val_12478 === (7))){
var inst_12471 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12479_14531 = state_12477__$1;
(statearr_12479_14531[(2)] = inst_12471);

(statearr_12479_14531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (1))){
var state_12477__$1 = state_12477;
var statearr_12480_14532 = state_12477__$1;
(statearr_12480_14532[(2)] = null);

(statearr_12480_14532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (4))){
var inst_12452 = (state_12477[(7)]);
var inst_12452__$1 = (state_12477[(2)]);
var inst_12455 = (inst_12452__$1 == null);
var state_12477__$1 = (function (){var statearr_12481 = state_12477;
(statearr_12481[(7)] = inst_12452__$1);

return statearr_12481;
})();
if(cljs.core.truth_(inst_12455)){
var statearr_12482_14533 = state_12477__$1;
(statearr_12482_14533[(1)] = (5));

} else {
var statearr_12483_14534 = state_12477__$1;
(statearr_12483_14534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (13))){
var state_12477__$1 = state_12477;
var statearr_12488_14535 = state_12477__$1;
(statearr_12488_14535[(2)] = null);

(statearr_12488_14535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (6))){
var inst_12452 = (state_12477[(7)]);
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12477__$1,(11),to,inst_12452);
} else {
if((state_val_12478 === (3))){
var inst_12475 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12477__$1,inst_12475);
} else {
if((state_val_12478 === (12))){
var state_12477__$1 = state_12477;
var statearr_12490_14536 = state_12477__$1;
(statearr_12490_14536[(2)] = null);

(statearr_12490_14536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (2))){
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12477__$1,(4),from);
} else {
if((state_val_12478 === (11))){
var inst_12464 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
if(cljs.core.truth_(inst_12464)){
var statearr_12491_14537 = state_12477__$1;
(statearr_12491_14537[(1)] = (12));

} else {
var statearr_12492_14538 = state_12477__$1;
(statearr_12492_14538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (9))){
var state_12477__$1 = state_12477;
var statearr_12493_14539 = state_12477__$1;
(statearr_12493_14539[(2)] = null);

(statearr_12493_14539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (5))){
var state_12477__$1 = state_12477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12494_14540 = state_12477__$1;
(statearr_12494_14540[(1)] = (8));

} else {
var statearr_12495_14541 = state_12477__$1;
(statearr_12495_14541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (14))){
var inst_12469 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12496_14542 = state_12477__$1;
(statearr_12496_14542[(2)] = inst_12469);

(statearr_12496_14542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (10))){
var inst_12461 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12497_14543 = state_12477__$1;
(statearr_12497_14543[(2)] = inst_12461);

(statearr_12497_14543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (8))){
var inst_12458 = cljs.core.async.close_BANG_(to);
var state_12477__$1 = state_12477;
var statearr_12502_14544 = state_12477__$1;
(statearr_12502_14544[(2)] = inst_12458);

(statearr_12502_14544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_12503 = [null,null,null,null,null,null,null,null];
(statearr_12503[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_12503[(1)] = (1));

return statearr_12503;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_12477){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12477);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12504){var ex__12162__auto__ = e12504;
var statearr_12505_14545 = state_12477;
(statearr_12505_14545[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12477[(4)]))){
var statearr_12506_14546 = state_12477;
(statearr_12506_14546[(1)] = cljs.core.first((state_12477[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14547 = state_12477;
state_12477 = G__14547;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_12477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_12477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_12507 = f__12242__auto__();
(statearr_12507[(6)] = c__12241__auto___14530);

return statearr_12507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__12508){
var vec__12509 = p__12508;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12509,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12509,(1),null);
var job = vec__12509;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12241__auto___14548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_12516){
var state_val_12517 = (state_12516[(1)]);
if((state_val_12517 === (1))){
var state_12516__$1 = state_12516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12516__$1,(2),res,v);
} else {
if((state_val_12517 === (2))){
var inst_12513 = (state_12516[(2)]);
var inst_12514 = cljs.core.async.close_BANG_(res);
var state_12516__$1 = (function (){var statearr_12522 = state_12516;
(statearr_12522[(7)] = inst_12513);

return statearr_12522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12516__$1,inst_12514);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0 = (function (){
var statearr_12523 = [null,null,null,null,null,null,null,null];
(statearr_12523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__);

(statearr_12523[(1)] = (1));

return statearr_12523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1 = (function (state_12516){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12516);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12524){var ex__12162__auto__ = e12524;
var statearr_12525_14551 = state_12516;
(statearr_12525_14551[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12516[(4)]))){
var statearr_12526_14552 = state_12516;
(statearr_12526_14552[(1)] = cljs.core.first((state_12516[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14553 = state_12516;
state_12516 = G__14553;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = function(state_12516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1.call(this,state_12516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_12527 = f__12242__auto__();
(statearr_12527[(6)] = c__12241__auto___14548);

return statearr_12527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__12528){
var vec__12529 = p__12528;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12529,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12529,(1),null);
var job = vec__12529;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___14554 = n;
var __14555 = (0);
while(true){
if((__14555 < n__5636__auto___14554)){
var G__12532_14556 = type;
var G__12532_14557__$1 = (((G__12532_14556 instanceof cljs.core.Keyword))?G__12532_14556.fqn:null);
switch (G__12532_14557__$1) {
case "compute":
var c__12241__auto___14559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14555,c__12241__auto___14559,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async){
return (function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = ((function (__14555,c__12241__auto___14559,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async){
return (function (state_12545){
var state_val_12546 = (state_12545[(1)]);
if((state_val_12546 === (1))){
var state_12545__$1 = state_12545;
var statearr_12547_14560 = state_12545__$1;
(statearr_12547_14560[(2)] = null);

(statearr_12547_14560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (2))){
var state_12545__$1 = state_12545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12545__$1,(4),jobs);
} else {
if((state_val_12546 === (3))){
var inst_12543 = (state_12545[(2)]);
var state_12545__$1 = state_12545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12545__$1,inst_12543);
} else {
if((state_val_12546 === (4))){
var inst_12535 = (state_12545[(2)]);
var inst_12536 = process__$1(inst_12535);
var state_12545__$1 = state_12545;
if(cljs.core.truth_(inst_12536)){
var statearr_12549_14561 = state_12545__$1;
(statearr_12549_14561[(1)] = (5));

} else {
var statearr_12550_14562 = state_12545__$1;
(statearr_12550_14562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (5))){
var state_12545__$1 = state_12545;
var statearr_12551_14563 = state_12545__$1;
(statearr_12551_14563[(2)] = null);

(statearr_12551_14563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (6))){
var state_12545__$1 = state_12545;
var statearr_12552_14564 = state_12545__$1;
(statearr_12552_14564[(2)] = null);

(statearr_12552_14564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (7))){
var inst_12541 = (state_12545[(2)]);
var state_12545__$1 = state_12545;
var statearr_12553_14565 = state_12545__$1;
(statearr_12553_14565[(2)] = inst_12541);

(statearr_12553_14565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14555,c__12241__auto___14559,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async))
;
return ((function (__14555,switch__12158__auto__,c__12241__auto___14559,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0 = (function (){
var statearr_12554 = [null,null,null,null,null,null,null];
(statearr_12554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__);

(statearr_12554[(1)] = (1));

return statearr_12554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1 = (function (state_12545){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12545);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12555){var ex__12162__auto__ = e12555;
var statearr_12556_14566 = state_12545;
(statearr_12556_14566[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12545[(4)]))){
var statearr_12557_14567 = state_12545;
(statearr_12557_14567[(1)] = cljs.core.first((state_12545[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14568 = state_12545;
state_12545 = G__14568;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = function(state_12545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1.call(this,state_12545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__;
})()
;})(__14555,switch__12158__auto__,c__12241__auto___14559,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async))
})();
var state__12243__auto__ = (function (){var statearr_12561 = f__12242__auto__();
(statearr_12561[(6)] = c__12241__auto___14559);

return statearr_12561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
});})(__14555,c__12241__auto___14559,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async))
);


break;
case "async":
var c__12241__auto___14569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14555,c__12241__auto___14569,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async){
return (function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = ((function (__14555,c__12241__auto___14569,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async){
return (function (state_12576){
var state_val_12577 = (state_12576[(1)]);
if((state_val_12577 === (1))){
var state_12576__$1 = state_12576;
var statearr_12578_14570 = state_12576__$1;
(statearr_12578_14570[(2)] = null);

(statearr_12578_14570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12577 === (2))){
var state_12576__$1 = state_12576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12576__$1,(4),jobs);
} else {
if((state_val_12577 === (3))){
var inst_12574 = (state_12576[(2)]);
var state_12576__$1 = state_12576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12576__$1,inst_12574);
} else {
if((state_val_12577 === (4))){
var inst_12566 = (state_12576[(2)]);
var inst_12567 = async(inst_12566);
var state_12576__$1 = state_12576;
if(cljs.core.truth_(inst_12567)){
var statearr_12579_14571 = state_12576__$1;
(statearr_12579_14571[(1)] = (5));

} else {
var statearr_12580_14572 = state_12576__$1;
(statearr_12580_14572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12577 === (5))){
var state_12576__$1 = state_12576;
var statearr_12581_14573 = state_12576__$1;
(statearr_12581_14573[(2)] = null);

(statearr_12581_14573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12577 === (6))){
var state_12576__$1 = state_12576;
var statearr_12582_14574 = state_12576__$1;
(statearr_12582_14574[(2)] = null);

(statearr_12582_14574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12577 === (7))){
var inst_12572 = (state_12576[(2)]);
var state_12576__$1 = state_12576;
var statearr_12587_14575 = state_12576__$1;
(statearr_12587_14575[(2)] = inst_12572);

(statearr_12587_14575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14555,c__12241__auto___14569,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async))
;
return ((function (__14555,switch__12158__auto__,c__12241__auto___14569,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0 = (function (){
var statearr_12588 = [null,null,null,null,null,null,null];
(statearr_12588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__);

(statearr_12588[(1)] = (1));

return statearr_12588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1 = (function (state_12576){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12576);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12589){var ex__12162__auto__ = e12589;
var statearr_12590_14576 = state_12576;
(statearr_12590_14576[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12576[(4)]))){
var statearr_12594_14577 = state_12576;
(statearr_12594_14577[(1)] = cljs.core.first((state_12576[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14578 = state_12576;
state_12576 = G__14578;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = function(state_12576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1.call(this,state_12576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__;
})()
;})(__14555,switch__12158__auto__,c__12241__auto___14569,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async))
})();
var state__12243__auto__ = (function (){var statearr_12598 = f__12242__auto__();
(statearr_12598[(6)] = c__12241__auto___14569);

return statearr_12598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
});})(__14555,c__12241__auto___14569,G__12532_14556,G__12532_14557__$1,n__5636__auto___14554,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12532_14557__$1)].join('')));

}

var G__14579 = (__14555 + (1));
__14555 = G__14579;
continue;
} else {
}
break;
}

var c__12241__auto___14580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_12624){
var state_val_12625 = (state_12624[(1)]);
if((state_val_12625 === (7))){
var inst_12620 = (state_12624[(2)]);
var state_12624__$1 = state_12624;
var statearr_12636_14581 = state_12624__$1;
(statearr_12636_14581[(2)] = inst_12620);

(statearr_12636_14581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12625 === (1))){
var state_12624__$1 = state_12624;
var statearr_12637_14582 = state_12624__$1;
(statearr_12637_14582[(2)] = null);

(statearr_12637_14582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12625 === (4))){
var inst_12601 = (state_12624[(7)]);
var inst_12601__$1 = (state_12624[(2)]);
var inst_12606 = (inst_12601__$1 == null);
var state_12624__$1 = (function (){var statearr_12638 = state_12624;
(statearr_12638[(7)] = inst_12601__$1);

return statearr_12638;
})();
if(cljs.core.truth_(inst_12606)){
var statearr_12639_14583 = state_12624__$1;
(statearr_12639_14583[(1)] = (5));

} else {
var statearr_12640_14584 = state_12624__$1;
(statearr_12640_14584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12625 === (6))){
var inst_12601 = (state_12624[(7)]);
var inst_12610 = (state_12624[(8)]);
var inst_12610__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12611 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12612 = [inst_12601,inst_12610__$1];
var inst_12613 = (new cljs.core.PersistentVector(null,2,(5),inst_12611,inst_12612,null));
var state_12624__$1 = (function (){var statearr_12641 = state_12624;
(statearr_12641[(8)] = inst_12610__$1);

return statearr_12641;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12624__$1,(8),jobs,inst_12613);
} else {
if((state_val_12625 === (3))){
var inst_12622 = (state_12624[(2)]);
var state_12624__$1 = state_12624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12624__$1,inst_12622);
} else {
if((state_val_12625 === (2))){
var state_12624__$1 = state_12624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12624__$1,(4),from);
} else {
if((state_val_12625 === (9))){
var inst_12617 = (state_12624[(2)]);
var state_12624__$1 = (function (){var statearr_12642 = state_12624;
(statearr_12642[(9)] = inst_12617);

return statearr_12642;
})();
var statearr_12643_14585 = state_12624__$1;
(statearr_12643_14585[(2)] = null);

(statearr_12643_14585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12625 === (5))){
var inst_12608 = cljs.core.async.close_BANG_(jobs);
var state_12624__$1 = state_12624;
var statearr_12644_14586 = state_12624__$1;
(statearr_12644_14586[(2)] = inst_12608);

(statearr_12644_14586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12625 === (8))){
var inst_12610 = (state_12624[(8)]);
var inst_12615 = (state_12624[(2)]);
var state_12624__$1 = (function (){var statearr_12645 = state_12624;
(statearr_12645[(10)] = inst_12615);

return statearr_12645;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12624__$1,(9),results,inst_12610);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0 = (function (){
var statearr_12646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__);

(statearr_12646[(1)] = (1));

return statearr_12646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1 = (function (state_12624){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12624);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12647){var ex__12162__auto__ = e12647;
var statearr_12648_14588 = state_12624;
(statearr_12648_14588[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12624[(4)]))){
var statearr_12649_14589 = state_12624;
(statearr_12649_14589[(1)] = cljs.core.first((state_12624[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14590 = state_12624;
state_12624 = G__14590;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = function(state_12624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1.call(this,state_12624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_12650 = f__12242__auto__();
(statearr_12650[(6)] = c__12241__auto___14580);

return statearr_12650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


var c__12241__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_12688){
var state_val_12689 = (state_12688[(1)]);
if((state_val_12689 === (7))){
var inst_12684 = (state_12688[(2)]);
var state_12688__$1 = state_12688;
var statearr_12690_14593 = state_12688__$1;
(statearr_12690_14593[(2)] = inst_12684);

(statearr_12690_14593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (20))){
var state_12688__$1 = state_12688;
var statearr_12691_14594 = state_12688__$1;
(statearr_12691_14594[(2)] = null);

(statearr_12691_14594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (1))){
var state_12688__$1 = state_12688;
var statearr_12692_14595 = state_12688__$1;
(statearr_12692_14595[(2)] = null);

(statearr_12692_14595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (4))){
var inst_12653 = (state_12688[(7)]);
var inst_12653__$1 = (state_12688[(2)]);
var inst_12654 = (inst_12653__$1 == null);
var state_12688__$1 = (function (){var statearr_12693 = state_12688;
(statearr_12693[(7)] = inst_12653__$1);

return statearr_12693;
})();
if(cljs.core.truth_(inst_12654)){
var statearr_12694_14596 = state_12688__$1;
(statearr_12694_14596[(1)] = (5));

} else {
var statearr_12695_14597 = state_12688__$1;
(statearr_12695_14597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (15))){
var inst_12666 = (state_12688[(8)]);
var state_12688__$1 = state_12688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12688__$1,(18),to,inst_12666);
} else {
if((state_val_12689 === (21))){
var inst_12679 = (state_12688[(2)]);
var state_12688__$1 = state_12688;
var statearr_12696_14598 = state_12688__$1;
(statearr_12696_14598[(2)] = inst_12679);

(statearr_12696_14598[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (13))){
var inst_12681 = (state_12688[(2)]);
var state_12688__$1 = (function (){var statearr_12697 = state_12688;
(statearr_12697[(9)] = inst_12681);

return statearr_12697;
})();
var statearr_12698_14599 = state_12688__$1;
(statearr_12698_14599[(2)] = null);

(statearr_12698_14599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (6))){
var inst_12653 = (state_12688[(7)]);
var state_12688__$1 = state_12688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12688__$1,(11),inst_12653);
} else {
if((state_val_12689 === (17))){
var inst_12674 = (state_12688[(2)]);
var state_12688__$1 = state_12688;
if(cljs.core.truth_(inst_12674)){
var statearr_12699_14602 = state_12688__$1;
(statearr_12699_14602[(1)] = (19));

} else {
var statearr_12700_14603 = state_12688__$1;
(statearr_12700_14603[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (3))){
var inst_12686 = (state_12688[(2)]);
var state_12688__$1 = state_12688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12688__$1,inst_12686);
} else {
if((state_val_12689 === (12))){
var inst_12663 = (state_12688[(10)]);
var state_12688__$1 = state_12688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12688__$1,(14),inst_12663);
} else {
if((state_val_12689 === (2))){
var state_12688__$1 = state_12688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12688__$1,(4),results);
} else {
if((state_val_12689 === (19))){
var state_12688__$1 = state_12688;
var statearr_12701_14604 = state_12688__$1;
(statearr_12701_14604[(2)] = null);

(statearr_12701_14604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (11))){
var inst_12663 = (state_12688[(2)]);
var state_12688__$1 = (function (){var statearr_12702 = state_12688;
(statearr_12702[(10)] = inst_12663);

return statearr_12702;
})();
var statearr_12703_14605 = state_12688__$1;
(statearr_12703_14605[(2)] = null);

(statearr_12703_14605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (9))){
var state_12688__$1 = state_12688;
var statearr_12704_14606 = state_12688__$1;
(statearr_12704_14606[(2)] = null);

(statearr_12704_14606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (5))){
var state_12688__$1 = state_12688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12705_14607 = state_12688__$1;
(statearr_12705_14607[(1)] = (8));

} else {
var statearr_12706_14608 = state_12688__$1;
(statearr_12706_14608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (14))){
var inst_12666 = (state_12688[(8)]);
var inst_12668 = (state_12688[(11)]);
var inst_12666__$1 = (state_12688[(2)]);
var inst_12667 = (inst_12666__$1 == null);
var inst_12668__$1 = cljs.core.not(inst_12667);
var state_12688__$1 = (function (){var statearr_12707 = state_12688;
(statearr_12707[(8)] = inst_12666__$1);

(statearr_12707[(11)] = inst_12668__$1);

return statearr_12707;
})();
if(inst_12668__$1){
var statearr_12708_14609 = state_12688__$1;
(statearr_12708_14609[(1)] = (15));

} else {
var statearr_12709_14610 = state_12688__$1;
(statearr_12709_14610[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (16))){
var inst_12668 = (state_12688[(11)]);
var state_12688__$1 = state_12688;
var statearr_12710_14611 = state_12688__$1;
(statearr_12710_14611[(2)] = inst_12668);

(statearr_12710_14611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (10))){
var inst_12660 = (state_12688[(2)]);
var state_12688__$1 = state_12688;
var statearr_12711_14613 = state_12688__$1;
(statearr_12711_14613[(2)] = inst_12660);

(statearr_12711_14613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (18))){
var inst_12671 = (state_12688[(2)]);
var state_12688__$1 = state_12688;
var statearr_12712_14615 = state_12688__$1;
(statearr_12712_14615[(2)] = inst_12671);

(statearr_12712_14615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (8))){
var inst_12657 = cljs.core.async.close_BANG_(to);
var state_12688__$1 = state_12688;
var statearr_12713_14616 = state_12688__$1;
(statearr_12713_14616[(2)] = inst_12657);

(statearr_12713_14616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0 = (function (){
var statearr_12714 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__);

(statearr_12714[(1)] = (1));

return statearr_12714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1 = (function (state_12688){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12688);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12715){var ex__12162__auto__ = e12715;
var statearr_12716_14618 = state_12688;
(statearr_12716_14618[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12688[(4)]))){
var statearr_12717_14619 = state_12688;
(statearr_12717_14619[(1)] = cljs.core.first((state_12688[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14620 = state_12688;
state_12688 = G__14620;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__ = function(state_12688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1.call(this,state_12688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_12718 = f__12242__auto__();
(statearr_12718[(6)] = c__12241__auto__);

return statearr_12718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));

return c__12241__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__12720 = arguments.length;
switch (G__12720) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__12722 = arguments.length;
switch (G__12722) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__12724 = arguments.length;
switch (G__12724) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12241__auto___14625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_12750){
var state_val_12751 = (state_12750[(1)]);
if((state_val_12751 === (7))){
var inst_12746 = (state_12750[(2)]);
var state_12750__$1 = state_12750;
var statearr_12752_14626 = state_12750__$1;
(statearr_12752_14626[(2)] = inst_12746);

(statearr_12752_14626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (1))){
var state_12750__$1 = state_12750;
var statearr_12753_14629 = state_12750__$1;
(statearr_12753_14629[(2)] = null);

(statearr_12753_14629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (4))){
var inst_12727 = (state_12750[(7)]);
var inst_12727__$1 = (state_12750[(2)]);
var inst_12728 = (inst_12727__$1 == null);
var state_12750__$1 = (function (){var statearr_12754 = state_12750;
(statearr_12754[(7)] = inst_12727__$1);

return statearr_12754;
})();
if(cljs.core.truth_(inst_12728)){
var statearr_12755_14630 = state_12750__$1;
(statearr_12755_14630[(1)] = (5));

} else {
var statearr_12756_14631 = state_12750__$1;
(statearr_12756_14631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (13))){
var state_12750__$1 = state_12750;
var statearr_12760_14632 = state_12750__$1;
(statearr_12760_14632[(2)] = null);

(statearr_12760_14632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (6))){
var inst_12727 = (state_12750[(7)]);
var inst_12733 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12727) : p.call(null,inst_12727));
var state_12750__$1 = state_12750;
if(cljs.core.truth_(inst_12733)){
var statearr_12761_14633 = state_12750__$1;
(statearr_12761_14633[(1)] = (9));

} else {
var statearr_12762_14634 = state_12750__$1;
(statearr_12762_14634[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (3))){
var inst_12748 = (state_12750[(2)]);
var state_12750__$1 = state_12750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12750__$1,inst_12748);
} else {
if((state_val_12751 === (12))){
var state_12750__$1 = state_12750;
var statearr_12766_14635 = state_12750__$1;
(statearr_12766_14635[(2)] = null);

(statearr_12766_14635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (2))){
var state_12750__$1 = state_12750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12750__$1,(4),ch);
} else {
if((state_val_12751 === (11))){
var inst_12727 = (state_12750[(7)]);
var inst_12737 = (state_12750[(2)]);
var state_12750__$1 = state_12750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12750__$1,(8),inst_12737,inst_12727);
} else {
if((state_val_12751 === (9))){
var state_12750__$1 = state_12750;
var statearr_12767_14636 = state_12750__$1;
(statearr_12767_14636[(2)] = tc);

(statearr_12767_14636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (5))){
var inst_12730 = cljs.core.async.close_BANG_(tc);
var inst_12731 = cljs.core.async.close_BANG_(fc);
var state_12750__$1 = (function (){var statearr_12768 = state_12750;
(statearr_12768[(8)] = inst_12730);

return statearr_12768;
})();
var statearr_12772_14637 = state_12750__$1;
(statearr_12772_14637[(2)] = inst_12731);

(statearr_12772_14637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (14))){
var inst_12744 = (state_12750[(2)]);
var state_12750__$1 = state_12750;
var statearr_12773_14638 = state_12750__$1;
(statearr_12773_14638[(2)] = inst_12744);

(statearr_12773_14638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (10))){
var state_12750__$1 = state_12750;
var statearr_12776_14639 = state_12750__$1;
(statearr_12776_14639[(2)] = fc);

(statearr_12776_14639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (8))){
var inst_12739 = (state_12750[(2)]);
var state_12750__$1 = state_12750;
if(cljs.core.truth_(inst_12739)){
var statearr_12778_14640 = state_12750__$1;
(statearr_12778_14640[(1)] = (12));

} else {
var statearr_12779_14641 = state_12750__$1;
(statearr_12779_14641[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_12780 = [null,null,null,null,null,null,null,null,null];
(statearr_12780[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_12780[(1)] = (1));

return statearr_12780;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_12750){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12750);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12781){var ex__12162__auto__ = e12781;
var statearr_12782_14642 = state_12750;
(statearr_12782_14642[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12750[(4)]))){
var statearr_12783_14643 = state_12750;
(statearr_12783_14643[(1)] = cljs.core.first((state_12750[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14644 = state_12750;
state_12750 = G__14644;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_12750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_12750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_12784 = f__12242__auto__();
(statearr_12784[(6)] = c__12241__auto___14625);

return statearr_12784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12241__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_12806){
var state_val_12807 = (state_12806[(1)]);
if((state_val_12807 === (7))){
var inst_12802 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
var statearr_12813_14647 = state_12806__$1;
(statearr_12813_14647[(2)] = inst_12802);

(statearr_12813_14647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (1))){
var inst_12785 = init;
var inst_12786 = inst_12785;
var state_12806__$1 = (function (){var statearr_12830 = state_12806;
(statearr_12830[(7)] = inst_12786);

return statearr_12830;
})();
var statearr_12832_14648 = state_12806__$1;
(statearr_12832_14648[(2)] = null);

(statearr_12832_14648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (4))){
var inst_12789 = (state_12806[(8)]);
var inst_12789__$1 = (state_12806[(2)]);
var inst_12790 = (inst_12789__$1 == null);
var state_12806__$1 = (function (){var statearr_12834 = state_12806;
(statearr_12834[(8)] = inst_12789__$1);

return statearr_12834;
})();
if(cljs.core.truth_(inst_12790)){
var statearr_12835_14649 = state_12806__$1;
(statearr_12835_14649[(1)] = (5));

} else {
var statearr_12836_14650 = state_12806__$1;
(statearr_12836_14650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (6))){
var inst_12786 = (state_12806[(7)]);
var inst_12793 = (state_12806[(9)]);
var inst_12789 = (state_12806[(8)]);
var inst_12793__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12786,inst_12789) : f.call(null,inst_12786,inst_12789));
var inst_12794 = cljs.core.reduced_QMARK_(inst_12793__$1);
var state_12806__$1 = (function (){var statearr_12837 = state_12806;
(statearr_12837[(9)] = inst_12793__$1);

return statearr_12837;
})();
if(inst_12794){
var statearr_12838_14652 = state_12806__$1;
(statearr_12838_14652[(1)] = (8));

} else {
var statearr_12839_14653 = state_12806__$1;
(statearr_12839_14653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (3))){
var inst_12804 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12806__$1,inst_12804);
} else {
if((state_val_12807 === (2))){
var state_12806__$1 = state_12806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12806__$1,(4),ch);
} else {
if((state_val_12807 === (9))){
var inst_12793 = (state_12806[(9)]);
var inst_12786 = inst_12793;
var state_12806__$1 = (function (){var statearr_12841 = state_12806;
(statearr_12841[(7)] = inst_12786);

return statearr_12841;
})();
var statearr_12842_14654 = state_12806__$1;
(statearr_12842_14654[(2)] = null);

(statearr_12842_14654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (5))){
var inst_12786 = (state_12806[(7)]);
var state_12806__$1 = state_12806;
var statearr_12843_14655 = state_12806__$1;
(statearr_12843_14655[(2)] = inst_12786);

(statearr_12843_14655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (10))){
var inst_12800 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
var statearr_12844_14656 = state_12806__$1;
(statearr_12844_14656[(2)] = inst_12800);

(statearr_12844_14656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (8))){
var inst_12793 = (state_12806[(9)]);
var inst_12796 = cljs.core.deref(inst_12793);
var state_12806__$1 = state_12806;
var statearr_12845_14657 = state_12806__$1;
(statearr_12845_14657[(2)] = inst_12796);

(statearr_12845_14657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12159__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12159__auto____0 = (function (){
var statearr_12846 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12846[(0)] = cljs$core$async$reduce_$_state_machine__12159__auto__);

(statearr_12846[(1)] = (1));

return statearr_12846;
});
var cljs$core$async$reduce_$_state_machine__12159__auto____1 = (function (state_12806){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12806);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12847){var ex__12162__auto__ = e12847;
var statearr_12848_14658 = state_12806;
(statearr_12848_14658[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12806[(4)]))){
var statearr_12849_14659 = state_12806;
(statearr_12849_14659[(1)] = cljs.core.first((state_12806[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14664 = state_12806;
state_12806 = G__14664;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12159__auto__ = function(state_12806){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12159__auto____1.call(this,state_12806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12159__auto____0;
cljs$core$async$reduce_$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12159__auto____1;
return cljs$core$async$reduce_$_state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_12851 = f__12242__auto__();
(statearr_12851[(6)] = c__12241__auto__);

return statearr_12851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));

return c__12241__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12241__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_12862){
var state_val_12863 = (state_12862[(1)]);
if((state_val_12863 === (1))){
var inst_12856 = cljs.core.async.reduce(f__$1,init,ch);
var state_12862__$1 = state_12862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12862__$1,(2),inst_12856);
} else {
if((state_val_12863 === (2))){
var inst_12858 = (state_12862[(2)]);
var inst_12859 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12858) : f__$1.call(null,inst_12858));
var state_12862__$1 = state_12862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12862__$1,inst_12859);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12159__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12159__auto____0 = (function (){
var statearr_12865 = [null,null,null,null,null,null,null];
(statearr_12865[(0)] = cljs$core$async$transduce_$_state_machine__12159__auto__);

(statearr_12865[(1)] = (1));

return statearr_12865;
});
var cljs$core$async$transduce_$_state_machine__12159__auto____1 = (function (state_12862){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12862);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12870){var ex__12162__auto__ = e12870;
var statearr_12872_14665 = state_12862;
(statearr_12872_14665[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12862[(4)]))){
var statearr_12874_14666 = state_12862;
(statearr_12874_14666[(1)] = cljs.core.first((state_12862[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14667 = state_12862;
state_12862 = G__14667;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12159__auto__ = function(state_12862){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12159__auto____1.call(this,state_12862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12159__auto____0;
cljs$core$async$transduce_$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12159__auto____1;
return cljs$core$async$transduce_$_state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_12877 = f__12242__auto__();
(statearr_12877[(6)] = c__12241__auto__);

return statearr_12877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));

return c__12241__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__12881 = arguments.length;
switch (G__12881) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12241__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_12915){
var state_val_12916 = (state_12915[(1)]);
if((state_val_12916 === (7))){
var inst_12897 = (state_12915[(2)]);
var state_12915__$1 = state_12915;
var statearr_12919_14671 = state_12915__$1;
(statearr_12919_14671[(2)] = inst_12897);

(statearr_12919_14671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (1))){
var inst_12882 = cljs.core.seq(coll);
var inst_12883 = inst_12882;
var state_12915__$1 = (function (){var statearr_12921 = state_12915;
(statearr_12921[(7)] = inst_12883);

return statearr_12921;
})();
var statearr_12922_14672 = state_12915__$1;
(statearr_12922_14672[(2)] = null);

(statearr_12922_14672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (4))){
var inst_12883 = (state_12915[(7)]);
var inst_12895 = cljs.core.first(inst_12883);
var state_12915__$1 = state_12915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12915__$1,(7),ch,inst_12895);
} else {
if((state_val_12916 === (13))){
var inst_12909 = (state_12915[(2)]);
var state_12915__$1 = state_12915;
var statearr_12926_14673 = state_12915__$1;
(statearr_12926_14673[(2)] = inst_12909);

(statearr_12926_14673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (6))){
var inst_12900 = (state_12915[(2)]);
var state_12915__$1 = state_12915;
if(cljs.core.truth_(inst_12900)){
var statearr_12929_14674 = state_12915__$1;
(statearr_12929_14674[(1)] = (8));

} else {
var statearr_12930_14675 = state_12915__$1;
(statearr_12930_14675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (3))){
var inst_12913 = (state_12915[(2)]);
var state_12915__$1 = state_12915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12915__$1,inst_12913);
} else {
if((state_val_12916 === (12))){
var state_12915__$1 = state_12915;
var statearr_12945_14676 = state_12915__$1;
(statearr_12945_14676[(2)] = null);

(statearr_12945_14676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (2))){
var inst_12883 = (state_12915[(7)]);
var state_12915__$1 = state_12915;
if(cljs.core.truth_(inst_12883)){
var statearr_12949_14677 = state_12915__$1;
(statearr_12949_14677[(1)] = (4));

} else {
var statearr_12951_14678 = state_12915__$1;
(statearr_12951_14678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (11))){
var inst_12906 = cljs.core.async.close_BANG_(ch);
var state_12915__$1 = state_12915;
var statearr_12952_14679 = state_12915__$1;
(statearr_12952_14679[(2)] = inst_12906);

(statearr_12952_14679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (9))){
var state_12915__$1 = state_12915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12953_14680 = state_12915__$1;
(statearr_12953_14680[(1)] = (11));

} else {
var statearr_12954_14681 = state_12915__$1;
(statearr_12954_14681[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (5))){
var inst_12883 = (state_12915[(7)]);
var state_12915__$1 = state_12915;
var statearr_12955_14682 = state_12915__$1;
(statearr_12955_14682[(2)] = inst_12883);

(statearr_12955_14682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (10))){
var inst_12911 = (state_12915[(2)]);
var state_12915__$1 = state_12915;
var statearr_12956_14683 = state_12915__$1;
(statearr_12956_14683[(2)] = inst_12911);

(statearr_12956_14683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (8))){
var inst_12883 = (state_12915[(7)]);
var inst_12902 = cljs.core.next(inst_12883);
var inst_12883__$1 = inst_12902;
var state_12915__$1 = (function (){var statearr_12960 = state_12915;
(statearr_12960[(7)] = inst_12883__$1);

return statearr_12960;
})();
var statearr_12961_14684 = state_12915__$1;
(statearr_12961_14684[(2)] = null);

(statearr_12961_14684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_12964 = [null,null,null,null,null,null,null,null];
(statearr_12964[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_12964[(1)] = (1));

return statearr_12964;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_12915){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_12915);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e12965){var ex__12162__auto__ = e12965;
var statearr_12966_14685 = state_12915;
(statearr_12966_14685[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_12915[(4)]))){
var statearr_12967_14686 = state_12915;
(statearr_12967_14686[(1)] = cljs.core.first((state_12915[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14687 = state_12915;
state_12915 = G__14687;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_12915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_12915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_12969 = f__12242__auto__();
(statearr_12969[(6)] = c__12241__auto__);

return statearr_12969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));

return c__12241__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12972 = arguments.length;
switch (G__12972) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_14693 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_14693(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14694 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_14694(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14698 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_14698(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14715 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_14715(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13000 = (function (ch,cs,meta13001){
this.ch = ch;
this.cs = cs;
this.meta13001 = meta13001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13002,meta13001__$1){
var self__ = this;
var _13002__$1 = this;
return (new cljs.core.async.t_cljs$core$async13000(self__.ch,self__.cs,meta13001__$1));
}));

(cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13002){
var self__ = this;
var _13002__$1 = this;
return self__.meta13001;
}));

(cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13000.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13001","meta13001",-1878891923,null)], null);
}));

(cljs.core.async.t_cljs$core$async13000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13000");

(cljs.core.async.t_cljs$core$async13000.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13000.
 */
cljs.core.async.__GT_t_cljs$core$async13000 = (function cljs$core$async$mult_$___GT_t_cljs$core$async13000(ch__$1,cs__$1,meta13001){
return (new cljs.core.async.t_cljs$core$async13000(ch__$1,cs__$1,meta13001));
});

}

return (new cljs.core.async.t_cljs$core$async13000(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12241__auto___14725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_13196){
var state_val_13197 = (state_13196[(1)]);
if((state_val_13197 === (7))){
var inst_13185 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13207_14726 = state_13196__$1;
(statearr_13207_14726[(2)] = inst_13185);

(statearr_13207_14726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (20))){
var inst_13088 = (state_13196[(7)]);
var inst_13100 = cljs.core.first(inst_13088);
var inst_13101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13100,(0),null);
var inst_13102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13100,(1),null);
var state_13196__$1 = (function (){var statearr_13208 = state_13196;
(statearr_13208[(8)] = inst_13101);

return statearr_13208;
})();
if(cljs.core.truth_(inst_13102)){
var statearr_13209_14727 = state_13196__$1;
(statearr_13209_14727[(1)] = (22));

} else {
var statearr_13210_14728 = state_13196__$1;
(statearr_13210_14728[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (27))){
var inst_13057 = (state_13196[(9)]);
var inst_13130 = (state_13196[(10)]);
var inst_13137 = (state_13196[(11)]);
var inst_13132 = (state_13196[(12)]);
var inst_13137__$1 = cljs.core._nth(inst_13130,inst_13132);
var inst_13138 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13137__$1,inst_13057,done);
var state_13196__$1 = (function (){var statearr_13211 = state_13196;
(statearr_13211[(11)] = inst_13137__$1);

return statearr_13211;
})();
if(cljs.core.truth_(inst_13138)){
var statearr_13212_14729 = state_13196__$1;
(statearr_13212_14729[(1)] = (30));

} else {
var statearr_13213_14730 = state_13196__$1;
(statearr_13213_14730[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (1))){
var state_13196__$1 = state_13196;
var statearr_13214_14731 = state_13196__$1;
(statearr_13214_14731[(2)] = null);

(statearr_13214_14731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (24))){
var inst_13088 = (state_13196[(7)]);
var inst_13107 = (state_13196[(2)]);
var inst_13108 = cljs.core.next(inst_13088);
var inst_13066 = inst_13108;
var inst_13067 = null;
var inst_13068 = (0);
var inst_13069 = (0);
var state_13196__$1 = (function (){var statearr_13218 = state_13196;
(statearr_13218[(13)] = inst_13066);

(statearr_13218[(14)] = inst_13068);

(statearr_13218[(15)] = inst_13067);

(statearr_13218[(16)] = inst_13107);

(statearr_13218[(17)] = inst_13069);

return statearr_13218;
})();
var statearr_13219_14732 = state_13196__$1;
(statearr_13219_14732[(2)] = null);

(statearr_13219_14732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (39))){
var state_13196__$1 = state_13196;
var statearr_13224_14733 = state_13196__$1;
(statearr_13224_14733[(2)] = null);

(statearr_13224_14733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (4))){
var inst_13057 = (state_13196[(9)]);
var inst_13057__$1 = (state_13196[(2)]);
var inst_13058 = (inst_13057__$1 == null);
var state_13196__$1 = (function (){var statearr_13225 = state_13196;
(statearr_13225[(9)] = inst_13057__$1);

return statearr_13225;
})();
if(cljs.core.truth_(inst_13058)){
var statearr_13226_14734 = state_13196__$1;
(statearr_13226_14734[(1)] = (5));

} else {
var statearr_13228_14735 = state_13196__$1;
(statearr_13228_14735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (15))){
var inst_13066 = (state_13196[(13)]);
var inst_13068 = (state_13196[(14)]);
var inst_13067 = (state_13196[(15)]);
var inst_13069 = (state_13196[(17)]);
var inst_13084 = (state_13196[(2)]);
var inst_13085 = (inst_13069 + (1));
var tmp13221 = inst_13066;
var tmp13222 = inst_13068;
var tmp13223 = inst_13067;
var inst_13066__$1 = tmp13221;
var inst_13067__$1 = tmp13223;
var inst_13068__$1 = tmp13222;
var inst_13069__$1 = inst_13085;
var state_13196__$1 = (function (){var statearr_13232 = state_13196;
(statearr_13232[(13)] = inst_13066__$1);

(statearr_13232[(14)] = inst_13068__$1);

(statearr_13232[(15)] = inst_13067__$1);

(statearr_13232[(18)] = inst_13084);

(statearr_13232[(17)] = inst_13069__$1);

return statearr_13232;
})();
var statearr_13233_14736 = state_13196__$1;
(statearr_13233_14736[(2)] = null);

(statearr_13233_14736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (21))){
var inst_13111 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13237_14737 = state_13196__$1;
(statearr_13237_14737[(2)] = inst_13111);

(statearr_13237_14737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (31))){
var inst_13137 = (state_13196[(11)]);
var inst_13141 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13137);
var state_13196__$1 = state_13196;
var statearr_13241_14738 = state_13196__$1;
(statearr_13241_14738[(2)] = inst_13141);

(statearr_13241_14738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (32))){
var inst_13131 = (state_13196[(19)]);
var inst_13130 = (state_13196[(10)]);
var inst_13132 = (state_13196[(12)]);
var inst_13129 = (state_13196[(20)]);
var inst_13143 = (state_13196[(2)]);
var inst_13144 = (inst_13132 + (1));
var tmp13234 = inst_13131;
var tmp13235 = inst_13130;
var tmp13236 = inst_13129;
var inst_13129__$1 = tmp13236;
var inst_13130__$1 = tmp13235;
var inst_13131__$1 = tmp13234;
var inst_13132__$1 = inst_13144;
var state_13196__$1 = (function (){var statearr_13242 = state_13196;
(statearr_13242[(19)] = inst_13131__$1);

(statearr_13242[(10)] = inst_13130__$1);

(statearr_13242[(12)] = inst_13132__$1);

(statearr_13242[(20)] = inst_13129__$1);

(statearr_13242[(21)] = inst_13143);

return statearr_13242;
})();
var statearr_13243_14739 = state_13196__$1;
(statearr_13243_14739[(2)] = null);

(statearr_13243_14739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (40))){
var inst_13158 = (state_13196[(22)]);
var inst_13162 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13158);
var state_13196__$1 = state_13196;
var statearr_13244_14741 = state_13196__$1;
(statearr_13244_14741[(2)] = inst_13162);

(statearr_13244_14741[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (33))){
var inst_13147 = (state_13196[(23)]);
var inst_13149 = cljs.core.chunked_seq_QMARK_(inst_13147);
var state_13196__$1 = state_13196;
if(inst_13149){
var statearr_13245_14742 = state_13196__$1;
(statearr_13245_14742[(1)] = (36));

} else {
var statearr_13247_14743 = state_13196__$1;
(statearr_13247_14743[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (13))){
var inst_13078 = (state_13196[(24)]);
var inst_13081 = cljs.core.async.close_BANG_(inst_13078);
var state_13196__$1 = state_13196;
var statearr_13248_14744 = state_13196__$1;
(statearr_13248_14744[(2)] = inst_13081);

(statearr_13248_14744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (22))){
var inst_13101 = (state_13196[(8)]);
var inst_13104 = cljs.core.async.close_BANG_(inst_13101);
var state_13196__$1 = state_13196;
var statearr_13249_14745 = state_13196__$1;
(statearr_13249_14745[(2)] = inst_13104);

(statearr_13249_14745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (36))){
var inst_13147 = (state_13196[(23)]);
var inst_13153 = cljs.core.chunk_first(inst_13147);
var inst_13154 = cljs.core.chunk_rest(inst_13147);
var inst_13155 = cljs.core.count(inst_13153);
var inst_13129 = inst_13154;
var inst_13130 = inst_13153;
var inst_13131 = inst_13155;
var inst_13132 = (0);
var state_13196__$1 = (function (){var statearr_13250 = state_13196;
(statearr_13250[(19)] = inst_13131);

(statearr_13250[(10)] = inst_13130);

(statearr_13250[(12)] = inst_13132);

(statearr_13250[(20)] = inst_13129);

return statearr_13250;
})();
var statearr_13251_14746 = state_13196__$1;
(statearr_13251_14746[(2)] = null);

(statearr_13251_14746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (41))){
var inst_13147 = (state_13196[(23)]);
var inst_13164 = (state_13196[(2)]);
var inst_13165 = cljs.core.next(inst_13147);
var inst_13129 = inst_13165;
var inst_13130 = null;
var inst_13131 = (0);
var inst_13132 = (0);
var state_13196__$1 = (function (){var statearr_13252 = state_13196;
(statearr_13252[(19)] = inst_13131);

(statearr_13252[(10)] = inst_13130);

(statearr_13252[(25)] = inst_13164);

(statearr_13252[(12)] = inst_13132);

(statearr_13252[(20)] = inst_13129);

return statearr_13252;
})();
var statearr_13253_14747 = state_13196__$1;
(statearr_13253_14747[(2)] = null);

(statearr_13253_14747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (43))){
var state_13196__$1 = state_13196;
var statearr_13254_14748 = state_13196__$1;
(statearr_13254_14748[(2)] = null);

(statearr_13254_14748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (29))){
var inst_13173 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13255_14749 = state_13196__$1;
(statearr_13255_14749[(2)] = inst_13173);

(statearr_13255_14749[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (44))){
var inst_13182 = (state_13196[(2)]);
var state_13196__$1 = (function (){var statearr_13257 = state_13196;
(statearr_13257[(26)] = inst_13182);

return statearr_13257;
})();
var statearr_13258_14750 = state_13196__$1;
(statearr_13258_14750[(2)] = null);

(statearr_13258_14750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (6))){
var inst_13121 = (state_13196[(27)]);
var inst_13120 = cljs.core.deref(cs);
var inst_13121__$1 = cljs.core.keys(inst_13120);
var inst_13122 = cljs.core.count(inst_13121__$1);
var inst_13123 = cljs.core.reset_BANG_(dctr,inst_13122);
var inst_13128 = cljs.core.seq(inst_13121__$1);
var inst_13129 = inst_13128;
var inst_13130 = null;
var inst_13131 = (0);
var inst_13132 = (0);
var state_13196__$1 = (function (){var statearr_13259 = state_13196;
(statearr_13259[(19)] = inst_13131);

(statearr_13259[(27)] = inst_13121__$1);

(statearr_13259[(28)] = inst_13123);

(statearr_13259[(10)] = inst_13130);

(statearr_13259[(12)] = inst_13132);

(statearr_13259[(20)] = inst_13129);

return statearr_13259;
})();
var statearr_13260_14751 = state_13196__$1;
(statearr_13260_14751[(2)] = null);

(statearr_13260_14751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (28))){
var inst_13129 = (state_13196[(20)]);
var inst_13147 = (state_13196[(23)]);
var inst_13147__$1 = cljs.core.seq(inst_13129);
var state_13196__$1 = (function (){var statearr_13261 = state_13196;
(statearr_13261[(23)] = inst_13147__$1);

return statearr_13261;
})();
if(inst_13147__$1){
var statearr_13262_14752 = state_13196__$1;
(statearr_13262_14752[(1)] = (33));

} else {
var statearr_13263_14753 = state_13196__$1;
(statearr_13263_14753[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (25))){
var inst_13131 = (state_13196[(19)]);
var inst_13132 = (state_13196[(12)]);
var inst_13134 = (inst_13132 < inst_13131);
var inst_13135 = inst_13134;
var state_13196__$1 = state_13196;
if(cljs.core.truth_(inst_13135)){
var statearr_13264_14754 = state_13196__$1;
(statearr_13264_14754[(1)] = (27));

} else {
var statearr_13265_14755 = state_13196__$1;
(statearr_13265_14755[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (34))){
var state_13196__$1 = state_13196;
var statearr_13267_14756 = state_13196__$1;
(statearr_13267_14756[(2)] = null);

(statearr_13267_14756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (17))){
var state_13196__$1 = state_13196;
var statearr_13268_14757 = state_13196__$1;
(statearr_13268_14757[(2)] = null);

(statearr_13268_14757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (3))){
var inst_13187 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13196__$1,inst_13187);
} else {
if((state_val_13197 === (12))){
var inst_13116 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13269_14758 = state_13196__$1;
(statearr_13269_14758[(2)] = inst_13116);

(statearr_13269_14758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (2))){
var state_13196__$1 = state_13196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13196__$1,(4),ch);
} else {
if((state_val_13197 === (23))){
var state_13196__$1 = state_13196;
var statearr_13270_14759 = state_13196__$1;
(statearr_13270_14759[(2)] = null);

(statearr_13270_14759[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (35))){
var inst_13171 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13271_14760 = state_13196__$1;
(statearr_13271_14760[(2)] = inst_13171);

(statearr_13271_14760[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (19))){
var inst_13088 = (state_13196[(7)]);
var inst_13092 = cljs.core.chunk_first(inst_13088);
var inst_13093 = cljs.core.chunk_rest(inst_13088);
var inst_13094 = cljs.core.count(inst_13092);
var inst_13066 = inst_13093;
var inst_13067 = inst_13092;
var inst_13068 = inst_13094;
var inst_13069 = (0);
var state_13196__$1 = (function (){var statearr_13272 = state_13196;
(statearr_13272[(13)] = inst_13066);

(statearr_13272[(14)] = inst_13068);

(statearr_13272[(15)] = inst_13067);

(statearr_13272[(17)] = inst_13069);

return statearr_13272;
})();
var statearr_13273_14761 = state_13196__$1;
(statearr_13273_14761[(2)] = null);

(statearr_13273_14761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (11))){
var inst_13066 = (state_13196[(13)]);
var inst_13088 = (state_13196[(7)]);
var inst_13088__$1 = cljs.core.seq(inst_13066);
var state_13196__$1 = (function (){var statearr_13274 = state_13196;
(statearr_13274[(7)] = inst_13088__$1);

return statearr_13274;
})();
if(inst_13088__$1){
var statearr_13275_14762 = state_13196__$1;
(statearr_13275_14762[(1)] = (16));

} else {
var statearr_13276_14763 = state_13196__$1;
(statearr_13276_14763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (9))){
var inst_13118 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13279_14764 = state_13196__$1;
(statearr_13279_14764[(2)] = inst_13118);

(statearr_13279_14764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (5))){
var inst_13064 = cljs.core.deref(cs);
var inst_13065 = cljs.core.seq(inst_13064);
var inst_13066 = inst_13065;
var inst_13067 = null;
var inst_13068 = (0);
var inst_13069 = (0);
var state_13196__$1 = (function (){var statearr_13280 = state_13196;
(statearr_13280[(13)] = inst_13066);

(statearr_13280[(14)] = inst_13068);

(statearr_13280[(15)] = inst_13067);

(statearr_13280[(17)] = inst_13069);

return statearr_13280;
})();
var statearr_13281_14766 = state_13196__$1;
(statearr_13281_14766[(2)] = null);

(statearr_13281_14766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (14))){
var state_13196__$1 = state_13196;
var statearr_13282_14767 = state_13196__$1;
(statearr_13282_14767[(2)] = null);

(statearr_13282_14767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (45))){
var inst_13179 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13283_14768 = state_13196__$1;
(statearr_13283_14768[(2)] = inst_13179);

(statearr_13283_14768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (26))){
var inst_13121 = (state_13196[(27)]);
var inst_13175 = (state_13196[(2)]);
var inst_13176 = cljs.core.seq(inst_13121);
var state_13196__$1 = (function (){var statearr_13284 = state_13196;
(statearr_13284[(29)] = inst_13175);

return statearr_13284;
})();
if(inst_13176){
var statearr_13285_14770 = state_13196__$1;
(statearr_13285_14770[(1)] = (42));

} else {
var statearr_13286_14771 = state_13196__$1;
(statearr_13286_14771[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (16))){
var inst_13088 = (state_13196[(7)]);
var inst_13090 = cljs.core.chunked_seq_QMARK_(inst_13088);
var state_13196__$1 = state_13196;
if(inst_13090){
var statearr_13287_14772 = state_13196__$1;
(statearr_13287_14772[(1)] = (19));

} else {
var statearr_13288_14773 = state_13196__$1;
(statearr_13288_14773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (38))){
var inst_13168 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13289_14774 = state_13196__$1;
(statearr_13289_14774[(2)] = inst_13168);

(statearr_13289_14774[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (30))){
var state_13196__$1 = state_13196;
var statearr_13290_14775 = state_13196__$1;
(statearr_13290_14775[(2)] = null);

(statearr_13290_14775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (10))){
var inst_13067 = (state_13196[(15)]);
var inst_13069 = (state_13196[(17)]);
var inst_13077 = cljs.core._nth(inst_13067,inst_13069);
var inst_13078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13077,(0),null);
var inst_13079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13077,(1),null);
var state_13196__$1 = (function (){var statearr_13291 = state_13196;
(statearr_13291[(24)] = inst_13078);

return statearr_13291;
})();
if(cljs.core.truth_(inst_13079)){
var statearr_13292_14776 = state_13196__$1;
(statearr_13292_14776[(1)] = (13));

} else {
var statearr_13293_14777 = state_13196__$1;
(statearr_13293_14777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (18))){
var inst_13114 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13294_14778 = state_13196__$1;
(statearr_13294_14778[(2)] = inst_13114);

(statearr_13294_14778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (42))){
var state_13196__$1 = state_13196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13196__$1,(45),dchan);
} else {
if((state_val_13197 === (37))){
var inst_13057 = (state_13196[(9)]);
var inst_13158 = (state_13196[(22)]);
var inst_13147 = (state_13196[(23)]);
var inst_13158__$1 = cljs.core.first(inst_13147);
var inst_13159 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13158__$1,inst_13057,done);
var state_13196__$1 = (function (){var statearr_13295 = state_13196;
(statearr_13295[(22)] = inst_13158__$1);

return statearr_13295;
})();
if(cljs.core.truth_(inst_13159)){
var statearr_13296_14782 = state_13196__$1;
(statearr_13296_14782[(1)] = (39));

} else {
var statearr_13297_14783 = state_13196__$1;
(statearr_13297_14783[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (8))){
var inst_13068 = (state_13196[(14)]);
var inst_13069 = (state_13196[(17)]);
var inst_13071 = (inst_13069 < inst_13068);
var inst_13072 = inst_13071;
var state_13196__$1 = state_13196;
if(cljs.core.truth_(inst_13072)){
var statearr_13298_14784 = state_13196__$1;
(statearr_13298_14784[(1)] = (10));

} else {
var statearr_13299_14785 = state_13196__$1;
(statearr_13299_14785[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__12159__auto__ = null;
var cljs$core$async$mult_$_state_machine__12159__auto____0 = (function (){
var statearr_13300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13300[(0)] = cljs$core$async$mult_$_state_machine__12159__auto__);

(statearr_13300[(1)] = (1));

return statearr_13300;
});
var cljs$core$async$mult_$_state_machine__12159__auto____1 = (function (state_13196){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_13196);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e13301){var ex__12162__auto__ = e13301;
var statearr_13302_14786 = state_13196;
(statearr_13302_14786[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_13196[(4)]))){
var statearr_13303_14787 = state_13196;
(statearr_13303_14787[(1)] = cljs.core.first((state_13196[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14788 = state_13196;
state_13196 = G__14788;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12159__auto__ = function(state_13196){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12159__auto____1.call(this,state_13196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12159__auto____0;
cljs$core$async$mult_$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12159__auto____1;
return cljs$core$async$mult_$_state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_13304 = f__12242__auto__();
(statearr_13304[(6)] = c__12241__auto___14725);

return statearr_13304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__13318 = arguments.length;
switch (G__13318) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_14790 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_14790(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14794 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_14794(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14795 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14795(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14796 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_14796(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14798 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14798(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14802 = arguments.length;
var i__5770__auto___14803 = (0);
while(true){
if((i__5770__auto___14803 < len__5769__auto___14802)){
args__5775__auto__.push((arguments[i__5770__auto___14803]));

var G__14804 = (i__5770__auto___14803 + (1));
i__5770__auto___14803 = G__14804;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13393){
var map__13394 = p__13393;
var map__13394__$1 = cljs.core.__destructure_map(map__13394);
var opts = map__13394__$1;
var statearr_13395_14807 = state;
(statearr_13395_14807[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_13396_14808 = state;
(statearr_13396_14808[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_13397_14811 = state;
(statearr_13397_14811[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13389){
var G__13390 = cljs.core.first(seq13389);
var seq13389__$1 = cljs.core.next(seq13389);
var G__13391 = cljs.core.first(seq13389__$1);
var seq13389__$2 = cljs.core.next(seq13389__$1);
var G__13392 = cljs.core.first(seq13389__$2);
var seq13389__$3 = cljs.core.next(seq13389__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13390,G__13391,G__13392,seq13389__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13408 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13409){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13409 = meta13409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13410,meta13409__$1){
var self__ = this;
var _13410__$1 = this;
return (new cljs.core.async.t_cljs$core$async13408(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13409__$1));
}));

(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13410){
var self__ = this;
var _13410__$1 = this;
return self__.meta13409;
}));

(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13408.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13409","meta13409",-436323013,null)], null);
}));

(cljs.core.async.t_cljs$core$async13408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13408");

(cljs.core.async.t_cljs$core$async13408.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13408.
 */
cljs.core.async.__GT_t_cljs$core$async13408 = (function cljs$core$async$mix_$___GT_t_cljs$core$async13408(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13409){
return (new cljs.core.async.t_cljs$core$async13408(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13409));
});

}

return (new cljs.core.async.t_cljs$core$async13408(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12241__auto___14831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_13481){
var state_val_13482 = (state_13481[(1)]);
if((state_val_13482 === (7))){
var inst_13441 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
if(cljs.core.truth_(inst_13441)){
var statearr_13483_14832 = state_13481__$1;
(statearr_13483_14832[(1)] = (8));

} else {
var statearr_13484_14833 = state_13481__$1;
(statearr_13484_14833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (20))){
var inst_13434 = (state_13481[(7)]);
var state_13481__$1 = state_13481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13481__$1,(23),out,inst_13434);
} else {
if((state_val_13482 === (1))){
var inst_13417 = calc_state();
var inst_13418 = cljs.core.__destructure_map(inst_13417);
var inst_13419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13418,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13418,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13418,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13422 = inst_13417;
var state_13481__$1 = (function (){var statearr_13485 = state_13481;
(statearr_13485[(8)] = inst_13419);

(statearr_13485[(9)] = inst_13421);

(statearr_13485[(10)] = inst_13420);

(statearr_13485[(11)] = inst_13422);

return statearr_13485;
})();
var statearr_13490_14834 = state_13481__$1;
(statearr_13490_14834[(2)] = null);

(statearr_13490_14834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (24))){
var inst_13425 = (state_13481[(12)]);
var inst_13422 = inst_13425;
var state_13481__$1 = (function (){var statearr_13495 = state_13481;
(statearr_13495[(11)] = inst_13422);

return statearr_13495;
})();
var statearr_13496_14835 = state_13481__$1;
(statearr_13496_14835[(2)] = null);

(statearr_13496_14835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (4))){
var inst_13436 = (state_13481[(13)]);
var inst_13434 = (state_13481[(7)]);
var inst_13433 = (state_13481[(2)]);
var inst_13434__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13433,(0),null);
var inst_13435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13433,(1),null);
var inst_13436__$1 = (inst_13434__$1 == null);
var state_13481__$1 = (function (){var statearr_13497 = state_13481;
(statearr_13497[(13)] = inst_13436__$1);

(statearr_13497[(7)] = inst_13434__$1);

(statearr_13497[(14)] = inst_13435);

return statearr_13497;
})();
if(cljs.core.truth_(inst_13436__$1)){
var statearr_13498_14836 = state_13481__$1;
(statearr_13498_14836[(1)] = (5));

} else {
var statearr_13499_14837 = state_13481__$1;
(statearr_13499_14837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (15))){
var inst_13455 = (state_13481[(15)]);
var inst_13426 = (state_13481[(16)]);
var inst_13455__$1 = cljs.core.empty_QMARK_(inst_13426);
var state_13481__$1 = (function (){var statearr_13500 = state_13481;
(statearr_13500[(15)] = inst_13455__$1);

return statearr_13500;
})();
if(inst_13455__$1){
var statearr_13501_14838 = state_13481__$1;
(statearr_13501_14838[(1)] = (17));

} else {
var statearr_13502_14839 = state_13481__$1;
(statearr_13502_14839[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (21))){
var inst_13425 = (state_13481[(12)]);
var inst_13422 = inst_13425;
var state_13481__$1 = (function (){var statearr_13503 = state_13481;
(statearr_13503[(11)] = inst_13422);

return statearr_13503;
})();
var statearr_13504_14840 = state_13481__$1;
(statearr_13504_14840[(2)] = null);

(statearr_13504_14840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (13))){
var inst_13448 = (state_13481[(2)]);
var inst_13449 = calc_state();
var inst_13422 = inst_13449;
var state_13481__$1 = (function (){var statearr_13505 = state_13481;
(statearr_13505[(17)] = inst_13448);

(statearr_13505[(11)] = inst_13422);

return statearr_13505;
})();
var statearr_13506_14841 = state_13481__$1;
(statearr_13506_14841[(2)] = null);

(statearr_13506_14841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (22))){
var inst_13475 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
var statearr_13507_14842 = state_13481__$1;
(statearr_13507_14842[(2)] = inst_13475);

(statearr_13507_14842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (6))){
var inst_13435 = (state_13481[(14)]);
var inst_13439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13435,change);
var state_13481__$1 = state_13481;
var statearr_13508_14843 = state_13481__$1;
(statearr_13508_14843[(2)] = inst_13439);

(statearr_13508_14843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (25))){
var state_13481__$1 = state_13481;
var statearr_13509_14844 = state_13481__$1;
(statearr_13509_14844[(2)] = null);

(statearr_13509_14844[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (17))){
var inst_13427 = (state_13481[(18)]);
var inst_13435 = (state_13481[(14)]);
var inst_13457 = (inst_13427.cljs$core$IFn$_invoke$arity$1 ? inst_13427.cljs$core$IFn$_invoke$arity$1(inst_13435) : inst_13427.call(null,inst_13435));
var inst_13458 = cljs.core.not(inst_13457);
var state_13481__$1 = state_13481;
var statearr_13510_14845 = state_13481__$1;
(statearr_13510_14845[(2)] = inst_13458);

(statearr_13510_14845[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (3))){
var inst_13479 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13481__$1,inst_13479);
} else {
if((state_val_13482 === (12))){
var state_13481__$1 = state_13481;
var statearr_13511_14846 = state_13481__$1;
(statearr_13511_14846[(2)] = null);

(statearr_13511_14846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (2))){
var inst_13425 = (state_13481[(12)]);
var inst_13422 = (state_13481[(11)]);
var inst_13425__$1 = cljs.core.__destructure_map(inst_13422);
var inst_13426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13425__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13425__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13425__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13481__$1 = (function (){var statearr_13512 = state_13481;
(statearr_13512[(18)] = inst_13427);

(statearr_13512[(16)] = inst_13426);

(statearr_13512[(12)] = inst_13425__$1);

return statearr_13512;
})();
return cljs.core.async.ioc_alts_BANG_(state_13481__$1,(4),inst_13428);
} else {
if((state_val_13482 === (23))){
var inst_13466 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
if(cljs.core.truth_(inst_13466)){
var statearr_13513_14859 = state_13481__$1;
(statearr_13513_14859[(1)] = (24));

} else {
var statearr_13514_14860 = state_13481__$1;
(statearr_13514_14860[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (19))){
var inst_13461 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
var statearr_13515_14861 = state_13481__$1;
(statearr_13515_14861[(2)] = inst_13461);

(statearr_13515_14861[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (11))){
var inst_13435 = (state_13481[(14)]);
var inst_13445 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13435);
var state_13481__$1 = state_13481;
var statearr_13516_14862 = state_13481__$1;
(statearr_13516_14862[(2)] = inst_13445);

(statearr_13516_14862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (9))){
var inst_13452 = (state_13481[(19)]);
var inst_13426 = (state_13481[(16)]);
var inst_13435 = (state_13481[(14)]);
var inst_13452__$1 = (inst_13426.cljs$core$IFn$_invoke$arity$1 ? inst_13426.cljs$core$IFn$_invoke$arity$1(inst_13435) : inst_13426.call(null,inst_13435));
var state_13481__$1 = (function (){var statearr_13517 = state_13481;
(statearr_13517[(19)] = inst_13452__$1);

return statearr_13517;
})();
if(cljs.core.truth_(inst_13452__$1)){
var statearr_13518_14863 = state_13481__$1;
(statearr_13518_14863[(1)] = (14));

} else {
var statearr_13519_14864 = state_13481__$1;
(statearr_13519_14864[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (5))){
var inst_13436 = (state_13481[(13)]);
var state_13481__$1 = state_13481;
var statearr_13520_14865 = state_13481__$1;
(statearr_13520_14865[(2)] = inst_13436);

(statearr_13520_14865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (14))){
var inst_13452 = (state_13481[(19)]);
var state_13481__$1 = state_13481;
var statearr_13521_14866 = state_13481__$1;
(statearr_13521_14866[(2)] = inst_13452);

(statearr_13521_14866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (26))){
var inst_13471 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
var statearr_13522_14867 = state_13481__$1;
(statearr_13522_14867[(2)] = inst_13471);

(statearr_13522_14867[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (16))){
var inst_13463 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
if(cljs.core.truth_(inst_13463)){
var statearr_13523_14868 = state_13481__$1;
(statearr_13523_14868[(1)] = (20));

} else {
var statearr_13524_14869 = state_13481__$1;
(statearr_13524_14869[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (10))){
var inst_13477 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
var statearr_13525_14870 = state_13481__$1;
(statearr_13525_14870[(2)] = inst_13477);

(statearr_13525_14870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (18))){
var inst_13455 = (state_13481[(15)]);
var state_13481__$1 = state_13481;
var statearr_13526_14871 = state_13481__$1;
(statearr_13526_14871[(2)] = inst_13455);

(statearr_13526_14871[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (8))){
var inst_13434 = (state_13481[(7)]);
var inst_13443 = (inst_13434 == null);
var state_13481__$1 = state_13481;
if(cljs.core.truth_(inst_13443)){
var statearr_13527_14872 = state_13481__$1;
(statearr_13527_14872[(1)] = (11));

} else {
var statearr_13528_14873 = state_13481__$1;
(statearr_13528_14873[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__12159__auto__ = null;
var cljs$core$async$mix_$_state_machine__12159__auto____0 = (function (){
var statearr_13529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13529[(0)] = cljs$core$async$mix_$_state_machine__12159__auto__);

(statearr_13529[(1)] = (1));

return statearr_13529;
});
var cljs$core$async$mix_$_state_machine__12159__auto____1 = (function (state_13481){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_13481);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e13530){var ex__12162__auto__ = e13530;
var statearr_13531_14874 = state_13481;
(statearr_13531_14874[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_13481[(4)]))){
var statearr_13532_14875 = state_13481;
(statearr_13532_14875[(1)] = cljs.core.first((state_13481[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14876 = state_13481;
state_13481 = G__14876;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12159__auto__ = function(state_13481){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12159__auto____1.call(this,state_13481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12159__auto____0;
cljs$core$async$mix_$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12159__auto____1;
return cljs$core$async$mix_$_state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_13533 = f__12242__auto__();
(statearr_13533[(6)] = c__12241__auto___14831);

return statearr_13533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_14877 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_14877(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14878 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_14878(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14879 = (function() {
var G__14880 = null;
var G__14880__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__14880__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__14880 = function(p,v){
switch(arguments.length){
case 1:
return G__14880__1.call(this,p);
case 2:
return G__14880__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14880.cljs$core$IFn$_invoke$arity$1 = G__14880__1;
G__14880.cljs$core$IFn$_invoke$arity$2 = G__14880__2;
return G__14880;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13546 = arguments.length;
switch (G__13546) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14879(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14879(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__13570 = arguments.length;
switch (G__13570) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13556_SHARP_){
if(cljs.core.truth_((p1__13556_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13556_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13556_SHARP_.call(null,topic)))){
return p1__13556_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13556_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13595 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13596){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13596 = meta13596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13597,meta13596__$1){
var self__ = this;
var _13597__$1 = this;
return (new cljs.core.async.t_cljs$core$async13595(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13596__$1));
}));

(cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13597){
var self__ = this;
var _13597__$1 = this;
return self__.meta13596;
}));

(cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13596","meta13596",-1667620001,null)], null);
}));

(cljs.core.async.t_cljs$core$async13595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13595");

(cljs.core.async.t_cljs$core$async13595.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13595.
 */
cljs.core.async.__GT_t_cljs$core$async13595 = (function cljs$core$async$__GT_t_cljs$core$async13595(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13596){
return (new cljs.core.async.t_cljs$core$async13595(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13596));
});

}

return (new cljs.core.async.t_cljs$core$async13595(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12241__auto___14883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_13673){
var state_val_13674 = (state_13673[(1)]);
if((state_val_13674 === (7))){
var inst_13669 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13675_14884 = state_13673__$1;
(statearr_13675_14884[(2)] = inst_13669);

(statearr_13675_14884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (20))){
var state_13673__$1 = state_13673;
var statearr_13676_14885 = state_13673__$1;
(statearr_13676_14885[(2)] = null);

(statearr_13676_14885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (1))){
var state_13673__$1 = state_13673;
var statearr_13677_14886 = state_13673__$1;
(statearr_13677_14886[(2)] = null);

(statearr_13677_14886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (24))){
var inst_13652 = (state_13673[(7)]);
var inst_13661 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13652);
var state_13673__$1 = state_13673;
var statearr_13678_14887 = state_13673__$1;
(statearr_13678_14887[(2)] = inst_13661);

(statearr_13678_14887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (4))){
var inst_13604 = (state_13673[(8)]);
var inst_13604__$1 = (state_13673[(2)]);
var inst_13605 = (inst_13604__$1 == null);
var state_13673__$1 = (function (){var statearr_13679 = state_13673;
(statearr_13679[(8)] = inst_13604__$1);

return statearr_13679;
})();
if(cljs.core.truth_(inst_13605)){
var statearr_13680_14888 = state_13673__$1;
(statearr_13680_14888[(1)] = (5));

} else {
var statearr_13681_14889 = state_13673__$1;
(statearr_13681_14889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (15))){
var inst_13646 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13683_14890 = state_13673__$1;
(statearr_13683_14890[(2)] = inst_13646);

(statearr_13683_14890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (21))){
var inst_13666 = (state_13673[(2)]);
var state_13673__$1 = (function (){var statearr_13684 = state_13673;
(statearr_13684[(9)] = inst_13666);

return statearr_13684;
})();
var statearr_13685_14891 = state_13673__$1;
(statearr_13685_14891[(2)] = null);

(statearr_13685_14891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (13))){
var inst_13628 = (state_13673[(10)]);
var inst_13630 = cljs.core.chunked_seq_QMARK_(inst_13628);
var state_13673__$1 = state_13673;
if(inst_13630){
var statearr_13686_14892 = state_13673__$1;
(statearr_13686_14892[(1)] = (16));

} else {
var statearr_13687_14893 = state_13673__$1;
(statearr_13687_14893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (22))){
var inst_13658 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
if(cljs.core.truth_(inst_13658)){
var statearr_13688_14894 = state_13673__$1;
(statearr_13688_14894[(1)] = (23));

} else {
var statearr_13689_14895 = state_13673__$1;
(statearr_13689_14895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (6))){
var inst_13604 = (state_13673[(8)]);
var inst_13654 = (state_13673[(11)]);
var inst_13652 = (state_13673[(7)]);
var inst_13652__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13604) : topic_fn.call(null,inst_13604));
var inst_13653 = cljs.core.deref(mults);
var inst_13654__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13653,inst_13652__$1);
var state_13673__$1 = (function (){var statearr_13699 = state_13673;
(statearr_13699[(11)] = inst_13654__$1);

(statearr_13699[(7)] = inst_13652__$1);

return statearr_13699;
})();
if(cljs.core.truth_(inst_13654__$1)){
var statearr_13700_14901 = state_13673__$1;
(statearr_13700_14901[(1)] = (19));

} else {
var statearr_13701_14902 = state_13673__$1;
(statearr_13701_14902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (25))){
var inst_13663 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13702_14903 = state_13673__$1;
(statearr_13702_14903[(2)] = inst_13663);

(statearr_13702_14903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (17))){
var inst_13628 = (state_13673[(10)]);
var inst_13637 = cljs.core.first(inst_13628);
var inst_13638 = cljs.core.async.muxch_STAR_(inst_13637);
var inst_13639 = cljs.core.async.close_BANG_(inst_13638);
var inst_13640 = cljs.core.next(inst_13628);
var inst_13614 = inst_13640;
var inst_13615 = null;
var inst_13616 = (0);
var inst_13617 = (0);
var state_13673__$1 = (function (){var statearr_13703 = state_13673;
(statearr_13703[(12)] = inst_13615);

(statearr_13703[(13)] = inst_13616);

(statearr_13703[(14)] = inst_13617);

(statearr_13703[(15)] = inst_13614);

(statearr_13703[(16)] = inst_13639);

return statearr_13703;
})();
var statearr_13704_14904 = state_13673__$1;
(statearr_13704_14904[(2)] = null);

(statearr_13704_14904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (3))){
var inst_13671 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13673__$1,inst_13671);
} else {
if((state_val_13674 === (12))){
var inst_13648 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13705_14905 = state_13673__$1;
(statearr_13705_14905[(2)] = inst_13648);

(statearr_13705_14905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (2))){
var state_13673__$1 = state_13673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13673__$1,(4),ch);
} else {
if((state_val_13674 === (23))){
var state_13673__$1 = state_13673;
var statearr_13709_14906 = state_13673__$1;
(statearr_13709_14906[(2)] = null);

(statearr_13709_14906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (19))){
var inst_13604 = (state_13673[(8)]);
var inst_13654 = (state_13673[(11)]);
var inst_13656 = cljs.core.async.muxch_STAR_(inst_13654);
var state_13673__$1 = state_13673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13673__$1,(22),inst_13656,inst_13604);
} else {
if((state_val_13674 === (11))){
var inst_13628 = (state_13673[(10)]);
var inst_13614 = (state_13673[(15)]);
var inst_13628__$1 = cljs.core.seq(inst_13614);
var state_13673__$1 = (function (){var statearr_13715 = state_13673;
(statearr_13715[(10)] = inst_13628__$1);

return statearr_13715;
})();
if(inst_13628__$1){
var statearr_13718_14907 = state_13673__$1;
(statearr_13718_14907[(1)] = (13));

} else {
var statearr_13719_14908 = state_13673__$1;
(statearr_13719_14908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (9))){
var inst_13650 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13720_14909 = state_13673__$1;
(statearr_13720_14909[(2)] = inst_13650);

(statearr_13720_14909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (5))){
var inst_13611 = cljs.core.deref(mults);
var inst_13612 = cljs.core.vals(inst_13611);
var inst_13613 = cljs.core.seq(inst_13612);
var inst_13614 = inst_13613;
var inst_13615 = null;
var inst_13616 = (0);
var inst_13617 = (0);
var state_13673__$1 = (function (){var statearr_13721 = state_13673;
(statearr_13721[(12)] = inst_13615);

(statearr_13721[(13)] = inst_13616);

(statearr_13721[(14)] = inst_13617);

(statearr_13721[(15)] = inst_13614);

return statearr_13721;
})();
var statearr_13722_14910 = state_13673__$1;
(statearr_13722_14910[(2)] = null);

(statearr_13722_14910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (14))){
var state_13673__$1 = state_13673;
var statearr_13726_14911 = state_13673__$1;
(statearr_13726_14911[(2)] = null);

(statearr_13726_14911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (16))){
var inst_13628 = (state_13673[(10)]);
var inst_13632 = cljs.core.chunk_first(inst_13628);
var inst_13633 = cljs.core.chunk_rest(inst_13628);
var inst_13634 = cljs.core.count(inst_13632);
var inst_13614 = inst_13633;
var inst_13615 = inst_13632;
var inst_13616 = inst_13634;
var inst_13617 = (0);
var state_13673__$1 = (function (){var statearr_13727 = state_13673;
(statearr_13727[(12)] = inst_13615);

(statearr_13727[(13)] = inst_13616);

(statearr_13727[(14)] = inst_13617);

(statearr_13727[(15)] = inst_13614);

return statearr_13727;
})();
var statearr_13728_14912 = state_13673__$1;
(statearr_13728_14912[(2)] = null);

(statearr_13728_14912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (10))){
var inst_13615 = (state_13673[(12)]);
var inst_13616 = (state_13673[(13)]);
var inst_13617 = (state_13673[(14)]);
var inst_13614 = (state_13673[(15)]);
var inst_13622 = cljs.core._nth(inst_13615,inst_13617);
var inst_13623 = cljs.core.async.muxch_STAR_(inst_13622);
var inst_13624 = cljs.core.async.close_BANG_(inst_13623);
var inst_13625 = (inst_13617 + (1));
var tmp13723 = inst_13615;
var tmp13724 = inst_13616;
var tmp13725 = inst_13614;
var inst_13614__$1 = tmp13725;
var inst_13615__$1 = tmp13723;
var inst_13616__$1 = tmp13724;
var inst_13617__$1 = inst_13625;
var state_13673__$1 = (function (){var statearr_13729 = state_13673;
(statearr_13729[(12)] = inst_13615__$1);

(statearr_13729[(13)] = inst_13616__$1);

(statearr_13729[(14)] = inst_13617__$1);

(statearr_13729[(15)] = inst_13614__$1);

(statearr_13729[(17)] = inst_13624);

return statearr_13729;
})();
var statearr_13730_14913 = state_13673__$1;
(statearr_13730_14913[(2)] = null);

(statearr_13730_14913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (18))){
var inst_13643 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13731_14914 = state_13673__$1;
(statearr_13731_14914[(2)] = inst_13643);

(statearr_13731_14914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (8))){
var inst_13616 = (state_13673[(13)]);
var inst_13617 = (state_13673[(14)]);
var inst_13619 = (inst_13617 < inst_13616);
var inst_13620 = inst_13619;
var state_13673__$1 = state_13673;
if(cljs.core.truth_(inst_13620)){
var statearr_13732_14915 = state_13673__$1;
(statearr_13732_14915[(1)] = (10));

} else {
var statearr_13733_14916 = state_13673__$1;
(statearr_13733_14916[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_13734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13734[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_13734[(1)] = (1));

return statearr_13734;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_13673){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_13673);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e13735){var ex__12162__auto__ = e13735;
var statearr_13736_14918 = state_13673;
(statearr_13736_14918[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_13673[(4)]))){
var statearr_13737_14919 = state_13673;
(statearr_13737_14919[(1)] = cljs.core.first((state_13673[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14920 = state_13673;
state_13673 = G__14920;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_13673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_13673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_13738 = f__12242__auto__();
(statearr_13738[(6)] = c__12241__auto___14883);

return statearr_13738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13740 = arguments.length;
switch (G__13740) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13746 = arguments.length;
switch (G__13746) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13751 = arguments.length;
switch (G__13751) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__12241__auto___14927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_13798){
var state_val_13799 = (state_13798[(1)]);
if((state_val_13799 === (7))){
var state_13798__$1 = state_13798;
var statearr_13800_14928 = state_13798__$1;
(statearr_13800_14928[(2)] = null);

(statearr_13800_14928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (1))){
var state_13798__$1 = state_13798;
var statearr_13801_14929 = state_13798__$1;
(statearr_13801_14929[(2)] = null);

(statearr_13801_14929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (4))){
var inst_13755 = (state_13798[(7)]);
var inst_13754 = (state_13798[(8)]);
var inst_13757 = (inst_13755 < inst_13754);
var state_13798__$1 = state_13798;
if(cljs.core.truth_(inst_13757)){
var statearr_13802_14930 = state_13798__$1;
(statearr_13802_14930[(1)] = (6));

} else {
var statearr_13803_14931 = state_13798__$1;
(statearr_13803_14931[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (15))){
var inst_13781 = (state_13798[(9)]);
var inst_13789 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13781);
var state_13798__$1 = state_13798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13798__$1,(17),out,inst_13789);
} else {
if((state_val_13799 === (13))){
var inst_13781 = (state_13798[(9)]);
var inst_13781__$1 = (state_13798[(2)]);
var inst_13784 = cljs.core.some(cljs.core.nil_QMARK_,inst_13781__$1);
var state_13798__$1 = (function (){var statearr_13804 = state_13798;
(statearr_13804[(9)] = inst_13781__$1);

return statearr_13804;
})();
if(cljs.core.truth_(inst_13784)){
var statearr_13805_14932 = state_13798__$1;
(statearr_13805_14932[(1)] = (14));

} else {
var statearr_13806_14933 = state_13798__$1;
(statearr_13806_14933[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (6))){
var state_13798__$1 = state_13798;
var statearr_13807_14934 = state_13798__$1;
(statearr_13807_14934[(2)] = null);

(statearr_13807_14934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (17))){
var inst_13791 = (state_13798[(2)]);
var state_13798__$1 = (function (){var statearr_13810 = state_13798;
(statearr_13810[(10)] = inst_13791);

return statearr_13810;
})();
var statearr_13811_14935 = state_13798__$1;
(statearr_13811_14935[(2)] = null);

(statearr_13811_14935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (3))){
var inst_13796 = (state_13798[(2)]);
var state_13798__$1 = state_13798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13798__$1,inst_13796);
} else {
if((state_val_13799 === (12))){
var _ = (function (){var statearr_13812 = state_13798;
(statearr_13812[(4)] = cljs.core.rest((state_13798[(4)])));

return statearr_13812;
})();
var state_13798__$1 = state_13798;
var ex13809 = (state_13798__$1[(2)]);
var statearr_13813_14936 = state_13798__$1;
(statearr_13813_14936[(5)] = ex13809);


if((ex13809 instanceof Object)){
var statearr_13814_14937 = state_13798__$1;
(statearr_13814_14937[(1)] = (11));

(statearr_13814_14937[(5)] = null);

} else {
throw ex13809;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (2))){
var inst_13753 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13754 = cnt;
var inst_13755 = (0);
var state_13798__$1 = (function (){var statearr_13817 = state_13798;
(statearr_13817[(11)] = inst_13753);

(statearr_13817[(7)] = inst_13755);

(statearr_13817[(8)] = inst_13754);

return statearr_13817;
})();
var statearr_13818_14938 = state_13798__$1;
(statearr_13818_14938[(2)] = null);

(statearr_13818_14938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (11))){
var inst_13759 = (state_13798[(2)]);
var inst_13760 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13798__$1 = (function (){var statearr_13819 = state_13798;
(statearr_13819[(12)] = inst_13759);

return statearr_13819;
})();
var statearr_13820_14939 = state_13798__$1;
(statearr_13820_14939[(2)] = inst_13760);

(statearr_13820_14939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (9))){
var inst_13755 = (state_13798[(7)]);
var _ = (function (){var statearr_13821 = state_13798;
(statearr_13821[(4)] = cljs.core.cons((12),(state_13798[(4)])));

return statearr_13821;
})();
var inst_13766 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13755) : chs__$1.call(null,inst_13755));
var inst_13767 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13755) : done.call(null,inst_13755));
var inst_13768 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13766,inst_13767);
var ___$1 = (function (){var statearr_13822 = state_13798;
(statearr_13822[(4)] = cljs.core.rest((state_13798[(4)])));

return statearr_13822;
})();
var state_13798__$1 = state_13798;
var statearr_13823_14940 = state_13798__$1;
(statearr_13823_14940[(2)] = inst_13768);

(statearr_13823_14940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (5))){
var inst_13778 = (state_13798[(2)]);
var state_13798__$1 = (function (){var statearr_13824 = state_13798;
(statearr_13824[(13)] = inst_13778);

return statearr_13824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13798__$1,(13),dchan);
} else {
if((state_val_13799 === (14))){
var inst_13787 = cljs.core.async.close_BANG_(out);
var state_13798__$1 = state_13798;
var statearr_13854_14941 = state_13798__$1;
(statearr_13854_14941[(2)] = inst_13787);

(statearr_13854_14941[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (16))){
var inst_13794 = (state_13798[(2)]);
var state_13798__$1 = state_13798;
var statearr_13921_14942 = state_13798__$1;
(statearr_13921_14942[(2)] = inst_13794);

(statearr_13921_14942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (10))){
var inst_13755 = (state_13798[(7)]);
var inst_13771 = (state_13798[(2)]);
var inst_13772 = (inst_13755 + (1));
var inst_13755__$1 = inst_13772;
var state_13798__$1 = (function (){var statearr_13927 = state_13798;
(statearr_13927[(14)] = inst_13771);

(statearr_13927[(7)] = inst_13755__$1);

return statearr_13927;
})();
var statearr_13929_14943 = state_13798__$1;
(statearr_13929_14943[(2)] = null);

(statearr_13929_14943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (8))){
var inst_13776 = (state_13798[(2)]);
var state_13798__$1 = state_13798;
var statearr_13938_14944 = state_13798__$1;
(statearr_13938_14944[(2)] = inst_13776);

(statearr_13938_14944[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_13942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13942[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_13942[(1)] = (1));

return statearr_13942;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_13798){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_13798);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e13943){var ex__12162__auto__ = e13943;
var statearr_13944_14945 = state_13798;
(statearr_13944_14945[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_13798[(4)]))){
var statearr_13945_14946 = state_13798;
(statearr_13945_14946[(1)] = cljs.core.first((state_13798[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14947 = state_13798;
state_13798 = G__14947;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_13798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_13798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_13946 = f__12242__auto__();
(statearr_13946[(6)] = c__12241__auto___14927);

return statearr_13946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13957 = arguments.length;
switch (G__13957) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12241__auto___14949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_14035){
var state_val_14036 = (state_14035[(1)]);
if((state_val_14036 === (7))){
var inst_13986 = (state_14035[(7)]);
var inst_13985 = (state_14035[(8)]);
var inst_13985__$1 = (state_14035[(2)]);
var inst_13986__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13985__$1,(0),null);
var inst_13991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13985__$1,(1),null);
var inst_13992 = (inst_13986__$1 == null);
var state_14035__$1 = (function (){var statearr_14038 = state_14035;
(statearr_14038[(7)] = inst_13986__$1);

(statearr_14038[(9)] = inst_13991);

(statearr_14038[(8)] = inst_13985__$1);

return statearr_14038;
})();
if(cljs.core.truth_(inst_13992)){
var statearr_14043_14950 = state_14035__$1;
(statearr_14043_14950[(1)] = (8));

} else {
var statearr_14044_14952 = state_14035__$1;
(statearr_14044_14952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (1))){
var inst_13975 = cljs.core.vec(chs);
var inst_13976 = inst_13975;
var state_14035__$1 = (function (){var statearr_14049 = state_14035;
(statearr_14049[(10)] = inst_13976);

return statearr_14049;
})();
var statearr_14050_14953 = state_14035__$1;
(statearr_14050_14953[(2)] = null);

(statearr_14050_14953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (4))){
var inst_13976 = (state_14035[(10)]);
var state_14035__$1 = state_14035;
return cljs.core.async.ioc_alts_BANG_(state_14035__$1,(7),inst_13976);
} else {
if((state_val_14036 === (6))){
var inst_14027 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14053_14955 = state_14035__$1;
(statearr_14053_14955[(2)] = inst_14027);

(statearr_14053_14955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (3))){
var inst_14029 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14035__$1,inst_14029);
} else {
if((state_val_14036 === (2))){
var inst_13976 = (state_14035[(10)]);
var inst_13978 = cljs.core.count(inst_13976);
var inst_13979 = (inst_13978 > (0));
var state_14035__$1 = state_14035;
if(cljs.core.truth_(inst_13979)){
var statearr_14058_14956 = state_14035__$1;
(statearr_14058_14956[(1)] = (4));

} else {
var statearr_14059_14957 = state_14035__$1;
(statearr_14059_14957[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (11))){
var inst_13976 = (state_14035[(10)]);
var inst_14020 = (state_14035[(2)]);
var tmp14054 = inst_13976;
var inst_13976__$1 = tmp14054;
var state_14035__$1 = (function (){var statearr_14066 = state_14035;
(statearr_14066[(10)] = inst_13976__$1);

(statearr_14066[(11)] = inst_14020);

return statearr_14066;
})();
var statearr_14067_14958 = state_14035__$1;
(statearr_14067_14958[(2)] = null);

(statearr_14067_14958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (9))){
var inst_13986 = (state_14035[(7)]);
var state_14035__$1 = state_14035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14035__$1,(11),out,inst_13986);
} else {
if((state_val_14036 === (5))){
var inst_14025 = cljs.core.async.close_BANG_(out);
var state_14035__$1 = state_14035;
var statearr_14071_14959 = state_14035__$1;
(statearr_14071_14959[(2)] = inst_14025);

(statearr_14071_14959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (10))){
var inst_14023 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14072_14960 = state_14035__$1;
(statearr_14072_14960[(2)] = inst_14023);

(statearr_14072_14960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (8))){
var inst_13986 = (state_14035[(7)]);
var inst_13976 = (state_14035[(10)]);
var inst_13991 = (state_14035[(9)]);
var inst_13985 = (state_14035[(8)]);
var inst_14015 = (function (){var cs = inst_13976;
var vec__13981 = inst_13985;
var v = inst_13986;
var c = inst_13991;
return (function (p1__13947_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13947_SHARP_);
});
})();
var inst_14016 = cljs.core.filterv(inst_14015,inst_13976);
var inst_13976__$1 = inst_14016;
var state_14035__$1 = (function (){var statearr_14073 = state_14035;
(statearr_14073[(10)] = inst_13976__$1);

return statearr_14073;
})();
var statearr_14074_14961 = state_14035__$1;
(statearr_14074_14961[(2)] = null);

(statearr_14074_14961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_14075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14075[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_14075[(1)] = (1));

return statearr_14075;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_14035){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_14035);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e14078){var ex__12162__auto__ = e14078;
var statearr_14079_14962 = state_14035;
(statearr_14079_14962[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_14035[(4)]))){
var statearr_14080_14964 = state_14035;
(statearr_14080_14964[(1)] = cljs.core.first((state_14035[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14965 = state_14035;
state_14035 = G__14965;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_14035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_14035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_14081 = f__12242__auto__();
(statearr_14081[(6)] = c__12241__auto___14949);

return statearr_14081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14095 = arguments.length;
switch (G__14095) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12241__auto___14967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_14119){
var state_val_14120 = (state_14119[(1)]);
if((state_val_14120 === (7))){
var inst_14101 = (state_14119[(7)]);
var inst_14101__$1 = (state_14119[(2)]);
var inst_14102 = (inst_14101__$1 == null);
var inst_14103 = cljs.core.not(inst_14102);
var state_14119__$1 = (function (){var statearr_14121 = state_14119;
(statearr_14121[(7)] = inst_14101__$1);

return statearr_14121;
})();
if(inst_14103){
var statearr_14122_14972 = state_14119__$1;
(statearr_14122_14972[(1)] = (8));

} else {
var statearr_14123_14973 = state_14119__$1;
(statearr_14123_14973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14120 === (1))){
var inst_14096 = (0);
var state_14119__$1 = (function (){var statearr_14124 = state_14119;
(statearr_14124[(8)] = inst_14096);

return statearr_14124;
})();
var statearr_14125_14974 = state_14119__$1;
(statearr_14125_14974[(2)] = null);

(statearr_14125_14974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14120 === (4))){
var state_14119__$1 = state_14119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14119__$1,(7),ch);
} else {
if((state_val_14120 === (6))){
var inst_14114 = (state_14119[(2)]);
var state_14119__$1 = state_14119;
var statearr_14126_14975 = state_14119__$1;
(statearr_14126_14975[(2)] = inst_14114);

(statearr_14126_14975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14120 === (3))){
var inst_14116 = (state_14119[(2)]);
var inst_14117 = cljs.core.async.close_BANG_(out);
var state_14119__$1 = (function (){var statearr_14127 = state_14119;
(statearr_14127[(9)] = inst_14116);

return statearr_14127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14119__$1,inst_14117);
} else {
if((state_val_14120 === (2))){
var inst_14096 = (state_14119[(8)]);
var inst_14098 = (inst_14096 < n);
var state_14119__$1 = state_14119;
if(cljs.core.truth_(inst_14098)){
var statearr_14128_14976 = state_14119__$1;
(statearr_14128_14976[(1)] = (4));

} else {
var statearr_14129_14977 = state_14119__$1;
(statearr_14129_14977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14120 === (11))){
var inst_14096 = (state_14119[(8)]);
var inst_14106 = (state_14119[(2)]);
var inst_14107 = (inst_14096 + (1));
var inst_14096__$1 = inst_14107;
var state_14119__$1 = (function (){var statearr_14130 = state_14119;
(statearr_14130[(8)] = inst_14096__$1);

(statearr_14130[(10)] = inst_14106);

return statearr_14130;
})();
var statearr_14131_14978 = state_14119__$1;
(statearr_14131_14978[(2)] = null);

(statearr_14131_14978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14120 === (9))){
var state_14119__$1 = state_14119;
var statearr_14132_14979 = state_14119__$1;
(statearr_14132_14979[(2)] = null);

(statearr_14132_14979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14120 === (5))){
var state_14119__$1 = state_14119;
var statearr_14133_14980 = state_14119__$1;
(statearr_14133_14980[(2)] = null);

(statearr_14133_14980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14120 === (10))){
var inst_14111 = (state_14119[(2)]);
var state_14119__$1 = state_14119;
var statearr_14134_14981 = state_14119__$1;
(statearr_14134_14981[(2)] = inst_14111);

(statearr_14134_14981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14120 === (8))){
var inst_14101 = (state_14119[(7)]);
var state_14119__$1 = state_14119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14119__$1,(11),out,inst_14101);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_14135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14135[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_14135[(1)] = (1));

return statearr_14135;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_14119){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_14119);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e14136){var ex__12162__auto__ = e14136;
var statearr_14137_14982 = state_14119;
(statearr_14137_14982[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_14119[(4)]))){
var statearr_14138_14983 = state_14119;
(statearr_14138_14983[(1)] = cljs.core.first((state_14119[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14984 = state_14119;
state_14119 = G__14984;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_14119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_14119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_14139 = f__12242__auto__();
(statearr_14139[(6)] = c__12241__auto___14967);

return statearr_14139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14141 = (function (f,ch,meta14142){
this.f = f;
this.ch = ch;
this.meta14142 = meta14142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14143,meta14142__$1){
var self__ = this;
var _14143__$1 = this;
return (new cljs.core.async.t_cljs$core$async14141(self__.f,self__.ch,meta14142__$1));
}));

(cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14143){
var self__ = this;
var _14143__$1 = this;
return self__.meta14142;
}));

(cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14144 = (function (f,ch,meta14142,_,fn1,meta14145){
this.f = f;
this.ch = ch;
this.meta14142 = meta14142;
this._ = _;
this.fn1 = fn1;
this.meta14145 = meta14145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14146,meta14145__$1){
var self__ = this;
var _14146__$1 = this;
return (new cljs.core.async.t_cljs$core$async14144(self__.f,self__.ch,self__.meta14142,self__._,self__.fn1,meta14145__$1));
}));

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14146){
var self__ = this;
var _14146__$1 = this;
return self__.meta14145;
}));

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14140_SHARP_){
var G__14147 = (((p1__14140_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14140_SHARP_) : self__.f.call(null,p1__14140_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14147) : f1.call(null,G__14147));
});
}));

(cljs.core.async.t_cljs$core$async14144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14142","meta14142",172275610,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14141","cljs.core.async/t_cljs$core$async14141",-1006927687,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14145","meta14145",1456649990,null)], null);
}));

(cljs.core.async.t_cljs$core$async14144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14144");

(cljs.core.async.t_cljs$core$async14144.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14144.
 */
cljs.core.async.__GT_t_cljs$core$async14144 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14144(f__$1,ch__$1,meta14142__$1,___$2,fn1__$1,meta14145){
return (new cljs.core.async.t_cljs$core$async14144(f__$1,ch__$1,meta14142__$1,___$2,fn1__$1,meta14145));
});

}

return (new cljs.core.async.t_cljs$core$async14144(self__.f,self__.ch,self__.meta14142,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14148 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14148) : self__.f.call(null,G__14148));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14142","meta14142",172275610,null)], null);
}));

(cljs.core.async.t_cljs$core$async14141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14141");

(cljs.core.async.t_cljs$core$async14141.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14141.
 */
cljs.core.async.__GT_t_cljs$core$async14141 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14141(f__$1,ch__$1,meta14142){
return (new cljs.core.async.t_cljs$core$async14141(f__$1,ch__$1,meta14142));
});

}

return (new cljs.core.async.t_cljs$core$async14141(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14149 = (function (f,ch,meta14150){
this.f = f;
this.ch = ch;
this.meta14150 = meta14150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14151,meta14150__$1){
var self__ = this;
var _14151__$1 = this;
return (new cljs.core.async.t_cljs$core$async14149(self__.f,self__.ch,meta14150__$1));
}));

(cljs.core.async.t_cljs$core$async14149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14151){
var self__ = this;
var _14151__$1 = this;
return self__.meta14150;
}));

(cljs.core.async.t_cljs$core$async14149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14150","meta14150",577824481,null)], null);
}));

(cljs.core.async.t_cljs$core$async14149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14149");

(cljs.core.async.t_cljs$core$async14149.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14149.
 */
cljs.core.async.__GT_t_cljs$core$async14149 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14149(f__$1,ch__$1,meta14150){
return (new cljs.core.async.t_cljs$core$async14149(f__$1,ch__$1,meta14150));
});

}

return (new cljs.core.async.t_cljs$core$async14149(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14152 = (function (p,ch,meta14153){
this.p = p;
this.ch = ch;
this.meta14153 = meta14153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14154,meta14153__$1){
var self__ = this;
var _14154__$1 = this;
return (new cljs.core.async.t_cljs$core$async14152(self__.p,self__.ch,meta14153__$1));
}));

(cljs.core.async.t_cljs$core$async14152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14154){
var self__ = this;
var _14154__$1 = this;
return self__.meta14153;
}));

(cljs.core.async.t_cljs$core$async14152.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14152.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14152.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14153","meta14153",56657647,null)], null);
}));

(cljs.core.async.t_cljs$core$async14152.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14152");

(cljs.core.async.t_cljs$core$async14152.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14152");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14152.
 */
cljs.core.async.__GT_t_cljs$core$async14152 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14152(p__$1,ch__$1,meta14153){
return (new cljs.core.async.t_cljs$core$async14152(p__$1,ch__$1,meta14153));
});

}

return (new cljs.core.async.t_cljs$core$async14152(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14156 = arguments.length;
switch (G__14156) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12241__auto___15006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_14177){
var state_val_14178 = (state_14177[(1)]);
if((state_val_14178 === (7))){
var inst_14173 = (state_14177[(2)]);
var state_14177__$1 = state_14177;
var statearr_14179_15007 = state_14177__$1;
(statearr_14179_15007[(2)] = inst_14173);

(statearr_14179_15007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14178 === (1))){
var state_14177__$1 = state_14177;
var statearr_14180_15008 = state_14177__$1;
(statearr_14180_15008[(2)] = null);

(statearr_14180_15008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14178 === (4))){
var inst_14159 = (state_14177[(7)]);
var inst_14159__$1 = (state_14177[(2)]);
var inst_14160 = (inst_14159__$1 == null);
var state_14177__$1 = (function (){var statearr_14181 = state_14177;
(statearr_14181[(7)] = inst_14159__$1);

return statearr_14181;
})();
if(cljs.core.truth_(inst_14160)){
var statearr_14182_15009 = state_14177__$1;
(statearr_14182_15009[(1)] = (5));

} else {
var statearr_14183_15010 = state_14177__$1;
(statearr_14183_15010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14178 === (6))){
var inst_14159 = (state_14177[(7)]);
var inst_14164 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14159) : p.call(null,inst_14159));
var state_14177__$1 = state_14177;
if(cljs.core.truth_(inst_14164)){
var statearr_14184_15011 = state_14177__$1;
(statearr_14184_15011[(1)] = (8));

} else {
var statearr_14185_15012 = state_14177__$1;
(statearr_14185_15012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14178 === (3))){
var inst_14175 = (state_14177[(2)]);
var state_14177__$1 = state_14177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14177__$1,inst_14175);
} else {
if((state_val_14178 === (2))){
var state_14177__$1 = state_14177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14177__$1,(4),ch);
} else {
if((state_val_14178 === (11))){
var inst_14167 = (state_14177[(2)]);
var state_14177__$1 = state_14177;
var statearr_14186_15013 = state_14177__$1;
(statearr_14186_15013[(2)] = inst_14167);

(statearr_14186_15013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14178 === (9))){
var state_14177__$1 = state_14177;
var statearr_14187_15014 = state_14177__$1;
(statearr_14187_15014[(2)] = null);

(statearr_14187_15014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14178 === (5))){
var inst_14162 = cljs.core.async.close_BANG_(out);
var state_14177__$1 = state_14177;
var statearr_14188_15015 = state_14177__$1;
(statearr_14188_15015[(2)] = inst_14162);

(statearr_14188_15015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14178 === (10))){
var inst_14170 = (state_14177[(2)]);
var state_14177__$1 = (function (){var statearr_14189 = state_14177;
(statearr_14189[(8)] = inst_14170);

return statearr_14189;
})();
var statearr_14190_15016 = state_14177__$1;
(statearr_14190_15016[(2)] = null);

(statearr_14190_15016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14178 === (8))){
var inst_14159 = (state_14177[(7)]);
var state_14177__$1 = state_14177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14177__$1,(11),out,inst_14159);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_14191 = [null,null,null,null,null,null,null,null,null];
(statearr_14191[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_14191[(1)] = (1));

return statearr_14191;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_14177){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_14177);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e14192){var ex__12162__auto__ = e14192;
var statearr_14193_15019 = state_14177;
(statearr_14193_15019[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_14177[(4)]))){
var statearr_14194_15020 = state_14177;
(statearr_14194_15020[(1)] = cljs.core.first((state_14177[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15021 = state_14177;
state_14177 = G__15021;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_14177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_14177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_14195 = f__12242__auto__();
(statearr_14195[(6)] = c__12241__auto___15006);

return statearr_14195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14197 = arguments.length;
switch (G__14197) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12241__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_14259){
var state_val_14260 = (state_14259[(1)]);
if((state_val_14260 === (7))){
var inst_14255 = (state_14259[(2)]);
var state_14259__$1 = state_14259;
var statearr_14261_15023 = state_14259__$1;
(statearr_14261_15023[(2)] = inst_14255);

(statearr_14261_15023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (20))){
var inst_14225 = (state_14259[(7)]);
var inst_14236 = (state_14259[(2)]);
var inst_14237 = cljs.core.next(inst_14225);
var inst_14211 = inst_14237;
var inst_14212 = null;
var inst_14213 = (0);
var inst_14214 = (0);
var state_14259__$1 = (function (){var statearr_14262 = state_14259;
(statearr_14262[(8)] = inst_14211);

(statearr_14262[(9)] = inst_14212);

(statearr_14262[(10)] = inst_14214);

(statearr_14262[(11)] = inst_14236);

(statearr_14262[(12)] = inst_14213);

return statearr_14262;
})();
var statearr_14263_15024 = state_14259__$1;
(statearr_14263_15024[(2)] = null);

(statearr_14263_15024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (1))){
var state_14259__$1 = state_14259;
var statearr_14264_15025 = state_14259__$1;
(statearr_14264_15025[(2)] = null);

(statearr_14264_15025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (4))){
var inst_14200 = (state_14259[(13)]);
var inst_14200__$1 = (state_14259[(2)]);
var inst_14201 = (inst_14200__$1 == null);
var state_14259__$1 = (function (){var statearr_14265 = state_14259;
(statearr_14265[(13)] = inst_14200__$1);

return statearr_14265;
})();
if(cljs.core.truth_(inst_14201)){
var statearr_14266_15026 = state_14259__$1;
(statearr_14266_15026[(1)] = (5));

} else {
var statearr_14267_15027 = state_14259__$1;
(statearr_14267_15027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (15))){
var state_14259__$1 = state_14259;
var statearr_14271_15028 = state_14259__$1;
(statearr_14271_15028[(2)] = null);

(statearr_14271_15028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (21))){
var state_14259__$1 = state_14259;
var statearr_14272_15029 = state_14259__$1;
(statearr_14272_15029[(2)] = null);

(statearr_14272_15029[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (13))){
var inst_14211 = (state_14259[(8)]);
var inst_14212 = (state_14259[(9)]);
var inst_14214 = (state_14259[(10)]);
var inst_14213 = (state_14259[(12)]);
var inst_14221 = (state_14259[(2)]);
var inst_14222 = (inst_14214 + (1));
var tmp14268 = inst_14211;
var tmp14269 = inst_14212;
var tmp14270 = inst_14213;
var inst_14211__$1 = tmp14268;
var inst_14212__$1 = tmp14269;
var inst_14213__$1 = tmp14270;
var inst_14214__$1 = inst_14222;
var state_14259__$1 = (function (){var statearr_14273 = state_14259;
(statearr_14273[(8)] = inst_14211__$1);

(statearr_14273[(9)] = inst_14212__$1);

(statearr_14273[(10)] = inst_14214__$1);

(statearr_14273[(14)] = inst_14221);

(statearr_14273[(12)] = inst_14213__$1);

return statearr_14273;
})();
var statearr_14274_15030 = state_14259__$1;
(statearr_14274_15030[(2)] = null);

(statearr_14274_15030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (22))){
var state_14259__$1 = state_14259;
var statearr_14275_15031 = state_14259__$1;
(statearr_14275_15031[(2)] = null);

(statearr_14275_15031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (6))){
var inst_14200 = (state_14259[(13)]);
var inst_14209 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14200) : f.call(null,inst_14200));
var inst_14210 = cljs.core.seq(inst_14209);
var inst_14211 = inst_14210;
var inst_14212 = null;
var inst_14213 = (0);
var inst_14214 = (0);
var state_14259__$1 = (function (){var statearr_14276 = state_14259;
(statearr_14276[(8)] = inst_14211);

(statearr_14276[(9)] = inst_14212);

(statearr_14276[(10)] = inst_14214);

(statearr_14276[(12)] = inst_14213);

return statearr_14276;
})();
var statearr_14277_15036 = state_14259__$1;
(statearr_14277_15036[(2)] = null);

(statearr_14277_15036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (17))){
var inst_14225 = (state_14259[(7)]);
var inst_14229 = cljs.core.chunk_first(inst_14225);
var inst_14230 = cljs.core.chunk_rest(inst_14225);
var inst_14231 = cljs.core.count(inst_14229);
var inst_14211 = inst_14230;
var inst_14212 = inst_14229;
var inst_14213 = inst_14231;
var inst_14214 = (0);
var state_14259__$1 = (function (){var statearr_14278 = state_14259;
(statearr_14278[(8)] = inst_14211);

(statearr_14278[(9)] = inst_14212);

(statearr_14278[(10)] = inst_14214);

(statearr_14278[(12)] = inst_14213);

return statearr_14278;
})();
var statearr_14279_15037 = state_14259__$1;
(statearr_14279_15037[(2)] = null);

(statearr_14279_15037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (3))){
var inst_14257 = (state_14259[(2)]);
var state_14259__$1 = state_14259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14259__$1,inst_14257);
} else {
if((state_val_14260 === (12))){
var inst_14245 = (state_14259[(2)]);
var state_14259__$1 = state_14259;
var statearr_14280_15038 = state_14259__$1;
(statearr_14280_15038[(2)] = inst_14245);

(statearr_14280_15038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (2))){
var state_14259__$1 = state_14259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14259__$1,(4),in$);
} else {
if((state_val_14260 === (23))){
var inst_14253 = (state_14259[(2)]);
var state_14259__$1 = state_14259;
var statearr_14281_15039 = state_14259__$1;
(statearr_14281_15039[(2)] = inst_14253);

(statearr_14281_15039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (19))){
var inst_14240 = (state_14259[(2)]);
var state_14259__$1 = state_14259;
var statearr_14282_15040 = state_14259__$1;
(statearr_14282_15040[(2)] = inst_14240);

(statearr_14282_15040[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (11))){
var inst_14211 = (state_14259[(8)]);
var inst_14225 = (state_14259[(7)]);
var inst_14225__$1 = cljs.core.seq(inst_14211);
var state_14259__$1 = (function (){var statearr_14283 = state_14259;
(statearr_14283[(7)] = inst_14225__$1);

return statearr_14283;
})();
if(inst_14225__$1){
var statearr_14284_15041 = state_14259__$1;
(statearr_14284_15041[(1)] = (14));

} else {
var statearr_14285_15042 = state_14259__$1;
(statearr_14285_15042[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (9))){
var inst_14247 = (state_14259[(2)]);
var inst_14248 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14259__$1 = (function (){var statearr_14286 = state_14259;
(statearr_14286[(15)] = inst_14247);

return statearr_14286;
})();
if(cljs.core.truth_(inst_14248)){
var statearr_14287_15043 = state_14259__$1;
(statearr_14287_15043[(1)] = (21));

} else {
var statearr_14288_15044 = state_14259__$1;
(statearr_14288_15044[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (5))){
var inst_14203 = cljs.core.async.close_BANG_(out);
var state_14259__$1 = state_14259;
var statearr_14289_15045 = state_14259__$1;
(statearr_14289_15045[(2)] = inst_14203);

(statearr_14289_15045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (14))){
var inst_14225 = (state_14259[(7)]);
var inst_14227 = cljs.core.chunked_seq_QMARK_(inst_14225);
var state_14259__$1 = state_14259;
if(inst_14227){
var statearr_14290_15056 = state_14259__$1;
(statearr_14290_15056[(1)] = (17));

} else {
var statearr_14291_15057 = state_14259__$1;
(statearr_14291_15057[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (16))){
var inst_14243 = (state_14259[(2)]);
var state_14259__$1 = state_14259;
var statearr_14292_15058 = state_14259__$1;
(statearr_14292_15058[(2)] = inst_14243);

(statearr_14292_15058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (10))){
var inst_14212 = (state_14259[(9)]);
var inst_14214 = (state_14259[(10)]);
var inst_14219 = cljs.core._nth(inst_14212,inst_14214);
var state_14259__$1 = state_14259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14259__$1,(13),out,inst_14219);
} else {
if((state_val_14260 === (18))){
var inst_14225 = (state_14259[(7)]);
var inst_14234 = cljs.core.first(inst_14225);
var state_14259__$1 = state_14259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14259__$1,(20),out,inst_14234);
} else {
if((state_val_14260 === (8))){
var inst_14214 = (state_14259[(10)]);
var inst_14213 = (state_14259[(12)]);
var inst_14216 = (inst_14214 < inst_14213);
var inst_14217 = inst_14216;
var state_14259__$1 = state_14259;
if(cljs.core.truth_(inst_14217)){
var statearr_14293_15059 = state_14259__$1;
(statearr_14293_15059[(1)] = (10));

} else {
var statearr_14294_15060 = state_14259__$1;
(statearr_14294_15060[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12159__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12159__auto____0 = (function (){
var statearr_14295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14295[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12159__auto__);

(statearr_14295[(1)] = (1));

return statearr_14295;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12159__auto____1 = (function (state_14259){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_14259);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e14296){var ex__12162__auto__ = e14296;
var statearr_14297_15061 = state_14259;
(statearr_14297_15061[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_14259[(4)]))){
var statearr_14298_15062 = state_14259;
(statearr_14298_15062[(1)] = cljs.core.first((state_14259[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15063 = state_14259;
state_14259 = G__15063;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12159__auto__ = function(state_14259){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12159__auto____1.call(this,state_14259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12159__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12159__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_14299 = f__12242__auto__();
(statearr_14299[(6)] = c__12241__auto__);

return statearr_14299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));

return c__12241__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14301 = arguments.length;
switch (G__14301) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__14303 = arguments.length;
switch (G__14303) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__14305 = arguments.length;
switch (G__14305) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12241__auto___15067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_14329){
var state_val_14330 = (state_14329[(1)]);
if((state_val_14330 === (7))){
var inst_14324 = (state_14329[(2)]);
var state_14329__$1 = state_14329;
var statearr_14331_15068 = state_14329__$1;
(statearr_14331_15068[(2)] = inst_14324);

(statearr_14331_15068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (1))){
var inst_14306 = null;
var state_14329__$1 = (function (){var statearr_14332 = state_14329;
(statearr_14332[(7)] = inst_14306);

return statearr_14332;
})();
var statearr_14333_15069 = state_14329__$1;
(statearr_14333_15069[(2)] = null);

(statearr_14333_15069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (4))){
var inst_14309 = (state_14329[(8)]);
var inst_14309__$1 = (state_14329[(2)]);
var inst_14310 = (inst_14309__$1 == null);
var inst_14311 = cljs.core.not(inst_14310);
var state_14329__$1 = (function (){var statearr_14334 = state_14329;
(statearr_14334[(8)] = inst_14309__$1);

return statearr_14334;
})();
if(inst_14311){
var statearr_14335_15070 = state_14329__$1;
(statearr_14335_15070[(1)] = (5));

} else {
var statearr_14336_15071 = state_14329__$1;
(statearr_14336_15071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (6))){
var state_14329__$1 = state_14329;
var statearr_14337_15072 = state_14329__$1;
(statearr_14337_15072[(2)] = null);

(statearr_14337_15072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (3))){
var inst_14326 = (state_14329[(2)]);
var inst_14327 = cljs.core.async.close_BANG_(out);
var state_14329__$1 = (function (){var statearr_14338 = state_14329;
(statearr_14338[(9)] = inst_14326);

return statearr_14338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14329__$1,inst_14327);
} else {
if((state_val_14330 === (2))){
var state_14329__$1 = state_14329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14329__$1,(4),ch);
} else {
if((state_val_14330 === (11))){
var inst_14309 = (state_14329[(8)]);
var inst_14318 = (state_14329[(2)]);
var inst_14306 = inst_14309;
var state_14329__$1 = (function (){var statearr_14339 = state_14329;
(statearr_14339[(7)] = inst_14306);

(statearr_14339[(10)] = inst_14318);

return statearr_14339;
})();
var statearr_14340_15073 = state_14329__$1;
(statearr_14340_15073[(2)] = null);

(statearr_14340_15073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (9))){
var inst_14309 = (state_14329[(8)]);
var state_14329__$1 = state_14329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14329__$1,(11),out,inst_14309);
} else {
if((state_val_14330 === (5))){
var inst_14306 = (state_14329[(7)]);
var inst_14309 = (state_14329[(8)]);
var inst_14313 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14309,inst_14306);
var state_14329__$1 = state_14329;
if(inst_14313){
var statearr_14342_15074 = state_14329__$1;
(statearr_14342_15074[(1)] = (8));

} else {
var statearr_14343_15075 = state_14329__$1;
(statearr_14343_15075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (10))){
var inst_14321 = (state_14329[(2)]);
var state_14329__$1 = state_14329;
var statearr_14344_15076 = state_14329__$1;
(statearr_14344_15076[(2)] = inst_14321);

(statearr_14344_15076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (8))){
var inst_14306 = (state_14329[(7)]);
var tmp14341 = inst_14306;
var inst_14306__$1 = tmp14341;
var state_14329__$1 = (function (){var statearr_14345 = state_14329;
(statearr_14345[(7)] = inst_14306__$1);

return statearr_14345;
})();
var statearr_14346_15077 = state_14329__$1;
(statearr_14346_15077[(2)] = null);

(statearr_14346_15077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_14347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14347[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_14347[(1)] = (1));

return statearr_14347;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_14329){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_14329);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e14348){var ex__12162__auto__ = e14348;
var statearr_14349_15078 = state_14329;
(statearr_14349_15078[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_14329[(4)]))){
var statearr_14350_15080 = state_14329;
(statearr_14350_15080[(1)] = cljs.core.first((state_14329[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15081 = state_14329;
state_14329 = G__15081;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_14329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_14329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_14351 = f__12242__auto__();
(statearr_14351[(6)] = c__12241__auto___15067);

return statearr_14351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14353 = arguments.length;
switch (G__14353) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12241__auto___15086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_14391){
var state_val_14392 = (state_14391[(1)]);
if((state_val_14392 === (7))){
var inst_14387 = (state_14391[(2)]);
var state_14391__$1 = state_14391;
var statearr_14393_15087 = state_14391__$1;
(statearr_14393_15087[(2)] = inst_14387);

(statearr_14393_15087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (1))){
var inst_14354 = (new Array(n));
var inst_14355 = inst_14354;
var inst_14356 = (0);
var state_14391__$1 = (function (){var statearr_14394 = state_14391;
(statearr_14394[(7)] = inst_14355);

(statearr_14394[(8)] = inst_14356);

return statearr_14394;
})();
var statearr_14395_15088 = state_14391__$1;
(statearr_14395_15088[(2)] = null);

(statearr_14395_15088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (4))){
var inst_14359 = (state_14391[(9)]);
var inst_14359__$1 = (state_14391[(2)]);
var inst_14360 = (inst_14359__$1 == null);
var inst_14361 = cljs.core.not(inst_14360);
var state_14391__$1 = (function (){var statearr_14396 = state_14391;
(statearr_14396[(9)] = inst_14359__$1);

return statearr_14396;
})();
if(inst_14361){
var statearr_14397_15089 = state_14391__$1;
(statearr_14397_15089[(1)] = (5));

} else {
var statearr_14398_15090 = state_14391__$1;
(statearr_14398_15090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (15))){
var inst_14381 = (state_14391[(2)]);
var state_14391__$1 = state_14391;
var statearr_14399_15091 = state_14391__$1;
(statearr_14399_15091[(2)] = inst_14381);

(statearr_14399_15091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (13))){
var state_14391__$1 = state_14391;
var statearr_14400_15092 = state_14391__$1;
(statearr_14400_15092[(2)] = null);

(statearr_14400_15092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (6))){
var inst_14356 = (state_14391[(8)]);
var inst_14377 = (inst_14356 > (0));
var state_14391__$1 = state_14391;
if(cljs.core.truth_(inst_14377)){
var statearr_14401_15093 = state_14391__$1;
(statearr_14401_15093[(1)] = (12));

} else {
var statearr_14402_15094 = state_14391__$1;
(statearr_14402_15094[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (3))){
var inst_14389 = (state_14391[(2)]);
var state_14391__$1 = state_14391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14391__$1,inst_14389);
} else {
if((state_val_14392 === (12))){
var inst_14355 = (state_14391[(7)]);
var inst_14379 = cljs.core.vec(inst_14355);
var state_14391__$1 = state_14391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14391__$1,(15),out,inst_14379);
} else {
if((state_val_14392 === (2))){
var state_14391__$1 = state_14391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14391__$1,(4),ch);
} else {
if((state_val_14392 === (11))){
var inst_14371 = (state_14391[(2)]);
var inst_14372 = (new Array(n));
var inst_14355 = inst_14372;
var inst_14356 = (0);
var state_14391__$1 = (function (){var statearr_14403 = state_14391;
(statearr_14403[(10)] = inst_14371);

(statearr_14403[(7)] = inst_14355);

(statearr_14403[(8)] = inst_14356);

return statearr_14403;
})();
var statearr_14404_15095 = state_14391__$1;
(statearr_14404_15095[(2)] = null);

(statearr_14404_15095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (9))){
var inst_14355 = (state_14391[(7)]);
var inst_14369 = cljs.core.vec(inst_14355);
var state_14391__$1 = state_14391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14391__$1,(11),out,inst_14369);
} else {
if((state_val_14392 === (5))){
var inst_14355 = (state_14391[(7)]);
var inst_14359 = (state_14391[(9)]);
var inst_14356 = (state_14391[(8)]);
var inst_14364 = (state_14391[(11)]);
var inst_14363 = (inst_14355[inst_14356] = inst_14359);
var inst_14364__$1 = (inst_14356 + (1));
var inst_14365 = (inst_14364__$1 < n);
var state_14391__$1 = (function (){var statearr_14405 = state_14391;
(statearr_14405[(12)] = inst_14363);

(statearr_14405[(11)] = inst_14364__$1);

return statearr_14405;
})();
if(cljs.core.truth_(inst_14365)){
var statearr_14406_15096 = state_14391__$1;
(statearr_14406_15096[(1)] = (8));

} else {
var statearr_14407_15097 = state_14391__$1;
(statearr_14407_15097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (14))){
var inst_14384 = (state_14391[(2)]);
var inst_14385 = cljs.core.async.close_BANG_(out);
var state_14391__$1 = (function (){var statearr_14409 = state_14391;
(statearr_14409[(13)] = inst_14384);

return statearr_14409;
})();
var statearr_14410_15098 = state_14391__$1;
(statearr_14410_15098[(2)] = inst_14385);

(statearr_14410_15098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (10))){
var inst_14375 = (state_14391[(2)]);
var state_14391__$1 = state_14391;
var statearr_14411_15099 = state_14391__$1;
(statearr_14411_15099[(2)] = inst_14375);

(statearr_14411_15099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14392 === (8))){
var inst_14355 = (state_14391[(7)]);
var inst_14364 = (state_14391[(11)]);
var tmp14408 = inst_14355;
var inst_14355__$1 = tmp14408;
var inst_14356 = inst_14364;
var state_14391__$1 = (function (){var statearr_14412 = state_14391;
(statearr_14412[(7)] = inst_14355__$1);

(statearr_14412[(8)] = inst_14356);

return statearr_14412;
})();
var statearr_14413_15100 = state_14391__$1;
(statearr_14413_15100[(2)] = null);

(statearr_14413_15100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_14414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14414[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_14414[(1)] = (1));

return statearr_14414;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_14391){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_14391);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e14415){var ex__12162__auto__ = e14415;
var statearr_14416_15101 = state_14391;
(statearr_14416_15101[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_14391[(4)]))){
var statearr_14417_15102 = state_14391;
(statearr_14417_15102[(1)] = cljs.core.first((state_14391[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15103 = state_14391;
state_14391 = G__15103;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_14391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_14391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_14418 = f__12242__auto__();
(statearr_14418[(6)] = c__12241__auto___15086);

return statearr_14418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14420 = arguments.length;
switch (G__14420) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12241__auto___15105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12242__auto__ = (function (){var switch__12158__auto__ = (function (state_14465){
var state_val_14466 = (state_14465[(1)]);
if((state_val_14466 === (7))){
var inst_14461 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
var statearr_14467_15106 = state_14465__$1;
(statearr_14467_15106[(2)] = inst_14461);

(statearr_14467_15106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (1))){
var inst_14421 = [];
var inst_14422 = inst_14421;
var inst_14423 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14465__$1 = (function (){var statearr_14468 = state_14465;
(statearr_14468[(7)] = inst_14423);

(statearr_14468[(8)] = inst_14422);

return statearr_14468;
})();
var statearr_14469_15107 = state_14465__$1;
(statearr_14469_15107[(2)] = null);

(statearr_14469_15107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (4))){
var inst_14426 = (state_14465[(9)]);
var inst_14426__$1 = (state_14465[(2)]);
var inst_14427 = (inst_14426__$1 == null);
var inst_14428 = cljs.core.not(inst_14427);
var state_14465__$1 = (function (){var statearr_14470 = state_14465;
(statearr_14470[(9)] = inst_14426__$1);

return statearr_14470;
})();
if(inst_14428){
var statearr_14471_15108 = state_14465__$1;
(statearr_14471_15108[(1)] = (5));

} else {
var statearr_14472_15110 = state_14465__$1;
(statearr_14472_15110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (15))){
var inst_14422 = (state_14465[(8)]);
var inst_14453 = cljs.core.vec(inst_14422);
var state_14465__$1 = state_14465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14465__$1,(18),out,inst_14453);
} else {
if((state_val_14466 === (13))){
var inst_14448 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
var statearr_14473_15111 = state_14465__$1;
(statearr_14473_15111[(2)] = inst_14448);

(statearr_14473_15111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (6))){
var inst_14422 = (state_14465[(8)]);
var inst_14450 = inst_14422.length;
var inst_14451 = (inst_14450 > (0));
var state_14465__$1 = state_14465;
if(cljs.core.truth_(inst_14451)){
var statearr_14474_15112 = state_14465__$1;
(statearr_14474_15112[(1)] = (15));

} else {
var statearr_14475_15113 = state_14465__$1;
(statearr_14475_15113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (17))){
var inst_14458 = (state_14465[(2)]);
var inst_14459 = cljs.core.async.close_BANG_(out);
var state_14465__$1 = (function (){var statearr_14476 = state_14465;
(statearr_14476[(10)] = inst_14458);

return statearr_14476;
})();
var statearr_14477_15114 = state_14465__$1;
(statearr_14477_15114[(2)] = inst_14459);

(statearr_14477_15114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (3))){
var inst_14463 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14465__$1,inst_14463);
} else {
if((state_val_14466 === (12))){
var inst_14422 = (state_14465[(8)]);
var inst_14441 = cljs.core.vec(inst_14422);
var state_14465__$1 = state_14465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14465__$1,(14),out,inst_14441);
} else {
if((state_val_14466 === (2))){
var state_14465__$1 = state_14465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14465__$1,(4),ch);
} else {
if((state_val_14466 === (11))){
var inst_14426 = (state_14465[(9)]);
var inst_14430 = (state_14465[(11)]);
var inst_14422 = (state_14465[(8)]);
var inst_14438 = inst_14422.push(inst_14426);
var tmp14478 = inst_14422;
var inst_14422__$1 = tmp14478;
var inst_14423 = inst_14430;
var state_14465__$1 = (function (){var statearr_14479 = state_14465;
(statearr_14479[(7)] = inst_14423);

(statearr_14479[(8)] = inst_14422__$1);

(statearr_14479[(12)] = inst_14438);

return statearr_14479;
})();
var statearr_14480_15120 = state_14465__$1;
(statearr_14480_15120[(2)] = null);

(statearr_14480_15120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (9))){
var inst_14423 = (state_14465[(7)]);
var inst_14434 = cljs.core.keyword_identical_QMARK_(inst_14423,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_14465__$1 = state_14465;
var statearr_14481_15121 = state_14465__$1;
(statearr_14481_15121[(2)] = inst_14434);

(statearr_14481_15121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (5))){
var inst_14423 = (state_14465[(7)]);
var inst_14426 = (state_14465[(9)]);
var inst_14430 = (state_14465[(11)]);
var inst_14431 = (state_14465[(13)]);
var inst_14430__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14426) : f.call(null,inst_14426));
var inst_14431__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14430__$1,inst_14423);
var state_14465__$1 = (function (){var statearr_14482 = state_14465;
(statearr_14482[(11)] = inst_14430__$1);

(statearr_14482[(13)] = inst_14431__$1);

return statearr_14482;
})();
if(inst_14431__$1){
var statearr_14483_15123 = state_14465__$1;
(statearr_14483_15123[(1)] = (8));

} else {
var statearr_14484_15124 = state_14465__$1;
(statearr_14484_15124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (14))){
var inst_14426 = (state_14465[(9)]);
var inst_14430 = (state_14465[(11)]);
var inst_14443 = (state_14465[(2)]);
var inst_14444 = [];
var inst_14445 = inst_14444.push(inst_14426);
var inst_14422 = inst_14444;
var inst_14423 = inst_14430;
var state_14465__$1 = (function (){var statearr_14485 = state_14465;
(statearr_14485[(7)] = inst_14423);

(statearr_14485[(8)] = inst_14422);

(statearr_14485[(14)] = inst_14445);

(statearr_14485[(15)] = inst_14443);

return statearr_14485;
})();
var statearr_14486_15125 = state_14465__$1;
(statearr_14486_15125[(2)] = null);

(statearr_14486_15125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (16))){
var state_14465__$1 = state_14465;
var statearr_14487_15126 = state_14465__$1;
(statearr_14487_15126[(2)] = null);

(statearr_14487_15126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (10))){
var inst_14436 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
if(cljs.core.truth_(inst_14436)){
var statearr_14488_15127 = state_14465__$1;
(statearr_14488_15127[(1)] = (11));

} else {
var statearr_14489_15128 = state_14465__$1;
(statearr_14489_15128[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (18))){
var inst_14455 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
var statearr_14490_15129 = state_14465__$1;
(statearr_14490_15129[(2)] = inst_14455);

(statearr_14490_15129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (8))){
var inst_14431 = (state_14465[(13)]);
var state_14465__$1 = state_14465;
var statearr_14491_15130 = state_14465__$1;
(statearr_14491_15130[(2)] = inst_14431);

(statearr_14491_15130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12159__auto__ = null;
var cljs$core$async$state_machine__12159__auto____0 = (function (){
var statearr_14492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14492[(0)] = cljs$core$async$state_machine__12159__auto__);

(statearr_14492[(1)] = (1));

return statearr_14492;
});
var cljs$core$async$state_machine__12159__auto____1 = (function (state_14465){
while(true){
var ret_value__12160__auto__ = (function (){try{while(true){
var result__12161__auto__ = switch__12158__auto__(state_14465);
if(cljs.core.keyword_identical_QMARK_(result__12161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12161__auto__;
}
break;
}
}catch (e14493){var ex__12162__auto__ = e14493;
var statearr_14494_15131 = state_14465;
(statearr_14494_15131[(2)] = ex__12162__auto__);


if(cljs.core.seq((state_14465[(4)]))){
var statearr_14495_15132 = state_14465;
(statearr_14495_15132[(1)] = cljs.core.first((state_14465[(4)])));

} else {
throw ex__12162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15133 = state_14465;
state_14465 = G__15133;
continue;
} else {
return ret_value__12160__auto__;
}
break;
}
});
cljs$core$async$state_machine__12159__auto__ = function(state_14465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12159__auto____1.call(this,state_14465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12159__auto____0;
cljs$core$async$state_machine__12159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12159__auto____1;
return cljs$core$async$state_machine__12159__auto__;
})()
})();
var state__12243__auto__ = (function (){var statearr_14496 = f__12242__auto__();
(statearr_14496[(6)] = c__12241__auto___15105);

return statearr_14496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12243__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
