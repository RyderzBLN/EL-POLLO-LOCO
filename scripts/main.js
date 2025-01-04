function showImpressum() {
  const impressum = document.getElementById("impressum");

  impressum.style.display = "flex";

  setTimeout(function () {
    impressum.style.top = "0";
  }, 10);
}

function backImpressum() {
  const impressum = document.getElementById("impressum");

  impressum.style.top = "-100%";

  setTimeout(function () {
    impressum.style.display = "none";
  }, 1000);
}
