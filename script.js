function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menyBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

/*-- darkmode---*/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",()=> {
    body.classList.toggle("dark");
});


var typingEffect = new Typed(".typedtext", {
    strings: ["Editor", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });

  
;
