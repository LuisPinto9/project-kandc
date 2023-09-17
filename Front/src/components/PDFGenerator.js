import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

function PDFGenerator({ lista, nombreLista, multiList }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    let nombre = "";
    let terminacionPdf = "";

    doc.setFontSize(16);
    if (multiList) {
      nombre = "Inventario";
      doc.text(nombre, 10, 10);

      let startY = 20;

      lista.forEach((sublista, index) => {
        const headers = sublista.length > 0 ? Object.keys(sublista[0]) : [];
        const data = sublista.map((item) => Object.values(item));

        // Agregar una separación entre las sublistas
        if (index !== 0) {
          startY += 10; // Espacio entre sublistas
        }

        doc.autoTable({
          startY, // Posición vertical actual
          head: [headers],
          body: data,
          columnWidth: "auto", // Ajustar automáticamente el ancho de las columnas
        });

        // Actualizar la posición vertical para la próxima sublista
        startY = doc.autoTable.previous.finalY + 10; // 10 es el espacio entre tablas
      });

      terminacionPdf = "inventario.pdf";
    } else {
      // Para una sola lista
      nombre = "Inventario de " + nombreLista;
      terminacionPdf = "inventario_" + nombreLista + ".pdf";
      doc.text(nombre, 10, 10);

      const headers = lista.length > 0 ? Object.keys(lista[0]) : [];
      const data = lista.map((item) => Object.values(item));

      doc.autoTable({
        startY: 20,
        head: [headers],
        body: data,
        columnWidth: "auto", // Ajustar automáticamente el ancho de las columnas
      });
    }
    doc.save(terminacionPdf);
  };

  return (
    <div>
      <button
        className="btn button-selection-user link-to d-flex align-items-center justify-content-center"
        onClick={() => {
          generatePDF();
        }}
      >
        <div>
          <i className="bi bi-printer" style={{ fontSize: "2rem" }}></i>
        </div>
      </button>
    </div>
  );
}

export default PDFGenerator;
