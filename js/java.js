function toggleList(kategori) {
  let kategoriArray = document.getElementsByClassName(kategori);
  for (let i = 0; i < kategoriArray.length; i++)
    {
      kategoriArray[i].classList.toggle("invisible");
    }
}

function myFunction() {
  let x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}