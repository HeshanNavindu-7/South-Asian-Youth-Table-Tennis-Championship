// PDF.js

import React from 'react';

const PDF = () => {
  return (
    <div className="mx-auto py-8 mt-40">
      <h1 className="text-3xl font-bold mb-4 ml-52">About Us</h1>
      
      {/* Embedded PDF */}
      <div className="relative m-auto w-10/12" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src="../../Public/TTASL Prospectus 2024 South Asian Youth Championships_SLR.pdf"
          className="absolute top-0 left-0 w-full h-full"
          title="PDF Viewer"
        ></iframe>
      </div>
      {/* Button for downloading the PDF */}
      <a
        href="../../Public/TTASL Prospectus 2024 South Asian Youth Championships_SLR.pdf"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-4 absolute right-40"
        download
        style={{ marginTop: "2rem" }}
      >
        Download PDF
      </a>
    </div>
  );
};

export default PDF;
