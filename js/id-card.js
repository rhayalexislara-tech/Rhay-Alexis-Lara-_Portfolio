(function(){var sw=document.getElementById('idsw'),card=document.getElementById('idcard');if(!sw||!card)return;
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,th=rm?0:.25,om=0,drag=false,last=0,K=.003,D=rm?.9:.988;
function pv(){var r=sw.getBoundingClientRect();return{x:r.left+r.width/2,y:r.top-(r.height?0:0)}}
var px=0,py=0;
card.addEventListener('pointerdown',function(e){drag=true;card.classList.add('drag');card.setPointerCapture(e.pointerId);
var r=sw.getBoundingClientRect(),c=Math.cos(th),s=Math.sin(th);px=r.left+r.width/2+0;py=r.top;
// pivot = top centre of unrotated swing; derive from current offset
px=(r.left+r.right)/2-(-Math.sin(th))*0;py=r.top;pivot();e.preventDefault()});
var pvx=0,pvy=0;
function pivot(){var wr=sw.parentNode.getBoundingClientRect();pvx=wr.left+wr.width/2;pvy=wr.top}
card.addEventListener('pointermove',function(e){if(!drag)return;pivot();
var dx=e.clientX-pvx,dy=Math.max(e.clientY-pvy,60),t=Math.atan2(dx,dy);t=Math.max(-1.2,Math.min(1.2,t));om=t-th;th=t});
function end(){if(!drag)return;drag=false;card.classList.remove('drag')}
card.addEventListener('pointerup',end);card.addEventListener('pointercancel',end);
(function f(){if(!drag){om+=-K*Math.sin(th);om*=D;th+=om}
sw.style.transform='rotate('+(th*180/Math.PI)+'deg)';
card.style.transform='rotateY('+Math.max(-35,Math.min(35,om*-500))+'deg)';
requestAnimationFrame(f)})();
})();
