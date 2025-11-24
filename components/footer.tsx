import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy;{new Date().getFullYear()} Mugunthan. All rights reserved.

        <a
          className="ml-1 text-gray-300 hover:text-gray-100"
          href="https://github.com/Mugunthan-1305"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub |
        </a>
        <a
          className="ml-1 text-gray-300 hover:text-gray-100"
          href="https://www.instagram.com/maddx_13/profilecard/?igsh=MTl5Nnc1MzA2ZTdnZg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </small>
    </footer>
  );
}
