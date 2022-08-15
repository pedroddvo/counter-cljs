goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18249 = arguments.length;
var i__5770__auto___18250 = (0);
while(true){
if((i__5770__auto___18250 < len__5769__auto___18249)){
args__5775__auto__.push((arguments[i__5770__auto___18250]));

var G__18251 = (i__5770__auto___18250 + (1));
i__5770__auto___18250 = G__18251;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq17915){
var G__17916 = cljs.core.first(seq17915);
var seq17915__$1 = cljs.core.next(seq17915);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17916,seq17915__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__17917 = cljs.core.seq(sources);
var chunk__17918 = null;
var count__17919 = (0);
var i__17920 = (0);
while(true){
if((i__17920 < count__17919)){
var map__17925 = chunk__17918.cljs$core$IIndexed$_nth$arity$2(null,i__17920);
var map__17925__$1 = cljs.core.__destructure_map(map__17925);
var src = map__17925__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17925__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17925__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17925__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17926){var e_18252 = e17926;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18252);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18252.message)].join('')));
}

var G__18253 = seq__17917;
var G__18254 = chunk__17918;
var G__18255 = count__17919;
var G__18256 = (i__17920 + (1));
seq__17917 = G__18253;
chunk__17918 = G__18254;
count__17919 = G__18255;
i__17920 = G__18256;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17917);
if(temp__5804__auto__){
var seq__17917__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17917__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17917__$1);
var G__18257 = cljs.core.chunk_rest(seq__17917__$1);
var G__18258 = c__5568__auto__;
var G__18259 = cljs.core.count(c__5568__auto__);
var G__18260 = (0);
seq__17917 = G__18257;
chunk__17918 = G__18258;
count__17919 = G__18259;
i__17920 = G__18260;
continue;
} else {
var map__17927 = cljs.core.first(seq__17917__$1);
var map__17927__$1 = cljs.core.__destructure_map(map__17927);
var src = map__17927__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17928){var e_18261 = e17928;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18261);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18261.message)].join('')));
}

var G__18262 = cljs.core.next(seq__17917__$1);
var G__18263 = null;
var G__18264 = (0);
var G__18265 = (0);
seq__17917 = G__18262;
chunk__17918 = G__18263;
count__17919 = G__18264;
i__17920 = G__18265;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__17929 = cljs.core.seq(js_requires);
var chunk__17930 = null;
var count__17931 = (0);
var i__17932 = (0);
while(true){
if((i__17932 < count__17931)){
var js_ns = chunk__17930.cljs$core$IIndexed$_nth$arity$2(null,i__17932);
var require_str_18266 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18266);


var G__18267 = seq__17929;
var G__18268 = chunk__17930;
var G__18269 = count__17931;
var G__18270 = (i__17932 + (1));
seq__17929 = G__18267;
chunk__17930 = G__18268;
count__17931 = G__18269;
i__17932 = G__18270;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17929);
if(temp__5804__auto__){
var seq__17929__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17929__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17929__$1);
var G__18271 = cljs.core.chunk_rest(seq__17929__$1);
var G__18272 = c__5568__auto__;
var G__18273 = cljs.core.count(c__5568__auto__);
var G__18274 = (0);
seq__17929 = G__18271;
chunk__17930 = G__18272;
count__17931 = G__18273;
i__17932 = G__18274;
continue;
} else {
var js_ns = cljs.core.first(seq__17929__$1);
var require_str_18275 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18275);


