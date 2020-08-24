//fonctionnalité 1
let countclickfooter = 0
var footer = document.querySelector('footer');
var onMouseClickFooter = function() {
    countclickfooter += 1
    console.log("je click sur le footer" + countclickfooter);
};
footer.addEventListener("click", onMouseClickFooter, false);

//fonctionnalité 2
var navbartoggler = document.getElementsByClassName("navbar-toggler")[0];
var onMouseClickNavbarToggler = function () {
    document.getElementById("navbarHeader").classList.toggle("collapse");
}
navbartoggler.addEventListener("click", onMouseClickNavbarToggler, false);

//fonctionnalité 3
var first_edit_btn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
var onMouseClickFirstEdit = function () {
    first_edit_btn.className += " btn-danger";
}
first_edit_btn.addEventListener("click", onMouseClickFirstEdit, false);

//fonctionnalité 4
var second_edit_btn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var onMouseClickSecondEdit = function () {
    var x = document.getElementsByClassName("card-text")[1];
    if (x.style[0] === "color") {
        x.style = "";
    } else {
        x.style = "color:Green";
    }
}
second_edit_btn.addEventListener("click", onMouseClickSecondEdit, false);

//fonctionnalité 5
var navbar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
var onMouseClickNavbar = function () {
    var cdn = document.getElementsByTagName("link")[0];
    if (cdn.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
        cdn.removeAttribute('href');
    } else {
        cdn.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    }
}
navbar.addEventListener("dblclick", onMouseClickNavbar, false);


//fonctionnalité 6
const viewcard_btns = Array.from(document.getElementsByClassName("btn btn-sm btn-success"));

for (let n = 0; n < viewcard_btns.length; n++) {
    var viewcard_btn = viewcard_btns[n];
    var onMouseMoveViewCard = function () {
        if (document.getElementsByClassName("card-text")[n].style.display === "none") {
            document.getElementsByClassName("card-text")[n].style.display = "block";
            document.getElementsByClassName("card-img-top")[n].style.width = '100%';
        } else {
            document.getElementsByClassName("card-text")[n].style.display = "none";
            document.getElementsByClassName("card-img-top")[n].style.width = '20%';
        }
        
    }
    viewcard_btn.addEventListener("mousemove", onMouseMoveViewCard);
  }

//fonctionnalité 7
var function_seven = document.getElementsByClassName("btn btn-secondary my-2")[0];
var onMouseClickFunctionSeven = function () {
    // Crée un nouvel élément <span> simple
    var sp1 = document.getElementsByClassName("col-md-4")[5];

    // Obtient une référence à l'élément avant lequel nous voulons insérer
    var sp2 = document.getElementsByClassName("col-md-4")[0];
    // Obtient une référence à l'élément parent
    var parentDiv = document.getElementsByClassName("row")[1];
    console.log(parentDiv);
    // Insère le nouvel élément dans le DOM avant sp2
    parentDiv.insertBefore(sp1, sp2);
}
function_seven.addEventListener("click", onMouseClickFunctionSeven, false);

//fonctionnalité 8 
var function_eight = document.getElementsByClassName("btn btn-primary my-2")[0];
var onMouseClickFunctionEight = function () {
    document.getElementsByClassName("btn btn-primary my-2")[0].removeAttribute('href');

        // Crée un nouvel élément <span> simple
    var sp1 = document.getElementsByClassName("col-md-4")[0];

    // Obtient une référence à l'élément avant lequel nous voulons insérer
    var sp2 = document.getElementsByClassName("col-md-4")[6];
    // Obtient une référence à l'élément parent
    var parentDiv = document.getElementsByClassName("row")[1];
    // Insère le nouvel élément dans le DOM avant sp2
    parentDiv.insertBefore(sp1, sp2);

}
function_eight.addEventListener("click", onMouseClickFunctionEight, false);


//fonctionnalité 9
initial_html = document.getElementsByTagName("main")[0].innerHTML
console.log(initial_html.length);
const function_nine = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0];
console.log(function_nine);
var onMouseSelectFunctionNine = function () {
    console.log("click");
    document.addEventListener('keypress', logKey);
}
function_nine.addEventListener("click", onMouseSelectFunctionNine, false);



function logKey(e) {
    console.log(e.code);
    if (e.code === 'KeyQ'){
        document.getElementsByTagName("main")[0].innerHTML = ('<div class="row"><div class="col-md-4">' + document.getElementsByTagName("main")[0].innerHTML);
    } else if (e.code === 'KeyY'){
        document.getElementsByTagName("main")[0].innerHTML = ('<div class="row"><div class="col-md-4"></div><div class="col-md-4">' + document.getElementsByTagName("main")[0].innerHTML);
    }
    else if (e.code === 'KeyP'){
        document.getElementsByTagName("main")[0].innerHTML = ('<div class="row"><div class="col-md-4"></div><div class="col-md-4"></div><div class="col-md-4">' + document.getElementsByTagName("main")[0].innerHTML);
    }
    else if (e.code === 'KeyB'){
        document.getElementsByTagName("main")[0].innerHTML = initial_html;
    }
}




