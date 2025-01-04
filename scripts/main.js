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

function showStory() {
  const story = document.getElementById("story");

  story.style.display = "flex";
  setTimeout(function () {
    story.style.left = "0";
  }, 10);
}

function backStory() {
  const story = document.getElementById("story");

  story.style.left = "-100%";
  setTimeout(function () {
    story.style.display = "none";
  }, 1000);
}

function disableStartElements() {
    const canvas = document.getElementById("canvas");
  const imprintStory = document.getElementById("story-impressum");
  const startButton = document.getElementById("start-btn");
  const startScreen = document.getElementById("start-screen");
canvas.classList.add("addOpacity");
  startButton.classList.add("opacity");
  startScreen.classList.add("opacity");
  imprintStory.classList.add("opacity");
  setTimeout(() => {
    imprintStory.style.display = "none";
    startScreen.style.display = "none";
    startButton.style.display = "none";
  }, 1000);
}
