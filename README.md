
# 🎯 Project 17: Sort Without Articles 🥁

This time, our goal is sorting a list of bands in alphabetical order, without the articles. This is a very specific requirement so it's not hard to implement. 

First we are already familiar with the .sort() function, so we will use it here. Now, to remove the articles, we will use .replace() with the expression /^(a |an |the )/i to point out which words we want to replace. By placing this function inside the sorting function, we also make sure that the original text will not be replaced. 

Different from Wesbos, instead of using normal comparision, I use localeCompare() for this project. The result will be the same.

Result:

![image](https://github.com/user-attachments/assets/bf40033a-1f9d-4f53-98d0-3ee36f60220e)

![image](https://github.com/user-attachments/assets/a40b612f-2bb4-4b6c-affb-07ff685f892d)
