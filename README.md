
# 🎯 Project 19: Webcam 🥁

Our goal for today is to develop a webcam service on our site, with many different color filters. 

For the camera service, we need to be grant access to camera device. By using navigaator.mediaDevices.getUserMedia(), we can ask for user's permission. Then, if the user allows, we can get the localMediaStream, and this is the source of our webcam. Next, we put it into video as srcObject (createObjectURL is deprecated) and voila, we have our camera working.

Then, in order to change the video's color, first we need to turn it into a canvas. Then, we get the data of every pixels on the canvas with getImageData(), and by manipulating those pixels with for() loops, we can achieve different results. In the section below you can see my image with the greenScreen() turned on.

Result:

![image](https://github.com/user-attachments/assets/eb4bc1c0-ef16-4fb4-8c05-8400def20501)
![image](https://github.com/user-attachments/assets/ca0a2ede-cd45-4f64-8e1b-c2fe72898385)
