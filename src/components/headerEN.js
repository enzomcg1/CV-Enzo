import React from 'react';

const HeaderEN = () => {
  return (
    <header className="text-center mb-6">
      <h1 style={{ fontSize: 'var(--font-size-5xl)', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: 'var(--spacing-2)', letterSpacing: '-0.025em' }}>
        Enzo Gregor
      </h1>
      <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-4)', fontWeight: '500' }}>
        Computer Technician | Junior Web Developer (MERN)
      </h2>
      <p style={{ color: 'var(--color-text-lighter)', fontSize: 'var(--font-size-sm)' }}>
         enzogregor2018@gmail.com <span style={{ margin: '0 var(--spacing-2)' }}>|</span> 0994 351 389 <span style={{ margin: '0 var(--spacing-2)' }}>|</span> Limpio, Paraguay
        <br />
         <a href="https://github.com/enzomcg1" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>GitHub</a> <span style={{ margin: '0 var(--spacing-1)' }}>|</span>
         <a href="https://ergsystem.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>ERGSystem</a>
      </p>
    </header>
  );
};

export default HeaderEN; 