var G__18276 = cljs.core.next(seq__17929__$1);
var G__18277 = null;
var G__18278 = (0);
var G__18279 = (0);
seq__17929 = G__18276;
chunk__17930 = G__18277;
count__17931 = G__18278;
i__17932 = G__18279;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__17934){
var map__17935 = p__17934;
var map__17935__$1 = cljs.core.__destructure_map(map__17935);
var msg = map__17935__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17936(s__17937){
return (new cljs.core.LazySeq(null,(function (){
var s__17937__$1 = s__17937;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17937__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__17945 = cljs.core.first(xs__6360__auto__);
var map__17945__$1 = cljs.core.__destructure_map(map__17945);
var src = map__17945__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17945__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17945__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__17937__$1,map__17945,map__17945__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17935,map__17935__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17936_$_iter__17938(s__17939){
return (new cljs.core.LazySeq(null,((function (s__17937__$1,map__17945,map__17945__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17935,map__17935__$1,msg,info,reload_info){
return (function (){
var s__17939__$1 = s__17939;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17939__$1);
if(temp__5804__auto____$1){
var s__17939__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17939__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17939__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17941 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17940 = (0);
while(true){
if((i__17940 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__17940);
cljs.core.chunk_append(b__17941,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18280 = (i__17940 + (1));
i__17940 = G__18280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17941),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17936_$_iter__17938(cljs.core.chunk_rest(s__17939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17941),null);
}
} else {
var warning = cljs.core.first(s__17939__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17936_$_iter__17938(cljs.core.rest(s__17939__$2)));
}
} else {
return null;
}
break;
}
});})(s__17937__$1,map__17945,map__17945__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17935,map__17935__$1,msg,info,reload_info))
,null,null));
});})(s__17937__$1,map__17945,map__17945__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17935,map__17935__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17936(cljs.core.rest(s__17937__$1)));
} else {
var G__18281 = cljs.core.rest(s__17937__$1);
s__17937__$1 = G__18281;
continue;
}
} else {
var G__18282 = cljs.core.rest(s__17937__$1);
s__17937__$1 = G__18282;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__17955_18283 = cljs.core.seq(warnings);
var chunk__17956_18284 = null;
var count__17958_18285 = (0);
var i__17959_18286 = (0);
while(true){
if((i__17959_18286 < count__17958_18285)){
var map__17965_18287 = chunk__17956_18284.cljs$core$IIndexed$_nth$arity$2(null,i__17959_18286);
var map__17965_18288__$1 = cljs.core.__destructure_map(map__17965_18287);
var w_18289 = map__17965_18288__$1;
var msg_18290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17965_18288__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17965_18288__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17965_18288__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17965_18288__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18293)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18291),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18292),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18290__$1)].join(''));


var G__18294 = seq__17955_18283;
var G__18295 = chunk__17956_18284;
var G__18296 = count__17958_18285;
var G__18297 = (i__17959_18286 + (1));
seq__17955_18283 = G__18294;
chunk__17956_18284 = G__18295;
count__17958_18285 = G__18296;
i__17959_18286 = G__18297;
continue;
} else {
var temp__5804__auto___18298 = cljs.core.seq(seq__17955_18283);
if(temp__5804__auto___18298){
var seq__17955_18299__$1 = temp__5804__auto___18298;
if(cljs.core.chunked_seq_QMARK_(seq__17955_18299__$1)){
var c__5568__auto___18300 = cljs.core.chunk_first(seq__17955_18299__$1);
var G__18301 = cljs.core.chunk_rest(seq__17955_18299__$1);
var G__18302 = c__5568__auto___18300;
var G__18303 = cljs.core.count(c__5568__auto___18300);
var G__18304 = (0);
seq__17955_18283 = G__18301;
chunk__17956_18284 = G__18302;
count__17958_18285 = G__18303;
i__17959_18286 = G__18304;
continue;
} else {
var map__17966_18305 = cljs.core.first(seq__17955_18299__$1);
var map__17966_18306__$1 = cljs.core.__destructure_map(map__17966_18305);
var w_18307 = map__17966_18306__$1;
var msg_18308__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17966_18306__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17966_18306__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17966_18306__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17966_18306__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18311)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18309),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18310),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18308__$1)].join(''));


