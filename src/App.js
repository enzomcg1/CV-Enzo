import React from 'react';
import Header from './components/header';
import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Cursos from './components/Cursos';
import Habilidades from './components/Habilidades';
import Idiomas from './components/Idiomas';
import Otros from './components/Otros';

function App() {
  const handleDownloadPDF = () => {
    const element = document.querySelector('.card');
    if (!element) {
      alert('No se encontró el contenido para exportar.');
      return;
    }
    import('html2pdf.js').then((html2pdf) => {
      html2pdf.default(element, {
        margin: 0.5,
        filename: 'CV_Enzo_Gregor.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      });
    });
  };

  return (
    <div className="container">
      <button onClick={handleDownloadPDF} style={{margin: '20px', padding: '10px 20px', fontWeight: 'bold', borderRadius: '6px', border: '1px solid #222', background: '#fff', cursor: 'pointer'}}>Descargar CV en PDF</button>
      <div className="card">
        <Header />
        <Perfil />
        <Experiencia />
        <Educacion />
        <Cursos />
        <Habilidades />
        <Idiomas />
        <Otros />
      </div>
    </div>
  );
}

export default App;