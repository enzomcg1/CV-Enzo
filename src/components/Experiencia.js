import React from 'react';

const Experiencia = () => (
  <section className="mb-6">
    <h3 className="section-title">Experiencia Profesional</h3>

    <div className="section-card">
      <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: 'var(--spacing-2)' }}>
        Desarrollador Web Full Stack (Proyectos Personales y Académicos)
      </h4>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-lighter)', fontWeight: '500', marginBottom: 'var(--spacing-2)' }}>2023 - Actualidad</p>
      <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Desarrollo de aplicaciones MERN como sistemas de gestión de usuarios e inventario, reserva de turnos médicos y gestión de torneos.</li>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Proyecto destacado: <a href="https://ergsystem.netlify.app/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>ERGSystem</a>.</li>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Uso de JWT, subida de imágenes, formularios, MongoDB.</li>
      </ul>
    </div>

    <div className="section-card">
      <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: 'var(--spacing-2)' }}>
        Técnico de soporte y mantenimiento informático (Freelance)
      </h4>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-lighter)', fontWeight: '500', marginBottom: 'var(--spacing-2)' }}>2023 - Actualidad</p>
      <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Mantenimiento de PCs, notebooks e impresoras.</li>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Instalación de redes LAN, routers y cableado estructurado.</li>
      </ul>
    </div>

    <div className="section-card">
      <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: 'var(--spacing-2)' }}>
        Community Manager - Infoprov
      </h4>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-lighter)', fontWeight: '500', marginBottom: 'var(--spacing-2)' }}>Julio 2024 - Diciembre 2024</p>
      <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Gestión de redes sociales y diseño de contenido.</li>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Campañas visuales para software ERP y POS.</li>
      </ul>
    </div>
  </section>
);

export default Experiencia;
