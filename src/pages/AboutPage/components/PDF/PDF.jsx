// PDF.js

import React from 'react';

const PDF = () => {
  return (
    <div className="mx-auto py-8 mt-20 text-center">
      <h1 className="text-3xl font-bold mb-4">PROSPECTUS</h1>

      {/* Embedded PDF */}
      <div className="m-auto max-w-screen-md overflow-hidden">
        <object
          data="/TTASL.pdf"
          type="application/pdf"
          width="100%"
          height="600"
        >
          <p>PDF cannot be displayed. Download it <a href="/TTASL.pdf" download>here</a>.</p>
        </object>
      </div>

      {/* Button for downloading the PDF */}
      <a
        href="/TTASL.pdf"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block mt-4"
        download
        style={{ marginTop: "2rem" }}
      >
        Download PDF
      </a>
    </div>
  );
};

export default PDF;
