let input_textarea = document.getElementById("input_textarea");
let output_textarea = document.getElementById("output_textarea");
let translate_button = document.getElementById("translate");
let language_input = document.getElementById("language_input");
let language_output = document.getElementById("language_output");

translate_button.addEventListener("click", getTranslation);
// translate_button.addEventListener("click", writeText);

// input_textarea.addEventListener("input", writeText);
function writeText() {
  console.log(language_input.value);
  console.log(language_output.value);
}

function getTranslation() {
  console.log("working...");

  let q = input_textarea.value;
  q = q.replace(/\s/g, "%20");

  // fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded",
  //     "accept-encoding": "application/gzip",
  //     "x-rapidapi-key": "18d9ae5e49msh0b916864e1060a7p110e35jsn57633f96b6a2",
  //     "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  //   },
  //   body: {
  //     q: "Hello, world!",
  //     target: "es",
  //     source: "en",
  //   },
  // })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  fetch(
    `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?q=${q}&langpair=${language_input.value}%7C${language_output.value}&de=a%40b.c&onlyprivate=0&mt=1`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "18d9ae5e49msh0b916864e1060a7p110e35jsn57633f96b6a2",
        "x-rapidapi-host":
          "translated-mymemory---translation-memory.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.responseData.translatedText);
      output_textarea.value = data.responseData.translatedText;
    })
    .catch((err) => {
      console.error(err);
    });
}

// ----------------------------------------------------
// save list and load list
// ----------------------------------------------------

const itemList = document.querySelector(".items");

let items = [];

const saveButton = document.getElementById("save");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  addTranslation(input_textarea.value, output_textarea.value);
});

function addTranslation(input_textarea, output_textarea) {
  if (input_textarea !== "" && output_textarea !== "") {
    const item = {
      id: Date.now(),
      input_textarea: input_textarea,
      output_textarea: output_textarea,
      input_language: language_input.value,
      output_language: language_output.value,
    };

    items.push(item);
    addToLocalStorage(items);
  } else {
    console.error("failed to load");
  }
}

function renderItems(Items) {
  // clear the list
  itemList.innerHTML = "";

  // run through each item inside items
  items.forEach(function (item) {
    // check if the item is completed

    const li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("data-key", item.id);

    if (item.completed === true) {
      li.classList.add("checked");
    }

    li.innerHTML = `
            <button class="list_item">${item.input_textarea}</button>
            <button class="delete-button">X</button>
      `;

    itemList.append(li);
  });
}

// add the items to the local storage
function addToLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
  console.log(localStorage);
  renderItems(items);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem("items");
  if (reference) {
    items = JSON.parse(reference);
    renderItems(items);
  }
}

function deleteItem(id) {
  items = items.filter(function (item) {
    return item.id != id;
  });

  // update the localStorage
  addToLocalStorage(items);
}

getFromLocalStorage();

itemList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    deleteItem(event.target.parentElement.getAttribute("data-key"));
  }

  if (event.target.classList.contains("list_item")) {
    loadSave(event.target.parentElement.getAttribute("data-key"));
  }
});

function loadSave(id) {
  let found = items.find((item) => {
    return item.id == id;
  });

  console.log(found);
  input_textarea.value = found.input_textarea;
  output_textarea.value = found.output_textarea;
  language_input.value = found.input_language;
  language_output.value = found.output_language;
}
