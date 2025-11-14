import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm";
const alertaProyecto = (url) => {
  if (!url) return
  fetch(url) // Awake server
  Swal.fire({
    title: "Aviso importante",
    text: "Este proyecto está actualmente alojado en un servicio gratuito de Render, por lo que no está activo 24/7 y solo se inicia cuando se le solicita información. Debido a esto, está cargando en este momento y puede tardar un poco en estar disponible. Agradezco su comprensión. ¡Muchas gracias!",
    color: "#E19A17",
    background: "#050530",
    grow: "column",
    confirmButtonText: "Aceptar",
  });
};

export default alertaProyecto