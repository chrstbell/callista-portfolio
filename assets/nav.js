const edge = document.querySelector('.edge');
const rail = document.getElementById('rail');
const backdrop = document.getElementById('backdrop');
const closeBtn = document.getElementById('closeBtn');
const hint = document.getElementById('hint');
const hasHover = window.matchMedia('(hover: hover)').matches;
let pinned = false;

function dismissHint(){ hint.style.animation = 'none'; hint.style.opacity = '0'; }
function hoverOpen(){ if(hasHover) rail.classList.add('open'); }
function hoverClose(){ if(hasHover && !pinned) rail.classList.remove('open'); }
function setPinned(state){
  pinned = state;
  rail.classList.toggle('open', pinned);
  backdrop.classList.toggle('show', pinned);
  dismissHint();
}
edge.addEventListener('mouseenter', hoverOpen);
edge.addEventListener('mouseleave', hoverClose);
rail.addEventListener('mouseenter', hoverOpen);
rail.addEventListener('mouseleave', hoverClose);
edge.addEventListener('click', ()=> setPinned(!pinned));
closeBtn.addEventListener('click', ()=> setPinned(false));
backdrop.addEventListener('click', ()=> setPinned(false));
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') setPinned(false); });
document.querySelectorAll('.rail-list a').forEach(a=> a.addEventListener('click', ()=> setPinned(false)));
