
# 🎯 Project 12: Key Sequence 🥁

If we decode the problem bit by bit, we can see that it is very easy to do. First, we need a secret string, and a variable to record button press. If the variable is equal to the secret string, then the secret is triggered. Easy.

Now, when I look at Wesbos' code, I know why he thinks this is harder than the HTML player and put this behind. He overthinks about the problem so much. He uses array and then splice() to manipulate it so that it will fit the size every time the user inputs stuff in. Because of this thinking, he has to splice in reverse and complicates the project. For me? It's doable without array. By using slice(), we can remove the first character of the string without the need to touch any array stuff. And for people who still wants to use array, I suggest you use shift() instead of slice() for better code execution and less complication. 

Result:

![image](https://github.com/user-attachments/assets/0ca2b97c-095f-410e-b16b-eae488630fc4)
![image](https://github.com/user-attachments/assets/40ffdce9-5345-4c76-af9a-036c886bc4a3)
![image](https://github.com/user-attachments/assets/ccbed8e5-81a9-4d65-be93-9ae00eb5e8dc)
