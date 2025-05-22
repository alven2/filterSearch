const $search = document.querySelector('#search');
const $lista = document.querySelectorAll('ul li');

$search.addEventListener('input', function() {
    
    const filtro = this.value.toLowerCase();
    
$lista.forEach(function(elemento) {
    
    
    const minus = elemento.textContent.toLowerCase();
    
    if (minus.includes(filtro)) {
        
        elemento.classList.remove('no-coincide')
        
    } else {
        
        elemento.classList.add('no-coincide')
        
    }
})
})