var G__18312 = cljs.core.next(seq__17955_18299__$1);
var G__18313 = null;
var G__18314 = (0);
var G__18315 = (0);
seq__17955_18283 = G__18312;
chunk__17956_18284 = G__18313;
count__17958_18285 = G__18314;
i__17959_18286 = G__18315;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__17933_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__17933_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__17981){
var map__17983 = p__17981;
var map__17983__$1 = cljs.core.__destructure_map(map__17983);
var msg = map__17983__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__17984 = cljs.core.seq(updates);
var chunk__17986 = null;
var count__17987 = (0);
var i__17988 = (0);
while(true){
if((i__17988 < count__17987)){
var path = chunk__17986.cljs$core$IIndexed$_nth$arity$2(null,i__17988);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18121_18316 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18125_18317 = null;
var count__18126_18318 = (0);
var i__18127_18319 = (0);
while(true){
if((i__18127_18319 < count__18126_18318)){
var node_18320 = chunk__18125_18317.cljs$core$IIndexed$_nth$arity$2(null,i__18127_18319);
if(cljs.core.not(node_18320.shadow$old)){
var path_match_18321 = shadow.cljs.devtools.client.browser.match_paths(node_18320.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18321)){
var new_link_18322 = (function (){var G__18153 = node_18320.cloneNode(true);
G__18153.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18321),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18153;
})();
(node_18320.shadow$old = true);

(new_link_18322.onload = ((function (seq__18121_18316,chunk__18125_18317,count__18126_18318,i__18127_18319,seq__17984,chunk__17986,count__17987,i__17988,new_link_18322,path_match_18321,node_18320,path,map__17983,map__17983__$1,msg,updates,reload_info){
return (function (e){
var seq__18154_18323 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18156_18324 = null;
var count__18157_18325 = (0);
var i__18158_18326 = (0);
while(true){
if((i__18158_18326 < count__18157_18325)){
var map__18162_18327 = chunk__18156_18324.cljs$core$IIndexed$_nth$arity$2(null,i__18158_18326);
var map__18162_18328__$1 = cljs.core.__destructure_map(map__18162_18327);
var task_18329 = map__18162_18328__$1;
var fn_str_18330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18162_18328__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18162_18328__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18332 = goog.getObjectByName(fn_str_18330,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18331)].join(''));

(fn_obj_18332.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18332.cljs$core$IFn$_invoke$arity$2(path,new_link_18322) : fn_obj_18332.call(null,path,new_link_18322));


var G__18333 = seq__18154_18323;
var G__18334 = chunk__18156_18324;
var G__18335 = count__18157_18325;
var G__18336 = (i__18158_18326 + (1));
seq__18154_18323 = G__18333;
chunk__18156_18324 = G__18334;
count__18157_18325 = G__18335;
i__18158_18326 = G__18336;
continue;
} else {
var temp__5804__auto___18337 = cljs.core.seq(seq__18154_18323);
if(temp__5804__auto___18337){
var seq__18154_18338__$1 = temp__5804__auto___18337;
if(cljs.core.chunked_seq_QMARK_(seq__18154_18338__$1)){
var c__5568__auto___18339 = cljs.core.chunk_first(seq__18154_18338__$1);
var G__18340 = cljs.core.chunk_rest(seq__18154_18338__$1);
var G__18341 = c__5568__auto___18339;
var G__18342 = cljs.core.count(c__5568__auto___18339);
var G__18343 = (0);
seq__18154_18323 = G__18340;
chunk__18156_18324 = G__18341;
count__18157_18325 = G__18342;
i__18158_18326 = G__18343;
continue;
} else {
var map__18163_18344 = cljs.core.first(seq__18154_18338__$1);
var map__18163_18345__$1 = cljs.core.__destructure_map(map__18163_18344);
var task_18346 = map__18163_18345__$1;
var fn_str_18347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18163_18345__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18163_18345__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18349 = goog.getObjectByName(fn_str_18347,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18348)].join(''));

(fn_obj_18349.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18349.cljs$core$IFn$_invoke$arity$2(path,new_link_18322) : fn_obj_18349.call(null,path,new_link_18322));


var G__18350 = cljs.core.next(seq__18154_18338__$1);
var G__18351 = null;
var G__18352 = (0);
var G__18353 = (0);
seq__18154_18323 = G__18350;
chunk__18156_18324 = G__18351;
count__18157_18325 = G__18352;
i__18158_18326 = G__18353;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18320);
});})(seq__18121_18316,chunk__18125_18317,count__18126_18318,i__18127_18319,seq__17984,chunk__17986,count__17987,i__17988,new_link_18322,path_match_18321,node_18320,path,map__17983,map__17983__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18321], 0));

goog.dom.insertSiblingAfter(new_link_18322,node_18320);


var G__18354 = seq__18121_18316;
var G__18355 = chunk__18125_18317;
var G__18356 = count__18126_18318;
var G__18357 = (i__18127_18319 + (1));
seq__18121_18316 = G__18354;
chunk__18125_18317 = G__18355;
count__18126_18318 = G__18356;
i__18127_18319 = G__18357;
continue;
} else {
var G__18358 = seq__18121_18316;
var G__18359 = chunk__18125_18317;
var G__18360 = count__18126_18318;
var G__18361 = (i__18127_18319 + (1));
seq__18121_18316 = G__18358;
chunk__18125_18317 = G__18359;
count__18126_18318 = G__18360;
i__18127_18319 = G__18361;
continue;
}
} else {
var G__18362 = seq__18121_18316;
var G__18363 = chunk__18125_18317;
var G__18364 = count__18126_18318;
var G__18365 = (i__18127_18319 + (1));
seq__18121_18316 = G__18362;
chunk__18125_18317 = G__18363;
count__18126_18318 = G__18364;
i__18127_18319 = G__18365;
continue;
}
} else {
var temp__5804__auto___18366 = cljs.core.seq(seq__18121_18316);
if(temp__5804__auto___18366){
var seq__18121_18367__$1 = temp__5804__auto___18366;
if(cljs.core.chunked_seq_QMARK_(seq__18121_18367__$1)){
var c__5568__auto___18368 = cljs.core.chunk_first(seq__18121_18367__$1);
var G__18369 = cljs.core.chunk_rest(seq__18121_18367__$1);
var G__18370 = c__5568__auto___18368;
var G__18371 = cljs.core.count(c__5568__auto___18368);
var G__18372 = (0);
seq__18121_18316 = G__18369;
chunk__18125_18317 = G__18370;
count__18126_18318 = G__18371;
i__18127_18319 = G__18372;
continue;
} else {
var node_18373 = cljs.core.first(seq__18121_18367__$1);
if(cljs.core.not(node_18373.shadow$old)){
var path_match_18374 = shadow.cljs.devtools.client.browser.match_paths(node_18373.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18374)){
var new_link_18375 = (function (){var G__18164 = node_18373.cloneNode(true);
G__18164.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18374),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18164;
})();
(node_18373.shadow$old = true);

(new_link_18375.onload = ((function (seq__18121_18316,chunk__18125_18317,count__18126_18318,i__18127_18319,seq__17984,chunk__17986,count__17987,i__17988,new_link_18375,path_match_18374,node_18373,seq__18121_18367__$1,temp__5804__auto___18366,path,map__17983,map__17983__$1,msg,updates,reload_info){
return (function (e){
var seq__18165_18376 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18167_18377 = null;
var count__18168_18378 = (0);
var i__18169_18379 = (0);
while(true){
if((i__18169_18379 < count__18168_18378)){
var map__18173_18380 = chunk__18167_18377.cljs$core$IIndexed$_nth$arity$2(null,i__18169_18379);
var map__18173_18381__$1 = cljs.core.__destructure_map(map__18173_18380);
var task_18382 = map__18173_18381__$1;
var fn_str_18383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18173_18381__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18173_18381__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18385 = goog.getObjectByName(fn_str_18383,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18384)].join(''));

(fn_obj_18385.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18385.cljs$core$IFn$_invoke$arity$2(path,new_link_18375) : fn_obj_18385.call(null,path,new_link_18375));


var G__18386 = seq__18165_18376;
var G__18387 = chunk__18167_18377;
var G__18388 = count__18168_18378;
var G__18389 = (i__18169_18379 + (1));
seq__18165_18376 = G__18386;
chunk__18167_18377 = G__18387;
count__18168_18378 = G__18388;
i__18169_18379 = G__18389;
continue;
} else {
var temp__5804__auto___18390__$1 = cljs.core.seq(seq__18165_18376);
if(temp__5804__auto___18390__$1){
var seq__18165_18391__$1 = temp__5804__auto___18390__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18165_18391__$1)){
var c__5568__auto___18392 = cljs.core.chunk_first(seq__18165_18391__$1);
var G__18393 = cljs.core.chunk_rest(seq__18165_18391__$1);
var G__18394 = c__5568__auto___18392;
var G__18395 = cljs.core.count(c__5568__auto___18392);
var G__18396 = (0);
seq__18165_18376 = G__18393;
chunk__18167_18377 = G__18394;
count__18168_18378 = G__18395;
i__18169_18379 = G__18396;
continue;
} else {
var map__18174_18397 = cljs.core.first(seq__18165_18391__$1);
var map__18174_18398__$1 = cljs.core.__destructure_map(map__18174_18397);
var task_18399 = map__18174_18398__$1;
var fn_str_18400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18174_18398__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18174_18398__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18402 = goog.getObjectByName(fn_str_18400,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18401)].join(''));

(fn_obj_18402.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18402.cljs$core$IFn$_invoke$arity$2(path,new_link_18375) : fn_obj_18402.call(null,path,new_link_18375));


var G__18403 = cljs.core.next(seq__18165_18391__$1);
var G__18404 = null;
var G__18405 = (0);
var G__18406 = (0);
seq__18165_18376 = G__18403;
chunk__18167_18377 = G__18404;
count__18168_18378 = G__18405;
i__18169_18379 = G__18406;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18373);
});})(seq__18121_18316,chunk__18125_18317,count__18126_18318,i__18127_18319,seq__17984,chunk__17986,count__17987,i__17988,new_link_18375,path_match_18374,node_18373,seq__18121_18367__$1,temp__5804__auto___18366,path,map__17983,map__17983__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18374], 0));

goog.dom.insertSiblingAfter(new_link_18375,node_18373);


var G__18407 = cljs.core.next(seq__18121_18367__$1);
var G__18408 = null;
var G__18409 = (0);
var G__18410 = (0);
seq__18121_18316 = G__18407;
chunk__18125_18317 = G__18408;
count__18126_18318 = G__18409;
i__18127_18319 = G__18410;
continue;
} else {
var G__18411 = cljs.core.next(seq__18121_18367__$1);
var G__18412 = null;
var G__18413 = (0);
var G__18414 = (0);
seq__18121_18316 = G__18411;
chunk__18125_18317 = G__18412;
count__18126_18318 = G__18413;
i__18127_18319 = G__18414;
continue;
}
} else {
var G__18415 = cljs.core.next(seq__18121_18367__$1);
var G__18416 = null;
var G__18417 = (0);
var G__18418 = (0);
seq__18121_18316 = G__18415;
chunk__18125_18317 = G__18416;
count__18126_18318 = G__18417;
i__18127_18319 = G__18418;
continue;
}
}
} else {
}
}
break;
}


