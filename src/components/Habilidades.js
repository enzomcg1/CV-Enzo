import React from 'react';

const Habilidades = () => (
  <section className="mb-6">
    <h3 className="section-title">Habilidades Técnicas</h3>
    <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>HTML5, CSS3, JavaScript, React.js, java, SQL</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Node.js, Express.js, MongoDB, Mongoose, Spring</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Git, GitHub, Postman</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}> PHP, Python, C++ (básico)</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>JWT, API REST, formularios React</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Mantenimiento de PCs y redes</li>
    </ul>
  </section>
);

export default Habilidades;
