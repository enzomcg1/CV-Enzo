import React from 'react';

const Skills = () => (
  <section className="mb-6">
    <h3 className="section-title">Technical Skills</h3>
    <ul style={{ color: 'var(--color-text)', listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', lineHeight: '1.6' }}>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>HTML5, CSS3, JavaScript, React.js</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Node.js, Express.js, MongoDB, Mongoose</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>Git, GitHub, Postman</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>SQL, PHP, Python, C++ (basic)</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>JWT, image upload, React forms</li>
      <li style={{ marginBottom: 'var(--spacing-1)' }}>PC and network maintenance</li>
    </ul>
  </section>
);

export default Skills; 