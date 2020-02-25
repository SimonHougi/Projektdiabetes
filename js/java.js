function toggleList(kategori) {
  var kategoriArray = document.getElementsByClassName(kategori);
  for (var i = 0; i < kategoriArray.length; i++)
    {
      kategoriArray[i].classList.toggle("invisible");
    }
}