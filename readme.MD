
# 🎯 Project 23: Speech Synthesis 🥁

In our previous project, we have made a voice recognization applcation using intenal brower's API and the device's microphone. Now, we we do something similar. We will make a Text-to-Speech (TTS) application that can be used to read text out loud. This functonaliy is frequently used nowasdays, due to the need of accessibilities for people with visual impaired.

In order to achieve the goal, we will need to ultilize SpeechSynthesisUtterance, a Web Speech API that represents a speech request. It will contains 2 important things: text content, and information about how to read it (language, pitch and volume). After that, when we call speechSynthesis, a global variable to handle this API, we can make the browser read the text outloud.

But first, let us get the voice library. Since we only use English here, we can extract voice lang includes the string 'en'. Then, when the user chooses the voice pack they want, we can assign it to the Utterance. After that, we can get the options (rate, pitch, etc.) and assign it into specific property as well. At the end, we call speechSynthesis.speak(UtteranceObject) to make it read outloud for us.

