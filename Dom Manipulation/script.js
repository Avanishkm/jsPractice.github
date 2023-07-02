// alert(window.outerHeight);
// alert(window.innerHeight);






// alert(location.href); // show current url

// if(confirm("Go to this url")){
//     location.href = "https://gorest.co.in/public/v2/users"; // redirect the browser to the another url
// }



// ---------------Dom Tree -------------
// change the background color to red
// document.body.style.backgroundColor = "blue";

// setTimeout(() => {
//     document.body.style.backgroundColor = "";
// }, 5000);

// innerHTML - HTML contents of the node.
// offsetWidth - the node width (in pixels)


{/* <html>

<head>
  <script>
    alert( "From HEAD: " + document.body ); // null, there's no <body> yet
  </script>
</head>

<body>

  <script>
    alert( "From BODY: " + document.body ); // HTMLBodyElement, now it exists
  </script>

</body>
</html> */}

// On top

{/* <html> = document.documentElement
The topmost document node is document.documentElement. That’s the DOM node of the <html> tag.
<body> = document.body
Another widely used DOM node is the <body> element – document.body.
<head> = document.head
The <head> tag is available as document.head. */}

// Children: childNodes, firstChild, lastChild



// Dom collection

// for(let node of document.body.childNodes){
//     console.log(node);
// }

// console.log(document.body.childNodes.filter);

// console.log(Array.from(document.body.childNodes).filter); // function

// we can use Array.from to create a “real” array from the collection, if we want array methods:

// for(let prop in document.body.childNodes){
//     alert(prop);
// }

{/* <body> is said to be the “next” or “right” sibling of <head>,
<head> is said to be the “previous” or “left” sibling of <body>. */}


// parent of <body> is <html>
// console.log(document.body.parentNode === document.documentElement); // true
// // after <head> goes <body>
// console.log(document.head.nextSibling); // HTMLBodyElement

// // before <body> goes <head>
// console.log(document.body.previousSibling); // HTMLHeadElement

// alert( document.documentElement.parentNode ); // document
// alert( document.documentElement.parentElement ); // null

// while(elem = elem.parentElement) { // go up till <html>
//     alert( elem );
//   }

// for (let elem of document.body.children) {
//     alert(elem); // DIV, UL, DIV, SCRIPT
//   }

// get td with "two" (first row, second column)
// let td = table.rows[0].cells[1];
// td.style.backgroundColor = "red"; // highlight it


// For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
// For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.


// --------------Dom Children ----------

{/* <html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html> */}

// The <div> DOM node:

// document.body.firstElementChild;
// // or
// document.body.children[0]
// // or (the first node is space, so we take 2nd)
// document.body.childNodes[1];

// The <ul> DOM node:
// document.body.lastElementChild
// // or
// document.body.children[1]

// // The second <li> (with Pete):

// // get <ul>, and then get its last element child
// document.body.lastElementChild.lastElementChild;

// The sibling question :

// If elem – is an arbitrary DOM element node…
// Is it true that elem.lastChild.nextSibling is always null?
// Is it true that elem.children[0].previousSibling is always null ?

// Ans:
// Yes, true. The element elem.lastChild is always the last one, it has no nextSibling.
// No, wrong, because elem.children[0] is the first child among elements. But there may exist non-element nodes before it. So previousSibling may be a text node.
// Please note: for both cases if there are no children, then there will be an error.

// If there are no children, elem.lastChild is null, so we can’t access elem.lastChild.nextSibling. And the collection elem.children is empty (like an empty array []).


// Select all diagonal cells
// td should be the reference to the table cell
// td.style.backgroundColor = 'red';

// practics rectangle color question

// let table = document.body.firstElementChild;
// console.log(table);

// for(let i=0; i<table.rows.length; i++){
//   let row = table.rows[i];
//   console.log(row)
//   row.cells[i+1].style.backgroundColor = 'red';
// }

// document.getElementById or just id

// get the element
// let elem = document.getElementById('elem');

// make the background red

// elem.style.background = 'red';

// let elem = 5;
// alert(elem);

// querySelectorAll

// let element = document.querySelectorAll('ul > li:first-child');

// for(let elem of element){
//   console.log(elem.innerText);
// }

// matches

// for(let elem of document.body.children){
//   if(elem.matches('a[href$="zip"]')){
//     console.log("The archive reference: " +elem.href);
//   }
// }


// closest

// let chapter = document.querySelector('.chapter'); // li

// console.log(chapter.closest('.book')); // ul
// console.log(chapter.closest('.contents')); // Div

// console.log(chapter.closest('h1')); // null (because h1 is not an ancestor);

// get all divs in the document 
// let divs = document.getElementsByTagName('div');

// let inputs = document.getElementsByTagName('input');
// or
// let inputs = table.getElementsByTagName('input');

// for(let input of inputs){
//   console.log(input.value + ': ' + input.checked);
// }

// document.getElementsByTagName('input').value = 5; // doesn't work

// document.getElementsByTagName('input')[0].value = 5; // it's work

// find name attribute
// let formName = document.getElementsByName('my-form')[0];

// // find by class inside the form

// // let articles = form.getElementsByClassName('article');
// // alert(articles.length); // 2 found two elements with class "article"



// console.log(formName);


{/* <div>First div</div>

<script>
  let divs = document.getElementsByTagName('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 2
</script> */}

// Note:
// There is elem.matches(css) to check if elem matches the given CSS selector.
// There is elem.closest(css) to look for the nearest ancestor that matches the given CSS-selector. The elem itself is also checked.

// Question

// Search for element

// The table with id="age-table".
// All label elements inside that table (there should be 3 of them).
// The first td in that table (with the word “Age”).
// The form with name="search".
// The first input in that form.
// The last input in that form.

// 1 . The table with id="age-table"
let table = document.getElementById('age-table');

// All label elements inside that table (there should be 3 of them).
table.getElementsByTagName('label');

//The first td in that table (with the word “Age”).
table.rows[0].cells[0];
// or
table.getElementsByTagName('td')[0];
// or

table.querySelector('td');

// The form with name="search".
document.querySelector('form[name="search"]')

// The first input in that form.
form.getElementsByTagName('input')[0];
// or
form.querySelector('input');

// The last input in that form.
let inputs = form.querySelectorAll('input') // find all inputs
inputs[inputs.length-1] // take the last one;











