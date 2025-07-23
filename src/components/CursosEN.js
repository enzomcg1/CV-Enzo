import React from 'react';

const Courses = () => (
  <section className="mb-6">
    <h3 className="section-title">Courses & Certifications</h3>
    <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
      <li style={{ marginBottom: 'var(--spacing-1)' }}><strong>Full Stack Web Development Bootcamp (MERN)</strong> – Certificate obtained</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}><strong>Basic Programming Course - Platzi</strong> – Certificate obtained</li>
    </ul>
  </section>
);

export default Courses; 