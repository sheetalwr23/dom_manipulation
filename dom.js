//examine the document object
// console.dir(document);
// console.dir(document.domain);
// console.dir(document.URL);
// console.dir(document.title);
document.title = "DOM manipulations";
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
//all file tags we get
// console.log(document.all);
//index 10 from all we get here
// console.log(document.all[10]);
// document.all[10].textContent = "hello text changed";
// console.log(document.forms);
var headtit = document.getElementById("header-title");
// headtit.innerText = "hello";
// headtit.textContent = "hello content";
// headtit.style.border = "2px solid black";
// var header = document.getElementById("main-header");
// header.style.borderBottom = "4px solid black";

var items = document.getElementById("add_items");
items.style.color = "green";
items.innerHTML = "<strong>Add items</strong>";

//~~~~~~~~getElementsByClassName
// var list = document.getElementsByClassName("list-group-item");
// console.log(list);
// // list[0].style.fontWeight = "bold";

// list[3].innerHTML = "hello";
// list[2].style.backgroundColor = "green";

// for (let i = 0; i < list.length; i++) {
//   list[i].style.fontWeight = "bold";
// }

//~~~~~~~~~~~~getElementByTagName

var li = document.getElementsByTagName("li");
// console.log(li);
// list[0].style.fontWeight = "bold";

li[3].innerHTML = "hello";
// li[2].style.backgroundColor = "green";

for (let i = 0; i < li.length; i++) {
  li[i].style.fontWeight = "bold";
}

//~~~~~~querrySelector
var input = document.querySelector("input");
// console.log(input);
input.value = "hello world";

var submit = document.querySelector('input[type="submit"]');
submit.value = "send";
// submit.style.backgroundColor = "pink";
//~~~~~~~child member
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

//~~~~Css pseudo selectors
// var secondItem = document.querySelector(".list-group-item:nth-child(1)");
// secondItem.style.backgroundColor = "skyblue";

//~~~~~~~~querrySelectorAll
//~~~~assignmnet 37 to end
var titles = document.querySelectorAll(".title");
titles[0].innerText = "my items";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "red";
//   even[i].style.backgroundColor = "blue";
// }
//~~~~~~~~~~assignment 30 to 37min
var li = document.getElementsByClassName("list-group-item");
li[1].style.backgroundColor = "green";
li[2].style.visibility = "hidden";
