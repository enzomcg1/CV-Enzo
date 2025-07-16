import React from 'react';

const Cursos = () => (
  <section className="mb-6">
    <h3 className="section-title">Cursos y Certificaciones</h3>
    <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
      <li style={{ marginBottom: 'var(--spacing-1)' }}><strong>Bootcamp Desarrollo Web Full Stack MERN</strong> – Certificación obtenida</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}><strong>Curso de Programación Básica - Platzi</strong> – Certificación obtenida</li>
    </ul>
  </section>
);

export default Cursos;
