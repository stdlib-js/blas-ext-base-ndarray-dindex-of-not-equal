"use strict";var q=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var f=q(function(I,s){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),x=require('@stdlib/ndarray-base-stride/dist'),c=require('@stdlib/ndarray-base-offset/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/ndarray-base-clip-index/dist'),g=require('@stdlib/blas-ext-base-dindex-of-not-equal/dist').ndarray;function p(i){var e,r,v,n,u,a,t;return t=i[0],e=d(i[1]),r=d(i[2]),a=o(t,0),r=m(r,a),r>=a?-1:(a-=r,v=x(t,0),n=c(t)+v*r,u=g(a,e,l(t),v,n),u>=0&&(u+=r),u)}s.exports=p
});var D=f();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
