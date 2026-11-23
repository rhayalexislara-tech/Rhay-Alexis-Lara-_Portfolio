(function(){
var d=document,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var pre=d.getElementById('pre');setTimeout(function(){pre.classList.add('done')},rm?0:1300);
var prog=d.getElementById('prog');
function sp(){var h=d.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(h>0?scrollY/h:0)+')'}
addEventListener('scroll',sp,{passive:true});sp();
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
d.documentElement.classList.add('hc');
var cur=d.querySelector('.cur'),dot=d.querySelector('.dot'),x=0,y=0,cx=0,cy=0;
addEventListener('pointermove',function(e){x=e.clientX;y=e.clientY;dot.style.transform='translate('+x+'px,'+y+'px)'});
(function f(){cx+=(x-cx)*.18;cy+=(y-cy)*.18;cur.style.transform='translate('+cx+'px,'+cy+'px)';requestAnimationFrame(f)})();
d.addEventListener('pointerover',function(e){cur.classList.toggle('big',!!e.target.closest('a,button,.project,.cert'))});
}
var rv=Array.prototype.slice.call(d.querySelectorAll('section > h2,section > div,.facts li,.hero > *'));
var chars='01<>/{}#$%&*';
function scramble(el){if(rm)return;var t=el.textContent,n=0;var iv=setInterval(function(){n++;
el.textContent=t.split('').map(function(c,i){return c===' '||i<n/2?c:chars[Math.floor(Math.random()*chars.length)]}).join('');
if(n>=t.length*2){clearInterval(iv);el.textContent=t}},30)}
if('IntersectionObserver' in window&&!rm){
rv.forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%4)*70+'ms'});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');
if(e.target.tagName==='H2')scramble(e.target);io.unobserve(e.target)}})},{threshold:0,rootMargin:'0px 0px -8% 0px'});
rv.forEach(function(el){io.observe(el)});
d.querySelectorAll('section > h2').forEach(function(h){h.classList.add('rv');io.observe(h)});
}
/* Cards: pointer events are read on the fixed wrapper (.card-host), never on the moving card,
   so the hover effect can't flicker at the card's border. Only small certificate cards tilt. */
d.querySelectorAll('.card-host').forEach(function(host){
var card=host.firstElementChild,tilt=card.classList.contains('cert')&&!rm,raf=0,ev=null;
function paint(){raf=0;if(!ev)return;var r=host.getBoundingClientRect(),px=(ev.clientX-r.left)/r.width,py=(ev.clientY-r.top)/r.height;
card.style.setProperty('--mx',px*100+'%');card.style.setProperty('--my',py*100+'%');
if(tilt){card.style.setProperty('--rx',((.5-py)*8)+'deg');card.style.setProperty('--ry',((px-.5)*8)+'deg')}}
host.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;ev=e;if(!raf)raf=requestAnimationFrame(paint)});
host.addEventListener('pointerleave',function(){ev=null;card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg')});
});
if(!rm)d.querySelectorAll('.btn').forEach(function(b){
b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.25)+'px,'+((e.clientY-r.top-r.height/2)*.35)+'px)'});
b.addEventListener('pointerleave',function(){b.style.transform=''})});
})();
