import React from 'react';
const Footer = () => {
  const getYear = () => new Date().getFullYear();

  return (
    <div>
      <footer>
        <p> © Copyright {getYear()} damiir </p>
      </footer>
    </div>
  );
};
export default Footer;
