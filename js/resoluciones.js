// Configuración de resoluciones
// Cada URL tiene un array de DNIs asociados
window.resolucionesPorEnlace = {
  "https://drive.google.com/file/d/1YXakdLw9LTyrwiehz1l_aI4U3FT6V5BE/view?usp=drive_link": [
    "18252047",
    "14163535", 
    "20051718",
    "22230882",
    "25431573",
    "20684602",
    "26666681",
    "12966214",
    "24061261",
    "12439616",
    "20055826",
    "13501433",
    "21588427",
    "23833653",
    "25871671",
    "18428404",
    "20455423",
    "17304286",
    "24796041",
    "21981482",
    "26229658",
    "17231592"
  ],
  "https://drive.google.com/file/d/1uRcr4YNp4z7rhBN3csuHrxClymkMhyJ6/view?usp=drive_link": [
    "25523186",
    "27919794",
    "28304282", 
    "27966756",
    "26230462",
    "22591053",
    "22060140",
    "21728848"
  ],
  "https://drive.google.com/drive/folders/138dXR8Zu809ih9OJ3WX8x1b5X8xNPx4i?usp=drive_link": [
    "24608650",
    "24753717",
    "18585164",
    "25787340",
    "18023744",
    "22030521",
    "26816394",
    "21681889",
    "12438073",
    "24446927",
    "6409326",
    "22426962",
    "22128435",
    "16689457"
  ]
};

// Función auxiliar para buscar la URL según el DNI
window.buscarResolucionPorDNI = function(dni) {
  for (const [url, dnis] of Object.entries(window.resolucionesPorEnlace)) {
    if (dnis.includes(dni)) {
      return url;
    }
  }
  return null;
};