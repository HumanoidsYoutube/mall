function element(inner, thetype, theid) {
var title = document.createElement(thetype.toUpperCase());
title.innerHTML = inner;
title.id = theid;
document.body.appendChild(title);
}
function update(id, inner) {
    document.getElementById(id).innerHTML = inner;
}
function openNav() {
  document.getElementById("nav").style.width = "20%";
  document.getElementById("full").style.marginLeft = "20%";
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
  document.getElementById("full").style.marginLeft= "0";
}
function about() {
    closeNav()
    update('title', 'The Mall | About')
    element('Welcome to the mall! Hope you enjoy!', 'p', 'abouttext1')

    //https://disboard.org/server/784604457320316989