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

  // Buscar las resoluciones correspondientes usando la función del archivo resoluciones.js
  const urls = window.buscarResolucionPorDNI && window.buscarResolucionPorDNI(dniRaw);
  if (resultado) {
    if (urls && urls.length > 0) {
      if (urls.length === 1) {
        resultado.innerHTML = `<a href="${urls[0]}" target="_blank" rel="noopener noreferrer">Ver mi resolución</a>`;
      } else {
        let enlaces = urls.map((url, index) => 
          `<a href="${url}" target="_blank" rel="noopener noreferrer">Ver resolución ${index + 1}</a>`
        ).join('<br>');
        resultado.innerHTML = `<div>Se encontraron ${urls.length} resoluciones:<br>${enlaces}</div>`;
      }
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