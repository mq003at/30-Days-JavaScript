
# 🎯 Project 18: Reduce 🥁

Our current goal is to extract the data from data nodes and calculate the time based on it. Just like last time, we could use querySelector to put all the data into arrays, then, we can chain map() with reduce() to get the sum of all the videos' durations. 

In here, I just want to note that what Wesbos did with parseFloat() is very risky. He uses a shortcut to convert the minutes and seconds into number, but it is only work because he uses parseFloat(), where it is only allowed to get 1 parameter. If he uses parseInt(), the program will not work. This happens because when the functions can accept more than 1 parameter, it will use other element in the arrays for other parameters, instead of just loop each element.

At the end, instead of using calculation to get the hour and minute, I use Date() instead for faster. Both is good so you guys can decide what to use in your programs.

Result:
![image](https://github.com/user-attachments/assets/f0a0206e-3747-4cdf-bb54-9313ba80a0ea)

