fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productosPanaderiaDiv = document.getElementById('productos-panaderia');
    const productosRotiseriaDiv = document.getElementById('productos-rotiseria');
    const filtrosPanaderiaDiv = document.getElementById('filtros-panaderia');
    const filtrosRotiseriaDiv = document.getElementById('filtros-rotiseria');

    // Crear y mostrar filtros para panadería
    const categoriasPanaderia = Array.from(new Set(data.productos.filter(producto => producto.categoria === 'Panadería').map(producto => producto.subcategoria)));
    categoriasPanaderia.forEach(categoria => {
      const filtro = document.createElement('div');
      filtro.classList.add('filtro');
      filtro.textContent = categoria;
      filtro.onclick = () => filtrarProductos('Panadería',categoria, productosPanaderiaDiv);
      filtrosPanaderiaDiv.appendChild(filtro);
      });
      // Crear y mostrar filtros para rotisería
const categoriasRotiseria = Array.from(new Set(data.productos.filter(producto => producto.categoria === 'Rotisería').map(producto => producto.subcategoria)));
categoriasRotiseria.forEach(categoria => {
  const filtro = document.createElement('div');
  filtro.classList.add('filtro');
  filtro.textContent = categoria;
  filtro.onclick = () => filtrarProductos('Rotisería', categoria, productosRotiseriaDiv);
  filtrosRotiseriaDiv.appendChild(filtro);
});

// Mostrar todos los productos de panadería y rotisería inicialmente
mostrarProductos(data.productos.filter(producto => producto.categoria === 'Panadería'), productosPanaderiaDiv);
mostrarProductos(data.productos.filter(producto => producto.categoria === 'Rotisería'), productosRotiseriaDiv);

function mostrarProductos(productos, productosDiv) {
  // Primero, limpiar los productos existentes
  productosDiv.innerHTML = '';

  // Luego, agregar cada producto
  productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');
    productoDiv.innerHTML = `
      <div class="card">
        <h3 class="nombre-descripcion-producto">${producto.nombre}</h3>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p class="nombre-descripcion-producto">${producto.descripcion}</p>
      </div>
    `;
    productosDiv.appendChild(productoDiv);
  });
}

function filtrarProductos(categoria, subcategoria, productosDiv) {
  const productosFiltrados = data.productos.filter(producto => producto.categoria === categoria && producto.subcategoria === subcategoria);
  mostrarProductos(productosFiltrados, productosDiv);
}
});