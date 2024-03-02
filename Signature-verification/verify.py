import os
import tensorflow as tf
from tensorflow.keras.layers import Layer

def preprocess(file_path):
#     # Read the image from file path
    byte_img = tf.io.read_file(file_path)
    
    # Decode image and handle both PNG and JPG formats
    img = tf.io.decode_image(byte_img, channels=3)
    
    # Convert grayscale to RGB if necessary
    if img.shape[-1] == 1:
        img = tf.image.grayscale_to_rgb(img)
    
    # Resize the image to a common size
    img = tf.image.resize(img, (100, 100))
    
    # Normalize the pixel values to the range [0, 1]
    img = img / 255.0
    
    return img

class L1Dist(Layer):
    #inheritence
    def __init__(self, **kwargs):
        super().__init__()
    
    #distance calculation
    def call(self,input_embedding,validation_embedding):
        return tf.math.abs(input_embedding - validation_embedding)



def predict_signature_match(genuine_folder, verification_folder, model):
    final_prediction = 0
    # Get the latest image from the genuine folder
    genuine_files = sorted([os.path.join(genuine_folder, file) for file in os.listdir(genuine_folder)], key=os.path.getmtime, reverse=True)
    if genuine_files:
        imgA_path = genuine_files[-1]
    else:
        raise FileNotFoundError("No files found in the genuine folder.")
    verification_files = sorted([os.path.join(verification_folder, file) for file in os.listdir(verification_folder)], key=os.path.getmtime, reverse=True)
    if verification_files:
        for imgB_path in verification_files:
            # Set imgB manually to the desired image in the verification folder
#             imgB_path = os.path.join(verification_folder, "original_1_1.png")

            # Preprocess the images
            imgA = preprocess(imgA_path.encode())
            imgB = preprocess(imgB_path.encode())

            # Reshape images to match the expected input shape of the Siamese network
            imgA = tf.reshape(imgA, (1, 100, 100, 3))
            imgB = tf.reshape(imgB, (1, 100, 100, 3))

            # Predict using the model
            predictions = model.predict([imgA, imgB])
            if predictions > final_prediction:
                final_prediction = predictions  # Corrected the assignment here
            print(predictions)
        return 1 if final_prediction >= 0.4 else 0
    else:
        print("No files found in verification folder")
        return 0
    # Return 1 if prediction is greater than 0.5, else return 0

siamese_model_load = tf.keras.models.load_model('siamesemodel.h5',custom_objects={'L1Dist':L1Dist,'BinaryCrossentropy':tf.losses.BinaryCrossentropy})
genuine_path = os.path.join('C:\\', 'Users', 'Dell', 'Desktop', 'Minor-Project', 'Signature-Verification-System', 'server', 'uploads', 'genuine')
verification_path = os.path.join('C:\\', 'Users', 'Dell', 'Desktop', 'Minor-Project', 'Signature-Verification-System', 'server', 'uploads', 'verification')

result = predict_signature_match(genuine_path, verification_path,siamese_model_load)
print("Match" if result == 1 else "Not Match")
# for your model : make (1, 100, 100, 3) in place of (1, 100, 100, 1)


# print("Result=",12)