let input, isCtrlDown;
// let isCtrlDown = false;
window.addEventListener('load', () => { input =  document.querySelector('input[type=search]') })
window.addEventListener( 'keyup', e => { if(e.key == 'Control'){ isCtrlDown = false } })
window.addEventListener('keydown', e => {
  if( e.key == 'Control'){ isCtrlDown = true }
  if( e.key == 'b' && isCtrlDown ){
    const bCl = document.body.classList
    const isClosed = bCl.contains('close')
    !isClosed ? bCl.add('close') : bCl.remove('close');
  }
  if( e.key == 'k' && isCtrlDown ){
    e.preventDefault()
    input === document.activeElement ? input.blur() : input.focus();
  }
  if( e.key == 'Escape' ){
    setTimeout(()=>{ input.blur() }, 1)
  }
})


