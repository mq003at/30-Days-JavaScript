
# 🎯 Project 13: Slide in On Scroll 🥁

This project is much much harder than the previous one. On summary, what we want here is when the user scroll the contents, the images will appear and slide in, and when we continue scrolling, the images will slide out. On paper, this is very simple, but because of how Javascript works, it's more complicated.

In order to do that, we need to get our current position and the event listener on 'scroll', so you can see from the image that what I do. Just like WesBos, I put my those variables inside the event listener and use debounce. Now, WesBos doesn't explain this on his video, but you have to put each of the images' position on variable in this case. Why? Because the first time when you start loading the website, all variables relating to the images will be 0, since image will be loaded last. That's why you have to constantly update your image's position, or use another event listener to attach to the 'load' event. 

Next, I use a different approach than WesBos to handle my task. Instead of going round about, what I did is extracting the position where I should slide the image in, the position where I should slide out and the current position of the bottom of the screen. I think my approach is much easier to understand since it's go right into our objective.

Result:

![image](https://github.com/user-attachments/assets/277753ea-8349-46e1-b6d9-4512ae3be54a)
![image](https://github.com/user-attachments/assets/83843691-db36-47f8-8879-2d835e55b1f0)
![image](https://github.com/user-attachments/assets/5bab2413-d84f-4240-b936-9ffc799baf3b)
