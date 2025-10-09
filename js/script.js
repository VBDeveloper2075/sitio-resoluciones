// Mapa de DNI -> URL de resolución.
// Reemplaza/actualiza este objeto cuando compartas el JSON de DNIs.
// También puedes definir window.resolucionesPorDni desde otro script y aquí se tomará automáticamente.
const resolucionesPorDni = window.resolucionesPorDni || {};

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

  // Buscar la resolución correspondiente
  const url = resolucionesPorDni[dniRaw];
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