import React from 'react';

const Idiomas = () => (
  <section className="mb-6">
    <h3 className="section-title">Idiomas</h3>
    <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Español: Nativo</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Guaraní: Intermedio</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Inglés: Intermedio (lectura técnica)</li>
    </ul>
  </section>
);

export default Idiomas;
