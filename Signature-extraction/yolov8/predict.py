import os
import shutil
from ultralytics import YOLO

# Get the path of the directory where the script is located
script_directory = os.path.dirname(os.path.abspath(__file__))

# Define the path to the YOLOv5 model file
model_path = os.path.join(script_directory, 'best.pt')

# Define the path to the directory containing images
images_directory = os.path.join(os.path.dirname(os.path.dirname(script_directory)), 'server', 'uploads', 'verification')

# Define the path to the destination directory
destination_directory = os.path.join(os.path.dirname(os.path.dirname(script_directory)), 'server', 'runs','detect','predict','crops', 'DLSignature')
# ,'predict','crops', 'DLSignature'
# subdirectories = [d for d in os.listdir(destination_directory) if os.path.isdir(os.path.join(destination_directory, d))]
# removeDir = os.path.join(os.path.dirname(script_directory), 'server', 'runs','detect')
# print("remove dir=",removeDir)
# C:\Users\Dell\Desktop\Minor-Project\Signature-Verification-System\server\runs\detect
# c:\Users\Dell\Desktop\Minor-Project\Signature-Verification-System\Signature-extraction\server\runs\detect
removeDir = os.path.join(os.path.dirname(os.path.dirname(script_directory)), 'server', 'runs','detect')
print("Remove dir path=",removeDir)
if os.path.exists(removeDir):
    print("remove dir=",removeDir)
    shutil.rmtree(removeDir)
# if subdirectories:
#     # Select the last directory
#     last_directory = subdirectories[-1]
    
#     # Construct the path to the crops/DLSignature directory within the last directory
#     destination_directory = os.path.join(destination_directory, last_directory, 'crops', 'DLSignature')


# Check if the destination directory exists, if not, create it
# if not os.path.exists(destination_directory):
#     os.makedirs(destination_directory)

# Check if the model file exists
if not os.path.exists(model_path):
    print(f"Model file '{model_path}' not found.")
    exit()

# Check if the images directory exists
if not os.path.exists(images_directory):
    print(f"Images directory '{images_directory}' not found.")
    exit()

image_files = os.listdir(images_directory)

# Select the last image from the directory
if image_files:
    last_image = image_files[-1]  # Selecting the last image
    image_path = os.path.join(images_directory, last_image)

    # Initialize YOLOv5 model with the specified model file
    model = YOLO(model_path)

    # Perform inference on the selected image and save cropped detections
    results = model(image_path, save=True, save_crop=True)

    # Delete all files from the images directory
    for file in image_files:
        file_path = os.path.join(images_directory, file)
        if os.path.isfile(file_path):
            os.remove(file_path)
    print("All files deleted from the images directory.")

    if os.path.exists(destination_directory):
        for file in os.listdir(destination_directory):
            shutil.move(os.path.join(destination_directory, file),images_directory)

    # print("Destination directory=",destination_directory)
    # shutil.rmtree(os.path.dirname(os.path.dirname(destination_directory)))
    print("All files moved to the destination directory.")

else:
    print("No image files found in the directory.")
