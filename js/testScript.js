
//    //make sure to name the function based on what it does for readability 
// function gallerySearch() {
//   //again make sure to name variables based on the values they hold 
//   //here you're storing the search input in a variable  
//   var x = document.getElementById("search");
//   //changing the value of the input to lowercase 
//   x.value = x.value.toLowerCase();
//    //you've already created a variable named x so this should cause an error 
//   var x = document.getElementsByTagName("li")[0].getAttribute("class");
//     var str = "Hello world, welcome to the universe.";
//     var n = str.includes.toUpperCase("world");
// // you don't want to have the loop end at 10 it should end when it has gone through each character 
//   for (var i = 0; i < 10; i += 1) {
//     // do something in here
//       //within the for loop you'll want to check if any of the terms match 
//  } if {
//     .style.display = "";
//  } else {
//     .style.display = "none";
//  }
// }

// document.getElementById("search").addEventListener("keyup", myFunction);


// document.getElementById("myUL")


// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }


// input = document.querySelector('search');
// listItems = document.querySelectorAll('li');
// input.addEventListener('search,gallerySearch');

// function gallerySearch() {
//     search = input.value.toLowerCase();


//     listItems.forEach(function(li){
//         text = li.innerHTML.toLowerCase();
//         found = text.indexOf(search);
//         if(search == ''){
//             li.style.display = 'block';
//         }else if(found == -1){
//             li.style.display = 'none';
//         }else {
//             li.style.display = 'block';
//         }
//     })
// }


function filter() {
    
    //Variables
    var filterValue, none, title, toLowerCase, keyup, keyEvent, getAttribute, display, searchEvent, querySelectorAll, links, style, querySelector, value, target, search;

    input = document.getElementById('search');
    let filterValue = input.value.toUppercase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');

    //Loop
    for(i=0; i<li.length; i++) {
        var a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display ="";
        }else {
            li[i].style.display ="none";
        }
    }
}