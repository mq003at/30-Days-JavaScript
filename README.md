
# 🎯 Project 15: LocalStorage 🥁

The main focus of this project is to create a checklist and save them inside localStorage. To do that, we can use localStorage.setItem() to save and localStorage.getItem() to retrieve the list. Easy, right?

However, the important thing is that we need to save the state of individual item inside the List, so, we need to create an object to hold both the text and the check status for localStorage. Therefore, a lot of coders will put onclick events inside each item in the list. Now, this is bad coding because for every eventListener, they have to go up to the DOM Tree, and if there are too many event Listeners, you website will be very slow.

So, in order to fix this, instead of putting Listener inside each item, we will put only 1 listener in the wrapper, and in this case, it's <li> tag. Using .target, we can get the index of the item we want and toggle the check status.

Result:

![image](https://github.com/user-attachments/assets/996a5205-cd39-4294-b1bb-a3f9f25ebc39)
![image](https://github.com/user-attachments/assets/5e2e9c23-9829-4639-b464-22eea7576052)
