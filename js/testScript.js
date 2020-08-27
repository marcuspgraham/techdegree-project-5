
function filter() {

    //Declare variables that will get my images
    const searchValue = document.querySelector('#search').value;
    const item = document.querySelectorAll('.gallery a');

    //Loop through all my images
    //Look for a particular attribute on each image
    //If an image has that attribute, show it, if not, do not show it.
    for (let i = 0; i < item.length; i++) {
        if (item[i].getAttribute('title').toLowerCase().includes(searchValue.toLowerCase()) ) {
            item[i].style.display = 'block';
        } else {
            item[i].style.display = 'none';
        }
    }
}

