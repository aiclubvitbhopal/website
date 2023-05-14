const edition1 = document.querySelector("#Edition1");
edition1.addEventListener("click",()=>{
    window.location.href = "edition1.html";
});

const edition2 = document.querySelector("#Edition2");
edition2.addEventListener("click",()=>{
    window.location.href = "edition2.html";
});


document.addEventListener("DOMContentLoaded", function () {
    var selLabel = document.querySelector(".selLabel");
    var dropdown = document.querySelector(".dropdown");
    var dropdownListItems = document.querySelectorAll(".dropdown-list li");
    var selectedItem = document.querySelector(".selected-item p span");
  
    selLabel.addEventListener("click", function () {
      dropdown.classList.toggle("active");
    });
  
    dropdownListItems.forEach(function (item) {
      item.addEventListener("click", function () {
        selLabel.textContent = item.textContent;
        dropdown.classList.remove("active");
        selectedItem.textContent = selLabel.textContent;
      });
    });
  });

