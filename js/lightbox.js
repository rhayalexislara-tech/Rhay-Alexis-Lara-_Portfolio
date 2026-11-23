(function(){var lb=document.getElementById('lb'),im=lb.querySelector('img');
document.querySelectorAll('.shots img').forEach(function(a){a.addEventListener('click',function(){im.src=a.src;im.alt=a.alt;lb.classList.add('on')})});
function close(){lb.classList.remove('on')}lb.addEventListener('click',close);addEventListener('keydown',function(e){if(e.key==='Escape')close()});
})();
