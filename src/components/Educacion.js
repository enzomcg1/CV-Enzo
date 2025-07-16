import React from 'react';

const Educacion = () => (
  <section className="mb-6">
    <h3 className="section-title">Educación</h3>
    <div className="section-card" style={{ marginBottom: 'var(--spacing-3)' }}>
      <p style={{ color: 'var(--color-text)', fontWeight: 'bold', marginBottom: 'var(--spacing-1)' }}>Bachiller Técnico en Informática</p>
      <p style={{ color: 'var(--color-text-lighter)', fontSize: 'var(--font-size-sm)' }}>Centro Educativo Ñanderoga | Feb 2021 – Dic 2023</p>
    </div>
    <div className="section-card">
      <p style={{ color: 'var(--color-text)', fontWeight: 'bold', marginBottom: 'var(--spacing-1)' }}>Escuela Primaria</p>
      <p style={{ color: 'var(--color-text-lighter)', fontSize: 'var(--font-size-sm)' }}>Centro Educativo Ñanderoga - La Asunción de María | Feb 2010 – Dic 2020</p>
    </div>
  </section>
);

export default Educacion;
