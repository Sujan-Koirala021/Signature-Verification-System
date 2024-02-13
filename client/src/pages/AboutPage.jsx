import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <hr />
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">About</h1>
        <hr />
        <h2 className="text-xl font-semibold text-gray-700 mb-2 mt-3">YOLO for Signature Extraction</h2>
        <p className="text-gray-700 mb-4">
        YOLO is a state-of-the-art object detection algorithm known for its real-time performance and accuracy. In the context of signature verification, YOLO can be trained to detect signatures within documents, regardless of their orientation, scale, or placement.
        </p>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Siamese Neural Network for Verification</h2>
        <p className="text-gray-700 mb-4">
        The Siamese neural network is a deep learning architecture designed to compare and measure the similarity between two inputs. In the context of signature verification, a Siamese network can assess whether two signature samples belong to the same individual or not.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mb-2">System Workflow</h2>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>YOLO extracts the signature from the document.</li>
          <li>The extracted signature is passed through the Siamese neural network along with a reference signature.</li>
          <li>The Siamese network computes a similarity score between the extracted signature and the reference signature.</li>
          <li>If the similarity score exceeds a predefined threshold, the signatures are deemed to belong to the same individual; otherwise, they are considered different.</li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-700 mb-2">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><span className="font-semibold">Accuracy:</span> The system achieves high accuracy in signature authentication by combining YOLO for precise signature extraction and a Siamese neural network for robust verification.</li>
          <li><span className="font-semibold">Efficiency:</span> YOLO enables swift signature extraction, while the Siamese network efficiently compares signatures for verification.</li>
          <li><span className="font-semibold">Versatility:</span> The system can adapt to various document types and signature styles, making it suitable for banking, legal, and administrative purposes.</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
