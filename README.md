# accessible-img-gallery


Thumbnails are clicked and the larger image appears on the screen, with the first image within array displaying on load. User can scroll through the images when respective arrows keys are pressed (left and right so far), and the spacebar has the same behaviour as the right arrow key. This was a bit mind-boggling to get my head around, but after some trial and error, and console.log-ing, it soon made sense.
I have added a title property to the images so that a user can see what the image is supposed to be - (useful for screen readers?).
A media query has been added within CSS so that thumbnails are in a column on smaller screens - new parameters(?) would need to be added to listen for up and down arrowkey presses if I was being fussy!
I had a bit of a struggle with CSS - wanted my #thumbnail-container to be centered on the page but I settled for the current format.
Due to time contraints, I did not include buttons - to be the best of my knowledge so far, I understand that I would add the same function that is used within arrowPress() and attach it to the button's event listener. 
Having looked at MDN documentation, perhaps a switch case may have tidied up my code even more so.
I also didn't use an api to generate random images as I wanted to focus on the functions to be able to navigate through the images using a keyboard. However, the lack of a button means there is no interactive element for the TAB key to hold onto.
A goal is to complete this project with interactive buttons!