var G__18419 = seq__17984;
var G__18420 = chunk__17986;
var G__18421 = count__17987;
var G__18422 = (i__17988 + (1));
seq__17984 = G__18419;
chunk__17986 = G__18420;
count__17987 = G__18421;
i__17988 = G__18422;
continue;
} else {
var G__18423 = seq__17984;
var G__18424 = chunk__17986;
var G__18425 = count__17987;
var G__18426 = (i__17988 + (1));
seq__17984 = G__18423;
chunk__17986 = G__18424;
count__17987 = G__18425;
i__17988 = G__18426;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17984);
if(temp__5804__auto__){
var seq__17984__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17984__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17984__$1);
var G__18427 = cljs.core.chunk_rest(seq__17984__$1);
var G__18428 = c__5568__auto__;
var G__18429 = cljs.core.count(c__5568__auto__);
var G__18430 = (0);
seq__17984 = G__18427;
chunk__17986 = G__18428;
count__17987 = G__18429;
i__17988 = G__18430;
continue;
} else {
var path = cljs.core.first(seq__17984__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18175_18431 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18179_18432 = null;
var count__18180_18433 = (0);
var i__18181_18434 = (0);
while(true){
if((i__18181_18434 < count__18180_18433)){
var node_18435 = chunk__18179_18432.cljs$core$IIndexed$_nth$arity$2(null,i__18181_18434);
if(cljs.core.not(node_18435.shadow$old)){
var path_match_18436 = shadow.cljs.devtools.client.browser.match_paths(node_18435.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18436)){
var new_link_18437 = (function (){var G__18207 = node_18435.cloneNode(true);
G__18207.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18436),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18207;
})();
(node_18435.shadow$old = true);

(new_link_18437.onload = ((function (seq__18175_18431,chunk__18179_18432,count__18180_18433,i__18181_18434,seq__17984,chunk__17986,count__17987,i__17988,new_link_18437,path_match_18436,node_18435,path,seq__17984__$1,temp__5804__auto__,map__17983,map__17983__$1,msg,updates,reload_info){
return (function (e){
var seq__18208_18438 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18210_18439 = null;
var count__18211_18440 = (0);
var i__18212_18441 = (0);
while(true){
if((i__18212_18441 < count__18211_18440)){
var map__18216_18442 = chunk__18210_18439.cljs$core$IIndexed$_nth$arity$2(null,i__18212_18441);
var map__18216_18443__$1 = cljs.core.__destructure_map(map__18216_18442);
var task_18444 = map__18216_18443__$1;
var fn_str_18445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18216_18443__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18216_18443__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18447 = goog.getObjectByName(fn_str_18445,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18446)].join(''));

(fn_obj_18447.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18447.cljs$core$IFn$_invoke$arity$2(path,new_link_18437) : fn_obj_18447.call(null,path,new_link_18437));


var G__18448 = seq__18208_18438;
var G__18449 = chunk__18210_18439;
var G__18450 = count__18211_18440;
var G__18451 = (i__18212_18441 + (1));
seq__18208_18438 = G__18448;
chunk__18210_18439 = G__18449;
count__18211_18440 = G__18450;
i__18212_18441 = G__18451;
continue;
} else {
var temp__5804__auto___18452__$1 = cljs.core.seq(seq__18208_18438);
if(temp__5804__auto___18452__$1){
var seq__18208_18453__$1 = temp__5804__auto___18452__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18208_18453__$1)){
var c__5568__auto___18454 = cljs.core.chunk_first(seq__18208_18453__$1);
var G__18455 = cljs.core.chunk_rest(seq__18208_18453__$1);
var G__18456 = c__5568__auto___18454;
var G__18457 = cljs.core.count(c__5568__auto___18454);
var G__18458 = (0);
seq__18208_18438 = G__18455;
chunk__18210_18439 = G__18456;
count__18211_18440 = G__18457;
i__18212_18441 = G__18458;
continue;
} else {
var map__18217_18459 = cljs.core.first(seq__18208_18453__$1);
var map__18217_18460__$1 = cljs.core.__destructure_map(map__18217_18459);
var task_18461 = map__18217_18460__$1;
var fn_str_18462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18217_18460__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18217_18460__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18464 = goog.getObjectByName(fn_str_18462,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18463)].join(''));

(fn_obj_18464.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18464.cljs$core$IFn$_invoke$arity$2(path,new_link_18437) : fn_obj_18464.call(null,path,new_link_18437));


var G__18465 = cljs.core.next(seq__18208_18453__$1);
var G__18466 = null;
var G__18467 = (0);
var G__18468 = (0);
seq__18208_18438 = G__18465;
chunk__18210_18439 = G__18466;
count__18211_18440 = G__18467;
i__18212_18441 = G__18468;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18435);
});})(seq__18175_18431,chunk__18179_18432,count__18180_18433,i__18181_18434,seq__17984,chunk__17986,count__17987,i__17988,new_link_18437,path_match_18436,node_18435,path,seq__17984__$1,temp__5804__auto__,map__17983,map__17983__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18436], 0));

goog.dom.insertSiblingAfter(new_link_18437,node_18435);


var G__18469 = seq__18175_18431;
var G__18470 = chunk__18179_18432;
var G__18471 = count__18180_18433;
var G__18472 = (i__18181_18434 + (1));
seq__18175_18431 = G__18469;
chunk__18179_18432 = G__18470;
count__18180_18433 = G__18471;
i__18181_18434 = G__18472;
continue;
} else {
var G__18473 = seq__18175_18431;
var G__18474 = chunk__18179_18432;
var G__18475 = count__18180_18433;
var G__18476 = (i__18181_18434 + (1));
seq__18175_18431 = G__18473;
chunk__18179_18432 = G__18474;
count__18180_18433 = G__18475;
i__18181_18434 = G__18476;
continue;
}
} else {
var G__18477 = seq__18175_18431;
var G__18478 = chunk__18179_18432;
var G__18479 = count__18180_18433;
var G__18480 = (i__18181_18434 + (1));
seq__18175_18431 = G__18477;
chunk__18179_18432 = G__18478;
count__18180_18433 = G__18479;
i__18181_18434 = G__18480;
continue;
}
} else {
var temp__5804__auto___18481__$1 = cljs.core.seq(seq__18175_18431);
if(temp__5804__auto___18481__$1){
var seq__18175_18482__$1 = temp__5804__auto___18481__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18175_18482__$1)){
var c__5568__auto___18483 = cljs.core.chunk_first(seq__18175_18482__$1);
var G__18484 = cljs.core.chunk_rest(seq__18175_18482__$1);
var G__18485 = c__5568__auto___18483;
var G__18486 = cljs.core.count(c__5568__auto___18483);
var G__18487 = (0);
seq__18175_18431 = G__18484;
chunk__18179_18432 = G__18485;
count__18180_18433 = G__18486;
i__18181_18434 = G__18487;
continue;
} else {
var node_18488 = cljs.core.first(seq__18175_18482__$1);
if(cljs.core.not(node_18488.shadow$old)){
var path_match_18489 = shadow.cljs.devtools.client.browser.match_paths(node_18488.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18489)){
var new_link_18490 = (function (){var G__18218 = node_18488.cloneNode(true);
G__18218.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18489),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18218;
})();
(node_18488.shadow$old = true);

(new_link_18490.onload = ((function (seq__18175_18431,chunk__18179_18432,count__18180_18433,i__18181_18434,seq__17984,chunk__17986,count__17987,i__17988,new_link_18490,path_match_18489,node_18488,seq__18175_18482__$1,temp__5804__auto___18481__$1,path,seq__17984__$1,temp__5804__auto__,map__17983,map__17983__$1,msg,updates,reload_info){
return (function (e){
var seq__18219_18491 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18221_18492 = null;
var count__18222_18493 = (0);
var i__18223_18494 = (0);
while(true){
if((i__18223_18494 < count__18222_18493)){
var map__18227_18495 = chunk__18221_18492.cljs$core$IIndexed$_nth$arity$2(null,i__18223_18494);
var map__18227_18496__$1 = cljs.core.__destructure_map(map__18227_18495);
var task_18497 = map__18227_18496__$1;
var fn_str_18498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18227_18496__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18227_18496__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18500 = goog.getObjectByName(fn_str_18498,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18499)].join(''));

(fn_obj_18500.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18500.cljs$core$IFn$_invoke$arity$2(path,new_link_18490) : fn_obj_18500.call(null,path,new_link_18490));


var G__18501 = seq__18219_18491;
var G__18502 = chunk__18221_18492;
var G__18503 = count__18222_18493;
var G__18504 = (i__18223_18494 + (1));
seq__18219_18491 = G__18501;
chunk__18221_18492 = G__18502;
count__18222_18493 = G__18503;
i__18223_18494 = G__18504;
continue;
} else {
var temp__5804__auto___18505__$2 = cljs.core.seq(seq__18219_18491);
if(temp__5804__auto___18505__$2){
var seq__18219_18506__$1 = temp__5804__auto___18505__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18219_18506__$1)){
var c__5568__auto___18507 = cljs.core.chunk_first(seq__18219_18506__$1);
var G__18508 = cljs.core.chunk_rest(seq__18219_18506__$1);
var G__18509 = c__5568__auto___18507;
var G__18510 = cljs.core.count(c__5568__auto___18507);
var G__18511 = (0);
seq__18219_18491 = G__18508;
chunk__18221_18492 = G__18509;
count__18222_18493 = G__18510;
i__18223_18494 = G__18511;
continue;
} else {
var map__18228_18512 = cljs.core.first(seq__18219_18506__$1);
var map__18228_18513__$1 = cljs.core.__destructure_map(map__18228_18512);
var task_18514 = map__18228_18513__$1;
var fn_str_18515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228_18513__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228_18513__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18517 = goog.getObjectByName(fn_str_18515,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18516)].join(''));

(fn_obj_18517.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18517.cljs$core$IFn$_invoke$arity$2(path,new_link_18490) : fn_obj_18517.call(null,path,new_link_18490));


var G__18518 = cljs.core.next(seq__18219_18506__$1);
var G__18519 = null;
var G__18520 = (0);
var G__18521 = (0);
seq__18219_18491 = G__18518;
chunk__18221_18492 = G__18519;
count__18222_18493 = G__18520;
i__18223_18494 = G__18521;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18488);
});})(seq__18175_18431,chunk__18179_18432,count__18180_18433,i__18181_18434,seq__17984,chunk__17986,count__17987,i__17988,new_link_18490,path_match_18489,node_18488,seq__18175_18482__$1,temp__5804__auto___18481__$1,path,seq__17984__$1,temp__5804__auto__,map__17983,map__17983__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18489], 0));

