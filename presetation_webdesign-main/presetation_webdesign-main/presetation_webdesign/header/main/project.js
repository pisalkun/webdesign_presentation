
function makeResponsive() {
  if (window.innerWidth < 600) {
    const div = document.getElementById("myElement");
    const button = document.createElement("button");

    button.textContent = div.textContent;
    button.id = "myElement";
    button.onclick = sayHello;

    div.replaceWith(button);
  }
}

makeResponsive();
window.onresize = makeResponsive;
