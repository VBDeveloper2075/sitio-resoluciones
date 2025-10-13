function validarDNI() {
  const dniInput = document.getElementById("dniInput");
  const dniMessage = document.getElementById("dniMessage");
  const resultado = document.getElementById("resultado");

  const dniRaw = (dniInput?.value || "").trim();

  // Validación básica de DNI: solo números, 7 u 8 dígitos
  const esNumerico = /^\d+$/.test(dniRaw);
  if (!esNumerico || dniRaw.length < 7 || dniRaw.length > 8) {
    if (dniMessage) dniMessage.style.display = "block";
    if (resultado) resultado.innerHTML = "";
    return;
  }

  if (dniMessage) dniMessage.style.display = "none";

  // Buscar la resolución correspondiente usando la función del archivo resoluciones.js
  const url = window.buscarResolucionPorDNI && window.buscarResolucionPorDNI(dniRaw);
  if (resultado) {
    if (url) {
      resultado.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">Ver mi resolución</a>`;
    } else {
      resultado.innerHTML = "No se encontró resolución para el DNI ingresado.";
    }
  }
}

function resetearFormulario() {
  const dniInput = document.getElementById("dniInput");
  const dniMessage = document.getElementById("dniMessage");
  const resultado = document.getElementById("resultado");

  if (dniInput) dniInput.value = ""; // Restablecer el valor del input a vacío
  if (dniMessage) dniMessage.style.display = "none"; // Ocultar el mensaje de error
  if (resultado) resultado.innerHTML = ""; // Limpiar resultado
}