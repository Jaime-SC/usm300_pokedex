
tinymce.init({
    selector: '#descripcion-txt',
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
const pokemones = [];  //Definir Arreglo  
const cargarTabla = ()=>{
  
  //1. Obtener una referencia a la tabla
  let tbody = document.querySelector("#tbody-tabla");
  tbody.innerHTML = "";
  //2. Recorrer la lista de Pokemon
  for(let i=0; i < pokemones.length; ++i){
    let p = pokemones[i];
    //3. Por cada pokemon generar fila de la tabla (tr)
    let tr = document.createElement("tr");
    //4. por cada atributo generar un td de la tabla
    let tdNro = document.createElement("td");
    let tdNombre = document.createElement("td");
    let tdTipo = document.createElement("td");
    let tdDescripcion = document.createElement("td");
    let tdAcciones = document.createElement("td");
    
    //Definir lo que va en la tabla
    tdNro.innerText = i + 1;
    tdNombre.innerText = i + p.nombre;
    //TODO: EL TIPO TIENE QUE SER UN ICONO
    let tipo = document.createElement("i");
    if(tipo == "1"){
      //tipo planta <i class="fas fa-cannabis"></i>
      tipo.classList.add("fas", "fa.leaf", "text-success", "fa-3x");
    }else if(p.tipo =="2"){
      //tipo fuego <i class="fas fa-fire"></i>
      tipo.classList.add("fas, fa-fire", "text-danger", "fa-3x")
    }else if(p.tipo == "3"){
      //tipo electrico <i class="fas fa-bolt"></i>
      tipo.classList.add("fas, fa-bolt", "text-warning", "fa-3x")
    }else if(p.tipo == "4"){
      //tipo agua <i class="fas fa-tint"></i>
      tipo.classList.add("fas, fa-tint", "text-pirmary", "fa-3x")

    }else {
      tipo.classList.add("fas","fa-bullseye", "text-info", "fa-3x")
    }
    tdTipo.appendChild(tipo);
    //TODO: ARREGLAR LA DESCRIPCION
    tdDescripcion.innerHTML = p.descripcion;
    //Todo: Que hago con las acciones!
    //5. agregar los td al tr
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);
    //6. Agregar el tr a la tabla
    tbody.appendChild(tr);
  }

}

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    let legendario = document.querySelector("#legendario-si").checked;
    let descripcion = tinymce.get("descripcion-txt").getContent(); // Solo para TinyMce
    // Crea un objeto
    let pokemon = {};
    // Crea un atributo del objeto
    pokemon.nombre = nombre;
    pokemon.tipo = tipo;
    pokemon.lengendario = legendario;
    pokemon.descripcion = descripcion;

    pokemones.push(pokemon);
    cargarTabla();
    Swal.fire("Resultado Exitoso!", "Pokemon registrado", "Info");

});