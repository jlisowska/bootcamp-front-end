//console.log(document); //whole page
//console.log(document.documentElement); //main element of document (root) - html
//console.log(document.body); //body
//console.log(document.head); //head
//console.log(document.querySelector("script")); //selector
//console.log(window); //browser window d

// ------------------------------------------- finding elements ------------------------------------------------ 
/*
var byId = document.getElementById("par-first");
console.log(byId);

var byClass = document.getElementsByClassName("link"); //result is collection!!! we can get elements of collection similar like in array
console.log(byClass);
console.log(byClass[1]);


//forEach nie działa dla kolekcji !!!!!!
//byClass.forEach(function(item){
//    console.log(item);
//});

// ---- można obejść problem destrukturyzując kolekcję do tablicy -------

//[...byClass].forEach(function(item){
//    console.log(item);
//});

for (var i = 0; i <byClass.length; i++) {
   console.log(byClass[i]);
}

var byTag = document.getElementsByTagName("a");
console.log(byTag); //result is collection!!! we can get elements of collection similar like in array

//querySelector daje nam dowolność co pobieramy dlatego tu trzeba precyzować czy pobieramy (!!!!): ".klasa" czy id "#id" czy zwykly tag

var qsById = document.querySelector("#par-second");
console.log(qsById);

//querySelectorAll

var qsByClass = document.querySelectorAll(".superlink");
console.log(qsByClass);

//for each działa dla nodeList!!!!!!!!
//qsByClass.forEach(function(item) {
//    console.log(item);
//})

*/

//--------------------------------------- relation in nodes ------------------------------------
/*

var firstDiv = document.getElementById("par-first");
console.log(firstDiv);

var parentOfFirstDiv = firstDiv.parentElement; //parent of node
console.log(parentOfFirstDiv);

var childsOfSection = parentOfFirstDiv.childNodes; // every child, comments, text, white spaces
var singleChildOfSection = parentOfFirstDiv.childNodes[1]; //single childe alternative version: childsOfSection[1]
console.log(singleChildOfSection);

var htmlChildsOfSection = parentOfFirstDiv.children; // only html elements, whithout white spaces or comments
console.log(htmlChildsOfSection);

var firstChildOfSection = parentOfFirstDiv.firstChild; // returns white space between <section> and <header> !!!! elements, comments, white spaces
console.log(firstChildOfSection);

var firstHtmlChildOfSection = parentOfFirstDiv.firstElementChild; // returns <header> !!!!! only elements whithout white spaces or comments
console.log(firstHtmlChildOfSection); 

var lastHtmlChildOfSection = parentOfFirstDiv.lastElementChild; //only elements whithout white spaces or comments alternative: lastChild returns white spaces, comments elements
console.log(lastHtmlChildOfSection);

//siblings
var link = document.querySelector("#par-first .link"); //we can chose some elements like in css - selectors in css 
console.log(link);

var linkPreviousSibling = link.previousElementSibling; // or previousSibling/similar like above
console.log(linkPreviousSibling);

var linkNextSibling = link.nextElementSibling; // or previousSibling/similar like above
console.log(linkNextSibling);

parentOfFirstDiv.childNodes.forEach(function(item) {
                                        if(item.nodeType == 1) {
                                            console.log(item); 
                                        }
                                    });
 */

//---------------------------------------------- creating nodes -------------------------------------------------------
/*
var output = document.getElementById("output");
var newElement = document.createElement("p"); //creating new element
newElement.setAttribute("id", "new-element"); // one way to set attribute of element
newElement.className = "new-class"; //another way to set attribute of element
var elementContent = document.createTextNode("Paragraph content");


newElement.appendChild(elementContent); //adding content to paragraph
output.appendChild(newElement); //adding parapgraph in chosen element of html
console.log(output);

//alternative version of creating elements

var newElement2 = document.createElement("button");
newElement2.innerHTML = "Zawartość buttona";
output.appendChild(newElement2);

// another alternative versio of creating elements
output.innerHTML = "<h4>Nagłówek<h4>"; //innerHTML, textContent
*/

// -------------- deleting elements --------------------------
/*
// always we should first get parent!
var parent = document.getElementById("par-first");
var paragraph = parent.firstElementChild;
parent.removeChild(paragraph);
parent.removeAttribute("id");
parent.removeChild(document.getElementById("output"));

//delete parent from its parent
//parent.parentElement.removeChild(parent);

var anotherParent = document.getElementById("par-second");
var newH6 = document.createElement("h6");
newH6.innerText = "Content of h6"; 
anotherParent.insertBefore(newH6, anotherParent.firstElementChild); // always on parent
console.log(anotherParent);

var title = document.getElementsByTagName("h1")[0];
console.log(title.innerHTML); //outerHTML returns whole tag! , interpretuje znaczniki
console.log(title.innerText); //plaintext, nie widzi znaczników
//console.log(title.outerHTML);
console.log(title.textContent); //zachowuje formatowanie, nie widzi znaczników
*/


// --------------------------- changing DOM elements ----------------------------------------
/*
var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
    //console.log(links[i].href);
    //console.log(links[i].className);
    
    (i % 2 == 0) ? links[i].classList.add("decor-link") : (links[i].style.color = "red", links[i].style.textDecoration = "none");
}
*/