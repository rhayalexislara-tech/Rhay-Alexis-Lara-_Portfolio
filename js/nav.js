(function(){var btn=document.getElementById('nav-toggle'),menu=document.getElementById('nav-menu');if(!btn||!menu)return;
function set(open){menu.classList.toggle('open',open);btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Close menu':'Open menu')}
btn.addEventListener('click',function(){set(btn.getAttribute('aria-expanded')!=='true')});
menu.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('open')){set(false);btn.focus()}});
document.addEventListener('click',function(e){if(!e.target.closest('nav'))set(false)});
matchMedia('(min-width:48.01rem)').addEventListener('change',function(){set(false)});
})();