goog.dom.insertSiblingAfter(new_link_18490,node_18488);


var G__18522 = cljs.core.next(seq__18175_18482__$1);
var G__18523 = null;
var G__18524 = (0);
var G__18525 = (0);
seq__18175_18431 = G__18522;
chunk__18179_18432 = G__18523;
count__18180_18433 = G__18524;
i__18181_18434 = G__18525;
continue;
} else {
var G__18526 = cljs.core.next(seq__18175_18482__$1);
var G__18527 = null;
var G__18528 = (0);
var G__18529 = (0);
seq__18175_18431 = G__18526;
chunk__18179_18432 = G__18527;
count__18180_18433 = G__18528;
i__18181_18434 = G__18529;
continue;
}
} else {
var G__18530 = cljs.core.next(seq__18175_18482__$1);
var G__18531 = null;
var G__18532 = (0);
var G__18533 = (0);
seq__18175_18431 = G__18530;
chunk__18179_18432 = G__18531;
count__18180_18433 = G__18532;
i__18181_18434 = G__18533;
continue;
}
}
} else {
}
}
break;
}


var G__18534 = cljs.core.next(seq__17984__$1);
var G__18535 = null;
var G__18536 = (0);
var G__18537 = (0);
seq__17984 = G__18534;
chunk__17986 = G__18535;
count__17987 = G__18536;
i__17988 = G__18537;
continue;
} else {
var G__18538 = cljs.core.next(seq__17984__$1);
var G__18539 = null;
var G__18540 = (0);
var G__18541 = (0);
seq__17984 = G__18538;
chunk__17986 = G__18539;
count__17987 = G__18540;
i__17988 = G__18541;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__18229){
var map__18230 = p__18229;
var map__18230__$1 = cljs.core.__destructure_map(map__18230);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18230__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__18231){
var map__18232 = p__18231;
var map__18232__$1 = cljs.core.__destructure_map(map__18232);
var _ = map__18232__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18232__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18233,done,error){
var map__18234 = p__18233;
var map__18234__$1 = cljs.core.__destructure_map(map__18234);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18234__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18235,done,error){
var map__18236 = p__18235;
var map__18236__$1 = cljs.core.__destructure_map(map__18236);
var msg = map__18236__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18236__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18236__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18236__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18237){
var map__18238 = p__18237;
var map__18238__$1 = cljs.core.__destructure_map(map__18238);
var src = map__18238__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18238__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18239 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18239) : done.call(null,G__18239));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18240){
var map__18241 = p__18240;
var map__18241__$1 = cljs.core.__destructure_map(map__18241);
var msg__$1 = map__18241__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18241__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e18242){var ex = e18242;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18243){
var map__18244 = p__18243;
var map__18244__$1 = cljs.core.__destructure_map(map__18244);
var env = map__18244__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18244__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18245){
var map__18246 = p__18245;
var map__18246__$1 = cljs.core.__destructure_map(map__18246);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18247){
var map__18248 = p__18247;
var map__18248__$1 = cljs.core.__destructure_map(map__18248);
var svc = map__18248__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18248__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
