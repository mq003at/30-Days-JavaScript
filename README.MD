# 🎯 Project 26: Stripe Along Navigation 🥁

Today we are in again for another advanced design technique. Our problem is to make a drop down section for the menus. In React, you can have something like <LinkedList> but what about plain HTML?

So, the plan to do this is simple. We just want another dynamic div that will change its properties depending on the element we are hovering on. First we can get our current element using function .getBoundingClientRect() and we can use .setProperty() to change the CSS properties from JS.

