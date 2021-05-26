// window.addEventListener("load", getFromLocalStroage());

// sets to local storage
function setLocalStorage() {
  localStorage.clear();
  var myNodelist = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    localStorage.setItem(
      `item${i}`,
      myNodelist[i].innerText.replace("\n×", "")
    );
  }
  console.log(localStorage);
}

//gets from local storage
function getFromLocalStroage() {
  for (let i = 0; i < localStorage.length; i++) {
    var li = document.createElement("li");
    inputValue = localStorage.getItem(`item${i}`);
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);

    var span = document.createElement("SPAN");
    var closeMark = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeMark);
    li.appendChild(span);
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = () => {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var closeMark = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(closeMark);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

document.getElementById("all").addEventListener("click", filterALL);
document.getElementById("active").addEventListener("click", filterActive);
document.getElementById("completed").addEventListener("click", filterCompleted);

// filter list
function filterALL() {}
function filterActive() {}
function filterCompleted() {}

// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var closeMark = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(closeMark);
//   myNodelist[i].appendChild(span);
// }
