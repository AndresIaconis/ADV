/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
const carrito = carritoStorage ?? [];

const productos = [
    {id: "1", nombre: "Malbec añejo", precio: 250000, stock: 234, categoria: "importados"},
    {id: "2", nombre: "Rutini", precio: 150000, stock: 568, categoria: "importados"},
    {id: "3", nombre: "El Enemigo", precio: 180000, stock: 23, categoria: "importados"},
    {id: "4", nombre: "El Gran Enemigo", precio: 165000, stock: 110, categoria: "importados"},
    {id: "5", nombre: "Pinot extra", precio: 178000, stock: 10, categoria: "importados"},
    {id: "6", nombre: "Indomito", precio: 110000, stock: 456, categoria: "nacionales"},
    {id: "7", nombre: "Antígono", precio: 800000, stock: 78, categoria: "nacionales"},
    {id: "8", nombre: "Brutal", precio: 250000, stock: 2, categoria: "nacionales"},
    {id: "9", nombre: "Ket", precio: 150000, stock: 234, categoria: "nacionales"},
];

let acumulador = ``;    

productos.forEach((producto) => {
    acumulador += 
    `<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${producto.nombre}</h5>
                                    <!-- Product price-->
                                    $${producto.precio}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <a onclick="agregarAlCarrito(${producto.id})" class="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>  
                    </div>`
});

document.getElementById("card-container").innerHTML = acumulador;

function agregarAlCarrito(id){
    const resultado = productos.find((producto) => producto.id == id); 
    carrito.push(resultado);
    const carritoJSON = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoJSON);
    const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    document.getElementById("carrito-elementos").innerHTML = carrito.length + " | $" + totalCarrito;
};  

function filtradoDeProductos (categoria){    
    return productos.filter((producto) => producto.categoria === categoria); 
}

const categoriaImportados = filtradoDeProductos("importados");
const categoriaNacionales = filtradoDeProductos("nacionales");

console.log(categoriaImportados);
console.log(categoriaNacionales);


