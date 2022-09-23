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
  validarCamposDelUsuario();
}

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
