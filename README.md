# Signature Verification System using Siamese Network and YOLO

## Overview
This project focuses on building an **Offline Signature Verification System** that utilizes a **Siamese Neural Network** to authenticate signatures and **YOLOv8** to extract signatures from documents. The system automates the verification process, which is often manual, time-consuming, and prone to error.

The web app is built using **React** for the frontend and **Node.js** for the backend, offering a user-friendly interface for uploading documents and viewing verification results.

## Features
- **Signature Extraction**: Signature detection and extraction using the YOLOv8 model.
- **Signature Verification**: A Siamese Network model differentiates between genuine and forged signatures.
- **Web-based Interface**: Easy-to-use interface for uploading documents and displaying verification results.

## Model Architecture
### 1. YOLOv8 for Signature Extraction
- The YOLOv8 model was chosen after comparing it with YOLOv5, with YOLOv8m showing superior performance.
- Metrics tracked during training include box loss, classification loss, precision, recall, and mAP, with YOLOv8m achieving perfect signature detection in testing.

### 2. Siamese Network for Signature Verification
- The model was trained on both a primary dataset and the CEDAR dataset.
- Outperformed state-of-the-art methods on the CEDAR dataset, with strong accuracy and balanced precision-recall results.

## Results
- **YOLOv8 Performance**: Achieved perfect signature extraction on test images.
- **Siamese Network Performance**:
  - **Primary Dataset**: Accuracy: 74.14%, Precision: 74.36%, Recall: 85.29%.
  - **CEDAR Dataset**: Accuracy: 85.41%, Precision: 92.30%, Recall: 75.00%.
  - Precision-recall curves indicate a balanced approach to identifying genuine signatures while minimizing false positives and negatives.

User Interface
![image](https://github.com/user-attachments/assets/3a3b70d1-1e5a-42be-8b0c-51a16bfd2025)

Confusion Matrix 
![image](https://github.com/user-attachments/assets/e1a2942a-b2ad-4c7e-a07a-cd3373a913c5)



## Training Hyperparameters
| Hyperparameter       | Value           |
|----------------------|-----------------|
| Learning Rate        | 0.0001          |
| Batch Size           | 16              |
| Number of Epochs     | 20              |
| Optimizer            | Adam            |
| Loss Function        | Binary Cross Entropy |

## Setup

1. Clone the repo

```bash
  git clone https://github.com/Sujan-Koirala021/Signature-Verification-System
```

2. Install necessary packages

go to .../server>
```
npm install
```
go to .../client>

```
npm install
```

3. Starting the application

go to .../server> -> starts at 3000 port
```
npm start
```


go to .../client> -> starts at 3001 port

```
npm start
```

## Conclusion
This project demonstrates a successful implementation of machine learning for offline signature verification. By combining **YOLO** for signature extraction and a **Siamese Neural Network** for verification, the system provides a robust solution for detecting forged signatures with real-world applicability.
