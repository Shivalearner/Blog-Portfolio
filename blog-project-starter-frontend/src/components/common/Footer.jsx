import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-5 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Sblogs</h2>
          <p className="text-sm">Inspiring minds through words.</p>
          <p className="text-sm mt-2">📍 Chennai, India</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm">📞 +91 82484 48937</p>
          <p className="text-sm">📧 sivabalan.jobsearch@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/home" className="hover:text-white">Home</a></li>
            <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
          </ul>
        </div>

      </div>

      {/* Divider & Bottom Note */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white">Sblogs</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
