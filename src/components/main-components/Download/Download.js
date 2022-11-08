import React from 'react';
import './Download.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Download( {data} ) {

  function handleDownload(firstname, lastname) {

    const data = document.getElementById('preview');
    html2canvas(data).then((canvas) => {
      const imgWidth = 210;
      const pageHeight = 285;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      heightLeft -= pageHeight;
      const doc = new jsPDF('p', 'mm', 'a4');
      doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
        heightLeft -= pageHeight;
      }
      doc.save(`${firstname}_${lastname}_CV.pdf`);
    });
  }

      return (
        <button className='downloadBtn' onClick={() => handleDownload(data.personal.firstname, data.personal.lastname)}>
            Generate PDF
        </button>
      )
}

export default Download;