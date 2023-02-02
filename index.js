var mini = true;

function toggleSidebar() {
  if (mini) {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    this.mini = true;
  }
}

let backButton;

document.addEventListener("DOMContentLoaded", function() {
  backButton = document.getElementById("back-button");
});

document.addEventListener("DOMContentLoaded", function() {
  
  console.log(backButton);
  if (window.history.length > 1) {
    backButton.classList.remove("hidden");
    backButton.addEventListener("click", function() {
      console.log("back button clicked");
      console.log(window.history.length);
      window.history.back();
  
      console.log(window.history.length);
      console.log("history did not change");
    });
  }
  
});


console.log(window.history.length);

window.addEventListener("popstate", function() {
  
  console.log(backButton);
  console.log("why it not work no? yes? oh it works!");
  if (window.history.length <= 1) {
    backButton.classList.add("hidden");
  }
});
console.log("it yumped over");

