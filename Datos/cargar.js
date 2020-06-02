function CargarFrutas() {
    contenido.innerHTML = '<tr><th>IdProducto</th><th>Nombre</th><th>Proveedor/th></tr>';

    let peticion = new XMLHttpRequest();
	peticion.open('GET', 'listar.php');

	peticion.onload = function(){
		let consulta = JSON.parse(peticion.responseText);
		contenido.innerHTML='';
		for(var i = 0; i < consulta.length; i++){
		  contenido.innerHTML +=  ` 
          <tr>
          <th>${consulta[i].IdProducto}</th>
          <td>${consulta[i].Nombre}</td>
          <td>${consulta[i].Proveedor}</td>
          </tr>
          `
		 }
		
		
    }
    peticion.send();
}