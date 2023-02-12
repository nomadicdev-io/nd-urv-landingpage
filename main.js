import './style.scss'

window.addEventListener('load', ()=> {
  setTimeout(()=> {
    document.body.classList.add('dom_loaded');

    setTimeout(()=> {
      document.getElementById('loader').remove();
    },600)
  },1000)
})