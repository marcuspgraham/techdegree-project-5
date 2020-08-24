
//Create a function
function filter() {
    
    //Declare a variable that will get my images
    let input = document.getElementById('search');
    let filterValue = input.value.toUpperCase();
    let ul = document.getElementById('myUL');
    let li = ul.getElementsByTagName('li');

    //Loop through all my images
    //Look for a particular attribute on each image
    //If an image has that attribute, show it, if not, do not show it.
    for(i=0; i<li.length; i++) {
        var a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display ="";
        }else {
            li[i].style.display ="none";
        }
    }
}
