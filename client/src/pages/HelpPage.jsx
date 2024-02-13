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
            and comparing it with a pre-recorded signature in the database using various
            algorithms and techniques.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Using the System</h2>
          <p className="text-gray-700 leading-relaxed">
            To verify a signature, upload an image containing the signature to the system.
            The system will then analyze the signature and provide a verification result
            based on the comparison with the reference signature.
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
