function toggleList(kategori) {
  let kategoriArray = document.getElementsByClassName(kategori);
  for (let i = 0; i < kategoriArray.length; i++)
    {
      kategoriArray[i].classList.toggle("invisible");
    }
}

var burger = document.getElementById("burger");
var cross = document.getElementById("cross");

function myFunction() {
  let x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    burger.style.display = "block"
    cross.style.display = "none"

  } else {
    x.style.display = "block";
    burger.style.display = "none"
    cross.style.display = "block"
  }
}


