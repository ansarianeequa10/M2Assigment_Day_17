import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Web Team Pvt. Ltd. — Internship</p>
    </footer>
  );
};

export default Footer;
