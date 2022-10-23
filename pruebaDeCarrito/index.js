
let stockProductos = [
    {id:1, nombre: "Cerveza Corona", precio: 700, cantidad: 1, img: './Imagenes/cerveza corona.webp'},
    {id:2, nombre: "Coca-Cola", precio: 400, cantidad: 1, img: './Imagenes/Coca-cola-Sabor-Original-1-5-Lt-2-245092.webp'},
    {id:3, nombre: "Cepita", precio: 400, cantidad: 1, img: './Imagenes/gaseosas/Cepita.webp'},
    {id:4, nombre: "Vodka Absolute", precio: 2700, cantidad: 1, img: './Imagenes/Aperitivos/vodka.webp'}
]



const contenedorProductos = document.querySelector('.producto-ind')
const contenedorCarrito = document.querySelector('.productosCarrito')
const precioTotal = document.querySelector('#precioTotal')

const menor18 = document.querySelector('#no')



let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto-a')
    div.innerHTML = `
    <div class="info-p">
        <img src="#" alt="${producto.nombre}">
        <p>${producto.nombre}</p>
        <p>$ ${producto.precio}</p>
    </div>
    <div class="input">
        <input type="button" id="agregar${producto.id}" class="agregar1" value="Agregar +1"> 
    </div>  
    `
    contenedorProductos.appendChild(div)

    const boton = document.querySelector(`#agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
        Swal.fire({
            width: '300px',
            background: '#DB7E01', 
            color: '#FFFFFF',
            position: 'top-end',
            icon: 'success' ,
            text: 'Se agrego al carrito',
            showConfirmButton: false,
            timer: 1500
          })
    })
    
})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if(existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } 
    else{
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
    }
actualizarCarrito()
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML =  `
            <p>${prod.nombre}</p>
            <p>Precio: ${prod.precio}</p>
            <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
            <button onclick = "eliminarDelCarrito(${prod.id})" class="botonEliminar">Eliminar</button>
            <hr>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

menor18.addEventListener('click', alertaMenor)

function alertaMenor () {

    Swal.fire({
        icon: 'error',
        title: 'No tienes la edad suficiente',
        
    })
   
}

/* https://www.youtube.com/watch?v=wbf-jBF8YuU */