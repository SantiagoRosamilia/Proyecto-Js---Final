const botonSi = document.getElementById('Edad-si')
const botonNo = document.getElementById('Edad-no')

let contenidoTotal = document.getElementById('contenido')


botonSi.addEventListener('click', function visto(){
    contenidoTotal.removeAttribute('class', 'contenidonovisible')
    contenidoTotal.setAttribute('class', 'contenidovisible')
}
)
botonNo.addEventListener('click', function noVisto(){
    console.log('No sos mayor')
    contenidoTotal.removeAttribute('class', 'contenidovisible')
    contenidoTotal.setAttribute('class', 'contenidonovisible')
    
})



