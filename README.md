# Object_Detector_PyTorch

A simple, effective tool to detect human presence using a webcam. This project uses Faster RCNN and trained from scratch using PyTorch. This project uses Faster RCNN architecture specifically optimized for detecting objects. It captures real-time video from your webcam and highlights human presence with a bounding box.

The detector follows a straightforward Computer Vision pipeline:

1. Capture: Grabs a frame from the webcam.

2. Transform: Resizes the image to the model's required input size (512 x 512).

3. Inference: The custom PyTorch model (model.pth) processes the image.

4. Display: If the confidence score is above 0.5, a box is drawn around the detected person.
