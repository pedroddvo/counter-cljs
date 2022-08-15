goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17148){
var map__17149 = p__17148;
var map__17149__$1 = cljs.core.__destructure_map(map__17149);
var m = map__17149__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17149__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17149__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17151_17363 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17152_17364 = null;
var count__17153_17366 = (0);
var i__17154_17367 = (0);
while(true){
if((i__17154_17367 < count__17153_17366)){
var f_17368 = chunk__17152_17364.cljs$core$IIndexed$_nth$arity$2(null,i__17154_17367);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17368], 0));


var G__17369 = seq__17151_17363;
var G__17370 = chunk__17152_17364;
var G__17371 = count__17153_17366;
var G__17372 = (i__17154_17367 + (1));
seq__17151_17363 = G__17369;
chunk__17152_17364 = G__17370;
count__17153_17366 = G__17371;
i__17154_17367 = G__17372;
continue;
} else {
var temp__5804__auto___17373 = cljs.core.seq(seq__17151_17363);
if(temp__5804__auto___17373){
var seq__17151_17374__$1 = temp__5804__auto___17373;
if(cljs.core.chunked_seq_QMARK_(seq__17151_17374__$1)){
var c__5568__auto___17375 = cljs.core.chunk_first(seq__17151_17374__$1);
var G__17376 = cljs.core.chunk_rest(seq__17151_17374__$1);
var G__17377 = c__5568__auto___17375;
var G__17378 = cljs.core.count(c__5568__auto___17375);
var G__17379 = (0);
seq__17151_17363 = G__17376;
chunk__17152_17364 = G__17377;
count__17153_17366 = G__17378;
i__17154_17367 = G__17379;
continue;
} else {
var f_17380 = cljs.core.first(seq__17151_17374__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17380], 0));


var G__17381 = cljs.core.next(seq__17151_17374__$1);
var G__17382 = null;
var G__17383 = (0);
var G__17384 = (0);
seq__17151_17363 = G__17381;
chunk__17152_17364 = G__17382;
count__17153_17366 = G__17383;
i__17154_17367 = G__17384;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17385 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17385], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17385)))?cljs.core.second(arglists_17385):arglists_17385)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17161_17390 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17162_17391 = null;
var count__17163_17392 = (0);
var i__17164_17393 = (0);
while(true){
if((i__17164_17393 < count__17163_17392)){
var vec__17175_17394 = chunk__17162_17391.cljs$core$IIndexed$_nth$arity$2(null,i__17164_17393);
var name_17395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17175_17394,(0),null);
var map__17178_17396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17175_17394,(1),null);
var map__17178_17397__$1 = cljs.core.__destructure_map(map__17178_17396);
var doc_17398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17178_17397__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17178_17397__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17395], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17399], 0));

if(cljs.core.truth_(doc_17398)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17398], 0));
} else {
}


var G__17404 = seq__17161_17390;
var G__17405 = chunk__17162_17391;
var G__17406 = count__17163_17392;
var G__17407 = (i__17164_17393 + (1));
seq__17161_17390 = G__17404;
chunk__17162_17391 = G__17405;
count__17163_17392 = G__17406;
i__17164_17393 = G__17407;
continue;
} else {
var temp__5804__auto___17408 = cljs.core.seq(seq__17161_17390);
if(temp__5804__auto___17408){
var seq__17161_17410__$1 = temp__5804__auto___17408;
if(cljs.core.chunked_seq_QMARK_(seq__17161_17410__$1)){
var c__5568__auto___17411 = cljs.core.chunk_first(seq__17161_17410__$1);
var G__17412 = cljs.core.chunk_rest(seq__17161_17410__$1);
var G__17413 = c__5568__auto___17411;
var G__17414 = cljs.core.count(c__5568__auto___17411);
var G__17415 = (0);
seq__17161_17390 = G__17412;
chunk__17162_17391 = G__17413;
count__17163_17392 = G__17414;
i__17164_17393 = G__17415;
continue;
} else {
var vec__17182_17416 = cljs.core.first(seq__17161_17410__$1);
var name_17417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17182_17416,(0),null);
var map__17185_17418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17182_17416,(1),null);
var map__17185_17419__$1 = cljs.core.__destructure_map(map__17185_17418);
var doc_17420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17185_17419__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17185_17419__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17417], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17421], 0));

if(cljs.core.truth_(doc_17420)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17420], 0));
} else {
}


var G__17422 = cljs.core.next(seq__17161_17410__$1);
var G__17423 = null;
var G__17424 = (0);
var G__17425 = (0);
seq__17161_17390 = G__17422;
chunk__17162_17391 = G__17423;
count__17163_17392 = G__17424;
i__17164_17393 = G__17425;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17186 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17187 = null;
var count__17188 = (0);
var i__17189 = (0);
while(true){
if((i__17189 < count__17188)){
var role = chunk__17187.cljs$core$IIndexed$_nth$arity$2(null,i__17189);
var temp__5804__auto___17426__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17426__$1)){
var spec_17427 = temp__5804__auto___17426__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17427)], 0));
} else {
}


