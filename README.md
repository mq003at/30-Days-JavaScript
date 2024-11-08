
# 🎯 Project 20: Speech Detection 🥁

The core of this project is to ultilizing SpeechRecognition API and using it to detect our speech, then turning it into text messages.

First, we need to make SpeechRecognition compatible. We can do that by using || operator to assign SpeechRecognition object depending on the browser of the user (old browser like old version of Chrome or IE will use webkitSpeechRecognition). Then, we change interimResults to true so that it will capture our speech in real-time, and lang to the language library that we will use ('en-US' this time).

Then, we make the speechRecognition goes into continuous loop for continuous detection with 'end' event. We also add another eventListener to 'result' event so that when the API captures something, it will run the codes to extract the text and append the captured text into our HTML.

Lastly, Wesbos has some fun with it by checking if the text includes some words and he will replace those words with something else. This is very useful when you need to check for profanities in speech detection system.

Result:

![image](https://github.com/user-attachments/assets/e0b2d1f1-11bf-4ee4-a128-66ca8f86a4a6)
![image](https://github.com/user-attachments/assets/f49d826a-8769-4f43-96cd-abc4fe8c11d2)
