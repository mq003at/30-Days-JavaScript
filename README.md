
# 🎯 Project 24: Sticky Nav 🥁

Today we are in for another easy project, how to make navigation sticky. Most websites want to have this functionalities, so let's see how to make it. 

First, let's think about how navigation can be stickied. It's position: fixed, right? But what if our navigation bar is under some other elements, like in this case, a banner, then how can we make it sticky? The solution is that you can check for user's scrolling behaviour, and if scrollY (current top location) is greater than the element's offsetTop, we can set 'sticky' to the element so they will be stayed in place. 

