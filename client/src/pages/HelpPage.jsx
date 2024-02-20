import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const HelpPage = () => {
  return (
    <>

        <Navbar/>
        <hr />
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Signature Verification System Help</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">What is Signature Verification?</h2>
          <p className="text-gray-700 leading-relaxed">
            Signature verification is the process of authenticating the identity of a person
            by analyzing and comparing their signature against a known reference signature.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">How does the System Work?</h2>
          <p className="text-gray-700 leading-relaxed">
            The signature verification system works by capturing an image of the signature
            and comparing it with a pre-recorded signature in using siamese network and show simalirity scores beteween them.
          </p>
        </div>
        <div className="mb-4">
          {/* <h2 className="text-xl font-semibold text-gray-700 mb-2">Using the System</h2> */}
          <p className="text-gray-700 leading-relaxed">
          <h1 className="text-xl font-bold mb-4">To verify signature follow the following steps:</h1>
      <ol className="list-decimal pl-6">
        <li className="mb-2">
          <span className="font-bold">Upload genuine signature</span> to "Genuine signature image" section.
        </li>
        <li className="mb-2">
          <span className="font-bold">Upload document or signature image</span> by clicking on the appropriate button in "Signature image to be verified" section. Our model will extract the signature portion from the document for you.
        </li>
        <li className="mb-2">
          Click on the <span className="font-bold">"Verify"</span> button to get results.
        </li>
      </ol>

          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Troubleshooting</h2>
          <p className="text-gray-700 leading-relaxed">
            If you encounter any issues with the signature verification system,
            please refer to the documentation or contact our support team for assistance.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default HelpPage;
