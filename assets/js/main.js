/* ------------------------------------------------------------------
   main.js — défilement fluide, compteurs animés, copie de l'email
   Tout est désactivé si l'utilisateur a demandé moins d'animations.
------------------------------------------------------------------ */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var t=document.querySelector(a.getAttribute('href'));
      if(!t)return; e.preventDefault();
      t.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
    });
  });

  if(!reduce){
    document.querySelectorAll('[data-count]').forEach(function(el){
      var end=parseFloat(el.getAttribute('data-count')), sfx=el.getAttribute('data-suffix')||'', t0=null;
      function step(ts){
        if(!t0)t0=ts;
        var k=Math.min((ts-t0)/900,1), e=1-Math.pow(1-k,3);
        el.textContent=Math.round(end*e)+sfx;
        if(k<1)requestAnimationFrame(step);
      }
      el.textContent='0'+sfx;
      setTimeout(function(){requestAnimationFrame(step);},300);
    });
  }

  var btn=document.getElementById('copy');
  btn.addEventListener('click',function(){
    var node=document.getElementById('mail'), txt=node.textContent.trim();
    function flash(m){btn.textContent=m;setTimeout(function(){btn.textContent='Copier';},1600);}
    function select(){
      var r=document.createRange();r.selectNodeContents(node);
      var s=getSelection();s.removeAllRanges();s.addRange(r);flash('Sélectionné');
    }
    try{ navigator.clipboard.writeText(txt).then(function(){flash('Copié');},select); }catch(e){ select(); }
  });
})();
