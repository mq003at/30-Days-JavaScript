# 🎯 Project 25: Event Capture 🥁

Today we will learn about new concept, Event Capture. This revolves around how HTML treats its element, especially the nested ones.

When you click on a nested element, the HTML will go from the top down to reach your clicked element, and then it go back up again. So for example, in our today's test, it will go from the outer first, one, then to three, and then it goes back to one as well. Now, in order to deal with this nested behavious, we can use Event Capturing techniques. First, we can declare 'capture' for our function, so that it will skip through the events when it checks from the outside. Then we can also declare once so that the event function will be fired only once, and after firing, the eventListener will be deleted from the system.

