import React from 'react';

const Languages = () => (
  <section className="mb-6">
    <h3 className="section-title">Languages</h3>
    <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Spanish: Native</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Guarani: Intermediate</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>English: Intermediate (technical reading)</li>
    </ul>
  </section>
);

export default Languages; 