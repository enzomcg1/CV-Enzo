import React from 'react';

const Education = () => (
  <section className="mb-6">
    <h3 className="section-title">Education</h3>
    <div className="section-card" style={{ marginBottom: 'var(--spacing-3)' }}>
      <p style={{ color: 'var(--color-text)', fontWeight: 'bold', marginBottom: 'var(--spacing-1)' }}>Technical Baccalaureate in Computer Science</p>
      <p style={{ color: 'var(--color-text-lighter)', fontSize: 'var(--font-size-sm)' }}>Centro Educativo Ñanderoga | Feb 2021 – Dec 2023</p>
    </div>
    <div className="section-card" style={{ marginBottom: 'var(--spacing-3)' }}>
      <p style={{ color: 'var(--color-text)', fontWeight: 'bold', marginBottom: 'var(--spacing-1)' }}>Universidad Comunera de Asunción</p>
      <p style={{ color: 'var(--color-text-lighter)', fontSize: 'var(--font-size-sm)' }}>Degree: Systems Analysis | Start: 2025</p>
    </div>
    <div className="section-card">
      <p style={{ color: 'var(--color-text)', fontWeight: 'bold', marginBottom: 'var(--spacing-1)' }}>Primary School</p>
      <p style={{ color: 'var(--color-text-lighter)', fontSize: 'var(--font-size-sm)' }}>Centro Educativo Ñanderoga - La Asunción de María | Feb 2010 – Dec 2020</p>
    </div>
  </section>
);

export default Education; 