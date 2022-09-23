/* Esta seccion nos despliega el nav (El boton de menu en dispositivos moviles) */

document.querySelector(".botones-menu").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

/* Esta funcion nos valida su existen campos vacios y no deja avanzar hasta que no se rellenen o completen 
dichos campos */

function validarCamposVacios() {
  if (!document.getElementById("Nombre").value) {
    console.log('Debe rellenar el campo de "Nombre"');
    return false;
  } else if (!document.getElementById("Apellidos").value) {
    console.log('Debe rellenar el campo de "Apellido"');
    return false;
  } else if (
    !document.getElementById("Masculino").checked &&
    !document.getElementById("Femenino").checked &&
    !document.getElementById("Otro").checked
  ) {
    console.log("Debe seleccionar un sexo");
    return false;
  } else if (!document.getElementById("Email").value) {
    console.log('Debe rellenar el campo de "Correo"');
    return false;
  } else if (!document.getElementById("Asunto").value) {
    console.log('Debe rellenar el campo de "Asunto"');
    return false;
  } else if (!document.getElementById("Mensaje").value) {
    console.log('Debe rellenar el campo de "Mensaje"');
    return false;
  }
  /* Al validar que todos los campos se encuentren llenos correctamente se procede a ejecutar la función 
  de abajo "validarCamposDelUsuario" */
  validarCamposDelUsuario();
}

/* Esta funcion nos valida y muestra la informacion ingresada por el usuario */

function validarCamposDelUsuario() {
  var seleccion = "";

  if (document.getElementById("Masculino").checked == true) {
    seleccion = "Masculino";
  } else if (document.getElementById("Femenino").checked == true) {
    seleccion = "Femenino";
  } else if (document.getElementById("Otro").checked == true) {
    seleccion = "Otro";
  }

  console.log(
    "Datos ingresados: " +
      "\n" +
      "Nombre(s): " +
      document.getElementById("Nombre").value +
      "\n" +
      "Apellido(s): " +
      document.getElementById("Apellidos").value +
      "\n" +
      "Correo: " +
      document.getElementById("Email").value +
      "\n" +
      "Asunto: " +
      document.getElementById("Asunto").value +
      "\n" +
      "Mensaje: " +
      document.getElementById("Mensaje").value +
      "\n" +
      "Genero seleccionado: " +
      seleccion
  );
}

/* Esta funcion se utiliza en el boton de limpiar en el HTML para limpiar todas las casillas del formulario */

function limpiarFormulario() {
  document.getElementById("Nombre").value = "";
  document.getElementById("Apellidos").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Asunto").value = "";
  document.getElementById("Mensaje").value = "";
  document.getElementById("Masculino").checked = false;
  document.getElementById("Femenino").checked = false;
  document.getElementById("Otro").checked = false;
  document.getElementById("rgpd").checked = false;
  document.getElementById("Info").checked = false;
}
