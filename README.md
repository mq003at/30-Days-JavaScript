
# 🎯 Project 14: JS-Coppying, or Shallow/Deep Copy 🥁

Unlike C, when you copy an Array or an Object, you will copy their reference instead of making a new one. In Centria, I wasn't taught that so this is what I learnt when I was on multiple projects after graduation. 

In Wesbos' examples, he taught us to use splice() or concat() for Arrays and Object.assign() for objects. However, since I use Reactjs a lot, I would recommend people to use map(x=>x). It works on all situations except when you have an object or functions in the array. In case you have too many stuff in your arrays, I suggest you use Lodash cloneDeep() like Wesbos' advice

