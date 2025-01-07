/**
 * Gets an element by its ID.
 * @param {string} id - The ID of the element.
 * @returns {HTMLElement} The element with the specified ID.
 */
const getElement = (id) => document.getElementById(id);

/**
 * Shows the impressum section.
 */
function showImpressum() {
  const impressum = getElement("impressum");

  impressum.style.display = "flex";
  setTimeout(() => {
    impressum.style.top = "0";
  }, 10);
}

/**
 * Hides the impressum section.
 */
function backImpressum() {
  const impressum = getElement("impressum");

  impressum.style.top = "-100%";
  setTimeout(() => {
    impressum.style.display = "none";
  }, 1000);
}

/**
 * Shows the story section.
 */
function showStory() {
  const story = getElement("story");

  story.style.display = "flex";
  setTimeout(() => {
    story.style.left = "0";
  }, 10);
}

/**
 * Hides the story section.
 */
function backStory() {
  const story = getElement("story");

  story.style.left = "-100%";
  setTimeout(() => {
    story.style.display = "none";
  }, 1000);
}

/**
 * Disables the start elements.
 */
function disableStartElements() {
  const elements = ["canvas", "story-impressum", "start-btn", "start-screen"];
  
  elements.forEach((id) => 
    getElement(id).classList.add(id === "canvas" ? "addOpacity" : "opacity"));
  setTimeout(() => {
    elements.slice(1).forEach((id) => (getElement(id).style.display = "none"));
  }, 1000);
}

/**
 * Reloads the page.
 */
function reloadPage() {
  location.reload();
}



