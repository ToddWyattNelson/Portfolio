let name = "Gary Thomas James";
let initials = "";

for (let i = 0; i < name.length; i++) {
  initials += i === 0 || name.charAt(i - 1) === " " ? name.charAt(i) : "";
}
console.log(initials);
initials = name.split(" ").reduce((init, n) => init + n.charAt(0), "");
console.log(initials);
