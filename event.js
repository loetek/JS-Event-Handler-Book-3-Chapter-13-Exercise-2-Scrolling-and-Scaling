const audrey = document.getElementById("audrey");
const output = '';
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function (event) {

    let posY = window.scrollY;
    audrey.style.width = window.scrollY;
    console.log(posY);
   

    
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

    

    /*  
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})