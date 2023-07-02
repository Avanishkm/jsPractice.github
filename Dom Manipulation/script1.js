// DOM Node classes

// console.log(document.body.constructor.name); // HTMLBodyElement

// alert(document.body) // [object HTMLBodyElement];

// instanceof ==> to check the inheritance:

// alert(document.body instanceof HTMLBodyElement); // true
// alert(document.body instanceof HTMLElement); // true
// alert(document.body instanceof Element); // true
// alert(document.body instanceof Node); // true
// alert(document.body instanceof EventTarget); // true

// But for DOM elements they are different:

// console.log(elem) shows the element DOM tree.
// console.dir(elem) shows the element as a DOM object, good to explore its properties.

// Define HTMLInputElement
// The colon ":" means that HTMLInputElement inherits from HTMLElement
// interface HTMLInputElement: HTMLElement {
//     // here go properties and methods of <input> elements
  
//     // "DOMString" means that the value of a property is a string
//     attribute DOMString accept;
//     attribute DOMString alt;
//     attribute DOMString autocomplete;
//     attribute DOMString value;
  
//     // boolean value property (true/false)
//     attribute boolean autofocus;
//     ...
//     // now the method: "void" means that the method returns no value
//     void select();
//     ...
//   }

// The tagName property exists only for Element nodes.
// The nodeName is defined for any Node:
// for elements it means the same as tagName.
// for other node types (text, comment, etc.) it has a string with the node type.


// // for comment
// alert(document.body.firstChild.tagName); // undefined (not an element);
// alert(document.body.firstChild.nodeName); // #comment

// // for document
// alert(document.tagName) // undefined (not an element)
// alert(document.nodeName) // #document


// innerHTML: the contents

// The innerHTML property allows to get the html inside the element as a string.
// So it's one of the most powerful ways to change the page.


// console.log(document.body.innerHTML); //read the current contents
// document.body.innerHTML = 'The new Body!'; //replace it


// document.body.innerHTML = '<b>test'; // forgot to close the tag
// console.log(document.body.innerHTML); // <b>test</b> (fixed)

// Beware: “innerHTML+=” does a full overwrite

// we can append HTML to an element by using elem.innerHTML+="more html".

// chatDiv.innerHTML += "<div>Hello<img src='smile.gif'>!</div>";
// chatDiv.innerHTML += "How goes?";

// elem.innerHTML += "...";
// // is a shorter way to write:
// elem.innerHTML = elem.innerHTML + "..."

// In other words, innerHTML+= does this:
// The old contents is removed.
// The new innerHTML is written instead (a concatenation of the old and the new one).

{/* <div id="elem">Hello <b>World</b></div>

<script>
  alert(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>
</script> */}

// outerHTML

// let div = document.querySelector('div');
// div.outerHTML = '<p>A new element</p>';

// console.log(div.outerHTML);

//The innerHTML property is only valid for element nodes.

{/* <body>
  Hello
  <!-- Comment -->
  <script>
    let text = document.body.firstChild;
    alert(text.data); // Hello

    let comment = text.nextSibling;
    alert(comment.data); // Comment
  </script>
</body> */}

// textContent: pure text

// The textContent provides access to the text inside the element: only text, minus all <tags>.

// console.log(news.textContent);

// Writing to textContent is much more useful, because it allows to write text the “safe way”.

// let name = prompt("What's your name?", "<b>Winnie-the-Pooh!</b>");

// elem1.innerHTML = name; // innerHTML we’ll have it inserted “as HTML”, with all HTML tags.
// elem2.textContent = name; //  textContent we’ll have it inserted “as text”, all symbols are treated literally.


// The “hidden” property:
// The “hidden” attribute and the DOM property specifies whether the element is visible or not.

// Elem.hidden = true;

// elem.textContent = "avanish kumar";

// elem.innerHTML = "<b>bjhbjh jbjhbsa<b>";

// setInterval(() => elem.hidden  = !elem.hidden, 1000); // blinking element some time duration



{/* <input type="text" id="elem" value="value">

<script>
  alert(elem.type); // "text"
  alert(elem.id); // "elem"
  alert(elem.value); // value
</script> */}

// Summary:

// Each DOM node belongs to a certain class. The classes form a hierarchy. The full set of properties and methods come as the result of inheritance.

// nodeType: 
// We can use it to see if a node is a text or an element node. It has a numeric value: 1 for elements,3 for text nodes, and a few others for other node types. Read-only.

// nodeName/tagName:
// For elements, tag name (uppercased unless XML-mode). For non-element nodes nodeName describes what it is. Read-only.

// innerHTML:
// The HTML content of the element. Can be modified.

// outerHTML:
// The full HTML of the element. A write operation into elem.outerHTML does not touch elem itself. Instead it gets replaced with the new HTML in the outer context.

// nodeValue/data:
// The content of a non-element node (text, comment). These two are almost the same, usually we use data. Can be modified.

// textContent:
// The text inside the element: HTML minus all <tags>. Writing into it puts the text inside the element, with all special characters and tags treated exactly as text. Can safely insert user-generated text and protect from unwanted HTML insertions.


// question

// 1. count descendants

// Write the code that for each <li> shows:

// What’s the text inside it (without the subtree)
// The number of nested <li> – all descendants, including the deeply nested ones.

// for(let li of document.querySelectorAll('li')){
//   // get the title from the text node
//   let title = li.firstChild.data;
//   title = title.trim(); // remove extra spaces from ends

//   // get the descendentscount
//   let count = li.getElementsByTagName('li').length;
//   console.log(title + ": " + count);
// }

// 2. What's in the nodeType?

// console.log(document.body.lastChild.nodeType); // 1 element

// At the time of <script> execution the last DOM node is exactly <script>, because the browser did not process the rest of the page yet.


// Tag in comment

let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

console.log(body.firstChild.data); // body

// The content of <body> is replaced with the comment. The comment is <!--BODY-->, because body.tagName == "BODY". As we remember, tagName is always uppercase in HTML.
// The comment is now the only child node, so we get it in body.firstChild.
// The data property of the comment is its contents (inside <!--...-->): "BODY".

// Where's the "document" in the hierarchy?

// Which class does the document belong to?

// What’s its place in the DOM hierarchy?

// Does it inherit from Node or Element, or maybe HTMLElement?

// alert(document); // [object HTMLDocument]
// // or

// alert(document.constructor.name); // HTMLDocument

// So, document is an instance of HTMLDocument class.
// As we know, methods of a class are in the prototype of the constructor. For instance, HTMLDocument.prototype has methods for documents.


console.log(HTMLDocument.prototype.constructor === HTMLDocument); // tconsole.log
console.log(HTMLDocument.prototype.constructor.name); // HTMLDocument
console.log(HTMLDocument.prototype.__proto__.constructor.name); // Document
console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node