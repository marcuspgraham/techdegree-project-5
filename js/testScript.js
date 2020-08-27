
//Create a function
function filter() {
    
    //Declare a variable that will get my images
    let input = document.getElementById('search');
    let filterValue = input.value.toUpperCase();
    let images = document.getElementsByTagName('photo');

    //Loop through all my images
    //Look for a particular attribute on each image
    //If an image has that attribute, show it, if not, do not show it.
    for(i=0; i<images.length; i++) {
        var a = images[i].getElementsByTagName('photo')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            images[i].style.display ="";
        }else {
            images[i].style.display ="none";
        }
    }
}

