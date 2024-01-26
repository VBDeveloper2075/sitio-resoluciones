const validarCUIL = () => {
  let cuilInput = document.getElementById("cuilInput");
  let cuilMessage = document.getElementById("cuilMessage");
  
  let cuil = cuilInput.value;
  
  if (cuil.length !== 11 || isNaN(cuil)) {
    cuilMessage.style.display = "block";
  } else {
    cuilMessage.style.display = "none";
    // Aquí puedes realizar las acciones adicionales que desees al enviar el formulario
  }
}

const resetearFormulario = () => {
  document.getElementById("cuilInput").value = ""; // Restablecer el valor del input a vacío
  document.getElementById("cuilMessage").style.display = "none"; // Ocultar el mensaje de error
};