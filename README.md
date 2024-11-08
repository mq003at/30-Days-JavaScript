
# 🎯 Project 22: Follow Along Links 🥁

This project aims to understand about one specific feature, follow along. We want to have something, like a toolbar or maybe in this case, white background, following our cursor when we hover on top of a link. There will also be an animation moving towards the cursor's destination.

Now, I know what you think. A function on hover to change the background for every links, and another function to handle animation, right? But, if we use element's background, we will not have event delegation, and since the browser has to find the element deep inside whenever we hover, it will be very slow. 

Instead of changing the background of element to white, we will create a new element, and use it to overlaps on the existed ones. Then, whenever our mouse hovers on the link, that separated element will move accordingly. Furthermore, by using getBoundingClientRect(), we can get the coordinates of the current hovered element and move our highlight element accordingly.

Result:

![image](https://github.com/user-attachments/assets/a7b92fac-4ac6-4390-a269-2b0868d20c4a)
![image](https://github.com/user-attachments/assets/5dc9a86d-e6eb-4c6a-acd2-1ebab1223a2b)
