window.onload = (setTableofContents) => {
  console.log("wyatt");
  let list = document.getElementById("ToC");

  const links = [
    {
      label: "fun code",
      url: "/Portfolio/fun_code",
    },
    {
      label: "Week1",
      url: "./W01/Week1.html",
    },
    {
      label: "Week2",
      url: "./W02/Week2.html",
    },
    {
      label: "Week3",
      url: "./W03/Week3.html",
    },
    {
      label: "Week4",
      url: "./W04/Week4.html",
    },
    {
      label: "Week4_b",
      url: "./W04_2/Week4.html",
    },
    {
      label: "Week5",
      url: "./W05/Week5.html",
    },
    {
      label: "ToDo App1(not working)",
      url: "./Todo_app/todoapp.html",
    },
    {
      label: "ToDo App2(Working)",
      url: "./Todo_app_2/todoapp.html",
    },
    {
      label: "Week7",
      url: "./W07/Week7.html",
    },
    {
      label: "Week8",
      url: "./W08/Week8.html",
    },
    {
      label: "Week9",
      url: "./W09/Week9.html",
    },
    {
      label: "FINAL (Translator)",
      url: "./Final_Project/final.html",
    },
  ];

  links.forEach((element) => {
    // Create new Elements
    let ul = document.createElement("ul");
    let a = document.createElement("a");

    // Add the stuffing
    a.href = element.url;
    a.textContent = element.label;

    // append the children
    ul.appendChild(a);
    list.appendChild(ul);

    console.log("it worked");
  });
};
