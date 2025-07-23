import React, { useState } from 'react';
import Header from './components/header';
import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Cursos from './components/Cursos';
import Habilidades from './components/Habilidades';
import Idiomas from './components/Idiomas';
import Otros from './components/Otros';
import HeaderEN from './components/headerEN';
import Profile from './components/PerfilEN';
import Experience from './components/ExperienciaEN';
import Education from './components/EducacionEN';
import Courses from './components/CursosEN';
import Skills from './components/HabilidadesEN';
import Languages from './components/IdiomasEN';
import OtherInfo from './components/OtrosEN';

function App() {
  const [lang, setLang] = useState('es');

  const handleDownloadPDF = () => {
    const element = document.querySelector('.card');
    if (!element) {
      alert('No se encontró el contenido para exportar.');
      return;
    }
    import('html2pdf.js').then((html2pdf) => {
      html2pdf.default(element, {
        margin: 0.5,
        filename: lang === 'es' ? 'CV_Enzo_Gregor.pdf' : 'CV_Enzo_Gregor_EN.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      });
    });
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setLang('es')} className="btn" style={{ fontWeight: lang === 'es' ? 'bold' : 'normal' }}>Español</button>
        <button onClick={() => setLang('en')} className="btn" style={{ fontWeight: lang === 'en' ? 'bold' : 'normal' }}>English</button>
        <button onClick={handleDownloadPDF} className="btn">
          {lang === 'es' ? 'Descargar CV en PDF' : 'Download CV in PDF'}
        </button>
      </div>
      <div className="card">
        {lang === 'es' ? <Header /> : <HeaderEN />}
        {lang === 'es' ? <Perfil /> : <Profile />}
        {lang === 'es' ? <Experiencia /> : <Experience />}
        {lang === 'es' ? <Educacion /> : <Education />}
        {lang === 'es' ? <Cursos /> : <Courses />}
        {lang === 'es' ? <Habilidades /> : <Skills />}
        {lang === 'es' ? <Idiomas /> : <Languages />}
        {lang === 'es' ? <Otros /> : <OtherInfo />}
      </div>
    </div>
  );
}

export default App;