window.onload = (setTableofContents) => {
  console.log("wyatt");
  let list = document.getElementById("ToC");

  const links = [
    {
      label: "fun code",
      url: "/fun_code",
    },
    {
      label: "Week1",
      url: "/W01/Week1.html",
    },
    {
      label: "Week2",
      url: "/W02/Week2.html",
    },
    {
      label: "Week3",
      url: "/W03/Week3.html",
    },
    {
      label: "Week4",
      url: "/W04/Week4.html",
    },
    {
      label: "Week4_b",
      url: "/W04_2/Week4.html",
    },
    {
      label: "Week5",
      url: "/W05/Week5.html",
    },
    {
      label: "ToDo App1(not working)",
      url: "/Todo_app/todoapp.html",
    },
    {
      label: "ToDo App2(Working)",
      url: "/Todo_app_2/todoapp.html",
    },
  ];

  links.forEach((element) => {
    // Create new Elements
    let li = document.createElement("li");
    let a = document.createElement("a");

    // Add the stuffing
    a.href = element.url;
    a.textContent = element.label;

    // append the children
    li.appendChild(a);
    list.appendChild(li);

    console.log("it worked");
  });
};