var G__17428 = seq__17186;
var G__17429 = chunk__17187;
var G__17430 = count__17188;
var G__17431 = (i__17189 + (1));
seq__17186 = G__17428;
chunk__17187 = G__17429;
count__17188 = G__17430;
i__17189 = G__17431;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17186);
if(temp__5804__auto____$1){
var seq__17186__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17186__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17186__$1);
var G__17432 = cljs.core.chunk_rest(seq__17186__$1);
var G__17433 = c__5568__auto__;
var G__17434 = cljs.core.count(c__5568__auto__);
var G__17435 = (0);
seq__17186 = G__17432;
chunk__17187 = G__17433;
count__17188 = G__17434;
i__17189 = G__17435;
continue;
} else {
var role = cljs.core.first(seq__17186__$1);
var temp__5804__auto___17436__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17436__$2)){
var spec_17437 = temp__5804__auto___17436__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17437)], 0));
} else {
}


var G__17438 = cljs.core.next(seq__17186__$1);
var G__17439 = null;
var G__17440 = (0);
var G__17441 = (0);
seq__17186 = G__17438;
chunk__17187 = G__17439;
count__17188 = G__17440;
i__17189 = G__17441;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__17442 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__17443 = cljs.core.ex_cause(t);
via = G__17442;
t = G__17443;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17289 = datafied_throwable;
var map__17289__$1 = cljs.core.__destructure_map(map__17289);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17289__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17289__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17289__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17290 = cljs.core.last(via);
var map__17290__$1 = cljs.core.__destructure_map(map__17290);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17290__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17290__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17290__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17291 = data;
var map__17291__$1 = cljs.core.__destructure_map(map__17291);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17291__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17291__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17291__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17292 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17292__$1 = cljs.core.__destructure_map(map__17292);
var top_data = map__17292__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17294 = phase;
var G__17294__$1 = (((G__17294 instanceof cljs.core.Keyword))?G__17294.fqn:null);
switch (G__17294__$1) {
case "read-source":
var map__17296 = data;
var map__17296__$1 = cljs.core.__destructure_map(map__17296);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17296__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17296__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17297 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17297__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17297,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17297);
var G__17297__$2 = (cljs.core.truth_((function (){var fexpr__17299 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17299.cljs$core$IFn$_invoke$arity$1 ? fexpr__17299.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17299.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17297__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17297__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17297__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17297__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17300 = top_data;
var G__17300__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17300,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17300);
var G__17300__$2 = (cljs.core.truth_((function (){var fexpr__17301 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17301.cljs$core$IFn$_invoke$arity$1 ? fexpr__17301.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17301.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17300__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17300__$1);
var G__17300__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17300__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17300__$2);
var G__17300__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17300__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17300__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17300__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17300__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17303 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17303,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17303,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17303,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17303,(3),null);
var G__17306 = top_data;
var G__17306__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17306,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17306);
var G__17306__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17306__$1);
var G__17306__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17306__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17306__$2);
var G__17306__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17306__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17306__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17306__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17306__$4;
}

break;
case "execution":
var vec__17307 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17307,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17307,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17307,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17307,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17287_SHARP_){
var or__5045__auto__ = (p1__17287_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__17314 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17314.cljs$core$IFn$_invoke$arity$1 ? fexpr__17314.cljs$core$IFn$_invoke$arity$1(p1__17287_SHARP_) : fexpr__17314.call(null,p1__17287_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__17319 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17319__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17319,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17319);
var G__17319__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17319__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17319__$1);
var G__17319__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17319__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17319__$2);
var G__17319__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17319__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17319__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17319__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17319__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17294__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17322){
var map__17323 = p__17322;
var map__17323__$1 = cljs.core.__destructure_map(map__17323);
var triage_data = map__17323__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__17324 = phase;
var G__17324__$1 = (((G__17324 instanceof cljs.core.Keyword))?G__17324.fqn:null);
switch (G__17324__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17326 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17327 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17328 = loc;
var G__17329 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17330_17456 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17331_17457 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17332_17458 = true;
var _STAR_print_fn_STAR__temp_val__17333_17459 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17332_17458);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17333_17459);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17320_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17320_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17331_17457);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17330_17456);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17326,G__17327,G__17328,G__17329) : format.call(null,G__17326,G__17327,G__17328,G__17329));

break;
case "macroexpansion":
var G__17334 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17335 = cause_type;
var G__17336 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17337 = loc;
var G__17338 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17334,G__17335,G__17336,G__17337,G__17338) : format.call(null,G__17334,G__17335,G__17336,G__17337,G__17338));

break;
case "compile-syntax-check":
var G__17339 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17340 = cause_type;
var G__17341 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17342 = loc;
var G__17343 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17339,G__17340,G__17341,G__17342,G__17343) : format.call(null,G__17339,G__17340,G__17341,G__17342,G__17343));

break;
case "compilation":
var G__17344 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17345 = cause_type;
var G__17346 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17347 = loc;
var G__17348 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17344,G__17345,G__17346,G__17347,G__17348) : format.call(null,G__17344,G__17345,G__17346,G__17347,G__17348));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17349 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17350 = symbol;
var G__17351 = loc;
var G__17352 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17353_17464 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17354_17465 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17355_17466 = true;
var _STAR_print_fn_STAR__temp_val__17356_17467 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17355_17466);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17356_17467);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17321_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17321_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17354_17465);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17353_17464);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17349,G__17350,G__17351,G__17352) : format.call(null,G__17349,G__17350,G__17351,G__17352));
} else {
var G__17358 = "Execution error%s at %s(%s).\n%s\n";
var G__17359 = cause_type;
var G__17360 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17361 = loc;
var G__17362 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17358,G__17359,G__17360,G__17361,G__17362) : format.call(null,G__17358,G__17359,G__17360,G__17361,G__17362));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17324__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
