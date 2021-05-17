window.onload = (setTableofContents) => {
  console.log("wyatt");
  let list = document.getElementById("ToC");

  const links = [
    {
      label: "Week1 notes",
      url: "/W01/Week1.html",
    },
    {
      label: "Week2 notes",
      url: "/W02/Week2.html",
    },
    {
      label: "Week3 notes",
      url: "/W03/Week3.html",
    },
    {
      label: "Week4 notes",
      url: "/W04/Week4.html",
    },
    {
      label: "Week5 notes",
      url: "/W05/Week5.html",
    },
    {
      label: "Week6 notes",
      url: "/W06/Week6.html",
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
