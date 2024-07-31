import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer--container">
        <p>&copy; {currentYear} Lase_Clothing. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
