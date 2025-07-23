import React from 'react';

const Experience = () => (
  <section className="mb-6">
    <h3 className="section-title">Professional Experience</h3>

    <div className="section-card">
      <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: 'var(--spacing-2)' }}>
        Full Stack Web Developer (Personal and Academic Projects)
      </h4>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-lighter)', fontWeight: '500', marginBottom: 'var(--spacing-2)' }}>2023 - Present</p>
      <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Development of MERN applications such as user and inventory management systems, medical appointment booking, and tournament management.</li>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Featured project: <a href="https://ergsystem.netlify.app/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>ERGSystem</a>.</li>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Use of JWT, image upload, forms, MongoDB.</li>
      </ul>
    </div>

    <div className="section-card">
      <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: 'var(--spacing-2)' }}>
        IT Support and Maintenance Technician (Freelance)
      </h4>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-lighter)', fontWeight: '500', marginBottom: 'var(--spacing-2)' }}>2023 - Present</p>
      <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Maintenance of PCs, notebooks, and printers.</li>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Installation of LAN networks, routers, and structured cabling.</li>
      </ul>
    </div>

    <div className="section-card">
      <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: 'var(--spacing-2)' }}>
        Community Manager - Infoprov
      </h4>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-lighter)', fontWeight: '500', marginBottom: 'var(--spacing-2)' }}>July 2024 - December 2024</p>
      <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Social media management and content design.</li>
        <li style={{ marginBottom: 'var(--spacing-1)' }}>Visual campaigns for ERP and POS software.</li>
      </ul>
    </div>
  </section>
);

export default Experience; 