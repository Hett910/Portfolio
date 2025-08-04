import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black border-t border-gray-900 py-8 px-5">
        <div className="max-w-5xl mx-auto text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
