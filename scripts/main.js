const getElement = (id) => document.getElementById(id);

function showImpressum() {
  const impressum = getElement("impressum");

  impressum.style.display = "flex";
  setTimeout(() => {
    impressum.style.top = "0";
  }, 10);
}

function backImpressum() {
  const impressum = getElement("impressum");

  impressum.style.top = "-100%";
  setTimeout(() => {
    impressum.style.display = "none";
  }, 1000);
}

function showStory() {
  const story = getElement("story");

  story.style.display = "flex";
  setTimeout(() => {
    story.style.left = "0";
  }, 10);
}

function backStory() {
  const story = getElement("story");

  story.style.left = "-100%";
  setTimeout(() => {
    story.style.display = "none";
  }, 1000);
}

function disableStartElements() {
  const elements = ["canvas", "story-impressum", "start-btn", "start-screen"];
  
  elements.forEach((id) => 
    getElement(id).classList.add(id === "canvas" ? "addOpacity" : "opacity"));
  setTimeout(() => {
    elements.slice(1).forEach((id) => (getElement(id).style.display = "none"));
  }, 1000);
}