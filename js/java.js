function toggleList(kategori) {
  var kategoriArray = document.getElementsByClassName(kategori);
  for (var i = 0; i < kategoriArray.length; i++)
    {
      kategoriArray[i].classList.toggle("invisible");
    }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
