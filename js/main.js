window.onload = setTableofContents => {
    console.log("wyatt")
    let list = document.getElementById("ToC");
    
    const links = [
        {
          label: "Week1 notes",
          url: "week1/index.html"
        },
        {
          label: "Week2 notes",
          url: "week1/index.html"
        }
      ]

    links.forEach(element => {

        // Create new Elements
        let li = document.createElement("li");
        let a = document.createElement("a");
        
        // Add the stuffing
        a.href = element.url;
        a.textContent = element.label;

        // append the children
        li.appendChild(a);
        list.appendChild(li)

        console.log("it worked")
        
    });
      
}
